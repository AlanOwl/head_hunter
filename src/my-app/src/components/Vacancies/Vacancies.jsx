import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../Sidebar/Sidebar";
import Vacancy from '../Vacancy/Vacancy';
import { getVacancies, putVacancies } from '../../features/vacancy/vacancySlice'

import "./vacancies.css"
import { putUser } from '../../features/user/userSlice';


const Vacancies = () => {
	const user = JSON.parse(localStorage.getItem('user'))
	const dispatch = useDispatch()
	const data = useSelector(state => state.vacancy)
	useEffect(() => {
		dispatch(getVacancies())
	}, [dispatch])

	
	const handleClick = (event) => {
		dispatch(putUser({ login: user.login, title: event.currentTarget.value }))
	}

	return (
		<div className='wrapper'>

			<Sidebar adress={"vacancies"} />
			<div className="vacancies-container">
				<div className="active-vacancies-wrapper">
					{data.list.filter((item) => item.isActive === true).map((el, id) => (
						<button onClick={handleClick} value={el.title} className="" key={id}>
							<Vacancy no={true} data={el} />
						</button>

					))}
				</div>
			</div>

		</div>
	)
}

export default Vacancies
