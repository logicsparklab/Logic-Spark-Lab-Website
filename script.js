const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.onclick = () => {
  nav.classList.toggle('open');
};


/* =========================
   CONTACT FORM
========================= */

// FormSubmit handles the actual email submission.
// No preventDefault() here, so the form can reach the email service.

const form = document.getElementById('form');

if (form) {
  form.addEventListener('submit', () => {

    const msg = document.getElementById('msg');

    if (msg) {
      msg.textContent = 'Sending your message...';
    }

  });
}


/* =========================
   LOGO POPUP
========================= */

const logoImg = document.getElementById('logoImg');
const logoModal = document.getElementById('logoModal');
const logoClose = document.getElementById('logoClose');

if (logoImg && logoModal) {
  logoImg.onclick = () => {
    logoModal.classList.add('show');
  };
}

if (logoClose && logoModal) {
  logoClose.onclick = () => {
    logoModal.classList.remove('show');
  };
}

if (logoModal) {
  logoModal.onclick = e => {
    if (e.target === logoModal) {
      logoModal.classList.remove('show');
    }
  };
}


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll('#nav a').forEach(link => {

  link.addEventListener('click', () => {

    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
    }

  });

});
