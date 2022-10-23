import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidbar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper"></div>

      <div className="sidebarMenu">
        <h3 className="sidebarTitle">داشبورد</h3>
        <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyleIcon />
              خانه
            </li>
          </Link>
          <li className="sidebarListItem">
            <TimelineIcon />
            تجزیه و تحلیل
          </li>
          <li className="sidebarListItem">
            <TrendingUpIcon />
            فروش
          </li>
        </ul>
      </div>

      <div className="sidebarMenu">
        <h3 className="sidebarTitle">فهرست اصلی</h3>
        <ul className="sidebarList">
          <Link to="/users" className="link">
            <li className="sidebarListItem">
              <PermIdentityIcon />
              کاربرها
            </li>
          </Link>
          <Link to="/newUser" className="link">
            <li className="sidebarListItem">
              <PermIdentityIcon />
              کاربر جدید
            </li>
          </Link>
          <Link to="/products" className="link">
            <li className="sidebarListItem">
              <StorefrontIcon />
              محصولات
            </li>
          </Link>
          <li className="sidebarListItem">
            <AttachMoneyIcon />
            معاملات
          </li>
          <li className="sidebarListItem">
            <BarChartIcon />
            گزارش‌ها
          </li>
        </ul>
      </div>

      <div className="sidebarMenu">
        <h3 className="sidebarTitle">اطلاع‌رسانی</h3>
        <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem">
              <MailOutlineIcon />
              نامه‌ها
            </li>
          </Link>
          <li className="sidebarListItem">
            <DynamicFeedIcon />
            بازخورد
          </li>
          <li className="sidebarListItem">
            <ChatBubbleOutlineIcon />
            پیام‌ها
          </li>
        </ul>
      </div>

      <div className="sidebarMenu">
        <h3 className="sidebarTitle">کارکنان</h3>
        <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem">
              <WorkOutlineIcon />
              مدیریت
            </li>
          </Link>
          <li className="sidebarListItem">
            <TimelineIcon />
            تجزیه و تحلیل
          </li>
          <li className="sidebarListItem">
            <AdUnitsIcon />
            گزارش‌ها
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidbar;
