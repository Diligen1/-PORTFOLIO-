"use client";
import { Info, Skills, Contact } from "@/components";
import { useState } from "react";
import style from "@/styles/headermobile/headermobile.module.css";
import { motion } from "framer-motion";

export default function AllAbout() {
  const [activeComponent, setActiveComponent] = useState("Info");

  const handleSetActiveComponent = (component: any) => {
    setActiveComponent(component);
  };
  return (
    <main className="mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6, type: "spring" }}
        className=" w-full h-[100vh] relative flex flex-col-reverse md:flex-row justify-center items-center gap-[20px]"
      >
        <div
          className={`${style.navigator}  z-10 w-[55%] md:w-[45%] flex flex-row justify-center items-center md:items-start gap-[20px] pb-[80px]`}
        >
          <div
            className={`${style.navItem} ${
              activeComponent === "Info" ? style.active : ""
            } w-[40px] md:w-[50px] h-[30px] `}
            onClick={() => handleSetActiveComponent("Info")}
          ></div>
          <div
            className={`${style.navItem} ${
              activeComponent === "Skills" ? style.active : ""
            } w-[40px] md:w-[50px] h-[30px] `}
            onClick={() => handleSetActiveComponent("Skills")}
          ></div>
          <div
            className={`${style.navItem} ${
              activeComponent === "Contact" ? style.active : ""
            } w-[40px] md:w-[50px] h-[30px]`}
            onClick={() => handleSetActiveComponent("Contact")}
          ></div>
        </div>
        <div className="w-full md:w-[60%] z-10 ">
          {activeComponent === "Info" && <Info />}
          {activeComponent === "Skills" && <Skills />}
          {activeComponent === "Contact" && <Contact />}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2.6, type: "spring" }}
        className={`hidden md:flex absolute z-[-2] left-[-250px] bottom-[-550px] w-[700px] h-[700px] rounded-[50%] bg-[var(--third-color)] border-[2px] border-[var(--text-color)]`}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2.6, type: "spring" }}
        className={`hidden md:flex absolute z-[-1] left-[50px] bottom-[120px] w-[150px] h-[150px] rounded-[50%] bg-[var(--third-color)] border-[2px] border-[var(--text-color)]`}
      ></motion.div>
    </main>
  );
}
