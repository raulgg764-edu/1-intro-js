//objetos en js

const carro = {
    id:1,
    nombre:'Laferrari',
    date: new Date(),
    marca: {
        id: 1,
        nombre: 'Ferrari',
        ubicacion:'Europa',
        age: 100
    },
    costo: 10000000
}

carro.nombre='F40'
carro.costo = 15000000
console.log(carro.nombre, carro.costo)