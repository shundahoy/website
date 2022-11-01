import React from "react";
import Card from "../Card/Card";

const Services = () => {
  return (
    <div className="mt-20">
      <h2 className="text-center text-2xl font-bold">サービス一覧</h2>
      <div className="mx-auto h-[3px] w-[5em] bg-gray-700 mt-2"></div>
      <div className="container mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-4">
        <div>
          <div className="border border-gray-200 p-6 rounded-lg text-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 mx-auto">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
              サービス1
            </h2>
            <p className="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm.
            </p>
          </div>
        </div>
        <div>
          <div className="border border-gray-200 p-6 rounded-lg text-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 mx-auto">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
              </svg>
            </div>
            <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
              サービス2
            </h2>
            <p className="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm.
            </p>
          </div>
        </div>
        <div>
          <div className="border border-gray-200 p-6 rounded-lg text-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 mx-auto">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
              サービス3
            </h2>
            <p className="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
