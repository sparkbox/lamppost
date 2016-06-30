var cards = select.all(".present-card");
var curCardIndex = 0;
var zNum = 0;

// function changeCard(card) {
//   zNum = -1;
//   card.style.zIndex = zNum;
// }


function advanceCard(card) {
  console.log(curCardIndex);
  // changeCard(cards[curCardIndex]);

  cards[curCardIndex].style.zIndex = zNum;
  ++zNum;

  if (curCardIndex >= cards.length) {
    curCardIndex = 0;
  } else {
    ++curCardIndex;
  }
}

var intervalID = setInterval(advanceCard, 1000);

// clearInterval(intervalID)
