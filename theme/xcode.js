ace.define("ace/theme/xcode.css",["require","exports","module"], function(acequire, exports, module){module.exports = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: EE3AD170-2B7F-4DE1-B724-C75F13FE0085) */\n\n.ace-xcode .ace_gutter {\n  background: #e8e8e8;\n  color: #333\n}\n\n.ace-xcode .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8\n}\n\n.ace-xcode {\n  background-color: #FFFFFF;\n  color: #000000\n}\n\n.ace-xcode .ace_cursor {\n  color: #000000\n}\n\n.ace-xcode .ace_marker-layer .ace_selection {\n  background: #B5D5FF\n}\n\n.ace-xcode.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #FFFFFF;\n}\n\n.ace-xcode .ace_marker-layer .ace_step {\n  background: rgb(198, 219, 174)\n}\n\n.ace-xcode .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #BFBFBF\n}\n\n.ace-xcode .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.071)\n}\n\n.ace-xcode .ace_gutter-active-line {\n  background-color: rgba(0, 0, 0, 0.071)\n}\n\n.ace-xcode .ace_marker-layer .ace_selected-word {\n  border: 1px solid #B5D5FF\n}\n\n.ace-xcode .ace_constant.ace_language,\n.ace-xcode .ace_keyword,\n.ace-xcode .ace_meta,\n.ace-xcode .ace_variable.ace_language {\n  color: #C800A4\n}\n\n.ace-xcode .ace_invisible {\n  color: #BFBFBF\n}\n\n.ace-xcode .ace_constant.ace_character,\n.ace-xcode .ace_constant.ace_other {\n  color: #275A5E\n}\n\n.ace-xcode .ace_constant.ace_numeric {\n  color: #3A00DC\n}\n\n.ace-xcode .ace_entity.ace_other.ace_attribute-name,\n.ace-xcode .ace_support.ace_constant,\n.ace-xcode .ace_support.ace_function {\n  color: #450084\n}\n\n.ace-xcode .ace_fold {\n  background-color: #C800A4;\n  border-color: #000000\n}\n\n.ace-xcode .ace_entity.ace_name.ace_tag,\n.ace-xcode .ace_support.ace_class,\n.ace-xcode .ace_support.ace_type {\n  color: #790EAD\n}\n\n.ace-xcode .ace_storage {\n  color: #C900A4\n}\n\n.ace-xcode .ace_string {\n  color: #DF0002\n}\n\n.ace-xcode .ace_comment {\n  color: #008E00\n}\n\n.ace-xcode .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==) right repeat-y\n}\n\n.ace-xcode .ace_indent-guide-active {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC\") right repeat-y;\n} \n";

});

ace.define("ace/theme/xcode",["require","exports","module","ace/theme/xcode.css","ace/lib/dom"], function(acequire, exports, module){exports.isDark = false;
exports.cssClass = "ace-xcode";
exports.cssText = acequire("./xcode.css");
var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass, false);

});                (function() {
                    ace.acequire(["ace/theme/xcode"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            