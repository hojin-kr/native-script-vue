require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarket.vue");
/* harmony import */ var _Market__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Market.vue");
/* harmony import */ var _OpenDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/OpenDate.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var http = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onItemTap: function onItemTap(args) {
      this.$navigateTo(_Market__WEBPACK_IMPORTED_MODULE_1__["default"], {
        animate: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn"
        },
        props: {
          market: this.market[args.index]
        }
      });
    },
    goOpenMarket: function goOpenMarket() {
      if (this.check1 && this.check2) {
        this.$navigateTo(_OpenMarket__WEBPACK_IMPORTED_MODULE_0__["default"], {
          animate: true,
          transition: {
            name: "slideLeft",
            duration: 250,
            curve: "easeIn"
          }
        });
      } else {
        alert("Accept need").then(() => {
          console.log("Alert dialog closed.");
        });
      }
    },
    indexChange: function indexChange(res) {
      if (res.value === 0) {
        this.getMarket();
        this.getFavorite();
      }

      if (res.value === 2) {
        this.$navigateTo(_OpenDate__WEBPACK_IMPORTED_MODULE_2__["default"], {});
      }
    },

    getMarket() {
      var _this = this;

      return _asyncToGenerator(function* () {
        var res = yield http.request({
          url: "http://15.165.91.254:3000/market",
          method: "GET"
        });
        _this.market = JSON.parse(res.content);
      })();
    },

    getFavorite() {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        var res = yield http.request({
          url: "http://15.165.91.254:3000/market/5",
          method: "GET"
        });
        _this2.favorite = JSON.parse(res.content);
      })();
    }

  },

  created() {},

  data() {
    return {
      check1: false,
      check2: false,
      marketRerenderKey: 0,
      market: [],
      favorite: []
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Market.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ui-dataform/vue/index.js");
/* harmony import */ var nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["market"],

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenDate.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarketName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketName.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      currentDay: new Date().getUTCDate(),
      currentMonth: new Date().getUTCMonth() + 1,
      currentYear: new Date().getUTCFullYear()
    };
  },

  methods: {
    next: function next() {
      this.$navigateTo(_OpenMarketName__WEBPACK_IMPORTED_MODULE_0__["default"], {});
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarket.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ui-dataform/vue/index.js");
/* harmony import */ var nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_1___default.a);

var http = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      market: {
        name: "dummy market",
        date: "2019-12-12",
        description: "dummy market description #f32 #fefw",
        imageSrc: "https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5db91539a421cf5315545c65/9caa5c4e07656fbfeb9cb941ac151d27/image.png",
        favorite: "0"
      }
    };
  },

  methods: {
    data() {
      return {
        busy: false
      };
    },

    createMarket() {
      return _asyncToGenerator(function* () {
        var res = yield http.request({
          url: "http://15.165.91.254:3000/create",
          method: "POST",
          content: {
            name: "dummy market",
            date: "2019-12-12",
            description: "dummy market description #f32 #fefw",
            imageSrc: "https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5db91539a421cf5315545c65/9caa5c4e07656fbfeb9cb941ac151d27/image.png",
            favorite: "fff"
          }
        });
        console.dir(res);
      })();
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketConfirm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ui-dataform/vue/index.js");
/* harmony import */ var nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Main.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      market: {
        date: "Ed Sheeran",
        marketName: "X",
        marketDescription: "2017",
        marketOption: true
      }
    };
  },

  methods: {
    next: function next() {
      this.$navigateTo(_Main__WEBPACK_IMPORTED_MODULE_2__["default"], {});
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketDescription.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarketPlace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketPlace.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      textFieldValue: ""
    };
  },

  methods: {
    next: function next() {
      this.$navigateTo(_OpenMarketPlace__WEBPACK_IMPORTED_MODULE_0__["default"], {});
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketName.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarketDescription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketDescription.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      textFieldValue: ""
    };
  },

  methods: {
    next: function next() {
      this.$navigateTo(_OpenMarketDescription__WEBPACK_IMPORTED_MODULE_0__["default"], {});
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketOption.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarketConfirm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketConfirm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      countries: [{
        name: "Australia",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png"
      }, {
        name: "Belgium",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png"
      }, {
        name: "Bulgaria",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png"
      }, {
        name: "Canada",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png"
      }, {
        name: "Switzerland",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png"
      }, {
        name: "China",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png"
      }, {
        name: "Czech Republic",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png"
      }, {
        name: "Germany",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png"
      }, {
        name: "Spain",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png"
      }, {
        name: "Ethiopia",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png"
      }, {
        name: "Croatia",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png"
      }, {
        name: "Hungary",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png"
      }, {
        name: "Italy",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png"
      }, {
        name: "Jamaica",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png"
      }, {
        name: "Romania",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png"
      }, {
        name: "Russia",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png"
      }, {
        name: "United States",
        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png"
      }]
    };
  },

  methods: {
    onItemTap: function onItemTap(args) {
      console.log("Item with index: " + args.index + " tapped");
    },
    next: function next() {
      this.$navigateTo(_OpenMarketConfirm__WEBPACK_IMPORTED_MODULE_0__["default"], {});
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketPlace.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarketSeller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketSeller.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var geoLocation = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      currentGeoLocation: {
        latitude: null,
        longitude: null,
        altitude: null,
        direction: null
      },
      textFieldValue: ""
    };
  },

  methods: {
    enableLocationServices: function enableLocationServices() {
      geoLocation.isEnabled().then(enabled => {
        if (!enabled) {
          geoLocation.enableLocationRequest().then(() => this.showLocation());
        } else {
          this.showLocation();
        }
      });
    },
    showLocation: function showLocation() {
      geoLocation.watchLocation(location => {
        this.currentGeoLocation = location;
      }, error => {
        alert(error);
      }, {
        desiredAccuracy: 3,
        updateDistance: 10,
        minimumUpdateTime: 1000 * 1
      });
    },
    next: function next() {
      this.$navigateTo(_OpenMarketSeller__WEBPACK_IMPORTED_MODULE_0__["default"], {});
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketSeller.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarketOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketOption.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      listPickerCountries: ["Australia", "Belgium", "Bulgaria", "Canada", "Switzerland", "China", "Czech Republic", "Germany", "Spain", "Ethiopia", "Croatia", "Hungary", "Italy", "Jamaica", "Romania", "Russia", "United States"],
      selectedListPickerIndex: 0
    };
  },

  methods: {
    next: function next() {
      this.$navigateTo(_OpenMarketOption__WEBPACK_IMPORTED_MODULE_0__["default"], {});
    }
  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=style&index=0&id=f889b9d8&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-f889b9d8] {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label[data-v-f889b9d8] {\n    margin-bottom: 15;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Main.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=template&id=f889b9d8&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "StackLayout",
        [
          _c(
            "TabView",
            {
              attrs: { selectedIndex: _vm.selectedIndex },
              on: { selectedIndexChange: _vm.indexChange }
            },
            [
              _c(
                "TabViewItem",
                { attrs: { title: "market" } },
                [
                  _c(
                    "StackLayout",
                    [
                      _c("label", {
                        staticStyle: {
                          fontSize: "35px",
                          padding: "68px 16px 7px 16px",
                          backgroundColor: ""
                        },
                        attrs: { text: "Market", fontWeight: "bold" }
                      }),
                      _c("SearchBar", {
                        attrs: { hint: "input text here" },
                        on: {
                          clear: _vm.searchCancel,
                          submit: _vm.searchSubmit
                        }
                      }),
                      _c(
                        "ListView",
                        {
                          key: _vm.marketRerenderKey,
                          staticStyle: { height: "1250px" },
                          attrs: { items: _vm.market, "+alias": "item" },
                          on: { itemTap: _vm.onItemTap }
                        },
                        [
                          _c("v-template", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var item = ref.item
                                  var $index = ref.$index
                                  var $even = ref.$even
                                  var $odd = ref.$odd
                                  return _c(
                                    "FlexboxLayout",
                                    { attrs: { flexDirection: "row" } },
                                    [
                                      _c(
                                        "StackLayout",
                                        {
                                          attrs: { orientation: "horizontal" }
                                        },
                                        [
                                          _c("Image", {
                                            staticClass: "thumb img-circle",
                                            attrs: { src: item.imageSrc }
                                          }),
                                          _c(
                                            "StackLayout",
                                            [
                                              _c("Label", {
                                                attrs: { text: item.name }
                                              }),
                                              _c("Label", {
                                                attrs: { text: item.date }
                                              }),
                                              _c("Label", {
                                                attrs: {
                                                  text: item.description
                                                }
                                              }),
                                              _c("Label", {
                                                attrs: { text: item.imageSrc }
                                              }),
                                              _c("Label", {
                                                attrs: { text: item.id }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabViewItem",
                { attrs: { title: "favorite" } },
                [
                  _c(
                    "StackLayout",
                    [
                      _c("label", {
                        staticStyle: {
                          fontSize: "35px",
                          padding: "68px 16px 7px 16px",
                          backgroundColor: ""
                        },
                        attrs: { text: "Favorite", fontWeight: "bold" }
                      }),
                      _c(
                        "ListView",
                        {
                          staticStyle: { height: "1250px" },
                          attrs: { items: _vm.favorite, "+alias": "item" },
                          on: { itemTap: _vm.onItemTap }
                        },
                        [
                          _c("v-template", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var item = ref.item
                                  var $index = ref.$index
                                  var $even = ref.$even
                                  var $odd = ref.$odd
                                  return _c(
                                    "FlexboxLayout",
                                    { attrs: { flexDirection: "row" } },
                                    [
                                      _c(
                                        "StackLayout",
                                        {
                                          attrs: { orientation: "horizontal" }
                                        },
                                        [
                                          _c("Image", {
                                            staticClass: "thumb img-circle",
                                            attrs: { src: item.imageSrc }
                                          }),
                                          _c(
                                            "StackLayout",
                                            [
                                              _c("Label", {
                                                attrs: { text: item.name }
                                              }),
                                              _c("Label", {
                                                attrs: { text: item.date }
                                              }),
                                              _c("Label", {
                                                attrs: {
                                                  text: item.description
                                                }
                                              }),
                                              _c("Label", {
                                                attrs: { text: item.imageSrc }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabViewItem",
                { attrs: { title: "open" } },
                [
                  _c(
                    "StackLayout",
                    [
                      _c("label", {
                        staticStyle: {
                          fontSize: "35px",
                          padding: "68px 16px 7px 16px"
                        },
                        attrs: { text: "Open", fontWeight: "bold" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabViewItem",
                { attrs: { title: "more" } },
                [
                  _c(
                    "StackLayout",
                    [
                      _c("label", {
                        staticStyle: {
                          fontSize: "35px",
                          padding: "68px 16px 7px 16px"
                        },
                        attrs: { text: "more", fontWeight: "bold" }
                      }),
                      _c("ListView", { staticStyle: { height: "1250px" } })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Market.vue?vue&type=template&id=31561952&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "page",
    [
      _c(
        "StackLayout",
        [
          _c("RadDataForm", { attrs: { source: _vm.market } }),
          _c("Button", {
            staticStyle: { backgroundColor: "#03A9F4" },
            attrs: { text: "update" },
            on: { tap: _vm.updateMarket }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenDate.vue?vue&type=template&id=adef5d1a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { title: "Open" } },
        [
          _c("ActionItem", {
            attrs: { "ios.systemIcon": "0", "ios.position": "right" },
            on: { tap: _vm.next }
          })
        ],
        1
      ),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            [
              _c("label", {
                staticStyle: {
                  fontSize: "35px",
                  padding: "68px 16px 7px 16px"
                },
                attrs: { text: "Date", fontWeight: "bold" }
              }),
              _c("DatePicker", {
                staticStyle: { margin: "0 10%" },
                attrs: {
                  year: _vm.currentYear,
                  month: _vm.currentMonth,
                  day: _vm.currentDay,
                  minDate: "1970-01-01",
                  maxDate: "2100-12-31"
                }
              }),
              _c("label", {
                staticStyle: {
                  fontSize: "35px",
                  padding: "68px 16px 7px 16px"
                },
                attrs: { text: "To", fontWeight: "bold" }
              }),
              _c("DatePicker", {
                staticStyle: { margin: "0 10%" },
                attrs: {
                  year: _vm.currentYear,
                  month: _vm.currentMonth,
                  day: _vm.currentDay,
                  minDate: "1970-01-01",
                  maxDate: "2100-12-31"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarket.vue?vue&type=template&id=2bdfb07e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "page",
    [
      _c(
        "StackLayout",
        [
          _c("RadDataForm", { attrs: { source: _vm.market } }),
          _c("Button", {
            staticStyle: { backgroundColor: "#03A9F4" },
            attrs: { text: "Create market" },
            on: { tap: _vm.createMarket }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketConfirm.vue?vue&type=template&id=bf4e0822&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { title: "Open" } },
        [
          _c("ActionItem", {
            attrs: { "ios.systemIcon": "0", "ios.position": "right" },
            on: { tap: _vm.next }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        [
          _c("label", {
            staticStyle: { fontSize: "35px", padding: "68px 16px 7px 16px" },
            attrs: { text: "Confirm", fontWeight: "bold" }
          }),
          _c("RadDataForm", { attrs: { source: _vm.market } })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketDescription.vue?vue&type=template&id=889910aa&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { title: "Open" } },
        [
          _c("ActionItem", {
            attrs: { "ios.systemIcon": "0", "ios.position": "right" },
            on: { tap: _vm.next }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        [
          _c("label", {
            staticStyle: { fontSize: "35px", padding: "68px 16px 7px 16px" },
            attrs: { text: "Description", fontWeight: "bold" }
          }),
          _c("TextField", {
            attrs: { hint: "Enter text...", text: _vm.textFieldValue },
            on: {
              textChange: function($event) {
                _vm.textFieldValue = $event.value
              }
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketName.vue?vue&type=template&id=29f70c6c&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { title: "Open" } },
        [
          _c("ActionItem", {
            attrs: { "ios.systemIcon": "0", "ios.position": "right" },
            on: { tap: _vm.next }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        [
          _c("label", {
            staticStyle: { fontSize: "35px", padding: "68px 16px 7px 16px" },
            attrs: { text: "Market name", fontWeight: "bold" }
          }),
          _c("TextField", {
            attrs: { hint: "Enter text...", text: _vm.textFieldValue },
            on: {
              textChange: function($event) {
                _vm.textFieldValue = $event.value
              }
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketOption.vue?vue&type=template&id=45cd0716&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { title: "Open" } },
        [
          _c("ActionItem", {
            attrs: { "ios.systemIcon": "0", "ios.position": "right" },
            on: { tap: _vm.next }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        [
          _c("label", {
            staticStyle: { fontSize: "35px", padding: "68px 16px 7px 16px" },
            attrs: { text: "Option", fontWeight: "bold" }
          }),
          _c(
            "ListView",
            {
              staticStyle: { height: "1250px" },
              attrs: { items: _vm.countries, "+alias": "country" },
              on: { itemTap: _vm.onItemTap }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var country = ref.country
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "FlexboxLayout",
                        { attrs: { flexDirection: "row" } },
                        [
                          _c("Image", {
                            staticClass: "thumb img-circle",
                            attrs: { src: country.imageSrc }
                          }),
                          _c("Label", {
                            staticClass: "t-12",
                            staticStyle: { width: "60%" },
                            attrs: { text: country.name }
                          }),
                          _c("Switch", { attrs: { checked: "false" } })
                        ],
                        1
                      )
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketPlace.vue?vue&type=template&id=38d22c76&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { title: "Open" } },
        [
          _c("ActionItem", {
            attrs: { "ios.systemIcon": "0", "ios.position": "right" },
            on: { tap: _vm.next }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        [
          _c("label", {
            staticStyle: { fontSize: "35px", padding: "68px 16px 7px 16px" },
            attrs: { text: "Place", fontWeight: "bold" }
          }),
          _c("TextField", {
            attrs: { hint: "Enter text...", text: _vm.textFieldValue },
            on: {
              textChange: function($event) {
                _vm.textFieldValue = $event.value
              }
            }
          }),
          _c(
            "StackLayout",
            [
              _c("Button", {
                attrs: {
                  text: "Show location",
                  visibility: _vm.currentGeoLocation.latitude
                    ? "collapsed"
                    : "visible"
                },
                on: { tap: _vm.enableLocationServices }
              }),
              _c(
                "StackLayout",
                {
                  attrs: {
                    visibility: _vm.currentGeoLocation.latitude
                      ? "visible"
                      : "collapsed"
                  }
                },
                [
                  _c("Label", {
                    attrs: {
                      text: "Latitude: " + _vm.currentGeoLocation.latitude
                    }
                  }),
                  _c("Label", {
                    attrs: {
                      text: "Longitude: " + _vm.currentGeoLocation.longitude
                    }
                  }),
                  _c("Label", {
                    attrs: {
                      text: "Altitude: " + _vm.currentGeoLocation.altitude
                    }
                  }),
                  _c("Label", {
                    attrs: {
                      text: "Direction: " + _vm.currentGeoLocation.direction
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketSeller.vue?vue&type=template&id=06d33920&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { title: "Open" } },
        [
          _c("ActionItem", {
            attrs: { "ios.systemIcon": "0", "ios.position": "right" },
            on: { tap: _vm.next }
          })
        ],
        1
      ),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            [
              _c("label", {
                staticStyle: {
                  fontSize: "35px",
                  padding: "68px 16px 7px 16px"
                },
                attrs: { text: "Seller", fontWeight: "bold" }
              }),
              _c("label", {
                staticStyle: {
                  fontSize: "30px",
                  padding: "68px 16px 7px 16px"
                },
                attrs: { text: "Q1", fontWeight: "bold" }
              }),
              _c("ListPicker", {
                staticStyle: { margin: "0 10%" },
                attrs: {
                  items: _vm.listPickerCountries,
                  selectedIndex: _vm.selectedListPickerIndex
                },
                on: {
                  selectedIndexChange: function($event) {
                    _vm.selectedListPickerIndex = $event.value
                  }
                }
              }),
              _c("label", {
                staticStyle: {
                  fontSize: "30px",
                  padding: "68px 16px 7px 16px"
                },
                attrs: { text: "Q2", fontWeight: "bold" }
              }),
              _c("ListPicker", {
                staticStyle: { margin: "0 10%" },
                attrs: {
                  items: _vm.listPickerCountries,
                  selectedIndex: _vm.selectedListPickerIndex
                },
                on: {
                  selectedIndexChange: function($event) {
                    _vm.selectedListPickerIndex = $event.value
                  }
                }
              }),
              _c("label", {
                staticStyle: {
                  fontSize: "30px",
                  padding: "68px 16px 7px 16px"
                },
                attrs: { text: "Qn", fontWeight: "bold" }
              }),
              _c("ListPicker", {
                staticStyle: { margin: "0 10%" },
                attrs: {
                  items: _vm.listPickerCountries,
                  selectedIndex: _vm.selectedListPickerIndex
                },
                on: {
                  selectedIndexChange: function($event) {
                    _vm.selectedListPickerIndex = $event.value
                  }
                }
              }),
              _c("label", {
                staticStyle: {
                  fontSize: "30px",
                  padding: "68px 16px 7px 16px"
                },
                attrs: { text: "Qn", fontWeight: "bold" }
              }),
              _c("ListPicker", {
                staticStyle: { margin: "0 10%" },
                attrs: {
                  items: _vm.listPickerCountries,
                  selectedIndex: _vm.selectedListPickerIndex
                },
                on: {
                  selectedIndexChange: function($event) {
                    _vm.selectedListPickerIndex = $event.value
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/default.css'"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Main.vue");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        
 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <Main />\n        </Frame>",
  components: {
    Main: _components_Main__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Main.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Main.vue?vue&type=template&id=f889b9d8&scoped=true&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Main.vue?vue&type=style&index=0&id=f889b9d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f889b9d8",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('f889b9d8')) {
      api.createRecord('f889b9d8', component.options)
    } else {
      api.reload('f889b9d8', component.options)
    }
    module.hot.accept("./components/Main.vue?vue&type=template&id=f889b9d8&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Main.vue?vue&type=template&id=f889b9d8&scoped=true&");
(function () {
      api.rerender('f889b9d8', {
        render: _Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Main.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Main.vue?vue&type=style&index=0&id=f889b9d8&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=style&index=0&id=f889b9d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_f889b9d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Main.vue?vue&type=template&id=f889b9d8&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=template&id=f889b9d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_f889b9d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Market.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Market_vue_vue_type_template_id_31561952___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Market.vue?vue&type=template&id=31561952&");
/* harmony import */ var _Market_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Market.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Market_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Market_vue_vue_type_template_id_31561952___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Market_vue_vue_type_template_id_31561952___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('31561952')) {
      api.createRecord('31561952', component.options)
    } else {
      api.reload('31561952', component.options)
    }
    module.hot.accept("./components/Market.vue?vue&type=template&id=31561952&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Market_vue_vue_type_template_id_31561952___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Market.vue?vue&type=template&id=31561952&");
(function () {
      api.rerender('31561952', {
        render: _Market_vue_vue_type_template_id_31561952___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Market_vue_vue_type_template_id_31561952___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Market.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Market.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Market_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Market.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Market_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Market.vue?vue&type=template&id=31561952&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Market_vue_vue_type_template_id_31561952___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Market.vue?vue&type=template&id=31561952&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Market_vue_vue_type_template_id_31561952___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Market_vue_vue_type_template_id_31561952___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/OpenDate.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenDate_vue_vue_type_template_id_adef5d1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenDate.vue?vue&type=template&id=adef5d1a&");
/* harmony import */ var _OpenDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/OpenDate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OpenDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OpenDate_vue_vue_type_template_id_adef5d1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OpenDate_vue_vue_type_template_id_adef5d1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('adef5d1a')) {
      api.createRecord('adef5d1a', component.options)
    } else {
      api.reload('adef5d1a', component.options)
    }
    module.hot.accept("./components/OpenDate.vue?vue&type=template&id=adef5d1a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _OpenDate_vue_vue_type_template_id_adef5d1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenDate.vue?vue&type=template&id=adef5d1a&");
(function () {
      api.rerender('adef5d1a', {
        render: _OpenDate_vue_vue_type_template_id_adef5d1a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _OpenDate_vue_vue_type_template_id_adef5d1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/OpenDate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/OpenDate.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenDate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/OpenDate.vue?vue&type=template&id=adef5d1a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenDate_vue_vue_type_template_id_adef5d1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenDate.vue?vue&type=template&id=adef5d1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenDate_vue_vue_type_template_id_adef5d1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenDate_vue_vue_type_template_id_adef5d1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/OpenMarket.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarket_vue_vue_type_template_id_2bdfb07e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarket.vue?vue&type=template&id=2bdfb07e&");
/* harmony import */ var _OpenMarket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/OpenMarket.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OpenMarket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OpenMarket_vue_vue_type_template_id_2bdfb07e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OpenMarket_vue_vue_type_template_id_2bdfb07e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2bdfb07e')) {
      api.createRecord('2bdfb07e', component.options)
    } else {
      api.reload('2bdfb07e', component.options)
    }
    module.hot.accept("./components/OpenMarket.vue?vue&type=template&id=2bdfb07e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _OpenMarket_vue_vue_type_template_id_2bdfb07e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarket.vue?vue&type=template&id=2bdfb07e&");
(function () {
      api.rerender('2bdfb07e', {
        render: _OpenMarket_vue_vue_type_template_id_2bdfb07e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _OpenMarket_vue_vue_type_template_id_2bdfb07e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/OpenMarket.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/OpenMarket.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarket.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/OpenMarket.vue?vue&type=template&id=2bdfb07e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarket_vue_vue_type_template_id_2bdfb07e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarket.vue?vue&type=template&id=2bdfb07e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarket_vue_vue_type_template_id_2bdfb07e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarket_vue_vue_type_template_id_2bdfb07e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/OpenMarketConfirm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarketConfirm_vue_vue_type_template_id_bf4e0822___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketConfirm.vue?vue&type=template&id=bf4e0822&");
/* harmony import */ var _OpenMarketConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/OpenMarketConfirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OpenMarketConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OpenMarketConfirm_vue_vue_type_template_id_bf4e0822___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OpenMarketConfirm_vue_vue_type_template_id_bf4e0822___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('bf4e0822')) {
      api.createRecord('bf4e0822', component.options)
    } else {
      api.reload('bf4e0822', component.options)
    }
    module.hot.accept("./components/OpenMarketConfirm.vue?vue&type=template&id=bf4e0822&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _OpenMarketConfirm_vue_vue_type_template_id_bf4e0822___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketConfirm.vue?vue&type=template&id=bf4e0822&");
(function () {
      api.rerender('bf4e0822', {
        render: _OpenMarketConfirm_vue_vue_type_template_id_bf4e0822___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _OpenMarketConfirm_vue_vue_type_template_id_bf4e0822___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/OpenMarketConfirm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/OpenMarketConfirm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketConfirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketConfirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/OpenMarketConfirm.vue?vue&type=template&id=bf4e0822&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketConfirm_vue_vue_type_template_id_bf4e0822___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketConfirm.vue?vue&type=template&id=bf4e0822&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketConfirm_vue_vue_type_template_id_bf4e0822___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketConfirm_vue_vue_type_template_id_bf4e0822___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/OpenMarketDescription.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarketDescription_vue_vue_type_template_id_889910aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketDescription.vue?vue&type=template&id=889910aa&");
/* harmony import */ var _OpenMarketDescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/OpenMarketDescription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OpenMarketDescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OpenMarketDescription_vue_vue_type_template_id_889910aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OpenMarketDescription_vue_vue_type_template_id_889910aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('889910aa')) {
      api.createRecord('889910aa', component.options)
    } else {
      api.reload('889910aa', component.options)
    }
    module.hot.accept("./components/OpenMarketDescription.vue?vue&type=template&id=889910aa&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _OpenMarketDescription_vue_vue_type_template_id_889910aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketDescription.vue?vue&type=template&id=889910aa&");
(function () {
      api.rerender('889910aa', {
        render: _OpenMarketDescription_vue_vue_type_template_id_889910aa___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _OpenMarketDescription_vue_vue_type_template_id_889910aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/OpenMarketDescription.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/OpenMarketDescription.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketDescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketDescription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketDescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/OpenMarketDescription.vue?vue&type=template&id=889910aa&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketDescription_vue_vue_type_template_id_889910aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketDescription.vue?vue&type=template&id=889910aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketDescription_vue_vue_type_template_id_889910aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketDescription_vue_vue_type_template_id_889910aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/OpenMarketName.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarketName_vue_vue_type_template_id_29f70c6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketName.vue?vue&type=template&id=29f70c6c&");
/* harmony import */ var _OpenMarketName_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/OpenMarketName.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OpenMarketName_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OpenMarketName_vue_vue_type_template_id_29f70c6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OpenMarketName_vue_vue_type_template_id_29f70c6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('29f70c6c')) {
      api.createRecord('29f70c6c', component.options)
    } else {
      api.reload('29f70c6c', component.options)
    }
    module.hot.accept("./components/OpenMarketName.vue?vue&type=template&id=29f70c6c&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _OpenMarketName_vue_vue_type_template_id_29f70c6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketName.vue?vue&type=template&id=29f70c6c&");
(function () {
      api.rerender('29f70c6c', {
        render: _OpenMarketName_vue_vue_type_template_id_29f70c6c___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _OpenMarketName_vue_vue_type_template_id_29f70c6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/OpenMarketName.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/OpenMarketName.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketName_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketName.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketName_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/OpenMarketName.vue?vue&type=template&id=29f70c6c&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketName_vue_vue_type_template_id_29f70c6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketName.vue?vue&type=template&id=29f70c6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketName_vue_vue_type_template_id_29f70c6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketName_vue_vue_type_template_id_29f70c6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/OpenMarketOption.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarketOption_vue_vue_type_template_id_45cd0716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketOption.vue?vue&type=template&id=45cd0716&");
/* harmony import */ var _OpenMarketOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/OpenMarketOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OpenMarketOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OpenMarketOption_vue_vue_type_template_id_45cd0716___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OpenMarketOption_vue_vue_type_template_id_45cd0716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('45cd0716')) {
      api.createRecord('45cd0716', component.options)
    } else {
      api.reload('45cd0716', component.options)
    }
    module.hot.accept("./components/OpenMarketOption.vue?vue&type=template&id=45cd0716&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _OpenMarketOption_vue_vue_type_template_id_45cd0716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketOption.vue?vue&type=template&id=45cd0716&");
(function () {
      api.rerender('45cd0716', {
        render: _OpenMarketOption_vue_vue_type_template_id_45cd0716___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _OpenMarketOption_vue_vue_type_template_id_45cd0716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/OpenMarketOption.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/OpenMarketOption.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/OpenMarketOption.vue?vue&type=template&id=45cd0716&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketOption_vue_vue_type_template_id_45cd0716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketOption.vue?vue&type=template&id=45cd0716&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketOption_vue_vue_type_template_id_45cd0716___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketOption_vue_vue_type_template_id_45cd0716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/OpenMarketPlace.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarketPlace_vue_vue_type_template_id_38d22c76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketPlace.vue?vue&type=template&id=38d22c76&");
/* harmony import */ var _OpenMarketPlace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/OpenMarketPlace.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OpenMarketPlace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OpenMarketPlace_vue_vue_type_template_id_38d22c76___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OpenMarketPlace_vue_vue_type_template_id_38d22c76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('38d22c76')) {
      api.createRecord('38d22c76', component.options)
    } else {
      api.reload('38d22c76', component.options)
    }
    module.hot.accept("./components/OpenMarketPlace.vue?vue&type=template&id=38d22c76&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _OpenMarketPlace_vue_vue_type_template_id_38d22c76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketPlace.vue?vue&type=template&id=38d22c76&");
(function () {
      api.rerender('38d22c76', {
        render: _OpenMarketPlace_vue_vue_type_template_id_38d22c76___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _OpenMarketPlace_vue_vue_type_template_id_38d22c76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/OpenMarketPlace.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/OpenMarketPlace.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketPlace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketPlace.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketPlace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/OpenMarketPlace.vue?vue&type=template&id=38d22c76&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketPlace_vue_vue_type_template_id_38d22c76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketPlace.vue?vue&type=template&id=38d22c76&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketPlace_vue_vue_type_template_id_38d22c76___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketPlace_vue_vue_type_template_id_38d22c76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/OpenMarketSeller.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OpenMarketSeller_vue_vue_type_template_id_06d33920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketSeller.vue?vue&type=template&id=06d33920&");
/* harmony import */ var _OpenMarketSeller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/OpenMarketSeller.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OpenMarketSeller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OpenMarketSeller_vue_vue_type_template_id_06d33920___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OpenMarketSeller_vue_vue_type_template_id_06d33920___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('06d33920')) {
      api.createRecord('06d33920', component.options)
    } else {
      api.reload('06d33920', component.options)
    }
    module.hot.accept("./components/OpenMarketSeller.vue?vue&type=template&id=06d33920&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _OpenMarketSeller_vue_vue_type_template_id_06d33920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/OpenMarketSeller.vue?vue&type=template&id=06d33920&");
(function () {
      api.rerender('06d33920', {
        render: _OpenMarketSeller_vue_vue_type_template_id_06d33920___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _OpenMarketSeller_vue_vue_type_template_id_06d33920___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/OpenMarketSeller.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/OpenMarketSeller.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketSeller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketSeller.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketSeller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/OpenMarketSeller.vue?vue&type=template&id=06d33920&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketSeller_vue_vue_type_template_id_06d33920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/OpenMarketSeller.vue?vue&type=template&id=06d33920&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketSeller_vue_vue_type_template_id_06d33920___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenMarketSeller_vue_vue_type_template_id_06d33920___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"android\":{\"v8Flags\":\"--expose_gc\",\"forceLog\":true,\"markingMode\":\"none\"},\"main\":\"app.js\",\"name\":\"tns-template-vue\",\"version\":\"3.2.0\"}");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NYWluLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NYXJrZXQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL09wZW5EYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9PcGVuTWFya2V0LnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9PcGVuTWFya2V0Q29uZmlybS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvT3Blbk1hcmtldERlc2NyaXB0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9PcGVuTWFya2V0TmFtZS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvT3Blbk1hcmtldE9wdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvT3Blbk1hcmtldFBsYWNlLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9PcGVuTWFya2V0U2VsbGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4udnVlPzQ1OTAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluLnZ1ZT84ZjgzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFya2V0LnZ1ZT85YWY4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3BlbkRhdGUudnVlP2IxZTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0LnZ1ZT8yMzY0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3Blbk1hcmtldENvbmZpcm0udnVlPzM3ODUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0RGVzY3JpcHRpb24udnVlP2E1NTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0TmFtZS52dWU/NWNlNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wZW5NYXJrZXRPcHRpb24udnVlP2NkNDQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0UGxhY2UudnVlP2ZhNmUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0U2VsbGVyLnZ1ZT8yODQ3Iiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFpbi52dWU/MTk5OSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4udnVlP2EzZjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluLnZ1ZT82ZTFmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFya2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcmtldC52dWU/MmEzZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcmtldC52dWU/NGEzOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wZW5EYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wZW5EYXRlLnZ1ZT8wZTNkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3BlbkRhdGUudnVlPzM5NWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wZW5NYXJrZXQudnVlPzA0OWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0LnZ1ZT9jMjVhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3Blbk1hcmtldENvbmZpcm0udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3Blbk1hcmtldENvbmZpcm0udnVlP2UxZWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0Q29uZmlybS52dWU/MjcyOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wZW5NYXJrZXREZXNjcmlwdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0RGVzY3JpcHRpb24udnVlP2MyN2YiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0RGVzY3JpcHRpb24udnVlP2QyMjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0TmFtZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0TmFtZS52dWU/YzIyYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wZW5NYXJrZXROYW1lLnZ1ZT8xYmVjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3Blbk1hcmtldE9wdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0T3B0aW9uLnZ1ZT83N2UxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvT3Blbk1hcmtldE9wdGlvbi52dWU/NzQwNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wZW5NYXJrZXRQbGFjZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0UGxhY2UudnVlPzI4NGMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0UGxhY2UudnVlPzM5NWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0U2VsbGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL09wZW5NYXJrZXRTZWxsZXIudnVlPzI5ZDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcGVuTWFya2V0U2VsbGVyLnZ1ZT8xZTdhIl0sIm5hbWVzIjpbIk1haW4iLCJWdWUiLCJ0ZW1wbGF0ZSIsImNvbXBvbmVudHMiLCIkc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Z0IsMkZBQU07QUFDdEIseUJBQXlCLG9HQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBZ0wsQ0FBZ0Isb1BBQUcsRUFBQyxDOzs7Ozs7OztBQ0FwTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8VGFiVmlldyA6c2VsZWN0ZWRJbmRleD1cInNlbGVjdGVkSW5kZXhcIlxuICAgICAgICAgICAgICAgIEBzZWxlY3RlZEluZGV4Q2hhbmdlPVwiaW5kZXhDaGFuZ2VcIj5cblxuICAgICAgICAgICAgICAgIDwhLS0gdGFiIG1hcmtldCBzdGFydCAtLT5cbiAgICAgICAgICAgICAgICA8VGFiVmlld0l0ZW0gdGl0bGU9XCJtYXJrZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XCJNYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiAzNXB4OyBwYWRkaW5nOjY4cHggMTZweCA3cHggMTZweDsgYmFja2dyb3VuZC1jb2xvcjpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgaGludD1cImlucHV0IHRleHQgaGVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsZWFyPVwic2VhcmNoQ2FuY2VsXCIgQHN1Ym1pdD1cInNlYXJjaFN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiaXRlbSBpbiBtYXJrZXRcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cIm1hcmtldFJlcmVuZGVyS2V5XCIgc3R5bGU9XCJoZWlnaHQ6MTI1MHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0g6rCBIOumrOyKpO2KuCDslYjsl5DshJzsnZgg7KCV66CsIChodG1sNSBmbGV47JmAIOycoOyCrO2VnCDqsJzrhZApLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJpdGVtLmltYWdlU3JjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0aHVtYiBpbWctY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIml0ZW0ubmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIml0ZW0uZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIml0ZW0uZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtLmltYWdlU3JjXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5pZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvVGFiVmlld0l0ZW0+XG4gICAgICAgICAgICAgICAgPCEtLSB0YWIgbWFya2V0IGVuZCAtLT5cbiAgICAgICAgICAgICAgICA8IS0tIHRhYiBmYXZvcml0ZSBzdGFydCAtLT5cbiAgICAgICAgICAgICAgICA8VGFiVmlld0l0ZW0gdGl0bGU9XCJmYXZvcml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGV4dD1cIkZhdm9yaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogMzVweDsgcGFkZGluZzo2OHB4IDE2cHggN3B4IDE2cHg7IGJhY2tncm91bmQtY29sb3I6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiaXRlbSBpbiBmYXZvcml0ZVwiIEBpdGVtVGFwPVwib25JdGVtVGFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDoxMjUwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSDqsIEg66as7Iqk7Yq4IOyViOyXkOyEnOydmCDsoJXroKwgKGh0bWw1IGZsZXjsmYAg7Jyg7IKs7ZWcIOqwnOuFkCktLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cIml0ZW0uaW1hZ2VTcmNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRodW1iIGltZy1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5kYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5kZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIml0ZW0uaW1hZ2VTcmNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8L1RhYlZpZXdJdGVtPlxuICAgICAgICAgICAgICAgIDwhLS0gdGFiIGZhdm9yaXRlIGVuZCAtLT5cbiAgICAgICAgICAgICAgICA8IS0tIHRhYiBvcGVuIG1hcmtldCBzdGFydCAtLT5cbiAgICAgICAgICAgICAgICA8VGFiVmlld0l0ZW0gdGl0bGU9XCJvcGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVwiT3BlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDM1cHg7IHBhZGRpbmc6NjhweCAxNnB4IDdweCAxNnB4O1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvVGFiVmlld0l0ZW0+XG4gICAgICAgICAgICAgICAgPCEtLSB0YWIgb3BlbiBtYXJrZXQgZW5kIC0tPlxuICAgICAgICAgICAgICAgIDwhLS0gdGFiIG1vcmUgc3RhcnQgLS0+XG4gICAgICAgICAgICAgICAgPFRhYlZpZXdJdGVtIHRpdGxlPVwibW9yZVwiPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGV4dD1cIm1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiAzNXB4OyBwYWRkaW5nOjY4cHggMTZweCA3cHggMTZweDtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0VmlldyBzdHlsZT1cImhlaWdodDoxMjUwcHhcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8L1RhYlZpZXdJdGVtPlxuICAgICAgICAgICAgPC9UYWJWaWV3PlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE9wZW5NYXJrZXQgZnJvbSBcIi4vT3Blbk1hcmtldFwiO1xuICAgIGltcG9ydCBNYXJrZXQgZnJvbSBcIi4vTWFya2V0XCI7XG4gICAgaW1wb3J0IE9wZW5EYXRlIGZyb20gXCIuL09wZW5EYXRlXCI7XG5cbiAgICBjb25zdCBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uSXRlbVRhcDogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTWFya2V0LCB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVMZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldDogdGhpcy5tYXJrZXRbYXJncy5pbmRleF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvT3Blbk1hcmtldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2sxICYmIHRoaXMuY2hlY2syKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oT3Blbk1hcmtldCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlTGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBY2NlcHQgbmVlZFwiKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxlcnQgZGlhbG9nIGNsb3NlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmRleENoYW5nZTogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy52YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE1hcmtldCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEZhdm9yaXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXMudmFsdWUgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhPcGVuRGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgZ2V0TWFya2V0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vMTUuMTY1LjkxLjI1NDozMDAwL21hcmtldFwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtldCA9IEpTT04ucGFyc2UocmVzLmNvbnRlbnQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzeW5jIGdldEZhdm9yaXRlKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vMTUuMTY1LjkxLjI1NDozMDAwL21hcmtldC81XCIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmF2b3JpdGUgPSBKU09OLnBhcnNlKHJlcy5jb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpIHt9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjaGVjazE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNoZWNrMjogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWFya2V0UmVyZW5kZXJLZXk6IDAsXG4gICAgICAgICAgICAgICAgbWFya2V0OiBbXSxcbiAgICAgICAgICAgICAgICBmYXZvcml0ZTogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLmhvbWUtcGFuZWwge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIwO1xuICAgICAgICBtYXJnaW46IDE1O1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1O1xuICAgIH1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxwYWdlPlxuICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8UmFkRGF0YUZvcm0gOnNvdXJjZT1cIm1hcmtldFwiIC8+XG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJ1cGRhdGVcIiBAdGFwPVwidXBkYXRlTWFya2V0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICAjMDNBOUY0O1wiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cblxuICAgIDwvcGFnZT5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG4gICAgaW1wb3J0IFJhZERhdGFGb3JtIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vdnVlXCI7XG4gICAgVnVlLnVzZShSYWREYXRhRm9ybSk7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbXCJtYXJrZXRcIl0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiT3BlblwiPlxuICAgICAgICAgICAgPEFjdGlvbkl0ZW0gQHRhcD1cIm5leHRcIiBpb3Muc3lzdGVtSWNvbj1cIjBcIiBpb3MucG9zaXRpb249XCJyaWdodFwiIC8+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuICAgICAgICA8U2Nyb2xsVmlldz5cbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPGxhYmVsIHRleHQ9XCJEYXRlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogMzVweDsgcGFkZGluZzo2OHB4IDE2cHggN3B4IDE2cHg7XCJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiIC8+XG4gICAgICAgICAgICA8RGF0ZVBpY2tlciA6eWVhcj1cImN1cnJlbnRZZWFyXCIgOm1vbnRoPVwiY3VycmVudE1vbnRoXCJcbiAgICAgICAgICAgICAgICA6ZGF5PVwiY3VycmVudERheVwiIG1pbkRhdGU9XCIxOTcwLTAxLTAxXCIgbWF4RGF0ZT1cIjIxMDAtMTItMzFcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luOjAgMTAlXCIgLz5cbiAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVwiVG9cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiAzNXB4OyBwYWRkaW5nOjY4cHggMTZweCA3cHggMTZweDtcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCIgLz5cbiAgICAgICAgICAgIDxEYXRlUGlja2VyIDp5ZWFyPVwiY3VycmVudFllYXJcIiA6bW9udGg9XCJjdXJyZW50TW9udGhcIlxuICAgICAgICAgICAgICAgIDpkYXk9XCJjdXJyZW50RGF5XCIgbWluRGF0ZT1cIjE5NzAtMDEtMDFcIiBtYXhEYXRlPVwiMjEwMC0xMi0zMVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW46MCAxMCVcIiAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgT3Blbk1hcmtldE5hbWUgZnJvbSBcIi4vT3Blbk1hcmtldE5hbWVcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudERheTogbmV3IERhdGUoKS5nZXRVVENEYXRlKCksXG4gICAgICAgICAgICAgICAgY3VycmVudE1vbnRoOiBuZXcgRGF0ZSgpLmdldFVUQ01vbnRoKCkgKyAxLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRZZWFyOiBuZXcgRGF0ZSgpLmdldFVUQ0Z1bGxZZWFyKClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oT3Blbk1hcmtldE5hbWUsIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPHBhZ2U+XG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDxSYWREYXRhRm9ybSA6c291cmNlPVwibWFya2V0XCIgLz5cbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkNyZWF0ZSBtYXJrZXRcIiBAdGFwPVwiY3JlYXRlTWFya2V0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICAjMDNBOUY0O1wiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG4gICAgaW1wb3J0IFJhZERhdGFGb3JtIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vdnVlXCI7XG4gICAgVnVlLnVzZShSYWREYXRhRm9ybSk7XG4gICAgY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtYXJrZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkdW1teSBtYXJrZXRcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCIyMDE5LTEyLTEyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImR1bW15IG1hcmtldCBkZXNjcmlwdGlvbiAjZjMyICNmZWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjOiBcImh0dHBzOi8vdHJlbGxvLWF0dGFjaG1lbnRzLnMzLmFtYXpvbmF3cy5jb20vNWRiOGY0Yjg2NDQ5M2I0YzZmMGM1NmJkLzVkYjkxNTM5YTQyMWNmNTMxNTU0NWM2NS85Y2FhNWM0ZTA3NjU2ZmJmZWI5Y2I5NDFhYzE1MWQyNy9pbWFnZS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU6IFwiMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBidXN5OiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgY3JlYXRlTWFya2V0KCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vMTUuMTY1LjkxLjI1NDozMDAwL2NyZWF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImR1bW15IG1hcmtldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCIyMDE5LTEyLTEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJkdW1teSBtYXJrZXQgZGVzY3JpcHRpb24gI2YzMiAjZmVmd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM6IFwiaHR0cHM6Ly90cmVsbG8tYXR0YWNobWVudHMuczMuYW1hem9uYXdzLmNvbS81ZGI4ZjRiODY0NDkzYjRjNmYwYzU2YmQvNWRiOTE1MzlhNDIxY2Y1MzE1NTQ1YzY1LzljYWE1YzRlMDc2NTZmYmZlYjljYjk0MWFjMTUxZDI3L2ltYWdlLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU6IFwiZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJPcGVuXCI+XG4gICAgICAgICAgICA8QWN0aW9uSXRlbSBAdGFwPVwibmV4dFwiIGlvcy5zeXN0ZW1JY29uPVwiMFwiIGlvcy5wb3NpdGlvbj1cInJpZ2h0XCIgLz5cbiAgICAgICAgPC9BY3Rpb25CYXI+XG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVwiQ29uZmlybVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDM1cHg7IHBhZGRpbmc6NjhweCAxNnB4IDdweCAxNnB4O1wiXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIiAvPlxuICAgICAgICAgICAgPFJhZERhdGFGb3JtIDpzb3VyY2U9XCJtYXJrZXRcIiAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuICAgIGltcG9ydCBSYWREYXRhRm9ybSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL3Z1ZVwiO1xuICAgIFZ1ZS51c2UoUmFkRGF0YUZvcm0pO1xuXG4gICAgaW1wb3J0IE1haW4gZnJvbSBcIi4vTWFpblwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtYXJrZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCJFZCBTaGVlcmFuXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldE5hbWU6IFwiWFwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJrZXREZXNjcmlwdGlvbjogXCIyMDE3XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldE9wdGlvbjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTWFpbiwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIk9wZW5cIj5cbiAgICAgICAgICAgIDxBY3Rpb25JdGVtIEB0YXA9XCJuZXh0XCIgaW9zLnN5c3RlbUljb249XCIwXCIgaW9zLnBvc2l0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICA8L0FjdGlvbkJhcj5cbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPGxhYmVsIHRleHQ9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDM1cHg7IHBhZGRpbmc6NjhweCAxNnB4IDdweCAxNnB4O1wiXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIiAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwidGV4dEZpZWxkVmFsdWVcIiBoaW50PVwiRW50ZXIgdGV4dC4uLlwiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgT3Blbk1hcmtldFBsYWNlIGZyb20gXCIuL09wZW5NYXJrZXRQbGFjZVwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0RmllbGRWYWx1ZTogXCJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhPcGVuTWFya2V0UGxhY2UsIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJPcGVuXCI+XG4gICAgICAgICAgICA8QWN0aW9uSXRlbSBAdGFwPVwibmV4dFwiIGlvcy5zeXN0ZW1JY29uPVwiMFwiIGlvcy5wb3NpdGlvbj1cInJpZ2h0XCIgLz5cbiAgICAgICAgPC9BY3Rpb25CYXI+XG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVwiTWFya2V0IG5hbWVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiAzNXB4OyBwYWRkaW5nOjY4cHggMTZweCA3cHggMTZweDtcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCIgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cInRleHRGaWVsZFZhbHVlXCIgaGludD1cIkVudGVyIHRleHQuLi5cIiAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE9wZW5NYXJrZXREZXNjcmlwdGlvbiBmcm9tIFwiLi9PcGVuTWFya2V0RGVzY3JpcHRpb25cIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dEZpZWxkVmFsdWU6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oT3Blbk1hcmtldERlc2NyaXB0aW9uLCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiT3BlblwiPlxuICAgICAgICAgICAgPEFjdGlvbkl0ZW0gQHRhcD1cIm5leHRcIiBpb3Muc3lzdGVtSWNvbj1cIjBcIiBpb3MucG9zaXRpb249XCJyaWdodFwiIC8+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8bGFiZWwgdGV4dD1cIk9wdGlvblwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDM1cHg7IHBhZGRpbmc6NjhweCAxNnB4IDdweCAxNnB4O1wiXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIiAvPlxuXG4gICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwiY291bnRyeSBpbiBjb3VudHJpZXNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6MTI1MHB4XCI+XG4gICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwiY291bnRyeS5pbWFnZVNyY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0aHVtYiBpbWctY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImNvdW50cnkubmFtZVwiIGNsYXNzPVwidC0xMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD1cImZhbHNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgT3Blbk1hcmtldENvbmZpcm0gZnJvbSBcIi4vT3Blbk1hcmtldENvbmZpcm1cIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY291bnRyaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJBdXN0cmFsaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU3JjOiBcImh0dHBzOi8vcGxheS5uYXRpdmVzY3JpcHQub3JnL2Rpc3QvYXNzZXRzL2ltZy9mbGFncy9hdS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJlbGdpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU3JjOiBcImh0dHBzOi8vcGxheS5uYXRpdmVzY3JpcHQub3JnL2Rpc3QvYXNzZXRzL2ltZy9mbGFncy9iZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJ1bGdhcmlhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYzogXCJodHRwczovL3BsYXkubmF0aXZlc2NyaXB0Lm9yZy9kaXN0L2Fzc2V0cy9pbWcvZmxhZ3MvYmcucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDYW5hZGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU3JjOiBcImh0dHBzOi8vcGxheS5uYXRpdmVzY3JpcHQub3JnL2Rpc3QvYXNzZXRzL2ltZy9mbGFncy9jYS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlN3aXR6ZXJsYW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYzogXCJodHRwczovL3BsYXkubmF0aXZlc2NyaXB0Lm9yZy9kaXN0L2Fzc2V0cy9pbWcvZmxhZ3MvY2gucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDaGluYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGF5Lm5hdGl2ZXNjcmlwdC5vcmcvZGlzdC9hc3NldHMvaW1nL2ZsYWdzL2NuLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ3plY2ggUmVwdWJsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU3JjOiBcImh0dHBzOi8vcGxheS5uYXRpdmVzY3JpcHQub3JnL2Rpc3QvYXNzZXRzL2ltZy9mbGFncy9jei5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkdlcm1hbnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU3JjOiBcImh0dHBzOi8vcGxheS5uYXRpdmVzY3JpcHQub3JnL2Rpc3QvYXNzZXRzL2ltZy9mbGFncy9kZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlNwYWluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYzogXCJodHRwczovL3BsYXkubmF0aXZlc2NyaXB0Lm9yZy9kaXN0L2Fzc2V0cy9pbWcvZmxhZ3MvZXMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJFdGhpb3BpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGF5Lm5hdGl2ZXNjcmlwdC5vcmcvZGlzdC9hc3NldHMvaW1nL2ZsYWdzL2V0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ3JvYXRpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGF5Lm5hdGl2ZXNjcmlwdC5vcmcvZGlzdC9hc3NldHMvaW1nL2ZsYWdzL2hyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSHVuZ2FyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGF5Lm5hdGl2ZXNjcmlwdC5vcmcvZGlzdC9hc3NldHMvaW1nL2ZsYWdzL2h1LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSXRhbHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU3JjOiBcImh0dHBzOi8vcGxheS5uYXRpdmVzY3JpcHQub3JnL2Rpc3QvYXNzZXRzL2ltZy9mbGFncy9pdC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkphbWFpY2FcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU3JjOiBcImh0dHBzOi8vcGxheS5uYXRpdmVzY3JpcHQub3JnL2Rpc3QvYXNzZXRzL2ltZy9mbGFncy9qbS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlJvbWFuaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU3JjOiBcImh0dHBzOi8vcGxheS5uYXRpdmVzY3JpcHQub3JnL2Rpc3QvYXNzZXRzL2ltZy9mbGFncy9yby5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlJ1c3NpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGF5Lm5hdGl2ZXNjcmlwdC5vcmcvZGlzdC9hc3NldHMvaW1nL2ZsYWdzL3J1LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGF5Lm5hdGl2ZXNjcmlwdC5vcmcvZGlzdC9hc3NldHMvaW1nL2ZsYWdzL3VzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gd2l0aCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgdGFwcGVkXCIpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhPcGVuTWFya2V0Q29uZmlybSwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIk9wZW5cIj5cbiAgICAgICAgICAgIDxBY3Rpb25JdGVtIEB0YXA9XCJuZXh0XCIgaW9zLnN5c3RlbUljb249XCIwXCIgaW9zLnBvc2l0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICA8L0FjdGlvbkJhcj5cbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPGxhYmVsIHRleHQ9XCJQbGFjZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDM1cHg7IHBhZGRpbmc6NjhweCAxNnB4IDdweCAxNnB4O1wiXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIiAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwidGV4dEZpZWxkVmFsdWVcIiBoaW50PVwiRW50ZXIgdGV4dC4uLlwiIC8+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTaG93IGxvY2F0aW9uXCIgQHRhcD1cImVuYWJsZUxvY2F0aW9uU2VydmljZXNcIlxuICAgICAgICAgICAgICAgICAgICA6dmlzaWJpbGl0eT1cImN1cnJlbnRHZW9Mb2NhdGlvbi5sYXRpdHVkZSA/ICdjb2xsYXBzZWQnIDogJ3Zpc2libGUnXCIgLz5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXRcbiAgICAgICAgICAgICAgICAgICAgOnZpc2liaWxpdHk9XCJjdXJyZW50R2VvTG9jYXRpb24ubGF0aXR1ZGUgPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiJ0xhdGl0dWRlOiAnICsgY3VycmVudEdlb0xvY2F0aW9uLmxhdGl0dWRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIidMb25naXR1ZGU6ICcgKyBjdXJyZW50R2VvTG9jYXRpb24ubG9uZ2l0dWRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIidBbHRpdHVkZTogJyArIGN1cnJlbnRHZW9Mb2NhdGlvbi5hbHRpdHVkZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCInRGlyZWN0aW9uOiAnICsgY3VycmVudEdlb0xvY2F0aW9uLmRpcmVjdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBjb25zdCBnZW9Mb2NhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIik7XG5cbiAgICBpbXBvcnQgT3Blbk1hcmtldFNlbGxlciBmcm9tIFwiLi9PcGVuTWFya2V0U2VsbGVyXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRHZW9Mb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBhbHRpdHVkZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHRleHRGaWVsZFZhbHVlOiBcIlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBlbmFibGVMb2NhdGlvblNlcnZpY2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnZW9Mb2NhdGlvbi5pc0VuYWJsZWQoKS50aGVuKGVuYWJsZWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb0xvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zaG93TG9jYXRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2NhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0xvY2F0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnZW9Mb2NhdGlvbi53YXRjaExvY2F0aW9uKFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHZW9Mb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURpc3RhbmNlOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1VcGRhdGVUaW1lOiAxMDAwICogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oT3Blbk1hcmtldFNlbGxlciwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIk9wZW5cIj5cbiAgICAgICAgICAgIDxBY3Rpb25JdGVtIEB0YXA9XCJuZXh0XCIgaW9zLnN5c3RlbUljb249XCIwXCIgaW9zLnBvc2l0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICA8L0FjdGlvbkJhcj5cbiAgICAgICAgPFNjcm9sbFZpZXc+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XCJTZWxsZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogMzVweDsgcGFkZGluZzo2OHB4IDE2cHggN3B4IDE2cHg7XCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIiAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVwiUTFcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogMzBweDsgcGFkZGluZzo2OHB4IDE2cHggN3B4IDE2cHg7XCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIiAvPlxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIDppdGVtcz1cImxpc3RQaWNrZXJDb3VudHJpZXNcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRMaXN0UGlja2VySW5kZXhcIiBzdHlsZT1cIm1hcmdpbjowIDEwJVwiIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XCJRMlwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiAzMHB4OyBwYWRkaW5nOjY4cHggMTZweCA3cHggMTZweDtcIlxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiIC8+XG4gICAgICAgICAgICAgICAgPExpc3RQaWNrZXIgOml0ZW1zPVwibGlzdFBpY2tlckNvdW50cmllc1wiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZExpc3RQaWNrZXJJbmRleFwiIHN0eWxlPVwibWFyZ2luOjAgMTAlXCIgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgdGV4dD1cIlFuXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDMwcHg7IHBhZGRpbmc6NjhweCAxNnB4IDdweCAxNnB4O1wiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCIgLz5cbiAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciA6aXRlbXM9XCJsaXN0UGlja2VyQ291bnRyaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkTGlzdFBpY2tlckluZGV4XCIgc3R5bGU9XCJtYXJnaW46MCAxMCVcIiAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVwiUW5cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogMzBweDsgcGFkZGluZzo2OHB4IDE2cHggN3B4IDE2cHg7XCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIiAvPlxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIDppdGVtcz1cImxpc3RQaWNrZXJDb3VudHJpZXNcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRMaXN0UGlja2VySW5kZXhcIiBzdHlsZT1cIm1hcmdpbjowIDEwJVwiIC8+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgT3Blbk1hcmtldE9wdGlvbiBmcm9tIFwiLi9PcGVuTWFya2V0T3B0aW9uXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpc3RQaWNrZXJDb3VudHJpZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJBdXN0cmFsaWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJCZWxnaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQnVsZ2FyaWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDYW5hZGFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJTd2l0emVybGFuZFwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNoaW5hXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ3plY2ggUmVwdWJsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJHZXJtYW55XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiU3BhaW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJFdGhpb3BpYVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNyb2F0aWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJIdW5nYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiSXRhbHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJKYW1haWNhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUm9tYW5pYVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlJ1c3NpYVwiLFxuICAgICAgICAgICAgICAgICAgICBcIlVuaXRlZCBTdGF0ZXNcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRMaXN0UGlja2VySW5kZXg6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oT3Blbk1hcmtldE9wdGlvbiwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmhvbWUtcGFuZWxbZGF0YS12LWY4ODliOWQ4XSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcbi5kZXNjcmlwdGlvbi1sYWJlbFtkYXRhLXYtZjg4OWI5ZDhdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9NYWluLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2VsZWN0ZWRJbmRleDogX3ZtLnNlbGVjdGVkSW5kZXggfSxcbiAgICAgICAgICAgICAgb246IHsgc2VsZWN0ZWRJbmRleENoYW5nZTogX3ZtLmluZGV4Q2hhbmdlIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiVmlld0l0ZW1cIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIm1hcmtldFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNjhweCAxNnB4IDdweCAxNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTWFya2V0XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNlYXJjaEJhclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBoaW50OiBcImlucHV0IHRleHQgaGVyZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogX3ZtLnNlYXJjaENhbmNlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBfdm0uc2VhcmNoU3VibWl0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogX3ZtLm1hcmtldFJlcmVuZGVyS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTI1MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5tYXJrZXQsIFwiK2FsaWFzXCI6IFwiaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRodW1iIGltZy1jaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmltYWdlU3JjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogaXRlbS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGl0ZW0uZGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBpdGVtLmltYWdlU3JjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGl0ZW0uaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJWaWV3SXRlbVwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwiZmF2b3JpdGVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjY4cHggMTZweCA3cHggMTZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkZhdm9yaXRlXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEyNTBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uZmF2b3JpdGUsIFwiK2FsaWFzXCI6IFwiaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRodW1iIGltZy1jaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmltYWdlU3JjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogaXRlbS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGl0ZW0uZGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBpdGVtLmltYWdlU3JjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiVmlld0l0ZW1cIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIm9wZW5cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjY4cHggMTZweCA3cHggMTZweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJPcGVuXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiVmlld0l0ZW1cIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIm1vcmVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjY4cHggMTZweCA3cHggMTZweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJtb3JlXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxpc3RWaWV3XCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEyNTBweFwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJSYWREYXRhRm9ybVwiLCB7IGF0dHJzOiB7IHNvdXJjZTogX3ZtLm1hcmtldCB9IH0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogXCIjMDNBOUY0XCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwidXBkYXRlXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnVwZGF0ZU1hcmtldCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJPcGVuXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJBY3Rpb25JdGVtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLnN5c3RlbUljb25cIjogXCIwXCIsIFwiaW9zLnBvc2l0aW9uXCI6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ubmV4dCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI2OHB4IDE2cHggN3B4IDE2cHhcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJEYXRlXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiRGF0ZVBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjAgMTAlXCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgeWVhcjogX3ZtLmN1cnJlbnRZZWFyLFxuICAgICAgICAgICAgICAgICAgbW9udGg6IF92bS5jdXJyZW50TW9udGgsXG4gICAgICAgICAgICAgICAgICBkYXk6IF92bS5jdXJyZW50RGF5LFxuICAgICAgICAgICAgICAgICAgbWluRGF0ZTogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlOiBcIjIxMDAtMTItMzFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzNXB4XCIsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjY4cHggMTZweCA3cHggMTZweFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlRvXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiRGF0ZVBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjAgMTAlXCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgeWVhcjogX3ZtLmN1cnJlbnRZZWFyLFxuICAgICAgICAgICAgICAgICAgbW9udGg6IF92bS5jdXJyZW50TW9udGgsXG4gICAgICAgICAgICAgICAgICBkYXk6IF92bS5jdXJyZW50RGF5LFxuICAgICAgICAgICAgICAgICAgbWluRGF0ZTogXCIxOTcwLTAxLTAxXCIsXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlOiBcIjIxMDAtMTItMzFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwicGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIlJhZERhdGFGb3JtXCIsIHsgYXR0cnM6IHsgc291cmNlOiBfdm0ubWFya2V0IH0gfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBcIiMwM0E5RjRcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDcmVhdGUgbWFya2V0XCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmNyZWF0ZU1hcmtldCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJPcGVuXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJBY3Rpb25JdGVtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLnN5c3RlbUljb25cIjogXCIwXCIsIFwiaW9zLnBvc2l0aW9uXCI6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ubmV4dCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZvbnRTaXplOiBcIjM1cHhcIiwgcGFkZGluZzogXCI2OHB4IDE2cHggN3B4IDE2cHhcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDb25maXJtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIlJhZERhdGFGb3JtXCIsIHsgYXR0cnM6IHsgc291cmNlOiBfdm0ubWFya2V0IH0gfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJPcGVuXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJBY3Rpb25JdGVtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLnN5c3RlbUljb25cIjogXCIwXCIsIFwiaW9zLnBvc2l0aW9uXCI6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ubmV4dCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZvbnRTaXplOiBcIjM1cHhcIiwgcGFkZGluZzogXCI2OHB4IDE2cHggN3B4IDE2cHhcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJEZXNjcmlwdGlvblwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgaGludDogXCJFbnRlciB0ZXh0Li4uXCIsIHRleHQ6IF92bS50ZXh0RmllbGRWYWx1ZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnRleHRGaWVsZFZhbHVlID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIk9wZW5cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkFjdGlvbkl0ZW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3Muc3lzdGVtSWNvblwiOiBcIjBcIiwgXCJpb3MucG9zaXRpb25cIjogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5uZXh0IH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udFNpemU6IFwiMzVweFwiLCBwYWRkaW5nOiBcIjY4cHggMTZweCA3cHggMTZweFwiIH0sXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIk1hcmtldCBuYW1lXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBoaW50OiBcIkVudGVyIHRleHQuLi5cIiwgdGV4dDogX3ZtLnRleHRGaWVsZFZhbHVlIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0udGV4dEZpZWxkVmFsdWUgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwiT3BlblwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiQWN0aW9uSXRlbVwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImlvcy5zeXN0ZW1JY29uXCI6IFwiMFwiLCBcImlvcy5wb3NpdGlvblwiOiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm5leHQgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBmb250U2l6ZTogXCIzNXB4XCIsIHBhZGRpbmc6IFwiNjhweCAxNnB4IDdweCAxNnB4XCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiT3B0aW9uXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEyNTBweFwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uY291bnRyaWVzLCBcIithbGlhc1wiOiBcImNvdW50cnlcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25JdGVtVGFwIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRyeSA9IHJlZi5jb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsZXhEaXJlY3Rpb246IFwicm93XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aHVtYiBpbWctY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBjb3VudHJ5LmltYWdlU3JjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI2MCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGNvdW50cnkubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN3aXRjaFwiLCB7IGF0dHJzOiB7IGNoZWNrZWQ6IFwiZmFsc2VcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJPcGVuXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJBY3Rpb25JdGVtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLnN5c3RlbUljb25cIjogXCIwXCIsIFwiaW9zLnBvc2l0aW9uXCI6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ubmV4dCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZvbnRTaXplOiBcIjM1cHhcIiwgcGFkZGluZzogXCI2OHB4IDE2cHggN3B4IDE2cHhcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJQbGFjZVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgaGludDogXCJFbnRlciB0ZXh0Li4uXCIsIHRleHQ6IF92bS50ZXh0RmllbGRWYWx1ZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnRleHRGaWVsZFZhbHVlID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNob3cgbG9jYXRpb25cIixcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IF92bS5jdXJyZW50R2VvTG9jYXRpb24ubGF0aXR1ZGVcbiAgICAgICAgICAgICAgICAgICAgPyBcImNvbGxhcHNlZFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJ2aXNpYmxlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmVuYWJsZUxvY2F0aW9uU2VydmljZXMgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IF92bS5jdXJyZW50R2VvTG9jYXRpb24ubGF0aXR1ZGVcbiAgICAgICAgICAgICAgICAgICAgICA/IFwidmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImNvbGxhcHNlZFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkxhdGl0dWRlOiBcIiArIF92bS5jdXJyZW50R2VvTG9jYXRpb24ubGF0aXR1ZGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkxvbmdpdHVkZTogXCIgKyBfdm0uY3VycmVudEdlb0xvY2F0aW9uLmxvbmdpdHVkZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQWx0aXR1ZGU6IFwiICsgX3ZtLmN1cnJlbnRHZW9Mb2NhdGlvbi5hbHRpdHVkZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRGlyZWN0aW9uOiBcIiArIF92bS5jdXJyZW50R2VvTG9jYXRpb24uZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIk9wZW5cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkFjdGlvbkl0ZW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3Muc3lzdGVtSWNvblwiOiBcIjBcIiwgXCJpb3MucG9zaXRpb25cIjogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5uZXh0IH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzNXB4XCIsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjY4cHggMTZweCA3cHggMTZweFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNlbGxlclwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI2OHB4IDE2cHggN3B4IDE2cHhcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJRMVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxpc3RQaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwIDEwJVwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ubGlzdFBpY2tlckNvdW50cmllcyxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IF92bS5zZWxlY3RlZExpc3RQaWNrZXJJbmRleFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI2OHB4IDE2cHggN3B4IDE2cHhcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJRMlwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxpc3RQaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwIDEwJVwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ubGlzdFBpY2tlckNvdW50cmllcyxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IF92bS5zZWxlY3RlZExpc3RQaWNrZXJJbmRleFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI2OHB4IDE2cHggN3B4IDE2cHhcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJRblwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxpc3RQaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwIDEwJVwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ubGlzdFBpY2tlckNvdW50cmllcyxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IF92bS5zZWxlY3RlZExpc3RQaWNrZXJJbmRleFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI2OHB4IDE2cHggN3B4IDE2cHhcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJRblwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxpc3RQaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwIDEwJVwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ubGlzdFBpY2tlckNvdW50cmllcyxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IF92bS5zZWxlY3RlZExpc3RQaWNrZXJJbmRleFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzJ1wifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5cbmltcG9ydCBNYWluIGZyb20gJy4vY29tcG9uZW50cy9NYWluJztcblxuLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXG4vLyBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xuXG5uZXcgVnVlKHtcblxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxGcmFtZT5cbiAgICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgIDwvRnJhbWU+YCxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTWFpblxuICAgIH1cbn0pLiRzdGFydCgpOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjg4OWI5ZDgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL01haW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Zjg4OWI5ZDgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImY4ODliOWQ4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2hvamluamFuZy9Eb3dubG9hZHMvTlNQbGF5Z3JvdW5kLW44L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y4ODliOWQ4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y4ODliOWQ4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y4ODliOWQ4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mODg5YjlkOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmODg5YjlkOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9NYWluLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWY4ODliOWQ4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Zjg4OWI5ZDgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjg4OWI5ZDgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01hcmtldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzE1NjE5NTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFya2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFya2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2hvamluamFuZy9Eb3dubG9hZHMvTlNQbGF5Z3JvdW5kLW44L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMxNTYxOTUyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMxNTYxOTUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMxNTYxOTUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYXJrZXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxNTYxOTUyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMxNTYxOTUyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL01hcmtldC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFya2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcmtldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFya2V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTU2MTk1MiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3BlbkRhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFkZWY1ZDFhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL09wZW5EYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3BlbkRhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvaG9qaW5qYW5nL0Rvd25sb2Fkcy9OU1BsYXlncm91bmQtbjgvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYWRlZjVkMWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYWRlZjVkMWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYWRlZjVkMWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL09wZW5EYXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZGVmNWQxYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhZGVmNWQxYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9PcGVuRGF0ZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3BlbkRhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3BlbkRhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wZW5EYXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZGVmNWQxYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3Blbk1hcmtldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmJkZmIwN2UmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vT3Blbk1hcmtldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL09wZW5NYXJrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvaG9qaW5qYW5nL0Rvd25sb2Fkcy9OU1BsYXlncm91bmQtbjgvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmJkZmIwN2UnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmJkZmIwN2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmJkZmIwN2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL09wZW5NYXJrZXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZGZiMDdlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJiZGZiMDdlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL09wZW5NYXJrZXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wZW5NYXJrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3Blbk1hcmtldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3Blbk1hcmtldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmJkZmIwN2UmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09wZW5NYXJrZXRDb25maXJtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZjRlMDgyMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9PcGVuTWFya2V0Q29uZmlybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL09wZW5NYXJrZXRDb25maXJtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2hvamluamFuZy9Eb3dubG9hZHMvTlNQbGF5Z3JvdW5kLW44L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JmNGUwODIyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JmNGUwODIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JmNGUwODIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9PcGVuTWFya2V0Q29uZmlybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmY0ZTA4MjImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYmY0ZTA4MjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvT3Blbk1hcmtldENvbmZpcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wZW5NYXJrZXRDb25maXJtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wZW5NYXJrZXRDb25maXJtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcGVuTWFya2V0Q29uZmlybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmY0ZTA4MjImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09wZW5NYXJrZXREZXNjcmlwdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODg5OTEwYWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vT3Blbk1hcmtldERlc2NyaXB0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3Blbk1hcmtldERlc2NyaXB0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2hvamluamFuZy9Eb3dubG9hZHMvTlNQbGF5Z3JvdW5kLW44L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzg4OTkxMGFhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzg4OTkxMGFhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzg4OTkxMGFhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9PcGVuTWFya2V0RGVzY3JpcHRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg4OTkxMGFhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzg4OTkxMGFhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL09wZW5NYXJrZXREZXNjcmlwdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3Blbk1hcmtldERlc2NyaXB0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wZW5NYXJrZXREZXNjcmlwdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3Blbk1hcmtldERlc2NyaXB0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ODk5MTBhYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3Blbk1hcmtldE5hbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5ZjcwYzZjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL09wZW5NYXJrZXROYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3Blbk1hcmtldE5hbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvaG9qaW5qYW5nL0Rvd25sb2Fkcy9OU1BsYXlncm91bmQtbjgvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjlmNzBjNmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjlmNzBjNmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjlmNzBjNmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL09wZW5NYXJrZXROYW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOWY3MGM2YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyOWY3MGM2YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9PcGVuTWFya2V0TmFtZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3Blbk1hcmtldE5hbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3Blbk1hcmtldE5hbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wZW5NYXJrZXROYW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOWY3MGM2YyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3Blbk1hcmtldE9wdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDVjZDA3MTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vT3Blbk1hcmtldE9wdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL09wZW5NYXJrZXRPcHRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvaG9qaW5qYW5nL0Rvd25sb2Fkcy9OU1BsYXlncm91bmQtbjgvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDVjZDA3MTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDVjZDA3MTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDVjZDA3MTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL09wZW5NYXJrZXRPcHRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1Y2QwNzE2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ1Y2QwNzE2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL09wZW5NYXJrZXRPcHRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wZW5NYXJrZXRPcHRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3Blbk1hcmtldE9wdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3Blbk1hcmtldE9wdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDVjZDA3MTYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09wZW5NYXJrZXRQbGFjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzhkMjJjNzYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vT3Blbk1hcmtldFBsYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3Blbk1hcmtldFBsYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2hvamluamFuZy9Eb3dubG9hZHMvTlNQbGF5Z3JvdW5kLW44L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM4ZDIyYzc2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM4ZDIyYzc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM4ZDIyYzc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9PcGVuTWFya2V0UGxhY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4ZDIyYzc2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM4ZDIyYzc2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL09wZW5NYXJrZXRQbGFjZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3Blbk1hcmtldFBsYWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wZW5NYXJrZXRQbGFjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3Blbk1hcmtldFBsYWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOGQyMmM3NiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3Blbk1hcmtldFNlbGxlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZkMzM5MjAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vT3Blbk1hcmtldFNlbGxlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL09wZW5NYXJrZXRTZWxsZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvaG9qaW5qYW5nL0Rvd25sb2Fkcy9OU1BsYXlncm91bmQtbjgvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDZkMzM5MjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDZkMzM5MjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDZkMzM5MjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL09wZW5NYXJrZXRTZWxsZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ZDMzOTIwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA2ZDMzOTIwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL09wZW5NYXJrZXRTZWxsZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wZW5NYXJrZXRTZWxsZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3Blbk1hcmtldFNlbGxlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3Blbk1hcmtldFNlbGxlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZkMzM5MjAmXCIiXSwic291cmNlUm9vdCI6IiJ9