import Contact from '../Contact/Contact.js';
import css from './ContactList.module.css';
import { useAppSelector } from '../../hooks/hooks.js';

export default function ContactList() {
  const users = useAppSelector(state => state.contacts.items);
  const filter = useAppSelector(state => state.filters.name);
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <ul className={css.contacts}>
      {filteredUsers.map(user => (
        <li className={css.el} key={user.id}>
          <Contact contact={user} />
        </li>
      ))}
    </ul>
  );
}
