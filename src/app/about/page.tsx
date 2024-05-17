import { Header, Shirma, AllAbout } from "@/components";
import style from "@/styles/promo/promo.module.css";
export default function About() {
  return (
    <main className="mx-auto relative overflow-hidden w-full h-full">
      <Shirma />
      <Header />
      <AllAbout />
      <div
        className={`${style.shadow} absolute z-[-2] right-[-450px] bottom-[-300px] w-[700px] h-[700px] rounded-[50%] bg-[var(--third-color)] border-[2px] border-[var(--text-color)]`}
      ></div>
      <div
        className={`${style.shadow} absolute z-[-1] right-[50px] bottom-[20px] w-[300px] h-[300px] rounded-[50%] bg-[var(--third-color)] border-[2px] border-[var(--text-color)]`}
      ></div>
    </main>
  );
}
