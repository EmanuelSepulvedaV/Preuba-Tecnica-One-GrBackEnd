const { videoSection, getVideos, getVideosMedia, deleteMedia } = require("./videoSection.service");

module.exports = {
  videoSection: async (req, res) => {
    try {
      await videoSection(req, res);
    } catch (error) {
      console.log("Erorr al traer datos del usuario:", error.message);
      res.status(error.codeStatus).json(error);
    }
  },
  getVideos: async (req, res) => {
    try {
      const state = await getVideos(req, res);
      res.status(200).json(state);
    } catch (error) {
      console.log("Erorr al traer el video:", error.message);
      res.status(error.codeStatus).json(error);
    }
  },
  getVideosMedia: async (req, res) => {
    try {
      await getVideosMedia(req, res);
    } catch (error) {
      console.log("Erorr al traer el video:", error.message);
      res.status(error.codeStatus).json(error);
    }
  },
  deleteVideo: async (req, res) => {
    try {
      await deleteMedia(req);
      res.status(200).json({ success: true });
    } catch (error) {
      console.log("Erorr al traer el video:", error.message);
      res.status(error.codeStatus).json(error);
    }
  },
};
