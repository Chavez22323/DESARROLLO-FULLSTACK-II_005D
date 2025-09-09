const usuario = localStorage.getItem('usuario');
const espacioUsuario = document.getElementById('user');
if (usuario) {
    espacioUsuario.innerHTML = `<span class="me-3">Hola, ${usuario}</span><a href="#" id="logout" class="login">Cerrar Sesión</a>`;
}