import { Router } from "express";
import { obtenerAlbum, crearAlbum,actualizarAlbum } from "../controller/albumController.js";
const router = Router()

router.get('/album', obtenerAlbum)
router.post('/album', crearAlbum)
router.put('/albumact', actualizarAlbum)



export default router;