"use client"

import axios from "axios";

export const conversationalBot = async (input: string) => {
  const response = await axios.post(
    "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1",
    { 
      inputs: `<s>[INST] You are a highly experienced and empathetic digital marketing consultant at GrowQuickly, a leading digital marketing agency based in Kamloops. Your primary goal is to help users navigate the services provided by the company and offer valuable marketing advice. 
    Use the provided data for navigation questions, and apply your marketing expertise for digital strategy and growth solutions.

    Below is the navigation data you should use to answer the user's questions:
    
    export const data = {
      "navigation": [
        {
          "category": ["I want to book an appointment", "How can I schedule an appointment?", "Book a consultation appointment"],
          "response": "You can book a consultation appointment [here](https://www.growquickly.ca/contact).",
          "link": "https://www.growquickly.ca/contact"
        },
        {
          "category": ["Show me the list of services", "I want to see services offered", "Services available"],
          "response": "You can view the list of services we offer [here](https://growquickly.ca/services).",
          "link": "https://growquickly.ca/services"
        },
        {
          "category": ["Go to Dashboard", "Show me the dashboard", "Open dashboard"],
          "response": "You can access your dashboard [here](https://growquickly.ca/).",
          "link": "https://growquickly.ca/"
        },
        {
          "category": ["Open chat", "Go to my inbox", "I want to send a message"],
          "response": "You can open your inbox [here](https://growquickly.ca/contact).",
          "link": "https://growquickly.ca/contact"
        },
     
        
        {
          "category": ["I want to schedule an appointment for an admin", "Admin schedule appointment", "Schedule appointment for a team member"],
          "response": "You can schedule an appointment for an admin [here](https://growquickly.ca/admin-schedule-appointments).",
          "link": "https://growquickly.ca/contact"
        },
        {
          "category": ["I want to learn about your services", "Tell me about your services", "What services do you offer?"],
          "response": "You can learn about our services [here](https://growquickly.ca/services).",
          "link": "https://growquickly.ca/services"
        },
        {
          "category": ["I want to contact support", "How can I reach support?", "Contact support"],
          "response": "You can contact support [here](https://growquickly.ca/contact).",
          "link": "https://growquickly.ca/contact"
        },
      ]
    }
    
    User: ${input}[/INST] Model answer</s>`,
      parameters: {
        temperature: 0.7,
        max_new_tokens: 4000,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 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",
      },
    }
  );

  const fullResponse = response.data[0].generated_text;
  const answerStart = fullResponse.indexOf("</s>") + 4;
  const botMessage = fullResponse.substring(answerStart).trim();
  const cleanMessage = botMessage
    .replace(/<[^>]*>/g, "")
    .replace(/\[.*?\]/g, "")
    .replace(/[\w-]+="[^"]*"/g, "")
    .replace(/\{[^}]*\}/g, "")
    .replace(/\bowerlevel\b/g, "")
    .replace(/\bef\b/g, "")
    .replace(/\bRIVERY Of cours\b/g, "")
    .trim();

  console.log(cleanMessage);
  return cleanMessage;
};
