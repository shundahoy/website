import React from "react";
import Slider from "react-slick";

var settings = {
  autoPlaySpeed: 3000,
  autoPlay: true,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 3000,
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
const Voice = () => {
  return (
    <div className="mt-20 bg-blue-900 text-white">
      <h2 className="text-center text-2xl font-bold pt-10">お客様の声</h2>
      <div className="mx-auto h-[3px] w-[5em] bg-white mt-2"></div>
      <div className="container mx-auto mt-10 px-4 pb-10">
        <Slider {...settings}>
          <div className="slick_slide item justify-center flex flex-col items-center py-10">
            <div className="h-[100px] w-[100px] rounded-full ">
              <img
                src="https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="name text-xl font-bold mt-4">葉山 隼人</p>
            <p className="text-sm mt-4 text-center">
              これを買ったら学校の成績が上がって部活でもレギュラーになれました、ついでに彼女もできました
              <br />
              友達にも勧めたところ、テストの点数が上がったようです。
            </p>
          </div>

          <div className="slick_slide item justify-center flex flex-col items-center py-10">
            <div className="h-[100px] w-[100px] rounded-full ">
              <img
                src="https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="name text-xl font-bold mt-4">葉山 隼人</p>
            <p className="text-sm mt-4 text-center">
              これを買ったら学校の成績が上がって部活でもレギュラーになれました、ついでに彼女もできました
              <br />
              友達にも勧めたところ、テストの点数が上がったようです。
            </p>
          </div>

          <div className="slick_slide item justify-center flex flex-col items-center py-10">
            <div className="h-[100px] w-[100px] rounded-full ">
              <img
                src="https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="name text-xl font-bold mt-4">葉山 隼人</p>
            <p className="text-sm mt-4 text-center">
              これを買ったら学校の成績が上がって部活でもレギュラーになれました、ついでに彼女もできました
              <br />
              友達にも勧めたところ、テストの点数が上がったようです。
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Voice;
