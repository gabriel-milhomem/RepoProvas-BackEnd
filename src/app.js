const express = require('express');
const cors = require('cors');
const app = express();

const categoriesControllers = require('./controllers/categoriesControllers');
const subjectsControllers = require('./controllers/subjectsControllers');
const teachersControllers = require('./controllers/teachersControllers');

app.use(cors());
app.use(express.json());

app.get('/api/categories', categoriesControllers.getCategories);
app.get('/api/subjects', subjectsControllers.getSubjects);
app.get('/api/teachers', teachersControllers.getTeachers);
app.get('/api/teachers/subjects/:id', teachersControllers.getTeachersBySubject);
app.get('/api/subjects/period/:id', subjectsControllers.getSubjectsByPeriod);
app.get('/api/period', async () => {
    
});

module.exports = app;