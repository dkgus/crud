import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { qnaList } from "./mbtiData";

function MyResult(props) {
  const { selectedVal } = props;
  console.log("selectedVal", selectedVal);
  let allAnswer = [];

  if (selectedVal.length > 0) {
    return (
      <>
        <div
          style={{
            background: "#F2D7D9",
            margin: "0 auto",
            width: "80%",
            height: "1000px",
            fontFamily: "KCCChassam",
          }}
        >
          {qnaList.map((item, idx) => {
            item.a.forEach((elem, idx2) => {
              let one = [idx + "_" + elem.answer];
              allAnswer.push(...one);
            });
            console.log("allAnswer", allAnswer);

            return (
              <>
                <div style={{ paddingBottom: 20 }}>
                  {item.q}
                  {allAnswer &&
                    allAnswer.map((elem2) => {
                      let one = elem2.charAt(0);

                      if (Number(one) === idx) {
                        for (let i = 0; i < selectedVal.length; i++) {
                          let two = [
                            [idx] + "_" + Object.values(selectedVal[i]),
                          ];

                          if (two[0] === elem2) {
                            return (
                              <>
                                <div
                                  style={{
                                    fontSize: "13px",
                                    display: "inline-block",
                                    background: "powderblue",
                                  }}
                                >
                                  {elem2}
                                </div>
                              </>
                            );
                          } else {
                            return (
                              <>
                                <div style={{ fontSize: "13px" }}>{elem2}</div>
                              </>
                            );
                          }
                        }
                      }
                    })}
                </div>
              </>
            );
          })}
        </div>

        <div
          style={{
            background: "#F2D7D9",
            margin: "0 auto",
            width: "80%",
            height: 68,
          }}
        >
          <Button
            style={{
              fontFamily: "KCCChassam",
              borderRadius: 10,
              marginRight: 15,
              background: "#D3CEDF",
            }}
          >
            <Link to="/">테스트 다시하기</Link>
          </Button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>진행된 평가가 없습니다 평가를 먼저 진행해주세요</div>
      </>
    );
  }
}

export default MyResult;
