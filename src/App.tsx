import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import ChartSection from "./components/ChartSection/ChartSection";
import Footer from "./components/Footer/Footer";
import Movie from "./components/Movie/Movie";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Project from "./components/Project/Project";
import Services from "./components/Services/Services";
import Summary from "./components/Summary/Summary";
import TopBanner from "./components/TopBanner/TopBanner";
import Voice from "./components/Voice/Voice";
function App() {
  return (
    <div className="">
      <Navbar />
      <TopBanner />
      <Services />
      <ChartSection />
      <Summary />
      <Project />
      <Products />
      <Movie />
      <Voice />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
