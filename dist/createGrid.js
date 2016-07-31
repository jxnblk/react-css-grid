'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGrid = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _robox = require('robox');

var _robox2 = _interopRequireDefault(_robox);

var _createStyles2 = require('./create-styles');

var _createStyles3 = _interopRequireDefault(_createStyles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var breakpoints = {
  sm: 'screen and (min-width:40em)',
  md: 'screen and (min-width:52em)',
  lg: 'screen and (min-width:64em)'
};

var createGrid = exports.createGrid = function createGrid(Comp) {
  var Box = (0, _robox2.default)(Comp);

  var Wrapped = function (_React$Component) {
    _inherits(Wrapped, _React$Component);

    function Wrapped() {
      _classCallCheck(this, Wrapped);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Wrapped).apply(this, arguments));
    }

    _createClass(Wrapped, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var _props$col = _props.col;
        var col = _props$col === undefined ? 12 : _props$col;
        var sm = _props.sm;
        var md = _props.md;
        var lg = _props.lg;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['col', 'sm', 'md', 'lg', 'children']);

        var _createStyles = (0, _createStyles3.default)(breakpoints)({ col: col, sm: sm, md: md, lg: lg });

        var css = _createStyles.css;
        var className = _createStyles.className;


        var cx = className + ' ' + (props.className || '');
        var sx = _extends({
          boxSizing: 'border-box',
          display: 'inline-block'
        }, props.style);

        return _react2.default.createElement(
          Box,
          _extends({}, props, { style: sx, className: cx }),
          _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: css } }),
          children
        );
      }
    }]);

    return Wrapped;
  }(_react2.default.Component);

  return Wrapped;
};

exports.default = createGrid;