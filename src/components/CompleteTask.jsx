import Edit from "./Edit";
import Delete from "./Delete";
const CompleteTask = () => {
  return (
    <>
      <article className="bg-green-100 w-full rounded-sm mt-2 p-2">
        <p className="text-sm sm:text-lg ">Description</p>
        <div className="flex flex-row gap-2 mt-2">
          <Edit />
          <Delete />
        </div>
      </article>
    </>
  );
};
export default CompleteTask;
