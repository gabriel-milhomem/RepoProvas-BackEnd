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

module.exports = {
    postTests
}