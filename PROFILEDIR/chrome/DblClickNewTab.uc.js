(function() {

/* Neuen Tab per Doppelklick öffnen *******************************************/ 
gBrowser.tabContainer.addEventListener('dblclick', function(event) {
	if (event.target.localName != 'tabs' && event.target.localName != 'toolbarbutton') {
		return;
	}
	gBrowser.selectedTab = gBrowser.addTab('about:home');
	event.preventDefault();
	event.stopPropagation();
});

})();