(function() {
  if (location == 'chrome://browser/content/browser.xhtml') {
    document.getElementById('cmd_find').setAttribute('oncommand',
      'if (!gFindBar || gFindBar.hidden) { gLazyFindCommand("onFindCommand") } else { gFindBar.close() }'
    );
  };
})();
