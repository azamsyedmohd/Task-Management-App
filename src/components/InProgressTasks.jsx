import InProgressTask from "./InProgressTask";
const InProgressTasks = () => {
  return (
    <>
      <section className="flex-1 bg-yellow-300 p-3 rounded-md text-white font-bold italic">
        <h2>In-Progress Tasks!</h2>
        <InProgressTask />
      </section>
    </>
  );
};
export default InProgressTasks;
