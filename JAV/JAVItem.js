import React from "react";

export default function JAVItem({
  id,
  name,
  date,
  watched,
  onDeleteItem,
  onCheckItem,
}) {
  const remove = () => {
    onDeleteItem(id);
  };
  const check = () => {
    onCheckItem(id);
  };
  return (
    <div className="jav-item">
      <div className="item-info">
        <b className="item-name">{name}</b>
        <i className="item-date">{date}</i>
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <code>{watched ? "watched" : ""}</code>
      </div>

      <div className="item-action">
        <button onClick={check}>Xem</button>
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={remove}>Xóa</button>
      </div>
    </div>
  );
}
