export const getLatestMovie = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/latest?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
};


