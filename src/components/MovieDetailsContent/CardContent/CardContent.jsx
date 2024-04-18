import { Link } from 'react-router-dom';

const CardContent = ({ details }) => {
	const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
	const {
		poster_path,
		title,
		homepage,
		vote_average,
		overview,
		runtime,
		genres,
	} = details;
	return (
		<div className="flex border-2 border-slate-400 px-4 py-4">
			<div>
				<div>{title}</div>
				<img src={BASE_IMG + poster_path} alt={title} />
			</div>
			<div>
				<Link target="_blank" to={homepage}>
					Official site
				</Link>
				<p>Ratings: {vote_average} </p>
				<div>
					<p>Overview:</p>
					<p>{overview}</p>
				</div>
				<p>Duration: {runtime} minutes</p>
				<ul>
					<p>Genres:</p>
					{genres.map(({ id, name }) => {
						return <li key={id}>{name}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default CardContent;
