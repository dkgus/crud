import React, { useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { qnaList } from "./mbtiData";

function MyResult(props) {
  const { selectedVal, setRetest, reTest, setAnserSheet, setSelectedVal } =
    props;

  let allAnswer = [];
  qnaList.forEach((item) => {
    item.a.forEach((elem) => {
      for (let i = 0; i < selectedVal.length; i++) {
        if (selectedVal[i].selectAnswer === elem.answer) {
          allAnswer.push({ ...item, ...elem });
        }
      }
    });
  });
  useEffect(() => {}, [reTest]);
  const onClick = () => {
    setRetest(true);
    setAnserSheet();
    setSelectedVal([]);
  };

  if (selectedVal.length > 0) {
    return (
      <>
        <div
          style={{
            background: "#F2D7D9",
            margin: "0 auto",
            width: "80%",
            height: "1100px",
            fontFamily: "KCCChassam",
            paddingTop: 30,
          }}
        >
          <h3>내가 선택한 답변</h3>
          {allAnswer &&
            allAnswer.map((item, idx) => {
              return (
                <>
                  <div style={{ paddingBottom: 20, paddingTop: 30 }}>
                    <div style={{ paddingBottom: 5 }}>{item.q}</div>
                    <div
                      style={{
                        display: "inline-block",
                        background: "#D3CEDF",
                        borderRadius: 10,
                      }}
                    >
                      {item.answer}
                    </div>
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
            onClick={() => onClick()}
          >
            <Link to="/">테스트 다시하기</Link>
          </Button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            fontFamily: "KCCChassam",
            background: "#F2D7D9",
            height: "800px",
            paddingTop: 150,
            margin: "0 auto",
            width: "80%",
          }}
        >
          <div>진행된 평가가 없습니다 평가를 먼저 진행해주세요</div>
          <Button
            style={{
              marginTop: 30,
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
  }
}

export default MyResult;
