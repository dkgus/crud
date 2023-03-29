import React, { useState, useEffect } from "react";
import { qnaList, pointArr } from "./mbtiData";
import { Button, Radio } from "antd";
import MbtiResult from "./MbtiResult";

function MbtiSelect() {
  let select = [];
  const [counter, setCounter] = useState(0);
  const [answerSheet, setAnserSheet] = useState({});

  useEffect(() => {
    console.log("answerSheet", answerSheet);
  }, [answerSheet]);

  const onNext = () => {
    setCounter((num) => num + 1);
  };
  const onPrev = () => {
    setCounter((num) => num - 1);
  };
  const onSelect = (e, arr, idx) => {
    arr.a.forEach((item) => {
      if (item.answer === e.target.value) {
        item.type.forEach((elem) => {
          for (let i = 0; i < pointArr.length; i++) {
            if (pointArr[i].name === elem) {
              pointArr[i].value += 1;
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
                <div>{item.q}</div>
                <Radio.Group>
                  {select.map((item) => {
                    return (
                      <>
                        <Radio
                          value={item.answer}
                          onChange={(e) => onSelect(e, qnaList[idx], idx)}
                        >
                          {item.answer}
                        </Radio>
                      </>
                    );
                  })}
                </Radio.Group>
              </>
            );
          }
        })}
      {counter === qnaList.length ? (
        <>
          <div>
            <MbtiResult answerSheet={answerSheet} />
          </div>
        </>
      ) : null}
      <div>
        <Button onClick={onPrev}>Prev</Button>
        <Button
          onClick={onNext}
          disabled={counter === qnaList.length ? true : false}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default MbtiSelect;
