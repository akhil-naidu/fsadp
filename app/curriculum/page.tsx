'use client';
import React from 'react';
import Image from 'next/image';
import { ASSET_PREFIX } from '@/lib/constants';
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';

const page = () => {
  const data = [
    {
      week: 1,
      title: 'Network Fundamentals',
      description:
        "In this module, we'll dive deep into the fundamental building blocks of modern networking. Students will learn both theoretical concepts and gain hands-on experience through practical exercises. By the end of this week, participants will have a solid understanding of how data flows through networks and the key protocols that power the internet",
      image: 'network-icon.jpg',
    },
    {
      week: 2,
      title: 'Network Fundamentals',
      description:
        "In this module, we'll dive deep into the fundamental building blocks of modern networking. Students will learn both theoretical concepts and gain hands-on experience through practical exercises. By the end of this week, participants will have a solid understanding of how data flows through networks and the key protocols that power the internet",
      image:
        'https://www.google.com/imgres?q=clipart%20wifi%20symbol&imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fdjvstock%2Fdjvstock1809%2Fdjvstock180910111%2F108458475-wifi-symbol-icon-over-white-background-vector-illustration.jpg&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fphoto_108458475_wifi-symbol-icon-over-white-background-vector-illustration.html&docid=YKFbXStE7BP9qM&tbnid=DHr_rAgrIWXbmM&vet=12ahUKEwjj_IrJgpOLAxVo2DgGHY_mLeUQM3oECC4QAA..i&w=1300&h=1300&hcb=2&ved=2ahUKEwjj_IrJgpOLAxVo2DgGHY_mLeUQM3oECC4QAA',
    },
    {
      week: 3,
      title: 'Network Fundamentals',
      description:
        "In this module, we'll dive deep into the fundamental building blocks of modern networking. Students will learn both theoretical concepts and gain hands-on experience through practical exercises. By the end of this week, participants will have a solid understanding of how data flows through networks and the key protocols that power the internet",
      image:
        'https://www.google.com/imgres?q=clipart%20wifi%20symbol&imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fdjvstock%2Fdjvstock1809%2Fdjvstock180910111%2F108458475-wifi-symbol-icon-over-white-background-vector-illustration.jpg&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fphoto_108458475_wifi-symbol-icon-over-white-background-vector-illustration.html&docid=YKFbXStE7BP9qM&tbnid=DHr_rAgrIWXbmM&vet=12ahUKEwjj_IrJgpOLAxVo2DgGHY_mLeUQM3oECC4QAA..i&w=1300&h=1300&hcb=2&ved=2ahUKEwjj_IrJgpOLAxVo2DgGHY_mLeUQM3oECC4QAA',
    },

    {
      week: 4,
      title: 'Network Fundamentals',
      description:
        "In this module, we'll dive deep into the fundamental building blocks of modern networking. Students will learn both theoretical concepts and gain hands-on experience through practical exercises. By the end of this week, participants will have a solid understanding of how data flows through networks and the key protocols that power the internet",
      image:
        'https://www.google.com/imgres?q=clipart%20wifi%20symbol&imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fdjvstock%2Fdjvstock1809%2Fdjvstock180910111%2F108458475-wifi-symbol-icon-over-white-background-vector-illustration.jpg&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fphoto_108458475_wifi-symbol-icon-over-white-background-vector-illustration.html&docid=YKFbXStE7BP9qM&tbnid=DHr_rAgrIWXbmM&vet=12ahUKEwjj_IrJgpOLAxVo2DgGHY_mLeUQM3oECC4QAA..i&w=1300&h=1300&hcb=2&ved=2ahUKEwjj_IrJgpOLAxVo2DgGHY_mLeUQM3oECC4QAA',
    },
    {
      week: 5,
      title: 'Network Fundamentals',
      description:
        "In this module, we'll dive deep into the fundamental building blocks of modern networking. Students will learn both theoretical concepts and gain hands-on experience through practical exercises. By the end of this week, participants will have a solid understanding of how data flows through networks and the key protocols that power the internet",
      image:
        'https://www.google.com/imgres?q=clipart%20wifi%20symbol&imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fdjvstock%2Fdjvstock1809%2Fdjvstock180910111%2F108458475-wifi-symbol-icon-over-white-background-vector-illustration.jpg&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fphoto_108458475_wifi-symbol-icon-over-white-background-vector-illustration.html&docid=YKFbXStE7BP9qM&tbnid=DHr_rAgrIWXbmM&vet=12ahUKEwjj_IrJgpOLAxVo2DgGHY_mLeUQM3oECC4QAA..i&w=1300&h=1300&hcb=2&ved=2ahUKEwjj_IrJgpOLAxVo2DgGHY_mLeUQM3oECC4QAA',
    },
    {
      week: 6,
      title: 'Network Fundamentals',
      description:
        "In this module, we'll dive deep into the fundamental building blocks of modern networking. Students will learn both theoretical concepts and gain hands-on experience through practical exercises. By the end of this week, participants will have a solid understanding of how data flows through networks and the key protocols that power the internet",
      image:
        'https://www.google.com/imgres?q=clipart%20wifi%20symbol&imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fdjvstock%2Fdjvstock1809%2Fdjvstock180910111%2F108458475-wifi-symbol-icon-over-white-background-vector-illustration.jpg&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fphoto_108458475_wifi-symbol-icon-over-white-background-vector-illustration.html&docid=YKFbXStE7BP9qM&tbnid=DHr_rAgrIWXbmM&vet=12ahUKEwjj_IrJgpOLAxVo2DgGHY_mLeUQM3oECC4QAA..i&w=1300&h=1300&hcb=2&ved=2ahUKEwjj_IrJgpOLAxVo2DgGHY_mLeUQM3oECC4QAA',
    },
  ];
  return (
    <div className="pt-12">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {data.length || 1}-Week Journey to Web development Mastery
        </h2>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          A comprehensive curriculum designed to transform you into a confident
          web developer
        </p>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-neutral-700 h-[300vh]"></div>
      {data.map((val) => (
        <div
          className="relative flex flex-col justify-center items-center mb-20 animate__animated animate__fadeInLeft"
          key={val.week}
        >
          <div className="flex items-center justify-center mb-8">
            <span className="bg-orange-500  px-6 py-2 rounded-full text-lg font-semibold">
              Week {val.week}
            </span>
          </div>
          {/* <NeonGradientCard className="max-w-[600px]"> */}
          <div
            className="bg-gradient-to-br from-gray-800 to-purple-900 max-w-[600px] rounded-xl p-8 border-[0.2px] border-gray-600 transform hover:scale-105 transition-transform animate__animated animate__fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="h-12 w-12 bg-[#e6b905]/10 rounded-lg flex items-center justify-center mb-6">
              <Image
                src={`${ASSET_PREFIX}${val.image}`}
                alt="course icon"
                width={10}
                height={10}
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
            <p className="text-gray-400">{val.description}</p>
          </div>
          {/* </NeonGradientCard> */}
        </div>
      ))}
    </div>
  );
};

export default page;
