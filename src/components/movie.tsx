import Formatter from "../utils/formatter";

function Movie({ movie }: { movie: any }) {
  console.log({ movie });
  return (
    <div className="flex flex-wrap justify-center self-center border border-grey-light w-48 max-w-7xl h-card mt-7 rounded-lg">
      <div className="w-full h-image">
        <div className="w-full h-full">
          <img
            loading="lazy"
            className="w-full h-full rounded-lg rounded-b-none"
            src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.backdrop_path}`}
            alt={movie.original_title}
          />
        </div>
      </div>
      <div className="w-full pt-6 pr-2 pb-3 pl-2 relative flex content-start flex-wrap">
        <div className="absolute -top-3 left-3 w-9 max-h-9 box-border inline-block scale-100">
          <div className="rounded-full w-9 max-h-9 mr-0 inline-block bg-black top-0">
            <div
              className="relative w-full max-h-9 text-center"
              data-percent="87.0"
              data-track-color="#204529"
              data-bar-color="#21d07a"
            >
              <div className="w-full max-h-9 flex z-10 justify-center items-center">
                <span
                  className={`text-white p-2 icon icon-r${movie.vote_average * 10}`}
                  style={{
                   
                  }}
                ></span>
              </div>
              <canvas
                height="34"
                width="34"
                style={{ height: "34", width: "34" }}
              ></canvas>
            </div>
          </div>
        </div>

        <h2 className="font-bold w-full">
          <a href="/movie/337404" title="Cruella">
            {movie.original_title}
          </a>
        </h2>
        {console.log(movie.release_date)}
        <p className="text-grey-darkest">{Formatter(movie.release_date)}</p>
      </div>
    </div>
  );
}

export default Movie;
