import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const Crud = () => {
  const myBooks = [
    {
      ID: "1",
      Book_Name: "Computer Architecture",
      Category: "Computers",
      Price: 125.6,
    },
    {
      ID: "2",
      Book_Name: "Asp.Net 4 Blue Book",
      Category: "Programming",
      Price: 56.0,
    },
    {
      ID: "3",
      Book_Name: "Popular Science",
      Category: "Science",
      Price: 210.4,
    },
  ];
  const columns = [];
  const category = ["Business", "Computers", "Programming", "Science"];

  const dataColumns =
    myBooks &&
    Object.keys(myBooks[0])?.map((key) => (
      <span>
        {columns.push({
          title: key,
          dataIndex: key,
          sorter: true,
        })}
      </span>
    ));
  console.log("dataColumns", dataColumns);

  return (
    <div>
      <Table columns={columns} dataSource={myBooks} />
    </div>
  );
};

export default Crud;
