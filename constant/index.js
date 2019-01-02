export const AppConstant = {
  VERSION: '0.0.1',
  TITLE: "Qur'an Offline",
  LAST_READ: 'Terakhir dibaca',
  FAVORITE: 'Surat favorit',
  RECOMMENDATION: 'Surat rekomendasi',
  SEARCH_PAGE: 'Pencarian'
}

export const ApiPath = {
  SURAH_INFO: '/data/surah-info.json',
  SURAH_BY_ID: (id) => `/data/surah/${id}.json`
}

export const Theme = {
  LIGHT: 'light',
  DARK: 'dark'
}

export const storageKey = {
  ALL_SURAH: 'ALL_SURAH',
  SURAH_BY_ID: (id) => `SURAH_${id}`,
  FAVORITE: 'FAV',
  LAST_READ: 'LAST_READ'
}

export const SurahDefaultObject = {
  number: 0,
  name: '',
  name_latin: '',
  number_of_ayah: '',
  text: [],
  translations: {
    id: {
      name: '',
      text: ''
    }
  }
}

export const surahStaticRecommendation = [
  {
    translation: 'Yusuf',
    arabic: 'يوسف',
    latin: 'Yusuf',
    ayah_count: 111,
    index: 12
  },
  { translation: 'Goa', arabic: 'الكهف', latin: 'Al-Kahf', ayah_count: 110, index: 18 },
  { translation: 'Yasin',
    arabic: 'يٰسۤ',
    latin: 'Yasin',
    ayah_count: 83,
    index: 36
  },
  {
    translation: 'Maha Pengasih',
    arabic: 'الرحمن',
    latin: 'Ar-Rahman',
    ayah_count: 78,
    index: 55
  },
  {
    translation: 'Hari Kiamat',
    arabic: 'الواقعة',
    latin: "Al-Waqi'ah",
    ayah_count: 96,
    index: 56
  },
  {
    translation: 'Jumat',
    arabic: 'الجمعة',
    latin: "Al-Jumu'ah",
    ayah_count: 11,
    index: 62
  },
  {
    translation: 'Kerajaan',
    arabic: 'الملك',
    latin: 'Al-Mulk',
    ayah_count: 30,
    index: 67
  }
]
