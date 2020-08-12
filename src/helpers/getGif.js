
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=2LFC22cPjAEgBWlUXVXdCbAaQbORCyOL`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((item) => ({
    id: item.id,
    title: item.title,
    url: item?.images.downsized_medium.url,
  }));
  return gifs;
};
