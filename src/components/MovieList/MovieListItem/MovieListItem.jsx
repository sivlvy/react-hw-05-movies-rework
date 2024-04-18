import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const MovieListItem = ({ id, title, img }) => {
	const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
	const { pathname } = useLocation();
	return (
		<li className="flex flex-col rounded-lg w-2/12 border-2 border-slate-400">
			<Link to={`movies/${id}`} state={{ from: pathname }}>
				<img
					className="w-full object-cover rounded-t-lg"
					src={BASE_IMG + img}
					alt={title}
				/>
				<p className=" font-bold py-1 px-2 text-sm border-t-2 border-slate-500 overflow-hidden">
					{title}
				</p>
			</Link>
		</li>
	);
};

export default MovieListItem;
