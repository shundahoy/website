import React from "react";
import ChartSection from "./components/ChartSection/ChartSection";
import Navbar from "./components/Navbar/Navbar";
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
    </div>
  );
}

export default App;
