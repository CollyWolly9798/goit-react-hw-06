import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export default function ContactForm() {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string()
      .required('Required')
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 123-45-67'),
  });

  const handleSubmit = value => {
    dispatch(addContact(value));
  };

  return (
    <Formik validationSchema={FeedbackSchema} initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor=''>Name</label>
        <Field className={css.field} type='text' name='name' id='' />
        <ErrorMessage className={css.err} name='name' component='span' />
        <label htmlFor=''>Number</label>
        <Field className={css.field} type='text' name='number' id='' />
        <ErrorMessage className={css.err} name='number' component='span' />
        <button type='submit'>Add contact</button>
      </Form>
    </Formik>
  );
}
