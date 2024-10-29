import './src/styles/style.css';
import './src/styles/button.css';
import './src/styles/cards.css';
import './src/styles/links.css';
import './src/styles/normalize.css';
import './src/styles/offers.css';
import { getLocale, getTranslatedText, initButton, translate } from './src/app';

const init  = () => {
  const offers = document.querySelectorAll('.offers__item');
  const btn = document.querySelector('.button');
  initButton(offers, btn);
  const locale = getLocale();
  const data = getTranslatedText(locale);
  translate(data);
  document.querySelector('html').setAttribute('lang', locale);
}
init();

