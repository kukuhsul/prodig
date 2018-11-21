'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var classNames = _interopDefault(require('classnames'));
var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@charset \"UTF-8\";\n/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\nhtml{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}code,kbd,pre,samp{font-family:monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}";
styleInject(css);

var css$1 = "@charset \"UTF-8\";.Button_button__3_Ozh{border:1px solid #f2f2f2;box-shadow:0 2px 6px 0 rgba(0,0,0,.16),0 1px 4px 0 rgba(0,0,0,.21);display:inline-block;font-weight:500;text-align:center;vertical-align:middle;font-size:1rem;border-radius:6px;line-height:1;padding:.9375rem 1.125rem}.Button_button__3_Ozh.Button_disabled__3O5v9,.Button_button__3_Ozh:disabled{opacity:.75;pointer-events:none}.Button_button__3_Ozh:not(:disabled):not(.Button_disabled__3O5v9){cursor:pointer}.Button_button--orange__1p7X5{color:#fff;background:linear-gradient(261deg,#ff711c,#ff9b4b);border-color:transparent;transition:box-shadow 150ms ease-in}.Button_button--orange__1p7X5:hover{box-shadow:none}";
var styles = {"button":"Button_button__3_Ozh","disabled":"Button_disabled__3O5v9","button--orange":"Button_button--orange__1p7X5"};
styleInject(css$1);

/**
 * Button
 * ------------------------------------------------------------
 * Render `<a>` tag if there is url
 * otherwise `<button>`
 */
function Button(_a) {
    var children = _a.children, className = _a.className, disabled = _a.disabled, iconOnly = _a.iconOnly, label = _a.label, type = _a.type, url = _a.url, variant = _a.variant;
    var classes = classNames(styles['button'], className, variant && styles["button--" + variant], url && disabled && styles['disabled'], /** add `.disabled` class to disabled anchor tag */ iconOnly && styles['button--icon-only'] /** only containing icon, larger font size */);
    return url ? (React.createElement("a", { "aria-disabled": disabled, "aria-label": label, className: classes, href: url, tabIndex: disabled ? -1 : 0 }, children)) : (React.createElement("button", { "aria-label": label, className: classes, disabled: disabled, type: type }, children));
}

var css$2 = "@charset \"UTF-8\";.Fieldset_fieldset__2jO3b{margin-bottom:1.25rem}.Fieldset_fieldset__helper__szb7F,.Fieldset_fieldset__label__3fnio{display:block;font-size:.75rem}.Fieldset_fieldset__label__3fnio{color:#83878c;font-weight:500;margin-bottom:.75rem;text-transform:uppercase}.Fieldset_fieldset__helper__szb7F{color:#6e6e6e;margin:.375rem 0 0;opacity:.5}";
var styles$1 = {"fieldset":"Fieldset_fieldset__2jO3b","fieldset__helper":"Fieldset_fieldset__helper__szb7F","fieldset__label":"Fieldset_fieldset__label__3fnio"};
styleInject(css$2);

/**
 * Fieldset
 * ------------------------------------------------------------
 */
function Fieldset(_a) {
    var children = _a.children, className = _a.className, fieldName = _a.fieldName, helper = _a.helper, label = _a.label;
    return (React.createElement("div", { className: styles$1['fieldset'] },
        React.createElement("label", { className: styles$1['fieldset__label'], htmlFor: fieldName }, label),
        children,
        helper &&
            (React.createElement("p", { className: styles$1['fieldset__helper'] }, helper))));
}

var css$3 = "@charset \"UTF-8\";input{border:1px solid #d4d4d4;border-radius:6px;padding:.9375rem 1.125rem;color:#4e4e4e;font-size:1rem}";
var styles$2 = {};
styleInject(css$3);

/**
 * Input
 * ------------------------------------------------------------
 * Render `<input>`
 */
function Input(_a) {
    var className = _a.className, disabled = _a.disabled, id = _a.id, name = _a.name, type = _a.type;
    return (React.createElement("input", { "aria-disabled": disabled, className: styles$2['input'], disabled: disabled, id: id, name: name, tabIndex: disabled ? -1 : 0, type: type }));
}

// /**

exports.Button = Button;
exports.Fieldset = Fieldset;
exports.Input = Input;
