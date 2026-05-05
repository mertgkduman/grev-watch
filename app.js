const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";

const CONFIG = {
  incidentPaths: ["data/incidents.json"],
  mesemPath: "data/mesem-schools.json",
  fallbackSeedPath: "data/seed-cases.json",
  defaultCenter: [39.05, 35.05],
  defaultZoom: 6,
};

const PROVINCES = [
  { key: "ADANA", name: "Adana", lat: 37.0, lng: 35.32 },
  { key: "ADIYAMAN", name: "Adıyaman", lat: 37.76, lng: 38.28 },
  { key: "AFYONKARAHISAR", name: "Afyonkarahisar", lat: 38.76, lng: 30.54 },
  { key: "AGRI", name: "Ağrı", lat: 39.72, lng: 43.05 },
  { key: "AKSARAY", name: "Aksaray", lat: 38.37, lng: 34.04 },
  { key: "AMASYA", name: "Amasya", lat: 40.65, lng: 35.83 },
  { key: "ANKARA", name: "Ankara", lat: 39.92, lng: 32.85 },
  { key: "ANTALYA", name: "Antalya", lat: 37.07, lng: 30.69 },
  { key: "ARDAHAN", name: "Ardahan", lat: 41.11, lng: 42.7 },
  { key: "ARTVIN", name: "Artvin", lat: 41.18, lng: 41.82 },
  { key: "AYDIN", name: "Aydın", lat: 37.84, lng: 28.0 },
  { key: "BALIKESIR", name: "Balıkesir", lat: 39.64, lng: 27.88 },
  { key: "BARTIN", name: "Bartın", lat: 41.64, lng: 32.34 },
  { key: "BATMAN", name: "Batman", lat: 37.88, lng: 41.13 },
  { key: "BAYBURT", name: "Bayburt", lat: 40.25, lng: 40.23 },
  { key: "BILECIK", name: "Bilecik", lat: 40.15, lng: 29.98 },
  { key: "BINGOL", name: "Bingöl", lat: 38.88, lng: 40.5 },
  { key: "BITLIS", name: "Bitlis", lat: 38.4, lng: 42.11 },
  { key: "BOLU", name: "Bolu", lat: 40.74, lng: 31.61 },
  { key: "BURDUR", name: "Burdur", lat: 37.72, lng: 30.29 },
  { key: "BURSA", name: "Bursa", lat: 40.18, lng: 29.06 },
  { key: "CANAKKALE", name: "Çanakkale", lat: 40.15, lng: 26.41 },
  { key: "CANKIRI", name: "Çankırı", lat: 40.6, lng: 33.62 },
  { key: "CORUM", name: "Çorum", lat: 40.55, lng: 34.96 },
  { key: "DENIZLI", name: "Denizli", lat: 37.78, lng: 29.09 },
  { key: "DIYARBAKIR", name: "Diyarbakır", lat: 37.91, lng: 40.22 },
  { key: "DUZCE", name: "Düzce", lat: 40.84, lng: 31.16 },
  { key: "EDIRNE", name: "Edirne", lat: 41.68, lng: 26.56 },
  { key: "ELAZIG", name: "Elazığ", lat: 38.68, lng: 39.22 },
  { key: "ERZINCAN", name: "Erzincan", lat: 39.75, lng: 39.5 },
  { key: "ERZURUM", name: "Erzurum", lat: 39.9, lng: 41.27 },
  { key: "ESKISEHIR", name: "Eskişehir", lat: 39.78, lng: 30.52 },
  { key: "GAZIANTEP", name: "Gaziantep", lat: 37.06, lng: 37.38 },
  { key: "GIRESUN", name: "Giresun", lat: 40.91, lng: 38.39 },
  { key: "GUMUSHANE", name: "Gümüşhane", lat: 40.46, lng: 39.48 },
  { key: "HAKKARI", name: "Hakkari", lat: 37.58, lng: 43.74 },
  { key: "HATAY", name: "Hatay", lat: 36.4, lng: 36.35 },
  { key: "IGDIR", name: "Iğdır", lat: 39.89, lng: 44.05 },
  { key: "ISPARTA", name: "Isparta", lat: 37.76, lng: 30.55 },
  { key: "ISTANBUL", name: "İstanbul", lat: 41.01, lng: 28.98 },
  { key: "IZMIR", name: "İzmir", lat: 38.42, lng: 27.14 },
  { key: "KAHRAMANMARAS", name: "Kahramanmaraş", lat: 37.58, lng: 36.93 },
  { key: "KARABUK", name: "Karabük", lat: 41.2, lng: 32.63 },
  { key: "KARAMAN", name: "Karaman", lat: 37.18, lng: 33.22 },
  { key: "KARS", name: "Kars", lat: 40.6, lng: 43.1 },
  { key: "KASTAMONU", name: "Kastamonu", lat: 41.38, lng: 33.78 },
  { key: "KAYSERI", name: "Kayseri", lat: 38.72, lng: 35.48 },
  { key: "KILIS", name: "Kilis", lat: 36.72, lng: 37.12 },
  { key: "KIRIKKALE", name: "Kırıkkale", lat: 39.85, lng: 33.52 },
  { key: "KIRKLARELI", name: "Kırklareli", lat: 41.73, lng: 27.22 },
  { key: "KIRSEHIR", name: "Kırşehir", lat: 39.15, lng: 34.16 },
  { key: "KOCAELI", name: "Kocaeli", lat: 40.77, lng: 29.94 },
  { key: "KONYA", name: "Konya", lat: 37.87, lng: 32.48 },
  { key: "KUTAHYA", name: "Kütahya", lat: 39.42, lng: 29.98 },
  { key: "MALATYA", name: "Malatya", lat: 38.35, lng: 38.31 },
  { key: "MANISA", name: "Manisa", lat: 38.61, lng: 27.43 },
  { key: "MARDIN", name: "Mardin", lat: 37.31, lng: 40.74 },
  { key: "MERSIN", name: "Mersin", lat: 36.8, lng: 34.63 },
  { key: "MUGLA", name: "Muğla", lat: 37.22, lng: 28.36 },
  { key: "MUS", name: "Muş", lat: 38.73, lng: 41.49 },
  { key: "NEVSEHIR", name: "Nevşehir", lat: 38.62, lng: 34.71 },
  { key: "NIGDE", name: "Niğde", lat: 37.97, lng: 34.68 },
  { key: "ORDU", name: "Ordu", lat: 40.98, lng: 37.88 },
  { key: "OSMANIYE", name: "Osmaniye", lat: 37.07, lng: 36.25 },
  { key: "RIZE", name: "Rize", lat: 41.03, lng: 40.52 },
  { key: "SAKARYA", name: "Sakarya", lat: 40.78, lng: 30.4 },
  { key: "SAMSUN", name: "Samsun", lat: 41.29, lng: 36.33 },
  { key: "SANLIURFA", name: "Şanlıurfa", lat: 37.16, lng: 38.79 },
  { key: "SIIRT", name: "Siirt", lat: 37.93, lng: 41.94 },
  { key: "SINOP", name: "Sinop", lat: 42.03, lng: 35.15 },
  { key: "SIRNAK", name: "Şırnak", lat: 37.52, lng: 42.46 },
  { key: "SIVAS", name: "Sivas", lat: 39.75, lng: 37.02 },
  { key: "TEKIRDAG", name: "Tekirdağ", lat: 40.98, lng: 27.51 },
  { key: "TOKAT", name: "Tokat", lat: 40.31, lng: 36.55 },
  { key: "TRABZON", name: "Trabzon", lat: 41.0, lng: 39.72 },
  { key: "TUNCELI", name: "Tunceli", lat: 39.11, lng: 39.55 },
  { key: "USAK", name: "Uşak", lat: 38.68, lng: 29.41 },
  { key: "VAN", name: "Van", lat: 38.5, lng: 43.37 },
  { key: "YALOVA", name: "Yalova", lat: 40.65, lng: 29.27 },
  { key: "YOZGAT", name: "Yozgat", lat: 39.82, lng: 34.81 },
  { key: "ZONGULDAK", name: "Zonguldak", lat: 41.45, lng: 31.79 },
];

const PROVINCE_BY_KEY = Object.fromEntries(PROVINCES.map((item) => [item.key, item]));
const PROVINCE_BY_NAME = Object.fromEntries(PROVINCES.map((item) => [item.name, item]));

const RECORD_TYPES = ["worker_death", "strike", "labor_retaliation", "action_call", "mesem_school", "union_labor_arrest"];
const ACTION_TYPES = ["legal_strike", "fiili_wildcat", "protest", "bargaining_dispute", "solidarity_action"];
const LAYER_ORDER = [
  "worker_death_recent",
  "strike_ongoing",
  "labor_retaliation",
  "strike_ended",
  "action_call_upcoming",
  "action_call_happened",
  "union_arrest_current",
  "union_arrest_released",
  "strike_decision",
  "strike_postponed",
  "mesem_school",
];
const DEFAULT_LAYERS = ["worker_death_recent", "strike_ongoing", "action_call_upcoming", "union_arrest_current"];
const QUICK_LAYERS = ["worker_death_recent", "strike_ongoing", "action_call_upcoming", "union_arrest_current"];
const DATE_RANGES = ["all", "last_30_days", "last_3_months", "last_6_months"];
const MONTH_RANGE_PREFIX = "month:";
const MONTH_RANGE_START = "2025-01";

const LAYER_COLORS = {
  worker_death_recent: "#111111",
  strike_ongoing: "#d72d2d",
  labor_retaliation: "#9f1239",
  strike_ended: "#2f8f4e",
  action_call_upcoming: "#1d4ed8",
  action_call_happened: "#60a5fa",
  strike_decision: "#f7f4ea",
  strike_postponed: "#7c6f64",
  mesem_school: "#e3b505",
  union_arrest_current: "#e76f00",
  union_arrest_released: "#7c6f64",
};

const LANGUAGES = ["tr", "en", "kmr"];
const LANGUAGE_META = {
  tr: { label: "TR", aria: "Türkçe", htmlLang: "tr", locale: "tr-TR" },
  en: { label: "EN", aria: "English", htmlLang: "en", locale: "en" },
  kmr: { label: "KMR", aria: "Kurdish (Kurmanji / Northern Kurdish)", htmlLang: "kmr-Latn", locale: "kmr-Latn-TR" },
};
const KMR_MONTHS = ["rêbendanê", "reşemiyê", "adarê", "avrêlê", "gulana", "pûşperê", "tîrmehê", "gelawêjê", "rezberê", "kewçêrê", "sermawezê", "berfanbarê"];

