import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../utils/routes";

import Vacancies from '../Vacancies/Vacancies';
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import CompanySignup from "../CompanySignup/CompanySignup";
import MyVacancies from '../MyVacancies/MyVacancies';
import CreateVacancy from '../CreateVacancy/CreateVacancy';
import ActiveVacancies from '../ActiveVacancies/ActiveVacancies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

const AppRoutes = () => {
	const { currentUser } = useSelector(({ user }) => user)
	const [user, setUser] = useState(localStorage ? JSON.parse(localStorage.getItem('user')) : null)
	


	useEffect(() => {
		if (currentUser !== null) {

			localStorage.setItem('user', JSON.stringify(currentUser));
			setUser(currentUser)
		}

	}, [currentUser])


	return (

		<Routes>
			<Route exact path={ROUTES.SIGNIN} element={<Signin />} />
			<Route exact path={ROUTES.SIGNUP} element={<Signup />} />
			<Route exact path={ROUTES.COMPANYSIGNUP} element={< CompanySignup />} />


			<Route element={<ProtectedRoute isAllowed={!!user} />}>

				<Route exact path={ROUTES.HOME} element={< Vacancies />} />
				<Route exact path="/" element={<Vacancies />} />

			</Route>

			<Route element={<ProtectedRoute redirectPath={ROUTES.HOME} isAllowed={!!user && user.role.includes('user')} />}>

				<Route exact path={ROUTES.MYVACANCIES} element={<MyVacancies />} />

			</Route>

			<Route element={<ProtectedRoute redirectPath={ROUTES.HOME} isAllowed={!!user && user.role.includes('employer')} />}>

				<Route exact path={ROUTES.ACTIVEVACANSY} element={<ActiveVacancies />} />
				<Route exact path={ROUTES.CREATE} element={<CreateVacancy />} />
			</Route>

				
				
				
				
				



		</Routes>
	)
}

export default AppRoutes;