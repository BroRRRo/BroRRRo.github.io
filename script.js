const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const languageButtons = document.querySelectorAll("[data-lang]");
const metaDescription = document.querySelector('meta[name="description"]');
const cookieBanner = document.querySelector("[data-cookie-banner]");
const cookiePanel = document.querySelector("[data-cookie-panel]");
const mapFrame = document.querySelector(".map-card iframe");
const mapConsent = document.querySelector("[data-map-consent]");
const termsConsent = document.querySelector("#terms-consent");
const termsRequiredLinks = document.querySelectorAll(".terms-required");
const COOKIE_STORAGE_KEY = "colizeumCookieConsent";

const translations = {
  es: {
    meta: {
      title: "COLIZEUM Barcelona",
      description: "COLIZEUM Barcelona: gaming club barcelona, gaming arena barcelona y pc gaming barcelona con precios, equipos, ofertas y contactos.",
    },
    language: {
      aria: "Idioma",
    },
    nav: {
      aria: "Principal",
      openMenu: "Abrir menú",
      prices: "Precios",
      arena: "Arena",
      equipment: "Equipos",
      offers: "Ofertas",
      app: "App",
      contact: "Contacto",
      legal: "Legal",
    },
    hero: {
      eyebrow: "Cyber sport arena en Barcelona",
      text: "Arena de gaming con PCs de alto rendimiento, torneos, bootcamps y zonas Standard y VIP para jugar en equipo.",
      pricesCta: "Ver precios",
      routeCta: "Cómo llegar",
      statsAria: "Datos clave",
      statClub: "formato club",
      statPc: "20 + 5 PC",
      statZones: "Standard y VIP",
    },
    prices: {
      eyebrow: "Tarifas",
      title: "Juega por horas o con paquetes",
      standardZone: "Standard zone",
      vipZone: "VIP zone",
      hour1: "1 hora",
      hours3: "3 horas",
      hours5: "5 horas",
      week: "Semana",
      weekend: "Fin de semana",
      nightTitle: "Play all night",
      nightStandard: "Standard: 17 EUR semana / 19.5 EUR fin de semana",
      nightVip: "VIP: 19.5 EUR semana / 21.5 EUR fin de semana",
    },
    arena: {
      imageAlt: "Zona PC de COLIZEUM Barcelona con equipos gaming y luces RGB",
      eyebrow: "La arena",
      title: "Un espacio hecho para competir y pasar la tarde",
      text: "La experiencia está pensada para partidas largas: iluminación ambiental, puestos ordenados, zonas diferenciadas y ambiente de esports sin ruido visual.",
      pointStandard: "20 PCs en zona Standard con RTX 5060.",
      pointVip: "5 PCs en zona VIP con RTX 5070.",
      pointEvents: "Eventos, torneos y activaciones de comunidad.",
    },
    seo: {
      eyebrow: "Gaming in Barcelona",
      title: "Gaming club Barcelona for PC players and esports teams",
      text: "COLIZEUM Barcelona is a gaming club barcelona, gaming arena barcelona, esports center barcelona and gaming center barcelona for players who want high-performance pc gaming barcelona in a dedicated gaming room barcelona.",
      keywordsAria: "Gaming keywords",
      tournamentsTitle: "Tournaments and team play",
      tournamentsText: "Join gaming tournaments barcelona, train with your squad and use the arena for practice sessions, private matches and community events.",
      gamesTitle: "Popular games",
    },
    equipment: {
      eyebrow: "Hardware",
      title: "Equipos listos para partidas exigentes",
      general: "General",
      vip: "VIP",
      standardCount: "20 PCs",
      vipCount: "5 PCs",
      tableEquipment: "Equipo",
      processor: "Procesador",
      gpu: "Tarjeta gráfica",
      ram: "Memoria RAM",
      disk: "Disco duro",
      diskless: "Sistema sin disco",
      keyboard: "Teclado",
      mouse: "Ratón",
      mousepad: "Alfombrilla",
      chair: "Sillón",
      monitor: "Monitor",
      internet: "Internet",
    },
    offers: {
      eyebrow: "Ofertas",
      title: "Planes para venir solo o con tu squad",
      friendTitle: "Trae a un amigo",
      friendText: "Recibe 2 horas gratis por cada amigo que traigas al club.",
      nightTitle: "Horas nocturnas",
      nightText: "Sesiones largas para quienes prefieren jugar tarde.",
      eventsTitle: "Cumpleaños y eventos",
      eventsText: "Formato de arena para grupos, torneos privados y celebraciones.",
    },
    app: {
      eyebrow: "Mobile app",
      title: "COLIZEUM en tu teléfono",
      text: "Acceso rápido a las ventajas del club: consulta tu saldo, sigue las promociones y mantén tus sesiones bajo control desde la app móvil.",
      badgesAria: "Opciones de descarga de la app",
      appStoreLabel: "Download on the",
      googlePlayLabel: "Get it on",
      phoneTitle: "Club balance",
      phoneOffer: "Bring a friend: +2h",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Ven a jugar en Barcelona",
      text: "Gran Via de les Corts Catalanes 661, Barcelona. Escríbenos por WhatsApp o llama al club para confirmar horario y disponibilidad.",
      mapAria: "Mapa de COLIZEUM Barcelona",
    },
    footer: {
      text: "Arena gaming en Barcelona.",
    },
  },
  ca: {
    meta: {
      title: "COLIZEUM Barcelona",
      description: "COLIZEUM Barcelona: gaming club barcelona, gaming arena barcelona i pc gaming barcelona amb preus, equips, ofertes i contacte.",
    },
    language: {
      aria: "Idioma",
    },
    nav: {
      aria: "Principal",
      openMenu: "Obrir menú",
      prices: "Preus",
      arena: "Arena",
      equipment: "Equips",
      offers: "Ofertes",
      app: "App",
      contact: "Contacte",
      legal: "Legal",
    },
    hero: {
      eyebrow: "Cyber sport arena a Barcelona",
      text: "Arena gaming amb PCs d'alt rendiment, tornejos, bootcamps i zones Standard i VIP per jugar en equip.",
      pricesCta: "Veure preus",
      routeCta: "Com arribar",
      statsAria: "Dades clau",
      statClub: "format club",
      statPc: "20 + 5 PC",
      statZones: "Standard i VIP",
    },
    prices: {
      eyebrow: "Tarifes",
      title: "Juga per hores o amb paquets",
      standardZone: "Zona Standard",
      vipZone: "Zona VIP",
      hour1: "1 hora",
      hours3: "3 hores",
      hours5: "5 hores",
      week: "Entre setmana",
      weekend: "Cap de setmana",
      nightTitle: "Juga tota la nit",
      nightStandard: "Standard: 17 EUR entre setmana / 19.5 EUR cap de setmana",
      nightVip: "VIP: 19.5 EUR entre setmana / 21.5 EUR cap de setmana",
    },
    arena: {
      imageAlt: "Zona PC de COLIZEUM Barcelona amb equips gaming i llums RGB",
      eyebrow: "L'arena",
      title: "Un espai fet per competir i passar la tarda",
      text: "L'experiència està pensada per a partides llargues: il·luminació ambiental, llocs ordenats, zones diferenciades i ambient d'esports sense soroll visual.",
      pointStandard: "20 PCs a la zona Standard amb RTX 5060.",
      pointVip: "5 PCs a la zona VIP amb RTX 5070.",
      pointEvents: "Esdeveniments, tornejos i activacions de comunitat.",
    },
    seo: {
      eyebrow: "Gaming a Barcelona",
      title: "Gaming club Barcelona per a jugadors de PC i equips d'esports",
      text: "COLIZEUM Barcelona és un gaming club barcelona, gaming arena barcelona, esports center barcelona i gaming center barcelona per a jugadors que busquen pc gaming barcelona d'alt rendiment en una gaming room barcelona dedicada.",
      keywordsAria: "Paraules clau de gaming",
      tournamentsTitle: "Tornejos i joc en equip",
      tournamentsText: "Participa en gaming tournaments barcelona, entrena amb el teu squad i utilitza l'arena per a pràctiques, partides privades i esdeveniments de comunitat.",
      gamesTitle: "Jocs populars",
    },
    equipment: {
      eyebrow: "Hardware",
      title: "Equips preparats per a partides exigents",
      general: "General",
      vip: "VIP",
      standardCount: "20 PCs",
      vipCount: "5 PCs",
      tableEquipment: "Equip",
      processor: "Processador",
      gpu: "Targeta gràfica",
      ram: "Memòria RAM",
      disk: "Disc dur",
      diskless: "Sistema sense disc",
      keyboard: "Teclat",
      mouse: "Ratolí",
      mousepad: "Catifa",
      chair: "Cadira",
      monitor: "Monitor",
      internet: "Internet",
    },
    offers: {
      eyebrow: "Ofertes",
      title: "Plans per venir sol o amb el teu squad",
      friendTitle: "Porta un amic",
      friendText: "Rep 2 hores gratis per cada amic que portis al club.",
      nightTitle: "Hores nocturnes",
      nightText: "Sessions llargues per a qui prefereix jugar tard.",
      eventsTitle: "Aniversaris i esdeveniments",
      eventsText: "Format d'arena per a grups, tornejos privats i celebracions.",
    },
    app: {
      eyebrow: "App mòbil",
      title: "COLIZEUM al teu telèfon",
      text: "Accés ràpid als avantatges del club: consulta el saldo, segueix les promocions i mantén les teves sessions sota control des de l'app mòbil.",
      badgesAria: "Opcions de descàrrega de l'app",
      appStoreLabel: "Download on the",
      googlePlayLabel: "Get it on",
      phoneTitle: "Saldo del club",
      phoneOffer: "Porta un amic: +2h",
    },
    contact: {
      eyebrow: "Contacte",
      title: "Vine a jugar a Barcelona",
      text: "Gran Via de les Corts Catalanes 661, Barcelona. Escriu-nos per WhatsApp o truca al club per confirmar horari i disponibilitat.",
      mapAria: "Mapa de COLIZEUM Barcelona",
    },
    footer: {
      text: "Arena gaming a Barcelona.",
    },
  },
  ru: {
    meta: {
      title: "COLIZEUM Барселона",
      description: "COLIZEUM Barcelona: gaming club barcelona, gaming arena barcelona и pc gaming barcelona с ценами, оборудованием, акциями и контактами.",
    },
    language: {
      aria: "Язык",
    },
    nav: {
      aria: "Главное меню",
      openMenu: "Открыть меню",
      prices: "Цены",
      arena: "Арена",
      equipment: "Оборудование",
      offers: "Акции",
      app: "Приложение",
      contact: "Контакты",
      legal: "Legal",
    },
    hero: {
      eyebrow: "Киберспортивная арена в Барселоне",
      text: "Игровая арена с мощными ПК, турнирами, буткемпами и зонами Standard и VIP для командной игры.",
      pricesCta: "Смотреть цены",
      routeCta: "Как добраться",
      statsAria: "Ключевые данные",
      statClub: "формат клуба",
      statPc: "20 + 5 ПК",
      statZones: "Standard и VIP",
    },
    prices: {
      eyebrow: "Тарифы",
      title: "Играйте по часам или пакетами",
      standardZone: "Зона Standard",
      vipZone: "Зона VIP",
      hour1: "1 час",
      hours3: "3 часа",
      hours5: "5 часов",
      week: "Будни",
      weekend: "Выходные",
      nightTitle: "Играй всю ночь",
      nightStandard: "Standard: 17 EUR в будни / 19.5 EUR в выходные",
      nightVip: "VIP: 19.5 EUR в будни / 21.5 EUR в выходные",
    },
    arena: {
      imageAlt: "PC-зона COLIZEUM Barcelona с игровыми компьютерами и RGB-подсветкой",
      eyebrow: "Арена",
      title: "Пространство для соревнований и долгих игровых сессий",
      text: "Зал рассчитан на длинные игровые сессии: атмосферная подсветка, аккуратные места, разные зоны и киберспортивная атмосфера без визуального шума.",
      pointStandard: "20 ПК в зоне Standard с RTX 5060.",
      pointVip: "5 ПК в зоне VIP с RTX 5070.",
      pointEvents: "Ивенты, турниры и активности комьюнити.",
    },
    seo: {
      eyebrow: "Gaming in Barcelona",
      title: "Gaming club Barcelona для PC-игроков и esports-команд",
      text: "COLIZEUM Barcelona это gaming club barcelona, gaming arena barcelona, esports center barcelona и gaming center barcelona для игроков, которым нужен мощный pc gaming barcelona в отдельном gaming room barcelona.",
      keywordsAria: "Gaming keywords",
      tournamentsTitle: "Турниры и командная игра",
      tournamentsText: "Участвуйте в gaming tournaments barcelona, тренируйтесь со своей командой и используйте арену для практики, приватных матчей и событий комьюнити.",
      gamesTitle: "Популярные игры",
    },
    equipment: {
      eyebrow: "Железо",
      title: "Оборудование для требовательных игр",
      general: "Общий зал",
      vip: "VIP",
      standardCount: "20 ПК",
      vipCount: "5 ПК",
      tableEquipment: "Оборудование",
      processor: "Процессор",
      gpu: "Видеокарта",
      ram: "Оперативная память",
      disk: "Диск",
      diskless: "Система без диска",
      keyboard: "Клавиатура",
      mouse: "Мышь",
      mousepad: "Коврик",
      chair: "Кресло",
      monitor: "Монитор",
      internet: "Интернет",
    },
    offers: {
      eyebrow: "Акции",
      title: "Приходите один или со своей командой",
      friendTitle: "Приведи друга",
      friendText: "Получите 2 часа бесплатно за каждого друга, которого приведёте в клуб.",
      nightTitle: "Ночные часы",
      nightText: "Длинные сессии для тех, кто любит играть поздно.",
      eventsTitle: "Дни рождения и события",
      eventsText: "Формат арены для групп, частных турниров и праздников.",
    },
    app: {
      eyebrow: "Мобильное приложение",
      title: "COLIZEUM в твоём телефоне",
      text: "Быстрый доступ к преимуществам клуба: проверяйте баланс, следите за акциями и контролируйте свои игровые сессии через мобильное приложение.",
      badgesAria: "Варианты загрузки приложения",
      appStoreLabel: "Download on the",
      googlePlayLabel: "Get it on",
      phoneTitle: "Баланс клуба",
      phoneOffer: "Приведи друга: +2ч",
    },
    contact: {
      eyebrow: "Контакты",
      title: "Приходите играть в Барселоне",
      text: "Gran Via de les Corts Catalanes 661, Barcelona. Напишите нам в WhatsApp или позвоните в клуб, чтобы уточнить расписание и наличие мест.",
      mapAria: "Карта COLIZEUM Barcelona",
    },
    footer: {
      text: "Игровая арена в Барселоне.",
    },
  },
  zh: {
    meta: {
      title: "COLIZEUM 巴塞罗那",
      description: "COLIZEUM Barcelona：gaming club barcelona、gaming arena barcelona 和 pc gaming barcelona，包含价格、设备、优惠和联系方式。",
    },
    language: {
      aria: "语言",
    },
    nav: {
      aria: "主导航",
      openMenu: "打开菜单",
      prices: "价格",
      arena: "场馆",
      equipment: "设备",
      offers: "优惠",
      app: "App",
      contact: "联系",
      legal: "Legal",
    },
    hero: {
      eyebrow: "巴塞罗那电竞馆",
      text: "配备高性能电脑的电竞空间，提供赛事、训练营以及 Standard 和 VIP 团队游戏区域。",
      pricesCta: "查看价格",
      routeCta: "如何到达",
      statsAria: "关键信息",
      statClub: "俱乐部模式",
      statPc: "20 + 5 台电脑",
      statZones: "Standard 和 VIP",
    },
    prices: {
      eyebrow: "价格",
      title: "按小时游玩，也可选择套餐",
      standardZone: "Standard 区",
      vipZone: "VIP 区",
      hour1: "1 小时",
      hours3: "3 小时",
      hours5: "5 小时",
      week: "工作日",
      weekend: "周末",
      nightTitle: "通宵畅玩",
      nightStandard: "Standard：工作日 17 EUR / 周末 19.5 EUR",
      nightVip: "VIP：工作日 19.5 EUR / 周末 21.5 EUR",
    },
    arena: {
      imageAlt: "COLIZEUM Barcelona 电脑区，配备电竞设备和 RGB 灯光",
      eyebrow: "场馆",
      title: "为竞技和长时间游戏打造的空间",
      text: "这里适合长时间对战：氛围灯光、整洁座位、不同区域，以及清爽的电竞环境。",
      pointStandard: "Standard 区 20 台电脑，RTX 5060。",
      pointVip: "VIP 区 5 台电脑，RTX 5070。",
      pointEvents: "活动、赛事和社群项目。",
    },
    seo: {
      eyebrow: "巴塞罗那电竞",
      title: "面向 PC 玩家和电竞队伍的 gaming club Barcelona",
      text: "COLIZEUM Barcelona 是 gaming club barcelona、gaming arena barcelona、esports center barcelona 和 gaming center barcelona，适合想在专业 gaming room barcelona 体验高性能 pc gaming barcelona 的玩家。",
      keywordsAria: "电竞关键词",
      tournamentsTitle: "赛事和团队训练",
      tournamentsText: "参加 gaming tournaments barcelona，和你的队伍训练，也可以把场馆用于练习、私人比赛和社群活动。",
      gamesTitle: "热门游戏",
    },
    equipment: {
      eyebrow: "硬件",
      title: "满足高要求游戏的设备",
      general: "普通区",
      vip: "VIP",
      standardCount: "20 台电脑",
      vipCount: "5 台电脑",
      tableEquipment: "设备",
      processor: "处理器",
      gpu: "显卡",
      ram: "内存",
      disk: "硬盘",
      diskless: "无盘系统",
      keyboard: "键盘",
      mouse: "鼠标",
      mousepad: "鼠标垫",
      chair: "座椅",
      monitor: "显示器",
      internet: "网络",
    },
    offers: {
      eyebrow: "优惠",
      title: "一个人来，或和你的队友一起来",
      friendTitle: "带朋友来",
      friendText: "每带一位朋友到俱乐部，即可获得 2 小时免费时间。",
      nightTitle: "夜间时段",
      nightText: "适合喜欢晚点开玩的长时间游戏。",
      eventsTitle: "生日和活动",
      eventsText: "适合团体、私人赛事和庆祝活动的电竞馆形式。",
    },
    app: {
      eyebrow: "移动应用",
      title: "手机里的 COLIZEUM",
      text: "快速使用俱乐部权益：查看余额、关注优惠，并通过移动应用管理你的游戏时段。",
      badgesAria: "应用下载选项",
      appStoreLabel: "Download on the",
      googlePlayLabel: "Get it on",
      phoneTitle: "俱乐部余额",
      phoneOffer: "带朋友来：+2小时",
    },
    contact: {
      eyebrow: "联系",
      title: "来巴塞罗那一起玩",
      text: "Gran Via de les Corts Catalanes 661, Barcelona。可通过 WhatsApp 联系我们，或致电俱乐部确认营业时间和空位。",
      mapAria: "COLIZEUM Barcelona 地图",
    },
    footer: {
      text: "巴塞罗那电竞馆。",
    },
  },
};

