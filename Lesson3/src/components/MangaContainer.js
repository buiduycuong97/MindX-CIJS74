import React from "react";
import "./MangaContainer.css";

const MangaContainer = ({ data }) => {
  
  return (
    <div className="body">
      <div className="items">
        <div className="box">
          <img className="img" src={data.photo} alt=""></img>
          <div className="view_cmt">
            <span>
              {data.view_count} <i class="bi bi-eye-fill"> </i>{" "}
            </span>
            <span>
              {data.comment_count} <i class="bi bi-chat-dots-fill"> </i>
            </span>
          </div>
        </div>
        <h2 className="name"> {data.name} </h2>
        <div className="chap_date">
          <span>Chapter {data.lastest_chapter} </span>
          <span> {data.date_modified} </span>
        </div>
      </div>
    </div>
  );
};
export default MangaContainer;
