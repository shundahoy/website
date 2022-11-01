import React from "react";
import CountUp from "react-countup";
function Summary() {
  return (
    <div className="wrapper py-20 ">
      <div className="summary min-h-[400px] bg-fixed bg-cover relative flex items-center">
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-50"></div>
        {/* content */}
        <div className="container mx-auto grid gap-10 py-10 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-[3] px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">
              <CountUp end={100} />%
            </h1>
            <h4 className="text-xl mt-4 text-yellow-400">お客様満足度</h4>
            <div className="w-[3em] h-[2px] mx-auto bg-white mt-2"></div>
          </div>
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">
              <CountUp end={100} />%
            </h1>
            <h4 className="text-xl mt-4 text-yellow-400">お客様満足度</h4>
            <div className="w-[3em] h-[2px] mx-auto bg-white mt-2"></div>
          </div>

          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">
              <CountUp end={100} />%
            </h1>
            <h4 className="text-xl mt-4 text-yellow-400">お客様満足度</h4>
            <div className="w-[3em] h-[2px] mx-auto bg-white mt-2"></div>
          </div>

          <div className="bg-white rounded-md">
            <div className="p-8 w-full">
              <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                SHOOTING STARS
              </h2>
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  First Link
                </a>
                <a>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Second Link
                </a>
                <a>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Third Link
                </a>
                <a>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Fourth Link
                </a>
                <a>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Fifth Link
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
