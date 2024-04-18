import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
	const { pathname } = useLocation();

	return (
		<nav className="flex gap-6 justify-center border-b-2 bg-slate-200 border-slate-200 px-auto font-bold text-xl py-4 text-center shadow-lg mb-10 font-mono items-center">
			<NavLink
				to="/"
				className={({ isActive }) =>
					`${
						isActive
							? 'bg-slate-300 rounded-lg py-2 w-24 px-2 py-1'
							: 'text-gray-600 hover:bg-slate-100 transition-colors duration-500 rounded-lg py-2 w-24 '
					}`
				}
			>
				Home
			</NavLink>
			<NavLink
				to="/movies"
				className={({ isActive }) =>
					`${
						isActive
							? 'bg-slate-300 rounded-lg py-2 w-24 px-2 py-1 '
							: 'text-gray-600 hover:bg-slate-100 transition-colors duration-500 rounded-lg py-2 w-24 '
					}`
				}
			>
				Movies
			</NavLink>
		</nav>
	);
};

export default Navigation;
