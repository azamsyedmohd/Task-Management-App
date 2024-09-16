import EditForm from "./EditForm";

// eslint-disable-next-line react/prop-types
const EditModal = ({ setModal, task }) => {
  return (
    <>
      <article className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <section className=" bg-white md:p-2 p-1 rounded-md ">
          <EditForm setModal={setModal} task={task} />
        </section>
      </article>
    </>
  );
};
export default EditModal;
