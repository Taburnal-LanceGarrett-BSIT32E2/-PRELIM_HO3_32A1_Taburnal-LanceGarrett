
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

// Home Component
function Home() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <p>This is the home page. Enjoy exploring the app!</p>
    </div>
  );
}

// Props Page Component
function PropsPage({ message }) {
  return (
    <div>
      <h2>Props Page</h2>
      <p>{message}</p>
    </div>
  );
}

// Todo List Component

function TodoList() {
  const [todos, setTodos] = React.useState(["Item 1", "Item 2", "Item 3"]);

  const removeItem = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeItem(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/props">Props Page</Link></li>
            <li><Link to="/todo">Todo List</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/props" element={<PropsPage message="Hello World!" />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
