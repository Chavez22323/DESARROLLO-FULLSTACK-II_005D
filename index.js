const catalogo = document.getElementById('catalogo');
const filtro = document.getElementById('filtro');

const productosInicial = [
  {
    codigo: "FR001",
    nombre: "Manzanas Fuji",
    categoria: "Frutas Frescas",
    precio: 1200,
    unidad: "CLP por kilo",
    stock: 150,
    descripcion: "Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Textura firme y sabor equilibrado entre dulce y ácido."
  },
  {
    codigo: "FR002",
    nombre: "Naranjas Valencia",
    categoria: "Frutas Frescas",
    precio: 1000,
    unidad: "CLP por kilo",
    stock: 200,
    descripcion: "Naranjas jugosas y ricas en vitamina C, ideales para zumos frescos. Cultivadas en condiciones climáticas óptimas."
  },
  {
    codigo: "FR003",
    nombre: "Plátanos Cavendish",
    categoria: "Frutas Frescas",
    precio: 800,
    unidad: "CLP por kilo",
    stock: 250,
    descripcion: "Plátanos maduros y dulces, perfectos para desayuno o snack energético. Ricos en potasio y vitaminas."
  },
  {
    codigo: "VR001",
    nombre: "Zanahorias Orgánicas",
    categoria: "Verduras Orgánicas",
    precio: 900,
    unidad: "CLP por kilo",
    stock: 100,
    descripcion: "Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins. Fuente de vitamina A y fibra."
  },
  {
    codigo: "VR002",
    nombre: "Espinacas Frescas",
    categoria: "Verduras Orgánicas",
    precio: 700,
    unidad: "CLP por bolsa de 500g",
    stock: 80,
    descripcion: "Espinacas frescas y nutritivas, cultivadas bajo prácticas orgánicas. Ideales para ensaladas y batidos verdes."
  },
  {
    codigo: "VR003",
    nombre: "Pimientos Tricolores",
    categoria: "Verduras Orgánicas",
    precio: 1500,
    unidad: "CLP por kilo",
    stock: 120,
    descripcion: "Pimientos rojos, amarillos y verdes, ricos en antioxidantes y vitaminas. Ideales para salteados y platos coloridos."
  },
  {
    codigo: "PO001",
    nombre: "Miel Orgánica",
    categoria: "Productos Orgánicos",
    precio: 5000,
    unidad: "CLP por frasco de 500g",
    stock: 50,
    descripcion: "Miel pura y orgánica producida por apicultores locales. Rica en antioxidantes y con un sabor inigualable."
  },
  {
    codigo: "PO003",
    nombre: "Quinua Orgánica",
    categoria: "Productos Orgánicos",
    precio: null, // No se especifica en el archivo
    unidad: null,
    stock: null,
    descripcion: "Quinua orgánica, ideal como fuente de proteína vegetal y fibra. Perfecta para ensaladas y platos saludables."
  },
  {
    codigo: "PL001",
    nombre: "Leche Entera",
    categoria: "Productos Lácteos",
    precio: null, // No se especifica en el archivo
    unidad: null,
    stock: null,
    descripcion: "Leche entera fresca proveniente de granjas locales, conservando su sabor auténtico y calidad nutricional."
  }
];


filtro.addEventListener('change', (e) => {
    const categoriaSeleccionada = e.target.value;  
    console.log(categoriaSeleccionada); 
    if (categoriaSeleccionada === "Seleccionar categoria") {
        catalogo.innerHTML = "";
        mostrarProductos(productosInicial);
    } else {
        const productosFiltrados = productosInicial.filter(producto => producto.categoria === categoriaSeleccionada);
        catalogo.innerHTML = "";
        mostrarProductos(productosFiltrados);
    }});



function mostrarProductos(productos) {
    for (const producto of productos) {
    catalogo.innerHTML += `
    <div class="card m-3" style="width: 18rem;">
      <img src="https://res.cloudinary.com/dzktjoix0/image/upload/v1757376907/huerto_hogar_transparent_z90f1m.png" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Código:</strong> ${producto.codigo}</li>
          <li class="list-group-item"><strong>Categoría:</strong> ${producto.categoria}</li>
          <li class="list-group-item"><strong>Precio:</strong> ${producto.precio ? producto.precio + ' ' + producto.unidad : 'Consultar'}</li>
          <li class="list-group-item"><strong>Stock:</strong> ${producto.stock !== null ? producto.stock : 'Consultar'}</li>
        </ul>
        <a href="#" class="btn btn-primary mt-3">Agregar al carrito</a>
      </div>
    </div>
    `;
}
}

mostrarProductos(productosInicial);
