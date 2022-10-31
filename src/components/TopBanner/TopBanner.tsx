import React from "react";

const TopBanner = () => {
  return (
    <div className="mainVisual min-h-[600px] bg-fixed bg-cover relative flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* content */}
      <div className="flex flex-col items-center relative z-[3] h-full text-white">
        <h1 className="text-6xl font-bold mb-4">This is Web Site</h1>
        <h4 className="text-xl mb-6">
          この部分はコンテンツ見出しとなります。文字数は約○○文字前後となります。
        </h4>
        <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
