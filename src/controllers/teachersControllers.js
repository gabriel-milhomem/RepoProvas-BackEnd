const teachersRepository = require('../repository/teachers');

async function getTeachers(req, res) {
    try {
        let allTeachers = await teachersRepository.getAllTeachers();
        allTeachers = allTeachers.map(t => ({...t, numberTest: 0}));
        const withNumberOfTests = await Promise.all(allTeachers.map(t => teachersRepository.getNumberOfTestsByTeacher(t)))
        return res.status(200).send(withNumberOfTests);
        
    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

async function getTeachersBySubject(req, res) {
    try {
        const { id } = req.params;
        const teachers = await teachersRepository.findTeachersBySubject(id);
        return res.status(200).send(teachers);
        
    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

module.exports = {
    getTeachers,
    getTeachersBySubject,
}