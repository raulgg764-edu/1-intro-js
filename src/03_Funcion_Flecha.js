//Funciones flecha

const obtenerInfo = (name='Raúl', apellido='') => `${name} ${apellido}`;
const sum = (a=0,b=0) => a+b;

const info = obtenerInfo('Eduardo','Guillén');
console.log(info);
console.log(sum(20,10));