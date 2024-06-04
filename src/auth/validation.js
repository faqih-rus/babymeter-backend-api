const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

function validateLogin(data) {
    const { error } = loginSchema.validate(data);
    if (error) throw new Error(error.details[0].message);
}

module.exports = { validateLogin };
