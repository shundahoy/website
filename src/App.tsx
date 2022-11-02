import React from "react";
import ChartSection from "./components/ChartSection/ChartSection";
import Movie from "./components/Movie/Movie";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Project from "./components/Project/Project";
import Services from "./components/Services/Services";
import Summary from "./components/Summary/Summary";
import TopBanner from "./components/TopBanner/TopBanner";
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
    </div>
  );
}

export default App;
