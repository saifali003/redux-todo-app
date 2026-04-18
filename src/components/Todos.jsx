import { useState } from "react";
import { editTodo, deleteTodo } from "../feature/todoSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSave = (id) => {
    if (editText.trim() === "") return;
    dispatch(editTodo({ id, newText: editText }));
    setEditId(null);
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg">
      <div className="space-y-3">
        {todos.length === 0 && (
          <p className="text-center text-gray-500">No Todos Yet...</p>
        )}

        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
          >
            {editId === todo.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 border p-1 rounded mr-2"
              />
            ) : (
              <span className="flex-1 text-gray-700">{todo.text}</span>
            )}

            <div className="flex gap-2 ml-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}