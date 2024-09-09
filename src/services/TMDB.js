const api_key = "4626200399b08f9d04b72348e3625f15";

const url = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=`;

const getMovies = async searchValue => {
  const response = await fetch(`${url}${searchValue}`);
  const data = await response.json();
  console.log(data.results.length);
  return data.results || [];
};

export default getMovies;
