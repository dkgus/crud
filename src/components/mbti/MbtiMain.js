import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./style.css";
import mainImg from "./travelImg/Coffe call.png";
function MbtiMain() {
  return (
    <div
      style={{
        background: "#F2D7D9",
        margin: "0 auto",
        width: "80%",
        height: "800px",
        fontFamily: "KCCChassam",
      }}
    >
      <img
        src={mainImg}
        alt=""
        style={{ width: "350px", height: "400px", paddingTop: 100 }}
      ></img>
      <br />
      <h2>찰떡 여행지 MBTI</h2>
      <br />
      <Button
        size="large"
        style={{
          fontFamily: "KCCChassam",
          borderRadius: 10,
          marginTop: 30,
        }}
      >
        <Link to={`/crud/select`}>시작하기</Link>
      </Button>
    </div>
  );
}

export default MbtiMain;
