import React from "react";
import Card from "../components/Card/Card";
import PageTop from "../components/PageTop/PageTop";

const ProjectPage = () => {
  return (
    <>
      <PageTop
        title="Project"
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        desc="Copper mug try-hard pitchfork pour-over freegan heirloom neutra"
      />
      <div className="mt-20">
        <h2 className="text-center text-2xl font-bold">制作実績</h2>
        <div className="mx-auto h-[3px] w-[5em] bg-gray-700 mt-2"></div>
        <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-4">
          <div>
            <Card
              title="実績1"
              desc="このページでは、弊社の実績をご紹介しております。弊社では、様々なお客様に満足していただけるよう、幅広いサービスを行っております。"
              image="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            />
          </div>
          <div>
            <Card
              title="実績2"
              desc="このページでは、弊社の実績をご紹介しております。弊社では、様々なお客様に満足していただけるよう、幅広いサービスを行っております。"
              image="https://images.unsplash.com/photo-1666892938639-11885e08fd73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div>
            <Card
              title="実績3"
              desc="このページでは、弊社の実績をご紹介しております。弊社では、様々なお客様に満足していただけるよう、幅広いサービスを行っております。"
              image="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div>
            <Card
              title="実績1"
              desc="このページでは、弊社の実績をご紹介しております。弊社では、様々なお客様に満足していただけるよう、幅広いサービスを行っております。"
              image="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            />
          </div>
          <div>
            <Card
              title="実績2"
              desc="このページでは、弊社の実績をご紹介しております。弊社では、様々なお客様に満足していただけるよう、幅広いサービスを行っております。"
              image="https://images.unsplash.com/photo-1666892938639-11885e08fd73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div>
            <Card
              title="実績3"
              desc="このページでは、弊社の実績をご紹介しております。弊社では、様々なお客様に満足していただけるよう、幅広いサービスを行っております。"
              image="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div>
            <Card
              title="実績1"
              desc="このページでは、弊社の実績をご紹介しております。弊社では、様々なお客様に満足していただけるよう、幅広いサービスを行っております。"
              image="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            />
          </div>
          <div>
            <Card
              title="実績2"
              desc="このページでは、弊社の実績をご紹介しております。弊社では、様々なお客様に満足していただけるよう、幅広いサービスを行っております。"
              image="https://images.unsplash.com/photo-1666892938639-11885e08fd73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div>
            <Card
              title="実績3"
              desc="このページでは、弊社の実績をご紹介しております。弊社では、様々なお客様に満足していただけるよう、幅広いサービスを行っております。"
              image="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
