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
                    height: "650px",
                    fontFamily: "KCCChassam",
                  }}
                >
                  <div>{item.name}</div>
                  <div>
                    <img
                      style={{
                        width: "317px",
                        height: "386px",
                        borderRadius: 10,
                      }}
                      src={require(`./travelImg/travel(${imgNum}).png`)}
                      alt={imgNum}
                    ></img>
                  </div>
                  <div style={{ margin: "0 30px" }}>{item.desc}</div>
                </div>
              </>
            );
          }
        })}
    </>
  );
}

export default MbtiResult;
