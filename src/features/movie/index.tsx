import CarouselView from "../../components/carousel-view";
import { mockCredits, mockMovie } from "../../mock.data";
import MovieCard from "./movie-card";

function Movie() {
  const movie = mockMovie;
  const crew = mockCredits.crew.slice(0, 6);
  const cast = mockCredits.cast.slice(0, 9);

  return (
    <>
      <MovieCard movie={movie} crew={crew} />
      <div className="flex justify-center flex-wrap items-start content-start">
        <div className="w-screen flex justify-center items-start content-start">
          <div className="w-full flex items-start content-start pl-10 pr-10 pt-8 pb-8">
            <div className="bg-white flex flex-wrap pr-8 w-4/5 flex-initial">
              <section className="panel top_billed scroller">
                <h3 className="font-semibold mb-5 text-bigger-40" dir="auto">
                  Top Billed Cast
                </h3>
                <CarouselView cast={cast} />
              </section>
            </div>
            <div className="bg-white flex flex-wrap w-1/5">To be implmented</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
