// const userModel = require("../models/user.model");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// module.exports.authUser = async (res, req, next) => {
//   const token =
//     req.cookies?.token ||
//     (req.headers.authorization?.startsWith("Bearer ") &&
//       req.headers.authorization.split(" ")[1]);
//   if (!token) {
//     return res.status(401).json({ message: "User Unauthorized" });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await userModel.findById(decoded._id);
//     req.user = user;
//     return next();
//   } catch (error) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }
// };

const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const blacklistTokenSchema = require("../models/blacklistToken.model");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");
module.exports.authUser = async (req, res, next) => {
  try {
    // Safely access the token from cookies or Authorization header
    const token =
      req.cookies.token ||
      (req.headers.authorization?.startsWith("Bearer ") &&
        req.headers.authorization?.split(" ")[1]);

    if (!token) {
      return res
        .status(401)
        .json({ message: "User Unauthorized, No Token Provided" });
    }

    const isBlacklisted = await blacklistTokenSchema.findOne({ token: token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user from DB
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: "User Not Found" });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized or Invalid Token" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Captain Unauthorized" });
  }
  const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;
    return next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
