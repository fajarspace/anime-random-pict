import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedHome />} />
      </Routes>
    </BrowserRouter>
  );
};
// Buat komponen terpisah untuk Dashboard yang dilindungi
function ProtectedHome() {
  return (
    <>
      <Nav />
      <Home />
    </>
  );
}

export default App;
