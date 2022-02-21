'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get__default['default'](theme, path, fallback);
}; };

var rotate = styled.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled__default['default'].svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" }))); };

var Icon$1 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" }))); };

var Icon$2 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" }))); };

var Icon$3 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" }))); };

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return (small ? "14px" : fontSize || "16px");
};
var Text = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled__default['default'].button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getDisabledStyles, removePointerEvents, styledSystem.space);
StyledButton.defaultProps = {
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React__default['default'].createElement(StyledButton, __assign({}, internalProps, props, { disabled: isDisabled }),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" }))); };

var Icon$5 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" }))); };

var Icon$6 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
    React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" }))); };

var Icon$7 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" }))); };

var Icon$8 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" }))); };

var Icon$9 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
    React__default['default'].createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" }))); };

var Icon$a = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" }))); };

var Icon$b = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
    React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
    React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" }))); };

var Icon$c = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 196 196" }, props),
    React__default['default'].createElement("circle", { stroke: "#979797", strokeWidth: 4, fill: "#D8D8D8", cx: 98, cy: 98, r: 98, fillRule: "evenodd" }))); };

var Icon$d = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" }))); };

var Icon$e = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
    React__default['default'].createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
    React__default['default'].createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
    React__default['default'].createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
    React__default['default'].createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
    React__default['default'].createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
    React__default['default'].createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" }))); };

var Icon$f = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
    React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" }))); };

var Icon$g = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" }))); };

var Icon$h = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" }))); };

var Icon$i = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" }))); };

var Icon$j = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" }))); };

var Icon$k = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" }))); };

var Icon$l = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" }))); };

var Icon$m = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" }))); };

var Icon$n = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" }))); };

var Icon$o = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
    React__default['default'].createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" }))); };

var Icon$p = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" }))); };

var Icon$q = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 60 60", width: "24px", height: "24px", style: { maxWidth: 24 } }, props),
    React__default['default'].createElement("g", { id: "Colour" },
        React__default['default'].createElement("path", { d: "m52 30a21.654 21.654 0 0 1 -.58 5c-.1.47-.22.93-.36 1.39a21.933 21.933 0 0 1 -5 8.65h-.01c-.32.35-.66.69-1.01 1.01v.01a21.933 21.933 0 0 1 -8.65 5c-.46.14-.92.26-1.39.36a21.842 21.842 0 0 1 -10 0c-.47-.1-.93-.22-1.39-.36a21.933 21.933 0 0 1 -8.65-5v-.01c-.35-.32-.69-.66-1.01-1.01h-.01a21.933 21.933 0 0 1 -5-8.65c-.14-.46-.26-.92-.36-1.39a21.842 21.842 0 0 1 0-10c.1-.47.22-.92.36-1.38v-.01a21.933 21.933 0 0 1 5-8.65h.01c.32-.35.66-.69 1.01-1.01v-.01a21.933 21.933 0 0 1 8.65-5c.46-.14.92-.26 1.39-.36a21.842 21.842 0 0 1 10 0c.47.1.93.22 1.39.36a21.933 21.933 0 0 1 8.65 5v.01c.35.32.69.66 1.01 1.01h.01a21.933 21.933 0 0 1 5 8.65c.14.46.26.92.36 1.39a21.654 21.654 0 0 1 .58 5z", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m51.42 25c-.1-.47-.22-.93-.36-1.39a21.933 21.933 0 0 0 -5-8.65h-.01c-.32-.35-.66-.69-1.01-1.01v-.01a21.933 21.933 0 0 0 -8.65-5c-.46-.14-.92-.26-1.39-.36a21.654 21.654 0 0 0 -5-.58c-.5 0-1 .022-1.5.056a21.476 21.476 0 0 1 3.5.524c.47.1.93.22 1.39.36a21.933 21.933 0 0 1 8.65 5v.01c.35.32.69.66 1.01 1.01h.01a21.933 21.933 0 0 1 5 8.65c.14.46.26.92.36 1.39a21.842 21.842 0 0 1 0 10c-.1.47-.22.93-.36 1.39a21.933 21.933 0 0 1 -5 8.65h-.01c-.32.35-.66.69-1.01 1.01v.01a21.933 21.933 0 0 1 -8.65 5c-.46.14-.92.26-1.39.36a21.476 21.476 0 0 1 -3.5.524c.5.034 1 .056 1.5.056a21.654 21.654 0 0 0 5-.58c.47-.1.93-.22 1.39-.36a21.933 21.933 0 0 0 8.65-5v-.01c.35-.32.69-.66 1.01-1.01h.01a21.933 21.933 0 0 0 5-8.65c.14-.46.26-.92.36-1.39a21.842 21.842 0 0 0 0-10z", fill: "#fec108" }),
        React__default['default'].createElement("path", { d: "m35 8.58a21.842 21.842 0 0 0 -10 0l4.14-7.08a.987.987 0 0 1 1.72 0z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m23.61 8.94a21.933 21.933 0 0 0 -8.65 5l.05-8.19a.986.986 0 0 1 1.49-.86z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m23.62 8.95-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m13.94 14.96a21.933 21.933 0 0 0 -5 8.65l-4.05-7.11a.986.986 0 0 1 .86-1.49z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m8.95 23.62-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m8 30a21.654 21.654 0 0 0 .58 5l-7.08-4.14a.987.987 0 0 1 0-1.72l7.08-4.14a21.654 21.654 0 0 0 -.58 5z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m13.94 45.04-8.19-.05a.986.986 0 0 1 -.86-1.49l4.05-7.11a21.933 21.933 0 0 0 5 8.65z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m8.95 36.38-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m23.61 51.06-7.11 4.05a.986.986 0 0 1 -1.49-.86l-.05-8.19a21.933 21.933 0 0 0 8.65 5z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m23.62 51.05-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m35 51.42-4.14 7.08a.987.987 0 0 1 -1.72 0l-4.14-7.08a21.842 21.842 0 0 0 10 0z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m45.04 46.06-.05 8.19a.986.986 0 0 1 -1.49.86l-7.11-4.05a21.933 21.933 0 0 0 8.65-5z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m36.39 51.06-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m54.25 44.99-8.19.05a21.933 21.933 0 0 0 5-8.65l4.05 7.11a.986.986 0 0 1 -.86 1.49z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m51.06 36.39-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m58.5 30.86-7.08 4.14a21.842 21.842 0 0 0 0-10l7.08 4.14a.987.987 0 0 1 0 1.72z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m55.11 16.5-4.05 7.11a21.933 21.933 0 0 0 -5-8.65l8.19.05a.986.986 0 0 1 .86 1.49z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m51.06 23.61-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m45.04 13.94a21.933 21.933 0 0 0 -8.65-5l7.11-4.05a.986.986 0 0 1 1.49.86z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m36.39 8.94-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m31.275 29.962.482 1.686a6 6 0 0 0 5.769 4.352h3.474a5 5 0 0 0 5-5v-2.431l1.447-.723a1 1 0 0 0 .553-.895v-1.251a1 1 0 0 0 -.7-.957 21.835 21.835 0 0 0 -6.3-.743c-5 0-6 1-11 1s-6-1-11-1a21.835 21.835 0 0 0 -6.295.74 1 1 0 0 0 -.7.957v1.254a1 1 0 0 0 .553.895l1.442.723v2.431a5 5 0 0 0 5 5h3.474a6 6 0 0 0 5.769-4.352l.482-1.686a1.326 1.326 0 0 1 1.275-.962 1.326 1.326 0 0 1 1.275.962z", fill: "#673ab7" }),
        React__default['default'].createElement("path", { d: "m47.3 24.74a21.835 21.835 0 0 0 -6.3-.74c-.549 0-1.043.014-1.506.035a19.637 19.637 0 0 1 4.8.7 1 1 0 0 1 .7.957v1.254a1 1 0 0 1 -.553.895l-1.441.728v2.431a5 5 0 0 1 -5 5h3a5 5 0 0 0 5-5v-2.431l1.447-.723a1 1 0 0 0 .553-.895v-1.251a1 1 0 0 0 -.7-.96z", fill: "#4527a0" }),
        React__default['default'].createElement("path", { d: "m26 40h8a0 0 0 0 1 0 0v1a4 4 0 0 1 -4 4 4 4 0 0 1 -4-4v-1a0 0 0 0 1 0 0z", fill: "#f5f5f5" }),
        React__default['default'].createElement("path", { d: "m31 40v1a4 4 0 0 1 -2.5 3.7 3.989 3.989 0 0 0 5.5-3.7v-1z", fill: "#cfd8dc" })),
    React__default['default'].createElement("g", { id: "Outline" },
        React__default['default'].createElement("path", { d: "m1.06 31.789 6.706 3.922c.051.2.11.406.168.608l-3.843 6.743a1.987 1.987 0 0 0 1.7 3h.016l7.793.038q.21.216.426.426l.044 7.778a1.966 1.966 0 0 0 .993 1.739 1.988 1.988 0 0 0 1 .27 1.966 1.966 0 0 0 .994-.272l6.755-3.85c.2.058.4.117.608.168l3.915 6.694a1.988 1.988 0 0 0 3.454.012l3.922-6.706c.2-.051.406-.11.608-.168l6.744 3.844a1.972 1.972 0 0 0 2 .008 1.963 1.963 0 0 0 .994-1.725l.044-7.792q.216-.21.426-.426l7.779-.044a1.9 1.9 0 0 0 1.739-.994 1.963 1.963 0 0 0 0-1.991l-3.85-6.755c.058-.2.116-.4.168-.608l6.7-3.916a1.988 1.988 0 0 0 .01-3.453l-6.714-3.919c-.052-.205-.11-.406-.168-.608l3.843-6.744a1.986 1.986 0 0 0 -1.7-3h-.016l-7.792-.044q-.21-.216-.426-.426l-.044-7.778a1.988 1.988 0 0 0 -2.985-1.737l-6.755 3.853c-.2-.057-.4-.116-.608-.167l-3.915-6.694a1.987 1.987 0 0 0 -3.454-.012l-3.922 6.706c-.205.051-.406.11-.608.167l-6.745-3.843a1.987 1.987 0 0 0 -2.995 1.717l-.044 7.79q-.216.21-.426.426l-7.779.044a2.054 2.054 0 0 0 -1.739.994 1.963 1.963 0 0 0 0 1.991l3.85 6.755c-.058.2-.117.4-.168.608l-6.7 3.916a1.987 1.987 0 0 0 -.01 3.453zm29-22.724a21 21 0 1 1 -21 21 21.024 21.024 0 0 1 21.002-21zm-24.24 35 2.98-5.232a23.006 23.006 0 0 0 3.055 5.267zm10.249 10.244-.034-6.035a23.006 23.006 0 0 0 5.265 3.052zm14 3.749-3.041-5.2a22.465 22.465 0 0 0 6.078 0zm14-3.751-5.232-2.982a23.034 23.034 0 0 0 5.263-3.052zm10.238-10.248-6.036.034a23.043 23.043 0 0 0 3.052-5.262zm3.749-14-5.2 3.042a22.473 22.473 0 0 0 0-6.079zm-3.753-14-2.981 5.241a23.006 23.006 0 0 0 -3.052-5.262zm-10.247-10.237.034 6.035a22.969 22.969 0 0 0 -5.262-3.052zm-14-3.749 3.041 5.2a22.358 22.358 0 0 0 -6.078 0zm-14 3.751 5.244 2.982a23.013 23.013 0 0 0 -5.263 3.052zm-10.238 10.248 6.036-.034a23.021 23.021 0 0 0 -3.054 5.262zm1.451 10.955a22.365 22.365 0 0 0 0 6.079l-5.2-3.037z" }),
        React__default['default'].createElement("path", { d: "m22.537 37.065a7.029 7.029 0 0 0 6.731-5.076l.482-1.689a.338.338 0 0 1 .625 0l.482 1.686a7.028 7.028 0 0 0 6.731 5.077h3.474a6.006 6.006 0 0 0 6-6v-1.81l.9-.447a1.989 1.989 0 0 0 1.1-1.789v-1.255a1.99 1.99 0 0 0 -1.411-1.912 22.719 22.719 0 0 0 -6.589-.785 30.51 30.51 0 0 0 -5.664.514 28.437 28.437 0 0 1 -5.336.486 28.416 28.416 0 0 1 -5.335-.486 30.523 30.523 0 0 0 -5.665-.514 22.716 22.716 0 0 0 -6.588.785 1.991 1.991 0 0 0 -1.412 1.912v1.255a1.99 1.99 0 0 0 1.106 1.789l.894.447v1.812a6.007 6.007 0 0 0 6 6zm-7.475-6v-2.43a1 1 0 0 0 -.552-.9l-1.448-.723v-1.25a20.837 20.837 0 0 1 6-.7 28.424 28.424 0 0 1 5.336.487 30.525 30.525 0 0 0 5.664.513 30.537 30.537 0 0 0 5.665-.513 28.4 28.4 0 0 1 5.335-.487 20.815 20.815 0 0 1 6 .7v1.255l-1.447.723a1 1 0 0 0 -.553.9v2.43a4 4 0 0 1 -4 4h-3.474a5.02 5.02 0 0 1 -4.807-3.626l-.481-1.692a2.326 2.326 0 0 0 -4.473 0l-.482 1.687a5.02 5.02 0 0 1 -4.807 3.626h-3.476a4 4 0 0 1 -4-4z" }),
        React__default['default'].createElement("g", { fill: "#f5f5f5" },
            React__default['default'].createElement("path", { d: "m19.769 27.358a1 1 0 0 0 -1.414 0l-1 1a1 1 0 1 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414z" }),
            React__default['default'].createElement("path", { d: "m19.355 32.772a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 -1.414-1.414l-3 3a1 1 0 0 0 0 1.414z" }),
            React__default['default'].createElement("path", { d: "m36.062 30.065a.993.993 0 0 0 .707-.293l1-1a1 1 0 1 0 -1.414-1.414l-1 1a1 1 0 0 0 .707 1.707z" }),
            React__default['default'].createElement("path", { d: "m37.355 32.772a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0 -1.414-1.414l-3 3a1 1 0 0 0 0 1.414z" })),
        React__default['default'].createElement("path", { d: "m34.062 39.065h-8a1 1 0 0 0 -1 1v1a5 5 0 1 0 10 0v-1a1 1 0 0 0 -1-1zm-4 5a3 3 0 0 1 -3-3h6a3 3 0 0 1 -3 3z" })))); };

