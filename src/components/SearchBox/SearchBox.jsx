import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { useDispatch } from 'react-redux';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.inp}>
      <label htmlFor=''>Find contacts by name</label>
      <input type='text' onChange={filter} />
    </div>
  );
}
