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
    eventFiltersFilterGroups: select.all('.event-filters__group'),
    filters: select.children('.event-filters__filter'),
    eventCards: select.all('.event-card'),
    shareableLinks: select.all('.shareable-link'),
    scrollPosition: function(element) {
      if(element) return element.scrollTop;
      return document.documentElement.scrollTop || DOM.body.scrollTop;
    }
  };

  var TAGS = (function() {
    var activeTags = [];

    function add(tag) {
      if(!have(tag)) {
        return activeTags.push(tag);
      }
    }

    function remove(tagToRemove) {
      if(have(tagToRemove)) {
        return activeTags = activeTags.filter(function(tag) {
          return tag !== tagToRemove;
        });
      }
    }

    function have(tagToTest) {
      return activeTags.filter(function(tag) {
        return tag === tagToTest;
      }).length > 0;
    }

    function list() {
      return activeTags;
    }

    return {
      add: add,
      remove: remove,
      have: have,
      list: list
    };
  })();


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
  window.addEventListener('scroll', throttle(updateHeader, 50));
  DOM.eventFiltersToggleButton.addEventListener('click', toggleFilters);
  DOM.eventFiltersFilterGroups.each(setupFiltering);
  DOM.shareableLinks.each(setupShareableLink);


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
    DOM.sideBar.classList.add('fixed-top');
  }

  function relPositionFilters() {
    DOM.sideBar.classList.remove('fixed-top');
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

  function setupFiltering(filterGroup) {
    var filters = DOM.filters.from(filterGroup);
    filters.each(function(filter) {
      filter.addEventListener('change', function(e) {
        var tag = this.dataset.tag;
        if(this.checked && !TAGS.have(tag)) {
          TAGS.add(tag);
        } else {
          TAGS.remove(tag);
        }
        updateEventListing();
        e.stopPropagation();
      });
    });
  }

  function updateEventListing() {
    if(TAGS.list().length > 0) {
      DOM.eventCards.each(function(eventCard) {
        if(eventTagged(eventCard)) {
          showElement(eventCard);
        } else {
          hideElement(eventCard);
        }
      });
    } else {
      showAllElements(DOM.eventCards);
    }
  }

  function eventTagged(eventCard) {
    var eventTags = eventCard.getAttribute('data-tags').split(' ');
    return eventTags.filter(function(eventTag) {
      return TAGS.have(eventTag);
    }).length > 0;
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
