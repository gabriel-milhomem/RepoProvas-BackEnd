const subjectsRepository = require('../repository/subjects');

async function getSubjects(req, res) {
    try {
        const allSubjects = await subjectsRepository.getAllSubjects();
        return res.status(200).send(allSubjects);
        
    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

async function getSubjectsByPeriod(req, res) {
    try {
        const { id } = req.params;
        const subjects = await subjectsRepository.findSubjectsByPeriod(id);
        return res.status(200).send(subjects);
        
    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

module.exports = {
    getSubjects,
    getSubjectsByPeriod
}