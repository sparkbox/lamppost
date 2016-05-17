// DOM Selections
var DOM = {
  btnToggleFilters: select('.event-filters__toggle-button'),
  sideBar: select('.side-bar'),
  eventFilters: select('.event-filters__filters')
};


// Page Init
DOM.sideBar.classList.add('hide-filters');


// Event Listeners
DOM.btnToggleFilters.addEventListener('click', function(e) {
  DOM.sideBar.classList.toggle('hide-filters');
});
