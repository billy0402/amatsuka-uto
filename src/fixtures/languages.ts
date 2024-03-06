export enum Language {
  jp = 'ja-JP',
  en = 'en-US',
  zh = 'zh-TW',
}

export const defaultLanguage = Language.jp;

export const languages = [
  { label: 'JP', locale: Language.jp },
  { label: 'EN', locale: Language.en },
  // { label: 'TW', locale: Language.zh },
];
