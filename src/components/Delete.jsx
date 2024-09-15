import { useState } from "react";
import DeleteModal from "./DeleteModal";
const Delete = () => {
  const [erase, setErase] = useState(false);
  return (
    <>
      <article>
        <button
          className="bg-red-500 text-white py-1 px-2 rounded-md hover:cursor-pointer hover:scale-110"
          onClick={() => setErase(!erase)}
        >
          Delete
        </button>
        {erase && <DeleteModal />}
      </article>
    </>
  );
};
export default Delete;
