/**
 * 多语言 UI 翻译字典
 * 支持：英语 (en)、印尼语 (id)、中文 (zh)
 */

export const languages = {
    en: 'English',
    id: 'Bahasa Indonesia',
    zh: '中文',
};

export const defaultLang = 'en';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.events': 'Events',
        'nav.exhibitors': 'Exhibitors',
        'nav.venue': 'Venue',
        'nav.news': 'News',
        'nav.contact': 'Contact',
        'home.hero.title': 'Jakarta International Expo 2026',
        'home.hero.cta': 'Register Now',
        'events.title': 'Exhibition Events',
        'exhibitors.title': 'Exhibitor Directory',
        'news.title': 'News Center',
        'contact.title': 'Contact Us',
    },
    id: {
        'nav.home': 'Beranda',
        'nav.events': 'Acara',
        'nav.exhibitors': 'Peserta Pameran',
        'nav.venue': 'Tempat',
        'nav.news': 'Berita',
        'nav.contact': 'Kontak',
        'home.hero.title': 'Pameran Internasional Jakarta 2026',
        'home.hero.cta': 'Daftar Sekarang',
        'events.title': 'Acara Pameran',
        'exhibitors.title': 'Direktori Peserta Pameran',
        'news.title': 'Pusat Berita',
        'contact.title': 'Hubungi Kami',
    },
    zh: {
        'nav.home': '首页',
        'nav.events': '展览日程',
        'nav.exhibitors': '展商名录',
        'nav.venue': '场馆介绍',
        'nav.news': '新闻中心',
        'nav.contact': '联系我们',
        'home.hero.title': '2026 雅加达国际博览会',
        'home.hero.cta': '立即注册',
        'events.title': '展览活动',
        'exhibitors.title': '展商目录',
        'news.title': '新闻中心',
        'contact.title': '联系我们',
    },
} as const;
