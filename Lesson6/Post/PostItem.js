import React, { useState } from "react";
import "./PostItem.css";

const PostItem = ({
  id,
  title,
  content,
  date,
  like,
  onSaveItem,
  onLiked,
  onUnLiked,
}) => {
  const [isEditing, setIsEditing] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [isliked, setIsLiked] = useState(true);

  const edit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };
  const save = (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) {
      alert("phai nhap ky tu");
    } else {
      setIsEditing(true);
    }
    onSaveItem(id, newTitle, newContent);
    setNewTitle("");
    setNewContent("");
  };

  const newLike = (e) => {
    e.preventDefault();
    onLiked(id);
    setIsLiked(false);
  };

  const newLiked = (e) => {
    e.preventDefault();
    onUnLiked(id);
    setIsLiked(true);
  };
  return (
    <form className="form">
      {isEditing ? (
        <h1 className="title">{title}</h1>
      ) : (
        <div>
          <input
            defaultValue={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          ></input>
          <button onClick={() => setIsEditing(true)}>X</button>
        </div>
      )}
      {isEditing ? (
        <p className="content">{content}</p>
      ) : (
        <div>
          <textarea
            defaultValue={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          ></textarea>
        </div>
      )}
      <div className="info">
        <div className="date">
          <i className="bi bi-calendar2-day"></i>
          <span>{date}</span>
        </div>
        <div className="like">
          <i className="bi bi-hand-thumbs-up-fill"></i>
          <span>{like}</span>
        </div>
      </div>
      <div className="btn">
        {isEditing ? (
          <button onClick={edit}>Sua</button>
        ) : (
          <button onClick={save}>Luu</button>
        )}
        {isliked ? (
          <button onClick={newLike}>Thích</button>
        ) : (
          <button onClick={newLiked}>Đã thích</button>
        )}
      </div>
    </form>
  );
};

export default PostItem;
