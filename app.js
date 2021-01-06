let moduloUsuarios = require ('./usuarios');
let process = require ('process');
let comando = process.argv[2];

switch (comando) {
    case 'registro':
        let nombre = process.argv[3];
        let mail = process.argv[4];
        let password = process.argv[5];

        if (nombre == undefined || mail == undefined || password == undefined){
            console.log ('Por favor introduzca todos los datos');
            break;
        }else if(mail.includes('@') == false){
            console.log('Introduzca un e-mail válido')
            break;
        }else{
        moduloUsuarios.registro(nombre, mail, password);
        console.log('Usuario registrado');
        break};
    case 'login': 
        let mailLogin = process.argv[3];
        let passwordLogin = process.argv[4];

        let usuarioLogin = moduloUsuarios.login(mailLogin, passwordLogin);

        if (usuarioLogin == undefined){
            console.log ('Credenciales inválidas')
        }else{
            console.log ('Bienvenido/a, ' + usuarioLogin.nombre)
        }
        break;
    case 'eliminar':
        let mailEliminar = process.argv[3];
        let passwordEliminar = process.argv[4];

        let eliminado = moduloUsuarios.eliminar(mailEliminar, passwordEliminar);

        if (eliminado) {
            console.log('Usuario eliminado.');
        }else {
            console.log('Credenciales inválidas')
        }
        break;
}