const getTranslation = (language, key) => {
  return key.split(".").reduce((value, part) => value?.[part], translations[language]);
};

const applyLanguage = (language) => {
  const activeLanguage = translations[language] ? language : "es";

  document.documentElement.lang = activeLanguage;
  document.title = translations[activeLanguage].meta.title;
  if (metaDescription) {
    metaDescription.setAttribute("content", translations[activeLanguage].meta.description);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(activeLanguage, element.dataset.i18n);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":").map((item) => item.trim());
      const value = getTranslation(activeLanguage, key);
      if (attribute && typeof value === "string") {
        element.setAttribute(attribute, value);
      }
    });
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === activeLanguage));
  });

  localStorage.setItem("siteLanguage", activeLanguage);
};

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

const defaultCookieConsent = {
  necessary: true,
  preferences: false,
  analytics: false,
  thirdParty: false,
  decidedAt: "",
};

const readCookieConsent = () => {
  try {
    return {
      ...defaultCookieConsent,
      ...JSON.parse(localStorage.getItem(COOKIE_STORAGE_KEY) || "{}"),
    };
  } catch {
    return { ...defaultCookieConsent };
  }
};

const writeCookieConsent = (preferences) => {
  const nextPreferences = {
    ...defaultCookieConsent,
    ...preferences,
    necessary: true,
    decidedAt: new Date().toISOString(),
  };

  localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(nextPreferences));
  return nextPreferences;
};

