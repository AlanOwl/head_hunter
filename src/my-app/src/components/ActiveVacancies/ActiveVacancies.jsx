import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Vacancy from '../Vacancy/Vacancy';
import "./ActiveVacancies.css"
import { useDispatch, useSelector } from "react-redux";
import { getVacancies, delVacancy } from '../../features/vacancy/vacancySlice';


const ActiveVacancies = () => {
	const [search, setSearch] = useState('')
	const [clicked, setClicked] = useState({})
	const user = JSON.parse(localStorage.getItem('user'))
	const dispatch = useDispatch()
	const data = useSelector(state => state.vacancy)

	useEffect(() => {
		dispatch(getVacancies())
	}, [dispatch])

	useEffect(() => {

		console.log(data)
	}, [data])


	useEffect(() => {
		const res = data.list.filter((info) => info.title === search)
		setClicked(res)
	}, [search])

	useEffect(() => {
	}, [clicked])

	const handleClick = (event) => {
		setSearch(event.currentTarget.value)
	}

	const handleClick2 = (event) => {

		dispatch(delVacancy(clicked[0]))
		console.log(clicked[0])
	}


	return (
		<div className='wrapper'>

			<Sidebar adress={"Active"} />
			<div className="active-vacancies-container">
				<div className="active-vacancies-wrapper">
					{data.list.filter((item) => user.vacancies.includes(item.id)).map((el, id) => (
						
						<button onClick={handleClick} value={el.title} className="" key={id}>
							<Vacancy data={el} />
						</button>

					))}
				</div>
				{clicked[0] &&
					<div className="active-vacancies-wrapper">
						<h3 className="title">{clicked[0].title}</h3>
						<p className="text">{clicked[0].text}</p>
						<span className="span">Contacts</span>
						<ul className="ul">
							<li>{clicked[0].tags}</li>
							</ul>
						<button onClick={handleClick2} className="button">Close vacancy</button>
					</div>
				}

			</div>

		</div>
	)
}

export default ActiveVacancies
