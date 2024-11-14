import React, { useEffect } from 'react'
import "./vacancy.css"
import { useDispatch, useSelector } from "react-redux";
import { getVacancies } from '../../features/vacancy/vacancySlice';
import img from "../../img/user.svg"

const Vacancy = ({ data,no }) => {
	const user = JSON.parse(localStorage.getItem('user'))

	return (


		<div className='vacancy-wrapper'>

			<h5 className="vacancy-title">{data.title}</h5>
			<p className="vacancy-description">{data.text}</p>
			<div className="img">
				

				{user.role.includes('user') && user.vacancies.includes(data.id)  && <p className='responce'>You respounded</p>}
				{user.role.includes('employer') && no!==true && <img src={img} alt="" />}
				{user.role.includes('employer') && no !== true && <span>{data.count}</span>}
				
			</div>

		</div>



	)
}

export default Vacancy
