/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask, clearMessages } from "../utils/taskSlice";
import ErrorEditTodo from "./ErrorEditTodo";
import SuccessEditTodo from "./SuccessEditTodo";
const EditForm = ({ setModal, task }) => {
  const [description, setDescription] = useState(task?.todo);
  const [checkedValue, setCheckedValue] = useState(
    task?.completed === true
      ? "Completed"
      : task?.completed === false
      ? "To-Do"
      : "In-Progress"
  );
  const dispatch = useDispatch();
  const { error, successMessage } = useSelector((state) => state.tasks);
  console.log(checkedValue);
  useEffect(() => {
    if (error || successMessage) {
      setTimeout(() => {
        dispatch(clearMessages());
      }, 3000);
    }
  });
  const handleChange = (value) => {
    setCheckedValue(value);
  };
  const handleEdit = (event) => {
    // Edit Code will be written
    event.preventDefault();
    if (description.trim()) {
      if (checkedValue === "To-Do") {
        dispatch(
          editTask({
            id: task?.id,
            updates: {
              todo: description,
              completed: false,
            },
          })
        );
      } else if (checkedValue === "Completed") {
        dispatch(
          editTask({
            id: task?.id,
            updates: { todo: description, completed: true },
          })
        );
      } else {
        dispatch(
          editTask({
            id: task?.id,
            updates: {
              todo: description,
              completed: null,
            },
          })
        );
      }
    }
    setDescription("");
    setCheckedValue(null);
    setModal(false);
  };
  return (
    <>
      {error && <ErrorEditTodo />}
      {successMessage && <SuccessEditTodo />}
      <form onSubmit={(event) => handleEdit(event)}>
        <article className="w-full px-4 ">
          <div className="flex flex-col gap-1">
            <label className="text-black font-thin lg:text-2xl md:text-xl text-lg">
              Task Description
            </label>
            <input
              type="text"
              placeholder="Task Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="bg-gray-200 p-2  rounded-md hover:outline-0 outline-0 placeholder:font-thin md:placeholder:text-lg  placeholder:text-md placeholder:italic"
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label className="text-black font-thin lg:text-2xl md:text-xl text-lg">
              Status of Task
            </label>
            <div className="flex flex-col md:flex-row justify-start gap-4 p-2">
              <div className="flex flex-row sm:gap-3 justify-between">
                <label className="md:text-lg text-sm font-thin italic text-black">
                  To-Do
                </label>
                <input
                  type="checkbox"
                  checked={checkedValue === "To-Do" ? true : false}
                  onChange={() => handleChange("To-Do")}
                />
              </div>
              <div className="flex flex-row sm:gap-3 justify-between">
                <label className="md:text-lg text-sm font-thin italic text-black">
                  In-Progress
                </label>
                <input
                  type="checkbox"
                  checked={checkedValue === "In-Progress" ? true : false}
                  onChange={() => handleChange("In-Progress")}
                />
              </div>
              <div className="flex flex-row sm:gap-3 justify-between">
                <label className="md:text-lg text-sm font-thin italic text-black ">
                  Completed
                </label>
                <input
                  type="checkbox"
                  checked={checkedValue === "Completed" ? true : false}
                  onChange={() => handleChange("Completed")}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <article className="flex flex-row gap-2 mb-2">
              <button
                className="bg-gray-200 text-black font-thin py-1 px-2 rounded-sm lg:text-xl md:text-sm text-md hover:cursor-pointer hover:scale-110"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white bg-green-700 py-1 px-3 font-semibold lg:text-xl md:text-lg text-sm hover:cursor-pointer hover:scale-110"
              >
                Edit
              </button>
            </article>
          </div>
        </article>
      </form>
    </>
  );
};
export default EditForm;
