const connection = require('../database');

async function insertTest(params) {
    const {name, link, subject, teacher, category} = params;
    const query = 'INSERT INTO tests (name, link, subject_id, teacher_id, category_id) VALUES ($1, $2, $3, $4, $5)';
    await connection.query(query, [name, link, subject, teacher, category]);
}

module.exports = {
    insertTest
}