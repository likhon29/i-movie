export const loadImage = async (path: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/latest?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    }
  );
};
