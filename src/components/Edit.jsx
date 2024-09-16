import { useState } from "react";
import EditModal from "./EditModal";
const Edit = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <article>
        <button
          className="bg-green-500 text-white py-1 px-4 rounded-md hover:cursor-pointer hover:scale-110"
          onClick={() => setModal(!modal)}
        >
          Edit
        </button>
        {modal && <EditModal setModal={setModal} />}
      </article>
    </>
  );
};
export default Edit;
