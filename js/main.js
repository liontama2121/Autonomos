// AUTONOMOS — comportamiento global compartido
(function(){
  // Navbar scrolled
  const nav = document.getElementById('nav');
  if (nav){
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Hamburguesa móvil
  const hamb = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamb && mobileMenu){
    hamb.addEventListener('click', () => {
      hamb.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamb.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // Active link según body[data-page]
  const page = document.body.dataset.page;
  if (page){
    document.querySelectorAll('[data-nav]').forEach(a => {
      if (a.dataset.nav === page) a.classList.add('active');
    });
  }

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Update cart counters
  if (typeof window.updateCartUI === 'function') window.updateCartUI();
})();
