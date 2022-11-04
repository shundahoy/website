import React, { useEffect } from "react";
import { init } from "ityped";
const AboutMe = () => {
  useEffect(() => {
    const myElement: any = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      typeSpeed: 300,
      strings: ["コーダー", "エンジニア", "デザイナー"],
    });
  }, []);
  return (
    <div className="mt-10">
      <h2 className="text-center text-2xl font-bold pt-10">About ME</h2>
      <div className="mx-auto h-[3px] w-[5em] bg-white mt-2"></div>
      <div className="container mx-auto mt-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
        <div className="h-[260px] w-[260px] rounded-full lg:h-[400px] lg:w-[400px] xl:h-[550px] xl:w-[550px]">
          <img
            src="https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex items-center flex-col justify-center text-lg">
          <h2 className="mb-4 text-4xl">こんにちは！</h2>
          <h3 className="text-4xl font-bold ">
            私は<span id="myElement"> </span> です。
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
