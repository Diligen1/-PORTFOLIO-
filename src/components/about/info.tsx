"use client";
export default function Info() {
  return (
    <main className="mx-auto">
      <div className=" w-full h-[70vh] flex flex-col justify-around items-start gap-[20px] md:text-left text-center">
        <p className="w-full md:w-[250px] tracking-[5px] md:tracking-[10px] text-[var(--text-color)] text-[20px] md:text-[24px]   font-normal ">
          Creator Kuba
        </p>
        <p className="tracking-[5px] text-[var(--second-color)] text-[32px] md:text-[56px] font-semibold  ">
          Казыбеков Кубаныч
        </p>
        <p className="w-[110%] md:w-[90%] font-normal text-[var(--text-color)] translate-x-0 md:tracking-[3px] ">
          Привет! Я - Front-end разработчик, программист с годом опыта,
          прошедший стажировку в Megalabe, постоянно изучаю новое и работаю над
          реальными проектами в команде, стремясь делать мир программирования
          лучше каждый день
        </p>
      </div>
    </main>
  );
}
