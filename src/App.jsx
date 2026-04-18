import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-r from-indigo-500 to-purple-600 flex flex-col items-center p-4">
      <div className="w-full max-w-xl">
        <Navbar />
        <Todos />
      </div>
    </div>
  );
}