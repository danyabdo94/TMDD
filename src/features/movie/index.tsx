import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CarouselView from "../../components/carousel-view";
import MovieCard from "./movie-card";
import { Movie as MovieModel } from "../../models/movie";
import { CrewItem } from "../../models/crew-item";
import { CastItem } from "../../models/cast-item";
import { GET_CREDITS_BY_ID, GET_MOVIE_BY_ID } from "../../app/const";

function Movie() {
  const [movie, setMovie] = useState({} as MovieModel);
  const [cast, setCast] = useState([] as CastItem[]);
  const [crew, setCrew] = useState([] as CrewItem[]);

  let { id } = useParams() as { id: string };
  useEffect(() => {
    axios.get(GET_MOVIE_BY_ID(id)).then((res) => {
      setMovie(res.data);
    });
    axios.get(GET_CREDITS_BY_ID(id)).then((res) => {
      setCrew(res.data.crew.slice(0, 6));
      setCast(res.data.cast.slice(0, 6));
    });
  }, [id]);

  return (
    <>
      {movie?.id && crew.length && cast.length && (
        <MovieCard movie={movie} crew={crew} />
      )}
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
            <div className="bg-white flex flex-wrap w-1/5">
              To be implmented
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
