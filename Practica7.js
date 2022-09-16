//es10
//aplanar arreglos
let array = [1,2,3, [1,2,3,[1,2,3]]];
console.log(array.flat())

//flat map
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(values=> [values,values*2]));

//trimStart
let hello = '    hello world';
console.log(hello)
console.log(hello.trimStart())
let hello2 = 'hello world    '
//trimEND
console.log(hello2);
console.log(hello2.trimEnd())
//opcional catch error
try {

}catch{

}

//Object.fromEntries
let entries = [["name","saul"],["oscar",2]];
console.log(Object.fromEntries(entries));
//symbol
let misimbolo = `my symbol`;
let symbol = Symbol(misimbolo);
console.log(symbol.description);
/*
    Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
    Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
    String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
    try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
    Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
    Symbol.prototype.description: permite regresar el descripcion opcional del Symbol
    Me permito hacer la aclaración con object.fromEntries()
    Esta expresión retorna un objeto partiendo de los valores de un array, mientras que object.entries() es lo contrario.
    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description
 */