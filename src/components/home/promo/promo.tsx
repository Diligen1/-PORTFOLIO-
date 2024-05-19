"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Lines from "@/components/common/animation/lines";
import style from "@/styles/promo/promo.module.css";
import { useState } from "react";
export default function Promo() {
  const themes = [
    "base",
    "dark-blue",
    "red",
    "aqua",
    "white",
    "dark",
    "pink",
    "blue",
  ];
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const onClick = () => {
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];
    document.body.dataset.theme = nextTheme;
    setCurrentThemeIndex(nextThemeIndex);
  };
  const [text] = useTypewriter({
    words: ["DEVELOPER", "DESIGNER", "RELAXING"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 10000,
  });
  return (
    <main className="mx-auto ">
      <div className="w-full h-[100vh] flex justify-center items-center relative">
        <motion.div
          onClick={onClick}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
          className={` w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-[var(--third-color)] rounded-[50%] md:top-[20%] top-[10%] absolute z-10 md:z-[-10] border-[2px] border-[var(--text-color)]`}
        ></motion.div>
        <div className="flex flex-col-reverse md:flex-col h-[60%] md:h-[40%] gap-[20px] justify-start items-center overflow-hidden">
          <motion.p
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
            className=" text-center tracking-[15px] cursor-default text-[36px] md:text-[96px] text-[var(--text-color)]"
          >
            CREATOR KUBA
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[16px] md:text-[42px] text-[var(--text-color)] tracking-[10px]"
          >
            {text}
            <span>
              <Cursor cursorStyle="<" cursorColor="var(--Thrid-color)" />
            </span>
          </motion.p>
        </div>
        <div className="hidden absolute top-[50%] md:top-auto left-[50%] translate-x-[-50%] md:left-[100px] md:flex">
          <Lines />
        </div>
        <motion.div className="h-[50px] overflow-hidden absolute top-[80px] left-[50%] translate-x-[-50%] md:top-auto md:left-auto md:bottom-[20px] md:right-[20px] hidden md:flex flex-row gap-[10px] justify-center items-center">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, scale: 0 }}
              animate={{ y: 0, scale: 1 }}
              transition={{
                duration: index * 0.2 + 0.4,
                delay: 0.8,
                type: "spring",
              }}
              className={`w-[15px] h-[15px] rounded-[50%] bg-[var(--second-color)] `}
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
