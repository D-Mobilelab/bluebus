(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Bluebus"] = factory();
	else
		root["Bluebus"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	module.exports = {

	    /*
	    events: {
	        eventName: {
	            triggered: true/false
	            parameters: lastTriggeredParameters,
	            stack: [
	                bindedFunction1, bindedFunction2 ...
	            ]
	        }
	    }
	    */

	    events: {},

	    bind: function(key, callback){
	        var event = this.events[key];
	        if(event){
	            if(event.triggered){
	                callback.call(this, event.parameters);
	            } else {
	                event.stack.push(callback);
	            }
	        } else {
	            this.events[key] = {
	                triggered: false,
	                parameters: undefined,
	                stack: [callback]
	            };
	        }
	    },

	    trigger: function(key, parameters){       
	        var event = this.events[key];
	        if(event){
	            if(!event.triggered){
	                for(var i = 0; i < event.stack.length; i++){
	                    event.stack[i].call(this, parameters);
	                }
	            }
	        }
	        this.events[key] = {
	            triggered: true,
	            parameters: parameters,
	            stack: []
	        };
	    },

	    isTriggered: function(key){
	        var event = this.events[key];
	        if(event){
	            return event.triggered;
	        } else {
	            return false;
	        }
	    },

	    clean: function(key){
	        this.events[key] = {
	            triggered: false,
	            parameters: undefined,
	            stack: []
	        };
	    },

	    cleanAll: function(){
	        this.events = {};
	    }

	};

/***/ }
/******/ ])
});
;

/* Bluebus 1.1.0 */