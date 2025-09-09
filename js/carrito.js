const body = document.body;
const drawer = document.getElementById('cartDrawer');
const backdrop = document.getElementById('backdrop');
const openBtn = document.getElementById('openCartBtn');
const closeBtn = document.getElementById('closeCartBtn');
const subtotalEl = document.getElementById('subtotal');
const continueBtn = document.getElementById('continueBtn');
const cartContent = document.getElementById('cartContent');



function openCart(){
body.classList.add('cart-open');
drawer.setAttribute('aria-hidden','false');
openBtn.setAttribute('aria-expanded','true');
añadirProducto();
}


function closeCart(){
body.classList.remove('cart-open');
drawer.setAttribute('aria-hidden','true');
openBtn.setAttribute('aria-expanded','false');
openBtn.focus();
añadirProducto();
}

function añadirProducto() {
    const carroSt = localStorage.getItem('carritoCompras');
    let carro = carroSt ? JSON.parse(carroSt) : [];
    cartContent.innerHTML = '';
    for (let item of carro) {
        cartContent.innerHTML += `<article class="item" data-id="1">
<div class="thumb">64×64</div>
<div>
<h4>${item.nombre}</h4>
<div class="price" data-price="7990">$${item.precio}</div>
</div>
<div style="display:grid; gap:.4rem; justify-items:end">
<div class="qty">
<button class="dec" aria-label="Quitar uno">−</button>
<input class="q" type="text" inputmode="numeric" value="${item.cantidad}" aria-label="Cantidad" />
<button class="inc" aria-label="Agregar uno">+</button>
</div>
<button class="icon-btn remove" onclick="removeproducto('${item.codigo}')">Eliminar</button>
</div>
</article>`;
    }
}

function removeproducto(codigo) {
    const carroSt = localStorage.getItem('carritoCompras');
    let carro = carroSt ? JSON.parse(carroSt) : [];
    carro = carro.filter(item => item.codigo !== codigo);
    localStorage.setItem('carritoCompras', JSON.stringify(carro));
    añadirProducto();
}


openBtn.addEventListener('click', openCart);
closeBtn.addEventListener('click', closeCart);


window.addEventListener('keydown', (e)=>{
if(e.key === 'Escape' && body.classList.contains('cart-open')) closeCart();
});

añadirProducto();

