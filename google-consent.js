(() => {
  if (window.colizeumGoogleAds) return;

  const storageKey = 'colizeumCookieConsent';
  const version = 2;
  const maxAge = 180 * 24 * 60 * 60 * 1000;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
  });

  const readConsent = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      const age = Date.now() - Date.parse(saved?.decidedAt);
      if (saved?.version !== version || !Number.isFinite(age) || age < 0 || age > maxAge) return null;
      return {
        version,
        necessary: true,
        preferences: saved.preferences === true,
        analytics: saved.analytics === true,
        marketing: saved.marketing === true,
        thirdParty: saved.thirdParty === true,
        decidedAt: saved.decidedAt,
      };
    } catch {
      return null;
    }
  };

  const updateConsent = (choice = {}) => {
    const advertising = choice.marketing === true ? 'granted' : 'denied';
    window.gtag('consent', 'update', {
      ad_storage: advertising,
      ad_user_data: advertising,
      ad_personalization: advertising,
      analytics_storage: choice.analytics === true ? 'granted' : 'denied',
    });
  };

  window.colizeumGoogleAds = {version, readConsent, updateConsent};
  const saved = readConsent();
  if (saved) updateConsent(saved);
  window.gtag('js', new Date());
  window.gtag('config', 'AW-17714465396');
})();
