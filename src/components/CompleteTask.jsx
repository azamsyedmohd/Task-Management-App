/* eslint-disable react/prop-types */
import Edit from "./Edit";
import Delete from "./Delete";
import Details from "./Details";

const CompleteTask = ({ task }) => {
  return (
    <>
      <article className="bg-green-100 w-full rounded-sm mt-2 p-2">
        <p className="text-sm sm:text-lg ">{task?.todo}</p>
        <div className="flex flex-row  gap-2 mt-2">
          <Edit />
          <Delete />
          <Details id={task?.id} />
        </div>
      </article>
    </>
  );
};
export default CompleteTask;
