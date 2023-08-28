import "./Footer.css";
import React from "react";
import logo from '../../assets/logo-footer.png';

function template() {
  return (
    <div className="footer">
      <img src={logo} alt="logo" className='logo_footer' />
      <div>© 2020 Kasa. All rights reserved</div>
    </div>
  );
};

export default template;
