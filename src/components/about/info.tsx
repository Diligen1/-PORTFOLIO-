"use client";
export default function Info() {
  return (
    <main className="mx-auto">
      <div className=" w-full h-[55vh] px-[20px] flex flex-col justify-center items-center gap-[20px] md:text-left text-center">
        <p className="tracking-[5px] md:tracking-[10px] text-[var(--text-color)] text-[20px] md:text-[24px] font-normal ">
          CREATOR KUBA
        </p>
        <p className="tracking-[5px] text-[var(--second-color)] text-[32px] md:text-[56px] font-semibold  ">
          Казыбеков Кубаныч
        </p>
        <p className="px-[20px] w-[110%] md:w-[90%] font-normal text-[var(--text-color)] translate-x-0 md:tracking-[3px] ">
          Привет! Я - Front-end разработчик, программист с годом опыта,
          прошедший стажировку в Megalabe, постоянно изучаю новое и работаю над
          реальными проектами в команде, стремясь делать мир программирования
          лучше каждый день
        </p>
      </div>
    </main>
  );
}
