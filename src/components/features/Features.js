import React from "react";
import "./Features.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Features = () => {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitle">بازپرداخت</span>
        <div className="featureContainer">
          <span className="featureMoney">۲,۴۱۵ تومان</span>
          <span className="featureRate">
            ۱.۴- <ArrowDownwardIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">در مقایسه با ماه گذشته</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">فروش</span>
        <div className="featureContainer">
          <span className="featureMoney">۱,۹۴۵ تومان</span>
          <span className="featureRate">
            ۱.۴- <ArrowDownwardIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">در مقایسه با ماه گذشته</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">قیمت</span>
        <div className="featureContainer">
          <span className="featureMoney">۴,۷۰۰ تومان</span>
          <span className="featureRate">
            ۲.۴+ <ArrowUpwardIcon className="featureIcon" />
          </span>
        </div>
        <span className="featureSub">در مقایسه با ماه گذشته</span>
      </div>
    </div>
  );
};

export default Features;
