import mongoose, { Schema } from "mongoose";

const artistaSchema = new mongoose.Schema({
    nombre: { type: String, required: true }, 
    genero: { type: String, required: true }, 
    pais: { type: String, required: true }
});

export const artistaModel = new mongoose.model('Artista', artistaSchema)