const fs=require('fs');

// fs.appendFile('logs.log',"Loguei\n",(erro)=>{
//     console.log(erro)
// });

if(fs.existsSync('logs.log')){
    fs.rmSync('logs.log')
}
console.log("Fim da execução");