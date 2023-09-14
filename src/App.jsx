import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WaifuDisplay from "./components/WaifuDisplay";
import Home from "./pages/Home";
import HappyDisplay from "./components/HappyDisplay";
import CringeDisplay from "./components/CringeDisplay";
import SmileDisplay from "./components/SmileDisplay";
import CryDisplay from "./components/CryDisplay";
import NekoDisplay from "./components/NekoDisplay";
// import Home from "./pages/Home";
// import Nav from "./components/Nav";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waifu" element={<WaifuDisplay />} />
        <Route path="/happy" element={<HappyDisplay />} />
        <Route path="/cringe" element={<CringeDisplay />} />
        <Route path="/smile" element={<SmileDisplay />} />
        <Route path="/cry" element={<CryDisplay />} />
        <Route path="/neko" element={<NekoDisplay />} />
      </Routes>
    </BrowserRouter>
  );
};
// Buat komponen terpisah untuk Dashboard yang dilindungi
// function ProtectedHome() {
//   return (
//     <>
//       <Nav />
//       <Home />
//       <Footer />
//     </>
//   );
// }

export default App;
