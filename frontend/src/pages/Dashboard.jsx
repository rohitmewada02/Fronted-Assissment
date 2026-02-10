import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  const addTask = async () => {
    if (!task) return;
    const res = await api.post("/tasks", { title: task });
    setTasks([...tasks, res.data]);
    setTask("");
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          Welcome, {user?.email}
        </h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Add Task */}
      <div className="bg-white p-4 rounded shadow mb-4 flex gap-2">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter new task"
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={addTask}
          className="bg-black text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {/* Search */}
      <input
        placeholder="Search tasks..."
        className="border p-2 rounded w-full mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Task Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredTasks.map((t) => (
          <div
            key={t.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <span>{t.title}</span>
            <button
              onClick={() => deleteTask(t.id)}
              className="text-red-500 font-bold"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
