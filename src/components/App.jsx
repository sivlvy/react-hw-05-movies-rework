import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import HomePage from 'pages/HomePage/HomePage';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Error from './Error/Error';
import CastContent from './MovieDetailsContent/AddContent/Cast/Cast';
import Reviews from './MovieDetailsContent/AddContent/Reviews/Reviews';
export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/movies" element={<MoviesPage />} />
				<Route path="movies/:movieId" element={<MovieDetails />}>
					<Route path="cast" element={<CastContent />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
			</Route>
			<Route path="*" element={<Error />} />
		</Routes>
	);
};
