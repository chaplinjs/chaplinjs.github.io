(function() {
  var queryAll = function(selector) {
    return [].slice.call(document.querySelectorAll(selector));
  };
  var links = queryAll('.page-nav > li > a');
  links.forEach(function(link) {
    link.className = link.className.replace('active', '');
    var re = new RegExp(link.getAttribute('data-pattern'));
    if (re.test(location.href)) link.className += ' active';
  });

  document.querySelector('.page-nav .toggle-navigation').addEventListener('click', function() {
    queryAll('.page-nav .nav-toggle-content').forEach(function(item) {
      var existing = window.getComputedStyle(item).display;
      var newStyle = (existing === 'none') ? 'list-item' : 'none';
      item.style.display = newStyle;
    });
  }, true);
})();
