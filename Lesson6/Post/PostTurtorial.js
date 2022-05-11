import React, { useState, useSyncExternalStore } from "react";
import PostCreate from "./PostCreate";
import PostItem from "./PostItem";

const PostTurtorial = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "facebook",
      content: "abc",
      date: "1/1/2021",
      like: 10,
    },
    {
      id: 2,
      title: "instagram",
      content: "xyz",
      date: "1/1/2021",
      like: 20,
    },
    {
      id: 3,
      title: "zalo",
      content: "abc",
      date: "1/1/2021",
      like: 30,
    },
  ]);

  const add = (title, content) => {
    const newPost = {
      id: Date.now(),
      title: title,
      content: content,
      date: new Date().toISOString(),
      like: Math.floor(Math.random() * 50),
    };
    const newData = [newPost, ...data];
    setData(newData);
  };

  const saveItem = (id, newTitle, newContent) => {
    const clone = [...data];
    clone.map((item) => {
      if (item.id === id) {
        item.title = newTitle;
        item.content = newContent;
      }
    });
    setData(clone);
  };

  const like = (id) => {
    const clone = [...data];
    clone.map((item) => {
      if (item.id === id) {
        item.like += 1;
      }
    });
    setData(clone);
  };
  const liked = (id) => {
    const clone = [...data];
    clone.map((item) => {
      if (item.id === id) {
        item.like -= 1;
      }
    });
    setData(clone);
  };
  return (
    <div>
      <PostCreate onAddItem={add}></PostCreate>
      <br />
      <div>
        {data.map((post) => {
          return (
            <PostItem
              id={post.id}
              key={post.id}
              title={post.title}
              content={post.content}
              date={post.date}
              like={post.like}
              onSaveItem={saveItem}
              onLiked={like}
              onUnLiked={liked}
            ></PostItem>
          );
        })}
      </div>
    </div>
  );
};

export default PostTurtorial;
