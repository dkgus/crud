import React, { useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import MbtiMain from "./MbtiMain";
import MbtiSelect from "./MbtiSelect";
import MbtiResult from "./MbtiResult";

function MbtiTest() {
  const [answerSheet, setAnserSheet] = useState();

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MbtiMain />} />
          <Route path="/*" element={<MbtiMain />} />
          <Route path="/crud" element={<MbtiMain />} />
          <Route
            path="/crud/select"
            element={
              <MbtiSelect
                answerSheet={answerSheet}
                setAnserSheet={setAnserSheet}
              />
            }
          />
          <Route
            path="/crud/select/:type"
            element={<MbtiResult answerSheet={answerSheet} />}
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default MbtiTest;