var Icon$r = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 60 60", width: "24px", height: "24px", style: { maxWidth: 24 } }, props),
    React__default['default'].createElement("g", { id: "Colour" },
        React__default['default'].createElement("path", { d: "m52 30a21.654 21.654 0 0 1 -.58 5c-.1.47-.22.93-.36 1.39a21.933 21.933 0 0 1 -5 8.65h-.01c-.32.35-.66.69-1.01 1.01v.01a21.933 21.933 0 0 1 -8.65 5c-.46.14-.92.26-1.39.36a21.842 21.842 0 0 1 -10 0c-.47-.1-.93-.22-1.39-.36a21.933 21.933 0 0 1 -8.65-5v-.01c-.35-.32-.69-.66-1.01-1.01h-.01a21.933 21.933 0 0 1 -5-8.65c-.14-.46-.26-.92-.36-1.39a21.842 21.842 0 0 1 0-10c.1-.47.22-.92.36-1.38v-.01a21.933 21.933 0 0 1 5-8.65h.01c.32-.35.66-.69 1.01-1.01v-.01a21.933 21.933 0 0 1 8.65-5c.46-.14.92-.26 1.39-.36a21.842 21.842 0 0 1 10 0c.47.1.93.22 1.39.36a21.933 21.933 0 0 1 8.65 5v.01c.35.32.69.66 1.01 1.01h.01a21.933 21.933 0 0 1 5 8.65c.14.46.26.92.36 1.39a21.654 21.654 0 0 1 .58 5z", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m51.42 25c-.1-.47-.22-.93-.36-1.39a21.933 21.933 0 0 0 -5-8.65h-.01c-.32-.35-.66-.69-1.01-1.01v-.01a21.933 21.933 0 0 0 -8.65-5c-.46-.14-.92-.26-1.39-.36a21.654 21.654 0 0 0 -5-.58c-.5 0-1 .022-1.5.056a21.476 21.476 0 0 1 3.5.524c.47.1.93.22 1.39.36a21.933 21.933 0 0 1 8.65 5v.01c.35.32.69.66 1.01 1.01h.01a21.933 21.933 0 0 1 5 8.65c.14.46.26.92.36 1.39a21.842 21.842 0 0 1 0 10c-.1.47-.22.93-.36 1.39a21.933 21.933 0 0 1 -5 8.65h-.01c-.32.35-.66.69-1.01 1.01v.01a21.933 21.933 0 0 1 -8.65 5c-.46.14-.92.26-1.39.36a21.476 21.476 0 0 1 -3.5.524c.5.034 1 .056 1.5.056a21.654 21.654 0 0 0 5-.58c.47-.1.93-.22 1.39-.36a21.933 21.933 0 0 0 8.65-5v-.01c.35-.32.69-.66 1.01-1.01h.01a21.933 21.933 0 0 0 5-8.65c.14-.46.26-.92.36-1.39a21.842 21.842 0 0 0 0-10z", fill: "#fec108" }),
        React__default['default'].createElement("path", { d: "m35 8.58a21.842 21.842 0 0 0 -10 0l4.14-7.08a.987.987 0 0 1 1.72 0z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m23.61 8.94a21.933 21.933 0 0 0 -8.65 5l.05-8.19a.986.986 0 0 1 1.49-.86z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m23.62 8.95-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m13.94 14.96a21.933 21.933 0 0 0 -5 8.65l-4.05-7.11a.986.986 0 0 1 .86-1.49z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m8.95 23.62-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m8 30a21.654 21.654 0 0 0 .58 5l-7.08-4.14a.987.987 0 0 1 0-1.72l7.08-4.14a21.654 21.654 0 0 0 -.58 5z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m13.94 45.04-8.19-.05a.986.986 0 0 1 -.86-1.49l4.05-7.11a21.933 21.933 0 0 0 5 8.65z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m8.95 36.38-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m23.61 51.06-7.11 4.05a.986.986 0 0 1 -1.49-.86l-.05-8.19a21.933 21.933 0 0 0 8.65 5z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m23.62 51.05-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m35 51.42-4.14 7.08a.987.987 0 0 1 -1.72 0l-4.14-7.08a21.842 21.842 0 0 0 10 0z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m45.04 46.06-.05 8.19a.986.986 0 0 1 -1.49.86l-7.11-4.05a21.933 21.933 0 0 0 8.65-5z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m36.39 51.06-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m54.25 44.99-8.19.05a21.933 21.933 0 0 0 5-8.65l4.05 7.11a.986.986 0 0 1 -.86 1.49z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m51.06 36.39-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m58.5 30.86-7.08 4.14a21.842 21.842 0 0 0 0-10l7.08 4.14a.987.987 0 0 1 0 1.72z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m55.11 16.5-4.05 7.11a21.933 21.933 0 0 0 -5-8.65l8.19.05a.986.986 0 0 1 .86 1.49z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m51.06 23.61-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m45.04 13.94a21.933 21.933 0 0 0 -8.65-5l7.11-4.05a.986.986 0 0 1 1.49.86z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m36.39 8.94-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m31.275 29.962.482 1.686a6 6 0 0 0 5.769 4.352h3.474a5 5 0 0 0 5-5v-2.431l1.447-.723a1 1 0 0 0 .553-.895v-1.251a1 1 0 0 0 -.7-.957 21.835 21.835 0 0 0 -6.3-.743c-5 0-6 1-11 1s-6-1-11-1a21.835 21.835 0 0 0 -6.295.74 1 1 0 0 0 -.7.957v1.254a1 1 0 0 0 .553.895l1.442.723v2.431a5 5 0 0 0 5 5h3.474a6 6 0 0 0 5.769-4.352l.482-1.686a1.326 1.326 0 0 1 1.275-.962 1.326 1.326 0 0 1 1.275.962z", fill: "#673ab7" }),
        React__default['default'].createElement("path", { d: "m47.3 24.74a21.835 21.835 0 0 0 -6.3-.74c-.549 0-1.043.014-1.506.035a19.637 19.637 0 0 1 4.8.7 1 1 0 0 1 .7.957v1.254a1 1 0 0 1 -.553.895l-1.441.728v2.431a5 5 0 0 1 -5 5h3a5 5 0 0 0 5-5v-2.431l1.447-.723a1 1 0 0 0 .553-.895v-1.251a1 1 0 0 0 -.7-.96z", fill: "#4527a0" }),
        React__default['default'].createElement("path", { d: "m26 40h8a0 0 0 0 1 0 0v1a4 4 0 0 1 -4 4 4 4 0 0 1 -4-4v-1a0 0 0 0 1 0 0z", fill: "#f5f5f5" }),
        React__default['default'].createElement("path", { d: "m31 40v1a4 4 0 0 1 -2.5 3.7 3.989 3.989 0 0 0 5.5-3.7v-1z", fill: "#cfd8dc" })),
    React__default['default'].createElement("g", { id: "Outline" },
        React__default['default'].createElement("path", { d: "m1.06 31.789 6.706 3.922c.051.2.11.406.168.608l-3.843 6.743a1.987 1.987 0 0 0 1.7 3h.016l7.793.038q.21.216.426.426l.044 7.778a1.966 1.966 0 0 0 .993 1.739 1.988 1.988 0 0 0 1 .27 1.966 1.966 0 0 0 .994-.272l6.755-3.85c.2.058.4.117.608.168l3.915 6.694a1.988 1.988 0 0 0 3.454.012l3.922-6.706c.2-.051.406-.11.608-.168l6.744 3.844a1.972 1.972 0 0 0 2 .008 1.963 1.963 0 0 0 .994-1.725l.044-7.792q.216-.21.426-.426l7.779-.044a1.9 1.9 0 0 0 1.739-.994 1.963 1.963 0 0 0 0-1.991l-3.85-6.755c.058-.2.116-.4.168-.608l6.7-3.916a1.988 1.988 0 0 0 .01-3.453l-6.714-3.919c-.052-.205-.11-.406-.168-.608l3.843-6.744a1.986 1.986 0 0 0 -1.7-3h-.016l-7.792-.044q-.21-.216-.426-.426l-.044-7.778a1.988 1.988 0 0 0 -2.985-1.737l-6.755 3.853c-.2-.057-.4-.116-.608-.167l-3.915-6.694a1.987 1.987 0 0 0 -3.454-.012l-3.922 6.706c-.205.051-.406.11-.608.167l-6.745-3.843a1.987 1.987 0 0 0 -2.995 1.717l-.044 7.79q-.216.21-.426.426l-7.779.044a2.054 2.054 0 0 0 -1.739.994 1.963 1.963 0 0 0 0 1.991l3.85 6.755c-.058.2-.117.4-.168.608l-6.7 3.916a1.987 1.987 0 0 0 -.01 3.453zm29-22.724a21 21 0 1 1 -21 21 21.024 21.024 0 0 1 21.002-21zm-24.24 35 2.98-5.232a23.006 23.006 0 0 0 3.055 5.267zm10.249 10.244-.034-6.035a23.006 23.006 0 0 0 5.265 3.052zm14 3.749-3.041-5.2a22.465 22.465 0 0 0 6.078 0zm14-3.751-5.232-2.982a23.034 23.034 0 0 0 5.263-3.052zm10.238-10.248-6.036.034a23.043 23.043 0 0 0 3.052-5.262zm3.749-14-5.2 3.042a22.473 22.473 0 0 0 0-6.079zm-3.753-14-2.981 5.241a23.006 23.006 0 0 0 -3.052-5.262zm-10.247-10.237.034 6.035a22.969 22.969 0 0 0 -5.262-3.052zm-14-3.749 3.041 5.2a22.358 22.358 0 0 0 -6.078 0zm-14 3.751 5.244 2.982a23.013 23.013 0 0 0 -5.263 3.052zm-10.238 10.248 6.036-.034a23.021 23.021 0 0 0 -3.054 5.262zm1.451 10.955a22.365 22.365 0 0 0 0 6.079l-5.2-3.037z" }),
        React__default['default'].createElement("path", { d: "m22.537 37.065a7.029 7.029 0 0 0 6.731-5.076l.482-1.689a.338.338 0 0 1 .625 0l.482 1.686a7.028 7.028 0 0 0 6.731 5.077h3.474a6.006 6.006 0 0 0 6-6v-1.81l.9-.447a1.989 1.989 0 0 0 1.1-1.789v-1.255a1.99 1.99 0 0 0 -1.411-1.912 22.719 22.719 0 0 0 -6.589-.785 30.51 30.51 0 0 0 -5.664.514 28.437 28.437 0 0 1 -5.336.486 28.416 28.416 0 0 1 -5.335-.486 30.523 30.523 0 0 0 -5.665-.514 22.716 22.716 0 0 0 -6.588.785 1.991 1.991 0 0 0 -1.412 1.912v1.255a1.99 1.99 0 0 0 1.106 1.789l.894.447v1.812a6.007 6.007 0 0 0 6 6zm-7.475-6v-2.43a1 1 0 0 0 -.552-.9l-1.448-.723v-1.25a20.837 20.837 0 0 1 6-.7 28.424 28.424 0 0 1 5.336.487 30.525 30.525 0 0 0 5.664.513 30.537 30.537 0 0 0 5.665-.513 28.4 28.4 0 0 1 5.335-.487 20.815 20.815 0 0 1 6 .7v1.255l-1.447.723a1 1 0 0 0 -.553.9v2.43a4 4 0 0 1 -4 4h-3.474a5.02 5.02 0 0 1 -4.807-3.626l-.481-1.692a2.326 2.326 0 0 0 -4.473 0l-.482 1.687a5.02 5.02 0 0 1 -4.807 3.626h-3.476a4 4 0 0 1 -4-4z" }),
        React__default['default'].createElement("g", { fill: "#f5f5f5" },
            React__default['default'].createElement("path", { d: "m19.769 27.358a1 1 0 0 0 -1.414 0l-1 1a1 1 0 1 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414z" }),
            React__default['default'].createElement("path", { d: "m19.355 32.772a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 -1.414-1.414l-3 3a1 1 0 0 0 0 1.414z" }),
            React__default['default'].createElement("path", { d: "m36.062 30.065a.993.993 0 0 0 .707-.293l1-1a1 1 0 1 0 -1.414-1.414l-1 1a1 1 0 0 0 .707 1.707z" }),
            React__default['default'].createElement("path", { d: "m37.355 32.772a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0 -1.414-1.414l-3 3a1 1 0 0 0 0 1.414z" })),
        React__default['default'].createElement("path", { d: "m34.062 39.065h-8a1 1 0 0 0 -1 1v1a5 5 0 1 0 10 0v-1a1 1 0 0 0 -1-1zm-4 5a3 3 0 0 1 -3-3h6a3 3 0 0 1 -3 3z" })))); };

var Icon$s = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
    React__default['default'].createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" }))); };

var Icon$t = function (props) {
    var theme = styled.useTheme();
    theme.isDark ? "#3C3742" : "#e9eaeb";
    theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("g", { fill: "none", fillRule: "evenodd" },
            React__default['default'].createElement("g", { transform: "translate(1 1)" },
                React__default['default'].createElement("circle", { stroke: "#979797", fill: "#D8D8D8", cx: 15, cy: 15, r: 15 }),
                React__default['default'].createElement("path", { d: "M21.008 11.174l1.621 7.203h-.003c-2.386-.584-4.772-1.993-7.162-1.993-2.39 0-4.776 1.409-7.162 1.993l-.041-.01 1.617-7.193h11.13z", fill: "#D4EDFF", fillRule: "nonzero", opacity: 0.5 }),
                React__default['default'].createElement("path", { d: "M23.339 22.54a2.087 2.087 0 01-2.035 2.547H9.13a2.087 2.087 0 01-2.035-2.546l.94-4.174.041.01c2.386-.584 4.772-1.993 7.162-1.993 2.39 0 4.776 1.409 7.162 1.993h.003l.936 4.164z", fill: "#EEF6FF", fillRule: "nonzero" }),
                React__default['default'].createElement("path", { d: "M13.497 22.542l.925-11.368h-2.87L9.35 22.542c-.253 1.305.602 2.545 1.754 2.545h3.13c-.484 0-.842-1.24-.736-2.545z", fill: "#FFF", fillRule: "nonzero" }),
                React__default['default'].createElement("path", { d: "M7.868 19.42c2.386-.583 4.98-1.992 7.37-1.992 2.39 0 5.02 1.409 7.405 1.993l-.24-1.044s-4.775-1.993-7.165-1.993c-2.39 0-4.776 1.409-7.162 1.993l-.208 1.044z", fill: "#FFF", fillRule: "nonzero", opacity: 0.75 }),
                React__default['default'].createElement("g", { opacity: 0.2, fill: "#2C4B75", fillRule: "nonzero" },
                    React__default['default'].createElement("path", { d: "M23.347 22.542l-2.565-11.368h-2.434l.925 11.368c.106 1.305-.253 2.545-.737 2.545h3.057c1.152 0 2.007-1.24 1.754-2.545z" }),
                    React__default['default'].createElement("path", { d: "M23.325 22.475a2.087 2.087 0 01-2.02 1.568H9.13a2.087 2.087 0 01-2.02-1.568l-.016.067a2.087 2.087 0 002.036 2.545h12.174a2.087 2.087 0 002.036-2.545l-.015-.067zM21.017 12.217l-.235-1.043H9.652l-.235 1.043z" })),
                React__default['default'].createElement("path", { d: "M22.911 9.393a1.043 1.043 0 01-.737 1.78H8.26a1.043 1.043 0 110-2.086h1.06a6.25 6.25 0 0111.792 0h1.06c.277 0 .543.11.738.306z", fill: "#CED8EE", fillRule: "nonzero" }),
                React__default['default'].createElement("g", { opacity: 0.75, transform: "translate(10 4.913)", fill: "#FFF", fillRule: "nonzero" },
                    React__default['default'].createElement("path", { d: "M3.826 4.522C3.826 2.024 4.76 0 5.913 0A4.522 4.522 0 001.39 4.522c0 1.739 2.435 1.043 2.435 0z" }),
                    React__default['default'].createElement("rect", { x: 0.348, y: 4.174, width: 4.522, height: 2.087, rx: 1.043 })),
                React__default['default'].createElement("g", { opacity: 0.2, fill: "#8C8C8C", fillRule: "nonzero" },
                    React__default['default'].createElement("path", { d: "M22.174 9.087H18c.348 0 .695.467.695 1.043 0 .577-.347 1.044-.695 1.044h4.174a1.043 1.043 0 000-2.087z" }),
                    React__default['default'].createElement("path", { d: "M18.88 9.087l1.207.696 1.026-.696a6.255 6.255 0 00-5.896-4.174c-.135 0-.267.008-.4.016 1.883.161 3.459 1.847 4.062 4.158zM22.174 11.174z" })),
                React__default['default'].createElement("path", { d: "M21.304 25.435H9.13a2.435 2.435 0 01-2.375-2.97l2.557-11.368a.348.348 0 01.34-.27h11.13c.163 0 .304.112.34.27l2.557 11.368a2.434 2.434 0 01-2.375 2.97zM9.93 11.522L7.433 22.618A1.739 1.739 0 009.13 24.74h12.174a1.739 1.739 0 001.697-2.12l-2.497-11.097H9.93z", fill: "#8C8C8C", fillRule: "nonzero" }),
                React__default['default'].createElement("path", { d: "M22.4 18.725a.345.345 0 01-.083-.01 24.596 24.596 0 01-2.684-.885c-1.45-.54-2.952-1.1-4.396-1.1s-2.945.56-4.397 1.1c-.876.347-1.772.642-2.682.885a.348.348 0 11-.165-.676 24.039 24.039 0 002.604-.86c1.51-.562 3.07-1.144 4.64-1.144 1.57 0 3.13.581 4.64 1.143.85.337 1.721.624 2.605.861a.348.348 0 01-.082.686zM22.174 11.522H8.26a1.391 1.391 0 110-2.783h.818a6.6 6.6 0 0112.276 0h.819a1.391 1.391 0 110 2.783zM8.26 9.435a.696.696 0 000 1.391h13.913a.696.696 0 000-1.391h-1.06a.347.347 0 01-.328-.232 5.905 5.905 0 00-11.138 0 .348.348 0 01-.328.232H8.26z", fill: "#8C8C8C", fillRule: "nonzero" }),
                React__default['default'].createElement("path", { d: "M16.99 9.442a.522.522 0 110-1.043.522.522 0 010 1.043zM13.513 9.442a.522.522 0 110-1.043.522.522 0 010 1.043zM15.252 7.706a.522.522 0 110-1.044.522.522 0 010 1.044z", fill: "#8C8C8C", fillRule: "nonzero" })),
            React__default['default'].createElement("path", { d: "M6.5 4.5l19 22", stroke: "#979797", strokeLinecap: "square" }))));
};

var Icon$u = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" }))); };

var Icon$v = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 60 60", width: "24px", height: "24px" }, props),
    React__default['default'].createElement("g", { id: "Colour" },
        React__default['default'].createElement("path", { d: "m52 30a21.654 21.654 0 0 1 -.58 5c-.1.47-.22.93-.36 1.39a21.933 21.933 0 0 1 -5 8.65h-.01c-.32.35-.66.69-1.01 1.01v.01a21.933 21.933 0 0 1 -8.65 5c-.46.14-.92.26-1.39.36a21.842 21.842 0 0 1 -10 0c-.47-.1-.93-.22-1.39-.36a21.933 21.933 0 0 1 -8.65-5v-.01c-.35-.32-.69-.66-1.01-1.01h-.01a21.933 21.933 0 0 1 -5-8.65c-.14-.46-.26-.92-.36-1.39a21.842 21.842 0 0 1 0-10c.1-.47.22-.92.36-1.38v-.01a21.933 21.933 0 0 1 5-8.65h.01c.32-.35.66-.69 1.01-1.01v-.01a21.933 21.933 0 0 1 8.65-5c.46-.14.92-.26 1.39-.36a21.842 21.842 0 0 1 10 0c.47.1.93.22 1.39.36a21.933 21.933 0 0 1 8.65 5v.01c.35.32.69.66 1.01 1.01h.01a21.933 21.933 0 0 1 5 8.65c.14.46.26.92.36 1.39a21.654 21.654 0 0 1 .58 5z", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m51.42 25c-.1-.47-.22-.93-.36-1.39a21.933 21.933 0 0 0 -5-8.65h-.01c-.32-.35-.66-.69-1.01-1.01v-.01a21.933 21.933 0 0 0 -8.65-5c-.46-.14-.92-.26-1.39-.36a21.654 21.654 0 0 0 -5-.58c-.5 0-1 .022-1.5.056a21.476 21.476 0 0 1 3.5.524c.47.1.93.22 1.39.36a21.933 21.933 0 0 1 8.65 5v.01c.35.32.69.66 1.01 1.01h.01a21.933 21.933 0 0 1 5 8.65c.14.46.26.92.36 1.39a21.842 21.842 0 0 1 0 10c-.1.47-.22.93-.36 1.39a21.933 21.933 0 0 1 -5 8.65h-.01c-.32.35-.66.69-1.01 1.01v.01a21.933 21.933 0 0 1 -8.65 5c-.46.14-.92.26-1.39.36a21.476 21.476 0 0 1 -3.5.524c.5.034 1 .056 1.5.056a21.654 21.654 0 0 0 5-.58c.47-.1.93-.22 1.39-.36a21.933 21.933 0 0 0 8.65-5v-.01c.35-.32.69-.66 1.01-1.01h.01a21.933 21.933 0 0 0 5-8.65c.14-.46.26-.92.36-1.39a21.842 21.842 0 0 0 0-10z", fill: "#fec108" }),
        React__default['default'].createElement("path", { d: "m35 8.58a21.842 21.842 0 0 0 -10 0l4.14-7.08a.987.987 0 0 1 1.72 0z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m23.61 8.94a21.933 21.933 0 0 0 -8.65 5l.05-8.19a.986.986 0 0 1 1.49-.86z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m23.62 8.95-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m13.94 14.96a21.933 21.933 0 0 0 -5 8.65l-4.05-7.11a.986.986 0 0 1 .86-1.49z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m8.95 23.62-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m8 30a21.654 21.654 0 0 0 .58 5l-7.08-4.14a.987.987 0 0 1 0-1.72l7.08-4.14a21.654 21.654 0 0 0 -.58 5z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m13.94 45.04-8.19-.05a.986.986 0 0 1 -.86-1.49l4.05-7.11a21.933 21.933 0 0 0 5 8.65z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m8.95 36.38-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m23.61 51.06-7.11 4.05a.986.986 0 0 1 -1.49-.86l-.05-8.19a21.933 21.933 0 0 0 8.65 5z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m23.62 51.05-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m35 51.42-4.14 7.08a.987.987 0 0 1 -1.72 0l-4.14-7.08a21.842 21.842 0 0 0 10 0z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m45.04 46.06-.05 8.19a.986.986 0 0 1 -1.49.86l-7.11-4.05a21.933 21.933 0 0 0 8.65-5z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m36.39 51.06-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m54.25 44.99-8.19.05a21.933 21.933 0 0 0 5-8.65l4.05 7.11a.986.986 0 0 1 -.86 1.49z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m51.06 36.39-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m58.5 30.86-7.08 4.14a21.842 21.842 0 0 0 0-10l7.08 4.14a.987.987 0 0 1 0 1.72z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m55.11 16.5-4.05 7.11a21.933 21.933 0 0 0 -5-8.65l8.19.05a.986.986 0 0 1 .86 1.49z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m51.06 23.61-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m45.04 13.94a21.933 21.933 0 0 0 -8.65-5l7.11-4.05a.986.986 0 0 1 1.49.86z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m36.39 8.94-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m31.275 29.962.482 1.686a6 6 0 0 0 5.769 4.352h3.474a5 5 0 0 0 5-5v-2.431l1.447-.723a1 1 0 0 0 .553-.895v-1.251a1 1 0 0 0 -.7-.957 21.835 21.835 0 0 0 -6.3-.743c-5 0-6 1-11 1s-6-1-11-1a21.835 21.835 0 0 0 -6.295.74 1 1 0 0 0 -.7.957v1.254a1 1 0 0 0 .553.895l1.442.723v2.431a5 5 0 0 0 5 5h3.474a6 6 0 0 0 5.769-4.352l.482-1.686a1.326 1.326 0 0 1 1.275-.962 1.326 1.326 0 0 1 1.275.962z", fill: "#673ab7" }),
        React__default['default'].createElement("path", { d: "m47.3 24.74a21.835 21.835 0 0 0 -6.3-.74c-.549 0-1.043.014-1.506.035a19.637 19.637 0 0 1 4.8.7 1 1 0 0 1 .7.957v1.254a1 1 0 0 1 -.553.895l-1.441.728v2.431a5 5 0 0 1 -5 5h3a5 5 0 0 0 5-5v-2.431l1.447-.723a1 1 0 0 0 .553-.895v-1.251a1 1 0 0 0 -.7-.96z", fill: "#4527a0" }),
        React__default['default'].createElement("path", { d: "m26 40h8a0 0 0 0 1 0 0v1a4 4 0 0 1 -4 4 4 4 0 0 1 -4-4v-1a0 0 0 0 1 0 0z", fill: "#f5f5f5" }),
        React__default['default'].createElement("path", { d: "m31 40v1a4 4 0 0 1 -2.5 3.7 3.989 3.989 0 0 0 5.5-3.7v-1z", fill: "#cfd8dc" })),
    React__default['default'].createElement("g", { id: "Outline" },
        React__default['default'].createElement("path", { d: "m1.06 31.789 6.706 3.922c.051.2.11.406.168.608l-3.843 6.743a1.987 1.987 0 0 0 1.7 3h.016l7.793.038q.21.216.426.426l.044 7.778a1.966 1.966 0 0 0 .993 1.739 1.988 1.988 0 0 0 1 .27 1.966 1.966 0 0 0 .994-.272l6.755-3.85c.2.058.4.117.608.168l3.915 6.694a1.988 1.988 0 0 0 3.454.012l3.922-6.706c.2-.051.406-.11.608-.168l6.744 3.844a1.972 1.972 0 0 0 2 .008 1.963 1.963 0 0 0 .994-1.725l.044-7.792q.216-.21.426-.426l7.779-.044a1.9 1.9 0 0 0 1.739-.994 1.963 1.963 0 0 0 0-1.991l-3.85-6.755c.058-.2.116-.4.168-.608l6.7-3.916a1.988 1.988 0 0 0 .01-3.453l-6.714-3.919c-.052-.205-.11-.406-.168-.608l3.843-6.744a1.986 1.986 0 0 0 -1.7-3h-.016l-7.792-.044q-.21-.216-.426-.426l-.044-7.778a1.988 1.988 0 0 0 -2.985-1.737l-6.755 3.853c-.2-.057-.4-.116-.608-.167l-3.915-6.694a1.987 1.987 0 0 0 -3.454-.012l-3.922 6.706c-.205.051-.406.11-.608.167l-6.745-3.843a1.987 1.987 0 0 0 -2.995 1.717l-.044 7.79q-.216.21-.426.426l-7.779.044a2.054 2.054 0 0 0 -1.739.994 1.963 1.963 0 0 0 0 1.991l3.85 6.755c-.058.2-.117.4-.168.608l-6.7 3.916a1.987 1.987 0 0 0 -.01 3.453zm29-22.724a21 21 0 1 1 -21 21 21.024 21.024 0 0 1 21.002-21zm-24.24 35 2.98-5.232a23.006 23.006 0 0 0 3.055 5.267zm10.249 10.244-.034-6.035a23.006 23.006 0 0 0 5.265 3.052zm14 3.749-3.041-5.2a22.465 22.465 0 0 0 6.078 0zm14-3.751-5.232-2.982a23.034 23.034 0 0 0 5.263-3.052zm10.238-10.248-6.036.034a23.043 23.043 0 0 0 3.052-5.262zm3.749-14-5.2 3.042a22.473 22.473 0 0 0 0-6.079zm-3.753-14-2.981 5.241a23.006 23.006 0 0 0 -3.052-5.262zm-10.247-10.237.034 6.035a22.969 22.969 0 0 0 -5.262-3.052zm-14-3.749 3.041 5.2a22.358 22.358 0 0 0 -6.078 0zm-14 3.751 5.244 2.982a23.013 23.013 0 0 0 -5.263 3.052zm-10.238 10.248 6.036-.034a23.021 23.021 0 0 0 -3.054 5.262zm1.451 10.955a22.365 22.365 0 0 0 0 6.079l-5.2-3.037z" }),
        React__default['default'].createElement("path", { d: "m22.537 37.065a7.029 7.029 0 0 0 6.731-5.076l.482-1.689a.338.338 0 0 1 .625 0l.482 1.686a7.028 7.028 0 0 0 6.731 5.077h3.474a6.006 6.006 0 0 0 6-6v-1.81l.9-.447a1.989 1.989 0 0 0 1.1-1.789v-1.255a1.99 1.99 0 0 0 -1.411-1.912 22.719 22.719 0 0 0 -6.589-.785 30.51 30.51 0 0 0 -5.664.514 28.437 28.437 0 0 1 -5.336.486 28.416 28.416 0 0 1 -5.335-.486 30.523 30.523 0 0 0 -5.665-.514 22.716 22.716 0 0 0 -6.588.785 1.991 1.991 0 0 0 -1.412 1.912v1.255a1.99 1.99 0 0 0 1.106 1.789l.894.447v1.812a6.007 6.007 0 0 0 6 6zm-7.475-6v-2.43a1 1 0 0 0 -.552-.9l-1.448-.723v-1.25a20.837 20.837 0 0 1 6-.7 28.424 28.424 0 0 1 5.336.487 30.525 30.525 0 0 0 5.664.513 30.537 30.537 0 0 0 5.665-.513 28.4 28.4 0 0 1 5.335-.487 20.815 20.815 0 0 1 6 .7v1.255l-1.447.723a1 1 0 0 0 -.553.9v2.43a4 4 0 0 1 -4 4h-3.474a5.02 5.02 0 0 1 -4.807-3.626l-.481-1.692a2.326 2.326 0 0 0 -4.473 0l-.482 1.687a5.02 5.02 0 0 1 -4.807 3.626h-3.476a4 4 0 0 1 -4-4z" }),
        React__default['default'].createElement("g", { fill: "#f5f5f5" },
            React__default['default'].createElement("path", { d: "m19.769 27.358a1 1 0 0 0 -1.414 0l-1 1a1 1 0 1 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414z" }),
            React__default['default'].createElement("path", { d: "m19.355 32.772a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 -1.414-1.414l-3 3a1 1 0 0 0 0 1.414z" }),
            React__default['default'].createElement("path", { d: "m36.062 30.065a.993.993 0 0 0 .707-.293l1-1a1 1 0 1 0 -1.414-1.414l-1 1a1 1 0 0 0 .707 1.707z" }),
            React__default['default'].createElement("path", { d: "m37.355 32.772a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0 -1.414-1.414l-3 3a1 1 0 0 0 0 1.414z" })),
        React__default['default'].createElement("path", { d: "m34.062 39.065h-8a1 1 0 0 0 -1 1v1a5 5 0 1 0 10 0v-1a1 1 0 0 0 -1-1zm-4 5a3 3 0 0 1 -3-3h6a3 3 0 0 1 -3 3z" })))); };

