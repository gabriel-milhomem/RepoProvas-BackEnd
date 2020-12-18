const express = require('express');
const cors = require('cors');
const app = express();

const categoriesControllers = require('./controllers/categoriesControllers');
const subjectsControllers = require('./controllers/subjectsControllers');
const teachersControllers = require('./controllers/teachersControllers');
const testsControllers = require('./controllers/testsControllers');

app.use(cors());
app.use(express.json());

app.get('/api/categories', categoriesControllers.getCategories);
app.get('/api/subjects', subjectsControllers.getSubjects);
app.get('/api/teachers', teachersControllers.getTeachers);
app.get('/api/teachers/subjects/:id', teachersControllers.getTeachersBySubject);
app.get('/api/subjects/period', subjectsControllers.getSubjectsByPeriod);
app.post('/api/tests', testsControllers.postTests);
app.get('/api/tests/teacher/:id', testsControllers.getTestsByTeacher);
app.get('/api/tests/subject/:id', testsControllers.getTestsBySubject);

module.exports = app;