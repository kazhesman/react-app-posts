import React, { useState } from "react";

const Input = function () {
    const [value, setValue] = useState("rasha");
  return (
    <>
    <div>{value}</div>
    <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
      >
    </input>
      </>
  );
};

export default Input;