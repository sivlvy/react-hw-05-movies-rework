import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Notify from 'notiflix';

import CastList from './CastList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

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
			} catch {
				setStatus(STATUS.REJECTED);
				Notify.failure('Sorry! Cast not found');
			}
		};

		fetchActors();
	}, [movieId]);

	return (
		<>
			{status === STATUS.PENDING && <Loader />}
			{status === STATUS.RESOLVED && <CastList actors={actors} />}
			{status === STATUS.REJECTED && <Error />}
		</>
	);
};

export default Cast;
