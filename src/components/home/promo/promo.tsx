"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Lines from "@/components/common/animation/lines";
import style from "@/styles/promo/promo.module.css";
export default function Promo() {
  const [text] = useTypewriter({
    words: ["DEVELOPER", "DESIGNER", "RELAXING"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 10000,
  });
  return (
    <main className="mx-auto">
      <div className="w-full h-[100vh] flex justify-center items-center relative">
        <div
          className={` ${style.shadow} w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[580px] md:h-[580px] bg-[var(--third-color)] rounded-[50%] md:top-auto top-[25%] absolute z-[-10] border-[2px] border-[var(--text-color)]`}
        ></div>
        <div className="flex flex-col h-[40%] justify-around items-center ">
          <p className=" text-center tracking-[15px] cursor-default text-[46px] md:text-[96px] text-[var(--text-color)]">
            CREATOR KUBA
          </p>
          <p className="text-[26px] md:text-[42px] text-[var(--text-color)] tracking-[10px]">
            {text}
            <span>
              <Cursor cursorStyle="<" cursorColor="var(--Thrid-color)" />
            </span>
          </p>
        </div>
        <div className="absolute top-[60px] md:top-auto left-[50%] translate-x-[-50%] md:left-[100px] flex">
          <Lines />
        </div>
        <motion.div className="h-[50px] overflow-hidden absolute top-[80px] left-[50%] translate-x-[-50%] md:top-auto md:left-auto md:bottom-[20px] md:right-[20px] hidden md:flex flex-row gap-[10px] justify-center items-center">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                duration: index * 0.2 + 0.4,
                type: "spring",
              }}
              className={`w-[15px] h-[15px] rounded-[50%] bg-[var(--third-color)] `}
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
