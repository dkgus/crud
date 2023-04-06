import React, { useState, useEffect } from "react";
import { qnaList, pointArr } from "./mbtiData";
import { Button, Radio } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function MbtiSelect(props) {
  let select = [];
  const { answerSheet, selectedVal, setAnserSheet, setSelectedVal } = props;
  const [pageCounter, setPageCounter] = useState(0);
  const [isLast, setLast] = useState(false);

  const endPoint = qnaList.length;
  const location = useLocation();

  const countryType = {
    태국: 0,
    "영국 런던": "1",
    "미국 뉴욕": 2,
    "캐나다 나이아가라 폭포": 3,
    "프랑스 파리": 4,
    시드니: 5,
    이스탄불: 6,
    "탄자니아 세렝게티": 7,
    북극: 8,
    보라카이: 9,
    중국: 10,
    싱가폴: 11,
    "이집트 사막": 12,
    "미국 캘리포니아": 13,
    스위스: 13,
  };
  let countryNum = answerSheet && countryType[answerSheet];
  console.log("countryNum", countryNum);

  useEffect(() => {
    console.log("selectedVal ", selectedVal);
  }, [selectedVal]);

  useEffect(() => {
    console.log("answerSheet", answerSheet);
  }, [answerSheet]);
  useEffect(() => {
    console.log("pageCounter", pageCounter);
    console.log("endPoint", endPoint);
  }, [pageCounter, endPoint]);

  const onSelect = (e, arr, idx) => {
    let copy = [...selectedVal];
    arr.a.forEach((item) => {
      if (item.answer === e.target.value) {
        copy.push({ [idx]: item.answer });
        item.type.forEach((elem) => {
          for (let i = 0; i < pointArr.length; i++) {
            if (pointArr[i].name === elem) {
              pointArr[i].value += 1;

              if (pageCounter < endPoint - 1) {
                setTimeout(() => {
                  setPageCounter(pageCounter + 1);
                }, 300);
              } else {
                setLast(true);
              }
            }
          }
        });
      }
    });
    setSelectedVal(copy);

    console.log("pointArr1", pointArr);
    const maxObjArr = pointArr.reduce((prev, value) => {
      return prev.value >= value.value ? prev : value;
    });
    setAnserSheet(maxObjArr.name);
  };

  return (
    <>
      {qnaList &&
        qnaList.map((item, idx) => {
          if (idx === pageCounter) {
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
                        width: (100 / endPoint) * (pageCounter + 1) + "%",
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
                  {isLast ? (
                    <>
                      <div>
                        <Button
                          style={{
                            color: "black",
                            borderRadius: 10,
                            background: "#D3CEDF",
                            fontFamily: "KCCChassam",
                          }}
                        >
                          <Link to={`/crud/select/${countryNum}`}>
                            결과보기
                          </Link>
                        </Button>
                      </div>
                    </>
                  ) : null}
                </div>
              </>
            );
          }
        })}
    </>
  );
}

export default MbtiSelect;
