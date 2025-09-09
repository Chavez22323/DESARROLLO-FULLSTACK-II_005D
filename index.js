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