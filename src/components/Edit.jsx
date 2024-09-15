import { useState } from "react";
import EditModal from "./EditModal";
const Edit = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <article>
        <button
          className="bg-green-500 text-white py-1 px-2 rounded-md"
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
