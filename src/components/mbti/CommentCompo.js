import React, { createElement, useState, useEffect } from "react";
import { Comment, Tooltip, Input, Form, Button, List } from "antd";
import moment from "moment";
const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const CommentCompo = () => {
  const writeTime = "2023-04-05 09:22:33";
  const pastTimeChecker = moment(writeTime).fromNow();
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState("");
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    console.log("value", value);
  }, [value]);

  useEffect(() => {
    console.log("comments", comments);
  }, [comments]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: "Han Solo",
          //avatar: "https://joeschmoe.io/api/v1/random",
          content: <p>{value}</p>,
          datetime: moment("2016-11-22").fromNow(),
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {comments.length > 0 && (
        <CommentList comments={comments}>
          <Comment content="111"></Comment>
        </CommentList>
      )}
      <Comment
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
        datetime={
          <Tooltip title={writeTime}>
            <span>{pastTimeChecker}</span>
          </Tooltip>
        }
      />
    </>
  );
};

export default CommentCompo;
