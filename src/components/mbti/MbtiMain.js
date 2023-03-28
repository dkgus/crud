import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
function MbtiMain() {
  return (
    <div>
      MbtiMain
      <br />
      <Button>
        <Link to={`/crud/select`}>시작하기</Link>
      </Button>
    </div>
  );
}

export default MbtiMain;