var Icon$w = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 60 60", width: "24px", height: "24px" }, props),
    React__default['default'].createElement("g", { id: "Colour" },
        React__default['default'].createElement("path", { d: "m52 30a21.654 21.654 0 0 1 -.58 5c-.1.47-.22.93-.36 1.39a21.933 21.933 0 0 1 -5 8.65h-.01c-.32.35-.66.69-1.01 1.01v.01a21.933 21.933 0 0 1 -8.65 5c-.46.14-.92.26-1.39.36a21.842 21.842 0 0 1 -10 0c-.47-.1-.93-.22-1.39-.36a21.933 21.933 0 0 1 -8.65-5v-.01c-.35-.32-.69-.66-1.01-1.01h-.01a21.933 21.933 0 0 1 -5-8.65c-.14-.46-.26-.92-.36-1.39a21.842 21.842 0 0 1 0-10c.1-.47.22-.92.36-1.38v-.01a21.933 21.933 0 0 1 5-8.65h.01c.32-.35.66-.69 1.01-1.01v-.01a21.933 21.933 0 0 1 8.65-5c.46-.14.92-.26 1.39-.36a21.842 21.842 0 0 1 10 0c.47.1.93.22 1.39.36a21.933 21.933 0 0 1 8.65 5v.01c.35.32.69.66 1.01 1.01h.01a21.933 21.933 0 0 1 5 8.65c.14.46.26.92.36 1.39a21.654 21.654 0 0 1 .58 5z", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m51.42 25c-.1-.47-.22-.93-.36-1.39a21.933 21.933 0 0 0 -5-8.65h-.01c-.32-.35-.66-.69-1.01-1.01v-.01a21.933 21.933 0 0 0 -8.65-5c-.46-.14-.92-.26-1.39-.36a21.654 21.654 0 0 0 -5-.58c-.5 0-1 .022-1.5.056a21.476 21.476 0 0 1 3.5.524c.47.1.93.22 1.39.36a21.933 21.933 0 0 1 8.65 5v.01c.35.32.69.66 1.01 1.01h.01a21.933 21.933 0 0 1 5 8.65c.14.46.26.92.36 1.39a21.842 21.842 0 0 1 0 10c-.1.47-.22.93-.36 1.39a21.933 21.933 0 0 1 -5 8.65h-.01c-.32.35-.66.69-1.01 1.01v.01a21.933 21.933 0 0 1 -8.65 5c-.46.14-.92.26-1.39.36a21.476 21.476 0 0 1 -3.5.524c.5.034 1 .056 1.5.056a21.654 21.654 0 0 0 5-.58c.47-.1.93-.22 1.39-.36a21.933 21.933 0 0 0 8.65-5v-.01c.35-.32.69-.66 1.01-1.01h.01a21.933 21.933 0 0 0 5-8.65c.14-.46.26-.92.36-1.39a21.842 21.842 0 0 0 0-10z", fill: "#fec108" }),
        React__default['default'].createElement("path", { d: "m35 8.58a21.842 21.842 0 0 0 -10 0l4.14-7.08a.987.987 0 0 1 1.72 0z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m23.61 8.94a21.933 21.933 0 0 0 -8.65 5l.05-8.19a.986.986 0 0 1 1.49-.86z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m23.62 8.95-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m13.94 14.96a21.933 21.933 0 0 0 -5 8.65l-4.05-7.11a.986.986 0 0 1 .86-1.49z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m8.95 23.62-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m8 30a21.654 21.654 0 0 0 .58 5l-7.08-4.14a.987.987 0 0 1 0-1.72l7.08-4.14a21.654 21.654 0 0 0 -.58 5z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m13.94 45.04-8.19-.05a.986.986 0 0 1 -.86-1.49l4.05-7.11a21.933 21.933 0 0 0 5 8.65z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m8.95 36.38-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m23.61 51.06-7.11 4.05a.986.986 0 0 1 -1.49-.86l-.05-8.19a21.933 21.933 0 0 0 8.65 5z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m23.62 51.05-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m35 51.42-4.14 7.08a.987.987 0 0 1 -1.72 0l-4.14-7.08a21.842 21.842 0 0 0 10 0z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m45.04 46.06-.05 8.19a.986.986 0 0 1 -1.49.86l-7.11-4.05a21.933 21.933 0 0 0 8.65-5z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m36.39 51.06-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m54.25 44.99-8.19.05a21.933 21.933 0 0 0 5-8.65l4.05 7.11a.986.986 0 0 1 -.86 1.49z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m51.06 36.39-.01-.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m58.5 30.86-7.08 4.14a21.842 21.842 0 0 0 0-10l7.08 4.14a.987.987 0 0 1 0 1.72z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m55.11 16.5-4.05 7.11a21.933 21.933 0 0 0 -5-8.65l8.19.05a.986.986 0 0 1 .86 1.49z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m51.06 23.61-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m45.04 13.94a21.933 21.933 0 0 0 -8.65-5l7.11-4.05a.986.986 0 0 1 1.49.86z", fill: "#ff9801" }),
        React__default['default'].createElement("path", { d: "m36.39 8.94-.01.01", fill: "#ffdc00" }),
        React__default['default'].createElement("path", { d: "m31.275 29.962.482 1.686a6 6 0 0 0 5.769 4.352h3.474a5 5 0 0 0 5-5v-2.431l1.447-.723a1 1 0 0 0 .553-.895v-1.251a1 1 0 0 0 -.7-.957 21.835 21.835 0 0 0 -6.3-.743c-5 0-6 1-11 1s-6-1-11-1a21.835 21.835 0 0 0 -6.295.74 1 1 0 0 0 -.7.957v1.254a1 1 0 0 0 .553.895l1.442.723v2.431a5 5 0 0 0 5 5h3.474a6 6 0 0 0 5.769-4.352l.482-1.686a1.326 1.326 0 0 1 1.275-.962 1.326 1.326 0 0 1 1.275.962z", fill: "#673ab7" }),
        React__default['default'].createElement("path", { d: "m47.3 24.74a21.835 21.835 0 0 0 -6.3-.74c-.549 0-1.043.014-1.506.035a19.637 19.637 0 0 1 4.8.7 1 1 0 0 1 .7.957v1.254a1 1 0 0 1 -.553.895l-1.441.728v2.431a5 5 0 0 1 -5 5h3a5 5 0 0 0 5-5v-2.431l1.447-.723a1 1 0 0 0 .553-.895v-1.251a1 1 0 0 0 -.7-.96z", fill: "#4527a0" }),
        React__default['default'].createElement("path", { d: "m26 40h8a0 0 0 0 1 0 0v1a4 4 0 0 1 -4 4 4 4 0 0 1 -4-4v-1a0 0 0 0 1 0 0z", fill: "#f5f5f5" }),
        React__default['default'].createElement("path", { d: "m31 40v1a4 4 0 0 1 -2.5 3.7 3.989 3.989 0 0 0 5.5-3.7v-1z", fill: "#cfd8dc" })),
    React__default['default'].createElement("g", { id: "Outline" },
        React__default['default'].createElement("path", { d: "m1.06 31.789 6.706 3.922c.051.2.11.406.168.608l-3.843 6.743a1.987 1.987 0 0 0 1.7 3h.016l7.793.038q.21.216.426.426l.044 7.778a1.966 1.966 0 0 0 .993 1.739 1.988 1.988 0 0 0 1 .27 1.966 1.966 0 0 0 .994-.272l6.755-3.85c.2.058.4.117.608.168l3.915 6.694a1.988 1.988 0 0 0 3.454.012l3.922-6.706c.2-.051.406-.11.608-.168l6.744 3.844a1.972 1.972 0 0 0 2 .008 1.963 1.963 0 0 0 .994-1.725l.044-7.792q.216-.21.426-.426l7.779-.044a1.9 1.9 0 0 0 1.739-.994 1.963 1.963 0 0 0 0-1.991l-3.85-6.755c.058-.2.116-.4.168-.608l6.7-3.916a1.988 1.988 0 0 0 .01-3.453l-6.714-3.919c-.052-.205-.11-.406-.168-.608l3.843-6.744a1.986 1.986 0 0 0 -1.7-3h-.016l-7.792-.044q-.21-.216-.426-.426l-.044-7.778a1.988 1.988 0 0 0 -2.985-1.737l-6.755 3.853c-.2-.057-.4-.116-.608-.167l-3.915-6.694a1.987 1.987 0 0 0 -3.454-.012l-3.922 6.706c-.205.051-.406.11-.608.167l-6.745-3.843a1.987 1.987 0 0 0 -2.995 1.717l-.044 7.79q-.216.21-.426.426l-7.779.044a2.054 2.054 0 0 0 -1.739.994 1.963 1.963 0 0 0 0 1.991l3.85 6.755c-.058.2-.117.4-.168.608l-6.7 3.916a1.987 1.987 0 0 0 -.01 3.453zm29-22.724a21 21 0 1 1 -21 21 21.024 21.024 0 0 1 21.002-21zm-24.24 35 2.98-5.232a23.006 23.006 0 0 0 3.055 5.267zm10.249 10.244-.034-6.035a23.006 23.006 0 0 0 5.265 3.052zm14 3.749-3.041-5.2a22.465 22.465 0 0 0 6.078 0zm14-3.751-5.232-2.982a23.034 23.034 0 0 0 5.263-3.052zm10.238-10.248-6.036.034a23.043 23.043 0 0 0 3.052-5.262zm3.749-14-5.2 3.042a22.473 22.473 0 0 0 0-6.079zm-3.753-14-2.981 5.241a23.006 23.006 0 0 0 -3.052-5.262zm-10.247-10.237.034 6.035a22.969 22.969 0 0 0 -5.262-3.052zm-14-3.749 3.041 5.2a22.358 22.358 0 0 0 -6.078 0zm-14 3.751 5.244 2.982a23.013 23.013 0 0 0 -5.263 3.052zm-10.238 10.248 6.036-.034a23.021 23.021 0 0 0 -3.054 5.262zm1.451 10.955a22.365 22.365 0 0 0 0 6.079l-5.2-3.037z" }),
        React__default['default'].createElement("path", { d: "m22.537 37.065a7.029 7.029 0 0 0 6.731-5.076l.482-1.689a.338.338 0 0 1 .625 0l.482 1.686a7.028 7.028 0 0 0 6.731 5.077h3.474a6.006 6.006 0 0 0 6-6v-1.81l.9-.447a1.989 1.989 0 0 0 1.1-1.789v-1.255a1.99 1.99 0 0 0 -1.411-1.912 22.719 22.719 0 0 0 -6.589-.785 30.51 30.51 0 0 0 -5.664.514 28.437 28.437 0 0 1 -5.336.486 28.416 28.416 0 0 1 -5.335-.486 30.523 30.523 0 0 0 -5.665-.514 22.716 22.716 0 0 0 -6.588.785 1.991 1.991 0 0 0 -1.412 1.912v1.255a1.99 1.99 0 0 0 1.106 1.789l.894.447v1.812a6.007 6.007 0 0 0 6 6zm-7.475-6v-2.43a1 1 0 0 0 -.552-.9l-1.448-.723v-1.25a20.837 20.837 0 0 1 6-.7 28.424 28.424 0 0 1 5.336.487 30.525 30.525 0 0 0 5.664.513 30.537 30.537 0 0 0 5.665-.513 28.4 28.4 0 0 1 5.335-.487 20.815 20.815 0 0 1 6 .7v1.255l-1.447.723a1 1 0 0 0 -.553.9v2.43a4 4 0 0 1 -4 4h-3.474a5.02 5.02 0 0 1 -4.807-3.626l-.481-1.692a2.326 2.326 0 0 0 -4.473 0l-.482 1.687a5.02 5.02 0 0 1 -4.807 3.626h-3.476a4 4 0 0 1 -4-4z" }),
        React__default['default'].createElement("g", { fill: "#f5f5f5" },
            React__default['default'].createElement("path", { d: "m19.769 27.358a1 1 0 0 0 -1.414 0l-1 1a1 1 0 1 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414z" }),
            React__default['default'].createElement("path", { d: "m19.355 32.772a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 -1.414-1.414l-3 3a1 1 0 0 0 0 1.414z" }),
            React__default['default'].createElement("path", { d: "m36.062 30.065a.993.993 0 0 0 .707-.293l1-1a1 1 0 1 0 -1.414-1.414l-1 1a1 1 0 0 0 .707 1.707z" }),
            React__default['default'].createElement("path", { d: "m37.355 32.772a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0 -1.414-1.414l-3 3a1 1 0 0 0 0 1.414z" })),
        React__default['default'].createElement("path", { d: "m34.062 39.065h-8a1 1 0 0 0 -1 1v1a5 5 0 1 0 10 0v-1a1 1 0 0 0 -1-1zm-4 5a3 3 0 0 1 -3-3h6a3 3 0 0 1 -3 3z" })))); };

var Icon$x = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
    React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" }))); };

var Icon$y = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
    React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" }))); };

var Icon$z = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" }))); };

