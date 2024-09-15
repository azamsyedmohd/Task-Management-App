const InProgressTask = () => {
  return (
    <>
      <article className="bg-yellow-200 w-full rounded-sm mt-2 p-2">
        <p className="text-sm sm:text-lg ">Description</p>
        <div className="flex flex-row gap-2 mt-2">
          <button className="bg-white text-yellow-200 py-1 px-2 rounded-md">
            Edit
          </button>
          <button className="bg-yellow-400 text-white py-1 px-2 rounded-md">
            Delete
          </button>
        </div>
      </article>
    </>
  );
};
export default InProgressTask;
