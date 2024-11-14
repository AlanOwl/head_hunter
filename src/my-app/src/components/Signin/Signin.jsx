import React, { useEffect, useState } from 'react'
import { ROUTES } from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../../features/user/userSlice';
import { useNavigate } from "react-router-dom";
import "./signin.css"

const Signin = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { currentUser } = useSelector(({ user }) => user)
	const { loading } = useSelector(({ user }) => user)
	const [values, setValues] = useState({
		login: '',
		password: '',
	});
	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value })
	}


	useEffect(() => {
			if (loading) {
			navigate(ROUTES.HOME)
		} else {
			setValues({
				login: '',
				password: '',
			})
		}
		// console.log(currentUser)
	}, [currentUser])

	const handleSubmit = (e) => {
		e.preventDefault()
		// localStorage.setItem('user', JSON.stringify(values));
		dispatch(loginUser(values))
		

	}


	return (

		<div className="login_wrapper">
			<div className="login_form__main">

				<form className="login_form" onSubmit={handleSubmit}>

					<div className="input__login-wrapper">
						<label>login</label>
						<input
							className="input_field"
							type="login"
							name="login"
							value={values.login}
							autoComplete='off'
							onChange={handleChange}
							required
						/>
					</div>

					<div className="input__login-wrapper">
						<label>password</label>
						<input
							className="input_field"
							type="password"
							name="password"
							value={values.password}
							autoComplete='off'
							onChange={handleChange}
							required
						/>
					</div>


					<div className="login_info">New to BestVacancies? <a href="/signup">Create an account</a></div>
					<div className="input_bottom">
						<button className="login_form__btn" type="submit">Sign in</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Signin
