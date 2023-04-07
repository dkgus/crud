import React, { useEffect } from "react";
import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
function MbtiMain(props) {
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
        src={`${process.env.PUBLIC_URL}/asset/travelImg/Coffe call.png`}
        alt=""
        style={{ width: "350px", height: "400px", paddingTop: 100 }}
      ></img>
      <br />
      <h2>찰떡 여행 MBTI</h2>
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
