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
        let allPeriods = await subjectsRepository.getAllPeriods();
        allPeriods = await Promise.all(allPeriods.map(async p => {
            const subjects = await subjectsRepository.findSubjectsByPeriod(p.id);
            return {...p, subjects};
        }));

        return res.status(200).send(allPeriods);
        
    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

module.exports = {
    getSubjects,
    getSubjectsByPeriod,
}