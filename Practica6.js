//es9
//operador de reposo recuperar las propiedades de un objeto que aun no se ha construido

const obj = {
    name : 'saul',
    age: 32,
    country: 'Ec'
};

let {name, ...all}= obj;
console.log(name,all);
//propagacion de objetos unir objetos
const obj2 ={
    name : 'saul',
    age: 32,
}
const obj3 ={
    ...obj2,
    country : 'EC'
}
console.log(obj3);

//Promise Finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
      (true)
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };
  
  helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));
  
  /**
   * Regex
   */
  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  const match = regexData.exec('2018-04-28');
  const year = match[1];
  const month = match[2];
  const day = match[3];
  console.log('Date -> ', year, month, day);