import React from "react";

function MoviesList() {
  return (
    <main className="w-full mt-24 sm:mt-16 min-h-full px-10 py-8">
      <h2 className="text-2xl font-semibold mb-5">Popular Movies</h2>
      <div className="w-full flex">
        <div className="min-w-1/5 w-1/5 border-grey-light border rounded-lg">
          Sort
        </div>
        <div className="pl-8">
          Movies
        </div>
      </div>
    </main>
  );
}

export default MoviesList;
