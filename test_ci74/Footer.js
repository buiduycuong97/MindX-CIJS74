import { useEffect } from "react";
import { useState } from "react";
import { useTodo } from "./todoContext";

const Footer = () => {
  const { setChangeLanguage } = useTodo();
  useEffect(() => {
    const style = document.querySelectorAll(".languague-picker");
    style.forEach((item) => {
      item.addEventListener("click", (e) => {
        style.forEach((item2) => {
          item2.removeAttribute("style");
        });
        e.target.style = "opacity:1";
      });
    });
  }, [setChangeLanguage]);
  return (
    <div>
      <h3>Made by MindX π₯</h3>
      <div>
        <span>Available on:</span>
        <span
          className="languague-picker"
          onClick={(e) => {
            setChangeLanguage("vi");
          }}
        >
          π»π³
        </span>
        <span
          className="languague-picker"
          onClick={(e) => {
            setChangeLanguage("en");
          }}
        >
          πΊπΈ
        </span>
      </div>
    </div>
  );
};

export default Footer;
