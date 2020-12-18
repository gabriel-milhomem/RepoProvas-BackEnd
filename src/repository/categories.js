const connection = require('../database');

async function getAllCategories() {
    const query = 'SELECT * FROM categories';
    const allCategories = await connection.query(query);

    return allCategories.rows;
}

module.exports = {
    getAllCategories
}