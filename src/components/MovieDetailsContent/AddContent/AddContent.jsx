import CastContent from './Cast/Cast';
import ReviewContentList from './Reviews/Reviews';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'services/services';
import STATUS from 'services/config';
import Loader from 'components/Loader/Loader';

import { Link } from 'react-router-dom';
// const AddContent = ({ details }) => {
// 	const { movieId } = useParams();
// 	const [status, setStatus] = useState(STATUS.IDLE);
// 	const [review, setReviews] = useState([]);

// 	useEffect(() => {
// 		setStatus(STATUS.PENDING);
// 		const fetchReviews = async () => {
// 			try {
// 				const response = await getReviews(movieId);
// 				setReviews(response);
// 				setStatus(STATUS.RESOLVED);
// 			} catch (err) {
// 				console.log(err.message);
// 			}
// 		};
// 		fetchReviews();
// 	}, [movieId]);
// 	return (
// 		<div className="">
// 			<h2>Additional information:</h2>
// 			<div className="">
// 				<CastContent />
// 				<ReviewContentList data={review} />
// 			</div>
// 		</div>
// 	);
// };
import React from 'react';

const AddContent = () => {
	return (
		<div>
			<Link to="cast">Cast</Link>
			<Link to="reviews">Reviews</Link>
		</div>
	);
};

export default AddContent;
