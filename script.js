const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

if (menu && nav) {
  menu.onclick = () => nav.classList.toggle('open');
}

/* CONTACT FORM */
const form = document.getElementById('form');
const msg = document.getElementById('msg');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }
    if (msg) msg.textContent = '';

    try {
      const response = await fetch('https://formsubmit.co/ajax/muqaddash52@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });

      const data = await response.json();

      if (response.ok && data.success !== false) {
        form.reset();
        if (msg) {
          msg.textContent = '✓ Message Sent Successfully!';
          msg.style.color = '#75d78e';
        }
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      if (msg) {
        msg.textContent = 'Unable to send message. Please try again.';
        msg.style.color = '#ff7b7b';
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message →';
      }
    }
  });
}

/* LOGO POPUP */
const logoImg = document.getElementById('logoImg');
const logoModal = document.getElementById('logoModal');
const logoClose = document.getElementById('logoClose');

if (logoImg && logoModal) logoImg.onclick = () => logoModal.classList.add('show');
if (logoClose && logoModal) logoClose.onclick = () => logoModal.classList.remove('show');
if (logoModal) {
  logoModal.onclick = (e) => {
    if (e.target === logoModal) logoModal.classList.remove('show');
  };
}

/* PROJECT IMAGE POPUP */
const projectModal = document.getElementById('projectModal');
const projectModalImage = document.getElementById('projectModalImage');
const projectModalTitle = document.getElementById('projectModalTitle');
const projectClose = document.getElementById('projectClose');

function openProjectModal(image, title) {
  if (!projectModal || !projectModalImage) return;
  projectModalImage.src = image;
  projectModalImage.alt = title + ' project preview';
  if (projectModalTitle) projectModalTitle.textContent = title;
  projectModal.classList.add('show');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove('show');
  projectModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('[data-project-image]').forEach((button) => {
  button.addEventListener('click', () => {
    openProjectModal(button.dataset.projectImage, button.dataset.projectTitle || 'Project');
  });
});

if (projectClose) projectClose.addEventListener('click', closeProjectModal);
if (projectModal) {
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    if (logoModal) logoModal.classList.remove('show');
  }
});

/* CLOSE MOBILE MENU */
document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav && nav.classList.contains('open')) nav.classList.remove('open');
  });
});
