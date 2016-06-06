function TagManager(initTags) {

  var _activeTags = initTags || {};

  function _categoryNames() {
    return Object.getOwnPropertyNames(_activeTags) || [];
  }

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

  function setTags(tagObject) {
    return _activeTags = tagObject;
  }

  function remove(removalList, category) {
    if(!_activeTags.hasOwnProperty(category)) return;
    _activeTags[category] = _activeTags[category].filter(function(tag) {
      return !_exists(tag, removalList);
    });
    return _activeTags;
  }

  function has(tag, category) {
    var categories = category ? [category] : _categoryNames();
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

  function allTags() {
    return _categoryNames().reduce(function(tagList, category) {
      Array.prototype.push.apply(tagList, _activeTags[category]);
      return tagList;
    }, []);
  }

  function serializeTags() {
    if(allTags().length < 1) return '/';
    var categoryDelimiter;
    var queryString = _categoryNames().reduce(function(qs, category, i) {
      categoryDelimiter = i < (_categoryNames().length - 1) ? '&' : '';
      return qs + category  + '=' + _activeTags[category].join(',') + categoryDelimiter;
    }, '?');
    return encodeURI(queryString);
  }

  return {
    add: add,
    setTags: setTags,
    remove: remove,
    has: has,
    category: category,
    tags: tags,
    allTags: allTags,
    serializeTags: serializeTags
  };
}
