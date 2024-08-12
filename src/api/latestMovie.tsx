export const getLatestMovie = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/latest?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      // bearer token

      cache: "no-store",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
