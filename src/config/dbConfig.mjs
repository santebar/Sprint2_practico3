import mongoose from 'mongoose';

/*export async function connectDB(){
    try{
        await mongoose.connect('mongodb+srv://usuario:contraseña@cluster0.mongodb.net/PracticaSuperHeroes',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexion exitosa a MongoDB');
    }catch (error){
        console.log('Error al conectar a MongoDB:', error);
        ProcessingInstruction.exit(1);
    }
}*/

export async function connectDB(){
    try{
        await mongoose.connect('mongodb+srv://grupo-01:grupo01@cursadanodejs.ls9ii.mongodb.net/Node-js');
        console.log('Conexion exitosa a MongoDB');
    }catch (error){
        console.log('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
}

/*mongoose.connect('mongodb+srv://grupo-01:grupo01@cursadanodejs.ls9ii.mongodb.net/Node-js', {
    serverSelectionTimeoutMS: 5000
})
.then(()=>console.log('Conexion exitosa a MongoDB'))
.catch(error=>console.error('Error al conectar a MongoDB', error));*/