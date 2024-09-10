import { Input } from "./ui/input"
import { useDispatch, useSelector } from 'react-redux';
import { setSearchBy, setSearchTerm, selectSearchBy } from '../features/users/usersSlice';


const SearchInput = () => {

  const dispatch = useDispatch();
  const searchBy = useSelector(selectSearchBy);

  const handleSearchByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSearchBy(e.target.value as 'name' | 'username' | 'email' | 'phone'));
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <section className="flex gap-4">
      <select value={searchBy} onChange={handleSearchByChange}>
        <option value="name">Name</option>
        <option value="username">Username</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
      </select>
      <Input type="text" 
        placeholder={`Search users by ${searchBy}`}
        onChange={handleSearchTermChange}
      />
    </section>
  )
}

export default SearchInput