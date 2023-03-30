import React, { useState, useEffect } from "react";
import { qnaList, pointArr } from "./mbtiData";
import { Button, Radio } from "antd";
import MbtiResult from "./MbtiResult";
import { Link } from "react-router-dom";

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

              setTimeout(() => {
                setCounter(counter + 1);
              }, 300);
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
                    height: "1000px",
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
                    }}
                  >
                    {item.q}
                  </h3>
                  <Radio.Group optionType="button" size="large">
                    {select.map((item) => {
                      return (
                        <div style={{ display: "grid" }}>
                          <Radio
                            className="custom_radio"
                            style={{
                              margin: 10,
                              borderRadius: 10,
                            }}
                            value={item.answer}
                            onChange={(e) => onSelect(e, qnaList[idx], idx)}
                          >
                            {item.answer}
                          </Radio>
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
          <Button onClick={onShare}>공유하기</Button>
          <Button>
            <Link to="/crud">테스트 다시하기</Link>
          </Button>
        </>
      ) : null}
    </>
  );
}

export default MbtiSelect;
