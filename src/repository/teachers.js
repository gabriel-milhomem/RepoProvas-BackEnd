const connection = require('../database');

async function findTeachersBySubject(id) {
    const query = `
        SELECT t.id, t.name FROM teachers AS t JOIN teachers_subjects AS tc
        ON t.id = tc.teacher_id WHERE tc.subject_id = $1;
    `;
    const allSubjects= await connection.query(query, [id]);

    return allSubjects.rows;
}

async function getAllTeachers() {
    const query = 'SELECT * FROM teachers';
    const allTeachers = await connection.query(query);

    return allTeachers.rows;
}

module.exports = {
    findTeachersBySubject,
    getAllTeachers,
}