import Edit from "./Edit";
import Delete from "./Delete";
import { useState } from "react";
const TodoTask = () => {
  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);
  const handleEdit = () => {
    setEdit(true);
    setDel(false);
  };
  const handleDelete = () => {
    setEdit(false);
    setDel(true);
  };
  return (
    <>
      <article className="bg-blue-100 w-full rounded-sm mt-2 p-2">
        <p className="text-sm sm:text-lg ">Description</p>
        <div className="flex flex-row gap-2 mt-2">
          <Edit handleEdit={handleEdit} edit={edit} />
          <Delete handleDelete={handleDelete} delete={del} />
        </div>
      </article>
    </>
  );
};
export default TodoTask;
