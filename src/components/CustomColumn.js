import React, { useState } from "react";
import { Table } from "antd";

function CustomColumn() {
  const [state, setState] = useState([
    {
      realtime_statistics: [
        {
          perfomance_indicator: [
            {
              unit_time: "5분",
              recognition_ratio: "1%",
            },
            {
              unit_time: "10분",
              recognition_ratio: "11%",
            },
            {
              unit_time: "30분",
              recognition_ratio: "111%",
            },
            {
              unit_time: "1시간",
              recognition_ratio: "1111%",
            },
            {
              unit_time: "1일",
              recognition_ratio: "11111%",
            },
          ],
          total_recognition_ratio: [
            {
              unit_time: "5분",
              recognition_ratio: "1%",
            },
            {
              unit_time: "15분",
              recognition_ratio: "11%",
            },
            {
              unit_time: "35분",
              recognition_ratio: "111%",
            },
            {
              unit_time: "1시간반",
              recognition_ratio: "1111%",
            },
            {
              unit_time: "1일반",
              recognition_ratio: "11111%",
            },
          ],
        },
      ],
    },
  ]);
  const indicatorData = state[0].realtime_statistics[0].perfomance_indicator;
  const totalData = state[0].realtime_statistics[0].total_recognition_ratio;

  const columns = [
    {
      title: "성능지표",
      dataIndex: "indicator",
      key: "indicator",
      render: (record) => {
        let renderArr = [];
        console.log("record", record);
        record.forEach((item) => {
          renderArr.push(
            <>
              <p>
                <span>{item.time}</span>
                <span>{item.ratio}</span>
              </p>
            </>
          );
        });
        return renderArr;
      },
    },
    {
      title: "총량",
      dataIndex: "total",
      key: "total",
      render: (record) => {
        let renderArr = [];
        console.log("record", record);
        record.forEach((item) => {
          renderArr.push(
            <>
              <p>
                <span>{item.time}</span>
                <span>{item.ratio}</span>
              </p>
            </>
          );
        });
        return renderArr;
      },
    },
  ];

  const getIndicator = (data) => {
    let array = [];
    data.forEach((item) => {
      array.push({
        time: item.unit_time,
        ratio: item.recognition_ratio,
      });
    });
    return array;
  };

  const getTotal = (data) => {
    let array = [];
    data.forEach((item) => {
      array.push({
        time: item.unit_time,
        ratio: item.recognition_ratio,
      });
    });
    return array;
  };

  const dataSource = [
    {
      key: "1",
      indicator: getIndicator(indicatorData),
      total: getTotal(totalData),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={dataSource}></Table>
    </div>
  );
}

export default CustomColumn;
