/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Scope = __webpack_require__(1);
	
	var _Scope2 = _interopRequireDefault(_Scope);
	
	var _Store = __webpack_require__(16);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _scopable = __webpack_require__(19);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 * Copyright (c)  2018 Wise Wild Web .
	 *
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the "Software"), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in all
	 *  copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 *  SOFTWARE.
	 *
	 * @author : Nathanael Braun
	 * @contact : caipilabs@gmail.com
	 */
	
	var $global = typeof window !== 'undefined' ? window : global;
	
	var RS = $global.___rescope || {};
	if ($global.___rescope) {
	    console.warn("ReScope is defined multiple times !! \nCheck you're packaging");
	} else {
	
	    $global.___rescope = RS;
	    _Scope2.default.Store = _Store2.default;
	    RS.Scope = _Scope2.default;
	    RS.Context = _Scope2.default;
	    RS.Store = _Store2.default;
	    RS.reScope = _scopable.reScope;
	    RS.scopeToState = _scopable.scopeToState;
	    RS.reScopeState = _scopable.scopeToState;
	    RS.addScopableType = _scopable.addScopableType;
	    RS.scopeRef = function scopeRef(map, key) {
	        map[key] = new _Scope2.default.scopeRef(map[key]);
	        return map;
	    };
	}
	exports.default = RS;
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	 * Copyright (c)  2018 Wise Wild Web .
	 *
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the "Software"), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in all
	 *  copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 *  SOFTWARE.
	 *
	 * @author : Nathanael Braun
	 * @contact : caipilabs@gmail.com
	 */
	
	var is = __webpack_require__(2),
	    _require = __webpack_require__(4),
	    walknSet = _require.walknSet,
	    walknGet = _require.walknGet,
	    keyWalknSet = _require.keyWalknSet,
	    keyWalknGet = _require.keyWalknGet,
	    EventEmitter = __webpack_require__(5),
	    shortid = __webpack_require__(6),
	    __proto__push = function __proto__push(target, id, parent) {
	    var fn = function fn() {};
	    fn.prototype = parent ? new parent._[id]() : target[id] || {};
	    target[id] = new fn();
	    target._[id] = fn;
	},
	    openScopes = {},
	    SimpleObjectProto = {}.constructor;
	
	/**
	 * Base Scope object
	 */
	
	var Scope = function (_EventEmitter) {
	    _inherits(Scope, _EventEmitter);
	
	    _createClass(Scope, null, [{
	        key: 'getScope',
	        value: function getScope(scopes) {
	            var skey = is.array(scopes) ? scopes.sort(function (a, b) {
	                if (a.firstname < b.firstname) return -1;
	                if (a.firstname > b.firstname) return 1;
	                return 0;
	            }).join('+') : scopes;
	            return openScopes[skey] = openScopes[skey] || new Scope({}, { id: skey });
	        }
	    }, {
	        key: 'stateMapToRefList',
	
	
	        /**
	         * get a parsed reference list from stateMap
	         * @param _ref
	         * @returns {{storeId, path, alias: *, ref: *}}
	         */
	        value: function stateMapToRefList(sm) {
	            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	            var _refs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	
	            var actions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	            var path = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
	
	            Object.keys(sm).forEach(function (key) {
	                var cpath = path ? path + '.' + key : key;
	                sm[key] instanceof Scope.scopeRef ? _refs.push(sm[key].path + ':' + cpath) : sm[key] && sm[key] instanceof Function ? actions[key] = sm[key] : sm[key] && sm[key].prototype instanceof Scope.Store ? _refs.push(sm[key].as(cpath)) : state[cpath] = sm[key];
	                //: this.stateMapToRefList(sm[key], _refs, path + '.' + key)
	            });
	            return _refs;
	        } // if > 0, will wait 'persistenceTm' ms before destroy
	        // when
	        // dispose reach 0
	
	    }]);
	
	    // all active scopes
	
	
	    /**
	     * Init a ReScope scope
	     *
	     * @param storesMap {Object} Object with the initial stores definition / instances
	     * @param config {Object} Scope config
	     * {
	     *  parent {scope} @optional parent scope
	     *
	     *  id {string} @optional id ( if this id exist storesMap will be merge on the 'id'
	     *     scope) key {string} @optional key of the scope ( if no id is set, the scope id
	     *     will be (parent.id+'>'+key) incrementId {bool} @optional true to add a suffix
	     *     id, if the provided key or id globally exist
	     *
	     *  state {Object} @optional initial state by store alias
	     *  data {Object} @optional initial data by store alias
	     *
	     *  rootEmitter {bool} @optional true to not being destabilized by parent
	     *  boundedActions {array | regexp} @optional list or regexp of actions not
	     *     propagated to the parent
	     *
	     *  persistenceTm {number) if > 0, will wait 'persistenceTm' ms before destroy when
	     *     dispose reach 0 autoDestroy  {bool} will trigger retain & dispose after start
	     *  }
	     * @returns {Scope}
	     */
	    function Scope(storesMap) {
	        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	            parent = _ref2.parent,
	            key = _ref2.key,
	            id = _ref2.id,
	            snapshot = _ref2.snapshot,
	            state = _ref2.state,
	            data = _ref2.data,
	            _ref2$incrementId = _ref2.incrementId,
	            incrementId = _ref2$incrementId === undefined ? !!key : _ref2$incrementId,
	            persistenceTm = _ref2.persistenceTm,
	            autoDestroy = _ref2.autoDestroy,
	            rootEmitter = _ref2.rootEmitter,
	            boundedActions = _ref2.boundedActions;
	
	        _classCallCheck(this, Scope);
	
	        var _this = _possibleConstructorReturn(this, (Scope.__proto__ || Object.getPrototypeOf(Scope)).call(this));
	
	        var _ = {},
	            keyIndex;
	
	        id = id || key && (parent && parent._id || '') + '>' + key;
	
	        _.isLocalId = !id;
	
	        //if ( parent && key ) {
	        //    keyIndex = parent._.childScopes.find(ctx=>(ctx._id==id));
	        //    if ( keyIndex == -1 ) keyIndex = parent._.seenChilds;
	        //    keyIndex++;
	        //    if ( keyIndex )
	        //        id = id + '[' + keyIndex + ']';
	        //}
	
	        id = id || "_____" + shortid.generate();
	
	        if (openScopes[id]) {
	            var _ret;
	
	            _this._id = id;
	            //openScopes[ id ].register(storesMap);
	            return _ret = openScopes[id], _possibleConstructorReturn(_this, _ret);
	        } else if (openScopes[id] && incrementId) {
	            var i = -1;
	            while (openScopes[id + '[' + ++i + ']']) {}
	            id = id + '[' + i + ']';
	        }
	
	        _this._id = id;
	        _this._rev = 0;
	        openScopes[id] = _this;
	        _.persistenceTm = persistenceTm || _this.constructor.persistenceTm;
	
	        _this.actions = {};
	        _this.stores = {};
	        _this.state = {};
	        _this.data = {};
	
	        _this.parent = parent;
	        _this._ = _;
	        _this._autoDestroy = autoDestroy;
	
	        if (parent && parent.dead) throw new Error("Can't use a dead scope as parent !");
	
	        __proto__push(_this, 'actions', parent);
	        __proto__push(_this, 'stores', parent);
	        __proto__push(_this, 'state', parent);
	        __proto__push(_this, 'data', parent);
	
	        _this.sources = [];
	        _.childScopes = [];
	        _.childScopesList = [];
	        _.unStableChilds = 0;
	        _.seenChilds = 0;
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 1 };
	
	        //_.snapshot        = snapshot;
	        //_.snapshot        = snapshot;
	        _._boundedActions = is.array(boundedActions) ? { test: boundedActions.includes.bind(boundedActions) } : boundedActions;
	        _._listening = {};
	        _._scope = {};
	        _._mixed = [];
	        _._mixedList = [];
	        _.followers = [];
	        if (parent) {
	            parent.retain("isMyParent");
	            if (!rootEmitter) {
	                !parent._stable && _this.wait("waitingParent");
	                parent.on(_._parentList = {
	                    'stable': function stable(s) {
	                        return _this.release("waitingParent");
	                    },
	                    'unstable': function unstable(s) {
	                        return _this.wait("waitingParent");
	                    },
	                    'update': function update(s) {
	                        return _this._propag();
	                    }
	                });
	            } else {
	                parent.on(_._parentList = {
	                    'update': function update(s) {
	                        return _this._propag();
	                    }
	                });
	            }
	            // this.register(parent.__scope, state, data);
	        }
	
	        _this.register(storesMap, state, data);
	        _this.__locks.all--;
	        _this._stable = !_this.__locks.all;
	
	        if (parent) {
	            parent._addChild(_this);
	        }
	
	        _this.restore(snapshot);
	
	        if (autoDestroy) setTimeout(function (tm) {
	            _this.retain("autoDestroy");
	            _this.dispose("autoDestroy");
	        });
	
	        return _this;
	    }
	
	    /**
	     *
	     * Mount the stores in storesList, in this scope or in its parents or mixed scopes
	     *
	     * @param storesList {string|storeRef} Store name, Array of Store names, or Rescope
	     *     store ref from Store::as or Store:as
	     * @param state
	     * @param data
	     * @returns {Scope}
	     */
	
	
	    _createClass(Scope, [{
	        key: 'mount',
	        value: function mount(storesList, snapshot, state, data) {
	            var _this2 = this;
	
	            if (is.array(storesList)) {
	                storesList.forEach(function (k) {
	                    return _this2._mount(k, snapshot, state, data);
	                });
	            } else {
	                this._mount.apply(this, arguments);
	            }
	            return this;
	        }
	    }, {
	        key: '_mount',
	        value: function _mount(id, snapshot, state, data) {
	            var ref = void 0,
	                snap = void 0;
	
	            ref = this.parseRef(id);
	
	            if (id == "$parent") return;
	            if (!this._._scope[ref.storeId]) {
	                var _parent;
	
	                //ask mixed || parent
	                if (this._._mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, snapshot, state, data);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            } else {
	                var store = this._._scope[ref.storeId],
	                    taskQueue = [];
	                if (is.rsStore(store.prototype)) {
	                    this._._scope[ref.storeId] = new store(this, {
	                        //snapshot,
	                        name: ref.storeId,
	                        state: state,
	                        data: data
	                    }, taskQueue);
	                    while (taskQueue.length) {
	                        taskQueue.shift()();
	                    }
	                } else if (is.rsScope(store.prototype)) {
	                    store = this._._scope[ref.storeId] = new store({ $parent: this }, {
	                        id: this._id + '/' + ref.storeId
	                        //autoDestroy: true
	                        //parent: this
	                    });
	                    //this._._scope[ ref.storeId ].retain("scopedChildScope");
	                    //this._watchStore(ref.storeId);
	                    if (ref.path.length > 1) this._._scope[ref.storeId].mount(ref.path.slice(1).join('.'), snapshot, state, data);
	                    //else return this._._scope[ ref.storeId ];
	                }
	                //if ( snapshot && is.rsScope(store) && ( snap = keyWalknGet(snapshot,
	                // store._id) ) && snap[ '/' ] ) { return store.mount(Object.keys(snap[ '/'
	                // ])) } else if ( snapshot && is.rsStore(store) ) store.restore();
	                if (is.rsStore(store)) {
	                    if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                    if (data !== undefined) store.push(data);
	                }
	                this._watchStore(ref.storeId);
	            }
	
	            return this._._scope[ref.storeId];
	        }
	    }, {
	        key: '_watchStore',
	        value: function _watchStore(id, state, data) {
	            var _this3 = this;
	
	            if (!this._._listening[id] && !is.fn(this._._scope[id])) {
	                //if ( is.rsStore(this._._scope[ id ]) ) {
	                !this._._scope[id]._autoDestroy && this._._scope[id].retain("scoped");
	                !this._._scope[id].isStable() && this.wait(id);
	                this._._scope[id].on(this._._listening[id] = {
	                    'destroy': function destroy(s) {
	                        delete _this3._._listening[id];
	                        _this3._._scope[id] = _this3._._scope[id].constructor;
	                    },
	                    'update': function update(s) {
	                        return _this3.propag();
	                    },
	                    'stable': function stable(s) {
	                        return _this3.release(id);
	                    },
	                    'unstable': function unstable(s) {
	                        return _this3.wait(id);
	                    }
	                });
	            }
	            return true;
	        }
	
	        /**
	         * Mix targetCtx on this scope
	         * Mixed scope parents are NOT mapped
	         * @param targetCtx
	         */
	
	    }, {
	        key: 'mixin',
	        value: function mixin(targetCtx) {
	            var _this4 = this;
	
	            var parent = this.parent,
	                lists = void 0;
	            this._._mixed.push(targetCtx);
	            targetCtx.retain("mixedTo");
	            if (!targetCtx._stable) this.wait(targetCtx._id);
	
	            this._._mixedList.push(lists = {
	                'stable': function stable(s) {
	                    return _this4.release(targetCtx._id);
	                },
	                'unstable': function unstable(s) {
	                    return _this4.wait(targetCtx._id);
	                },
	                'update': function update(s) {
	                    return _this4._propag();
	                }
	            });
	
	            this.actions = {};
	            this.stores = {};
	            this.state = {};
	            this.data = {};
	            targetCtx.on(lists);
	            __proto__push(this, 'actions', parent);
	            __proto__push(this, 'stores', parent);
	            __proto__push(this, 'state', parent);
	            __proto__push(this, 'data', parent);
	
	            this.relink(this._._scope, this, false, true);
	            this._._mixed.forEach(function (ctx) {
	                __proto__push(_this4, 'actions');
	                __proto__push(_this4, 'stores');
	                __proto__push(_this4, 'state');
	                __proto__push(_this4, 'data');
	                ctx.relink(ctx._._scope, _this4, true, true);
	            });
	        }
	
	        /**
	         * Register stores in storesMap & link them in the protos
	         * @param storesMap
	         * @param state
	         * @param data
	         */
	
	    }, {
	        key: 'register',
	        value: function register(storesMap) {
	            var _this5 = this;
	
	            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	            this.relink(storesMap, this, false, false);
	            Object.keys(storesMap).forEach(function (id) {
	                if (id == "$parent") return;
	                if (storesMap[id].singleton || is.fn(storesMap[id]) && (state[id] || data[id])) {
	                    _this5._mount(id, undefined, state[id], data[id]);
	                } else if (state[id] || data[id]) {
	                    if (data[id]) {
	                        if (state[id]) _this5.stores[id].state = state[id];
	                        _this5.stores[id].push(data[id]);
	                    } else if (state[id]) {
	                        _this5.stores[id].setState(state[id]);
	                    }
	                } else {
	                    _this5._watchStore(id);
	                }
	            });
	        }
	
	        /**
	         * Map srcCtx store's on targetCtx headers proto's
	         * @param srcCtx
	         * @param targetCtx
	         * @param state
	         * @param data
	         */
	
	    }, {
	        key: 'relink',
	        value: function relink(srcCtx) {
	            var targetCtx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
	
	            var _this6 = this;
	
	            var external = arguments[2];
	            var force = arguments[3];
	
	            var lctx = targetCtx._.stores.prototype;
	            Object.keys(srcCtx).forEach(function (id) {
	                if (!force && targetCtx._._scope[id] === srcCtx[id] || targetCtx._._scope[id] && targetCtx._._scope[id].constructor === srcCtx[id]) return;
	
	                if (!force && targetCtx._._scope[id]) {
	                    if (!external && !is.fn(targetCtx._._scope[id])) {
	                        console.info("Rescope Store : ", id, " already exist in this scope ! ( try __proto__ hot patch )");
	                        targetCtx._._scope[id].__proto__ = srcCtx[id].prototype;
	                    }
	                    if (!external && is.fn(targetCtx._._scope[id])) targetCtx._._scope[id] = srcCtx[id];
	
	                    return;
	                } else if (!force && !external) _this6._._scope[id] = srcCtx[id];
	
	                Object.defineProperty(lctx, id, {
	                    enumerable: true,
	                    configurable: true,
	                    get: function get() {
	                        return _this6._._scope[id];
	                    }
	                });
	                if (id == "$parent") return;
	                Object.defineProperty(targetCtx._.state.prototype, id, {
	                    enumerable: true,
	                    configurable: true,
	                    get: function get() {
	                        return _this6._._scope[id] && _this6._._scope[id].state;
	                    },
	                    set: function set(v) {
	                        return _this6._mount(id, undefined, v);
	                    }
	                });
	                Object.defineProperty(targetCtx._.data.prototype, id, {
	                    enumerable: true,
	                    configurable: true,
	                    get: function get() {
	                        return _this6._._scope[id] && _this6._._scope[id].data;
	                    },
	                    set: function set(v) {
	                        return _this6._mount(id, undefined, undefined, v);
	                    }
	                });
	
	                var actions = srcCtx[id] instanceof Scope.Store ? srcCtx[id].constructor.actions : srcCtx[id].actions,
	                    activeActions = targetCtx._.actions.prototype;
	                if (is.rsScope(_this6._._scope[id].prototype)) _this6._mount(id);
	                if (is.rsScope(_this6._._scope[id])) {
	                    activeActions[id] = _this6._._scope[id].actions;
	                }
	                if (!is.rsStore(_this6._._scope[id]) && !is.rsStore(_this6._._scope[id].prototype)) return;
	
	                actions && Object.keys(actions).forEach(function (act) {
	                    if (activeActions.hasOwnProperty(act)) activeActions[act].__targetStores++;else {
	                        activeActions[act] = _this6.dispatch.bind(_this6, act);
	                        activeActions[act].__targetStores = 1;
	                    }
	                });
	            });
	        }
	
	        /**
	         * Bind stores from this scope, his parents and mixed scope
	         *
	         * @param obj {React.Component|Store|function}
	         * @param key {string} stores keys to bind updates
	         * @param as
	         * @param setInitial {bool} false to not propag initial value (default : true)
	         */
	
	    }, {
	        key: 'bind',
	        value: function bind(obj, key, as) {
	            var _this7 = this;
	
	            var setInitial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	
	            var lastRevs = void 0,
	                data = void 0,
	                refKeys = void 0;
	            if (key && !is.array(key)) key = [key];
	
	            if (as === false || as === true) {
	                setInitial = as;
	                as = null;
	            }
	
	            refKeys = key.map(function (id) {
	                return is.string(id) ? id : id.name;
	            }).map(function (id) {
	                return _this7.parseRef(id);
	            });
	
	            this._.followers.push([obj, key, as || undefined, lastRevs = refKeys.reduce(function (revs, ref) {
	                revs[ref.storeId] = revs[ref.storeId] || {
	                    rev: 0,
	                    refs: []
	                };
	                revs[ref.storeId].refs.push(ref);
	                return revs;
	            }, {})]);
	
	            this.mount(key);
	            this.retainStores(Object.keys(lastRevs), 'listeners');
	
	            if (setInitial && this._stable) {
	                data = this.getUpdates(lastRevs);
	                if (!data) return;
	                if (typeof obj != "function") {
	                    if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
	                } else {
	                    obj(data);
	                }
	            }
	            return this;
	        }
	
	        /**
	         * Un bind this scope off the given component-keys
	         * @param obj
	         * @param key
	         * @returns {Array.<*>}
	         */
	
	    }, {
	        key: 'unBind',
	        value: function unBind(obj, key, as) {
	            var followers = this._.followers,
	                i = followers && followers.length;
	            while (followers && i--) {
	                if (followers[i][0] === obj && '' + followers[i][1] == '' + key && followers[i][2] == as) {
	                    this.disposeStores(Object.keys(followers[i][3]), 'listeners');
	                    return followers.splice(i, 1);
	                }
	            }
	        }
	
	        /**
	         * Mount the stores in storesList from this scope, its parents and mixed scope
	         * Bind them to 'to'
	         * Hook 'to' so it will auto unbind on 'destroy' or 'componentWillUnmount'
	         * @param to
	         * @param storesList
	         * @param bind
	         * @returns {Object} Initial outputs of the stores in 'storesList'
	         */
	
	    }, {
	        key: 'map',
	        value: function map(to, storesList) {
	            var _this8 = this;
	
	            var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	            var Store = this.constructor.Store;
	            storesList = is.array(storesList) ? storesList : [storesList];
	            var refList = storesList.map(this.parseRef);
	            this.mount(storesList);
	            if (bind && to instanceof Store) {
	                Store.map(to, storesList, this, this, false);
	            } else if (bind) {
	                this.bind(to, storesList, undefined, false);
	
	                var mixedCWUnmount = void 0,
	                    unMountKey = to.isReactComponent ? "componentWillUnmount" : "destroy";
	
	                if (to.hasOwnProperty(unMountKey)) {
	                    mixedCWUnmount = to[unMountKey];
	                }
	
	                to[unMountKey] = function () {
	                    delete to[unMountKey];
	                    if (mixedCWUnmount) to[unMountKey] = mixedCWUnmount;
	
	                    _this8.unBind(to, storesList);
	                    return to[unMountKey] && to[unMountKey].apply(to, arguments);
	                };
	            }
	            return refList.reduce(function (data, ref) {
	                walknSet(data, ref.alias || ref.path, _this8.retrieve(ref.path));
	                return data;
	            }, {});
	        }
	
	        /**
	         * Get current data value from json path
	         * @param path
	         * @returns {string|*}
	         */
	
	    }, {
	        key: 'retrieve',
	        value: function retrieve() {
	            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	
	            path = is.string(path) ? path.split('.') : path;
	            return path && this.stores[path[0]] && this.stores[path[0]].retrieve(path.slice(1));
	        }
	
	        /**
	         * Get current store from json path
	         * @param path
	         * @returns {string|*}
	         */
	
	    }, {
	        key: 'retrieveStore',
	        value: function retrieveStore() {
	            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	
	            path = is.string(path) ? path.split('.') : path;
	            return path && path.length && (path.length != 1 && this.stores[path[0]].retrieveStore ? this.stores[path[0]].retrieveStore(path.slice(1)) : path.length == 1 && this.stores[path[0]]);
	        }
	
	        /**
	         * Get or update storesRevMap's revisions
	         * @param storesRevMap
	         * @param local
	         * @returns {{}}
	         */
	
	    }, {
	        key: 'getStoresRevs',
	        value: function getStoresRevs() {
	            var storesRevMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var local = arguments[1];
	
	            var ctx = this._._scope;
	            if (!storesRevMap) {
	                storesRevMap = {};
	            }
	            Object.keys(ctx).forEach(function (id) {
	                if (id == "$parent") return;
	                if (!is.fn(ctx[id])) {
	                    storesRevMap[id] = ctx[id]._rev;
	                } else if (!storesRevMap.hasOwnProperty(id)) storesRevMap[id] = false;
	            });
	            if (!local) {
	                this._._mixed.reduce(function (updated, ctx) {
	                    return ctx.getStoresRevs(storesRevMap), storesRevMap;
	                }, storesRevMap);
	                this.parent && this.parent.getStoresRevs(storesRevMap);
	            }
	            return storesRevMap;
	        }
	
	        /**
	         * Get or update output basing storesRevMap's revisions.
	         * If a store in 'storesRevMap' was updated; add it to 'output' & update storesRevMap
	         * @param storesRevMap
	         * @param output
	         * @param updated
	         * @returns {*|{}}
	         */
	
	    }, {
	        key: 'getUpdates',
	        value: function getUpdates(storesRevMap, output, updated) {
	            var _this9 = this;
	
	            var ctx = this._._scope;
	
	            output = output || {};
	            Object.keys(ctx).forEach(function (id) {
	                if (id == "$parent") return;
	                if (!output.hasOwnProperty(id) && !is.fn(ctx[id]) && (!storesRevMap || storesRevMap.hasOwnProperty(id) && storesRevMap[id] === undefined || !(!storesRevMap.hasOwnProperty(id) || ctx[id]._rev <= storesRevMap[id].rev))) {
	
	                    updated = true;
	                    output[id] = _this9.data[id];
	
	                    if (storesRevMap && storesRevMap.hasOwnProperty(id)) {
	                        storesRevMap[id].rev = ctx[id]._rev;
	                        storesRevMap[id].refs.forEach(function (ref) {
	                            //console.warn("update ref ", ref.ref,
	                            // this.retrieve(ref.path));
	                            output[ref.alias] = _this9.retrieve(ref.path);
	                        });
	                    } else {
	                        //console.warn("update ", id, this.data[id]);
	                        output[id] = _this9.data[id];
	                    }
	                }
	            });
	            updated = this._._mixed.reduce(function (updated, ctx) {
	                return ctx.getUpdates(storesRevMap, output, updated) || updated;
	            }, updated);
	            updated = this.parent && this.parent.getUpdates(storesRevMap, output, updated) || updated;
	            return updated && output;
	        }
	
	        /**
	         * Recursively get all child scopes
	         * @param childs
	         * @returns {Array}
	         * @private
	         */
	
	    }, {
	        key: '_getAllChilds',
	        value: function _getAllChilds() {
	            var childs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	            childs.push.apply(childs, _toConsumableArray(this._.childScopes));
	            this._.childScopes.forEach(function (ctx) {
	                ctx._getAllChilds(childs);
	            });
	            return childs;
	        }
	
	        /**
	         * Serialize all active stores state & data in every childs & mixed scopes
	         *
	         * Scopes without key or id are ignored
	         * @param output
	         * @returns {{}}
	         */
	
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var ctx = this._._scope,
	                alias = cfg.alias,
	                _cfg$withChilds = cfg.withChilds,
	                withChilds = _cfg$withChilds === undefined ? true : _cfg$withChilds,
	                withParents = cfg.withParents,
	                _cfg$withMixed = cfg.withMixed,
	                withMixed = _cfg$withMixed === undefined ? true : _cfg$withMixed,
	                norefs = cfg.norefs;
	
	
	            if (keyWalknGet(output, this._id)) return output;
	
	            //@todo : better serialize method
	            keyWalknSet(output, this._id, {});
	
	            Object.keys(ctx).forEach(function (id) {
	                if (id == "$parent" || is.fn(ctx[id])) return;
	
	                ctx[id].serialize(cfg, output);
	            });
	
	            withParents && this.parent && this.parent.serialize({
	                withChild: false,
	                withParents: true,
	                withMixed: withMixed,
	                norefs: norefs
	            }, output);
	
	            withChilds && this._.childScopes.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.serialize({
	                    withChild: true,
	                    withParents: false,
	                    withMixed: withMixed,
	                    norefs: norefs
	                }, output);
	            });
	
	            withMixed && this._._mixed.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.serialize({
	                    withChild: false,
	                    withParents: false,
	                    withMixed: withMixed,
	                    norefs: norefs
	                }, output);
	            });
	
	            if (alias) {
	                output = Object.keys(output).reduce(function (h, k) {
	                    return h[k.startsWith(alias) ? alias + k.substr(alias.length) : k] = output[k], h;
	                }, {});
	            }
	            return output;
	        }
	
	        /**
	         * Restore state & data from the serialize fn
	         * @param snapshot
	         * @param force
	         */
	
	    }, {
	        key: 'restore',
	        value: function restore(snapshot) {
	            var _this10 = this;
	
	            var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : is.bool(cfg) && cfg;
	
	            var ctx = this._._scope,
	                snap = void 0;
	            snapshot = snapshot && keyWalknGet(snapshot, this._id) || this.takeSnapshotByKey(this._id);
	
	            if (!snapshot) return;
	
	            this._.snapshot = snapshot;
	
	            snap = snapshot['/'];
	
	            snap && Object.keys(snap).forEach(function (name) {
	                if (name == "$parent") return;
	
	                if (ctx[name]) {
	
	                    if (force && !is.fn(ctx[name])) ctx[name].destroy();
	
	                    _this10._mount(name); // quiet
	                }
	            });
	
	            this._._mixed.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.restore(undefined, force);
	            });
	
	            this._.childScopes.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.restore(undefined, force);
	            });
	        }
	    }, {
	        key: 'getSnapshotByKey',
	        value: function getSnapshotByKey(key, local) {
	            // only have the local snap
	            if (this._.snapshot && key.startsWith(this._id)) {
	                var obj = keyWalknGet(this._.snapshot, key.substr(this._id.length));
	                //if ( obj ) {
	                //    this.deleteSnapshotByKey(key);
	                //}
	                return obj;
	            } else return !local && this.parent && this.parent.getSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.getSnapshotByKey(key);
	        }
	    }, {
	        key: 'getSnapshotByKeyExt',
	        value: function getSnapshotByKeyExt(snapshot, key, local) {
	            // only have the local snap
	            if (snapshot) {
	                var obj = keyWalknGet(snapshot, key);
	                return obj;
	            }
	        }
	    }, {
	        key: 'takeSnapshotByKey',
	        value: function takeSnapshotByKey(key, local) {
	            if (this._.snapshot && key.startsWith(this._id)) {
	                var obj = keyWalknGet(this._.snapshot, key.substr(this._id.length));
	                if (obj) {
	                    //this.deleteSnapshotByKey(key, true);
	                }
	                return obj;
	            } else return !local && this.parent && this.parent.takeSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.takeSnapshotByKey(key);
	        }
	    }, {
	        key: 'deleteSnapshotByKey',
	        value: function deleteSnapshotByKey(key, local) {
	            if (this._.snapshot && key.startsWith(this._id)) {
	                var obj = keyWalknGet(this._.snapshot, key.substr(this._id.length).replace(/^(.*[\>|\/])[^\>|\/]+$/ig, '$1'));
	                if (obj) delete obj[key.replace(/^.*[\>|\/]([^\>|\/]+)$/ig, '$1')];
	            }
	            return !local && this.parent && this.parent.deleteSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.deleteSnapshotByKey(key);
	        }
	    }, {
	        key: 'setState',
	        value: function setState(pState) {
	            var _this11 = this;
	
	            Object.keys(pState).forEach(function (k) {
	                return _this11.state[k] = pState[k];
	            });
	        }
	
	        /**
	         * get a parsed reference
	         * @param _ref
	         * @returns {{storeId, path, alias: *, ref: *}}
	         */
	
	    }, {
	        key: 'parseRef',
	        value: function parseRef(_ref) {
	            if (typeof _ref !== 'string') {
	                this.register(_defineProperty({}, _ref.name, _ref.store));
	                _ref = _ref.name;
	            }
	            var ref = _ref.split(':');
	            ref[0] = ref[0].split('.');
	            return {
	                storeId: ref[0][0],
	                path: ref[0],
	                alias: ref[1] || ref[0][ref[0].length - 1],
	                ref: _ref
	            };
	        }
	
	        /**
	         * Dispatch an action to the top parent & mixed scopes, in all stores
	         *
	         * @param action
	         * @param data
	         * @returns {Scope}
	         */
	
	    }, {
	        key: 'dispatch',
	        value: function dispatch(action) {
	            var _this12 = this,
	                _parent2;
	
	            for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                argz[_key - 1] = arguments[_key];
	            }
	
	            if (this.dead) {
	                console.warn("Dispatch was called on a dead scope, check you're async functions in this stack...", new Error().stack);
	                return;
	            }
	            var bActs = this._._boundedActions;
	            Object.keys(this._._scope).forEach(function (id) {
	                var _$_scope$id;
	
	                if (id == "$parent") return;
	                if (!is.fn(_this12._._scope[id])) (_$_scope$id = _this12._._scope[id]).trigger.apply(_$_scope$id, [action].concat(argz));
	            });
	
	            if (bActs && bActs.test(action)) return;
	
	            this._._mixed.forEach(function (ctx) {
	                return ctx.dispatch.apply(ctx, [action].concat(argz));
	            });
	            this.parent && (_parent2 = this.parent).dispatch.apply(_parent2, [action].concat(argz));
	            return this;
	        }
	
	        //
	
	    }, {
	        key: 'trigger',
	        value: function trigger() {
	            this.dispatch.apply(this, arguments);
	        }
	
	        /**
	         * once('stable', cb)
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'then',
	        value: function then(cb) {
	            var _this13 = this;
	
	            if (this._stable) return cb(this.data);
	            this.once('stable', function (e) {
	                return cb(_this13.data);
	            });
	        }
	
	        /**
	         * Call retain on the scoped stores basing given
	         *
	         * @param stores
	         * @param reason
	         */
	
	    }, {
	        key: 'retainStores',
	        value: function retainStores() {
	            var _this14 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this14.stores[id] && _this14.stores[id].retain && _this14.stores[id].retain(reason);
	            });
	        }
	
	        /**
	         * Call retain on the scoped stores
	         *
	         * @param stores
	         * @param reason
	         */
	
	    }, {
	        key: 'disposeStores',
	        value: function disposeStores() {
	            var _this15 = this;
	
	            var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var reason = arguments[1];
	
	            stores.forEach(function (id) {
	                return _this15.stores[id] && _this15.stores[id].dispose && _this15.stores[id].dispose(reason);
	            });
	        }
	
	        /**
	         * Keep the scope unstable until release is called
	         * @param reason
	         */
	
	    }, {
	        key: 'wait',
	        value: function wait(reason) {
	            //console.log("wait", reason);
	            this._stable && !this.__locks.all && this.emit("unstable", this);
	            this._stable = false;
	            this.__locks.all++;
	            if (reason) {
	                this.__locks[reason] = this.__locks[reason] || 0;
	                this.__locks[reason]++;
	            }
	        }
	
	        /**
	         * Stabilize the scope if no more locks remain (wait fn)
	         * @param reason
	         */
	
	    }, {
	        key: 'release',
	        value: function release(reason) {
	            var _this16 = this;
	
	            if (reason) {
	                if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
	                this.__locks[reason] = this.__locks[reason] || 0;
	                this.__locks[reason]--;
	            }
	            if (!reason && this.__locks.all == 0) console.error("Release more than locking !");
	
	            this.__locks.all--;
	            if (!this.__locks.all) {
	                this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
	
	                this._.stabilizerTM = setTimeout(function (e) {
	                    _this16._.stabilizerTM = null;
	                    if (_this16.__locks.all) return;
	
	                    _this16._.propagTM && clearTimeout(_this16._.propagTM);
	                    _this16._rev++;
	                    _this16._stable = true;
	                    _this16.emit("stable", _this16);
	
	                    !_this16.dead && _this16._propag(); // stability can induce destroy
	                });
	            }
	        }
	
	        /**
	         * Propag stores updates basing theirs last updates
	         */
	
	    }, {
	        key: 'propag',
	        value: function propag() {
	            var _this17 = this;
	
	            this._.propagTM && clearTimeout(this._.propagTM);
	            this._.propagTM = setTimeout(function (e) {
	                _this17._.propagTM = null;
	                _this17._propag();
	            }, 2);
	        }
	    }, {
	        key: '_propag',
	        value: function _propag() {
	            var _this18 = this;
	
	            if (this._.followers.length) this._.followers.forEach(function (_ref3) {
	                var obj = _ref3[0],
	                    key = _ref3[1],
	                    as = _ref3[2],
	                    lastRevs = _ref3[3],
	                    remaps = _ref3[3];
	
	                var data = _this18.getUpdates(lastRevs);
	                if (!data) return;
	                if (typeof obj != "function") {
	                    //console.log("setState ",obj, Object.keys(data))
	                    if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
	                } else {
	                    obj(data, lastRevs && [].concat(_toConsumableArray(lastRevs)) || "no revs");
	                }
	                // lastRevs &&
	                // key.forEach(id => (lastRevs[id] = this.stores[id] &&
	                // this.stores[id]._rev || 0));
	            });
	            this.emit("update", this.getUpdates());
	        }
	
	        /**
	         * is stable
	         * @returns bool
	         */
	
	    }, {
	        key: 'isStable',
	        value: function isStable() {
	            return this._stable;
	        }
	    }, {
	        key: '_addChild',
	        value: function _addChild(ctx) {
	            var _this19 = this;
	
	            this._.childScopes.push(ctx);
	            this._.seenChilds++;
	            var lists = {
	                'stable': function stable(s) {
	                    _this19._.unStableChilds--;
	                    if (!_this19._.unStableChilds) _this19.emit("stableTree", _this19);
	                },
	                'unstable': function unstable(s) {
	                    _this19._.unStableChilds++;
	                    if (1 == _this19._.unStableChilds) _this19.emit("unstableTree", _this19);
	                },
	                'stableTree': function stableTree(s) {
	                    _this19._.unStableChilds--;
	                    if (!_this19._.unStableChilds) _this19.emit("stableTree", _this19);
	                },
	                'unstableTree': function unstableTree(s) {
	                    _this19._.unStableChilds++;
	                    if (1 == _this19._.unStableChilds) _this19.emit("unstableTree", _this19);
	                },
	                'destroy': function destroy(ctx) {
	                    if (ctx._.unStableChilds) _this19._.unStableChilds--;
	                    if (!ctx.isStable()) _this19._.unStableChilds--;
	
	                    if (!_this19._.unStableChilds) _this19.emit("stableTree", _this19);
	                }
	            },
	                wasStable = this._.unStableChilds;
	            //!ctx.isStable() && console.warn('add unstable child');
	            !ctx.isStable() && this._.unStableChilds++;
	            ctx._.unStableChilds && this._.unStableChilds++;
	            this._.childScopesList.push(lists);
	            if (!wasStable && this._.unStableChilds) this.emit("unstableTree", this);
	            ctx.on(lists);
	        }
	    }, {
	        key: '_rmChild',
	        value: function _rmChild(ctx) {
	            var i = this._.childScopes.indexOf(ctx),
	                wasStable = this._.unStableChilds;
	            if (i != -1) {
	                this._.childScopes.splice(i, 1);
	                !ctx.isStable() && this._.unStableChilds--;
	                ctx._.unStableChilds && this._.unStableChilds--;
	                ctx.un(this._.childScopesList.splice(i, 1)[0]);
	                if (wasStable && !this._.unStableChilds) this.emit("stableTree");
	            }
	        }
	    }, {
	        key: 'retain',
	        value: function retain(reason) {
	            this.__retains.all++;
	            //console.log("retain", this._id, reason);
	            if (reason) {
	                this.__retains[reason] = this.__retains[reason] || 0;
	                this.__retains[reason]++;
	            }
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose(reason) {
	            var _this20 = this;
	
	            //console.log("dispose", this._id, reason);
	            if (reason) {
	                if (!this.__retains[reason]) throw new Error("Dispose more than retaining : " + reason);
	                this.__retains[reason]--;
	            }
	
	            if (!this.__retains.all) throw new Error("Dispose more than retaining !");
	
	            this.__retains.all--;
	
	            if (!this.__retains.all) {
	                //console.log("dispose do destroy ", this._id, this._persistenceTm);
	                if (this._.persistenceTm) {
	                    this._.destroyTM && clearTimeout(this._.destroyTM);
	                    this._.destroyTM = setTimeout(function (e) {
	                        //this.then(s => {
	                        !_this20.__retains.all && !_this20.dead && _this20.destroy();
	                        //});
	                    }, this._.persistenceTm);
	                } else {
	                    //this.then(s =>
	                    !this.__retains.all && !this.dead && this.destroy();
	                    //);
	                }
	            }
	        }
	
	        /**
	         * order destroy of local stores
	         */
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var _this21 = this;
	
	            var ctx = this._._scope;
	            //console.warn("destroy", this._id);
	            this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
	            this._.propagTM && clearTimeout(this._.propagTM);
	            Object.keys(this._._listening).forEach(function (id) {
	                return id !== "$parent" && _this21._._scope[id].removeListener(_this21._._listening[id]);
	            });
	            while (this._._mixedList.length) {
	                this._._mixed[0].removeListener(this._._mixedList.shift());
	                this._._mixed.shift().dispose("mixedTo");
	            }
	            [].concat(_toConsumableArray(this._.followers)).map(function (follower) {
	                return _this21.unBind.apply(_this21, _toConsumableArray(follower));
	            });
	            for (var key in ctx) {
	                if (!is.fn(ctx[key])) {
	                    if (key == "$parent") continue;
	                    !ctx[key]._autoDestroy && ctx[key].dispose("scoped");
	                }
	            }if (this._._parentList) {
	                this.parent._rmChild(this);
	                this.parent.removeListener(this._._parentList);
	                this.parent.dispose("isMyParent");
	                this._._parentList = null;
	            }
	            this.dead = true;
	            this.emit("destroy", this);
	
	            //if ( !this._.isLocalId )
	            delete openScopes[this._id];
	
	            //this._ = null;
	        }
	    }]);
	
	    return Scope;
	}(EventEmitter);
	
	Scope.persistenceTm = 1;
	Scope.Store = null;
	
	Scope.scopeRef = function scopeRef(path) {
	    this.path = path;
	};
	
	Scope.scopes = openScopes;
	
	
	is.rsScope = function (obj) {
	    return obj instanceof Scope;
	};
	
	exports.default = Scope;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var is = __webpack_require__(3);
	
	exports.default = _extends({}, is);
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/* globals window, HTMLElement */
	
	'use strict';
	
	/**!
	 * is
	 * the definitive JavaScript type testing library
	 *
	 * @copyright 2013-2014 Enrico Marino / Jordan Harband
	 * @license MIT
	 */
	
	var objProto = Object.prototype;
	var owns = objProto.hasOwnProperty;
	var toStr = objProto.toString;
	var symbolValueOf;
	if (typeof Symbol === 'function') {
	  symbolValueOf = Symbol.prototype.valueOf;
	}
	var isActualNaN = function (value) {
	  return value !== value;
	};
	var NON_HOST_TYPES = {
	  'boolean': 1,
	  number: 1,
	  string: 1,
	  undefined: 1
	};
	
	var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
	var hexRegex = /^[A-Fa-f0-9]+$/;
	
	/**
	 * Expose `is`
	 */
	
	var is = {};
	
	/**
	 * Test general.
	 */
	
	/**
	 * is.type
	 * Test if `value` is a type of `type`.
	 *
	 * @param {Mixed} value value to test
	 * @param {String} type type
	 * @return {Boolean} true if `value` is a type of `type`, false otherwise
	 * @api public
	 */
	
	is.a = is.type = function (value, type) {
	  return typeof value === type;
	};
	
	/**
	 * is.defined
	 * Test if `value` is defined.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is defined, false otherwise
	 * @api public
	 */
	
	is.defined = function (value) {
	  return typeof value !== 'undefined';
	};
	
	/**
	 * is.empty
	 * Test if `value` is empty.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is empty, false otherwise
	 * @api public
	 */
	
	is.empty = function (value) {
	  var type = toStr.call(value);
	  var key;
	
	  if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
	    return value.length === 0;
	  }
	
	  if (type === '[object Object]') {
	    for (key in value) {
	      if (owns.call(value, key)) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  return !value;
	};
	
	/**
	 * is.equal
	 * Test if `value` is equal to `other`.
	 *
	 * @param {Mixed} value value to test
	 * @param {Mixed} other value to compare with
	 * @return {Boolean} true if `value` is equal to `other`, false otherwise
	 */
	
	is.equal = function equal(value, other) {
	  if (value === other) {
	    return true;
	  }
	
	  var type = toStr.call(value);
	  var key;
	
	  if (type !== toStr.call(other)) {
	    return false;
	  }
	
	  if (type === '[object Object]') {
	    for (key in value) {
	      if (!is.equal(value[key], other[key]) || !(key in other)) {
	        return false;
	      }
	    }
	    for (key in other) {
	      if (!is.equal(value[key], other[key]) || !(key in value)) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  if (type === '[object Array]') {
	    key = value.length;
	    if (key !== other.length) {
	      return false;
	    }
	    while (key--) {
	      if (!is.equal(value[key], other[key])) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  if (type === '[object Function]') {
	    return value.prototype === other.prototype;
	  }
	
	  if (type === '[object Date]') {
	    return value.getTime() === other.getTime();
	  }
	
	  return false;
	};
	
	/**
	 * is.hosted
	 * Test if `value` is hosted by `host`.
	 *
	 * @param {Mixed} value to test
	 * @param {Mixed} host host to test with
	 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
	 * @api public
	 */
	
	is.hosted = function (value, host) {
	  var type = typeof host[value];
	  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
	};
	
	/**
	 * is.instance
	 * Test if `value` is an instance of `constructor`.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an instance of `constructor`
	 * @api public
	 */
	
	is.instance = is['instanceof'] = function (value, constructor) {
	  return value instanceof constructor;
	};
	
	/**
	 * is.nil / is.null
	 * Test if `value` is null.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is null, false otherwise
	 * @api public
	 */
	
	is.nil = is['null'] = function (value) {
	  return value === null;
	};
	
	/**
	 * is.undef / is.undefined
	 * Test if `value` is undefined.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is undefined, false otherwise
	 * @api public
	 */
	
	is.undef = is.undefined = function (value) {
	  return typeof value === 'undefined';
	};
	
	/**
	 * Test arguments.
	 */
	
	/**
	 * is.args
	 * Test if `value` is an arguments object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an arguments object, false otherwise
	 * @api public
	 */
	
	is.args = is.arguments = function (value) {
	  var isStandardArguments = toStr.call(value) === '[object Arguments]';
	  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
	  return isStandardArguments || isOldArguments;
	};
	
	/**
	 * Test array.
	 */
	
	/**
	 * is.array
	 * Test if 'value' is an array.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an array, false otherwise
	 * @api public
	 */
	
	is.array = Array.isArray || function (value) {
	  return toStr.call(value) === '[object Array]';
	};
	
	/**
	 * is.arguments.empty
	 * Test if `value` is an empty arguments object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
	 * @api public
	 */
	is.args.empty = function (value) {
	  return is.args(value) && value.length === 0;
	};
	
	/**
	 * is.array.empty
	 * Test if `value` is an empty array.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an empty array, false otherwise
	 * @api public
	 */
	is.array.empty = function (value) {
	  return is.array(value) && value.length === 0;
	};
	
	/**
	 * is.arraylike
	 * Test if `value` is an arraylike object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an arguments object, false otherwise
	 * @api public
	 */
	
	is.arraylike = function (value) {
	  return !!value && !is.bool(value)
	    && owns.call(value, 'length')
	    && isFinite(value.length)
	    && is.number(value.length)
	    && value.length >= 0;
	};
	
	/**
	 * Test boolean.
	 */
	
	/**
	 * is.bool
	 * Test if `value` is a boolean.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a boolean, false otherwise
	 * @api public
	 */
	
	is.bool = is['boolean'] = function (value) {
	  return toStr.call(value) === '[object Boolean]';
	};
	
	/**
	 * is.false
	 * Test if `value` is false.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is false, false otherwise
	 * @api public
	 */
	
	is['false'] = function (value) {
	  return is.bool(value) && Boolean(Number(value)) === false;
	};
	
	/**
	 * is.true
	 * Test if `value` is true.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is true, false otherwise
	 * @api public
	 */
	
	is['true'] = function (value) {
	  return is.bool(value) && Boolean(Number(value)) === true;
	};
	
	/**
	 * Test date.
	 */
	
	/**
	 * is.date
	 * Test if `value` is a date.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a date, false otherwise
	 * @api public
	 */
	
	is.date = function (value) {
	  return toStr.call(value) === '[object Date]';
	};
	
	/**
	 * is.date.valid
	 * Test if `value` is a valid date.
	 *
	 * @param {Mixed} value value to test
	 * @returns {Boolean} true if `value` is a valid date, false otherwise
	 */
	is.date.valid = function (value) {
	  return is.date(value) && !isNaN(Number(value));
	};
	
	/**
	 * Test element.
	 */
	
	/**
	 * is.element
	 * Test if `value` is an html element.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an HTML Element, false otherwise
	 * @api public
	 */
	
	is.element = function (value) {
	  return value !== undefined
	    && typeof HTMLElement !== 'undefined'
	    && value instanceof HTMLElement
	    && value.nodeType === 1;
	};
	
	/**
	 * Test error.
	 */
	
	/**
	 * is.error
	 * Test if `value` is an error object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an error object, false otherwise
	 * @api public
	 */
	
	is.error = function (value) {
	  return toStr.call(value) === '[object Error]';
	};
	
	/**
	 * Test function.
	 */
	
	/**
	 * is.fn / is.function (deprecated)
	 * Test if `value` is a function.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a function, false otherwise
	 * @api public
	 */
	
	is.fn = is['function'] = function (value) {
	  var isAlert = typeof window !== 'undefined' && value === window.alert;
	  if (isAlert) {
	    return true;
	  }
	  var str = toStr.call(value);
	  return str === '[object Function]' || str === '[object GeneratorFunction]' || str === '[object AsyncFunction]';
	};
	
	/**
	 * Test number.
	 */
	
	/**
	 * is.number
	 * Test if `value` is a number.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a number, false otherwise
	 * @api public
	 */
	
	is.number = function (value) {
	  return toStr.call(value) === '[object Number]';
	};
	
	/**
	 * is.infinite
	 * Test if `value` is positive or negative infinity.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
	 * @api public
	 */
	is.infinite = function (value) {
	  return value === Infinity || value === -Infinity;
	};
	
	/**
	 * is.decimal
	 * Test if `value` is a decimal number.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a decimal number, false otherwise
	 * @api public
	 */
	
	is.decimal = function (value) {
	  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
	};
	
	/**
	 * is.divisibleBy
	 * Test if `value` is divisible by `n`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} n dividend
	 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
	 * @api public
	 */
	
	is.divisibleBy = function (value, n) {
	  var isDividendInfinite = is.infinite(value);
	  var isDivisorInfinite = is.infinite(n);
	  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
	  return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
	};
	
	/**
	 * is.integer
	 * Test if `value` is an integer.
	 *
	 * @param value to test
	 * @return {Boolean} true if `value` is an integer, false otherwise
	 * @api public
	 */
	
	is.integer = is['int'] = function (value) {
	  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
	};
	
	/**
	 * is.maximum
	 * Test if `value` is greater than 'others' values.
	 *
	 * @param {Number} value value to test
	 * @param {Array} others values to compare with
	 * @return {Boolean} true if `value` is greater than `others` values
	 * @api public
	 */
	
	is.maximum = function (value, others) {
	  if (isActualNaN(value)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.arraylike(others)) {
	    throw new TypeError('second argument must be array-like');
	  }
	  var len = others.length;
	
	  while (--len >= 0) {
	    if (value < others[len]) {
	      return false;
	    }
	  }
	
	  return true;
	};
	
	/**
	 * is.minimum
	 * Test if `value` is less than `others` values.
	 *
	 * @param {Number} value value to test
	 * @param {Array} others values to compare with
	 * @return {Boolean} true if `value` is less than `others` values
	 * @api public
	 */
	
	is.minimum = function (value, others) {
	  if (isActualNaN(value)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.arraylike(others)) {
	    throw new TypeError('second argument must be array-like');
	  }
	  var len = others.length;
	
	  while (--len >= 0) {
	    if (value > others[len]) {
	      return false;
	    }
	  }
	
	  return true;
	};
	
	/**
	 * is.nan
	 * Test if `value` is not a number.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is not a number, false otherwise
	 * @api public
	 */
	
	is.nan = function (value) {
	  return !is.number(value) || value !== value;
	};
	
	/**
	 * is.even
	 * Test if `value` is an even number.
	 *
	 * @param {Number} value value to test
	 * @return {Boolean} true if `value` is an even number, false otherwise
	 * @api public
	 */
	
	is.even = function (value) {
	  return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
	};
	
	/**
	 * is.odd
	 * Test if `value` is an odd number.
	 *
	 * @param {Number} value value to test
	 * @return {Boolean} true if `value` is an odd number, false otherwise
	 * @api public
	 */
	
	is.odd = function (value) {
	  return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
	};
	
	/**
	 * is.ge
	 * Test if `value` is greater than or equal to `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean}
	 * @api public
	 */
	
	is.ge = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value >= other;
	};
	
	/**
	 * is.gt
	 * Test if `value` is greater than `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean}
	 * @api public
	 */
	
	is.gt = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value > other;
	};
	
	/**
	 * is.le
	 * Test if `value` is less than or equal to `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean} if 'value' is less than or equal to 'other'
	 * @api public
	 */
	
	is.le = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value <= other;
	};
	
	/**
	 * is.lt
	 * Test if `value` is less than `other`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} other value to compare with
	 * @return {Boolean} if `value` is less than `other`
	 * @api public
	 */
	
	is.lt = function (value, other) {
	  if (isActualNaN(value) || isActualNaN(other)) {
	    throw new TypeError('NaN is not a valid value');
	  }
	  return !is.infinite(value) && !is.infinite(other) && value < other;
	};
	
	/**
	 * is.within
	 * Test if `value` is within `start` and `finish`.
	 *
	 * @param {Number} value value to test
	 * @param {Number} start lower bound
	 * @param {Number} finish upper bound
	 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
	 * @api public
	 */
	is.within = function (value, start, finish) {
	  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
	    throw new TypeError('NaN is not a valid value');
	  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
	    throw new TypeError('all arguments must be numbers');
	  }
	  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
	  return isAnyInfinite || (value >= start && value <= finish);
	};
	
	/**
	 * Test object.
	 */
	
	/**
	 * is.object
	 * Test if `value` is an object.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is an object, false otherwise
	 * @api public
	 */
	is.object = function (value) {
	  return toStr.call(value) === '[object Object]';
	};
	
	/**
	 * is.primitive
	 * Test if `value` is a primitive.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a primitive, false otherwise
	 * @api public
	 */
	is.primitive = function isPrimitive(value) {
	  if (!value) {
	    return true;
	  }
	  if (typeof value === 'object' || is.object(value) || is.fn(value) || is.array(value)) {
	    return false;
	  }
	  return true;
	};
	
	/**
	 * is.hash
	 * Test if `value` is a hash - a plain object literal.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a hash, false otherwise
	 * @api public
	 */
	
	is.hash = function (value) {
	  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
	};
	
	/**
	 * Test regexp.
	 */
	
	/**
	 * is.regexp
	 * Test if `value` is a regular expression.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a regexp, false otherwise
	 * @api public
	 */
	
	is.regexp = function (value) {
	  return toStr.call(value) === '[object RegExp]';
	};
	
	/**
	 * Test string.
	 */
	
	/**
	 * is.string
	 * Test if `value` is a string.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is a string, false otherwise
	 * @api public
	 */
	
	is.string = function (value) {
	  return toStr.call(value) === '[object String]';
	};
	
	/**
	 * Test base64 string.
	 */
	
	/**
	 * is.base64
	 * Test if `value` is a valid base64 encoded string.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
	 * @api public
	 */
	
	is.base64 = function (value) {
	  return is.string(value) && (!value.length || base64Regex.test(value));
	};
	
	/**
	 * Test base64 string.
	 */
	
	/**
	 * is.hex
	 * Test if `value` is a valid hex encoded string.
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
	 * @api public
	 */
	
	is.hex = function (value) {
	  return is.string(value) && (!value.length || hexRegex.test(value));
	};
	
	/**
	 * is.symbol
	 * Test if `value` is an ES6 Symbol
	 *
	 * @param {Mixed} value value to test
	 * @return {Boolean} true if `value` is a Symbol, false otherise
	 * @api public
	 */
	
	is.symbol = function (value) {
	  return typeof Symbol === 'function' && toStr.call(value) === '[object Symbol]' && typeof symbolValueOf.call(value) === 'symbol';
	};
	
	module.exports = is;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.walknSet = walknSet;
	exports.walknGet = walknGet;
	exports.keyWalknSet = keyWalknSet;
	exports.keyWalknGet = keyWalknGet;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var is = __webpack_require__(2);
	
	function walknSet(obj, path, value, stack) {
	    if (is.string(path)) path = path.split('.');
	    if (!path.length) return false;else if (path.length == 1) return obj[path[0]] = stack ? [].concat(_toConsumableArray(obj[path[0]] || []), [value]) : value;else return walknSet(obj[path[0]] = obj[path[0]] || {}, path.slice(1), value, stack);
	}
	
	function walknGet(obj, path, isKey) {
	    if (is.string(path)) path = path.split('.');
	    return path.length ? obj[path[0]] && walknGet(obj[path[0]], path.slice(1)) : obj;
	}
	
	//@todo
	function keyWalknSet(obj, path, value, stack) {
	    if (is.string(path)) path = path.split(/(\>|\/)/ig).filter(function (v) {
	        return v !== '>' && v;
	    });
	    return walknSet(obj, path, value);
	}
	
	function keyWalknGet(obj, path, isKey) {
	    if (is.string(path)) path = path.split(/(\>|\/)/ig).filter(function (v) {
	        return v !== '>' && v;
	    });
	    return path.length ? obj[path[0]] && walknGet(obj[path[0]], path.slice(1)) : obj;
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	 * Copyright (c)  2018 Wise Wild Web .
	 *
	 *  MIT License
	 *  
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the "Software"), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *  
	 *  The above copyright notice and this permission notice shall be included in all
	 *  copies or substantial portions of the Software.
	 *  
	 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 *  SOFTWARE.
	 *  
	 * @author : Nathanael Braun
	 * @contact : caipilabs@gmail.com
	 */
	var is = __webpack_require__(3);
	
	var Emitter = function () {
	    function Emitter() {
	        _classCallCheck(this, Emitter);
	
	        this._events = {};
	    }
	
	    _createClass(Emitter, [{
	        key: 'on',
	        value: function on(evt, cb) {
	            var _this = this;
	
	            if (!is.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
	                return _this.on(k, evt[k]);
	            });
	
	            this._events[evt] = this._events[evt] || [];
	            this._events[evt].push(cb);
	        }
	    }, {
	        key: 'un',
	        value: function un(evt, cb) {
	            var _this2 = this;
	
	            if (!is.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
	                return _this2.un(k, evt[k]);
	            });
	
	            if (!this._events[evt]) return;
	            var i = this._events[evt].indexOf(cb);
	            this._events[evt].splice(i, 1);
	        }
	    }, {
	        key: 'emit',
	        value: function emit(evt) {
	            if (!this._events[evt]) return;
	            var lists = [].concat(_toConsumableArray(this._events[evt]));
	
	            for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                argz[_key - 1] = arguments[_key];
	            }
	
	            for (var i = 0; i < lists.length; i++) {
	                lists[i].apply(lists, argz);
	            }
	        }
	    }, {
	        key: 'addListener',
	        value: function addListener() {
	            this.on.apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener() {
	            this.un.apply(this, arguments);
	        }
	    }, {
	        key: 'removeAllListeners',
	        value: function removeAllListeners() {
	            this._events = {};
	        }
	    }, {
	        key: 'once',
	        value: function once(evt, cb) {
	            var _this3 = this;
	
	            var _fn = void 0;
	            this.on(evt, _fn = function fn() {
	                _this3.un(evt, _fn);
	                cb.apply(undefined, arguments);
	            });
	        }
	    }]);
	
	    return Emitter;
	}();
	
	exports.default = Emitter;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(8);
	var encode = __webpack_require__(10);
	var decode = __webpack_require__(12);
	var build = __webpack_require__(13);
	var isValid = __webpack_require__(14);
	
	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(15) || 0;
	
	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}
	
	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}
	
	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }
	
	    return alphabet.shuffled();
	}
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {
	  return build(clusterWorkerId);
	}
	
	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.decode = decode;
	module.exports.isValid = isValid;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomFromSeed = __webpack_require__(9);
	
	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;
	
	var shuffled;
	
	function reset() {
	    shuffled = false;
	}
	
	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }
	
	    if (_alphabet_ === alphabet) {
	        return;
	    }
	
	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }
	
	    var unique = _alphabet_.split('').filter(function(item, ind, arr){
	       return ind !== arr.lastIndexOf(item);
	    });
	
	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }
	
	    alphabet = _alphabet_;
	    reset();
	}
	
	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}
	
	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}
	
	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }
	
	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;
	
	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}
	
	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}
	
	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}
	
	module.exports = {
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
	
	var seed = 1;
	
	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed/(233280.0);
	}
	
	function setSeed(_seed_) {
	    seed = _seed_;
	}
	
	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomByte = __webpack_require__(11);
	
	function encode(lookup, number) {
	    var loopCounter = 0;
	    var done;
	
	    var str = '';
	
	    while (!done) {
	        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
	        done = number < (Math.pow(16, loopCounter + 1 ) );
	        loopCounter++;
	    }
	    return str;
	}
	
	module.exports = encode;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto
	
	function randomByte() {
	    if (!crypto || !crypto.getRandomValues) {
	        return Math.floor(Math.random() * 256) & 0x30;
	    }
	    var dest = new Uint8Array(1);
	    crypto.getRandomValues(dest);
	    return dest[0] & 0x30;
	}
	
	module.exports = randomByte;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(8);
	
	/**
	 * Decode the id to get the version and worker
	 * Mainly for debugging and testing.
	 * @param id - the shortid-generated id.
	 */
	function decode(id) {
	    var characters = alphabet.shuffled();
	    return {
	        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
	        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
	    };
	}
	
	module.exports = decode;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var encode = __webpack_require__(10);
	var alphabet = __webpack_require__(8);
	
	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1459707606518;
	
	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 6;
	
	// Counter is used when shortid is called multiple times in one second.
	var counter;
	
	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function build(clusterWorkerId) {
	
	    var str = '';
	
	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);
	
	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }
	
	    str = str + encode(alphabet.lookup, version);
	    str = str + encode(alphabet.lookup, clusterWorkerId);
	    if (counter > 0) {
	        str = str + encode(alphabet.lookup, counter);
	    }
	    str = str + encode(alphabet.lookup, seconds);
	
	    return str;
	}
	
	module.exports = build;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(8);
	
	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6 ) {
	        return false;
	    }
	
	    var characters = alphabet.characters();
	    var len = id.length;
	    for(var i = 0; i < len;i++) {
	        if (characters.indexOf(id[i]) === -1) {
	            return false;
	        }
	    }
	    return true;
	}
	
	module.exports = isShortId;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = 0;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	 * Copyright (c)  2018 Wise Wild Web .
	 *
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the "Software"), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in all
	 *  copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 *  SOFTWARE.
	 *
	 * @author : Nathanael Braun
	 * @contact : caipilabs@gmail.com
	 */
	
	var is = __webpack_require__(2),
	    Scope = __webpack_require__(1),
	    _require = __webpack_require__(4),
	    keyWalknSet = _require.keyWalknSet,
	    keyWalknGet = _require.keyWalknGet,
	    EventEmitter = __webpack_require__(5),
	    TaskSequencer = __webpack_require__(17),
	    shortid = __webpack_require__(6),
	    objProto = Object.getPrototypeOf({});
	
	var Store = function (_EventEmitter) {
	    _inherits(Store, _EventEmitter);
	
	    /**
	     * Constructor, will build a rescope store
	     *
	     * (scope, {require,use,apply,state, data})
	     * (scope)
	     *
	     * @param scope {object} scope where to find the other stores (default : static
	     *     staticScope )
	     * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key",
	     *     otherStore.as("otherKey")]
	     */
	    // overridable list of store that will allow push if updated
	    function Store() {
	        var _this$_require, _this$_require2;
	
	        _classCallCheck(this, Store);
	
	        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));
	
	        var argz = [].concat(Array.prototype.slice.call(arguments)),
	            _static = _this.constructor,
	            scope = argz[0] instanceof Scope ? argz.shift() : _static.scope ? Scope.getScope(_static.scope) : is.string(argz[0]) ? Scope.getScope(argz.shift()) : _static.staticScope,
	            cfg = argz[0] && !is.array(argz[0]) && !is.string(argz[0]) ? argz.shift() : {},
	            taskQueue = is.array(argz[0]) ? argz.shift() : null,
	            name = cfg.name || _static.name,
	            watchs = cfg.use || [],
	            apply = cfg.apply || null,
	            initialState = _static.state || _static.initialState || _static.defaultState,
	            applied;
	
	        _this._uid = cfg._uid || shortid.generate();
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 0 };
	        _this._onStabilize = [];
	
	        // autoDestroyTm
	        _this._autoDestroy = !!_this._persistenceTm;
	        _this._persistenceTm = cfg.persistenceTm || _static.persistenceTm || (cfg.autoDestroy || _static.autoDestroy) && 5;
	        _this._cfg = cfg;
	        if (cfg && cfg.on) {
	            _this.on(cfg.on);
	        }
	
	        _this.name = name;
	
	        if (scope.stores) {
	            _this.scopeObj = scope;
	            _this.scope = scope.stores;
	        } else {
	            _this.scopeObj = new Scope(scope);
	            _this.scope = scope.stores;
	        }
	
	        // standardized scope access
	        _this.$scope = _this.scopeObj;
	        _this.$stores = _this.scopeObj.stores;
	        _this.$actions = _this.scopeObj.actions;
	        _this.$dispatch = _this.scopeObj.dispatch.bind(_this.scopeObj);
	
	        _this._rev = _this.constructor._rev || 0;
	        _this._revs = {};
	        _this.stores = {};
	        _this._require = [];
	        _this._sources = [name];
	
	        if (is.array(_static.use)) {
	            _this._use = [].concat(_toConsumableArray(watchs), _toConsumableArray((_static.use || []).map(function (key) {
	                var ref = key.match(/^(\!?)([^\:]*)(?:\:(.*))?$/);
	                if (ref[1]) {
	                    var ref2 = ref[2].split('.');
	                    _this._require.push(ref[3] || ref2[ref2.length - 1]);
	                }
	                return ref[2];
	            })));
	        } else {
	            _this._use = [].concat(_toConsumableArray(watchs), _toConsumableArray(_static.use ? Object.keys(_static.use).map(function (key) {
	                var ref = key.match(/^(\!?)(.*)$/);
	                ref[1] && _this._require.push(_static.use[key]);
	                return ref[2] + (_static.use[key] === true ? '' : ':' + _static.use[key]);
	            }) : []));
	        }
	
	        if (_static.require) (_this$_require = _this._require).push.apply(_this$_require, _toConsumableArray(_static.require));
	        if (cfg.require) (_this$_require2 = _this._require).push.apply(_this$_require2, _toConsumableArray(cfg.require));
	
	        _this._followers = [];
	        _this._changesSW = initialState || {};
	        _this.state = initialState && {};
	        if (apply) _this.apply = apply;
	
	        /**
	         * Initial state isn't fully initialized ( childs constructors can set it )
	         * Scope based instance have taskQueue to delay init synchronously, if not
	         * present we use setTimeout
	         */
	        if (taskQueue) {
	            taskQueue.push(_this._afterConstructor.bind(_this));
	        } else setTimeout(_this._afterConstructor.bind(_this));
	        return _this;
	    }
	
	    /**
	     * Get the incoming state ( for immediate state relative actions )
	     * @returns {{}|*}
	     */
	    // default state
	    /**
	     * if retain goes to 0 :
	     * false to not destroy,
	     * 0 to sync auto destroy
	     * Ms to autodestroy after tm ms if no retain has been called
	     * @type {boolean|Int}
	     */
	
	    //static use                  = [];// overridable list of source stores
	
	
	    _createClass(Store, [{
	        key: '_afterConstructor',
	        value: function _afterConstructor() {
	            var cfg = this._cfg,
	                _static = this.constructor,
	                snapshot = this.restore(undefined, true),
	                initialState = this.state,
	                initialData = this.data,
	                applied = void 0;
	            {
	
	                if (initialData) this.data = initialData;else if (_static.data !== undefined) this.data = _extends({}, _static.data);else if (cfg.hasOwnProperty("data")) this.data = cfg.data;
	
	                if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = _extends({}, initialState, cfg.state);
	
	                if (this.data === undefined) {
	                    if (initialState || this._use.length) {
	                        // sync apply
	                        this._changesSW = _extends({}, this._changesSW, initialState || {}, this.$scope.map(this, this._use));
	                        this.state = {};
	                        if (this.shouldApply(this._changesSW) && this.data === undefined) {
	                            this.data = this.apply(this.data, this._changesSW, this._changesSW);
	                            applied = true;
	                            this.state = this._changesSW;
	                            this._changesSW = {};
	                        }
	                    }
	                } else {
	                    applied = true;
	                    this.state = _extends({}, this._changesSW, initialState || {}, this.$scope.map(this, this._use));
	                    this._changesSW = {};
	                }
	            }
	            if ((this.data !== undefined || applied) && !this.__locks.all) {
	                this._stable = true;
	                this._rev++;
	            } else {
	                this._stable = false;
	                if (!_static.managed && !this.state && (!this._use || !this._use.length)) {
	                    console.warn("ReScope store '", this.name, "' have no initial data, state or use. It can't stabilize...");
	                }
	            }
	            !this._stable && this.emit('unstable', this.state);
	        }
	
	        /**
	         * Overridable method to know if a data change should be propag to the listening
	         * stores & components
	         */
	
	    }, {
	        key: 'shouldPropag',
	        value: function shouldPropag(nDatas) {
	
	            return true;
	        }
	    }, {
	        key: 'hasDataChange',
	        value: function hasDataChange(nDatas) {
	            var _static = this.constructor,
	                r,
	                cDatas = this.data;
	            r = !cDatas && nDatas || cDatas !== nDatas;
	            !r && cDatas && Object.keys(cDatas).forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });
	            !r && nDatas && Object.keys(nDatas).forEach(function (key) {
	                r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
	            });
	            return r;
	        }
	
	        /**
	         * Overridable method to know if a state change should be applied
	         */
	
	    }, {
	        key: 'shouldApply',
	        value: function shouldApply() {
	            var _this2 = this;
	
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            var _static = this.constructor;
	
	            return !!this.isComplete(state) && (is.array(_static.follow) ? _static.follow.reduce(function (r, i) {
	                return r || state && state[i];
	            }, false) : _static.follow ? Object.keys(_static.follow).reduce(function (r, i) {
	                return r || state && is.fn(_static.follow[i]) && _static.follow[i].call(_this2, state[i]) || _static.follow[i] && state[i] !== _this2.state[i];
	            }, false) : true);
	        }
	
	        /**
	         * Overridable applier / remapper
	         * If state or lastPublicState are simple hash maps apply will return {...data,
	         * ...state} if not it will return the last private state
	         * @param data
	         * @param state
	         * @returns {*}
	         */
	
	    }, {
	        key: 'apply',
	        value: function apply(data, state, changes) {
	            state = state || this.state;
	
	            if (this.refine) return this.refine.apply(this, arguments);
	
	            if (!data || data.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, data, state);
	        }
	
	        /**
	         * @depreciated
	         * @param data
	         * @param state
	         * @param changes
	         * @returns {*}
	         */
	
	    }, {
	        key: 'refine',
	        value: function refine(data, state, changes) {
	            state = state || this.state;
	
	            if (!data || data.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, data, state);
	        }
	
	        /**
	         * Debounce this store propagation ( & reducing )
	         * @param cb
	         */
	
	    }, {
	        key: 'stabilize',
	        value: function stabilize(cb) {
	            cb && this.once('stable', cb);
	            this._stable && this.emit('unstable', this.state, this.data);
	
	            this._stable = false;
	
	            if (this._stabilizer) return;
	
	            this._stabilizer = TaskSequencer.pushTask(this, 'pushState');
	        }
	    }, {
	        key: 'retrieve',
	        value: function retrieve(path) {
	            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.data;
	
	            path = is.string(path) ? path.split('.') : path;
	            return !obj || !path || !path.length ? obj : path.length == i + 1 ? obj[path[i]] : this.retrieve(path, i + 1, obj[path[i]]);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(action) {
	            var _scopeObj;
	
	            for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
	                argz[_key2 - 1] = arguments[_key2];
	            }
	
	            (_scopeObj = this.scopeObj).dispatch.apply(_scopeObj, [action].concat(argz));
	        }
	    }, {
	        key: 'trigger',
	        value: function trigger(action) {
	            var actions = this.constructor.actions;
	
	            if (actions && actions[action]) {
	                var _actions$action;
	
	                for (var _len2 = arguments.length, argz = Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
	                    argz[_key3 - 1] = arguments[_key3];
	                }
	
	                var ns = (_actions$action = actions[action]).call.apply(_actions$action, [this].concat(argz));
	                ns && this.setState(ns);
	            }
	        }
	
	        /**
	         * Pull stores in the private state
	         * @param stores  {Array} (passed to Store::map) Ex : ["session",
	         *     "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }, {
	        key: 'pull',
	        value: function pull(stores, doWait, origin) {
	            var _this3 = this;
	
	            var initialOutputs = this.scopeObj.map(this, stores);
	            if (doWait) {
	                this.wait();
	                stores.forEach(function (s) {
	                    return _this3.scope[s] && _this3.wait(_this3.scope[s]);
	                });
	                this.release();
	            }
	            return initialOutputs;
	        }
	
	        /**
	         * Set & Push the result data to followers if stable
	         * @param cb
	         */
	
	    }, {
	        key: 'push',
	        value: function push(data, force, cb) {
	            cb = force === true ? cb : force;
	            force = force === true;
	            if (!force && !this.hasDataChange(data)) {
	                cb && cb();
	                if (!this.__locks.all) {
	                    var stable = this._stable;
	                    this._stable = true;
	                    !stable && this.emit('stable', this.state, this.data);
	                    this._stabilizer = null;
	                }
	                return false;
	            }
	
	            this.data = data;
	            this.wait();
	            this.release(cb);
	        }
	
	        /**
	         * Call the apply fn using the current accumulated state update then, push the
	         * resulting data if stable
	         * @param force
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'pushState',
	        value: function pushState(force) {
	
	            if (!force && !this._changesSW && this.data) return;
	
	            var nextState = this._nextState || _extends({}, this.state, this._changesSW || {}),
	                nextData = this.apply(this.data, nextState, this._changesSW);
	
	            this._stabilizer = null;
	            this.state = nextState;
	            this._changesSW = null;
	
	            if (!force && !this.hasDataChange(nextData)) {
	                if (!this.__locks.all) {
	                    var stable = this._stable;
	                    this._stable = true;
	                    !stable && this.emit('stable', this.state, this.data);
	                    this._stabilizer = null;
	                }
	                return false;
	            }
	
	            this.data = nextData;
	            this.wait();
	            this.release();
	        }
	
	        /**
	         * Add 'pState' to the current accumulated state updates
	         * & wait source stores stabilization before pushing these state updates
	         * @param pState
	         * @param cb
	         */
	
	    }, {
	        key: 'setState',
	        value: function setState(pState, cb, sync) {
	            var i = 0,
	                change,
	                changes = this._changesSW = this._changesSW || {};
	            for (var k in pState) {
	                if (!this.state || changes.hasOwnProperty(k) // todo
	                && pState[k] !== changes[k] || pState.hasOwnProperty(k) && (pState[k] !== this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
	                )) {
	                    change = true;
	                    this._revs[k] = pState[k] && pState[k]._rev || true;
	                    changes[k] = pState[k];
	                }
	            }this._nextState = _extends({}, this.state, changes);
	            if (!this.shouldApply(this._nextState)) {
	                return;
	            }
	
	            if (sync) {
	                this.pushState();
	                cb && cb();
	            } else {
	                if (change) {
	                    this.stabilize(cb);
	                } else cb && cb();
	            }
	            return this;
	        }
	
	        /**
	         * Update the current state & push it
	         * @param pState
	         * @param cb
	         */
	
	    }, {
	        key: 'setStateSync',
	        value: function setStateSync(pState) {
	            var i = 0,
	                change,
	                changes = this._changesSW = this._changesSW || {};
	            for (var k in pState) {
	                if (!this.state || pState.hasOwnProperty(k) && (pState[k] != this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
	                )) {
	                    change = true;
	                    this._revs[k] = pState[k] && pState[k]._rev || true;
	                    changes[k] = pState[k];
	                }
	            }this.shouldApply(_extends({}, this.state || {}, changes)) && this.pushState();
	            return this.data;
	        }
	
	        /**
	         * get a store-key pair for Store::map
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	
	    }, {
	        key: 'as',
	        value: function as(name) {
	            return { store: this, name: name };
	        }
	    }, {
	        key: 'on',
	        value: function on(lists) {
	            var _this4 = this;
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', _this4).call(_this4, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', this).apply(this, arguments);
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(lists) {
	            var _this5 = this;
	
	            if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
	                return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', _this5).call(_this5, k, lists[k]);
	            });else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', this).apply(this, arguments);
	        }
	
	        /**
	         * is complete (all requiered keys are here)
	         * @returns bool
	         */
	
	    }, {
	        key: 'isComplete',
	        value: function isComplete() {
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            var _static = this.constructor;
	            return !this._require || !this._require.length || state && this._require.reduce(function (r, key) {
	                return r && state[key];
	            }, true);
	        }
	
	        /**
	         * is stable
	         * @returns bool
	         */
	
	    }, {
	        key: 'isStable',
	        value: function isStable() {
	            return this._stable;
	        }
	
	        /**
	         * Serialize state & data with sources refs
	         * @returns bool
	         */
	
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var _this6 = this;
	
	            var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	            var refs = !cfg.norefs && is.array(this._use) && this._use.reduce(function (map, key) {
	                //todo
	                var name = void 0,
	                    alias = void 0,
	                    path = void 0,
	                    store = void 0;
	                if (key.store && key.name) {
	                    alias = name = key.name;
	                    store = _this6.scopeObj.stores[name];
	                } else if (is.fn(key)) {
	                    name = alias = key.name || key.defaultName;
	                    store = _this6.scopeObj.stores[name];
	                } else {
	                    key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	                    name = key[1];
	                    path = key[2] && key[2].substr(1);
	                    alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
	                    store = _this6.scopeObj.retrieveStore(path);
	                }
	                if (store && !store.scopeObj._.isLocalId) map[alias] = store.scopeObj._id + '/' + name;
	
	                return map;
	            }, {}) || {};
	
	            keyWalknSet(output, this.scopeObj._id + '/' + this.name, {
	                state: this.state && (cfg.norefs ? _extends({}, this.state) : Object.keys(this.state).reduce(function (h, k) {
	                    return !refs[k] && (h[k] = _this6.state[k]), h;
	                }, {})),
	                data: (this.data && this.data.__proto__ === objProto ? this.data : (is.bool(this.data) || is.number(this.data) || is.string(this.data)) && this.data) || undefined,
	
	                refs: refs
	            });
	            return output;
	        }
	
	        /**
	         * restore state & data
	         * @returns bool
	         */
	
	    }, {
	        key: 'restore',
	        value: function (_restore) {
	            function restore(_x, _x2) {
	                return _restore.apply(this, arguments);
	            }
	
	            restore.toString = function () {
	                return _restore.toString();
	            };
	
	            return restore;
	        }(function (snapshot, immediate) {
	            var _this7 = this;
	
	            snapshot = snapshot && keyWalknGet(snapshot, this.scopeObj._id + '/' + this.name) || this.$scope.takeSnapshotByKey(this.scopeObj._id + '/' + this.name);
	
	            if (!snapshot) return;
	
	            if (snapshot) {
	                if (!this.isStable() && !immediate) this.then(function () {
	                    return restore(snapshot);
	                });
	                var snap = void 0;
	                this.state = _extends({}, snapshot.state);
	                Object.keys(snapshot.refs).forEach(function (key) {
	                    //todo
	                    if (snap = _this7.$scope.getSnapshotByKey(snapshot.refs[key])) _this7.state[key] = snap.data;else console.warn('not found : ', key, snap.refs[key]);
	                });
	
	                this.data = snapshot.data;
	            }
	        })
	
	        /**
	         * Un bind this store off the given component-key
	         * @param obj
	         * @param key
	         * @returns {Array.<*>}
	         */
	
	    }, {
	        key: 'unBind',
	        value: function unBind(obj, key, path) {
	            var followers = this._followers,
	                i = followers && followers.length;
	            while (followers && i--) {
	                if (followers[i][0] === obj && followers[i][1] === key && followers[i][2] === path) return followers.splice(i, 1);
	            }
	        }
	
	        /**
	         * Bind this store changes to the given component-key
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'bind',
	        value: function bind(obj, key) {
	            var setInitial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	            var path = arguments[3];
	
	            this._followers.push([obj, key, path]);
	            if (setInitial && this.data && this._stable) {
	                var data = path ? this.retrieve(path) : this.data;
	                if (typeof obj != "function") {
	                    if (key) obj.setState(_defineProperty({}, key, data));else obj.setState(data);
	                } else {
	                    obj(data);
	                }
	            }
	        }
	
	        /**
	         * once('stable', cb)
	         * @param obj {React.Component|Store|function)
	         * @param key {string} optional key where to map the public state
	         */
	
	    }, {
	        key: 'then',
	        value: function then(cb) {
	            var _this8 = this;
	
	            if (this._stable) return cb(this.data);
	            this.once('stable', function (e) {
	                return cb(_this8.data);
	            });
	        }
	
	        /**
	         * Add a lock so the store will not propag it data untill release() is call
	         * @param previous {Store|number|Array} @optional wf to wait, releases to wait or
	         *     array of stuff to wait
	         * @returns {this}
	         */
	
	    }, {
	        key: 'wait',
	        value: function wait(previous) {
	            if (typeof previous == "number") return this.__locks.all += previous;
	            if (is.array(previous)) return previous.map(this.wait.bind(this));
	
	            this._stable && this.emit('unstable', this.state, this.data);
	            this._stable = false;
	            this.__locks.all++;
	
	            var reason = is.string(previous) ? previous : null;
	            if (reason) {
	                this.__locks[reason] = this.__locks[reason] || 0;
	                this.__locks[reason]++;
	            }
	            if (previous && is.fn(previous.then)) {
	                previous.then(this.release.bind(this, null));
	            }
	            return this;
	        }
	
	        /**
	         * Decrease locks for this store, if it reach 0 ,
	         * it will be propagated to the followers,
	         * then, all stuff passed to "then" call back will be exec / released
	         * @param desync
	         * @returns {*}
	         */
	
	    }, {
	        key: 'release',
	        value: function release(reason, cb) {
	            var _static = this.constructor,
	                me = this;
	            var i = 0,
	                wasStable = this._stable;
	
	            if (is.fn(reason)) {
	                cb = reason;
	                reason = null;
	            }
	
	            if (reason) {
	                if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
	                this.__locks[reason] = this.__locks[reason] || 0;
	                this.__locks[reason]--;
	            }
	
	            if (!reason && this.__locks.all == 0) console.error("Release more than locking !");
	
	            if (! --this.__locks.all && this.isComplete()) {
	                var propag = this.shouldPropag(this.data);
	                this._stable = true;
	                propag && this._rev++; //
	                if (propag && this._followers.length) this._followers.forEach(function propag(follower) {
	                    var data = follower[2] ? me.retrieve(follower[2]) : me.data;
	                    //if ( !data ) return;
	
	                    if (typeof follower[0] == "function") {
	                        follower[0](data);
	                    } else {
	                        //cb && i++;
	                        follower[0].setState(follower[1] ? _defineProperty({}, follower[1], data) : data
	                        //,
	                        //cb && (
	                        //    () => (!(--i) && cb())
	                        //)
	                        );
	                    }
	                });
	                //else
	                !wasStable && this.emit('stable', this.data);
	                propag && this.emit('update', this.data);
	                cb && cb();
	            } else cb && this.then(cb);
	            return this;
	        }
	    }, {
	        key: 'propag',
	        value: function propag(data) {
	            this.emit('update', data);
	        }
	    }, {
	        key: 'retain',
	        value: function retain(reason) {
	            this.__retains.all++;
	            if (reason) {
	                this.__retains[reason] = this.__retains[reason] || 0;
	                this.__retains[reason]++;
	            }
	        }
	    }, {
	        key: 'dispose',
	        value: function dispose(reason) {
	            var _this9 = this;
	
	            //console.warn("dispose", reason, this.__retains);
	            if (reason) {
	                if (!this.__retains[reason]) throw new Error("Dispose more than retaining : " + reason);
	
	                this.__retains[reason]--;
	            }
	            if (this.__retains.all == 0) throw new Error("Dispose more than retaining !");
	
	            this.__retains.all--;
	
	            if (!this.__retains.all) {
	                if (this._persistenceTm) {
	                    this._destroyTM && clearTimeout(this._destroyTM);
	                    this._destroyTM = setTimeout(function (e) {
	                        _this9._destroyTM = null;
	                        //this.then(s => {
	                        !_this9.__retains.all && !_this9.dead && _this9.destroy();
	                        //});
	                    }, this._persistenceTm);
	                } else {
	                    //this.then(s =>
	                    !this.__retains.all && !this.dead && this.destroy();
	                    //);
	                }
	            }
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            //  console.log("destroy", this._uid);
	
	            this.emit('destroy', this);
	            if (this._stabilizer) clearTimeout(this._stabilizer);
	
	            if (this._followers.length) this._followers.forEach(function (follower) {
	                if (typeof follower[0] !== "function") {
	                    if (follower[0].stores) delete follower[0].stores[follower[1]];
	                }
	            });
	            this._followers.length = 0;
	            this.constructor._rev = this.rev;
	            this.dead = true;
	            this._revs = this.data = this.state = this.scope = null;
	            this.removeAllListeners();
	        }
	    }, {
	        key: 'nextState',
	
	
	        /**
	         * Get the incoming state ( for immediate state relative actions )
	         * @returns {{}|*}
	         */
	        get: function get() {
	            return this._changesSW && _extends({}, this.state, this._changesSW) || this.state;
	        }
	    }, {
	        key: 'contextObj',
	
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	        get: function get() {
	            return this.scopeObj;
	        }
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	
	    }, {
	        key: 'context',
	        get: function get() {
	            return this.scope;
	        }
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	
	    }, {
	        key: 'datas',
	        get: function get() {
	            return this.data;
	        }
	
	        /**
	         * @deprecated
	         * @returns {*}
	         */
	        ,
	        set: function set(v) {
	            //console.groupCollapsed("Rescope store : Setting datas is depreciated, use
	            // data"); console.log("Rescope store : Setting datas is depreciated, use data",
	            // (new Error()).stack); console.groupEnd();
	
	            this.data = v;
	        }
	    }]);
	
	    return Store;
	}(EventEmitter);
	
	/**
	 * get a static aliased reference of a store
	 * @param {string} name
	 * @returns {{store: Store, name: *}}
	 */
	
	
	Store.staticScope = new Scope({}, { id: "static" });
	Store.state = undefined;
	Store.persistenceTm = false;
	Store.as = function (name) {
	    return { store: this, name: name };
	};
	
	/**
	 * Map all named stores in {keys} to the {object}'s state
	 * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
	 * @static
	 * @param object {Object} target state aware object (React.Component|Store|...)
	 * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key",
	 *     store.as('anotherKey')]
	 */
	Store.map = function (component, keys, scope, origin) {
	    var setInitial = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	
	    var targetRevs = component._revs || {};
	    var targetScope = component.stores || (component.stores = {});
	    var initialOutputs = {};
	    keys = is.array(keys) ? [].concat(_toConsumableArray(keys)) : [keys];
	
	    scope = scope || Store.staticScope;
	
	    keys = keys.filter(
	    // @todo : use query refs
	    // (store)(\.store)*(\[(\*|(props)\w+)+)\])?(\:alias)
	    function (key) {
	        var _component$_sources;
	
	        if (!key) {
	            console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
	            return false;
	        }
	        var name = void 0,
	            alias = void 0,
	            path = void 0,
	            store = void 0,
	            _key = void 0;
	        if (key.store && key.name) {
	            alias = name = key.name;
	            store = key.store;
	        } else if (is.fn(key)) {
	            name = alias = key.name || key.defaultName;
	            store = key;
	        } else {
	            _key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	            name = _key[1];
	            path = _key[2] && _key[2].substr(1);
	            store = scope.stores[_key[1]];
	            alias = _key[3] || path && path.match(/([^\.]*)$/)[0] || _key[1];
	        }
	
	        if (is.rsScope(store.prototype)) scope._mount(name);
	        if (is.rsScope(store)) {
	            store = scope._mount(key);
	        } else if (targetRevs[name]) return false; // ignore dbl uses for now
	
	        if (!store) {
	            console.error("Not a mappable store item '" + name + "/" + alias + "' in " + (component.name || component) + ' !!', store);
	            return false;
	        } else if (is.fn(store)) {
	            scope._mount(name);
	            scope.stores[name].bind(component, alias, setInitial, path);
	        } else {
	            store.bind(component, alias, setInitial, path);
	        }
	
	        // give initial store weight basing sources
	        scope.stores[name]._sources && (_component$_sources = component._sources).push.apply(_component$_sources, _toConsumableArray(scope.stores[name]._sources));
	
	        targetRevs[alias] = targetRevs[alias] || true;
	        !targetScope[name] && (targetScope[name] = scope.stores[name]);
	        if (scope.stores[name].hasOwnProperty('data')) initialOutputs[name] = scope.data[name];
	        return true;
	    });
	
	    // ... @todo
	    var mixedCWUnmount,
	        unMountKey = component.isReactComponent ? "componentWillUnmount" : "destroy";
	
	    if (component.hasOwnProperty(unMountKey)) {
	        mixedCWUnmount = component[unMountKey];
	    }
	
	    component[unMountKey] = function () {
	        delete component[unMountKey];
	        if (mixedCWUnmount) component[unMountKey] = mixedCWUnmount;
	
	        keys.map(function (key) {
	            var name = void 0,
	                alias = void 0,
	                path = void 0,
	                store = void 0;
	            if (key.store && key.name) {
	                alias = name = key.name;
	                store = key.store;
	            } else if (is.fn(key)) {
	                name = alias = key.name || key.defaultName;
	                store = scope.stores[name];
	            } else {
	                key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	                name = key[1];
	                path = key[2] && key[2].substr(1);
	                store = scope.stores[key[1]];
	                alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
	            }
	
	            store && !is.fn(store) && store.unBind(component, alias, path);
	        });
	        return component[unMountKey] && component[unMountKey].apply(component, arguments);
	    };
	
	    return initialOutputs;
	};
	
	is.rsStore = function (obj) {
	    return obj instanceof Store;
	};
	
	exports.default = Store;
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _is = __webpack_require__(3);
	
	var _is2 = _interopRequireDefault(_is);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Minimal push sequencer, apply stores specific task in the right order (root stores
	 * first)
	 */
	var taskQueue = [],
	    curWeight = 0,
	    maxWeight = 0,
	    minWeight = 0,
	    taskCount = 0,
	    deSync = false,
	    deSyncMaxTasks = 10,
	    task = void 0,
	    isRunning = void 0,
	    errorCatcher = {
	    lastError: null,
	    dispatch: function dispatch(error) {
	        errorCatcher.disable();
	        if (task && task[0].handleError) {
	            task[0].handleError(error, task);
	        } else if (task) console.error("ReScope : A task has failed !!", task[1], " on ", task[0].name || task[0].constructor.name);
	
	        isRunning = false;
	        task = null;
	        runNow();
	    },
	    enable: typeof window !== 'undefined' ? function () {
	        window.addEventListener('error', errorCatcher.dispatch);
	    } : function () {
	        process.on('uncaughtException', errorCatcher.dispatch);
	    },
	    disable: typeof window !== 'undefined' ? function () {
	        window.removeEventListener('error', errorCatcher.dispatch);
	    } : function () {
	        process.removeListener('uncaughtException', errorCatcher.dispatch);
	    }
	}; /*
	    * Copyright (c)  2018 Wise Wild Web .
	    *
	    *  MIT License
	    *
	    *  Permission is hereby granted, free of charge, to any person obtaining a copy
	    *  of this software and associated documentation files (the "Software"), to deal
	    *  in the Software without restriction, including without limitation the rights
	    *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	    *  copies of the Software, and to permit persons to whom the Software is
	    *  furnished to do so, subject to the following conditions:
	    *
	    *  The above copyright notice and this permission notice shall be included in all
	    *  copies or substantial portions of the Software.
	    *
	    *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	    *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	    *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	    *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	    *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	    *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	    *  SOFTWARE.
	    *
	    * @author : Nathanael Braun
	    * @contact : caipilabs@gmail.com
	    */
	
	//import index from "./index";// will use as external the index in dist
	
	
	function runNow() {
	    if (!isRunning) {
	        run();
	    }
	}
	
	function run() {
	    var from = Date.now();
	    isRunning = true;
	    errorCatcher.enable();
	    while (taskCount) {
	
	        // try for the current weight
	        while (!(taskQueue[curWeight] && taskQueue[curWeight].length)) {
	            curWeight++;
	        }taskCount--;
	        task = taskQueue[curWeight].shift();
	        //console.log("Task : ", task[1], " on ", task[0].name);
	        task[0][task[1]].apply(task[0], task[2]);
	    }
	    task = undefined;
	    errorCatcher.disable();
	
	    isRunning = false;
	    if (taskCount) {
	        setTimeout(runNow);
	    }
	}
	
	//
	//index.setTaskDeSync = ( nb ) => {
	//    if ( nb === false )
	//        return deSync = false;
	//    else if ( nb === true ) {
	//        deSync         = true;
	//        deSyncMaxTasks = 10;
	//    }
	//    else (is.int(nb))
	//    {
	//        deSync         = true;
	//        deSyncMaxTasks = nb;
	//    }
	//};
	
	exports.default = {
	    pushTask: function pushTask(obj, fn, argz) {
	        /**
	         * The more a store have sources, the more it should be processed first
	         * So leafs stores stay sync, root stores get merged state updates and global
	         * state stay coherent
	         * @type {*|number}
	         */
	        var weight = obj._sources && obj._sources.length || 1,
	            stack = taskQueue[weight] = taskQueue[weight] || [];
	
	        maxWeight = Math.max(maxWeight, weight);
	        curWeight = Math.min(curWeight, weight);
	        taskCount++;
	
	        //console.log("Push Task : ", fn, " on ", obj.name, weight);
	        stack.push([obj, fn, argz]);
	        setTimeout(runNow, 0);
	        return stack.length;
	    }
	};
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.scopeToState = exports.reScope = exports.addScopableType = undefined;
	
	var _is = __webpack_require__(3);
	
	var _is2 = _interopRequireDefault(_is);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*
	                                                                                                                                                                                                     * Copyright (c)  2018 Wise Wild Web .
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     *  MIT License
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     *  Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                     *  of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                     *  in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                     *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                     *  copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                     *  furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     *  The above copyright notice and this permission notice shall be included in all
	                                                                                                                                                                                                     *  copies or substantial portions of the Software.
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                     *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                     *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                     *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                     *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                     *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	                                                                                                                                                                                                     *  SOFTWARE.
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * @author : Nathanael Braun
	                                                                                                                                                                                                     * @contact : caipilabs@gmail.com
	                                                                                                                                                                                                     */
	
	var SimpleObjectProto = {}.constructor;
	
	var scopables = [];
	
	function addScopableType(test, handle) {
	    var member = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    var stateScope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
	    scopables.push({
	        test: test,
	        member: member,
	        stateScope: stateScope,
	        handle: handle
	    });
	}
	
	//
	function isScopableType(Comp, member, stateScope) {
	
	    for (var i = 0; i < scopables.length; i++) {
	        if ((member === undefined || member == scopables[i].member) && stateScope == scopables[i].stateScope && scopables[i].test(Comp)) return true;
	    }return false;
	}
	
	function applyScopableType(Comp, argz, member, stateScope) {
	
	    for (var i = 0; i < scopables.length; i++) {
	        var _scopables$i;
	
	        if (member == scopables[i].member && stateScope == scopables[i].stateScope && scopables[i].test(Comp)) return (_scopables$i = scopables[i]).handle.apply(_scopables$i, [Comp].concat(_toConsumableArray(argz)));
	    }console.warn("reScope : Unknown type", Comp);
	
	    return false;
	}
	
	function reScope() {
	    for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
	        argz[_key] = arguments[_key];
	    }
	
	    // are we decorating a member / without argz
	    if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
	        argz[2].value = applyScopableType(argz[0], [], true, false);
	        return argz[0];
	    } else if (!isScopableType(argz[0], undefined, false)) {
	        return function () {
	            for (var _len2 = arguments.length, argz2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                argz2[_key2] = arguments[_key2];
	            }
	
	            // are we decorating a member / with argz
	            if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
	                argz2[2].value = applyScopableType(argz2[0], argz, true, false);
	                return argz2[0];
	            } else return reScope.apply(undefined, [argz2[0]].concat(argz));
	        };
	    }
	    return applyScopableType(argz[0], argz.slice(1), false, false);
	}
	
	function scopeToState() {
	    for (var _len3 = arguments.length, argz = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        argz[_key3] = arguments[_key3];
	    }
	
	    // are we decorating a member / without argz
	    if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
	        argz[2].value = applyScopableType(argz[0], [], true, true);
	        return argz[0];
	    } else if (!isScopableType(argz[0], undefined, true)) {
	        return function () {
	            for (var _len4 = arguments.length, argz2 = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	                argz2[_key4] = arguments[_key4];
	            }
	
	            // are we decorating a member / with argz
	            if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
	                argz2[2].value = applyScopableType(argz2[0], argz, true, true);
	                return argz2[0];
	            } else return scopeToState.apply(undefined, [argz2[0]].concat(argz));
	        };
	    }
	    return applyScopableType(argz[0], argz.slice(1), false, true);
	}
	
	//
	//addScopableType(
	//    ( Comp ) => (Comp && Comp.prototype instanceof Store),
	//    function reScope( ...argz ) {
	//        let BaseStore    = (!argz[0] || argz[0].prototype instanceof Store) &&
	// argz.shift(), scope        = (!argz[0] || argz[0] instanceof Scope || is.fn(argz[0]))
	// && argz.shift(), use          = (is.array(argz[0])) && argz.shift(), stateMap     =
	// !use && (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift(),
	// initialState = {};  let compName = BaseStore.displayName || BaseStore.name;  use =
	// [...(BaseStore.use || []), ...(use || [])]; stateMap &&
	// Scope.stateMapToRefList(stateMap, initialState, use);  class StateScopedStore extends
	// BaseStore { static use         = use; static displayName = "stateScoped(" + compName +
	// ")";  constructor( ...argz ) { super(scope, argz.slice(argz[0] instanceof Scope ? 1 :
	// 0)) } }  return StateScopedStore; }, false, true )
	
	
	exports.addScopableType = addScopableType;
	exports.reScope = reScope;
	exports.scopeToState = scopeToState;

/***/ })
/******/ ]);
//# sourceMappingURL=ReScope.browser.js.map