const COPY = {
  tr: {
    nav: { filters: "Filtre", listAll: "Listele", methodology: "Yöntem", sources: "Kaynaklar", submit: "+ Bildir" },
    language: { preference: "Dil tercihi" },
    common: { cancel: "Vazgeç", close: "Kapat", notSpecified: "Belirtilmedi", source: "Kaynak" },
    stats: { label: "Genel görünüm", total: "Toplam kayıt", deaths: "İş cinayeti", strikes: "Süren grev", arrests: "Tutuklu emekçi" },
    filters: {
      panel: "Filtreler",
      panelTitle: "Kayıtları daralt",
      search: "Ara",
      searchPlaceholder: "İşveren, sendika, okul, il...",
      dateRange: "Tarih aralığı",
      months: "Aylar",
      province: "İl",
      sector: "Sektör",
      dateRanges: {
        all: "Tüm tarihler",
        last_30_days: "Son 30 gün",
        last_3_months: "Son 3 ay",
        last_6_months: "Son 6 ay",
      },
      allProvinces: "Tüm iller",
      allSectors: "Tüm sektörler",
      layers: "Katmanlar",
      actionType: "Grev / eylem türü",
    },
    map: { results: "sonuç" },
    empty: {
      title: "Haritadan bir kayıt seçin",
      text: "Varsayılan harita seçili tarih aralığındaki iş cinayetlerini, süren grevleri, yaklaşan eylem çağrılarını ve güncel emek tutuklamalarını gösterir.",
      context: "Bağlam kaynakları",
    },
    list: {
      label: "Kayıt listesi",
      title: "Filtredeki kayıtlar",
      countLabel: "kayıt",
      empty: "Bu filtrelerde kayıt yok.",
    },
    recordType: {
      worker_death: "İş cinayeti",
      strike: "Grev / işçi eylemi",
      labor_retaliation: "Emek misillemesi",
      action_call: "Eylem / dayanışma çağrısı",
      mesem_school: "MESEM okulu",
      union_labor_arrest: "Emek tutuklaması",
    },
    status: {
      fatality_recorded: "İş cinayeti kaydı",
      decision_taken: "Grev kararı alındı",
      ongoing: "Sürüyor",
      ended: "Sona erdi",
      postponed_banned: "Ertelendi / yasaklandı",
      labor_retaliation_reported: "Emek misillemesi bildirildi",
      labor_retaliation_reversed: "Yargıdan döndü",
      action_call_upcoming: "Çağrı",
      action_call_happened: "Gerçekleşti",
      active_school: "Aktif okul",
      currently_arrested: "Tutuklu",
      released: "Tahliye",
      unknown: "Bilinmiyor",
    },
    layer: {
      worker_death_recent: "İş cinayeti",
      strike_ongoing: "Süren grev",
      labor_retaliation: "Emek misillemesi",
      strike_ended: "Sona eren grev",
      action_call_upcoming: "Eylem ve dayanışma çağrısı",
      action_call_happened: "Gerçekleşen eylem",
      strike_decision: "Grev kararı",
      strike_postponed: "Ertelenen / yasaklanan grev",
      mesem_school: "MESEM okulu",
      union_arrest_current: "Tutuklu",
      union_arrest_released: "Tahliye",
    },
    quickLayer: {
      worker_death_recent: "İş cinayeti",
      strike_ongoing: "Grev",
      action_call_upcoming: "Çağrı",
      union_arrest_current: "Tutuklu",
    },
    actionType: {
      legal_strike: "Yasal grev",
      fiili_wildcat: "Fiili / wildcat",
      protest: "Protesto",
      bargaining_dispute: "TİS / pazarlık uyuşmazlığı",
      solidarity_action: "Dayanışma eylemi",
    },
    detail: {
      summary: "Özet",
      workerName: "İşçi",
      age: "Yaş",
      employer: "İşveren / kurum",
      sector: "Sektör",
      date: "Tarih",
      cause: "Ölüm nedeni / olay",
      fatalityCount: "İş cinayeti sayısı",
      fatalities: "iş cinayeti",
      legalStatus: "Hukuki süreç",
      union: "Sendika / örgüt",
      actionType: "Eylem türü",
      retaliationType: "Misilleme türü",
      workers: "Yaklaşık katılımcı",
      demands: "Talepler / konular",
      decisionDate: "Karar tarihi",
      eventDate: "Eylem tarihi",
      startDate: "Başlangıç",
      endDate: "Bitiş",
      schoolName: "Okul adı",
      institutionCode: "Kurum kodu",
      activeDate: "Bilinen aktiflik",
      linkedIncidents: "Bağlı olay sayısı",
      person: "Kişi / grup",
      role: "Görev / rol",
      detentionDate: "Tutuklama tarihi",
      custodyStatus: "Mevcut durum",
      accusation: "Suçlama / hukuki durum",
      locations: "Konumlar",
      timeline: "Zaman çizelgesi",
      sources: "Kaynaklar",
      lastVerified: "Son teyit",
      geocode: "Konum kesinliği",
    },
    geocodePrecision: {
      exact: "tam koordinat",
      venue_approx: "miting yeri yaklaşık",
      district_centroid: "ilçe merkezi",
      province_centroid: "il merkezi",
      unknown: "bilinmiyor",
    },
    submit: {
      label: "İnceleme kuyruğu",
      title: "Eylem veya kaynak bildir",
      recordType: "Kayıt türü",
      province: "İl",
      caseTitle: "Başlık",
      caseTitlePlaceholder: "Örn. Özel İtalyan Lisesi öğretmenleri grevde",
      summary: "Kısa özet",
      summaryPlaceholder: "Ne oldu, kimler dahil, hangi talep veya hak ihlali var?",
      location: "Konum adı",
      locationPlaceholder: "Fabrika, okul, adliye, meydan...",
      date: "Tarih",
      sourceUrl: "Kaynak URL",
      sourceTitle: "Kaynak başlığı",
      contact: "İletişim",
      contactPlaceholder: "İsteğe bağlı e-posta",
      note: "Bildirimler editör incelemesinden sonra yayımlanır. Sosyal medya veya tanık aktarımı tek başına doğrulanmış kayıt sayılmaz.",
      send: "İncelemeye gönder",
      successTitle: "Bildirim alındı",
      successLocal: "Supabase yapılandırılmadığı için bildirim bu tarayıcıda demo kuyruğuna kaydedildi.",
      successRemote: "Bildirim Supabase inceleme kuyruğuna kaydedildi.",
      missing: "Kayıt türü, başlık, özet, il ve kaynak URL zorunludur.",
      badUrl: "Kaynak URL http veya https ile başlamalıdır.",
      badCoords: "Koordinatlar birlikte girilmeli ve sayı olmalıdır.",
    },
    methodology: {
      label: "Yöntem",
      title: "Kayıt ve doğrulama ilkeleri",
      p1: "GrevTakip; grev, fiili eylem, iş cinayeti, MESEM okulu ve emek örgütlerine yönelik tutuklama kayıtlarını tek haritada gösterir. Bir nokta bir konum örneğidir; aynı vaka birden çok konuma sahip olabilir.",
      p2: "Grevler için “grev kararı alındı”, “sürüyor”, “sona erdi” ve “ertelendi/yasaklandı” ayrıdır. İş cinayeti, MESEM okulu ve tutuklama kayıtları kendi durum etiketlerini kullanır.",
      p3: "EÇT ve Cornell yaklaşımından uyarlanan kaynak disiplini kullanılır: sendika açıklamaları, emek haberleri, resmi belgeler ve araştırma raporları güçlü kaynak sayılır; sosyal medya ve tanık aktarımı ek teyit ister.",
    },
    sources: { label: "Kaynaklar", title: "Başlangıç kaynak havuzu" },
  },
  en: {
    nav: { filters: "Filter", listAll: "List", methodology: "Method", sources: "Sources", submit: "+ Report" },
    language: { preference: "Language preference" },
    common: { cancel: "Cancel", close: "Close", notSpecified: "Not specified", source: "Source" },
    stats: { label: "Overview", total: "Total records", deaths: "Workplace killings", strikes: "Ongoing strikes", arrests: "Jailed labor figures" },
    filters: {
      panel: "Filters",
      panelTitle: "Narrow records",
      search: "Search",
      searchPlaceholder: "Employer, union, school, province...",
      dateRange: "Date range",
      months: "Months",
      province: "Province",
      sector: "Sector",
      dateRanges: {
        all: "All dates",
        last_30_days: "Last 30 days",
        last_3_months: "Last 3 months",
        last_6_months: "Last 6 months",
      },
      allProvinces: "All provinces",
      allSectors: "All sectors",
      layers: "Layers",
      actionType: "Strike / action type",
    },
    map: { results: "results" },
    empty: {
      title: "Select a record on the map",
      text: "By default the map shows workplace killings in the selected date range, ongoing strikes, upcoming action calls, and current labor arrests.",
      context: "Context sources",
    },
    list: {
      label: "Record list",
      title: "Filtered records",
      countLabel: "records",
      empty: "No records match these filters.",
    },
    recordType: {
      worker_death: "Workplace killing",
      strike: "Strike / labor action",
      labor_retaliation: "Labor retaliation",
      action_call: "Action / solidarity call",
      mesem_school: "MESEM school",
      union_labor_arrest: "Labor arrest",
    },
    status: {
      fatality_recorded: "Workplace killing recorded",
      decision_taken: "Strike decision taken",
      ongoing: "Ongoing",
      ended: "Ended",
      postponed_banned: "Postponed / banned",
      labor_retaliation_reported: "Labor retaliation reported",
      labor_retaliation_reversed: "Blocked by court",
      action_call_upcoming: "Call",
      action_call_happened: "Held",
      active_school: "Active school",
      currently_arrested: "Currently jailed",
      released: "Released",
      unknown: "Unknown",
    },
    layer: {
      worker_death_recent: "Workplace killing",
      strike_ongoing: "Ongoing strike",
      labor_retaliation: "Labor retaliation",
      strike_ended: "Ended strike",
      action_call_upcoming: "Action / solidarity call",
      action_call_happened: "Action held",
      strike_decision: "Strike decision",
      strike_postponed: "Postponed / banned strike",
      mesem_school: "MESEM school",
      union_arrest_current: "Jailed",
      union_arrest_released: "Released",
    },
    quickLayer: {
      worker_death_recent: "Killings",
      strike_ongoing: "Strikes",
      action_call_upcoming: "Calls",
      union_arrest_current: "Jailed",
    },
    actionType: {
      legal_strike: "Legal strike",
      fiili_wildcat: "Wildcat / de facto",
      protest: "Protest",
      bargaining_dispute: "Bargaining dispute",
      solidarity_action: "Solidarity action",
    },
    detail: {
      summary: "Summary",
      workerName: "Worker",
      age: "Age",
      employer: "Employer / institution",
      sector: "Sector",
      date: "Date",
      cause: "Cause / incident",
      fatalityCount: "Fatalities",
      fatalities: "fatalities",
      legalStatus: "Legal process",
      union: "Union / organization",
      actionType: "Action type",
      retaliationType: "Retaliation type",
      workers: "Approx. participants",
      demands: "Demands / issues",
      decisionDate: "Decision date",
      eventDate: "Action date",
      startDate: "Start",
      endDate: "End",
      schoolName: "School name",
      institutionCode: "Institution code",
      activeDate: "Known active",
      linkedIncidents: "Linked incidents",
      person: "Person / group",
      role: "Role",
      detentionDate: "Arrest date",
      custodyStatus: "Current status",
      accusation: "Accusation / legal status",
      locations: "Locations",
      timeline: "Timeline",
      sources: "Sources",
      lastVerified: "Last verified",
      geocode: "Geocode precision",
    },
    geocodePrecision: {
      exact: "exact",
      venue_approx: "approx. venue",
      district_centroid: "district centroid",
      province_centroid: "province centroid",
      unknown: "unknown",
    },
    submit: {
      label: "Review queue",
      title: "Report an action or source",
      recordType: "Record type",
      province: "Province",
      caseTitle: "Title",
      caseTitlePlaceholder: "E.g. Italian High School teachers are on strike",
      summary: "Short summary",
      summaryPlaceholder: "What happened, who is involved, what demand or rights violation is at issue?",
      location: "Location name",
      locationPlaceholder: "Factory, school, courthouse, square...",
      date: "Date",
      sourceUrl: "Source URL",
      sourceTitle: "Source title",
      contact: "Contact",
      contactPlaceholder: "Optional email",
      note: "Reports are published after editorial review. Social media or witness accounts alone are not treated as verified records.",
      send: "Send for review",
      successTitle: "Report received",
      successLocal: "Supabase is not configured, so the report was saved to this browser's demo queue.",
      successRemote: "The report was saved to the Supabase review queue.",
      missing: "Record type, title, summary, province, and source URL are required.",
      badUrl: "The source URL must start with http or https.",
      badCoords: "Coordinates must be entered together and must be numbers.",
    },
    methodology: {
      label: "Method",
      title: "Recording and verification rules",
      p1: "GrevTakip maps strikes, de facto labor actions, workplace killings, MESEM schools, and labor-organization arrests in one tracker. One dot is one mapped location instance; one case can have multiple locations.",
      p2: "Strike records distinguish decision taken, ongoing, ended, and postponed / banned. Workplace killing, MESEM school, and arrest records use their own status labels.",
      p3: "The source discipline adapts EÇT and Cornell practice: union statements, labor news, official documents, and research reports are stronger sources; social media and witness reports need corroboration.",
    },
    sources: { label: "Sources", title: "Initial source pool" },
  },
  kmr: {
    nav: { filters: "Fîltre", listAll: "Lîste", methodology: "Rêbaz", sources: "Çavkanî", submit: "+ Ragihîne" },
    language: { preference: "Vebijarka zimanê" },
    common: { cancel: "Betal bike", close: "Bigire", notSpecified: "Nehatiye destnîşankirin", source: "Çavkanî" },
    stats: { label: "Dîtina giştî", total: "Hemû tomar", deaths: "Kuştinên kar", strikes: "Grevên didomin", arrests: "Kesên kedê yên girtî" },
    filters: {
      panel: "Fîltre",
      panelTitle: "Tomaran teng bike",
      search: "Bigere",
      searchPlaceholder: "Kardêr, sendîka, dibistan, parêzgeh...",
      dateRange: "Navbera dîrokan",
      months: "Meh",
      province: "Parêzgeh",
      sector: "Sektor",
      dateRanges: {
        all: "Hemû dîrok",
        last_30_days: "30 rojên dawî",
        last_3_months: "3 mehên dawî",
        last_6_months: "6 mehên dawî",
      },
      allProvinces: "Hemû parêzgeh",
      allSectors: "Hemû sektor",
      layers: "Qat",
      actionType: "Cureyê grevê / çalakiyê",
    },
    map: { results: "encam" },
    empty: {
      title: "Ji nexşeyê tomarek hilbijêre",
      text: "Nexşeya standard kuştinên kar ên di navbera dîrokên hilbijartî de, grevên didomin, bangên çalakiyê yên nêzîk û girtinên heyî yên kedê nîşan dide.",
      context: "Çavkaniyên têkildar",
    },
    list: {
      label: "Lîsteya tomaran",
      title: "Tomarên fîltrekirî",
      countLabel: "tomar",
      empty: "Di van fîltreyên de tomar tune.",
    },
    recordType: {
      worker_death: "Kuştina kar",
      strike: "Grev / çalakiya karkeran",
      labor_retaliation: "Bersiva cezayî ya li dijî kedê",
      action_call: "Bangewaziya çalakî / piştgiriyê",
      mesem_school: "Dibistana MESEM",
      union_labor_arrest: "Girtina kedê",
    },
    status: {
      fatality_recorded: "Tomara kuştina kar",
      decision_taken: "Biryarê grevê hat girtin",
      ongoing: "Didome",
      ended: "Bi dawî bû",
      postponed_banned: "Hat paşxistin / qedexekirin",
      labor_retaliation_reported: "Bersiva cezayî ya li dijî kedê hate ragihandin",
      labor_retaliation_reversed: "Ji aliyê dadgehê ve hate vegerandin",
      action_call_upcoming: "Bang",
      action_call_happened: "Pêk hat",
      active_school: "Dibistana çalak",
      currently_arrested: "Girtî",
      released: "Berdan",
      unknown: "Nayê zanîn",
    },
    layer: {
      worker_death_recent: "Kuştina kar",
      strike_ongoing: "Grevê didome",
      labor_retaliation: "Bersiva cezayî ya li dijî kedê",
      strike_ended: "Grevê bi dawî bû",
      action_call_upcoming: "Bangewaziya çalakî / piştgiriyê",
      action_call_happened: "Çalakiya pêkhatî",
      strike_decision: "Biryarê grevê",
      strike_postponed: "Grevê hatiye paşxistin / qedexekirin",
      mesem_school: "Dibistana MESEM",
      union_arrest_current: "Girtî",
      union_arrest_released: "Berdan",
    },
    quickLayer: {
      worker_death_recent: "Kuştin",
      strike_ongoing: "Grev",
      action_call_upcoming: "Bang",
      union_arrest_current: "Girtî",
    },
    actionType: {
      legal_strike: "Grevê qanûnî",
      fiili_wildcat: "Fiilî / bê biryara fermî",
      protest: "Xwepêşandan",
      bargaining_dispute: "Nakokiya peymana komî / danûstandinê",
      solidarity_action: "Çalakiya piştgiriyê",
    },
    detail: {
      summary: "Kurte",
      workerName: "Karker",
      age: "Temen",
      employer: "Kardêr / sazî",
      sector: "Sektor",
      date: "Dîrok",
      cause: "Sedem / bûyer",
      fatalityCount: "Hejmara kuştinên kar",
      fatalities: "kuştina kar",
      legalStatus: "Pêvajoya hiqûqî",
      union: "Sendîka / rêxistin",
      actionType: "Cureyê çalakiyê",
      retaliationType: "Cureyê bersiva cezayî",
      workers: "Beşdarên nêzîkî",
      demands: "Daxwaz / mijar",
      decisionDate: "Dîroka biryarê",
      eventDate: "Dîroka çalakiyê",
      startDate: "Destpêk",
      endDate: "Dawî",
      schoolName: "Navê dibistanê",
      institutionCode: "Koda sazîyê",
      activeDate: "Çalakiya tê zanîn",
      linkedIncidents: "Hejmara bûyerên girêdayî",
      person: "Kes / kom",
      role: "Rol",
      detentionDate: "Dîroka girtinê",
      custodyStatus: "Rewşa heyî",
      accusation: "Tawanbarî / rewşa hiqûqî",
      locations: "Cih",
      timeline: "Rêza demê",
      sources: "Çavkanî",
      lastVerified: "Teyîda dawî",
      geocode: "Rastiya cihê",
    },
    geocodePrecision: {
      exact: "koordinata rast",
      venue_approx: "cihê civînê nêzîkî",
      district_centroid: "navenda navçeyê",
      province_centroid: "navenda parêzgehê",
      unknown: "nayê zanîn",
    },
    submit: {
      label: "Rêza nirxandinê",
      title: "Çalakî an çavkaniyê ragihîne",
      recordType: "Cureyê tomarê",
      province: "Parêzgeh",
      caseTitle: "Sernav",
      caseTitlePlaceholder: "Mînak: Mamosteyên Lîseya Îtalyan di grevê de ne",
      summary: "Kurteya kin",
      summaryPlaceholder: "Çi qewimî, kî tê de ye, kîjan daxwaz an binpêkirina mafê heye?",
      location: "Navê cihê",
      locationPlaceholder: "Fabrîka, dibistan, dadgeh, meydan...",
      date: "Dîrok",
      sourceUrl: "URL ya çavkaniyê",
      sourceTitle: "Sernavê çavkaniyê",
      contact: "Têkilî",
      contactPlaceholder: "E-nameya bijarte",
      note: "Ragihandin piştî nirxandina edîtorî tên weşandin. Medyaya civakî an vegotina şahidan bi tena serê xwe wek tomara piştrastkirî nayê qebûlkirin.",
      send: "Ji bo nirxandinê bişîne",
      successTitle: "Ragihandin hate wergirtin",
      successLocal: "Ji ber ku Supabase nehatiye saz kirin, ragihandin di vê gerokê de di rêza demo de hate tomarkirin.",
      successRemote: "Ragihandin di rêza nirxandina Supabase de hate tomarkirin.",
      missing: "Cureyê tomarê, sernav, kurte, parêzgeh û URL ya çavkaniyê pêwîst in.",
      badUrl: "URL ya çavkaniyê divê bi http an https dest pê bike.",
      badCoords: "Koordînat divê bi hev re bên nivîsîn û hejmar bin.",
    },
    methodology: {
      label: "Rêbaz",
      title: "Rêgezên tomar û piştrastkirinê",
      p1: "GrevTakip grev, çalakiyên fiilî yên karkeran, kuştinên kar, dibistanên MESEM û girtinên li dijî rêxistinên kedê di yek şopînerê nexşeyê de nîşan dide. Her xal mînaka cihê nexşekirî ye; yek doz dikare çend cihan hebîne.",
      p2: "Tomarên grevê rewşên biryar hate girtin, didome, bi dawî bû û hate paşxistin / qedexekirin ji hev cuda dikin. Tomarên kuştina kar, dibistana MESEM û girtinê etîketên rewşa xwe bi kar tînin.",
      p3: "Disiplîna çavkaniyê ji pratîka EÇT û Cornellê tê adaptekirin: daxuyaniyên sendîkayê, nûçeyên kedê, belgeyên fermî û raporên lêkolînê wek çavkaniyên bihêz tên dîtin; medyaya civakî û şahidî pêdivî bi piştrastkirina zêde hene.",
    },
    sources: { label: "Çavkanî", title: "Hewza destpêkê ya çavkaniyan" },
  },
};

