
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Vacancy from '../Vacancy/Vacancy';
import "./MyVacancies.css"
import { useDispatch, useSelector } from "react-redux";
import { getVacancies } from '../../features/vacancy/vacancySlice';

const MyVacancies = () => {
	const [search, setSearch] = useState('')
	const [clicked, setClicked] = useState({})
	const dispatch = useDispatch()
	const data = useSelector(state => state.vacancy)
	const user = JSON.parse(localStorage.getItem('user'))
	

	useEffect(() => {
		dispatch(getVacancies())
	}, [dispatch])



	useEffect(() => {
		const res = data.list.filter((info) => info.title === search)
		setClicked(res)
	}, [search])


	const handleClick = (event) => {
		setSearch(event.currentTarget.value)
	}



	return (
		<div className='wrapper'>

			<Sidebar adress={"MyVacancies"} />
			<div className="active-vacancies-container">
				<div className="active-vacancies-wrapper">
					{
						data.list.filter((item) => user.vacancies.includes(item.id)).map((el, id) => (
							<button onClick={handleClick} value={el.title} className="" key={id}>
								<Vacancy data={el} />
							</button>
						))
					}
				</div>
				{clicked[0] &&
					<div className="active-vacancies-wrapper">
						<div className="my-div">
							<h3 className="title">{clicked[0].title}</h3>
							<span className="eng">English lvl {clicked[0].englvl}</span>
							<span className="grade">{clicked[0].grade}</span>
						</div>

						<p className="text">{clicked[0].text}</p>
						<span className="span">Contacts</span>
						<ul className="ul">
							<li>{clicked[0].tags}</li>
						</ul>
						<button onClick={handleClick} className="button">Cancel responce</button>
					</div>
				}

			</div>

		</div>
	)
}

export default MyVacancies
