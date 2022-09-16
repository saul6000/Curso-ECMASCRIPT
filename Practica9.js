//es12
//replace
const string = "JavaScript es maraivilloso, con JavaScript puedo crear el futuro de la web";
const replaced = string.replace("JavaScript","Python");
console.log(replaced);

//replaceall
const string2 = "JavaScript es maraivilloso, con JavaScript puedo crear el futuro de la web";
const replaced2 = string2.replaceAll("JavaScript","Python");
console.log(replaced2);

//private method
class Message {
    #show(valor){
        console.log(valor);
    };
    get #showme(){
        console.log();
    };
    set #add(valor){
        console.log(valor)
    }
}
const message = new message();
message.show('Hola!');

//promise any
const promise1 = new Promise((resolve,reject)=> reject("1"));
const promise2 = new Promise((resolve,reject)=> resolve("2"));
const promise3 = new Promise((resolve,reject)=> resolve("3"));

Promise.any([promise1,promise2,promise3])
.then(Response => console.log(Response));

//  🦴 WeakRef(element);

class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
    
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);

let isTrue3 = undefined;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3);


