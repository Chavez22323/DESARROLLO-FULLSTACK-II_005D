
    const form = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('email');
    const errorMsg = document.getElementById('error');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
      errorMsg.textContent = ''; 

      if (passwordInput.value.length < 8) {
        errorMsg.textContent = 'La contraseña debe tener mínimo 8 caracteres';
        event.preventDefault();
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        errorMsg.textContent = 'Debes ingresar un correo electrónico válido';
        event.preventDefault();
        return;
      }
      window.location.href = 'index.html';
      localStorage.setItem('usuario', emailInput.value);
      alert('Inicio de sesión exitoso');
    });
