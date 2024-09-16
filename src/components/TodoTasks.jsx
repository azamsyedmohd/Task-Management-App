/* eslint-disable react/prop-types */
import TodoTask from "./Task";
const TodoTasks = ({ tasks }) => {
  return (
    <>
      <section className="flex-1 bg-blue-300 p-3 rounded-md text-white font-bold italic">
        <h2>Todo Tasks!</h2>
        {tasks.map((task) => (
          <TodoTask task={task} key={task?.id} />
        ))}
      </section>
    </>
  );
};
export default TodoTasks;
