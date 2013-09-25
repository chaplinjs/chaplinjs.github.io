(function() {
  var query = function(selector) {
    return document.querySelector(selector);
  };
  var queryAll = function(selector) {
    return [].slice.call(document.querySelectorAll(selector));
  };
  var links = queryAll('.page-nav > li > a');
  links.forEach(function(link) {
    link.className = link.className.replace('active', '');
    var re = new RegExp(link.getAttribute('data-pattern'));
    if (re.test(location.href)) link.className += ' active';
  });

  query('.page-nav .toggle-navigation').addEventListener('click', function() {
    queryAll('.page-nav .nav-toggle-content').forEach(function(item) {
      var existing = window.getComputedStyle(item).display;
      var newStyle = (existing === 'none') ? 'list-item' : 'none';
      item.style.display = newStyle;
    });
  }, true);

  var tabs = query('.tabs');
  if (tabs) {
    query('.gist-file').classList.add('selected');
    tabs.addEventListener('click', function(event) {
      var target = event.target;
      if (target.tagName.toLowerCase() !== 'li') return;
      var text = target.textContent || target.innerText;
      var extension = (/template/.test(text)) ? '-hbs' : '-coffee';
      var file = text.trim().split('/').pop() + extension;
      var metaLink = query('.gist-meta > a[href$="file-' + file + '"]');
      // if (!metaLink) return;
      queryAll('.gist-file.selected').forEach(function(_) {
        _.classList.remove('selected');
      });
      metaLink.parentNode.parentNode.classList.add('selected');
    });
  }
})();
