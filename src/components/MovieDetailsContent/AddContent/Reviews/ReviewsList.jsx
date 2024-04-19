const ReviewsList = ({ data }) => {
	return (
		<ul>
			{data?.map(({ author, content, id }) => {
				return (
					<li
						className="border-2 border-slate-400 bg-slate-200 mb-4 px-2  py-2 rounded-md shadow-md"
						key={id}
					>
						<h2 className="font-bold text-lg font-mono">{author}</h2>
						<p className="font-sans font-normal">{content}</p>
					</li>
				);
			})}
		</ul>
	);
};

export default ReviewsList;
