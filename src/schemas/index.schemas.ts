import Joi from 'joi';


export const ReminderSchema = Joi.object({
    title: Joi.string().max(30).required(),
    description: Joi.string().max(30).required(),
    city: Joi.string().max(30).required(),
    color: Joi.string().max(30).required(),
    date: Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).required(),
    time: Joi.string().pattern(/^\d{2}:\d{2}$/).required()
});
