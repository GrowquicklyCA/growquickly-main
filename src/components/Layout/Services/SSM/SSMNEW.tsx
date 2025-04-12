'use client';

import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const slides = [
  {
    title: 'Ad Spending',
    description:
      'In the year 2023, global social media ad spending reached around $213 billion which is anticipated to grow as much as 25% annually.',
    image: '/images/ssm1.webp',
  },
  {
    title: 'ROI',
    description:
      'Businesses that are actively making investments in social media marketing see an average return on investment (ROI) of approximately 30%.',
    image: '/images/smm2.webp',
  },
  {
    title: 'Market Growth',
    description:
      'As of 2023, the global social media marketing market was valued at approximately $16.6 billion and is expected to nearly double and reach around $37.9 billion by the year 2028.',
    image: '/images/smm3.webp',
  },
  {
    title: 'Popular Social Media Platforms',
    description:
      'Facebook, Instagram, LinkedIn, and TikTok are the top platforms for offering worthwhile social media marketing solutions:\n\n- Facebook has about 2.96 billion monthly active users.\n- TikTok has 1 billion active users.\n- LinkedIn serves approximately 900 million professionals worldwide.\n- Instagram has around 2 billion active users.',
    image: '/images/smm4.webp',
  }
];

export default function SocialMediaCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full h-[80vh]">
        <Slider {...settings} className="w-full h-full">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="relative w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute left-10 top-1/2 transform -translate-y-1/2  text-white p-6 rounded-lg max-w-xl">
                <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                <p className="text-lg leading-relaxed whitespace-pre-line">{slide.description}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
