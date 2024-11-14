import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const loginUser = createAsyncThunk(
	'user/loginUser',
	async (payload, thunkAPI) => {

		try {
			const res = await axios.post('/login', payload)
			return res.data
		} catch (error) {
			console.log(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)
export const putUser = createAsyncThunk(
	'user/putUser',
	async (payload) => {
		const res = await axios.put('/putUser', payload)
		return res.data

	}
) 

export const createUser = createAsyncThunk(
	'user/createUser',
	async (payload, thunkAPI) => {

		try {
			const res = await axios.post('/signup', payload)
			return res.data
		} catch (error) {
			console.log(error)
			return thunkAPI.rejectWithValue(error)
		}

	}
)


export const getUser = createAsyncThunk(
	'user/getUser',
	async (_, { rejectWithValue, dispatch }) => {
		const res = await axios.get('/user')
		dispatch(setUser(res.data))

	}
)

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		loading: false
	},
	reducers: {
		setUser(state, action) {


			state.login = action.payload.login;
			state.password = action.payload.password;
			state.vacancies = action.payload.vacancies;

		},


	},
	extraReducers: (builder) => {
		builder.addCase(createUser.fulfilled, (state, { payload }) => {
			state.currentUser = payload
			state.loading = true

		});
		builder.addCase(loginUser.fulfilled, (state, { payload }) => {
			state.currentUser = payload
			state.loading = true
		});
		builder.addCase(loginUser.rejected, (state, { payload }) => {
			state.currentUser = 0
		});
		builder.addCase(putUser.fulfilled, (state, { payload }) => {
			state.currentUser = payload
		});
},
});

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer