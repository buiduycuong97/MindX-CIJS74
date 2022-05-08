import React, { useState } from "react";
import JAVCreateForm from "./JAVCreateForm";
import JAVItem from "./JAVItem";

export default function JAVTutorial() {
  const [data, setData] = useState([
    { id: 0, name: "JAV001", date: "2022/05/06", watched: true },
    { id: 1, name: "JAV002", date: "2022/05/07", watched: false },
    { id: 2, name: "JAV003", date: "2022/05/08", watched: false },
  ]);

  const addItem = (name) => {
    console.log("Tạo thêm 1 item với name là " + name);
    // tạo 1 item mới
    const newItem = {
      id: Date.now(),
      name: name,
      date: new Date().toISOString(),
      watched: false,
    };
    // tạo 1 mảng mới: gồm tất cả phần tử cũ của data + newItem
    const newData = [...data, newItem]; // newData phải là 1 mảng gồm tất cả phần tử cũ của data + newItem
    setData(newData);
  };

  const deleteItem = (itemId) => {
    console.log("Xóa 1 item có id là " + itemId);
    const clone = data.filter((item) => item.id !== itemId);
    setData(clone);
  };

  const checkItem = (itemId) => {
    const clone = [...data];
    clone.map((item) => {
      if (item.id === itemId) {
        item.watched = true;
      }
    });
    setData(clone);
  };

  return (
    <div className="jav-tutorial">
      <h1>Japanese Anti Virus</h1>
      <JAVCreateForm onAddItem={addItem} />
      <div className="jav-list">
        {data.map((jav) => {
          return (
            <div key={jav.id}>
              <JAVItem
                id={jav.id}
                name={jav.name}
                date={jav.date}
                watched={jav.watched}
                onDeleteItem={deleteItem}
                onCheckItem={checkItem}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