const DATA_COPY = {
  en: {
    joiner: " · ",
    listSeparator: ", ",
    record: {
      workplaceKillingTitle: "{name} died in a workplace incident",
      workplaceKillingTitleUnknown: "Workplace killing recorded",
      mesemTitle: "Vocational Education Center",
      strikeTitle: "{subject} workers' action",
      actionCallTitle: "{subject} action call",
      retaliationTitle: "Labor retaliation at {subject}",
      arrestTitle: "{subject} arrested",
      workplaceKillingSummary: "{name} died{date}{place}{employer}. Reported cause / incident: {cause}.{legal}",
      mesemSummary: "This school appears as a Vocational Education Center in the MEB institution list. Coordinates are approximate at province level until exact school coordinates are reviewed.",
      strikeSummary: "This record tracks a labor action{subject}{place}. Current status: {status}.{participants}{dates}{demands}",
      actionCallSummary: "This record tracks an action or solidarity call{subject}{place}.{dates}{demands}",
      retaliationSummary: "This record tracks reported labor retaliation{subject}{place}. Retaliation type: {type}.{legal}",
      arrestSummary: "This record tracks the arrest or detention of {subject}.{organization}{role}{legal}",
      participants: " Participants: {count}.",
      dates: " Dates: {dates}.",
      demands: " Demands / issues: {demands}.",
      legal: " Legal status: {text}.",
      organization: " Organization: {text}.",
      role: " Role: {text}.",
    },
    timeline: {
      fatality_recorded: "The workplace killing was recorded from public sources.",
      decision_taken: "The strike decision was announced.",
      ongoing: "The action was reported as ongoing.",
      ended: "The action was reported as ended.",
      postponed_banned: "The strike was reported as postponed or banned.",
      labor_retaliation_reported: "Retaliation against the labor action was reported.",
      labor_retaliation_reversed: "A court or authority reversed the retaliation measure.",
      action_call_upcoming: "The action call was announced.",
      action_call_happened: "The action was reported as held.",
      active_school: "Compiled from the MEB institution list.",
      currently_arrested: "The person or group was reported as jailed.",
      released: "The person or group was reported as released.",
      unknown: "Timeline update recorded.",
    },
    exact: {
      "1 Mayıs Birlik, Mücadele ve Dayanışma Günü": "May Day for Unity, Struggle and Solidarity",
      "Ağır kargoların kuryelere zorla taşıtılmaması": "Stop forcing couriers to carry heavy cargo",
      "Banka promosyonlarının eksiksiz ödenmesi": "Full payment of bank promotions",
      "Basın özgürlüğü": "Press freedom",
      "Baskı ve tehditlerin son bulması": "End pressure and threats",
      "Çalışma koşulları": "Working conditions",
      "Doruk Madencilik işçileriyle dayanışma": "Solidarity with Doruk Madencilik workers",
      "Düşük zam dayatmasının geri çekilmesi": "Withdrawal of the imposed low raise",
      "Düşük zam teklifinin geri çekilmesi": "Withdrawal of the low wage offer",
      "Emek ve dayanışma temalı kültür etkinliği": "Labor and solidarity themed cultural event",
      "Emek, demokrasi, barış ve adalet talepleri": "Demands for labor, democracy, peace, and justice",
      "Enflasyon farklarının yatırılması": "Payment of inflation differences",
      "Gasp edilen yasal hakların verilmesi": "Restoration of seized legal rights",
      "Gazetecilerin sendikal hakları": "Journalists' union rights",
      "Geciken maaşların ödenmesi": "Payment of delayed salaries",
      "Geriye dönük alacakların ödenmesi": "Payment of retroactive receivables",
      "Grev kırıcılığı niteliğindeki geçici öğretmen görevlendirmelerinin durdurulması": "Stop temporary teacher assignments that function as strikebreaking",
      "Haftalık 40 saatin 5 güne bölünmesi": "Spread the 40-hour week over 5 days",
      "Hak gasplarına ve baskılara son verilmesi": "End rights violations and pressure",
      "İki yıllık sözleşme": "Two-year contract",
      "İlk altı ay için daha yüksek ücret artışı": "Higher wage increase for the first six months",
      "İnsanca yaşayacak ücret": "A wage fit for a decent life",
      "İSİG kurallarına uygun güvenli çalışma ortamı": "Safe work environment compliant with occupational safety rules",
      "İş durduran işçilerin işten atılmaması": "No dismissal of workers who stopped work",
      "İşçi hakları ve toplumsal mücadele görünürlüğü": "Visibility for workers' rights and social struggles",
      "İşe iade veya tazminat haklarının güvenceye alınması": "Guarantee reinstatement or compensation rights",
      "İşkolu değişmeden tüm taşeron depo işçilerinin kadroya alınması": "Bring all subcontracted warehouse workers onto staff without changing their sector classification",
      "İşten çıkarılan emekçilerin haklarının korunması": "Protect the rights of dismissed workers",
      "İşten çıkarılan işçiler için işe dönüş veya tazminat güvencesi": "Guarantee return to work or compensation for dismissed workers",
      "İşten çıkarılan işçilerin işe iadesi": "Reinstatement of dismissed workers",
      "Kazanılmış haklara yönelik karşı tekliflerin geri çekilmesi": "Withdrawal of counteroffers against acquired rights",
      "Kıdem ve ihbar tazminatlarının ödenmesi": "Payment of severance and notice compensation",
      "Kod 22 ve benzeri işten çıkarma kodlarının kaldırılması": "Remove Code 22 and similar dismissal codes",
      "Kolluk baskısı ve grev kırıcılığının son bulması": "End law-enforcement pressure and strikebreaking",
      "Madenin kamulaştırılması ve iş güvencesi": "Nationalization of the mine and job security",
      "Net yüzde 50 zam": "Net 50% raise",
      "Ödenmeyen maaşların ödenmesi": "Payment of unpaid salaries",
      "Ödenmeyen maaşların yatırılması": "Payment of unpaid salaries",
      "Ödenmeyen ücret, tazminat ve özlük haklarının ödenmesi": "Payment of unpaid wages, compensation, and employment rights",
      "Ödenmeyen ücretlerin ödenmesi": "Payment of unpaid wages",
      "Paket başı ücret ve ödeme sisteminin iyileştirilmesi": "Improve per-package pay and the payment system",
      "Pazar günü çalışma zorunluluğunun kaldırılması": "End mandatory Sunday work",
      "Sendika hakkının tanınması": "Recognition of the right to unionize",
      "Sendikal baskıların ve eylem yasaklarının son bulması": "End anti-union pressure and action bans",
      "Sendikal faaliyet nedeniyle işten çıkarılan işçilerin işe iadesi": "Reinstatement of workers dismissed for union activity",
      "Sosyal haklar": "Social benefits",
      "Sosyal hakların artırılması": "Increase social benefits",
      "Taksim yasağına karşı toplanma ve yürüyüş çağrısı": "Call to assemble and march against the Taksim ban",
      "Tazminat ve özlük haklarının ödenmesi": "Payment of compensation and employment rights",
      "Toplu iş sözleşmesi": "Collective bargaining agreement",
      "Toplu iş sözleşmesinin bağlayıcı metinle imzalanması": "Signing the collective bargaining agreement as a binding text",
      "Toplu iş sözleşmesinin imzalanması": "Signing the collective bargaining agreement",
      "Toplu sözleşme": "Collective agreement",
      "Toplu sözleşmeden doğan alacakların ödenmesi": "Payment of receivables arising from the collective agreement",
      "Toplu sözleşmenin yenilenmesi": "Renewal of the collective agreement",
      "Tutuklu gazetecilerin ve sendikacıların serbest bırakılması": "Release jailed journalists and trade unionists",
      "Ücret artışı": "Wage increase",
      "Ücret eşitsizliğinin giderilmesi": "Eliminate wage inequality",
      "Ücret ve çalışma koşullarının iyileştirilmesi": "Improve wages and working conditions",
      "Ücretsiz gösterimler": "Free screenings",
      "Üretim için gerekli malzeme ve iş güvencesi": "Materials needed for production and job security",
      "Vergi kesintilerinin işveren tarafından karşılanması": "Employer coverage of tax deductions",
      "Yan hak ve kart ödemelerinin yapılması": "Payment of fringe benefits and card payments",
      "Yönetici baskısı ve puan/ceza uygulamalarının son bulması": "End manager pressure and point/penalty practices",
      "Yüzde 28 zam teklifinin geri çekilmesi": "Withdrawal of the 28% raise offer",
      "Zorla ücretsiz izin uygulamasının sonlandırılması": "End forced unpaid leave",
      "Mesleki Eğitim Merkezi": "Vocational Education Center",
      "MEB Mesleğim Hayatım MTEGM kurum listesi": "MEB Mesleğim Hayatım MTEGM institution list",
      "MEB Mesleğim Hayatım MTEGM kurum listesinden derlendi.": "Compiled from the MEB Mesleğim Hayatım MTEGM institution list.",
      "Kaynakta belirtilmedi": "Not specified in the source",
      "Kaynakta ayrıntılandırılmayan": "Not detailed in the source",
    },
    replacements: [
      ["İş cinayeti", "Workplace killing"],
      ["iş cinayeti", "workplace killing"],
      ["iş kazası", "workplace accident"],
      ["yaşamını yitirdi", "died"],
      ["yaşamını yitirmesi", "death"],
      ["çalışırken", "while working"],
      ["çalıştırılırken", "while being made to work"],
      ["yüksekten düşme", "fall from height"],
      ["yüksekten düşerek", "after falling from height"],
      ["asansör boşluğuna düşme", "fall into an elevator shaft"],
      ["elektrik akımına kapılma", "electric shock"],
      ["göçük", "collapse"],
      ["yangın", "fire"],
      ["patlama", "explosion"],
      ["kalp krizi", "heart attack"],
      ["soruşturma başlatıldığı", "an investigation was opened"],
      ["soruşturma başlatıldığını aktardı", "reported that an investigation was opened"],
      ["işveren veya idari süreç ayrıntısı belirtilmedi", "employer or administrative-process details were not specified"],
      ["bu geçişte doğrulanamadı", "could not be verified in this pass"],
      ["Kamyonetin çarpması", "pickup-truck collision"],
      ["kamyonetin çarpması", "pickup-truck collision"],
      ["kamyonun altında kalarak", "after being trapped under a truck"],
      ["altında kalma", "being trapped underneath"],
      ["kanalizasyon çalışması", "sewerage work"],
      ["kanalizasyon", "sewerage"],
      ["altyapı", "infrastructure"],
      ["Grev kırıcılığı", "Strikebreaking"],
      ["geçici öğretmen görevlendirmesi", "temporary teacher assignment"],
      ["grev kararı", "strike decision"],
      ["grevi sona erdi", "strike ended"],
      ["programları ve çağrıları", "programs and calls"],
      ["fiili grevi", "de facto strike"],
      ["grevi", "strike"],
      ["direnişi", "resistance"],
      ["eylemleri", "actions"],
      ["eylemi", "action"],
      ["iş bırakma eylemi", "work stoppage"],
      ["işçileri", "workers"],
      ["öğretmenleri", "teachers"],
      ["emekçileri", "workers"],
      ["dayanışma eylemleri", "solidarity actions"],
      ["açlık grevi", "hunger strike"],
      ["çağrısı", "call"],
      ["açılışı", "opening"],
      ["tutuklandı", "arrested"],
      ["tutuklu", "jailed"],
      ["Eğitim", "Education"],
      ["Tekstil", "Textile"],
      ["hazır giyim", "apparel"],
      ["Metal", "Metal"],
      ["Kargo", "Cargo"],
      ["lojistik", "logistics"],
      ["Belediye hizmetleri", "Municipal services"],
      ["Belediye", "Municipal"],
      ["Madencilik", "Mining"],
      ["Maden", "Mining"],
      ["Sağlık", "Health"],
      ["Depo", "Warehouse"],
      ["perakende", "retail"],
      ["Kültür", "Culture"],
      ["Basın", "Press"],
      ["medya", "media"],
      ["Genel emek gündemi", "General labor agenda"],
      ["Kozmetik", "Cosmetics"],
      ["kimya", "chemicals"],
      ["Tarım", "Agriculture"],
      ["çocuk işçilik", "child labor"],
      ["Gıda", "Food"],
      ["Enerji", "Energy"],
      ["İnşaat", "Construction"],
      ["Mobilya", "Furniture"],
      ["imalat", "manufacturing"],
      ["Taşımacılık", "Transport"],
      ["bakım-onarım", "maintenance and repair"],
      ["Özel", "Private"],
      ["İtalyan Lisesi", "Italian High School"],
      ["Milli Eğitim Bakanlığı", "Ministry of National Education"],
    ],
  },
  kmr: {
    joiner: " · ",
    listSeparator: ", ",
    record: {
      workplaceKillingTitle: "{name} di bûyera kar de canê xwe ji dest da",
      workplaceKillingTitleUnknown: "Kuştina kar hate tomarkirin",
      mesemTitle: "Navenda Perwerdehiya Pîşeyî",
      strikeTitle: "Çalakiya karkerên {subject}",
      actionCallTitle: "Banga çalakiyê ya {subject}",
      retaliationTitle: "Bersiva cezayî ya li dijî kedê li {subject}",
      arrestTitle: "{subject} hate girtin",
      workplaceKillingSummary: "{name}{date}{place}{employer} di bûyera kar de canê xwe ji dest da. Sedema ragihandî / bûyer: {cause}.{legal}",
      mesemSummary: "Ev dibistan di lîsteya sazîyan a MEB de wek Navenda Perwerdehiya Pîşeyî xuya dike. Heta koordînatên rast bên nirxandin, cih li asta parêzgehê nêzîkî ye.",
      strikeSummary: "Ev tomar çalakiya kedê{subject}{place} dişopîne. Rewşa heyî: {status}.{participants}{dates}{demands}",
      actionCallSummary: "Ev tomar banga çalakî an piştgiriyê{subject}{place} dişopîne.{dates}{demands}",
      retaliationSummary: "Ev tomar bersiva cezayî ya li dijî kedê{subject}{place} dişopîne. Cure: {type}.{legal}",
      arrestSummary: "Ev tomar girtina {subject} dişopîne.{organization}{role}{legal}",
      participants: " Beşdar: {count}.",
      dates: " Dîrok: {dates}.",
      demands: " Daxwaz / mijar: {demands}.",
      legal: " Rewşa hiqûqî: {text}.",
      organization: " Rêxistin: {text}.",
      role: " Rol: {text}.",
    },
    timeline: {
      fatality_recorded: "Kuştina kar ji çavkaniyên vekirî hate tomarkirin.",
      decision_taken: "Biryarê grevê hate ragihandin.",
      ongoing: "Hat ragihandin ku çalakî didome.",
      ended: "Hat ragihandin ku çalakî bi dawî bû.",
      postponed_banned: "Hat ragihandin ku grev hate paşxistin an qedexekirin.",
      labor_retaliation_reported: "Bersiva cezayî ya li dijî çalakiya kedê hate ragihandin.",
      labor_retaliation_reversed: "Dadgeh an rayedarî vê biryara cezayî vegerand.",
      action_call_upcoming: "Banga çalakiyê hate ragihandin.",
      action_call_happened: "Hat ragihandin ku çalakî pêk hat.",
      active_school: "Ji lîsteya sazîyan a MEB hate berhevkirin.",
      currently_arrested: "Hat ragihandin ku kes an kom girtî ye.",
      released: "Hat ragihandin ku kes an kom hat berdan.",
      unknown: "Nûvekirina rêza demê hate tomarkirin.",
    },
    exact: {
      "1 Mayıs Birlik, Mücadele ve Dayanışma Günü": "Roja 1ê Gulanê ya Yekîtî, Tekoşîn û Piştgiriyê",
      "Ağır kargoların kuryelere zorla taşıtılmaması": "Nehêle barkirina barên giran bi zorê li ser qasidiyan",
      "Banka promosyonlarının eksiksiz ödenmesi": "Dayîna bêkêmasî ya promosyonên bankayê",
      "Basın özgürlüğü": "Azadiya çapemeniyê",
      "Baskı ve tehditlerin son bulması": "Dawîkirina zext û tehdîdan",
      "Çalışma koşulları": "Mercên kar",
      "Doruk Madencilik işçileriyle dayanışma": "Piştgirî bi karkerên Doruk Madencilik re",
      "Düşük zam dayatmasının geri çekilmesi": "Vekişandina ferzkirina zêdekirina kêm",
      "Düşük zam teklifinin geri çekilmesi": "Vekişandina pêşniyara zêdekirina kêm",
      "Emek ve dayanışma temalı kültür etkinliği": "Çalakiya çandî ya bi mijara ked û piştgiriyê",
      "Emek, demokrasi, barış ve adalet talepleri": "Daxwazên ked, demokrasî, aşîtî û edaletê",
      "Enflasyon farklarının yatırılması": "Dayîna cudahiyên enflasyonê",
      "Gasp edilen yasal hakların verilmesi": "Vegerandina mafên qanûnî yên hatine desteserkirin",
      "Gazetecilerin sendikal hakları": "Mafên sendîkayî yên rojnamevanan",
      "Geciken maaşların ödenmesi": "Dayîna meaşên derengmayî",
      "Geriye dönük alacakların ödenmesi": "Dayîna deynên paşdemî",
      "Grev kırıcılığı niteliğindeki geçici öğretmen görevlendirmelerinin durdurulması": "Rawestandina wezîfedarkirina demkî ya mamosteyan ku wek şikandina grevê kar dike",
      "Haftalık 40 saatin 5 güne bölünmesi": "Dabeşkirina 40 saetên hefteyê li ser 5 rojan",
      "Hak gasplarına ve baskılara son verilmesi": "Dawîkirina binpêkirina mafan û zextan",
      "İki yıllık sözleşme": "Peymana du-salî",
      "İlk altı ay için daha yüksek ücret artışı": "Zêdekirina meaşê ya bilindtir ji bo şeş mehên yekem",
      "İnsanca yaşayacak ücret": "Meaşek ji bo jiyana bi rûmet",
      "İSİG kurallarına uygun güvenli çalışma ortamı": "Jîngeha kar a ewle li gorî rêgezên ewlehiya kar",
      "İş durduran işçilerin işten atılmaması": "Karkerên ku kar rawestandin neyên derxistin",
      "İşçi hakları ve toplumsal mücadele görünürlüğü": "Xuyakirina mafên karkeran û tekoşînên civakî",
      "İşe iade veya tazminat haklarının güvenceye alınması": "Ewlekirina mafê vegera kar an tezmînatê",
      "İşkolu değişmeden tüm taşeron depo işçilerinin kadroya alınması": "Hemû karkerên depoyê yên taşeron bêyî guhartina şaxa karê bên kadroyê",
      "İşten çıkarılan emekçilerin haklarının korunması": "Parastina mafên kedkarên derxistin",
      "İşten çıkarılan işçiler için işe dönüş veya tazminat güvencesi": "Ewlekirina vegera kar an tezmînatê ji bo karkerên derxistin",
      "İşten çıkarılan işçilerin işe iadesi": "Vegera karkerên derxistin bo kar",
      "Kazanılmış haklara yönelik karşı tekliflerin geri çekilmesi": "Vekişandina pêşniyarên li dijî mafên qezencbûyî",
      "Kıdem ve ihbar tazminatlarının ödenmesi": "Dayîna tezmînata qedem û agahdarkirinê",
      "Kod 22 ve benzeri işten çıkarma kodlarının kaldırılması": "Rakirinên Kod 22 û kodên derxistinê yên wek wê",
      "Kolluk baskısı ve grev kırıcılığının son bulması": "Dawîkirina zexta hêzên ewlehiyê û şikandina grevê",
      "Madenin kamulaştırılması ve iş güvencesi": "Neteweyîkirina kanê û ewlehiya kar",
      "Net yüzde 50 zam": "Zêdekirina safî ya ji sedî 50",
      "Ödenmeyen maaşların ödenmesi": "Dayîna meaşên nedayî",
      "Ödenmeyen maaşların yatırılması": "Dayîna meaşên nedayî",
      "Ödenmeyen ücret, tazminat ve özlük haklarının ödenmesi": "Dayîna meaş, tezmînat û mafên karkirinê yên nedayî",
      "Ödenmeyen ücretlerin ödenmesi": "Dayîna meaşên nedayî",
      "Paket başı ücret ve ödeme sisteminin iyileştirilmesi": "Başkirina meaşa ser paketê û pergala dayînê",
      "Pazar günü çalışma zorunluluğunun kaldırılması": "Rakirinên mecbûriyeta karê roja yekşemê",
      "Sendika hakkının tanınması": "Naskirina mafê sendîkayê",
      "Sendikal baskıların ve eylem yasaklarının son bulması": "Dawîkirina zextên sendîkayî û qedexeyên çalakiyê",
      "Sendikal faaliyet nedeniyle işten çıkarılan işçilerin işe iadesi": "Vegera karkerên ji ber çalakiya sendîkayî derxistin bo kar",
      "Sosyal haklar": "Mafên civakî",
      "Sosyal hakların artırılması": "Zêdekirina mafên civakî",
      "Taksim yasağına karşı toplanma ve yürüyüş çağrısı": "Bang ji bo civîn û meşê li dijî qedexeya Taksimê",
      "Tazminat ve özlük haklarının ödenmesi": "Dayîna tezmînat û mafên karkirinê",
      "Toplu iş sözleşmesi": "Peymana kar a komî",
      "Toplu iş sözleşmesinin bağlayıcı metinle imzalanması": "Îmzekirina peymana kar a komî wek nivîsa girêdayî",
      "Toplu iş sözleşmesinin imzalanması": "Îmzekirina peymana kar a komî",
      "Toplu sözleşme": "Peymana komî",
      "Toplu sözleşmeden doğan alacakların ödenmesi": "Dayîna deynên ji peymana komî derketî",
      "Toplu sözleşmenin yenilenmesi": "Nûkirina peymana komî",
      "Tutuklu gazetecilerin ve sendikacıların serbest bırakılması": "Berdana rojnamevan û sendîkavanên girtî",
      "Ücret artışı": "Zêdekirina meaşê",
      "Ücret eşitsizliğinin giderilmesi": "Rakirinên newekheviya meaşê",
      "Ücret ve çalışma koşullarının iyileştirilmesi": "Başkirina meaş û mercên kar",
      "Ücretsiz gösterimler": "Pêşandanên bêpere",
      "Üretim için gerekli malzeme ve iş güvencesi": "Malzemeyên ji bo hilberînê û ewlehiya kar",
      "Vergi kesintilerinin işveren tarafından karşılanması": "Barkirina birrînên bacê ji aliyê kardêr ve",
      "Yan hak ve kart ödemelerinin yapılması": "Dayîna mafên alîkar û pereyên kartê",
      "Yönetici baskısı ve puan/ceza uygulamalarının son bulması": "Dawîkirina zexta rêveberan û pergala xal/cezayê",
      "Yüzde 28 zam teklifinin geri çekilmesi": "Vekişandina pêşniyara zêdekirina ji sedî 28",
      "Zorla ücretsiz izin uygulamasının sonlandırılması": "Dawîkirina betlaneya bêpere ya bi zorê",
      "Mesleki Eğitim Merkezi": "Navenda Perwerdehiya Pîşeyî",
      "MEB Mesleğim Hayatım MTEGM kurum listesi": "Lîsteya sazîyan a MEB Mesleğim Hayatım MTEGM",
      "MEB Mesleğim Hayatım MTEGM kurum listesinden derlendi.": "Ji lîsteya sazîyan a MEB Mesleğim Hayatım MTEGM hate berhevkirin.",
      "Kaynakta belirtilmedi": "Di çavkaniyê de nehatiye destnîşankirin",
      "Kaynakta ayrıntılandırılmayan": "Di çavkaniyê de bi hûrgilî nehatiye gotin",
    },
    replacements: [
      ["İş cinayeti", "Kuştina kar"],
      ["iş cinayeti", "kuştina kar"],
      ["iş kazası", "qezaya kar"],
      ["yaşamını yitirdi", "canê xwe ji dest da"],
      ["yaşamını yitirmesi", "mirina wî/wê"],
      ["çalışırken", "dema dixebitî"],
      ["çalıştırılırken", "dema bi kar dihate xebitandin"],
      ["yüksekten düşme", "ketina ji bilindahiyê"],
      ["yüksekten düşerek", "piştî ketina ji bilindahiyê"],
      ["asansör boşluğuna düşme", "ketina valahiya asansorê"],
      ["elektrik akımına kapılma", "ketina bin elektrîkê"],
      ["göçük", "hilweşîn"],
      ["yangın", "agir"],
      ["patlama", "teqîn"],
      ["kalp krizi", "krîza dil"],
      ["Kamyonetin çarpması", "lêdana kamyonetê"],
      ["kamyonetin çarpması", "lêdana kamyonetê"],
      ["kamyonun altında kalarak", "piştî ku di bin kamyonê de ma"],
      ["altında kalma", "mayîna li binê"],
      ["kanalizasyon çalışması", "xebata kanalîzasyonê"],
      ["kanalizasyon", "kanalîzasyon"],
      ["altyapı", "binesazî"],
      ["Grev kırıcılığı", "Şikandina grevê"],
      ["geçici öğretmen görevlendirmesi", "wezîfedarkirina demkî ya mamosteyan"],
      ["grev kararı", "biryarê grevê"],
      ["grevi sona erdi", "grev bi dawî bû"],
      ["programları ve çağrıları", "bername û bang"],
      ["fiili grevi", "greva fiilî"],
      ["grevi", "grev"],
      ["direnişi", "berxwedan"],
      ["eylemleri", "çalakî"],
      ["eylemi", "çalakî"],
      ["iş bırakma eylemi", "çalakiya rawestandina kar"],
      ["işçileri", "karkerên"],
      ["öğretmenleri", "mamosteyên"],
      ["emekçileri", "kedkarên"],
      ["dayanışma eylemleri", "çalakiyên piştgiriyê"],
      ["açlık grevi", "greva birçîbûnê"],
      ["çağrısı", "bang"],
      ["açılışı", "vekirin"],
      ["tutuklandı", "hate girtin"],
      ["tutuklu", "girtî"],
      ["Eğitim", "Perwerde"],
      ["Tekstil", "Tekstîl"],
      ["hazır giyim", "cil û bergên amade"],
      ["Metal", "Metal"],
      ["Kargo", "Kargo"],
      ["lojistik", "lojîstîk"],
      ["Belediye hizmetleri", "Xizmetên şaredariyê"],
      ["Belediye", "Şaredarî"],
      ["Madencilik", "Kankanî"],
      ["Maden", "Kan"],
      ["Sağlık", "Tenduristî"],
      ["Depo", "Depo"],
      ["perakende", "firotina hûr"],
      ["Kültür", "Çand"],
      ["Basın", "Çapemenî"],
      ["medya", "medya"],
      ["Genel emek gündemi", "Rojema giştî ya kedê"],
      ["Kozmetik", "Kozmetîk"],
      ["kimya", "kîmya"],
      ["Tarım", "Çandinî"],
      ["çocuk işçilik", "xebata zarokan"],
      ["Gıda", "Xwarin"],
      ["Enerji", "Enerjî"],
      ["İnşaat", "Avahî"],
      ["Mobilya", "Mobîlya"],
      ["imalat", "hilberîn"],
      ["Taşımacılık", "Veguhestin"],
      ["bakım-onarım", "lênêrîn û tamîr"],
      ["Özel", "Taybet"],
      ["İtalyan Lisesi", "Lîseya Îtalyan"],
      ["Milli Eğitim Bakanlığı", "Wezareta Perwerdehiya Neteweyî"],
    ],
  },
};

