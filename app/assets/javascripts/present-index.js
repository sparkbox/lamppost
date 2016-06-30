var cards = select.all(".present-card");
var curCardIndex = -1;

function changeCard(card) {
  card.style.zIndex = "1"
}

function advanceCard() {
    ++curCardIndex;
    if (curCardIndex >= cards.length) {
        curCardIndex = 0;
    }
    changeCard(cards[curCardIndex]);
}

var intervalID = setInterval(advanceCard, 5000);
