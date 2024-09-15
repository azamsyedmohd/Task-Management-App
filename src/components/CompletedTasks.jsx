import CompleteTask from "./CompleteTask";
const CompletedTasks = () => {
  return (
    <>
      <section className="flex-1 bg-green-400 p-3 rounded-md text-white font-bold italic">
        <h2>Completed Tasks!</h2>
        <CompleteTask />
      </section>
    </>
  );
};
export default CompletedTasks;
