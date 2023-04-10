import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MbtiMain from "./MbtiMain";
import MbtiSelect from "./MbtiSelect";
import MbtiResult from "./MbtiResult";
import MyResult from "./MyResult";

function MbtiTest() {
  const [answerSheet, setAnserSheet] = useState();
  const [selectedVal, setSelectedVal] = useState([]);
  const [reTest, setRetest] = useState(false);

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
                selectedVal={selectedVal}
                setAnserSheet={setAnserSheet}
                setSelectedVal={setSelectedVal}
                setRetest={setRetest}
                reTest={reTest}
              />
            }
          />
          <Route
            path="/crud/select/:id"
            element={
              <MbtiResult
                answerSheet={answerSheet}
                setRetest={setRetest}
                reTest={reTest}
                setAnserSheet={setAnserSheet}
                setSelectedVal={setSelectedVal}
              />
            }
          />
          <Route
            path="/crud/select/my_result"
            element={
              <MyResult
                selectedVal={selectedVal}
                setAnserSheet={setAnserSheet}
                setSelectedVal={setSelectedVal}
                setRetest={setRetest}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MbtiTest;
