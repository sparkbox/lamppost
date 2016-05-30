function lampPostMain() {

  /*
  ================================================================
    DOM Selections & State
  ================================================================
  */
  var DOM = {
    html: select.element('html'),
    body: select.element('body'),
    main: select.element('.main'),
    sideBar: select.element('.side-bar'),
    siteHeader: select.element('.site-header'),
    siteLogo: select.element('.site-logo'),
    eventFilters: select.element('.event-filters'),
    eventFiltersToggleButton: select.element('.event-filters__toggle-button'),
    eventFiltersFilterGroups: select.element('.event-filters__filters'),
    shareableLinks: select.all('.shareable-link'),
    scrollPosition: function(element) {
      if(element) return element.scrollTop;
      return document.documentElement.scrollTop || DOM.body.scrollTop;
    }
  };


  /*
  ================================================================
    Page Init
  ================================================================
  */
  // Swap js class on html element
  DOM.html.classList.remove('no-js');
  DOM.html.classList.add('js');


  /*
  ================================================================
    Event Listeners
  ================================================================
  */
  window.addEventListener('scroll', throttle(updateHeader, 80));
  DOM.eventFiltersToggleButton.addEventListener('click', toggleFilters);
  DOM.shareableLinks.forEach(setupShareableLink);


  /*
  ================================================================
  Event Handlers
  ================================================================
  */
  function shrinkHeader() {
    DOM.siteHeader.classList.add('compact');
  }

  function expandHeader() {
    DOM.siteHeader.classList.remove('compact');
  }

  function fixPositionFilters() {
    DOM.eventFilters.classList.add('fixed-top');
  }

  function relPositionFilters() {
    DOM.eventFilters.classList.remove('fixed-top');
  }

  function updateHeader() {
    var scrollPos = DOM.scrollPosition(),
        filtersTop = DOM.siteHeader.getBoundingClientRect().bottom;

    if(scrollPos > 40) {
      shrinkHeader();
    } else {
      expandHeader();
    }

    if(filtersTop < 1) {
      fixPositionFilters();
    } else {
      relPositionFilters();
    }
  }

  function toggleFilters() {
    DOM.sideBar.classList.toggle('filters-open');
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
}

document.addEventListener('DOMContentLoaded', lampPostMain);
