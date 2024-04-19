import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { FaSearch } from 'react-icons/fa';

import { searchMovie } from 'services/services';

import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import STATUS from 'services/config';

const SearchBar = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [value, setValue] = useState(searchParams.get('query' ?? ''));
	const [movies, setMovies] = useState([]);
	const [status, setStatus] = useState(STATUS.IDLE);
	const query = searchParams.get('query') ?? '';

	useEffect(() => {
		if (!query) {
			return;
		}

		const fetchMovies = async () => {
			setStatus(STATUS.PENDING);
			try {
				const response = await searchMovie(query);

				setMovies(response);
				setStatus(STATUS.RESOLVED);
			} catch {
				setStatus(STATUS.REJECTED);
			}
		};

		fetchMovies();
	}, [query]);

	const handleChange = e => {
		setValue(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		setSearchParams({ query: value });

		const response = await searchMovie(value);
		setMovies(response);
		if (!response.length) {
			Notify.failure(`Cannot find '${value}'`);
		}
	};

	return (
		<>
			<div>
				<form
					className="flex justify-center gap-2 mb-2"
					onSubmit={handleSubmit}
				>
					<input
						className="py-1 px-2 rounded-xl outline-none border-2 border-teal-700 font-mono text-slate-500"
						onChange={handleChange}
						type="text"
					/>
					<button
						className="border-2 border-slate-500 px-2 rounded-xl bg-slate-300"
						type="submit"
					>
						<FaSearch />
					</button>
				</form>
			</div>
			{status === STATUS.PENDING && <Loader />}
			{status === STATUS.RESOLVED && (
				<MovieList page="movie" movies={movies} MoviePageBoolean={false} />
			)}
		</>
	);
};

export default SearchBar;
