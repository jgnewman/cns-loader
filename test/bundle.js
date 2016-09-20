/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var CNS_SYSTEM = typeof CNS_SYSTEM !== "undefined" ? CNS_SYSTEM : {};

	    if      (typeof global !== "undefined") { global.CNS_SYSTEM = CNS_SYSTEM }
	    else if (typeof window !== "undefined") { window.CNS_SYSTEM = CNS_SYSTEM }
	    else if (typeof self   !== "undefined") { self.CNS_SYSTEM = CNS_SYSTEM   }
	    else { this.CNS_SYSTEM = CNS_SYSTEM }

	  
	//**END LIBRARY**//
	;

	var __ref0__ = __webpack_require__(1);
	const sayHello = __ref0__.sayHello;
	console.log(sayHello());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var CNS_SYSTEM = typeof CNS_SYSTEM !== "undefined" ? CNS_SYSTEM : {};

	    if      (typeof global !== "undefined") { global.CNS_SYSTEM = CNS_SYSTEM }
	    else if (typeof window !== "undefined") { window.CNS_SYSTEM = CNS_SYSTEM }
	    else if (typeof self   !== "undefined") { self.CNS_SYSTEM = CNS_SYSTEM   }
	    else { this.CNS_SYSTEM = CNS_SYSTEM }

	  
	//**END LIBRARY**//
	CNS_SYSTEM.args = CNS_SYSTEM.args || function (args) {
	    const out = [];
	    Array.prototype.push.apply(out, args);
	    return out;
	  };
	CNS_SYSTEM.exp = CNS_SYSTEM.exp || (function () {var exp = (typeof module === 'undefined' || !module.exports) ? this : module.exports;return function (name, val) {exp[name] = val;};}());
	CNS_SYSTEM.aritize = CNS_SYSTEM.aritize || function (fun, arity) {
	    return function () {
	      if (arguments.length === arity) {
	        return fun.apply(undefined, arguments);
	      } else {
	        throw new Error('Function ' + (fun.name || '') + ' called with wrong arity. Expected ' + arity + ' got ' + arguments.length + '.');
	      }
	    };
	  };

	function sayHello () {
	    const args = CNS_SYSTEM.args(arguments);
	    
	    return 'Hello from Cream & Sugar compiled by Webpack -- John';
	  };
	CNS_SYSTEM.exp("sayHello", CNS_SYSTEM.aritize(sayHello, 0));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);