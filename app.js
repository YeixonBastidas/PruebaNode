let argv = require('./Config/yargs').argv;


let { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {
  case 'crear':
  //console.log(argv);
      crearArchivo(argv.b, argv.l)
      .then( archivo => {
          console.log(archivo)
      })
      .catch((err)=>{
        console.log(err)
      });

    break;
  case 'listar':
        listarTabla(argv.b, argv.l);
      break;
  default:
    console.log("No se encontro la accion a realizar");
}
