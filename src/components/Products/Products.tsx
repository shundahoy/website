import axios from "axios";
import React, { useEffect, useState } from "react";

type DATA = {
  id: number;
  short_title: string;
  short_description: string;
  small_img: string;
  long_title: string;
  long_description: string;
  total_duration: string;
  total_lecture: string;
  total_student: string;
  skill_all: string;
  video_url: string;
  created_at: any;
  updated_at: any;
};
const Products = () => {
  const [data, setData] = useState<DATA[]>([
    {
      id: 0,
      short_title: "",
      short_description: "",
      small_img: "",
      long_title: "",
      long_description: "",
      total_duration: "",
      total_lecture: "",
      total_student: "",
      skill_all: "",
      video_url: "",
      created_at: "",
      updated_at: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("http://127.0.0.1:8000/api/coursehome")
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
      <h2 className="text-center text-2xl font-bold">人気の商品</h2>
      <div className="mx-auto h-[3px] w-[5em] bg-gray-700 mt-2"></div>
      <div className="container mx-auto grid gap-x-4 md:gap-y-10 gap-y-20 grid-cols-1 lg:grid-cols-2 mt-10 px-4">
        {data.map((item) => {
          return (
            <section className="text-gray-600 body-font">
              <div className="flex md:flex-row flex-col items-center">
                <div className="w-full sm:w-4/5 md:w-2/5  mb-6 md:mb-0">
                  <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="https://dummyimage.com/720x600"
                  />
                </div>
                <div className="lg:flex-grow md:w-1/2 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-2xl  text-xl mb-4 font-bold text-gray-900">
                    {item.long_title}
                  </h1>
                  <p className="mb-8 leading-relaxed">
                    {item.long_description}
                  </p>
                  <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      <a href={`/product_detail/${item.id}`}>Button</a>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
