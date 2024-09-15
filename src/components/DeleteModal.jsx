// eslint-disable-next-line react/prop-types
const DeleteModal = ({ setErase }) => {
  const handleDelete = () => {
    // Handle delete Code will be executed.
  };
  return (
    <>
      <section className="md:w-1/2 sm:w-1/2 w-3/4 absolute lg:left-1/3 md:left-56 left-12 top-1/4 mx-auto bg-white text-black md:p-8 p-2 rounded-md">
        <article>
          <p className="text-black font-thin md:text-xl text-md">
            Are you sure to delete the task?
          </p>
        </article>
        <article className="flex justify-end ">
          <div className="flex flex-row gap-2 mt-4">
            <button
              className="bg-gray-200 text-black font-thin py-1 px-2 md:text-lg text-md hover:cursor-pointer hover:scale-110"
              onClick={() => setErase(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-800 text-white py-1 px-2 font-semibold md:text-lg text-md hover:cursor-pointer hover:scale-110"
              onClick={() => handleDelete()}
            >
              Delete
            </button>
          </div>
        </article>
      </section>
    </>
  );
};
export default DeleteModal;
