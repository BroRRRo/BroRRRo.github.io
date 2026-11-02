const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
let languageButtons = document.querySelectorAll("[data-lang]");
const metaDescription = document.querySelector('meta[name="description"]');
const cookieBanner = document.querySelector("[data-cookie-banner]");
const cookiePanel = document.querySelector("[data-cookie-panel]");
const cookieOptions = document.querySelector("[data-cookie-options]");
const mapFrame = document.querySelector(".map-card iframe");
const mapConsent = document.querySelector("[data-map-consent]");
const termsConsent = document.querySelector("#terms-consent");
const termsRequiredLinks = document.querySelectorAll(".terms-required");
const COOKIE_STORAGE_KEY = "colizeumCookieConsent";

const translations = {
  es: {
    meta: {
      title: "Gaming Center en Barcelona | Colizeum Tetuan Gaming arena E-sports",
      description: "Gaming center en Barcelona con PCs gaming, zona VIP, tarifas por horas y sesiones nocturnas. Visítanos en Gran Via de les Corts Catalanes 661.",
    },
    language: {
      aria: "Idioma",
    },
    nav: {
      aria: "Principal",
      openMenu: "Abrir menú",
      home: "Gaming Center",
      birthdays: "Cumpleaños Gaming",
      about: "Sobre Colizeum",
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
      title: "C-world en tu teléfono",
      text: "Acceso rápido a las ventajas del club: consulta tu saldo, elige sala y tarifa, sigue las promociones y prepara tu visita desde C-world.",
      badgesAria: "Opciones de descarga de la app",
      appStoreLabel: "Descargar en",
      googlePlayLabel: "Disponible en",
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
      title: "Gaming Center en Barcelona | Colizeum Tetuan Gaming arena E-sports",
      description: "Gaming center en Barcelona amb PCs gaming, zona VIP, tarifes per hores i sessions nocturnes. Visita'ns a Gran Via de les Corts Catalanes 661.",
    },
    language: {
      aria: "Idioma",
    },
    nav: {
      aria: "Principal",
      openMenu: "Obrir menú",
      home: "Centre gaming",
      birthdays: "Aniversaris gaming",
      about: "Sobre Colizeum",
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
      title: "C-world al teu telèfon",
      text: "Accés ràpid als avantatges del club: consulta el saldo, tria sala i tarifa, segueix les promocions i prepara la visita des de C-world.",
      badgesAria: "Opcions de descàrrega de l'app",
      appStoreLabel: "Descarregar a",
      googlePlayLabel: "Disponible a",
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
      title: "Gaming Center en Barcelona | Colizeum Tetuan Gaming arena E-sports",
      description: "Gaming center en Barcelona с игровыми ПК, VIP-зоной, почасовыми тарифами и ночными сессиями. Gran Via de les Corts Catalanes 661.",
    },
    language: {
      aria: "Язык",
    },
    nav: {
      aria: "Главное меню",
      openMenu: "Открыть меню",
      home: "Игровой центр",
      birthdays: "Дни рождения",
      about: "О Colizeum",
      prices: "Цены",
      arena: "Арена",
      equipment: "Оборудование",
      offers: "Акции",
      app: "Приложение",
      contact: "Контакты",
      legal: "Правовая информация",
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
      title: "C-world в твоём телефоне",
      text: "Быстрый доступ к преимуществам клуба: проверяйте баланс, выбирайте зал и тариф, следите за акциями и готовьте визит через C-world.",
      badgesAria: "Варианты загрузки приложения",
      appStoreLabel: "Загрузить в",
      googlePlayLabel: "Скачать в",
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
      title: "Gaming Center en Barcelona | Colizeum Tetuan Gaming arena E-sports",
      description: "Gaming center en Barcelona，配备电竞电脑、VIP 区、按小时价格和夜间时段。地址 Gran Via de les Corts Catalanes 661。",
    },
    language: {
      aria: "语言",
    },
    nav: {
      aria: "主导航",
      openMenu: "打开菜单",
      home: "电竞中心",
      birthdays: "生日派对",
      about: "关于 Colizeum",
      prices: "价格",
      arena: "场馆",
      equipment: "设备",
      offers: "优惠",
      app: "App",
      contact: "联系",
      legal: "法律信息",
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
      title: "手机里的 C-world",
      text: "快速使用俱乐部权益：查看余额、选择大厅和价格、关注优惠，并通过 C-world 准备到店游玩。",
      badgesAria: "应用下载选项",
      appStoreLabel: "下载于",
      googlePlayLabel: "获取于",
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

const staticTextTranslations = {
  "Gaming Center en Barcelona": {
    ca: "Centre gaming a Barcelona",
    ru: "Игровой центр в Барселоне",
    zh: "巴塞罗那电竞中心",
  },
  "Gran Via 661": {
    ca: "Gran Via 661",
    ru: "Gran Via 661",
    zh: "Gran Via 661",
  },
  "Juegos": {
    ca: "Jocs",
    ru: "Игры",
    zh: "游戏",
  },
  "Juegos disponibles": {
    ca: "Jocs disponibles",
    ru: "Доступные игры",
    zh: "可玩的游戏",
  },
  "En Colizeum Barcelona puedes jugar a algunos de los títulos competitivos más populares, como Valorant, Counter-Strike 2, League of Legends y Dota 2. Consulta en el club la disponibilidad actual de juegos.": {
    ca: "A Colizeum Barcelona pots jugar a alguns dels títols competitius més populars, com Valorant, Counter-Strike 2, League of Legends i Dota 2. Consulta al club la disponibilitat actual dels jocs.",
    ru: "В Colizeum Barcelona можно играть в популярные соревновательные игры, включая Valorant, Counter-Strike 2, League of Legends и Dota 2. Актуальную доступность игр уточняйте в клубе.",
    zh: "在 Colizeum Barcelona，你可以体验 Valorant、Counter-Strike 2、League of Legends 和 Dota 2 等热门竞技游戏。具体可玩游戏请到店确认。",
  },
  "Cumpleaños Gaming": {
    ca: "Aniversaris gaming",
    ru: "Дни рождения",
    zh: "电竞生日",
  },
  "Cumpleaños gaming en Barcelona": {
    ca: "Aniversaris gaming a Barcelona",
    ru: "День рождения в игровом формате в Барселоне",
    zh: "巴塞罗那电竞生日派对",
  },
  "Celebra un cumpleaños gaming en Colizeum Barcelona con PCs gaming, juegos multijugador y espacio para jugar en grupo.": {
    ca: "Celebra un aniversari gaming a Colizeum Barcelona amb PCs gaming, jocs multijugador i espai per jugar en grup.",
    ru: "Отпразднуйте день рождения в Colizeum Barcelona: игровые ПК, мультиплеер и пространство для игры компанией.",
    zh: "在 Colizeum Barcelona 举办电竞生日派对：电竞电脑、多人游戏和适合团队游玩的空间。",
  },
  "Más información": {
    ca: "Més informació",
    ru: "Подробнее",
    zh: "了解更多",
  },
  "App Store": {
    ca: "App Store",
    ru: "App Store",
    zh: "App Store",
  },
  "Google Play": {
    ca: "Google Play",
    ru: "Google Play",
    zh: "Google Play",
  },
  "Club balance": {
    ca: "Saldo del club",
    ru: "Баланс клуба",
    zh: "俱乐部余额",
  },
  "WhatsApp": {
    ca: "WhatsApp",
    ru: "WhatsApp",
    zh: "WhatsApp",
  },
  "Contacto y ubicación": {
    ca: "Contacte i ubicació",
    ru: "Контакты и адрес",
    zh: "联系和地址",
  },
  "He leído y acepto los": {
    ca: "He llegit i accepto els",
    ru: "Я прочитал(а) и принимаю",
    zh: "我已阅读并接受",
  },
  "Términos y Condiciones Generales": {
    ca: "Termes i Condicions Generals",
    ru: "Общие условия",
    zh: "通用条款与条件",
  },
  "Términos y Condiciones Generales.": {
    ca: "Termes i Condicions Generals.",
    ru: "Общие условия.",
    zh: "通用条款与条件。",
  },
  "Legal": {
    ca: "Legal",
    ru: "Правовая информация",
    zh: "法律信息",
  },
  "Información legal y privacidad": {
    ca: "Informació legal i privacitat",
    ru: "Правовая информация и конфиденциальность",
    zh: "法律信息和隐私",
  },
  "Documentos informativos del sitio web de COLIZEUM Barcelona, operado por VAYRON GAMING, S.L.": {
    ca: "Documents informatius del lloc web de COLIZEUM Barcelona, operat per VAYRON GAMING, S.L.",
    ru: "Информационные документы сайта COLIZEUM Barcelona, которым управляет VAYRON GAMING, S.L.",
    zh: "COLIZEUM Barcelona 网站信息文件，由 VAYRON GAMING, S.L. 运营。",
  },
  "Política de Privacidad": {
    ca: "Política de Privacitat",
    ru: "Политика конфиденциальности",
    zh: "隐私政策",
  },
  "Responsable:": {
    ca: "Responsable:",
    ru: "Ответственный:",
    zh: "负责人：",
  },
  "Domicilio fiscal:": {
    ca: "Domicili fiscal:",
    ru: "Юридический адрес:",
    zh: "税务地址：",
  },
  "Contacto de privacidad:": {
    ca: "Contacte de privacitat:",
    ru: "Контакт по вопросам приватности:",
    zh: "隐私联系邮箱：",
  },
  "Datos tratados:": {
    ca: "Dades tractades:",
    ru: "Обрабатываемые данные:",
    zh: "处理的数据：",
  },
  "datos que el usuario facilite voluntariamente al llamar, escribir por WhatsApp o contactar con el club.": {
    ca: "dades que l'usuari faciliti voluntàriament en trucar, escriure per WhatsApp o contactar amb el club.",
    ru: "данные, которые пользователь добровольно предоставляет при звонке, обращении в WhatsApp или контакте с клубом.",
    zh: "用户在致电、通过 WhatsApp 联系或与俱乐部联系时自愿提供的数据。",
  },
  "Finalidades:": {
    ca: "Finalitats:",
    ru: "Цели:",
    zh: "目的：",
  },
  "atender consultas, informar sobre disponibilidad, gestionar reservas o eventos solicitados y mantener la relación comercial.": {
    ca: "atendre consultes, informar sobre disponibilitat, gestionar reserves o esdeveniments sol·licitats i mantenir la relació comercial.",
    ru: "обработка запросов, информирование о доступности, управление бронями или мероприятиями и поддержание деловых отношений.",
    zh: "回复咨询、告知可用性、处理预订或活动请求并维护商业关系。",
  },
  "Base jurídica:": {
    ca: "Base jurídica:",
    ru: "Правовое основание:",
    zh: "法律依据：",
  },
  "solicitud precontractual o contractual del usuario, interés legítimo en responder comunicaciones y consentimiento cuando sea necesario.": {
    ca: "sol·licitud precontractual o contractual de l'usuari, interès legítim a respondre comunicacions i consentiment quan sigui necessari.",
    ru: "преддоговорный или договорный запрос пользователя, законный интерес в ответе на обращения и согласие, когда оно необходимо.",
    zh: "用户的合同前或合同请求、回复沟通的合法利益，以及必要时的同意。",
  },
  "Conservación:": {
    ca: "Conservació:",
    ru: "Хранение:",
    zh: "保存期限：",
  },
  "durante el tiempo necesario para atender la solicitud y cumplir obligaciones legales aplicables.": {
    ca: "durant el temps necessari per atendre la sol·licitud i complir les obligacions legals aplicables.",
    ru: "в течение срока, необходимого для обработки запроса и соблюдения применимых юридических обязательств.",
    zh: "在处理请求和履行适用法律义务所需期间内保存。",
  },
  "Derechos:": {
    ca: "Drets:",
    ru: "Права:",
    zh: "权利：",
  },
  "acceso, rectificación, supresión, oposición, limitación, portabilidad y reclamación ante la Agencia Española de Protección de Datos.": {
    ca: "accés, rectificació, supressió, oposició, limitació, portabilitat i reclamació davant l'Agència Espanyola de Protecció de Dades.",
    ru: "доступ, исправление, удаление, возражение, ограничение, переносимость и жалоба в Испанское агентство по защите данных.",
    zh: "访问、更正、删除、反对、限制处理、数据可携带，以及向西班牙数据保护局投诉。",
  },
  "Aviso Legal": {
    ca: "Avís Legal",
    ru: "Правовое уведомление",
    zh: "法律声明",
  },
  "Sitio web:": {
    ca: "Lloc web:",
    ru: "Сайт:",
    zh: "网站：",
  },
  "Titular:": {
    ca: "Titular:",
    ru: "Владелец:",
    zh: "所有者：",
  },
  "Domicilio fiscal y del club:": {
    ca: "Domicili fiscal i del club:",
    ru: "Юридический адрес и адрес клуба:",
    zh: "税务地址和俱乐部地址：",
  },
  "Teléfono:": {
    ca: "Telèfon:",
    ru: "Телефон:",
    zh: "电话：",
  },
  "Email:": {
    ca: "Email:",
    ru: "Email:",
    zh: "邮箱：",
  },
  "El contenido del sitio tiene carácter informativo. Los precios, promociones y disponibilidad pueden cambiar y deben confirmarse con el club.": {
    ca: "El contingut del lloc és informatiu. Els preus, promocions i disponibilitat poden canviar i s'han de confirmar amb el club.",
    ru: "Информация на сайте носит справочный характер. Цены, акции и наличие мест могут меняться, их нужно подтверждать в клубе.",
    zh: "网站内容仅供参考。价格、优惠和可用性可能变更，请向俱乐部确认。",
  },
  "Términos y Condiciones": {
    ca: "Termes i Condicions",
    ru: "Условия",
    zh: "条款与条件",
  },
  "El acceso al club, uso de equipos y participación en eventos queda sujeto a disponibilidad, normas internas de convivencia, respeto al personal y al resto de usuarios.": {
    ca: "L'accés al club, l'ús dels equips i la participació en esdeveniments depenen de la disponibilitat, les normes internes de convivència i el respecte al personal i a la resta d'usuaris.",
    ru: "Доступ в клуб, использование оборудования и участие в мероприятиях зависят от доступности, внутренних правил и уважительного отношения к персоналу и другим посетителям.",
    zh: "进入俱乐部、使用设备和参加活动取决于可用性、内部规则，以及对工作人员和其他用户的尊重。",
  },
  "Los menores de edad deberán cumplir las condiciones de acceso aplicables y, cuando proceda, contar con autorización de su representante legal.": {
    ca: "Els menors d'edat hauran de complir les condicions d'accés aplicables i, quan correspongui, disposar d'autorització del seu representant legal.",
    ru: "Несовершеннолетние должны соблюдать применимые условия доступа и, при необходимости, иметь разрешение законного представителя.",
    zh: "未成年人须遵守适用的进入条件，必要时需获得法定监护人授权。",
  },
  "El usuario se compromete a usar los equipos de forma responsable y a no instalar software, modificar configuraciones, acceder a contenidos ilícitos ni dañar material del club.": {
    ca: "L'usuari es compromet a utilitzar els equips de manera responsable i a no instal·lar programari, modificar configuracions, accedir a continguts il·lícits ni danyar material del club.",
    ru: "Пользователь обязуется ответственно использовать оборудование, не устанавливать ПО, не менять настройки, не открывать незаконный контент и не повреждать имущество клуба.",
    zh: "用户承诺负责任地使用设备，不安装软件、不修改设置、不访问非法内容，也不损坏俱乐部设备。",
  },
  "Las promociones, incluyendo “trae a un amigo y recibe 2 horas gratis”, pueden estar sujetas a condiciones, límites de uso y validación por el personal del club.": {
    ca: "Les promocions, inclosa “porta un amic i rep 2 hores gratis”, poden estar subjectes a condicions, límits d'ús i validació pel personal del club.",
    ru: "Акции, включая «приведи друга и получи 2 часа бесплатно», могут иметь условия, ограничения использования и требовать подтверждения персоналом клуба.",
    zh: "优惠活动，包括“带朋友来，获得 2 小时免费”，可能受条件、使用限制和俱乐部工作人员确认约束。",
  },
  "Política de Cookies": {
    ca: "Política de Cookies",
    ru: "Политика cookies",
    zh: "Cookie 政策",
  },
  "Este sitio utiliza almacenamiento técnico local para recordar el idioma y la elección del banner de cookies. Estos elementos son necesarios para prestar el servicio solicitado.": {
    ca: "Aquest lloc utilitza emmagatzematge tècnic local per recordar l'idioma i l'elecció del bàner de cookies. Aquests elements són necessaris per prestar el servei sol·licitat.",
    ru: "Этот сайт использует техническое локальное хранение, чтобы запомнить язык и выбор в баннере cookies. Эти элементы нужны для работы запрошенного сервиса.",
    zh: "本网站使用必要的本地技术存储来记住所选语言和 Cookie 横幅选择。这些项目是提供所请求服务所必需的。",
  },
  "Las cookies o servicios no necesarios, como la carga de Google Maps, quedan bloqueados hasta que el usuario los acepte en el panel de configuración.": {
    ca: "Les cookies o serveis no necessaris, com la càrrega de Google Maps, queden bloquejats fins que l'usuari els accepti al panell de configuració.",
    ru: "Необязательные cookies и сервисы, например загрузка Google Maps, блокируются до согласия пользователя в панели настроек.",
    zh: "非必要 Cookie 或服务，例如 Google Maps 加载，会在用户于设置面板中同意前保持阻止。",
  },
  "Categorías:": {
    ca: "Categories:",
    ru: "Категории:",
    zh: "类别：",
  },
  "técnicas necesarias, preferencias, analíticas y terceros/medios externos.": {
    ca: "tècniques necessàries, preferències, analítica i tercers/mitjans externs.",
    ru: "необходимые технические, предпочтения, аналитика и сторонние/внешние медиа.",
    zh: "必要技术、偏好、分析和第三方/外部媒体。",
  },
  "Terceros identificados:": {
    ca: "Tercers identificats:",
    ru: "Идентифицированные третьи стороны:",
    zh: "已识别第三方：",
  },
  "Google Maps, solo si el usuario acepta la categoría de terceros o pulsa una acción que lo habilite.": {
    ca: "Google Maps, només si l'usuari accepta la categoria de tercers o prem una acció que ho habiliti.",
    ru: "Google Maps, только если пользователь принимает категорию сторонних сервисов или нажимает действие, которое ее включает.",
    zh: "Google Maps，仅当用户接受第三方类别或点击启用该服务的操作时加载。",
  },
  "Configurar cookies": {
    ca: "Configurar cookies",
    ru: "Настроить cookies",
    zh: "设置 Cookie",
  },
  "Configuración de cookies": {
    ca: "Configuració de cookies",
    ru: "Настройка cookies",
    zh: "Cookie 设置",
  },
  "Usamos cookies técnicas necesarias y, solo con tu consentimiento, cookies opcionales para preferencias, analítica y servicios de terceros como Google Maps.": {
    ca: "Fem servir cookies tècniques necessàries i, només amb el teu consentiment, cookies opcionals per a preferències, analítica i serveis de tercers com Google Maps.",
    ru: "Мы используем необходимые технические cookies, а с вашего согласия — дополнительные cookies для предпочтений, аналитики и сторонних сервисов, таких как Google Maps.",
    zh: "我们使用必要技术 Cookie；仅在你同意后，才使用用于偏好、分析和 Google Maps 等第三方服务的可选 Cookie。",
  },
  "Rechazar": {
    ca: "Rebutjar",
    ru: "Отклонить",
    zh: "拒绝",
  },
  "Configurar": {
    ca: "Configurar",
    ru: "Настроить",
    zh: "设置",
  },
  "Aceptar": {
    ca: "Acceptar",
    ru: "Принять",
    zh: "接受",
  },
  "Guardar selección": {
    ca: "Desar selecció",
    ru: "Сохранить выбор",
    zh: "保存选择",
  },
  "Cookies técnicas necesarias": {
    ca: "Cookies tècniques necessàries",
    ru: "Необходимые технические cookies",
    zh: "必要技术 Cookie",
  },
  "Siempre activas: idioma, seguridad y preferencias de consentimiento.": {
    ca: "Sempre actives: idioma, seguretat i preferències de consentiment.",
    ru: "Всегда активны: язык, безопасность и предпочтения согласия.",
    zh: "始终启用：语言、安全和同意偏好。",
  },
  "Preferencias": {
    ca: "Preferències",
    ru: "Предпочтения",
    zh: "偏好",
  },
  "Recordar ajustes de experiencia del sitio.": {
    ca: "Recordar ajustos de l'experiència del lloc.",
    ru: "Запоминать настройки работы сайта.",
    zh: "记住网站体验设置。",
  },
  "Analítica": {
    ca: "Analítica",
    ru: "Аналитика",
    zh: "分析",
  },
  "Medición agregada de visitas si se instala una herramienta en el futuro.": {
    ca: "Mesura agregada de visites si s'instal·la una eina en el futur.",
    ru: "Агрегированное измерение посещений, если в будущем будет подключен инструмент.",
    zh: "如果未来安装相关工具，将用于聚合访问统计。",
  },
  "Terceros y medios externos": {
    ca: "Tercers i mitjans externs",
    ru: "Сторонние и внешние медиа",
    zh: "第三方和外部媒体",
  },
  "Google Maps y otros contenidos externos.": {
    ca: "Google Maps i altres continguts externs.",
    ru: "Google Maps и другой внешний контент.",
    zh: "Google Maps 和其他外部内容。",
  },
  "Para mostrar el mapa se cargan servicios de Google, que pueden instalar cookies de terceros.": {
    ca: "Per mostrar el mapa es carreguen serveis de Google, que poden instal·lar cookies de tercers.",
    ru: "Для показа карты загружаются сервисы Google, которые могут устанавливать сторонние cookies.",
    zh: "显示地图需要加载 Google 服务，可能会设置第三方 Cookie。",
  },
  "Privacy Policy": {
    ca: "Política de Privacitat",
    ru: "Политика конфиденциальности",
    zh: "隐私政策",
  },
  "Gaming Center": {
    ca: "Centre gaming",
    ru: "Игровой центр",
    zh: "电竞中心",
  },
  "Sobre Colizeum": {
    ca: "Sobre Colizeum",
    ru: "О Colizeum",
    zh: "关于 Colizeum",
  },
  "Contacto": {
    ca: "Contacte",
    ru: "Контакты",
    zh: "联系",
  },
  "Gaming Center en Barcelona": {
    ca: "Centre gaming a Barcelona",
    ru: "Игровой центр в Барселоне",
    zh: "巴塞罗那电竞中心",
  },
  "Cumpleaños Gamer en Barcelona": {
    ca: "Aniversari gamer a Barcelona",
    ru: "Игровой день рождения в Барселоне",
    zh: "巴塞罗那电竞生日派对",
  },
  "Cumpleaños Gaming Barcelona": {
    ca: "Aniversaris gaming Barcelona",
    ru: "Дни рождения Gaming Barcelona",
    zh: "巴塞罗那电竞生日",
  },
  "Celebra un cumpleaños gaming en Barcelona en Colizeum. Organizamos sesiones de juego para grupos con PCs gaming, juegos multijugador y zonas Standard y VIP.": {
    ca: "Celebra un aniversari gaming a Barcelona a Colizeum. Organitzem sessions de joc per a grups amb PCs gaming, jocs multijugador i zones Standard i VIP.",
    ru: "Отпразднуйте игровой день рождения в Барселоне в Colizeum. Мы организуем игровые сессии для групп с игровыми ПК, мультиплеером и зонами Standard и VIP.",
    zh: "在 Colizeum 举办巴塞罗那电竞生日派对。我们为团体安排电竞电脑、多人游戏以及 Standard 和 VIP 区的游戏时段。",
  },
  "Reservar por WhatsApp": {
    ca: "Reservar per WhatsApp",
    ru: "Забронировать через WhatsApp",
    zh: "通过 WhatsApp 预订",
  },
  "Cómo celebrar un cumpleaños gaming en Colizeum": {
    ca: "Com celebrar un aniversari gaming a Colizeum",
    ru: "Как отпраздновать игровой день рождения в Colizeum",
    zh: "如何在 Colizeum 举办电竞生日",
  },
  "El grupo puede jugar junto durante la sesión utilizando los PCs. Según el formato elegido, se pueden utilizar las zonas Standard o VIP y organizar partidas entre los participantes.": {
    ca: "El grup pot jugar junt durant la sessió utilitzant els PCs. Segons el format triat, es poden utilitzar les zones Standard o VIP i organitzar partides entre participants.",
    ru: "Группа может играть вместе на ПК во время сессии. В зависимости от формата можно использовать зоны Standard или VIP и организовать матчи между участниками.",
    zh: "团队可以在游戏时段一起使用电脑游玩。根据所选形式，可使用 Standard 或 VIP 区，并组织参与者之间的对局。",
  },
  "El equipo del club puede orientar al grupo sobre juegos multijugador, duración recomendada y disponibilidad de puestos.": {
    ca: "L'equip del club pot orientar el grup sobre jocs multijugador, durada recomanada i disponibilitat de llocs.",
    ru: "Команда клуба поможет с выбором мультиплеерных игр, рекомендуемой длительностью и доступностью мест.",
    zh: "俱乐部团队可以为团体推荐多人游戏、合适时长和可用座位。",
  },
  "Reserva tu cumpleaños gaming": {
    ca: "Reserva el teu aniversari gaming",
    ru: "Забронируйте игровой день рождения",
    zh: "预订你的电竞生日派对",
  },
  "Consulta disponibilidad por teléfono o WhatsApp y confirma el formato antes de venir al club.": {
    ca: "Consulta disponibilitat per telèfon o WhatsApp i confirma el format abans de venir al club.",
    ru: "Уточните доступность по телефону или WhatsApp и подтвердите формат до визита в клуб.",
    zh: "请通过电话或 WhatsApp 查询可用时间，并在到店前确认形式。",
  },
  "Dirección:": {
    ca: "Adreça:",
    ru: "Адрес:",
    zh: "地址：",
  },
  "Llamar": {
    ca: "Trucar",
    ru: "Позвонить",
    zh: "拨打电话",
  },
  "Qué incluye": {
    ca: "Què inclou",
    ru: "Что входит",
    zh: "包含内容",
  },
  "Formato flexible para grupos": {
    ca: "Format flexible per a grups",
    ru: "Гибкий формат для групп",
    zh: "适合团体的灵活形式",
  },
  "Jugadores y zonas": {
    ca: "Jugadors i zones",
    ru: "Игроки и зоны",
    zh: "玩家和区域",
  },
  "20 PCs en zona Standard.": {
    ca: "20 PCs a la zona Standard.",
    ru: "20 ПК в зоне Standard.",
    zh: "Standard 区 20 台电脑。",
  },
  "5 PCs en zona VIP.": {
    ca: "5 PCs a la zona VIP.",
    ru: "5 ПК в зоне VIP.",
    zh: "VIP 区 5 台电脑。",
  },
  "Posibilidad de usar una o varias zonas según disponibilidad.": {
    ca: "Possibilitat d'utilitzar una o diverses zones segons disponibilitat.",
    ru: "Можно использовать одну или несколько зон в зависимости от доступности.",
    zh: "可根据可用情况使用一个或多个区域。",
  },
  "Juegos y partidas": {
    ca: "Jocs i partides",
    ru: "Игры и матчи",
    zh: "游戏和对局",
  },
  "Valorant, Counter-Strike 2, League of Legends y Dota 2.": {
    ca: "Valorant, Counter-Strike 2, League of Legends i Dota 2.",
    ru: "Valorant, Counter-Strike 2, League of Legends и Dota 2.",
    zh: "Valorant、Counter-Strike 2、League of Legends 和 Dota 2。",
  },
  "Partidas privadas entre participantes cuando el juego lo permita.": {
    ca: "Partides privades entre participants quan el joc ho permeti.",
    ru: "Приватные матчи между участниками, если игра это позволяет.",
    zh: "在游戏允许时，可为参与者组织私人对局。",
  },
  "Disponibilidad actual confirmada por el club.": {
    ca: "Disponibilitat actual confirmada pel club.",
    ru: "Актуальная доступность подтверждается клубом.",
    zh: "当前可用情况由俱乐部确认。",
  },
  "Duración y precio": {
    ca: "Durada i preu",
    ru: "Длительность и цена",
    zh: "时长和价格",
  },
  "Sesiones por horas o paquetes de 3 y 5 horas.": {
    ca: "Sessions per hores o paquets de 3 i 5 hores.",
    ru: "Сессии по часам или пакеты на 3 и 5 часов.",
    zh: "可按小时游玩，或选择 3 小时和 5 小时套餐。",
  },
  "Tarifas Standard y VIP según zona, día y duración.": {
    ca: "Tarifes Standard i VIP segons zona, dia i durada.",
    ru: "Тарифы Standard и VIP зависят от зоны, дня и длительности.",
    zh: "Standard 和 VIP 价格取决于区域、日期和时长。",
  },
  "Condiciones de reserva y edad a confirmar con el club.": {
    ca: "Condicions de reserva i edat a confirmar amb el club.",
    ru: "Условия бронирования и возраст нужно уточнить в клубе.",
    zh: "预订条件和年龄要求请向俱乐部确认。",
  },
  "Sobre nosotros": {
    ca: "Sobre nosaltres",
    ru: "О нас",
    zh: "关于我们",
  },
  "Sobre Colizeum Barcelona": {
    ca: "Sobre Colizeum Barcelona",
    ru: "О Colizeum Barcelona",
    zh: "关于 Colizeum Barcelona",
  },
  "Colizeum Barcelona es un gaming center situado en Gran Via de les Corts Catalanes, 661, en el centro de Barcelona. El espacio está diseñado para jugadores individuales, grupos y equipos que buscan un lugar cómodo para jugar, entrenar y competir.": {
    ca: "Colizeum Barcelona és un centre gaming situat a Gran Via de les Corts Catalanes, 661, al centre de Barcelona. L'espai està dissenyat per a jugadors individuals, grups i equips que busquen un lloc còmode per jugar, entrenar i competir.",
    ru: "Colizeum Barcelona — игровой центр на Gran Via de les Corts Catalanes, 661, в центре Барселоны. Пространство создано для игроков, компаний и команд, которым нужно удобное место для игры, тренировок и соревнований.",
    zh: "Colizeum Barcelona 是位于巴塞罗那市中心 Gran Via de les Corts Catalanes 661 的电竞中心。这里适合个人玩家、团体和战队游玩、训练和比赛。",
  },
  "Nuestro gaming center": {
    ca: "El nostre centre gaming",
    ru: "Наш игровой центр",
    zh: "我们的电竞中心",
  },
  "El club cuenta con zona Standard y zona VIP, PCs de alto rendimiento, monitores de alta frecuencia y conexión rápida para partidas competitivas.": {
    ca: "El club disposa de zona Standard i zona VIP, PCs d'alt rendiment, monitors d'alta freqüència i connexió ràpida per a partides competitives.",
    ru: "В клубе есть зоны Standard и VIP, мощные ПК, мониторы с высокой частотой и быстрый интернет для соревновательных матчей.",
    zh: "俱乐部设有 Standard 区和 VIP 区，配备高性能电脑、高刷新率显示器和适合竞技游戏的高速网络。",
  },
  "También organizamos sesiones para grupos, torneos privados, cumpleaños gaming y eventos de comunidad.": {
    ca: "També organitzem sessions per a grups, tornejos privats, aniversaris gaming i esdeveniments de comunitat.",
    ru: "Мы также организуем групповые сессии, частные турниры, игровые дни рождения и комьюнити-события.",
    zh: "我们也组织团体游戏时段、私人赛事、电竞生日派对和社群活动。",
  },
  "Eventos y grupos": {
    ca: "Esdeveniments i grups",
    ru: "События и группы",
    zh: "活动和团体",
  },
  "Contacto directo": {
    ca: "Contacte directe",
    ru: "Прямая связь",
    zh: "直接联系",
  },
  "Dirección: GV. de les Corts Catalanes 661, 08010 Barcelona": {
    ca: "Adreça: GV. de les Corts Catalanes 661, 08010 Barcelona",
    ru: "Адрес: GV. de les Corts Catalanes 661, 08010 Barcelona",
    zh: "地址：GV. de les Corts Catalanes 661, 08010 Barcelona",
  },
  "Horario: todos los días de 14:00 a 08:00": {
    ca: "Horari: cada dia de 14:00 a 08:00",
    ru: "Время работы: каждый день с 14:00 до 08:00",
    zh: "营业时间：每天 14:00 至 08:00",
  },
  "Contacto y ubicación": {
    ca: "Contacte i ubicació",
    ru: "Контакты и адрес",
    zh: "联系和地址",
  },
  "Encuentra Colizeum Barcelona en Gran Via de les Corts Catalanes, 661, Barcelona. Consulta nuestros horarios o contacta con nosotros para información sobre sesiones gaming, grupos y reservas.": {
    ca: "Troba Colizeum Barcelona a Gran Via de les Corts Catalanes, 661, Barcelona. Consulta els horaris o contacta amb nosaltres per obtenir informació sobre sessions gaming, grups i reserves.",
    ru: "Colizeum Barcelona находится по адресу Gran Via de les Corts Catalanes, 661, Barcelona. Уточните часы работы или свяжитесь с нами по вопросам игровых сессий, групп и бронирования.",
    zh: "Colizeum Barcelona 位于 Gran Via de les Corts Catalanes 661, Barcelona。可查看营业时间，或联系我们了解游戏时段、团体和预订信息。",
  },
  "Código postal:": {
    ca: "Codi postal:",
    ru: "Индекс:",
    zh: "邮编：",
  },
  "todos los días de 14:00 a 08:00": {
    ca: "cada dia de 14:00 a 08:00",
    ru: "каждый день с 14:00 до 08:00",
    zh: "每天 14:00 至 08:00",
  },
  "Técnicas necesarias": {
    ca: "Tècniques necessàries",
    ru: "Необходимые технические",
    zh: "必要技术 Cookie",
  },
  "Terceros: Google Maps": {
    ca: "Tercers: Google Maps",
    ru: "Сторонние: Google Maps",
    zh: "第三方：Google Maps",
  },
  "Gestión de cookies": {
    ca: "Gestió de cookies",
    ru: "Управление cookies",
    zh: "Cookie 管理",
  },
  "Marketing": {
    ca: "Màrqueting",
    ru: "Маркетинг",
    zh: "营销",
  },
  "Cumpleaños Gaming en Barcelona": {
    ca: "Aniversaris gaming a Barcelona",
    ru: "Дни рождения gaming в Барселоне",
    zh: "巴塞罗那电竞生日",
  },
  "Sobre COLIZEUM": {
    ca: "Sobre COLIZEUM",
    ru: "О COLIZEUM",
    zh: "关于 COLIZEUM",
  },
  "Colizeum Barcelona es un gaming center situado en Gran Via de les Corts Catalanes, 661, en el centro de Barcelona. El espacio está diseñado para jugadores individuales, grupos y equipos que buscan jugar en PCs gaming de alto rendimiento.": {
    ca: "Colizeum Barcelona és un centre gaming situat a Gran Via de les Corts Catalanes, 661, al centre de Barcelona. L'espai està dissenyat per a jugadors individuals, grups i equips que busquen jugar en PCs gaming d'alt rendiment.",
    ru: "Colizeum Barcelona — игровой центр на Gran Via de les Corts Catalanes, 661, в центре Барселоны. Пространство создано для игроков, групп и команд, которым нужны мощные игровые ПК.",
    zh: "Colizeum Barcelona 是位于巴塞罗那市中心 Gran Via de les Corts Catalanes 661 的电竞中心。这里适合个人玩家、团体和战队使用高性能电竞电脑游玩。",
  },
  "Colizeum cuenta con zonas Standard y VIP, PCs gaming, monitores de alta frecuencia de actualización, conexión de alta velocidad y una selección de juegos competitivos y multijugador.": {
    ca: "Colizeum disposa de zones Standard i VIP, PCs gaming, monitors d'alta freqüència d'actualització, connexió d'alta velocitat i una selecció de jocs competitius i multijugador.",
    ru: "В Colizeum есть зоны Standard и VIP, игровые ПК, мониторы с высокой частотой обновления, быстрый интернет и подборка соревновательных и мультиплеерных игр.",
    zh: "Colizeum 设有 Standard 和 VIP 区，配备电竞电脑、高刷新率显示器、高速网络，以及多款竞技和多人游戏。",
  },
  "El club combina sesiones por horas, paquetes, juego nocturno, actividades para grupos y eventos de comunidad.": {
    ca: "El club combina sessions per hores, paquets, joc nocturn, activitats per a grups i esdeveniments de comunitat.",
    ru: "В клубе есть почасовые сессии, пакеты, ночная игра, активности для групп и комьюнити-события.",
    zh: "俱乐部提供按小时游玩、套餐、夜间时段、团体活动和社群活动。",
  },
  "Datos del negocio": {
    ca: "Dades del negoci",
    ru: "Данные компании",
    zh: "商家信息",
  },
  "Empresa:": {
    ca: "Empresa:",
    ru: "Компания:",
    zh: "公司：",
  },
  "Horario:": {
    ca: "Horari:",
    ru: "Время работы:",
    zh: "营业时间：",
  },
  "Utilizamos cookies técnicas necesarias para que la web funcione. Las cookies analíticas, de marketing y de terceros, como Google Maps, solo se cargan si das tu consentimiento.": {
    ca: "Utilitzem cookies tècniques necessàries perquè el web funcioni. Les cookies analítiques, de màrqueting i de tercers, com Google Maps, només es carreguen si dones el teu consentiment.",
    ru: "Мы используем необходимые технические cookies для работы сайта. Аналитические, маркетинговые и сторонние cookies, например Google Maps, загружаются только с вашего согласия.",
    zh: "我们使用网站运行所必需的技术 Cookie。分析、营销和 Google Maps 等第三方 Cookie 仅在你同意后加载。",
  },
};

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

const staticTextNodes = [];
const collectStaticTextNodes = () => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      const normalized = normalizeText(node.nodeValue || "");
      return staticTextTranslations[normalized] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    },
  });

  let node = walker.nextNode();
  while (node) {
    staticTextNodes.push({
      node,
      source: node.nodeValue || "",
      key: normalizeText(node.nodeValue || ""),
    });
    node = walker.nextNode();
  }
};

