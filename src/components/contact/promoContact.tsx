"use client";
import { useState } from "react";
import style from "@/styles/headermobile/headermobile.module.css";
import { motion } from "framer-motion";
export default function PromoContact() {
  const [isHovered, setIsHovered] = useState(false);
  const [message, setMessage] = useState([]);

  return (
    <main className="mx-auto">
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.6, type: "spring" }}
        className="w-full h-[100vh] flex flex-col gap-[20px] justify-center items-center relative"
      >
        <textarea
          rows={6}
          cols={40}
          placeholder="Message..."
          className={`${style.input} w-[80%] md:w-[600px] bg-[var(--second-color)] border-[2px] border-[var(--text-color)] h-[400px] md:h-[250px] resize-none text-[var(--text-color)] px-[10px] py-[8px] outline-none rounded-[8px] `}
        />
        <input
          type="email"
          placeholder="Gmail..."
          className={`${style.input} w-[80%] md:w-[600px] py-[8px] px-[10px] outline-none text-[var(--text-color)] rounded-[8px] bg-[var(--second-color)] border-[2px] border-[var(--text-color)]`}
        />

        <button
          className={`w-[200px] h-[60px] justify-center cursor-pointer flex  items-center relative overflow-hidden bg-transparent border-[2px] border-[var(--text-color)] `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`left-[2px] top-[2px] bottom-[2px] absolute duration-500 bg-[var(--second-color)]  ${
              isHovered ? "w-[97%]" : "w-[5px]"
            }`}
            style={{
              height: isHovered ? "calc(100% - 4px)" : "calc(100% - 0)",
            }}
          ></div>
          <div className="flex flex-row justify-center items-center">
            <p
              className={`text-[16px] tracking-[2px]  z-[5] ${
                isHovered
                  ? "text-[var(--text-color)]"
                  : "text-[var(--second-color)]"
              }`}
            >
              ОТПРАВИТЬ
            </p>
            <i
              className={`fi fi-rs-caret-right text-[20px] h-[23px] ${
                isHovered
                  ? "text-[var(--text-color)] rotate-180"
                  : "text-[var(--second-color)]"
              }`}
            ></i>
          </div>
        </button>
      </motion.div>
    </main>
  );
}
