import { getMovieDetails, getTvShowDetails } from "./loadDetails";

export const getLatestMovie = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/latest?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      next: { revalidate: 60 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  const movie = await getMovieDetails(data?.id);
  return movie;
};

export const getLatestTVShow = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tv/latest?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      next: { revalidate: 60 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  const tvShow = await getTvShowDetails(data?.id);
  return tvShow;
};
