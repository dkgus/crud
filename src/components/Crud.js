import React from "react";
import { Table, Button } from "antd";
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

  //   let table = document.querySelector(".custom_table");
  //   table && table.setAttribute("id", "booksTable"); // table에 id부여

  return (
    <div>
      <Button>행추가</Button>
      <Table
        className="custom_table"
        id="custom_table1"
        columns={columns}
        dataSource={myBooks}
        bordered
        pagination={false}
        onRow={(record, index) => {
          return {
            onClick: (event) => {
              let tableTr = event.target.parentElement;
              tableTr && tableTr.classList.add("clicked_row");
              if (tableTr.classList.value.includes("clicked_row")) {
                console.log("체크체크");
                tableTr.style.backgroundColor = "gray";
              } else {
              }
            },
          };
        }}
      />
    </div>
  );
};

export default Crud;
