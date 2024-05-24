"use client";
import { useState } from "react";
import Image from "next/image";
import image from "../../../public/assets/img/booster.jpg";
import image_2 from "../../../public/assets/img/travelr.jpg";
import { motion } from "framer-motion";
import { Josefin_Sans, PT_Sans_Narrow } from "next/font/google";
const josefin = Josefin_Sans({
  weight: ["300", "400", "500"],
  display: "swap",
  subsets: ["latin"],
});
const narrow = PT_Sans_Narrow({
  weight: ["400"],
  display: "swap",
  subsets: ["cyrillic"],
});

export default function PromoWorks() {
  const [isHovered, setIsHovered] = useState(false);
  const [openBlockId, setOpenBlockId] = useState(null);

  const handleBlockClick = (id: any) => {
    setOpenBlockId(openBlockId === id ? null : id);
  };
  const [blockDate, setBloockDate] = useState([
    {
      id: 1,
      image: image,
      icon_2: <i className="fi fi-ss-star"></i>,
      icon: <i className="fi fi-rs-caret-down"></i>,
      title: "BOOSTER",
      text: "Разрабатывал сайт для онлайн курсов по программированию совместно с командой разработка длилась больше месяца",
      number: "01",
      btn: "ПЕРЕЙТИ",
      url: "https://booster-school.vercel.app/",
    },
    {
      id: 2,
      image: image_2,
      icon: <i className="fi fi-rs-caret-down"></i>,
      icon_2: <i className="fi fi-ss-star"></i>,
      title: "HORSE",
      text: "Разработал сайт для туризма всю front составляюшую часть делал один без дизайнера",
      number: "02",
      btn: "ПЕРЕЙТИ",
      url: "https://horse-travel.com/",
    },
    {
      id: 3,
      image: "",
      icon: <i className="fi fi-rs-caret-down"></i>,
      icon_2: <i className="fi fi-ss-star"></i>,
      title: "In works",
      text: "lorem",
      number: "03",
      btn: "ПЕРЕЙТИ",
      url: "",
    },
  ]);
  return (
    <main className="mx-auto w-full min-h-screen  ">
      <div className="w-auto h-auto z-5 md:h-[100vh] flex flex-col gap-[40px] md:flex-row justify-evenly items-center pt-[20px]  md:pt-[80px]">
        {blockDate.map((el, index) => (
          <motion.div
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 1.6 + index * 0.2,
              type: "spring",
            }}
            key={el.id}
            className={`relative z-[5] w-[300px] bg-[var(--second-color)] duration-300 transition-all border-x-[2px] border-[var(--text-color)] overflow-hidden ${
              openBlockId === el.id ? "h-[500px]" : "h-[350px]"
            }`}
            onClick={() => handleBlockClick(el.id)}
          >
            <div className="flex flex-col justify-around items-center">
              <div
                className={`text-[20px] text-[var(--text-color)] transform transition-transform duration-300 ${
                  openBlockId === el.id ? "rotate-180" : ""
                }`}
              >
                {el.icon}
              </div>
              <div
                className={`text-[132px] text-[var(--text-color)] ${
                  openBlockId === el.id ? "hidden" : ""
                }`}
              >
                {el.icon_2}
              </div>
              {openBlockId === el.id && (
                <div className="w-[250px] h-[230px] overflow-hidden">
                  {el.image && (
                    <Image
                      src={el.image}
                      alt={el.title}
                      width={300}
                      height={200}
                    />
                  )}
                </div>
              )}
              {openBlockId === el.id && (
                <p
                  className={`${narrow.className} px-[5px] text-[16px] text-center text-[var(--text-color)] pt-[20px]`}
                >
                  {el.text}
                </p>
              )}
              <p
                className={`${josefin.className} text-center  text-[22px] text-[var(--background-color)]`}
              >
                {el.title}
              </p>
              <p
                className={`${josefin.className} text-center text-[var(--background-color)] text-[14px]`}
              >
                {el.number}
              </p>
              {openBlockId === el.id && (
                <a
                  href={el.url}
                  className={`w-[150px] h-[40px]  justify-center cursor-pointer flex  items-center relative overflow-hidden bg-transparent border-[2px] border-[var(--text-color)] `}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div
                    className={`left-[2px] top-[2px] bottom-[2px] absolute duration-500 bg-[var(--background-color)]  ${
                      isHovered ? "w-[97%]" : "w-[5px]"
                    }`}
                    style={{
                      height: isHovered ? "calc(100% - 4px)" : "calc(100% - 0)",
                    }}
                  ></div>
                  <div className="flex flex-row justify-center items-center">
                    <p
                      className={`${
                        narrow.className
                      }text-[16px] tracking-[2px]  z-[5] ${
                        isHovered
                          ? "text-[var(--second-color)]"
                          : "text-[var(--text-color)]"
                      }`}
                    >
                      {el.btn}
                    </p>
                    <i
                      className={`fi fi-rs-caret-right text-[18px] h-[22px] ${
                        isHovered
                          ? "text-[var(--second-color)] rotate-180"
                          : "text-[var(--text-color)]"
                      }`}
                    ></i>
                  </div>
                </a>
              )}
            </div>
            <div
              className={`absolute bottom-[5px] left-[50%] translate-x-[-50%] right-0 h-1 bg-[var(--background-color)] transition-all duration-300 ${
                openBlockId === el.id ? "w-[60%]" : "w-1/4"
              }`}
            ></div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
