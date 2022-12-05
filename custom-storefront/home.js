"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = home;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fulfillAPIRequest = _interopRequireDefault(require(".././node_modules/react-storefront/props/fulfillAPIRequest"));

var _createAppData = _interopRequireDefault(require(".././custom-storefront/util/appdata"));

function home(_x, _x2) {
  return _home.apply(this, arguments);
}

function _home() {
  _home = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fulfillAPIRequest["default"])(req, {
              appData: _createAppData["default"],
              pageData: function pageData() {
                return Promise.resolve({
                  title: 'E-commerce',
                  slots: {
                    heading: 'Welcome to your new E-commerce app.',
                    description: "\n                <p>\n                Here you'll find mock home, category, subcategory, product, and cart pages that you can\n                use as a starting point to build your PWA.\n              </p>\n              <p>Happy coding!</p>\n            "
                  }
                });
              }
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _home.apply(this, arguments);
}
//# sourceMappingURL=home.js.map