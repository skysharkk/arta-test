import * as langs from '../i18n';

export const getTranslatedText = (locale) => {
  if(locale in langs) {
    return langs[locale];
  }
  return langs['en'];
};
