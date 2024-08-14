export const getNowPlayingMovie = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
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

export const getNowPlayingTvShow = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tv/airing_today?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
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
