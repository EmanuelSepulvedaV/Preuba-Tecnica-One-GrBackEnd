const { Router } = require("express");
const videoSection = require("../lib/videoSection/videoSection.route");

module.exports = () => {
  const app = Router();
  videoSection(app);
  return app;
};
