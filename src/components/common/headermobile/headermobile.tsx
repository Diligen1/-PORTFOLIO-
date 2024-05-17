"use client";
import { useState } from "react";
import Link from "next/link";
import style from "@/styles/headermobile/headermobile.module.css";
import { motion } from "framer-motion";

export default function HeaderMobile() {
  const [showIndicator, setShowIndicator] = useState(false);

  const handleNavigationClick = () => {
    setShowIndicator(true);
    setTimeout(() => {
      setShowIndicator(false);
    }, 1000);
  };
  return (
    <main className="mx-auto w-[100%] h-[100%] flex items-end justify-center fixed z-10 overflow-hidden">
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className={`${style.navigation} w-[100%] h-[90px] rounded-t-[8px] bg-[var(--text-color)] flex flex-row justify-around items-center`}
      >
        <div
          className={` ${style.block} w-full h-[90px] flex flex-row justify-around items-center`}
        >
          <Link
            href="/about"
            className={` ${style.block_1}  flex flex-col justify-center items-center  relative`}
          >
            <i className="fi fi-rr-user"></i>
            <p>About</p>
          </Link>

          <Link
            href="/"
            className={` ${style.block_1} flex flex-col justify-center items-center  relative`}
          >
            <i className="fi fi-rr-apps"></i>
            <p>Work</p>
          </Link>

          <Link
            href="/"
            className={` ${style.block_1} flex flex-col justify-center items-center  relative`}
          >
            <i className="fi fi-rr-home"></i>
            <p>Home</p>
          </Link>

          <Link
            href="/"
            className={` ${style.block_1} flex flex-col justify-center items-center  relative`}
          >
            <i className="fi fi-rr-play"></i>
            <p>Relax</p>
          </Link>
          <Link
            href="/"
            className={` ${style.block_1} flex flex-col justify-center items-center  relative`}
          >
            <i className="fi fi-rr-phone-call"></i>
            <p>Contact</p>
          </Link>
          {showIndicator && (
            <div
              className={`${style.indicator} w-[70px] h-[70px] bg-[var(--third-color)]`}
            ></div>
          )}
        </div>
      </motion.div>
    </main>
  );
}
