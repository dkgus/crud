import React, { useState, useEffect } from "react";
import { Table, Select, Input, Button, message, Popconfirm } from "antd";
import "antd/dist/antd.css";

const Crud = () => {
  const { Option } = Select;
  const lastRow = [];
  const columns = [];
  const deleteText = "해당 데이터를 삭제하시겠습니까?";
  const description = "해당 데이터는 복구되지 않습니다.";

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
  const [type, setType] = useState();
  const [tableIdx, setTableIdx] = useState();
  const [deleteList, setDeleteList] = useState([]);
  const [checkSave, setCheckSave] = useState(false);
  const copyData = [...data];
  const category = ["Business", "Computers", "Programming", "Science"];
  useEffect(() => {
    let emptyObj = {
      id: String(copyData.length + 1),
      bookName: "",
      category: "",
      price: "",
      inputCheck: "Y",
    };
    lastRow.push(...copyData, emptyObj);
    setData(lastRow);
  }, []);

  useEffect(() => {
    console.log("checkSave", checkSave);
    if (checkSave === true) {
      let table = document.querySelectorAll(".custom_table");
    } else {
      console.log("save아님");
    }
  }, [checkSave, copyData]);

  useEffect(() => {
    console.log("deleteList", deleteList);
  }, [deleteList]);

  const onChange = (e, type) => {
    if (type === "bookName") {
      const regExp = /^[가-힣\s]+$/;
      const ele = e.target;
      if (regExp.test(ele.value)) {
        ele.value = ele.value.replace(regExp, "");
      }
      if (!ele.value) {
        alert("영어로 입력해주세요.");
      }
      setbookNameVal(e.target.value);
      copyData[tableIdx].bookName = e.target.value;
    } else if (type === "price") {
      setPrice(e.target.value);
      copyData[tableIdx].price = Number(e.target.value);
    } else if (type === "category") {
      copyData[tableIdx].category = e;
    }

    setData(copyData);
  };
  console.log("data", data);

  const pressEnter = () => {
    if (
      copyData[tableIdx].category === "" ||
      copyData[tableIdx].bookName === ""
    ) {
      alert("저장에 필요한 데이터를 모두 입력해주세요.");
    } else {
      alert("데이터 저장에 성공했습니다.");
      setCheckSave(true);
      // const customTable = document.querySelectorAll(
      //   ".custom_table .ant-table-tbody"
      // )[0];

      // const lastChild = customTable.lastChild;
      // console.log("lastChild", lastChild);
      setNextRow();
    }
  };

  const chkCharCode = (e) => {
    console.log("eee", e.target);
    const regExp = /[^0-9a-zA-Z]/g;
    const ele = e.target;
    if (regExp.test(ele.value)) {
      ele.value = ele.value.replace(regExp, "");
    }
  };
  const setNextRow = () => {
    copyData.push({
      id: String(copyData.length + 1),
      bookName: "",
      category: "",
      price: "",
      inputCheck: "Y",
    });

    setData(copyData);
  };

  const deleteFunc = (deleteKey) => {
    let deleteList = copyData.splice(deleteKey, 1);
    setDeleteList((prevProducts) => [...prevProducts, ...deleteList]);
    setData(copyData);
  };

  const onFocus = () => {};
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
                <Select
                  onFocus={onFocus}
                  onChange={(e) => {
                    onChange(e, "category");
                  }}
                  style={{ width: "100%", borderRadius: 10 }}
                  value={text}
                >
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
                    //value={bookNameVal[tableIdx]}
                    value={text}
                  />
                );
              } else if (key === "price") {
                return (
                  <>
                    <Input
                      onChange={(e) => onChange(e, "price")}
                      type="number"
                      value={text}
                      onPressEnter={pressEnter}
                      style={{ width: "80%" }}
                    />
                    <span style={{ paddingLeft: 10 }}>
                      <Popconfirm
                        placement="top"
                        title={deleteText}
                        description={description}
                        onConfirm={() => deleteFunc(index)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button>X</Button>
                      </Popconfirm>
                    </span>
                  </>
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
              // if (tableTr.classList.contains("clicked_row")) {
              //   tableTr.style.backgroundColor = "gray";
              // } else {
              //   tableTr.style.backgroundColor = "#fff";
              // }
            },
          };
        }}
      />
    </div>
  );
};

export default Crud;
