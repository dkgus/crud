import React from "react";
import { infoList } from "./mbtiData";
import "./style.css";

function MbtiResult(props) {
  const { answerSheet } = props;
  console.log("answerSheet", answerSheet);
  let imgNum = "";
  return (
    <>
      <h1
        style={{
          background: "#F2D7D9",
          margin: "0 auto",
          width: "80%",
          fontFamily: "KCCChassam",
          paddingTop: 30,
        }}
      >
        {answerSheet}
      </h1>

      {infoList &&
        infoList.map((item, idx) => {
          imgNum = idx;
          if (answerSheet === item.data_type) {
            return (
              <>
                <div
                  style={{
                    background: "#F2D7D9",
                    margin: "0 auto",
                    width: "80%",
                    height: "800px",
                    fontFamily: "KCCChassam",
                  }}
                >
                  <div>{item.name}</div>
                  <div>
                    <img
                      style={{ width: "350px", height: "400px" }}
                      src={require(`./travelImg/travel(${imgNum}).png`)}
                      alt={imgNum}
                    ></img>
                  </div>
                  <div style={{ margin: 30 }}>{item.desc}</div>
                </div>
              </>
            );
          }
        })}
    </>
  );
}

export default MbtiResult;
