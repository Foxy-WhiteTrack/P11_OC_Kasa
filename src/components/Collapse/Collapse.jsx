import "./Collapse.css";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


export default function Collapse({ items, customClass }) {
  const [openItems, setOpenItems] = useState([]);

  const toggle = (i) => {
    if (openItems.includes(i)) {
      setOpenItems(openItems.filter(itemIndex => itemIndex !== i));
    } else {
      setOpenItems([...openItems, i]);
    }
  };

  return (
    <div className={`wrapper ${customClass}`}>
      <div className="accordion">
        {items.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <span className="chevron" >{openItems.includes(i) ? <FaChevronUp /> : <FaChevronDown />}</span>
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
