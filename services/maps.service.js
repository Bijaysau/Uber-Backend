const axios = require("axios");

const getCoordinates = async (address) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json`,
    {
      params: {
        address,
        key: process.env.GOOGLE_MAP_API,
      },
    }
  );

  const location = response.data.results[0].geometry.location;
  return {
    ltd: location.lat,
    lng: location.lng,
  };
};

const getDistanceAndTime = async (origin, destination) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/distancematrix/json`,
    {
      params: {
        origins: origin,
        destinations: destination,
        key: process.env.GOOGLE_MAP_API,
      },
    }
  );

  const element = response.data.rows[0].elements[0];
  return {
    distance: element.distance.value,
    duration: element.duration.value,
    distanceText: element.distance.text,
    durationText: element.duration.text,
  };
};

const getAutoCompleteSuggestions = async (input) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json`,
    {
      params: {
        input,
        key: process.env.GOOGLE_MAP_API,
      },
    }
  );

  return response.data.predictions;
};

const getCaptainsInTheRadius = async (lat, lng, radiusInKm) => {
  const Captain = require("../models/captain.model");

  const captains = await Captain.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lng, lat],
        },
        $maxDistance: radiusInKm * 1000, // meters
      },
    },
  });

  return captains;
};

module.exports = {
  getCoordinates,
  getDistanceAndTime,
  getAutoCompleteSuggestions,
  getCaptainsInTheRadius,
};
