const Joi = require('joi');

const treasureSchema = Joi.object().keys({
    latitude: Joi.number().precision(10).required(),
    longitude: Joi.number().precision(10).required(),
    distance: Joi.number().valid(1, 10).required(),
    amt: Joi.number().valid(10, 20, 30).integer().min(10).max(30).optional()
});


module.exports = {
    validate: (req, res, next) => {
        const result = treasureSchema.validate(req.body);
        if (result.error) {
            return res.status(400).json({ error: result.error.message });
        }
        next();
    }
};