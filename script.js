/* =========================
   MOBILE MENU
========================= */

const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

if (menu && nav) {

  menu.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

}


/* =========================
   CONTACT FORM
   FORMSUBMIT AJAX
========================= */

const form = document.getElementById('form');
const msg = document.getElementById('msg');

if (form && msg) {

  form.addEventListener('submit', async (e) => {

    // IMPORTANT:
    // Prevent normal browser submission / redirect
    e.preventDefault();
    e.stopPropagation();

    const submitButton =
      form.querySelector('button[type="submit"]');

    if (!submitButton) {
      return;
    }


    /* -------------------------
       START SENDING
    ------------------------- */

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    msg.textContent = '';
    msg.style.color = '#75d78e';


    try {

      /*
       * FormSubmit AJAX endpoint.
       *
       * This keeps the visitor on our website.
       */

      const response = await fetch(
        'https://formsubmit.co/ajax/muqaddash52@gmail.com',
        {
          method: 'POST',

          headers: {
            'Accept': 'application/json'
          },

          body: new FormData(form)
        }
      );


      /*
       * Read FormSubmit JSON response
       */

      const data = await response.json();


      console.log('FormSubmit response:', data);


      /* -------------------------
         SUCCESS
      ------------------------- */

      if (
        response.ok &&
        data.success !== false
      ) {

        form.reset();

        msg.textContent =
          '✓ Message Sent Successfully!';

        msg.style.color = '#75d78e';

      }


      /* -------------------------
         ERROR
      ------------------------- */

      else {

        throw new Error(
          data.message || 'Form submission failed'
        );

      }

    }


    /* -------------------------
       NETWORK / SERVER ERROR
    ------------------------- */

    catch (error) {

      console.error(
        'Contact form error:',
        error
      );

      msg.textContent =
        'Unable to send message. Please try again.';

      msg.style.color = '#ff7b7b';

    }


    /* -------------------------
       RESTORE BUTTON
    ------------------------- */

    finally {

      submitButton.disabled = false;

      submitButton.textContent =
        'Send Message →';

    }

  });

}


/* =========================
   LOGO POPUP
========================= */

const logoImg =
  document.getElementById('logoImg');

const logoModal =
  document.getElementById('logoModal');

const logoClose =
  document.getElementById('logoClose');


/* OPEN LOGO */

if (logoImg && logoModal) {

  logoImg.addEventListener('click', () => {

    logoModal.classList.add('show');

  });

}


/* CLOSE LOGO */

if (logoClose && logoModal) {

  logoClose.addEventListener('click', () => {

    logoModal.classList.remove('show');

  });

}


/* CLOSE WHEN CLICKING OUTSIDE */

if (logoModal) {

  logoModal.addEventListener('click', (e) => {

    if (e.target === logoModal) {

      logoModal.classList.remove('show');

    }

  });

}


/* =========================
   CLOSE LOGO WITH ESC
========================= */

document.addEventListener('keydown', (e) => {

  if (
    e.key === 'Escape' &&
    logoModal &&
    logoModal.classList.contains('show')
  ) {

    logoModal.classList.remove('show');

  }

});


/* =========================
   CLOSE MOBILE MENU
   AFTER NAVIGATION
========================= */

if (nav) {

  document
    .querySelectorAll('#nav a')
    .forEach((link) => {

      link.addEventListener('click', () => {

        if (nav.classList.contains('open')) {

          nav.classList.remove('open');

        }

      });

    });

}
