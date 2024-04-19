const CastList = ({ actors }) => {
	const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
	console.log(actors);
	return (
		<ul className="border-2 border-slate-200 justify-center py-4 flex flex-wrap gap-6 bg-slate-200 rounded-md shadow-lg  mb-10 mt-10">
			{actors?.map(({ profile_path, credit_id, character, name }) => {
				return (
					<li
						key={credit_id}
						className="w-1/6 border-2 border-slate-300  overflow-hidden  cursor-pointer rounded-md shadow-md"
					>
						<img
							className="mb-2"
							src={BASE_IMG + profile_path}
							alt={profile_path ? profile_path : '?'}
						/>
						<div className="flex flex-col justify-center mb-2 items-center">
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
