import React from "react";

const TestScore = (props) => {
  return (
    <div>
      <div>
        Done <br />
        <h1>Test {props.testScoreData.name}</h1>
      </div>
      <div>{props.testScoreData.score}</div>
      <button
        onClick={() =>
          props.handleExit({
            showTestItem: false,
            showTestScore: false,
            showTestList: true,
            showSearch: true,
          })
        }
      >
        Close
      </button>
    </div>
  );
};

export default TestScore;
