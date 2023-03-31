import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import MbtiMain from "./MbtiMain";
import MbtiSelect from "./MbtiSelect";
//import MbtiResult from "./MbtiResult";

function MbtiTest() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MbtiMain />} />
          <Route path="/*" element={<MbtiMain />} />
          <Route path="/crud" element={<MbtiMain />} />
          <Route path="/crud/select" element={<MbtiSelect />} />
          {/* <Route path="/crud/select/:id" element={<MbtiResult />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default MbtiTest;
