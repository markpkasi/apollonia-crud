const mongoose = require('mongoose');

// MongoDB connection string
 mongoose.connect('mongodb://localhost:27017/apolloniaDB', {
	     useNewUrlParser: true,
	     useUnifiedTopology: true
 })
.then(() => {
	    console.log('Connected to MongoDB');
})
.catch((err) => {
	    console.error('Could not connect to MongoDB:', err);
});
