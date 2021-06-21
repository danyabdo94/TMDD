import { Link } from "react-router-dom";
import { MOVIE_TYPES } from "../app/enums";
import { useQuery } from "../utils/use-query";

function Header() {
  const classInActive =
    "inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4 rounded-lg bg-grey-dark";
  const classActive = "inline-block py-2 px-4 text-white no-underline border rounded-lg border-grey-dark";
  const query = useQuery();
  const typeFromQuery = query.get("type");

  const isActive = (type: MOVIE_TYPES) => {
    return type.valueOf() === typeFromQuery;
  };

  return (
    <header className="w-full bg-blue-dark p-2 mt-0 fixed z-10 top-0">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <Link
            className="text-white no-underline hover:text-white hover:no-underline"
            to={`/movies?type=${MOVIE_TYPES.POPULAR}`}
          >
            <span className="text-2xl pl-2">
              <i className="em em-grinning"></i> TMDD
            </span>
          </Link>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-3">
              <Link
                className={
                  isActive(MOVIE_TYPES.POPULAR) ? classActive : classInActive
                }
                to={`/movies?type=${MOVIE_TYPES.POPULAR}`}
              >
                Popular
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className={
                  isActive(MOVIE_TYPES.TOP_RATED) ? classActive : classInActive
                }
                to={`/movies?type=${MOVIE_TYPES.TOP_RATED}`}
              >
                Top Rated
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className={
                  isActive(MOVIE_TYPES.UPCOMING) ? classActive : classInActive
                }
                to={`/movies?type=${MOVIE_TYPES.UPCOMING}`}
              >
                Upcoming
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
