const selectItem = (offerItem, btn) => {
  const links = [
    'https://apple.com',
    'https://google.com',
  ];
  btn.href = links[offerItem.getAttribute('aria-label') - 1];
  offerItem.classList.add('offers__item_selected');
}

export const initButton = (offerItems, btn) => {
  const [ firstOffer ] = offerItems;
  selectItem(firstOffer, btn);

  offerItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      offerItems.forEach(item => item.classList.remove('offers__item_selected'));
      selectItem(event.currentTarget, btn);
    });
  });
}
