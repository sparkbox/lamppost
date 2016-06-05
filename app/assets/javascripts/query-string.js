function QueryString() {
  function parse(str) {
    if(!str) return;
    var query = str.slice(1);
    var tagCategories = query.split('&');
    return tagCategories.reduce(function(obj, tagCategory) {
      var keyVal = tagCategory.split('=');
      var key = keyVal[0];
      var vals = keyVal[1].split(',').map(decodeURI);
      obj[key] = vals;
      return obj;
    }, {});
  }

  return {
    parse: parse
  };
}
