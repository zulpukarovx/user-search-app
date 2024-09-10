import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from './usersAPI';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UsersState {
  allUsers: User[];
  filteredUsers: User[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  searchBy: 'name' | 'username' | 'email' | 'phone';
  searchTerm: string;
}

const initialState: UsersState = {
  allUsers: [],
  filteredUsers: [],
  loading: 'idle',
  searchBy: 'name',
  searchTerm: '',
};

export const fetchUsersAsync = createAsyncThunk(
    'users/fetchUsers',
    async () => {
      const response = await fetchUsers();
      return response; 
    }
  );

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchBy: (state, action: PayloadAction<'name' | 'username' | 'email' | 'phone'>) => {
      state.searchBy = action.payload;
      state.searchTerm = '';
      state.filteredUsers = state.allUsers;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.filteredUsers = state.allUsers.filter((user) =>
        user[state.searchBy].toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.allUsers = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

export const { setSearchBy, setSearchTerm } = usersSlice.actions;

export const selectAllUsers = (state: { users: UsersState }) => state.users.allUsers;
export const selectFilteredUsers = (state: { users: UsersState }) => state.users.filteredUsers;
export const selectLoading = (state: { users: UsersState }) => state.users.loading;
export const selectSearchBy = (state: { users: UsersState }) => state.users.searchBy;
export const selectSearchTerm = (state: { users: UsersState }) => state.users.searchTerm;

export default usersSlice.reducer;