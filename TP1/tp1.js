let listaInv=["Lucas","Matias","Jose","Pedro","Martina","Esteban","Marcela","Martin"];
console.log(listaInv.length);
listaInv.push("Pedro");
let indice=listaInv.indexOf("Marcela");
listaInv.splice(indice,1);
let nuevaLista=listaInv;
let listConf=nuevaLista.map((inv)=>{
    return inv+`. Orden: ${nuevaLista.indexOf(inv)}`
})
console.log(listConf.sort())