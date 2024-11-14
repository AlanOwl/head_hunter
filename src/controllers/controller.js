const { Users, Vacancies } = require('../my-app/models/index.js');


exports.getVacancies = async (req, res) => {
	try {
		const data = await Vacancies.findAll();
		return res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Ошибка при получении вакансий' });
	}
};

exports.createUser = async (req, res) => {
	try {
		const { login, password, role } = req.body;
		const user = await Users.create({ login, password, role })
		res.status(201).json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Ошибка при создании user' });
	}
};


exports.createVacancy = async (req, res) => {
	try {
		const { title, text, englvl, grade, tags } = req.body;
		const { isActive } = true
		const count = [0];
		const vacancy = await Vacancies.create({ title, text, englvl, grade, tags, count, isActive })
		return res.status(201).json(vacancy);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Ошибка при создании вакансии' });
	}
};

exports.delVacancy = async (req, res) => {
	const { title } = req.body;
	try {
		const vacancy = await Vacancies.findOne({ where: { title } })
		vacancy.isActive = false;
		await vacancy.save();
		res.status(201).json(vacancy);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Ошибка при обновлении вакансии' });
	}
};


exports.updateCount = async (req, res) => {
	const { title } = req.body;
	try {
		const vacancy = await Vacancies.findOne({ where: { title } })
		vacancy.count = 0;
		await vacancy.save();
		res.status(201).json(vacancy);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Ошибка при обновлении вакансии' });
	}
};


exports.updateVacancyInUser = async (req, res) => {

	const { login, title } = req.body;

	try {
		const user = await Users.findOne({ where: { login } })
		const id = await Vacancies.findOne({ where: { title } })

		if (!user.vacancies.includes(id.id)) {
			user.vacancies = [...user.vacancies, id.id];

			await user.save();

			const user2 = await Users.findAll({ where: { role : "user" } })

			if (user2.role !== 'employer') {
				let count = 0
				for (let index = 0; index < user2.length; index++) {
					if (user2[index].vacancies.includes(id.id)) {
							count += 1
						};
					}
				id.count = count
				await id.save();
			}

			res.status(201).json(user);
		} else {

			user.vacancies = user.vacancies.filter((item) => item !== id.id)
			await user.save();

			const user2 = await Users.findAll({ where: { role: "user" } })

			if (user2.role !== 'employer') {
				let count = 0
				for (let index = 0; index < user2.length; index++) {
					if (user2[index].vacancies.includes(id.id)) {
						count += 1
					};
				}
				id.count = count
				await id.save();
			}
			return res.status(201).json(user);
		}

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Ошибка при обновлении' });
	}
};



exports.auth = async (req, res) => {
	const { login, password } = req.body
	try {
		const user = await Users.findOne({ where: { login } });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}


		return res.status(201).json(user);
	} catch (e) {
		console.error(e);
		return res.status(500).json({ error: 'Internal Server Error' });
	}
}
