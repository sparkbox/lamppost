function TagManager() {
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
}
