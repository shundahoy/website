import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { setLabels } from "react-chartjs-2/dist/utils";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

type DATA = {
  id: number;
  x_data: string;
  y_data: string;
  created_at: any;
  updated_at: any;
};

const ChartSection = () => {
  const [data, setData] = useState<DATA[]>([
    {
      id: 0,
      x_data: "",
      y_data: "",
      created_at: "",
      updated_at: "",
    },
  ]);

  const [labels, setLabels] = useState<string[]>([]);
  const [dataSet, setDataSet] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("http://127.0.0.1:8000/api/chartdata")
        .then((res) => {
          setData(res.data);
          setLabels(res.data.map((item: DATA) => item.x_data));
          setDataSet(res.data.map((item: DATA) => item.y_data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  if (!data) return <></>;
  return (
    <div className="mt-20 px-4 sm:p-0">
      <h2 className="text-center text-2xl font-bold">使用技術</h2>
      <div className="mx-auto h-[3px] w-[5em] bg-gray-700 mt-2"></div>
      <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 mt-10 place-items-center">
        <div className="w-full">
          <Bar
            options={options}
            data={{
              labels,
              datasets: [
                {
                  label: "",
                  data: dataSet,
                  backgroundColor: "#555",
                },
              ],
            }}
          />
        </div>
        <div>
          <div className="md:pl-12 mb-10 md:mb-0 pb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              幅広い技術を扱っております
            </h1>
            <p className="leading-relaxed text-base mb-4">
              このページでは、弊社の使用技術をご紹介しております。
              弊社では、様々なお客様に満足していただけるよう、幅広い技術を扱っております。
            </p>
            <a
              href="#"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              詳細
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
