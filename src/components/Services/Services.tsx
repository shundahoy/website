import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

type DATA = {
  service_name: string;
  service_description: string;
  service_logo: string;
  created_at: any;
  updated_at: any;
};
const Services = () => {
  const [data, setData] = useState<DATA[]>([
    {
      service_name: "string",
      service_description: "string",
      service_logo: "string",
      created_at: "",
      updated_at: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("http://127.0.0.1:8000/api/services")
        .then((res) => {
          setData(res.data);
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
      <h2 className="text-center text-2xl font-bold">サービス一覧</h2>
      <div className="mx-auto h-[3px] w-[5em] bg-gray-700 mt-2"></div>
      <div className="container mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-4">
        {data.map((item) => {
          return (
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
                {item.service_name}
              </h2>
              <p className="leading-relaxed text-base">
                {item.service_description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
