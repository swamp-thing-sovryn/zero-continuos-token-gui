(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

/***/ "./node_modules/@web3-react/abstract-connector/dist/abstract-connector.esm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@web3-react/abstract-connector/dist/abstract-connector.esm.js ***!
  \************************************************************************************/
/*! exports provided: AbstractConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AbstractConnector\", function() { return AbstractConnector; });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/types */ \"./node_modules/@web3-react/types/dist/types.esm.js\");\n\n\n\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  subClass.__proto__ = superClass;\n}\n\nvar AbstractConnector =\n/*#__PURE__*/\nfunction (_EventEmitter) {\n  _inheritsLoose(AbstractConnector, _EventEmitter);\n\n  function AbstractConnector(_temp) {\n    var _this;\n\n    var _ref = _temp === void 0 ? {} : _temp,\n        supportedChainIds = _ref.supportedChainIds;\n\n    _this = _EventEmitter.call(this) || this;\n    _this.supportedChainIds = supportedChainIds;\n    return _this;\n  }\n\n  var _proto = AbstractConnector.prototype;\n\n  _proto.emitUpdate = function emitUpdate(update) {\n    if (true) {\n      console.log(\"Emitting '\" + _web3_react_types__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEvent\"].Update + \"' with payload\", update);\n    }\n\n    this.emit(_web3_react_types__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEvent\"].Update, update);\n  };\n\n  _proto.emitError = function emitError(error) {\n    if (true) {\n      console.log(\"Emitting '\" + _web3_react_types__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEvent\"].Error + \"' with payload\", error);\n    }\n\n    this.emit(_web3_react_types__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEvent\"].Error, error);\n  };\n\n  _proto.emitDeactivate = function emitDeactivate() {\n    if (true) {\n      console.log(\"Emitting '\" + _web3_react_types__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEvent\"].Deactivate + \"'\");\n    }\n\n    this.emit(_web3_react_types__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEvent\"].Deactivate);\n  };\n\n  return AbstractConnector;\n}(events__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"]);\n\n\n//# sourceMappingURL=abstract-connector.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B3ZWIzLXJlYWN0L2Fic3RyYWN0LWNvbm5lY3Rvci9kaXN0L2Fic3RyYWN0LWNvbm5lY3Rvci5lc20uanM/MzQ0NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ2E7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDLGlDQUFpQyxnRUFBYztBQUMvQzs7QUFFQSxjQUFjLGdFQUFjO0FBQzVCOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QyxpQ0FBaUMsZ0VBQWM7QUFDL0M7O0FBRUEsY0FBYyxnRUFBYztBQUM1Qjs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0MsaUNBQWlDLGdFQUFjO0FBQy9DOztBQUVBLGNBQWMsZ0VBQWM7QUFDNUI7O0FBRUE7QUFDQSxDQUFDLENBQUMsbURBQVk7O0FBRWU7QUFDN0IiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHdlYjMtcmVhY3QvYWJzdHJhY3QtY29ubmVjdG9yL2Rpc3QvYWJzdHJhY3QtY29ubmVjdG9yLmVzbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgeyBDb25uZWN0b3JFdmVudCB9IGZyb20gJ0B3ZWIzLXJlYWN0L3R5cGVzJztcblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG52YXIgQWJzdHJhY3RDb25uZWN0b3IgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9FdmVudEVtaXR0ZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoQWJzdHJhY3RDb25uZWN0b3IsIF9FdmVudEVtaXR0ZXIpO1xuXG4gIGZ1bmN0aW9uIEFic3RyYWN0Q29ubmVjdG9yKF90ZW1wKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgc3VwcG9ydGVkQ2hhaW5JZHMgPSBfcmVmLnN1cHBvcnRlZENoYWluSWRzO1xuXG4gICAgX3RoaXMgPSBfRXZlbnRFbWl0dGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdXBwb3J0ZWRDaGFpbklkcyA9IHN1cHBvcnRlZENoYWluSWRzO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBBYnN0cmFjdENvbm5lY3Rvci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmVtaXRVcGRhdGUgPSBmdW5jdGlvbiBlbWl0VXBkYXRlKHVwZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRW1pdHRpbmcgJ1wiICsgQ29ubmVjdG9yRXZlbnQuVXBkYXRlICsgXCInIHdpdGggcGF5bG9hZFwiLCB1cGRhdGUpO1xuICAgIH1cblxuICAgIHRoaXMuZW1pdChDb25uZWN0b3JFdmVudC5VcGRhdGUsIHVwZGF0ZSk7XG4gIH07XG5cbiAgX3Byb3RvLmVtaXRFcnJvciA9IGZ1bmN0aW9uIGVtaXRFcnJvcihlcnJvcikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRW1pdHRpbmcgJ1wiICsgQ29ubmVjdG9yRXZlbnQuRXJyb3IgKyBcIicgd2l0aCBwYXlsb2FkXCIsIGVycm9yKTtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoQ29ubmVjdG9yRXZlbnQuRXJyb3IsIGVycm9yKTtcbiAgfTtcblxuICBfcHJvdG8uZW1pdERlYWN0aXZhdGUgPSBmdW5jdGlvbiBlbWl0RGVhY3RpdmF0ZSgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVtaXR0aW5nICdcIiArIENvbm5lY3RvckV2ZW50LkRlYWN0aXZhdGUgKyBcIidcIik7XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KENvbm5lY3RvckV2ZW50LkRlYWN0aXZhdGUpO1xuICB9O1xuXG4gIHJldHVybiBBYnN0cmFjdENvbm5lY3Rvcjtcbn0oRXZlbnRFbWl0dGVyKTtcblxuZXhwb3J0IHsgQWJzdHJhY3RDb25uZWN0b3IgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFic3RyYWN0LWNvbm5lY3Rvci5lc20uanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@web3-react/abstract-connector/dist/abstract-connector.esm.js\n");

