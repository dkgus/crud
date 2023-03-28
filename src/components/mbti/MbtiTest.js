import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MbtiMain from "./MbtiMain";
import MbtiSelect from "./MbtiSelect";
import MbtiResult from "./MbtiResult";

function MbtiTest() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/crud" element={<MbtiMain />} />
          <Route path="/crud/select" element={<MbtiSelect />} />
          <Route path="/crud/result" element={<MbtiResult />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MbtiTest;
