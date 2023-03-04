import React, { useState, useEffect } from "react";
import { Table, Select, Input } from "antd";
import "antd/dist/antd.css";

const Crud = () => {
  const { Option } = Select;
  const lastRow = [];
  const columns = [];

  const [data, setData] = useState([
    {
      id: "1",
      Book_Name: "Computer Architecture",
      category: "Computers",
      price: 125.6,
    },
    {
      id: "2",
      Book_Name: "Asp.Net 4 Blue Book",
      category: "Programming",
      price: 56.0,
    },
    {
      id: "3",
      Book_Name: "Popular Science",
      category: "Science",
      price: 210.4,
    },
  ]);
  const copyData = [...data];
  const category = ["Business", "Computers", "Programming", "Science"];

  const dataColumns =
    data &&
    Object.keys(data[0])?.map((key) => (
      <span>
        {columns.push({
          title: key,
          dataIndex: key,
          sorter: true,
          align: "center",
          render: (text, record, index) => {
            if (!record.InputCheck && record.id !== "") {
              return text;
            } else if (record.InputCheck === "Y" && key === "id") {
              return index + 1;
            } else if (record.InputCheck === "Y" && key === "category") {
              return (
                <Select style={{ width: "100%", borderRadius: 10 }}>
                  {category.map((item) => {
                    return (
                      <>
                        <Option value={item} />
                      </>
                    );
                  })}
                </Select>
              );
            } else if (record.InputCheck === "Y" && key !== "id") {
              return <Input />;
            }
          },
        })}
      </span>
    ));

  useEffect(() => {
    let emptyObj = {
      id: "",
      Book_Name: "",
      category: "",
      price: "",
      InputCheck: "Y",
    };
    lastRow.push(...copyData, emptyObj);
    setData(lastRow);
  }, []);

  return (
    <div>
      <Table
        className="custom_table"
        id="custom_table1"
        columns={columns}
        dataSource={data}
        style={{ width: "80%", margin: "0 auto", paddingTop: 30 }}
        bordered
        pagination={false}
        onRow={(record, index) => {
          return {
            onClick: (event) => {
              let tableTr = event.target.parentElement;
              tableTr && tableTr.classList.toggle("clicked_row");
              if (tableTr.classList.contains("clicked_row")) {
                tableTr.style.backgroundColor = "gray";
              } else {
                tableTr.style.backgroundColor = "#fff";
              }
            },
          };
        }}
      />
    </div>
  );
};

export default Crud;
