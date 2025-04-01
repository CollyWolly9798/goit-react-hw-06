import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

export default function ContactList() {
  const users = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  return (
    <ul className={css.contacts}>
      {filter === ''
        ? users.map(user => (
            <li className={css.el} key={user.id}>
              <Contact contactsList={user} />
            </li>
          ))
        : users
            .filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
            .map(user => (
              <li className={css.el} key={user.id}>
                <Contact contactsList={user} />
              </li>
            ))}
    </ul>
  );
}
