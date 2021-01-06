let fs = require ('fs');

let moduloUsuarios = {
    archivoJSON: './usuarios.json',

    leerJSON: function(){
        let usuariosJSON = fs.readFileSync(this.archivoJSON, 'utf-8');
        let usuarios = JSON.parse(usuariosJSON)

        return usuarios;
    },
    guardarJSON: function(info){
        let usuariosActualizados = JSON.stringify(info);
        fs.writeFileSync(this.archivoJSON, usuariosActualizados, 'utf-8')
    },

    registro: function(nombre, mail, password){
        let usuarios = this.leerJSON();

        let nuevoUsuario = {
            nombre: nombre,
            mail: mail,
            password: password
        }

        usuarios.push(nuevoUsuario);

        this.guardarJSON(usuarios);
    },

    login: function(mail, password){
        let usuarios = this.leerJSON();
        let usuarioLogin;

        usuario.forEach(function(usuario){
            if (usuario.mail == mail && usuario.password == password) {
                let usuarioLogin = usuario
            }
        })

        return usuarioLogin;
    },

    eliminar : function (mail, password){
        let usuarios = this.leerJSON();
        let usuariosActualizados = [];
        let eliminado = false;

        usuarios.forEach(function(usuario){
            if (usuario.mail == mail && usuario.password == password) {
                eliminado = true;
            }else{
                usuariosActualizados.push(usuario);
            }
        })

        this.guardarJSON(usuariosActualizados);

        return eliminado;
    }
    
}

module.exports = moduloUsuarios