const categoriesRepository = require('../repository/categories');

async function getCategories(req, res) {
    try {
        const allCategories = await categoriesRepository.getAllCategories();
        return res.status(200).send(allCategories);
        
    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

module.exports = {
    getCategories
}