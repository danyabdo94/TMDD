import { mockMovie } from "../../mock.data";

function Movie() {
  const mockedMovie = mockMovie;
  const convertRunTime = (runtime: number) => {
    return `${(runtime - (runtime % 60)) / 60}h ${runtime % 60}m`;
  };
  return (
    <div
      className="bg-cover bg-no-repeat border-b border-black w-full relative -bg-r-200 bg-top mt-16"
      style={{
        zIndex: 1,
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${mockedMovie.backdrop_path})`,
      }}
    >
      <div className="bg-gradient-to-r from-black-to-dark flex justify-center flex-wrap">
        <div className="pt-10 pb-10 w-full z-0 max-w-px-1400">
          <section className="text-white flex flex-nowrap">
            <div className="border-0 overflow-hidden w-full xs:min-w-80 xs:w-80 min-h-450 rounded-lg">
              <div className="block relative top-0 left-0 w-80 h-450">
                <div className="w-full min-w-full h-full">
                  <img
                    className="block w-full min-w-full h-full min-h-full border-0 outline-none"
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${mockedMovie.poster_path}`}
                    alt={mockedMovie.original_title}
                  />
                </div>
              </div>
            </div>

            <div className="flex">
              <section className="flex flex-wrap items-start content-center box-border pl-10">
                <div className="w-full mb-6 flex flex-wrap" dir="auto">
                  <h2 className="w-full m-0 p-0 text-4xl font-semibold">
                    {mockedMovie.original_title}
                    <span className="opacity-80	font-normal">
                      {" "}
                      ({mockedMovie.release_date.split("-")[0]})
                    </span>
                  </h2>

                  <div className="flex">
                    <span className="inline-flex whitespace-no-wrap items-center content-center leading-none rounded-sm mr-2 border border-white border-opacity-60 text-opacity-60 px-1">
                      PG-13
                    </span>
                    <span className="pl-0">
                      {mockedMovie.release_date} (US)
                    </span>
                    <span className="pl-5 relative top-0 left-0 dotted">
                      {mockedMovie.genres.map(
                        (genre, index) =>
                          `${index > 0 ? ", " : ""}${genre.name}`
                      )}
                    </span>
                    <span className="pl-5 relative top-0 left-0 dotted">
                      {convertRunTime(mockedMovie.runtime)}
                    </span>
                  </div>
                </div>
                <div className="header_info">
                  <h3
                    className="mb-0 font-normal italic opacity-70 text-bigger-10"
                    dir="auto"
                  >
                    {mockedMovie.tagline}
                  </h3>

                  <h3
                    className="font-semibold w-full m-0 text-bigger-20"
                    dir="auto"
                  >
                    Overview
                  </h3>
                  <div className="overview" dir="auto">
                    <p>{mockedMovie.overview}</p>
                  </div>

                  <ol className="mt-5 justify-start flex-wrap list-none list-inside m-0 p-0 flex relative top-0 left-0">
                    <li className="text-left mb-3 mr-0 box-border pr-5 w-1/3">
                      <p className="font-bold">Craig Gillespie</p>
                      <p className="text-smaller-10">Director</p>
                    </li>

                    <li className="text-left mb-3 mr-0 box-border pr-5 w-1/3">
                      <p className="font-bold">Craig Gillespie</p>
                      <p className="text-smaller-10">Screenplay</p>
                    </li>

                    <li className="text-left mb-3 mr-0 box-border pr-5 w-1/3">
                      <p className="font-bold">Craig Gillespie</p>
                      <p className="text-smaller-10">Screenplay</p>
                    </li>

                    <li className="text-left mb-3 mr-0 box-border pr-5 w-1/3">
                      <p className="font-bold">Craig Gillespie</p>
                      <p className="text-smaller-10">Story</p>
                    </li>

                    <li className="text-left mb-3 mr-0 box-border pr-5 w-1/3">
                      <p className="font-bold">Craig Gillespie</p>
                      <p className="text-smaller-10">Story</p>
                    </li>

                    <li className="text-left mb-3 mr-0 box-border pr-5 w-1/3">
                      <p className="font-bold">Craig Gillespie</p>
                      <p className="text-smaller-10">Story</p>
                    </li>
                  </ol>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Movie;
