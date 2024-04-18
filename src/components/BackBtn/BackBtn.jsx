import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BackBtn = () => {
	const location = useLocation();
	const comeback =
		location.state && location.state.from ? location.state.from : '/';
	return (
		<div>
			<Link
				className="font-mono border-2 absolute bottom-4 border-slate-100 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 transition-colors duration-300 px-4"
				to={comeback}
			>
				Go back
			</Link>
		</div>
	);
};

export default BackBtn;
