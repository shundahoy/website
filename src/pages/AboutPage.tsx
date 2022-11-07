import React from "react";
import AboutContents from "../components/AboutContents/AboutContents";
import PageTop from "../components/PageTop/PageTop";
const AboutPage = () => {
  return (
    <>
      <PageTop
        title="About"
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        desc="Copper mug try-hard pitchfork pour-over freegan heirloom neutra"
      />
      <AboutContents />
    </>
  );
};

export default AboutPage;
