"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createMenu;

function createMenu() {
  var items = [];

  for (var i = 1; i <= 5; i++) {
    items.push(createCategoryItem(i));
  }

  return {
    items: items,
    header: 'header',
    footer: 'footer'
  };
}

function createCategoryItem(i) {
  var items = [];

  for (var j = 1; j <= 5; j++) {
    items.push(createSubcategoryItem(j));
  }

  return {
    text: "hsb".concat(i),
    items: items
  };
}

function createSubcategoryItem(i) {
  var items = [];

  for (var j = 1; j <= 5; j++) {
    items.push(createProductItem(j));
  }

  return {
    text: "Subcategory ".concat(i),
    href: "/s/[...categorySlug]",
    as: "/s/".concat(i),
    expanded: i === 1,
    items: items
  };
}

function createProductItem(i) {
  return {
    text: "Product ".concat(i),
    href: "/p/[productId]",
    as: "/p/".concat(i)
  };
}
//# sourceMappingURL=createMenu.js.map