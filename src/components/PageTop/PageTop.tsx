import React from "react";
type Props = {
  title: string;
  desc: string;
  image: string;
};
const PageTop = (props: Props) => {
  return (
    <div
      className="min-h-[400px] bg-fixed bg-cover relative flex items-center justify-center bg-center"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* content */}
      <div className="flex flex-col items-center relative z-[3] h-full text-white">
        <h1 className="text-6xl font-bold mb-4">{props.title}</h1>
        <h4 className="text-xl mb-6">{props.desc}</h4>
      </div>
    </div>
  );
};

export default PageTop;