const state = {
  lang: "tr",
  records: [],
  filtered: [],
  markers: new Map(),
  selectedRecordId: null,
  listOpen: false,
  map: null,
  sb: null,
  layerFilters: new Set(DEFAULT_LAYERS),
  actionFilters: new Set(ACTION_TYPES),
  search: "",
  dateRange: "last_6_months",
  province: "",
  sector: "",
};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  initMap();
  initSupabase();
  bindStaticEvents();
  await loadRecords();
  populateControls();
  applyTranslations();
  updateLanguageButtons();
  applyFilters();
}

function initMap() {
  state.map = L.map("map", { zoomControl: false }).setView(CONFIG.defaultCenter, CONFIG.defaultZoom);
  L.control.zoom({ position: "topright" }).addTo(state.map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(state.map);
  state.map.on("zoomend", renderMarkers);
}

function initSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !window.supabase) return;
  state.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

async function loadRecords() {
  if (state.sb) {
    const { data, error } = await state.sb
      .from("cases")
      .select("*, case_locations(*), case_sources(*), case_timeline(*)")
      .eq("verification_status", "verified");
    if (!error && Array.isArray(data)) {
      state.records = data.map(normalizeSupabaseRecord).filter(hasPublicSource);
      return;
    }
    showLoadNotice(`Supabase okunamadı, statik veri kullanılıyor: ${error?.message || "bilinmeyen hata"}`);
  }

  try {
    const [incidentPayloads, mesemSchools] = await Promise.all([
      Promise.all(CONFIG.incidentPaths.map(fetchJson)),
      fetchJson(CONFIG.mesemPath),
    ]);
    state.records = [...incidentPayloads.flatMap(extractRecords), ...extractRecords(mesemSchools)]
      .map(normalizeRecord)
      .filter(hasPublicSource);
  } catch (error) {
    showLoadNotice(`Yeni veri dosyaları okunamadı, seed yedeği deneniyor: ${error.message}`);
    const fallback = await fetchJson(CONFIG.fallbackSeedPath);
    state.records = extractRecords(fallback).map(normalizeRecord).filter(hasPublicSource);
  }
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`${path} ${response.status}`);
  return response.json();
}

