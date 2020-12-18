const connection = require('../database');
const categoriesRepository = require('../repository/categories');

async function insertTest(params) {
    const {name, link, subject, teacher, category} = params;
    const query = 'INSERT INTO tests (name, link, subject_id, teacher_id, category_id) VALUES ($1, $2, $3, $4, $5)';
    await connection.query(query, [name, link, subject, teacher, category]);
}

async function findTestsByTeacher(id) {
    const query = `
        SELECT t.name, t.link, s.name AS subject, tch.name AS teacher, c.name AS category
        FROM tests AS t 
        JOIN categories AS c ON t.category_id = c.id 
        JOIN teachers AS tch ON tch.id = t.teacher_id
        JOIN subjects AS s ON t.subject_id = s.id WHERE t.teacher_id = $1 ORDER BY name DESC;`;
    const tests = await connection.query(query, [id]);

    return tests.rows;
}

async function orderByCategories(tests) {
    const categories = await categoriesRepository.getAllCategories();
    const order = [];
    categories.forEach(c => {
        const filtered = tests.filter(t => t.category === c.name);
        if(filtered.length > 0) {
            order.push(filtered);
        }
    });

    return order;
}

async function findTestsBySubject(id) {
    const query = `
        SELECT t.name, t.link, s.name AS subject, tch.name AS teacher, c.name AS category
        FROM tests AS t 
        JOIN categories AS c ON t.category_id = c.id 
        JOIN teachers AS tch ON tch.id = t.teacher_id
        JOIN subjects AS s ON t.subject_id = s.id WHERE t.subject_id = $1 ORDER BY name DESC;`;
    const tests = await connection.query(query, [id]);

    return tests.rows;
}

module.exports = {
    insertTest,
    findTestsByTeacher,
    orderByCategories,
    findTestsBySubject
}