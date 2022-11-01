import React from "react";
import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "./../../data";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">اعضای جدید</span>
      <ul className="widgetSmList">
        {newMembers.map((member) => (
          <li className="widgetSmItem" key={member.id}>
            <img src={member.img} alt="user" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{member.username}</span>
              <span className="widgetSmUserTitle">{member.title}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