/***/ }),

/***/ "./node_modules/@web3-react/fortmatic-connector/dist/fortmatic-connector.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@web3-react/fortmatic-connector/dist/fortmatic-connector.esm.js ***!
  \**************************************************************************************/
/*! exports provided: FortmaticConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FortmaticConnector\", function() { return FortmaticConnector; });\n/* harmony import */ var _web3_react_abstract_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/abstract-connector */ \"./node_modules/@web3-react/abstract-connector/dist/abstract-connector.esm.js\");\n/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-invariant */ \"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\");\n\n\n\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  subClass.__proto__ = superClass;\n}\n\nvar chainIdToNetwork = {\n  1: 'mainnet',\n  3: 'ropsten',\n  4: 'rinkeby',\n  42: 'kovan'\n};\nvar FortmaticConnector = /*#__PURE__*/function (_AbstractConnector) {\n  _inheritsLoose(FortmaticConnector, _AbstractConnector);\n\n  function FortmaticConnector(_ref) {\n    var _this;\n\n    var apiKey = _ref.apiKey,\n        chainId = _ref.chainId;\n    !Object.keys(chainIdToNetwork).includes(chainId.toString()) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false, \"Unsupported chainId \" + chainId) : undefined : void 0;\n    _this = _AbstractConnector.call(this, {\n      supportedChainIds: [chainId]\n    }) || this;\n    _this.apiKey = apiKey;\n    _this.chainId = chainId;\n    return _this;\n  }\n\n  var _proto = FortmaticConnector.prototype;\n\n  _proto.activate = function activate() {\n    try {\n      var _temp3 = function _temp3() {\n        return Promise.resolve(_this3.fortmatic.getProvider().enable().then(function (accounts) {\n          return accounts[0];\n        })).then(function (account) {\n          return {\n            provider: _this3.fortmatic.getProvider(),\n            chainId: _this3.chainId,\n            account: account\n          };\n        });\n      };\n\n      var _this3 = this;\n\n      var _temp4 = function () {\n        if (!_this3.fortmatic) {\n          return Promise.resolve(__webpack_require__.e(/*! import() */ 14).then(__webpack_require__.t.bind(null, /*! fortmatic */ \"./node_modules/fortmatic/lib/fortmatic.js\", 7)).then(function (m) {\n            var _m$default;\n\n            return (_m$default = m == null ? void 0 : m[\"default\"]) != null ? _m$default : m;\n          })).then(function (Fortmatic) {\n            _this3.fortmatic = new Fortmatic(_this3.apiKey, _this3.chainId === 1 || _this3.chainId === 4 ? undefined : chainIdToNetwork[_this3.chainId]);\n          });\n        }\n      }();\n\n      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n\n  _proto.getProvider = function getProvider() {\n    try {\n      var _this5 = this;\n\n      return Promise.resolve(_this5.fortmatic.getProvider());\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n\n  _proto.getChainId = function getChainId() {\n    try {\n      var _this7 = this;\n\n      return Promise.resolve(_this7.chainId);\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n\n  _proto.getAccount = function getAccount() {\n    try {\n      var _this9 = this;\n\n      return Promise.resolve(_this9.fortmatic.getProvider().send('eth_accounts').then(function (accounts) {\n        return accounts[0];\n      }));\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n\n  _proto.deactivate = function deactivate() {};\n\n  _proto.close = function close() {\n    try {\n      var _this11 = this;\n\n      return Promise.resolve(_this11.fortmatic.user.logout()).then(function () {\n        _this11.emitDeactivate();\n      });\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n\n  return FortmaticConnector;\n}(_web3_react_abstract_connector__WEBPACK_IMPORTED_MODULE_0__[\"AbstractConnector\"]);\n\n\n//# sourceMappingURL=fortmatic-connector.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B3ZWIzLXJlYWN0L2ZvcnRtYXRpYy1jb25uZWN0b3IvZGlzdC9mb3J0bWF0aWMtY29ubmVjdG9yLmVzbS5qcz9kYWQyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1FO0FBQzVCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0VBQWtFLEtBQXFDLEdBQUcsOERBQVMsNENBQTRDLFNBQWdCO0FBQy9LO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsaUpBQW1CO0FBQ3BEOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsQ0FBQyxnRkFBaUI7O0FBRVc7QUFDOUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHdlYjMtcmVhY3QvZm9ydG1hdGljLWNvbm5lY3Rvci9kaXN0L2ZvcnRtYXRpYy1jb25uZWN0b3IuZXNtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9hYnN0cmFjdC1jb25uZWN0b3InO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxudmFyIGNoYWluSWRUb05ldHdvcmsgPSB7XG4gIDE6ICdtYWlubmV0JyxcbiAgMzogJ3JvcHN0ZW4nLFxuICA0OiAncmlua2VieScsXG4gIDQyOiAna292YW4nXG59O1xudmFyIEZvcnRtYXRpY0Nvbm5lY3RvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Fic3RyYWN0Q29ubmVjdG9yKSB7XG4gIF9pbmhlcml0c0xvb3NlKEZvcnRtYXRpY0Nvbm5lY3RvciwgX0Fic3RyYWN0Q29ubmVjdG9yKTtcblxuICBmdW5jdGlvbiBGb3J0bWF0aWNDb25uZWN0b3IoX3JlZikge1xuICAgIHZhciBfdGhpcztcblxuICAgIHZhciBhcGlLZXkgPSBfcmVmLmFwaUtleSxcbiAgICAgICAgY2hhaW5JZCA9IF9yZWYuY2hhaW5JZDtcbiAgICAhT2JqZWN0LmtleXMoY2hhaW5JZFRvTmV0d29yaykuaW5jbHVkZXMoY2hhaW5JZC50b1N0cmluZygpKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJVbnN1cHBvcnRlZCBjaGFpbklkIFwiICsgY2hhaW5JZCkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIF90aGlzID0gX0Fic3RyYWN0Q29ubmVjdG9yLmNhbGwodGhpcywge1xuICAgICAgc3VwcG9ydGVkQ2hhaW5JZHM6IFtjaGFpbklkXVxuICAgIH0pIHx8IHRoaXM7XG4gICAgX3RoaXMuYXBpS2V5ID0gYXBpS2V5O1xuICAgIF90aGlzLmNoYWluSWQgPSBjaGFpbklkO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBGb3J0bWF0aWNDb25uZWN0b3IucHJvdG90eXBlO1xuXG4gIF9wcm90by5hY3RpdmF0ZSA9IGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgX3RlbXAzID0gZnVuY3Rpb24gX3RlbXAzKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF90aGlzMy5mb3J0bWF0aWMuZ2V0UHJvdmlkZXIoKS5lbmFibGUoKS50aGVuKGZ1bmN0aW9uIChhY2NvdW50cykge1xuICAgICAgICAgIHJldHVybiBhY2NvdW50c1swXTtcbiAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKGFjY291bnQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvdmlkZXI6IF90aGlzMy5mb3J0bWF0aWMuZ2V0UHJvdmlkZXIoKSxcbiAgICAgICAgICAgIGNoYWluSWQ6IF90aGlzMy5jaGFpbklkLFxuICAgICAgICAgICAgYWNjb3VudDogYWNjb3VudFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGVtcDQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMzLmZvcnRtYXRpYykge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaW1wb3J0KCdmb3J0bWF0aWMnKS50aGVuKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICB2YXIgX20kZGVmYXVsdDtcblxuICAgICAgICAgICAgcmV0dXJuIChfbSRkZWZhdWx0ID0gbSA9PSBudWxsID8gdm9pZCAwIDogbVtcImRlZmF1bHRcIl0pICE9IG51bGwgPyBfbSRkZWZhdWx0IDogbTtcbiAgICAgICAgICB9KSkudGhlbihmdW5jdGlvbiAoRm9ydG1hdGljKSB7XG4gICAgICAgICAgICBfdGhpczMuZm9ydG1hdGljID0gbmV3IEZvcnRtYXRpYyhfdGhpczMuYXBpS2V5LCBfdGhpczMuY2hhaW5JZCA9PT0gMSB8fCBfdGhpczMuY2hhaW5JZCA9PT0gNCA/IHVuZGVmaW5lZCA6IGNoYWluSWRUb05ldHdvcmtbX3RoaXMzLmNoYWluSWRdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF90ZW1wNCAmJiBfdGVtcDQudGhlbiA/IF90ZW1wNC50aGVuKF90ZW1wMykgOiBfdGVtcDMoX3RlbXA0KSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0UHJvdmlkZXIgPSBmdW5jdGlvbiBnZXRQcm92aWRlcigpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoX3RoaXM1LmZvcnRtYXRpYy5nZXRQcm92aWRlcigpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRDaGFpbklkID0gZnVuY3Rpb24gZ2V0Q2hhaW5JZCgpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoX3RoaXM3LmNoYWluSWQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldEFjY291bnQgPSBmdW5jdGlvbiBnZXRBY2NvdW50KCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShfdGhpczkuZm9ydG1hdGljLmdldFByb3ZpZGVyKCkuc2VuZCgnZXRoX2FjY291bnRzJykudGhlbihmdW5jdGlvbiAoYWNjb3VudHMpIHtcbiAgICAgICAgcmV0dXJuIGFjY291bnRzWzBdO1xuICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiBkZWFjdGl2YXRlKCkge307XG5cbiAgX3Byb3RvLmNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfdGhpczExID0gdGhpcztcblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShfdGhpczExLmZvcnRtYXRpYy51c2VyLmxvZ291dCgpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMxMS5lbWl0RGVhY3RpdmF0ZSgpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRm9ydG1hdGljQ29ubmVjdG9yO1xufShBYnN0cmFjdENvbm5lY3Rvcik7XG5cbmV4cG9ydCB7IEZvcnRtYXRpY0Nvbm5lY3RvciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ydG1hdGljLWNvbm5lY3Rvci5lc20uanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@web3-react/fortmatic-connector/dist/fortmatic-connector.esm.js\n");

/***/ })

}]);