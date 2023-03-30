import React from "react";
import { infoList } from "./mbtiData";

function MbtiResult(props) {
  const { answerSheet } = props;
  let imgNum = "";
  return (
    <>
      <div>{answerSheet}</div>

      {infoList &&
        infoList.map((item, idx) => {
          imgNum = idx;
          if (answerSheet === item.data_type) {
            return (
              <>
                <div>{item.name}</div>
                <div>
                  <img
                    style={{ width: "350px", height: "400px" }}
                    src={require(`../../img/image-${imgNum}.png`)}
                    alt={imgNum}
                  ></img>
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
