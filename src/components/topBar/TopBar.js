import React from "react";
import "./TopBar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import adminPhoto from "../../images/gilak.jfif";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarRight">
          <img src={adminPhoto} alt="" />
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <div className="topIconBadge">۲</div>
          </div>
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <div className="topIconBadge">۲</div>
          </div>
        </div>
        <h3 className="topbarLeft">محمود گیلک</h3>
      </div>
    </div>
  );
};

export default TopBar;
