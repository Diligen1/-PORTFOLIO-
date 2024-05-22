"use client";
import { useState } from "react";
import Image from "next/image";
import image from "../../../public/assets/img/booster.jpg";
import image_2 from "../../../public/assets/img/travelr.jpg";
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
      text: "lorem",
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
    <main className="mx-auto w-full h-auto z-10">
      <div className="w-auto  md:h-[100vh] flex flex-col gap-[40px] md:flex-row justify-evenly items-center pt-[20px]  md:pt-[80px]">
        {blockDate.map((el) => (
          <div
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
                <p className="px-[5px] text-[14px] text-center text-[var(--text-color)] pt-[20px]">
                  {el.text}
                </p>
              )}
              <p className="text-center  text-[22px] text-[var(--text-color)]">
                {el.title}
              </p>
              <p className="text-center text-[var(--text-color)] text-[14px]">
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
                      className={`text-[16px] tracking-[2px]  z-[5] ${
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
          </div>
        ))}
      </div>
    </main>
  );
}
{
  /* <div className="mt-4 text-center">
                  <a href={el.url} target="_blank" rel="noopener noreferrer">
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                      {el.btn}
                    </button>
                  </a>
                </div> */
}
// <div
//                   className={` bg-transparent cursor-pointer overflow-hidden relative w-[100px] h-[30px] flex flex-row items-center`}
//                   onMouseEnter={() => setIsHovered(true)}
//                   onMouseLeave={() => setIsHovered(false)}
//                 >
//                   <div
//                     className={` bg-[var(--third-color)] border-[var(--background-fon)] left-0 h-full border-r-[4px] transition-all duration-500 flex justify-center items-center ${
//                       isHovered ? "w-full" : "w-[40px]"
//                     }
//                     ${isHovered ? "border-transparent" : ""} `}
//                   >
//                     <p
//                       className={` text-[var(--background-fon)] transition-all duration-500 text-[20px] ${
//                         isHovered ? "opacity-100" : "opacity-0"
//                       } `}
//                     >
//                       ПЕРЕЙТИ
//                     </p>
//                   </div>
//                   <div
//                     className={` bg-[var(--background-fon)] absolute w-[35px] h-[35px] left-[20px] rounded-[50%] transition-all duration-500 flex justify-center items-center  ${
//                       isHovered ? "left-[80%]" : "left-0"
//                     }
//                 ${
//                   isHovered
//                     ? "text-[var(--background-fon)]"
//                     : "text-[var(--text-color)]"
//                 }
//                 ${
//                   isHovered
//                     ? "bg-[var(--text-color)]"
//                     : "bg-[var(--background-fon)]"
//                 }`}
//                   >
//                     <i className="fi fi-ts-angle-double-right text-[16px] h-[20px]"></i>
//                   </div>
//                   <p
//                     className={` text-[var(--background-fon)] absolute text-[13px] px-[20px] left-[50px] transition-all duration-500
//                    ${
//                      isHovered
//                        ? "left-[200px] transform translate-x-[140px]"
//                        : ""
//                    }
//                    ${isHovered ? "opacity-0" : "opacity-100"}
//                    `}
//                   >
//                     ПОСМОТРЕТЬ РАБОТЫ
//                   </p>
//                 </div>
