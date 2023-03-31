import React, { useState, useEffect } from "react";
import { qnaList, pointArr } from "./mbtiData";
import { Button, Radio } from "antd";
import MbtiResult from "./MbtiResult";
import { Link } from "react-router-dom";
import "./style.css";

function MbtiSelect() {
  let select = [];
  const [counter, setCounter] = useState(0);
  const [answerSheet, setAnserSheet] = useState({});
  const endPoint = qnaList.length;

  useEffect(() => {
    console.log("answerSheet", answerSheet);
  }, [answerSheet]);

  const onSelect = (e, arr, idx) => {
    arr.a.forEach((item) => {
      if (item.answer === e.target.value) {
        item.type.forEach((elem) => {
          for (let i = 0; i < pointArr.length; i++) {
            if (pointArr[i].name === elem) {
              pointArr[i].value += 1;

              console.log("counter", counter);
              console.log("endPoint", endPoint);
              // if (counter < endPoint - 1) {
              setTimeout(() => {
                setCounter(counter + 1);
              }, 300);
              // }
            }
          }
        });
      }
    });

    console.log("pointArr1", pointArr);
    const maxObjArr = pointArr.reduce((prev, value) => {
      return prev.value >= value.value ? prev : value;
    });
    setAnserSheet(maxObjArr.name);
  };
  const onShare = () => {
    console.log("공유");
  };
  return (
    <>
      {qnaList &&
        qnaList.map((item, idx) => {
          if (idx === counter) {
            item.a.map((data) => {
              select.push({ answer: data.answer });
            });

            return (
              <>
                <div
                  className="select_page_container"
                  style={{
                    background: "#F2D7D9",
                    margin: "0 auto",
                    width: "80%",
                    height: "800px",
                  }}
                >
                  <div
                    className="status_bar"
                    style={{
                      width: "100%",
                      background: "#FFFFFF",
                      height: 20,
                      borderRadius: 10,
                    }}
                  >
                    <div
                      style={{
                        background: "#D3CEDF",
                        borderRadius: 10,
                        height: 20,
                        width: (100 / endPoint) * (counter + 1) + "%",
                      }}
                    ></div>
                  </div>
                  <h3
                    style={{
                      backgroundColor: "#FFEEEE",
                      borderRadius: 3,
                      margin: 10,
                      padding: 48,
                      fontFamily: "KCCChassam",
                    }}
                  >
                    {item.q}
                  </h3>

                  <Radio.Group size="large">
                    {select.map((item) => {
                      return (
                        <div style={{ display: "grid" }}>
                          <Radio.Button
                            className="custom_radio"
                            style={{
                              margin: 10,
                              borderRadius: 10,
                              padding: 29,
                              fontFamily: "KCCChassam",
                              height: 79,
                            }}
                            value={item.answer}
                            onChange={(e) => onSelect(e, qnaList[idx], idx)}
                          >
                            {item.answer}
                          </Radio.Button>
                        </div>
                      );
                    })}
                  </Radio.Group>
                </div>
              </>
            );
          }
        })}
      {counter === qnaList.length ? (
        <>
          <div>
            <MbtiResult answerSheet={answerSheet} />
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
              }}
            >
              <Link to="/crud">테스트 다시하기</Link>
            </Button>
            <Button
              onClick={onShare}
              style={{
                fontFamily: "KCCChassam",
                borderRadius: 10,
              }}
            >
              공유하기
            </Button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default MbtiSelect;
