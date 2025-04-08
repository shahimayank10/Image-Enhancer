export async function enchancedImageAPi(file) {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("hello"), 2000)
  );
  return data;
}
