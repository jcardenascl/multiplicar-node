const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log(`==========${base}==========`.yellow);
    console.log(`==========${limite}==========`.blue);
    console.log(`==========${10}==========`.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = new Uint8Array(Buffer.from(''));

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
            // console.log(`El archivo tabla-${base}.txt ha sido creado!`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}