import React, { useState } from 'react';

import BackBtn from 'components/BackBtn/BackBtn';
import SearchBar from 'components/SearchBar/SearchBar';

import { searchMovie } from 'services/services';

const MoviesPage = () => {
	const [movies, setMovies] = useState([]);

	const handleFormSubmit = async query => {
		try {
			const response = await searchMovie(query);
			console.log(response);
			setMovies(response)
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<>
			<SearchBar formSubmit={handleFormSubmit} data={movies} />
			<BackBtn />
		</>
	);
};

export default MoviesPage;
