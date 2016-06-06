var extensions = {

  TaggedWith: function(tags) {
    var dataTags = this.getAttribute('data-tags').split(' ');
    return tags.filter(function(tag) {
      return dataTags.indexOf(tag) > -1;
    }).length > 0;
  }
};
