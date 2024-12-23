const express = require('express');
const Department = require('../models/department');

const router = express.Router();

//Create a new department
router.post('/', async (req, res) => {
	const department = new Department(req.body);
	try {
		await department.save();
		res.status(201).send(department);
	} catch (err) {
		res.status(400).send(err);
	}
});

//Get all departments
router.get('/', async (req, res) => {
	try {
		const departments = await Department.find();
		res.status(200).send(departments);
	} catch (err) {
		res.status(400).send(err);
	}
});

//Update a department
router.put('/:id', async (req, res) => {
	try {
		await Department.findByIdAndDelete(req.params.id);
		res.status(200).send({ message: 'Department deleted' });
	} catch (err) {
		 res.status(400).send(err);
	}
});

module.exports = router;
