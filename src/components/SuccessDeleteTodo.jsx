/* eslint-disable react/prop-types */
const SuccessDeleteTodo = ({ message }) => {
  return (
    <>
      <article className="fixed bottom-4 inset-x-0 flex justify-end z-50">
        <section className="bg-black p-4 text-white italic text-center font-semibold lg:text-2xl md:text-xl text-lg rounded-md">
          <p>{message}</p>
        </section>
      </article>
    </>
  );
};
export default SuccessDeleteTodo;
