/* eslint-disable react/prop-types */
import InProgressTask from "./InProgressTask";
const InProgressTasks = ({ tasks }) => {
  return (
    <>
      <section className="flex-1 bg-yellow-300 p-3 rounded-md text-black font-thin italic">
        <h2>In-Progress Tasks!</h2>
        {tasks.map((task) => (
          <InProgressTask task={task} key={task?.id} />
        ))}
      </section>
    </>
  );
};
export default InProgressTasks;
