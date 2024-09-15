import { useState } from "react";
import EditModal from "./EditModal";
const Edit = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <article>
        <button
          className="bg-green-600 text-white py-1 px-2 rounded-md hover:cursor-pointer hover:scale-110"
          onClick={() => setModal(!modal)}
        >
          Edit
        </button>
        {modal && <EditModal />}
      </article>
    </>
  );
};
export default Edit;
