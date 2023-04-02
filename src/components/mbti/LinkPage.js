import React from "react";

function LinkPage(porps) {
  const { answerSheet } = porps;

  const countryType = {
    한국: 0,
    "영국 런던": "1",
    "미국 뉴욕": 2,
    "캐나다 나이아가라 폭포": 3,
    "프랑스 파리": 4,
    시드니: 5,
    이스탄불: 6,
    "탄자니아 세렝게티": 7,
    북극: 8,
    보라카이: 9,
    "중국 만리장성": 10,
    싱가폴: 11,
    "이집트 사막": 12,
    "미국 아이오와": 13,
    스위스: 13,
  };
  let countryNum = answerSheet && countryType[answerSheet];
  console.log("countryNum", countryNum);
  return <div>LinkPage</div>;
}

export default LinkPage;
