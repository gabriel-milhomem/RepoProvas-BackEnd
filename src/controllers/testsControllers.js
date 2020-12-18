const testsSchemas = require('../schemas/testsSchema');
const testsRepository = require('../repository/tests');

async function postTests(req, res) {
    try {
        const testsParams = req.body;
        const { error } = testsSchemas.postTest.validate(testsParams);
        if (error) return res.status(422);

        await testsRepository.insertTest(testsParams);
        return res.sendStatus(201);
        
    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

async function getTestsByTeacher(req, res) {
    try {
        const { id } = req.params;
        let allTests = await testsRepository.findTestsByTeacher(id);
        allTests = await testsRepository.orderByCategorie(allTests);
        return res.status(200).send(allTests);
        
    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

module.exports = {
    postTests,
    getTestsByTeacher
}