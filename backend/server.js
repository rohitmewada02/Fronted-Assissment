const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ---------------- DUMMY DATA ----------------
let tasks = [];
let user = {
  email: "test@test.com",
  password: "123456",
};

// ---------------- AUTH ----------------
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    return res.json({
      token: "dummy-jwt-token",
      user: { email },
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

app.post("/api/auth/register", (req, res) => {
  const { email, password } = req.body;
  user = { email, password };
  res.json({ message: "User registered successfully" });
});

app.get("/api/auth/profile", (req, res) => {
  res.json({ email: user.email });
});

// ---------------- TASKS CRUD ----------------
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const task = { id: Date.now(), title: req.body.title };
  tasks.push(task);
  res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id != req.params.id);
  res.json({ message: "Task deleted" });
});

// ---------------- SERVER ----------------
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
