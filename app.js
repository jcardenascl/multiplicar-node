const argv = require('./config/yargs').argv;
var colors = require('colors');

const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');

console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite).then((result) => {
            console.log(colors.cyan('Archivo creado:'), colors.red(` ${result}`));
        }).catch((err) => {
            console.log(err);
        });
        break;

    default:
        console.log('comando no reconocido');

        break;
}