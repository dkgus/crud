import React, { useState } from "react";
import { Button, Radio } from "antd";

function Quiz() {
  const [start, setStart] = useState(false);
  const questions = [
    {
      order: 1,
      question: "What is 2*5?",
      choices: [2, 5, 10, 15, 20],
      correctAnswer: 2,
    },
    {
      order: 2,
      question: "What is 3*6?",
      choices: [3, 6, 9, 12, 18],
      correctAnswer: 4,
    },
    {
      order: 3,
      question: "What is 8*9?",
      choices: [72, 99, 108, 134, 156],
      correctAnswer: 0,
    },
    {
      order: 4,
      question: "What is 1*7?",
      choices: [4, 5, 6, 7, 8],
      correctAnswer: 3,
    },
    {
      order: 5,
      question: "What is 8*8?",
      choices: [20, 30, 40, 50, 64],
      correctAnswer: 4,
    },
  ];

  const onClick = () => {
    setStart(true);
  };
  return (
    <div>
      Dynamic Quiz!
      <div>do you wanna start?</div>
      <Button onClick={onClick}>
        {start ? "you are playing already!" : "Start!"}
      </Button>
      <div>
        {start ? (
          <>
            {questions &&
              questions.map((item) => {
                console.log("item.choices", item.choices);

                if (item.order === 1) {
                  return (
                    <>
                      <div>{item.question}</div>
                      <div>
                        {item.choices.map((elem, idx) => (
                          <Radio.Group>
                            <Radio value={elem}>{elem}</Radio>
                          </Radio.Group>
                        ))}
                      </div>
                    </>
                  );
                }
              })}
            <div>
              {/*
              <Radio.Group options={plainOptions} onChange={onChange1} value={value1} /> */}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Quiz;
