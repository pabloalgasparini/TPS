// 1)
// let resultado=0;
// const operacion=(x,y)=>{
//     if(x<y){
//         resultado=y/x;
//     }else{
//         resultado=x*y;
//     }
//     return resultado
// }
// console.log(operacion(5,4));
// // 2)
// let valor;
// const tipo = (a)=>{
//     valor=typeof(a);
//     return valor;
// }
// console.log(tipo(5));
// 3
// let resultado=0;
// const opera=(a,b,c,d,e,f)=>{
//     resultado=a+b;
//     resultado=resultado-c;
//     resultado=resultado*d;
//     resultado=resultado/e;
//     resultado=Math.pow(resultado,f);
//     return resultado;
// }
// console.log(opera(2,5,9,7,6,2))
// 4)
// let arreglo =[5,8,9,3,7,6,4,0,1];
// let nuevo=[];
// const elementos=(array)=>{
//     ele1=array[array.length-1];
//     ele2=array[array.length-2];
//     ele3=array[array.length-3];
//     nuevo=[ele1,ele2,ele3];
//     return nuevo;
// }
// console.log(elementos(arreglo))
// 5)
// let numeros=[5,8,2,3,7,6,4,0,1];
// let listaInv=["Lucas","Matias","Jose","Pedro","Martina","Esteban","Marcela","Martin"]
// const ordenar=(array)=>{
//         if (typeof(array)==Number){
//          array.sort(function(a,b){return a-b});
//         }else{
//             array.sort();
//         }
// return array;
// }
// console.log(ordenar(listaInv))
// 6)
// let numeros=[5,8,2,3,7,6,4,0,1];
// const filtrar=(array,b)=>{
//     let indice=array.indexOf(b);
//     array.splice(indice,1)
//     return array;
// }
// console.log(filtrar(numeros,8))
// 7)
// let numeros=[5,8,2,3,7,6,4,0,1];
// // let resultado=0;
// // const sumar=(array)=>{
// //     array.forEach(numero => {
// //         resultado=resultado+numero;
      
// //     });
// //     return resultado;
// // }
// let resultado=0;
// let i= 0;
// const sumar=(array)=>{
//     array.forEach(numero => {
//         resultado=resultado+numero;
//       i++
//     });
//     resultado=resultado/i;
//     return resultado;
// }
//  console.log(sumar(numeros))
// 8)
// let miObj={
//     elemento1:"Isabel",
//     elemento2: "Carla",
//     elemento3:"Liliana"
// }
// let encontrado="";
// const elementos=(obj,string)=>{
//     for(key in obj){
//         if(string==obj[key]){
//             encontrado=obj[key]
//         }
//     }
//     return encontrado;
// }
// console.log(elementos(miObj,"Carla"))
// 9)
// let miObj={
//         elemento1:8,
//         elemento2:6,
//         elemento3:4
//     }
//     let suma=0;
//     const total=(obj)=>{
//             for(key in obj){
//                 suma=suma+obj[key]
//             }
//             return suma;
//     }
//     console.log(total(miObj))