// DOM Selections
var DOM = {
  body: select.element('body'),
  sideBar: select.element('.side-bar'),
  siteHeader: select.element('.site-header'),
  siteLogo: select.element('.site-logo'),
  btnToggleFilters: select.element('.event-filters__toggle-button'),
  eventFilters: select.element('.event-filters__filters'),
  shareableLinks: select.all('.shareable-link'),
  scrollPosition: function() {
    return document.documentElement.scrollTop || DOM.body.scrollTop;
  }
};


// Page Init
DOM.sideBar.classList.add('hide-filters'); // Hide filters on mobile view by default


// Event Listeners
window.addEventListener('scroll', throttle(updateHeader, 80));
DOM.btnToggleFilters.addEventListener('click', toggleFilters);
DOM.shareableLinks.forEach(setupShareableLink);


// Event Handlers
function shrinkHeader() {
  DOM.siteHeader.classList.add('compact');
}

function expandHeader() {
  DOM.siteHeader.classList.remove('compact');
}

function updateHeader(e) {
  if(DOM.scrollPosition() > 40) {
    shrinkHeader();
  } else {
    expandHeader();
  }
}

function toggleFilters() {
  DOM.sideBar.classList.toggle('hide-filters');
}

function setupShareableLink(linkComponent) {
  var linkInput = select.child('.shareable-url-text-input').from(linkComponent);

  linkInput.addEventListener('click', function(e) {
    linkInput.select();
  });

  if(document.queryCommandSupported('copy')) {
    copyButton = document.createElement('button');
    copyButton.classList.add('card-button', 'copy-button');
    copyButton.setAttribute('title', 'Copy Link');
    copyButton.innerHTML = 'Copy Link to Clipboard';
    linkComponent.appendChild(copyButton);

    copyButton.addEventListener('click', function(e) {
      linkInput.select();
      document.execCommand('copy');
    });
  }
}
