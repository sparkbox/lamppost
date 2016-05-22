var select = {

  element: function(element) {
    return document.querySelector(element);
  },

  all: function(elements) {
    return document.querySelectorAll(elements);
  },

  child: function(child) {
    return {
      from: function(parentElement) {
        return parentElement.querySelector(child);
      }
    };
  },

  children: function(children) {
    return {
      from: function(parentElement) {
        return parentElement.querySelectorAll(children);
      }
    };
  }
};
