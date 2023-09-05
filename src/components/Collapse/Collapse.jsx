import "./Collapse.css";
import React, { useState } from "react";

export default function Collapse({ items }) {
  const [openItems, setOpenItems] = useState([]);

  const toggle = (i) => {
    if (openItems.includes(i)) {
      setOpenItems(openItems.filter(itemIndex => itemIndex !== i));
    } else {
      setOpenItems([...openItems, i]);
    }
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {items.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <span>{openItems.includes(i) ? "-" : "+"}</span>
            </div>
            <div className={openItems.includes(i) ? "content show" : "content"}>
              {item.paragraphe}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
