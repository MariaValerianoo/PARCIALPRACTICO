import { albumModel } from "../model/albumModel.js";

export const obtenerAlbum = async (peticion, respuesta) => {
    try {
        let album = await albumModel.find()
        respuesta.status(200).render("index", { album})
    } catch (error) {
        console.log(error);
    }
}


export const crearAlbum = async (peticion, respuesta) => {
    try {
        let data = peticion.body
        // Guardar datos
        await albumModel.create(data)
        // devuelve la vista al usuario para vea los nuevos datos
        let album = await albumModel.find()
        respuesta.status(200).render("index", {album})
    } catch (error) {
        console.log(error);
    }
}


export const actualizarAlbum = async (peticion, respuesta) => {
    try {
      // Desestructurar los datos del cuerpo de la solicitud
      const { nombre, año } = peticion.body;
  
      // Actualizar el recurso basado en el identificador
      const añoAct = await albumModel.findOneAndUpdate(
        { nombre: nombre }, // Condición para encontrar el recurso
        { $set: { año: año } }, // Campos a actualizar
        { new: true } // Retornar el documento actualizado
      );
  
      // Verificar si el recurso fue encontrado y actualizado
      if (!añoAct) {
        return respuesta.status(404).json({ mensaje: "Recurso no encontrado" });
      }
  
      // Enviar respuesta con el recurso actualizado
      respuesta.status(200).json({ mensaje: "mensaje exitoso", datos: añoAct });
    } catch (error) {
      console.error("Error al actualizar el recurso:", error);
  
      // Manejar errores y responder al cliente
      respuesta.status(400).json({ mensaje: "Error al actualizar el recurso", error: error.message });
    }
  };
  
