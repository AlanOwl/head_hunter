const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller.js');
const { User, Vacancies } = require('../my-app/models/index.js');


router.get('/vacancies', controller.getVacancies);

router.post('/createVacancy', controller.createVacancy);

router.put('/putVacancy', controller.updateCount);

router.put('/delVacancy', controller.delVacancy);

router.put('/putUser', controller.updateVacancyInUser);

router.post('/login', controller.auth)

router.post('/signup', controller.createUser)



module.exports = router