import { Outlet, useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import React, { useState, useEffect } from 'react';

import { getDetails } from 'services/services';

import MovieDetailsContent from 'components/MovieDetailsContent/MovieDetailsContent';
import STATUS from 'services/config';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const MovieDetails = () => {
	const [status, setStatus] = useState(STATUS.PENDING);
	const { movieId } = useParams();
	const [details, setDetails] = useState(null);
	useEffect(() => {
		const fetchDetails = async () => {
			try {
				const response = await getDetails(movieId);
				setDetails(response);
				setStatus(STATUS.RESOLVED);
			} catch (err) {
				Notify.failure('Sorry! Cant find details');
				setStatus(STATUS.REJECTED);
			}
		};
		fetchDetails();
	}, [movieId]);
	return (
		<>
			{status === STATUS.PENDING && <Loader />}
			{status === STATUS.RESOLVED && <MovieDetailsContent movie={details} />}
			{status === STATUS.REJECTED && <Error />}
			<Outlet />
		</>
	);
};

export default MovieDetails;