var Icon$A = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 44 44" }, props),
    React__default['default'].createElement("style", null, ".prefix__st22{fill:#fff}.prefix__st62{fill:#c9d9e5}.prefix__st63{fill:#e2e7f0}"),
    React__default['default'].createElement("g", { id: "prefix__salt" },
        React__default['default'].createElement("circle", { className: "prefix__st62", cx: 6, cy: 33, r: 1 }),
        React__default['default'].createElement("circle", { className: "prefix__st62", cx: 6, cy: 37, r: 1 }),
        React__default['default'].createElement("circle", { className: "prefix__st62", cx: 10, cy: 35, r: 1 }),
        React__default['default'].createElement("circle", { className: "prefix__st62", cx: 13, cy: 34, r: 1 }),
        React__default['default'].createElement("circle", { className: "prefix__st62", cx: 10, cy: 31, r: 1 }),
        React__default['default'].createElement("circle", { className: "prefix__st62", cx: 13, cy: 38, r: 1 }),
        React__default['default'].createElement("circle", { className: "prefix__st62", cx: 9, cy: 39, r: 1 }),
        React__default['default'].createElement("circle", { className: "prefix__st62", cx: 2, cy: 36, r: 1 }),
        React__default['default'].createElement("circle", { className: "prefix__st62", cx: 10, cy: 43, r: 1 }),
        React__default['default'].createElement("circle", { className: "prefix__st62", cx: 4, cy: 40, r: 1 }),
        React__default['default'].createElement("path", { className: "prefix__st63", d: "M22.2 26.8l16.7-9.3c.3-.2.6-.4.9-.7.8-.8 1.2-1.8 1.2-2.9V9.4L33.6 2h-4.5c-1.1 0-2.1.4-2.9 1.2-.3.3-.5.6-.7.9l-9.3 16.7 6 6z" }),
        React__default['default'].createElement("path", { className: "prefix__st22", d: "M27.1 5.8c-.5-.3-1.1-.1-1.4.4L22 12.8c-.3.5-.1 1.1.4 1.4.2.1.3.1.5.1.4 0 .7-.2.9-.5l3.7-6.6c.3-.6.1-1.2-.4-1.4z" }),
        React__default['default'].createElement("path", { d: "M38 6.4v4.5c0 1.1-.4 2.1-1.2 2.9-.3.3-.6.5-.9.7l-16.7 9.3 3 3 16.7-9.3c.3-.2.6-.4.9-.7.8-.8 1.2-1.8 1.2-2.9V9.4l-3-3z", fill: "#c9d5e3" }),
        React__default['default'].createElement("path", { d: "M12.4 25c-.2.2-.2.5-.2.7.4 1.2 1.1 2.3 1.9 3.1.9.9 2 1.5 3.1 1.9.2.1.5 0 .7-.2l2.6-2.6-5.5-5.5-2.6 2.6z", fill: "#b0c4d8" }),
        React__default['default'].createElement("path", { d: "M42.7 8.3l-8-8c-.2-.2-.4-.3-.7-.3h-4.9c-1.6 0-3.2.6-4.3 1.8-.4.4-.7.9-1 1.4l-9.6 17.3-3.2 3.1c-.7.7-1 1.8-.6 2.8.5 1.5 1.3 2.8 2.4 3.9 1.1 1.1 2.4 1.9 3.9 2.4.3.1.6.1.9.1.7 0 1.4-.3 1.9-.8l3.2-3.2L40 19.2c.5-.3 1-.6 1.4-1 1.2-1.2 1.8-2.7 1.8-4.3V9c-.2-.3-.3-.5-.5-.7zM18 30.6c-.2.2-.5.2-.7.2-1.2-.4-2.2-1.1-3.1-1.9-.9-.9-1.5-1.9-1.9-3.1-.1-.2 0-.5.2-.7l2.6-2.6 5.6 5.6-2.7 2.5zm23-16.7c0 1.1-.4 2.1-1.2 2.9-.3.3-.6.5-.9.7l-16.7 9.3-5.9-5.9 9.3-16.7c.2-.3.4-.6.7-.9C27 2.4 28 2 29.1 2h4.5L41 9.4v4.5z", fill: "#014463" }),
        React__default['default'].createElement("path", { d: "M19.3 26.7l-2.5 2.5c-.2.2-.5.2-.7.2-1-.3-2-.9-2.8-1.6.3.4.6.8.9 1.1.9.9 2 1.5 3.1 1.9.2.1.5 0 .7-.2l2.6-2.6-1.3-1.3z", fill: "#82a7c4" }),
        React__default['default'].createElement("path", { className: "prefix__st22", d: "M17.8 18l-1.6 2.8 6 6L37.9 18z" }),
        React__default['default'].createElement("path", { className: "prefix__st63", d: "M29.5 18l-10.3 5.8 3 3L37.9 18z" })))); };

var Icon$B = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
    React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
        React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
        React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
        React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
        React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
        React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
        React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
        React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
    React__default['default'].createElement("defs", null,
        React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
            React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
            React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
        React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
            React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
            React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
        React__default['default'].createElement("clipPath", { id: "clip0" },
            React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" }))))); };

var Icon$C = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 92 107" }, props),
    React__default['default'].createElement("g", { fillRule: "nonzero", fill: "none" },
        React__default['default'].createElement("path", { d: "M58.5 29.7h.6L56.3 14c-.7-4-4.6-6.7-8.6-6l-13.5 2.4c-.4 3-2.6 5.4-5.7 6-3.1.5-6-1-7.4-3.7L7.6 15.1c-4 .7-6.7 4.6-6 8.6l2.8 15.7c.1 0 .2-.1.3-.1 2.5-.4 4.9 1.2 5.4 3.7.4 2.5-1.2 4.9-3.7 5.4h-.3l9.2 51.5c.7 4 4.6 6.7 8.6 6L64 98.8c4-.7 6.7-4.6 6-8.6l-9.2-51.5c-.2.1-.4.1-.6.2-2.5.4-4.9-1.2-5.4-3.7-.5-2.6 1.2-5 3.7-5.5z", fill: "#EAEAEA" }),
        React__default['default'].createElement("path", { d: "M28.6 105l-16-89.7-.2-1.1-4.8.8c-4 .7-6.7 4.6-6 8.6l2.8 15.7c.1 0 .2-.1.3-.1 2.5-.4 4.9 1.2 5.4 3.7.4 2.5-1.2 4.9-3.7 5.4h-.3l9.2 51.5c.7 4 4.6 6.7 8.6 6l4.7-.8z", fill: "#D4D6D6" }),
        React__default['default'].createElement("path", { d: "M10.2 44c-.5 0-.7-1.9-.2-2l3-.5c.6-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-3 .5h-.2zM18.5 42.5c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l5.4-1c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-5.4 1h-.2zm10.8-1.9c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l5.4-1c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-5.4 1h-.2zM40 38.7c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l5.4-1c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-5.4 1H40z", fill: "#B0BEC5" }),
        React__default['default'].createElement("path", { d: "M50.8 36.8c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l3-.5c.6-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-3 .5h-.2z", fill: "#10591C" }),
        React__default['default'].createElement("path", { fill: "#FBD000", d: "M41.414 18.709l7.285-1.297 1.297 7.285-7.285 1.297z" }),
        React__default['default'].createElement("path", { d: "M19.8 25.9c-1 0-1.8-.7-2-1.6-.2-1.1.5-2.1 1.6-2.3l15.2-2.7c1.1-.2 2.1.5 2.3 1.6.2 1.1-.5 2.1-1.6 2.3l-15.2 2.7h-.3zM20.1 29.6c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l10.5-1.9c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-10.5 1.9h-.2zM23.4 47.8c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l10.5-1.9c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-10.5 1.9h-.2zM24.2 52.6c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l15.7-2.8c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-15.7 2.8h-.2z", fill: "#B0BEC5" }),
        React__default['default'].createElement("path", { d: "M33 98.8c-.5 0-.9-.3-1-.8l-5.9-33.1c-.1-.5.3-1.1.8-1.2.5-.1 1.1.3 1.2.8L34 97.6c.1.5-.3 1.1-.8 1.2H33zM37.5 98c-.5 0-.9-.3-1-.8l-4.1-22.8c-.1-.5.3-1.1.8-1.2.5-.1 1.1.3 1.2.8l4.1 22.8c.1.5-.3 1.1-.8 1.2h-.2zM50.9 95.9c-.5 0-.9-.3-1-.8l-1.8-10c-.1-.5.3-1.1.8-1.2.6-.1 1.1.3 1.2.8l1.8 10c.1.5-.3 1.1-.8 1.2h-.2zM55.2 95.2c-.5 0-.9-.3-1-.8l-3-16.7c-.1-.5.3-1.1.8-1.2.5-.1 1.1.3 1.2.8l3 16.7c.1.5-.3 1.1-.8 1.2h-.2zM48.4 82c-.5 0-.9-.3-1-.8L44.8 66c-.1-.5.3-1.1.8-1.2.5-.1 1.1.3 1.2.8l2.7 15.2c.1.5-.3 1.1-.8 1.2h-.3z", fill: "#ADADAD" }),
        React__default['default'].createElement("path", { d: "M22.8 107c-4.1 0-7.5-2.9-8.2-6.9L5.5 48.6c0-.3 0-.6.2-.8.2-.2.4-.4.7-.4h.2c1-.2 1.8-.7 2.4-1.5.6-.8.8-1.8.6-2.7-.3-1.9-2.2-3.3-4.2-2.9-.1 0-.2.1-.3.1-.3.1-.5 0-.8-.1-.2-.2-.4-.4-.4-.7L1.1 23.9c-.4-2.2.1-4.4 1.4-6.3 1.3-1.8 3.2-3.1 5.4-3.5l13.4-2.4c.4-.1.9.1 1.1.5 1.2 2.3 3.8 3.6 6.3 3.1 2.6-.5 4.5-2.5 4.8-5.1.1-.4.4-.8.8-.9L47.7 7c.5-.1 1-.1 1.5-.1 4.1 0 7.5 2.9 8.2 6.9l2.8 15.7c.1.3 0 .6-.2.8-.2.2-.4.4-.7.4h-.4c-2 .4-3.3 2.2-2.9 4.2.3 1.9 2.2 3.3 4.2 2.9.1 0 .2-.1.3-.1h.1c.3-.1.6-.1.8.1.2.1.4.4.5.7L71 90c.8 4.6-2.2 8.9-6.8 9.7l-39.8 7.1c-.6.2-1.1.2-1.6.2zM7.6 49.2l8.9 50.5c.5 3.1 3.2 5.3 6.3 5.3.4 0 .7 0 1.1-.1l39.8-7.1c3.5-.6 5.8-3.9 5.1-7.4L60 39.9c-2.9.3-5.6-1.7-6.1-4.6-.5-2.9 1.3-5.7 4.1-6.4l-2.6-14.7c-.5-3.1-3.2-5.3-6.3-5.3-.4 0-.7 0-1.1.1l-12.7 2.3c-.7 3.1-3.1 5.5-6.3 6.1-.5.1-.9.1-1.4.1-2.7 0-5.2-1.4-6.6-3.7L8.3 16.1c-1.7.3-3.1 1.2-4.1 2.6-1 1.4-1.3 3.1-1.1 4.8l2.6 14.7c2.8-.2 5.3 1.8 5.8 4.6.3 1.5-.1 3-.9 4.2-.7 1.1-1.8 1.9-3 2.2z", fill: "#20C0FF" }),
        React__default['default'].createElement("path", { d: "M86.4 35.4c.2 0 .4.1.6.2l3.6-16.1c.9-4.1-1.7-8.2-5.8-9.1L70.9 7.3c-1.5 2.7-4.6 4.2-7.8 3.5-3.2-.7-5.4-3.4-5.6-6.4L43.6 1.3C39.5.4 35.4 3 34.5 7.1l-3.6 16.1h.3c2.6.6 4.2 3.1 3.6 5.7-.6 2.6-3.1 4.2-5.7 3.6-.1 0-.2-.1-.3-.1L17.2 85.2c-.9 4.1 1.7 8.2 5.8 9.1l41.1 9.1c4.1.9 8.2-1.7 9.1-5.8L85 44.8c-.2 0-.4 0-.6-.1-2.6-.6-4.2-3.1-3.6-5.7.5-2.6 3.1-4.2 5.6-3.6z", fill: "#EAEAEA" }),
        React__default['default'].createElement("path", { d: "M27.9 95.5L48.3 3.4l.2-1.1-4.9-1.1C39.5.3 35.4 2.9 34.5 7l-3.6 16.1h.3c2.6.6 4.2 3.1 3.6 5.7-.6 2.6-3.1 4.2-5.7 3.6-.1 0-.2-.1-.3-.1L17.2 85.2c-.9 4.1 1.7 8.2 5.8 9.1l4.9 1.2z", fill: "#D4D6D6" }),
        React__default['default'].createElement("path", { d: "M37.9 30.5h-.2l-2.9-.6c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l2.9.6c.5.1.9.7.8 1.2-.2.5-.6.8-1 .8zM71.2 37.9H71l-5.6-1.2c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l5.6 1.2c.5.1.9.7.8 1.2-.1.5-.5.8-1 .8zm-11.1-2.5h-.2l-5.6-1.2c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l5.6 1.2c.5.1.9.7.8 1.2-.1.5-.5.8-1 .8zM49 33h-.2l-5.6-1.2c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l5.6 1.2c.5.1.9.7.8 1.2-.1.4-.6.8-1 .8zM79.7 39.8h-.2l-2.9-.6c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l2.9.6c.5.1.9.7.8 1.2-.1.4-.5.8-1 .8z", fill: "#B0BEC5" }),
        React__default['default'].createElement("path", { fill: "#FBD000", d: "M72.807 25.44l1.665-7.519 7.518 1.665-1.665 7.518z" }),
        React__default['default'].createElement("path", { d: "M67.2 20c-.1 0-.3 0-.4-.1l-15.3-4.1c-1.1-.3-1.7-1.4-1.4-2.5.3-1.1 1.3-1.8 2.4-1.5l15.3 4.1c1.1.3 1.7 1.4 1.4 2.5-.2 1-1 1.7-2 1.6zM62 23h-.2l-11-2.7c-.5-.1-.9-.7-.8-1.4.1-.6.7-1 1.2-.9l11 2.7c.5.1.9.7.8 1.4-.1.5-.5.9-1 .9zM56.8 41.1h-.2l-10.8-2.4c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8L57 39.1c.5.1.9.7.8 1.2-.1.5-.5.8-1 .8zM61 47.2h-.2l-16.1-3.6c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l16.1 3.6c.5.1.9.7.8 1.2-.1.5-.5.8-1 .8z", fill: "#B0BEC5" }),
        React__default['default'].createElement("path", { d: "M34.9 91.3h-.2c-.5-.1-.9-.7-.8-1.2l7.5-34c.1-.5.7-.9 1.2-.8.5.1.9.7.8 1.2l-7.5 34c-.1.5-.5.8-1 .8zM39.6 92.3h-.2c-.5-.1-.9-.7-.8-1.2l5.2-23.4c.1-.5.7-.9 1.2-.8.5.1.9.7.8 1.2l-5.2 23.4c-.1.5-.5.8-1 .8zM53.3 95.7h-.2c-.5-.1-.9-.7-.8-1.2l2.3-10.3c.1-.5.7-.9 1.2-.8.5.1.9.7.8 1.2l-2.3 10.3c-.2.5-.6.8-1 .8zM57.6 96.7h-.2c-.5-.1-.9-.7-.8-1.2l3.8-17.1c.1-.5.7-.9 1.2-.8.5.1.9.7.8 1.2l-3.8 17.1c-.1.4-.5.8-1 .8zM56.4 81.4h-.2c-.5-.1-.9-.7-.8-1.2l3.5-15.6c.1-.5.6-.9 1.2-.8.5.1.9.7.8 1.2l-3.5 15.6c-.1.4-.5.8-1 .8z", fill: "#ADADAD" }),
        React__default['default'].createElement("path", { d: "M65.9 105c-.6 0-1.3-.1-1.9-.2l-41.3-9.1c-2.3-.5-4.2-1.9-5.4-3.8-1.3-2-1.7-4.3-1.2-6.5l11.7-53c.1-.3.2-.5.5-.6.2-.1.5-.2.8-.1.1 0 .1 0 .2.1.3.1.6.1.9.1 1.8 0 3.3-1.3 3.7-3 .2-1 0-2-.5-2.9-.5-.9-1.4-1.4-2.4-1.7h-.3c-.3 0-.5-.2-.7-.4V23l3.6-16.1C34.5 3 38 .1 42.1.1c.6 0 1.3.1 1.9.2l13.9 3.1c.4.1.7.5.8.9.2 2.7 2.2 5 4.8 5.6 2.6.6 5.4-.7 6.7-3 .2-.4.7-.6 1.1-.5l13.9 3.1c4.7 1 7.6 5.7 6.6 10.4l-3.6 16.2c-.1.3-.2.5-.5.7-.3.1-.6.2-.8.1h-.1c-.1 0-.2-.1-.3-.1-2-.5-4.1.9-4.5 2.9-.5 2 .8 4.1 2.9 4.5h.4c.3 0 .6.2.7.4.2.2.2.5.2.8L74.5 98.5c-1 3.6-4.5 6.5-8.6 6.5zM29.7 33.7l-11.5 52c-.4 1.7-.1 3.5.9 5s2.4 2.6 4.2 2.9l41.2 9.1c.5.1 1 .2 1.4.2 3.1 0 5.9-2.2 6.5-5.2l11.5-52c-2.9-.9-4.7-3.8-4-6.8.6-2.9 3.6-4.9 6.5-4.5l3.4-15.1c.8-3.6-1.5-7.2-5.1-8L71.5 8.4c-1.9 2.7-5.3 4.1-8.5 3.3-3.3-.7-5.8-3.3-6.3-6.6L43.5 2.2c-.5-.1-1-.2-1.4-.2-3.1 0-5.9 2.2-6.5 5.2l-3.4 15.2c1.2.4 2.3 1.2 3 2.4.8 1.3 1.1 2.9.8 4.4-.7 2.8-3.4 4.8-6.3 4.5z", fill: "#20C0FF" })))); };

