document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const mensaje = document.getElementById('mensaje');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function () {
        const username = document.getElementById('usuario').value;
        const password = document.getElementById('contrasena').value;

        validarUsuario(username, password)
            .then(function (resultado) {
                mensaje.textContent = resultado;
            })
            .catch(function (error) {
                mensaje.textContent = error;
            });
    });

    function validarUsuario(username, password) {
        return new Promise(function (resolve, reject) {
            if (username === 'Julian' && password === '123') {
                resolve(`Inicio de sesión exitoso, Bienvenido ${username}`);
            } else {
                reject('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            }
        });
    }
});
