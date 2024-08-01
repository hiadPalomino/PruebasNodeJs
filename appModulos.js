/* //importa las funciones de saludos.js
const { saludar, saludarHolaMundo } = require("./saludos.js");
console.log(saludarHolaMundo());

console.log(saludar("Hiad Palomino"));

//Modulo Console

console.log();

console.warn('Ocurrio un error'); //Advertencia

//Error grave
console.error('¡Ocurrio un error...!');
console.error(new Error('¡Ocurrio un error...!')); //Genera más detalles del error

console.assert(); //

console.table(); // */

//Modulo Process
//console.log(process); //Contenido de process
//console.log(process.env); //Entorno
//console.log(process.argv); // los dos primeros argumentos son node y app.js(la ubicacion del archivo actual)
//console.log(process.memoryUsage()); //Uso de memoria

//Modulo OS -> Por convencion los modulos se asignan a una constante
//const os = require('os');
//console.log(os.type()); //Devuelve el sistema operativo que tienes
//console.log(os.homedir()); //Devuelve el directorio principal del sistema
//console.log(os.uptime()); //Devuelve el tiempo que esta encendida la pc
//console.log(os.userInfo()); //Devuelve la informacion del usuario

//Modulo Timers
/* function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}
setTimeout(mostrarTema,5000,'Node.js');// Ejecuta el codigo con un tiempo de retraso 5000 */
/* function sumar(a, b){
    console.log(a+b);
}
setTimeout(sumar,2000,3,4);//Ejecuta el codigo con retraso 2000 y pasa dos argumentos, despues de asignar el tiempo se puede pasar el numero de argumentos q necesitas. */

/* function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}
//setImmediate(mostrarTema,'Node.js');// Ejecuta el codigo inmediatamente despues del codigo sincrono
setInterval(mostrarTema,2000,'node.js'); //Ejecuta el codigo en un intervalo de tiempo asignado de forma repetitiva. */

//Modulo fs -> File System / leer, modificar, copiar, eliminar, cambiar nombre de archivos / todas las funciones son asincronas por defecto(La aplicacion se sigue ejecutando en paralelo)
//Si le agregas Sync a el nombre de los metodos usas el metodo sincrono. Ejemplo: fs.rename() -> fs.renameSync()

//const fs = require('fs');

/* //readFile lee el archivo
fs.readFile('index.html', 'utf-8',(err,contenido)=>{
    if(err){
        throw err; //Detiene la ejecucion del programa
    }
    console.log(contenido);
    
}); */

/* // Cambiar nombre de un archivo, primer argumento indicas el archivo, y en el segundo el nuevo nombre
fs.rename('index.html','main.html',(err)=>{
    if(err){
        throw err;
    }
    console.log('Nombre cambiado exitosamente');
}); */

/* //Agregar contenido al final de un archivo
fs.appendFile('index.html','<p>Hola</p>',(err)=>{
    if(err){
        throw err;
    }
    console.log('Se agrego contenido al final del archivo, archivo actualizado...');
}); */

/* //Reemplazar todo el contenido del archivo
fs.writeFile('index.html','contenido nuevo',(err)=>{
    if(err){
        throw err;
    }
    console.log('Se reescribio el archivo');
});
 */
/* //Eliminar archivos
fs.unlink('index.html',(err)=>{
    if(err){
        throw err;
    }
    console.log('Se elimino el archivo');
}); */

