import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
const ProductDetail = () => {
  const params = useParams();
  const [data, setData] = useState<DATA>({
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
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .post("http://127.0.0.1:8000/api/coursedetail", {
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
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME{params.id}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {data.long_title}
            </h1>

            <p className="leading-relaxed">{data.long_description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${data.total_lecture}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
