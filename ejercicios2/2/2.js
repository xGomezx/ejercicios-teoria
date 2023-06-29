/*2. Dado el arreglo [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, “@”, "¡"] ], [ [44, 55,66, 77], [1, 2, 3, 4] ] ]
    a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
    b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach
  */  
 let array = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, '@', "¡"] ], [ [44, 55,66, 77], [1, 2, 3, 4] ] ];

 for (let i = 0; i < array.length; i++) {
     
    for (let j = 0; j < array[i].length; j++) {
       
        for (let n = 0; n < array[i][j].length; n++) {
            
            console.log(array[i][j][n]);
        }
    }
     
 }
 console.log('-----------------------------');

 array.forEach(m => {

    m.forEach(a => {

        m,a.forEach(h => {

            console.log(h);
            
        });
    });    
 });