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
  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${data?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    }
  );
  const data2 = await res2.json();
  return data2;
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
  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tv/${data?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    }
  );
  const data2 = await res2.json();
  return data2;
};
