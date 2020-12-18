const connection = require('../database');

async function getAllSubjects() {
    const query = 'SELECT * FROM subjects';
    const allSubjects= await connection.query(query);

    return allSubjects.rows;
}

async function findSubjectsByPeriod(id) {
    const query = `
        SELECT s.id, s.name FROM subjects AS s JOIN period AS p
        ON s.period_id = p.id WHERE p.id = $1;
    `;
    const subjects= await connection.query(query, [id]);

    return subjects.rows;
}

async function getAllPeriods() {
    const query = 'SELECT * FROM period';
    const allPeriods = await connection.query(query);

    return allPeriods.rows;
}

module.exports = {
    getAllSubjects,
    findSubjectsByPeriod,
    getAllPeriods
}