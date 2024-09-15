const TodoTasks = () => {
  return (
    <>
      <section className="flex-1 bg-blue-400 p-3 rounded-md text-white font-bold italic">
        <h2>Todo Tasks!</h2>
        <article className="bg-blue-200 w-full rounded-sm mt-2 p-2">
          <p className="text-sm sm:text-lg ">Description</p>
          <div className="flex flex-row gap-2 mt-2">
            <button className="bg-white text-blue-400 py-1 px-2 rounded-md">
              Edit
            </button>
            <button className="bg-blue-400 text-white py-1 px-2 rounded-md">
              Delete
            </button>
          </div>
        </article>
      </section>
    </>
  );
};
export default TodoTasks;
