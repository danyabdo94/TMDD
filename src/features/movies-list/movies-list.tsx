import { useState, useEffect } from "react";
import axios from "axios";
import Filters from "../../components/filters";
import data from "../../mock.data";
import Movie from "../../components/movie/movie";

function MoviesList() {
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/trending/movie/week?api_key=f9f33a1abf02ec3217e6018fc9fe264a`
  //     )
  //     .then((res) => {
  //     });
  // }, []);

  return (
    <main className="w-full mt-24 sm:mt-16 min-h-full px-10 py-8">
      <h2 className="text-2xl font-semibold mb-5">Popular Movies</h2>
      <div className="w-full flex flex-wrap">
        <div className="w-full sm:min-w-1/5 sm:w-1/5">
          <Filters />
        </div>
        <div className="pl-8 w-full sm:min-w-4/5 sm:w-4/5">
          <div className="w-full flex justify-between flex-wrap sm:-mt-7">
            {data?.results.map((element) => (
              <Movie movie={element} key={element.id}></Movie>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MoviesList;
