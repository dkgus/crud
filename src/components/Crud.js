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
      bookName: "Computer Architecture",
      category: "Computers",
      price: 125.6,
    },
    {
      id: "2",
      bookName: "Asp.Net 4 Blue Book",
      category: "Programming",
      price: 56.0,
    },
    {
      id: "3",
      bookName: "Popular Science",
      category: "Science",
      price: 210.4,
    },
  ]);
  const [bookNameVal, setbookNameVal] = useState("");
  const [price, setPrice] = useState(0);
  const [tableIdx, setTableIdx] = useState();
  const copyData = [...data];
  const category = ["Business", "Computers", "Programming", "Science"];

  useEffect(() => {
    let emptyObj = {
      id: "",
      bookName: "",
      category: "",
      price: "",
      inputCheck: "Y",
    };
    lastRow.push(...copyData, emptyObj);
    setData(lastRow);
  }, []);

  // useEffect(() => {
  //   console.log("price", price);
  //   console.log("bookNameVal", bookNameVal);
  //   console.log("copyData", copyData);
  //   console.log("tableIdx", tableIdx);
  //   console.log("copyData[tableIdx]", copyData[tableIdx]);
  //
  // }, [price, bookNameVal, data, tableIdx]);

  const onChange = (e, type) => {
    if (type === "bookName") {
      setbookNameVal(e.target.value);
      copyData[tableIdx].bookName = e.target.value;
    } else {
      setPrice(e.target.value);
      copyData[tableIdx].price = e.target.value;
    }
  };
  console.log("lastCheck", copyData);

  const dataColumns =
    data &&
    Object.keys(data[0])?.map((key) => (
      <span>
        {columns.push({
          title: key,
          dataIndex: key,
          sorter: true,
          align: "center",
          onCell: (record, rowIndex) => {
            return {
              onClick: (ev) => {
                setTableIdx(rowIndex);
              },
            };
          },
          render: (text, record, index) => {
            if (!record.inputCheck && record.id !== "") {
              return text;
            } else if (record.inputCheck === "Y" && key === "id") {
              return index + 1;
            } else if (record.inputCheck === "Y" && key === "category") {
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
            } else if (record.inputCheck === "Y" && key !== "id") {
              if (key === "bookName") {
                return (
                  <Input
                    onChange={(e) => onChange(e, "bookName")}
                    value={bookNameVal}
                  />
                );
              } else if (key === "price") {
                return (
                  <Input onChange={(e) => onChange(e, "price")} type="number" />
                );
              }
            }
          },
        })}
      </span>
    ));

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
