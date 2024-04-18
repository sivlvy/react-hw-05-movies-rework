const ReviewsList = ({ data }) => {
	return (
		<ul>
			{data.map(({ author, content, id }) => {
				return (
					<li key={id}>
						<h2 className="font-bold">{author}</h2>
						<p>{content}</p>
					</li>
				);
			})}
		</ul>
	);
};

export default ReviewsList;
