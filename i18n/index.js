/* eslint-disable @typescript-eslint/no-var-requires */
const enUSI18n = require('./en-US.json');
const jaJP18n = require('./ja-JP.json');
const zhTWI18n = require('./zh-TW.json');

const i18n = {
  translations: {
    'ja-JP': jaJP18n,
    'en-US': enUSI18n,
    'zh-TW': enUSI18n,
  },
  defaultLang: 'ja-JP',
  useBrowserDefault: true,
};

module.exports = i18n;
