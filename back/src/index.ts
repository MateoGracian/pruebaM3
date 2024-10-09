import app from './server'; 
import { PORT } from './config/envs';
import { AppDataSource } from './config/data-source'; 
import "reflect-metadata";

AppDataSource.initialize()
.then( res => {
    console.log("conexion a la base de datos realizada con exito!");
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
})
.catch( err => {
    console.log("Error al conectar a la base de datos", err);
});



