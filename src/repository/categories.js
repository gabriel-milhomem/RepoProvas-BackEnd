const connection = require('../database');

async function getAllCategories() {
    const query = 'SELECT * FROM categories ORDER BY id';
    const allCategories = await connection.query(query);

    return allCategories.rows;
}

module.exports = {
    getAllCategories
}