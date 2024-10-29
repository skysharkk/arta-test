
let link;
export const initButton = (offerItems, btn) => {
  const links = [
    'https://apple.com',
    'https://google.com',
  ];
  offerItems.forEach((item) => {
    item.addEventListener('click', (event) =>{
      offerItems.forEach(item => item.classList.remove('offers__item_selected'));
      link = links[event.currentTarget.getAttribute('aria-label') - 1];
      event.currentTarget.classList.add('offers__item_selected');
      btn.classList.remove('button_disabled');
    });
  });

  btn.addEventListener('click', () => {
    if(link) {
      btn.href = link;
    }
  });
}
