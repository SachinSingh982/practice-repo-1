import React, { useState } from "react";

export default function Throttling() {
  const [value, setValue] = useState(0);
  const [throttled, setThrottled] = useState(true);

  const handleOnClick = () => {
    if (throttled) {
      setValue((prev) => prev + 1);
      setThrottled(false);
      setTimeout(() => {
        setThrottled(true);
      }, 2000);
    }
  };

  return (
    <>
      <div style={{ padding: "10px" }}>
        <div>{value}</div>
        <button onClick={handleOnClick}>Increment</button>
      </div>
    </>
  );
}
