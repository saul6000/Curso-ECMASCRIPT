//es11
const button = document.getElementById("btn")

button.addEventListener('click',async()=>{
    const module = await import("./file.js");
    module.hello();
});
//INT >256 big int
const abignumber = 9007199254740991n;
console.log(abignumber)
const anotherBigNumber =BigInt(9007199254740991)
console.log(anotherBigNumber);

// 🤝  Promise All Settled

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));


Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


// 🌎 Global This

console.log(window);
console.log(globalThis);

// 🔍 Nuevo operador lógico: null operator

const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)


// ⛓ Optional chaining

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}
