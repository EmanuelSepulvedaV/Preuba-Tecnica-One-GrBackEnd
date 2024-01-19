const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const handbrake = require("handbrake-js");
const routes = require("./routes/index");
const app = express();

app.use(cors("*"));

app.use("/api/v1/", routes());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.status(200).json({ message: "asdasd" });
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("Server listening on port", "http://localhost:" + port);
});

// const assetsPath = path.join(__dirname, "assets");
// const videosPath = path.join(__dirname, "../src/assets/videos/");

// // Verifica y crea las carpetas si no existen
// fs.existsSync(assetsPath) || fs.mkdirSync(assetsPath);
// fs.existsSync(videosPath) || fs.mkdirSync(videosPath);

// app.post("/upload", upload.single("video"), (req, res) => {

//   const videoBuffer = req.file?.buffer;
//   if (videoBuffer) {
//     const tempFilePath = path.join(assetsPath, "tempVideo.mp4");
//     fs.writeFileSync(tempFilePath, videoBuffer);

//     const outputPath = path.join(videosPath, "compressedVideo" + Math.random() + ".mp4");

//     handbrake
//       .spawn({
//         input: tempFilePath,
//         output: outputPath,
//         preset: "Very Fast 480p30",
//       })
//       .on("error", (err) => {
//         console.error("Error al comprimir el video:", err);
//         res.status(400).json({ error: "Comprimio el video pero si se guardo" });
//       })
//       .on("end", () => {
//         console.log("Compresión completada");
//         res.status(200).json({ msg: "Archivo subido" });
//       });

//     // guardar datos del video
//     const name = req.body.name;
//     const descripcion = req.body.descripcion;
//     const rutaArchivo = path.join(__dirname, "assets", "dbInJson", "db.json");

//     const contenido = fs.readFileSync(rutaArchivo, "utf-8");
//     let datos = JSON.parse(contenido);
//     datos.videos.push({ name: name, linkvideo: outputPath, descripcion: descripcion });
//     fs.writeFileSync(rutaArchivo, JSON.stringify(datos, null, 2));
//   } else {
//     res.status(400).json({ error: "No se proporcionó un archivo de video" });
//   }
// });
