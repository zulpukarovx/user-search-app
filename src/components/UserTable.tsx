import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsersAsync,
  selectFilteredUsers,
  selectLoading,
} from '../features/users/usersSlice';
import { AppDispatch } from '@/app/store';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

const UserTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectFilteredUsers);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  if (loading === 'pending') {
    return <div>Loading...</div>;
  }

  if (loading === 'failed') {
    return <div>Error fetching users</div>;
  }

  return (
    <section className='pt-8'>
      <Table>
        <TableCaption>User Management Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email.toLowerCase()}</TableCell>
              <TableCell>{user.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}

export default UserTable