function extractRecords(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.records)) return payload.records;
  if (Array.isArray(payload.cases)) return payload.cases;
  return [];
}

function normalizeSupabaseRecord(row) {
  return normalizeRecord({
    ...row,
    locations: row.case_locations || row.locations || [],
    sources: row.case_sources || row.sources || [],
    timeline: row.case_timeline || row.timeline || [],
  });
}

function normalizeRecord(raw) {
  const provinceFromKey = raw.province_key ? PROVINCE_BY_KEY[raw.province_key]?.name : null;
  const fallbackProvince = provinceFromKey || raw.province || "";
  const topLocation = raw.lat || raw.lng || fallbackProvince ? [{
    id: `${raw.id || raw.public_id || raw.title}-loc`,
    label: raw.location_label || raw.school_name || raw.employer || raw.title,
    province_key: raw.province_key,
    province: fallbackProvince,
    district: raw.district || "",
    lat: raw.lat,
    lng: raw.lng,
    geocode_precision: raw.geocode_precision,
    fatality_count: raw.fatality_count,
  }] : [];

  const locations = (raw.locations?.length ? raw.locations : topLocation).map((location, index) => {
    const provinceKey = location.province_key || raw.province_key || keyForProvince(location.province || fallbackProvince);
    const province = PROVINCE_BY_KEY[provinceKey]?.name || location.province || fallbackProvince;
    const center = PROVINCE_BY_KEY[provinceKey] || PROVINCE_BY_NAME[province] || {};
    return {
      id: location.id || `${raw.id || raw.public_id || "record"}-${index}`,
      label: location.label || raw.location_label || raw.school_name || raw.employer || raw.title || province,
      translations: location.translations || location.i18n || {},
      province_key: provinceKey || "",
      province,
      district: cleanTitle(location.district || raw.district || ""),
      lat: finiteNumber(location.lat) ?? finiteNumber(raw.lat) ?? center.lat ?? null,
      lng: finiteNumber(location.lng) ?? finiteNumber(raw.lng) ?? center.lng ?? null,
      geocode_precision: location.geocode_precision || raw.geocode_precision || (location.lat && location.lng ? "exact" : "province_centroid"),
      fatality_count: finiteNumber(location.fatality_count) ?? null,
      location_basis: location.location_basis || location.location_note || raw.location_basis || "",
    };
  }).filter((location) => Number.isFinite(location.lat) && Number.isFinite(location.lng));

  const record = {
    id: String(raw.id || raw.public_id || slugify(raw.title || cryptoRandomId())),
    public_id: raw.public_id || raw.id || "",
    record_type: raw.record_type || raw.category || "strike",
    status: raw.status || raw.stage || "unknown",
    action_type: raw.action_type || null,
    title: raw.title || raw.school_name || "İsimsiz kayıt",
    translations: raw.translations || raw.i18n || {},
    summary: raw.summary || "",
    worker_name: raw.worker_name || "",
    worker_age: raw.worker_age || raw.age || null,
    person_name: raw.person_name || raw.person || "",
    school_name: raw.school_name || "",
    institution_code: raw.institution_code || "",
    employer: raw.employer || "",
    labor_organization: raw.labor_organization || raw.union || "",
    role: raw.role || "",
    sector: raw.sector || "",
    cause: raw.cause || raw.cause_of_death || "",
    demands: Array.isArray(raw.demands) ? raw.demands : stringList(raw.demands),
    participant_count: raw.participant_count || null,
    decision_date: raw.decision_date || null,
    start_date: raw.start_date || null,
    end_date: raw.end_date || null,
    event_date: raw.event_date || null,
    death_date: raw.death_date || null,
    retaliation_date: raw.retaliation_date || null,
    retaliation_type: raw.retaliation_type || "",
    detention_date: raw.detention_date || raw.arrest_date || null,
    known_active_date: raw.known_active_date || raw.active_date || null,
    custody_status: raw.custody_status || raw.detention_status || "",
    accusation: raw.accusation || "",
    legal_status: raw.legal_status || "",
    linked_incident_id: raw.linked_incident_id || "",
    linked_incident_count: raw.linked_incident_count ?? null,
    last_verified_at: raw.last_verified_at || raw.updated_at || null,
    locations,
    sources: (raw.sources || []).map((source) => ({
      title: source.title || source.source_title || source.url || "",
      translations: source.translations || source.i18n || {},
      url: source.url || source.source_url || "",
      publisher: source.publisher || source.source_publisher || "",
      type: source.type || source.source_type || "",
      published_at: source.published_at || source.source_published_at || null,
    })),
    timeline: (raw.timeline || []).map((item) => ({
      date: item.date || null,
      status: item.status || item.stage || raw.status || "unknown",
      note: item.note || "",
      translations: item.translations || item.i18n || {},
    })),
  };

  if (record.record_type === "action_call") {
    record.status = isUpcomingActionCall(record) ? "action_call_upcoming" : "action_call_happened";
  }

  record.layer = getLayer(record);
  record.search_blob = buildSearchBlob(record);
  return record;
}

function hasPublicSource(record) {
  return record.sources.some((source) => /^https?:\/\//i.test(source.url));
}

function getLayer(record) {
  if (record.record_type === "worker_death") {
    return "worker_death_recent";
  }
  if (record.record_type === "action_call") {
    return record.status === "action_call_upcoming" ? "action_call_upcoming" : "action_call_happened";
  }
  if (record.record_type === "mesem_school") return "mesem_school";
  if (record.record_type === "union_labor_arrest") {
    return isCurrentArrestRecord(record) ? "union_arrest_current" : "union_arrest_released";
  }
  if (record.record_type === "labor_retaliation") return "labor_retaliation";
  if (record.status === "ended") return "strike_ended";
  if (record.status === "decision_taken") return "strike_decision";
  if (record.status === "postponed_banned") return "strike_postponed";
  return "strike_ongoing";
}

function isUpcomingActionCall(record) {
  const eventKey = dateKey(record.event_date || record.start_date || record.decision_date);
  if (!eventKey) return record.status === "action_call_upcoming";
  return eventKey > turkeyTodayKey();
}

function isCurrentArrestRecord(record) {
  const text = arrestStatusText(record);
  const hasArrestInfo = record.status === "currently_arrested" || /\btutuk\w*|\barrest\w*|\bjail\w*/i.test(text);
  const hasReleaseInfo = record.status === "released" || /\btahliye\s+(edil\w*|oldu\w*|karar\w*)|\breleased\b/i.test(text);
  return hasArrestInfo && !hasReleaseInfo;
}

function arrestStatusText(record) {
  return normalizeAscii([
    record.status,
    record.title,
    record.summary,
    record.custody_status,
    record.legal_status,
    record.accusation,
    ...(record.timeline || []).flatMap((item) => [item.status, item.note]),
    ...(record.sources || []).flatMap((source) => [source.title, source.publisher]),
  ].filter(Boolean).join(" "));
}

function workerDeathTotal(records = state.records) {
  const deaths = records.filter((record) => record.record_type === "worker_death" && recordMatchesDateRange(record));
  return deaths.reduce((total, record) => total + fatalityCount(record), 0);
}

function fatalityCount(record) {
  const linkedCount = finiteNumber(record.linked_incident_count);
  if (linkedCount > 0) return linkedCount;
  const locationTotal = record.locations.reduce((total, location) => total + (finiteNumber(location.fatality_count) || 0), 0);
  return locationTotal > 0 ? locationTotal : 1;
}

function populateControls() {
  const presetOptions = DATE_RANGES
    .map((range) => optionHtml(range, t(`filters.dateRanges.${range}`)))
    .join("");
  const monthOptions = availableMonthKeys()
    .map((month) => optionHtml(`${MONTH_RANGE_PREFIX}${month}`, formatMonthRangeLabel(month)))
    .join("");
  document.getElementById("date-range-filter").innerHTML = monthOptions
    ? `${presetOptions}<optgroup label="${escapeAttribute(t("filters.months"))}">${monthOptions}</optgroup>`
    : presetOptions;

  const provinceOptions = [`<option value="" ${selectedAttribute(!state.province)}>${t("filters.allProvinces")}</option>`]
    .concat(PROVINCES.map((province) => `<option value="${escapeAttribute(province.name)}" ${selectedAttribute(province.name === state.province)}>${escapeHtml(province.name)}</option>`));
  document.getElementById("province-filter").innerHTML = provinceOptions.join("");
  document.getElementById("submission-province").innerHTML = `<option value=""></option>${PROVINCES.map((province) => `<option value="${escapeAttribute(province.name)}">${escapeHtml(province.name)}</option>`).join("")}`;

  const sectors = Array.from(new Set(state.records.map((item) => item.sector).filter(Boolean))).sort((a, b) => a.localeCompare(b, localeForLanguage()));
  document.getElementById("sector-filter").innerHTML = [`<option value="" ${selectedAttribute(!state.sector)}>${t("filters.allSectors")}</option>`]
    .concat(sectors.map((sector) => `<option value="${escapeAttribute(sector)}" ${selectedAttribute(sector === state.sector)}>${escapeHtml(sector)}</option>`)).join("");

  document.getElementById("submission-record-type").innerHTML = RECORD_TYPES
    .map((recordType) => `<option value="${recordType}">${t(`recordType.${recordType}`)}</option>`)
    .join("");

  renderCheckboxGroup("layer-filters", LAYER_ORDER, state.layerFilters, "layer");
  renderCheckboxGroup("action-filters", ACTION_TYPES, state.actionFilters, "actionType");
}

function renderCheckboxGroup(containerId, values, selectedSet, labelKey) {
  document.getElementById(containerId).innerHTML = values.map((value) => {
    const checked = selectedSet.has(value) ? "checked" : "";
    const color = labelKey === "layer" ? LAYER_COLORS[value] : "#ffffff";
    const border = value === "strike_decision" ? "border-color:#575047" : "";
    return `
      <label class="check-row">
        <input type="checkbox" value="${escapeHtml(value)}" data-filter-group="${labelKey}" ${checked}>
        <span>${escapeHtml(t(`${labelKey}.${value}`))}</span>
        <i class="check-dot" style="background:${color};${border}"></i>
      </label>`;
  }).join("");
}

function bindStaticEvents() {
  document.getElementById("search-input").addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLocaleLowerCase("tr");
    applyFilters();
  });
  document.getElementById("date-range-filter").addEventListener("change", (event) => {
    state.dateRange = event.target.value;
    applyFilters();
  });
  document.getElementById("province-filter").addEventListener("change", (event) => {
    state.province = event.target.value;
    applyFilters();
  });
  document.getElementById("sector-filter").addEventListener("change", (event) => {
    state.sector = event.target.value;
    applyFilters();
  });
  document.querySelector(".filters").addEventListener("change", (event) => {
    if (!event.target.matches("[data-filter-group]")) return;
    const group = event.target.dataset.filterGroup;
    const set = group === "layer" ? state.layerFilters : state.actionFilters;
    event.target.checked ? set.add(event.target.value) : set.delete(event.target.value);
    applyFilters();
  });
  document.getElementById("mobile-chipbar").addEventListener("click", (event) => {
    const button = event.target.closest("[data-quick-layer]");
    if (!button) return;
    const layer = button.dataset.quickLayer;
    state.layerFilters.has(layer) ? state.layerFilters.delete(layer) : state.layerFilters.add(layer);
    populateControls();
    applyFilters();
  });
  document.getElementById("mobile-filter-btn").addEventListener("click", openFilters);
  document.getElementById("close-filter-btn").addEventListener("click", closeFilters);
  document.getElementById("drawer-scrim").addEventListener("click", closeFilters);
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
  document.getElementById("list-records-btn").addEventListener("click", toggleRecordList);
  document.getElementById("open-submit-btn").addEventListener("click", () => openModal("submit-modal"));
  document.getElementById("methodology-btn").addEventListener("click", () => openModal("methodology-modal"));
  document.getElementById("sources-btn").addEventListener("click", () => openModal("sources-modal"));
  document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeOpenModal));
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) closeOpenModal();
    });
  });
  document.getElementById("submission-form").addEventListener("submit", submitReport);
}

