import React, { useEffect, useState } from "react";
import { Button, Radio } from "antd";

function Quiz() {
  const questions = [
    {
      order: 1,
      question: "What is 2*5?",
      choices: [2, 5, 10, 15, 20],
      correctAnswer: 10,
    },
    {
      order: 2,
      question: "What is 3*6?",
      choices: [3, 4, 9, 12, 18],
      correctAnswer: 18,
    },
    {
      order: 3,
      question: "What is 8*9?",
      choices: [4, 72, 108, 134, 156],
      correctAnswer: 72,
    },
    {
      order: 4,
      question: "What is 1*7?",
      choices: [4, 3, 6, 7, 8],
      correctAnswer: 7,
    },
    {
      order: 5,
      question: "What is 8*8?",
      choices: [20, 4, 40, 50, 64],
      correctAnswer: 64,
    },
  ];
  const [start, setStart] = useState(false);
  const [answer, setAnswer] = useState("");
  const [count, setCount] = useState(1);
  const [answerSheet, setAnswerSheet] = useState([]);

  useEffect(() => {}, [answer, count]);

  const onClick = () => {
    setStart(true);
  };

  const onChange = (e, rightAs) => {
    let answerArr = [...answerSheet];
    //답이 맞을 때에만 배열에 들어가게끔
    if (e.target.value === rightAs) {
      setAnswer(e.target.value);
      answerArr.push(e.target.value);
    }
    setAnswerSheet(answerArr);
  };

  const nextBtn = () => {
    setCount(count + 1);
  };
  const prevBtn = () => {
    setCount(count - 1);
  };

  return (
    <div>
      Dynamic Quiz!
      <div>do you wanna start?</div>
      <Button onClick={onClick} disabled={start ? true : false}>
        {start ? "you are playing already!" : "Start!"}
      </Button>
      <div>
        {start ? (
          <>
            {questions &&
              questions.map((item) => {
                if (item.order === count) {
                  return (
                    <>
                      <div style={{ paddingTop: 30 }}>{item.question}</div>
                      <div>
                        <Radio.Group>
                          {item.choices.map((elem) => (
                            <Radio
                              value={elem}
                              onChange={(e) => onChange(e, item.correctAnswer)}
                            >
                              {elem}
                            </Radio>
                          ))}
                        </Radio.Group>
                      </div>
                    </>
                  );
                } else if (questions.length < count || questions.length === 0) {
                  return null;
                }
              })}
            <div>
              {questions.length < count ? (
                <>당신의 정답 개수는 {answerSheet.length}개 입니다 !</>
              ) : null}

              <div style={{ paddingTop: 30 }}>
                <Button onClick={prevBtn} disabled={count < 1 ? true : false}>
                  prev
                </Button>
                <Button
                  onClick={nextBtn}
                  disabled={questions.length < count ? true : false}
                >
                  Next
                </Button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Quiz;
