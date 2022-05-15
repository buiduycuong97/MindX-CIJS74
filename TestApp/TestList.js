import React from "react";

const TestList = ({ ...props }) => {
  return (
    <div >
      {props.data.length > 0 &&
        props.data.map((item) => {
          return (
            <div
              key={item.id}
              
              onClick={(e) => {
                props.handleShowTestItem(item);
              }}
            >
              <div >
                <h1 > {item.name} </h1>
                <p>Time: {item.duration} seconds </p>
                <div>
                  {item.categories.map((value, index) => {
                    return (
                      <span
                        key={index}
                        
                      >
                        {value}
                      </span>
                    );
                  })}
                </div>
              </div>
              <p>
                Number of questions: {item.questions.length}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default TestList;
