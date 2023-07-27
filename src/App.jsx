import { useEffect, useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TaskList from "./components/TaskList";

function App() {
  const [newTask, setNewTask] = useState("");

  const [todolist, setTodolist] = useState(() => {
    const localValue = localStorage.getItem("TASKS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(todolist));
  }, [todolist]);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    const task = {
      taskName: newTask,
      isCompleted: false,
      id: Math.random(),
    };
    setTodolist([...todolist, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodolist(todolist.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTodolist(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-200">
      <Header />

      <InputForm
        addTask={addTask}
        handleChange={handleChange}
        newTask={newTask}
      />

      <TaskList
        todolist={todolist}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
