import React from "react";
import { infoList } from "./mbtiData";

function MbtiResult(props) {
  const { answerSheet } = props;

  return (
    <>
      <div>{answerSheet}</div>

      {infoList &&
        infoList.map((item, idx) => {
          if (answerSheet === item.data_type) {
            return (
              <>
                <div>{item.name}</div>
                <div>
                  {/* <img
                    style={{ width: "350px", height: "400px" }}
                    src={image}
                    alt="11"
                  ></img> */}
                </div>
                <div>{item.desc}</div>
              </>
            );
          }
        })}
    </>
  );
}

export default MbtiResult;
