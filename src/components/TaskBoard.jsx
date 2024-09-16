import { useEffect } from "react";
import { getTasks } from "../utils/taskSlice";
import AddTask from "./AddTask";
import TaskStatusWise from "./TaskStatusWise";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Failed from "./Failed";
const TaskBoard = () => {
  const dispatch = useDispatch();
  const { tasks, error, status, successMessage } = useSelector(
    (state) => state.tasks
  );
  console.log(tasks);
  console.log(status);
  console.log(error);
  console.log(successMessage);
  useEffect(() => {
    if (status === "idle") {
      dispatch(getTasks());
    }
  }, [dispatch, status]);
  return (
    <>
      <main className=" w-full min-h-screen relative">
        {status === "loading" && <Loading />}
        {status === "failed" && <Failed />}
        {status === "succeeded" && (
          <>
            <AddTask />
            <TaskStatusWise tasks={tasks} />
          </>
        )}
      </main>
    </>
  );
};
export default TaskBoard;
