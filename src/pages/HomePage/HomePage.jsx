import { getPopularMovies } from 'services/services';
import MovieList from 'components/MovieList/MovieList';
import React, { useState, useEffect } from 'react';

const HomePage = () => {
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await getPopularMovies();
				setPopularMovies(response);
			} catch (err) {
				console.log(err.message);
			}
		};

		fetchMovies();
	}, []);

	return <MovieList movies={popularMovies} />;
};

export default HomePage;
