"use client";
import { useState } from "react";
export default function Test() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main className="mx-auto w-full h-[100vh] justify-center items-center">
      <div
        className={`w-[150px] h-[50px] justify-center cursor-pointer flex  items-center   relative overflow-hidden bg-transparent border-[2px] border-[var(--text-color)] `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`left-[2px] top-[2px] bottom-[2px] absolute duration-300 bg-[var(--third-color)]  ${
            isHovered ? "w-[97%]" : "w-[5px]"
          }`}
          style={{
            height: isHovered ? "calc(100% - 4px)" : "calc(100% - 0)",
          }}
        ></div>
        <p
          className={`text-[18px] tracking-[2px]  z-[5] ${
            isHovered
              ? "text-[var(--second-color)]"
              : "text-[var(--text-color)]"
          }`}
        >
          ПЕРЕЙТИ
        </p>
        <i
          className={`fi fi-rs-caret-right text-[20px] h-[24px] ${
            isHovered
              ? "text-[var(--second-color)] rotate-180"
              : "text-[var(--text-color)]"
          }`}
        ></i>
      </div>
    </main>
  );
}
