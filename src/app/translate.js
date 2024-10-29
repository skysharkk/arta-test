export const translate = (translatedText) =>{
  document.querySelectorAll('[data-lang]').forEach((item) => {
    const priceRegExp = /\{\{([^}]+)\}\}/g;
    const key = item.getAttribute('data-lang');
    if(priceRegExp.test(key)) {
      const price = item.getAttribute('data-price');
      item.innerHTML = translatedText[key].replace(priceRegExp, `$${price}`);
    } else {
      item.innerHTML = translatedText[key];
    }
  });
};
