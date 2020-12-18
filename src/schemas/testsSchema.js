const joi = require('joi');

const postTest = joi.object({
    name: joi.string().required(),
    link: joi.string().uri().required(),
    subject: joi.number().required(),
    teacher: joi.number().required(),
    category: joi.number().required()
});

module.exports = {
    postTest
}