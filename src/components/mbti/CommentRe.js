import React, { useState } from "react";
import { Comment, Input } from "antd";

const ExampleComment = ({ children }) => {
  const [reply, setReply] = useState(false);

  console.log("reply", reply);
  const onClick = () => {
    setReply(true);
  };
  return (
    <>
      <Comment
        actions={[
          <span onClick={onClick} key="comment-nested-reply-to">
            Reply to
          </span>,
        ]}
        author={<a>Han Solo</a>}
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure).
          </p>
        }
      >
        {reply ? (
          <>
            <span>작성자</span>
            <Input style={{ marginLeft: 10, width: "60%" }} />
          </>
        ) : null}

        {children}
      </Comment>
    </>
  );
};

function CommentRe() {
  const [comments, setComments] = useState([]);

  return (
    <div>
      {comments.length > 0 && (
        <ExampleComment comments={comments}>
          <Comment content="111"></Comment>
        </ExampleComment>
      )}
      <ExampleComment>
        <ExampleComment>
          <ExampleComment />
          <ExampleComment />
        </ExampleComment>
      </ExampleComment>
    </div>
  );
}

export default CommentRe;
