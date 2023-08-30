import "./Collapse.css";
import React, { useState } from "react";

export default function Collapse({ items }) {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {items.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.paragraphe}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
