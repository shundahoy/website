import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

var settings = {
  autoplaySpeed: 3000,
  autoplay: true,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  vertical: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

type DATA = {
  id: number;
  client_img: string;
  client_title: string;
  client_description: string;
  created_at: any;
  updated_at: any;
};
const Voice = () => {
  const [data, setData] = useState<DATA[]>([
    {
      id: 0,
      client_img: "",
      client_title: "",
      client_description: "",
      created_at: "",
      updated_at: "",
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("http://127.0.0.1:8000/api/clientreview")
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
    <div className="mt-20 bg-blue-900 text-white">
      <h2 className="text-center text-2xl font-bold pt-10">お客様の声</h2>
      <div className="mx-auto h-[3px] w-[5em] bg-white mt-2"></div>
      <div className="container mx-auto mt-10 px-4 pb-10">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div className="slick_slide item justify-center flex flex-col items-center py-10">
                <div className="h-[100px] w-[100px] rounded-full ">
                  <img
                    src={item.client_img}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="name text-xl font-bold mt-4">
                  {item.client_title}
                </p>
                <p className="text-sm mt-4 text-center">
                  {item.client_description}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Voice;
