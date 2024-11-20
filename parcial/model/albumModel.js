import mongoose, { Schema } from "mongoose";

const albumSchema = new mongoose.Schema({
    nombre: { type: String, required: true }, 
    año: { type: String, required: true }, 
    artista: { type: String, required: true }
});

export const albumModel = new mongoose.model('Album', albumSchema)