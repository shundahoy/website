import React from "react";

const ProjectDetail = () => {
  return (
    <div className="mt-20">
      <div className="container mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2 px-4 items-center">
        <div className="relative pr-10">
          <div className="block relative z-10 w-full sm:h-[600px] rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
          <div className="absolute top-1/2 right-0 h-[80%] w-full bg-yellow-300 -translate-y-1/2 rounded-2xl"></div>
        </div>

        <div className="">
          <h2 className="text-3xl leading-[1.6] font-bold">
            この部分はコンテンツ見出しとなります。文字数は約○○文字前後となります。
          </h2>
          <p className="text-base mt-4">
            イメージ確認用のサンプル文言になります。任意のテキストに置き換えてお使いください。イメージ確認用のサンプル文言になります。任意のテキストに置き換えてお使いください。
          </p>

          <div className="w-full mt-8">
            <nav className="flex flex-col gap-2 sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a>
                <span className="bg-yellow-300 w-8 h-8 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-lg">sample sample go to yea</span>
              </a>
              <a>
                <span className="bg-yellow-300 w-8 h-8 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-lg">sample sample go to yea</span>
              </a>
              <a>
                <span className="bg-yellow-300 w-8 h-8 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-lg">sample sample go to yea</span>
              </a>
              <a>
                <span className="bg-yellow-300 w-8 h-8 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-lg">sample sample go to yea</span>
              </a>
            </nav>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-y-8">
            <div className="w-full">
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>
                  <span className="bg-yellow-300 w-8 h-8 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-lg">sample sample go to yea</span>
                </a>
                <a>
                  <span className="bg-yellow-300 w-8 h-8 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-lg">sample sample go to yea</span>
                </a>
                <a>
                  <span className="bg-yellow-300 w-8 h-8 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-lg">sample sample go to yea</span>
                </a>
                <a>
                  <span className="bg-yellow-300 w-8 h-8 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-lg">sample sample go to yea</span>
                </a>
              </nav>
            </div>
            <div className="w-full">
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>
                  <span className="bg-yellow-300 w-8 h-8 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-lg">sample sample go to yea</span>
                </a>
                <a>
                  <span className="bg-yellow-300 w-8 h-8 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-lg">sample sample go to yea</span>
                </a>
                <a>
                  <span className="bg-yellow-300 w-8 h-8 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-lg">sample sample go to yea</span>
                </a>
                <a>
                  <span className="bg-yellow-300 w-8 h-8 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-lg">sample sample go to yea</span>
                </a>
              </nav>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
