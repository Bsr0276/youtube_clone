import { FaSpinner } from "react-icons/fa";

const Spinner = ({ desings }) => {
  return (
    <div className={`${desings} w-full grid place-items-center`}>
      <FaSpinner className="animate-spin" />
    </div>
  );
};

export default Spinner;
