var select = DomSelector();

var DOM = {
  html: select.element('html'),
  body: select.element('body')
};

function scrollPosition(element) {
  if(element) return element.scrollTop;
  return document.documentElement.scrollTop || document.body.scrollTop;
}

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

function showAllElements(elements) {
  elements.each(function(element) {
    showElement(element);
  });
}
