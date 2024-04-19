import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BackBtn = () => {
	const location = useLocation();
	const comeback =
		location.state && location.state.from ? location.state.from : '/';
	return (
		<div className="block flex justify-end mb-4">
			<Link
				className="font-mono text-xl font-bold text-slate-700 border-2  bottom-4 border-slate-100 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 transition-colors duration-300 px-8"
				to={comeback}
			>
				Go back
			</Link>
		</div>
	);
};

export default BackBtn;
