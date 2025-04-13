const {
  getCoordinates,
  getDistanceAndTime,
  getAutoCompleteSuggestions,
} = require("../services/maps.service");

const { validationResult } = require("express-validator");

exports.getCoordinates = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const coordinates = await getCoordinates(req.query.address);
    return res.status(200).json(coordinates);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getDistanceTime = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const result = await getDistanceAndTime(
      req.query.origin,
      req.query.destination
    );
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getAutoCompleteSuggestions = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const suggestions = await getAutoCompleteSuggestions(req.query.input);
    return res.status(200).json(suggestions);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
