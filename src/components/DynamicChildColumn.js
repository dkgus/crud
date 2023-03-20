import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const DynamicChildColumn = () => {
  const [laneData, setLaneData] = useState([
    {
      lane_num_statistics: [
        {
          lane_num: "1",
          data: [
            {
              unit_time: "5분",
              volume: "1",
            },
            {
              unit_time: "10분",
              volume: "11",
            },
            {
              unit_time: "30분",
              volume: "111",
            },
            {
              unit_time: "1시간",
              volume: "1111",
            },
            {
              unit_time: "1일",
              volume: "11111",
            },
          ],
        },
        {
          lane_num: "2",
          data: [
            {
              unit_time: "5분",
              volume: "2",
            },
            {
              unit_time: "10분",
              volume: "22",
            },
            {
              unit_time: "30분",
              volume: "222",
            },
            {
              unit_time: "1시간",
              volume: "2222",
            },
            {
              unit_time: "1일",
              volume: "22222",
            },
          ],
        },
      ],
    },
  ]);
  const [keyNames, setKeyNames] = useState([]);
  const newArr = [];
  const newArr2 = [];

  useEffect(() => {
    console.log("laneData", laneData[0]);
    laneData[0].lane_num_statistics.forEach((item, idxx) => {
      //데이터  1_volume형태로 가공하기
      let laneName = item.lane_num;

      item.data.map((elem) => {
        for (let i = 0; i < item.data.length; i++) {
          if (item.data[i].unit_time === elem.unit_time) {
            laneData[0].lane_num_statistics.splice(1);
            newArr.push({
              time: elem.unit_time,
            });
          }
        }
        return newArr;
      });
      laneData[0].lane_num_statistics.forEach((item, idxx) => {
        item.data.map((elem2) => {
          for (let i = 0; i < newArr.length; i++) {
            if (elem2.unit_time === newArr[i].time) {
              newArr2.push({
                time: newArr[i].time,
                [`${laneName}_volume`]: elem2.volume,
              });
            } else {
            }
          }
          return newArr2;
        });
      });
    });
  }, [laneData]);
  console.log("newArr2", newArr2);

  const columns = [
    {
      title: "단위시간",
      dataIndex: "time",
      key: "time",
      align: "center",
      width: "20%",
    },
    {
      title: "차로별 교통량(대)",
      dataIndex: "car_volume",
      key: "car_volume",
      align: "center",
      children: laneData[0].lane_num_statistics.map((item) => {
        return {
          title: `${item.lane_num}차로`,
          dataIndex: `${item.lane_num}_volume`,
          key: `${item.lane_num}_volume`,
          align: "center",
        };
      }),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        style={{ width: "80%", margin: "0 auto" }}
        data={newArr}
        bordered
      />
    </>
  );
};

export default DynamicChildColumn;
