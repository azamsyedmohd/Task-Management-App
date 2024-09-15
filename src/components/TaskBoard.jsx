import AddTask from "./AddTask";
import TaskStatusWise from "./TaskStatusWise";
const TaskBoard = () => {
  return (
    <>
      <main className=" w-full min-h-screen ">
        <AddTask />
        <TaskStatusWise />
      </main>
    </>
  );
};
export default TaskBoard;
