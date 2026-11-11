(() => {
  if (window.colizeumAdsClicksInstalled) return;
  window.colizeumAdsClicksInstalled = true;

  const labels = {
    whatsapp: 'iYjUCKLHsLYdEPSU9f5B',
    phone: 'eO3QCKXHsLYdEPSU9f5B',
    bdayHero: 'Oj19COjYsbYdEPSU9f5B',
    bdayReserva: '3N00COvYsbYdEPSU9f5B',
    bdayFooter: 'epFmCPHYsbYdEPSU9f5B',
    bdayCall: 'eWCtCO7YsbYdEPSU9f5B',
  };
  const conversion = label => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {send_to: 'AW-17714465396/' + label});
    }
  };
  const isBirthdayPage = () => document.body?.dataset?.page === 'birthday' ||
    /^\/(?:(?:ca|ru|zh)\/)?cumpleanos-gaming-barcelona(?:\/|$)/.test(location.pathname);
  const track = (link, type) => {
    let key = type;
    if (isBirthdayPage()) {
      if (type === 'phone') {
        key = 'bdayCall';
      } else {
        const placement = link?.dataset?.adsPlacement ||
          (link?.closest?.('.birthday-hero') ? 'hero' : link?.closest?.('#reserva') ? 'reserva' : 'footer');
        key = {hero: 'bdayHero', reserva: 'bdayReserva', footer: 'bdayFooter'}[placement] || 'bdayFooter';
      }
    }
    conversion(labels[key]);
  };
  window.trackWhatsApp = link => track(link, 'whatsapp');
  window.trackPhone = link => track(link, 'phone');

  // Bubble after form validation and terms consent; keep native mobile navigation.
  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0) return;
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link || link.getAttribute('aria-disabled') === 'true' || link.hasAttribute('download')) return;
    let url;
    try {
      url = new URL(link.href, location.href);
    } catch {
      return;
    }
    if (url.protocol === 'tel:') {
      window.trackPhone(link);
    } else if (url.protocol === 'whatsapp:' ||
      (['https:', 'http:'].includes(url.protocol) && ['wa.me', 'api.whatsapp.com'].includes(url.hostname))) {
      window.trackWhatsApp(link);
    }
  });
})();
