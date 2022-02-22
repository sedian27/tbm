import bcrypt from "bcrypt";

const hassPasword = async (password) => {
   const passHash = await bcrypt.hash(req.body.password, 10);
}

export default {hassPasword}