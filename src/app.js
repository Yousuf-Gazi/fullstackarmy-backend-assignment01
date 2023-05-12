const express = require('express');
const randomNumberGenerator = require('./controllers/randomNumberGenerator');
const fakePersonGenerator = require('./controllers/fakePersonGenerator');
const analyzeString = require('./controllers/analyzeString');

const app = express();

// Routes
app.get('/random', randomNumberGenerator.generateRandomValue);
app.get('/generate-person', fakePersonGenerator.generatePerson);
app.get('/analyze-string', analyzeString.analyzeString);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
