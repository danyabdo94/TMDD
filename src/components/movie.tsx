function Movie({ movie }: { movie: any }) {
  console.log({ movie });
  return <div className="flex flex-wrap justify-center self-center border border-grey-light w-48 max-w-7xl h-card mt-7">{movie.original_title}</div>;
}

export default Movie;
