import React, { useEffect, useState } from "react";
import { infoList } from "./mbtiData";
import "./style.css";
import { Button } from "antd";
import { shareKakao } from "../../utils/shareKakaoLink";
import { Link, useParams } from "react-router-dom";

function MbtiResult(props) {
  const { id } = useParams();
  const { answerSheet } = props;
  const [testPass, setTestPass] = useState(false);

  useEffect(() => {
    console.log("answerSheet", answerSheet);
    if (answerSheet === undefined) {
      console.log("135개별페이지");
      setTestPass(false);
      console.log("params", id);
    } else {
      console.log("135테스트후 페이지");
      setTestPass(true);
      console.log("params", id);
    }
  }, [answerSheet]);

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
  let countryNum = countryType[answerSheet];
  let imgNum = "";
  return (
    <>
      {testPass ? (
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
                          marginRight: 5,
                          background: "#D3CEDF",
                          fontSize: "0.5rem",
                        }}
                      >
                        <Link to="/">테스트 다시하기</Link>
                      </Button>
                      <Button
                        onClick={() => shareKakao(infoList, countryNum)}
                        id="kakaotalk-sharing-btn"
                        style={{
                          fontFamily: "KCCChassam",
                          borderRadius: 10,
                          fontSize: "0.5rem",
                        }}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/asset/KakaoLogo2.png`}
                          alt={"Kakao Logo"}
                          style={{ width: 30, paddingRight: 5 }}
                        />
                        공유
                      </Button>
                      <Button
                        style={{
                          fontFamily: "KCCChassam",
                          borderRadius: 10,
                          background: "#D3CEDF",
                          fontSize: "0.5rem",
                          marginLeft: 5,
                        }}
                      >
                        <Link to="/crud/select/my_result">
                          내가 선택한 답변 보기
                        </Link>
                      </Button>
                    </div>
                  </>
                );
              }
            })}
        </>
      ) : (
        <>
          {infoList &&
            infoList.map((item) => {
              if (String(item.data_idx) === id) {
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
                      {item.data_type}
                    </h1>
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
                            src={`${process.env.PUBLIC_URL}/asset/travelImg/travel(${item.data_idx}).png`}
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
                          onClick={() => shareKakao(infoList, countryNum)}
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
                  </>
                );
              }
            })}
        </>
      )}
    </>
  );
}

export default MbtiResult;
