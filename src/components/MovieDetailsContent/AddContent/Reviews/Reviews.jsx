import React, { useState, useEffect } from 'react';
import STATUS from 'services/config';
import { getReviews } from 'services/services';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import ReviewsList from './ReviewsList';
const Reviews = () => {
	const [status, setStatus] = useState(STATUS.IDLE);
	const [review, setReview] = useState([]);

	const { movieId } = useParams();
	useEffect(() => {
		const fetchReviews = async () => {
			setStatus(STATUS.PENDING);

			try {
				const response = await getReviews(movieId);
				setReview(response);
				setStatus(STATUS.RESOLVED);
			} catch (err) {
				console.log(err.message);
			}
		};
		fetchReviews();
	}, [movieId]);
	return (
		<>
			{status === STATUS.PENDING && <Loader />}
			{status === STATUS.RESOLVED && <ReviewsList data={review} />}
		</>
	);
};

export default Reviews;
