//
// config.js

const Cu = Components.utils;

try {

  Cu.import("resource://gre/modules/Services.jsm");
  Cu.import("resource://gre/modules/osfile.jsm");

  if (!Services.appinfo.inSafeMode) {
    let path = OS.Constants.Path.libDir;
    var ucjsDirPath = OS.Path.join(path, "userChromeJS");
    path = OS.Path.join(ucjsDirPath, "main.js");
    let mainFileURI = OS.Path.toFileURI(path);
    Services.scriptloader.loadSubScript(mainFileURI, this, "UTF-8");
  };

} catch(e) {
  Cu.reportError(e);
};