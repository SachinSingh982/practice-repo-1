import React, { useState, useEffect } from "react";
const Comments = () => {
  const [comment, setComment] = useState();

  const getCommentData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const data = await res.json();
      setComment(data.slice(0, 10));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCommentData();
  }, []);

  return (
    <>
      {comment?.map((info, index) => (
        <ul key={index}>
          <li>{info.title}</li>
        </ul>
      ))}
    </>
  );
};

export default Comments;
