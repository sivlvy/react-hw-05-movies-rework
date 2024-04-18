import { Formik, Form, Field } from 'formik';

const initialValues = {
	value: '',
};

const SearchBar = ({ formSubmit, data }) => {
	const formSubmitHandler = ({ value }, { resetForm }) => {
		formSubmit(value);
		console.log(value);
		resetForm();
	};

	return (
		<Formik initialValues={initialValues} onSubmit={formSubmitHandler}>
			<Form>
				<Field name="value" type="text" />
				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};

export default SearchBar;
