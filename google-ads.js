(() => {
  if (window.colizeumAdsClicksInstalled) return;
  window.colizeumAdsClicksInstalled = true;

  const conversion = sendTo => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {send_to: sendTo});
    }
  };
  window.trackWhatsApp = () => conversion('AW-17714465396/iYjUCKLHsLYdEPSU9f5B');
  window.trackPhone = () => conversion('AW-17714465396/eO3QCKXHsLYdEPSU9f5B');

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
      window.trackPhone();
    } else if (url.protocol === 'whatsapp:' ||
      (['https:', 'http:'].includes(url.protocol) && ['wa.me', 'api.whatsapp.com'].includes(url.hostname))) {
      window.trackWhatsApp();
    }
  });
})();
