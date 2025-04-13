const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
  mobile,
}) => {
  if (!firstname || !lastname || !email || !password || !mobile) {
    throw new Error("All fields are required");
  }

  try {
    const user = await userModel.create({
      // ✅ Add `await`
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      mobile,
    });

    return user;
  } catch (error) {
    console.error("User creation failed:", error.message);
    throw new Error(error.message);
  }
};

module.exports.findUserByEmail = async (email) => {
  return await userModel.findOne({ email }).select("+password");
};
