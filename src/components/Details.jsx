/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Details = ({ id }) => {
  return (
    <>
      <Link to={`/task/${id}`}>
        <button className="bg-slate-500 text-white px-2 py-1 rounded-md">
          Details
        </button>
      </Link>
    </>
  );
};
export default Details;
