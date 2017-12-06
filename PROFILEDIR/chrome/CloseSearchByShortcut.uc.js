(function() {
  if (location == 'chrome://browser/content/browser.xul') {
    document.getElementById('cmd_find').setAttribute('oncommand',
      'if (gFindBar.hidden) { gFindBar.onFindCommand() } else { gFindBar.close() }');
  };
})();
