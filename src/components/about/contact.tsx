"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [Contact, setCoontact] = useState([
    {
      id: 1,
      icon: <i className="fi fi-brands-telegram"></i>,
      assets: `https://t.me/OffRealm`,
      text: "Telegram",
    },
    {
      id: 2,
      icon: <i className="fi fi-brands-whatsapp"></i>,
      assets: `https://api.whatsapp.com/send?phone=996500254220`,
      text: "Whatsapp",
    },
    {
      id: 3,
      icon: <i className="fi fi-brands-instagram"></i>,
      assets: `https://www.instagram.com/ku._.ch/`,
      text: "Instagram",
    },
    {
      id: 4,
      icon: <i className="fi fi-brands-github"></i>,
      assets: `https://github.com/Diligen1`,
      text: "Github",
    },
    {
      id: 5,
      icon: <i className="fi fi-brands-gitlab"></i>,
      assets: `https://gitlab.com/kuba.2000.0505.kg`,
      text: "Gitlab",
    },
  ]);
  return (
    <main className="mx-auto">
      <div className="w-[100%] px-[20px] md:w-[80%] h-[60vh] flex flex-wrap justify-centeritems-center gap-[20px] md:text-left text-center">
        {Contact.map((block, index) => (
          <a
            href={block.assets}
            key={index}
            className={`hover:scale-105 duration-300 w-full h-[60px] bg-[var(--text-color)] rounded-[8px] gap-[10px] flex flex-row justify-center items-center`}
          >
            <div className="text-[22px] h-[26px] text-[var(--background-color)]">
              {block.icon}
            </div>
            <p className="text-[16px] text-[var(--background-color)]">
              {block.text}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
