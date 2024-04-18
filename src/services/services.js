import axios from 'axios';

const API_KEY = '148b221d3058fe623de271231e1c64df';

const options = {
	headers: {
		Authorization:
			'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDhiMjIxZDMwNThmZTYyM2RlMjcxMjMxZTFjNjRkZiIsInN1YiI6IjY1YjM4NTBmYjMzMTZiMDE4NWEwZTAzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vJ5gEPnjdtZjBLM8tZWgpyolVpxm1LIeiCW0wc8GLys',
	},
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
	TRENDING: '/trending/movie',
	SEARCH: '/search/movie',
	DETAILS: '/movie',
	CREDITS: '/movies/get-movie-credits',
	REVIEWS: '/movies/get-movie-reviews',
};

export const getPopularMovies = async () => {
	const { data } = await axios.get(
		`${END_POINTS.TRENDING}/day?api_key=${API_KEY}&language=en-US`,
		options
	);
	return data.results;
};

export const searchMovie = async query => {
	const { data } = await axios.get(
		`${END_POINTS.SEARCH}?api_key=${API_KEY}&query=${query}`,
		{
			...options,
			params: { query },
		}
	);

	return data;
};

export const getDetails = async movieId => {
	const { data } = await axios.get(
		`${END_POINTS.DETAILS}/${movieId}?api_key=${API_KEY}`,
		options
	);

	return data;
};

export const getCredits = async movieId => {
	const { data } = await axios.get(
		`movie/${movieId}/credits?api_key=${API_KEY}`,
		options
	);
	return data.cast;
};

export const getReviews = async movieId => {
	const { data } = await axios.get(
		`movie/${movieId}/reviews?api_key=${API_KEY}`,
		options
	);
	return data.results;
};
