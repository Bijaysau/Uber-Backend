// const captainModel = require("../models/captain.model");
// const captainService = require("../services/captain.service");
// const { validationResult } = require("express-validator");

// module.exports.registerCaptain = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   const { fullname, email, password, vehicle } = req.body;
//   const isCaptainAlreadyExist = await captainModel.findOne({
//     email: email.toLowerCase(),
//   });
//   console.log("Existing Captain:", isCaptainAlreadyExist); // Debugging log

//   if (isCaptainAlreadyExist) {
//     return res.status(400).json({ message: "Captain already exists" });
//   }

//   const hashedPassword = await captainModel.hashPassword(password);
//   const captain = await captainService.createCaptain({
//     firstname: fullname.firstname,
//     lastname: fullname.lastname,
//     email,
//     password: hashedPassword,
//     color: vehicle.color,
//     plate: vehicle.plate,
//     capacity: vehicle.capacity,
//     vehicleType: vehicle.vehicletype,
//   });
//   const token = captain.generateToken();
//   res.status(201).json({ token, captain });
// };

const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");
module.exports.registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle, mobile } = req.body;

  try {
    // Convert email to lowercase to prevent duplicate registration with case differences
    const existingCaptain = await captainModel.findOne({
      email: email.toLowerCase(),
    });

    if (existingCaptain) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    // Hash password
    const hashedPassword = await captainModel.hashPassword(password);

    // Create captain object
    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email: email.toLowerCase(),
      mobile:mobile,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    // 🔴 MISSING: Save to the database
    await captain.save(); // ✅ FIXED: Now saving the created captain

    // Generate JWT token
    const token = captain.generateToken();

    res
      .status(201)
      .json({ message: "Captain registered successfully", token, captain });
  } catch (error) {
    console.error("Error in registerCaptain:", error); // 👀 Log the actual error

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel
    .findOne({
      email,
    })
    .select("+password");

  if (!captain) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const token = captain.generateToken();
  res.cookie("token", token);
  res.status(200).json({ message: "Login successful", token, captain });
};
module.exports.getCaptainProfile = async (req, res) => {
  res.status(200).json({ captain: req.captain });
};
module.exports.logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await blacklistTokenModel.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
};
