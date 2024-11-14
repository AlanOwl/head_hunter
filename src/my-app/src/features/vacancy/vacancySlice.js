import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	list: [
		{
		title: '123',
		text: '123',
		englvl: '123',
		grade: '123',
		tags: '123',
		isActive: true
	}
],
}
export const delVacancy = createAsyncThunk(
	'vacancy/delVacancy',
	async (payload) => {
		const res = await axios.put('/delVacancy', payload)
		return res.data

	}
) 


export const getVacancies = createAsyncThunk(
	'vacancy/getVacancies',
	async (_, { rejectWithValue, dispatch}) => {
		const res = await axios.get('/vacancies')
		dispatch(getVacancy(res.data))

	}
) 

export const postVacancies = createAsyncThunk(
	'vacancy/postVacancies',
	async (payload) => {
		
		const res = await axios.post('/createVacancy', payload)
		return res.data

	}
) 


export const putVacancies = createAsyncThunk(
	'vacancy/putVacancies',
	async (payload) => {
		const res = await axios.put('/putVacancy', payload)
		return res.data

	}
) 

export const vacancySlice = createSlice({
	name: 'vacancy',
	initialState,
	reducers: {
		 getVacancy: (state, action) => {
			 state.list = action.payload
		},
		extraReducers: {
			[getVacancies.fulfilled]: () => console.log('fulfilled'),
			[getVacancies.pending]: () => console.log('pending'),
			[getVacancies.rejected]: () => console.log('rejected'),
			[postVacancies.fulfilled]: () => console.log('fulfilled'),
			[postVacancies.pending]: () => console.log('pending'),
			[postVacancies.rejected]: () => console.log('rejected'),
			[putVacancies.fulfilled]: () => console.log('fulfilled'),
			[putVacancies.pending]: () => console.log('pending'),
			[putVacancies.rejected]: () => console.log('rejected'),
		}
	},
})

export const { getVacancy, setVacancy } = vacancySlice.actions
export default vacancySlice.reducer