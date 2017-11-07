'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    border: none;\n    cursor: pointer;\n    border-radius: 2px;\n    color: ', ';\n    background: ', ';\n    box-shadow: ', ';\n    padding: ', ';\n    font-size: ', ';\n    line-height: ', ';\n    transition: all 300ms;\n    outline: none;\n\n    &:hover {\n      background: ', ';\n    }\n    &:active {\n      background: ', ';\n    }\n  '], ['\n    border: none;\n    cursor: pointer;\n    border-radius: 2px;\n    color: ', ';\n    background: ', ';\n    box-shadow: ', ';\n    padding: ', ';\n    font-size: ', ';\n    line-height: ', ';\n    transition: all 300ms;\n    outline: none;\n\n    &:hover {\n      background: ', ';\n    }\n    &:active {\n      background: ', ';\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin-right: ', ';\n    width: 20px;\n    line-height: 20px;\n    display: inline-block;\n  '], ['\n    margin-right: ', ';\n    width: 20px;\n    line-height: 20px;\n    display: inline-block;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _Loader = require('../_icons/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = function Button(_ref) {
  var children = _ref.children,
      label = _ref.label,
      onClick = _ref.onClick,
      loading = _ref.loading,
      disabled = _ref.disabled,
      primary = _ref.primary,
      secondary = _ref.secondary,
      theme = _ref.theme,
      size = _ref.size,
      icon = _ref.icon,
      loader = _ref.loader;


  var sizeStyles = {
    'large': {
      padding: '0 15px',
      fontSize: '24px',
      lineHeight: '38px'
    },
    'medium': {
      padding: '0 10px',
      fontSize: '16px',
      lineHeight: '30px'
    },
    'small': {
      padding: '0 5px',
      fontSize: '14px',
      lineHeight: '28px'
    }
  };

  var themeStyles = {
    'solid': {
      background: primary,
      color: secondary,
      boxShadow: 'inset 0 0 0 0 ' + secondary
    },
    'outline': {
      background: secondary,
      color: primary,
      boxShadow: 'inset 0 0 0 1px ' + primary
    }
  };

  var backgroundColor = (0, _color2.default)(themeStyles[theme].background);

  var Btn = _styledComponents2.default.button(_templateObject, themeStyles[theme].color, themeStyles[theme].background, themeStyles[theme].boxShadow, sizeStyles[size].padding, sizeStyles[size].fontSize, sizeStyles[size].lineHeight, backgroundColor.light() ? backgroundColor.darken(0.05).string() : backgroundColor.lighten(0.1).string(), backgroundColor.darken(0.2).string());

  var Icon = _styledComponents2.default.span(_templateObject2, label || children ? '5px' : 0);

  return _react2.default.createElement(
    Btn,
    { onClick: onClick },
    _react2.default.createElement(_Loader2.default, _extends({ visible: loading }, loader, { color: theme == 'solid' ? secondary : primary, style: { 'marginRight': label || children ? '5px' : 0 } })),
    icon && !loading ? _react2.default.createElement(
      Icon,
      null,
      icon
    ) : null,
    label,
    children
  );
};

Button.propTypes = {
  children: _propTypes2.default.any,
  label: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  loading: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  primary: _propTypes2.default.string,
  secondary: _propTypes2.default.string,
  theme: _propTypes2.default.oneOf(['solid', 'outline']),
  size: _propTypes2.default.oneOf(['large', 'medium', 'small']),
  icon: _propTypes2.default.node,
  loader: _propTypes2.default.shape({
    type: _propTypes2.default.oneOf(['rolling']),
    size: _propTypes2.default.number,
    stroke: _propTypes2.default.number
  })
};

Button.defaultProps = {
  children: null,
  label: null,
  onClick: function onClick(f) {
    return f;
  },
  loading: false,
  disabled: false,
  primary: '#27ae60',
  secondary: '#fff',
  theme: 'solid',
  size: 'medium',
  icon: null,
  loader: {
    type: 'rolling',
    size: 20,
    stroke: 10
  }
};

exports.default = Button;