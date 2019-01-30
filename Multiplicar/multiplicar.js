const fs = require('fs');


let listarTabla = (base, limite) =>{

  for (let i = 1; i < limite; i++) {
    console.log(`${base} * ${ i } = ${base * i}\n`);
  }

}

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) =>{
    if(!Number(base)){
      reject('No es un numero');
      return;
    }
    let data = '';
    for (let i = 1; i < limite; i++) {
      data = data + `${base} * ${ i } = ${base * i}\n`;
    }


    fs.writeFile('data.txt', data, (err) =>{
      if(err) reject(err);
      else
        resolve(`data-${base}.txt`)

    });

  });

}

module.exports = {
    crearArchivo,
    listarTabla
}
