import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export default function Contact({ contactsList: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button className={css.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
}
