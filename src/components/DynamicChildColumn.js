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
  const newArr = [];

  laneData[0].lane_num_statistics.forEach((item, index) => {
    const laneData = item.lane_num;
    item.data.forEach((elem) => {
      if (index === 0) {
        newArr.push({
          time: elem.unit_time,
          [laneData + "_volume"]: elem.volume,
        });
      } else {
        for (let i = 0; i < newArr.length; i++) {
          if (newArr[i].time === elem.unit_time) {
            newArr.splice(i, 1, {
              ...newArr[i],
              [laneData + "_volume"]: elem.volume,
              //newArr모든 값을 시간값만 빼고 기존 가공된 배열+ 새로운 차선값 입력
            });
            break;
          }
        }
      }
      return newArr;
    });
  });

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
        dataSource={newArr}
        bordered
      />
    </>
  );
};

export default DynamicChildColumn;
