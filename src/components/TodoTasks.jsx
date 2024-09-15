import TodoTask from "./ToDoTask";

const TodoTasks = () => {
  return (
    <>
      <section className="flex-1 bg-blue-400 p-3 rounded-md text-white font-bold italic">
        <h2>Todo Tasks!</h2>
        <TodoTask />
      </section>
    </>
  );
};
export default TodoTasks;
