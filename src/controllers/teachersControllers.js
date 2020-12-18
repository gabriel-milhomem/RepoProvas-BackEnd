const teachersRepository = require('../repository/teachers');

async function getTeachers(req, res) {
    try {
        const allTeachers = await teachersRepository.getAllTeachers();
        return res.status(200).send(allTeachers);
        
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
    getTeachersBySubject
}