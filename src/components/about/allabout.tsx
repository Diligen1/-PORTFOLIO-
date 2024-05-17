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
    <main className="mx-auto">
      <div className="w-full h-[100vh] flex flex-row justify-center items-center gap-[40px]">
        <div
          className={`${style.navigator}w-[40%] flex flex-row justify-center items-start gap-[20px] pb-[80px]`}
        >
          <div
            className={`${style.navItem} ${
              activeComponent === "Info" ? style.active : ""
            }`}
            onClick={() => handleSetActiveComponent("Info")}
          ></div>
          <div
            className={`${style.navItem} ${
              activeComponent === "Skills" ? style.active : ""
            }`}
            onClick={() => handleSetActiveComponent("Skills")}
          ></div>
          <div
            className={`${style.navItem} ${
              activeComponent === "Contact" ? style.active : ""
            }`}
            onClick={() => handleSetActiveComponent("Contact")}
          ></div>
          <div
            className={`${style.navItem} ${
              activeComponent === "Education" ? style.active : ""
            }`}
            onClick={() => handleSetActiveComponent("Education")}
          ></div>
        </div>
        <div className="w-[60%]">
          {activeComponent === "Info" && <Info />}
          {activeComponent === "Skills" && <Skills />}
          {activeComponent === "Contact" && <Contact />}
          {activeComponent === "Education" && <Education />}
        </div>
      </div>
    </main>
  );
}
