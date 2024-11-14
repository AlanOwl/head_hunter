import React, { useState } from 'react'
import { useEffect } from 'react'

const CompanySignup = () => {
	const [values, setValues] = useState({
		name: '',
		login: '',
		password: '',
		repeatPassword: '',
	})

	const handleChange = ({ target: { value, name }}) => {
		setValues({ ...values, [name]: value})
	}

	useEffect(() => {
		console.log(values)
	}, [values])

	return (
		<div>
			<div className="login_wrapper">
				<div className="login_form__main">
					<form className="login_form">

						<div className="input__login-wrapper">
							<label>Company name</label>
							<input className="input_field"
								type="name"
								name="name"
								value={values.companyName}
								autoComplete='off'
								onChange={handleChange}
								required
							/>
						</div>
						<div className="input__login-wrapper">
							<label>login</label>
							<input className="input_field"
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
							<input className="input_field"
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

							<input className="input_field"
								type="password"
								name="repeatPassword"
								value={values.repeatPassword}
								autoComplete='off'
								onChange={handleChange}
								required
							/>
						</div>
						<div className="login_info">Already have an account? <a href="/signin">Sign in</a></div>
						<div className="input_bottom">
							<button className="login_form__btn signup_btn" type="submit">Sign in</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CompanySignup
