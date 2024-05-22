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
    <main className="mx-auto w-full h-full flex items-end justify-center fixed z-[5] overflow-hidden">
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
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
            <p>ABOUT</p>
          </Link>

          <Link
            href="/"
            className={` ${style.block_1} flex flex-col justify-center items-center  relative`}
          >
            <i className="fi fi-rr-apps"></i>
            <p>WORK</p>
          </Link>

          <Link
            href="/"
            className={` ${style.block_1} flex flex-col justify-center items-center  relative`}
          >
            <i className="fi fi-rr-home"></i>
            <p>HOME</p>
          </Link>

          <Link
            href="/"
            className={` ${style.block_1} flex flex-col justify-center items-center  relative`}
          >
            <i className="fi fi-rr-play"></i>
            <p>RELAX</p>
          </Link>
          <Link
            href="/"
            className={` ${style.block_1} flex flex-col justify-center items-center  relative`}
          >
            <i className="fi fi-rr-phone-call"></i>
            <p>CONTACT</p>
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
