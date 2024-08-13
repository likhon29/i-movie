export const getPopularMovie = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
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

export const getPopularTvShow = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
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
