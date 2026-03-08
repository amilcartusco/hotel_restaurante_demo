// Activar efecto de tarjeta en móviles al tocar
document.querySelectorAll('.luxury-card').forEach(card => {
    card.addEventListener('click', function() {
        // Quitamos 'active' de otras tarjetas
        document.querySelectorAll('.luxury-card').forEach(c => {
            if (c !== this) c.classList.remove('active');
        });
        // Ponemos o quitamos 'active' a la actual
        this.classList.toggle('active');
    });
});

// Cerrar el menú de Bootstrap al hacer clic en un enlace 
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});

navLinks.forEach((l) => {
    l.addEventListener('click', () => { 
        if(window.innerWidth < 992) { bsCollapse.hide(); }
    });
});

// Formulario
document.getElementById('reservaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Solicitud recibida. Nuestro equipo se pondrá en contacto pronto.");
    this.reset();
});