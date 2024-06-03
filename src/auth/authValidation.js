// src/auth/authValidation.js
const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('nurse', 'mother').required(),
});

function validateLogin(data) {
    const { error } = loginSchema.validate(data);
    if (error) throw new Error(error.details[0].message);
}

function validateRegister(data) {
    const { error } = registerSchema.validate(data);
    if (error) throw new Error(error.details[0].message);
}

module.exports = { validateLogin, validateRegister };
