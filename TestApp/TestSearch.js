import React, {useState} from "react";

const TestSearch = (props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <form >
        <input
          type="text"
          placeholder="Enter..."
          
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          type="submit"
        
          onClick={(e) => {
            e.preventDefault();
            props.handleSearch(inputValue);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default TestSearch;
