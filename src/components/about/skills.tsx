"use client";
import style from "@/styles/headermobile/headermobile.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Skills() {
  const [blocksData, setBlocksData] = useState([
    {
      id: 1,
      count: 0,
      target: 90,
      increment: 1,
      intervalTime: 30,
      text: "HTML",
    },
    {
      id: 2,
      count: 0,
      target: 100,
      increment: 1,
      intervalTime: 30,
      text: "CSS",
    },
    {
      id: 3,
      count: 0,
      target: 60,
      increment: 1,
      intervalTime: 30,
      text: "JavaScript",
    },
    {
      id: 4,
      count: 0,
      target: 50,
      increment: 1,
      intervalTime: 30,
      text: "TypeScript",
    },
    {
      id: 5,
      count: 0,
      target: 80,
      increment: 1,
      intervalTime: 30,
      text: "React",
    },
    {
      id: 6,
      count: 0,
      target: 90,
      increment: 1,
      intervalTime: 30,
      text: "Next JS",
    },
    {
      id: 7,
      count: 0,
      target: 90,
      increment: 1,
      intervalTime: 30,
      text: "Redux",
    },
    {
      id: 8,
      count: 0,
      target: 90,
      increment: 1,
      intervalTime: 30,
      text: "Tailwind Css",
    },
    {
      id: 9,
      count: 0,
      target: 90,
      increment: 1,
      intervalTime: 30,
      text: "Framer-motion",
    },
  ]);
  useEffect(() => {
    const intervals = blocksData.map((block) => {
      return setInterval(() => {
        setBlocksData((prevBlocksData) => {
          return prevBlocksData.map((prevBlockData) => {
            if (
              prevBlockData.id === block.id &&
              prevBlockData.count >= prevBlockData.target
            ) {
              const interval = "";
              clearInterval(interval);
              return prevBlockData;
            } else if (prevBlockData.id === block.id) {
              return {
                ...prevBlockData,
                count: prevBlockData.count + prevBlockData.increment,
              };
            } else {
              return prevBlockData;
            }
          });
        });
      }, block.intervalTime);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <main className="mx-auto">
      <div className="w-[100%] px-[20px] md:w-[80%] h-[60vh] flex flex-wrap justify-around items-center md:text-left text-center">
        {blocksData.map((block, index) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1, type: "spring" }}
            key={block.id}
            className={`${style.ugol_6} flex flex-col justify-center items-center w-[100px] h-[100px] md:w-[140px] md:h-[140px] bg-[var(--text-color)] text-[var(--background-color)]`}
          >
            <p className="text-[14px] md:text-[16px] cursor-default">
              {block.count}%
            </p>
            <p className="text-[16px] md:text-[20px] cursor-default">
              {block.text}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
