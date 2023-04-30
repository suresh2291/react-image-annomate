"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Pencil = function Pencil(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "#000000",
    width: "35px",
    height: "35px",
    viewBox: "0 0 56 56",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "SVGRepo_bgCarrier",
    strokeWidth: 0
  }), /*#__PURE__*/React.createElement("g", {
    id: "SVGRepo_tracerCarrier",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("g", {
    id: "SVGRepo_iconCarrier"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.4570 44.7578 C 19.9492 51.25 28.3866 53.1953 32.5351 53.5937 C 33.7539 53.7344 34.4335 52.9844 34.5273 52.2110 C 34.6210 51.3906 34.1054 50.5000 32.9335 50.3359 C 29.1835 49.8203 21.4257 48.1328 15.8007 42.4375 C 6.6132 33.2266 4.8788 19.3047 12.3788 11.8047 C 18.4726 5.7344 28.6210 6.5078 36.0976 10.5391 L 38.5351 8.1719 C 29.4413 2.7110 17.2070 2.2656 10.0351 9.4610 C 1.5039 18.0156 2.6288 33.9297 13.4570 44.7578 Z M 47.8164 11.5469 L 49.6913 9.6719 C 50.5817 8.7813 50.6288 7.4688 49.7149 6.6250 L 49.1053 6.0625 C 48.3085 5.3125 47.0663 5.3359 46.1992 6.1563 L 44.3476 8.0547 Z M 25.0585 34.2578 L 46.1054 13.2344 L 42.6132 9.7656 L 21.5898 30.7656 L 19.6445 35.2422 C 19.4570 35.7344 19.9492 36.2266 20.4648 36.0625 Z M 21.9882 37.75 C 29.6523 45.4141 41.9804 48.4375 48.8710 41.5703 C 54.4961 35.9219 53.7694 25.8906 47.7461 17.2656 L 45.3554 19.6563 C 50.1368 26.7344 51.0742 34.6797 46.5273 39.2266 C 40.9961 44.7578 31.8554 42.1328 25.5742 36.2032 Z"
  })));
};
var _default = Pencil;
exports["default"] = _default;