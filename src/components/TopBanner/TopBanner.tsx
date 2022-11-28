import axios from "axios";
import React, { useEffect, useState } from "react";

type DATA = {
  title: string;
  subtitle: string;
};
const TopBanner = () => {
  const [titles, settitles] = useState<DATA>({
    title: "",
    subtitle: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("http://127.0.0.1:8000/api/homepage/title")
        .then((res) => {
          settitles({
            title: res.data[0].home_title,
            subtitle: res.data[0].home_subtitle,
          });
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="mainVisual min-h-[600px] bg-fixed bg-cover relative flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* content */}
      <div className="flex flex-col items-center relative z-[3] h-full text-white">
        <h1 className="text-6xl font-bold mb-4">{titles.title}</h1>
        <h4 className="text-xl mb-6">{titles.subtitle}</h4>
        <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
