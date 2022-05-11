import React, { useState } from "react";

const PostCreate = ({ onAddItem }) => {
  const [isCreating, setIsCreating] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreat = (e) => {
    e.preventDefault();
    onAddItem(title, content);
    setTitle("");
    setContent("");
    setIsCreating(true);
  };

  return (
    <div>
      <button onClick={() => setIsCreating(!isCreating)}>Tạo bài viết</button>
      <br />
      <br />
      {isCreating || (
        <form style={{ width: "30%" }} action="" onSubmit={handleCreat}>
          <div>
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Tiêu đề"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <textarea
              style={{ resize: "none", width: "100%" }}
              rows={5}
              placeholder="Nội dung"
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Post</button>
        </form>
      )}
    </div>
  );
};

export default PostCreate;
