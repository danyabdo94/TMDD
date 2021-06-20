export const GET_MOVIE_BY_ID = (id: string) =>
  `${process.env.REACT_APP_API_BASE}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

export const GET_CREDITS_BY_ID = (id: string) =>
  `${process.env.REACT_APP_API_BASE}/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`

export const GET_MOVIES_SORTED_BY = (type: string) =>
`${process.env.REACT_APP_API_BASE}/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}`