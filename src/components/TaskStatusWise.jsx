import TodoTasks from "./TodoTasks";
import InProgressTasks from "./InProgressTasks";
import CompletedTasks from "./CompletedTasks";
const TaskStatusWise = () => {
  return (
    <>
      <section className="w-full px-10 py-2 flex flex-col gap-6 md:flex-row ">
        <TodoTasks />
        <InProgressTasks />
        <CompletedTasks />
      </section>
    </>
  );
};
export default TaskStatusWise;
