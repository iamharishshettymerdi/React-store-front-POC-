"use strict";
// import Bidlistdata from '../../data-files/bidlist'
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createTabs;

function createTabs() {
  var tabs = [];
  var subcategories = [];

  for (var i = 1; i <= 3; i++) {
    subcategories.push({
      as: "/s/".concat(i),
      href: '/s/[...categorySlug]',
      text: "Subcategory hsb".concat(i)
    });
  }
  const users=["New","Brands","Makeup","Skincare","Hair","Fragrance","Tools & Brashes","Bath & Body","Mini size","Gifts","Beauty under $20","Sales & Offers"]
//   console.log("usertype ",usertype)
  for (var _i = 0; _i < users.length; _i++) {

    console.log("======== ",users[_i])
    tabs.push({
      as: "/s/".concat(_i),
      href: '/s/[...categorySlug]',
      text: users[_i],
      items: subcategories
    });
  }
  return tabs;
}
//# sourceMappingURL=createTabs.js.map