import express from 'express';
import {connectDB} from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware para parsear JSON
app.use(express.json());

//Conecion a MongoDB
connectDB();

//Configuracion de rutas
app.use('/api', superHeroRoutes);

//Manejo de errores para rutas no encontradas
app.use((req, res) => {
    res.status(404).send({mensaje: "Ruta no encontrada"});
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    console.log(`http://localhost:3000/api/heroes`);
});