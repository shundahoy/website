import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

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
const Project = () => {
  const [data, setData] = useState<DATA[]>([
    {
      id: 0,
      img_one: "string",
      img_two: "string",
      project_name: "string",
      project_description: "string",
      project_features: "string",
      live_preview: "string",
      created_at: "",
      updated_at: "",
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("http://127.0.0.1:8000/api/projecthome")
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
    <div className="">
      <h2 className="text-center text-2xl font-bold">制作実績</h2>
      <div className="mx-auto h-[3px] w-[5em] bg-gray-700 mt-2"></div>
      <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-4">
        {data.map((item) => {
          return (
            <Card
              id={item.id}
              title={item.project_name}
              desc={item.project_description}
              image={item.img_one}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
