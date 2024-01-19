const { Router } = require("express");
const route = Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const { videoSection, getVideos, getVideosMedia } = require("./videoSection.controller");

module.exports = (app) => {
  app.use("/upload", route);
  // Entrada de videos
  route.post("/", upload.single("video"), videoSection);

  // Salida de videos
  route.get("/getVideos", getVideos);

  route.get("/getVideosMedia", getVideosMedia);
};
