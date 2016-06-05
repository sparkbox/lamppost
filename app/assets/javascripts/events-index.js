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
  var QS = QueryString();
  var initialTags = QS.parse(window.location.search);
  var TAG_MANAGER = TagManager(initialTags);

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
  DOM.eventFiltersToggleButton.addEventListener('click', toggleFilters);
  DOM.eventFiltersFilterGroups.each(setupFiltering);
  DOM.shareableLinks.each(setupShareableLink);


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

  function setupFiltering(filterGroup) {
    var category = filterGroup.getAttribute('data-filter-category');
    var filters = DOM.filters.from(filterGroup);
    filters.each(function(filter) {
      filter.addEventListener('change', function(e) {
        updateTags.call(this, category, e);
        updateEventListing(category);
        history.pushState(null, null, TAG_MANAGER.serializeTags());
      });
    });
  }

  function updateTags(category, e) {
    var tag = this.getAttribute('data-tag');
    if(this.checked) {
      TAG_MANAGER.add([tag], category);
    } else {
      TAG_MANAGER.remove([tag], category);
    }
    e.stopPropagation();
  }

  function updateEventListing(tagCategory) {
    if(TAG_MANAGER.category(tagCategory).list().length > 0) {
      DOM.eventCards.each(updateEventCard);
    } else {
      showAllElements(DOM.eventCards);
    }
  }

  function updateEventCard(eventCard) {
    if(cardActive(eventCard)) {
      showElement(eventCard);
    } else {
      hideElement(eventCard);
    }
  }

  function cardActive(eventCard) {
    var cardTags = eventCard.getAttribute('data-tags').split(' ');
    return cardTags.filter(function(tag) {
      return TAG_MANAGER.has(tag);
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
