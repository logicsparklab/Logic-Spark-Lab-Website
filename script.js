const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.onclick = () => nav.classList.toggle('open');

document.getElementById('form').onsubmit = e => {
  e.preventDefault();
  document.getElementById('msg').textContent =
    'Thank you! Form backend can be connected in the next step.';
  e.target.reset();
};


/* Logo Popup */

const logoImg = document.getElementById('logoImg');
const logoModal = document.getElementById('logoModal');
const logoClose = document.getElementById('logoClose');

logoImg.onclick = () => {
  logoModal.classList.add('show');
};

logoClose.onclick = () => {
  logoModal.classList.remove('show');
};

logoModal.onclick = e => {
  if (e.target === logoModal) {
    logoModal.classList.remove('show');
  }
};
