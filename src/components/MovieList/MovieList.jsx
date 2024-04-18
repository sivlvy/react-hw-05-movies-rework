import MovieListItem from './MovieListItem/MovieListItem';

const MovieList = ({ movies }) => {
	return (
		<>
			<h1 className="font-bold mt-4 mb-8 text-center text-3xl font-mono">
				This is popular movie list in the day:
			</h1>
			<ul className="flex flex-wrap gap-4 justify-center ">
				{movies.map(({ id, original_title, poster_path }) => {
					return (
						<MovieListItem
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