const applyStaticTextTranslations = (language) => {
  staticTextNodes.forEach((entry) => {
    const translated = staticTextTranslations[entry.key]?.[language];
    if (!translated || language === "es") {
      entry.node.nodeValue = entry.source;
      return;
    }

    const leading = entry.source.match(/^\s*/)?.[0] || "";
    const trailing = entry.source.match(/\s*$/)?.[0] || "";
    entry.node.nodeValue = `${leading}${translated}${trailing}`;
  });
};

const getTranslation = (language, key) => {
  return key.split(".").reduce((value, part) => value?.[part], translations[language]);
};

const ensureLanguageSwitch = () => {
  if (document.querySelector(".language-switch")) {
    return;
  }

  const headerActions = document.querySelector(".header-actions");
  if (!headerActions) {
    return;
  }

  const switcher = document.createElement("div");
  switcher.className = "language-switch";
  switcher.setAttribute("role", "group");
  switcher.setAttribute("aria-label", "Idioma");
  switcher.dataset.i18nAttr = "aria-label:language.aria";
  switcher.innerHTML = `
    <button type="button" data-lang="es" aria-pressed="true">ES</button>
    <button type="button" data-lang="ca" aria-pressed="false">CA</button>
    <button type="button" data-lang="ru" aria-pressed="false">RU</button>
    <button type="button" data-lang="zh" aria-pressed="false">中文</button>
  `;

  if (navToggle) {
    headerActions.insertBefore(switcher, navToggle);
  } else {
    headerActions.appendChild(switcher);
  }

  languageButtons = document.querySelectorAll("[data-lang]");
};

