import React from "react";
import "./WidgetLg.css";
import { transactions } from "../../data";

const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <h3 className="WidgetLgTitle">آخرین تراکنش‌ها</h3>
      <table className="WidgetLgTable">
        <tr className="WidgetLgTr">
          <th className="WidgetLgTh">مشتری</th>
          <th className="WidgetLgTh">تاریخ</th>
          <th className="WidgetLgTh">مبلغ</th>
          <th className="WidgetLgTh">وضعیت</th>
        </tr>
        {transactions.map((item) => (
          <tr className="WidgetLgTr" key={item.id}>
            <td className="WidgetLgUser">
              <img src={item.img} alt="user" className="WidgetLgImg" />
              <span className="WidgetLgName">{item.customer}</span>
            </td>
            <td className="WidgetLgDate">{item.date}</td>
            <td className="WidgetLgAmount">{item.amount}</td>
            <td className="WidgetLgStatus">
              <button className={`WidgetLgButton ${item.statuss}`}>
                {item.status}
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLg;
