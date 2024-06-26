import React, { useState } from "react";

export default function Debouncing() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let timerId = null;
  const handleOnChange = (e) => {
    if (timerId) {
      clearInterval(timerId);
    }

    const value = e.target.value;
    timerId = setTimeout(async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await res.json();
      const onlyTitle = jsonData
        .map((info) => info.title)
        .filter((item) => item.toLowerCase().startsWith(value.toLowerCase()));

      console.log(onlyTitle);
      setData(onlyTitle);
      setLoading(false);
    }, 400);
  };

  const renderData = data?.map((info, index) => (
    <ul key={index}>
      <li>{info}</li>
    </ul>
  ));

  return (
    <>
      <input type="text" name="text" onChange={handleOnChange} />
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        renderData
      ) : (
        <p>No Data Available...</p>
      )}
    </>
  );
}
