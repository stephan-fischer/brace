ace.define("ace/theme/textmate",["require","exports","module","ace/theme/textmate.css","ace/lib/dom"], function(acequire, exports, module){"use strict";
exports.isDark = false;
exports.cssClass = "ace-tm";
exports.cssText = acequire("./textmate.css");
exports.$id = "ace/theme/textmate";
var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass, false);

});                (function() {
                    ace.acequire(["ace/theme/textmate"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            