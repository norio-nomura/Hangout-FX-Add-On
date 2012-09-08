/*

(The WTFPL)

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2012 Norio Nomura

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.

 */

(function (scriptFileName) {
    var handleLoad = function (evt) {
        if (evt.target.nodeName === 'SCRIPT' && evt.target.src.match('.*fx-config.js$')) {
            window.document.removeEventListener("load", handleLoad, true);
            var scriptFileNames;
            if (typeof scriptFileName === 'string') {
                scriptFileNames = [scriptFileName];
            } else if (typeof scriptFileName === 'object' && Array.isArray(scriptFileName)) {
                scriptFileNames = scriptFileName;
            }
            if (Array.isArray(scriptFileNames)) {
                if (typeof safari !== 'undefined') {
                    scriptFileNames.forEach(function (scriptFilename) {
                        var script = window.document.createElement('script');
                        script.src = safari.extension.baseURI + scriptFilename;
                        window.document.head.appendChild(script);
                    });
                } else if (typeof chrome !== 'undefined') {
                    scriptFileNames.forEach(function (scriptFilename) {
                        var script = window.document.createElement('script');
                        script.src = chrome.extension.getURL(scriptFilename);
                        window.document.head.appendChild(script);
                    });
                }
            }
            delete handleLoad;
        }
    };
    window.document.addEventListener("load", handleLoad, true);
})([
    'Hangout-FX-Add-On.js'
]);
