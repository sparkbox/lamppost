function TagManager(initTags) {

  var _activeTags = initTags || {};

  function _exists(item, arr, fromIndex) {
    return arr.indexOf(item, (fromIndex || 0)) > -1;
  }

  function add(tagList, category) {
    if(!_activeTags.hasOwnProperty(category)) {
      _activeTags[category] = tagList || [];
    } else {
      var newTags = tagList.filter(function(tag) {
        return !_exists(tag, _activeTags[category]);
      });
      Array.prototype.push.apply(_activeTags[category], newTags);
    }
    return _activeTags;
  }

  function remove(removalList, category) {
    if(!_activeTags.hasOwnProperty(category)) return;
    _activeTags[category] = _activeTags[category].filter(function(tag) {
      return !_exists(tag, removalList);
    });
    return _activeTags;
  }

  function has(tag, category) {
    var categories = category ? [category] : Object.getOwnPropertyNames(_activeTags);
    return categories.filter(function(cat) {
      return _exists(tag, _activeTags[cat]);
    }).length > 0;
  }

  function category(cat) {
    return {
      list: function() {
        return _activeTags[cat];
      },
      has: function(tag) {
        return has(tag, cat);
      }
    };
  }

  function tags() {
    return _activeTags;
  }

  function serializeTags() {
    var categoryNames = Object.getOwnPropertyNames(_activeTags),
        categoryDelimiter;
    var queryString = categoryNames.reduce(function(qs, category, i) {
      categoryDelimiter = i < (categoryNames.length - 1) ? '&' : '';
      return qs + category  + '=' + _activeTags[category].join(',') + categoryDelimiter;
    }, '?');
    return encodeURI(queryString);
  }

  return {
    add: add,
    remove: remove,
    has: has,
    category: category,
    tags: tags,
    serializeTags: serializeTags
  };
}
