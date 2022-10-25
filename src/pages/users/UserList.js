import React, { useState } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const UserList = () => {
  const [userDatas, setUserDatas] = useState(userRows);
  const deletUser = (id) => {
    setUserDatas(userDatas.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "شناسه", width: 90 },
    {
      field: "user",
      headerName: "کاربر",
      width: 200,
      renderCell: (params) => {
        return (
          <Link>
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="user" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "ایمیل",
      width: 200,
    },
    {
      field: "status",
      headerName: "وضعیت",
      width: 200,
    },
    {
      field: "transaction",
      headerName: "تراکنش",
      width: 160,
    },
    {
      field: "active",
      headerName: "عملیات",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">ویرایش</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => deletUser(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userDatas}
        columns={columns}
        pageSize={4}
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
