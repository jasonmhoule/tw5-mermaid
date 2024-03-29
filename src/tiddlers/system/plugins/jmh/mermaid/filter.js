/*\
created: 20211217030345055
type: application/javascript
title: $:/plugins/jmh/mermaid/filter.js
tags: 
modified: 20211221121841137
module-type: filteroperator

A filter to encode and decode base64

@preserve
\*/
(function () {
    "use strict";
    exports.mermaid = function (e, r, t) {
        var n = r.operand;
        try {var outstr = atob(n.replace(/.*\/#/,"").replaceAll("_","/").replaceAll('-','+'));} catch(i) {var outstr= "" }

        try {
            switch(r.suffix) {
              case "removeapocode":
                n = "";
                e(function(e,r){n+=r});
                n = n.replaceAll("\\'","'");
                break;
              case "encode":
                n = btoa(n).replaceAll("/","_");
                break;
              case "getcode":
                try {
                    n = JSON.parse(outstr).code;
                } catch (i) {
                    return [];
                }
                break;
              case "gettheme":
                try {
                    n = JSON.parse(JSON.parse(outstr).mermaid).theme;
                } catch (i) {
                    return ["default"];
                }
                break;
              case "getthemevars":
                try {
                    n = JSON.stringify(JSON.parse(JSON.parse(outstr).mermaid).themeVariables).substring(1).slice(0, -1);;
                } catch (i) {
                    return [""];
                }
                break;
              default:
                n = "Mermaid filter requires a valid suffix."
            }
        } catch (i) {
            return ["Error in mermaid filter:\n" + i];
        }
        return [n];
    };
})();
