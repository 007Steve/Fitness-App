import React from "react";
import "../styles/Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__imageContainer">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_200_200/0/1600449353015?e=1617235200&v=beta&t=cs4Z_B30SCOBZAsPeS6u7DkLGLbrCUFPE4t2Dcg9NA8"
          alt=""
        />
      </div>

      <h2 className="sidebar__name">Stephen</h2>
      <h4 className="sidebar__location">Location</h4>

      <div className="sidebar__links">
        <div></div>
      </div>
    </div>
  );
}
