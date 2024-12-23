const express = require('express');
const Employee = require('../models/employee');

const router = express.Router();

//Create a new employee
router.post('/', async (req, res) => {
	const employee = new Employee(req.body);
	try {
		 await employee.save();
		 res.status(201).send(employee);
		 } catch (err) {
			 res.status(400).send(err);
		 }
});

//Get all employees
router.get('/', async (req, res) => {
	 try {
		 const employees = await Employee.find();
		  res.status(200).send(employees);
	 } catch (err) {
	 }
});

// Update an employee
router.put('/:id', async (req, res) => {
	try {
		const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
		 res.status(200).send(employee);
	} catch (err) {
		res.status(400).send(err);
	}
});

// Delete an employee
router.delete('/:id', async (req, res) => {
	try {
		await Employee.findByIdAndDelete(req.params.id);
		res.status(200).send({ message: 'Employee deleted' });
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
