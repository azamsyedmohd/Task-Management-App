import { useParams } from "react-router";
import { useSelector } from "react-redux";
const TaskDetails = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state?.tasks?.tasks);
  const todo = todos?.find((task) => task?.id === Number(id));
  return (
    <>
      <section className="bg-gray-200 w-4/5 mx-auto p-5 flex flex-col gap-5 mt-10 rounded-md shadow-sm hover:cursor-pointer hover:scale-110">
        <p className=" lg:text-2xl md:text-xl text-lg italic">
          <span className="font-bold text-red-800">Task Description :</span>{" "}
          {todo?.todo}
        </p>
        <p className="lg:text-2xl md:text-xl text-lg italic">
          <span className="font-bold text-red-800"> Task Status : </span>
          {todo?.inProgress || (todo?.completed ? " Done " : " To Do ")}
        </p>
      </section>
    </>
  );
};
export default TaskDetails;
