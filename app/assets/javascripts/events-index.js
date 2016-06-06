function lampPostMain() {

  /*
  ================================================================
    DOM Selections
  ================================================================
  */
  DOM.main                      = select.element('.main');
  DOM.sideBar                   = select.element('.side-bar');
  DOM.siteHeader                = select.element('.site-header');
  DOM.siteLogo                  = select.element('.site-logo');
  DOM.eventFilters              = select.element('.event-filters');
  DOM.eventFiltersToggleButton  = select.element('.event-filters__toggle-button');
  DOM.eventFiltersFilterGroups  = select.all('.event-filters__group');
  DOM.filters                   = select.children('.event-filters__filter');
  DOM.eventCards                = select.all('.event-card');
  DOM.shareableLinks            = select.all('.shareable-link');

  /*
  ================================================================
    Page Init
  ================================================================
  */
  DOM.html.classList.remove('no-js');
  DOM.html.classList.add('js');

  Element.prototype.taggedWith = extensions.TaggedWith;

  var QS = QueryString();
  var TAG_MANAGER = TagManager(QS.parse(window.location.search));
  var CARD_LIST = CardList(DOM.eventCards);


  /*
  ================================================================
    Helper Functions
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

  function toggleFilters() {
    DOM.sideBar.classList.toggle('filters-open');
  }


  /*
  ================================================================
    Event Listeners
  ================================================================
  */
  window.addEventListener('scroll', throttle(updateHeader, 50));
  window.addEventListener('popstate', updatePageState);
  DOM.eventFiltersToggleButton.addEventListener('click', toggleFilters);
  DOM.eventFiltersFilterGroups.forEach(setupFiltering);
  DOM.shareableLinks.forEach(setupShareableLink);


  /*
  ================================================================
    Event Handlers
  ================================================================
  */
  function updateHeader() {
    var scrollPos = scrollPosition(),
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

  function updatePageState() {
    var pageState = history.state ? history.state : {};
    TAG_MANAGER.setTags(pageState);
    updateFilters();
    updateEventListing();
  }

  function setupFiltering(filterGroup) {
    var filters = DOM.filters.from(filterGroup);
    var category = filterGroup.getAttribute('data-filter-category');
    filters.forEach(function(filter) {
      filter.addEventListener('change', function(e) {
        updateTags.bind(filter)(category);
        updateHistory();
        updateEventListing();
        e.stopPropagation();
      });
    });
  }

  function updateHistory() {
    history.pushState(TAG_MANAGER.tags(), null, TAG_MANAGER.serializeTags());
  }

  function updateFilters() {
    DOM.eventFiltersFilterGroups.each(function(filterGroup) {
      var filters = DOM.filters.from(filterGroup);
      filters.forEach(function(filter) {
        var tag = filter.getAttribute('data-tag');
        if(TAG_MANAGER.has(tag)) {
          filter.checked = true;
        } else {
          filter.checked = false;
        }
      });
    });
  }

  function updateTags(category) {
    var tag = this.getAttribute('data-tag');
    if(this.checked) {
      TAG_MANAGER.add([tag], category);
    } else {
      TAG_MANAGER.remove([tag], category);
    }
  }

  function updateEventListing() {
    var tags = TAG_MANAGER.allTags();
    var visCards = CARD_LIST.cardsWith(tags);
    var hidCards = CARD_LIST.cardsWithout(tags);
    visCards.forEach(showElement);
    hidCards.forEach(hideElement);
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
