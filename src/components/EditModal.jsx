import EditForm from "./EditForm";

// eslint-disable-next-line react/prop-types
const EditModal = ({ setModal }) => {
  return (
    <>
      <section className="absolute md:left-1/4  sm:left-40 left-8 md:top-1/4 top-28   lg:w-1/2 mx-auto z-10 bg-white md:p-2 p-1 rounded-md ">
        <EditForm setModal={setModal} />
      </section>
    </>
  );
};
export default EditModal;
