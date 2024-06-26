import BackBtn from 'components/BackBtn/BackBtn';
import CardContent from 'components/MovieDetailsContent/CardContent/CardContent';
import AddContent from './AddContent/AddContent';
const MovieDetailsContent = ({ movie }) => {
	return (
		<>
			<BackBtn />
			<CardContent details={movie} />
			<AddContent details={movie} />
		</>
	);
};

export default MovieDetailsContent;
