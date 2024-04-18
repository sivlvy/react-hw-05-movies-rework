import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
const SharedLayout = () => {
	return (
		<>
			<Header />
			<Container>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</Container>
		</>
	);
};

export default SharedLayout;
