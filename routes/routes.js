import express from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import jimp from "jimp";

const router = express.Router();
const __dirname = import.meta.dirname;

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/crear", async (req, res) => {
  const id = uuidv4().slice(0, 8);
  const { img } = req.query;

  if (img === "") {
    res.redirect("/");
    console.log("imagen vacia");
  } else {
    const imagen = await jimp.read(img);

    await imagen
      .resize(350, jimp.AUTO)
      .grayscale()
      .writeAsync(`assets/img/img${id}.jpg`);
    console.log(`El nombre de la imagen creada es ${id}.jpg`);
    res.sendFile(path.join(__dirname, `../assets/img/img${id}.jpg`));
  }
});

export default router;