var Icon$D = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
    React__default['default'].createElement("g", { fillRule: "nonzero", fill: "none" },
        React__default['default'].createElement("circle", { fill: "#20C0FF", cx: 64, cy: 64, r: 64 }),
        React__default['default'].createElement("path", { d: "M76.5 40.7h.6L74.3 25c-.7-4-4.6-6.7-8.6-6l-13.5 2.4c-.4 3-2.6 5.4-5.7 6-3.1.5-6-1-7.4-3.7l-13.5 2.4c-4 .7-6.7 4.6-6 8.6l2.8 15.7c.1 0 .2-.1.3-.1 2.5-.4 4.9 1.2 5.4 3.7.4 2.5-1.2 4.9-3.7 5.4h-.3l9.2 51.5c.7 4 4.6 6.7 8.6 6l40.1-7.1c4-.7 6.7-4.6 6-8.6l-9.2-51.5c-.2.1-.4.1-.6.2-2.5.4-4.9-1.2-5.4-3.7-.5-2.6 1.2-5 3.7-5.5z", fill: "#EAEAEA" }),
        React__default['default'].createElement("path", { d: "M46.6 116l-16-89.7-.2-1.1-4.8.8c-4 .7-6.7 4.6-6 8.6l2.8 15.7c.1 0 .2-.1.3-.1 2.5-.4 4.9 1.2 5.4 3.7.4 2.5-1.2 4.9-3.7 5.4h-.3l9.2 51.5c.7 4 4.6 6.7 8.6 6l4.7-.8z", fill: "#D4D6D6" }),
        React__default['default'].createElement("path", { d: "M28.2 55c-.5 0-.7-1.9-.2-2l3-.5c.6-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-3 .5h-.2zM36.5 53.5c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l5.4-1c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-5.4 1h-.2zm10.8-1.9c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l5.4-1c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-5.4 1h-.2zM58 49.7c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l5.4-1c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-5.4 1H58z", fill: "#B0BEC5" }),
        React__default['default'].createElement("path", { d: "M68.8 47.8c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l3-.5c.6-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-3 .5h-.2z", fill: "#10591C" }),
        React__default['default'].createElement("path", { fill: "#FBD000", d: "M59.414 29.709l7.285-1.297 1.297 7.285-7.285 1.297z" }),
        React__default['default'].createElement("path", { d: "M37.8 36.9c-1 0-1.8-.7-2-1.6-.2-1.1.5-2.1 1.6-2.3l15.2-2.7c1.1-.2 2.1.5 2.3 1.6.2 1.1-.5 2.1-1.6 2.3l-15.2 2.7h-.3zM38.1 40.6c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l10.5-1.9c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-10.5 1.9h-.2zM41.4 58.8c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l10.5-1.9c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-10.5 1.9h-.2zM42.2 63.6c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l15.7-2.8c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-15.7 2.8h-.2z", fill: "#B0BEC5" }),
        React__default['default'].createElement("path", { d: "M51 109.8c-.5 0-.9-.3-1-.8l-5.9-33.1c-.1-.5.3-1.1.8-1.2.5-.1 1.1.3 1.2.8l5.9 33.1c.1.5-.3 1.1-.8 1.2H51zM55.5 109c-.5 0-.9-.3-1-.8l-4.1-22.8c-.1-.5.3-1.1.8-1.2.5-.1 1.1.3 1.2.8l4.1 22.8c.1.5-.3 1.1-.8 1.2h-.2zM68.9 106.9c-.5 0-.9-.3-1-.8l-1.8-10c-.1-.5.3-1.1.8-1.2.6-.1 1.1.3 1.2.8l1.8 10c.1.5-.3 1.1-.8 1.2h-.2zM73.2 106.2c-.5 0-.9-.3-1-.8l-3-16.7c-.1-.5.3-1.1.8-1.2.5-.1 1.1.3 1.2.8l3 16.7c.1.5-.3 1.1-.8 1.2h-.2zM66.4 93c-.5 0-.9-.3-1-.8L62.8 77c-.1-.5.3-1.1.8-1.2.5-.1 1.1.3 1.2.8l2.7 15.2c.1.5-.3 1.1-.8 1.2h-.3z", fill: "#ADADAD" }),
        React__default['default'].createElement("path", { d: "M40.8 118c-4.1 0-7.5-2.9-8.2-6.9l-9.1-51.5c0-.3 0-.6.2-.8.2-.2.4-.4.7-.4h.2c1-.2 1.8-.7 2.4-1.5.6-.8.8-1.8.6-2.7-.3-1.9-2.2-3.3-4.2-2.9-.1 0-.2.1-.3.1-.3.1-.5 0-.8-.1-.2-.2-.4-.4-.4-.7l-2.8-15.7c-.4-2.2.1-4.4 1.4-6.3 1.3-1.8 3.2-3.1 5.4-3.5l13.4-2.4c.4-.1.9.1 1.1.5 1.2 2.3 3.8 3.6 6.3 3.1 2.6-.5 4.5-2.5 4.8-5.1.1-.4.4-.8.8-.9L65.7 18c.5-.1 1-.1 1.5-.1 4.1 0 7.5 2.9 8.2 6.9l2.8 15.7c.1.3 0 .6-.2.8-.2.2-.4.4-.7.4h-.4c-2 .4-3.3 2.2-2.9 4.2.3 1.9 2.2 3.3 4.2 2.9.1 0 .2-.1.3-.1h.1c.3-.1.6-.1.8.1.2.1.4.4.5.7L89 101c.8 4.6-2.2 8.9-6.8 9.7l-39.8 7.1c-.6.2-1.1.2-1.6.2zM25.6 60.2l8.9 50.5c.5 3.1 3.2 5.3 6.3 5.3.4 0 .7 0 1.1-.1l39.8-7.1c3.5-.6 5.8-3.9 5.1-7.4L78 50.9c-2.9.3-5.6-1.7-6.1-4.6-.5-2.9 1.3-5.7 4.1-6.4l-2.6-14.7c-.5-3.1-3.2-5.3-6.3-5.3-.4 0-.7 0-1.1.1l-12.7 2.3c-.7 3.1-3.1 5.5-6.3 6.1-.5.1-.9.1-1.4.1-2.7 0-5.2-1.4-6.6-3.7l-12.7 2.3c-1.7.3-3.1 1.2-4.1 2.6-1 1.4-1.3 3.1-1.1 4.8l2.6 14.7c2.8-.2 5.3 1.8 5.8 4.6.3 1.5-.1 3-.9 4.2-.7 1.1-1.8 1.9-3 2.2z", fill: "#FFF" }),
        React__default['default'].createElement("path", { d: "M13 61c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6.1c-1.2 0-2.1 1-2.1 2.1 0 1.2 1 2.1 2.1 2.1 1.2 0 2.1-1 2.1-2.1 0-1.2-.9-2.1-2.1-2.1zM108 93c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6.1c-1.2 0-2.1 1-2.1 2.1 0 1.2 1 2.1 2.1 2.1 1.2 0 2.1-1 2.1-2.1 0-1.2-.9-2.1-2.1-2.1zM24.9 96.7c0-.4-.4-.8-1-.9l-1.9-.3c-.5-.1-1.1-.6-1.1-1.1l-.3-1.9c-.1-.5-.5-1-.9-1s-.8.4-.9 1l-.3 1.9c-.1.5-.6 1.1-1.1 1.1l-1.9.3c-.5.1-1 .5-1 .9s.4.8 1 .9l1.9.3c.5.1 1.1.6 1.1 1.1l.3 1.9c.1.5.5 1 .9 1s.8-.4.9-1l.3-2.1c.1-.5.6-1 1.1-1.1l1.8-.1c.7-.1 1.1-.5 1.1-.9zM120 59.9c0-.4-.4-.8-1-.9l-1.9-.3c-.5-.1-1.1-.6-1.1-1.1l-.3-1.9c-.1-.5-.5-1-.9-1s-.8.4-.9 1l-.3 1.9c-.1.5-.6 1.1-1.1 1.1l-1.9.3c-.5.1-1 .5-1 .9s.4.8 1 .9l1.9.3c.5.1 1.1.6 1.1 1.1l.4 1.8c.1.5.5 1 .9 1s.8-.4.8-1l.3-2.1c.1-.5.6-1 1.1-1.1l1.8-.1c.7-.1 1.1-.4 1.1-.8z", fill: "#FFF", opacity: 0.5 }),
        React__default['default'].createElement("path", { d: "M104.4 46.4c.2 0 .4.1.6.2l3.6-16.1c.9-4.1-1.7-8.2-5.8-9.1l-13.9-3.1c-1.5 2.7-4.6 4.2-7.8 3.5-3.2-.7-5.4-3.4-5.6-6.4l-13.9-3.1c-4.1-.9-8.2 1.7-9.1 5.8l-3.6 16.1h.3c2.6.6 4.2 3.1 3.6 5.7-.6 2.6-3.1 4.2-5.7 3.6-.1 0-.2-.1-.3-.1L35.2 96.2c-.9 4.1 1.7 8.2 5.8 9.1l41.1 9.1c4.1.9 8.2-1.7 9.1-5.8L103 55.8c-.2 0-.4 0-.6-.1-2.6-.6-4.2-3.1-3.6-5.7.5-2.6 3.1-4.2 5.6-3.6z", fill: "#EAEAEA" }),
        React__default['default'].createElement("path", { d: "M45.9 106.5l20.4-92.1.2-1.1-4.9-1.1c-4.1-.9-8.2 1.7-9.1 5.8l-3.6 16.1h.3c2.6.6 4.2 3.1 3.6 5.7-.6 2.6-3.1 4.2-5.7 3.6-.1 0-.2-.1-.3-.1L35.2 96.2c-.9 4.1 1.7 8.2 5.8 9.1l4.9 1.2z", fill: "#D4D6D6" }),
        React__default['default'].createElement("path", { d: "M55.9 41.5h-.2l-2.9-.6c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l2.9.6c.5.1.9.7.8 1.2-.2.5-.6.8-1 .8zM89.2 48.9H89l-5.6-1.2c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l5.6 1.2c.5.1.9.7.8 1.2-.1.5-.5.8-1 .8zm-11.1-2.5h-.2l-5.6-1.2c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l5.6 1.2c.5.1.9.7.8 1.2-.1.5-.5.8-1 .8zM67 44h-.2l-5.6-1.2c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l5.6 1.2c.5.1.9.7.8 1.2-.1.4-.6.8-1 .8zM97.7 50.8h-.2l-2.9-.6c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l2.9.6c.5.1.9.7.8 1.2-.1.4-.5.8-1 .8z", fill: "#B0BEC5" }),
        React__default['default'].createElement("path", { fill: "#FBD000", d: "M90.807 36.44l1.665-7.519 7.518 1.665-1.665 7.518z" }),
        React__default['default'].createElement("path", { d: "M85.2 31c-.1 0-.3 0-.4-.1l-15.3-4.1c-1.1-.3-1.7-1.4-1.4-2.5.3-1.1 1.3-1.8 2.4-1.5l15.3 4.1c1.1.3 1.7 1.4 1.4 2.5-.2 1-1 1.7-2 1.6zM80 34h-.2l-11-2.7c-.5-.1-.9-.7-.8-1.4.1-.6.7-1 1.2-.9l11 2.7c.5.1.9.7.8 1.4-.1.5-.5.9-1 .9zM74.8 52.1h-.2l-10.8-2.4c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8L75 50.1c.5.1.9.7.8 1.2-.1.5-.5.8-1 .8zM79 58.2h-.2l-16.1-3.6c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l16.1 3.6c.5.1.9.7.8 1.2-.1.5-.5.8-1 .8z", fill: "#B0BEC5" }),
        React__default['default'].createElement("path", { d: "M52.9 102.3h-.2c-.5-.1-.9-.7-.8-1.2l7.5-34c.1-.5.7-.9 1.2-.8.5.1.9.7.8 1.2l-7.5 34c-.1.5-.5.8-1 .8zM57.6 103.3h-.2c-.5-.1-.9-.7-.8-1.2l5.2-23.4c.1-.5.7-.9 1.2-.8.5.1.9.7.8 1.2l-5.2 23.4c-.1.5-.5.8-1 .8zM71.3 106.7h-.2c-.5-.1-.9-.7-.8-1.2l2.3-10.3c.1-.5.7-.9 1.2-.8.5.1.9.7.8 1.2l-2.3 10.3c-.2.5-.6.8-1 .8zM75.6 107.7h-.2c-.5-.1-.9-.7-.8-1.2l3.8-17.1c.1-.5.7-.9 1.2-.8.5.1.9.7.8 1.2l-3.8 17.1c-.1.4-.5.8-1 .8zM74.4 92.4h-.2c-.5-.1-.9-.7-.8-1.2l3.5-15.6c.1-.5.6-.9 1.2-.8.5.1.9.7.8 1.2l-3.5 15.6c-.1.4-.5.8-1 .8z", fill: "#ADADAD" }),
        React__default['default'].createElement("path", { d: "M83.9 116c-.6 0-1.3-.1-1.9-.2l-41.3-9.1c-2.3-.5-4.2-1.9-5.4-3.8-1.3-2-1.7-4.3-1.2-6.5l11.7-53c.1-.3.2-.5.5-.6.2-.1.5-.2.8-.1.1 0 .1 0 .2.1.3.1.6.1.9.1 1.8 0 3.3-1.3 3.7-3 .2-1 0-2-.5-2.9-.5-.9-1.4-1.4-2.4-1.7h-.3c-.3 0-.5-.2-.7-.4V34l3.6-16.1c.9-3.9 4.4-6.8 8.5-6.8.6 0 1.3.1 1.9.2l13.9 3.1c.4.1.7.5.8.9.2 2.7 2.2 5 4.8 5.6 2.6.6 5.4-.7 6.7-3 .2-.4.7-.6 1.1-.5l13.9 3.1c4.7 1 7.6 5.7 6.6 10.4l-3.6 16.2c-.1.3-.2.5-.5.7-.3.1-.6.2-.8.1h-.1c-.1 0-.2-.1-.3-.1-2-.5-4.1.9-4.5 2.9-.5 2 .8 4.1 2.9 4.5h.4c.3 0 .6.2.7.4.2.2.2.5.2.8l-11.7 53.1c-1 3.6-4.5 6.5-8.6 6.5zM47.7 44.7l-11.5 52c-.4 1.7-.1 3.5.9 5s2.4 2.6 4.2 2.9l41.2 9.1c.5.1 1 .2 1.4.2 3.1 0 5.9-2.2 6.5-5.2l11.5-52c-2.9-.9-4.7-3.8-4-6.8.6-2.9 3.6-4.9 6.5-4.5l3.4-15.1c.8-3.6-1.5-7.2-5.1-8l-13.2-2.9c-1.9 2.7-5.3 4.1-8.5 3.3-3.3-.7-5.8-3.3-6.3-6.6l-13.2-2.9c-.5-.1-1-.2-1.4-.2-3.1 0-5.9 2.2-6.5 5.2l-3.4 15.2c1.2.4 2.3 1.2 3 2.4.8 1.3 1.1 2.9.8 4.4-.7 2.8-3.4 4.8-6.3 4.5z", fill: "#FFF" }),
        React__default['default'].createElement("path", { d: "M114.6 14.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l6.4-6.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-6.4 6.4c-.2.2-.5.3-.7.3zM109.3 11.7h-.2c-.5-.1-.9-.6-.8-1.2l1.3-6.4c.1-.5.6-.9 1.2-.8.5.1.9.6.8 1.2l-1.3 6.4c-.1.5-.5.8-1 .8zM117.6 20c-.5 0-.9-.3-1-.8-.1-.5.2-1.1.8-1.2l6.4-1.3c.5-.1 1.1.2 1.2.8.1.5-.2 1.1-.8 1.2l-6.4 1.3h-.2z", fill: "#20C0FF" })))); };

var Icon$E = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" }))); };

var Icon$F = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
    React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" }))); };

var Icon$G = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" }))); };

var Icon$H = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" }))); };

var Flex = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled__default['default'].div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$d;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$e;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$f, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$g;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$i, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled__default['default'].input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$j;

var GridLayout = styled__default['default'].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$k;

var GridLayout$1 = styled__default['default'](GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$l;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var getColor$1 = function (color, theme) { return getThemeValue("colors." + color, color)(theme); };

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled__default['default'](Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$u, { color: "primary", ml: "4px" })));
};

