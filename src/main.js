//Funciones en js

function obtenerInfo(name='Raúl', apellido=''){
    const info = `${name} ${apellido}`;
    return info
}

const info = obtenerInfo('Eduardo','Guillén');
console.log(info);