const loadThirdPartyServices = (preferences) => {
  if (!mapFrame || !mapConsent) {
    return;
  }

  if (preferences.thirdParty && mapFrame.dataset.src && !mapFrame.src) {
    mapFrame.src = mapFrame.dataset.src;
    mapFrame.hidden = false;
    mapConsent.hidden = true;
  } else if (!preferences.thirdParty) {
    mapFrame.removeAttribute("src");
    mapFrame.hidden = true;
    mapConsent.hidden = false;
  }
};

const applyCookieConsent = (preferences) => {
  loadThirdPartyServices(preferences);

  if (cookiePanel) {
    cookiePanel.elements.preferences.checked = Boolean(preferences.preferences);
    cookiePanel.elements.analytics.checked = Boolean(preferences.analytics);
    cookiePanel.elements.thirdParty.checked = Boolean(preferences.thirdParty);
  }
};

const closeCookieBanner = () => {
  if (cookieBanner) {
    cookieBanner.hidden = true;
  }
};

const openCookieBanner = () => {
  if (cookieBanner) {
    cookieBanner.hidden = false;
  }
};

document.querySelectorAll("[data-cookie-open]").forEach((button) => {
  button.addEventListener("click", () => {
    applyCookieConsent(readCookieConsent());
    openCookieBanner();
    if (cookiePanel) {
      cookiePanel.hidden = false;
    }
  });
});

