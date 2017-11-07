'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? 'rolling' : _ref$type,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? '#fff' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 20 : _ref$size,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 10 : _ref$stroke,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      _ref$visible = _ref.visible,
      visible = _ref$visible === undefined ? true : _ref$visible;

  var svgStyles = _extends({
    verticalAlign: 'middle',
    width: size + 'px',
    height: size + 'px'
  }, style);
  return visible ? _react2.default.createElement(
    'svg',
    { style: svgStyles, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', preserveAspectRatio: 'xMidYMid' },
    _react2.default.createElement(
      'circle',
      { cx: '50', cy: '50', fill: 'none', stroke: color, strokeWidth: stroke, r: '35', strokeDasharray: '164.93361431346415 56.97787143782138', transform: 'rotate(216 50 50)' },
      _react2.default.createElement('animateTransform', { attributeName: 'transform', type: 'rotate', calcMode: 'linear', values: '0 50 50;360 50 50', keyTimes: '0;1', dur: '1s', begin: '0s', repeatCount: 'indefinite' })
    )
  ) : null;
};