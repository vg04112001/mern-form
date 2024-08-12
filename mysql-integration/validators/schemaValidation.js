const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(45).required(),
  className: Joi.number().integer().min(1).max(12),
  medium: Joi.string().alphanum().min(3).max(30).required(),
});
const schemaValitor = async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    if (value) {
      next();
    }
  } catch (err) {
    // console.log(err);
    res.status(500).json({ success: false, msg: err.details[0].message });
  }
};

module.exports = { schemaValitor };
