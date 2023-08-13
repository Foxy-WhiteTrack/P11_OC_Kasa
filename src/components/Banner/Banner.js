import React    from "react";
import template from "./Banner.jsx";

class Banner extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Banner;