function openFilters() {
  document.body.classList.add("filters-open");
  document.getElementById("drawer-scrim").hidden = false;
  setTimeout(() => state.map.invalidateSize(), 200);
}

function closeFilters() {
  document.body.classList.remove("filters-open");
  document.getElementById("drawer-scrim").hidden = true;
}

function optionHtml(value, label) {
  const selected = state.dateRange === value ? "selected" : "";
  return `<option value="${escapeAttribute(value)}" ${selected}>${escapeHtml(label)}</option>`;
}

function selectedAttribute(selected) {
  return selected ? "selected" : "";
}

function toggleRecordList() {
  if (state.listOpen) {
    closeRecordList();
    return;
  }
  state.listOpen = true;
  state.selectedRecordId = null;
  document.body.classList.add("detail-open");
  closeFilters();
  renderRecordList();
  renderMarkers();
  setTimeout(() => state.map.invalidateSize(), 220);
}

function closeRecordList() {
  state.listOpen = false;
  document.getElementById("record-list-panel").hidden = true;
  document.getElementById("case-detail").hidden = true;
  document.getElementById("empty-detail").hidden = false;
  document.body.classList.remove("detail-open");
  updateListButton();
}

function updateListButton() {
  const button = document.getElementById("list-records-btn");
  if (!button) return;
  button.textContent = t("nav.listAll");
  button.classList.toggle("active", state.listOpen);
  button.setAttribute("aria-pressed", state.listOpen ? "true" : "false");
  button.setAttribute("aria-label", `${t("nav.listAll")} - ${formatCount(state.filtered.length)} ${t("list.countLabel")}`);
}

function setLanguage(lang) {
  if (!LANGUAGES.includes(lang) || state.lang === lang) {
    updateLanguageButtons();
    return;
  }

  state.lang = lang;
  document.documentElement.lang = LANGUAGE_META[state.lang].htmlLang;
  populateControls();
  applyTranslations();
  updateLanguageButtons();
  applyFilters();
  if (state.selectedRecordId) renderDetail(getSelectedRecord());
}

function updateLanguageButtons() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const lang = button.dataset.lang;
    const active = lang === state.lang;
    const meta = LANGUAGE_META[lang] || {};
    button.textContent = meta.label || lang.toUpperCase();
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
    button.setAttribute("aria-label", meta.aria || button.textContent);
    button.title = meta.aria || "";
  });
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
  });
}

function localizedRecordTitle(record) {
  if (!record) return "";
  const direct = directDataTranslation(record, "title");
  if (direct) return direct;
  if (state.lang === "tr") return record.title;

  const copy = dataCopy();
  if (record.record_type === "worker_death") {
    const template = record.worker_name ? copy.record.workplaceKillingTitle : copy.record.workplaceKillingTitleUnknown;
    return fillTemplate(template, { name: record.worker_name || "" });
  }
  if (record.record_type === "mesem_school") {
    return translateDataText(record.school_name || record.title || copy.record.mesemTitle);
  }
  if (record.record_type === "strike") {
    return fillTemplate(copy.record.strikeTitle, { subject: recordSubject(record) });
  }
  if (record.record_type === "labor_retaliation") {
    return fillTemplate(copy.record.retaliationTitle, { subject: recordSubject(record) });
  }
  if (record.record_type === "union_labor_arrest") {
    return fillTemplate(copy.record.arrestTitle, { subject: record.person_name || recordSubject(record) });
  }
  if (record.record_type === "action_call") {
    return translateDataText(record.title) || fillTemplate(copy.record.actionCallTitle, { subject: recordSubject(record) });
  }
  return translateDataText(record.title);
}

function localizedRecordSummary(record) {
  if (!record) return "";
  const direct = directDataTranslation(record, "summary");
  if (direct) return direct;
  if (state.lang === "tr") return record.summary || t("common.notSpecified");

  const copy = dataCopy();
  const place = recordPlace(record);
  const demands = localizedDemands(record).join(copy.listSeparator);
  const legal = localizedRecordValue(record, record.legal_status ? "legal_status" : "accusation", record.legal_status || record.accusation || "");
  const dates = localizedDateParts(record).join(copy.listSeparator);

  if (record.record_type === "worker_death") {
    return fillTemplate(copy.record.workplaceKillingSummary, {
      name: record.worker_name || workerFallback(),
      date: record.death_date ? dateFragment(record.death_date) : "",
      place: place ? placeFragment(place) : "",
      employer: record.employer ? employerFragment(localizedRecordValue(record, "employer", record.employer)) : "",
      cause: localizedRecordValue(record, "cause", record.cause || t("common.notSpecified")),
      legal: legal ? fillTemplate(copy.record.legal, { text: sentenceText(legal) }) : "",
    });
  }
  if (record.record_type === "mesem_school") {
    return copy.record.mesemSummary;
  }
  if (record.record_type === "strike") {
    return fillTemplate(copy.record.strikeSummary, {
      subject: record.employer ? subjectFragment(recordSubject(record)) : "",
      place: place ? placeFragment(place) : "",
      status: t(`status.${record.status}`),
      participants: record.participant_count ? fillTemplate(copy.record.participants, { count: formatCount(record.participant_count) }) : "",
      dates: dates ? fillTemplate(copy.record.dates, { dates }) : "",
      demands: demands ? fillTemplate(copy.record.demands, { demands }) : "",
    });
  }
  if (record.record_type === "action_call") {
    return fillTemplate(copy.record.actionCallSummary, {
      subject: record.labor_organization ? subjectFragment(translateDataText(record.labor_organization)) : "",
      place: place ? placeFragment(place) : "",
      dates: dates ? fillTemplate(copy.record.dates, { dates }) : "",
      demands: demands ? fillTemplate(copy.record.demands, { demands }) : "",
    });
  }
  if (record.record_type === "labor_retaliation") {
    return fillTemplate(copy.record.retaliationSummary, {
      subject: record.employer ? subjectFragment(recordSubject(record)) : "",
      place: place ? placeFragment(place) : "",
      type: translateDataText(record.retaliation_type || record.cause || t("common.notSpecified")),
      legal: legal ? fillTemplate(copy.record.legal, { text: sentenceText(legal) }) : "",
    });
  }
  if (record.record_type === "union_labor_arrest") {
    return fillTemplate(copy.record.arrestSummary, {
      subject: record.person_name || translateDataText(record.title),
      organization: record.labor_organization ? fillTemplate(copy.record.organization, { text: translateDataText(record.labor_organization) }) : "",
      role: record.role ? fillTemplate(copy.record.role, { text: translateDataText(record.role) }) : "",
      legal: legal ? fillTemplate(copy.record.legal, { text: sentenceText(legal) }) : "",
    });
  }
  return translateDataText(record.summary || t("common.notSpecified"));
}

function localizedRecordValue(record, field, value) {
  if (value === 0) return value;
  if (!value) return value;
  const direct = directDataTranslation(record, field);
  if (direct) return direct;
  if (state.lang === "tr") return value;
  const translated = translateDataText(value);
  if (shouldUseGenericRecordValue(field, translated)) return genericRecordValue(field);
  return translated;
}

function localizedDemands(record) {
  return (record.demands || []).map((demand) => translateDataText(demand)).filter(Boolean);
}

function localizedLocationLabel(location) {
  const direct = directDataTranslation(location, "label");
  if (direct) return direct;
  return state.lang === "tr" ? location.label : translateDataText(location.label);
}

function localizedLocationBasis(location) {
  const direct = directDataTranslation(location, "location_basis");
  if (direct) return direct;
  return state.lang === "tr" ? location.location_basis : translateDataText(location.location_basis);
}

function localizedTimelineNote(record, item, index) {
  const direct = directDataTranslation(item, "note") || directIndexedTranslation(record, "timeline", index, "note");
  if (direct) return direct;
  if (state.lang === "tr") return item.note;
  return dataCopy().timeline[item.status] || dataCopy().timeline.unknown;
}

function localizedSourceTitle(source) {
  const direct = directDataTranslation(source, "title");
  if (direct) return direct;
  if (state.lang === "tr") return source.title || t("common.source");
  return [t("common.source"), source.publisher].filter(Boolean).join(": ");
}

function directDataTranslation(item, field) {
  if (state.lang === "tr") return "";
  return item?.translations?.[state.lang]?.[field] || "";
}

function directIndexedTranslation(record, collection, index, field) {
  if (state.lang === "tr") return "";
  return record?.translations?.[state.lang]?.[collection]?.[index]?.[field] || "";
}

function translateDataText(value) {
  if (value === 0) return "0";
  if (!value) return "";
  if (state.lang === "tr") return String(value);
  const copy = dataCopy();
  let output = copy.exact[String(value)] || String(value);
  const replacements = [...(copy.replacements || [])].sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of replacements) {
    output = output.split(from).join(to);
  }
  return output;
}

function shouldUseGenericRecordValue(field, value) {
  if (!["cause", "legal_status", "accusation", "retaliation_type"].includes(field)) return false;
  return hasUntranslatedTurkish(value);
}

function hasUntranslatedTurkish(value) {
  return /\b(olay|olayla|ilgili|soruşturma|başlat|haberleştir|kaynak|aktardı|belirtilmedi|çarpması|altında|kalma|kalarak|çalışması|sonucu|sırasında|yaralanma|ölüm|düşme|düşerek|işçi|işçiler|işçisi|hukuki|süreç|ayrıntı|inceleme|tahkikat)\b/i.test(String(value));
}

function genericRecordValue(field) {
  const values = {
    en: {
      cause: "Workplace incident reported in public sources",
      legal_status: "Legal or administrative process details were not fully available in the public-source record.",
      accusation: "Legal accusation or status reported in public sources.",
      retaliation_type: "Labor-retaliation measure reported in public sources.",
    },
    kmr: {
      cause: "Bûyera kar ji çavkaniyên vekirî hate ragihandin",
      legal_status: "Hûrgiliyên pêvajoya hiqûqî an îdarî di tomara çavkaniyên vekirî de bi tevahî tune bûn.",
      accusation: "Tawanbarî an rewşa hiqûqî ji çavkaniyên vekirî hate ragihandin.",
      retaliation_type: "Tedbîra bersiva cezayî ya li dijî kedê ji çavkaniyên vekirî hate ragihandin.",
    },
  };
  return values[state.lang]?.[field] || values.en[field] || "";
}

function recordSubject(record) {
  return translateDataText(record.employer || record.labor_organization || record.person_name || record.school_name || record.title || t("common.notSpecified"));
}

function recordPlace(record) {
  const location = displayLocations(record)[0] || record.locations?.[0] || {};
  return [location.district, location.province].filter(Boolean).join(", ");
}

