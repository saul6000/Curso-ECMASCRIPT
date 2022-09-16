//Sync Await
//promesa
const helloworld= ()=>{
    return new Promise((resolve,reject)=>{
   (true)? setTimeout (() => resolve('helloworld'),3000):reject(new Error("error"));
    });
};
const hellopanes = () =>{
    
    return new Promise ((panes,reject)=>
    {
        
        (true)? setTimeout(() => panes('si hay panes'), 4000):reject(console.error("hay un error"));
    })
} 

//async await
const helloAsync = async()=> {
    const hello = await helloworld();
    const panes = await hellopanes();
    console.log(hello);
    console.log(panes)
}
helloAsync();

//asyn await correctamente

const anotherfuncition= async()=>{
    try {
        const hello = await helloworld();
        const panes = await hellopanes();
        console.log(hello);
        console.log(panes)
    }catch(E){
        console.log(error);
    }       
}
anotherfuncition();

/*// Async Await
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}
/clases/1815-ecmascript-6/25944-que-se-implemento-en-es8/
buyIceCream(600); //1. llamas a la funcion comprar helado e Ingresas el dinero */