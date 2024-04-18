const CastList = ({ actors }) => {
	const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
	console.log(actors);
	return (
		<ul className="border-2 border-slate-200 justify-center py-4 flex flex-wrap gap-6 bg-slate-100">
			{actors.map(({ profile_path, id, character, name }) => {
				return (
					<li
						key={id}
						className="w-1/12 border-2 border-slate-300 rounded-lg overflow-hidden shadow-md"
					>
						<img
							className=""
							src={BASE_IMG + profile_path}
							alt={profile_path}
						/>
						<div className="flex flex-col justify-between">
							<p className="font-mono text-center text-base">{name}</p>
							<p className="font-mono text-xs text-center">({character})</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default CastList;
