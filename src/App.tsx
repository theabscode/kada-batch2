import React from "react";
import Header from "./components/Header";
import ProgramOverview from "./components/ProgramOverview";
import Eligibility from "./components/Eligibility";
import SelectionProcess from "./components/SelectionProcess";
import Curriculum from "./components/Curriculum";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SelectionModal from "./components/SelectionModal";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SelectionModal />
      <Header />
      <ProgramOverview />
      <Eligibility />
      <SelectionProcess />
      <Curriculum />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
