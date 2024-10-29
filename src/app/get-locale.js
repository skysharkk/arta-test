export const getLocale = () => {
  const urlLocale =new URLSearchParams(window.location.search).get('lang');
  if(urlLocale) {
    return urlLocale;
  }
  return navigator.language.split('-')[0];
}
