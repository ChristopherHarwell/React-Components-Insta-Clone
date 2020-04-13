// You will add code to this file
import React, { useState } from "react";
import dummyData from "../../dummy-data";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [data, setData] = useState(dummyData);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {data.map(theData => {
        return <Comment comment = {theData} />
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
