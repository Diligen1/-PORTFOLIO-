"use client";
import { Info, Skills, Contact, Education } from "@/components";
import { useState } from "react";
import style from "@/styles/headermobile/headermobile.module.css";

export default function AllAbout() {
  const [activeComponent, setActiveComponent] = useState("Info");

  const handleSetActiveComponent = (component: any) => {
    setActiveComponent(component);
  };
  return (
    <main className="mx-auto relative">
      <div className=" w-full h-[100vh] relative flex flex-col-reverse md:flex-row justify-center items-center gap-[40px]">
        <div
          className={`${style.navigator}  z-10 w-[55%] md:w-[40%] flex flex-row justify-center items-start gap-[20px] pb-[80px]`}
        >
          <div
            className={`${style.navItem} ${
              activeComponent === "Info" ? style.active : ""
            } w-[30px] md:w-[50px] h-[30px]`}
            onClick={() => handleSetActiveComponent("Info")}
          ></div>
          <div
            className={`${style.navItem} ${
              activeComponent === "Skills" ? style.active : ""
            } w-[30px] md:w-[50px] h-[30px]`}
            onClick={() => handleSetActiveComponent("Skills")}
          ></div>
          <div
            className={`${style.navItem} ${
              activeComponent === "Contact" ? style.active : ""
            } w-[30px] md:w-[50px] h-[30px]`}
            onClick={() => handleSetActiveComponent("Contact")}
          ></div>
          <div
            className={`${style.navItem} ${
              activeComponent === "Education" ? style.active : ""
            } w-[30px] md:w-[50px] h-[30px]`}
            onClick={() => handleSetActiveComponent("Education")}
          ></div>
        </div>
        <div className="w-full md:w-[60%] z-10 ">
          {activeComponent === "Info" && <Info />}
          {activeComponent === "Skills" && <Skills />}
          {activeComponent === "Contact" && <Contact />}
          {activeComponent === "Education" && <Education />}
        </div>
      </div>
      <div
        className={`hidden md:flex absolute z-[-2] left-[-250px] bottom-[-550px] w-[700px] h-[700px] rounded-[50%] bg-[var(--third-color)] border-[2px] border-[var(--text-color)]`}
      ></div>

      <div
        className={`hidden md:flex absolute z-[-1] left-[50px] bottom-[120px] w-[150px] h-[150px] rounded-[50%] bg-[var(--third-color)] border-[2px] border-[var(--text-color)]`}
      ></div>
    </main>
  );
}
