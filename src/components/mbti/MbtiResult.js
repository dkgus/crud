import React from "react";
import { infoList } from "./mbtiData";
import "./style.css";
import { Button } from "antd";
import { shareKakao } from "../../utils/shareKakaoLink";
import { Link } from "react-router-dom";

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
                      src={`${process.env.PUBLIC_URL}/asset/travelImg/travel(${imgNum}).png`}
                      alt={imgNum}
                      className="resultImg"
                    ></img>
                  </div>
                  <div style={{ margin: "0 30px" }}>{item.desc}</div>
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
                  <Button
                    onClick={() => shareKakao(infoList, answerSheet)}
                    id="kakaotalk-sharing-btn"
                    style={{
                      fontFamily: "KCCChassam",
                      borderRadius: 10,
                    }}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/asset/KakaoLogo2.png`}
                      alt={"Kakao Logo"}
                      style={{ width: 30, paddingRight: 10 }}
                    />
                    공유하기
                  </Button>
                </div>
              </>
            );
          }
        })}
    </>
  );
}

export default MbtiResult;
