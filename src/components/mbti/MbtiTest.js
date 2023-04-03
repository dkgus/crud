import React, { useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import MbtiMain from "./MbtiMain";
import MbtiSelect from "./MbtiSelect";
import MbtiResult from "./MbtiResult";

function MbtiTest() {
  const [answerSheet, setAnserSheet] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MbtiMain />} />
          <Route
            path="/crud/select"
            exact
            element={
              <MbtiSelect
                answerSheet={answerSheet}
                setAnserSheet={setAnserSheet}
              />
            }
          />
          <Route
            path="/crud/select/:id"
            element={<MbtiResult answerSheet={answerSheet} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MbtiTest;
