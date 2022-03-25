const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'af82d7be8f57d00f4e04fac446f5a0d5';

async function fetchHandling(url) {
  const response = await fetch(url);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
}

export function fetchTrendingMovies() {
  return fetchHandling(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
}

export function fetchMoviesById(id) {
  return fetchHandling(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
}

export function fetchSearchMovies(name) {
  return fetchHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${name}`
  );
}

export function fetchMovieCredits(id) {
  return fetchHandling(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
}

export function fetchMovieReviews(id) {
  return fetchHandling(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