const applyLanguage = (language) => {
  const activeLanguage = translations[language] ? language : "es";

  document.documentElement.lang = activeLanguage;
  if (document.body.dataset.page === "home") {
    document.title = translations[activeLanguage].meta.title;
  }
  if (document.body.dataset.page === "home" && metaDescription) {
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

  applyStaticTextTranslations(activeLanguage);

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

ensureLanguageSwitch();
collectStaticTextNodes();

const header = document.querySelector(".site-header");
if (header) {
  const updateHeaderHeight = () => {
    document.documentElement.style.setProperty("--header-height", `${header.getBoundingClientRect().height}px`);
  };
  updateHeaderHeight();
  new ResizeObserver(updateHeaderHeight).observe(header);
}

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

  document.querySelectorAll("[data-cookie-category]").forEach((checkbox) => {
    checkbox.checked = Boolean(preferences[checkbox.dataset.cookieCategory]);
  });
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
  if (cookieOptions) {
    cookieOptions.hidden = !cookieOptions.hidden;
  }
  document.querySelector("[data-cookie-save]")?.removeAttribute("hidden");
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
  const preferences = writeCookieConsent({
    preferences: Boolean(cookiePanel?.elements.preferences.checked),
    analytics: Boolean(cookiePanel?.elements.analytics.checked || document.querySelector('[data-cookie-category="analytics"]')?.checked),
    marketing: Boolean(document.querySelector('[data-cookie-category="marketing"]')?.checked),
    thirdParty: Boolean(cookiePanel?.elements.thirdParty.checked || document.querySelector('[data-cookie-category="thirdParty"]')?.checked),
  });

  applyCookieConsent(preferences);
  closeCookieBanner();
});

