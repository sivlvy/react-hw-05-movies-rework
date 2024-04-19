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
		<div className="flex border-2 border-slate-400 px-4 py-4 rounded-xl gap-10 items-center">
			<div className="">
				<div className="font-extrabold text-center text-xl font-mono pb-4 pt-2 ">
					{title}
				</div>
				<img
					className="rounded-xl border-2 border-slate-400 shadow-lg max-w-xs"
					src={BASE_IMG + poster_path}
					alt={title}
				/>
			</div>
			<div className="font-mono flex flex-col gap-6 justify-center border-2  h-4/5 px-2 py-4 mt-10 rounded-xl border-slate-400  bg-slate-200 shadow-lg shadow-slate-200 w-full mx-auto">
				<Link
					className="font-bold text-lg uppercase text-slate-600"
					target="_blank"
					to={homepage}
				>
					Official site
				</Link>
				<div className="flex gap-2 items-center">
					<p className="font-bold text-lg uppercase text-slate-600">Ratings:</p>
					<span>{vote_average} </span>
				</div>
				<div>
					<p className="font-bold text-lg uppercase text-slate-600">
						Overview:
					</p>
					<p>{overview}</p>
				</div>
				<div className="flex items-center gap-2">
					<p className="font-bold text-lg uppercase text-slate-600">
						Duration:
					</p>
					<p> {runtime} minutes</p>
				</div>
				<ul className="">
					<p className="font-bold text-lg uppercase text-slate-600">Genres:</p>
					<p>
						{genres?.map(({ id, name }) => {
							return <li key={id}>{name}</li>;
						})}
					</p>
				</ul>
			</div>
		</div>
	);
};

export default CardContent;
