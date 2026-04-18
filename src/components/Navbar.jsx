import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoSlice";

export default function Navbar() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg mb-4">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">
        Todo App
      </h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter todos..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={handleAdd}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 rounded-lg transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}