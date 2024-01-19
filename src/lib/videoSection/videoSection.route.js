const { videoSection, getVideos, getVideosMedia, deleteVideo } = require("./videoSection.controller");
const { Router } = require("express");
const route = Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = (app) => {
  app.use("/upload", route);
  // Entrada de videos
  route.post("/", upload.single("video"), videoSection);

  // Salida de videos
  route.get("/getVideos", getVideos);

  route.get("/getVideosMedia", getVideosMedia);

  route.delete("/deleteVideo", deleteVideo);
};
