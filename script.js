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


/* SERVICE DETAILS POPUP */
const serviceModal = document.getElementById('serviceModal');
const serviceClose = document.getElementById('serviceClose');
const serviceModalIcon = document.getElementById('serviceModalIcon');
const serviceModalTitle = document.getElementById('serviceModalTitle');
const serviceModalIntro = document.getElementById('serviceModalIntro');
const serviceModalList = document.getElementById('serviceModalList');
const serviceModalDeliverables = document.getElementById('serviceModalDeliverables');
const serviceModalTech = document.getElementById('serviceModalTech');
const serviceContact = document.getElementById('serviceContact');

const serviceDetails = {
  'chrome-extension': {
    icon: '🧩', title: 'Chrome Extension Development',
    intro: 'Custom, production-ready browser extensions designed around your workflow, business process, or web application.',
    items: ['Manifest V3 extensions', 'Content scripts & background service workers', 'Custom popup, options pages & overlays', 'Browser storage, messaging & permissions', 'REST API and WebSocket integrations', 'Automation, debugging and deployment support'],
    deliverables: 'A complete extension package with a clean user interface, tested functionality, configuration and setup guidance.',
    tech: ['JavaScript', 'HTML/CSS', 'Chrome APIs', 'Manifest V3']
  },
  'browser-automation': {
    icon: '🤖', title: 'Browser Automation',
    intro: 'Automate repetitive browser workflows so routine tasks can run faster, consistently, and with less manual effort.',
    items: ['Form filling and repetitive actions', 'Data collection and extraction', 'Multi-step workflow automation', 'Scheduled or trigger-based tasks', 'Browser-based testing workflows', 'Custom automation controls and status panels'],
    deliverables: 'A tailored automation workflow with controls, error handling and clear status feedback where required.',
    tech: ['JavaScript', 'Chrome APIs', 'DOM Automation', 'Web APIs']
  },
  'javascript': {
    icon: 'JS', title: 'JavaScript Development',
    intro: 'Build interactive web functionality, custom tools and client-side features that make websites and applications more useful.',
    items: ['Interactive UI components', 'Custom browser-side functionality', 'Dynamic forms and validation', 'API-connected features', 'Real-time updates', 'Bug fixing and performance improvements'],
    deliverables: 'Clean, maintainable JavaScript functionality integrated into your existing website or web application.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Web APIs']
  },
  'api-websocket': {
    icon: '☁', title: 'API & WebSocket Integration',
    intro: 'Connect your website, extension, dashboard or automation tool to external services and real-time data sources.',
    items: ['REST API integration', 'WebSocket real-time connections', 'JSON data handling', 'Authentication and request flows', 'Live status and data updates', 'Error handling and reconnection logic'],
    deliverables: 'A reliable integration layer that connects the required services and presents useful data inside your tool.',
    tech: ['REST APIs', 'WebSocket', 'JSON', 'JavaScript']
  },
  'dashboards': {
    icon: '▥', title: 'Custom Dashboards & Web Tools',
    intro: 'Purpose-built dashboards and web tools that turn complex information or repetitive workflows into simple interfaces.',
    items: ['Admin and monitoring dashboards', 'Real-time status panels', 'Interactive data views', 'Custom controls and filters', 'Workflow management tools', 'Responsive desktop and mobile layouts'],
    deliverables: 'A focused web interface built around your exact workflow, data and required actions.',
    tech: ['HTML/CSS', 'JavaScript', 'APIs', 'Responsive UI']
  },
  'data-processing': {
    icon: '◉', title: 'Data Processing',
    intro: 'Collect, clean, transform and organize data so it can be used efficiently in dashboards, reports or automated workflows.',
    items: ['Data collection and extraction', 'JSON/CSV processing', 'Cleaning and transformation', 'Filtering and validation', 'Automated summaries and reports', 'Data preparation for other tools or APIs'],
    deliverables: 'A practical processing workflow that converts raw input into structured, usable information.',
    tech: ['JavaScript', 'JSON', 'CSV', 'Automation']
  }
};

function openServiceModal(key) {
  const service = serviceDetails[key];
  if (!service || !serviceModal) return;
  if (serviceModalIcon) serviceModalIcon.textContent = service.icon;
  if (serviceModalTitle) serviceModalTitle.textContent = service.title;
  if (serviceModalIntro) serviceModalIntro.textContent = service.intro;
  if (serviceModalList) {
    serviceModalList.innerHTML = service.items.map(item => `<li>${item}</li>`).join('');
  }
  if (serviceModalDeliverables) serviceModalDeliverables.textContent = service.deliverables;
  if (serviceModalTech) {
    serviceModalTech.innerHTML = service.tech.map(item => `<span>${item}</span>`).join('');
  }
  serviceModal.classList.add('show');
  serviceModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  if (serviceClose) serviceClose.focus();
}

function closeServiceModal() {
  if (!serviceModal) return;
  serviceModal.classList.remove('show');
  serviceModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.service-card[data-service]').forEach(card => {
  card.addEventListener('click', () => openServiceModal(card.dataset.service));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openServiceModal(card.dataset.service);
    }
  });
});

if (serviceClose) serviceClose.addEventListener('click', closeServiceModal);
if (serviceModal) {
  serviceModal.addEventListener('click', e => {
    if (e.target === serviceModal) closeServiceModal();
  });
}
if (serviceContact) serviceContact.addEventListener('click', closeServiceModal);

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
    closeServiceModal();
    if (logoModal) logoModal.classList.remove('show');
  }
});

/* CLOSE MOBILE MENU */
document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav && nav.classList.contains('open')) nav.classList.remove('open');
  });
});