function localizedDateParts(record) {
  const fields = [
    ["decisionDate", record.decision_date],
    ["eventDate", record.event_date],
    ["startDate", record.start_date],
    ["endDate", record.end_date],
    ["detentionDate", record.detention_date],
  ];
  return fields
    .filter(([, value]) => value)
    .map(([label, value]) => `${t(`detail.${label}`)}: ${formatDate(value)}`);
}

function dateFragment(value) {
  if (state.lang === "kmr") return ` di ${formatDate(value)} de`;
  return ` on ${formatDate(value)}`;
}

function placeFragment(place) {
  if (state.lang === "kmr") return ` li ${place}`;
  return ` in ${place}`;
}

function employerFragment(employer) {
  if (state.lang === "kmr") return ` li ${employer}`;
  return ` at ${employer}`;
}

function subjectFragment(subject) {
  if (state.lang === "kmr") return ` li ${subject}`;
  return ` at ${subject}`;
}

function workerFallback() {
  return state.lang === "kmr" ? "Karkerek" : "A worker";
}

function fillTemplate(template, values) {
  return Object.entries(values).reduce((result, [key, value]) => result.replaceAll(`{${key}}`, value ?? ""), template);
}

function sentenceText(value) {
  return String(value || "").replace(/[.!?]+$/g, "");
}

function dataCopy() {
  return DATA_COPY[state.lang] || DATA_COPY.en;
}

function applyFilters() {
  state.filtered = state.records.filter((record) => {
    if (!state.layerFilters.has(record.layer)) return false;
    const locations = displayLocations(record);
    if (!locations.length) return false;
    if (!recordMatchesDateRange(record)) return false;
    if (state.province && !locations.some((location) => location.province === state.province)) return false;
    if (state.sector && record.sector !== state.sector) return false;
    if (record.record_type === "strike" && record.action_type && !state.actionFilters.has(record.action_type)) return false;
    if (state.search && !record.search_blob.includes(state.search)) return false;
    return true;
  });

  if (state.selectedRecordId && !state.filtered.some((record) => record.id === state.selectedRecordId)) {
    clearSelection();
  }

  updateStats();
  renderLegend();
  renderMobileChips();
  renderMarkers();
  updateListButton();
  if (state.listOpen) renderRecordList();
  document.getElementById("result-count").textContent = state.filtered.length;
}

function updateStats() {
  const displayRecords = state.records.filter((record) => displayLocations(record).length && recordMatchesDateRange(record));
  document.getElementById("stat-total").textContent = displayRecords.length;
  document.getElementById("stat-deaths").textContent = formatCount(workerDeathTotal(displayRecords));
  document.getElementById("stat-strikes").textContent = displayRecords.filter((record) => record.layer === "strike_ongoing").length;
  document.getElementById("stat-arrests").textContent = displayRecords.filter((record) => record.layer === "union_arrest_current").length;
}

function renderLegend() {
  document.getElementById("legend-card").innerHTML = LAYER_ORDER.map((layer) => {
    const border = layer === "strike_decision" ? "border-color:#575047" : "";
    return `<div class="legend-row"><span class="legend-dot" style="background:${LAYER_COLORS[layer]};${border}"></span>${escapeHtml(t(`layer.${layer}`))}</div>`;
  }).join("");
}

function renderMobileChips() {
  const counts = Object.fromEntries(QUICK_LAYERS.map((layer) => [layer, state.records.filter((record) => record.layer === layer && displayLocations(record).length && recordMatchesDateRange(record)).length]));
  document.getElementById("mobile-chipbar").innerHTML = QUICK_LAYERS.map((layer) => {
    const active = state.layerFilters.has(layer) ? "active" : "";
    return `<button class="quick-chip ${active}" type="button" data-quick-layer="${layer}">
      <span class="quick-dot" style="background:${LAYER_COLORS[layer]}"></span>${escapeHtml(t(`quickLayer.${layer}`))} ${counts[layer]}
    </button>`;
  }).join("");
}

function renderMarkers() {
  state.markers.forEach((marker) => marker.remove());
  state.markers.clear();

  const markerItems = [];
  state.filtered.forEach((record) => {
    displayLocations(record).forEach((location) => {
      markerItems.push({ record, location });
    });
  });

  const overlapGroups = markerItems.reduce((groups, item) => {
    const key = locationKey(item.location);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
    return groups;
  }, new Map());

  overlapGroups.forEach((items) => {
    items
      .sort((a, b) => `${a.record.id}:${a.location.id}`.localeCompare(`${b.record.id}:${b.location.id}`))
      .forEach(({ record, location }, index) => {
        const selected = record.id === state.selectedRecordId ? "selected" : "";
        const offset = markerOffset(index, items.length);
        const marker = L.marker([location.lat, location.lng], {
          icon: L.divIcon({
            className: "case-marker-wrap",
            html: `<span class="case-marker ${record.layer} ${selected}" aria-hidden="true"></span>`,
            iconSize: [18, 18],
            iconAnchor: [9 - offset.x, 9 - offset.y],
          }),
          title: localizedRecordTitle(record),
          zIndexOffset: selected ? 2000 : 0,
        }).addTo(state.map);
        marker.on("click", () => selectRecord(record.id, location));
        state.markers.set(`${record.id}:${location.id}`, marker);
      });
  });
}

function locationKey(location) {
  return `${Number(location.lat).toFixed(6)},${Number(location.lng).toFixed(6)}`;
}

function displayLocations(record) {
  return (record.locations || []).filter(isTurkeyLocation);
}

function isTurkeyLocation(location) {
  return Boolean(location.province_key || location.province === "Türkiye");
}

function recordMatchesDateRange(record) {
  const monthRange = dateRangeMonth(state.dateRange);
  if (monthRange) {
    if (!recordUsesDateRange(record)) return true;
    const date = parseDate(recordDateValue(record));
    return Boolean(date && date >= monthRange.start && date < monthRange.end);
  }

  const cutoff = dateRangeCutoff(state.dateRange);
  if (!cutoff) return true;
  if (!recordUsesDateRange(record)) return true;
  const date = parseDate(recordDateValue(record));
  return Boolean(date && date >= cutoff);
}

function recordUsesDateRange(record) {
  return record.record_type === "worker_death"
    || record.record_type === "action_call"
    || record.record_type === "labor_retaliation"
    || record.layer === "strike_ended"
    || record.layer === "strike_postponed";
}

function dateRangeCutoff(range) {
  const now = turkeyToday();
  if (range === "last_30_days") {
    now.setDate(now.getDate() - 30);
    return now;
  }
  if (range === "last_3_months") {
    now.setMonth(now.getMonth() - 3);
    return now;
  }
  if (range === "last_6_months") {
    now.setMonth(now.getMonth() - 6);
    return now;
  }
  return null;
}

function dateRangeMonth(range) {
  if (!String(range || "").startsWith(MONTH_RANGE_PREFIX)) return null;
  const month = String(range).slice(MONTH_RANGE_PREFIX.length);
  if (!/^\d{4}-\d{2}$/.test(month)) return null;
  const start = parseDate(`${month}-01`);
  if (!start) return null;
  const end = new Date(start);
  end.setMonth(end.getMonth() + 1);
  return { start, end };
}

function availableMonthKeys(records = state.records) {
  const recordMonths = new Set();
  for (const record of records) {
    if (!recordUsesDateRange(record)) continue;
    const month = monthKey(recordDateValue(record));
    if (month) recordMonths.add(month);
  }
  const endMonth = [monthKey(turkeyTodayKey()), ...recordMonths].filter(Boolean).sort().at(-1);
  return continuousMonthKeys(MONTH_RANGE_START, endMonth).reverse();
}

function monthKey(value) {
  const date = parseDate(value);
  return date ? monthKeyFromDate(date) : "";
}

function monthKeyFromDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function continuousMonthKeys(startMonth, endMonth) {
  const start = parseDate(`${startMonth}-01`);
  const end = parseDate(`${endMonth}-01`);
  if (!start || !end || start > end) return [];
  const months = [];
  const cursor = new Date(start);
  while (cursor <= end) {
    months.push(monthKeyFromDate(cursor));
    cursor.setMonth(cursor.getMonth() + 1);
  }
  return months;
}

function formatMonthRangeLabel(month) {
  const date = parseDate(`${month}-01`);
  if (!date) return month;
  if (state.lang === "kmr") return `${KMR_MONTHS[date.getMonth()]} ${date.getFullYear()}an`;
  const locale = localeForLanguage();
  const monthName = new Intl.DateTimeFormat(locale, { month: "long" }).format(date);
  return `${date.getFullYear()} ${monthName}`;
}

function markerOffset(index, total) {
  if (total <= 1) return { x: 0, y: 0 };

  let ringStart = 0;
  let ring = 0;
  let slots = Math.min(total, 8);
  while (index >= ringStart + slots) {
    ringStart += slots;
    ring += 1;
    slots = Math.min(total - ringStart, 8 * (ring + 1));
  }

  const slot = index - ringStart;
  const angle = ((Math.PI * 2) / slots) * slot - Math.PI / 2;
  const zoom = state.map?.getZoom?.() || CONFIG.defaultZoom;
  const zoomSpread = Math.min(Math.max(0, zoom - CONFIG.defaultZoom) * 4.5, 33);
  const radius = 12 + zoomSpread + (ring * (8 + (zoomSpread * 0.55)));
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

function markerLetter(record, location) {
  if (record.record_type === "worker_death") {
    const count = finiteNumber(location?.fatality_count) ?? fatalityCount(record);
    if (count > 1) return count > 999 ? "999+" : String(count);
    return "İC";
  }
  if (record.record_type === "mesem_school") return "M";
  if (record.record_type === "action_call") return record.layer === "action_call_upcoming" ? "Ç" : "E";
  if (record.record_type === "union_labor_arrest") return "T";
  return "G";
}

function renderRecordList() {
  const panel = document.getElementById("record-list-panel");
  const records = sortedFilteredRecords();
  state.listOpen = true;

  document.getElementById("case-detail").hidden = true;
  document.getElementById("empty-detail").hidden = true;
  panel.hidden = false;

  panel.innerHTML = `
    <header class="record-list-header">
      <div>
        <div class="section-label">${escapeHtml(t("list.label"))}</div>
        <h2>${escapeHtml(t("list.title"))}</h2>
        <p>${escapeHtml(formatCount(records.length))} ${escapeHtml(t("list.countLabel"))}</p>
      </div>
      <button class="icon-btn" type="button" data-close-list aria-label="${escapeHtml(t("common.close"))}">×</button>
    </header>
    ${records.length ? `<div class="record-list">${records.map(renderRecordListItem).join("")}</div>` : `<p class="record-list-empty">${escapeHtml(t("list.empty"))}</p>`}
  `;

  panel.querySelector("[data-close-list]").addEventListener("click", closeRecordList);
  panel.querySelectorAll("[data-record-list-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const record = state.records.find((item) => item.id === button.dataset.recordListId);
      if (record) selectRecord(record.id, displayLocations(record)[0] || null);
    });
  });
  updateListButton();
}

function renderRecordListItem(record) {
  const selected = record.id === state.selectedRecordId ? "selected" : "";
  return `
    <button class="record-list-item ${selected}" type="button" data-record-list-id="${escapeAttribute(record.id)}">
      <span class="record-list-dot" style="background:${LAYER_COLORS[record.layer]};${record.layer === "strike_decision" ? "border-color:#575047" : ""}"></span>
      <span class="record-list-copy">
        <strong>${escapeHtml(localizedRecordTitle(record))}</strong>
        <span>${escapeHtml(recordListMeta(record))}</span>
      </span>
    </button>
  `;
}

function sortedFilteredRecords() {
  return [...state.filtered].sort((a, b) => (
    String(recordDateValue(b)).localeCompare(String(recordDateValue(a)))
    || LAYER_ORDER.indexOf(a.layer) - LAYER_ORDER.indexOf(b.layer)
    || a.title.localeCompare(b.title, localeForLanguage())
  ));
}

function recordListMeta(record) {
  const location = record.locations[0] || {};
  const place = [location.district, location.province].filter(Boolean).join(", ");
  return [
    t(`recordType.${record.record_type}`),
    t(`status.${record.status}`),
    formatDate(recordDateValue(record)),
    place,
  ].filter(Boolean).join(dataCopy().joiner);
}

function recordDateValue(record) {
  if (record.record_type === "worker_death") return record.death_date || record.last_verified_at || "";
  if (record.record_type === "action_call") return record.event_date || record.start_date || record.decision_date || record.last_verified_at || "";
  if (record.record_type === "labor_retaliation") return record.retaliation_date || record.last_verified_at || "";
  if (record.record_type === "union_labor_arrest") return record.detention_date || record.last_verified_at || "";
  if (record.record_type === "mesem_school") return record.known_active_date || record.last_verified_at || "";
  if (record.status === "ended") return record.end_date || record.last_verified_at || record.start_date || record.decision_date || "";
  if (record.status === "postponed_banned") return record.end_date || record.last_verified_at || record.decision_date || record.start_date || "";
  return record.start_date || record.decision_date || record.end_date || record.last_verified_at || "";
}

function selectRecord(recordId, location) {
  state.selectedRecordId = recordId;
  state.listOpen = false;
  document.body.classList.add("detail-open");
  closeFilters();
  renderDetail(getSelectedRecord());
  renderMarkers();
  updateListButton();
  if (location) state.map.flyTo([location.lat, location.lng], Math.max(state.map.getZoom(), 8), { duration: 0.45 });
  setTimeout(() => state.map.invalidateSize(), 220);
}

function clearSelection() {
  state.selectedRecordId = null;
  state.listOpen = false;
  document.body.classList.remove("detail-open");
  document.getElementById("case-detail").hidden = true;
  document.getElementById("record-list-panel").hidden = true;
  document.getElementById("empty-detail").hidden = false;
  updateListButton();
  renderMarkers();
}

function getSelectedRecord() {
  return state.records.find((record) => record.id === state.selectedRecordId) || null;
}

