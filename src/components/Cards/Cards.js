import React    from "react";
import template from "./Cards.jsx";

class Cards extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Cards;
