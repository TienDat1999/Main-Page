import React, { Component } from "react";
import ThemContext from '../AppContext.js'
import "./sideBar.scss";
import SearchSideBar from "./SearchSideBar";
import CardTeacher from "./CartTeacher";
import SubjectCodes from "./SubjectCodes";
import ThemeContext from "../AppContext.js";
export default function SideBar () {
  const name = React.useContext(ThemeContext);
    return (
      <div className="sidebar sidebar-cus">
        <div className="sidebar-wrapper">
          <CardTeacher/>
          <hr className="hr-cus" />
          <SearchSideBar/>
          <ul className="list-group vertical-menu">
            <SubjectCodes/>
          </ul>
        </div>
      </div>
    );
  
}
