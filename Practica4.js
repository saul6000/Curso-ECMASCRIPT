//es8 
//Sync await
//Object entries, Object Values, Padding y Trailing-
//una matriz.

const data ={
    front:'Alej',
    back: 'Rel'
};

//Tranformar este objeto en una matriz. 
const entries =Object.entries(data);
console.log(entries);
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);



//Objetc Values: Me devuelve los valores de un objeto a un arreglo. 


const data2= {
    front:'Alej',
    back: 'Rel'
}

const values = Object.values(data2);
console.log(values);
console.log(values.length)
// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12,' ----')) // Se añade al final la palabra 'hi'
console.log('food'.padEnd(12,' ----'));
//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data3= {
    front:'Alej', // Puede existir
    back: 'Rel'
}