var Bar = styled__default['default'].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var SaltyProgressWrapper = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showSaltyProgress, showSaltyProgress = _d === void 0 ? false : _d;
    return (React__default['default'].createElement(StyledProgress, null,
        showSaltyProgress && (React__default['default'].createElement(SaltyProgressWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$A, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var Icon$I = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 44 44" }, props),
    React__default['default'].createElement("style", null, ".prefix__st22{fill:#fff}.prefix__st62{fill:#c9d9e5}.prefix__st63{fill:#e2e7f0}"),
    React__default['default'].createElement("g", { id: "Filled_outline", "data-name": "Filled outline" },
        React__default['default'].createElement("path", { d: "M327.311,481.2A23.885,23.885,0,0,0,344,488h14.627a16,16,0,0,1-11.314-4.687A16,16,0,0,0,327.311,481.2Z", fill: "#48add9" }),
        React__default['default'].createElement("path", { d: "M442.53,296.41a49.3,49.3,0,0,0,0,31.18l2.94,8.82A49.186,49.186,0,0,1,448,352V464a24.006,24.006,0,0,1-24,24H406.63a15.927,15.927,0,0,1-6.13-1.22,16.279,16.279,0,0,1-4.48-2.82c-.25-.21-.49-.43-.71-.65s-.45-.44-.69-.65c-.4-.35-.81-.68-1.24-.99-.22-.17-.45-.32-.68-.48a16.03,16.03,0,0,0-20.01,2.12A16.008,16.008,0,0,1,361.37,488H344a24.006,24.006,0,0,1-24-24V352a49.186,49.186,0,0,1,2.53-15.59l2.94-8.82a49.3,49.3,0,0,0,0-31.18l-2.94-8.82A49.186,49.186,0,0,1,320,272V238.76a96.028,96.028,0,0,1,17.88-55.79L360,152V112h48v40l22.12,30.97A95.934,95.934,0,0,1,448,238.76V272a49.186,49.186,0,0,1-2.53,15.59l-.14.41Z", fill: "#348fd9" }),
        React__default['default'].createElement("path", { d: "M448,238.76V272a49.186,49.186,0,0,1-2.53,15.59l-.14.41-2.8,8.41a49.3,49.3,0,0,0,0,31.18l2.94,8.82A49.186,49.186,0,0,1,448,352V464a24.006,24.006,0,0,1-24,24H408a20.08,20.08,0,0,1-11.98-4.04c-.25-.21-.49-.43-.71-.65s-.45-.44-.69-.65c-.4-.35-.81-.68-1.24-.99-.23-.16-.46-.32-.69-.47l.01-.01A23.888,23.888,0,0,0,400,464V352a49.186,49.186,0,0,0-2.53-15.59l-2.94-8.82a49.3,49.3,0,0,1,0-31.18l2.8-8.41.14-.41A49.186,49.186,0,0,0,400,272V238.76A95.581,95.581,0,0,0,398.86,224a95.927,95.927,0,0,0-16.74-41.03L360,152V112h48v40l22.12,30.97A95.934,95.934,0,0,1,448,238.76Z", fill: "#3086cd" }),
        React__default['default'].createElement("path", { d: "M368,312l-8,16,8,16v16l-8,16,8,16v16l-8,16,8,16v32a16.463,16.463,0,0,1-11.44,16H344a24.006,24.006,0,0,1-24-24V352a49.186,49.186,0,0,1,2.53-15.59l2.94-8.82a49.3,49.3,0,0,0,0-31.18l-2.94-8.82A49.186,49.186,0,0,1,320,272V238.76A95.917,95.917,0,0,1,322.74,216H336v32l23.16,11.58A16,16,0,0,1,368,273.89Z", fill: "#3086cd" }),
        React__default['default'].createElement("path", { d: "M272,192V434a54,54,0,0,1-86.4,43.2,29.34,29.34,0,0,0-35.2,0,54.006,54.006,0,0,1-85.94-36.11A55.305,55.305,0,0,1,64,434V192a104,104,0,0,1,72-98.93V24h64V93.07A103.9,103.9,0,0,1,272,192Z", fill: "#4db7e5" }),
        React__default['default'].createElement("path", { d: "M272,192V434a54,54,0,0,1-86.4,43.2,29.34,29.34,0,0,0-35.2,0,54.006,54.006,0,0,1-85.94-36.11c68.5-47.19,141.6-134.74,196.85-295.04A103.456,103.456,0,0,1,272,192Z", fill: "#48add9" }),
        React__default['default'].createElement("rect", { x: "64", y: "208", width: "208", height: "176", fill: "#f35244" }),
        React__default['default'].createElement("rect", { x: "136", y: "72", width: "64", height: "24", fill: "#48add9" }),
        React__default['default'].createElement("path", { d: "M272,208V384H129.37c38.06-41.59,75.39-98.46,108.25-176Z", fill: "#ea4a3b" }),
        React__default['default'].createElement("path", { d: "M344,328l8,16v16l-8,16,8,16v16l-8,16,8,16v32a16,16,0,0,1-16,16H256a16,16,0,0,1-16-16V440l8-16-8-16V392l8-16-8-16V344l8-16-8-16V273.89a16,16,0,0,1,8.84-14.31L272,248V216h48v32l23.16,11.58A16,16,0,0,1,352,273.89V312Z", fill: "#60d1e0" }),
        React__default['default'].createElement("path", { d: "M352,312l-8,16,8,16v16l-8,16,8,16v16l-8,16,8,16v32a16,16,0,0,1-16,16H304a16,16,0,0,0,16-16V440l-8-16,8-16V392l-8-16,8-16V344l-8-16,8-16V273.89a16,16,0,0,0-8.84-14.31L288,248V216h32v32l23.16,11.58A16,16,0,0,1,352,273.89Z", fill: "#5ac6d4" }),
        React__default['default'].createElement("ellipse", { cx: "296", cy: "216", rx: "24", ry: "16", fill: "#3fb7c7" }),
        React__default['default'].createElement("path", { d: "M436.59,178.316,416,149.441V112a8,8,0,0,0-8-8H360a8,8,0,0,0-8,8v37.441l-20.582,28.864A104.056,104.056,0,0,0,325.2,188.1l13.969,7.8a88.008,88.008,0,0,1,5.266-8.3l22.078-30.96A8,8,0,0,0,368,152V120h32v32a8,8,0,0,0,1.488,4.645l22.1,30.992A86.423,86.423,0,0,1,434.4,208H376v16h62.6a89.347,89.347,0,0,1,1.4,14.8V240H376v16h64v16H376v16h60.893l-1.924,5.871a56.835,56.835,0,0,0-.012,36.223l2.895,8.832A41.339,41.339,0,0,1,440,352H376v16h64v16H376v16h64v16H376v16h64v32a16.016,16.016,0,0,1-16,16H406.641a8.022,8.022,0,0,1-5.7-2.375,24.4,24.4,0,0,0-33.876,0l11.313,11.313a8.02,8.02,0,0,1,11.25,0A23.917,23.917,0,0,0,406.641,496H424a32.036,32.036,0,0,0,32-32V352a57.251,57.251,0,0,0-2.957-18.094l-2.895-8.832a40.861,40.861,0,0,1,.012-26.183l2.9-8.844a71.885,71.885,0,0,0,2.211-8.844A61.563,61.563,0,0,0,456,272V238.8a106.361,106.361,0,0,0-2.945-24.692A102.367,102.367,0,0,0,436.59,178.316Z" }),
        React__default['default'].createElement("path", { d: "M56,192V434a62.069,62.069,0,0,0,62,62,61.448,61.448,0,0,0,37.215-12.41,21.327,21.327,0,0,1,25.578,0,61.636,61.636,0,0,0,34.91,12.367l.594-15.992a45.625,45.625,0,0,1-25.879-9.16,37.4,37.4,0,0,0-44.828,0A45.545,45.545,0,0,1,118,480a46.054,46.054,0,0,1-46-46V392H216V376H72V216H248V200H72v-8a95.776,95.776,0,0,1,66.465-91.352A7.993,7.993,0,0,0,144,93.039V72h48V93.039a7.993,7.993,0,0,0,5.535,7.609,95.631,95.631,0,0,1,66.184,83.961l15.953-1.218A111.517,111.517,0,0,0,208,87.379V72h16V56H208V24a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8V56H112V72h16V87.379A111.7,111.7,0,0,0,56,192ZM144,32h48V56H144Z" }),
        React__default['default'].createElement("path", { d: "M123.57,125.461l8.86,13.32a64.537,64.537,0,0,1,15.871-7.648l-4.922-15.227A80.5,80.5,0,0,0,123.57,125.461Z" }),
        React__default['default'].createElement("path", { d: "M104.391,184.879a64.1,64.1,0,0,1,17.386-37.188L110.238,136.6a80.24,80.24,0,0,0-21.754,46.516Z" }),
        React__default['default'].createElement("rect", { x: "88", y: "232", width: "16", height: "16" }),
        React__default['default'].createElement("rect", { x: "88", y: "264", width: "16", height: "72" }),
        React__default['default'].createElement("rect", { x: "264", y: "280", width: "16", height: "24" }),
        React__default['default'].createElement("path", { d: "M296,192c-17.945,0-32,10.543-32,24v27.062l-18.7,9.383A23.9,23.9,0,0,0,232,273.922V312a8,8,0,0,0,.844,3.578L239.055,328l-6.211,12.422A8,8,0,0,0,232,344v16a8,8,0,0,0,.844,3.578L239.055,376l-6.211,12.422A8,8,0,0,0,232,392v16a8,8,0,0,0,.844,3.578L239.055,424l-6.211,12.422A8,8,0,0,0,232,440v32a24.037,24.037,0,0,0,24,24h80a25.431,25.431,0,0,0,5.438-.613A23.965,23.965,0,0,0,360,472V440a8,8,0,0,0-.844-3.578L352.945,424l6.211-12.422A8,8,0,0,0,360,408V392a8,8,0,0,0-.844-3.578L352.945,376l6.211-12.422A8,8,0,0,0,360,360V344a8,8,0,0,0-.844-3.578L352.945,328l6.211-12.422A8,8,0,0,0,360,312V273.922a23.884,23.884,0,0,0-13.293-21.469L328,243.062V216C328,202.543,313.945,192,296,192Zm0,16c9.766,0,16,4.738,16,8s-6.234,8-16,8-16-4.738-16-8S286.234,208,296,208Zm43.543,58.758A7.977,7.977,0,0,1,344,273.922v36.191L339.055,320H272v16h67.055L344,345.887v12.226L339.055,368H272v16h67.055L344,393.887v12.226L339.055,416H272v16h67.055L344,441.887V472a8.085,8.085,0,0,1-6.062,7.777A9.369,9.369,0,0,1,336,480H256a8.024,8.024,0,0,1-6.367-3.184A7.866,7.866,0,0,1,248,472V441.887l7.156-14.309a8.008,8.008,0,0,0,0-7.156L248,406.113V393.887l7.156-14.309a8.008,8.008,0,0,0,0-7.156L248,358.113V345.887l7.156-14.309a8.008,8.008,0,0,0,0-7.156L248,310.113V273.922a7.991,7.991,0,0,1,4.465-7.172l23.121-11.6A7.991,7.991,0,0,0,280,248V236.764a41.173,41.173,0,0,0,32,0V248a7.991,7.991,0,0,0,4.414,7.148Z" })))); };

var float = styled.keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(12px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(12px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$1 = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var SaltingIcon = styled__default['default'](Icon$I)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  animation: ", " 0.4s infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 0.4s infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$1, null,
        React__default['default'].createElement(SaltingIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$r, templateObject_2$6, templateObject_3$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$1, templateObject_5;

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale$2 = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale$2("handleHeight"), getScale$2("handleLeft"), getScale$2("handleTop"), getScale$2("handleWidth"));
var Input$1 = styled__default['default'].input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale$2("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale$2("toggleHeight"), getScale$2("toggleWidth"));
var templateObject_1$t, templateObject_2$8, templateObject_3$4;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked, scale: scale },
        React__default['default'].createElement(Input$1, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales$3.MD,
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0;
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) { return (render ? function () { return render({ row: row, value: value }); } : function () { return value; }); };
var makeHeaderRender = function (label, render) { return (render ? function () { return render({ label: label }); } : function () { return label; }); };
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) { return (__assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                on: false,
                asc: false,
            } })); });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) { return ({
            id: idx,
            selected: false,
            hidden: false,
            original: row,
            cells: Object.entries(row)
                .map(function (_a) {
                var column = _a[0], value = _a[1];
                return ({
                    hidden: columnsByName[column].hidden,
                    field: column,
                    value: value,
                    render: makeRender(value, columnsByName[column].render, row),
                });
            })
                .filter(function (cell) { return !cell.hidden; }),
        }); });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () { return __spreadArrays(state.columns.map(function (column) {
        var label = column.label ? column.label : column.name;
        return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
    })); }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #cfd8dc80, 0px 0px 4px 8px #b0bec540",
    success: "0px 0px 0px 1px #c5e1a580, 0px 0px 0px 4px #aed58140",
    warning: "0px 0px 0px 1px #f8bbd080, 0px 0px 0px 4px #f48fb140",
    focus: "0px 0px 0px 1px #cfd8dc80, 0px 0px 0px 4px #b0bec540",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled__default['default'].div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled__default['default'](Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$5, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$k, { color: "primary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled__default['default'].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$J = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "-60 -30 600 600" }, props),
    React__default['default'].createElement("g", { id: "surface1" },
        React__default['default'].createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
        React__default['default'].createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " })))); };

var Icon$K = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("g", { fillRule: "evenodd" },
        React__default['default'].createElement("path", { d: "M11.549 18.906c3.81 0 6.906-3.09 6.906-6.906A6.908 6.908 0 006.509 7.278a6.909 6.909 0 005.04 11.628zm-2.41-4.173c.063-.225.122-.455.196-.676.083-.26.152-.294.392-.166.411.215.842.333 1.297.391.294.035.583.005.853-.112.51-.22.587-.808.156-1.166a1.937 1.937 0 00-.484-.284c-.446-.196-.911-.343-1.328-.598-.68-.406-1.117-.97-1.063-1.797.06-.94.588-1.523 1.45-1.837.353-.127.358-.122.358-.495v-.377c.005-.279.054-.328.333-.338.088-.005.171 0 .26 0 .592 0 .592 0 .597.593 0 .421 0 .421.421.485.319.049.627.142.921.274.162.074.225.186.176.358-.073.254-.142.514-.225.769-.078.24-.152.274-.382.161a2.904 2.904 0 00-1.46-.289 1.096 1.096 0 00-.391.079c-.441.19-.515.68-.138.984.191.152.407.265.632.358.392.161.784.318 1.156.524 1.185.656 1.504 2.14.671 3.154a2.25 2.25 0 01-1.15.74c-.202.054-.29.161-.28.367.01.206 0 .407 0 .612 0 .182-.093.28-.274.284-.22.005-.441.005-.657 0-.19-.004-.284-.112-.284-.298 0-.147-.005-.3-.005-.446-.005-.328-.014-.343-.328-.392-.406-.064-.803-.157-1.17-.338-.304-.147-.333-.22-.25-.524z" }),
        React__default['default'].createElement("path", { d: "M19.028 19.484c-3.987 3.987-10.389 4.12-14.537.407h1.332v-1.42H2.042V22.25h1.42v-1.376A11.967 11.967 0 0011.544 24c3.076 0 6.147-1.17 8.488-3.512l.504-.504-1.004-1.004-.504.504zM19.635 1.749v1.376A11.967 11.967 0 0011.553 0C8.478 0 5.407 1.17 3.065 3.512l-.5.5L3.57 5.015l.504-.505C8.061.524 14.463.391 18.611 4.104H17.28v1.42H21.06V1.75h-1.425z" })))); };

var Icon$L = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
    React__default['default'].createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" }))); };

var Icon$M = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M10.797 17.41a.703.703 0 11-.001 1.406.703.703 0 01.001-1.405m11.02-4.347a.703.703 0 11.002-1.405.703.703 0 01-.002 1.405m0-2.874a2.176 2.176 0 00-2.173 2.173c0 .233.039.465.115.691l-7.178 3.821a2.164 2.164 0 00-1.784-.936c-.828 0-1.583.474-1.948 1.215l-6.45-3.4c-.68-.358-1.19-1.48-1.137-2.502.028-.532.213-.946.493-1.106.178-.1.392-.092.619.027l.043.023c1.709.9 7.301 3.846 7.537 3.955.363.168.565.236 1.184-.057l11.56-6.013c.17-.064.368-.226.368-.472 0-.342-.354-.477-.355-.477-.657-.316-1.668-.789-2.654-1.25-2.107-.987-4.495-2.105-5.544-2.654-.905-.474-1.634-.075-1.764.006l-.253.125C7.776 5.693 1.46 8.822 1.1 9.041.456 9.432.057 10.213.006 11.182c-.081 1.537.703 3.138 1.823 3.726l6.82 3.517a2.174 2.174 0 002.148 1.86 2.176 2.176 0 002.173-2.14l7.51-4.07a2.176 2.176 0 003.51-1.712 2.176 2.176 0 00-2.173-2.173", fillRule: "evenodd" }))); };

var Icon$N = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.304.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12", fillRule: "evenodd" }))); };

var Icon$O = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
    React__default['default'].createElement("path", { d: "M28 25V10a1 1 0 00-1-1h-4a1 1 0 00-1 1v15h-2V6a1 1 0 00-1-1h-4a1 1 0 00-1 1v19h-2V15a1 1 0 00-1-1H7a1 1 0 00-1 1v10H4V5H2v21a1 1 0 001 1h27v-2zm-4-14h2v14h-2zm-8-4h2v18h-2zm-8 9h2v9H8z" }))); };

var Icon$P = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" }))); };

var Icon$Q = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" }))); };

var Icon$R = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" }))); };

var Icon$S = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" }))); };

var Icon$T = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" }))); };

var Icon$U = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
    React__default['default'].createElement("g", { fill: "#ff9d27" },
        React__default['default'].createElement("path", { d: "M10.9 48.7c4-4 4.4-5 6.9-2.5s1.5 2.8-2.5 6.9c-3 3-6.8 2.4-6.8 2.4s-.6-3.8 2.4-6.8" }),
        React__default['default'].createElement("path", { d: "M18.5 52.8c1.6-4.2 2.1-4.7-.2-6-2.3-1.3-2.3-.4-3.8 3.8-1.2 3.1.2 5.9.2 5.9s2.7-.5 3.8-3.7" })),
    React__default['default'].createElement("path", { d: "M16.2 48.9c.9-2.3.9-2.8 2.1-2.1 1.3.7 1 1 .1 3.3-.6 1.7-2.1 2.1-2.1 2.1s-.7-1.5-.1-3.3", fill: "#fdf516" }),
    React__default['default'].createElement("path", { d: "M17.1 45.7c-1.3-2.3-1.8-1.8-6-.2-3.1 1.2-3.7 3.8-3.7 3.8s2.8 1.4 5.9.2c4.2-1.6 5.1-1.6 3.8-3.8", fill: "#ff9d27" }),
    React__default['default'].createElement("g", { fill: "#fdf516" },
        React__default['default'].createElement("path", { d: "M15 47.8c2.3-.9 2.8-.9 2.1-2.1-.7-1.3-1-1-3.3-.1-1.7.6-2.1 2.1-2.1 2.1s1.6.7 3.3.1" }),
        React__default['default'].createElement("path", { d: "M13.9 47.6c2.2-2.2 2.4-2.8 3.8-1.4s.8 1.6-1.4 3.8c-1.7 1.7-3.8 1.3-3.8 1.3s-.2-2 1.4-3.7" })),
    React__default['default'].createElement("path", { d: "M18.5 38C12.3 27.6 2 31.9 2 31.9s14.7-14.7 24.6-4.8L18.5 38z", fill: "#3baacf" }),
    React__default['default'].createElement("path", { d: "M23.3 30.3l3.2-3.2C16.7 17.2 2 31.9 2 31.9s12.9-9.2 21.3-1.6", fill: "#428bc1" }),
    React__default['default'].createElement("path", { d: "M26 45.5C36.4 51.7 32.1 62 32.1 62s14.7-14.7 4.8-24.6L26 45.5z", fill: "#3baacf" }),
    React__default['default'].createElement("path", { d: "M33.7 40.7l3.2-3.2c9.9 9.9-4.8 24.6-4.8 24.6s9.2-13 1.6-21.4", fill: "#428bc1" }),
    React__default['default'].createElement("path", { d: "M48.8 30.9C37.1 42.5 24.2 48.8 19.7 44.3c-4.5-4.5 1.8-17.4 13.4-29.1 13.6-13.6 28.7-13 28.7-13s.5 15.1-13 28.7", fill: "#c5d0d8" }),
    React__default['default'].createElement("path", { d: "M45.8 27.6C34.2 39.2 22.6 46.8 19.9 44.1c-2.7-2.7 4.9-14.3 16.5-25.9C50 4.6 62 2 62 2s-2.6 12-16.2 25.6z", fill: "#dae3ea" }),
    React__default['default'].createElement("path", { d: "M24.3 47.5c-.5.5-1.3.5-1.8 0l-6-6c-.5-.5-.5-1.4 0-1.9l1.8-1.8 7.8 7.8-1.8 1.9", fill: "#c94747" }),
    React__default['default'].createElement("path", { d: "M22.6 45.7c-.5.5-1.1.7-1.4.4l-3.4-3.4c-.3-.3-.1-.9.4-1.4l1.8-1.8 4.4 4.4-1.8 1.8", fill: "#f15744" }),
    React__default['default'].createElement("path", { d: "M20.9 48.2c-.3.3-1 .3-1.3 0l-3.9-3.9c-.3-.3-.2-.9.1-1.2l1.2-1.2 5.1 5.1-1.2 1.2", fill: "#3e4347" }),
    React__default['default'].createElement("path", { d: "M20.1 47.4c-.3.3-.9.4-1.1.2l-2.7-2.7c-.2-.2-.1-.7.3-1l1.2-1.2 3.5 3.5-1.2 1.2", fill: "#62727a" }),
    React__default['default'].createElement("path", { d: "M61.8 2.2S56.4 2 49.1 4.8l10.1 10.1C62 7.6 61.8 2.2 61.8 2.2", fill: "#c94747" }),
    React__default['default'].createElement("path", { d: "M61.8 2.2s-4.3.9-10.8 4.6l6.2 6.2c3.7-6.5 4.6-10.8 4.6-10.8", fill: "#f15744" }),
    React__default['default'].createElement("circle", { cx: 43.5, cy: 20.5, r: 5, fill: "#edf4f9" }),
    React__default['default'].createElement("circle", { cx: 43.5, cy: 20.5, r: 3.3, fill: "#3baacf" }),
    React__default['default'].createElement("circle", { cx: 33.5, cy: 30.5, r: 5, fill: "#edf4f9" }),
    React__default['default'].createElement("circle", { cx: 33.5, cy: 30.5, r: 3.3, fill: "#3baacf" }),
    React__default['default'].createElement("g", { fill: "#fff" },
        React__default['default'].createElement("path", { d: "M48.9 6.9c-.3.3-.9.3-1.2 0-.3-.3-.3-.9 0-1.2.3-.3.9-.3 1.2 0 .3.3.3.9 0 1.2" }),
        React__default['default'].createElement("circle", { cx: 50.6, cy: 8.6, r: 0.8 }),
        React__default['default'].createElement("circle", { cx: 53, cy: 11, r: 0.8 }),
        React__default['default'].createElement("circle", { cx: 55.3, cy: 13.4, r: 0.8 }),
        React__default['default'].createElement("circle", { cx: 57.7, cy: 15.7, r: 0.8 })))); };

var Icon$V = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" }))); };

var Icon$W = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" }))); };

var Icon$X = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("g", { fillRule: "evenodd" },
        React__default['default'].createElement("path", { d: "M9.822 16.437l6.716-8.467-5.934-1.717-4.164 7.979z" }),
        React__default['default'].createElement("path", { d: "M21.428 8.124a1.309 1.309 0 00-1.839.213l-9.198 11.596-7.371-4.806 6.853-13.13A1.31 1.31 0 007.552.784L.149 14.97a1.31 1.31 0 00.445 1.702l9.367 6.106c.566.369 1.32.246 1.74-.283l9.94-12.532a1.31 1.31 0 00-.213-1.839zM22.635 13.414c-.723 0-1.31 2.07-1.31 2.793a1.31 1.31 0 002.62 0c0-.723-.587-2.793-1.31-2.793z" })))); };

var Icon$Y = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
    React__default['default'].createElement("path", { d: "M0 10H6V16H0z" }),
    React__default['default'].createElement("path", { d: "M0 19.917H6V25.917H0z" }),
    React__default['default'].createElement("path", { d: "M0 30.084H6V36.084H0z" }),
    React__default['default'].createElement("path", { d: "M10 10H48V16H10z" }),
    React__default['default'].createElement("path", { d: "M10 19.917H48V25.917H10z" }),
    React__default['default'].createElement("path", { d: "M10 30.084H48V36.084H10z" }))); };

