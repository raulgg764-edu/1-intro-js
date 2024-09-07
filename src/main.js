//arreglos en objetos 

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
    inventario:[
        {
            id:1,
            color: 'Rojo',
            cantidad:5,
            precio: 11000000
        },
        {
            id:2,
            color: 'Blanco',
            cantidad:2,
            precio: 10000000
        },{
            id:3,
            color: 'Amarillo',
            cantidad:5,
            precio: 11500000
        },
    ],
    totalInventario: function (){
        let total = 0;
        this.inventario.forEach(inventario => {
            total = total + (inventario.precio*inventario.cantidad);
        });
        return total;
    },
    costo: 10000000,
    saludo: function(){
        return `Hola ${this.marca.nombre} ${this.nombre}`
    }
}

//carro.nombre='F40'
carro.costo = 15000000
console.log(carro);

const salu = carro.saludo();
console.log(salu)

console.log(carro.totalInventario())