document.querySelector("[data-cookie-config]")?.addEventListener("click", () => {
  if (cookiePanel) {
    cookiePanel.hidden = !cookiePanel.hidden;
  }
});

document.querySelector("[data-cookie-accept]")?.addEventListener("click", () => {
  const preferences = writeCookieConsent({
    preferences: true,
    analytics: true,
    thirdParty: true,
  });
  applyCookieConsent(preferences);
  closeCookieBanner();
});

document.querySelector("[data-cookie-reject]")?.addEventListener("click", () => {
  const preferences = writeCookieConsent({
    preferences: false,
    analytics: false,
    thirdParty: false,
  });
  applyCookieConsent(preferences);
  closeCookieBanner();
});

document.querySelector("[data-cookie-save]")?.addEventListener("click", () => {
  if (!cookiePanel) {
    return;
  }

  const preferences = writeCookieConsent({
    preferences: cookiePanel.elements.preferences.checked,
    analytics: cookiePanel.elements.analytics.checked,
    thirdParty: cookiePanel.elements.thirdParty.checked,
  });

  applyCookieConsent(preferences);
  closeCookieBanner();
});

const updateTermsLinks = () => {
  const accepted = Boolean(termsConsent?.checked);
  termsRequiredLinks.forEach((link) => {
    link.setAttribute("aria-disabled", String(!accepted));
  });
};

termsConsent?.addEventListener("change", updateTermsLinks);

termsRequiredLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!termsConsent?.checked) {
      event.preventDefault();
      termsConsent?.focus();
    }
  });
});

applyLanguage(localStorage.getItem("siteLanguage") || "es");
const storedCookieConsent = localStorage.getItem(COOKIE_STORAGE_KEY);
applyCookieConsent(readCookieConsent());
if (!storedCookieConsent) {
  openCookieBanner();
}
updateTermsLinks();
