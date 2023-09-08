import React from "react";
import { TodoWrapper } from "./sectiontodolist/TodoWrapper";
const Page = () => {
  return (
    <>
      <section className="grid grid-cols-2 grid-rows-2 mt-6 border bg-[--yellow] w-[65%] h-[80vh] mx-auto relative">
        <div className="row-span-2">
          <h1 className="text-[--blue] text-xl md:text-3xl lg:text-4xl text-center mb-4">
            Plan your day!
          </h1>
        </div>
        <div className="border-l-4 border-b-4">
          <h1 className="text-[--blue] text-xl md:text-3xl lg:text-4xl text-center mb-4">
            To do list
          </h1>
          <TodoWrapper className="w-[90%] xl:w-[80%] mx-auto" />
        </div>
        <div className="border-l-4">03</div>
      </section>
      <p>ciao</p>
    </>
  );
};

export default Page;
