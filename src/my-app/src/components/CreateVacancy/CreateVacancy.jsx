import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import Sidebar from '../Sidebar/Sidebar'
import { postVacancies } from '../../features/vacancy/vacancySlice';
import "./Create.css"
import { putUser } from '../../features/user/userSlice';

const CreateVacancy = () => {
	const dispatch = useDispatch()
	const [values, setValues] = useState({
		title: '',
		text: '',
		englvl: '',
		grade: '',
		tags: '',
	});

	const employer = JSON.parse(localStorage.getItem('user'))

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value })
		
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const isNotEmpty = Object.values(values).every((val) => val)

		if (!isNotEmpty) return;

		dispatch(postVacancies(values))
		dispatch(putUser({ login: employer.login, title: values.title }))
	}

	return (
		<div className='wrapper'>
			<Sidebar adress={"create"} />
			<div className="create-vacancy-wrapper">
				<form className="create-vacancy-form">
					<div className="create-vacancy-item">
						<label>Vacancy title</label>
						<input className="input_field"
							type="title"
							name="title"
							value={values.title}
							autoComplete='off'
							onChange={handleChange}
							required
						/>
					</div>
					<div className="create-vacancy-item">
						<label>Vacancy description</label>
						<input className="input_field"
							type="text"
							name="text"
							value={values.text}
							autoComplete='off'
							onChange={handleChange}
							required
						/>
					</div>
					
					<div className="create-vacancy-item">
						<label>English lvl</label>
						<select className="create-vacancy-select" name="englvl" value={values.englvl} onChange={handleChange}>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
						</select>
					</div>

					<div className="create-vacancy-item">
						<label>Grade</label>
						<select className="create-vacancy-select" name="grade" value={values.grade} onChange={handleChange}>
							<option>Grade 1</option>
							<option>Grade 2</option>
							<option>Grade 3</option>
							<option>Grade 4</option>
						</select>
					</div>

					<div className="create-vacancy-item">
						<label>Tags</label>
						<select className="create-vacancy-select" name="tags" value={values.tags} onChange={handleChange}>
							<option>Tags 1</option>
							<option>Tags 2</option>
							<option>Tags 3</option>
							<option>Tags 4</option>
						</select>
					</div>
					<div className="create-vacancy-item">
						<button className="create-vacancy-btn" type="submit">Close</button>
						<button onClick={handleSubmit} className="create-vacancy-btn" type="submit">Save</button>
					</div>
					
				</form>
			</div>
		</div>
	)
}

export default CreateVacancy
