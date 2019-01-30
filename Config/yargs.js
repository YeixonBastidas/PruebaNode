let argv = require('yargs')
          .command('listar', 'Imprime la tabla de multiplicar',{
              base:{
                demand:true,
                alias: "b"
              },
              limite:{
                alias: "l",
                default: 10
              }
          })
          .command('crear', 'Genera el archivo de la tabla de multiplicar',{
              base:{
                demand:true,
                alias: "b"
              },
              limite:{
                alias: "l",
                default: 10
              }
          })
          .help()
          .argv;

module.exports = {
  argv
}
