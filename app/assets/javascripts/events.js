// DOM Selections
var DOM = {
  btnToggleFilters: select.element('.event-filters__toggle-button'),
  sideBar: select.element('.side-bar'),
  eventFilters: select.element('.event-filters__filters'),
  shareableLinks: select.all('.sharable-link')
};


// Page Init
DOM.sideBar.classList.add('hide-filters'); // Hide filters on mobile view by default


// Event Listeners
DOM.btnToggleFilters.addEventListener('click', toggleFilters);
DOM.shareableLinks.forEach(setupShareableLink);


// Event Handlers
function toggleFilters() {
  DOM.sideBar.classList.toggle('hide-filters');
}

function setupShareableLink(linkComponent) {
  var linkInput = select.child('input').from(linkComponent),
      copyButton = document.createElement('button');

  copyButton.classList.add('card-button', 'copy-button');
  copyButton.innerHTML = 'Copy Link to Clipboard';
  linkComponent.appendChild(copyButton);

  linkInput.addEventListener('focus', function(e) {
    linkInput.select();
  });

  copyButton.addEventListener('click', function(e) {
    linkInput.select();
    document.execCommand('copy');
  });
}
