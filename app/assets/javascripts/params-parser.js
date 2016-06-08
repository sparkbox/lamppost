function parseParams() {
  if(!window.location.search) return;
  var query = window.location.search.slice(1);
  var tagCategories = query.split('&');
  return query.map(function(tagCategory) {
    var keyVal = tagCategory.split('=');
    var key = keyVal[0];
    var vals = keyVal[1].split(',').map(decodeURI);
    return { [key]: vals };
  });
}

function encodeTags() {
  if(!TAGS.list()) return;
}
