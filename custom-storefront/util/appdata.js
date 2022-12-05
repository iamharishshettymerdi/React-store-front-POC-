"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createAppData;

var _createMenu = _interopRequireDefault(require("./menu"));

var _createTabs = _interopRequireDefault(require("./tabs"));

function createAppData() {
  return Promise.resolve({
    menu: (0, _createMenu["default"])(),
    tabs: (0, _createTabs["default"])()
  });
}
//# sourceMappingURL=createAppData.js.map