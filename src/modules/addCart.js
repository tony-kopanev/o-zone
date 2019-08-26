// Работа с товаром, добавление в корзину
export default function addCart() {
  const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter');

  cards.forEach(card => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
      const cardClone = card.cloneNode(true);
      cartWrapper.appendChild(cardClone);
      showData();

      const removeBtn = cardClone.querySelector('.btn');
      removeBtn.textContent = 'Удалить из корзины';
      removeBtn.addEventListener('click', () => {
        cardClone.remove();
        showData();
      });
    });
  });

  function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card'),
      cardsPrices = cartWrapper.querySelectorAll('.card-price'),
      cardTotal = document.querySelector('.cart-total span');

    countGoods.textContent = cardsCart.length;
    let sum = 0;
    cardsPrices.forEach(price => {
      let cardPrice = parseFloat(price.textContent);
      sum += cardPrice;
    });
    cardTotal.textContent = sum;

    if (cardsCart.length === 0) cartWrapper.appendChild(cartEmpty);
    else cartEmpty.remove();
  }
} // end Работа с товаром, добавление в корзину