"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Lines() {
  const [isAnimating1, setIsAnimating1] = useState(false);
  const [isAnimating2, setIsAnimating2] = useState(false);
  const [isAnimating3, setIsAnimating3] = useState(false);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setIsAnimating1((prev) => !prev);
    }, 2000);

    const interval2 = setInterval(() => {
      setIsAnimating2((prev) => !prev);
    }, 2010);

    const interval3 = setInterval(() => {
      setIsAnimating3((prev) => !prev);
    }, 2020);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <main className="mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
        className="flex flex-col md:flex-row justify-center items-center gap-[20px]"
      >
        <motion.p
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className={` cursor-default transition-all duration-500 text-[var(--second-color)] text-[24px]`}
        >
          01
        </motion.p>
        <Link href="/" className="flex flex-col gap-[20px] w-[100px]">
          <div
            className={`h-[2px] bg-[var(--second-color)] transition-all duration-500  ${
              isAnimating1 ? "w-[100%]" : "w-0 "
            }`}
          ></div>
          <div
            className={`h-[2px] bg-[var(--second-color)] transition-all duration-500 md:flex hidden ${
              isAnimating2 ? "w-[75%]" : "w-0"
            }`}
          ></div>
          <div
            className={`h-[2px] bg-[var(--second-color)] transition-all duration-500 md:flex hidden ${
              isAnimating3 ? "w-[50%]" : "w-0"
            }`}
          ></div>
        </Link>
      </motion.div>
    </main>
  );
}
