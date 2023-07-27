function InputForm(props) {
  return (
    <form className="my-10" onSubmit={props.addTask}>
      <input
        type="text"
        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-300"
        placeholder="Add New To-Do"
        onChange={props.handleChange}
        value={props.newTask}
      />
      <button className="w-full py-3 mt-4 font-medium text-white bg-slate-900 hover:bg-slate-600 rounded-md hover:shadow">
        Add New Task
      </button>
    </form>
  );
}

export default InputForm;
