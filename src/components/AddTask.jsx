import AddForm from "./AddForm";

const AddTask = () => {
  return (
    <>
      <section>
        <article className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold italic font-serif  py-4 md:py-8 lg:py-10 text-slate-600">
          <h1 className="text-center text-black">
            Task Management Application
          </h1>
        </article>
        <article className="w-full sm:p-10 p-5 mx-auto">
          <AddForm />
        </article>
      </section>
    </>
  );
};
export default AddTask;
