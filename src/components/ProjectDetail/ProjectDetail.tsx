import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
type DATA = {
  id: number;
  img_one: string;
  img_two: string;
  project_name: string;
  project_description: string;
  project_features: string;
  live_preview: string;
  created_at: any;
  updated_at: any;
};
const ProjectDetail = () => {
  const params = useParams();
  const [data, setData] = useState<DATA>({
    id: 0,
    img_one: "string",
    img_two: "string",
    project_name: "string",
    project_description: "string",
    project_features: "string",
    live_preview: "string",
    created_at: "",
    updated_at: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .post("http://127.0.0.1:8000/api/projectdetail", {
          id: params.id,
        })
        .then((res) => {
          setData(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  if (!data) return <></>;
  return (
    <div className="mt-20">
      <div className="container mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2 px-4 items-center">
        <div className="relative pr-10">
          <div className="block relative z-10 w-full sm:h-[600px] rounded-2xl">
            <img
              src={data.img_one}
              alt=""
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
          <div className="absolute top-1/2 right-0 h-[80%] w-full bg-yellow-300 -translate-y-1/2 rounded-2xl"></div>
        </div>

        <div className="">
          <h2 className="text-3xl leading-[1.6] font-bold">
            {data.project_name}
          </h2>
          <p className="text-base mt-4 break-words">
            {data.project_description}
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
