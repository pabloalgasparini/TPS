const miArreglo= ["Pablo", "Alejandro", "Luciano"];
// miArreglo.forEach(callback)
// 1) Lenguaje sincronico
// 2) No bloqueante
// 3) Hilo simple
// 4) 

// 
/* setTimeout(()=>{
    console.log("el cafe esta listo")
    console.log("desayuno")},1000)
console.log("me ducho");
console.log("voy al IPF") */
// A
// 
// c)
/* function primero(fn){
    // console.log("Primero")
    setTimeout(()=>{
        console.log("primero")
        fn()
    },1000)
}
function segundo(){
    console.log("segundo")
}
primero(segundo);
// segundo(); */

/* const miArray =["Hugo","Lucas","Fernando"];
miArray.forEach((nombre, indice)=>{
    console.log(nombre,":",indice)
})
miArray.filter(word=>{
    return console.log(word.length>4)
})
 */

// const objetEjemplo = new Object();

// const objeto2 = {nombre: "Pablo",
//                  apellido: "Gasparini",
//                  edad:36,
//                  domicilio:{
//                     real:"dom1",
//                     legal:"dom2",
//                     "tercer dom":"dom3"
//                 }
//             };
//             objeto2.apellido="Pineda";
//             // console.log(objeto2);
//             console.log(objeto2["domicilio"].legal);
//             console.log(objeto2.domicilio.legal);

//             // delete objeto2.edad
//             console.log(objeto2.domicilio["tercer dom"])

//             console.log("edad" in objeto2);
// crea un objeto user vacio.
/* Agregar la propiedad name con el valor John.
Agregar la propiedad surname con el valor Smith.
Cambia el valor de name a Peter.
remueve la propiedad name del objeto */
// const user={};
// user.name="John";
// user.surname="Smith";
// console.log(user);
// user.name="Peter";
// console.log(user);
// delete user.name;
// console.log(user);

// let obj1 ={
//     prop1:"string",
//     prop2:2,
//     prop3:[1,2,3,"string"]
// }

// for(prop in obj1){
//     console.log(prop)
// }

let prodAlgodon = {
    pirane: 420,
    laishi: 100,
    ibarreta: 250,
    "Palo Santo":120
}

/* let sum = prodAlgodon.pirane+prodAlgodon.laishi+prodAlgodon.ibarreta+prodAlgodon["Palo Santo"];
console.log(sum) */
let sum =0;
for(depa in prodAlgodon){
   sum = sum + prodAlgodon[depa]
}
console.log("La superficie total es: ",sum)