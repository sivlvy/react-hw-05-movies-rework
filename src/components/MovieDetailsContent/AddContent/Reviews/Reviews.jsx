import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';

import Loader from 'components/Loader/Loader';
import ReviewsList from './ReviewsList';

import { getReviews } from 'services/services';
import STATUS from 'services/config';

const Reviews = () => {
	const [status, setStatus] = useState(STATUS.PENDING);
	const [review, setReview] = useState([]);

	const { movieId } = useParams();
	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await getReviews(movieId);
				setReview(response);
				if (!response.length) {
					Notify.failure('Sorry! Reviews not found');
				}
				setStatus(STATUS.RESOLVED);
			} catch {
				setStatus(STATUS.REJECTED);
			}
		};
		fetchReviews();
	}, [movieId]);
	return (
		<>
			{status === STATUS.PENDING && <Loader />}
			{status === STATUS.RESOLVED && <ReviewsList data={review} />}
			{status === STATUS.REJECTED && (
				<div>We don't have any reviews for this movie</div>
			)}
		</>
	);
};

export default Reviews;
