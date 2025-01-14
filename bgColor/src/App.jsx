import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("green");
  const [bg, setBg] = useState("bg-black-500");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl shadow-2xl" style={{ backgroundColor: bg }}>
            <button
              onClick={() => {
                setColor("red");
                setBg("green");
              }}
              className="outline-none px-4 text-white shadow-xl rounded-2xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("Blue");
                setBg("cyan");
              }}
              className="outline-none px-4 text-white shadow-xl rounded-2xl"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("green");
                setBg("Yellow");
              }}
              className="outline-none px-4 text-white shadow-xl rounded-2xl"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("#6a00f4");
                setBg("#f20089");
              }}
              className="outline-none px-4 text-white shadow-xl rounded-2xl"
              style={{ backgroundColor: "#6a00f4" }}
            >
              Violet
            </button>
            <button
              onClick={() => {
                setColor("#b9fd0d");
                setBg("#de17a5");
              }}
              className="outline-none px-4 text-white shadow-xl rounded-2xl"
              style={{ backgroundColor: "#b9fd0d" }}
            >
              Neon
            </button>
            {/* <button
              onClick={() => {
                setColor("red");
                setBg("green");
              }}
              className="outline-none px-4 text-white shadow-xl rounded-2xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("red");
                setBg("green");
              }}
              className="outline-none px-4 text-white shadow-xl rounded-2xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("red");
                setBg("green");
              }}
              className="outline-none px-4 text-white shadow-xl rounded-2xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("red");
                setBg("green");
              }}
              className="outline-none px-4 text-white shadow-xl rounded-2xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
