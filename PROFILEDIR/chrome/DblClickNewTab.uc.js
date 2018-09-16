/* Neuen Tab per Doppelklick öffnen *******************************************/
(function() {
gBrowser.tabContainer.addEventListener('dblclick', function(event) {
	if (event.target.localName != 'tabs' && event.target.localName != 'toolbarbutton') {
		return;
	}
	gBrowser.selectedTab = BrowserOpenTab();
	event.preventDefault();
	event.stopPropagation();
});
})();

/* Alternative Methode ******************************************************
location == "chrome://browser/content/browser.xul" && (function () {
	(document.getElementById("tabbrowser-tabs") || gBrowser.mTabBox).addEventListener('dblclick', function (e) {
		e.preventDefault();
			e.button == 0 && e.originalTarget.localName == "box" && BrowserOpenTab()
	}, false)
})()*/
