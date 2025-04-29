import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Contact as ContactType } from '../../types';

interface ContactProp {
  contact: ContactType;
}

export default function Contact({ contact }: ContactProp) {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.contacts.items);
  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        <li>{contact.name}</li>
        <li>{contact.number}</li>
      </ul>
      <button className={css.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
}
