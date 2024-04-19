import Container from 'components/Container/Container';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Error = () => {
	const location = useLocation();
	const comeback =
		location.state && location.state.from ? location.state.from : '/';
	return (
		<Container>
			<div className="h-1/2 py-16 w-1/2 mx-auto bg-slate-200 rounded-xl flex flex-col gap-10 justify-between items-center mt-40 border-2 border-slate-400">
				<span className="text-9xl font-bold font-mono">404</span>
				<h2 className="font-mono text-xl font-semibold">Cant find this page</h2>
				<div className="">
					<Link
						className="font-mono text-xl font-bold text-slate-700 border-2  bottom-4 border-slate-100 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 transition-colors duration-300 px-8"
						to={comeback}
					>
						Go back
					</Link>
				</div>
			</div>
		</Container>
	);
};

export default Error;
