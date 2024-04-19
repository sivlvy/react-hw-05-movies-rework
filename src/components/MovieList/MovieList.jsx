import MovieListItem from './MovieListItem/MovieListItem';

const MovieList = ({ page, movies, MoviePageBoolean }) => {
	const title =
		page === 'home'
			? 'This is popular movie list in the day:'
			: 'This is movie list according to your search:';
	const isMovies = Boolean(movies.length);
	return (
		<>
			{isMovies && (
				<h1 className="font-bold mt-4 mb-8 text-center text-3xl font-mono">
					{title}
				</h1>
			)}
			<ul className="flex flex-wrap gap-4 justify-center ">
				{movies?.map(({ id, original_title, poster_path }) => {
					return (
						<MovieListItem
							isMoviePage={MoviePageBoolean}
							id={id}
							key={id}
							title={original_title}
							img={poster_path}
						/>
					);
				})}
			</ul>
		</>
	);
};

export default MovieList;
