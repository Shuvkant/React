import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            type="button"
            className=" text-white shadow-lg outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>

          <button
            type="button"
            className=" text-white shadow-lg outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>

          <button
            type="button"
            className=" text-white shadow-lg outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "teal" }}
            onClick={() => setColor("teal")}
          >
            Teal
          </button>

          <button
            type="button"
            className=" text-white shadow-lg outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>

          <button
            type="button"
            className=" text-white shadow-lg outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            pink
          </button>
          <button
            type="button"
            className=" text-white shadow-lg outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            type="button"
            className=" text-white shadow-lg outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "Grey" }}
            onClick={() => setColor("Grey")}
          >
            Grey
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
