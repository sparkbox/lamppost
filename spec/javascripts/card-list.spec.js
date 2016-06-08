describe('CardList', function() {

  it('holds a list of cards', function() {
    let list = CardList([]);
    expect(list.cards()).toEqual([]);
  });

  it('returns a list of cards that match a set of tags', function() {
    let card1 = { taggedWith: function(tags) { return true; } };
    let card2 = { taggedWith: function(tags) { return true; } };
    let card3 = { taggedWith: function(tags) { return false; } };
    let list = CardList([card1, card2, card3]);
    let expected = [card1, card2];
    expect(list.cardsWith(['a', 'b'])).toEqual(expected);
  });

  it('returns a list of cards that don\'t match a set of tags', function() {
    let card1 = { taggedWith: function(tags) { return true; } };
    let card2 = { taggedWith: function(tags) { return false; } };
    let card3 = { taggedWith: function(tags) { return false; } };
    let list = CardList([card1, card2, card3]);
    let expected = [card2, card3];
    expect(list.cardsWithout(['a', 'b'])).toEqual(expected);
  });
});
