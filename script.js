const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.onclick = () => {
  nav.classList.toggle('open');
};


/* =========================
   CONTACT FORM
========================= */

const form = document.getElementById('form');
const msg = document.getElementById('msg');

if (form) {

  form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');

    // Disable button while sending
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    msg.textContent = '';
    msg.style.color = '#75d78e';

    try {

      const formData = new FormData(form);

      const response = await fetch(
        'https://formsubmit.co/ajax/muqaddash52@gmail.com',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        }
      );

      const data = await response.json();

      if (response.ok && data.success !== false) {

        // Clear form
        form.reset();

        // Success message
        msg.textContent = '✓ Message Sent Successfully!';

        msg.style.color = '#75d78e';

        // Restore button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message →';

      } else {

        throw new Error('Submission failed');

      }

    } catch (error) {

      msg.textContent =
        'Unable to send message. Please try again.';

      msg.style.color = '#ff7b7b';

      submitButton.disabled = false;
      submitButton.textContent = 'Send Message →';

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
