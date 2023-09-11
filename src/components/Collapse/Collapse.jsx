import "./Collapse.css";
import React, { useState } from "react";
import { ChevronUp } from "../Icons/ChevronUp";
import { ChevronDown } from "../Icons/ChevronDown";


export default function Collapse({ items, customClass }) {
  const [isOpen, setIsOpen] = useState([false]);

  const toggleCollapse = (index) => {
    setIsOpen((prevOpenState) => {
      const newOpenState = [...prevOpenState];
      newOpenState[index] = !newOpenState[index];
      return newOpenState;
    });
  };

  return (
    <div className={`wrapper ${customClass}`}>
      <div className="accordion">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <div className="title" onClick={() => toggleCollapse(index)}>
              <h2>{item.title}</h2>
              <span className="chevron">
                {isOpen[index] ? <ChevronUp /> : <ChevronDown />}
              </span>
            </div>
            <div className={isOpen[index] ? "content show" : "content"}>
              {item.paragraphe}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}