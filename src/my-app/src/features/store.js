import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension';
import vacancySlice from "./vacancy/vacancySlice"
import userSlice from "./user/userSlice"

export const store =  configureStore({
	reducer: {
		vacancy: vacancySlice,
		user: userSlice,
	}
}, composeWithDevTools())

export default store