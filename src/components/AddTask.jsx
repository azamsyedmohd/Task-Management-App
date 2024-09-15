import { useState } from "react";

const AddTask = () => {
  const [checkedValue, setCheckedValue] = useState(null);
  const [taskDescription, setTaskDescription] = useState("");
  const handleChange = (value) => {
    setCheckedValue(value);
  };
  const handleTaskData = (event) => {
    setTaskDescription(event.target.value);
  };
  const handleAddTask = () => {
    // Code of task added;
    console.log("Task added");
    setTaskDescription("");
    setCheckedValue(null);
  };
  return (
    <>
      <section>
        <article className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold italic font-serif  py-4 md:py-8 lg:py-10 text-slate-600">
          <h1 className="text-center text-black">
            Task Management Application
          </h1>
        </article>
        <article className=" sm:w-3/4 w-full p-5 sm:p-2 mx-auto">
          <form
            onSubmit={() => handleAddTask()}
            className="w-full bg-gray-200 md:p-6 p-3"
          >
            <div className="w-full flex flex-col md:gap-2 gap-2">
              <label className="lg:text-2xl md:text-xl text-lg italic font-thin">
                Task Name
              </label>
              <textarea
                className="bg-black rounded-xs text-white placeholder:text-gray-200 lg:text-lg text-md tracking-wider font-thin placeholder:font-thin placeholder:italic p-2"
                placeholder="Task Description"
                value={taskDescription}
                onChange={(event) => handleTaskData(event)}
                rows="2"
                cols="2"
              />
            </div>
            <div className="w-full flex flex-col md:gap-2 gap-2 mt-2">
              <label className="lg:text-2xl md:text-xl text-lg italic font-thin">
                Status of Task
              </label>
              <div className="flex flex-col sm:flex-row justify-start gap-4 p-2">
                <div className="flex flex-row sm:gap-3 justify-between">
                  <label className="md:text-lg text-sm font-thin italic">
                    To-Do
                  </label>
                  <input
                    type="checkbox"
                    checked={checkedValue === "To-Do" ? true : false}
                    onChange={() => handleChange("To-Do")}
                    className={
                      checkedValue === "To-Do" ? "bg-black" : "bg-white"
                    }
                  />
                </div>
                <div className="flex flex-row sm:gap-3 justify-between">
                  <label className="md:text-lg text-sm font-thin italic">
                    In-Progress
                  </label>
                  <input
                    type="checkbox"
                    checked={checkedValue === "In-Progress" ? true : false}
                    onChange={() => handleChange("In-Progress")}
                    className={
                      checkedValue === "In-Progress" ? "bg-black" : "bg-white"
                    }
                  />
                </div>
                <div className="flex flex-row sm:gap-3 justify-between">
                  <label className="md:text-lg text-sm font-thin italic">
                    Completed
                  </label>
                  <input
                    type="checkbox"
                    checked={checkedValue === "Completed" ? true : false}
                    onChange={() => handleChange("Completed")}
                    className={
                      checkedValue === "Completed" ? "bg-black" : "bg-white"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black p-2 rounded-md text-gray-200 font-thin italic hover:scale-110 "
              >
                Add new task
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};
export default AddTask;
