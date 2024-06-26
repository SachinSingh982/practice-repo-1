import React, { useState, useEffect } from "react";

const Posts = () => {
  const [post, setPost] = useState();

  const getPostData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPost(data.slice(0, 10));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      {post?.map((info, index) => (
        <ul key={index}>
          <li>{info.title}</li>
        </ul>
      ))}
    </>
  );
};

export default Posts;

// =======================================================================
