import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CastList from './CastList';
import Loader from 'components/Loader/Loader';

import STATUS from 'services/config';
import { getCredits } from 'services/services';

const Cast = () => {
	const [actors, setActors] = useState([]);
	const [status, setStatus] = useState(STATUS.PENDING);

	const { movieId } = useParams();

	useEffect(() => {
		const fetchActors = async () => {
			try {
				setStatus(STATUS.RESOLVED);
				const response = await getCredits(movieId);
				setActors(response);
			} catch (err) {
				console.log(err.message);
			}
		};

		fetchActors();
	}, [movieId]);

	return (
		<>
			{status === STATUS.PENDING && <Loader />}
			{status === STATUS.RESOLVED && <CastList actors={actors} />}
		</>
	);
};

export default Cast;
