function TaskList(props) {
  return (
    <ul className="text-2xl font-medium text-slate-800">
      {props.todolist.map((task) => {
        return (
          <li
            className="tas rounded-lg px-4 py-2 mt-2 flex items-center"
            key={task.id}
            style={{
              backgroundColor: task.isCompleted ? "#d1fae5" : "#f1f5f9",
            }}
          >
            <input
              onChange={() => props.toggleTask(task.id)}
              type="checkbox"
              id="checkbox"
              className="h-6 w-6"
              checked={task.isCompleted}
            />
            <label
              htmlFor="checkbox"
              style={{
                color: task.isCompleted ? "#64748b" : "#111827",
                textDecoration: task.isCompleted ? "line-through" : "none",
              }}
              className="text-2xl grow ml-4 font-normal text-slate-950"
            >
              {task.taskName}
            </label>
            <button
              className="inline-flex items-center justify-center w-8 h-8 mr-2 text-pink-100 transition-colors duration-150 bg-rose-600 rounded-full focus:shadow-outline hover:bg-rose-700"
              onClick={() => props.deleteTask(task.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
