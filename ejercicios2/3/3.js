/* 3. Dado el arreglo [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]:
a) Recorrer todos sus elementos más internos y mostrar los números que sean impares. Use cualquier ciclo, for o
forEach.
b) Recorrer todos sus elementos más internos y mostrar la suma de estos. Como sugerencia use una variable
para acumular la suma, declarela antes del ciclo. Use cualquier ciclo, for o forEach.  */


let array = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];



for (let i = 0; i < array.length; i++) {
    
    for (let n = 0; n < array[i].length; n++) {
        console.log(array[i][n])
    }
    
}

console.log('--------------------------------------------------------------------------------------------------------------- ');

array.forEach(i => {
    
    i.forEach(j => {
        console.log(j);
    });
});