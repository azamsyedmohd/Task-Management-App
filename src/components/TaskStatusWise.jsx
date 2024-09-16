import TodoTasks from "./TodoTasks";
import InProgressTasks from "./InProgressTasks";
import CompletedTasks from "./CompletedTasks";
// eslint-disable-next-line react/prop-types
const TaskStatusWise = ({ tasks }) => {
  return (
    <>
      <section className="w-full px-10 py-2 flex flex-col gap-6 md:flex-row ">
        <TodoTasks tasks={tasks} />
        <InProgressTasks tasks={tasks} />
        <CompletedTasks tasks={tasks} />
      </section>
    </>
  );
};
export default TaskStatusWise;
