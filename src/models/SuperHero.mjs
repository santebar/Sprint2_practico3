import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: {type: String, rquired: true},
    nombrereal: {type: String, required: true},
    edad: {type: Number, min: 0},
    planetaOrigen: {type: String, default: 'Desconocido'},
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: {type: Date, default: Date.now}
}, { collection: 'Grupo-01' }); // Aquí defines la colección de cada grupo);

export default mongoose.model('SuperHero', superheroSchema);