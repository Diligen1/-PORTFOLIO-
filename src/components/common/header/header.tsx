"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeaderMobile from "../headermobile/headermobile";
export default function Header() {
  const themes = ["base", "red", "white", "pink"];
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const onClick = () => {
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];
    document.body.dataset.theme = nextTheme;
    setCurrentThemeIndex(nextThemeIndex);
  };
  return (
    <main className="mx-auto">
      <div className="w-full h-[100px] flex-row justify-center items-center hidden md:flex absolute z-10">
        <div className="w-[75%] flex flex-row justify-around items-center">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8, type: "spring" }}
          >
            <Link
              href="/about"
              className="text-[18px] text-[var(--text-color)] hover:text-[var(--second-color)] duration-500 text-underline"
            >
              ABOUT
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2, type: "spring" }}
            className="w-[6px] h-[6px] rounded-[50%] bg-[var(--second-color)]"
          ></motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.9, type: "spring" }}
          >
            <Link
              href="/work"
              className="text-[18px] text-[var(--text-color)] hover:text-[var(--second-color)] duration-500 text-underline"
            >
              WORK
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1, type: "spring" }}
            className="w-[6px] h-[6px] rounded-[50%] bg-[var(--second-color)]"
          ></motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.2, type: "spring" }}
          >
            <div
              onClick={onClick}
              className="cursor-pointer w-[70px] h-[70px] bg-[var(--third-color)] rounded-[8px] text-[36px] text-[var(--text-color)] flex justify-center items-center
          hover:bg-[var(--text-color)] hover:text-[var(--background-color)] duration-500"
            >
              CK
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1, type: "spring" }}
            className="w-[6px] h-[6px] rounded-[50%] bg-[var(--second-color)]"
          ></motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.9, type: "spring" }}
          >
            <Link
              href="/"
              className="text-[18px] text-[var(--text-color)] text-underline hover:text-[var(--second-color)] duration-500"
            >
              HOME
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7, type: "spring" }}
            className="w-[6px] h-[6px] rounded-[50%] bg-[var(--second-color)]"
          ></motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
          >
            <Link
              href="/contact"
              className="text-[18px] text-[var(--text-color)] text-underline hover:text-[var(--second-color)] duration-500"
            >
              CONTACT
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="md:hidden w-[100%] h-[100%]">
        <HeaderMobile />
      </div>
    </main>
  );
}
