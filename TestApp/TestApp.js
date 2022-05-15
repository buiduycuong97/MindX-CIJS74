import React, {useEffect, useRef, useState} from "react";
import testData from "./TestData";
import TestItem from "./TestItem";
import TestList from "./TestList";
import TestScore from "./TestScore";
import TestSearch from "./TestSearch";

const TestApp = () => {
  const [data, setData] = useState(testData);
  const [dataRender, setDataRender] = useState([...data]);
  const [testItemData, setTestItemData] = useState(null);
  const [testScoreData, setTestScoreData] = useState({});
  const [show, setShow] = useState({
    showTestItem: false,
    showTestScore: false,
    showTestList: true,
    showSearch: true,
  });
  const testAppRef = useRef();
  const handleShowTestItem = (data) => {
    setTestItemData(data);
    setShow({
      showTestItem: true,
      showTestScore: false,
      showTestList: false,
      showSearch: false,
    });
  };
  const handleShowTestScore = (score, id) => {
    setTestScoreData({id, score});
    setShow({
      showTestItem: false,
      showTestScore: true,
      showTestList: false,
      showSearch: false,
    });
  };
  const handleSearch = (searchValue) => {
    const result = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.categories.some((value) =>
          value.toLowerCase().includes(searchValue.toLowerCase())
        )
    );
    setDataRender(result);
  };
  useEffect(() => {
    testAppRef.current.scrollTop = 0;
  }, [show]);
  return (
    <div
      ref={testAppRef}
      
    >
      {show.showSearch && (
        <div >
          <TestSearch handleSearch={handleSearch}></TestSearch>
        </div>
      )}

      {show.showTestList && (
        <TestList
          data={dataRender}
          handleShowTestItem={handleShowTestItem}
        ></TestList>
      )}
      {show.showTestItem && (
        <TestItem
          dataItem={testItemData}
          handleShowTestScore={handleShowTestScore}
        ></TestItem>
      )}
      {show.showTestScore && (
        <div className="h-full">
          <TestScore
            testScoreData={testScoreData}
            handleExit={setShow}
          ></TestScore>
        </div>
      )}
    </div>
  );
};

export default TestApp;
