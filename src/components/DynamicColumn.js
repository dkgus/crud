import React, { useState } from "react";
import { Table } from "antd";

const DynamicColumn = () => {
  const columns = [];
  const [data, setData] = useState([
    {
      lane_data: [
        {
          lane_num: "1",
          turn_type: "좌회전",
          data: [
            {
              sensing_date: "2022-05-02 00:00:00",
              car_img: "ftp://192.123.24.535/123.jpg",
            },
          ],
        },
        {
          lane_num: "2",
          turn_type: "직진",
          data: [
            {
              sensing_date: "2022-05-02 00:00:00",
              car_img: "ftp://192.123.24.535/123.jpg",
            },
          ],
        },
      ],
      turn_data: [
        {
          turn_type: "좌회전",
          data: [
            {
              sensing_date: "2022-05-02 00:00:00",
              lane_num: "1",
              car_speed: "40",
              car_type: "승용차",
              car_img: "ftp://192.123.24.535/445.jpg",
            },
            {
              sensing_date: "2022-05-02 00:00:00",
              lane_num: "2",
              car_img: "30",
              car_type: "트럭(중)",
              car_img: "ftp://192.123.24.535/446.jpg",
            },
            {
              sensing_date: "2022-05-02 00:00:00",
              lane_num: "2",
              car_speed: "32.3",
              car_type: "트럭(중)",
              car_img: "ftp://192.123.24.535/446.jpg",
            },
          ],
        },
        {
          turn_type: "직진",
          data: [
            {
              sensing_date: "2022-05-02 00:00:00",
              lane_num: "2",
              car_speed: "40",
              car_type: "승용차",
              car_img: "ftp://192.123.24.535/445.jpg",
            },
            {
              sensing_date: "2022-05-02 00:00:00",
              lane_num: "4",
              car_speed: "40",
              car_type: "승용차",
              car_img: "ftp://192.123.24.535/445.jpg",
            },
            {
              sensing_date: "2022-05-02 00:00:00",
              lane_num: "4",
              car_speed: "40",
              car_type: "승용차",
              car_img: "ftp://192.123.24.535/445.jpg",
            },
          ],
        },
      ],
    },
  ]);
  data[0].lane_data.map((item) => (
    <span>
      {columns.push({
        title: `${item.lane_num}차로`,
        align: "center",
      })}
    </span>
  ));

  return (
    <>
      <Table
        columns={columns}
        // dataSource={data}
        style={{ width: "80%", margin: "0 auto" }}
        bordered
      />
    </>
  );
};

export default DynamicColumn;
