/* eslint-disable react/prop-types */
import TodoTasks from "./TodoTasks";
import InProgressTasks from "./InProgressTasks";
import CompletedTasks from "./CompletedTasks";
const TaskStatusWise = ({ tasks }) => {
  const completedTasks = tasks?.filter((task) => task?.completed);
  const todosTasks = tasks?.filter((task) => task?.completed === false);
  const progressTasks = tasks?.filter((task) => task?.completed === null);
  return (
    <>
      <section className="w-full px-10 py-2 flex flex-col gap-6 lg:flex-row ">
        <TodoTasks tasks={todosTasks} />
        <InProgressTasks tasks={progressTasks} />
        <CompletedTasks tasks={completedTasks} />
      </section>
    </>
  );
};
export default TaskStatusWise;
