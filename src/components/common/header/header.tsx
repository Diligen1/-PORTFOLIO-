"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Major_Mono_Display, Bebas_Neue } from "next/font/google";
import HeaderMobile from "../headermobile/headermobile";
const bebas = Bebas_Neue({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
const major = Major_Mono_Display({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

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
              className={`${major.className} text-[18px] text-[var(--text-color)] hover:text-[var(--second-color)] duration-500 text-underline`}
            >
              about
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
              className={`${major.className} text-[18px] text-[var(--text-color)] hover:text-[var(--second-color)] duration-500 text-underline`}
            >
              work
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
              className={`${bebas.className} cursor-pointer w-[70px] h-[70px] bg-[var(--third-color)] rounded-[8px] text-[46px] text-[var(--text-color)] flex justify-center items-center
          hover:bg-[var(--text-color)] hover:text-[var(--background-color)] duration-500`}
            >
              ck
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
              className={`${major.className} text-[18px] text-[var(--text-color)] text-underline hover:text-[var(--second-color)] duration-500`}
            >
              home
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
              className={`${major.className} text-[18px] text-[var(--text-color)] text-underline hover:text-[var(--second-color)] duration-500`}
            >
              contact
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
