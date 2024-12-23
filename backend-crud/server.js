const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const dbConfig = require('./config/db');

const app = express();
app.use(express.json());

app.use('/employees', employeeRoutes);
app.use('/departments', departmentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
	    console.log(`Server running on port ${PORT}`);
});