const updateTermsLinks = () => {
  termsRequiredLinks.forEach((link) => {
    link.removeAttribute("aria-disabled");
  });
};

termsConsent?.addEventListener("change", updateTermsLinks);

const openWhatsAppConsent = (link) => {
  const labels = {
    es: { title: "Contactar por WhatsApp", continue: "Abrir WhatsApp", cancel: "Cancelar" },
    ca: { title: "Contactar per WhatsApp", continue: "Obrir WhatsApp", cancel: "Cancel·lar" },
    ru: { title: "Связаться в WhatsApp", continue: "Открыть WhatsApp", cancel: "Отмена" },
    zh: { title: "通过 WhatsApp 联系", continue: "打开 WhatsApp", cancel: "取消" },
  };
  const copy = labels[document.documentElement.lang] || labels.es;
  const consentLabel = termsConsent?.closest("label");
  if (!consentLabel) {
    return;
  }

  const dialog = document.createElement("dialog");
  dialog.className = "whatsapp-dialog";
  dialog.setAttribute("aria-labelledby", "whatsapp-dialog-title");
  const heading = document.createElement("h2");
  heading.id = "whatsapp-dialog-title";
  heading.textContent = copy.title;

  const label = consentLabel.cloneNode(true);
  const checkbox = label.querySelector("input");
  checkbox.id = "whatsapp-dialog-consent";
  checkbox.checked = false;
  const actions = document.createElement("div");
  actions.className = "whatsapp-dialog-actions";
  const proceed = document.createElement("a");
  proceed.className = "button primary";
  proceed.href = link.href;
  proceed.textContent = copy.continue;
  proceed.setAttribute("aria-disabled", "true");
  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.className = "button ghost";
  cancel.textContent = copy.cancel;
  cancel.addEventListener("click", () => dialog.close());
  checkbox.addEventListener("change", () => {
    proceed.setAttribute("aria-disabled", String(!checkbox.checked));
  });
  proceed.addEventListener("click", (event) => {
    if (!checkbox.checked) {
      event.preventDefault();
      checkbox.focus();
      return;
    }
    termsConsent.checked = true;
    updateTermsLinks();
    dialog.close();
  });
  dialog.addEventListener("close", () => dialog.remove(), { once: true });
  actions.append(proceed, cancel);
  dialog.append(heading, label, actions);
  document.body.append(dialog);
  dialog.showModal();
};

termsRequiredLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!termsConsent?.checked) {
      event.preventDefault();
      openWhatsAppConsent(link);
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
