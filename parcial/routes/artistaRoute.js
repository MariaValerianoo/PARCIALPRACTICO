import { Router } from "express";
import { obtenerArtista, crearArtista } from "../controller/artistaController.js";
const router = Router()

router.get('/artista', obtenerArtista)
router.post('/artista', crearArtista)


export default router;


