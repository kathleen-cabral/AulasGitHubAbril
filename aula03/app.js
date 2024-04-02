//criar e remover pastas

const fs=require('fs');

//com método síncrono
// fs.mkdirSync('logs');

//com metodo assíncrono
// fs.mkdirSync('logs2',(erro)=>{
//     if(erro){
//         console.log(erro);
//     }
// });

//para remover pastas
//testar a existencia da pasta

if(fs.existsSync('logs2')){
    fs.rmdirSync('logs2');
}
console.log("Fim da execução");
