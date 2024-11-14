
import "./signup.css"
import React, { useEffect, useState } from 'react'
import { ROUTES } from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from '../../features/user/userSlice';
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const { currentUser } = useSelector(({ user }) => user)
	const { loading } = useSelector(({ user }) => user)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [values, setValues] = useState({
		login: '',
		role: '',
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
				role: '',
				password: '',
			})
		}
	}, [currentUser])

	const handleSubmit = (e) => {
		e.preventDefault()

		const isNotEmpty = Object.values(values).every((val) => val)

		if (!isNotEmpty) return;

		dispatch(createUser(values))

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
						<label>role</label>
						<input
							className="input_field"
							type="role"
							name="role"
							value={values.role}
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
					<div className="input__login-wrapper">
						<label>repeat password</label>
						<input className="input_field" type="password" name="confirm_password" />
					</div>
					<div className="login_info">Already have an account? <a href="/login">Sign in</a></div>
					<div className="input_bottom">
						<button  className="login_form__btn signup_btn" type="submit">Sign in</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Signup
