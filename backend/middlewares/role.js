import Role from "../models/role.js";

const existingRole = async (req, res, next) => {
  const getRole = await Role.findOne({ name: req.body.name });
  return getRole
    ? res.status(400).send({ message: "The role already exist" })
    : next();
};

const doNotChanges = async (req, res, next) => {
  const changes = await Role.findOne({
    name: req.body.name,
    description: req.body.description,
  });
  return changes
    ? res.status(400).send({ message: "No changes were made" })
    : next();
};

export default { existingRole, doNotChanges };