var Logo = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 60 60", width: "24px", height: "24px", style: { maxWidth: 24 } }, props),
        React__default['default'].createElement("g", { id: "Colour" },
            React__default['default'].createElement("path", { d: "m52 30a21.654 21.654 0 0 1 -.58 5c-.1.47-.22.93-.36 1.39a21.933 21.933 0 0 1 -5 8.65h-.01c-.32.35-.66.69-1.01 1.01v.01a21.933 21.933 0 0 1 -8.65 5c-.46.14-.92.26-1.39.36a21.842 21.842 0 0 1 -10 0c-.47-.1-.93-.22-1.39-.36a21.933 21.933 0 0 1 -8.65-5v-.01c-.35-.32-.69-.66-1.01-1.01h-.01a21.933 21.933 0 0 1 -5-8.65c-.14-.46-.26-.92-.36-1.39a21.842 21.842 0 0 1 0-10c.1-.47.22-.92.36-1.38v-.01a21.933 21.933 0 0 1 5-8.65h.01c.32-.35.66-.69 1.01-1.01v-.01a21.933 21.933 0 0 1 8.65-5c.46-.14.92-.26 1.39-.36a21.842 21.842 0 0 1 10 0c.47.1.93.22 1.39.36a21.933 21.933 0 0 1 8.65 5v.01c.35.32.69.66 1.01 1.01h.01a21.933 21.933 0 0 1 5 8.65c.14.46.26.92.36 1.39a21.654 21.654 0 0 1 .58 5z", fill: "#ffdc00" }),
            React__default['default'].createElement("path", { d: "m51.42 25c-.1-.47-.22-.93-.36-1.39a21.933 21.933 0 0 0 -5-8.65h-.01c-.32-.35-.66-.69-1.01-1.01v-.01a21.933 21.933 0 0 0 -8.65-5c-.46-.14-.92-.26-1.39-.36a21.654 21.654 0 0 0 -5-.58c-.5 0-1 .022-1.5.056a21.476 21.476 0 0 1 3.5.524c.47.1.93.22 1.39.36a21.933 21.933 0 0 1 8.65 5v.01c.35.32.69.66 1.01 1.01h.01a21.933 21.933 0 0 1 5 8.65c.14.46.26.92.36 1.39a21.842 21.842 0 0 1 0 10c-.1.47-.22.93-.36 1.39a21.933 21.933 0 0 1 -5 8.65h-.01c-.32.35-.66.69-1.01 1.01v.01a21.933 21.933 0 0 1 -8.65 5c-.46.14-.92.26-1.39.36a21.476 21.476 0 0 1 -3.5.524c.5.034 1 .056 1.5.056a21.654 21.654 0 0 0 5-.58c.47-.1.93-.22 1.39-.36a21.933 21.933 0 0 0 8.65-5v-.01c.35-.32.69-.66 1.01-1.01h.01a21.933 21.933 0 0 0 5-8.65c.14-.46.26-.92.36-1.39a21.842 21.842 0 0 0 0-10z", fill: "#fec108" }),
            React__default['default'].createElement("path", { d: "m35 8.58a21.842 21.842 0 0 0 -10 0l4.14-7.08a.987.987 0 0 1 1.72 0z", fill: "#ff9801" }),
            React__default['default'].createElement("path", { d: "m23.61 8.94a21.933 21.933 0 0 0 -8.65 5l.05-8.19a.986.986 0 0 1 1.49-.86z", fill: "#ff9801" }),
            React__default['default'].createElement("path", { d: "m23.62 8.95-.01-.01", fill: "#ffdc00" }),
            React__default['default'].createElement("path", { d: "m13.94 14.96a21.933 21.933 0 0 0 -5 8.65l-4.05-7.11a.986.986 0 0 1 .86-1.49z", fill: "#ff9801" }),
            React__default['default'].createElement("path", { d: "m8.95 23.62-.01-.01", fill: "#ffdc00" }),
            React__default['default'].createElement("path", { d: "m8 30a21.654 21.654 0 0 0 .58 5l-7.08-4.14a.987.987 0 0 1 0-1.72l7.08-4.14a21.654 21.654 0 0 0 -.58 5z", fill: "#ff9801" }),
            React__default['default'].createElement("path", { d: "m13.94 45.04-8.19-.05a.986.986 0 0 1 -.86-1.49l4.05-7.11a21.933 21.933 0 0 0 5 8.65z", fill: "#ff9801" }),
            React__default['default'].createElement("path", { d: "m8.95 36.38-.01.01", fill: "#ffdc00" }),
            React__default['default'].createElement("path", { d: "m23.61 51.06-7.11 4.05a.986.986 0 0 1 -1.49-.86l-.05-8.19a21.933 21.933 0 0 0 8.65 5z", fill: "#ff9801" }),
            React__default['default'].createElement("path", { d: "m23.62 51.05-.01.01", fill: "#ffdc00" }),
            React__default['default'].createElement("path", { d: "m35 51.42-4.14 7.08a.987.987 0 0 1 -1.72 0l-4.14-7.08a21.842 21.842 0 0 0 10 0z", fill: "#ff9801" }),
            React__default['default'].createElement("path", { d: "m45.04 46.06-.05 8.19a.986.986 0 0 1 -1.49.86l-7.11-4.05a21.933 21.933 0 0 0 8.65-5z", fill: "#ff9801" }),
            React__default['default'].createElement("path", { d: "m36.39 51.06-.01-.01", fill: "#ffdc00" }),
            React__default['default'].createElement("path", { d: "m54.25 44.99-8.19.05a21.933 21.933 0 0 0 5-8.65l4.05 7.11a.986.986 0 0 1 -.86 1.49z", fill: "#ff9801" }),
            React__default['default'].createElement("path", { d: "m51.06 36.39-.01-.01", fill: "#ffdc00" }),
            React__default['default'].createElement("path", { d: "m58.5 30.86-7.08 4.14a21.842 21.842 0 0 0 0-10l7.08 4.14a.987.987 0 0 1 0 1.72z", fill: "#ff9801" }),
            React__default['default'].createElement("path", { d: "m55.11 16.5-4.05 7.11a21.933 21.933 0 0 0 -5-8.65l8.19.05a.986.986 0 0 1 .86 1.49z", fill: "#ff9801" }),
            React__default['default'].createElement("path", { d: "m51.06 23.61-.01.01", fill: "#ffdc00" }),
            React__default['default'].createElement("path", { d: "m45.04 13.94a21.933 21.933 0 0 0 -8.65-5l7.11-4.05a.986.986 0 0 1 1.49.86z", fill: "#ff9801" }),
            React__default['default'].createElement("path", { d: "m36.39 8.94-.01.01", fill: "#ffdc00" }),
            React__default['default'].createElement("path", { d: "m31.275 29.962.482 1.686a6 6 0 0 0 5.769 4.352h3.474a5 5 0 0 0 5-5v-2.431l1.447-.723a1 1 0 0 0 .553-.895v-1.251a1 1 0 0 0 -.7-.957 21.835 21.835 0 0 0 -6.3-.743c-5 0-6 1-11 1s-6-1-11-1a21.835 21.835 0 0 0 -6.295.74 1 1 0 0 0 -.7.957v1.254a1 1 0 0 0 .553.895l1.442.723v2.431a5 5 0 0 0 5 5h3.474a6 6 0 0 0 5.769-4.352l.482-1.686a1.326 1.326 0 0 1 1.275-.962 1.326 1.326 0 0 1 1.275.962z", fill: "#673ab7" }),
            React__default['default'].createElement("path", { d: "m47.3 24.74a21.835 21.835 0 0 0 -6.3-.74c-.549 0-1.043.014-1.506.035a19.637 19.637 0 0 1 4.8.7 1 1 0 0 1 .7.957v1.254a1 1 0 0 1 -.553.895l-1.441.728v2.431a5 5 0 0 1 -5 5h3a5 5 0 0 0 5-5v-2.431l1.447-.723a1 1 0 0 0 .553-.895v-1.251a1 1 0 0 0 -.7-.96z", fill: "#4527a0" }),
            React__default['default'].createElement("path", { d: "m26 40h8a0 0 0 0 1 0 0v1a4 4 0 0 1 -4 4 4 4 0 0 1 -4-4v-1a0 0 0 0 1 0 0z", fill: "#f5f5f5" }),
            React__default['default'].createElement("path", { d: "m31 40v1a4 4 0 0 1 -2.5 3.7 3.989 3.989 0 0 0 5.5-3.7v-1z", fill: "#cfd8dc" })),
        React__default['default'].createElement("g", { id: "Outline" },
            React__default['default'].createElement("path", { d: "m1.06 31.789 6.706 3.922c.051.2.11.406.168.608l-3.843 6.743a1.987 1.987 0 0 0 1.7 3h.016l7.793.038q.21.216.426.426l.044 7.778a1.966 1.966 0 0 0 .993 1.739 1.988 1.988 0 0 0 1 .27 1.966 1.966 0 0 0 .994-.272l6.755-3.85c.2.058.4.117.608.168l3.915 6.694a1.988 1.988 0 0 0 3.454.012l3.922-6.706c.2-.051.406-.11.608-.168l6.744 3.844a1.972 1.972 0 0 0 2 .008 1.963 1.963 0 0 0 .994-1.725l.044-7.792q.216-.21.426-.426l7.779-.044a1.9 1.9 0 0 0 1.739-.994 1.963 1.963 0 0 0 0-1.991l-3.85-6.755c.058-.2.116-.4.168-.608l6.7-3.916a1.988 1.988 0 0 0 .01-3.453l-6.714-3.919c-.052-.205-.11-.406-.168-.608l3.843-6.744a1.986 1.986 0 0 0 -1.7-3h-.016l-7.792-.044q-.21-.216-.426-.426l-.044-7.778a1.988 1.988 0 0 0 -2.985-1.737l-6.755 3.853c-.2-.057-.4-.116-.608-.167l-3.915-6.694a1.987 1.987 0 0 0 -3.454-.012l-3.922 6.706c-.205.051-.406.11-.608.167l-6.745-3.843a1.987 1.987 0 0 0 -2.995 1.717l-.044 7.79q-.216.21-.426.426l-7.779.044a2.054 2.054 0 0 0 -1.739.994 1.963 1.963 0 0 0 0 1.991l3.85 6.755c-.058.2-.117.4-.168.608l-6.7 3.916a1.987 1.987 0 0 0 -.01 3.453zm29-22.724a21 21 0 1 1 -21 21 21.024 21.024 0 0 1 21.002-21zm-24.24 35 2.98-5.232a23.006 23.006 0 0 0 3.055 5.267zm10.249 10.244-.034-6.035a23.006 23.006 0 0 0 5.265 3.052zm14 3.749-3.041-5.2a22.465 22.465 0 0 0 6.078 0zm14-3.751-5.232-2.982a23.034 23.034 0 0 0 5.263-3.052zm10.238-10.248-6.036.034a23.043 23.043 0 0 0 3.052-5.262zm3.749-14-5.2 3.042a22.473 22.473 0 0 0 0-6.079zm-3.753-14-2.981 5.241a23.006 23.006 0 0 0 -3.052-5.262zm-10.247-10.237.034 6.035a22.969 22.969 0 0 0 -5.262-3.052zm-14-3.749 3.041 5.2a22.358 22.358 0 0 0 -6.078 0zm-14 3.751 5.244 2.982a23.013 23.013 0 0 0 -5.263 3.052zm-10.238 10.248 6.036-.034a23.021 23.021 0 0 0 -3.054 5.262zm1.451 10.955a22.365 22.365 0 0 0 0 6.079l-5.2-3.037z" }),
            React__default['default'].createElement("path", { d: "m22.537 37.065a7.029 7.029 0 0 0 6.731-5.076l.482-1.689a.338.338 0 0 1 .625 0l.482 1.686a7.028 7.028 0 0 0 6.731 5.077h3.474a6.006 6.006 0 0 0 6-6v-1.81l.9-.447a1.989 1.989 0 0 0 1.1-1.789v-1.255a1.99 1.99 0 0 0 -1.411-1.912 22.719 22.719 0 0 0 -6.589-.785 30.51 30.51 0 0 0 -5.664.514 28.437 28.437 0 0 1 -5.336.486 28.416 28.416 0 0 1 -5.335-.486 30.523 30.523 0 0 0 -5.665-.514 22.716 22.716 0 0 0 -6.588.785 1.991 1.991 0 0 0 -1.412 1.912v1.255a1.99 1.99 0 0 0 1.106 1.789l.894.447v1.812a6.007 6.007 0 0 0 6 6zm-7.475-6v-2.43a1 1 0 0 0 -.552-.9l-1.448-.723v-1.25a20.837 20.837 0 0 1 6-.7 28.424 28.424 0 0 1 5.336.487 30.525 30.525 0 0 0 5.664.513 30.537 30.537 0 0 0 5.665-.513 28.4 28.4 0 0 1 5.335-.487 20.815 20.815 0 0 1 6 .7v1.255l-1.447.723a1 1 0 0 0 -.553.9v2.43a4 4 0 0 1 -4 4h-3.474a5.02 5.02 0 0 1 -4.807-3.626l-.481-1.692a2.326 2.326 0 0 0 -4.473 0l-.482 1.687a5.02 5.02 0 0 1 -4.807 3.626h-3.476a4 4 0 0 1 -4-4z" }),
            React__default['default'].createElement("g", { fill: "#f5f5f5" },
                React__default['default'].createElement("path", { d: "m19.769 27.358a1 1 0 0 0 -1.414 0l-1 1a1 1 0 1 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414z" }),
                React__default['default'].createElement("path", { d: "m19.355 32.772a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 -1.414-1.414l-3 3a1 1 0 0 0 0 1.414z" }),
                React__default['default'].createElement("path", { d: "m36.062 30.065a.993.993 0 0 0 .707-.293l1-1a1 1 0 1 0 -1.414-1.414l-1 1a1 1 0 0 0 .707 1.707z" }),
                React__default['default'].createElement("path", { d: "m37.355 32.772a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0 -1.414-1.414l-3 3a1 1 0 0 0 0 1.414z" })),
            React__default['default'].createElement("path", { d: "m34.062 39.065h-8a1 1 0 0 0 -1 1v1a5 5 0 1 0 10 0v-1a1 1 0 0 0 -1-1zm-4 5a3 3 0 0 1 -3-3h6a3 3 0 0 1 -3 3z" }))));
};
var LogoWithText = React__default['default'].memo(Logo, function (prev, next) { return prev.isDark === next.isDark; });

var Icon$Z = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M13.545 11.826c0 3.76-3.028 6.81-6.763 6.81-3.736 0-6.764-3.048-6.764-6.81 0-3.762 3.029-6.81 6.764-6.81 3.735 0 6.763 3.049 6.763 6.81zm7.42 0c0 3.54-1.514 6.41-3.382 6.41-1.867 0-3.381-2.87-3.381-6.41s1.514-6.41 3.381-6.41c1.868 0 3.382 2.87 3.382 6.41zm3.035 0c0 3.172-.533 5.743-1.19 5.743-.656 0-1.189-2.572-1.189-5.743 0-3.172.533-5.744 1.19-5.744.657 0 1.189 2.572 1.189 5.744z", fillRule: "evenodd" }))); };

var Icon$_ = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" }))); };

var Icon$$ = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" }))); };

var Icon$10 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" }))); };

var Icon$11 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" }))); };

var Icon$12 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 15" }, props),
    React__default['default'].createElement("g", { fillRule: "nonzero", fill: "none" },
        React__default['default'].createElement("path", { d: "M0 14.777s4.667-.341 6.375-3.984C8.083 7.15 7.798.035 16.108.035c1.822 0 3.818.862 4.91 1.622 5.478 3.814 2.888 11.64-3.544 9.634 0 0 2.334-.1 2.334-3.173 0-3.074-3.848-3.53-4.44-.968-.421 1.825-.17 7.343 7.855 7.627", fill: "#88E2DB" }),
        React__default['default'].createElement("path", { d: "M17.474 11.291c1.992 0 5.891-3.088 3.526-6.768-1.654-2.573-6.172-3.093-9.388.123C8.399 7.858 10.298 14.082.03 14.775c.4-.037 4.718-.51 6.345-3.982C8.083 7.15 7.798.035 16.108.035c1.822 0 3.817.862 4.91 1.622 5.478 3.814 2.888 11.64-3.544 9.634z", fill: "#A5F2EA" }),
        React__default['default'].createElement("path", { d: "M19.06 11.6c4.601-.341 5.9-6.644 1.16-9.943C19.19.941 17.36.134 15.628.044c.157-.006.318-.009.481-.009 1.822 0 3.817.862 4.91 1.622 5.002 3.483 3.277 10.31-1.957 9.943z", fill: "#C9F7F1" }),
        React__default['default'].createElement("path", { d: "M23.223 14.777h-10.64c-1.195-.496-1.668-2.24-1.028-4.838.71-2.886 2.094-4.442 4.155-4.781a3.872 3.872 0 012.811.607c-1.176-.63-2.787-.199-3.153 1.385-.422 1.825-.17 7.343 7.855 7.627z", fill: "#73C6BE" })))); };

var Icon$13 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
    React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
    React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
    React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
    React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
    React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
    React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
    React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" }))); };

var Icon$14 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" }))); };

