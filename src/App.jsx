import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WaifuDisplay from "./components/WaifuDisplay";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WaifuDisplay />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
