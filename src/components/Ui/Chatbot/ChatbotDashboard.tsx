import { Button } from "../button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Input } from "../input";
import { X, SendHorizontal } from "lucide-react";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { conversationalBot } from "../../../lib/langchain";
import { motion } from "framer-motion"; // Importing framer-motion for animations

interface LayoutProps {
  children: ReactNode;
}

interface MessageProps {
  text: string;
  avatarSrc: string;
  avatarAlt: string;
  time: string;
  isUser?: boolean;
}

const Message: React.FC<MessageProps> = ({
  text,
  avatarSrc,
  avatarAlt,
  time,
  isUser = false,
}) => (
  <>
    <div
      className={`flex gap-3 text-xs tracking-normal leading-5 ${
        isUser ? "self-end" : "self-start"
      }`}
    >
      {!isUser && (
        <div className="flex justify-center items-center w-10 h-10 text-xl text-white bg-sky-300 rounded-full">
          GB
        </div>
      )}
      <div
        className={`grow px-4 py-3.5 rounded w-fit ${
          isUser
            ? "bg-black text-white"
            : "text-black bg-neutral-50 border border-zinc-300"
        }`}
      >
        {text}
      </div>
      {isUser && (
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          width={44}
          height={44}
          className="my-auto w-11"
        />
      )}
    </div>
    <div
      className={`mt-2.5 text-xs text-zinc-800 ${
        isUser ? "self-end mr-14" : "self-start ml-14"
      }`}
    >
      {time}
    </div>
  </>
);

export const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visible, setVisible] = useState(true);
  const [closed, setClosed] = useState(false);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [inputMsg, setInputMsg] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
    setVisible(false);
    setClosed(true);
  };

  const handleVisibleChange = (isVisible: boolean) => {
    if (isVisible && !closed) {
      setVisible(true);
    }
  };

  const handleClose = () => {
    setVisible(false);
    setClosed(true);
  };

  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  };

  const sendMessage = async () => {
    if (!inputMsg.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        text: inputMsg,
        avatarSrc: "/images/botman.svg",
        avatarAlt: "User",
        time: getCurrentTime(),
        isUser: true,
      },
    ]);
    setInputMsg("");

    const response = await conversationalBot(inputMsg);
    setMessages((prev) => [
      ...prev,
      {
        text: response,
        avatarSrc: "",
        avatarAlt: "GrowBot",
        time: getCurrentTime(),
        isUser: false,
      },
    ]);
  };

  const handleOptionClick = (option: string) => {
    setInputMsg(option);
    sendMessage();
    setIsModalVisible(true);
  };

  return (
    <div className="relative">
      {children}
      <div className="fixed bottom-10 w-full flex justify-end items-end right-0 px-12 z-50 sm:px-6 md:px-8">
        <Popover open={visible} onOpenChange={handleVisibleChange}>
          <PopoverTrigger asChild>
            <Image
              src="/images/chat2.png"
              alt="GrowBot"
              width={64}
              height={64}
              className="rounded-full cursor-pointer border-[#8c52ff] border-2"
              onClick={showModal}
            />
          </PopoverTrigger>

          <PopoverContent
            align="start"
            side="top"
            className="bg-[#8c52ff] text-white rounded-xl px-5 py-4 w-auto shadow-lg border-none relative mr-8 mb-2 sm:w-[80%] md:w-auto"
            sideOffset={10}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-[-10px] right-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#8c52ff]"
            />

            <div className="flex justify-between items-start mb-4">
              <h3 className="text-base font-semibold  md:text-lg">
                Need help scaling your business?
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="text-white hover:bg-transparent p-0"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex gap-3 flex-wrap max-lg:flex-col  max-lg:text-center justify-start">
              {["SEO Help", "Run Ads", "Build Funnel", "Website Audit"].map(
                (topic) => (
                  <motion.span
                    key={topic}
                    className="px-4 py-1 border border-white rounded-full text-sm cursor-pointer hover:bg-white hover:text-[#8c52ff] transition"
                    onClick={() => handleOptionClick(topic)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {topic}
                  </motion.span>
                )
              )}
            </div>
          </PopoverContent>
        </Popover>

        <Dialog open={isModalVisible} onOpenChange={setIsModalVisible}>
          <DialogContent className="flex flex-col justify-end w-full sm:w-[90%] md:w-[80%] right-0 z-50">
            <DialogHeader>
              <DialogTitle>GrowBot – Your Growth Companion</DialogTitle>
            </DialogHeader>
            <div className="h-[400px] overflow-y-auto flex flex-col-reverse mb-4">
              <div className="flex flex-col gap-4 px-2">
                {messages.map((message, index) => (
                  <Message key={index} {...message} />
                ))}
              </div>
            </div>
            <div className="flex gap-2 flex-col sm:flex-row">
              <Input
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask GrowBot anything (SEO, Ads, Funnels...)"
              />
              <Button onClick={sendMessage} className="px-3 mt-2 sm:mt-0">
                <SendHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