var Icon$15 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 92 107" }, props),
    React__default['default'].createElement("g", { fillRule: "nonzero", fill: "none" },
        React__default['default'].createElement("path", { d: "M58.5 29.7h.6L56.3 14c-.7-4-4.6-6.7-8.6-6l-13.5 2.4c-.4 3-2.6 5.4-5.7 6-3.1.5-6-1-7.4-3.7L7.6 15.1c-4 .7-6.7 4.6-6 8.6l2.8 15.7c.1 0 .2-.1.3-.1 2.5-.4 4.9 1.2 5.4 3.7.4 2.5-1.2 4.9-3.7 5.4h-.3l9.2 51.5c.7 4 4.6 6.7 8.6 6L64 98.8c4-.7 6.7-4.6 6-8.6l-9.2-51.5c-.2.1-.4.1-.6.2-2.5.4-4.9-1.2-5.4-3.7-.5-2.6 1.2-5 3.7-5.5z", fill: "#EAEAEA" }),
        React__default['default'].createElement("path", { d: "M28.6 105l-16-89.7-.2-1.1-4.8.8c-4 .7-6.7 4.6-6 8.6l2.8 15.7c.1 0 .2-.1.3-.1 2.5-.4 4.9 1.2 5.4 3.7.4 2.5-1.2 4.9-3.7 5.4h-.3l9.2 51.5c.7 4 4.6 6.7 8.6 6l4.7-.8z", fill: "#D4D6D6" }),
        React__default['default'].createElement("path", { d: "M10.2 44c-.5 0-.7-1.9-.2-2l3-.5c.6-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-3 .5h-.2zM18.5 42.5c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l5.4-1c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-5.4 1h-.2zm10.8-1.9c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l5.4-1c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-5.4 1h-.2zM40 38.7c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l5.4-1c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-5.4 1H40z", fill: "#B0BEC5" }),
        React__default['default'].createElement("path", { d: "M50.8 36.8c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l3-.5c.6-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-3 .5h-.2z", fill: "#10591C" }),
        React__default['default'].createElement("path", { fill: "#FBD000", d: "M41.414 18.709l7.285-1.297 1.297 7.285-7.285 1.297z" }),
        React__default['default'].createElement("path", { d: "M19.8 25.9c-1 0-1.8-.7-2-1.6-.2-1.1.5-2.1 1.6-2.3l15.2-2.7c1.1-.2 2.1.5 2.3 1.6.2 1.1-.5 2.1-1.6 2.3l-15.2 2.7h-.3zM20.1 29.6c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l10.5-1.9c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-10.5 1.9h-.2zM23.4 47.8c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l10.5-1.9c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-10.5 1.9h-.2zM24.2 52.6c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l15.7-2.8c.5-.1 1.1.3 1.2.8.1.5-.3 1.1-.8 1.2l-15.7 2.8h-.2z", fill: "#B0BEC5" }),
        React__default['default'].createElement("path", { d: "M33 98.8c-.5 0-.9-.3-1-.8l-5.9-33.1c-.1-.5.3-1.1.8-1.2.5-.1 1.1.3 1.2.8L34 97.6c.1.5-.3 1.1-.8 1.2H33zM37.5 98c-.5 0-.9-.3-1-.8l-4.1-22.8c-.1-.5.3-1.1.8-1.2.5-.1 1.1.3 1.2.8l4.1 22.8c.1.5-.3 1.1-.8 1.2h-.2zM50.9 95.9c-.5 0-.9-.3-1-.8l-1.8-10c-.1-.5.3-1.1.8-1.2.6-.1 1.1.3 1.2.8l1.8 10c.1.5-.3 1.1-.8 1.2h-.2zM55.2 95.2c-.5 0-.9-.3-1-.8l-3-16.7c-.1-.5.3-1.1.8-1.2.5-.1 1.1.3 1.2.8l3 16.7c.1.5-.3 1.1-.8 1.2h-.2zM48.4 82c-.5 0-.9-.3-1-.8L44.8 66c-.1-.5.3-1.1.8-1.2.5-.1 1.1.3 1.2.8l2.7 15.2c.1.5-.3 1.1-.8 1.2h-.3z", fill: "#ADADAD" }),
        React__default['default'].createElement("path", { d: "M22.8 107c-4.1 0-7.5-2.9-8.2-6.9L5.5 48.6c0-.3 0-.6.2-.8.2-.2.4-.4.7-.4h.2c1-.2 1.8-.7 2.4-1.5.6-.8.8-1.8.6-2.7-.3-1.9-2.2-3.3-4.2-2.9-.1 0-.2.1-.3.1-.3.1-.5 0-.8-.1-.2-.2-.4-.4-.4-.7L1.1 23.9c-.4-2.2.1-4.4 1.4-6.3 1.3-1.8 3.2-3.1 5.4-3.5l13.4-2.4c.4-.1.9.1 1.1.5 1.2 2.3 3.8 3.6 6.3 3.1 2.6-.5 4.5-2.5 4.8-5.1.1-.4.4-.8.8-.9L47.7 7c.5-.1 1-.1 1.5-.1 4.1 0 7.5 2.9 8.2 6.9l2.8 15.7c.1.3 0 .6-.2.8-.2.2-.4.4-.7.4h-.4c-2 .4-3.3 2.2-2.9 4.2.3 1.9 2.2 3.3 4.2 2.9.1 0 .2-.1.3-.1h.1c.3-.1.6-.1.8.1.2.1.4.4.5.7L71 90c.8 4.6-2.2 8.9-6.8 9.7l-39.8 7.1c-.6.2-1.1.2-1.6.2zM7.6 49.2l8.9 50.5c.5 3.1 3.2 5.3 6.3 5.3.4 0 .7 0 1.1-.1l39.8-7.1c3.5-.6 5.8-3.9 5.1-7.4L60 39.9c-2.9.3-5.6-1.7-6.1-4.6-.5-2.9 1.3-5.7 4.1-6.4l-2.6-14.7c-.5-3.1-3.2-5.3-6.3-5.3-.4 0-.7 0-1.1.1l-12.7 2.3c-.7 3.1-3.1 5.5-6.3 6.1-.5.1-.9.1-1.4.1-2.7 0-5.2-1.4-6.6-3.7L8.3 16.1c-1.7.3-3.1 1.2-4.1 2.6-1 1.4-1.3 3.1-1.1 4.8l2.6 14.7c2.8-.2 5.3 1.8 5.8 4.6.3 1.5-.1 3-.9 4.2-.7 1.1-1.8 1.9-3 2.2z", fill: "#20C0FF" }),
        React__default['default'].createElement("path", { d: "M86.4 35.4c.2 0 .4.1.6.2l3.6-16.1c.9-4.1-1.7-8.2-5.8-9.1L70.9 7.3c-1.5 2.7-4.6 4.2-7.8 3.5-3.2-.7-5.4-3.4-5.6-6.4L43.6 1.3C39.5.4 35.4 3 34.5 7.1l-3.6 16.1h.3c2.6.6 4.2 3.1 3.6 5.7-.6 2.6-3.1 4.2-5.7 3.6-.1 0-.2-.1-.3-.1L17.2 85.2c-.9 4.1 1.7 8.2 5.8 9.1l41.1 9.1c4.1.9 8.2-1.7 9.1-5.8L85 44.8c-.2 0-.4 0-.6-.1-2.6-.6-4.2-3.1-3.6-5.7.5-2.6 3.1-4.2 5.6-3.6z", fill: "#EAEAEA" }),
        React__default['default'].createElement("path", { d: "M27.9 95.5L48.3 3.4l.2-1.1-4.9-1.1C39.5.3 35.4 2.9 34.5 7l-3.6 16.1h.3c2.6.6 4.2 3.1 3.6 5.7-.6 2.6-3.1 4.2-5.7 3.6-.1 0-.2-.1-.3-.1L17.2 85.2c-.9 4.1 1.7 8.2 5.8 9.1l4.9 1.2z", fill: "#D4D6D6" }),
        React__default['default'].createElement("path", { d: "M37.9 30.5h-.2l-2.9-.6c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l2.9.6c.5.1.9.7.8 1.2-.2.5-.6.8-1 .8zM71.2 37.9H71l-5.6-1.2c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l5.6 1.2c.5.1.9.7.8 1.2-.1.5-.5.8-1 .8zm-11.1-2.5h-.2l-5.6-1.2c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l5.6 1.2c.5.1.9.7.8 1.2-.1.5-.5.8-1 .8zM49 33h-.2l-5.6-1.2c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l5.6 1.2c.5.1.9.7.8 1.2-.1.4-.6.8-1 .8zM79.7 39.8h-.2l-2.9-.6c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l2.9.6c.5.1.9.7.8 1.2-.1.4-.5.8-1 .8z", fill: "#B0BEC5" }),
        React__default['default'].createElement("path", { fill: "#FBD000", d: "M72.807 25.44l1.665-7.519 7.518 1.665-1.665 7.518z" }),
        React__default['default'].createElement("path", { d: "M67.2 20c-.1 0-.3 0-.4-.1l-15.3-4.1c-1.1-.3-1.7-1.4-1.4-2.5.3-1.1 1.3-1.8 2.4-1.5l15.3 4.1c1.1.3 1.7 1.4 1.4 2.5-.2 1-1 1.7-2 1.6zM62 23h-.2l-11-2.7c-.5-.1-.9-.7-.8-1.4.1-.6.7-1 1.2-.9l11 2.7c.5.1.9.7.8 1.4-.1.5-.5.9-1 .9zM56.8 41.1h-.2l-10.8-2.4c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8L57 39.1c.5.1.9.7.8 1.2-.1.5-.5.8-1 .8zM61 47.2h-.2l-16.1-3.6c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.8l16.1 3.6c.5.1.9.7.8 1.2-.1.5-.5.8-1 .8z", fill: "#B0BEC5" }),
        React__default['default'].createElement("path", { d: "M34.9 91.3h-.2c-.5-.1-.9-.7-.8-1.2l7.5-34c.1-.5.7-.9 1.2-.8.5.1.9.7.8 1.2l-7.5 34c-.1.5-.5.8-1 .8zM39.6 92.3h-.2c-.5-.1-.9-.7-.8-1.2l5.2-23.4c.1-.5.7-.9 1.2-.8.5.1.9.7.8 1.2l-5.2 23.4c-.1.5-.5.8-1 .8zM53.3 95.7h-.2c-.5-.1-.9-.7-.8-1.2l2.3-10.3c.1-.5.7-.9 1.2-.8.5.1.9.7.8 1.2l-2.3 10.3c-.2.5-.6.8-1 .8zM57.6 96.7h-.2c-.5-.1-.9-.7-.8-1.2l3.8-17.1c.1-.5.7-.9 1.2-.8.5.1.9.7.8 1.2l-3.8 17.1c-.1.4-.5.8-1 .8zM56.4 81.4h-.2c-.5-.1-.9-.7-.8-1.2l3.5-15.6c.1-.5.6-.9 1.2-.8.5.1.9.7.8 1.2l-3.5 15.6c-.1.4-.5.8-1 .8z", fill: "#ADADAD" }),
        React__default['default'].createElement("path", { d: "M65.9 105c-.6 0-1.3-.1-1.9-.2l-41.3-9.1c-2.3-.5-4.2-1.9-5.4-3.8-1.3-2-1.7-4.3-1.2-6.5l11.7-53c.1-.3.2-.5.5-.6.2-.1.5-.2.8-.1.1 0 .1 0 .2.1.3.1.6.1.9.1 1.8 0 3.3-1.3 3.7-3 .2-1 0-2-.5-2.9-.5-.9-1.4-1.4-2.4-1.7h-.3c-.3 0-.5-.2-.7-.4V23l3.6-16.1C34.5 3 38 .1 42.1.1c.6 0 1.3.1 1.9.2l13.9 3.1c.4.1.7.5.8.9.2 2.7 2.2 5 4.8 5.6 2.6.6 5.4-.7 6.7-3 .2-.4.7-.6 1.1-.5l13.9 3.1c4.7 1 7.6 5.7 6.6 10.4l-3.6 16.2c-.1.3-.2.5-.5.7-.3.1-.6.2-.8.1h-.1c-.1 0-.2-.1-.3-.1-2-.5-4.1.9-4.5 2.9-.5 2 .8 4.1 2.9 4.5h.4c.3 0 .6.2.7.4.2.2.2.5.2.8L74.5 98.5c-1 3.6-4.5 6.5-8.6 6.5zM29.7 33.7l-11.5 52c-.4 1.7-.1 3.5.9 5s2.4 2.6 4.2 2.9l41.2 9.1c.5.1 1 .2 1.4.2 3.1 0 5.9-2.2 6.5-5.2l11.5-52c-2.9-.9-4.7-3.8-4-6.8.6-2.9 3.6-4.9 6.5-4.5l3.4-15.1c.8-3.6-1.5-7.2-5.1-8L71.5 8.4c-1.9 2.7-5.3 4.1-8.5 3.3-3.3-.7-5.8-3.3-6.3-6.6L43.5 2.2c-.5-.1-1-.2-1.4-.2-3.1 0-5.9 2.2-6.5 5.2l-3.4 15.2c1.2.4 2.3 1.2 3 2.4.8 1.3 1.1 2.9.8 4.4-.7 2.8-3.4 4.8-6.3 4.5z", fill: "#20C0FF" })))); };

var Icon$16 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" }))); };

var Icon$17 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" }))); };

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AuditIcon: Icon$J,
    ExchangeIcon: Icon$K,
    FarmIcon: Icon$L,
    GitbookIcon: Icon$M,
    GithubIcon: Icon$N,
    GraphIcon: Icon$O,
    GroupsIcon: Icon$P,
    HamburgerIcon: Icon$Q,
    HamburgerCloseIcon: Icon$R,
    HomeIcon: Icon$S,
    IfoIcon: Icon$T,
    IdoIcon: Icon$U,
    InfoIcon: Icon$V,
    LanguageIcon: Icon$W,
    LiquidityIcon: Icon$X,
    ListingIcon: Icon$Y,
    LogoIcon: LogoWithText,
    MediumIcon: Icon$Z,
    MoonIcon: Icon$_,
    MoreIcon: Icon$$,
    NftIcon: Icon$10,
    PoolIcon: Icon$11,
    WaveIcon: Icon$12,
    SunIcon: Icon$13,
    TelegramIcon: Icon$14,
    TicketIcon: Icon$15,
    TradeIcon: Icon$16,
    TwitterIcon: Icon$17
});

var MenuButton = styled__default['default'](Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$x;

var StyledLink$1 = styled__default['default'](reactRouterDom.Link)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$r, { className: "mobile-icon" })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React__default['default'].createElement(Icon$R, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$Q, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Sun home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink$1, { to: href, "aria-label": "Sun home page" }, innerLogo))));
};
var templateObject_1$y;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.sunswapfinance.com",
                icon: "ExchangeIcon",
            },
            {
                label: "Liquidity",
                href: "https://exchange.sunswapfinance.com/#/pool",
                icon: "LiquidityIcon",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    // {
    //   label: "Oceans",
    //   icon: "WaveIcon",
    //   href: "/syrup",
    // },
    // {
    //   label: "Audit By Certik 🚧",
    //   icon: "AuditIcon",
    //   href: "/audit",
    // },
    // {
    //   label: "Listing",
    //   icon: "ListingIcon",
    //   href: "/listing",
    // },
    // {
    //   label: "Graph",
    //   icon: "GraphIcon",
    //   href: "/graph",
    // },
    // {
    //   label: "Lottery",
    //   icon: "TicketIcon",
    //   href: "/lottery",
    // },
    // {
    //   label: "NFT",
    //   icon: "NftIcon",
    //   href: "/nft",
    // },
    // {
    //   label: "Profile & Teams",
    //   icon: "GroupsIcon",
    //   items: [
    //     {
    //       label: "Leaderboard",
    //       href: "/",
    //     },
    //     {
    //       label: "YourProfile",
    //       href: "/",
    //     },
    //   ],
    //   calloutClass: "rainbow",
    // },
    // {
    //   label: "Info",
    //   icon: "InfoIcon",
    //   items: [
    //     {
    //       label: "Overview",
    //       href: "https://saltswap.info",
    //     },
    //     {
    //       label: "Tokens",
    //       href: "https://saltswap.info/tokens",
    //     },
    //     {
    //       label: "Pairs",
    //       href: "https://saltswap.info/pairs",
    //     },
    //     {
    //       label: "Accounts",
    //       href: "https://saltswap.info/accounts",
    //     },
    //   ],
    // },
    // {
    //   label: "IDO",
    //   icon: "IdoIcon",
    //   items: [
    //     {
    //       label: "Next",
    //       href: "/ido",
    //     },
    //     {
    //       label: "History",
    //       href: "/ido/history",
    //     },
    //   ],
    // },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Github",
                href: "https://github.com/sunswap-finance",
                icon: "GithubIcon",
            },
            {
                label: "Docs",
                href: "https://docs.sunswapfinance.com",
                icon: "GitbookIcon",
            },
            {
                label: "Blog",
                href: "https://medium.com/@SunSwap.Finance",
                icon: "MediumIcon",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/sunswapfinance",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/sunswapfinance",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = styled.keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$z, templateObject_2$a, templateObject_3$6;

var Container$2 = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$8, null) : React__default['default'].createElement(Icon$7, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled__default['default'].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
function SubIconElement(_a) {
    var icon = _a.icon;
    if (icon) {
        var Icon = Icons[icon];
        return React__default['default'].createElement(Icon, { width: "18px", mr: "8px" });
    }
    return null;
}
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React__default['default'].createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(SubIconElement, { icon: item.icon }),
                    React__default['default'].createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
SubIconElement.defaultProps = {
    icon: undefined,
};
var templateObject_1$B;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon, LanguageIcon = Icons$1.LanguageIcon;
var Container$4 = styled__default['default'].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled__default['default'].a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);

var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$2;

var StyledPanel = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
       
        ));
};
var templateObject_1$D;

var Icon$18 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
    React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
    React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
    React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
    React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
    React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
    React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
    React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
    React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
    React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
    React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
    React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
    React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
    React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
    React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
    React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
    React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
    React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
    React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
    React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
    React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
    React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
    React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
    React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
    React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
    React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
    React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
    React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
    React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
    React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
    React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" }))); };

var Icon$19 = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
    React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
    React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" }))); };

var Icon$1a = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
    React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
    React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
    React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" }))); };

var Icon$1b = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
    React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
        React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
        React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
    React__default['default'].createElement("defs", null,
        React__default['default'].createElement("clipPath", { id: "clip0" },
            React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" }))))); };

var Icon$1c = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
    React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
    React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" }))); };

var Icon$1d = function (props) { return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
    React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
    React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
    React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
    React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
    React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
    React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
    React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
    React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
    React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
    React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
    React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" }))); };

var connectors = [
    {
        title: "Metamask",
        icon: Icon$18,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$1b,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$19,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$1a,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$1c,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1d,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://docs.saltswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React__default['default'].createElement(Icon$o, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$E;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$F, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var StyledAvatar = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Salt Bae" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React__default['default'].createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React__default['default'].createElement(Icon$t, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React__default['default'].createElement(StyledAvatar, { title: username },
            React__default['default'].createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React__default['default'].createElement(Pip, null)));
    }
    return (React__default['default'].createElement(StyledAvatar, { title: username },
        React__default['default'].createElement(reactRouterDom.Link, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React__default['default'].createElement(Pip, null)));
};
var templateObject_1$G, templateObject_2$e;

var Wrapper$1 = styled__default['default'].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, priceLink = _a.priceLink, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper$1, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React__default['default'].createElement(Avatar, { profile: profile }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$H, templateObject_2$f, templateObject_3$8, templateObject_4$3, templateObject_5$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$I;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } });
        }))));
};
var templateObject_1$J;

var ResetCSS = styled.createGlobalStyle(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$K;

var baseColors = {
    failure: "#ff6f60",
    primary: "#b0bec5",
    primaryBright: "#cfd8dc",
    primaryDark: "#90a4ae",
    secondary: "#9f9f9f",
    success: "#76d275",
    warning: "#5c007a",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#EFF4F5", tertiary: "#EFF4F5", text: "#2c2c2c", textDisabled: "#BDC2C4", textSubtle: "#6d6d6d", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#e2e9f0", background: "#100C18", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#353547", text: "#F2F6F9", textDisabled: "#9b95a7", textSubtle: "#e2e9f0", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#ff6659",
        backgroundHover: "#ff7961",
        border: 0,
        borderColorHover: "currentColor",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

exports.AddIcon = Icon$4;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$5;
exports.ArrowDownIcon = Icon$6;
exports.ArrowDropDownIcon = Icon$7;
exports.ArrowDropUpIcon = Icon$8;
exports.ArrowForwardIcon = Icon$9;
exports.AutoRenewIcon = Icon$a;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout;
exports.BinanceIcon = Icon$b;
exports.BlockIcon = Icon$2;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$e;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$d;
exports.CardsLayout = GridLayout$1;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon;
exports.CheckmarkIcon = Icon$f;
exports.ChevronDownIcon = Icon$g;
exports.ChevronLeftIcon = Icon$h;
exports.ChevronRightIcon = Icon$i;
exports.ChevronUpIcon = Icon$j;
exports.CloseIcon = Icon$k;
exports.CogIcon = Icon$l;
exports.CommunityIcon = Icon$m;
exports.CopyIcon = Icon$n;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1;
exports.Flex = Flex;
exports.Heading = Heading;
exports.HelpIcon = Icon$o;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$3;
exports.Input = Input;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$p;
exports.LogoIcon = Icon$q;
exports.LogoRoundIcon = Icon$r;
exports.Menu = Menu;
exports.MinusIcon = Icon$s;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.NoProfileAvatarIcon = Icon$t;
exports.OpenNewIcon = Icon$u;
exports.PlaceholderIcon = Icon$c;
exports.PrizeIcon = Icon$x;
exports.Progress = Progress;
exports.ProgressSalt = Icon$A;
exports.Radio = Radio;
exports.RemoveIcon = Icon$y;
exports.ResetCSS = ResetCSS;
exports.SaltIcon = Icon$v;
exports.SaltRoundIcon = Icon$w;
exports.SearchIcon = Icon$E;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$F;
exports.SyncAltIcon = Icon$G;
exports.Tag = Tag;
exports.Text = Text;
exports.Ticket = Icon$C;
exports.TicketRound = Icon$D;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$z;
exports.WarningIcon = Icon$H;
exports.Won = Icon$B;
exports.alertVariants = variants$1;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
