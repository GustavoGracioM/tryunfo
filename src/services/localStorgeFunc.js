if (!JSON.parse(localStorage.getItem('cards'))) {
  localStorage.setItem('cards', JSON.stringify([]));
}

export const readCards = () => JSON.parse(localStorage.getItem('cards'));

const saveCards = (cartProduct) => localStorage
  .setItem('cards', JSON.stringify(cartProduct));

export const removeCard = (product) => {
  const cartProduct = readCards();
  console.log(product);
  saveCards(cartProduct.filter((item) => item.cardId !== product.cardId));
};

export const addCards = (card) => {
  const cards = readCards();
  if (card) {
    const newCard = { ...card, cardId: cards.length + 1 };
    saveCards([...cards, newCard]);
  }
};
