import { Link } from 'react-router-dom';

import React from 'react';

const AddContent = () => {
	return (
		<div className="flex items-center gap-10 border-2 border-slate-400 bg-slate-300 mt-10 mb-10 px-2 shadow-lg shadow-slate-200 rounded-lg">
			<h2 className="font-bold font-mono text-2xl text-slate-700">
				Additional information:
			</h2>
			<div className="flex gap-6 my-8 font-bold font-mono text-xl">
				<Link
					className="border-2 border-slate-500 py-4 px-6 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-300 text-slate-600"
					to="cast"
				>
					Cast
				</Link>
				<Link
					className='border-2 border-slate-500 py-4 px-6 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-300 text-slate-600"'
					to="reviews"
				>
					Reviews
				</Link>
			</div>
		</div>
	);
};

export default AddContent;
