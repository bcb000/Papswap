import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Landing } from "./Components/Landing";
import { Faq } from "./Components/Routes/Faq";
import Policies from "./Components/Routes/Policies";
import { TermsConditions } from "./Components/Routes/TermsConditions";

function App() {
  return (
    <div style={{width: "100vw"}}>
      <Header />
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="privacy-policies" element={<Policies/>}/>
        <Route path="terms-n-conditions" element={<TermsConditions/>} />
        <Route path="Faq" element={<Faq/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
