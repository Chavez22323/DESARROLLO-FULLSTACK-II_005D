<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>HuertoHogar — Tienda Online</title>

  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Montserrat', sans-serif;
      background-color: #F7F7F7;
      color: #333333;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #2E8B57;
      color: white;
      text-align: center;
      padding: 1rem;
      font-family: 'Playfair Display', serif;
    }
    nav {
      text-align: center;
      margin: 1rem 0;
    }
    nav a {
      margin: 0 10px;
      text-decoration: none;
      color: #2E8B57;
      font-weight: bold;
    }
    section {
      padding: 1rem 2rem;
    }
    h2 {
      color: #8B4513;
      font-family: 'Playfair Display', serif;
    }
    .producto {
      border: 1px solid #ddd;
      padding: 10px;
      margin: 10px 0;
      border-radius: 10px;
      background: white;
    }
    .redes a {
      display: inline-block;
      margin: 0 10px;
      color: #2E8B57;
      font-weight: bold;
    }
    footer {
      background-color: #2E8B57;
      color: white;
      text-align: center;
      padding: 1rem;
      margin-top: 2rem;
    }
    button {
      background-color: #FFD700;
      border: none;
      padding: 8px 12px;
      border-radius: 5px;
      cursor: pointer;
    }
    #carrito {
      position: fixed;
      top: 20px;
      right: 20px;
      background: white;
      border: 2px solid #2E8B57;
      padding: 15px;
      border-radius: 10px;
      width: 250px;
      max-height: 400px;
      overflow-y: auto;
      display: none;
    }
    #loginModal {
      display: none;
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.5);
      justify-content: center;
      align-items: center;
    }
    #loginModal .modal-content {
      background: white;
      padding: 20px;
      border-radius: 10px;
      width: 300px;
      text-align: center;
    }
    #loginModal input {
      width: 90%;
      padding: 8px;
      margin: 8px 0;
    }
  </style>
</head>
<body>

  <header>
    <h1>HuertoHogar</h1>
    <p>¡Descubre la frescura del campo con HuertoHogar!</p>
    <button onclick="abrirLogin()">Iniciar Sesión</button>
    <button onclick="toggleCarrito()">🛒 Ver Carrito</button>
  </header>

  <nav>
    <a href="#mision">Misión</a>
    <a href="#vision">Visión</a>
    <a href="#catalogo">Catálogo</a>
    <a href="#contacto">Contacto</a>
  </nav>

  <section id="mision">
    <h2>Misión</h2>
    <p>Proporcionar productos frescos y de calidad directamente desde el campo hasta la puerta de nuestros clientes.</p>
  </section>

  <section id="vision">
    <h2>Visión</h2>
    <p>Ser la tienda online líder en distribución de productos frescos en Chile.</p>
  </section>

  <section id="catalogo">
    <h2>Catálogo de Productos</h2>

    <div class="producto">
      <h3> Manzanas Fuji</h3>
      <p><strong>Precio:</strong> $1200 CLP / kilo</p>
      <button onclick="agregarAlCarrito('Manzanas Fuji', 1200)">Agregar al carrito</button>
    </div>

    <div class="producto">
      <h3> Naranjas Valencia</h3>
      <p><strong>Precio:</strong> $1000 CLP / kilo</p>
      <button onclick="agregarAlCarrito('Naranjas Valencia', 1000)">Agregar al carrito</button>
    </div>

    <div class="producto">
      <h3> Zanahorias Orgánicas</h3>
      <p><strong>Precio:</strong> $900 CLP / kilo</p>
      <button onclick="agregarAlCarrito('Zanahorias Orgánicas', 900)">Agregar al carrito</button>
    </div>
  </section>

  <section id="contacto">
    <h2>Conéctate con Nosotros</h2>
    <div class="redes">
      <a href="https://www.instagram.com" target="_blank">Instagram</a>
      <a href="https://www.facebook.com" target="_blank">Facebook</a>
      <a href="https://www.x.com" target="_blank">X (Twitter)</a>
    </div>
  </section>

  <footer>
    <p>© HuertoHogar — Hecho por Javier Chavez y Miguel Medina</p>
  </footer>

  
  <div id="carrito">
    <h3>🛒 Carrito</h3>
    <ul id="listaCarrito"></ul>
    <p><strong>Total:</strong> $<span id="total">0</span> CLP</p>
    <button onclick="vaciarCarrito()">Vaciar Carrito</button>
  </div>

  
  <div id="loginModal">
    <div class="modal-content">
      <h3>Iniciar Sesión</h3>
      <input type="text" id="usuario" placeholder="Usuario">
      <input type="password" id="clave" placeholder="Contraseña">
      <button onclick="login()">Entrar</button>
      <button onclick="cerrarLogin()">Cerrar</button>
    </div>
  </div>

  <script>
    let carrito = [];
    let total = 0;

    function agregarAlCarrito(producto, precio) {
      carrito.push({ producto, precio });
      total += precio;
      actualizarCarrito();
    }

    function actualizarCarrito() {
      const lista = document.getElementById("listaCarrito");
      lista.innerHTML = "";
      carrito.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio}`;
        lista.appendChild(li);
      });
      document.getElementById("total").textContent = total;
    }

    function vaciarCarrito() {
      carrito = [];
      total = 0;
      actualizarCarrito();
    }

    function toggleCarrito() {
      let carritoDiv = document.getElementById("carrito");
      carritoDiv.style.display = carritoDiv.style.display === "block" ? "none" : "block";
    }

    function abrirLogin() {
      document.getElementById("loginModal").style.display = "flex";
    }

    function cerrarLogin() {
      document.getElementById("loginModal").style.display = "none";
    }

    function login() {
      let usuario = document.getElementById("usuario").value;
      let clave = document.getElementById("clave").value;
      if(usuario && clave){
        alert("Bienvenido, " + usuario);
        cerrarLogin();
      } else {
        alert("Por favor ingrese usuario y contraseña");
      }
    }
  </script>
</body>
</html># DESARROLLO-FULLSTACK-II_005D
TRABAJO DE DESARROLLO FULLSTACK II_005D
