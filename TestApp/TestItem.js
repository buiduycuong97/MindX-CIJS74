import React, { useEffect, useState } from "react";

const TestItem = (props) => {
  const [data, setData] = useState(props.dataItem);
  const [timer, setTimer] = useState(props.dataItem.duration);
  const [answerData, setAnswerData] = useState([]);

  const handleCheck = (question, answer) => {
    setAnswerData((prevItems) => {
      const isExisted = prevItems.some((item) => item.question === question);
      if (!isExisted) {
        return [...prevItems, { question: question, answer: answer }];
      } else {
        prevItems.map((item) => {
          if (item.question === question) {
            return (item.answer = answer);
          }
          return item;
        });
        return [...prevItems];
      }
    });
  };
  const handleCalculatedScore = (answerData) => {
    let score = 0;
    for (let value = 0; value <= answerData.length - 1; value++) {
      if (answerData[value].answer === data.questions[value].correct)
        score = score + 2;
    }
    props.handleShowTestScore(score, data.id);
  };
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    setData(props.dataItem);
    if (timer === 0) handleCalculatedScore(answerData);
    return () => {
      clearInterval(countdown);
    };
  }, [answerData, props, timer]);

  return (
    <div >
      <div >
        <h1 >Test: {data.id}</h1>
        <div >{timer}</div>
      </div>
      {data.questions.map((item, index1) => {
        return (
          <div key={index1} >
            <h3 >
              Ques {index1 + 1}: {item.ask}
            </h3>
            {item.choices.map((value, index2) => {
              return (
                <div key={index2} >
                  <input
                    
                    type="radio"
                    name={index1}
                    onChange={() => {
                      handleCheck(index1, index2);
                    }}
                  />
                  <p >{value}</p>
                </div>
              );
            })}
          </div>
        );
      })}
      <button
        
        onClick={() => {
          handleCalculatedScore(answerData);
        }}
      >
        Done
      </button>
    </div>
  );
};

export default TestItem;