function renderDetail(record) {
  const detail = document.getElementById("case-detail");
  const empty = document.getElementById("empty-detail");
  if (!record) {
    clearSelection();
    return;
  }
  empty.hidden = true;
  document.getElementById("record-list-panel").hidden = true;
  detail.hidden = false;

  detail.innerHTML = `
    <header class="detail-header">
      <div class="detail-topline">
        <div class="chip-row">
          ${chip(t(`recordType.${record.record_type}`), null)}
          ${chip(t(`status.${record.status}`), LAYER_COLORS[record.layer], record.layer === "strike_decision")}
        </div>
        <div class="detail-actions">
          <button class="icon-btn" type="button" data-close-detail aria-label="${escapeHtml(t("common.close"))}">×</button>
        </div>
      </div>
      <h2>${escapeHtml(localizedRecordTitle(record))}</h2>
      <p class="case-summary">${escapeHtml(localizedRecordSummary(record) || t("common.notSpecified"))}</p>
    </header>
    <div class="detail-stats">${renderTypeStats(record)}</div>
    ${record.demands.length ? detailSection(t("detail.demands"), `<div class="chip-row">${localizedDemands(record).map((demand) => chip(demand)).join("")}</div>`) : ""}
    ${detailSection(t("detail.locations"), renderLocations(record))}
    ${detailSection(t("detail.timeline"), renderTimeline(record))}
    ${detailSection(t("detail.sources"), renderSources(record))}
  `;
  detail.querySelector("[data-close-detail]").addEventListener("click", clearSelection);
}

function renderTypeStats(record) {
  if (record.record_type === "worker_death") {
    return [
      detailStat(t("detail.workerName"), localizedRecordValue(record, "worker_name", record.worker_name)),
      detailStat(t("detail.age"), record.worker_age),
      detailStat(t("detail.employer"), localizedRecordValue(record, "employer", record.employer)),
      detailStat(t("detail.sector"), localizedRecordValue(record, "sector", record.sector)),
      detailStat(t("detail.date"), formatDate(record.death_date)),
      detailStat(t("detail.cause"), localizedRecordValue(record, "cause", record.cause)),
      detailStat(t("detail.fatalityCount"), formatCount(fatalityCount(record))),
      detailStat(t("detail.legalStatus"), localizedRecordValue(record, "legal_status", record.legal_status)),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  if (record.record_type === "mesem_school") {
    return [
      detailStat(t("detail.schoolName"), localizedRecordValue(record, "school_name", record.school_name || record.title)),
      detailStat(t("detail.institutionCode"), record.institution_code),
      detailStat(t("detail.sector"), localizedRecordValue(record, "sector", record.sector)),
      detailStat(t("detail.activeDate"), formatDate(record.known_active_date)),
      detailStat(t("detail.linkedIncidents"), record.linked_incident_count),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  if (record.record_type === "action_call") {
    return [
      detailStat(t("detail.union"), localizedRecordValue(record, "labor_organization", record.labor_organization)),
      detailStat(t("detail.sector"), localizedRecordValue(record, "sector", record.sector)),
      detailStat(t("detail.actionType"), record.action_type ? t(`actionType.${record.action_type}`) : ""),
      detailStat(t("detail.eventDate"), formatDate(record.event_date || record.start_date)),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  if (record.record_type === "labor_retaliation") {
    return [
      detailStat(t("detail.employer"), localizedRecordValue(record, "employer", record.employer)),
      detailStat(t("detail.union"), localizedRecordValue(record, "labor_organization", record.labor_organization)),
      detailStat(t("detail.sector"), localizedRecordValue(record, "sector", record.sector)),
      detailStat(t("detail.retaliationType"), localizedRecordValue(record, "retaliation_type", record.retaliation_type || record.cause)),
      detailStat(t("detail.date"), formatDate(record.retaliation_date || record.last_verified_at)),
      detailStat(t("detail.legalStatus"), localizedRecordValue(record, "legal_status", record.legal_status)),
      detailStat(t("detail.linkedIncidents"), record.linked_incident_id),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  if (record.record_type === "union_labor_arrest") {
    return [
      detailStat(t("detail.person"), localizedRecordValue(record, "person_name", record.person_name || record.title)),
      detailStat(t("detail.union"), localizedRecordValue(record, "labor_organization", record.labor_organization)),
      detailStat(t("detail.role"), localizedRecordValue(record, "role", record.role)),
      detailStat(t("detail.detentionDate"), formatDate(record.detention_date)),
      detailStat(t("detail.custodyStatus"), t(`status.${record.status}`)),
      detailStat(t("detail.accusation"), localizedRecordValue(record, "accusation", record.accusation || record.legal_status)),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  return [
    detailStat(t("detail.employer"), localizedRecordValue(record, "employer", record.employer)),
    detailStat(t("detail.union"), localizedRecordValue(record, "labor_organization", record.labor_organization)),
    detailStat(t("detail.sector"), localizedRecordValue(record, "sector", record.sector)),
    detailStat(t("detail.actionType"), record.action_type ? t(`actionType.${record.action_type}`) : ""),
    detailStat(t("detail.workers"), formatCount(record.participant_count)),
    detailStat(t("detail.decisionDate"), formatDate(record.decision_date)),
    detailStat(t("detail.startDate"), formatDate(record.start_date)),
    detailStat(t("detail.endDate"), formatDate(record.end_date)),
    detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
  ].join("");
}

function detailStat(label, value) {
  const display = value || value === 0 ? String(value) : t("common.notSpecified");
  return `<div class="detail-stat"><span>${escapeHtml(label)}</span><strong>${escapeHtml(display)}</strong></div>`;
}

function detailSection(title, content) {
  return `<section class="detail-section"><h3>${escapeHtml(title)}</h3>${content}</section>`;
}

function renderLocations(record) {
  return `<div class="location-list">${record.locations.map((location) => `
    <div class="location-row">
      <strong>${escapeHtml(localizedLocationLabel(location))}</strong>
      <span>${escapeHtml(renderLocationSubtitle(location))}</span><br>
      <span>${escapeHtml(t("detail.geocode"))}: ${escapeHtml(t(`geocodePrecision.${location.geocode_precision || "unknown"}`))}</span>
      ${location.location_basis ? `<br><span>${escapeHtml(localizedLocationBasis(location))}</span>` : ""}
    </div>`).join("")}</div>`;
}

function renderLocationSubtitle(location) {
  const parts = [location.district, location.province].filter(Boolean);
  if (location.fatality_count) parts.push(`${formatCount(location.fatality_count)} ${t("detail.fatalities")}`);
  return parts.join(", ");
}

function renderTimeline(record) {
  if (!record.timeline.length) return `<p class="case-summary">${escapeHtml(t("common.notSpecified"))}</p>`;
  return `<div class="timeline-list">${record.timeline.map((item, index) => `
    <div class="timeline-row">
      <div class="timeline-date">${escapeHtml(formatDate(item.date) || "")}</div>
      <div class="timeline-body"><strong>${escapeHtml(t(`status.${item.status}`))}</strong> ${escapeHtml(localizedTimelineNote(record, item, index))}</div>
    </div>`).join("")}</div>`;
}

function renderSources(record) {
  return `<div class="source-list">${record.sources.map((source) => `
    <a class="source-row" href="${escapeAttribute(source.url)}" target="_blank" rel="noreferrer">
      <strong>${escapeHtml(localizedSourceTitle(source))}</strong>
      <span>${escapeHtml([source.publisher, formatDate(source.published_at)].filter(Boolean).join(dataCopy().joiner))}</span>
    </a>`).join("")}</div>`;
}

function chip(label, color, outlined = false) {
  const dot = color ? `<span class="chip-dot" style="background:${color};${outlined ? "border-color:#575047" : ""}"></span>` : "";
  return `<span class="chip">${dot}${escapeHtml(label)}</span>`;
}

async function submitReport(event) {
  event.preventDefault();
  const errorBox = document.getElementById("submission-error");
  errorBox.textContent = "";
  const payload = buildSubmissionPayload();
  const validationError = validateSubmission(payload);
  if (validationError) {
    errorBox.textContent = validationError;
    return;
  }

  try {
    if (state.sb) {
      const { error } = await state.sb.from("case_submissions").insert(payload);
      if (error) throw error;
      showSubmissionSuccess(t("submit.successRemote"));
    } else {
      const pending = JSON.parse(localStorage.getItem("grevtakip_pending_submissions") || "[]");
      pending.push({ ...payload, local_id: cryptoRandomId(), created_at: new Date().toISOString() });
      localStorage.setItem("grevtakip_pending_submissions", JSON.stringify(pending));
      showSubmissionSuccess(t("submit.successLocal"));
    }
  } catch (error) {
    errorBox.textContent = error.message || String(error);
  }
}

function buildSubmissionPayload() {
  const province = document.getElementById("submission-province").value;
  const center = PROVINCE_BY_NAME[province] || {};
  const latRaw = document.getElementById("submission-lat").value;
  const lngRaw = document.getElementById("submission-lng").value;
  return {
    record_type: document.getElementById("submission-record-type").value,
    title: document.getElementById("submission-title").value.trim(),
    summary: document.getElementById("submission-summary").value.trim(),
    province,
    province_key: keyForProvince(province),
    location_label: document.getElementById("submission-location").value.trim(),
    event_date: document.getElementById("submission-date").value || null,
    lat: latRaw ? Number(latRaw) : center.lat || null,
    lng: lngRaw ? Number(lngRaw) : center.lng || null,
    geocode_precision: latRaw && lngRaw ? "exact" : "province_centroid",
    source_url: document.getElementById("submission-source-url").value.trim(),
    source_title: document.getElementById("submission-source-title").value.trim(),
    submitter_contact: document.getElementById("submission-contact").value.trim(),
    status: "needs_review",
  };
}

function validateSubmission(payload) {
  if (!payload.record_type || !payload.title || !payload.summary || !payload.province || !payload.source_url) return t("submit.missing");
  if (!/^https?:\/\//i.test(payload.source_url)) return t("submit.badUrl");
  const latEntered = Boolean(document.getElementById("submission-lat").value);
  const lngEntered = Boolean(document.getElementById("submission-lng").value);
  if (latEntered !== lngEntered || !Number.isFinite(payload.lat) || !Number.isFinite(payload.lng)) return t("submit.badCoords");
  return "";
}

function showSubmissionSuccess(message) {
  document.getElementById("submission-form").hidden = true;
  document.getElementById("submission-success").hidden = false;
  document.getElementById("submission-success-copy").textContent = message;
}

function openModal(id) {
  const modal = document.getElementById(id);
  modal.setAttribute("aria-hidden", "false");
  if (id === "submit-modal") {
    document.getElementById("submission-form").hidden = false;
    document.getElementById("submission-success").hidden = true;
    document.getElementById("submission-error").textContent = "";
  }
}

function closeOpenModal() {
  document.querySelectorAll(".modal-backdrop").forEach((modal) => modal.setAttribute("aria-hidden", "true"));
}

function showLoadNotice(message) {
  const notice = document.createElement("div");
  notice.className = "load-notice";
  notice.textContent = message;
  document.querySelector(".map-region").appendChild(notice);
  setTimeout(() => notice.remove(), 8000);
}

function buildSearchBlob(record) {
  const values = [
    record.title,
    record.summary,
    record.worker_name,
    record.person_name,
    record.school_name,
    record.employer,
    record.labor_organization,
    record.sector,
    record.cause,
    record.retaliation_type,
    record.legal_status,
    record.accusation,
    record.linked_incident_id,
    ...record.demands,
    ...record.locations.flatMap((location) => [location.label, location.province, location.district]),
    ...record.sources.flatMap((source) => [source.title, source.publisher]),
  ];
  return values.filter(Boolean).join(" ").toLocaleLowerCase("tr");
}

function stringList(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return String(value).split(/[;,]/).map((item) => item.trim()).filter(Boolean);
}

function finiteNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function keyForProvince(name) {
  if (!name) return "";
  const existing = PROVINCE_BY_NAME[name];
  if (existing) return existing.key;
  const normalized = normalizeAscii(name);
  return PROVINCES.find((province) => normalizeAscii(province.name) === normalized || province.key === normalized)?.key || "";
}

function cleanTitle(value) {
  if (!value) return "";
  return String(value)
    .toLocaleLowerCase("tr")
    .split(/\s+/)
    .map((word) => word ? word[0].toLocaleUpperCase("tr") + word.slice(1) : "")
    .join(" ");
}

function normalizeAscii(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/İ/g, "I")
    .replace(/ı/g, "i")
    .toUpperCase();
}

function parseDate(value) {
  if (!value) return null;
  const normalized = String(value);
  const date = new Date(`${normalized.length === 7 ? `${normalized}-01` : normalized}T00:00:00`);
  return Number.isNaN(date.valueOf()) ? null : date;
}

function dateKey(value) {
  const date = parseDate(value);
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function turkeyToday() {
  return parseDate(turkeyTodayKey());
}

function turkeyTodayKey() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const lookup = Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
  return `${lookup.year}-${lookup.month}-${lookup.day}`;
}

function formatDate(value) {
  const date = parseDate(value);
  if (!date) return "";
  if (state.lang === "kmr") return formatKmrDate(date, String(value).length === 7);
  const options = String(value).length === 7
    ? { year: "numeric", month: "short" }
    : { year: "numeric", month: "short", day: "numeric" };
  return new Intl.DateTimeFormat(localeForLanguage(), options).format(date);
}

function formatKmrDate(date, monthOnly = false) {
  const month = KMR_MONTHS[date.getMonth()];
  const year = `${date.getFullYear()}an`;
  if (monthOnly) return `${month} ${year}`;
  return `${date.getDate()}ê ${month} ${year}`;
}

function formatCount(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "";
  return new Intl.NumberFormat(localeForLanguage()).format(number);
}

function localeForLanguage() {
  return LANGUAGE_META[state.lang]?.locale || "en";
}

function slugify(value) {
  return normalizeAscii(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || cryptoRandomId();
}

function cryptoRandomId() {
  if (crypto?.randomUUID) return crypto.randomUUID();
  return Math.random().toString(36).slice(2);
}

function t(path) {
  return lookupCopy(COPY[state.lang], path)
    ?? lookupCopy(COPY.en, path)
    ?? lookupCopy(COPY.tr, path)
    ?? path;
}

function lookupCopy(root, path) {
  const parts = path.split(".");
  let value = root;
  for (const part of parts) value = value?.[part];
  return typeof value === "string" ? value : null;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}
