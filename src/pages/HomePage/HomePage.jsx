import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix';

import { getPopularMovies } from 'services/services';

import MovieList from 'components/MovieList/MovieList';
import STATUS from 'services/config';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [status, setStatus] = useState(STATUS.PENDING);
	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await getPopularMovies();
				setPopularMovies(response);
				setStatus(STATUS.RESOLVED);
			} catch {
				setStatus(STATUS.REJECTED);
				Notify.failure('Sorry! Cant find popular movies');
			}
		};

		fetchMovies();
	}, []);

	return (
		<>
			{status === STATUS.RESOLVED && (
				<MovieList page="home" movies={popularMovies} MoviePageBoolean={true} />
			)}
			{status === STATUS.PENDING && <Loader />}
			{status === STATUS.REJECTED && <Error />}
		</>
	);
};

export default HomePage;
