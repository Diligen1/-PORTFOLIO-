"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Lines() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <main className="mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-col md:flex-row justify-center items-center gap-[20px]"
      >
        <p
          className={` cursor-default transition-all duration-500 text-[var(--text-color)] text-[20px]`}
        >
          01
        </p>
        <Link href="/" className="flex flex-col gap-[20px] w-[100px]">
          <div
            className={`h-[2px] bg-[var(--text-color)] transition-all duration-500 ${
              isAnimating ? "w-[50%]" : "w-0"
            }`}
          ></div>
          <div
            className={`h-[2px] bg-[var(--text-color)] transition-all duration-500 ${
              isAnimating ? "w-[75%]" : "w-0"
            }`}
          ></div>
          <div
            className={`h-[2px] bg-[var(--text-color)] transition-all duration-500 ${
              isAnimating ? "w-[25%]" : "w-0"
            }`}
          ></div>
        </Link>
      </motion.div>
    </main>
  );
}
