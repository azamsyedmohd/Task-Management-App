const CompletedTasks = () => {
  return (
    <>
      <section className="flex-1 bg-green-400 p-3 rounded-md text-white font-bold italic">
        <h2>Completed Tasks!</h2>
        <article className="bg-green-200 w-full rounded-sm mt-2 p-2">
          <p className="text-sm sm:text-lg ">Description</p>
          <div className="flex flex-row gap-2 mt-2">
            <button className="bg-white text-green-200 py-1 px-2 rounded-md">
              Edit
            </button>
            <button className="bg-green-400 text-white py-1 px-2 rounded-md">
              Delete
            </button>
          </div>
        </article>
      </section>
    </>
  );
};
export default CompletedTasks;
