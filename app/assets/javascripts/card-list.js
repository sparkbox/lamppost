function CardList(initialCards) {

  var _cardList = initialCards || [];

  function cards() {
    return _cardList;
  }

  function cardsWith(tags) {
    if(tags.length < 1) return cards();
    return Array.prototype.filter.call(_cardList, function(card) {
      return card.taggedWith(tags);
    });
  }

  function cardsWithout(tags) {
    if(tags.length < 1) return [];
    return Array.prototype.filter.call(_cardList, function(card) {
      return !card.taggedWith(tags);
    });
  }

  return {
    cards: cards,
    cardsWith: cardsWith,
    cardsWithout: cardsWithout
  };
}
