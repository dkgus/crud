import React, { useState } from "react";
import { qnaList } from "./mbtiData";
import { Button } from "antd";
function MbtiSelect() {
  const [counter, setCounter] = useState(0);

  const onNext = () => {
    setCounter((num) => num + 1);
  };
  return (
    <>
      {qnaList &&
        qnaList.map((item, idx) => {
          console.log("idx/qnaList.length", idx, "/", qnaList.length);
          if (idx === counter) {
            console.log("item", item);
            return <div>{item.q}</div>;
          }
        })}

      <Button onClick={onNext}>Next</Button>
    </>
  );
}

export default MbtiSelect;
