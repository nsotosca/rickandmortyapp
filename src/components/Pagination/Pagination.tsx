import { Link } from "react-router-dom";

interface Props {
  page: string;
  prevPage: string;
  nextPage: string;
}
const Pagination = ({ page, prevPage, nextPage }: Props) => {
  return (
    <div className="flex items-center content-center justify-center h-8 gap-4 text-yellow-400">
      <Link to={prevPage ? `/characters/${prevPage}` : "#"}>
        <span className={`text-sm ${!prevPage ? "text-gray-500 cursor-auto" : ""}`}>
          {"<< previus"}
        </span>
      </Link>
      <span
        className={`text-sm flex items-center justify-center pl-4 pr-4 
        text-gray-800 bg-yellow-400 rounded-full w-4 h-8`}
      >
        {page}
      </span>
      <Link to={nextPage ? `/characters/${nextPage}` : "#"}>
        <span className={`text-sm ${!nextPage ? "text-gray-500 cursor-auto" : ""}`}>
          {"next >>"}
        </span>
      </Link>
    </div>
  );
};

export default Pagination;
