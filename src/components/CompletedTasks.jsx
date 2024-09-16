/* eslint-disable react/prop-types */
import CompleteTask from "./CompleteTask";
const CompletedTasks = ({ tasks }) => {
  return (
    <>
      <section className="flex-1 bg-green-300 p-3 rounded-md text-white font-bold italic">
        <h2>Completed Tasks!</h2>
        {tasks.map((task) => (
          <CompleteTask task={task} key={task?.id} />
        ))}
      </section>
    </>
  );
};
export default CompletedTasks;
