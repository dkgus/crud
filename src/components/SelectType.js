import React, { useState, useRef, useEffect } from "react";
import { Select, Divider, Space, Input, message } from "antd";
import "antd/dist/antd.css";

const SelectType = () => {
  const inputRef = useRef(null);
  const [items, setItems] = useState(["조깅", "스쿼트", "필라테스", "피티"]);
  const [name, setName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [koreanType, setKoreanType] = useState("");

  useEffect(() => {
    console.log("selectedType", selectedType);
  }, [selectedType, koreanType]);

  const isEndWithConsonant = (korean) => {
    const finalChrCode = korean.charCodeAt(korean.length - 1);
    const consonantCode = (finalChrCode - 44032) % 28;
    if (consonantCode === 0) {
      //0이면 받침 없음 -> 를
      setKoreanType(`${korean}를`);
    } else {
      setKoreanType(`${korean}을`);
    }
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEnter = (e) => {
    e.preventDefault();
    if (e.target.value === undefined || e.target.value === "") {
      message.warning("종류를 입력해주세요");
      setItems([...items]);
    } else {
      setItems([...items, name]);
      setName("");
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    }
  };
  const onSelect = (e) => {
    setSelectedType(e);
    isEndWithConsonant(e);
  };

  return (
    <>
      <div style={{ paddingTop: 40, paddingBottom: 100 }}>
        옵션 선택
        <div>
          <Select
            onChange={onSelect}
            style={{ width: 350 }}
            placeholder="종류를 선택해주세요"
            className="custom_select"
            autoFocus
            dropdownRender={(menu) => (
              <>
                {menu}
                <Space style={{ padding: "10px 8px 4px" }}>
                  <Input
                    placeholder="Enter를 누르면 생성됩니다"
                    ref={inputRef}
                    style={{ width: 250 }}
                    value={name}
                    onChange={onNameChange}
                    onPressEnter={onEnter}
                  ></Input>
                </Space>
              </>
            )}
            options={
              items && items.map((item) => ({ label: item, value: item }))
            }
          ></Select>
        </div>
        {koreanType === "" ? (
          <div>오늘은 어떤 운동을 하실건가요?</div>
        ) : (
          <div>회원님 오늘은 {koreanType} 선택하셨네요!</div>
        )}
      </div>
    </>
  );
};
export default SelectType;
