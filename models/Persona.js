let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let personaSchema = new Schema({
    id: { type: String },
    nombre: { type: String },
    mensaje: { type: String }
}, { versionKey: false });

let Persona = mongoose.model('Personas', personaSchema);

module.exports = Persona;