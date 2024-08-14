export const getMovieDetails = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

export const getTvShowDetails = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
