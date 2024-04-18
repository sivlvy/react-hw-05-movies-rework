import MovieDetailsContent from 'components/MovieDetailsContent/MovieDetailsContent';
import { Outlet, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getDetails } from 'services/services';
import STATUS from 'services/config';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
	const [status, setStatus] = useState(STATUS.IDLE);
	const { movieId } = useParams();
	const [details, setDetails] = useState(null);
	useEffect(() => {
		const fetchDetails = async () => {
			setStatus(STATUS.PENDING);
			try {
				const response = await getDetails(movieId);
				setDetails(response);
				setStatus(STATUS.RESOLVED);
			} catch (err) {
				setStatus(STATUS.REJECTED);
				console.log(err.message);
			}
		};
		fetchDetails();
	}, [movieId]);
	return (
		<>
			{status === STATUS.PENDING && <Loader />}
			{status === STATUS.RESOLVED && <MovieDetailsContent movie={details} />}
			<Outlet />
		</>
	);
};

export default MovieDetails;
