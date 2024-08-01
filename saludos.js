function saludar(nombre){
    return `Hola ${nombre}`;
}

function saludarHolaMundo(){
    return '¡Hola, mundo!';
}

//Exporta las funciones
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};