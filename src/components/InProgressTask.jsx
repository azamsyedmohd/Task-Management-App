/* eslint-disable react/prop-types */
import Edit from "./Edit";
import Delete from "./Delete";
const InProgressTask = ({ task }) => {
  return (
    <>
      <article className="bg-yellow-100 w-full rounded-sm mt-2 p-2">
        <p className="text-sm sm:text-lg ">{task?.todo}</p>
        <div className="flex flex-row gap-2 mt-2">
          <Edit />
          <Delete />
        </div>
      </article>
    </>
  );
};
export default InProgressTask;
