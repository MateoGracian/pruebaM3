import validate from './validate';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormikLogin = () => {
    const initialValues = {
        email: '',
        password: '',
    };
    
    return (
        <Formik 
        initialValues={initialValues} 
        validate={validate}
        onSubmit={(values) => {alert(`usernmame: ${values.username} password: ${values.password}`)}}>
        <Form>
            <Field type='text' name='username' />
            <ErrorMessage name='username' component='div' />

            <Field type='password' name='password' />
            <ErrorMessage name='password' component='div' />

            <button type='submit'>Log In</button>
        </Form>
        </Formik>
    );
}

export default FormikLogin; 