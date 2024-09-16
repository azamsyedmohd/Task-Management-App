/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearMessages, removeTask } from "../utils/taskSlice";
import ErrorDeleteTodo from "./ErrorDeleteTodo";
import SuccessDeleteTodo from "./SuccessDeleteTodo";
const DeleteModal = ({ setErase, task }) => {
  const dispatch = useDispatch();
  const { error, successMessage } = useSelector((state) => state.tasks);
  useEffect(() => {
    if (error || successMessage) {
      setTimeout(() => {
        dispatch(clearMessages());
      }, 3000);
    }
  });
  const handleDelete = (event) => {
    // Handle delete Code will be executed.
    event.preventDefault();
    dispatch(removeTask(task?.id));
    setErase(false);
  };
  return (
    <>
      {error && <ErrorDeleteTodo error={error} />}
      {successMessage && <SuccessDeleteTodo message={successMessage} />}
      <form onSubmit={(event) => handleDelete(event)}>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <section className=" bg-white text-black md:p-8 p-2 rounded-md">
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
                  type="submit"
                  className="bg-red-800 text-white py-1 px-2 font-semibold md:text-lg text-md hover:cursor-pointer hover:scale-110"
                >
                  Delete
                </button>
              </div>
            </article>
          </section>
        </div>
      </form>
    </>
  );
};
export default DeleteModal;
