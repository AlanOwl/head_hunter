import React from 'react'
import "./sidebar.css"
import exit from "../../img/exit.svg"
import list from "../../img/list.svg"
import list2 from "../../img/list2.png"
import { Link } from 'react-router-dom';
import { ROUTES } from "../../utils/routes";

const Sidebar = ({adress}) => {
	const user = JSON.parse(localStorage.getItem('user'))
	const handleClick = () => {
		localStorage.clear();
	}

	return (
		<div>
			<div className="main__wrapper-info">
				<div className="main-info__item">
					<Link className={adress === "vacancies" ? "info-link--active" : "info-link"} to={ROUTES.HOME}>
							<img src={list} alt="#" className="info-img"/>
							<span>Vacancies</span>
					</Link>
				</div>
				{user.role.includes('user') && 	
				<div className="main-info__item">
						<Link className={adress === "MyVacancies" ? "info-link--active" : "info-link"} to={ROUTES.MYVACANCIES}>
						<img src={list2} alt="#" className="info-img"/>
						<span>My Vacancies</span>
					</Link>
				</div>
				}
				{user.role.includes('employer') && 	
				<div className="main-info__item">
						<Link className={adress === "Active" ? "info-link--active" : "info-link"} to={ROUTES.ACTIVEVACANSY}>
						<img src={list2} alt="#" className="info-img" />
						<span>Active Vacancies</span>
					</Link>
				</div>
				}
				{user.role.includes('employer') && 				
				<div className="main-info__item">
						<Link className={adress === "create" ? "info-link--active" : "info-link"} to={ROUTES.CREATE}>
						<img src={list2} alt="#" className="info-img" />
						<span>Create-vacancy</span>
					</Link>
				</div>
				}

				<div className="main-info__item" onClick={handleClick}>
					<a href="/login" className="info-link" >
						<img src={exit} alt="#" className="info-img"/>
							<span>Logout</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
