import bcrypt from "bcrypt";

const hassPasword = async (password) => {
  const passHash = await bcrypt.hash(password, 10);
  return passHash;
};

export default { hassPasword };
