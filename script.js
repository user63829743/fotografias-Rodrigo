/**
 * HELENA DUARTE FOTOGRAFIA — INTERAÇÕES & COMPORTAMENTO (UX)
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initGalleryFilter();
  initLightboxDialog();
  initTestimonialsSlider();
  initContactForm();
});

/* ==========================================================================
   1. HEADER SCROLL EFFECT
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.style.backgroundColor = 'rgba(251, 249, 245, 0.96)';
      header.style.boxShadow = '0 4px 20px -8px rgba(36, 34, 32, 0.06)';
      header.style.borderBottomColor = 'rgba(223, 215, 203, 0.8)';
    } else {
      header.style.backgroundColor = 'rgba(251, 249, 245, 0.85)';
      header.style.boxShadow = 'none';
      header.style.borderBottomColor = 'rgba(223, 215, 203, 0.5)';
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/* ==========================================================================
   2. MENU MOBILE DRAWER
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileMenu');
  if (!toggleBtn || !drawer) return;

  const links = drawer.querySelectorAll('.mobile-nav-link');

  const openDrawer = () => {
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   3. FILTRO DE GALERIA EDITORIAL
   ========================================================================== */
function initGalleryFilter() {
  const tabs = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.gallery-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Atualiza tabs ativas
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filterValue = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hide');
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

/* ==========================================================================
   4. LIGHTBOX MODAL DIALOG (MODERN WEB GUIDANCE)
   ========================================================================== */
function initLightboxDialog() {
  const dialog = document.getElementById('lightboxDialog');
  const closeBtn = document.getElementById('dialogClose');
  const prevBtn = document.getElementById('dialogPrev');
  const nextBtn = document.getElementById('dialogNext');
  const dialogImg = document.getElementById('dialogImg');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogCategory = document.getElementById('dialogCategory');
  const dialogLocation = document.getElementById('dialogLocation');

  if (!dialog) return;

  const galleryCards = Array.from(document.querySelectorAll('.gallery-card'));
  let currentIndex = 0;

  // Carrega os dados da foto pelo índice
  const loadPhoto = (index) => {
    const card = galleryCards[index];
    if (!card) return;

    const img = card.querySelector('img');
    const title = card.querySelector('.card-title')?.textContent || '';
    const category = card.querySelector('.card-category')?.textContent || '';
    const location = card.querySelector('.card-location')?.textContent || '';

    dialogImg.src = img.src;
    dialogImg.alt = img.alt;
    dialogTitle.textContent = title;
    dialogCategory.textContent = category;
    dialogLocation.textContent = location;
    currentIndex = index;
  };

  // Abre dialog ao clicar em qualquer card
  galleryCards.forEach((card, idx) => {
    const btn = card.querySelector('.gallery-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        loadPhoto(idx);
        dialog.showModal();
        document.body.style.overflow = 'hidden';
      });
    }
  });

  const closeDialog = () => {
    dialog.close();
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeDialog);

  // Navegação anterior / próximo
  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryCards.length) % galleryCards.length;
    loadPhoto(currentIndex);
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryCards.length;
    loadPhoto(currentIndex);
  });

  // Light dismiss: fechar ao clicar no backdrop escuro
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    // Se clicou fora do dialog interior
    if (event.target === dialog) {
      closeDialog();
    }
  });

  // Teclado: setas para passar fotos, esc fecha
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + galleryCards.length) % galleryCards.length;
      loadPhoto(currentIndex);
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % galleryCards.length;
      loadPhoto(currentIndex);
    } else if (e.key === 'Escape') {
      document.body.style.overflow = '';
    }
  });

  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
  });
}

/* ==========================================================================
   5. SLIDER DE DEPOIMENTOS (ECOS DE AFETO)
   ========================================================================== */
function initTestimonialsSlider() {
  const items = document.querySelectorAll('.testimonial-item');
  const dots = document.querySelectorAll('.slider-dot');
  if (!items.length || !dots.length) return;

  const showSlide = (index) => {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  };

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
      showSlide(slideIndex);
    });
  });
}

/* ==========================================================================
   6. FORMULÁRIO DE CONTATO HUMANIZADO
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successCard = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');
  if (!form || !successCard) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const namesInput = document.getElementById('names');
    const emailInput = document.getElementById('email');
    const whatsappInput = document.getElementById('whatsapp');

    const namesError = document.getElementById('namesError');
    const emailError = document.getElementById('emailError');
    const whatsappError = document.getElementById('whatsappError');

    let isValid = true;

    // Validação Nomes
    if (!namesInput.value.trim()) {
      namesError.textContent = 'Por favor, contem-me como devo chamar vocês.';
      namesInput.style.borderColor = '#A33B32';
      isValid = false;
    } else {
      namesError.textContent = '';
      namesInput.style.borderColor = '';
    }

    // Validação E-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = 'Precisamos de um e-mail válido para retornar a carta.';
      emailInput.style.borderColor = '#A33B32';
      isValid = false;
    } else {
      emailError.textContent = '';
      emailInput.style.borderColor = '';
    }

    // Validação WhatsApp
    if (!whatsappInput.value.trim()) {
      whatsappError.textContent = 'Um número de WhatsApp ajuda a enviar uma mensagem rápida.';
      whatsappInput.style.borderColor = '#A33B32';
      isValid = false;
    } else {
      whatsappError.textContent = '';
      whatsappInput.style.borderColor = '';
    }

    if (!isValid) return;

    // Simula envio acolhedor
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'Guardando suas palavras...';

    setTimeout(() => {
      form.style.display = 'none';
      successCard.style.display = 'block';
      successCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 900);
  });
}
