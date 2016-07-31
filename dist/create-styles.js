'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var width = function width(col) {
  return col / 12 * 100 + '%';
};

var createClassName = function createClassName(breakpoint) {
  return function (col) {
    return '_g' + breakpoint + col;
  };
};
var createRule = function createRule(breakpoints) {
  return function (breakpoint) {
    return function (className) {
      return function (col) {
        if (typeof col !== 'number') {
          return '';
        }
        var media = breakpoints[breakpoint];
        var rule = '.' + className + '{width:' + width(col) + '}';
        if (!media) {
          return rule;
        }
        return '@media ' + media + '{' + rule + '}';
      };
    };
  };
};

var createStyles = function createStyles(breakpoints) {
  return function (props) {
    var createBreakpointRule = createRule(breakpoints);
    var styles = Object.keys(props).map(function (key) {
      var val = props[key];
      if (!val) {
        return false;
      }
      var className = createClassName(key)(val);
      var rule = createBreakpointRule(key)(className)(val);

      return {
        className: className,
        rule: rule
      };
    }).filter(function (s) {
      return s !== false;
    });

    var css = styles.reduce(function (a, b) {
      return a + b.rule;
    }, '');

    var className = styles.reduce(function (a, b) {
      return a + b.className + ' ';
    }, '').trim();

    return { css: css, className: className };
  };
};

exports.default = createStyles;