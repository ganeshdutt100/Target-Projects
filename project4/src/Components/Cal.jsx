import React, { useState } from "react";
export const Cal = () => {
  const [input, setInput] = useState("");

  const buttonArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    "c",
    "x",
  ];

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "c") {
      setInput("");
    }
      else if (value === "x") {
      setInput(input.slice(0,-1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div
      className=" bg-dark-subtle py-4 mx-auto mt-4 rounded"
      style={{ width: "300px" }}
    >
      <input
        type="text"
        value={input}
        disabled
        className=" fs-4 rounded ms-3"
      />
      <div className=" d-flex flex-wrap gap-4 px-4 pt-3 justify-content-around">
        {buttonArray.map((surya, index) => (
          <button
            key={index}
            className="btn btn-outline-dark py-2 px-3"
            onClick={() => handleButtonClick(surya)}
          >
            {surya}
          </button>
        ))}
      </div>
    </div>
  );
};
