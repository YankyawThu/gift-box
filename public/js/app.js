/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@inertiajs/inertia-vue/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@inertiajs/inertia-vue/dist/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

    function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js")),r=e(__webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js")),n=e(__webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js")),i=__webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(){var e=[].slice.call(arguments),s="string"==typeof e[0]?e[0]:null,a=("string"==typeof e[0]?e[1]:e[0])||{},u=s?i.Inertia.restore(s):null,c=n(a),l=null,p=null,f=function(e){return e},d=t.observable(o({},u?u.data:a,{isDirty:!1,errors:u?u.errors:{},hasErrors:!1,processing:!1,progress:null,wasSuccessful:!1,recentlySuccessful:!1,data:function(){var e=this;return Object.keys(a).reduce(function(t,r){return t[r]=e[r],t},{})},transform:function(e){return f=e,this},defaults:function(e,t){var r;return c=void 0===e?this.data():Object.assign({},n(c),t?((r={})[e]=t,r):e),this},reset:function(){var e=[].slice.call(arguments),t=n(c);return Object.assign(this,0===e.length?t:Object.keys(t).filter(function(t){return e.includes(t)}).reduce(function(e,r){return e[r]=t[r],e},{})),this},setError:function(e,t){var r;return Object.assign(this.errors,t?((r={})[e]=t,r):e),this.hasErrors=Object.keys(this.errors).length>0,this},clearErrors:function(){var e=this,t=[].slice.call(arguments);return this.errors=Object.keys(this.errors).reduce(function(r,n){var i;return o({},r,t.length>0&&!t.includes(n)?((i={})[n]=e.errors[n],i):{})},{}),this.hasErrors=Object.keys(this.errors).length>0,this},submit:function(e,t,r){var s=this,a=this;void 0===r&&(r={});var u=f(this.data()),d=o({},r,{onCancelToken:function(e){if(l=e,r.onCancelToken)return r.onCancelToken(e)},onBefore:function(e){if(a.wasSuccessful=!1,a.recentlySuccessful=!1,clearTimeout(p),r.onBefore)return r.onBefore(e)},onStart:function(e){if(a.processing=!0,r.onStart)return r.onStart(e)},onProgress:function(e){if(a.progress=e,r.onProgress)return r.onProgress(e)},onSuccess:function(e){try{var t=function(e){return c=n(s.data()),s.isDirty=!1,e};return s.processing=!1,s.progress=null,s.clearErrors(),s.wasSuccessful=!0,s.recentlySuccessful=!0,p=setTimeout(function(){return s.recentlySuccessful=!1},2e3),Promise.resolve(r.onSuccess?Promise.resolve(r.onSuccess(e)).then(t):t(null))}catch(e){return Promise.reject(e)}},onError:function(e){if(a.processing=!1,a.progress=null,a.clearErrors().setError(e),r.onError)return r.onError(e)},onCancel:function(){if(a.processing=!1,a.progress=null,r.onCancel)return r.onCancel()},onFinish:function(){if(a.processing=!1,a.progress=null,l=null,r.onFinish)return r.onFinish()}});"delete"===e?i.Inertia.delete(t,o({},d,{data:u})):i.Inertia[e](t,u,d)},get:function(e,t){this.submit("get",e,t)},post:function(e,t){this.submit("post",e,t)},put:function(e,t){this.submit("put",e,t)},patch:function(e,t){this.submit("patch",e,t)},delete:function(e,t){this.submit("delete",e,t)},cancel:function(){l&&l.cancel()},__rememberable:null===s,__remember:function(){return{data:this.data(),errors:this.errors}},__restore:function(e){Object.assign(this,e.data),this.setError(e.errors)}}));return new t({created:function(){this.$watch(function(){return d},function(e){d.isDirty=!r(d.data(),c),s&&i.Inertia.remember(e.__remember(),s)},{immediate:!0,deep:!0})}}),d}var a={created:function(){var e=this;if(this.$options.remember&&!this.$isServer){Array.isArray(this.$options.remember)&&(this.$options.remember={data:this.$options.remember}),"string"==typeof this.$options.remember&&(this.$options.remember={data:[this.$options.remember]}),"string"==typeof this.$options.remember.data&&(this.$options.remember={data:[this.$options.remember.data]});var t=this.$options.remember.key instanceof Function?this.$options.remember.key.call(this):this.$options.remember.key,r=i.Inertia.restore(t),n=this.$options.remember.data.filter(function(t){return!(null!==e[t]&&"object"==typeof e[t]&&!1===e[t].__rememberable)}),s=function(t){return null!==e[t]&&"object"==typeof e[t]&&"function"==typeof e[t].__remember&&"function"==typeof e[t].__restore};n.forEach(function(a){void 0!==e[a]&&void 0!==r&&void 0!==r[a]&&(s(a)?e[a].__restore(r[a]):e[a]=r[a]),e.$watch(a,function(){i.Inertia.remember(n.reduce(function(t,r){var n;return o({},t,((n={})[r]=s(r)?e[r].__remember():e[r],n))},{}),t)},{immediate:!0,deep:!0})})}}},u={},c=null,l={name:"Inertia",props:{initialPage:{type:Object,required:!0},initialComponent:{type:[Object,Function,String],required:!1},resolveComponent:{type:Function,required:!1},titleCallback:{type:Function,required:!1,default:function(e){return e}},onHeadUpdate:{type:Function,required:!1,default:function(){return function(){}}}},data:function(){return{component:this.initialComponent||null,page:this.initialPage,key:null}},created:function(){var e=this;u=this,c=i.createHeadManager(this.$isServer,this.titleCallback,this.onHeadUpdate),this.$isServer||i.Inertia.init({initialPage:this.initialPage,resolveComponent:this.resolveComponent,swapComponent:function(t){var r=t.component,n=t.page,i=t.preserveState;try{return e.component=r,e.page=n,e.key=i?e.key:Date.now(),Promise.resolve()}catch(e){return Promise.reject(e)}}})},render:function(e){var t=this;if(this.component){var r=e(this.component,{key:this.key,props:this.page.props,scopedSlots:this.$scopedSlots});return this.component.layout?"function"==typeof this.component.layout?this.component.layout(e,r):Array.isArray(this.component.layout)?this.component.layout.concat(r).reverse().reduce(function(r,n){return e(n,{props:t.page.props},[r])}):e(this.component.layout,{props:this.page.props},[r]):r}}},p={install:function(e){i.Inertia.form=s,e.mixin(a),e.mixin({beforeCreate:function(){Object.defineProperty(this,"$headManager",{get:function(){return c}}),Object.defineProperty(this,"$inertia",{get:function(){return i.Inertia}}),Object.defineProperty(this,"$page",{get:function(){return u.page}})}})}},f={props:{title:{type:String,required:!1}},data:function(){return{provider:this.$headManager.createProvider()}},beforeDestroy:function(){this.provider.disconnect()},methods:{isUnaryTag:function(e){return["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].indexOf(e.tag)>-1},renderTagStart:function(e){this.ensureNodeHasAttrs(e);var t=Object.keys(e.data.attrs).reduce(function(t,r){var n=e.data.attrs[r];return"head-key"===r?t:""===n?t+" "+r:t+" "+r+'="'+n+'"'},"");return"<"+e.tag+t+">"},renderTagChildren:function(e){var t=this;return e.children.reduce(function(e,r){return e+t.renderTag(r)},"")},renderTag:function(e){if(!e.tag)return e.text;var t=this.renderTagStart(e);return e.children&&(t+=this.renderTagChildren(e)),this.isUnaryTag(e)||(t+="</"+e.tag+">"),t},ensureNodeHasAttrs:function(e){e.data=o({},e.data||{},{attrs:o({},(e.data||{}).attrs||{})})},ensureNodeHasInertiaAttribute:function(e){return this.ensureNodeHasAttrs(e),e.data.attrs.inertia=void 0!==e.data.attrs["head-key"]?e.data.attrs["head-key"]:"",e},renderNode:function(e){return this.ensureNodeHasInertiaAttribute(e),this.renderTag(e)},renderNodes:function(e){var t=this,r=e.map(function(e){return t.renderNode(e)}).filter(function(e){return e});return this.title&&!r.find(function(e){return e.startsWith("<title")})&&r.push("<title inertia>"+this.title+"</title>"),r}},render:function(){this.provider.update(this.renderNodes(this.$scopedSlots.default?this.$scopedSlots.default():[]))}},d={functional:!0,props:{as:{type:String,default:"a"},data:{type:Object,default:function(){return{}}},href:{type:String},method:{type:String,default:"get"},replace:{type:Boolean,default:!1},preserveScroll:{type:Boolean,default:!1},preserveState:{type:Boolean,default:null},only:{type:Array,default:function(){return[]}},headers:{type:Object,default:function(){return{}}},queryStringArrayFormat:{type:String,default:"brackets"}},render:function(e,t){var r=t.props,n=t.data,s=t.children;n.on=o({click:function(){return{}},cancelToken:function(){return{}},start:function(){return{}},progress:function(){return{}},finish:function(){return{}},cancel:function(){return{}},success:function(){return{}},error:function(){return{}}},n.on||{});var a=r.as.toLowerCase(),u=r.method.toLowerCase(),c=i.mergeDataIntoQueryString(u,r.href||"",r.data,r.queryStringArrayFormat),l=c[0],p=c[1];return"a"===a&&"get"!==u&&console.warn('Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.\n\nPlease specify a more appropriate element using the "as" attribute. For example:\n\n<Link href="'+l+'" method="'+u+'" as="button">...</Link>'),e(r.as,o({},n,{attrs:o({},n.attrs,"a"===a?{href:l}:{}),on:o({},n.on,{click:function(e){var t;n.on.click(e),i.shouldIntercept(e)&&(e.preventDefault(),i.Inertia.visit(l,{data:p,method:u,replace:r.replace,preserveScroll:r.preserveScroll,preserveState:null!=(t=r.preserveState)?t:"get"!==u,only:r.only,headers:r.headers,onCancelToken:n.on.cancelToken,onBefore:n.on.before,onStart:n.on.start,onProgress:n.on.progress,onFinish:n.on.finish,onCancel:n.on.cancel,onSuccess:n.on.success,onError:n.on.error}))}})}),s)}};exports.App=l,exports.Head=f,exports.InertiaApp=l,exports.InertiaHead=f,exports.InertiaLink=d,exports.Link=d,exports.app=l,exports.createInertiaApp=function(e){try{var t,r,n,i,o,s,a;r=void 0===(t=e.id)?"app":t,n=e.resolve,i=e.setup,o=e.title,s=e.page,a=e.render;var u="undefined"==typeof window,c=u?null:document.getElementById(r),f=s||JSON.parse(c.dataset.page),d=function(e){return Promise.resolve(n(e)).then(function(e){return e.default||e})},h=[];return Promise.resolve(d(f.component).then(function(e){return i({el:c,app:l,App:l,props:{attrs:{id:r,"data-page":JSON.stringify(f)},props:{initialPage:f,initialComponent:e,resolveComponent:d,titleCallback:o,onHeadUpdate:u?function(e){return h=e}:null}},plugin:p})})).then(function(e){if(u)return a(e).then(function(e){return{head:h,body:e}})})}catch(e){return Promise.reject(e)}},exports.link=d,exports.plugin=p;
    //# sourceMappingURL=index.js.map


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/dist/index.js":
    /*!*******************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/dist/index.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(__webpack_require__(/*! axios */ "./node_modules/@inertiajs/inertia/node_modules/axios/index.js")),n=__webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js"),i=e(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js"));function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o,s={modal:null,listener:null,show:function(e){var t=this;"object"==typeof e&&(e="All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>"+JSON.stringify(e));var n=document.createElement("html");n.innerHTML=e,n.querySelectorAll("a").forEach(function(e){return e.setAttribute("target","_top")}),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",function(){return t.hide()});var i=document.createElement("iframe");if(i.style.backgroundColor="white",i.style.borderRadius="5px",i.style.width="100%",i.style.height="100%",this.modal.appendChild(i),document.body.prepend(this.modal),document.body.style.overflow="hidden",!i.contentWindow)throw new Error("iframe not yet ready.");i.contentWindow.document.open(),i.contentWindow.document.write(n.outerHTML),i.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide:function(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape:function(e){27===e.keyCode&&this.hide()}};function a(e,t){var n;return function(){var i=arguments,r=this;clearTimeout(n),n=setTimeout(function(){return e.apply(r,[].slice.call(i))},t)}}function c(e,t,n){for(var i in void 0===t&&(t=new FormData),void 0===n&&(n=null),e=e||{})Object.prototype.hasOwnProperty.call(e,i)&&d(t,l(n,i),e[i]);return t}function l(e,t){return e?e+"["+t+"]":t}function d(e,t,n){return Array.isArray(n)?Array.from(n.keys()).forEach(function(i){return d(e,l(t,i.toString()),n[i])}):n instanceof Date?e.append(t,n.toISOString()):n instanceof File?e.append(t,n,n.name):n instanceof Blob?e.append(t,n):"boolean"==typeof n?e.append(t,n?"1":"0"):"string"==typeof n?e.append(t,n):"number"==typeof n?e.append(t,""+n):null==n?e.append(t,""):void c(n,e,t)}function u(e){return new URL(e.toString(),window.location.toString())}function h(e,t,r,o){void 0===o&&(o="brackets");var s=/^https?:\/\//.test(t.toString()),a=s||t.toString().startsWith("/"),c=!a&&!t.toString().startsWith("#")&&!t.toString().startsWith("?"),l=t.toString().includes("?")||e===exports.Method.GET&&Object.keys(r).length,d=t.toString().includes("#"),u=new URL(t.toString(),"http://localhost");return e===exports.Method.GET&&Object.keys(r).length&&(u.search=n.stringify(i(n.parse(u.search,{ignoreQueryPrefix:!0}),r),{encodeValuesOnly:!0,arrayFormat:o}),r={}),[[s?u.protocol+"//"+u.host:"",a?u.pathname:"",c?u.pathname.substring(1):"",l?u.search:"",d?u.hash:""].join(""),r]}function p(e){return(e=new URL(e.href)).hash="",e}function f(e,t){return document.dispatchEvent(new CustomEvent("inertia:"+e,t))}(o=exports.Method||(exports.Method={})).GET="get",o.POST="post",o.PUT="put",o.PATCH="patch",o.DELETE="delete";var v=function(e){return f("finish",{detail:{visit:e}})},m=function(e){return f("navigate",{detail:{page:e}})},g="undefined"==typeof window,w=function(){function e(){this.visitId=null}var n=e.prototype;return n.init=function(e){var t=e.resolveComponent,n=e.swapComponent;this.page=e.initialPage,this.resolveComponent=t,this.swapComponent=n,this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()},n.handleInitialPageVisit=function(e){this.page.url+=window.location.hash,this.setPage(e,{preserveState:!0}).then(function(){return m(e)})},n.setupEventListeners=function(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",a(this.handleScrollEvent.bind(this),100),!0)},n.scrollRegions=function(){return document.querySelectorAll("[scroll-region]")},n.handleScrollEvent=function(e){"function"==typeof e.target.hasAttribute&&e.target.hasAttribute("scroll-region")&&this.saveScrollPositions()},n.saveScrollPositions=function(){this.replaceState(r({},this.page,{scrollRegions:Array.from(this.scrollRegions()).map(function(e){return{top:e.scrollTop,left:e.scrollLeft}})}))},n.resetScrollPositions=function(){var e;window.scrollTo(0,0),this.scrollRegions().forEach(function(e){"function"==typeof e.scrollTo?e.scrollTo(0,0):(e.scrollTop=0,e.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&(null==(e=document.getElementById(window.location.hash.slice(1)))||e.scrollIntoView())},n.restoreScrollPositions=function(){var e=this;this.page.scrollRegions&&this.scrollRegions().forEach(function(t,n){var i=e.page.scrollRegions[n];i&&("function"==typeof t.scrollTo?t.scrollTo(i.left,i.top):(t.scrollTop=i.top,t.scrollLeft=i.left))})},n.isBackForwardVisit=function(){return window.history.state&&window.performance&&window.performance.getEntriesByType("navigation").length>0&&"back_forward"===window.performance.getEntriesByType("navigation")[0].type},n.handleBackForwardVisit=function(e){var t=this;window.history.state.version=e.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(function(){t.restoreScrollPositions(),m(e)})},n.locationVisit=function(e,t){try{window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify({preserveScroll:t})),window.location.href=e.href,p(window.location).href===p(e).href&&window.location.reload()}catch(e){return!1}},n.isLocationVisit=function(){try{return null!==window.sessionStorage.getItem("inertiaLocationVisit")}catch(e){return!1}},n.handleLocationVisit=function(e){var t,n,i,r,o=this,s=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),e.url+=window.location.hash,e.rememberedState=null!=(t=null==(n=window.history.state)?void 0:n.rememberedState)?t:{},e.scrollRegions=null!=(i=null==(r=window.history.state)?void 0:r.scrollRegions)?i:[],this.setPage(e,{preserveScroll:s.preserveScroll,preserveState:!0}).then(function(){s.preserveScroll&&o.restoreScrollPositions(),m(e)})},n.isLocationVisitResponse=function(e){return e&&409===e.status&&e.headers["x-inertia-location"]},n.isInertiaResponse=function(e){return null==e?void 0:e.headers["x-inertia"]},n.createVisitId=function(){return this.visitId={},this.visitId},n.cancelVisit=function(e,t){var n=t.cancelled,i=void 0!==n&&n,r=t.interrupted,o=void 0!==r&&r;!e||e.completed||e.cancelled||e.interrupted||(e.cancelToken.cancel(),e.onCancel(),e.completed=!1,e.cancelled=i,e.interrupted=o,v(e),e.onFinish(e))},n.finishVisit=function(e){e.cancelled||e.interrupted||(e.completed=!0,e.cancelled=!1,e.interrupted=!1,v(e),e.onFinish(e))},n.resolvePreserveOption=function(e,t){return"function"==typeof e?e(t):"errors"===e?Object.keys(t.props.errors||{}).length>0:e},n.visit=function(e,n){var i=this,o=void 0===n?{}:n,a=o.method,l=void 0===a?exports.Method.GET:a,d=o.data,v=void 0===d?{}:d,m=o.replace,g=void 0!==m&&m,w=o.preserveScroll,y=void 0!==w&&w,S=o.preserveState,b=void 0!==S&&S,E=o.only,P=void 0===E?[]:E,T=o.headers,I=void 0===T?{}:T,x=o.errorBag,V=void 0===x?"":x,L=o.forceFormData,O=void 0!==L&&L,k=o.onCancelToken,C=void 0===k?function(){}:k,M=o.onBefore,A=void 0===M?function(){}:M,j=o.onStart,F=void 0===j?function(){}:j,R=o.onProgress,D=void 0===R?function(){}:R,B=o.onFinish,q=void 0===B?function(){}:B,N=o.onCancel,H=void 0===N?function(){}:N,W=o.onSuccess,G=void 0===W?function(){}:W,U=o.onError,X=void 0===U?function(){}:U,J=o.queryStringArrayFormat,K=void 0===J?"brackets":J,_="string"==typeof e?u(e):e;if(!function e(t){return t instanceof File||t instanceof Blob||t instanceof FileList&&t.length>0||t instanceof FormData&&Array.from(t.values()).some(function(t){return e(t)})||"object"==typeof t&&null!==t&&Object.values(t).some(function(t){return e(t)})}(v)&&!O||v instanceof FormData||(v=c(v)),!(v instanceof FormData)){var z=h(l,_,v,K),Q=z[1];_=u(z[0]),v=Q}var Y={url:_,method:l,data:v,replace:g,preserveScroll:y,preserveState:b,only:P,headers:I,errorBag:V,forceFormData:O,queryStringArrayFormat:K,cancelled:!1,completed:!1,interrupted:!1};if(!1!==A(Y)&&function(e){return f("before",{cancelable:!0,detail:{visit:e}})}(Y)){this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();var Z=this.createVisitId();this.activeVisit=r({},Y,{onCancelToken:C,onBefore:A,onStart:F,onProgress:D,onFinish:q,onCancel:H,onSuccess:G,onError:X,queryStringArrayFormat:K,cancelToken:t.CancelToken.source()}),C({cancel:function(){i.activeVisit&&i.cancelVisit(i.activeVisit,{cancelled:!0})}}),function(e){f("start",{detail:{visit:e}})}(Y),F(Y),t({method:l,url:p(_).href,data:l===exports.Method.GET?{}:v,params:l===exports.Method.GET?v:{},cancelToken:this.activeVisit.cancelToken.token,headers:r({},I,{Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0},P.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":P.join(",")}:{},V&&V.length?{"X-Inertia-Error-Bag":V}:{},this.page.version?{"X-Inertia-Version":this.page.version}:{}),onUploadProgress:function(e){v instanceof FormData&&(e.percentage=Math.round(e.loaded/e.total*100),function(e){f("progress",{detail:{progress:e}})}(e),D(e))}}).then(function(e){var t;if(!i.isInertiaResponse(e))return Promise.reject({response:e});var n=e.data;P.length&&n.component===i.page.component&&(n.props=r({},i.page.props,n.props)),y=i.resolvePreserveOption(y,n),(b=i.resolvePreserveOption(b,n))&&null!=(t=window.history.state)&&t.rememberedState&&n.component===i.page.component&&(n.rememberedState=window.history.state.rememberedState);var o=_,s=u(n.url);return o.hash&&!s.hash&&p(o).href===s.href&&(s.hash=o.hash,n.url=s.href),i.setPage(n,{visitId:Z,replace:g,preserveScroll:y,preserveState:b})}).then(function(){var e=i.page.props.errors||{};if(Object.keys(e).length>0){var t=V?e[V]?e[V]:{}:e;return function(e){f("error",{detail:{errors:e}})}(t),X(t)}return f("success",{detail:{page:i.page}}),G(i.page)}).catch(function(e){if(i.isInertiaResponse(e.response))return i.setPage(e.response.data,{visitId:Z});if(i.isLocationVisitResponse(e.response)){var t=u(e.response.headers["x-inertia-location"]),n=_;n.hash&&!t.hash&&p(n).href===t.href&&(t.hash=n.hash),i.locationVisit(t,!0===y)}else{if(!e.response)return Promise.reject(e);f("invalid",{cancelable:!0,detail:{response:e.response}})&&s.show(e.response.data)}}).then(function(){i.activeVisit&&i.finishVisit(i.activeVisit)}).catch(function(e){if(!t.isCancel(e)){var n=f("exception",{cancelable:!0,detail:{exception:e}});if(i.activeVisit&&i.finishVisit(i.activeVisit),n)return Promise.reject(e)}})}},n.setPage=function(e,t){var n=this,i=void 0===t?{}:t,r=i.visitId,o=void 0===r?this.createVisitId():r,s=i.replace,a=void 0!==s&&s,c=i.preserveScroll,l=void 0!==c&&c,d=i.preserveState,h=void 0!==d&&d;return Promise.resolve(this.resolveComponent(e.component)).then(function(t){o===n.visitId&&(e.scrollRegions=e.scrollRegions||[],e.rememberedState=e.rememberedState||{},(a=a||u(e.url).href===window.location.href)?n.replaceState(e):n.pushState(e),n.swapComponent({component:t,page:e,preserveState:h}).then(function(){l||n.resetScrollPositions(),a||m(e)}))})},n.pushState=function(e){this.page=e,window.history.pushState(e,"",e.url)},n.replaceState=function(e){this.page=e,window.history.replaceState(e,"",e.url)},n.handlePopstateEvent=function(e){var t=this;if(null!==e.state){var n=e.state,i=this.createVisitId();Promise.resolve(this.resolveComponent(n.component)).then(function(e){i===t.visitId&&(t.page=n,t.swapComponent({component:e,page:n,preserveState:!1}).then(function(){t.restoreScrollPositions(),m(n)}))})}else{var o=u(this.page.url);o.hash=window.location.hash,this.replaceState(r({},this.page,{url:o.href})),this.resetScrollPositions()}},n.get=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({},n,{method:exports.Method.GET,data:t}))},n.reload=function(e){return void 0===e&&(e={}),this.visit(window.location.href,r({},e,{preserveScroll:!0,preserveState:!0}))},n.replace=function(e,t){var n;return void 0===t&&(t={}),console.warn("Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia."+(null!=(n=t.method)?n:"get")+"() instead."),this.visit(e,r({preserveState:!0},t,{replace:!0}))},n.post=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({preserveState:!0},n,{method:exports.Method.POST,data:t}))},n.put=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({preserveState:!0},n,{method:exports.Method.PUT,data:t}))},n.patch=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),this.visit(e,r({preserveState:!0},n,{method:exports.Method.PATCH,data:t}))},n.delete=function(e,t){return void 0===t&&(t={}),this.visit(e,r({preserveState:!0},t,{method:exports.Method.DELETE}))},n.remember=function(e,t){var n,i;void 0===t&&(t="default"),g||this.replaceState(r({},this.page,{rememberedState:r({},null==(n=this.page)?void 0:n.rememberedState,(i={},i[t]=e,i))}))},n.restore=function(e){var t,n;if(void 0===e&&(e="default"),!g)return null==(t=window.history.state)||null==(n=t.rememberedState)?void 0:n[e]},n.on=function(e,t){var n=function(e){var n=t(e);e.cancelable&&!e.defaultPrevented&&!1===n&&e.preventDefault()};return document.addEventListener("inertia:"+e,n),function(){return document.removeEventListener("inertia:"+e,n)}},e}(),y={buildDOMElement:function(e){var t=document.createElement("template");t.innerHTML=e;var n=t.content.firstChild;if(!e.startsWith("<script "))return n;var i=document.createElement("script");return i.innerHTML=n.innerHTML,n.getAttributeNames().forEach(function(e){i.setAttribute(e,n.getAttribute(e)||"")}),i},isInertiaManagedElement:function(e){return e.nodeType===Node.ELEMENT_NODE&&null!==e.getAttribute("inertia")},findMatchingElementIndex:function(e,t){var n=e.getAttribute("inertia");return null!==n?t.findIndex(function(e){return e.getAttribute("inertia")===n}):-1},update:a(function(e){var t=this,n=e.map(function(e){return t.buildDOMElement(e)});Array.from(document.head.childNodes).filter(function(e){return t.isInertiaManagedElement(e)}).forEach(function(e){var i=t.findMatchingElementIndex(e,n);if(-1!==i){var r,o=n.splice(i,1)[0];o&&!e.isEqualNode(o)&&(null==e||null==(r=e.parentNode)||r.replaceChild(o,e))}else{var s;null==e||null==(s=e.parentNode)||s.removeChild(e)}}),n.forEach(function(e){return document.head.appendChild(e)})},1)},S=new w;exports.Inertia=S,exports.createHeadManager=function(e,t,n){var i={},r=0;function o(){var e=Object.values(i).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,n){if(-1===n.indexOf("<"))return e;if(0===n.indexOf("<title ")){var i=n.match(/(<title [^>]+>)(.*?)(<\/title>)/);return e.title=i?""+i[1]+t(i[2])+i[3]:n,e}var r=n.match(/ inertia="[^"]+"/);return r?e[r[0]]=n:e[Object.keys(e).length]=n,e},{});return Object.values(e)}function s(){e?n(o()):y.update(o())}return{createProvider:function(){var e=function(){var e=r+=1;return i[e]=[],e.toString()}();return{update:function(t){return function(e,t){void 0===t&&(t=[]),null!==e&&Object.keys(i).indexOf(e)>-1&&(i[e]=t),s()}(e,t)},disconnect:function(){return function(e){null!==e&&-1!==Object.keys(i).indexOf(e)&&(delete i[e],s())}(e)}}}}},exports.hrefToUrl=u,exports.mergeDataIntoQueryString=h,exports.shouldIntercept=function(e){var t="a"===e.currentTarget.tagName.toLowerCase();return!(e.target&&null!=e&&e.target.isContentEditable||e.defaultPrevented||t&&e.which>1||t&&e.altKey||t&&e.ctrlKey||t&&e.metaKey||t&&e.shiftKey)},exports.urlWithoutHash=p;
    //# sourceMappingURL=index.js.map


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/index.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/index.js ***!
      \*********************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/axios.js");

    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/adapters/xhr.js":
    /*!********************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/adapters/xhr.js ***!
      \********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js");
    var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/settle.js");
    var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/cookies.js");
    var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/buildURL.js");
    var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/buildFullPath.js");
    var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/parseHeaders.js");
    var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isURLSameOrigin.js");
    var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/createError.js");

    module.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;

        if (utils.isFormData(requestData)) {
          delete requestHeaders['Content-Type']; // Let the browser set it
        }

        var request = new XMLHttpRequest();

        // HTTP basic authentication
        if (config.auth) {
          var username = config.auth.username || '';
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
          requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }

        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

        // Set the request timeout in MS
        request.timeout = config.timeout;

        function onloadend() {
          if (!request) {
            return;
          }
          // Prepare the response
          var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
            request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config: config,
            request: request
          };

          settle(resolve, reject, response);

          // Clean up request
          request = null;
        }

        if ('onloadend' in request) {
          // Use onloadend if available
          request.onloadend = onloadend;
        } else {
          // Listen for ready state to emulate onloadend
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }

            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
              return;
            }
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
          };
        }

        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }

          reject(createError('Request aborted', config, 'ECONNABORTED', request));

          // Clean up request
          request = null;
        };

        // Handle low level network errors
        request.onerror = function handleError() {
          // Real errors are hidden from us by the browser
          // onerror should only fire if it's a network error
          reject(createError('Network Error', config, null, request));

          // Clean up request
          request = null;
        };

        // Handle timeout
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError(
            timeoutErrorMessage,
            config,
            config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
            request));

          // Clean up request
          request = null;
        };

        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
          // Add xsrf header
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
            cookies.read(config.xsrfCookieName) :
            undefined;

          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }

        // Add headers to the request
        if ('setRequestHeader' in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
              // Remove Content-Type if data is undefined
              delete requestHeaders[key];
            } else {
              // Otherwise add header to the request
              request.setRequestHeader(key, val);
            }
          });
        }

        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }

        // Add responseType to request if needed
        if (responseType && responseType !== 'json') {
          request.responseType = config.responseType;
        }

        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') {
          request.addEventListener('progress', config.onDownloadProgress);
        }

        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) {
          request.upload.addEventListener('progress', config.onUploadProgress);
        }

        if (config.cancelToken) {
          // Handle cancellation
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) {
              return;
            }

            request.abort();
            reject(cancel);
            // Clean up request
            request = null;
          });
        }

        if (!requestData) {
          requestData = null;
        }

        // Send the request
        request.send(requestData);
      });
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/axios.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/axios.js ***!
      \*************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./utils */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js");
    var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/bind.js");
    var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/Axios.js");
    var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/mergeConfig.js");
    var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/defaults.js");

    /**
     * Create an instance of Axios
     *
     * @param {Object} defaultConfig The default config for the instance
     * @return {Axios} A new instance of Axios
     */
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);

      // Copy axios.prototype to instance
      utils.extend(instance, Axios.prototype, context);

      // Copy context to instance
      utils.extend(instance, context);

      return instance;
    }

    // Create the default instance to be exported
    var axios = createInstance(defaults);

    // Expose Axios class to allow class inheritance
    axios.Axios = Axios;

    // Factory for creating new instances
    axios.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios.defaults, instanceConfig));
    };

    // Expose Cancel & CancelToken
    axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/Cancel.js");
    axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/CancelToken.js");
    axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/isCancel.js");

    // Expose all/spread
    axios.all = function all(promises) {
      return Promise.all(promises);
    };
    axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/spread.js");

    // Expose isAxiosError
    axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isAxiosError.js");

    module.exports = axios;

    // Allow use of default import syntax in TypeScript
    module.exports.default = axios;


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/Cancel.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/Cancel.js ***!
      \*********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    /**
     * A `Cancel` is an object that is thrown when an operation is canceled.
     *
     * @class
     * @param {string=} message The message.
     */
    function Cancel(message) {
      this.message = message;
    }

    Cancel.prototype.toString = function toString() {
      return 'Cancel' + (this.message ? ': ' + this.message : '');
    };

    Cancel.prototype.__CANCEL__ = true;

    module.exports = Cancel;


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/CancelToken.js":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/CancelToken.js ***!
      \**************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/Cancel.js");

    /**
     * A `CancelToken` is an object that can be used to request cancellation of an operation.
     *
     * @class
     * @param {Function} executor The executor function.
     */
    function CancelToken(executor) {
      if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
      }

      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });

      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          // Cancellation has already been requested
          return;
        }

        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }

    /**
     * Throws a `Cancel` if cancellation has been requested.
     */
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };

    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token,
        cancel: cancel
      };
    };

    module.exports = CancelToken;


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/isCancel.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/isCancel.js ***!
      \***********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/Axios.js":
    /*!******************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/Axios.js ***!
      \******************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js");
    var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/buildURL.js");
    var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/InterceptorManager.js");
    var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/dispatchRequest.js");
    var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/mergeConfig.js");
    var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/validator.js");

    var validators = validator.validators;
    /**
     * Create a new instance of Axios
     *
     * @param {Object} instanceConfig The default config for the instance
     */
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }

    /**
     * Dispatch a request
     *
     * @param {Object} config The config specific for this request (merged with this.defaults)
     */
    Axios.prototype.request = function request(config) {
      /*eslint no-param-reassign:0*/
      // Allow for axios('example/url'[, config]) a la fetch API
      if (typeof config === 'string') {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else {
        config = config || {};
      }

      config = mergeConfig(this.defaults, config);

      // Set config.method
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = 'get';
      }

      var transitional = config.transitional;

      if (transitional !== undefined) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
          forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
          clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
        }, false);
      }

      // filter out skipped interceptors
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
          return;
        }

        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });

      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });

      var promise;

      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, undefined];

        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);

        promise = Promise.resolve(config);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }

        return promise;
      }


      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }

      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }

      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }

      return promise;
    };

    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
    };

    // Provide aliases for supported request methods
    utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method: method,
          url: url,
          data: (config || {}).data
        }));
      };
    });

    utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method: method,
          url: url,
          data: data
        }));
      };
    });

    module.exports = Axios;


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/InterceptorManager.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/InterceptorManager.js ***!
      \*******************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js");

    function InterceptorManager() {
      this.handlers = [];
    }

    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };

    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     */
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };

    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     */
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };

    module.exports = InterceptorManager;


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/buildFullPath.js":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/buildFullPath.js ***!
      \**************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isAbsoluteURL.js");
    var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/combineURLs.js");

    /**
     * Creates a new URL by combining the baseURL with the requestedURL,
     * only when the requestedURL is not already an absolute URL.
     * If the requestURL is absolute, this function returns the requestedURL untouched.
     *
     * @param {string} baseURL The base URL
     * @param {string} requestedURL Absolute or relative URL to combine
     * @returns {string} The combined full path
     */
    module.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/createError.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/createError.js ***!
      \************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/enhanceError.js");

    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     * @returns {Error} The created error.
     */
    module.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/dispatchRequest.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/dispatchRequest.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js");
    var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/transformData.js");
    var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/cancel/isCancel.js");
    var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/defaults.js");

    /**
     * Throws a `Cancel` if cancellation has been requested.
     */
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
    }

    /**
     * Dispatch a request to the server using the configured adapter.
     *
     * @param {object} config The config that is to be used for the request
     * @returns {Promise} The Promise to be fulfilled
     */
    module.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);

      // Ensure headers exist
      config.headers = config.headers || {};

      // Transform request data
      config.data = transformData.call(
        config,
        config.data,
        config.headers,
        config.transformRequest
      );

      // Flatten headers
      config.headers = utils.merge(
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers
      );

      utils.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );

      var adapter = config.adapter || defaults.adapter;

      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);

        // Transform response data
        response.data = transformData.call(
          config,
          response.data,
          response.headers,
          config.transformResponse
        );

        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);

          // Transform response data
          if (reason && reason.response) {
            reason.response.data = transformData.call(
              config,
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }

        return Promise.reject(reason);
      });
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/enhanceError.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/enhanceError.js ***!
      \*************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    /**
     * Update an Error with the specified config, error code, and response.
     *
     * @param {Error} error The error to update.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     * @returns {Error} The error.
     */
    module.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }

      error.request = request;
      error.response = response;
      error.isAxiosError = true;

      error.toJSON = function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: this.config,
          code: this.code
        };
      };
      return error;
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/mergeConfig.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/mergeConfig.js ***!
      \************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ../utils */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js");

    /**
     * Config-specific merge-function which creates a new config-object
     * by merging two configuration objects together.
     *
     * @param {Object} config1
     * @param {Object} config2
     * @returns {Object} New object resulting from merging config2 to config1
     */
    module.exports = function mergeConfig(config1, config2) {
      // eslint-disable-next-line no-param-reassign
      config2 = config2 || {};
      var config = {};

      var valueFromConfig2Keys = ['url', 'method', 'data'];
      var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
      var defaultToConfig2Keys = [
        'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
        'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
        'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
        'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
        'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
      ];
      var directMergeKeys = ['validateStatus'];

      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }

      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(undefined, config1[prop]);
        }
      }

      utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(undefined, config2[prop]);
        }
      });

      utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

      utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(undefined, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(undefined, config1[prop]);
        }
      });

      utils.forEach(directMergeKeys, function merge(prop) {
        if (prop in config2) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          config[prop] = getMergedValue(undefined, config1[prop]);
        }
      });

      var axiosKeys = valueFromConfig2Keys
        .concat(mergeDeepPropertiesKeys)
        .concat(defaultToConfig2Keys)
        .concat(directMergeKeys);

      var otherKeys = Object
        .keys(config1)
        .concat(Object.keys(config2))
        .filter(function filterAxiosKeys(key) {
          return axiosKeys.indexOf(key) === -1;
        });

      utils.forEach(otherKeys, mergeDeepProperties);

      return config;
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/settle.js":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/settle.js ***!
      \*******************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var createError = __webpack_require__(/*! ./createError */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/createError.js");

    /**
     * Resolve or reject a Promise based on response status.
     *
     * @param {Function} resolve A function that resolves the promise.
     * @param {Function} reject A function that rejects the promise.
     * @param {object} response The response.
     */
    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError(
          'Request failed with status code ' + response.status,
          response.config,
          null,
          response.request,
          response
        ));
      }
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/transformData.js":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/transformData.js ***!
      \**************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js");
    var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/defaults.js");

    /**
     * Transform the data for a request or a response
     *
     * @param {Object|String} data The data to be transformed
     * @param {Array} headers The headers for the request or response
     * @param {Array|Function} fns A single function or Array of functions
     * @returns {*} The resulting transformed data
     */
    module.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      /*eslint no-param-reassign:0*/
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });

      return data;
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/defaults.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/defaults.js ***!
      \****************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */(function(process) {

    var utils = __webpack_require__(/*! ./utils */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js");
    var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/normalizeHeaderName.js");
    var enhanceError = __webpack_require__(/*! ./core/enhanceError */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/core/enhanceError.js");

    var DEFAULT_CONTENT_TYPE = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
      }
    }

    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/adapters/xhr.js");
      } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
        // For node use HTTP adapter
        adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/adapters/xhr.js");
      }
      return adapter;
    }

    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e) {
          if (e.name !== 'SyntaxError') {
            throw e;
          }
        }
      }

      return (encoder || JSON.stringify)(rawValue);
    }

    var defaults = {

      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },

      adapter: getDefaultAdapter(),

      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, 'Accept');
        normalizeHeaderName(headers, 'Content-Type');

        if (utils.isFormData(data) ||
          utils.isArrayBuffer(data) ||
          utils.isBuffer(data) ||
          utils.isStream(data) ||
          utils.isFile(data) ||
          utils.isBlob(data)
        ) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
          return data.toString();
        }
        if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
          setContentTypeIfUnset(headers, 'application/json');
          return stringifySafely(data);
        }
        return data;
      }],

      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

        if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === 'SyntaxError') {
                throw enhanceError(e, this, 'E_JSON_PARSE');
              }
              throw e;
            }
          }
        }

        return data;
      }],

      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,

      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',

      maxContentLength: -1,
      maxBodyLength: -1,

      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      }
    };

    defaults.headers = {
      common: {
        'Accept': 'application/json, text/plain, */*'
      }
    };

    utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });

    utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });

    module.exports = defaults;

    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../process/browser.js */ "./node_modules/process/browser.js")))

    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/bind.js":
    /*!********************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/bind.js ***!
      \********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/buildURL.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/buildURL.js ***!
      \************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js");

    function encode(val) {
      return encodeURIComponent(val).
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
    }

    /**
     * Build a URL by appending params to the end
     *
     * @param {string} url The base of the url (e.g., http://www.google.com)
     * @param {object} [params] The params to be appended
     * @returns {string} The formatted url
     */
    module.exports = function buildURL(url, params, paramsSerializer) {
      /*eslint no-param-reassign:0*/
      if (!params) {
        return url;
      }

      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];

        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === 'undefined') {
            return;
          }

          if (utils.isArray(val)) {
            key = key + '[]';
          } else {
            val = [val];
          }

          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + '=' + encode(v));
          });
        });

        serializedParams = parts.join('&');
      }

      if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }

        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
      }

      return url;
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/combineURLs.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/combineURLs.js ***!
      \***************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    /**
     * Creates a new URL by combining the specified URLs
     *
     * @param {string} baseURL The base URL
     * @param {string} relativeURL The relative URL
     * @returns {string} The combined URL
     */
    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/cookies.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/cookies.js ***!
      \***********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js");

    module.exports = (
      utils.isStandardBrowserEnv() ?

      // Standard browser envs support document.cookie
        (function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              var cookie = [];
              cookie.push(name + '=' + encodeURIComponent(value));

              if (utils.isNumber(expires)) {
                cookie.push('expires=' + new Date(expires).toGMTString());
              }

              if (utils.isString(path)) {
                cookie.push('path=' + path);
              }

              if (utils.isString(domain)) {
                cookie.push('domain=' + domain);
              }

              if (secure === true) {
                cookie.push('secure');
              }

              document.cookie = cookie.join('; ');
            },

            read: function read(name) {
              var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
              return (match ? decodeURIComponent(match[3]) : null);
            },

            remove: function remove(name) {
              this.write(name, '', Date.now() - 86400000);
            }
          };
        })() :

      // Non standard browser env (web workers, react-native) lack needed support.
        (function nonStandardBrowserEnv() {
          return {
            write: function write() {},
            read: function read() { return null; },
            remove: function remove() {}
          };
        })()
    );


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isAbsoluteURL.js":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
      \*****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    /**
     * Determines whether the specified URL is absolute
     *
     * @param {string} url The URL to test
     * @returns {boolean} True if the specified URL is absolute, otherwise false
     */
    module.exports = function isAbsoluteURL(url) {
      // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
      // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
      // by any combination of letters, digits, plus, period, or hyphen.
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isAxiosError.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isAxiosError.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    /**
     * Determines whether the payload is an error thrown by Axios
     *
     * @param {*} payload The value to test
     * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
     */
    module.exports = function isAxiosError(payload) {
      return (typeof payload === 'object') && (payload.isAxiosError === true);
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isURLSameOrigin.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
      \*******************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js");

    module.exports = (
      utils.isStandardBrowserEnv() ?

      // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
        (function standardBrowserEnv() {
          var msie = /(msie|trident)/i.test(navigator.userAgent);
          var urlParsingNode = document.createElement('a');
          var originURL;

          /**
        * Parse a URL to discover it's components
        *
        * @param {String} url The URL to be parsed
        * @returns {Object}
        */
          function resolveURL(url) {
            var href = url;

            if (msie) {
            // IE needs attribute set twice to normalize properties
              urlParsingNode.setAttribute('href', href);
              href = urlParsingNode.href;
            }

            urlParsingNode.setAttribute('href', href);

            // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                urlParsingNode.pathname :
                '/' + urlParsingNode.pathname
            };
          }

          originURL = resolveURL(window.location.href);

          /**
        * Determine if a URL shares the same origin as the current location
        *
        * @param {String} requestURL The URL to test
        * @returns {boolean} True if URL shares the same origin, otherwise false
        */
          return function isURLSameOrigin(requestURL) {
            var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
            return (parsed.protocol === originURL.protocol &&
                parsed.host === originURL.host);
          };
        })() :

      // Non standard browser envs (web workers, react-native) lack needed support.
        (function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true;
          };
        })()
    );


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/normalizeHeaderName.js":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
      \***********************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ../utils */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js");

    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/parseHeaders.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/parseHeaders.js ***!
      \****************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js");

    // Headers whose duplicates are ignored by node
    // c.f. https://nodejs.org/api/http.html#http_message_headers
    var ignoreDuplicateOf = [
      'age', 'authorization', 'content-length', 'content-type', 'etag',
      'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
      'last-modified', 'location', 'max-forwards', 'proxy-authorization',
      'referer', 'retry-after', 'user-agent'
    ];

    /**
     * Parse headers into an object
     *
     * ```
     * Date: Wed, 27 Aug 2014 08:58:49 GMT
     * Content-Type: application/json
     * Connection: keep-alive
     * Transfer-Encoding: chunked
     * ```
     *
     * @param {String} headers Headers needing to be parsed
     * @returns {Object} Headers parsed into an object
     */
    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;

      if (!headers) { return parsed; }

      utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));

        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === 'set-cookie') {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
          }
        }
      });

      return parsed;
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/spread.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/spread.js ***!
      \**********************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    /**
     * Syntactic sugar for invoking a function and expanding an array for arguments.
     *
     * Common use case would be to use `Function.prototype.apply`.
     *
     *  ```js
     *  function f(x, y, z) {}
     *  var args = [1, 2, 3];
     *  f.apply(null, args);
     *  ```
     *
     * With `spread` this example can be re-written.
     *
     *  ```js
     *  spread(function(x, y, z) {})([1, 2, 3]);
     *  ```
     *
     * @param {Function} callback
     * @returns {Function}
     */
    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/validator.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/validator.js ***!
      \*************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var pkg = __webpack_require__(/*! ./../../package.json */ "./node_modules/@inertiajs/inertia/node_modules/axios/package.json");

    var validators = {};

    // eslint-disable-next-line func-names
    ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
      validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
      };
    });

    var deprecatedWarnings = {};
    var currentVerArr = pkg.version.split('.');

    /**
     * Compare package versions
     * @param {string} version
     * @param {string?} thanVersion
     * @returns {boolean}
     */
    function isOlderVersion(version, thanVersion) {
      var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
      var destVer = version.split('.');
      for (var i = 0; i < 3; i++) {
        if (pkgVersionArr[i] > destVer[i]) {
          return true;
        } else if (pkgVersionArr[i] < destVer[i]) {
          return false;
        }
      }
      return false;
    }

    /**
     * Transitional option validator
     * @param {function|boolean?} validator
     * @param {string?} version
     * @param {string} message
     * @returns {function}
     */
    validators.transitional = function transitional(validator, version, message) {
      var isDeprecated = version && isOlderVersion(version);

      function formatMessage(opt, desc) {
        return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
      }

      // eslint-disable-next-line func-names
      return function(value, opt, opts) {
        if (validator === false) {
          throw new Error(formatMessage(opt, ' has been removed in ' + version));
        }

        if (isDeprecated && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          // eslint-disable-next-line no-console
          console.warn(
            formatMessage(
              opt,
              ' has been deprecated since v' + version + ' and will be removed in the near future'
            )
          );
        }

        return validator ? validator(value, opt, opts) : true;
      };
    };

    /**
     * Assert object's properties type
     * @param {object} options
     * @param {object} schema
     * @param {boolean?} allowUnknown
     */

    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== 'object') {
        throw new TypeError('options must be an object');
      }
      var keys = Object.keys(options);
      var i = keys.length;
      while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result = value === undefined || validator(value, opt, options);
          if (result !== true) {
            throw new TypeError('option ' + opt + ' must be ' + result);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw Error('Unknown option ' + opt);
        }
      }
    }

    module.exports = {
      isOlderVersion: isOlderVersion,
      assertOptions: assertOptions,
      validators: validators
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/lib/utils.js ***!
      \*************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/@inertiajs/inertia/node_modules/axios/lib/helpers/bind.js");

    // utils is a library of generic helper functions non-specific to axios

    var toString = Object.prototype.toString;

    /**
     * Determine if a value is an Array
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Array, otherwise false
     */
    function isArray(val) {
      return toString.call(val) === '[object Array]';
    }

    /**
     * Determine if a value is undefined
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if the value is undefined, otherwise false
     */
    function isUndefined(val) {
      return typeof val === 'undefined';
    }

    /**
     * Determine if a value is a Buffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Buffer, otherwise false
     */
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
        && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
    }

    /**
     * Determine if a value is an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an ArrayBuffer, otherwise false
     */
    function isArrayBuffer(val) {
      return toString.call(val) === '[object ArrayBuffer]';
    }

    /**
     * Determine if a value is a FormData
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an FormData, otherwise false
     */
    function isFormData(val) {
      return (typeof FormData !== 'undefined') && (val instanceof FormData);
    }

    /**
     * Determine if a value is a view on an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
     */
    function isArrayBufferView(val) {
      var result;
      if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
      } else {
        result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
      }
      return result;
    }

    /**
     * Determine if a value is a String
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a String, otherwise false
     */
    function isString(val) {
      return typeof val === 'string';
    }

    /**
     * Determine if a value is a Number
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Number, otherwise false
     */
    function isNumber(val) {
      return typeof val === 'number';
    }

    /**
     * Determine if a value is an Object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Object, otherwise false
     */
    function isObject(val) {
      return val !== null && typeof val === 'object';
    }

    /**
     * Determine if a value is a plain Object
     *
     * @param {Object} val The value to test
     * @return {boolean} True if value is a plain Object, otherwise false
     */
    function isPlainObject(val) {
      if (toString.call(val) !== '[object Object]') {
        return false;
      }

      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }

    /**
     * Determine if a value is a Date
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Date, otherwise false
     */
    function isDate(val) {
      return toString.call(val) === '[object Date]';
    }

    /**
     * Determine if a value is a File
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a File, otherwise false
     */
    function isFile(val) {
      return toString.call(val) === '[object File]';
    }

    /**
     * Determine if a value is a Blob
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Blob, otherwise false
     */
    function isBlob(val) {
      return toString.call(val) === '[object Blob]';
    }

    /**
     * Determine if a value is a Function
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Function, otherwise false
     */
    function isFunction(val) {
      return toString.call(val) === '[object Function]';
    }

    /**
     * Determine if a value is a Stream
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Stream, otherwise false
     */
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }

    /**
     * Determine if a value is a URLSearchParams object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a URLSearchParams object, otherwise false
     */
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
    }

    /**
     * Trim excess whitespace off the beginning and end of a string
     *
     * @param {String} str The String to trim
     * @returns {String} The String freed of excess whitespace
     */
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
    }

    /**
     * Determine if we're running in a standard browser environment
     *
     * This allows axios to run in a web worker, and react-native.
     * Both environments support XMLHttpRequest, but not fully standard globals.
     *
     * web workers:
     *  typeof window -> undefined
     *  typeof document -> undefined
     *
     * react-native:
     *  navigator.product -> 'ReactNative'
     * nativescript
     *  navigator.product -> 'NativeScript' or 'NS'
     */
    function isStandardBrowserEnv() {
      if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                               navigator.product === 'NativeScript' ||
                                               navigator.product === 'NS')) {
        return false;
      }
      return (
        typeof window !== 'undefined' &&
        typeof document !== 'undefined'
      );
    }

    /**
     * Iterate over an Array or an Object invoking a function for each item.
     *
     * If `obj` is an Array callback will be called passing
     * the value, index, and complete array for each item.
     *
     * If 'obj' is an Object callback will be called passing
     * the value, key, and complete object for each property.
     *
     * @param {Object|Array} obj The object to iterate
     * @param {Function} fn The callback to invoke for each item
     */
    function forEach(obj, fn) {
      // Don't bother if no value provided
      if (obj === null || typeof obj === 'undefined') {
        return;
      }

      // Force an array if not already something iterable
      if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
      }

      if (isArray(obj)) {
        // Iterate over array values
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        // Iterate over object keys
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }

    /**
     * Accepts varargs expecting each argument to be an object, then
     * immutably merges the properties of each object and returns result.
     *
     * When multiple objects contain the same key the later object in
     * the arguments list will take precedence.
     *
     * Example:
     *
     * ```js
     * var result = merge({foo: 123}, {foo: 456});
     * console.log(result.foo); // outputs 456
     * ```
     *
     * @param {Object} obj1 Object to merge
     * @returns {Object} Result of all merge properties
     */
    function merge(/* obj1, obj2, obj3, ... */) {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }

      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }

    /**
     * Extends object a by mutably adding to it the properties of object b.
     *
     * @param {Object} a The object to be extended
     * @param {Object} b The object to copy properties from
     * @param {Object} thisArg The object to bind function to
     * @return {Object} The resulting value of object a
     */
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }

    /**
     * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
     *
     * @param {string} content with BOM
     * @return {string} content value without BOM
     */
    function stripBOM(content) {
      if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
      }
      return content;
    }

    module.exports = {
      isArray: isArray,
      isArrayBuffer: isArrayBuffer,
      isBuffer: isBuffer,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      isString: isString,
      isNumber: isNumber,
      isObject: isObject,
      isPlainObject: isPlainObject,
      isUndefined: isUndefined,
      isDate: isDate,
      isFile: isFile,
      isBlob: isBlob,
      isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams,
      isStandardBrowserEnv: isStandardBrowserEnv,
      forEach: forEach,
      merge: merge,
      extend: extend,
      trim: trim,
      stripBOM: stripBOM
    };


    /***/ }),

    /***/ "./node_modules/@inertiajs/inertia/node_modules/axios/package.json":
    /*!*************************************************************************!*\
      !*** ./node_modules/@inertiajs/inertia/node_modules/axios/package.json ***!
      \*************************************************************************/
    /*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, browser, jsdelivr, unpkg, typings, dependencies, bundlesize, default */
    /***/ (function(module) {

    module.exports = JSON.parse("{\"name\":\"axios\",\"version\":\"0.21.4\",\"description\":\"Promise based HTTP client for the browser and node.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"grunt test\",\"start\":\"node ./sandbox/server.js\",\"build\":\"NODE_ENV=production grunt build\",\"preversion\":\"npm test\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\",\"postversion\":\"git push && git push --tags\",\"examples\":\"node ./examples/server.js\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"eslint --fix lib/**/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/axios/axios.git\"},\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"author\":\"Matt Zabriskie\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"homepage\":\"https://axios-http.com\",\"devDependencies\":{\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.3.0\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^23.0.0\",\"grunt-karma\":\"^4.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^4.0.2\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^6.3.2\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-firefox-launcher\":\"^2.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^4.3.6\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.8\",\"karma-webpack\":\"^4.0.2\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^8.2.1\",\"sinon\":\"^4.5.0\",\"terser-webpack-plugin\":\"^4.2.3\",\"typescript\":\"^4.0.5\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^4.44.2\",\"webpack-dev-server\":\"^3.11.0\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"jsdelivr\":\"dist/axios.min.js\",\"unpkg\":\"dist/axios.min.js\",\"typings\":\"./index.d.ts\",\"dependencies\":{\"follow-redirects\":\"^1.14.0\"},\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}]}");

    /***/ }),

    /***/ "./node_modules/axios/index.js":
    /*!*************************************!*\
      !*** ./node_modules/axios/index.js ***!
      \*************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

    /***/ }),

    /***/ "./node_modules/axios/lib/adapters/xhr.js":
    /*!************************************************!*\
      !*** ./node_modules/axios/lib/adapters/xhr.js ***!
      \************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
    var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
    var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
    var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
    var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
    var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
    var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

    module.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;

        if (utils.isFormData(requestData)) {
          delete requestHeaders['Content-Type']; // Let the browser set it
        }

        var request = new XMLHttpRequest();

        // HTTP basic authentication
        if (config.auth) {
          var username = config.auth.username || '';
          var password = config.auth.password || '';
          requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }

        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

        // Set the request timeout in MS
        request.timeout = config.timeout;

        // Listen for ready state
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }

          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
          }

          // Prepare the response
          var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config: config,
            request: request
          };

          settle(resolve, reject, response);

          // Clean up request
          request = null;
        };

        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }

          reject(createError('Request aborted', config, 'ECONNABORTED', request));

          // Clean up request
          request = null;
        };

        // Handle low level network errors
        request.onerror = function handleError() {
          // Real errors are hidden from us by the browser
          // onerror should only fire if it's a network error
          reject(createError('Network Error', config, null, request));

          // Clean up request
          request = null;
        };

        // Handle timeout
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
            request));

          // Clean up request
          request = null;
        };

        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
          var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

          // Add xsrf header
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
            cookies.read(config.xsrfCookieName) :
            undefined;

          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }

        // Add headers to the request
        if ('setRequestHeader' in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
              // Remove Content-Type if data is undefined
              delete requestHeaders[key];
            } else {
              // Otherwise add header to the request
              request.setRequestHeader(key, val);
            }
          });
        }

        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }

        // Add responseType to request if needed
        if (config.responseType) {
          try {
            request.responseType = config.responseType;
          } catch (e) {
            // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
            // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
            if (config.responseType !== 'json') {
              throw e;
            }
          }
        }

        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') {
          request.addEventListener('progress', config.onDownloadProgress);
        }

        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) {
          request.upload.addEventListener('progress', config.onUploadProgress);
        }

        if (config.cancelToken) {
          // Handle cancellation
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) {
              return;
            }

            request.abort();
            reject(cancel);
            // Clean up request
            request = null;
          });
        }

        if (requestData === undefined) {
          requestData = null;
        }

        // Send the request
        request.send(requestData);
      });
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/axios.js":
    /*!*****************************************!*\
      !*** ./node_modules/axios/lib/axios.js ***!
      \*****************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
    var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
    var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
    var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
    var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

    /**
     * Create an instance of Axios
     *
     * @param {Object} defaultConfig The default config for the instance
     * @return {Axios} A new instance of Axios
     */
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);

      // Copy axios.prototype to instance
      utils.extend(instance, Axios.prototype, context);

      // Copy context to instance
      utils.extend(instance, context);

      return instance;
    }

    // Create the default instance to be exported
    var axios = createInstance(defaults);

    // Expose Axios class to allow class inheritance
    axios.Axios = Axios;

    // Factory for creating new instances
    axios.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios.defaults, instanceConfig));
    };

    // Expose Cancel & CancelToken
    axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
    axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
    axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

    // Expose all/spread
    axios.all = function all(promises) {
      return Promise.all(promises);
    };
    axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

    module.exports = axios;

    // Allow use of default import syntax in TypeScript
    module.exports.default = axios;


    /***/ }),

    /***/ "./node_modules/axios/lib/cancel/Cancel.js":
    /*!*************************************************!*\
      !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
      \*************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    /**
     * A `Cancel` is an object that is thrown when an operation is canceled.
     *
     * @class
     * @param {string=} message The message.
     */
    function Cancel(message) {
      this.message = message;
    }

    Cancel.prototype.toString = function toString() {
      return 'Cancel' + (this.message ? ': ' + this.message : '');
    };

    Cancel.prototype.__CANCEL__ = true;

    module.exports = Cancel;


    /***/ }),

    /***/ "./node_modules/axios/lib/cancel/CancelToken.js":
    /*!******************************************************!*\
      !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

    /**
     * A `CancelToken` is an object that can be used to request cancellation of an operation.
     *
     * @class
     * @param {Function} executor The executor function.
     */
    function CancelToken(executor) {
      if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
      }

      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });

      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          // Cancellation has already been requested
          return;
        }

        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }

    /**
     * Throws a `Cancel` if cancellation has been requested.
     */
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };

    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token,
        cancel: cancel
      };
    };

    module.exports = CancelToken;


    /***/ }),

    /***/ "./node_modules/axios/lib/cancel/isCancel.js":
    /*!***************************************************!*\
      !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
      \***************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/core/Axios.js":
    /*!**********************************************!*\
      !*** ./node_modules/axios/lib/core/Axios.js ***!
      \**********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
    var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
    var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
    var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
    var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

    /**
     * Create a new instance of Axios
     *
     * @param {Object} instanceConfig The default config for the instance
     */
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }

    /**
     * Dispatch a request
     *
     * @param {Object} config The config specific for this request (merged with this.defaults)
     */
    Axios.prototype.request = function request(config) {
      /*eslint no-param-reassign:0*/
      // Allow for axios('example/url'[, config]) a la fetch API
      if (typeof config === 'string') {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else {
        config = config || {};
      }

      config = mergeConfig(this.defaults, config);

      // Set config.method
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = 'get';
      }

      // Hook up interceptors middleware
      var chain = [dispatchRequest, undefined];
      var promise = Promise.resolve(config);

      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });

      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });

      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }

      return promise;
    };

    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
    };

    // Provide aliases for supported request methods
    utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function(url, config) {
        return this.request(utils.merge(config || {}, {
          method: method,
          url: url
        }));
      };
    });

    utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      /*eslint func-names:0*/
      Axios.prototype[method] = function(url, data, config) {
        return this.request(utils.merge(config || {}, {
          method: method,
          url: url,
          data: data
        }));
      };
    });

    module.exports = Axios;


    /***/ }),

    /***/ "./node_modules/axios/lib/core/InterceptorManager.js":
    /*!***********************************************************!*\
      !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

    function InterceptorManager() {
      this.handlers = [];
    }

    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    InterceptorManager.prototype.use = function use(fulfilled, rejected) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected
      });
      return this.handlers.length - 1;
    };

    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     */
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };

    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     */
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };

    module.exports = InterceptorManager;


    /***/ }),

    /***/ "./node_modules/axios/lib/core/buildFullPath.js":
    /*!******************************************************!*\
      !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
    var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

    /**
     * Creates a new URL by combining the baseURL with the requestedURL,
     * only when the requestedURL is not already an absolute URL.
     * If the requestURL is absolute, this function returns the requestedURL untouched.
     *
     * @param {string} baseURL The base URL
     * @param {string} requestedURL Absolute or relative URL to combine
     * @returns {string} The combined full path
     */
    module.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/core/createError.js":
    /*!****************************************************!*\
      !*** ./node_modules/axios/lib/core/createError.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     * @returns {Error} The created error.
     */
    module.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/core/dispatchRequest.js":
    /*!********************************************************!*\
      !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
    var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
    var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
    var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

    /**
     * Throws a `Cancel` if cancellation has been requested.
     */
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
    }

    /**
     * Dispatch a request to the server using the configured adapter.
     *
     * @param {object} config The config that is to be used for the request
     * @returns {Promise} The Promise to be fulfilled
     */
    module.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);

      // Ensure headers exist
      config.headers = config.headers || {};

      // Transform request data
      config.data = transformData(
        config.data,
        config.headers,
        config.transformRequest
      );

      // Flatten headers
      config.headers = utils.merge(
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers
      );

      utils.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );

      var adapter = config.adapter || defaults.adapter;

      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);

        // Transform response data
        response.data = transformData(
          response.data,
          response.headers,
          config.transformResponse
        );

        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);

          // Transform response data
          if (reason && reason.response) {
            reason.response.data = transformData(
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }

        return Promise.reject(reason);
      });
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/core/enhanceError.js":
    /*!*****************************************************!*\
      !*** ./node_modules/axios/lib/core/enhanceError.js ***!
      \*****************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    /**
     * Update an Error with the specified config, error code, and response.
     *
     * @param {Error} error The error to update.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     * @returns {Error} The error.
     */
    module.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }

      error.request = request;
      error.response = response;
      error.isAxiosError = true;

      error.toJSON = function() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: this.config,
          code: this.code
        };
      };
      return error;
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/core/mergeConfig.js":
    /*!****************************************************!*\
      !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

    /**
     * Config-specific merge-function which creates a new config-object
     * by merging two configuration objects together.
     *
     * @param {Object} config1
     * @param {Object} config2
     * @returns {Object} New object resulting from merging config2 to config1
     */
    module.exports = function mergeConfig(config1, config2) {
      // eslint-disable-next-line no-param-reassign
      config2 = config2 || {};
      var config = {};

      var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
      var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
      var defaultToConfig2Keys = [
        'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
        'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
        'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
        'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
        'httpsAgent', 'cancelToken', 'socketPath'
      ];

      utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (typeof config2[prop] !== 'undefined') {
          config[prop] = config2[prop];
        }
      });

      utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
        if (utils.isObject(config2[prop])) {
          config[prop] = utils.deepMerge(config1[prop], config2[prop]);
        } else if (typeof config2[prop] !== 'undefined') {
          config[prop] = config2[prop];
        } else if (utils.isObject(config1[prop])) {
          config[prop] = utils.deepMerge(config1[prop]);
        } else if (typeof config1[prop] !== 'undefined') {
          config[prop] = config1[prop];
        }
      });

      utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (typeof config2[prop] !== 'undefined') {
          config[prop] = config2[prop];
        } else if (typeof config1[prop] !== 'undefined') {
          config[prop] = config1[prop];
        }
      });

      var axiosKeys = valueFromConfig2Keys
        .concat(mergeDeepPropertiesKeys)
        .concat(defaultToConfig2Keys);

      var otherKeys = Object
        .keys(config2)
        .filter(function filterAxiosKeys(key) {
          return axiosKeys.indexOf(key) === -1;
        });

      utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
        if (typeof config2[prop] !== 'undefined') {
          config[prop] = config2[prop];
        } else if (typeof config1[prop] !== 'undefined') {
          config[prop] = config1[prop];
        }
      });

      return config;
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/core/settle.js":
    /*!***********************************************!*\
      !*** ./node_modules/axios/lib/core/settle.js ***!
      \***********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

    /**
     * Resolve or reject a Promise based on response status.
     *
     * @param {Function} resolve A function that resolves the promise.
     * @param {Function} reject A function that rejects the promise.
     * @param {object} response The response.
     */
    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError(
          'Request failed with status code ' + response.status,
          response.config,
          null,
          response.request,
          response
        ));
      }
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/core/transformData.js":
    /*!******************************************************!*\
      !*** ./node_modules/axios/lib/core/transformData.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

    /**
     * Transform the data for a request or a response
     *
     * @param {Object|String} data The data to be transformed
     * @param {Array} headers The headers for the request or response
     * @param {Array|Function} fns A single function or Array of functions
     * @returns {*} The resulting transformed data
     */
    module.exports = function transformData(data, headers, fns) {
      /*eslint no-param-reassign:0*/
      utils.forEach(fns, function transform(fn) {
        data = fn(data, headers);
      });

      return data;
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/defaults.js":
    /*!********************************************!*\
      !*** ./node_modules/axios/lib/defaults.js ***!
      \********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */(function(process) {

    var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
    var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

    var DEFAULT_CONTENT_TYPE = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
      }
    }

    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
      } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
        // For node use HTTP adapter
        adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
      }
      return adapter;
    }

    var defaults = {
      adapter: getDefaultAdapter(),

      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, 'Accept');
        normalizeHeaderName(headers, 'Content-Type');
        if (utils.isFormData(data) ||
          utils.isArrayBuffer(data) ||
          utils.isBuffer(data) ||
          utils.isStream(data) ||
          utils.isFile(data) ||
          utils.isBlob(data)
        ) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
          return data.toString();
        }
        if (utils.isObject(data)) {
          setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
          return JSON.stringify(data);
        }
        return data;
      }],

      transformResponse: [function transformResponse(data) {
        /*eslint no-param-reassign:0*/
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) { /* Ignore */ }
        }
        return data;
      }],

      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,

      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',

      maxContentLength: -1,

      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      }
    };

    defaults.headers = {
      common: {
        'Accept': 'application/json, text/plain, */*'
      }
    };

    utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });

    utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });

    module.exports = defaults;

    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

    /***/ }),

    /***/ "./node_modules/axios/lib/helpers/bind.js":
    /*!************************************************!*\
      !*** ./node_modules/axios/lib/helpers/bind.js ***!
      \************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/helpers/buildURL.js":
    /*!****************************************************!*\
      !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
      \****************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

    function encode(val) {
      return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
    }

    /**
     * Build a URL by appending params to the end
     *
     * @param {string} url The base of the url (e.g., http://www.google.com)
     * @param {object} [params] The params to be appended
     * @returns {string} The formatted url
     */
    module.exports = function buildURL(url, params, paramsSerializer) {
      /*eslint no-param-reassign:0*/
      if (!params) {
        return url;
      }

      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];

        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === 'undefined') {
            return;
          }

          if (utils.isArray(val)) {
            key = key + '[]';
          } else {
            val = [val];
          }

          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + '=' + encode(v));
          });
        });

        serializedParams = parts.join('&');
      }

      if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }

        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
      }

      return url;
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/helpers/combineURLs.js":
    /*!*******************************************************!*\
      !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
      \*******************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    /**
     * Creates a new URL by combining the specified URLs
     *
     * @param {string} baseURL The base URL
     * @param {string} relativeURL The relative URL
     * @returns {string} The combined URL
     */
    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/helpers/cookies.js":
    /*!***************************************************!*\
      !*** ./node_modules/axios/lib/helpers/cookies.js ***!
      \***************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

    module.exports = (
      utils.isStandardBrowserEnv() ?

      // Standard browser envs support document.cookie
        (function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              var cookie = [];
              cookie.push(name + '=' + encodeURIComponent(value));

              if (utils.isNumber(expires)) {
                cookie.push('expires=' + new Date(expires).toGMTString());
              }

              if (utils.isString(path)) {
                cookie.push('path=' + path);
              }

              if (utils.isString(domain)) {
                cookie.push('domain=' + domain);
              }

              if (secure === true) {
                cookie.push('secure');
              }

              document.cookie = cookie.join('; ');
            },

            read: function read(name) {
              var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
              return (match ? decodeURIComponent(match[3]) : null);
            },

            remove: function remove(name) {
              this.write(name, '', Date.now() - 86400000);
            }
          };
        })() :

      // Non standard browser env (web workers, react-native) lack needed support.
        (function nonStandardBrowserEnv() {
          return {
            write: function write() {},
            read: function read() { return null; },
            remove: function remove() {}
          };
        })()
    );


    /***/ }),

    /***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
    /*!*********************************************************!*\
      !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
      \*********************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    /**
     * Determines whether the specified URL is absolute
     *
     * @param {string} url The URL to test
     * @returns {boolean} True if the specified URL is absolute, otherwise false
     */
    module.exports = function isAbsoluteURL(url) {
      // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
      // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
      // by any combination of letters, digits, plus, period, or hyphen.
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
    /*!***********************************************************!*\
      !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

    module.exports = (
      utils.isStandardBrowserEnv() ?

      // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
        (function standardBrowserEnv() {
          var msie = /(msie|trident)/i.test(navigator.userAgent);
          var urlParsingNode = document.createElement('a');
          var originURL;

          /**
        * Parse a URL to discover it's components
        *
        * @param {String} url The URL to be parsed
        * @returns {Object}
        */
          function resolveURL(url) {
            var href = url;

            if (msie) {
            // IE needs attribute set twice to normalize properties
              urlParsingNode.setAttribute('href', href);
              href = urlParsingNode.href;
            }

            urlParsingNode.setAttribute('href', href);

            // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                urlParsingNode.pathname :
                '/' + urlParsingNode.pathname
            };
          }

          originURL = resolveURL(window.location.href);

          /**
        * Determine if a URL shares the same origin as the current location
        *
        * @param {String} requestURL The URL to test
        * @returns {boolean} True if URL shares the same origin, otherwise false
        */
          return function isURLSameOrigin(requestURL) {
            var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
            return (parsed.protocol === originURL.protocol &&
                parsed.host === originURL.host);
          };
        })() :

      // Non standard browser envs (web workers, react-native) lack needed support.
        (function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true;
          };
        })()
    );


    /***/ }),

    /***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
    /*!***************************************************************!*\
      !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
      \***************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
    /*!********************************************************!*\
      !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

    // Headers whose duplicates are ignored by node
    // c.f. https://nodejs.org/api/http.html#http_message_headers
    var ignoreDuplicateOf = [
      'age', 'authorization', 'content-length', 'content-type', 'etag',
      'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
      'last-modified', 'location', 'max-forwards', 'proxy-authorization',
      'referer', 'retry-after', 'user-agent'
    ];

    /**
     * Parse headers into an object
     *
     * ```
     * Date: Wed, 27 Aug 2014 08:58:49 GMT
     * Content-Type: application/json
     * Connection: keep-alive
     * Transfer-Encoding: chunked
     * ```
     *
     * @param {String} headers Headers needing to be parsed
     * @returns {Object} Headers parsed into an object
     */
    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;

      if (!headers) { return parsed; }

      utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));

        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === 'set-cookie') {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
          }
        }
      });

      return parsed;
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/helpers/spread.js":
    /*!**************************************************!*\
      !*** ./node_modules/axios/lib/helpers/spread.js ***!
      \**************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    /**
     * Syntactic sugar for invoking a function and expanding an array for arguments.
     *
     * Common use case would be to use `Function.prototype.apply`.
     *
     *  ```js
     *  function f(x, y, z) {}
     *  var args = [1, 2, 3];
     *  f.apply(null, args);
     *  ```
     *
     * With `spread` this example can be re-written.
     *
     *  ```js
     *  spread(function(x, y, z) {})([1, 2, 3]);
     *  ```
     *
     * @param {Function} callback
     * @returns {Function}
     */
    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };


    /***/ }),

    /***/ "./node_modules/axios/lib/utils.js":
    /*!*****************************************!*\
      !*** ./node_modules/axios/lib/utils.js ***!
      \*****************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

    /*global toString:true*/

    // utils is a library of generic helper functions non-specific to axios

    var toString = Object.prototype.toString;

    /**
     * Determine if a value is an Array
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Array, otherwise false
     */
    function isArray(val) {
      return toString.call(val) === '[object Array]';
    }

    /**
     * Determine if a value is undefined
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if the value is undefined, otherwise false
     */
    function isUndefined(val) {
      return typeof val === 'undefined';
    }

    /**
     * Determine if a value is a Buffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Buffer, otherwise false
     */
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
        && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
    }

    /**
     * Determine if a value is an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an ArrayBuffer, otherwise false
     */
    function isArrayBuffer(val) {
      return toString.call(val) === '[object ArrayBuffer]';
    }

    /**
     * Determine if a value is a FormData
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an FormData, otherwise false
     */
    function isFormData(val) {
      return (typeof FormData !== 'undefined') && (val instanceof FormData);
    }

    /**
     * Determine if a value is a view on an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
     */
    function isArrayBufferView(val) {
      var result;
      if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
      } else {
        result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
      }
      return result;
    }

    /**
     * Determine if a value is a String
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a String, otherwise false
     */
    function isString(val) {
      return typeof val === 'string';
    }

    /**
     * Determine if a value is a Number
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Number, otherwise false
     */
    function isNumber(val) {
      return typeof val === 'number';
    }

    /**
     * Determine if a value is an Object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Object, otherwise false
     */
    function isObject(val) {
      return val !== null && typeof val === 'object';
    }

    /**
     * Determine if a value is a Date
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Date, otherwise false
     */
    function isDate(val) {
      return toString.call(val) === '[object Date]';
    }

    /**
     * Determine if a value is a File
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a File, otherwise false
     */
    function isFile(val) {
      return toString.call(val) === '[object File]';
    }

    /**
     * Determine if a value is a Blob
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Blob, otherwise false
     */
    function isBlob(val) {
      return toString.call(val) === '[object Blob]';
    }

    /**
     * Determine if a value is a Function
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Function, otherwise false
     */
    function isFunction(val) {
      return toString.call(val) === '[object Function]';
    }

    /**
     * Determine if a value is a Stream
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Stream, otherwise false
     */
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }

    /**
     * Determine if a value is a URLSearchParams object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a URLSearchParams object, otherwise false
     */
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
    }

    /**
     * Trim excess whitespace off the beginning and end of a string
     *
     * @param {String} str The String to trim
     * @returns {String} The String freed of excess whitespace
     */
    function trim(str) {
      return str.replace(/^\s*/, '').replace(/\s*$/, '');
    }

    /**
     * Determine if we're running in a standard browser environment
     *
     * This allows axios to run in a web worker, and react-native.
     * Both environments support XMLHttpRequest, but not fully standard globals.
     *
     * web workers:
     *  typeof window -> undefined
     *  typeof document -> undefined
     *
     * react-native:
     *  navigator.product -> 'ReactNative'
     * nativescript
     *  navigator.product -> 'NativeScript' or 'NS'
     */
    function isStandardBrowserEnv() {
      if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                               navigator.product === 'NativeScript' ||
                                               navigator.product === 'NS')) {
        return false;
      }
      return (
        typeof window !== 'undefined' &&
        typeof document !== 'undefined'
      );
    }

    /**
     * Iterate over an Array or an Object invoking a function for each item.
     *
     * If `obj` is an Array callback will be called passing
     * the value, index, and complete array for each item.
     *
     * If 'obj' is an Object callback will be called passing
     * the value, key, and complete object for each property.
     *
     * @param {Object|Array} obj The object to iterate
     * @param {Function} fn The callback to invoke for each item
     */
    function forEach(obj, fn) {
      // Don't bother if no value provided
      if (obj === null || typeof obj === 'undefined') {
        return;
      }

      // Force an array if not already something iterable
      if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
      }

      if (isArray(obj)) {
        // Iterate over array values
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        // Iterate over object keys
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }

    /**
     * Accepts varargs expecting each argument to be an object, then
     * immutably merges the properties of each object and returns result.
     *
     * When multiple objects contain the same key the later object in
     * the arguments list will take precedence.
     *
     * Example:
     *
     * ```js
     * var result = merge({foo: 123}, {foo: 456});
     * console.log(result.foo); // outputs 456
     * ```
     *
     * @param {Object} obj1 Object to merge
     * @returns {Object} Result of all merge properties
     */
    function merge(/* obj1, obj2, obj3, ... */) {
      var result = {};
      function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
          result[key] = merge(result[key], val);
        } else {
          result[key] = val;
        }
      }

      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }

    /**
     * Function equal to merge with the difference being that no reference
     * to original objects is kept.
     *
     * @see merge
     * @param {Object} obj1 Object to merge
     * @returns {Object} Result of all merge properties
     */
    function deepMerge(/* obj1, obj2, obj3, ... */) {
      var result = {};
      function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
          result[key] = deepMerge(result[key], val);
        } else if (typeof val === 'object') {
          result[key] = deepMerge({}, val);
        } else {
          result[key] = val;
        }
      }

      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }

    /**
     * Extends object a by mutably adding to it the properties of object b.
     *
     * @param {Object} a The object to be extended
     * @param {Object} b The object to copy properties from
     * @param {Object} thisArg The object to bind function to
     * @return {Object} The resulting value of object a
     */
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }

    module.exports = {
      isArray: isArray,
      isArrayBuffer: isArrayBuffer,
      isBuffer: isBuffer,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      isString: isString,
      isNumber: isNumber,
      isObject: isObject,
      isUndefined: isUndefined,
      isDate: isDate,
      isFile: isFile,
      isBlob: isBlob,
      isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams,
      isStandardBrowserEnv: isStandardBrowserEnv,
      forEach: forEach,
      merge: merge,
      deepMerge: deepMerge,
      extend: extend,
      trim: trim
    };


    /***/ }),

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BoxDetail.vue?vue&type=script&lang=js&":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/BoxDetail.vue?vue&type=script&lang=js& ***!
      \***************************************************************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
    /* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal.js */ "./resources/js/modal.js");
    /* harmony import */ var _modals_Rule_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/Rule.vue */ "./resources/js/pages/modals/Rule.vue");



    /* harmony default export */ __webpack_exports__["default"] = ({
      components: {
        Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__["Link"],
        rule: _modals_Rule_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
      },
      props: {
        data: {
          type: Object,
          required: true
        }
      },
      computed: {
        itemTag: function itemTag(tag) {
          switch (tag) {
            case 'supreme':
              return '/image/ui/First.svg';
            case 'rare':
              return '/image/ui/Second.svg';
            case 'normal':
              return '/image/ui/Third.svg';
          }
        }
      },
      mounted: function mounted() {
        Object(_modal_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      }
    });

    /***/ }),

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
      \**********************************************************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _layouts_Main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/Main.vue */ "./resources/js/pages/layouts/Main.vue");
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
    /* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__);
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



    /* harmony default export */ __webpack_exports__["default"] = ({
      components: {
        mainLayout: _layouts_Main_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
        Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__["Link"]
      },
      data: function data() {
        return {
          page: 1,
          lastPage: 1,
          boxes: []
        };
      },
      methods: {
        fetchData: function fetchData() {
          var _this = this;
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("?page=".concat(this.page)).then(function (res) {
            var _this$boxes;
            (_this$boxes = _this.boxes).push.apply(_this$boxes, _toConsumableArray(res.data.data));
            _this.lastPage = res.data.pagination.total_pages;
            _this.page++;
          });
        }
      },
      beforeMount: function beforeMount() {
        this.fetchData();
      },
      mounted: function mounted() {
        var _this2 = this;
        window.onscroll = function () {
          var isEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;
          if (isEnd && _this2.page <= _this2.lastPage) {
            _this2.fetchData();
          }
        };
      }
    });

    /***/ }),

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/Footer.vue?vue&type=script&lang=js&":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/Footer.vue?vue&type=script&lang=js& ***!
      \********************************************************************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */ __webpack_exports__["default"] = ({});

    /***/ }),

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/Header.vue?vue&type=script&lang=js&":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/Header.vue?vue&type=script&lang=js& ***!
      \********************************************************************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */ __webpack_exports__["default"] = ({});

    /***/ }),

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/Main.vue?vue&type=script&lang=js&":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/Main.vue?vue&type=script&lang=js& ***!
      \******************************************************************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue */ "./resources/js/pages/layouts/Header.vue");
    /* harmony import */ var _Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue */ "./resources/js/pages/layouts/Footer.vue");


    /* harmony default export */ __webpack_exports__["default"] = ({
      components: {
        top: _Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
        bot: _Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
      }
    });

    /***/ }),

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BoxDetail.vue?vue&type=template&id=de368e7a&":
    /*!*************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/BoxDetail.vue?vue&type=template&id=de368e7a& ***!
      \*************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
    var render = function render() {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail h-auto py-4"
      }, [_vm._m(0), _vm._v(" "), _c("div", {
        staticClass: "box_detail_title text-center pt-2"
      }, [_vm._v("\n        Magic BlindBox\n    ")]), _vm._v(" "), _c("div", {
        staticClass: "blind_box_underline my-1 w-56 mx-auto"
      }), _vm._v(" "), _c("div", {
        staticClass: "box_wish text-center py-2 px-4"
      }, [_vm._v("Save the wish value and redeem the happy wish prize")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
        staticClass: "flex justify-around -mt-32"
      }, [_c("div", {
        staticClass: "relative"
      }, [_c("Link", {
        attrs: {
          href: "",
          as: "button"
        }
      }, [_c("img", {
        attrs: {
          src: "/image/ui/GetOneButton.svg"
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "absolute top-6 right-10 font-semibold"
      }, [_vm._v("Get One")]), _vm._v(" "), _c("div", {
        staticClass: "absolute top-10 right-14"
      }, [_vm._v("$ " + _vm._s(_vm.data.data.price))])])], 1), _vm._v(" "), _c("div", {
        staticClass: "relative"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/GetAllButton.svg"
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "absolute top-6 right-14 font-semibold"
      }, [_vm._v("Get Five")]), _vm._v(" "), _c("div", {
        staticClass: "absolute top-10 right-16"
      }, [_vm._v("$ " + _vm._s(_vm.data.data.price * 5))])])]), _vm._v(" "), _c("div", {
        staticClass: "px-2 py-1 detail_itembox mx-4"
      }, [_c("div", {
        staticClass: "flex justify-between pt-2 px-3"
      }, [_c("div", {
        staticClass: "font-semibold text-lg"
      }, [_vm._v("Product Preview")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("rule")], 1), _vm._v(" "), _vm._l(_vm.data.data.items, function (item, i) {
        return _c("div", {
          key: i,
          staticClass: "flex flex-wrap flex-row my-2 mx-1"
        }, [_c("div", {
          staticClass: "box_detail_item_card"
        }, [_vm._m(3, true), _vm._v(" "), _vm._m(4, true), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card_footer text-center"
        }, [_c("div", {
          staticClass: "truncate px-2"
        }, [_vm._v("12312312")]), _vm._v(" "), _c("div", [_vm._v("(" + _vm._s(item.price) + ")")])])]), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card"
        }, [_vm._m(5, true), _vm._v(" "), _vm._m(6, true), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card_footer text-center"
        }, [_c("div", {
          staticClass: "truncate px-2"
        }, [_vm._v("1231231212312312")]), _vm._v(" "), _c("div", [_vm._v("(" + _vm._s(item.price) + ")")])])]), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card"
        }, [_vm._m(7, true), _vm._v(" "), _vm._m(8, true), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card_footer text-center"
        }, [_c("div", {
          staticClass: "truncate px-2"
        }, [_vm._v("12312312")]), _vm._v(" "), _c("div", [_vm._v("(" + _vm._s(item.price) + ")")])])]), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card"
        }, [_vm._m(9, true), _vm._v(" "), _vm._m(10, true), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card_footer text-center"
        }, [_c("div", {
          staticClass: "truncate px-2"
        }, [_vm._v("1231231212312312")]), _vm._v(" "), _c("div", [_vm._v("(" + _vm._s(item.price) + ")")])])]), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card"
        }, [_vm._m(11, true), _vm._v(" "), _vm._m(12, true), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card_footer text-center"
        }, [_c("div", {
          staticClass: "truncate px-2"
        }, [_vm._v("12312312")]), _vm._v(" "), _c("div", [_vm._v("(" + _vm._s(item.price) + ")")])])]), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card"
        }, [_vm._m(13, true), _vm._v(" "), _vm._m(14, true), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card_footer text-center"
        }, [_c("div", {
          staticClass: "truncate px-2"
        }, [_vm._v("12312312")]), _vm._v(" "), _c("div", [_vm._v("(" + _vm._s(item.price) + ")")])])]), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card"
        }, [_vm._m(15, true), _vm._v(" "), _vm._m(16, true), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card_footer text-center"
        }, [_c("div", {
          staticClass: "truncate px-2"
        }, [_vm._v("12312312")]), _vm._v(" "), _c("div", [_vm._v("(" + _vm._s(item.price) + ")")])])]), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card"
        }, [_vm._m(17, true), _vm._v(" "), _vm._m(18, true), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card_footer text-center"
        }, [_c("div", {
          staticClass: "truncate px-2"
        }, [_vm._v("12312312")]), _vm._v(" "), _c("div", [_vm._v("(" + _vm._s(item.price) + ")")])])]), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card"
        }, [_vm._m(19, true), _vm._v(" "), _vm._m(20, true), _vm._v(" "), _c("div", {
          staticClass: "box_detail_item_card_footer text-center"
        }, [_c("div", {
          staticClass: "truncate px-2"
        }, [_vm._v("12312312")]), _vm._v(" "), _c("div", [_vm._v("(" + _vm._s(item.price) + ")")])])])]);
      })], 2)]);
    };
    var staticRenderFns = [function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "flex justify-content-between pb-1"
      }, [_c("div", {
        staticClass: "back self-center px-4"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/Back.svg"
        }
      })]), _vm._v(" "), _c("div", {
        staticClass: "flex flex-row box_detail_target"
      }, [_c("div", {
        staticClass: "self-center"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/Icon.svg"
        }
      })]), _vm._v(" "), _c("div", {
        staticClass: "py-1 px-2 box_detail_target_label"
      }, [_vm._v("\n                Lucky Draw\n            ")])]), _vm._v(" "), _c("div")]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "-mt-32 flex justify-around"
      }, [_c("div"), _vm._v(" "), _c("div", [_c("img", {
        attrs: {
          src: "/image/ui/Box.svg"
        }
      })]), _vm._v(" "), _c("div")]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "flex flex-row items-center trigger cursor-pointer"
      }, [_c("div", {
        staticClass: "px-1"
      }, [_vm._v("Rules of Play")]), _vm._v(" "), _c("div", [_c("img", {
        attrs: {
          src: "/image/ui/Info.svg"
        }
      })])]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_header"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/supreme.svg",
          alt: ""
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "item_precent"
      }, [_vm._v("0.1 %")])]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_body"
      }, [_c("img", {
        staticClass: "m-auto",
        attrs: {
          src: "/image/ui/IPhone-13.png",
          width: "65",
          height: "65"
        }
      })]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_header"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/supreme.svg",
          alt: ""
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "item_precent"
      }, [_vm._v("0.1 %")])]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_body"
      }, [_c("img", {
        staticClass: "m-auto",
        attrs: {
          src: "/image/ui/IPhone-13.png",
          width: "65",
          height: "65"
        }
      })]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_header"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/supreme.svg",
          alt: ""
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "item_precent"
      }, [_vm._v("0.1 %")])]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_body"
      }, [_c("img", {
        staticClass: "m-auto",
        attrs: {
          src: "/image/ui/IPhone-13.png",
          width: "65",
          height: "65"
        }
      })]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_header"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/supreme.svg",
          alt: ""
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "item_precent"
      }, [_vm._v("0.1 %")])]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_body"
      }, [_c("img", {
        staticClass: "m-auto",
        attrs: {
          src: "/image/ui/IPhone-13.png",
          width: "65",
          height: "65"
        }
      })]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_header"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/supreme.svg",
          alt: ""
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "item_precent"
      }, [_vm._v("0.1 %")])]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_body"
      }, [_c("img", {
        staticClass: "m-auto",
        attrs: {
          src: "/image/ui/IPhone-13.png",
          width: "65",
          height: "65"
        }
      })]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_header"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/supreme.svg",
          alt: ""
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "item_precent"
      }, [_vm._v("0.1 %")])]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_body"
      }, [_c("img", {
        staticClass: "m-auto",
        attrs: {
          src: "/image/ui/IPhone-13.png",
          width: "65",
          height: "65"
        }
      })]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_header"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/supreme.svg",
          alt: ""
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "item_precent"
      }, [_vm._v("0.1 %")])]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_body"
      }, [_c("img", {
        staticClass: "m-auto",
        attrs: {
          src: "/image/ui/IPhone-13.png",
          width: "65",
          height: "65"
        }
      })]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_header"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/supreme.svg",
          alt: ""
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "item_precent"
      }, [_vm._v("0.1 %")])]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_body"
      }, [_c("img", {
        staticClass: "m-auto",
        attrs: {
          src: "/image/ui/IPhone-13.png",
          width: "65",
          height: "65"
        }
      })]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_header"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/supreme.svg",
          alt: ""
        }
      }), _vm._v(" "), _c("div", {
        staticClass: "item_precent"
      }, [_vm._v("0.1 %")])]);
    }, function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "box_detail_item_card_body"
      }, [_c("img", {
        staticClass: "m-auto",
        attrs: {
          src: "/image/ui/IPhone-13.png",
          width: "65",
          height: "65"
        }
      })]);
    }];
    render._withStripped = true;


    /***/ }),

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
    /*!********************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
      \********************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
    var render = function render() {
      var _vm = this,
        _c = _vm._self._c;
      return _c("main-layout", [_c("div", [_c("div", {
        staticClass: "font-bold text-sm"
      }, [_vm._v("All")]), _vm._v(" "), _c("div", {
        staticClass: "flex flex-wrap justify-around"
      }, _vm._l(_vm.boxes, function (box, i) {
        return _c("Link", {
          key: i,
          staticClass: "w-96 rounded-xl shadow-sm my-2",
          attrs: {
            href: "/box/" + box.id,
            as: "button"
          }
        }, [_c("div", {
          staticClass: "flex justify-between py-2 bg-gradient-to-r from-blue-100 to-purple-100 px-3 rounded-t-xl"
        }, [_c("div", [_vm._v(_vm._s(box.name) + " " + _vm._s(box.id))]), _vm._v(" "), _c("div", {
          staticClass: "self-end text-yellow-500"
        }, [_c("span", {
          staticClass: "font-bold"
        }, [_vm._v(_vm._s(box.price))]), _c("span", {
          staticClass: "text-xs"
        }, [_vm._v(" coins/draw")])])]), _vm._v(" "), _c("div", {
          staticClass: "px-3"
        }, _vm._l(box.items, function (item, j) {
          return _c("div", {
            key: j,
            staticClass: "inline-block pr-1 py-3"
          }, [_c("img", {
            attrs: {
              src: item.image,
              width: "50",
              height: "50"
            }
          })]);
        }), 0), _vm._v(" "), _c("div", {
          staticClass: "flex justify-between py-2 px-3"
        }, [_c("div", {
          staticClass: "text-xs text-gray-400"
        }, [_vm._v("A total of products")]), _vm._v(" "), _c("div")])]);
      }), 1)])]);
    };
    var staticRenderFns = [];
    render._withStripped = true;


    /***/ }),

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/Footer.vue?vue&type=template&id=811a6dac&":
    /*!******************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/Footer.vue?vue&type=template&id=811a6dac& ***!
      \******************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
    var render = function render() {
      var _vm = this,
        _c = _vm._self._c;
      return _vm._m(0);
    };
    var staticRenderFns = [function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "grid grid-cols-4 fixed w-full bg-white bottom-0"
      }, [_c("div", {
        staticClass: "text-lg p-3 text-center cursor-pointer"
      }, [_c("i", {
        staticClass: "fas fa-home"
      })]), _vm._v(" "), _c("div", {
        staticClass: "text-lg p-3 text-center cursor-pointer"
      }, [_c("i", {
        staticClass: "fas fa-recycle"
      })]), _vm._v(" "), _c("div", {
        staticClass: "text-lg p-3 text-center cursor-pointer"
      }, [_c("i", {
        staticClass: "fas fa-print"
      })]), _vm._v(" "), _c("div", {
        staticClass: "text-lg p-3 text-center cursor-pointer"
      }, [_c("i", {
        staticClass: "fas fa-user"
      })])]);
    }];
    render._withStripped = true;


    /***/ }),

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/Header.vue?vue&type=template&id=3eb5a5c8&":
    /*!******************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/Header.vue?vue&type=template&id=3eb5a5c8& ***!
      \******************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
    var render = function render() {
      var _vm = this,
        _c = _vm._self._c;
      return _vm._m(0);
    };
    var staticRenderFns = [function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "flex justify-between px-3 py-2 fixed w-full bg-white"
      }, [_c("div", {
        staticClass: "self-center text-lg"
      }, [_c("i", {
        staticClass: "fas fa-home"
      })]), _vm._v(" "), _c("div", {
        staticClass: "text-lg font-bold"
      }, [_vm._v("\n        Blind Box\n    ")]), _vm._v(" "), _c("div", {
        staticClass: "self-center text-lg"
      }, [_c("i", {
        staticClass: "fas fa-volume-up"
      })])]);
    }];
    render._withStripped = true;


    /***/ }),

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/Main.vue?vue&type=template&id=621b0c08&":
    /*!****************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/Main.vue?vue&type=template&id=621b0c08& ***!
      \****************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
    var render = function render() {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "h-screen bg-gray-50"
      }, [_c("header", [_c("top")], 1), _vm._v(" "), _c("main", {
        staticClass: "py-14 px-3"
      }, [_vm._t("default")], 2), _vm._v(" "), _c("footer", [_c("bot")], 1)]);
    };
    var staticRenderFns = [];
    render._withStripped = true;


    /***/ }),

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/modals/Congratz.vue?vue&type=template&id=b91e532c&":
    /*!*******************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/modals/Congratz.vue?vue&type=template&id=b91e532c& ***!
      \*******************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
    var render = function render() {
      var _vm = this,
        _c = _vm._self._c;
      return _vm._m(0);
    };
    var staticRenderFns = [function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "boxModal"
      }, [_c("div", {
        staticClass: "boxModal-content"
      }, [_c("span", {
        staticClass: "close-button"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/Cross.svg"
        }
      })]), _vm._v(" "), _c("div", [_vm._v("Hello,123")])])]);
    }];
    render._withStripped = true;


    /***/ }),

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/modals/Rule.vue?vue&type=template&id=578b66cc&":
    /*!***************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/modals/Rule.vue?vue&type=template&id=578b66cc& ***!
      \***************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
    var render = function render() {
      var _vm = this,
        _c = _vm._self._c;
      return _vm._m(0);
    };
    var staticRenderFns = [function () {
      var _vm = this,
        _c = _vm._self._c;
      return _c("div", {
        staticClass: "boxModal"
      }, [_c("div", {
        staticClass: "boxModal-content"
      }, [_c("span", {
        staticClass: "close-button"
      }, [_c("img", {
        attrs: {
          src: "/image/ui/Cross.svg"
        }
      })]), _vm._v(" "), _c("div", {
        staticClass: "overflow-auto max-h-96"
      }, [_c("div", [_vm._v("Hello,123")]), _vm._v(" "), _c("div", [_vm._v("Save the wish value and redeem the happy wish prizeSave the wish value and redeem the happy wish prizeSave the wish value and redeem the happy wish prizeSave the wish value and redeem the happy wish prizeSave the wish value and redeem the happy wish prizeSave the wish value and redeem the happy wish prizeSave the wish value and redeem the happy wish prize")])])])]);
    }];
    render._withStripped = true;


    /***/ }),

    /***/ "./node_modules/call-bind/callBound.js":
    /*!*********************************************!*\
      !*** ./node_modules/call-bind/callBound.js ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

    var callBind = __webpack_require__(/*! ./ */ "./node_modules/call-bind/index.js");

    var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

    module.exports = function callBoundIntrinsic(name, allowMissing) {
        var intrinsic = GetIntrinsic(name, !!allowMissing);
        if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
            return callBind(intrinsic);
        }
        return intrinsic;
    };


    /***/ }),

    /***/ "./node_modules/call-bind/index.js":
    /*!*****************************************!*\
      !*** ./node_modules/call-bind/index.js ***!
      \*****************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
    var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

    var $apply = GetIntrinsic('%Function.prototype.apply%');
    var $call = GetIntrinsic('%Function.prototype.call%');
    var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

    var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
    var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
    var $max = GetIntrinsic('%Math.max%');

    if ($defineProperty) {
        try {
            $defineProperty({}, 'a', { value: 1 });
        } catch (e) {
            // IE 8 has a broken defineProperty
            $defineProperty = null;
        }
    }

    module.exports = function callBind(originalFunction) {
        var func = $reflectApply(bind, $call, arguments);
        if ($gOPD && $defineProperty) {
            var desc = $gOPD(func, 'length');
            if (desc.configurable) {
                // original length, plus the receiver, minus any additional arguments (after the receiver)
                $defineProperty(
                    func,
                    'length',
                    { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
                );
            }
        }
        return func;
    };

    var applyBind = function applyBind() {
        return $reflectApply(bind, $apply, arguments);
    };

    if ($defineProperty) {
        $defineProperty(module.exports, 'apply', { value: applyBind });
    } else {
        module.exports.apply = applyBind;
    }


    /***/ }),

    /***/ "./node_modules/deepmerge/dist/cjs.js":
    /*!********************************************!*\
      !*** ./node_modules/deepmerge/dist/cjs.js ***!
      \********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var isMergeableObject = function isMergeableObject(value) {
        return isNonNullObject(value)
            && !isSpecial(value)
    };

    function isNonNullObject(value) {
        return !!value && typeof value === 'object'
    }

    function isSpecial(value) {
        var stringValue = Object.prototype.toString.call(value);

        return stringValue === '[object RegExp]'
            || stringValue === '[object Date]'
            || isReactElement(value)
    }

    // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
    var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

    function isReactElement(value) {
        return value.$$typeof === REACT_ELEMENT_TYPE
    }

    function emptyTarget(val) {
        return Array.isArray(val) ? [] : {}
    }

    function cloneUnlessOtherwiseSpecified(value, options) {
        return (options.clone !== false && options.isMergeableObject(value))
            ? deepmerge(emptyTarget(value), value, options)
            : value
    }

    function defaultArrayMerge(target, source, options) {
        return target.concat(source).map(function(element) {
            return cloneUnlessOtherwiseSpecified(element, options)
        })
    }

    function getMergeFunction(key, options) {
        if (!options.customMerge) {
            return deepmerge
        }
        var customMerge = options.customMerge(key);
        return typeof customMerge === 'function' ? customMerge : deepmerge
    }

    function getEnumerableOwnPropertySymbols(target) {
        return Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
                return target.propertyIsEnumerable(symbol)
            })
            : []
    }

    function getKeys(target) {
        return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
    }

    function propertyIsOnObject(object, property) {
        try {
            return property in object
        } catch(_) {
            return false
        }
    }

    // Protects from prototype poisoning and unexpected merging up the prototype chain.
    function propertyIsUnsafe(target, key) {
        return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
            && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
                && Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
    }

    function mergeObject(target, source, options) {
        var destination = {};
        if (options.isMergeableObject(target)) {
            getKeys(target).forEach(function(key) {
                destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
            });
        }
        getKeys(source).forEach(function(key) {
            if (propertyIsUnsafe(target, key)) {
                return
            }

            if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
                destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
            } else {
                destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
            }
        });
        return destination
    }

    function deepmerge(target, source, options) {
        options = options || {};
        options.arrayMerge = options.arrayMerge || defaultArrayMerge;
        options.isMergeableObject = options.isMergeableObject || isMergeableObject;
        // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
        // implementations can use it. The caller may not replace it.
        options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

        var sourceIsArray = Array.isArray(source);
        var targetIsArray = Array.isArray(target);
        var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

        if (!sourceAndTargetTypesMatch) {
            return cloneUnlessOtherwiseSpecified(source, options)
        } else if (sourceIsArray) {
            return options.arrayMerge(target, source, options)
        } else {
            return mergeObject(target, source, options)
        }
    }

    deepmerge.all = function deepmergeAll(array, options) {
        if (!Array.isArray(array)) {
            throw new Error('first argument should be an array')
        }

        return array.reduce(function(prev, next) {
            return deepmerge(prev, next, options)
        }, {})
    };

    var deepmerge_1 = deepmerge;

    module.exports = deepmerge_1;


    /***/ }),

    /***/ "./node_modules/function-bind/implementation.js":
    /*!******************************************************!*\
      !*** ./node_modules/function-bind/implementation.js ***!
      \******************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    /* eslint no-invalid-this: 1 */

    var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = '[object Function]';

    module.exports = function bind(that) {
        var target = this;
        if (typeof target !== 'function' || toStr.call(target) !== funcType) {
            throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slice.call(arguments, 1);

        var bound;
        var binder = function () {
            if (this instanceof bound) {
                var result = target.apply(
                    this,
                    args.concat(slice.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return this;
            } else {
                return target.apply(
                    that,
                    args.concat(slice.call(arguments))
                );
            }
        };

        var boundLength = Math.max(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            boundArgs.push('$' + i);
        }

        bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

        if (target.prototype) {
            var Empty = function Empty() {};
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            Empty.prototype = null;
        }

        return bound;
    };


    /***/ }),

    /***/ "./node_modules/function-bind/index.js":
    /*!*********************************************!*\
      !*** ./node_modules/function-bind/index.js ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

    module.exports = Function.prototype.bind || implementation;


    /***/ }),

    /***/ "./node_modules/get-intrinsic/index.js":
    /*!*********************************************!*\
      !*** ./node_modules/get-intrinsic/index.js ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var undefined;

    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;

    // eslint-disable-next-line consistent-return
    var getEvalledConstructor = function (expressionSyntax) {
        try {
            return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
        } catch (e) {}
    };

    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
        try {
            $gOPD({}, '');
        } catch (e) {
            $gOPD = null; // this is IE 8, which has a broken gOPD
        }
    }

    var throwTypeError = function () {
        throw new $TypeError();
    };
    var ThrowTypeError = $gOPD
        ? (function () {
            try {
                // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
                arguments.callee; // IE 8 does not throw here
                return throwTypeError;
            } catch (calleeThrows) {
                try {
                    // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
                    return $gOPD(arguments, 'callee').get;
                } catch (gOPDthrows) {
                    return throwTypeError;
                }
            }
        }())
        : throwTypeError;

    var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

    var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

    var needsEval = {};

    var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

    var INTRINSICS = {
        '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
        '%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
        '%AsyncFromSyncIteratorPrototype%': undefined,
        '%AsyncFunction%': needsEval,
        '%AsyncGenerator%': needsEval,
        '%AsyncGeneratorFunction%': needsEval,
        '%AsyncIteratorPrototype%': needsEval,
        '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
        '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
        '%Boolean%': Boolean,
        '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
        '%Date%': Date,
        '%decodeURI%': decodeURI,
        '%decodeURIComponent%': decodeURIComponent,
        '%encodeURI%': encodeURI,
        '%encodeURIComponent%': encodeURIComponent,
        '%Error%': Error,
        '%eval%': eval, // eslint-disable-line no-eval
        '%EvalError%': EvalError,
        '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
        '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
        '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
        '%Function%': $Function,
        '%GeneratorFunction%': needsEval,
        '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
        '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
        '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
        '%JSON%': typeof JSON === 'object' ? JSON : undefined,
        '%Map%': typeof Map === 'undefined' ? undefined : Map,
        '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
        '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
        '%RangeError%': RangeError,
        '%ReferenceError%': ReferenceError,
        '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
        '%RegExp%': RegExp,
        '%Set%': typeof Set === 'undefined' ? undefined : Set,
        '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
        '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
        '%Symbol%': hasSymbols ? Symbol : undefined,
        '%SyntaxError%': $SyntaxError,
        '%ThrowTypeError%': ThrowTypeError,
        '%TypedArray%': TypedArray,
        '%TypeError%': $TypeError,
        '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
        '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
        '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
        '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
        '%URIError%': URIError,
        '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
        '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
        '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
    };

    var doEval = function doEval(name) {
        var value;
        if (name === '%AsyncFunction%') {
            value = getEvalledConstructor('async function () {}');
        } else if (name === '%GeneratorFunction%') {
            value = getEvalledConstructor('function* () {}');
        } else if (name === '%AsyncGeneratorFunction%') {
            value = getEvalledConstructor('async function* () {}');
        } else if (name === '%AsyncGenerator%') {
            var fn = doEval('%AsyncGeneratorFunction%');
            if (fn) {
                value = fn.prototype;
            }
        } else if (name === '%AsyncIteratorPrototype%') {
            var gen = doEval('%AsyncGenerator%');
            if (gen) {
                value = getProto(gen.prototype);
            }
        }

        INTRINSICS[name] = value;

        return value;
    };

    var LEGACY_ALIASES = {
        '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
        '%ArrayPrototype%': ['Array', 'prototype'],
        '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
        '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
        '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
        '%ArrayProto_values%': ['Array', 'prototype', 'values'],
        '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
        '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
        '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
        '%BooleanPrototype%': ['Boolean', 'prototype'],
        '%DataViewPrototype%': ['DataView', 'prototype'],
        '%DatePrototype%': ['Date', 'prototype'],
        '%ErrorPrototype%': ['Error', 'prototype'],
        '%EvalErrorPrototype%': ['EvalError', 'prototype'],
        '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
        '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
        '%FunctionPrototype%': ['Function', 'prototype'],
        '%Generator%': ['GeneratorFunction', 'prototype'],
        '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
        '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
        '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
        '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
        '%JSONParse%': ['JSON', 'parse'],
        '%JSONStringify%': ['JSON', 'stringify'],
        '%MapPrototype%': ['Map', 'prototype'],
        '%NumberPrototype%': ['Number', 'prototype'],
        '%ObjectPrototype%': ['Object', 'prototype'],
        '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
        '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
        '%PromisePrototype%': ['Promise', 'prototype'],
        '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
        '%Promise_all%': ['Promise', 'all'],
        '%Promise_reject%': ['Promise', 'reject'],
        '%Promise_resolve%': ['Promise', 'resolve'],
        '%RangeErrorPrototype%': ['RangeError', 'prototype'],
        '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
        '%RegExpPrototype%': ['RegExp', 'prototype'],
        '%SetPrototype%': ['Set', 'prototype'],
        '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
        '%StringPrototype%': ['String', 'prototype'],
        '%SymbolPrototype%': ['Symbol', 'prototype'],
        '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
        '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
        '%TypeErrorPrototype%': ['TypeError', 'prototype'],
        '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
        '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
        '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
        '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
        '%URIErrorPrototype%': ['URIError', 'prototype'],
        '%WeakMapPrototype%': ['WeakMap', 'prototype'],
        '%WeakSetPrototype%': ['WeakSet', 'prototype']
    };

    var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
    var hasOwn = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);

    /* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
    var stringToPath = function stringToPath(string) {
        var first = $strSlice(string, 0, 1);
        var last = $strSlice(string, -1);
        if (first === '%' && last !== '%') {
            throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
        } else if (last === '%' && first !== '%') {
            throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
        }
        var result = [];
        $replace(string, rePropName, function (match, number, quote, subString) {
            result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
        });
        return result;
    };
    /* end adaptation */

    var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
        var intrinsicName = name;
        var alias;
        if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
            alias = LEGACY_ALIASES[intrinsicName];
            intrinsicName = '%' + alias[0] + '%';
        }

        if (hasOwn(INTRINSICS, intrinsicName)) {
            var value = INTRINSICS[intrinsicName];
            if (value === needsEval) {
                value = doEval(intrinsicName);
            }
            if (typeof value === 'undefined' && !allowMissing) {
                throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
            }

            return {
                alias: alias,
                name: intrinsicName,
                value: value
            };
        }

        throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
    };

    module.exports = function GetIntrinsic(name, allowMissing) {
        if (typeof name !== 'string' || name.length === 0) {
            throw new $TypeError('intrinsic name must be a non-empty string');
        }
        if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
            throw new $TypeError('"allowMissing" argument must be a boolean');
        }

        if ($exec(/^%?[^%]*%?$/, name) === null) {
            throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
        }
        var parts = stringToPath(name);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

        var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value = intrinsic.value;
        var skipFurtherCaching = false;

        var alias = intrinsic.alias;
        if (alias) {
            intrinsicBaseName = alias[0];
            $spliceApply(parts, $concat([0, 1], alias));
        }

        for (var i = 1, isOwn = true; i < parts.length; i += 1) {
            var part = parts[i];
            var first = $strSlice(part, 0, 1);
            var last = $strSlice(part, -1);
            if (
                (
                    (first === '"' || first === "'" || first === '`')
                    || (last === '"' || last === "'" || last === '`')
                )
                && first !== last
            ) {
                throw new $SyntaxError('property names with quotes must have matching quotes');
            }
            if (part === 'constructor' || !isOwn) {
                skipFurtherCaching = true;
            }

            intrinsicBaseName += '.' + part;
            intrinsicRealName = '%' + intrinsicBaseName + '%';

            if (hasOwn(INTRINSICS, intrinsicRealName)) {
                value = INTRINSICS[intrinsicRealName];
            } else if (value != null) {
                if (!(part in value)) {
                    if (!allowMissing) {
                        throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                    }
                    return void undefined;
                }
                if ($gOPD && (i + 1) >= parts.length) {
                    var desc = $gOPD(value, part);
                    isOwn = !!desc;

                    // By convention, when a data property is converted to an accessor
                    // property to emulate a data property that does not suffer from
                    // the override mistake, that accessor's getter is marked with
                    // an `originalValue` property. Here, when we detect this, we
                    // uphold the illusion by pretending to see that original data
                    // property, i.e., returning the value rather than the getter
                    // itself.
                    if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                        value = desc.get;
                    } else {
                        value = value[part];
                    }
                } else {
                    isOwn = hasOwn(value, part);
                    value = value[part];
                }

                if (isOwn && !skipFurtherCaching) {
                    INTRINSICS[intrinsicRealName] = value;
                }
            }
        }
        return value;
    };


    /***/ }),

    /***/ "./node_modules/has-symbols/index.js":
    /*!*******************************************!*\
      !*** ./node_modules/has-symbols/index.js ***!
      \*******************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var origSymbol = typeof Symbol !== 'undefined' && Symbol;
    var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

    module.exports = function hasNativeSymbols() {
        if (typeof origSymbol !== 'function') { return false; }
        if (typeof Symbol !== 'function') { return false; }
        if (typeof origSymbol('foo') !== 'symbol') { return false; }
        if (typeof Symbol('bar') !== 'symbol') { return false; }

        return hasSymbolSham();
    };


    /***/ }),

    /***/ "./node_modules/has-symbols/shams.js":
    /*!*******************************************!*\
      !*** ./node_modules/has-symbols/shams.js ***!
      \*******************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    /* eslint complexity: [2, 18], max-statements: [2, 33] */
    module.exports = function hasSymbols() {
        if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
        if (typeof Symbol.iterator === 'symbol') { return true; }

        var obj = {};
        var sym = Symbol('test');
        var symObj = Object(sym);
        if (typeof sym === 'string') { return false; }

        if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
        if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

        // temp disabled per https://github.com/ljharb/object.assign/issues/17
        // if (sym instanceof Symbol) { return false; }
        // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
        // if (!(symObj instanceof Symbol)) { return false; }

        // if (typeof Symbol.prototype.toString !== 'function') { return false; }
        // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

        var symVal = 42;
        obj[sym] = symVal;
        for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
        if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

        if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) { return false; }

        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

        if (typeof Object.getOwnPropertyDescriptor === 'function') {
            var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
            if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
        }

        return true;
    };


    /***/ }),

    /***/ "./node_modules/has/src/index.js":
    /*!***************************************!*\
      !*** ./node_modules/has/src/index.js ***!
      \***************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

    module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


    /***/ }),

    /***/ "./node_modules/lodash.clonedeep/index.js":
    /*!************************************************!*\
      !*** ./node_modules/lodash.clonedeep/index.js ***!
      \************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */(function(global, module) {/**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200;

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        promiseTag = '[object Promise]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        symbolTag = '[object Symbol]',
        weakMapTag = '[object WeakMap]';

    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';

    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

    /** Used to match `RegExp` flags from their coerced string values. */
    var reFlags = /\w*$/;

    /** Used to detect host constructors (Safari). */
    var reIsHostCtor = /^\[object .+?Constructor\]$/;

    /** Used to detect unsigned integer values. */
    var reIsUint = /^(?:0|[1-9]\d*)$/;

    /** Used to identify `toStringTag` values supported by `_.clone`. */
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] =
    cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
    cloneableTags[boolTag] = cloneableTags[dateTag] =
    cloneableTags[float32Tag] = cloneableTags[float64Tag] =
    cloneableTags[int8Tag] = cloneableTags[int16Tag] =
    cloneableTags[int32Tag] = cloneableTags[mapTag] =
    cloneableTags[numberTag] = cloneableTags[objectTag] =
    cloneableTags[regexpTag] = cloneableTags[setTag] =
    cloneableTags[stringTag] = cloneableTags[symbolTag] =
    cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
    cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] =
    cloneableTags[weakMapTag] = false;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

    /** Detect free variable `self`. */
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || Function('return this')();

    /** Detect free variable `exports`. */
    var freeExports =  true && exports && !exports.nodeType && exports;

    /** Detect free variable `module`. */
    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports;

    /**
     * Adds the key-value `pair` to `map`.
     *
     * @private
     * @param {Object} map The map to modify.
     * @param {Array} pair The key-value pair to add.
     * @returns {Object} Returns `map`.
     */
    function addMapEntry(map, pair) {
      // Don't return `map.set` because it's not chainable in IE 11.
      map.set(pair[0], pair[1]);
      return map;
    }

    /**
     * Adds `value` to `set`.
     *
     * @private
     * @param {Object} set The set to modify.
     * @param {*} value The value to add.
     * @returns {Object} Returns `set`.
     */
    function addSetEntry(set, value) {
      // Don't return `set.add` because it's not chainable in IE 11.
      set.add(value);
      return set;
    }

    /**
     * A specialized version of `_.forEach` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEach(array, iteratee) {
      var index = -1,
          length = array ? array.length : 0;

      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }

    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */
    function arrayPush(array, values) {
      var index = -1,
          length = values.length,
          offset = array.length;

      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }

    /**
     * A specialized version of `_.reduce` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initAccum] Specify using the first element of `array` as
     *  the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1,
          length = array ? array.length : 0;

      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }

    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }

    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function getValue(object, key) {
      return object == null ? undefined : object[key];
    }

    /**
     * Checks if `value` is a host object in IE < 9.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
     */
    function isHostObject(value) {
      // Many host objects are `Object` objects that can coerce to strings
      // despite having improperly defined `toString` methods.
      var result = false;
      if (value != null && typeof value.toString != 'function') {
        try {
          result = !!(value + '');
        } catch (e) {}
      }
      return result;
    }

    /**
     * Converts `map` to its key-value pairs.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the key-value pairs.
     */
    function mapToArray(map) {
      var index = -1,
          result = Array(map.size);

      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }

    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }

    /**
     * Converts `set` to an array of its values.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the values.
     */
    function setToArray(set) {
      var index = -1,
          result = Array(set.size);

      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = root['__core-js_shared__'];

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? root.Buffer : undefined,
        Symbol = root.Symbol,
        Uint8Array = root.Uint8Array,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeKeys = overArg(Object.keys, Object);

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(root, 'DataView'),
        Map = getNative(root, 'Map'),
        Promise = getNative(root, 'Promise'),
        Set = getNative(root, 'Set'),
        WeakMap = getNative(root, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries ? entries.length : 0;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      return getMapData(this, key)['delete'](key);
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      return this.__data__['delete'](key);
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          return this;
        }
        cache = this.__data__ = new MapCache(pairs);
      }
      cache.set(key, value);
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      // Safari 9 makes `arguments.length` enumerable in strict mode.
      var result = (isArray(value) || isArguments(value))
        ? baseTimes(value.length, String)
        : [];

      var length = result.length,
          skipIndexes = !!length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        object[key] = value;
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @param {boolean} [isFull] Specify a clone including symbols.
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          if (isHostObject(value)) {
            return object ? value : {};
          }
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (!isArr) {
        var props = isFull ? getAllKeys(value) : keys(value);
      }
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} prototype The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    function baseCreate(proto) {
      return isObject(proto) ? objectCreate(proto) : {};
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      return objectToString.call(value);
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var result = new buffer.constructor(buffer.length);
      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor);
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        assignValue(object, key, newValue === undefined ? source[key] : newValue);
      }
      return object;
    }

    /**
     * Copies own symbol properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * Creates an array of the own enumerable symbol properties of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11,
    // for data views in Edge < 14, and promises in Node.js.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = objectToString.call(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : undefined;

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return cloneSet(object, isDeep, cloneFunc);

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to process.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, true, true);
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    function isArguments(value) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
        (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
    }

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 8-9 which returns 'object' for typed array and other constructors.
      var tag = isObject(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag;
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    module.exports = cloneDeep;

    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

    /***/ }),

    /***/ "./node_modules/lodash.isequal/index.js":
    /*!**********************************************!*\
      !*** ./node_modules/lodash.isequal/index.js ***!
      \**********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */(function(global, module) {/**
     * Lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright JS Foundation and other contributors <https://js.foundation/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200;

    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';

    /** Used to compose bitmasks for value comparisons. */
    var COMPARE_PARTIAL_FLAG = 1,
        COMPARE_UNORDERED_FLAG = 2;

    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        asyncTag = '[object AsyncFunction]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        nullTag = '[object Null]',
        objectTag = '[object Object]',
        promiseTag = '[object Promise]',
        proxyTag = '[object Proxy]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        symbolTag = '[object Symbol]',
        undefinedTag = '[object Undefined]',
        weakMapTag = '[object WeakMap]';

    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';

    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

    /** Used to detect host constructors (Safari). */
    var reIsHostCtor = /^\[object .+?Constructor\]$/;

    /** Used to detect unsigned integer values. */
    var reIsUint = /^(?:0|[1-9]\d*)$/;

    /** Used to identify `toStringTag` values of typed arrays. */
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
    typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
    typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
    typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
    typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
    typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
    typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
    typedArrayTags[errorTag] = typedArrayTags[funcTag] =
    typedArrayTags[mapTag] = typedArrayTags[numberTag] =
    typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
    typedArrayTags[setTag] = typedArrayTags[stringTag] =
    typedArrayTags[weakMapTag] = false;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

    /** Detect free variable `self`. */
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || Function('return this')();

    /** Detect free variable `exports`. */
    var freeExports =  true && exports && !exports.nodeType && exports;

    /** Detect free variable `module`. */
    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports;

    /** Detect free variable `process` from Node.js. */
    var freeProcess = moduleExports && freeGlobal.process;

    /** Used to access faster Node.js helpers. */
    var nodeUtil = (function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
      } catch (e) {}
    }());

    /* Node.js helper references. */
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

    /**
     * A specialized version of `_.filter` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function arrayFilter(array, predicate) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */
    function arrayPush(array, values) {
      var index = -1,
          length = values.length,
          offset = array.length;

      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }

    /**
     * A specialized version of `_.some` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function arraySome(array, predicate) {
      var index = -1,
          length = array == null ? 0 : array.length;

      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }

    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }

    /**
     * The base implementation of `_.unary` without support for storing metadata.
     *
     * @private
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     */
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }

    /**
     * Checks if a `cache` value for `key` exists.
     *
     * @private
     * @param {Object} cache The cache to query.
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function cacheHas(cache, key) {
      return cache.has(key);
    }

    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function getValue(object, key) {
      return object == null ? undefined : object[key];
    }

    /**
     * Converts `map` to its key-value pairs.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the key-value pairs.
     */
    function mapToArray(map) {
      var index = -1,
          result = Array(map.size);

      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }

    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }

    /**
     * Converts `set` to an array of its values.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the values.
     */
    function setToArray(set) {
      var index = -1,
          result = Array(set.size);

      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = root['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? root.Buffer : undefined,
        Symbol = root.Symbol,
        Uint8Array = root.Uint8Array,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeKeys = overArg(Object.keys, Object);

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(root, 'DataView'),
        Map = getNative(root, 'Map'),
        Promise = getNative(root, 'Promise'),
        Set = getNative(root, 'Set'),
        WeakMap = getNative(root, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    module.exports = isEqual;

    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

    /***/ }),

    /***/ "./node_modules/object-inspect/index.js":
    /*!**********************************************!*\
      !*** ./node_modules/object-inspect/index.js ***!
      \**********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    var hasMap = typeof Map === 'function' && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === 'function' && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
    // ie, `has-tostringtag/shams
    var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
        ? Symbol.toStringTag
        : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;

    var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
        [].__proto__ === Array.prototype // eslint-disable-line no-proto
            ? function (O) {
                return O.__proto__; // eslint-disable-line no-proto
            }
            : null
    );

    function addNumericSeparator(num, str) {
        if (
            num === Infinity
            || num === -Infinity
            || num !== num
            || (num && num > -1000 && num < 1000)
            || $test.call(/e/, str)
        ) {
            return str;
        }
        var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof num === 'number') {
            var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
            if (int !== num) {
                var intStr = String(int);
                var dec = $slice.call(str, intStr.length + 1);
                return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
            }
        }
        return $replace.call(str, sepRegex, '$&_');
    }

    var utilInspect = __webpack_require__(/*! ./util.inspect */ 1);
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

    module.exports = function inspect_(obj, options, depth, seen) {
        var opts = options || {};

        if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
            throw new TypeError('option "quoteStyle" must be "single" or "double"');
        }
        if (
            has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
                ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
                : opts.maxStringLength !== null
            )
        ) {
            throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        }
        var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
        if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
            throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
        }

        if (
            has(opts, 'indent')
            && opts.indent !== null
            && opts.indent !== '\t'
            && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
        ) {
            throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        }
        if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
            throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        }
        var numericSeparator = opts.numericSeparator;

        if (typeof obj === 'undefined') {
            return 'undefined';
        }
        if (obj === null) {
            return 'null';
        }
        if (typeof obj === 'boolean') {
            return obj ? 'true' : 'false';
        }

        if (typeof obj === 'string') {
            return inspectString(obj, opts);
        }
        if (typeof obj === 'number') {
            if (obj === 0) {
                return Infinity / obj > 0 ? '0' : '-0';
            }
            var str = String(obj);
            return numericSeparator ? addNumericSeparator(obj, str) : str;
        }
        if (typeof obj === 'bigint') {
            var bigIntStr = String(obj) + 'n';
            return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
        }

        var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
        if (typeof depth === 'undefined') { depth = 0; }
        if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
            return isArray(obj) ? '[Array]' : '[Object]';
        }

        var indent = getIndent(opts, depth);

        if (typeof seen === 'undefined') {
            seen = [];
        } else if (indexOf(seen, obj) >= 0) {
            return '[Circular]';
        }

        function inspect(value, from, noIndent) {
            if (from) {
                seen = $arrSlice.call(seen);
                seen.push(from);
            }
            if (noIndent) {
                var newOpts = {
                    depth: opts.depth
                };
                if (has(opts, 'quoteStyle')) {
                    newOpts.quoteStyle = opts.quoteStyle;
                }
                return inspect_(value, newOpts, depth + 1, seen);
            }
            return inspect_(value, opts, depth + 1, seen);
        }

        if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
            var name = nameOf(obj);
            var keys = arrObjKeys(obj, inspect);
            return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
        }
        if (isSymbol(obj)) {
            var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
            return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
        }
        if (isElement(obj)) {
            var s = '<' + $toLowerCase.call(String(obj.nodeName));
            var attrs = obj.attributes || [];
            for (var i = 0; i < attrs.length; i++) {
                s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
            }
            s += '>';
            if (obj.childNodes && obj.childNodes.length) { s += '...'; }
            s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
            return s;
        }
        if (isArray(obj)) {
            if (obj.length === 0) { return '[]'; }
            var xs = arrObjKeys(obj, inspect);
            if (indent && !singleLineValues(xs)) {
                return '[' + indentedJoin(xs, indent) + ']';
            }
            return '[ ' + $join.call(xs, ', ') + ' ]';
        }
        if (isError(obj)) {
            var parts = arrObjKeys(obj, inspect);
            if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
                return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
            }
            if (parts.length === 0) { return '[' + String(obj) + ']'; }
            return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
        }
        if (typeof obj === 'object' && customInspect) {
            if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
                return utilInspect(obj, { depth: maxDepth - depth });
            } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
                return obj.inspect();
            }
        }
        if (isMap(obj)) {
            var mapParts = [];
            mapForEach.call(obj, function (value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
            return collectionOf('Map', mapSize.call(obj), mapParts, indent);
        }
        if (isSet(obj)) {
            var setParts = [];
            setForEach.call(obj, function (value) {
                setParts.push(inspect(value, obj));
            });
            return collectionOf('Set', setSize.call(obj), setParts, indent);
        }
        if (isWeakMap(obj)) {
            return weakCollectionOf('WeakMap');
        }
        if (isWeakSet(obj)) {
            return weakCollectionOf('WeakSet');
        }
        if (isWeakRef(obj)) {
            return weakCollectionOf('WeakRef');
        }
        if (isNumber(obj)) {
            return markBoxed(inspect(Number(obj)));
        }
        if (isBigInt(obj)) {
            return markBoxed(inspect(bigIntValueOf.call(obj)));
        }
        if (isBoolean(obj)) {
            return markBoxed(booleanValueOf.call(obj));
        }
        if (isString(obj)) {
            return markBoxed(inspect(String(obj)));
        }
        if (!isDate(obj) && !isRegExp(obj)) {
            var ys = arrObjKeys(obj, inspect);
            var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
            var protoTag = obj instanceof Object ? '' : 'null prototype';
            var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
            var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
            var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
            if (ys.length === 0) { return tag + '{}'; }
            if (indent) {
                return tag + '{' + indentedJoin(ys, indent) + '}';
            }
            return tag + '{ ' + $join.call(ys, ', ') + ' }';
        }
        return String(obj);
    };

    function wrapQuotes(s, defaultStyle, opts) {
        var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
        return quoteChar + s + quoteChar;
    }

    function quote(s) {
        return $replace.call(String(s), /"/g, '&quot;');
    }

    function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
    function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
    function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
    function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
    function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
    function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
    function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

    // Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
    function isSymbol(obj) {
        if (hasShammedSymbols) {
            return obj && typeof obj === 'object' && obj instanceof Symbol;
        }
        if (typeof obj === 'symbol') {
            return true;
        }
        if (!obj || typeof obj !== 'object' || !symToString) {
            return false;
        }
        try {
            symToString.call(obj);
            return true;
        } catch (e) {}
        return false;
    }

    function isBigInt(obj) {
        if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
            return false;
        }
        try {
            bigIntValueOf.call(obj);
            return true;
        } catch (e) {}
        return false;
    }

    var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
    function has(obj, key) {
        return hasOwn.call(obj, key);
    }

    function toStr(obj) {
        return objectToString.call(obj);
    }

    function nameOf(f) {
        if (f.name) { return f.name; }
        var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
        if (m) { return m[1]; }
        return null;
    }

    function indexOf(xs, x) {
        if (xs.indexOf) { return xs.indexOf(x); }
        for (var i = 0, l = xs.length; i < l; i++) {
            if (xs[i] === x) { return i; }
        }
        return -1;
    }

    function isMap(x) {
        if (!mapSize || !x || typeof x !== 'object') {
            return false;
        }
        try {
            mapSize.call(x);
            try {
                setSize.call(x);
            } catch (s) {
                return true;
            }
            return x instanceof Map; // core-js workaround, pre-v2.5.0
        } catch (e) {}
        return false;
    }

    function isWeakMap(x) {
        if (!weakMapHas || !x || typeof x !== 'object') {
            return false;
        }
        try {
            weakMapHas.call(x, weakMapHas);
            try {
                weakSetHas.call(x, weakSetHas);
            } catch (s) {
                return true;
            }
            return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
        } catch (e) {}
        return false;
    }

    function isWeakRef(x) {
        if (!weakRefDeref || !x || typeof x !== 'object') {
            return false;
        }
        try {
            weakRefDeref.call(x);
            return true;
        } catch (e) {}
        return false;
    }

    function isSet(x) {
        if (!setSize || !x || typeof x !== 'object') {
            return false;
        }
        try {
            setSize.call(x);
            try {
                mapSize.call(x);
            } catch (m) {
                return true;
            }
            return x instanceof Set; // core-js workaround, pre-v2.5.0
        } catch (e) {}
        return false;
    }

    function isWeakSet(x) {
        if (!weakSetHas || !x || typeof x !== 'object') {
            return false;
        }
        try {
            weakSetHas.call(x, weakSetHas);
            try {
                weakMapHas.call(x, weakMapHas);
            } catch (s) {
                return true;
            }
            return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
        } catch (e) {}
        return false;
    }

    function isElement(x) {
        if (!x || typeof x !== 'object') { return false; }
        if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
            return true;
        }
        return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
    }

    function inspectString(str, opts) {
        if (str.length > opts.maxStringLength) {
            var remaining = str.length - opts.maxStringLength;
            var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
            return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
        }
        // eslint-disable-next-line no-control-regex
        var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
        return wrapQuotes(s, 'single', opts);
    }

    function lowbyte(c) {
        var n = c.charCodeAt(0);
        var x = {
            8: 'b',
            9: 't',
            10: 'n',
            12: 'f',
            13: 'r'
        }[n];
        if (x) { return '\\' + x; }
        return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
    }

    function markBoxed(str) {
        return 'Object(' + str + ')';
    }

    function weakCollectionOf(type) {
        return type + ' { ? }';
    }

    function collectionOf(type, size, entries, indent) {
        var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
        return type + ' (' + size + ') {' + joinedEntries + '}';
    }

    function singleLineValues(xs) {
        for (var i = 0; i < xs.length; i++) {
            if (indexOf(xs[i], '\n') >= 0) {
                return false;
            }
        }
        return true;
    }

    function getIndent(opts, depth) {
        var baseIndent;
        if (opts.indent === '\t') {
            baseIndent = '\t';
        } else if (typeof opts.indent === 'number' && opts.indent > 0) {
            baseIndent = $join.call(Array(opts.indent + 1), ' ');
        } else {
            return null;
        }
        return {
            base: baseIndent,
            prev: $join.call(Array(depth + 1), baseIndent)
        };
    }

    function indentedJoin(xs, indent) {
        if (xs.length === 0) { return ''; }
        var lineJoiner = '\n' + indent.prev + indent.base;
        return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
    }

    function arrObjKeys(obj, inspect) {
        var isArr = isArray(obj);
        var xs = [];
        if (isArr) {
            xs.length = obj.length;
            for (var i = 0; i < obj.length; i++) {
                xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
            }
        }
        var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
        var symMap;
        if (hasShammedSymbols) {
            symMap = {};
            for (var k = 0; k < syms.length; k++) {
                symMap['$' + syms[k]] = syms[k];
            }
        }

        for (var key in obj) { // eslint-disable-line no-restricted-syntax
            if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
            if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
            if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
                // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
                continue; // eslint-disable-line no-restricted-syntax, no-continue
            } else if ($test.call(/[^\w$]/, key)) {
                xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
            } else {
                xs.push(key + ': ' + inspect(obj[key], obj));
            }
        }
        if (typeof gOPS === 'function') {
            for (var j = 0; j < syms.length; j++) {
                if (isEnumerable.call(obj, syms[j])) {
                    xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
                }
            }
        }
        return xs;
    }


    /***/ }),

    /***/ "./node_modules/process/browser.js":
    /*!*****************************************!*\
      !*** ./node_modules/process/browser.js ***!
      \*****************************************/
    /*! no static exports found */
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

    /***/ "./node_modules/qs/lib/formats.js":
    /*!****************************************!*\
      !*** ./node_modules/qs/lib/formats.js ***!
      \****************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;

    var Format = {
        RFC1738: 'RFC1738',
        RFC3986: 'RFC3986'
    };

    module.exports = {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        },
        RFC1738: Format.RFC1738,
        RFC3986: Format.RFC3986
    };


    /***/ }),

    /***/ "./node_modules/qs/lib/index.js":
    /*!**************************************!*\
      !*** ./node_modules/qs/lib/index.js ***!
      \**************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
    var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
    var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

    module.exports = {
        formats: formats,
        parse: parse,
        stringify: stringify
    };


    /***/ }),

    /***/ "./node_modules/qs/lib/parse.js":
    /*!**************************************!*\
      !*** ./node_modules/qs/lib/parse.js ***!
      \**************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;

    var defaults = {
        allowDots: false,
        allowPrototypes: false,
        allowSparse: false,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: false,
        comma: false,
        decoder: utils.decode,
        delimiter: '&',
        depth: 5,
        ignoreQueryPrefix: false,
        interpretNumericEntities: false,
        parameterLimit: 1000,
        parseArrays: true,
        plainObjects: false,
        strictNullHandling: false
    };

    var interpretNumericEntities = function (str) {
        return str.replace(/&#(\d+);/g, function ($0, numberStr) {
            return String.fromCharCode(parseInt(numberStr, 10));
        });
    };

    var parseArrayValue = function (val, options) {
        if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
            return val.split(',');
        }

        return val;
    };

    // This is what browsers will submit when the ✓ character occurs in an
    // application/x-www-form-urlencoded body and the encoding of the page containing
    // the form is iso-8859-1, or when the submitted form has an accept-charset
    // attribute of iso-8859-1. Presumably also with other charsets that do not contain
    // the ✓ character, such as us-ascii.
    var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

    // These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
    var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

    var parseValues = function parseQueryStringValues(str, options) {
        var obj = {};
        var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
        var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
        var parts = cleanStr.split(options.delimiter, limit);
        var skipIndex = -1; // Keep track of where the utf8 sentinel was found
        var i;

        var charset = options.charset;
        if (options.charsetSentinel) {
            for (i = 0; i < parts.length; ++i) {
                if (parts[i].indexOf('utf8=') === 0) {
                    if (parts[i] === charsetSentinel) {
                        charset = 'utf-8';
                    } else if (parts[i] === isoSentinel) {
                        charset = 'iso-8859-1';
                    }
                    skipIndex = i;
                    i = parts.length; // The eslint settings do not allow break;
                }
            }
        }

        for (i = 0; i < parts.length; ++i) {
            if (i === skipIndex) {
                continue;
            }
            var part = parts[i];

            var bracketEqualsPos = part.indexOf(']=');
            var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

            var key, val;
            if (pos === -1) {
                key = options.decoder(part, defaults.decoder, charset, 'key');
                val = options.strictNullHandling ? null : '';
            } else {
                key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
                val = utils.maybeMap(
                    parseArrayValue(part.slice(pos + 1), options),
                    function (encodedVal) {
                        return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                    }
                );
            }

            if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
                val = interpretNumericEntities(val);
            }

            if (part.indexOf('[]=') > -1) {
                val = isArray(val) ? [val] : val;
            }

            if (has.call(obj, key)) {
                obj[key] = utils.combine(obj[key], val);
            } else {
                obj[key] = val;
            }
        }

        return obj;
    };

    var parseObject = function (chain, val, options, valuesParsed) {
        var leaf = valuesParsed ? val : parseArrayValue(val, options);

        for (var i = chain.length - 1; i >= 0; --i) {
            var obj;
            var root = chain[i];

            if (root === '[]' && options.parseArrays) {
                obj = [].concat(leaf);
            } else {
                obj = options.plainObjects ? Object.create(null) : {};
                var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
                var index = parseInt(cleanRoot, 10);
                if (!options.parseArrays && cleanRoot === '') {
                    obj = { 0: leaf };
                } else if (
                    !isNaN(index)
                    && root !== cleanRoot
                    && String(index) === cleanRoot
                    && index >= 0
                    && (options.parseArrays && index <= options.arrayLimit)
                ) {
                    obj = [];
                    obj[index] = leaf;
                } else if (cleanRoot !== '__proto__') {
                    obj[cleanRoot] = leaf;
                }
            }

            leaf = obj;
        }

        return leaf;
    };

    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
        if (!givenKey) {
            return;
        }

        // Transform dot notation to bracket notation
        var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

        // The regex chunks

        var brackets = /(\[[^[\]]*])/;
        var child = /(\[[^[\]]*])/g;

        // Get the parent

        var segment = options.depth > 0 && brackets.exec(key);
        var parent = segment ? key.slice(0, segment.index) : key;

        // Stash the parent if it exists

        var keys = [];
        if (parent) {
            // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
            if (!options.plainObjects && has.call(Object.prototype, parent)) {
                if (!options.allowPrototypes) {
                    return;
                }
            }

            keys.push(parent);
        }

        // Loop through children appending to the array until we hit depth

        var i = 0;
        while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
            i += 1;
            if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
                if (!options.allowPrototypes) {
                    return;
                }
            }
            keys.push(segment[1]);
        }

        // If there's a remainder, just add whatever is left

        if (segment) {
            keys.push('[' + key.slice(segment.index) + ']');
        }

        return parseObject(keys, val, options, valuesParsed);
    };

    var normalizeParseOptions = function normalizeParseOptions(opts) {
        if (!opts) {
            return defaults;
        }

        if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
            throw new TypeError('Decoder has to be a function.');
        }

        if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
            throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        }
        var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

        return {
            allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
            allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
            allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
            arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
            charset: charset,
            charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
            comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
            decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
            delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
            // eslint-disable-next-line no-implicit-coercion, no-extra-parens
            depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
            ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
            interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
            parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
            parseArrays: opts.parseArrays !== false,
            plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
            strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
        };
    };

    module.exports = function (str, opts) {
        var options = normalizeParseOptions(opts);

        if (str === '' || str === null || typeof str === 'undefined') {
            return options.plainObjects ? Object.create(null) : {};
        }

        var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
        var obj = options.plainObjects ? Object.create(null) : {};

        // Iterate over the keys and setup the new object

        var keys = Object.keys(tempObj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
            obj = utils.merge(obj, newObj, options);
        }

        if (options.allowSparse === true) {
            return obj;
        }

        return utils.compact(obj);
    };


    /***/ }),

    /***/ "./node_modules/qs/lib/stringify.js":
    /*!******************************************!*\
      !*** ./node_modules/qs/lib/stringify.js ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var getSideChannel = __webpack_require__(/*! side-channel */ "./node_modules/side-channel/index.js");
    var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
    var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");
    var has = Object.prototype.hasOwnProperty;

    var arrayPrefixGenerators = {
        brackets: function brackets(prefix) {
            return prefix + '[]';
        },
        comma: 'comma',
        indices: function indices(prefix, key) {
            return prefix + '[' + key + ']';
        },
        repeat: function repeat(prefix) {
            return prefix;
        }
    };

    var isArray = Array.isArray;
    var split = String.prototype.split;
    var push = Array.prototype.push;
    var pushToArray = function (arr, valueOrArray) {
        push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    };

    var toISO = Date.prototype.toISOString;

    var defaultFormat = formats['default'];
    var defaults = {
        addQueryPrefix: false,
        allowDots: false,
        charset: 'utf-8',
        charsetSentinel: false,
        delimiter: '&',
        encode: true,
        encoder: utils.encode,
        encodeValuesOnly: false,
        format: defaultFormat,
        formatter: formats.formatters[defaultFormat],
        // deprecated
        indices: false,
        serializeDate: function serializeDate(date) {
            return toISO.call(date);
        },
        skipNulls: false,
        strictNullHandling: false
    };

    var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
        return typeof v === 'string'
            || typeof v === 'number'
            || typeof v === 'boolean'
            || typeof v === 'symbol'
            || typeof v === 'bigint';
    };

    var sentinel = {};

    var stringify = function stringify(
        object,
        prefix,
        generateArrayPrefix,
        commaRoundTrip,
        strictNullHandling,
        skipNulls,
        encoder,
        filter,
        sort,
        allowDots,
        serializeDate,
        format,
        formatter,
        encodeValuesOnly,
        charset,
        sideChannel
    ) {
        var obj = object;

        var tmpSc = sideChannel;
        var step = 0;
        var findFlag = false;
        while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
            // Where object last appeared in the ref tree
            var pos = tmpSc.get(object);
            step += 1;
            if (typeof pos !== 'undefined') {
                if (pos === step) {
                    throw new RangeError('Cyclic object value');
                } else {
                    findFlag = true; // Break while
                }
            }
            if (typeof tmpSc.get(sentinel) === 'undefined') {
                step = 0;
            }
        }

        if (typeof filter === 'function') {
            obj = filter(prefix, obj);
        } else if (obj instanceof Date) {
            obj = serializeDate(obj);
        } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
            obj = utils.maybeMap(obj, function (value) {
                if (value instanceof Date) {
                    return serializeDate(value);
                }
                return value;
            });
        }

        if (obj === null) {
            if (strictNullHandling) {
                return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
            }

            obj = '';
        }

        if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
            if (encoder) {
                var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
                if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                    var valuesArray = split.call(String(obj), ',');
                    var valuesJoined = '';
                    for (var i = 0; i < valuesArray.length; ++i) {
                        valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                    }
                    return [formatter(keyValue) + (commaRoundTrip && isArray(obj) && valuesArray.length === 1 ? '[]' : '') + '=' + valuesJoined];
                }
                return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
            }
            return [formatter(prefix) + '=' + formatter(String(obj))];
        }

        var values = [];

        if (typeof obj === 'undefined') {
            return values;
        }

        var objKeys;
        if (generateArrayPrefix === 'comma' && isArray(obj)) {
            // we need to join elements in
            objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
        } else if (isArray(filter)) {
            objKeys = filter;
        } else {
            var keys = Object.keys(obj);
            objKeys = sort ? keys.sort(sort) : keys;
        }

        var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + '[]' : prefix;

        for (var j = 0; j < objKeys.length; ++j) {
            var key = objKeys[j];
            var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

            if (skipNulls && value === null) {
                continue;
            }

            var keyPrefix = isArray(obj)
                ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix
                : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');

            sideChannel.set(object, step);
            var valueSideChannel = getSideChannel();
            valueSideChannel.set(sentinel, sideChannel);
            pushToArray(values, stringify(
                value,
                keyPrefix,
                generateArrayPrefix,
                commaRoundTrip,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                format,
                formatter,
                encodeValuesOnly,
                charset,
                valueSideChannel
            ));
        }

        return values;
    };

    var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
        if (!opts) {
            return defaults;
        }

        if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
            throw new TypeError('Encoder has to be a function.');
        }

        var charset = opts.charset || defaults.charset;
        if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
            throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        }

        var format = formats['default'];
        if (typeof opts.format !== 'undefined') {
            if (!has.call(formats.formatters, opts.format)) {
                throw new TypeError('Unknown format option provided.');
            }
            format = opts.format;
        }
        var formatter = formats.formatters[format];

        var filter = defaults.filter;
        if (typeof opts.filter === 'function' || isArray(opts.filter)) {
            filter = opts.filter;
        }

        return {
            addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
            allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
            charset: charset,
            charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
            delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
            encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
            encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
            encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
            filter: filter,
            format: format,
            formatter: formatter,
            serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
            skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
            sort: typeof opts.sort === 'function' ? opts.sort : null,
            strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
        };
    };

    module.exports = function (object, opts) {
        var obj = object;
        var options = normalizeStringifyOptions(opts);

        var objKeys;
        var filter;

        if (typeof options.filter === 'function') {
            filter = options.filter;
            obj = filter('', obj);
        } else if (isArray(options.filter)) {
            filter = options.filter;
            objKeys = filter;
        }

        var keys = [];

        if (typeof obj !== 'object' || obj === null) {
            return '';
        }

        var arrayFormat;
        if (opts && opts.arrayFormat in arrayPrefixGenerators) {
            arrayFormat = opts.arrayFormat;
        } else if (opts && 'indices' in opts) {
            arrayFormat = opts.indices ? 'indices' : 'repeat';
        } else {
            arrayFormat = 'indices';
        }

        var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
        if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
            throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
        }
        var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;

        if (!objKeys) {
            objKeys = Object.keys(obj);
        }

        if (options.sort) {
            objKeys.sort(options.sort);
        }

        var sideChannel = getSideChannel();
        for (var i = 0; i < objKeys.length; ++i) {
            var key = objKeys[i];

            if (options.skipNulls && obj[key] === null) {
                continue;
            }
            pushToArray(keys, stringify(
                obj[key],
                key,
                generateArrayPrefix,
                commaRoundTrip,
                options.strictNullHandling,
                options.skipNulls,
                options.encode ? options.encoder : null,
                options.filter,
                options.sort,
                options.allowDots,
                options.serializeDate,
                options.format,
                options.formatter,
                options.encodeValuesOnly,
                options.charset,
                sideChannel
            ));
        }

        var joined = keys.join(options.delimiter);
        var prefix = options.addQueryPrefix === true ? '?' : '';

        if (options.charsetSentinel) {
            if (options.charset === 'iso-8859-1') {
                // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
                prefix += 'utf8=%26%2310003%3B&';
            } else {
                // encodeURIComponent('✓')
                prefix += 'utf8=%E2%9C%93&';
            }
        }

        return joined.length > 0 ? prefix + joined : '';
    };


    /***/ }),

    /***/ "./node_modules/qs/lib/utils.js":
    /*!**************************************!*\
      !*** ./node_modules/qs/lib/utils.js ***!
      \**************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;

    var hexTable = (function () {
        var array = [];
        for (var i = 0; i < 256; ++i) {
            array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
        }

        return array;
    }());

    var compactQueue = function compactQueue(queue) {
        while (queue.length > 1) {
            var item = queue.pop();
            var obj = item.obj[item.prop];

            if (isArray(obj)) {
                var compacted = [];

                for (var j = 0; j < obj.length; ++j) {
                    if (typeof obj[j] !== 'undefined') {
                        compacted.push(obj[j]);
                    }
                }

                item.obj[item.prop] = compacted;
            }
        }
    };

    var arrayToObject = function arrayToObject(source, options) {
        var obj = options && options.plainObjects ? Object.create(null) : {};
        for (var i = 0; i < source.length; ++i) {
            if (typeof source[i] !== 'undefined') {
                obj[i] = source[i];
            }
        }

        return obj;
    };

    var merge = function merge(target, source, options) {
        /* eslint no-param-reassign: 0 */
        if (!source) {
            return target;
        }

        if (typeof source !== 'object') {
            if (isArray(target)) {
                target.push(source);
            } else if (target && typeof target === 'object') {
                if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                    target[source] = true;
                }
            } else {
                return [target, source];
            }

            return target;
        }

        if (!target || typeof target !== 'object') {
            return [target].concat(source);
        }

        var mergeTarget = target;
        if (isArray(target) && !isArray(source)) {
            mergeTarget = arrayToObject(target, options);
        }

        if (isArray(target) && isArray(source)) {
            source.forEach(function (item, i) {
                if (has.call(target, i)) {
                    var targetItem = target[i];
                    if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                        target[i] = merge(targetItem, item, options);
                    } else {
                        target.push(item);
                    }
                } else {
                    target[i] = item;
                }
            });
            return target;
        }

        return Object.keys(source).reduce(function (acc, key) {
            var value = source[key];

            if (has.call(acc, key)) {
                acc[key] = merge(acc[key], value, options);
            } else {
                acc[key] = value;
            }
            return acc;
        }, mergeTarget);
    };

    var assign = function assignSingleSource(target, source) {
        return Object.keys(source).reduce(function (acc, key) {
            acc[key] = source[key];
            return acc;
        }, target);
    };

    var decode = function (str, decoder, charset) {
        var strWithoutPlus = str.replace(/\+/g, ' ');
        if (charset === 'iso-8859-1') {
            // unescape never throws, no try...catch needed:
            return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
        }
        // utf-8
        try {
            return decodeURIComponent(strWithoutPlus);
        } catch (e) {
            return strWithoutPlus;
        }
    };

    var encode = function encode(str, defaultEncoder, charset, kind, format) {
        // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
        // It has been adapted here for stricter adherence to RFC 3986
        if (str.length === 0) {
            return str;
        }

        var string = str;
        if (typeof str === 'symbol') {
            string = Symbol.prototype.toString.call(str);
        } else if (typeof str !== 'string') {
            string = String(str);
        }

        if (charset === 'iso-8859-1') {
            return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
                return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
            });
        }

        var out = '';
        for (var i = 0; i < string.length; ++i) {
            var c = string.charCodeAt(i);

            if (
                c === 0x2D // -
                || c === 0x2E // .
                || c === 0x5F // _
                || c === 0x7E // ~
                || (c >= 0x30 && c <= 0x39) // 0-9
                || (c >= 0x41 && c <= 0x5A) // a-z
                || (c >= 0x61 && c <= 0x7A) // A-Z
                || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
            ) {
                out += string.charAt(i);
                continue;
            }

            if (c < 0x80) {
                out = out + hexTable[c];
                continue;
            }

            if (c < 0x800) {
                out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
                continue;
            }

            if (c < 0xD800 || c >= 0xE000) {
                out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
                continue;
            }

            i += 1;
            c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
            /* eslint operator-linebreak: [2, "before"] */
            out += hexTable[0xF0 | (c >> 18)]
                + hexTable[0x80 | ((c >> 12) & 0x3F)]
                + hexTable[0x80 | ((c >> 6) & 0x3F)]
                + hexTable[0x80 | (c & 0x3F)];
        }

        return out;
    };

    var compact = function compact(value) {
        var queue = [{ obj: { o: value }, prop: 'o' }];
        var refs = [];

        for (var i = 0; i < queue.length; ++i) {
            var item = queue[i];
            var obj = item.obj[item.prop];

            var keys = Object.keys(obj);
            for (var j = 0; j < keys.length; ++j) {
                var key = keys[j];
                var val = obj[key];
                if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                    queue.push({ obj: obj, prop: key });
                    refs.push(val);
                }
            }
        }

        compactQueue(queue);

        return value;
    };

    var isRegExp = function isRegExp(obj) {
        return Object.prototype.toString.call(obj) === '[object RegExp]';
    };

    var isBuffer = function isBuffer(obj) {
        if (!obj || typeof obj !== 'object') {
            return false;
        }

        return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };

    var combine = function combine(a, b) {
        return [].concat(a, b);
    };

    var maybeMap = function maybeMap(val, fn) {
        if (isArray(val)) {
            var mapped = [];
            for (var i = 0; i < val.length; i += 1) {
                mapped.push(fn(val[i]));
            }
            return mapped;
        }
        return fn(val);
    };

    module.exports = {
        arrayToObject: arrayToObject,
        assign: assign,
        combine: combine,
        compact: compact,
        decode: decode,
        encode: encode,
        isBuffer: isBuffer,
        isRegExp: isRegExp,
        maybeMap: maybeMap,
        merge: merge
    };


    /***/ }),

    /***/ "./node_modules/setimmediate/setImmediate.js":
    /*!***************************************************!*\
      !*** ./node_modules/setimmediate/setImmediate.js ***!
      \***************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
        "use strict";

        if (global.setImmediate) {
            return;
        }

        var nextHandle = 1; // Spec says greater than zero
        var tasksByHandle = {};
        var currentlyRunningATask = false;
        var doc = global.document;
        var registerImmediate;

        function setImmediate(callback) {
          // Callback can either be a function or a string
          if (typeof callback !== "function") {
            callback = new Function("" + callback);
          }
          // Copy function arguments
          var args = new Array(arguments.length - 1);
          for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i + 1];
          }
          // Store and register the task
          var task = { callback: callback, args: args };
          tasksByHandle[nextHandle] = task;
          registerImmediate(nextHandle);
          return nextHandle++;
        }

        function clearImmediate(handle) {
            delete tasksByHandle[handle];
        }

        function run(task) {
            var callback = task.callback;
            var args = task.args;
            switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
            }
        }

        function runIfPresent(handle) {
            // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
            // So if we're currently running a task, we'll need to delay this invocation.
            if (currentlyRunningATask) {
                // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                // "too much recursion" error.
                setTimeout(runIfPresent, 0, handle);
            } else {
                var task = tasksByHandle[handle];
                if (task) {
                    currentlyRunningATask = true;
                    try {
                        run(task);
                    } finally {
                        clearImmediate(handle);
                        currentlyRunningATask = false;
                    }
                }
            }
        }

        function installNextTickImplementation() {
            registerImmediate = function(handle) {
                process.nextTick(function () { runIfPresent(handle); });
            };
        }

        function canUsePostMessage() {
            // The test against `importScripts` prevents this implementation from being installed inside a web worker,
            // where `global.postMessage` means something completely different and can't be used for this purpose.
            if (global.postMessage && !global.importScripts) {
                var postMessageIsAsynchronous = true;
                var oldOnMessage = global.onmessage;
                global.onmessage = function() {
                    postMessageIsAsynchronous = false;
                };
                global.postMessage("", "*");
                global.onmessage = oldOnMessage;
                return postMessageIsAsynchronous;
            }
        }

        function installPostMessageImplementation() {
            // Installs an event handler on `global` for the `message` event: see
            // * https://developer.mozilla.org/en/DOM/window.postMessage
            // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

            var messagePrefix = "setImmediate$" + Math.random() + "$";
            var onGlobalMessage = function(event) {
                if (event.source === global &&
                    typeof event.data === "string" &&
                    event.data.indexOf(messagePrefix) === 0) {
                    runIfPresent(+event.data.slice(messagePrefix.length));
                }
            };

            if (global.addEventListener) {
                global.addEventListener("message", onGlobalMessage, false);
            } else {
                global.attachEvent("onmessage", onGlobalMessage);
            }

            registerImmediate = function(handle) {
                global.postMessage(messagePrefix + handle, "*");
            };
        }

        function installMessageChannelImplementation() {
            var channel = new MessageChannel();
            channel.port1.onmessage = function(event) {
                var handle = event.data;
                runIfPresent(handle);
            };

            registerImmediate = function(handle) {
                channel.port2.postMessage(handle);
            };
        }

        function installReadyStateChangeImplementation() {
            var html = doc.documentElement;
            registerImmediate = function(handle) {
                // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                var script = doc.createElement("script");
                script.onreadystatechange = function () {
                    runIfPresent(handle);
                    script.onreadystatechange = null;
                    html.removeChild(script);
                    script = null;
                };
                html.appendChild(script);
            };
        }

        function installSetTimeoutImplementation() {
            registerImmediate = function(handle) {
                setTimeout(runIfPresent, 0, handle);
            };
        }

        // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
        var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
        attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

        // Don't get fooled by e.g. browserify environments.
        if ({}.toString.call(global.process) === "[object process]") {
            // For Node.js before 0.9
            installNextTickImplementation();

        } else if (canUsePostMessage()) {
            // For non-IE10 modern browsers
            installPostMessageImplementation();

        } else if (global.MessageChannel) {
            // For web workers, where supported
            installMessageChannelImplementation();

        } else if (doc && "onreadystatechange" in doc.createElement("script")) {
            // For IE 6–8
            installReadyStateChangeImplementation();

        } else {
            // For older browsers
            installSetTimeoutImplementation();
        }

        attachTo.setImmediate = setImmediate;
        attachTo.clearImmediate = clearImmediate;
    }(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

    /***/ }),

    /***/ "./node_modules/side-channel/index.js":
    /*!********************************************!*\
      !*** ./node_modules/side-channel/index.js ***!
      \********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");
    var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");
    var inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");

    var $TypeError = GetIntrinsic('%TypeError%');
    var $WeakMap = GetIntrinsic('%WeakMap%', true);
    var $Map = GetIntrinsic('%Map%', true);

    var $weakMapGet = callBound('WeakMap.prototype.get', true);
    var $weakMapSet = callBound('WeakMap.prototype.set', true);
    var $weakMapHas = callBound('WeakMap.prototype.has', true);
    var $mapGet = callBound('Map.prototype.get', true);
    var $mapSet = callBound('Map.prototype.set', true);
    var $mapHas = callBound('Map.prototype.has', true);

    /*
     * This function traverses the list returning the node corresponding to the
     * given key.
     *
     * That node is also moved to the head of the list, so that if it's accessed
     * again we don't need to traverse the whole list. By doing so, all the recently
     * used nodes can be accessed relatively quickly.
     */
    var listGetNode = function (list, key) { // eslint-disable-line consistent-return
        for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
            if (curr.key === key) {
                prev.next = curr.next;
                curr.next = list.next;
                list.next = curr; // eslint-disable-line no-param-reassign
                return curr;
            }
        }
    };

    var listGet = function (objects, key) {
        var node = listGetNode(objects, key);
        return node && node.value;
    };
    var listSet = function (objects, key, value) {
        var node = listGetNode(objects, key);
        if (node) {
            node.value = value;
        } else {
            // Prepend the new node to the beginning of the list
            objects.next = { // eslint-disable-line no-param-reassign
                key: key,
                next: objects.next,
                value: value
            };
        }
    };
    var listHas = function (objects, key) {
        return !!listGetNode(objects, key);
    };

    module.exports = function getSideChannel() {
        var $wm;
        var $m;
        var $o;
        var channel = {
            assert: function (key) {
                if (!channel.has(key)) {
                    throw new $TypeError('Side channel does not contain ' + inspect(key));
                }
            },
            get: function (key) { // eslint-disable-line consistent-return
                if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                    if ($wm) {
                        return $weakMapGet($wm, key);
                    }
                } else if ($Map) {
                    if ($m) {
                        return $mapGet($m, key);
                    }
                } else {
                    if ($o) { // eslint-disable-line no-lonely-if
                        return listGet($o, key);
                    }
                }
            },
            has: function (key) {
                if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                    if ($wm) {
                        return $weakMapHas($wm, key);
                    }
                } else if ($Map) {
                    if ($m) {
                        return $mapHas($m, key);
                    }
                } else {
                    if ($o) { // eslint-disable-line no-lonely-if
                        return listHas($o, key);
                    }
                }
                return false;
            },
            set: function (key, value) {
                if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                    if (!$wm) {
                        $wm = new $WeakMap();
                    }
                    $weakMapSet($wm, key, value);
                } else if ($Map) {
                    if (!$m) {
                        $m = new $Map();
                    }
                    $mapSet($m, key, value);
                } else {
                    if (!$o) {
                        /*
                         * Initialize the linked list as an empty node, so that we don't have
                         * to special-case handling of the first node: we can always refer to
                         * it as (previous node).next, instead of something like (list).head
                         */
                        $o = { key: {}, next: null };
                    }
                    listSet($o, key, value);
                }
            }
        };
        return channel;
    };


    /***/ }),

    /***/ "./node_modules/timers-browserify/main.js":
    /*!************************************************!*\
      !*** ./node_modules/timers-browserify/main.js ***!
      \************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
                (typeof self !== "undefined" && self) ||
                window;
    var apply = Function.prototype.apply;

    // DOM APIs, for completeness

    exports.setTimeout = function() {
      return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
    };
    exports.setInterval = function() {
      return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
    };
    exports.clearTimeout =
    exports.clearInterval = function(timeout) {
      if (timeout) {
        timeout.close();
      }
    };

    function Timeout(id, clearFn) {
      this._id = id;
      this._clearFn = clearFn;
    }
    Timeout.prototype.unref = Timeout.prototype.ref = function() {};
    Timeout.prototype.close = function() {
      this._clearFn.call(scope, this._id);
    };

    // Does not start the time, just sets up the members needed.
    exports.enroll = function(item, msecs) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = msecs;
    };

    exports.unenroll = function(item) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = -1;
    };

    exports._unrefActive = exports.active = function(item) {
      clearTimeout(item._idleTimeoutId);

      var msecs = item._idleTimeout;
      if (msecs >= 0) {
        item._idleTimeoutId = setTimeout(function onTimeout() {
          if (item._onTimeout)
            item._onTimeout();
        }, msecs);
      }
    };

    // setimmediate attaches itself to the global object
    __webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
    // On some exotic environments, it's not clear which object `setimmediate` was
    // able to install onto.  Search each possibility in the same order as the
    // `setimmediate` library.
    exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                           (typeof global !== "undefined" && global.setImmediate) ||
                           (this && this.setImmediate);
    exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                             (typeof global !== "undefined" && global.clearImmediate) ||
                             (this && this.clearImmediate);

    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

    /***/ }),

    /***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
    /*!********************************************************************!*\
      !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
      \********************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
    /* globals __VUE_SSR_CONTEXT__ */

    // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.

    function normalizeComponent(
      scriptExports,
      render,
      staticRenderFns,
      functionalTemplate,
      injectStyles,
      scopeId,
      moduleIdentifier /* server only */,
      shadowMode /* vue-cli only */
    ) {
      // Vue.extend constructor export interop
      var options =
        typeof scriptExports === 'function' ? scriptExports.options : scriptExports

      // render functions
      if (render) {
        options.render = render
        options.staticRenderFns = staticRenderFns
        options._compiled = true
      }

      // functional template
      if (functionalTemplate) {
        options.functional = true
      }

      // scopedId
      if (scopeId) {
        options._scopeId = 'data-v-' + scopeId
      }

      var hook
      if (moduleIdentifier) {
        // server build
        hook = function (context) {
          // 2.3 injection
          context =
            context || // cached call
            (this.$vnode && this.$vnode.ssrContext) || // stateful
            (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__
          }
          // inject component styles
          if (injectStyles) {
            injectStyles.call(this, context)
          }
          // register component module identifier for async chunk inferrence
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier)
          }
        }
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook
      } else if (injectStyles) {
        hook = shadowMode
          ? function () {
              injectStyles.call(
                this,
                (options.functional ? this.parent : this).$root.$options.shadowRoot
              )
            }
          : injectStyles
      }

      if (hook) {
        if (options.functional) {
          // for template-only hot-reload because in that case the render fn doesn't
          // go through the normalizer
          options._injectStyles = hook
          // register for functional component in vue file
          var originalRender = options.render
          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context)
            return originalRender(h, context)
          }
        } else {
          // inject component registration as beforeCreate hook
          var existing = options.beforeCreate
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
        }
      }

      return {
        exports: scriptExports,
        options: options
      }
    }


    /***/ }),

    /***/ "./node_modules/vue/dist/vue.common.dev.js":
    /*!*************************************************!*\
      !*** ./node_modules/vue/dist/vue.common.dev.js ***!
      \*************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
     * Vue.js v2.7.13
     * (c) 2014-2022 Evan You
     * Released under the MIT License.
     */


    const emptyObject = Object.freeze({});
    const isArray = Array.isArray;
    // These helpers produce better VM code in JS engines due to their
    // explicitness and function inlining.
    function isUndef(v) {
        return v === undefined || v === null;
    }
    function isDef(v) {
        return v !== undefined && v !== null;
    }
    function isTrue(v) {
        return v === true;
    }
    function isFalse(v) {
        return v === false;
    }
    /**
     * Check if value is primitive.
     */
    function isPrimitive(value) {
        return (typeof value === 'string' ||
            typeof value === 'number' ||
            // $flow-disable-line
            typeof value === 'symbol' ||
            typeof value === 'boolean');
    }
    function isFunction(value) {
        return typeof value === 'function';
    }
    /**
     * Quick object check - this is primarily used to tell
     * objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
    function isObject(obj) {
        return obj !== null && typeof obj === 'object';
    }
    /**
     * Get the raw type string of a value, e.g., [object Object].
     */
    const _toString = Object.prototype.toString;
    function toRawType(value) {
        return _toString.call(value).slice(8, -1);
    }
    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
    function isPlainObject(obj) {
        return _toString.call(obj) === '[object Object]';
    }
    function isRegExp(v) {
        return _toString.call(v) === '[object RegExp]';
    }
    /**
     * Check if val is a valid array index.
     */
    function isValidArrayIndex(val) {
        const n = parseFloat(String(val));
        return n >= 0 && Math.floor(n) === n && isFinite(val);
    }
    function isPromise(val) {
        return (isDef(val) &&
            typeof val.then === 'function' &&
            typeof val.catch === 'function');
    }
    /**
     * Convert a value to a string that is actually rendered.
     */
    function toString(val) {
        return val == null
            ? ''
            : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
                ? JSON.stringify(val, null, 2)
                : String(val);
    }
    /**
     * Convert an input value to a number for persistence.
     * If the conversion fails, return original string.
     */
    function toNumber(val) {
        const n = parseFloat(val);
        return isNaN(n) ? val : n;
    }
    /**
     * Make a map and return a function for checking if a key
     * is in that map.
     */
    function makeMap(str, expectsLowerCase) {
        const map = Object.create(null);
        const list = str.split(',');
        for (let i = 0; i < list.length; i++) {
            map[list[i]] = true;
        }
        return expectsLowerCase ? val => map[val.toLowerCase()] : val => map[val];
    }
    /**
     * Check if a tag is a built-in tag.
     */
    const isBuiltInTag = makeMap('slot,component', true);
    /**
     * Check if an attribute is a reserved attribute.
     */
    const isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
    /**
     * Remove an item from an array.
     */
    function remove$2(arr, item) {
        const len = arr.length;
        if (len) {
            // fast path for the only / last item
            if (item === arr[len - 1]) {
                arr.length = len - 1;
                return;
            }
            const index = arr.indexOf(item);
            if (index > -1) {
                return arr.splice(index, 1);
            }
        }
    }
    /**
     * Check whether an object has the property.
     */
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
    }
    /**
     * Create a cached version of a pure function.
     */
    function cached(fn) {
        const cache = Object.create(null);
        return function cachedFn(str) {
            const hit = cache[str];
            return hit || (cache[str] = fn(str));
        };
    }
    /**
     * Camelize a hyphen-delimited string.
     */
    const camelizeRE = /-(\w)/g;
    const camelize = cached((str) => {
        return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
    });
    /**
     * Capitalize a string.
     */
    const capitalize = cached((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
    /**
     * Hyphenate a camelCase string.
     */
    const hyphenateRE = /\B([A-Z])/g;
    const hyphenate = cached((str) => {
        return str.replace(hyphenateRE, '-$1').toLowerCase();
    });
    /**
     * Simple bind polyfill for environments that do not support it,
     * e.g., PhantomJS 1.x. Technically, we don't need this anymore
     * since native bind is now performant enough in most browsers.
     * But removing it would mean breaking code that was able to run in
     * PhantomJS 1.x, so this must be kept for backward compatibility.
     */
    /* istanbul ignore next */
    function polyfillBind(fn, ctx) {
        function boundFn(a) {
            const l = arguments.length;
            return l
                ? l > 1
                    ? fn.apply(ctx, arguments)
                    : fn.call(ctx, a)
                : fn.call(ctx);
        }
        boundFn._length = fn.length;
        return boundFn;
    }
    function nativeBind(fn, ctx) {
        return fn.bind(ctx);
    }
    // @ts-expect-error bind cannot be `undefined`
    const bind$1 = Function.prototype.bind ? nativeBind : polyfillBind;
    /**
     * Convert an Array-like object to a real Array.
     */
    function toArray(list, start) {
        start = start || 0;
        let i = list.length - start;
        const ret = new Array(i);
        while (i--) {
            ret[i] = list[i + start];
        }
        return ret;
    }
    /**
     * Mix properties into target object.
     */
    function extend(to, _from) {
        for (const key in _from) {
            to[key] = _from[key];
        }
        return to;
    }
    /**
     * Merge an Array of Objects into a single Object.
     */
    function toObject(arr) {
        const res = {};
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                extend(res, arr[i]);
            }
        }
        return res;
    }
    /* eslint-disable no-unused-vars */
    /**
     * Perform no operation.
     * Stubbing args to make Flow happy without leaving useless transpiled code
     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
     */
    function noop(a, b, c) { }
    /**
     * Always return false.
     */
    const no = (a, b, c) => false;
    /* eslint-enable no-unused-vars */
    /**
     * Return the same value.
     */
    const identity = (_) => _;
    /**
     * Generate a string containing static keys from compiler modules.
     */
    function genStaticKeys$1(modules) {
        return modules
            .reduce((keys, m) => {
            return keys.concat(m.staticKeys || []);
        }, [])
            .join(',');
    }
    /**
     * Check if two values are loosely equal - that is,
     * if they are plain objects, do they have the same shape?
     */
    function looseEqual(a, b) {
        if (a === b)
            return true;
        const isObjectA = isObject(a);
        const isObjectB = isObject(b);
        if (isObjectA && isObjectB) {
            try {
                const isArrayA = Array.isArray(a);
                const isArrayB = Array.isArray(b);
                if (isArrayA && isArrayB) {
                    return (a.length === b.length &&
                        a.every((e, i) => {
                            return looseEqual(e, b[i]);
                        }));
                }
                else if (a instanceof Date && b instanceof Date) {
                    return a.getTime() === b.getTime();
                }
                else if (!isArrayA && !isArrayB) {
                    const keysA = Object.keys(a);
                    const keysB = Object.keys(b);
                    return (keysA.length === keysB.length &&
                        keysA.every(key => {
                            return looseEqual(a[key], b[key]);
                        }));
                }
                else {
                    /* istanbul ignore next */
                    return false;
                }
            }
            catch (e) {
                /* istanbul ignore next */
                return false;
            }
        }
        else if (!isObjectA && !isObjectB) {
            return String(a) === String(b);
        }
        else {
            return false;
        }
    }
    /**
     * Return the first index at which a loosely equal value can be
     * found in the array (if value is a plain object, the array must
     * contain an object of the same shape), or -1 if it is not present.
     */
    function looseIndexOf(arr, val) {
        for (let i = 0; i < arr.length; i++) {
            if (looseEqual(arr[i], val))
                return i;
        }
        return -1;
    }
    /**
     * Ensure a function is called only once.
     */
    function once(fn) {
        let called = false;
        return function () {
            if (!called) {
                called = true;
                fn.apply(this, arguments);
            }
        };
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#polyfill
    function hasChanged(x, y) {
        if (x === y) {
            return x === 0 && 1 / x !== 1 / y;
        }
        else {
            return x === x || y === y;
        }
    }

    const SSR_ATTR = 'data-server-rendered';
    const ASSET_TYPES = ['component', 'directive', 'filter'];
    const LIFECYCLE_HOOKS = [
        'beforeCreate',
        'created',
        'beforeMount',
        'mounted',
        'beforeUpdate',
        'updated',
        'beforeDestroy',
        'destroyed',
        'activated',
        'deactivated',
        'errorCaptured',
        'serverPrefetch',
        'renderTracked',
        'renderTriggered'
    ];

    var config = {
        /**
         * Option merge strategies (used in core/util/options)
         */
        // $flow-disable-line
        optionMergeStrategies: Object.create(null),
        /**
         * Whether to suppress warnings.
         */
        silent: false,
        /**
         * Show production mode tip message on boot?
         */
        productionTip: true,
        /**
         * Whether to enable devtools
         */
        devtools: true,
        /**
         * Whether to record perf
         */
        performance: false,
        /**
         * Error handler for watcher errors
         */
        errorHandler: null,
        /**
         * Warn handler for watcher warns
         */
        warnHandler: null,
        /**
         * Ignore certain custom elements
         */
        ignoredElements: [],
        /**
         * Custom user key aliases for v-on
         */
        // $flow-disable-line
        keyCodes: Object.create(null),
        /**
         * Check if a tag is reserved so that it cannot be registered as a
         * component. This is platform-dependent and may be overwritten.
         */
        isReservedTag: no,
        /**
         * Check if an attribute is reserved so that it cannot be used as a component
         * prop. This is platform-dependent and may be overwritten.
         */
        isReservedAttr: no,
        /**
         * Check if a tag is an unknown element.
         * Platform-dependent.
         */
        isUnknownElement: no,
        /**
         * Get the namespace of an element
         */
        getTagNamespace: noop,
        /**
         * Parse the real tag name for the specific platform.
         */
        parsePlatformTagName: identity,
        /**
         * Check if an attribute must be bound using property, e.g. value
         * Platform-dependent.
         */
        mustUseProp: no,
        /**
         * Perform updates asynchronously. Intended to be used by Vue Test Utils
         * This will significantly reduce performance if set to false.
         */
        async: true,
        /**
         * Exposed for legacy reasons
         */
        _lifecycleHooks: LIFECYCLE_HOOKS
    };

    /**
     * unicode letters used for parsing html tags, component names and property paths.
     * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
     * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
     */
    const unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
    /**
     * Check if a string starts with $ or _
     */
    function isReserved(str) {
        const c = (str + '').charCodeAt(0);
        return c === 0x24 || c === 0x5f;
    }
    /**
     * Define a property.
     */
    function def(obj, key, val, enumerable) {
        Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
        });
    }
    /**
     * Parse simple path.
     */
    const bailRE = new RegExp(`[^${unicodeRegExp.source}.$_\\d]`);
    function parsePath(path) {
        if (bailRE.test(path)) {
            return;
        }
        const segments = path.split('.');
        return function (obj) {
            for (let i = 0; i < segments.length; i++) {
                if (!obj)
                    return;
                obj = obj[segments[i]];
            }
            return obj;
        };
    }

    // can we use __proto__?
    const hasProto = '__proto__' in {};
    // Browser environment sniffing
    const inBrowser = typeof window !== 'undefined';
    const UA = inBrowser && window.navigator.userAgent.toLowerCase();
    const isIE = UA && /msie|trident/.test(UA);
    const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
    const isEdge = UA && UA.indexOf('edge/') > 0;
    UA && UA.indexOf('android') > 0;
    const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
    UA && /chrome\/\d+/.test(UA) && !isEdge;
    UA && /phantomjs/.test(UA);
    const isFF = UA && UA.match(/firefox\/(\d+)/);
    // Firefox has a "watch" function on Object.prototype...
    // @ts-expect-error firebox support
    const nativeWatch = {}.watch;
    let supportsPassive = false;
    if (inBrowser) {
        try {
            const opts = {};
            Object.defineProperty(opts, 'passive', {
                get() {
                    /* istanbul ignore next */
                    supportsPassive = true;
                }
            }); // https://github.com/facebook/flow/issues/285
            window.addEventListener('test-passive', null, opts);
        }
        catch (e) { }
    }
    // this needs to be lazy-evaled because vue may be required before
    // vue-server-renderer can set VUE_ENV
    let _isServer;
    const isServerRendering = () => {
        if (_isServer === undefined) {
            /* istanbul ignore if */
            if (!inBrowser && typeof global !== 'undefined') {
                // detect presence of vue-server-renderer and avoid
                // Webpack shimming the process
                _isServer =
                    global['process'] && global['process'].env.VUE_ENV === 'server';
            }
            else {
                _isServer = false;
            }
        }
        return _isServer;
    };
    // detect devtools
    const devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    /* istanbul ignore next */
    function isNative(Ctor) {
        return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
    }
    const hasSymbol = typeof Symbol !== 'undefined' &&
        isNative(Symbol) &&
        typeof Reflect !== 'undefined' &&
        isNative(Reflect.ownKeys);
    let _Set; // $flow-disable-line
    /* istanbul ignore if */ if (typeof Set !== 'undefined' && isNative(Set)) {
        // use native Set when available.
        _Set = Set;
    }
    else {
        // a non-standard Set polyfill that only works with primitive keys.
        _Set = class Set {
            constructor() {
                this.set = Object.create(null);
            }
            has(key) {
                return this.set[key] === true;
            }
            add(key) {
                this.set[key] = true;
            }
            clear() {
                this.set = Object.create(null);
            }
        };
    }

    let currentInstance = null;
    /**
     * This is exposed for compatibility with v3 (e.g. some functions in VueUse
     * relies on it). Do not use this internally, just use `currentInstance`.
     *
     * @internal this function needs manual type declaration because it relies
     * on previously manually authored types from Vue 2
     */
    function getCurrentInstance() {
        return currentInstance && { proxy: currentInstance };
    }
    /**
     * @internal
     */
    function setCurrentInstance(vm = null) {
        if (!vm)
            currentInstance && currentInstance._scope.off();
        currentInstance = vm;
        vm && vm._scope.on();
    }

    /**
     * @internal
     */
    class VNode {
        constructor(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
            this.tag = tag;
            this.data = data;
            this.children = children;
            this.text = text;
            this.elm = elm;
            this.ns = undefined;
            this.context = context;
            this.fnContext = undefined;
            this.fnOptions = undefined;
            this.fnScopeId = undefined;
            this.key = data && data.key;
            this.componentOptions = componentOptions;
            this.componentInstance = undefined;
            this.parent = undefined;
            this.raw = false;
            this.isStatic = false;
            this.isRootInsert = true;
            this.isComment = false;
            this.isCloned = false;
            this.isOnce = false;
            this.asyncFactory = asyncFactory;
            this.asyncMeta = undefined;
            this.isAsyncPlaceholder = false;
        }
        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */
        get child() {
            return this.componentInstance;
        }
    }
    const createEmptyVNode = (text = '') => {
        const node = new VNode();
        node.text = text;
        node.isComment = true;
        return node;
    };
    function createTextVNode(val) {
        return new VNode(undefined, undefined, undefined, String(val));
    }
    // optimized shallow clone
    // used for static nodes and slot nodes because they may be reused across
    // multiple renders, cloning them avoids errors when DOM manipulations rely
    // on their elm reference.
    function cloneVNode(vnode) {
        const cloned = new VNode(vnode.tag, vnode.data,
        // #7975
        // clone children array to avoid mutating original in case of cloning
        // a child.
        vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
        cloned.ns = vnode.ns;
        cloned.isStatic = vnode.isStatic;
        cloned.key = vnode.key;
        cloned.isComment = vnode.isComment;
        cloned.fnContext = vnode.fnContext;
        cloned.fnOptions = vnode.fnOptions;
        cloned.fnScopeId = vnode.fnScopeId;
        cloned.asyncMeta = vnode.asyncMeta;
        cloned.isCloned = true;
        return cloned;
    }

    /* not type checking this file because flow doesn't play well with Proxy */
    let initProxy;
    {
        const allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' +
            'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
            'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
            'require' // for Webpack/Browserify
        );
        const warnNonPresent = (target, key) => {
            warn$2(`Property or method "${key}" is not defined on the instance but ` +
                'referenced during render. Make sure that this property is reactive, ' +
                'either in the data option, or for class-based components, by ' +
                'initializing the property. ' +
                'See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
        };
        const warnReservedPrefix = (target, key) => {
            warn$2(`Property "${key}" must be accessed with "$data.${key}" because ` +
                'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
                'prevent conflicts with Vue internals. ' +
                'See: https://v2.vuejs.org/v2/api/#data', target);
        };
        const hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);
        if (hasProxy) {
            const isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
            config.keyCodes = new Proxy(config.keyCodes, {
                set(target, key, value) {
                    if (isBuiltInModifier(key)) {
                        warn$2(`Avoid overwriting built-in modifier in config.keyCodes: .${key}`);
                        return false;
                    }
                    else {
                        target[key] = value;
                        return true;
                    }
                }
            });
        }
        const hasHandler = {
            has(target, key) {
                const has = key in target;
                const isAllowed = allowedGlobals(key) ||
                    (typeof key === 'string' &&
                        key.charAt(0) === '_' &&
                        !(key in target.$data));
                if (!has && !isAllowed) {
                    if (key in target.$data)
                        warnReservedPrefix(target, key);
                    else
                        warnNonPresent(target, key);
                }
                return has || !isAllowed;
            }
        };
        const getHandler = {
            get(target, key) {
                if (typeof key === 'string' && !(key in target)) {
                    if (key in target.$data)
                        warnReservedPrefix(target, key);
                    else
                        warnNonPresent(target, key);
                }
                return target[key];
            }
        };
        initProxy = function initProxy(vm) {
            if (hasProxy) {
                // determine which proxy handler to use
                const options = vm.$options;
                const handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
                vm._renderProxy = new Proxy(vm, handlers);
            }
            else {
                vm._renderProxy = vm;
            }
        };
    }

    let uid$2 = 0;
    const pendingCleanupDeps = [];
    const cleanupDeps = () => {
        for (let i = 0; i < pendingCleanupDeps.length; i++) {
            const dep = pendingCleanupDeps[i];
            dep.subs = dep.subs.filter(s => s);
            dep._pending = false;
        }
        pendingCleanupDeps.length = 0;
    };
    /**
     * A dep is an observable that can have multiple
     * directives subscribing to it.
     * @internal
     */
    class Dep {
        constructor() {
            // pending subs cleanup
            this._pending = false;
            this.id = uid$2++;
            this.subs = [];
        }
        addSub(sub) {
            this.subs.push(sub);
        }
        removeSub(sub) {
            // #12696 deps with massive amount of subscribers are extremely slow to
            // clean up in Chromium
            // to workaround this, we unset the sub for now, and clear them on
            // next scheduler flush.
            this.subs[this.subs.indexOf(sub)] = null;
            if (!this._pending) {
                this._pending = true;
                pendingCleanupDeps.push(this);
            }
        }
        depend(info) {
            if (Dep.target) {
                Dep.target.addDep(this);
                if (info && Dep.target.onTrack) {
                    Dep.target.onTrack(Object.assign({ effect: Dep.target }, info));
                }
            }
        }
        notify(info) {
            // stabilize the subscriber list first
            const subs = this.subs.filter(s => s);
            if (!config.async) {
                // subs aren't sorted in scheduler if not running async
                // we need to sort them now to make sure they fire in correct
                // order
                subs.sort((a, b) => a.id - b.id);
            }
            for (let i = 0, l = subs.length; i < l; i++) {
                const sub = subs[i];
                if (info) {
                    sub.onTrigger &&
                        sub.onTrigger(Object.assign({ effect: subs[i] }, info));
                }
                sub.update();
            }
        }
    }
    // The current target watcher being evaluated.
    // This is globally unique because only one watcher
    // can be evaluated at a time.
    Dep.target = null;
    const targetStack = [];
    function pushTarget(target) {
        targetStack.push(target);
        Dep.target = target;
    }
    function popTarget() {
        targetStack.pop();
        Dep.target = targetStack[targetStack.length - 1];
    }

    /*
     * not type checking this file because flow doesn't play well with
     * dynamically accessing methods on Array prototype
     */
    const arrayProto = Array.prototype;
    const arrayMethods = Object.create(arrayProto);
    const methodsToPatch = [
        'push',
        'pop',
        'shift',
        'unshift',
        'splice',
        'sort',
        'reverse'
    ];
    /**
     * Intercept mutating methods and emit events
     */
    methodsToPatch.forEach(function (method) {
        // cache original method
        const original = arrayProto[method];
        def(arrayMethods, method, function mutator(...args) {
            const result = original.apply(this, args);
            const ob = this.__ob__;
            let inserted;
            switch (method) {
                case 'push':
                case 'unshift':
                    inserted = args;
                    break;
                case 'splice':
                    inserted = args.slice(2);
                    break;
            }
            if (inserted)
                ob.observeArray(inserted);
            // notify change
            {
                ob.dep.notify({
                    type: "array mutation" /* TriggerOpTypes.ARRAY_MUTATION */,
                    target: this,
                    key: method
                });
            }
            return result;
        });
    });

    const rawMap = new WeakMap();
    function reactive(target) {
        makeReactive(target, false);
        return target;
    }
    /**
     * Return a shallowly-reactive copy of the original object, where only the root
     * level properties are reactive. It also does not auto-unwrap refs (even at the
     * root level).
     */
    function shallowReactive(target) {
        makeReactive(target, true);
        def(target, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, true);
        return target;
    }
    function makeReactive(target, shallow) {
        // if trying to observe a readonly proxy, return the readonly version.
        if (!isReadonly(target)) {
            {
                if (isArray(target)) {
                    warn$2(`Avoid using Array as root value for ${shallow ? `shallowReactive()` : `reactive()`} as it cannot be tracked in watch() or watchEffect(). Use ${shallow ? `shallowRef()` : `ref()`} instead. This is a Vue-2-only limitation.`);
                }
                const existingOb = target && target.__ob__;
                if (existingOb && existingOb.shallow !== shallow) {
                    warn$2(`Target is already a ${existingOb.shallow ? `` : `non-`}shallow reactive object, and cannot be converted to ${shallow ? `` : `non-`}shallow.`);
                }
            }
            const ob = observe(target, shallow, isServerRendering() /* ssr mock reactivity */);
            if (!ob) {
                if (target == null || isPrimitive(target)) {
                    warn$2(`value cannot be made reactive: ${String(target)}`);
                }
                if (isCollectionType(target)) {
                    warn$2(`Vue 2 does not support reactive collection types such as Map or Set.`);
                }
            }
        }
    }
    function isReactive(value) {
        if (isReadonly(value)) {
            return isReactive(value["__v_raw" /* ReactiveFlags.RAW */]);
        }
        return !!(value && value.__ob__);
    }
    function isShallow(value) {
        return !!(value && value.__v_isShallow);
    }
    function isReadonly(value) {
        return !!(value && value.__v_isReadonly);
    }
    function isProxy(value) {
        return isReactive(value) || isReadonly(value);
    }
    function toRaw(observed) {
        const raw = observed && observed["__v_raw" /* ReactiveFlags.RAW */];
        return raw ? toRaw(raw) : observed;
    }
    function markRaw(value) {
        if (isObject(value)) {
            rawMap.set(value, true);
        }
        return value;
    }
    /**
     * @internal
     */
    function isCollectionType(value) {
        const type = toRawType(value);
        return (type === 'Map' || type === 'WeakMap' || type === 'Set' || type === 'WeakSet');
    }

    const arrayKeys = Object.getOwnPropertyNames(arrayMethods);
    const NO_INIITIAL_VALUE = {};
    /**
     * In some cases we may want to disable observation inside a component's
     * update computation.
     */
    let shouldObserve = true;
    function toggleObserving(value) {
        shouldObserve = value;
    }
    // ssr mock dep
    const mockDep = {
        notify: noop,
        depend: noop,
        addSub: noop,
        removeSub: noop
    };
    /**
     * Observer class that is attached to each observed
     * object. Once attached, the observer converts the target
     * object's property keys into getter/setters that
     * collect dependencies and dispatch updates.
     */
    class Observer {
        constructor(value, shallow = false, mock = false) {
            this.value = value;
            this.shallow = shallow;
            this.mock = mock;
            // this.value = value
            this.dep = mock ? mockDep : new Dep();
            this.vmCount = 0;
            def(value, '__ob__', this);
            if (isArray(value)) {
                if (!mock) {
                    if (hasProto) {
                        value.__proto__ = arrayMethods;
                        /* eslint-enable no-proto */
                    }
                    else {
                        for (let i = 0, l = arrayKeys.length; i < l; i++) {
                            const key = arrayKeys[i];
                            def(value, key, arrayMethods[key]);
                        }
                    }
                }
                if (!shallow) {
                    this.observeArray(value);
                }
            }
            else {
                /**
                 * Walk through all properties and convert them into
                 * getter/setters. This method should only be called when
                 * value type is Object.
                 */
                const keys = Object.keys(value);
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    defineReactive(value, key, NO_INIITIAL_VALUE, undefined, shallow, mock);
                }
            }
        }
        /**
         * Observe a list of Array items.
         */
        observeArray(value) {
            for (let i = 0, l = value.length; i < l; i++) {
                observe(value[i], false, this.mock);
            }
        }
    }
    // helpers
    /**
     * Attempt to create an observer instance for a value,
     * returns the new observer if successfully observed,
     * or the existing observer if the value already has one.
     */
    function observe(value, shallow, ssrMockReactivity) {
        if (value && hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
            return value.__ob__;
        }
        if (shouldObserve &&
            (ssrMockReactivity || !isServerRendering()) &&
            (isArray(value) || isPlainObject(value)) &&
            Object.isExtensible(value) &&
            !value.__v_skip /* ReactiveFlags.SKIP */ &&
            !rawMap.has(value) &&
            !isRef(value) &&
            !(value instanceof VNode)) {
            return new Observer(value, shallow, ssrMockReactivity);
        }
    }
    /**
     * Define a reactive property on an Object.
     */
    function defineReactive(obj, key, val, customSetter, shallow, mock) {
        const dep = new Dep();
        const property = Object.getOwnPropertyDescriptor(obj, key);
        if (property && property.configurable === false) {
            return;
        }
        // cater for pre-defined getter/setters
        const getter = property && property.get;
        const setter = property && property.set;
        if ((!getter || setter) &&
            (val === NO_INIITIAL_VALUE || arguments.length === 2)) {
            val = obj[key];
        }
        let childOb = !shallow && observe(val, false, mock);
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function reactiveGetter() {
                const value = getter ? getter.call(obj) : val;
                if (Dep.target) {
                    {
                        dep.depend({
                            target: obj,
                            type: "get" /* TrackOpTypes.GET */,
                            key
                        });
                    }
                    if (childOb) {
                        childOb.dep.depend();
                        if (isArray(value)) {
                            dependArray(value);
                        }
                    }
                }
                return isRef(value) && !shallow ? value.value : value;
            },
            set: function reactiveSetter(newVal) {
                const value = getter ? getter.call(obj) : val;
                if (!hasChanged(value, newVal)) {
                    return;
                }
                if (customSetter) {
                    customSetter();
                }
                if (setter) {
                    setter.call(obj, newVal);
                }
                else if (getter) {
                    // #7981: for accessor properties without setter
                    return;
                }
                else if (!shallow && isRef(value) && !isRef(newVal)) {
                    value.value = newVal;
                    return;
                }
                else {
                    val = newVal;
                }
                childOb = !shallow && observe(newVal, false, mock);
                {
                    dep.notify({
                        type: "set" /* TriggerOpTypes.SET */,
                        target: obj,
                        key,
                        newValue: newVal,
                        oldValue: value
                    });
                }
            }
        });
        return dep;
    }
    function set(target, key, val) {
        if ((isUndef(target) || isPrimitive(target))) {
            warn$2(`Cannot set reactive property on undefined, null, or primitive value: ${target}`);
        }
        if (isReadonly(target)) {
            warn$2(`Set operation on key "${key}" failed: target is readonly.`);
            return;
        }
        const ob = target.__ob__;
        if (isArray(target) && isValidArrayIndex(key)) {
            target.length = Math.max(target.length, key);
            target.splice(key, 1, val);
            // when mocking for SSR, array methods are not hijacked
            if (ob && !ob.shallow && ob.mock) {
                observe(val, false, true);
            }
            return val;
        }
        if (key in target && !(key in Object.prototype)) {
            target[key] = val;
            return val;
        }
        if (target._isVue || (ob && ob.vmCount)) {
            warn$2('Avoid adding reactive properties to a Vue instance or its root $data ' +
                    'at runtime - declare it upfront in the data option.');
            return val;
        }
        if (!ob) {
            target[key] = val;
            return val;
        }
        defineReactive(ob.value, key, val, undefined, ob.shallow, ob.mock);
        {
            ob.dep.notify({
                type: "add" /* TriggerOpTypes.ADD */,
                target: target,
                key,
                newValue: val,
                oldValue: undefined
            });
        }
        return val;
    }
    function del(target, key) {
        if ((isUndef(target) || isPrimitive(target))) {
            warn$2(`Cannot delete reactive property on undefined, null, or primitive value: ${target}`);
        }
        if (isArray(target) && isValidArrayIndex(key)) {
            target.splice(key, 1);
            return;
        }
        const ob = target.__ob__;
        if (target._isVue || (ob && ob.vmCount)) {
            warn$2('Avoid deleting properties on a Vue instance or its root $data ' +
                    '- just set it to null.');
            return;
        }
        if (isReadonly(target)) {
            warn$2(`Delete operation on key "${key}" failed: target is readonly.`);
            return;
        }
        if (!hasOwn(target, key)) {
            return;
        }
        delete target[key];
        if (!ob) {
            return;
        }
        {
            ob.dep.notify({
                type: "delete" /* TriggerOpTypes.DELETE */,
                target: target,
                key
            });
        }
    }
    /**
     * Collect dependencies on array elements when the array is touched, since
     * we cannot intercept array element access like property getters.
     */
    function dependArray(value) {
        for (let e, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            if (e && e.__ob__) {
                e.__ob__.dep.depend();
            }
            if (isArray(e)) {
                dependArray(e);
            }
        }
    }

    /**
     * @internal
     */
    const RefFlag = `__v_isRef`;
    function isRef(r) {
        return !!(r && r.__v_isRef === true);
    }
    function ref$1(value) {
        return createRef(value, false);
    }
    function shallowRef(value) {
        return createRef(value, true);
    }
    function createRef(rawValue, shallow) {
        if (isRef(rawValue)) {
            return rawValue;
        }
        const ref = {};
        def(ref, RefFlag, true);
        def(ref, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, shallow);
        def(ref, 'dep', defineReactive(ref, 'value', rawValue, null, shallow, isServerRendering()));
        return ref;
    }
    function triggerRef(ref) {
        if (!ref.dep) {
            warn$2(`received object is not a triggerable ref.`);
        }
        {
            ref.dep &&
                ref.dep.notify({
                    type: "set" /* TriggerOpTypes.SET */,
                    target: ref,
                    key: 'value'
                });
        }
    }
    function unref(ref) {
        return isRef(ref) ? ref.value : ref;
    }
    function proxyRefs(objectWithRefs) {
        if (isReactive(objectWithRefs)) {
            return objectWithRefs;
        }
        const proxy = {};
        const keys = Object.keys(objectWithRefs);
        for (let i = 0; i < keys.length; i++) {
            proxyWithRefUnwrap(proxy, objectWithRefs, keys[i]);
        }
        return proxy;
    }
    function proxyWithRefUnwrap(target, source, key) {
        Object.defineProperty(target, key, {
            enumerable: true,
            configurable: true,
            get: () => {
                const val = source[key];
                if (isRef(val)) {
                    return val.value;
                }
                else {
                    const ob = val && val.__ob__;
                    if (ob)
                        ob.dep.depend();
                    return val;
                }
            },
            set: value => {
                const oldValue = source[key];
                if (isRef(oldValue) && !isRef(value)) {
                    oldValue.value = value;
                }
                else {
                    source[key] = value;
                }
            }
        });
    }
    function customRef(factory) {
        const dep = new Dep();
        const { get, set } = factory(() => {
            {
                dep.depend({
                    target: ref,
                    type: "get" /* TrackOpTypes.GET */,
                    key: 'value'
                });
            }
        }, () => {
            {
                dep.notify({
                    target: ref,
                    type: "set" /* TriggerOpTypes.SET */,
                    key: 'value'
                });
            }
        });
        const ref = {
            get value() {
                return get();
            },
            set value(newVal) {
                set(newVal);
            }
        };
        def(ref, RefFlag, true);
        return ref;
    }
    function toRefs(object) {
        if (!isReactive(object)) {
            warn$2(`toRefs() expects a reactive object but received a plain one.`);
        }
        const ret = isArray(object) ? new Array(object.length) : {};
        for (const key in object) {
            ret[key] = toRef(object, key);
        }
        return ret;
    }
    function toRef(object, key, defaultValue) {
        const val = object[key];
        if (isRef(val)) {
            return val;
        }
        const ref = {
            get value() {
                const val = object[key];
                return val === undefined ? defaultValue : val;
            },
            set value(newVal) {
                object[key] = newVal;
            }
        };
        def(ref, RefFlag, true);
        return ref;
    }

    const rawToReadonlyMap = new WeakMap();
    const rawToShallowReadonlyMap = new WeakMap();
    function readonly(target) {
        return createReadonly(target, false);
    }
    function createReadonly(target, shallow) {
        if (!isPlainObject(target)) {
            {
                if (isArray(target)) {
                    warn$2(`Vue 2 does not support readonly arrays.`);
                }
                else if (isCollectionType(target)) {
                    warn$2(`Vue 2 does not support readonly collection types such as Map or Set.`);
                }
                else {
                    warn$2(`value cannot be made readonly: ${typeof target}`);
                }
            }
            return target;
        }
        // already a readonly object
        if (isReadonly(target)) {
            return target;
        }
        // already has a readonly proxy
        const map = shallow ? rawToShallowReadonlyMap : rawToReadonlyMap;
        const existingProxy = map.get(target);
        if (existingProxy) {
            return existingProxy;
        }
        const proxy = Object.create(Object.getPrototypeOf(target));
        map.set(target, proxy);
        def(proxy, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, true);
        def(proxy, "__v_raw" /* ReactiveFlags.RAW */, target);
        if (isRef(target)) {
            def(proxy, RefFlag, true);
        }
        if (shallow || isShallow(target)) {
            def(proxy, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, true);
        }
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
            defineReadonlyProperty(proxy, target, keys[i], shallow);
        }
        return proxy;
    }
    function defineReadonlyProperty(proxy, target, key, shallow) {
        Object.defineProperty(proxy, key, {
            enumerable: true,
            configurable: true,
            get() {
                const val = target[key];
                return shallow || !isPlainObject(val) ? val : readonly(val);
            },
            set() {
                warn$2(`Set operation on key "${key}" failed: target is readonly.`);
            }
        });
    }
    /**
     * Returns a reactive-copy of the original object, where only the root level
     * properties are readonly, and does NOT unwrap refs nor recursively convert
     * returned properties.
     * This is used for creating the props proxy object for stateful components.
     */
    function shallowReadonly(target) {
        return createReadonly(target, true);
    }

    function computed(getterOrOptions, debugOptions) {
        let getter;
        let setter;
        const onlyGetter = isFunction(getterOrOptions);
        if (onlyGetter) {
            getter = getterOrOptions;
            setter = () => {
                    warn$2('Write operation failed: computed value is readonly');
                }
                ;
        }
        else {
            getter = getterOrOptions.get;
            setter = getterOrOptions.set;
        }
        const watcher = isServerRendering()
            ? null
            : new Watcher(currentInstance, getter, noop, { lazy: true });
        if (watcher && debugOptions) {
            watcher.onTrack = debugOptions.onTrack;
            watcher.onTrigger = debugOptions.onTrigger;
        }
        const ref = {
            // some libs rely on the presence effect for checking computed refs
            // from normal refs, but the implementation doesn't matter
            effect: watcher,
            get value() {
                if (watcher) {
                    if (watcher.dirty) {
                        watcher.evaluate();
                    }
                    if (Dep.target) {
                        if (Dep.target.onTrack) {
                            Dep.target.onTrack({
                                effect: Dep.target,
                                target: ref,
                                type: "get" /* TrackOpTypes.GET */,
                                key: 'value'
                            });
                        }
                        watcher.depend();
                    }
                    return watcher.value;
                }
                else {
                    return getter();
                }
            },
            set value(newVal) {
                setter(newVal);
            }
        };
        def(ref, RefFlag, true);
        def(ref, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, onlyGetter);
        return ref;
    }

    let mark;
    let measure;
    {
        const perf = inBrowser && window.performance;
        /* istanbul ignore if */
        if (perf &&
            // @ts-ignore
            perf.mark &&
            // @ts-ignore
            perf.measure &&
            // @ts-ignore
            perf.clearMarks &&
            // @ts-ignore
            perf.clearMeasures) {
            mark = tag => perf.mark(tag);
            measure = (name, startTag, endTag) => {
                perf.measure(name, startTag, endTag);
                perf.clearMarks(startTag);
                perf.clearMarks(endTag);
                // perf.clearMeasures(name)
            };
        }
    }

    const normalizeEvent = cached((name) => {
        const passive = name.charAt(0) === '&';
        name = passive ? name.slice(1) : name;
        const once = name.charAt(0) === '~'; // Prefixed last, checked first
        name = once ? name.slice(1) : name;
        const capture = name.charAt(0) === '!';
        name = capture ? name.slice(1) : name;
        return {
            name,
            once,
            capture,
            passive
        };
    });
    function createFnInvoker(fns, vm) {
        function invoker() {
            const fns = invoker.fns;
            if (isArray(fns)) {
                const cloned = fns.slice();
                for (let i = 0; i < cloned.length; i++) {
                    invokeWithErrorHandling(cloned[i], null, arguments, vm, `v-on handler`);
                }
            }
            else {
                // return handler return value for single handlers
                return invokeWithErrorHandling(fns, null, arguments, vm, `v-on handler`);
            }
        }
        invoker.fns = fns;
        return invoker;
    }
    function updateListeners(on, oldOn, add, remove, createOnceHandler, vm) {
        let name, cur, old, event;
        for (name in on) {
            cur = on[name];
            old = oldOn[name];
            event = normalizeEvent(name);
            if (isUndef(cur)) {
                warn$2(`Invalid handler for event "${event.name}": got ` + String(cur), vm);
            }
            else if (isUndef(old)) {
                if (isUndef(cur.fns)) {
                    cur = on[name] = createFnInvoker(cur, vm);
                }
                if (isTrue(event.once)) {
                    cur = on[name] = createOnceHandler(event.name, cur, event.capture);
                }
                add(event.name, cur, event.capture, event.passive, event.params);
            }
            else if (cur !== old) {
                old.fns = cur;
                on[name] = old;
            }
        }
        for (name in oldOn) {
            if (isUndef(on[name])) {
                event = normalizeEvent(name);
                remove(event.name, oldOn[name], event.capture);
            }
        }
    }

    function mergeVNodeHook(def, hookKey, hook) {
        if (def instanceof VNode) {
            def = def.data.hook || (def.data.hook = {});
        }
        let invoker;
        const oldHook = def[hookKey];
        function wrappedHook() {
            hook.apply(this, arguments);
            // important: remove merged hook to ensure it's called only once
            // and prevent memory leak
            remove$2(invoker.fns, wrappedHook);
        }
        if (isUndef(oldHook)) {
            // no existing hook
            invoker = createFnInvoker([wrappedHook]);
        }
        else {
            /* istanbul ignore if */
            if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
                // already a merged invoker
                invoker = oldHook;
                invoker.fns.push(wrappedHook);
            }
            else {
                // existing plain hook
                invoker = createFnInvoker([oldHook, wrappedHook]);
            }
        }
        invoker.merged = true;
        def[hookKey] = invoker;
    }

    function extractPropsFromVNodeData(data, Ctor, tag) {
        // we are only extracting raw values here.
        // validation and default values are handled in the child
        // component itself.
        const propOptions = Ctor.options.props;
        if (isUndef(propOptions)) {
            return;
        }
        const res = {};
        const { attrs, props } = data;
        if (isDef(attrs) || isDef(props)) {
            for (const key in propOptions) {
                const altKey = hyphenate(key);
                {
                    const keyInLowerCase = key.toLowerCase();
                    if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
                        tip(`Prop "${keyInLowerCase}" is passed to component ` +
                            `${formatComponentName(
                            // @ts-expect-error tag is string
                            tag || Ctor)}, but the declared prop name is` +
                            ` "${key}". ` +
                            `Note that HTML attributes are case-insensitive and camelCased ` +
                            `props need to use their kebab-case equivalents when using in-DOM ` +
                            `templates. You should probably use "${altKey}" instead of "${key}".`);
                    }
                }
                checkProp(res, props, key, altKey, true) ||
                    checkProp(res, attrs, key, altKey, false);
            }
        }
        return res;
    }
    function checkProp(res, hash, key, altKey, preserve) {
        if (isDef(hash)) {
            if (hasOwn(hash, key)) {
                res[key] = hash[key];
                if (!preserve) {
                    delete hash[key];
                }
                return true;
            }
            else if (hasOwn(hash, altKey)) {
                res[key] = hash[altKey];
                if (!preserve) {
                    delete hash[altKey];
                }
                return true;
            }
        }
        return false;
    }

    // The template compiler attempts to minimize the need for normalization by
    // statically analyzing the template at compile time.
    //
    // For plain HTML markup, normalization can be completely skipped because the
    // generated render function is guaranteed to return Array<VNode>. There are
    // two cases where extra normalization is needed:
    // 1. When the children contains components - because a functional component
    // may return an Array instead of a single root. In this case, just a simple
    // normalization is needed - if any child is an Array, we flatten the whole
    // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
    // because functional components already normalize their own children.
    function simpleNormalizeChildren(children) {
        for (let i = 0; i < children.length; i++) {
            if (isArray(children[i])) {
                return Array.prototype.concat.apply([], children);
            }
        }
        return children;
    }
    // 2. When the children contains constructs that always generated nested Arrays,
    // e.g. <template>, <slot>, v-for, or when the children is provided by user
    // with hand-written render functions / JSX. In such cases a full normalization
    // is needed to cater to all possible types of children values.
    function normalizeChildren(children) {
        return isPrimitive(children)
            ? [createTextVNode(children)]
            : isArray(children)
                ? normalizeArrayChildren(children)
                : undefined;
    }
    function isTextNode(node) {
        return isDef(node) && isDef(node.text) && isFalse(node.isComment);
    }
    function normalizeArrayChildren(children, nestedIndex) {
        const res = [];
        let i, c, lastIndex, last;
        for (i = 0; i < children.length; i++) {
            c = children[i];
            if (isUndef(c) || typeof c === 'boolean')
                continue;
            lastIndex = res.length - 1;
            last = res[lastIndex];
            //  nested
            if (isArray(c)) {
                if (c.length > 0) {
                    c = normalizeArrayChildren(c, `${nestedIndex || ''}_${i}`);
                    // merge adjacent text nodes
                    if (isTextNode(c[0]) && isTextNode(last)) {
                        res[lastIndex] = createTextVNode(last.text + c[0].text);
                        c.shift();
                    }
                    res.push.apply(res, c);
                }
            }
            else if (isPrimitive(c)) {
                if (isTextNode(last)) {
                    // merge adjacent text nodes
                    // this is necessary for SSR hydration because text nodes are
                    // essentially merged when rendered to HTML strings
                    res[lastIndex] = createTextVNode(last.text + c);
                }
                else if (c !== '') {
                    // convert primitive to vnode
                    res.push(createTextVNode(c));
                }
            }
            else {
                if (isTextNode(c) && isTextNode(last)) {
                    // merge adjacent text nodes
                    res[lastIndex] = createTextVNode(last.text + c.text);
                }
                else {
                    // default key for nested array children (likely generated by v-for)
                    if (isTrue(children._isVList) &&
                        isDef(c.tag) &&
                        isUndef(c.key) &&
                        isDef(nestedIndex)) {
                        c.key = `__vlist${nestedIndex}_${i}__`;
                    }
                    res.push(c);
                }
            }
        }
        return res;
    }

    const SIMPLE_NORMALIZE = 1;
    const ALWAYS_NORMALIZE = 2;
    // wrapper function for providing a more flexible interface
    // without getting yelled at by flow
    function createElement$1(context, tag, data, children, normalizationType, alwaysNormalize) {
        if (isArray(data) || isPrimitive(data)) {
            normalizationType = children;
            children = data;
            data = undefined;
        }
        if (isTrue(alwaysNormalize)) {
            normalizationType = ALWAYS_NORMALIZE;
        }
        return _createElement(context, tag, data, children, normalizationType);
    }
    function _createElement(context, tag, data, children, normalizationType) {
        if (isDef(data) && isDef(data.__ob__)) {
            warn$2(`Avoid using observed data object as vnode data: ${JSON.stringify(data)}\n` + 'Always create fresh vnode data objects in each render!', context);
            return createEmptyVNode();
        }
        // object syntax in v-bind
        if (isDef(data) && isDef(data.is)) {
            tag = data.is;
        }
        if (!tag) {
            // in case of component :is set to falsy value
            return createEmptyVNode();
        }
        // warn against non-primitive key
        if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
            warn$2('Avoid using non-primitive value as key, ' +
                'use string/number value instead.', context);
        }
        // support single function children as default scoped slot
        if (isArray(children) && isFunction(children[0])) {
            data = data || {};
            data.scopedSlots = { default: children[0] };
            children.length = 0;
        }
        if (normalizationType === ALWAYS_NORMALIZE) {
            children = normalizeChildren(children);
        }
        else if (normalizationType === SIMPLE_NORMALIZE) {
            children = simpleNormalizeChildren(children);
        }
        let vnode, ns;
        if (typeof tag === 'string') {
            let Ctor;
            ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
            if (config.isReservedTag(tag)) {
                // platform built-in elements
                if (isDef(data) &&
                    isDef(data.nativeOn) &&
                    data.tag !== 'component') {
                    warn$2(`The .native modifier for v-on is only valid on components but it was used on <${tag}>.`, context);
                }
                vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
            }
            else if ((!data || !data.pre) &&
                isDef((Ctor = resolveAsset(context.$options, 'components', tag)))) {
                // component
                vnode = createComponent(Ctor, data, context, children, tag);
            }
            else {
                // unknown or unlisted namespaced elements
                // check at runtime because it may get assigned a namespace when its
                // parent normalizes children
                vnode = new VNode(tag, data, children, undefined, undefined, context);
            }
        }
        else {
            // direct component options / constructor
            vnode = createComponent(tag, data, context, children);
        }
        if (isArray(vnode)) {
            return vnode;
        }
        else if (isDef(vnode)) {
            if (isDef(ns))
                applyNS(vnode, ns);
            if (isDef(data))
                registerDeepBindings(data);
            return vnode;
        }
        else {
            return createEmptyVNode();
        }
    }
    function applyNS(vnode, ns, force) {
        vnode.ns = ns;
        if (vnode.tag === 'foreignObject') {
            // use default namespace inside foreignObject
            ns = undefined;
            force = true;
        }
        if (isDef(vnode.children)) {
            for (let i = 0, l = vnode.children.length; i < l; i++) {
                const child = vnode.children[i];
                if (isDef(child.tag) &&
                    (isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
                    applyNS(child, ns, force);
                }
            }
        }
    }
    // ref #5318
    // necessary to ensure parent re-render when deep bindings like :style and
    // :class are used on slot nodes
    function registerDeepBindings(data) {
        if (isObject(data.style)) {
            traverse(data.style);
        }
        if (isObject(data.class)) {
            traverse(data.class);
        }
    }

    /**
     * Runtime helper for rendering v-for lists.
     */
    function renderList(val, render) {
        let ret = null, i, l, keys, key;
        if (isArray(val) || typeof val === 'string') {
            ret = new Array(val.length);
            for (i = 0, l = val.length; i < l; i++) {
                ret[i] = render(val[i], i);
            }
        }
        else if (typeof val === 'number') {
            ret = new Array(val);
            for (i = 0; i < val; i++) {
                ret[i] = render(i + 1, i);
            }
        }
        else if (isObject(val)) {
            if (hasSymbol && val[Symbol.iterator]) {
                ret = [];
                const iterator = val[Symbol.iterator]();
                let result = iterator.next();
                while (!result.done) {
                    ret.push(render(result.value, ret.length));
                    result = iterator.next();
                }
            }
            else {
                keys = Object.keys(val);
                ret = new Array(keys.length);
                for (i = 0, l = keys.length; i < l; i++) {
                    key = keys[i];
                    ret[i] = render(val[key], key, i);
                }
            }
        }
        if (!isDef(ret)) {
            ret = [];
        }
        ret._isVList = true;
        return ret;
    }

    /**
     * Runtime helper for rendering <slot>
     */
    function renderSlot(name, fallbackRender, props, bindObject) {
        const scopedSlotFn = this.$scopedSlots[name];
        let nodes;
        if (scopedSlotFn) {
            // scoped slot
            props = props || {};
            if (bindObject) {
                if (!isObject(bindObject)) {
                    warn$2('slot v-bind without argument expects an Object', this);
                }
                props = extend(extend({}, bindObject), props);
            }
            nodes =
                scopedSlotFn(props) ||
                    (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
        }
        else {
            nodes =
                this.$slots[name] ||
                    (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
        }
        const target = props && props.slot;
        if (target) {
            return this.$createElement('template', { slot: target }, nodes);
        }
        else {
            return nodes;
        }
    }

    /**
     * Runtime helper for resolving filters
     */
    function resolveFilter(id) {
        return resolveAsset(this.$options, 'filters', id, true) || identity;
    }

    function isKeyNotMatch(expect, actual) {
        if (isArray(expect)) {
            return expect.indexOf(actual) === -1;
        }
        else {
            return expect !== actual;
        }
    }
    /**
     * Runtime helper for checking keyCodes from config.
     * exposed as Vue.prototype._k
     * passing in eventKeyName as last argument separately for backwards compat
     */
    function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
        const mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
        if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
            return isKeyNotMatch(builtInKeyName, eventKeyName);
        }
        else if (mappedKeyCode) {
            return isKeyNotMatch(mappedKeyCode, eventKeyCode);
        }
        else if (eventKeyName) {
            return hyphenate(eventKeyName) !== key;
        }
        return eventKeyCode === undefined;
    }

    /**
     * Runtime helper for merging v-bind="object" into a VNode's data.
     */
    function bindObjectProps(data, tag, value, asProp, isSync) {
        if (value) {
            if (!isObject(value)) {
                warn$2('v-bind without argument expects an Object or Array value', this);
            }
            else {
                if (isArray(value)) {
                    value = toObject(value);
                }
                let hash;
                for (const key in value) {
                    if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
                        hash = data;
                    }
                    else {
                        const type = data.attrs && data.attrs.type;
                        hash =
                            asProp || config.mustUseProp(tag, type, key)
                                ? data.domProps || (data.domProps = {})
                                : data.attrs || (data.attrs = {});
                    }
                    const camelizedKey = camelize(key);
                    const hyphenatedKey = hyphenate(key);
                    if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
                        hash[key] = value[key];
                        if (isSync) {
                            const on = data.on || (data.on = {});
                            on[`update:${key}`] = function ($event) {
                                value[key] = $event;
                            };
                        }
                    }
                }
            }
        }
        return data;
    }

    /**
     * Runtime helper for rendering static trees.
     */
    function renderStatic(index, isInFor) {
        const cached = this._staticTrees || (this._staticTrees = []);
        let tree = cached[index];
        // if has already-rendered static tree and not inside v-for,
        // we can reuse the same tree.
        if (tree && !isInFor) {
            return tree;
        }
        // otherwise, render a fresh tree.
        tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, this._c, this // for render fns generated for functional component templates
        );
        markStatic$1(tree, `__static__${index}`, false);
        return tree;
    }
    /**
     * Runtime helper for v-once.
     * Effectively it means marking the node as static with a unique key.
     */
    function markOnce(tree, index, key) {
        markStatic$1(tree, `__once__${index}${key ? `_${key}` : ``}`, true);
        return tree;
    }
    function markStatic$1(tree, key, isOnce) {
        if (isArray(tree)) {
            for (let i = 0; i < tree.length; i++) {
                if (tree[i] && typeof tree[i] !== 'string') {
                    markStaticNode(tree[i], `${key}_${i}`, isOnce);
                }
            }
        }
        else {
            markStaticNode(tree, key, isOnce);
        }
    }
    function markStaticNode(node, key, isOnce) {
        node.isStatic = true;
        node.key = key;
        node.isOnce = isOnce;
    }

    function bindObjectListeners(data, value) {
        if (value) {
            if (!isPlainObject(value)) {
                warn$2('v-on without argument expects an Object value', this);
            }
            else {
                const on = (data.on = data.on ? extend({}, data.on) : {});
                for (const key in value) {
                    const existing = on[key];
                    const ours = value[key];
                    on[key] = existing ? [].concat(existing, ours) : ours;
                }
            }
        }
        return data;
    }

    function resolveScopedSlots(fns, res,
    // the following are added in 2.6
    hasDynamicKeys, contentHashKey) {
        res = res || { $stable: !hasDynamicKeys };
        for (let i = 0; i < fns.length; i++) {
            const slot = fns[i];
            if (isArray(slot)) {
                resolveScopedSlots(slot, res, hasDynamicKeys);
            }
            else if (slot) {
                // marker for reverse proxying v-slot without scope on this.$slots
                // @ts-expect-error
                if (slot.proxy) {
                    // @ts-expect-error
                    slot.fn.proxy = true;
                }
                res[slot.key] = slot.fn;
            }
        }
        if (contentHashKey) {
            res.$key = contentHashKey;
        }
        return res;
    }

    // helper to process dynamic keys for dynamic arguments in v-bind and v-on.
    function bindDynamicKeys(baseObj, values) {
        for (let i = 0; i < values.length; i += 2) {
            const key = values[i];
            if (typeof key === 'string' && key) {
                baseObj[values[i]] = values[i + 1];
            }
            else if (key !== '' && key !== null) {
                // null is a special value for explicitly removing a binding
                warn$2(`Invalid value for dynamic directive argument (expected string or null): ${key}`, this);
            }
        }
        return baseObj;
    }
    // helper to dynamically append modifier runtime markers to event names.
    // ensure only append when value is already string, otherwise it will be cast
    // to string and cause the type check to miss.
    function prependModifier(value, symbol) {
        return typeof value === 'string' ? symbol + value : value;
    }

    function installRenderHelpers(target) {
        target._o = markOnce;
        target._n = toNumber;
        target._s = toString;
        target._l = renderList;
        target._t = renderSlot;
        target._q = looseEqual;
        target._i = looseIndexOf;
        target._m = renderStatic;
        target._f = resolveFilter;
        target._k = checkKeyCodes;
        target._b = bindObjectProps;
        target._v = createTextVNode;
        target._e = createEmptyVNode;
        target._u = resolveScopedSlots;
        target._g = bindObjectListeners;
        target._d = bindDynamicKeys;
        target._p = prependModifier;
    }

    /**
     * Runtime helper for resolving raw children VNodes into a slot object.
     */
    function resolveSlots(children, context) {
        if (!children || !children.length) {
            return {};
        }
        const slots = {};
        for (let i = 0, l = children.length; i < l; i++) {
            const child = children[i];
            const data = child.data;
            // remove slot attribute if the node is resolved as a Vue slot node
            if (data && data.attrs && data.attrs.slot) {
                delete data.attrs.slot;
            }
            // named slots should only be respected if the vnode was rendered in the
            // same context.
            if ((child.context === context || child.fnContext === context) &&
                data &&
                data.slot != null) {
                const name = data.slot;
                const slot = slots[name] || (slots[name] = []);
                if (child.tag === 'template') {
                    slot.push.apply(slot, child.children || []);
                }
                else {
                    slot.push(child);
                }
            }
            else {
                (slots.default || (slots.default = [])).push(child);
            }
        }
        // ignore slots that contains only whitespace
        for (const name in slots) {
            if (slots[name].every(isWhitespace)) {
                delete slots[name];
            }
        }
        return slots;
    }
    function isWhitespace(node) {
        return (node.isComment && !node.asyncFactory) || node.text === ' ';
    }

    function isAsyncPlaceholder(node) {
        // @ts-expect-error not really boolean type
        return node.isComment && node.asyncFactory;
    }

    function normalizeScopedSlots(ownerVm, scopedSlots, normalSlots, prevScopedSlots) {
        let res;
        const hasNormalSlots = Object.keys(normalSlots).length > 0;
        const isStable = scopedSlots ? !!scopedSlots.$stable : !hasNormalSlots;
        const key = scopedSlots && scopedSlots.$key;
        if (!scopedSlots) {
            res = {};
        }
        else if (scopedSlots._normalized) {
            // fast path 1: child component re-render only, parent did not change
            return scopedSlots._normalized;
        }
        else if (isStable &&
            prevScopedSlots &&
            prevScopedSlots !== emptyObject &&
            key === prevScopedSlots.$key &&
            !hasNormalSlots &&
            !prevScopedSlots.$hasNormal) {
            // fast path 2: stable scoped slots w/ no normal slots to proxy,
            // only need to normalize once
            return prevScopedSlots;
        }
        else {
            res = {};
            for (const key in scopedSlots) {
                if (scopedSlots[key] && key[0] !== '$') {
                    res[key] = normalizeScopedSlot(ownerVm, normalSlots, key, scopedSlots[key]);
                }
            }
        }
        // expose normal slots on scopedSlots
        for (const key in normalSlots) {
            if (!(key in res)) {
                res[key] = proxyNormalSlot(normalSlots, key);
            }
        }
        // avoriaz seems to mock a non-extensible $scopedSlots object
        // and when that is passed down this would cause an error
        if (scopedSlots && Object.isExtensible(scopedSlots)) {
            scopedSlots._normalized = res;
        }
        def(res, '$stable', isStable);
        def(res, '$key', key);
        def(res, '$hasNormal', hasNormalSlots);
        return res;
    }
    function normalizeScopedSlot(vm, normalSlots, key, fn) {
        const normalized = function () {
            const cur = currentInstance;
            setCurrentInstance(vm);
            let res = arguments.length ? fn.apply(null, arguments) : fn({});
            res =
                res && typeof res === 'object' && !isArray(res)
                    ? [res] // single vnode
                    : normalizeChildren(res);
            const vnode = res && res[0];
            setCurrentInstance(cur);
            return res &&
                (!vnode ||
                    (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode))) // #9658, #10391
                ? undefined
                : res;
        };
        // this is a slot using the new v-slot syntax without scope. although it is
        // compiled as a scoped slot, render fn users would expect it to be present
        // on this.$slots because the usage is semantically a normal slot.
        if (fn.proxy) {
            Object.defineProperty(normalSlots, key, {
                get: normalized,
                enumerable: true,
                configurable: true
            });
        }
        return normalized;
    }
    function proxyNormalSlot(slots, key) {
        return () => slots[key];
    }

    function initSetup(vm) {
        const options = vm.$options;
        const setup = options.setup;
        if (setup) {
            const ctx = (vm._setupContext = createSetupContext(vm));
            setCurrentInstance(vm);
            pushTarget();
            const setupResult = invokeWithErrorHandling(setup, null, [vm._props || shallowReactive({}), ctx], vm, `setup`);
            popTarget();
            setCurrentInstance();
            if (isFunction(setupResult)) {
                // render function
                // @ts-ignore
                options.render = setupResult;
            }
            else if (isObject(setupResult)) {
                // bindings
                if (setupResult instanceof VNode) {
                    warn$2(`setup() should not return VNodes directly - ` +
                        `return a render function instead.`);
                }
                vm._setupState = setupResult;
                // __sfc indicates compiled bindings from <script setup>
                if (!setupResult.__sfc) {
                    for (const key in setupResult) {
                        if (!isReserved(key)) {
                            proxyWithRefUnwrap(vm, setupResult, key);
                        }
                        else {
                            warn$2(`Avoid using variables that start with _ or $ in setup().`);
                        }
                    }
                }
                else {
                    // exposed for compiled render fn
                    const proxy = (vm._setupProxy = {});
                    for (const key in setupResult) {
                        if (key !== '__sfc') {
                            proxyWithRefUnwrap(proxy, setupResult, key);
                        }
                    }
                }
            }
            else if (setupResult !== undefined) {
                warn$2(`setup() should return an object. Received: ${setupResult === null ? 'null' : typeof setupResult}`);
            }
        }
    }
    function createSetupContext(vm) {
        let exposeCalled = false;
        return {
            get attrs() {
                if (!vm._attrsProxy) {
                    const proxy = (vm._attrsProxy = {});
                    def(proxy, '_v_attr_proxy', true);
                    syncSetupProxy(proxy, vm.$attrs, emptyObject, vm, '$attrs');
                }
                return vm._attrsProxy;
            },
            get listeners() {
                if (!vm._listenersProxy) {
                    const proxy = (vm._listenersProxy = {});
                    syncSetupProxy(proxy, vm.$listeners, emptyObject, vm, '$listeners');
                }
                return vm._listenersProxy;
            },
            get slots() {
                return initSlotsProxy(vm);
            },
            emit: bind$1(vm.$emit, vm),
            expose(exposed) {
                {
                    if (exposeCalled) {
                        warn$2(`expose() should be called only once per setup().`, vm);
                    }
                    exposeCalled = true;
                }
                if (exposed) {
                    Object.keys(exposed).forEach(key => proxyWithRefUnwrap(vm, exposed, key));
                }
            }
        };
    }
    function syncSetupProxy(to, from, prev, instance, type) {
        let changed = false;
        for (const key in from) {
            if (!(key in to)) {
                changed = true;
                defineProxyAttr(to, key, instance, type);
            }
            else if (from[key] !== prev[key]) {
                changed = true;
            }
        }
        for (const key in to) {
            if (!(key in from)) {
                changed = true;
                delete to[key];
            }
        }
        return changed;
    }
    function defineProxyAttr(proxy, key, instance, type) {
        Object.defineProperty(proxy, key, {
            enumerable: true,
            configurable: true,
            get() {
                return instance[type][key];
            }
        });
    }
    function initSlotsProxy(vm) {
        if (!vm._slotsProxy) {
            syncSetupSlots((vm._slotsProxy = {}), vm.$scopedSlots);
        }
        return vm._slotsProxy;
    }
    function syncSetupSlots(to, from) {
        for (const key in from) {
            to[key] = from[key];
        }
        for (const key in to) {
            if (!(key in from)) {
                delete to[key];
            }
        }
    }
    /**
     * @internal use manual type def because public setup context type relies on
     * legacy VNode types
     */
    function useSlots() {
        return getContext().slots;
    }
    /**
     * @internal use manual type def because public setup context type relies on
     * legacy VNode types
     */
    function useAttrs() {
        return getContext().attrs;
    }
    /**
     * Vue 2 only
     * @internal use manual type def because public setup context type relies on
     * legacy VNode types
     */
    function useListeners() {
        return getContext().listeners;
    }
    function getContext() {
        if (!currentInstance) {
            warn$2(`useContext() called without active instance.`);
        }
        const vm = currentInstance;
        return vm._setupContext || (vm._setupContext = createSetupContext(vm));
    }
    /**
     * Runtime helper for merging default declarations. Imported by compiled code
     * only.
     * @internal
     */
    function mergeDefaults(raw, defaults) {
        const props = isArray(raw)
            ? raw.reduce((normalized, p) => ((normalized[p] = {}), normalized), {})
            : raw;
        for (const key in defaults) {
            const opt = props[key];
            if (opt) {
                if (isArray(opt) || isFunction(opt)) {
                    props[key] = { type: opt, default: defaults[key] };
                }
                else {
                    opt.default = defaults[key];
                }
            }
            else if (opt === null) {
                props[key] = { default: defaults[key] };
            }
            else {
                warn$2(`props default key "${key}" has no corresponding declaration.`);
            }
        }
        return props;
    }

    function initRender(vm) {
        vm._vnode = null; // the root of the child tree
        vm._staticTrees = null; // v-once cached trees
        const options = vm.$options;
        const parentVnode = (vm.$vnode = options._parentVnode); // the placeholder node in parent tree
        const renderContext = parentVnode && parentVnode.context;
        vm.$slots = resolveSlots(options._renderChildren, renderContext);
        vm.$scopedSlots = parentVnode
            ? normalizeScopedSlots(vm.$parent, parentVnode.data.scopedSlots, vm.$slots)
            : emptyObject;
        // bind the createElement fn to this instance
        // so that we get proper render context inside it.
        // args order: tag, data, children, normalizationType, alwaysNormalize
        // internal version is used by render functions compiled from templates
        // @ts-expect-error
        vm._c = (a, b, c, d) => createElement$1(vm, a, b, c, d, false);
        // normalization is always applied for the public version, used in
        // user-written render functions.
        // @ts-expect-error
        vm.$createElement = (a, b, c, d) => createElement$1(vm, a, b, c, d, true);
        // $attrs & $listeners are exposed for easier HOC creation.
        // they need to be reactive so that HOCs using them are always updated
        const parentData = parentVnode && parentVnode.data;
        /* istanbul ignore else */
        {
            defineReactive(vm, '$attrs', (parentData && parentData.attrs) || emptyObject, () => {
                !isUpdatingChildComponent && warn$2(`$attrs is readonly.`, vm);
            }, true);
            defineReactive(vm, '$listeners', options._parentListeners || emptyObject, () => {
                !isUpdatingChildComponent && warn$2(`$listeners is readonly.`, vm);
            }, true);
        }
    }
    let currentRenderingInstance = null;
    function renderMixin(Vue) {
        // install runtime convenience helpers
        installRenderHelpers(Vue.prototype);
        Vue.prototype.$nextTick = function (fn) {
            return nextTick(fn, this);
        };
        Vue.prototype._render = function () {
            const vm = this;
            const { render, _parentVnode } = vm.$options;
            if (_parentVnode && vm._isMounted) {
                vm.$scopedSlots = normalizeScopedSlots(vm.$parent, _parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
                if (vm._slotsProxy) {
                    syncSetupSlots(vm._slotsProxy, vm.$scopedSlots);
                }
            }
            // set parent vnode. this allows render functions to have access
            // to the data on the placeholder node.
            vm.$vnode = _parentVnode;
            // render self
            let vnode;
            try {
                // There's no need to maintain a stack because all render fns are called
                // separately from one another. Nested component's render fns are called
                // when parent component is patched.
                setCurrentInstance(vm);
                currentRenderingInstance = vm;
                vnode = render.call(vm._renderProxy, vm.$createElement);
            }
            catch (e) {
                handleError(e, vm, `render`);
                // return error render result,
                // or previous vnode to prevent render error causing blank component
                /* istanbul ignore else */
                if (vm.$options.renderError) {
                    try {
                        vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                    }
                    catch (e) {
                        handleError(e, vm, `renderError`);
                        vnode = vm._vnode;
                    }
                }
                else {
                    vnode = vm._vnode;
                }
            }
            finally {
                currentRenderingInstance = null;
                setCurrentInstance();
            }
            // if the returned array contains only a single node, allow it
            if (isArray(vnode) && vnode.length === 1) {
                vnode = vnode[0];
            }
            // return empty vnode in case the render function errored out
            if (!(vnode instanceof VNode)) {
                if (isArray(vnode)) {
                    warn$2('Multiple root nodes returned from render function. Render function ' +
                        'should return a single root node.', vm);
                }
                vnode = createEmptyVNode();
            }
            // set parent
            vnode.parent = _parentVnode;
            return vnode;
        };
    }

    function ensureCtor(comp, base) {
        if (comp.__esModule || (hasSymbol && comp[Symbol.toStringTag] === 'Module')) {
            comp = comp.default;
        }
        return isObject(comp) ? base.extend(comp) : comp;
    }
    function createAsyncPlaceholder(factory, data, context, children, tag) {
        const node = createEmptyVNode();
        node.asyncFactory = factory;
        node.asyncMeta = { data, context, children, tag };
        return node;
    }
    function resolveAsyncComponent(factory, baseCtor) {
        if (isTrue(factory.error) && isDef(factory.errorComp)) {
            return factory.errorComp;
        }
        if (isDef(factory.resolved)) {
            return factory.resolved;
        }
        const owner = currentRenderingInstance;
        if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
            // already pending
            factory.owners.push(owner);
        }
        if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
            return factory.loadingComp;
        }
        if (owner && !isDef(factory.owners)) {
            const owners = (factory.owners = [owner]);
            let sync = true;
            let timerLoading = null;
            let timerTimeout = null;
            owner.$on('hook:destroyed', () => remove$2(owners, owner));
            const forceRender = (renderCompleted) => {
                for (let i = 0, l = owners.length; i < l; i++) {
                    owners[i].$forceUpdate();
                }
                if (renderCompleted) {
                    owners.length = 0;
                    if (timerLoading !== null) {
                        clearTimeout(timerLoading);
                        timerLoading = null;
                    }
                    if (timerTimeout !== null) {
                        clearTimeout(timerTimeout);
                        timerTimeout = null;
                    }
                }
            };
            const resolve = once((res) => {
                // cache resolved
                factory.resolved = ensureCtor(res, baseCtor);
                // invoke callbacks only if this is not a synchronous resolve
                // (async resolves are shimmed as synchronous during SSR)
                if (!sync) {
                    forceRender(true);
                }
                else {
                    owners.length = 0;
                }
            });
            const reject = once(reason => {
                warn$2(`Failed to resolve async component: ${String(factory)}` +
                        (reason ? `\nReason: ${reason}` : ''));
                if (isDef(factory.errorComp)) {
                    factory.error = true;
                    forceRender(true);
                }
            });
            const res = factory(resolve, reject);
            if (isObject(res)) {
                if (isPromise(res)) {
                    // () => Promise
                    if (isUndef(factory.resolved)) {
                        res.then(resolve, reject);
                    }
                }
                else if (isPromise(res.component)) {
                    res.component.then(resolve, reject);
                    if (isDef(res.error)) {
                        factory.errorComp = ensureCtor(res.error, baseCtor);
                    }
                    if (isDef(res.loading)) {
                        factory.loadingComp = ensureCtor(res.loading, baseCtor);
                        if (res.delay === 0) {
                            factory.loading = true;
                        }
                        else {
                            // @ts-expect-error NodeJS timeout type
                            timerLoading = setTimeout(() => {
                                timerLoading = null;
                                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                    factory.loading = true;
                                    forceRender(false);
                                }
                            }, res.delay || 200);
                        }
                    }
                    if (isDef(res.timeout)) {
                        // @ts-expect-error NodeJS timeout type
                        timerTimeout = setTimeout(() => {
                            timerTimeout = null;
                            if (isUndef(factory.resolved)) {
                                reject(`timeout (${res.timeout}ms)` );
                            }
                        }, res.timeout);
                    }
                }
            }
            sync = false;
            // return in case resolved synchronously
            return factory.loading ? factory.loadingComp : factory.resolved;
        }
    }

    function getFirstComponentChild(children) {
        if (isArray(children)) {
            for (let i = 0; i < children.length; i++) {
                const c = children[i];
                if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                    return c;
                }
            }
        }
    }

    function initEvents(vm) {
        vm._events = Object.create(null);
        vm._hasHookEvent = false;
        // init parent attached events
        const listeners = vm.$options._parentListeners;
        if (listeners) {
            updateComponentListeners(vm, listeners);
        }
    }
    let target$1;
    function add$1(event, fn) {
        target$1.$on(event, fn);
    }
    function remove$1(event, fn) {
        target$1.$off(event, fn);
    }
    function createOnceHandler$1(event, fn) {
        const _target = target$1;
        return function onceHandler() {
            const res = fn.apply(null, arguments);
            if (res !== null) {
                _target.$off(event, onceHandler);
            }
        };
    }
    function updateComponentListeners(vm, listeners, oldListeners) {
        target$1 = vm;
        updateListeners(listeners, oldListeners || {}, add$1, remove$1, createOnceHandler$1, vm);
        target$1 = undefined;
    }
    function eventsMixin(Vue) {
        const hookRE = /^hook:/;
        Vue.prototype.$on = function (event, fn) {
            const vm = this;
            if (isArray(event)) {
                for (let i = 0, l = event.length; i < l; i++) {
                    vm.$on(event[i], fn);
                }
            }
            else {
                (vm._events[event] || (vm._events[event] = [])).push(fn);
                // optimize hook:event cost by using a boolean flag marked at registration
                // instead of a hash lookup
                if (hookRE.test(event)) {
                    vm._hasHookEvent = true;
                }
            }
            return vm;
        };
        Vue.prototype.$once = function (event, fn) {
            const vm = this;
            function on() {
                vm.$off(event, on);
                fn.apply(vm, arguments);
            }
            on.fn = fn;
            vm.$on(event, on);
            return vm;
        };
        Vue.prototype.$off = function (event, fn) {
            const vm = this;
            // all
            if (!arguments.length) {
                vm._events = Object.create(null);
                return vm;
            }
            // array of events
            if (isArray(event)) {
                for (let i = 0, l = event.length; i < l; i++) {
                    vm.$off(event[i], fn);
                }
                return vm;
            }
            // specific event
            const cbs = vm._events[event];
            if (!cbs) {
                return vm;
            }
            if (!fn) {
                vm._events[event] = null;
                return vm;
            }
            // specific handler
            let cb;
            let i = cbs.length;
            while (i--) {
                cb = cbs[i];
                if (cb === fn || cb.fn === fn) {
                    cbs.splice(i, 1);
                    break;
                }
            }
            return vm;
        };
        Vue.prototype.$emit = function (event) {
            const vm = this;
            {
                const lowerCaseEvent = event.toLowerCase();
                if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                    tip(`Event "${lowerCaseEvent}" is emitted in component ` +
                        `${formatComponentName(vm)} but the handler is registered for "${event}". ` +
                        `Note that HTML attributes are case-insensitive and you cannot use ` +
                        `v-on to listen to camelCase events when using in-DOM templates. ` +
                        `You should probably use "${hyphenate(event)}" instead of "${event}".`);
                }
            }
            let cbs = vm._events[event];
            if (cbs) {
                cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                const args = toArray(arguments, 1);
                const info = `event handler for "${event}"`;
                for (let i = 0, l = cbs.length; i < l; i++) {
                    invokeWithErrorHandling(cbs[i], vm, args, vm, info);
                }
            }
            return vm;
        };
    }

    let activeInstance = null;
    let isUpdatingChildComponent = false;
    function setActiveInstance(vm) {
        const prevActiveInstance = activeInstance;
        activeInstance = vm;
        return () => {
            activeInstance = prevActiveInstance;
        };
    }
    function initLifecycle(vm) {
        const options = vm.$options;
        // locate first non-abstract parent
        let parent = options.parent;
        if (parent && !options.abstract) {
            while (parent.$options.abstract && parent.$parent) {
                parent = parent.$parent;
            }
            parent.$children.push(vm);
        }
        vm.$parent = parent;
        vm.$root = parent ? parent.$root : vm;
        vm.$children = [];
        vm.$refs = {};
        vm._provided = parent ? parent._provided : Object.create(null);
        vm._watcher = null;
        vm._inactive = null;
        vm._directInactive = false;
        vm._isMounted = false;
        vm._isDestroyed = false;
        vm._isBeingDestroyed = false;
    }
    function lifecycleMixin(Vue) {
        Vue.prototype._update = function (vnode, hydrating) {
            const vm = this;
            const prevEl = vm.$el;
            const prevVnode = vm._vnode;
            const restoreActiveInstance = setActiveInstance(vm);
            vm._vnode = vnode;
            // Vue.prototype.__patch__ is injected in entry points
            // based on the rendering backend used.
            if (!prevVnode) {
                // initial render
                vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
            }
            else {
                // updates
                vm.$el = vm.__patch__(prevVnode, vnode);
            }
            restoreActiveInstance();
            // update __vue__ reference
            if (prevEl) {
                prevEl.__vue__ = null;
            }
            if (vm.$el) {
                vm.$el.__vue__ = vm;
            }
            // if parent is an HOC, update its $el as well
            let wrapper = vm;
            while (wrapper &&
                wrapper.$vnode &&
                wrapper.$parent &&
                wrapper.$vnode === wrapper.$parent._vnode) {
                wrapper.$parent.$el = wrapper.$el;
                wrapper = wrapper.$parent;
            }
            // updated hook is called by the scheduler to ensure that children are
            // updated in a parent's updated hook.
        };
        Vue.prototype.$forceUpdate = function () {
            const vm = this;
            if (vm._watcher) {
                vm._watcher.update();
            }
        };
        Vue.prototype.$destroy = function () {
            const vm = this;
            if (vm._isBeingDestroyed) {
                return;
            }
            callHook$1(vm, 'beforeDestroy');
            vm._isBeingDestroyed = true;
            // remove self from parent
            const parent = vm.$parent;
            if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
                remove$2(parent.$children, vm);
            }
            // teardown scope. this includes both the render watcher and other
            // watchers created
            vm._scope.stop();
            // remove reference from data ob
            // frozen object may not have observer.
            if (vm._data.__ob__) {
                vm._data.__ob__.vmCount--;
            }
            // call the last hook...
            vm._isDestroyed = true;
            // invoke destroy hooks on current rendered tree
            vm.__patch__(vm._vnode, null);
            // fire destroyed hook
            callHook$1(vm, 'destroyed');
            // turn off all instance listeners.
            vm.$off();
            // remove __vue__ reference
            if (vm.$el) {
                vm.$el.__vue__ = null;
            }
            // release circular reference (#6759)
            if (vm.$vnode) {
                vm.$vnode.parent = null;
            }
        };
    }
    function mountComponent(vm, el, hydrating) {
        vm.$el = el;
        if (!vm.$options.render) {
            // @ts-expect-error invalid type
            vm.$options.render = createEmptyVNode;
            {
                /* istanbul ignore if */
                if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
                    vm.$options.el ||
                    el) {
                    warn$2('You are using the runtime-only build of Vue where the template ' +
                        'compiler is not available. Either pre-compile the templates into ' +
                        'render functions, or use the compiler-included build.', vm);
                }
                else {
                    warn$2('Failed to mount component: template or render function not defined.', vm);
                }
            }
        }
        callHook$1(vm, 'beforeMount');
        let updateComponent;
        /* istanbul ignore if */
        if (config.performance && mark) {
            updateComponent = () => {
                const name = vm._name;
                const id = vm._uid;
                const startTag = `vue-perf-start:${id}`;
                const endTag = `vue-perf-end:${id}`;
                mark(startTag);
                const vnode = vm._render();
                mark(endTag);
                measure(`vue ${name} render`, startTag, endTag);
                mark(startTag);
                vm._update(vnode, hydrating);
                mark(endTag);
                measure(`vue ${name} patch`, startTag, endTag);
            };
        }
        else {
            updateComponent = () => {
                vm._update(vm._render(), hydrating);
            };
        }
        const watcherOptions = {
            before() {
                if (vm._isMounted && !vm._isDestroyed) {
                    callHook$1(vm, 'beforeUpdate');
                }
            }
        };
        {
            watcherOptions.onTrack = e => callHook$1(vm, 'renderTracked', [e]);
            watcherOptions.onTrigger = e => callHook$1(vm, 'renderTriggered', [e]);
        }
        // we set this to vm._watcher inside the watcher's constructor
        // since the watcher's initial patch may call $forceUpdate (e.g. inside child
        // component's mounted hook), which relies on vm._watcher being already defined
        new Watcher(vm, updateComponent, noop, watcherOptions, true /* isRenderWatcher */);
        hydrating = false;
        // flush buffer for flush: "pre" watchers queued in setup()
        const preWatchers = vm._preWatchers;
        if (preWatchers) {
            for (let i = 0; i < preWatchers.length; i++) {
                preWatchers[i].run();
            }
        }
        // manually mounted instance, call mounted on self
        // mounted is called for render-created child components in its inserted hook
        if (vm.$vnode == null) {
            vm._isMounted = true;
            callHook$1(vm, 'mounted');
        }
        return vm;
    }
    function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
        {
            isUpdatingChildComponent = true;
        }
        // determine whether component has slot children
        // we need to do this before overwriting $options._renderChildren.
        // check if there are dynamic scopedSlots (hand-written or compiled but with
        // dynamic slot names). Static scoped slots compiled from template has the
        // "$stable" marker.
        const newScopedSlots = parentVnode.data.scopedSlots;
        const oldScopedSlots = vm.$scopedSlots;
        const hasDynamicScopedSlot = !!((newScopedSlots && !newScopedSlots.$stable) ||
            (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
            (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
            (!newScopedSlots && vm.$scopedSlots.$key));
        // Any static slot children from the parent may have changed during parent's
        // update. Dynamic scoped slots may also have changed. In such cases, a forced
        // update is necessary to ensure correctness.
        let needsForceUpdate = !!(renderChildren || // has new static slots
            vm.$options._renderChildren || // has old static slots
            hasDynamicScopedSlot);
        const prevVNode = vm.$vnode;
        vm.$options._parentVnode = parentVnode;
        vm.$vnode = parentVnode; // update vm's placeholder node without re-render
        if (vm._vnode) {
            // update child tree's parent
            vm._vnode.parent = parentVnode;
        }
        vm.$options._renderChildren = renderChildren;
        // update $attrs and $listeners hash
        // these are also reactive so they may trigger child update if the child
        // used them during render
        const attrs = parentVnode.data.attrs || emptyObject;
        if (vm._attrsProxy) {
            // force update if attrs are accessed and has changed since it may be
            // passed to a child component.
            if (syncSetupProxy(vm._attrsProxy, attrs, (prevVNode.data && prevVNode.data.attrs) || emptyObject, vm, '$attrs')) {
                needsForceUpdate = true;
            }
        }
        vm.$attrs = attrs;
        // update listeners
        listeners = listeners || emptyObject;
        const prevListeners = vm.$options._parentListeners;
        if (vm._listenersProxy) {
            syncSetupProxy(vm._listenersProxy, listeners, prevListeners || emptyObject, vm, '$listeners');
        }
        vm.$listeners = vm.$options._parentListeners = listeners;
        updateComponentListeners(vm, listeners, prevListeners);
        // update props
        if (propsData && vm.$options.props) {
            toggleObserving(false);
            const props = vm._props;
            const propKeys = vm.$options._propKeys || [];
            for (let i = 0; i < propKeys.length; i++) {
                const key = propKeys[i];
                const propOptions = vm.$options.props; // wtf flow?
                props[key] = validateProp(key, propOptions, propsData, vm);
            }
            toggleObserving(true);
            // keep a copy of raw propsData
            vm.$options.propsData = propsData;
        }
        // resolve slots + force update if has children
        if (needsForceUpdate) {
            vm.$slots = resolveSlots(renderChildren, parentVnode.context);
            vm.$forceUpdate();
        }
        {
            isUpdatingChildComponent = false;
        }
    }
    function isInInactiveTree(vm) {
        while (vm && (vm = vm.$parent)) {
            if (vm._inactive)
                return true;
        }
        return false;
    }
    function activateChildComponent(vm, direct) {
        if (direct) {
            vm._directInactive = false;
            if (isInInactiveTree(vm)) {
                return;
            }
        }
        else if (vm._directInactive) {
            return;
        }
        if (vm._inactive || vm._inactive === null) {
            vm._inactive = false;
            for (let i = 0; i < vm.$children.length; i++) {
                activateChildComponent(vm.$children[i]);
            }
            callHook$1(vm, 'activated');
        }
    }
    function deactivateChildComponent(vm, direct) {
        if (direct) {
            vm._directInactive = true;
            if (isInInactiveTree(vm)) {
                return;
            }
        }
        if (!vm._inactive) {
            vm._inactive = true;
            for (let i = 0; i < vm.$children.length; i++) {
                deactivateChildComponent(vm.$children[i]);
            }
            callHook$1(vm, 'deactivated');
        }
    }
    function callHook$1(vm, hook, args, setContext = true) {
        // #7573 disable dep collection when invoking lifecycle hooks
        pushTarget();
        const prev = currentInstance;
        setContext && setCurrentInstance(vm);
        const handlers = vm.$options[hook];
        const info = `${hook} hook`;
        if (handlers) {
            for (let i = 0, j = handlers.length; i < j; i++) {
                invokeWithErrorHandling(handlers[i], vm, args || null, vm, info);
            }
        }
        if (vm._hasHookEvent) {
            vm.$emit('hook:' + hook);
        }
        setContext && setCurrentInstance(prev);
        popTarget();
    }

    const MAX_UPDATE_COUNT = 100;
    const queue = [];
    const activatedChildren = [];
    let has = {};
    let circular = {};
    let waiting = false;
    let flushing = false;
    let index$1 = 0;
    /**
     * Reset the scheduler's state.
     */
    function resetSchedulerState() {
        index$1 = queue.length = activatedChildren.length = 0;
        has = {};
        {
            circular = {};
        }
        waiting = flushing = false;
    }
    // Async edge case #6566 requires saving the timestamp when event listeners are
    // attached. However, calling performance.now() has a perf overhead especially
    // if the page has thousands of event listeners. Instead, we take a timestamp
    // every time the scheduler flushes and use that for all event listeners
    // attached during that flush.
    let currentFlushTimestamp = 0;
    // Async edge case fix requires storing an event listener's attach timestamp.
    let getNow = Date.now;
    // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    // All IE versions use low-res event timestamps, and have problematic clock
    // implementations (#9632)
    if (inBrowser && !isIE) {
        const performance = window.performance;
        if (performance &&
            typeof performance.now === 'function' &&
            getNow() > document.createEvent('Event').timeStamp) {
            // if the event timestamp, although evaluated AFTER the Date.now(), is
            // smaller than it, it means the event is using a hi-res timestamp,
            // and we need to use the hi-res version for event listener timestamps as
            // well.
            getNow = () => performance.now();
        }
    }
    const sortCompareFn = (a, b) => {
        if (a.post) {
            if (!b.post)
                return 1;
        }
        else if (b.post) {
            return -1;
        }
        return a.id - b.id;
    };
    /**
     * Flush both queues and run the watchers.
     */
    function flushSchedulerQueue() {
        currentFlushTimestamp = getNow();
        flushing = true;
        let watcher, id;
        // Sort queue before flush.
        // This ensures that:
        // 1. Components are updated from parent to child. (because parent is always
        //    created before the child)
        // 2. A component's user watchers are run before its render watcher (because
        //    user watchers are created before the render watcher)
        // 3. If a component is destroyed during a parent component's watcher run,
        //    its watchers can be skipped.
        queue.sort(sortCompareFn);
        // do not cache length because more watchers might be pushed
        // as we run existing watchers
        for (index$1 = 0; index$1 < queue.length; index$1++) {
            watcher = queue[index$1];
            if (watcher.before) {
                watcher.before();
            }
            id = watcher.id;
            has[id] = null;
            watcher.run();
            // in dev build, check and stop circular updates.
            if (has[id] != null) {
                circular[id] = (circular[id] || 0) + 1;
                if (circular[id] > MAX_UPDATE_COUNT) {
                    warn$2('You may have an infinite update loop ' +
                        (watcher.user
                            ? `in watcher with expression "${watcher.expression}"`
                            : `in a component render function.`), watcher.vm);
                    break;
                }
            }
        }
        // keep copies of post queues before resetting state
        const activatedQueue = activatedChildren.slice();
        const updatedQueue = queue.slice();
        resetSchedulerState();
        // call component updated and activated hooks
        callActivatedHooks(activatedQueue);
        callUpdatedHooks(updatedQueue);
        cleanupDeps();
        // devtool hook
        /* istanbul ignore if */
        if (devtools && config.devtools) {
            devtools.emit('flush');
        }
    }
    function callUpdatedHooks(queue) {
        let i = queue.length;
        while (i--) {
            const watcher = queue[i];
            const vm = watcher.vm;
            if (vm && vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
                callHook$1(vm, 'updated');
            }
        }
    }
    /**
     * Queue a kept-alive component that was activated during patch.
     * The queue will be processed after the entire tree has been patched.
     */
    function queueActivatedComponent(vm) {
        // setting _inactive to false here so that a render function can
        // rely on checking whether it's in an inactive tree (e.g. router-view)
        vm._inactive = false;
        activatedChildren.push(vm);
    }
    function callActivatedHooks(queue) {
        for (let i = 0; i < queue.length; i++) {
            queue[i]._inactive = true;
            activateChildComponent(queue[i], true /* true */);
        }
    }
    /**
     * Push a watcher into the watcher queue.
     * Jobs with duplicate IDs will be skipped unless it's
     * pushed when the queue is being flushed.
     */
    function queueWatcher(watcher) {
        const id = watcher.id;
        if (has[id] != null) {
            return;
        }
        if (watcher === Dep.target && watcher.noRecurse) {
            return;
        }
        has[id] = true;
        if (!flushing) {
            queue.push(watcher);
        }
        else {
            // if already flushing, splice the watcher based on its id
            // if already past its id, it will be run next immediately.
            let i = queue.length - 1;
            while (i > index$1 && queue[i].id > watcher.id) {
                i--;
            }
            queue.splice(i + 1, 0, watcher);
        }
        // queue the flush
        if (!waiting) {
            waiting = true;
            if (!config.async) {
                flushSchedulerQueue();
                return;
            }
            nextTick(flushSchedulerQueue);
        }
    }

    const WATCHER = `watcher`;
    const WATCHER_CB = `${WATCHER} callback`;
    const WATCHER_GETTER = `${WATCHER} getter`;
    const WATCHER_CLEANUP = `${WATCHER} cleanup`;
    // Simple effect.
    function watchEffect(effect, options) {
        return doWatch(effect, null, options);
    }
    function watchPostEffect(effect, options) {
        return doWatch(effect, null, (Object.assign(Object.assign({}, options), { flush: 'post' }) ));
    }
    function watchSyncEffect(effect, options) {
        return doWatch(effect, null, (Object.assign(Object.assign({}, options), { flush: 'sync' }) ));
    }
    // initial value for watchers to trigger on undefined initial values
    const INITIAL_WATCHER_VALUE = {};
    // implementation
    function watch(source, cb, options) {
        if (typeof cb !== 'function') {
            warn$2(`\`watch(fn, options?)\` signature has been moved to a separate API. ` +
                `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` +
                `supports \`watch(source, cb, options?) signature.`);
        }
        return doWatch(source, cb, options);
    }
    function doWatch(source, cb, { immediate, deep, flush = 'pre', onTrack, onTrigger } = emptyObject) {
        if (!cb) {
            if (immediate !== undefined) {
                warn$2(`watch() "immediate" option is only respected when using the ` +
                    `watch(source, callback, options?) signature.`);
            }
            if (deep !== undefined) {
                warn$2(`watch() "deep" option is only respected when using the ` +
                    `watch(source, callback, options?) signature.`);
            }
        }
        const warnInvalidSource = (s) => {
            warn$2(`Invalid watch source: ${s}. A watch source can only be a getter/effect ` +
                `function, a ref, a reactive object, or an array of these types.`);
        };
        const instance = currentInstance;
        const call = (fn, type, args = null) => invokeWithErrorHandling(fn, null, args, instance, type);
        let getter;
        let forceTrigger = false;
        let isMultiSource = false;
        if (isRef(source)) {
            getter = () => source.value;
            forceTrigger = isShallow(source);
        }
        else if (isReactive(source)) {
            getter = () => {
                source.__ob__.dep.depend();
                return source;
            };
            deep = true;
        }
        else if (isArray(source)) {
            isMultiSource = true;
            forceTrigger = source.some(s => isReactive(s) || isShallow(s));
            getter = () => source.map(s => {
                if (isRef(s)) {
                    return s.value;
                }
                else if (isReactive(s)) {
                    return traverse(s);
                }
                else if (isFunction(s)) {
                    return call(s, WATCHER_GETTER);
                }
                else {
                    warnInvalidSource(s);
                }
            });
        }
        else if (isFunction(source)) {
            if (cb) {
                // getter with cb
                getter = () => call(source, WATCHER_GETTER);
            }
            else {
                // no cb -> simple effect
                getter = () => {
                    if (instance && instance._isDestroyed) {
                        return;
                    }
                    if (cleanup) {
                        cleanup();
                    }
                    return call(source, WATCHER, [onCleanup]);
                };
            }
        }
        else {
            getter = noop;
            warnInvalidSource(source);
        }
        if (cb && deep) {
            const baseGetter = getter;
            getter = () => traverse(baseGetter());
        }
        let cleanup;
        let onCleanup = (fn) => {
            cleanup = watcher.onStop = () => {
                call(fn, WATCHER_CLEANUP);
            };
        };
        // in SSR there is no need to setup an actual effect, and it should be noop
        // unless it's eager
        if (isServerRendering()) {
            // we will also not call the invalidate callback (+ runner is not set up)
            onCleanup = noop;
            if (!cb) {
                getter();
            }
            else if (immediate) {
                call(cb, WATCHER_CB, [
                    getter(),
                    isMultiSource ? [] : undefined,
                    onCleanup
                ]);
            }
            return noop;
        }
        const watcher = new Watcher(currentInstance, getter, noop, {
            lazy: true
        });
        watcher.noRecurse = !cb;
        let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
        // overwrite default run
        watcher.run = () => {
            if (!watcher.active) {
                return;
            }
            if (cb) {
                // watch(source, cb)
                const newValue = watcher.get();
                if (deep ||
                    forceTrigger ||
                    (isMultiSource
                        ? newValue.some((v, i) => hasChanged(v, oldValue[i]))
                        : hasChanged(newValue, oldValue))) {
                    // cleanup before running cb again
                    if (cleanup) {
                        cleanup();
                    }
                    call(cb, WATCHER_CB, [
                        newValue,
                        // pass undefined as the old value when it's changed for the first time
                        oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                        onCleanup
                    ]);
                    oldValue = newValue;
                }
            }
            else {
                // watchEffect
                watcher.get();
            }
        };
        if (flush === 'sync') {
            watcher.update = watcher.run;
        }
        else if (flush === 'post') {
            watcher.post = true;
            watcher.update = () => queueWatcher(watcher);
        }
        else {
            // pre
            watcher.update = () => {
                if (instance && instance === currentInstance && !instance._isMounted) {
                    // pre-watcher triggered before
                    const buffer = instance._preWatchers || (instance._preWatchers = []);
                    if (buffer.indexOf(watcher) < 0)
                        buffer.push(watcher);
                }
                else {
                    queueWatcher(watcher);
                }
            };
        }
        {
            watcher.onTrack = onTrack;
            watcher.onTrigger = onTrigger;
        }
        // initial run
        if (cb) {
            if (immediate) {
                watcher.run();
            }
            else {
                oldValue = watcher.get();
            }
        }
        else if (flush === 'post' && instance) {
            instance.$once('hook:mounted', () => watcher.get());
        }
        else {
            watcher.get();
        }
        return () => {
            watcher.teardown();
        };
    }

    let activeEffectScope;
    class EffectScope {
        constructor(detached = false) {
            this.detached = detached;
            /**
             * @internal
             */
            this.active = true;
            /**
             * @internal
             */
            this.effects = [];
            /**
             * @internal
             */
            this.cleanups = [];
            this.parent = activeEffectScope;
            if (!detached && activeEffectScope) {
                this.index =
                    (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
            }
        }
        run(fn) {
            if (this.active) {
                const currentEffectScope = activeEffectScope;
                try {
                    activeEffectScope = this;
                    return fn();
                }
                finally {
                    activeEffectScope = currentEffectScope;
                }
            }
            else {
                warn$2(`cannot run an inactive effect scope.`);
            }
        }
        /**
         * This should only be called on non-detached scopes
         * @internal
         */
        on() {
            activeEffectScope = this;
        }
        /**
         * This should only be called on non-detached scopes
         * @internal
         */
        off() {
            activeEffectScope = this.parent;
        }
        stop(fromParent) {
            if (this.active) {
                let i, l;
                for (i = 0, l = this.effects.length; i < l; i++) {
                    this.effects[i].teardown();
                }
                for (i = 0, l = this.cleanups.length; i < l; i++) {
                    this.cleanups[i]();
                }
                if (this.scopes) {
                    for (i = 0, l = this.scopes.length; i < l; i++) {
                        this.scopes[i].stop(true);
                    }
                }
                // nested scope, dereference from parent to avoid memory leaks
                if (!this.detached && this.parent && !fromParent) {
                    // optimized O(1) removal
                    const last = this.parent.scopes.pop();
                    if (last && last !== this) {
                        this.parent.scopes[this.index] = last;
                        last.index = this.index;
                    }
                }
                this.parent = undefined;
                this.active = false;
            }
        }
    }
    function effectScope(detached) {
        return new EffectScope(detached);
    }
    /**
     * @internal
     */
    function recordEffectScope(effect, scope = activeEffectScope) {
        if (scope && scope.active) {
            scope.effects.push(effect);
        }
    }
    function getCurrentScope() {
        return activeEffectScope;
    }
    function onScopeDispose(fn) {
        if (activeEffectScope) {
            activeEffectScope.cleanups.push(fn);
        }
        else {
            warn$2(`onScopeDispose() is called when there is no active effect scope` +
                ` to be associated with.`);
        }
    }

    function provide(key, value) {
        if (!currentInstance) {
            {
                warn$2(`provide() can only be used inside setup().`);
            }
        }
        else {
            // TS doesn't allow symbol as index type
            resolveProvided(currentInstance)[key] = value;
        }
    }
    function resolveProvided(vm) {
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const existing = vm._provided;
        const parentProvides = vm.$parent && vm.$parent._provided;
        if (parentProvides === existing) {
            return (vm._provided = Object.create(parentProvides));
        }
        else {
            return existing;
        }
    }
    function inject(key, defaultValue, treatDefaultAsFactory = false) {
        // fallback to `currentRenderingInstance` so that this can be called in
        // a functional component
        const instance = currentInstance;
        if (instance) {
            // #2400
            // to support `app.use` plugins,
            // fallback to appContext's `provides` if the instance is at root
            const provides = instance.$parent && instance.$parent._provided;
            if (provides && key in provides) {
                // TS doesn't allow symbol as index type
                return provides[key];
            }
            else if (arguments.length > 1) {
                return treatDefaultAsFactory && isFunction(defaultValue)
                    ? defaultValue.call(instance)
                    : defaultValue;
            }
            else {
                warn$2(`injection "${String(key)}" not found.`);
            }
        }
        else {
            warn$2(`inject() can only be used inside setup() or functional components.`);
        }
    }

    /**
     * @internal this function needs manual public type declaration because it relies
     * on previously manually authored types from Vue 2
     */
    function h(type, props, children) {
        if (!currentInstance) {
            warn$2(`globally imported h() can only be invoked when there is an active ` +
                    `component instance, e.g. synchronously in a component's render or setup function.`);
        }
        return createElement$1(currentInstance, type, props, children, 2, true);
    }

    function handleError(err, vm, info) {
        // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
        // See: https://github.com/vuejs/vuex/issues/1505
        pushTarget();
        try {
            if (vm) {
                let cur = vm;
                while ((cur = cur.$parent)) {
                    const hooks = cur.$options.errorCaptured;
                    if (hooks) {
                        for (let i = 0; i < hooks.length; i++) {
                            try {
                                const capture = hooks[i].call(cur, err, vm, info) === false;
                                if (capture)
                                    return;
                            }
                            catch (e) {
                                globalHandleError(e, cur, 'errorCaptured hook');
                            }
                        }
                    }
                }
            }
            globalHandleError(err, vm, info);
        }
        finally {
            popTarget();
        }
    }
    function invokeWithErrorHandling(handler, context, args, vm, info) {
        let res;
        try {
            res = args ? handler.apply(context, args) : handler.call(context);
            if (res && !res._isVue && isPromise(res) && !res._handled) {
                res.catch(e => handleError(e, vm, info + ` (Promise/async)`));
                res._handled = true;
            }
        }
        catch (e) {
            handleError(e, vm, info);
        }
        return res;
    }
    function globalHandleError(err, vm, info) {
        if (config.errorHandler) {
            try {
                return config.errorHandler.call(null, err, vm, info);
            }
            catch (e) {
                // if the user intentionally throws the original error in the handler,
                // do not log it twice
                if (e !== err) {
                    logError(e, null, 'config.errorHandler');
                }
            }
        }
        logError(err, vm, info);
    }
    function logError(err, vm, info) {
        {
            warn$2(`Error in ${info}: "${err.toString()}"`, vm);
        }
        /* istanbul ignore else */
        if (inBrowser && typeof console !== 'undefined') {
            console.error(err);
        }
        else {
            throw err;
        }
    }

    /* globals MutationObserver */
    let isUsingMicroTask = false;
    const callbacks = [];
    let pending = false;
    function flushCallbacks() {
        pending = false;
        const copies = callbacks.slice(0);
        callbacks.length = 0;
        for (let i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
    // Here we have async deferring wrappers using microtasks.
    // In 2.5 we used (macro) tasks (in combination with microtasks).
    // However, it has subtle problems when state is changed right before repaint
    // (e.g. #6813, out-in transitions).
    // Also, using (macro) tasks in event handler would cause some weird behaviors
    // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
    // So we now use microtasks everywhere, again.
    // A major drawback of this tradeoff is that there are some scenarios
    // where microtasks have too high a priority and fire in between supposedly
    // sequential events (e.g. #4521, #6690, which have workarounds)
    // or even between bubbling of the same event (#6566).
    let timerFunc;
    // The nextTick behavior leverages the microtask queue, which can be accessed
    // via either native Promise.then or MutationObserver.
    // MutationObserver has wider support, however it is seriously bugged in
    // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
    // completely stops working after triggering a few times... so, if native
    // Promise is available, we will use it:
    /* istanbul ignore next, $flow-disable-line */
    if (typeof Promise !== 'undefined' && isNative(Promise)) {
        const p = Promise.resolve();
        timerFunc = () => {
            p.then(flushCallbacks);
            // In problematic UIWebViews, Promise.then doesn't completely break, but
            // it can get stuck in a weird state where callbacks are pushed into the
            // microtask queue but the queue isn't being flushed, until the browser
            // needs to do some other work, e.g. handle a timer. Therefore we can
            // "force" the microtask queue to be flushed by adding an empty timer.
            if (isIOS)
                setTimeout(noop);
        };
        isUsingMicroTask = true;
    }
    else if (!isIE &&
        typeof MutationObserver !== 'undefined' &&
        (isNative(MutationObserver) ||
            // PhantomJS and iOS 7.x
            MutationObserver.toString() === '[object MutationObserverConstructor]')) {
        // Use MutationObserver where native Promise is not available,
        // e.g. PhantomJS, iOS7, Android 4.4
        // (#6466 MutationObserver is unreliable in IE11)
        let counter = 1;
        const observer = new MutationObserver(flushCallbacks);
        const textNode = document.createTextNode(String(counter));
        observer.observe(textNode, {
            characterData: true
        });
        timerFunc = () => {
            counter = (counter + 1) % 2;
            textNode.data = String(counter);
        };
        isUsingMicroTask = true;
    }
    else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
        // Fallback to setImmediate.
        // Technically it leverages the (macro) task queue,
        // but it is still a better choice than setTimeout.
        timerFunc = () => {
            setImmediate(flushCallbacks);
        };
    }
    else {
        // Fallback to setTimeout.
        timerFunc = () => {
            setTimeout(flushCallbacks, 0);
        };
    }
    /**
     * @internal
     */
    function nextTick(cb, ctx) {
        let _resolve;
        callbacks.push(() => {
            if (cb) {
                try {
                    cb.call(ctx);
                }
                catch (e) {
                    handleError(e, ctx, 'nextTick');
                }
            }
            else if (_resolve) {
                _resolve(ctx);
            }
        });
        if (!pending) {
            pending = true;
            timerFunc();
        }
        // $flow-disable-line
        if (!cb && typeof Promise !== 'undefined') {
            return new Promise(resolve => {
                _resolve = resolve;
            });
        }
    }

    function useCssModule(name = '$style') {
        /* istanbul ignore else */
        {
            if (!currentInstance) {
                warn$2(`useCssModule must be called inside setup()`);
                return emptyObject;
            }
            const mod = currentInstance[name];
            if (!mod) {
                warn$2(`Current instance does not have CSS module named "${name}".`);
                return emptyObject;
            }
            return mod;
        }
    }

    /**
     * Runtime helper for SFC's CSS variable injection feature.
     * @private
     */
    function useCssVars(getter) {
        if (!inBrowser && !false)
            return;
        const instance = currentInstance;
        if (!instance) {
            warn$2(`useCssVars is called without current active component instance.`);
            return;
        }
        watchPostEffect(() => {
            const el = instance.$el;
            const vars = getter(instance, instance._setupProxy);
            if (el && el.nodeType === 1) {
                const style = el.style;
                for (const key in vars) {
                    style.setProperty(`--${key}`, vars[key]);
                }
            }
        });
    }

    /**
     * v3-compatible async component API.
     * @internal the type is manually declared in <root>/types/v3-define-async-component.d.ts
     * because it relies on existing manual types
     */
    function defineAsyncComponent(source) {
        if (isFunction(source)) {
            source = { loader: source };
        }
        const { loader, loadingComponent, errorComponent, delay = 200, timeout, // undefined = never times out
        suspensible = false, // in Vue 3 default is true
        onError: userOnError } = source;
        if (suspensible) {
            warn$2(`The suspensiblbe option for async components is not supported in Vue2. It is ignored.`);
        }
        let pendingRequest = null;
        let retries = 0;
        const retry = () => {
            retries++;
            pendingRequest = null;
            return load();
        };
        const load = () => {
            let thisRequest;
            return (pendingRequest ||
                (thisRequest = pendingRequest =
                    loader()
                        .catch(err => {
                        err = err instanceof Error ? err : new Error(String(err));
                        if (userOnError) {
                            return new Promise((resolve, reject) => {
                                const userRetry = () => resolve(retry());
                                const userFail = () => reject(err);
                                userOnError(err, userRetry, userFail, retries + 1);
                            });
                        }
                        else {
                            throw err;
                        }
                    })
                        .then((comp) => {
                        if (thisRequest !== pendingRequest && pendingRequest) {
                            return pendingRequest;
                        }
                        if (!comp) {
                            warn$2(`Async component loader resolved to undefined. ` +
                                `If you are using retry(), make sure to return its return value.`);
                        }
                        // interop module default
                        if (comp &&
                            (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                            comp = comp.default;
                        }
                        if (comp && !isObject(comp) && !isFunction(comp)) {
                            throw new Error(`Invalid async component load result: ${comp}`);
                        }
                        return comp;
                    })));
        };
        return () => {
            const component = load();
            return {
                component,
                delay,
                timeout,
                error: errorComponent,
                loading: loadingComponent
            };
        };
    }

    function createLifeCycle(hookName) {
        return (fn, target = currentInstance) => {
            if (!target) {
                warn$2(`${formatName(hookName)} is called when there is no active component instance to be ` +
                        `associated with. ` +
                        `Lifecycle injection APIs can only be used during execution of setup().`);
                return;
            }
            return injectHook(target, hookName, fn);
        };
    }
    function formatName(name) {
        if (name === 'beforeDestroy') {
            name = 'beforeUnmount';
        }
        else if (name === 'destroyed') {
            name = 'unmounted';
        }
        return `on${name[0].toUpperCase() + name.slice(1)}`;
    }
    function injectHook(instance, hookName, fn) {
        const options = instance.$options;
        options[hookName] = mergeLifecycleHook(options[hookName], fn);
    }
    const onBeforeMount = createLifeCycle('beforeMount');
    const onMounted = createLifeCycle('mounted');
    const onBeforeUpdate = createLifeCycle('beforeUpdate');
    const onUpdated = createLifeCycle('updated');
    const onBeforeUnmount = createLifeCycle('beforeDestroy');
    const onUnmounted = createLifeCycle('destroyed');
    const onActivated = createLifeCycle('activated');
    const onDeactivated = createLifeCycle('deactivated');
    const onServerPrefetch = createLifeCycle('serverPrefetch');
    const onRenderTracked = createLifeCycle('renderTracked');
    const onRenderTriggered = createLifeCycle('renderTriggered');
    const injectErrorCapturedHook = createLifeCycle('errorCaptured');
    function onErrorCaptured(hook, target = currentInstance) {
        injectErrorCapturedHook(hook, target);
    }

    /**
     * Note: also update dist/vue.runtime.mjs when adding new exports to this file.
     */
    const version = '2.7.13';
    /**
     * @internal type is manually declared in <root>/types/v3-define-component.d.ts
     */
    function defineComponent(options) {
        return options;
    }

    var vca = /*#__PURE__*/Object.freeze({
      __proto__: null,
      version: version,
      defineComponent: defineComponent,
      ref: ref$1,
      shallowRef: shallowRef,
      isRef: isRef,
      toRef: toRef,
      toRefs: toRefs,
      unref: unref,
      proxyRefs: proxyRefs,
      customRef: customRef,
      triggerRef: triggerRef,
      reactive: reactive,
      isReactive: isReactive,
      isReadonly: isReadonly,
      isShallow: isShallow,
      isProxy: isProxy,
      shallowReactive: shallowReactive,
      markRaw: markRaw,
      toRaw: toRaw,
      readonly: readonly,
      shallowReadonly: shallowReadonly,
      computed: computed,
      watch: watch,
      watchEffect: watchEffect,
      watchPostEffect: watchPostEffect,
      watchSyncEffect: watchSyncEffect,
      EffectScope: EffectScope,
      effectScope: effectScope,
      onScopeDispose: onScopeDispose,
      getCurrentScope: getCurrentScope,
      provide: provide,
      inject: inject,
      h: h,
      getCurrentInstance: getCurrentInstance,
      useSlots: useSlots,
      useAttrs: useAttrs,
      useListeners: useListeners,
      mergeDefaults: mergeDefaults,
      nextTick: nextTick,
      set: set,
      del: del,
      useCssModule: useCssModule,
      useCssVars: useCssVars,
      defineAsyncComponent: defineAsyncComponent,
      onBeforeMount: onBeforeMount,
      onMounted: onMounted,
      onBeforeUpdate: onBeforeUpdate,
      onUpdated: onUpdated,
      onBeforeUnmount: onBeforeUnmount,
      onUnmounted: onUnmounted,
      onActivated: onActivated,
      onDeactivated: onDeactivated,
      onServerPrefetch: onServerPrefetch,
      onRenderTracked: onRenderTracked,
      onRenderTriggered: onRenderTriggered,
      onErrorCaptured: onErrorCaptured
    });

    const seenObjects = new _Set();
    /**
     * Recursively traverse an object to evoke all converted
     * getters, so that every nested property inside the object
     * is collected as a "deep" dependency.
     */
    function traverse(val) {
        _traverse(val, seenObjects);
        seenObjects.clear();
        return val;
    }
    function _traverse(val, seen) {
        let i, keys;
        const isA = isArray(val);
        if ((!isA && !isObject(val)) ||
            val.__v_skip /* ReactiveFlags.SKIP */ ||
            Object.isFrozen(val) ||
            val instanceof VNode) {
            return;
        }
        if (val.__ob__) {
            const depId = val.__ob__.dep.id;
            if (seen.has(depId)) {
                return;
            }
            seen.add(depId);
        }
        if (isA) {
            i = val.length;
            while (i--)
                _traverse(val[i], seen);
        }
        else if (isRef(val)) {
            _traverse(val.value, seen);
        }
        else {
            keys = Object.keys(val);
            i = keys.length;
            while (i--)
                _traverse(val[keys[i]], seen);
        }
    }

    let uid$1 = 0;
    /**
     * A watcher parses an expression, collects dependencies,
     * and fires callback when the expression value changes.
     * This is used for both the $watch() api and directives.
     * @internal
     */
    class Watcher {
        constructor(vm, expOrFn, cb, options, isRenderWatcher) {
            recordEffectScope(this,
            // if the active effect scope is manually created (not a component scope),
            // prioritize it
            activeEffectScope && !activeEffectScope._vm
                ? activeEffectScope
                : vm
                    ? vm._scope
                    : undefined);
            if ((this.vm = vm) && isRenderWatcher) {
                vm._watcher = this;
            }
            // options
            if (options) {
                this.deep = !!options.deep;
                this.user = !!options.user;
                this.lazy = !!options.lazy;
                this.sync = !!options.sync;
                this.before = options.before;
                {
                    this.onTrack = options.onTrack;
                    this.onTrigger = options.onTrigger;
                }
            }
            else {
                this.deep = this.user = this.lazy = this.sync = false;
            }
            this.cb = cb;
            this.id = ++uid$1; // uid for batching
            this.active = true;
            this.post = false;
            this.dirty = this.lazy; // for lazy watchers
            this.deps = [];
            this.newDeps = [];
            this.depIds = new _Set();
            this.newDepIds = new _Set();
            this.expression = expOrFn.toString() ;
            // parse expression for getter
            if (isFunction(expOrFn)) {
                this.getter = expOrFn;
            }
            else {
                this.getter = parsePath(expOrFn);
                if (!this.getter) {
                    this.getter = noop;
                    warn$2(`Failed watching path: "${expOrFn}" ` +
                            'Watcher only accepts simple dot-delimited paths. ' +
                            'For full control, use a function instead.', vm);
                }
            }
            this.value = this.lazy ? undefined : this.get();
        }
        /**
         * Evaluate the getter, and re-collect dependencies.
         */
        get() {
            pushTarget(this);
            let value;
            const vm = this.vm;
            try {
                value = this.getter.call(vm, vm);
            }
            catch (e) {
                if (this.user) {
                    handleError(e, vm, `getter for watcher "${this.expression}"`);
                }
                else {
                    throw e;
                }
            }
            finally {
                // "touch" every property so they are all tracked as
                // dependencies for deep watching
                if (this.deep) {
                    traverse(value);
                }
                popTarget();
                this.cleanupDeps();
            }
            return value;
        }
        /**
         * Add a dependency to this directive.
         */
        addDep(dep) {
            const id = dep.id;
            if (!this.newDepIds.has(id)) {
                this.newDepIds.add(id);
                this.newDeps.push(dep);
                if (!this.depIds.has(id)) {
                    dep.addSub(this);
                }
            }
        }
        /**
         * Clean up for dependency collection.
         */
        cleanupDeps() {
            let i = this.deps.length;
            while (i--) {
                const dep = this.deps[i];
                if (!this.newDepIds.has(dep.id)) {
                    dep.removeSub(this);
                }
            }
            let tmp = this.depIds;
            this.depIds = this.newDepIds;
            this.newDepIds = tmp;
            this.newDepIds.clear();
            tmp = this.deps;
            this.deps = this.newDeps;
            this.newDeps = tmp;
            this.newDeps.length = 0;
        }
        /**
         * Subscriber interface.
         * Will be called when a dependency changes.
         */
        update() {
            /* istanbul ignore else */
            if (this.lazy) {
                this.dirty = true;
            }
            else if (this.sync) {
                this.run();
            }
            else {
                queueWatcher(this);
            }
        }
        /**
         * Scheduler job interface.
         * Will be called by the scheduler.
         */
        run() {
            if (this.active) {
                const value = this.get();
                if (value !== this.value ||
                    // Deep watchers and watchers on Object/Arrays should fire even
                    // when the value is the same, because the value may
                    // have mutated.
                    isObject(value) ||
                    this.deep) {
                    // set new value
                    const oldValue = this.value;
                    this.value = value;
                    if (this.user) {
                        const info = `callback for watcher "${this.expression}"`;
                        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
                    }
                    else {
                        this.cb.call(this.vm, value, oldValue);
                    }
                }
            }
        }
        /**
         * Evaluate the value of the watcher.
         * This only gets called for lazy watchers.
         */
        evaluate() {
            this.value = this.get();
            this.dirty = false;
        }
        /**
         * Depend on all deps collected by this watcher.
         */
        depend() {
            let i = this.deps.length;
            while (i--) {
                this.deps[i].depend();
            }
        }
        /**
         * Remove self from all dependencies' subscriber list.
         */
        teardown() {
            if (this.vm && !this.vm._isBeingDestroyed) {
                remove$2(this.vm._scope.effects, this);
            }
            if (this.active) {
                let i = this.deps.length;
                while (i--) {
                    this.deps[i].removeSub(this);
                }
                this.active = false;
                if (this.onStop) {
                    this.onStop();
                }
            }
        }
    }

    const sharedPropertyDefinition = {
        enumerable: true,
        configurable: true,
        get: noop,
        set: noop
    };
    function proxy(target, sourceKey, key) {
        sharedPropertyDefinition.get = function proxyGetter() {
            return this[sourceKey][key];
        };
        sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val;
        };
        Object.defineProperty(target, key, sharedPropertyDefinition);
    }
    function initState(vm) {
        const opts = vm.$options;
        if (opts.props)
            initProps$1(vm, opts.props);
        // Composition API
        initSetup(vm);
        if (opts.methods)
            initMethods(vm, opts.methods);
        if (opts.data) {
            initData(vm);
        }
        else {
            const ob = observe((vm._data = {}));
            ob && ob.vmCount++;
        }
        if (opts.computed)
            initComputed$1(vm, opts.computed);
        if (opts.watch && opts.watch !== nativeWatch) {
            initWatch(vm, opts.watch);
        }
    }
    function initProps$1(vm, propsOptions) {
        const propsData = vm.$options.propsData || {};
        const props = (vm._props = shallowReactive({}));
        // cache prop keys so that future props updates can iterate using Array
        // instead of dynamic object key enumeration.
        const keys = (vm.$options._propKeys = []);
        const isRoot = !vm.$parent;
        // root instance props should be converted
        if (!isRoot) {
            toggleObserving(false);
        }
        for (const key in propsOptions) {
            keys.push(key);
            const value = validateProp(key, propsOptions, propsData, vm);
            /* istanbul ignore else */
            {
                const hyphenatedKey = hyphenate(key);
                if (isReservedAttribute(hyphenatedKey) ||
                    config.isReservedAttr(hyphenatedKey)) {
                    warn$2(`"${hyphenatedKey}" is a reserved attribute and cannot be used as component prop.`, vm);
                }
                defineReactive(props, key, value, () => {
                    if (!isRoot && !isUpdatingChildComponent) {
                        warn$2(`Avoid mutating a prop directly since the value will be ` +
                            `overwritten whenever the parent component re-renders. ` +
                            `Instead, use a data or computed property based on the prop's ` +
                            `value. Prop being mutated: "${key}"`, vm);
                    }
                });
            }
            // static props are already proxied on the component's prototype
            // during Vue.extend(). We only need to proxy props defined at
            // instantiation here.
            if (!(key in vm)) {
                proxy(vm, `_props`, key);
            }
        }
        toggleObserving(true);
    }
    function initData(vm) {
        let data = vm.$options.data;
        data = vm._data = isFunction(data) ? getData(data, vm) : data || {};
        if (!isPlainObject(data)) {
            data = {};
            warn$2('data functions should return an object:\n' +
                    'https://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
        }
        // proxy data on instance
        const keys = Object.keys(data);
        const props = vm.$options.props;
        const methods = vm.$options.methods;
        let i = keys.length;
        while (i--) {
            const key = keys[i];
            {
                if (methods && hasOwn(methods, key)) {
                    warn$2(`Method "${key}" has already been defined as a data property.`, vm);
                }
            }
            if (props && hasOwn(props, key)) {
                warn$2(`The data property "${key}" is already declared as a prop. ` +
                        `Use prop default value instead.`, vm);
            }
            else if (!isReserved(key)) {
                proxy(vm, `_data`, key);
            }
        }
        // observe data
        const ob = observe(data);
        ob && ob.vmCount++;
    }
    function getData(data, vm) {
        // #7573 disable dep collection when invoking data getters
        pushTarget();
        try {
            return data.call(vm, vm);
        }
        catch (e) {
            handleError(e, vm, `data()`);
            return {};
        }
        finally {
            popTarget();
        }
    }
    const computedWatcherOptions = { lazy: true };
    function initComputed$1(vm, computed) {
        // $flow-disable-line
        const watchers = (vm._computedWatchers = Object.create(null));
        // computed properties are just getters during SSR
        const isSSR = isServerRendering();
        for (const key in computed) {
            const userDef = computed[key];
            const getter = isFunction(userDef) ? userDef : userDef.get;
            if (getter == null) {
                warn$2(`Getter is missing for computed property "${key}".`, vm);
            }
            if (!isSSR) {
                // create internal watcher for the computed property.
                watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
            }
            // component-defined computed properties are already defined on the
            // component prototype. We only need to define computed properties defined
            // at instantiation here.
            if (!(key in vm)) {
                defineComputed(vm, key, userDef);
            }
            else {
                if (key in vm.$data) {
                    warn$2(`The computed property "${key}" is already defined in data.`, vm);
                }
                else if (vm.$options.props && key in vm.$options.props) {
                    warn$2(`The computed property "${key}" is already defined as a prop.`, vm);
                }
                else if (vm.$options.methods && key in vm.$options.methods) {
                    warn$2(`The computed property "${key}" is already defined as a method.`, vm);
                }
            }
        }
    }
    function defineComputed(target, key, userDef) {
        const shouldCache = !isServerRendering();
        if (isFunction(userDef)) {
            sharedPropertyDefinition.get = shouldCache
                ? createComputedGetter(key)
                : createGetterInvoker(userDef);
            sharedPropertyDefinition.set = noop;
        }
        else {
            sharedPropertyDefinition.get = userDef.get
                ? shouldCache && userDef.cache !== false
                    ? createComputedGetter(key)
                    : createGetterInvoker(userDef.get)
                : noop;
            sharedPropertyDefinition.set = userDef.set || noop;
        }
        if (sharedPropertyDefinition.set === noop) {
            sharedPropertyDefinition.set = function () {
                warn$2(`Computed property "${key}" was assigned to but it has no setter.`, this);
            };
        }
        Object.defineProperty(target, key, sharedPropertyDefinition);
    }
    function createComputedGetter(key) {
        return function computedGetter() {
            const watcher = this._computedWatchers && this._computedWatchers[key];
            if (watcher) {
                if (watcher.dirty) {
                    watcher.evaluate();
                }
                if (Dep.target) {
                    if (Dep.target.onTrack) {
                        Dep.target.onTrack({
                            effect: Dep.target,
                            target: this,
                            type: "get" /* TrackOpTypes.GET */,
                            key
                        });
                    }
                    watcher.depend();
                }
                return watcher.value;
            }
        };
    }
    function createGetterInvoker(fn) {
        return function computedGetter() {
            return fn.call(this, this);
        };
    }
    function initMethods(vm, methods) {
        const props = vm.$options.props;
        for (const key in methods) {
            {
                if (typeof methods[key] !== 'function') {
                    warn$2(`Method "${key}" has type "${typeof methods[key]}" in the component definition. ` +
                        `Did you reference the function correctly?`, vm);
                }
                if (props && hasOwn(props, key)) {
                    warn$2(`Method "${key}" has already been defined as a prop.`, vm);
                }
                if (key in vm && isReserved(key)) {
                    warn$2(`Method "${key}" conflicts with an existing Vue instance method. ` +
                        `Avoid defining component methods that start with _ or $.`);
                }
            }
            vm[key] = typeof methods[key] !== 'function' ? noop : bind$1(methods[key], vm);
        }
    }
    function initWatch(vm, watch) {
        for (const key in watch) {
            const handler = watch[key];
            if (isArray(handler)) {
                for (let i = 0; i < handler.length; i++) {
                    createWatcher(vm, key, handler[i]);
                }
            }
            else {
                createWatcher(vm, key, handler);
            }
        }
    }
    function createWatcher(vm, expOrFn, handler, options) {
        if (isPlainObject(handler)) {
            options = handler;
            handler = handler.handler;
        }
        if (typeof handler === 'string') {
            handler = vm[handler];
        }
        return vm.$watch(expOrFn, handler, options);
    }
    function stateMixin(Vue) {
        // flow somehow has problems with directly declared definition object
        // when using Object.defineProperty, so we have to procedurally build up
        // the object here.
        const dataDef = {};
        dataDef.get = function () {
            return this._data;
        };
        const propsDef = {};
        propsDef.get = function () {
            return this._props;
        };
        {
            dataDef.set = function () {
                warn$2('Avoid replacing instance root $data. ' +
                    'Use nested data properties instead.', this);
            };
            propsDef.set = function () {
                warn$2(`$props is readonly.`, this);
            };
        }
        Object.defineProperty(Vue.prototype, '$data', dataDef);
        Object.defineProperty(Vue.prototype, '$props', propsDef);
        Vue.prototype.$set = set;
        Vue.prototype.$delete = del;
        Vue.prototype.$watch = function (expOrFn, cb, options) {
            const vm = this;
            if (isPlainObject(cb)) {
                return createWatcher(vm, expOrFn, cb, options);
            }
            options = options || {};
            options.user = true;
            const watcher = new Watcher(vm, expOrFn, cb, options);
            if (options.immediate) {
                const info = `callback for immediate watcher "${watcher.expression}"`;
                pushTarget();
                invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
                popTarget();
            }
            return function unwatchFn() {
                watcher.teardown();
            };
        };
    }

    function initProvide(vm) {
        const provideOption = vm.$options.provide;
        if (provideOption) {
            const provided = isFunction(provideOption)
                ? provideOption.call(vm)
                : provideOption;
            if (!isObject(provided)) {
                return;
            }
            const source = resolveProvided(vm);
            // IE9 doesn't support Object.getOwnPropertyDescriptors so we have to
            // iterate the keys ourselves.
            const keys = hasSymbol ? Reflect.ownKeys(provided) : Object.keys(provided);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                Object.defineProperty(source, key, Object.getOwnPropertyDescriptor(provided, key));
            }
        }
    }
    function initInjections(vm) {
        const result = resolveInject(vm.$options.inject, vm);
        if (result) {
            toggleObserving(false);
            Object.keys(result).forEach(key => {
                /* istanbul ignore else */
                {
                    defineReactive(vm, key, result[key], () => {
                        warn$2(`Avoid mutating an injected value directly since the changes will be ` +
                            `overwritten whenever the provided component re-renders. ` +
                            `injection being mutated: "${key}"`, vm);
                    });
                }
            });
            toggleObserving(true);
        }
    }
    function resolveInject(inject, vm) {
        if (inject) {
            // inject is :any because flow is not smart enough to figure out cached
            const result = Object.create(null);
            const keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                // #6574 in case the inject object is observed...
                if (key === '__ob__')
                    continue;
                const provideKey = inject[key].from;
                if (provideKey in vm._provided) {
                    result[key] = vm._provided[provideKey];
                }
                else if ('default' in inject[key]) {
                    const provideDefault = inject[key].default;
                    result[key] = isFunction(provideDefault)
                        ? provideDefault.call(vm)
                        : provideDefault;
                }
                else {
                    warn$2(`Injection "${key}" not found`, vm);
                }
            }
            return result;
        }
    }

    let uid = 0;
    function initMixin$1(Vue) {
        Vue.prototype._init = function (options) {
            const vm = this;
            // a uid
            vm._uid = uid++;
            let startTag, endTag;
            /* istanbul ignore if */
            if (config.performance && mark) {
                startTag = `vue-perf-start:${vm._uid}`;
                endTag = `vue-perf-end:${vm._uid}`;
                mark(startTag);
            }
            // a flag to mark this as a Vue instance without having to do instanceof
            // check
            vm._isVue = true;
            // avoid instances from being observed
            vm.__v_skip = true;
            // effect scope
            vm._scope = new EffectScope(true /* detached */);
            vm._scope._vm = true;
            // merge options
            if (options && options._isComponent) {
                // optimize internal component instantiation
                // since dynamic options merging is pretty slow, and none of the
                // internal component options needs special treatment.
                initInternalComponent(vm, options);
            }
            else {
                vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
            }
            /* istanbul ignore else */
            {
                initProxy(vm);
            }
            // expose real self
            vm._self = vm;
            initLifecycle(vm);
            initEvents(vm);
            initRender(vm);
            callHook$1(vm, 'beforeCreate', undefined, false /* setContext */);
            initInjections(vm); // resolve injections before data/props
            initState(vm);
            initProvide(vm); // resolve provide after data/props
            callHook$1(vm, 'created');
            /* istanbul ignore if */
            if (config.performance && mark) {
                vm._name = formatComponentName(vm, false);
                mark(endTag);
                measure(`vue ${vm._name} init`, startTag, endTag);
            }
            if (vm.$options.el) {
                vm.$mount(vm.$options.el);
            }
        };
    }
    function initInternalComponent(vm, options) {
        const opts = (vm.$options = Object.create(vm.constructor.options));
        // doing this because it's faster than dynamic enumeration.
        const parentVnode = options._parentVnode;
        opts.parent = options.parent;
        opts._parentVnode = parentVnode;
        const vnodeComponentOptions = parentVnode.componentOptions;
        opts.propsData = vnodeComponentOptions.propsData;
        opts._parentListeners = vnodeComponentOptions.listeners;
        opts._renderChildren = vnodeComponentOptions.children;
        opts._componentTag = vnodeComponentOptions.tag;
        if (options.render) {
            opts.render = options.render;
            opts.staticRenderFns = options.staticRenderFns;
        }
    }
    function resolveConstructorOptions(Ctor) {
        let options = Ctor.options;
        if (Ctor.super) {
            const superOptions = resolveConstructorOptions(Ctor.super);
            const cachedSuperOptions = Ctor.superOptions;
            if (superOptions !== cachedSuperOptions) {
                // super option changed,
                // need to resolve new options.
                Ctor.superOptions = superOptions;
                // check if there are any late-modified/attached options (#4976)
                const modifiedOptions = resolveModifiedOptions(Ctor);
                // update base extend options
                if (modifiedOptions) {
                    extend(Ctor.extendOptions, modifiedOptions);
                }
                options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
                if (options.name) {
                    options.components[options.name] = Ctor;
                }
            }
        }
        return options;
    }
    function resolveModifiedOptions(Ctor) {
        let modified;
        const latest = Ctor.options;
        const sealed = Ctor.sealedOptions;
        for (const key in latest) {
            if (latest[key] !== sealed[key]) {
                if (!modified)
                    modified = {};
                modified[key] = latest[key];
            }
        }
        return modified;
    }

    function FunctionalRenderContext(data, props, children, parent, Ctor) {
        const options = Ctor.options;
        // ensure the createElement function in functional components
        // gets a unique context - this is necessary for correct named slot check
        let contextVm;
        if (hasOwn(parent, '_uid')) {
            contextVm = Object.create(parent);
            contextVm._original = parent;
        }
        else {
            // the context vm passed in is a functional context as well.
            // in this case we want to make sure we are able to get a hold to the
            // real context instance.
            contextVm = parent;
            // @ts-ignore
            parent = parent._original;
        }
        const isCompiled = isTrue(options._compiled);
        const needNormalization = !isCompiled;
        this.data = data;
        this.props = props;
        this.children = children;
        this.parent = parent;
        this.listeners = data.on || emptyObject;
        this.injections = resolveInject(options.inject, parent);
        this.slots = () => {
            if (!this.$slots) {
                normalizeScopedSlots(parent, data.scopedSlots, (this.$slots = resolveSlots(children, parent)));
            }
            return this.$slots;
        };
        Object.defineProperty(this, 'scopedSlots', {
            enumerable: true,
            get() {
                return normalizeScopedSlots(parent, data.scopedSlots, this.slots());
            }
        });
        // support for compiled functional template
        if (isCompiled) {
            // exposing $options for renderStatic()
            this.$options = options;
            // pre-resolve slots for renderSlot()
            this.$slots = this.slots();
            this.$scopedSlots = normalizeScopedSlots(parent, data.scopedSlots, this.$slots);
        }
        if (options._scopeId) {
            this._c = (a, b, c, d) => {
                const vnode = createElement$1(contextVm, a, b, c, d, needNormalization);
                if (vnode && !isArray(vnode)) {
                    vnode.fnScopeId = options._scopeId;
                    vnode.fnContext = parent;
                }
                return vnode;
            };
        }
        else {
            this._c = (a, b, c, d) => createElement$1(contextVm, a, b, c, d, needNormalization);
        }
    }
    installRenderHelpers(FunctionalRenderContext.prototype);
    function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
        const options = Ctor.options;
        const props = {};
        const propOptions = options.props;
        if (isDef(propOptions)) {
            for (const key in propOptions) {
                props[key] = validateProp(key, propOptions, propsData || emptyObject);
            }
        }
        else {
            if (isDef(data.attrs))
                mergeProps(props, data.attrs);
            if (isDef(data.props))
                mergeProps(props, data.props);
        }
        const renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
        const vnode = options.render.call(null, renderContext._c, renderContext);
        if (vnode instanceof VNode) {
            return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
        }
        else if (isArray(vnode)) {
            const vnodes = normalizeChildren(vnode) || [];
            const res = new Array(vnodes.length);
            for (let i = 0; i < vnodes.length; i++) {
                res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
            }
            return res;
        }
    }
    function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
        // #7817 clone node before setting fnContext, otherwise if the node is reused
        // (e.g. it was from a cached normal slot) the fnContext causes named slots
        // that should not be matched to match.
        const clone = cloneVNode(vnode);
        clone.fnContext = contextVm;
        clone.fnOptions = options;
        {
            (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext =
                renderContext;
        }
        if (data.slot) {
            (clone.data || (clone.data = {})).slot = data.slot;
        }
        return clone;
    }
    function mergeProps(to, from) {
        for (const key in from) {
            to[camelize(key)] = from[key];
        }
    }

    function getComponentName(options) {
        return options.name || options.__name || options._componentTag;
    }
    // inline hooks to be invoked on component VNodes during patch
    const componentVNodeHooks = {
        init(vnode, hydrating) {
            if (vnode.componentInstance &&
                !vnode.componentInstance._isDestroyed &&
                vnode.data.keepAlive) {
                // kept-alive components, treat as a patch
                const mountedNode = vnode; // work around flow
                componentVNodeHooks.prepatch(mountedNode, mountedNode);
            }
            else {
                const child = (vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance));
                child.$mount(hydrating ? vnode.elm : undefined, hydrating);
            }
        },
        prepatch(oldVnode, vnode) {
            const options = vnode.componentOptions;
            const child = (vnode.componentInstance = oldVnode.componentInstance);
            updateChildComponent(child, options.propsData, // updated props
            options.listeners, // updated listeners
            vnode, // new parent vnode
            options.children // new children
            );
        },
        insert(vnode) {
            const { context, componentInstance } = vnode;
            if (!componentInstance._isMounted) {
                componentInstance._isMounted = true;
                callHook$1(componentInstance, 'mounted');
            }
            if (vnode.data.keepAlive) {
                if (context._isMounted) {
                    // vue-router#1212
                    // During updates, a kept-alive component's child components may
                    // change, so directly walking the tree here may call activated hooks
                    // on incorrect children. Instead we push them into a queue which will
                    // be processed after the whole patch process ended.
                    queueActivatedComponent(componentInstance);
                }
                else {
                    activateChildComponent(componentInstance, true /* direct */);
                }
            }
        },
        destroy(vnode) {
            const { componentInstance } = vnode;
            if (!componentInstance._isDestroyed) {
                if (!vnode.data.keepAlive) {
                    componentInstance.$destroy();
                }
                else {
                    deactivateChildComponent(componentInstance, true /* direct */);
                }
            }
        }
    };
    const hooksToMerge = Object.keys(componentVNodeHooks);
    function createComponent(Ctor, data, context, children, tag) {
        if (isUndef(Ctor)) {
            return;
        }
        const baseCtor = context.$options._base;
        // plain options object: turn it into a constructor
        if (isObject(Ctor)) {
            Ctor = baseCtor.extend(Ctor);
        }
        // if at this stage it's not a constructor or an async component factory,
        // reject.
        if (typeof Ctor !== 'function') {
            {
                warn$2(`Invalid Component definition: ${String(Ctor)}`, context);
            }
            return;
        }
        // async component
        let asyncFactory;
        // @ts-expect-error
        if (isUndef(Ctor.cid)) {
            asyncFactory = Ctor;
            Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
            if (Ctor === undefined) {
                // return a placeholder node for async component, which is rendered
                // as a comment node but preserves all the raw information for the node.
                // the information will be used for async server-rendering and hydration.
                return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
            }
        }
        data = data || {};
        // resolve constructor options in case global mixins are applied after
        // component constructor creation
        resolveConstructorOptions(Ctor);
        // transform component v-model data into props & events
        if (isDef(data.model)) {
            // @ts-expect-error
            transformModel(Ctor.options, data);
        }
        // extract props
        // @ts-expect-error
        const propsData = extractPropsFromVNodeData(data, Ctor, tag);
        // functional component
        // @ts-expect-error
        if (isTrue(Ctor.options.functional)) {
            return createFunctionalComponent(Ctor, propsData, data, context, children);
        }
        // extract listeners, since these needs to be treated as
        // child component listeners instead of DOM listeners
        const listeners = data.on;
        // replace with listeners with .native modifier
        // so it gets processed during parent component patch.
        data.on = data.nativeOn;
        // @ts-expect-error
        if (isTrue(Ctor.options.abstract)) {
            // abstract components do not keep anything
            // other than props & listeners & slot
            // work around flow
            const slot = data.slot;
            data = {};
            if (slot) {
                data.slot = slot;
            }
        }
        // install component management hooks onto the placeholder node
        installComponentHooks(data);
        // return a placeholder vnode
        // @ts-expect-error
        const name = getComponentName(Ctor.options) || tag;
        const vnode = new VNode(
        // @ts-expect-error
        `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`, data, undefined, undefined, undefined, context,
        // @ts-expect-error
        { Ctor, propsData, listeners, tag, children }, asyncFactory);
        return vnode;
    }
    function createComponentInstanceForVnode(
    // we know it's MountedComponentVNode but flow doesn't
    vnode,
    // activeInstance in lifecycle state
    parent) {
        const options = {
            _isComponent: true,
            _parentVnode: vnode,
            parent
        };
        // check inline-template render functions
        const inlineTemplate = vnode.data.inlineTemplate;
        if (isDef(inlineTemplate)) {
            options.render = inlineTemplate.render;
            options.staticRenderFns = inlineTemplate.staticRenderFns;
        }
        return new vnode.componentOptions.Ctor(options);
    }
    function installComponentHooks(data) {
        const hooks = data.hook || (data.hook = {});
        for (let i = 0; i < hooksToMerge.length; i++) {
            const key = hooksToMerge[i];
            const existing = hooks[key];
            const toMerge = componentVNodeHooks[key];
            // @ts-expect-error
            if (existing !== toMerge && !(existing && existing._merged)) {
                hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge;
            }
        }
    }
    function mergeHook(f1, f2) {
        const merged = (a, b) => {
            // flow complains about extra args which is why we use any
            f1(a, b);
            f2(a, b);
        };
        merged._merged = true;
        return merged;
    }
    // transform component v-model info (value and callback) into
    // prop and event handler respectively.
    function transformModel(options, data) {
        const prop = (options.model && options.model.prop) || 'value';
        const event = (options.model && options.model.event) || 'input';
        (data.attrs || (data.attrs = {}))[prop] = data.model.value;
        const on = data.on || (data.on = {});
        const existing = on[event];
        const callback = data.model.callback;
        if (isDef(existing)) {
            if (isArray(existing)
                ? existing.indexOf(callback) === -1
                : existing !== callback) {
                on[event] = [callback].concat(existing);
            }
        }
        else {
            on[event] = callback;
        }
    }

    let warn$2 = noop;
    let tip = noop;
    let generateComponentTrace; // work around flow check
    let formatComponentName;
    {
        const hasConsole = typeof console !== 'undefined';
        const classifyRE = /(?:^|[-_])(\w)/g;
        const classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');
        warn$2 = (msg, vm = currentInstance) => {
            const trace = vm ? generateComponentTrace(vm) : '';
            if (config.warnHandler) {
                config.warnHandler.call(null, msg, vm, trace);
            }
            else if (hasConsole && !config.silent) {
                console.error(`[Vue warn]: ${msg}${trace}`);
            }
        };
        tip = (msg, vm) => {
            if (hasConsole && !config.silent) {
                console.warn(`[Vue tip]: ${msg}` + (vm ? generateComponentTrace(vm) : ''));
            }
        };
        formatComponentName = (vm, includeFile) => {
            if (vm.$root === vm) {
                return '<Root>';
            }
            const options = isFunction(vm) && vm.cid != null
                ? vm.options
                : vm._isVue
                    ? vm.$options || vm.constructor.options
                    : vm;
            let name = getComponentName(options);
            const file = options.__file;
            if (!name && file) {
                const match = file.match(/([^/\\]+)\.vue$/);
                name = match && match[1];
            }
            return ((name ? `<${classify(name)}>` : `<Anonymous>`) +
                (file && includeFile !== false ? ` at ${file}` : ''));
        };
        const repeat = (str, n) => {
            let res = '';
            while (n) {
                if (n % 2 === 1)
                    res += str;
                if (n > 1)
                    str += str;
                n >>= 1;
            }
            return res;
        };
        generateComponentTrace = (vm) => {
            if (vm._isVue && vm.$parent) {
                const tree = [];
                let currentRecursiveSequence = 0;
                while (vm) {
                    if (tree.length > 0) {
                        const last = tree[tree.length - 1];
                        if (last.constructor === vm.constructor) {
                            currentRecursiveSequence++;
                            vm = vm.$parent;
                            continue;
                        }
                        else if (currentRecursiveSequence > 0) {
                            tree[tree.length - 1] = [last, currentRecursiveSequence];
                            currentRecursiveSequence = 0;
                        }
                    }
                    tree.push(vm);
                    vm = vm.$parent;
                }
                return ('\n\nfound in\n\n' +
                    tree
                        .map((vm, i) => `${i === 0 ? '---> ' : repeat(' ', 5 + i * 2)}${isArray(vm)
                        ? `${formatComponentName(vm[0])}... (${vm[1]} recursive calls)`
                        : formatComponentName(vm)}`)
                        .join('\n'));
            }
            else {
                return `\n\n(found in ${formatComponentName(vm)})`;
            }
        };
    }

    /**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */
    const strats = config.optionMergeStrategies;
    /**
     * Options with restrictions
     */
    {
        strats.el = strats.propsData = function (parent, child, vm, key) {
            if (!vm) {
                warn$2(`option "${key}" can only be used during instance ` +
                    'creation with the `new` keyword.');
            }
            return defaultStrat(parent, child);
        };
    }
    /**
     * Helper that recursively merges two data objects together.
     */
    function mergeData(to, from) {
        if (!from)
            return to;
        let key, toVal, fromVal;
        const keys = hasSymbol
            ? Reflect.ownKeys(from)
            : Object.keys(from);
        for (let i = 0; i < keys.length; i++) {
            key = keys[i];
            // in case the object is already observed...
            if (key === '__ob__')
                continue;
            toVal = to[key];
            fromVal = from[key];
            if (!hasOwn(to, key)) {
                set(to, key, fromVal);
            }
            else if (toVal !== fromVal &&
                isPlainObject(toVal) &&
                isPlainObject(fromVal)) {
                mergeData(toVal, fromVal);
            }
        }
        return to;
    }
    /**
     * Data
     */
    function mergeDataOrFn(parentVal, childVal, vm) {
        if (!vm) {
            // in a Vue.extend merge, both should be functions
            if (!childVal) {
                return parentVal;
            }
            if (!parentVal) {
                return childVal;
            }
            // when parentVal & childVal are both present,
            // we need to return a function that returns the
            // merged result of both functions... no need to
            // check if parentVal is a function here because
            // it has to be a function to pass previous merges.
            return function mergedDataFn() {
                return mergeData(isFunction(childVal) ? childVal.call(this, this) : childVal, isFunction(parentVal) ? parentVal.call(this, this) : parentVal);
            };
        }
        else {
            return function mergedInstanceDataFn() {
                // instance merge
                const instanceData = isFunction(childVal)
                    ? childVal.call(vm, vm)
                    : childVal;
                const defaultData = isFunction(parentVal)
                    ? parentVal.call(vm, vm)
                    : parentVal;
                if (instanceData) {
                    return mergeData(instanceData, defaultData);
                }
                else {
                    return defaultData;
                }
            };
        }
    }
    strats.data = function (parentVal, childVal, vm) {
        if (!vm) {
            if (childVal && typeof childVal !== 'function') {
                warn$2('The "data" option should be a function ' +
                        'that returns a per-instance value in component ' +
                        'definitions.', vm);
                return parentVal;
            }
            return mergeDataOrFn(parentVal, childVal);
        }
        return mergeDataOrFn(parentVal, childVal, vm);
    };
    /**
     * Hooks and props are merged as arrays.
     */
    function mergeLifecycleHook(parentVal, childVal) {
        const res = childVal
            ? parentVal
                ? parentVal.concat(childVal)
                : isArray(childVal)
                    ? childVal
                    : [childVal]
            : parentVal;
        return res ? dedupeHooks(res) : res;
    }
    function dedupeHooks(hooks) {
        const res = [];
        for (let i = 0; i < hooks.length; i++) {
            if (res.indexOf(hooks[i]) === -1) {
                res.push(hooks[i]);
            }
        }
        return res;
    }
    LIFECYCLE_HOOKS.forEach(hook => {
        strats[hook] = mergeLifecycleHook;
    });
    /**
     * Assets
     *
     * When a vm is present (instance creation), we need to do
     * a three-way merge between constructor options, instance
     * options and parent options.
     */
    function mergeAssets(parentVal, childVal, vm, key) {
        const res = Object.create(parentVal || null);
        if (childVal) {
            assertObjectType(key, childVal, vm);
            return extend(res, childVal);
        }
        else {
            return res;
        }
    }
    ASSET_TYPES.forEach(function (type) {
        strats[type + 's'] = mergeAssets;
    });
    /**
     * Watchers.
     *
     * Watchers hashes should not overwrite one
     * another, so we merge them as arrays.
     */
    strats.watch = function (parentVal, childVal, vm, key) {
        // work around Firefox's Object.prototype.watch...
        //@ts-expect-error work around
        if (parentVal === nativeWatch)
            parentVal = undefined;
        //@ts-expect-error work around
        if (childVal === nativeWatch)
            childVal = undefined;
        /* istanbul ignore if */
        if (!childVal)
            return Object.create(parentVal || null);
        {
            assertObjectType(key, childVal, vm);
        }
        if (!parentVal)
            return childVal;
        const ret = {};
        extend(ret, parentVal);
        for (const key in childVal) {
            let parent = ret[key];
            const child = childVal[key];
            if (parent && !isArray(parent)) {
                parent = [parent];
            }
            ret[key] = parent ? parent.concat(child) : isArray(child) ? child : [child];
        }
        return ret;
    };
    /**
     * Other object hashes.
     */
    strats.props =
        strats.methods =
            strats.inject =
                strats.computed =
                    function (parentVal, childVal, vm, key) {
                        if (childVal && true) {
                            assertObjectType(key, childVal, vm);
                        }
                        if (!parentVal)
                            return childVal;
                        const ret = Object.create(null);
                        extend(ret, parentVal);
                        if (childVal)
                            extend(ret, childVal);
                        return ret;
                    };
    strats.provide = mergeDataOrFn;
    /**
     * Default strategy.
     */
    const defaultStrat = function (parentVal, childVal) {
        return childVal === undefined ? parentVal : childVal;
    };
    /**
     * Validate component names
     */
    function checkComponents(options) {
        for (const key in options.components) {
            validateComponentName(key);
        }
    }
    function validateComponentName(name) {
        if (!new RegExp(`^[a-zA-Z][\\-\\.0-9_${unicodeRegExp.source}]*$`).test(name)) {
            warn$2('Invalid component name: "' +
                name +
                '". Component names ' +
                'should conform to valid custom element name in html5 specification.');
        }
        if (isBuiltInTag(name) || config.isReservedTag(name)) {
            warn$2('Do not use built-in or reserved HTML elements as component ' +
                'id: ' +
                name);
        }
    }
    /**
     * Ensure all props option syntax are normalized into the
     * Object-based format.
     */
    function normalizeProps(options, vm) {
        const props = options.props;
        if (!props)
            return;
        const res = {};
        let i, val, name;
        if (isArray(props)) {
            i = props.length;
            while (i--) {
                val = props[i];
                if (typeof val === 'string') {
                    name = camelize(val);
                    res[name] = { type: null };
                }
                else {
                    warn$2('props must be strings when using array syntax.');
                }
            }
        }
        else if (isPlainObject(props)) {
            for (const key in props) {
                val = props[key];
                name = camelize(key);
                res[name] = isPlainObject(val) ? val : { type: val };
            }
        }
        else {
            warn$2(`Invalid value for option "props": expected an Array or an Object, ` +
                `but got ${toRawType(props)}.`, vm);
        }
        options.props = res;
    }
    /**
     * Normalize all injections into Object-based format
     */
    function normalizeInject(options, vm) {
        const inject = options.inject;
        if (!inject)
            return;
        const normalized = (options.inject = {});
        if (isArray(inject)) {
            for (let i = 0; i < inject.length; i++) {
                normalized[inject[i]] = { from: inject[i] };
            }
        }
        else if (isPlainObject(inject)) {
            for (const key in inject) {
                const val = inject[key];
                normalized[key] = isPlainObject(val)
                    ? extend({ from: key }, val)
                    : { from: val };
            }
        }
        else {
            warn$2(`Invalid value for option "inject": expected an Array or an Object, ` +
                `but got ${toRawType(inject)}.`, vm);
        }
    }
    /**
     * Normalize raw function directives into object format.
     */
    function normalizeDirectives$1(options) {
        const dirs = options.directives;
        if (dirs) {
            for (const key in dirs) {
                const def = dirs[key];
                if (isFunction(def)) {
                    dirs[key] = { bind: def, update: def };
                }
            }
        }
    }
    function assertObjectType(name, value, vm) {
        if (!isPlainObject(value)) {
            warn$2(`Invalid value for option "${name}": expected an Object, ` +
                `but got ${toRawType(value)}.`, vm);
        }
    }
    /**
     * Merge two option objects into a new one.
     * Core utility used in both instantiation and inheritance.
     */
    function mergeOptions(parent, child, vm) {
        {
            checkComponents(child);
        }
        if (isFunction(child)) {
            // @ts-expect-error
            child = child.options;
        }
        normalizeProps(child, vm);
        normalizeInject(child, vm);
        normalizeDirectives$1(child);
        // Apply extends and mixins on the child options,
        // but only if it is a raw options object that isn't
        // the result of another mergeOptions call.
        // Only merged options has the _base property.
        if (!child._base) {
            if (child.extends) {
                parent = mergeOptions(parent, child.extends, vm);
            }
            if (child.mixins) {
                for (let i = 0, l = child.mixins.length; i < l; i++) {
                    parent = mergeOptions(parent, child.mixins[i], vm);
                }
            }
        }
        const options = {};
        let key;
        for (key in parent) {
            mergeField(key);
        }
        for (key in child) {
            if (!hasOwn(parent, key)) {
                mergeField(key);
            }
        }
        function mergeField(key) {
            const strat = strats[key] || defaultStrat;
            options[key] = strat(parent[key], child[key], vm, key);
        }
        return options;
    }
    /**
     * Resolve an asset.
     * This function is used because child instances need access
     * to assets defined in its ancestor chain.
     */
    function resolveAsset(options, type, id, warnMissing) {
        /* istanbul ignore if */
        if (typeof id !== 'string') {
            return;
        }
        const assets = options[type];
        // check local registration variations first
        if (hasOwn(assets, id))
            return assets[id];
        const camelizedId = camelize(id);
        if (hasOwn(assets, camelizedId))
            return assets[camelizedId];
        const PascalCaseId = capitalize(camelizedId);
        if (hasOwn(assets, PascalCaseId))
            return assets[PascalCaseId];
        // fallback to prototype chain
        const res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
        if (warnMissing && !res) {
            warn$2('Failed to resolve ' + type.slice(0, -1) + ': ' + id);
        }
        return res;
    }

    function validateProp(key, propOptions, propsData, vm) {
        const prop = propOptions[key];
        const absent = !hasOwn(propsData, key);
        let value = propsData[key];
        // boolean casting
        const booleanIndex = getTypeIndex(Boolean, prop.type);
        if (booleanIndex > -1) {
            if (absent && !hasOwn(prop, 'default')) {
                value = false;
            }
            else if (value === '' || value === hyphenate(key)) {
                // only cast empty string / same name to boolean if
                // boolean has higher priority
                const stringIndex = getTypeIndex(String, prop.type);
                if (stringIndex < 0 || booleanIndex < stringIndex) {
                    value = true;
                }
            }
        }
        // check default value
        if (value === undefined) {
            value = getPropDefaultValue(vm, prop, key);
            // since the default value is a fresh copy,
            // make sure to observe it.
            const prevShouldObserve = shouldObserve;
            toggleObserving(true);
            observe(value);
            toggleObserving(prevShouldObserve);
        }
        {
            assertProp(prop, key, value, vm, absent);
        }
        return value;
    }
    /**
     * Get the default value of a prop.
     */
    function getPropDefaultValue(vm, prop, key) {
        // no default, return undefined
        if (!hasOwn(prop, 'default')) {
            return undefined;
        }
        const def = prop.default;
        // warn against non-factory defaults for Object & Array
        if (isObject(def)) {
            warn$2('Invalid default value for prop "' +
                key +
                '": ' +
                'Props with type Object/Array must use a factory function ' +
                'to return the default value.', vm);
        }
        // the raw prop value was also undefined from previous render,
        // return previous default value to avoid unnecessary watcher trigger
        if (vm &&
            vm.$options.propsData &&
            vm.$options.propsData[key] === undefined &&
            vm._props[key] !== undefined) {
            return vm._props[key];
        }
        // call factory function for non-Function types
        // a value is Function if its prototype is function even across different execution context
        return isFunction(def) && getType(prop.type) !== 'Function'
            ? def.call(vm)
            : def;
    }
    /**
     * Assert whether a prop is valid.
     */
    function assertProp(prop, name, value, vm, absent) {
        if (prop.required && absent) {
            warn$2('Missing required prop: "' + name + '"', vm);
            return;
        }
        if (value == null && !prop.required) {
            return;
        }
        let type = prop.type;
        let valid = !type || type === true;
        const expectedTypes = [];
        if (type) {
            if (!isArray(type)) {
                type = [type];
            }
            for (let i = 0; i < type.length && !valid; i++) {
                const assertedType = assertType(value, type[i], vm);
                expectedTypes.push(assertedType.expectedType || '');
                valid = assertedType.valid;
            }
        }
        const haveExpectedTypes = expectedTypes.some(t => t);
        if (!valid && haveExpectedTypes) {
            warn$2(getInvalidTypeMessage(name, value, expectedTypes), vm);
            return;
        }
        const validator = prop.validator;
        if (validator) {
            if (!validator(value)) {
                warn$2('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
            }
        }
    }
    const simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
    function assertType(value, type, vm) {
        let valid;
        const expectedType = getType(type);
        if (simpleCheckRE.test(expectedType)) {
            const t = typeof value;
            valid = t === expectedType.toLowerCase();
            // for primitive wrapper objects
            if (!valid && t === 'object') {
                valid = value instanceof type;
            }
        }
        else if (expectedType === 'Object') {
            valid = isPlainObject(value);
        }
        else if (expectedType === 'Array') {
            valid = isArray(value);
        }
        else {
            try {
                valid = value instanceof type;
            }
            catch (e) {
                warn$2('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
                valid = false;
            }
        }
        return {
            valid,
            expectedType
        };
    }
    const functionTypeCheckRE = /^\s*function (\w+)/;
    /**
     * Use function string name to check built-in types,
     * because a simple equality check will fail when running
     * across different vms / iframes.
     */
    function getType(fn) {
        const match = fn && fn.toString().match(functionTypeCheckRE);
        return match ? match[1] : '';
    }
    function isSameType(a, b) {
        return getType(a) === getType(b);
    }
    function getTypeIndex(type, expectedTypes) {
        if (!isArray(expectedTypes)) {
            return isSameType(expectedTypes, type) ? 0 : -1;
        }
        for (let i = 0, len = expectedTypes.length; i < len; i++) {
            if (isSameType(expectedTypes[i], type)) {
                return i;
            }
        }
        return -1;
    }
    function getInvalidTypeMessage(name, value, expectedTypes) {
        let message = `Invalid prop: type check failed for prop "${name}".` +
            ` Expected ${expectedTypes.map(capitalize).join(', ')}`;
        const expectedType = expectedTypes[0];
        const receivedType = toRawType(value);
        // check if we need to specify expected value
        if (expectedTypes.length === 1 &&
            isExplicable(expectedType) &&
            isExplicable(typeof value) &&
            !isBoolean(expectedType, receivedType)) {
            message += ` with value ${styleValue(value, expectedType)}`;
        }
        message += `, got ${receivedType} `;
        // check if we need to specify received value
        if (isExplicable(receivedType)) {
            message += `with value ${styleValue(value, receivedType)}.`;
        }
        return message;
    }
    function styleValue(value, type) {
        if (type === 'String') {
            return `"${value}"`;
        }
        else if (type === 'Number') {
            return `${Number(value)}`;
        }
        else {
            return `${value}`;
        }
    }
    const EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
    function isExplicable(value) {
        return EXPLICABLE_TYPES.some(elem => value.toLowerCase() === elem);
    }
    function isBoolean(...args) {
        return args.some(elem => elem.toLowerCase() === 'boolean');
    }

    function Vue(options) {
        if (!(this instanceof Vue)) {
            warn$2('Vue is a constructor and should be called with the `new` keyword');
        }
        this._init(options);
    }
    //@ts-expect-error Vue has function type
    initMixin$1(Vue);
    //@ts-expect-error Vue has function type
    stateMixin(Vue);
    //@ts-expect-error Vue has function type
    eventsMixin(Vue);
    //@ts-expect-error Vue has function type
    lifecycleMixin(Vue);
    //@ts-expect-error Vue has function type
    renderMixin(Vue);

    function initUse(Vue) {
        Vue.use = function (plugin) {
            const installedPlugins = this._installedPlugins || (this._installedPlugins = []);
            if (installedPlugins.indexOf(plugin) > -1) {
                return this;
            }
            // additional parameters
            const args = toArray(arguments, 1);
            args.unshift(this);
            if (isFunction(plugin.install)) {
                plugin.install.apply(plugin, args);
            }
            else if (isFunction(plugin)) {
                plugin.apply(null, args);
            }
            installedPlugins.push(plugin);
            return this;
        };
    }

    function initMixin(Vue) {
        Vue.mixin = function (mixin) {
            this.options = mergeOptions(this.options, mixin);
            return this;
        };
    }

    function initExtend(Vue) {
        /**
         * Each instance constructor, including Vue, has a unique
         * cid. This enables us to create wrapped "child
         * constructors" for prototypal inheritance and cache them.
         */
        Vue.cid = 0;
        let cid = 1;
        /**
         * Class inheritance
         */
        Vue.extend = function (extendOptions) {
            extendOptions = extendOptions || {};
            const Super = this;
            const SuperId = Super.cid;
            const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
            if (cachedCtors[SuperId]) {
                return cachedCtors[SuperId];
            }
            const name = getComponentName(extendOptions) || getComponentName(Super.options);
            if (name) {
                validateComponentName(name);
            }
            const Sub = function VueComponent(options) {
                this._init(options);
            };
            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.cid = cid++;
            Sub.options = mergeOptions(Super.options, extendOptions);
            Sub['super'] = Super;
            // For props and computed properties, we define the proxy getters on
            // the Vue instances at extension time, on the extended prototype. This
            // avoids Object.defineProperty calls for each instance created.
            if (Sub.options.props) {
                initProps(Sub);
            }
            if (Sub.options.computed) {
                initComputed(Sub);
            }
            // allow further extension/mixin/plugin usage
            Sub.extend = Super.extend;
            Sub.mixin = Super.mixin;
            Sub.use = Super.use;
            // create asset registers, so extended classes
            // can have their private assets too.
            ASSET_TYPES.forEach(function (type) {
                Sub[type] = Super[type];
            });
            // enable recursive self-lookup
            if (name) {
                Sub.options.components[name] = Sub;
            }
            // keep a reference to the super options at extension time.
            // later at instantiation we can check if Super's options have
            // been updated.
            Sub.superOptions = Super.options;
            Sub.extendOptions = extendOptions;
            Sub.sealedOptions = extend({}, Sub.options);
            // cache constructor
            cachedCtors[SuperId] = Sub;
            return Sub;
        };
    }
    function initProps(Comp) {
        const props = Comp.options.props;
        for (const key in props) {
            proxy(Comp.prototype, `_props`, key);
        }
    }
    function initComputed(Comp) {
        const computed = Comp.options.computed;
        for (const key in computed) {
            defineComputed(Comp.prototype, key, computed[key]);
        }
    }

    function initAssetRegisters(Vue) {
        /**
         * Create asset registration methods.
         */
        ASSET_TYPES.forEach(type => {
            // @ts-expect-error function is not exact same type
            Vue[type] = function (id, definition) {
                if (!definition) {
                    return this.options[type + 's'][id];
                }
                else {
                    /* istanbul ignore if */
                    if (type === 'component') {
                        validateComponentName(id);
                    }
                    if (type === 'component' && isPlainObject(definition)) {
                        // @ts-expect-error
                        definition.name = definition.name || id;
                        definition = this.options._base.extend(definition);
                    }
                    if (type === 'directive' && isFunction(definition)) {
                        definition = { bind: definition, update: definition };
                    }
                    this.options[type + 's'][id] = definition;
                    return definition;
                }
            };
        });
    }

    function _getComponentName(opts) {
        return opts && (getComponentName(opts.Ctor.options) || opts.tag);
    }
    function matches(pattern, name) {
        if (isArray(pattern)) {
            return pattern.indexOf(name) > -1;
        }
        else if (typeof pattern === 'string') {
            return pattern.split(',').indexOf(name) > -1;
        }
        else if (isRegExp(pattern)) {
            return pattern.test(name);
        }
        /* istanbul ignore next */
        return false;
    }
    function pruneCache(keepAliveInstance, filter) {
        const { cache, keys, _vnode } = keepAliveInstance;
        for (const key in cache) {
            const entry = cache[key];
            if (entry) {
                const name = entry.name;
                if (name && !filter(name)) {
                    pruneCacheEntry(cache, key, keys, _vnode);
                }
            }
        }
    }
    function pruneCacheEntry(cache, key, keys, current) {
        const entry = cache[key];
        if (entry && (!current || entry.tag !== current.tag)) {
            // @ts-expect-error can be undefined
            entry.componentInstance.$destroy();
        }
        cache[key] = null;
        remove$2(keys, key);
    }
    const patternTypes = [String, RegExp, Array];
    // TODO defineComponent
    var KeepAlive = {
        name: 'keep-alive',
        abstract: true,
        props: {
            include: patternTypes,
            exclude: patternTypes,
            max: [String, Number]
        },
        methods: {
            cacheVNode() {
                const { cache, keys, vnodeToCache, keyToCache } = this;
                if (vnodeToCache) {
                    const { tag, componentInstance, componentOptions } = vnodeToCache;
                    cache[keyToCache] = {
                        name: _getComponentName(componentOptions),
                        tag,
                        componentInstance
                    };
                    keys.push(keyToCache);
                    // prune oldest entry
                    if (this.max && keys.length > parseInt(this.max)) {
                        pruneCacheEntry(cache, keys[0], keys, this._vnode);
                    }
                    this.vnodeToCache = null;
                }
            }
        },
        created() {
            this.cache = Object.create(null);
            this.keys = [];
        },
        destroyed() {
            for (const key in this.cache) {
                pruneCacheEntry(this.cache, key, this.keys);
            }
        },
        mounted() {
            this.cacheVNode();
            this.$watch('include', val => {
                pruneCache(this, name => matches(val, name));
            });
            this.$watch('exclude', val => {
                pruneCache(this, name => !matches(val, name));
            });
        },
        updated() {
            this.cacheVNode();
        },
        render() {
            const slot = this.$slots.default;
            const vnode = getFirstComponentChild(slot);
            const componentOptions = vnode && vnode.componentOptions;
            if (componentOptions) {
                // check pattern
                const name = _getComponentName(componentOptions);
                const { include, exclude } = this;
                if (
                // not included
                (include && (!name || !matches(include, name))) ||
                    // excluded
                    (exclude && name && matches(exclude, name))) {
                    return vnode;
                }
                const { cache, keys } = this;
                const key = vnode.key == null
                    ? // same constructor may get registered as different local components
                        // so cid alone is not enough (#3269)
                        componentOptions.Ctor.cid +
                            (componentOptions.tag ? `::${componentOptions.tag}` : '')
                    : vnode.key;
                if (cache[key]) {
                    vnode.componentInstance = cache[key].componentInstance;
                    // make current key freshest
                    remove$2(keys, key);
                    keys.push(key);
                }
                else {
                    // delay setting the cache until update
                    this.vnodeToCache = vnode;
                    this.keyToCache = key;
                }
                // @ts-expect-error can vnode.data can be undefined
                vnode.data.keepAlive = true;
            }
            return vnode || (slot && slot[0]);
        }
    };

    var builtInComponents = {
        KeepAlive
    };

    function initGlobalAPI(Vue) {
        // config
        const configDef = {};
        configDef.get = () => config;
        {
            configDef.set = () => {
                warn$2('Do not replace the Vue.config object, set individual fields instead.');
            };
        }
        Object.defineProperty(Vue, 'config', configDef);
        // exposed util methods.
        // NOTE: these are not considered part of the public API - avoid relying on
        // them unless you are aware of the risk.
        Vue.util = {
            warn: warn$2,
            extend,
            mergeOptions,
            defineReactive
        };
        Vue.set = set;
        Vue.delete = del;
        Vue.nextTick = nextTick;
        // 2.6 explicit observable API
        Vue.observable = (obj) => {
            observe(obj);
            return obj;
        };
        Vue.options = Object.create(null);
        ASSET_TYPES.forEach(type => {
            Vue.options[type + 's'] = Object.create(null);
        });
        // this is used to identify the "base" constructor to extend all plain-object
        // components with in Weex's multi-instance scenarios.
        Vue.options._base = Vue;
        extend(Vue.options.components, builtInComponents);
        initUse(Vue);
        initMixin(Vue);
        initExtend(Vue);
        initAssetRegisters(Vue);
    }

    initGlobalAPI(Vue);
    Object.defineProperty(Vue.prototype, '$isServer', {
        get: isServerRendering
    });
    Object.defineProperty(Vue.prototype, '$ssrContext', {
        get() {
            /* istanbul ignore next */
            return this.$vnode && this.$vnode.ssrContext;
        }
    });
    // expose FunctionalRenderContext for ssr runtime helper installation
    Object.defineProperty(Vue, 'FunctionalRenderContext', {
        value: FunctionalRenderContext
    });
    Vue.version = version;

    // these are reserved for web because they are directly compiled away
    // during template compilation
    const isReservedAttr = makeMap('style,class');
    // attributes that should be using props for binding
    const acceptValue = makeMap('input,textarea,option,select,progress');
    const mustUseProp = (tag, type, attr) => {
        return ((attr === 'value' && acceptValue(tag) && type !== 'button') ||
            (attr === 'selected' && tag === 'option') ||
            (attr === 'checked' && tag === 'input') ||
            (attr === 'muted' && tag === 'video'));
    };
    const isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
    const isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');
    const convertEnumeratedValue = (key, value) => {
        return isFalsyAttrValue(value) || value === 'false'
            ? 'false'
            : // allow arbitrary string value for contenteditable
                key === 'contenteditable' && isValidContentEditableValue(value)
                    ? value
                    : 'true';
    };
    const isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
        'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
        'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
        'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
        'required,reversed,scoped,seamless,selected,sortable,' +
        'truespeed,typemustmatch,visible');
    const xlinkNS = 'http://www.w3.org/1999/xlink';
    const isXlink = (name) => {
        return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
    };
    const getXlinkProp = (name) => {
        return isXlink(name) ? name.slice(6, name.length) : '';
    };
    const isFalsyAttrValue = (val) => {
        return val == null || val === false;
    };

    function genClassForVnode(vnode) {
        let data = vnode.data;
        let parentNode = vnode;
        let childNode = vnode;
        while (isDef(childNode.componentInstance)) {
            childNode = childNode.componentInstance._vnode;
            if (childNode && childNode.data) {
                data = mergeClassData(childNode.data, data);
            }
        }
        // @ts-expect-error parentNode.parent not VNodeWithData
        while (isDef((parentNode = parentNode.parent))) {
            if (parentNode && parentNode.data) {
                data = mergeClassData(data, parentNode.data);
            }
        }
        return renderClass(data.staticClass, data.class);
    }
    function mergeClassData(child, parent) {
        return {
            staticClass: concat(child.staticClass, parent.staticClass),
            class: isDef(child.class) ? [child.class, parent.class] : parent.class
        };
    }
    function renderClass(staticClass, dynamicClass) {
        if (isDef(staticClass) || isDef(dynamicClass)) {
            return concat(staticClass, stringifyClass(dynamicClass));
        }
        /* istanbul ignore next */
        return '';
    }
    function concat(a, b) {
        return a ? (b ? a + ' ' + b : a) : b || '';
    }
    function stringifyClass(value) {
        if (Array.isArray(value)) {
            return stringifyArray(value);
        }
        if (isObject(value)) {
            return stringifyObject(value);
        }
        if (typeof value === 'string') {
            return value;
        }
        /* istanbul ignore next */
        return '';
    }
    function stringifyArray(value) {
        let res = '';
        let stringified;
        for (let i = 0, l = value.length; i < l; i++) {
            if (isDef((stringified = stringifyClass(value[i]))) && stringified !== '') {
                if (res)
                    res += ' ';
                res += stringified;
            }
        }
        return res;
    }
    function stringifyObject(value) {
        let res = '';
        for (const key in value) {
            if (value[key]) {
                if (res)
                    res += ' ';
                res += key;
            }
        }
        return res;
    }

    const namespaceMap = {
        svg: 'http://www.w3.org/2000/svg',
        math: 'http://www.w3.org/1998/Math/MathML'
    };
    const isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' +
        'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
        'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
        'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
        's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
        'embed,object,param,source,canvas,script,noscript,del,ins,' +
        'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
        'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
        'output,progress,select,textarea,' +
        'details,dialog,menu,menuitem,summary,' +
        'content,element,shadow,template,blockquote,iframe,tfoot');
    // this map is intentionally selective, only covering SVG elements that may
    // contain child elements.
    const isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
        'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
        'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
    const isPreTag = (tag) => tag === 'pre';
    const isReservedTag = (tag) => {
        return isHTMLTag(tag) || isSVG(tag);
    };
    function getTagNamespace(tag) {
        if (isSVG(tag)) {
            return 'svg';
        }
        // basic support for MathML
        // note it doesn't support other MathML elements being component roots
        if (tag === 'math') {
            return 'math';
        }
    }
    const unknownElementCache = Object.create(null);
    function isUnknownElement(tag) {
        /* istanbul ignore if */
        if (!inBrowser) {
            return true;
        }
        if (isReservedTag(tag)) {
            return false;
        }
        tag = tag.toLowerCase();
        /* istanbul ignore if */
        if (unknownElementCache[tag] != null) {
            return unknownElementCache[tag];
        }
        const el = document.createElement(tag);
        if (tag.indexOf('-') > -1) {
            // http://stackoverflow.com/a/28210364/1070244
            return (unknownElementCache[tag] =
                el.constructor === window.HTMLUnknownElement ||
                    el.constructor === window.HTMLElement);
        }
        else {
            return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()));
        }
    }
    const isTextInputType = makeMap('text,number,password,search,email,tel,url');

    /**
     * Query an element selector if it's not an element already.
     */
    function query(el) {
        if (typeof el === 'string') {
            const selected = document.querySelector(el);
            if (!selected) {
                warn$2('Cannot find element: ' + el);
                return document.createElement('div');
            }
            return selected;
        }
        else {
            return el;
        }
    }

    function createElement(tagName, vnode) {
        const elm = document.createElement(tagName);
        if (tagName !== 'select') {
            return elm;
        }
        // false or null will remove the attribute but undefined will not
        if (vnode.data &&
            vnode.data.attrs &&
            vnode.data.attrs.multiple !== undefined) {
            elm.setAttribute('multiple', 'multiple');
        }
        return elm;
    }
    function createElementNS(namespace, tagName) {
        return document.createElementNS(namespaceMap[namespace], tagName);
    }
    function createTextNode(text) {
        return document.createTextNode(text);
    }
    function createComment(text) {
        return document.createComment(text);
    }
    function insertBefore(parentNode, newNode, referenceNode) {
        parentNode.insertBefore(newNode, referenceNode);
    }
    function removeChild(node, child) {
        node.removeChild(child);
    }
    function appendChild(node, child) {
        node.appendChild(child);
    }
    function parentNode(node) {
        return node.parentNode;
    }
    function nextSibling(node) {
        return node.nextSibling;
    }
    function tagName(node) {
        return node.tagName;
    }
    function setTextContent(node, text) {
        node.textContent = text;
    }
    function setStyleScope(node, scopeId) {
        node.setAttribute(scopeId, '');
    }

    var nodeOps = /*#__PURE__*/Object.freeze({
      __proto__: null,
      createElement: createElement,
      createElementNS: createElementNS,
      createTextNode: createTextNode,
      createComment: createComment,
      insertBefore: insertBefore,
      removeChild: removeChild,
      appendChild: appendChild,
      parentNode: parentNode,
      nextSibling: nextSibling,
      tagName: tagName,
      setTextContent: setTextContent,
      setStyleScope: setStyleScope
    });

    var ref = {
        create(_, vnode) {
            registerRef(vnode);
        },
        update(oldVnode, vnode) {
            if (oldVnode.data.ref !== vnode.data.ref) {
                registerRef(oldVnode, true);
                registerRef(vnode);
            }
        },
        destroy(vnode) {
            registerRef(vnode, true);
        }
    };
    function registerRef(vnode, isRemoval) {
        const ref = vnode.data.ref;
        if (!isDef(ref))
            return;
        const vm = vnode.context;
        const refValue = vnode.componentInstance || vnode.elm;
        const value = isRemoval ? null : refValue;
        const $refsValue = isRemoval ? undefined : refValue;
        if (isFunction(ref)) {
            invokeWithErrorHandling(ref, vm, [value], vm, `template ref function`);
            return;
        }
        const isFor = vnode.data.refInFor;
        const _isString = typeof ref === 'string' || typeof ref === 'number';
        const _isRef = isRef(ref);
        const refs = vm.$refs;
        if (_isString || _isRef) {
            if (isFor) {
                const existing = _isString ? refs[ref] : ref.value;
                if (isRemoval) {
                    isArray(existing) && remove$2(existing, refValue);
                }
                else {
                    if (!isArray(existing)) {
                        if (_isString) {
                            refs[ref] = [refValue];
                            setSetupRef(vm, ref, refs[ref]);
                        }
                        else {
                            ref.value = [refValue];
                        }
                    }
                    else if (!existing.includes(refValue)) {
                        existing.push(refValue);
                    }
                }
            }
            else if (_isString) {
                if (isRemoval && refs[ref] !== refValue) {
                    return;
                }
                refs[ref] = $refsValue;
                setSetupRef(vm, ref, value);
            }
            else if (_isRef) {
                if (isRemoval && ref.value !== refValue) {
                    return;
                }
                ref.value = value;
            }
            else {
                warn$2(`Invalid template ref type: ${typeof ref}`);
            }
        }
    }
    function setSetupRef({ _setupState }, key, val) {
        if (_setupState && hasOwn(_setupState, key)) {
            if (isRef(_setupState[key])) {
                _setupState[key].value = val;
            }
            else {
                _setupState[key] = val;
            }
        }
    }

    /**
     * Virtual DOM patching algorithm based on Snabbdom by
     * Simon Friis Vindum (@paldepind)
     * Licensed under the MIT License
     * https://github.com/paldepind/snabbdom/blob/master/LICENSE
     *
     * modified by Evan You (@yyx990803)
     *
     * Not type-checking this because this file is perf-critical and the cost
     * of making flow understand it is not worth it.
     */
    const emptyNode = new VNode('', {}, []);
    const hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
    function sameVnode(a, b) {
        return (a.key === b.key &&
            a.asyncFactory === b.asyncFactory &&
            ((a.tag === b.tag &&
                a.isComment === b.isComment &&
                isDef(a.data) === isDef(b.data) &&
                sameInputType(a, b)) ||
                (isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error))));
    }
    function sameInputType(a, b) {
        if (a.tag !== 'input')
            return true;
        let i;
        const typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type;
        const typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type;
        return typeA === typeB || (isTextInputType(typeA) && isTextInputType(typeB));
    }
    function createKeyToOldIdx(children, beginIdx, endIdx) {
        let i, key;
        const map = {};
        for (i = beginIdx; i <= endIdx; ++i) {
            key = children[i].key;
            if (isDef(key))
                map[key] = i;
        }
        return map;
    }
    function createPatchFunction(backend) {
        let i, j;
        const cbs = {};
        const { modules, nodeOps } = backend;
        for (i = 0; i < hooks.length; ++i) {
            cbs[hooks[i]] = [];
            for (j = 0; j < modules.length; ++j) {
                if (isDef(modules[j][hooks[i]])) {
                    cbs[hooks[i]].push(modules[j][hooks[i]]);
                }
            }
        }
        function emptyNodeAt(elm) {
            return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
        }
        function createRmCb(childElm, listeners) {
            function remove() {
                if (--remove.listeners === 0) {
                    removeNode(childElm);
                }
            }
            remove.listeners = listeners;
            return remove;
        }
        function removeNode(el) {
            const parent = nodeOps.parentNode(el);
            // element may have already been removed due to v-html / v-text
            if (isDef(parent)) {
                nodeOps.removeChild(parent, el);
            }
        }
        function isUnknownElement(vnode, inVPre) {
            return (!inVPre &&
                !vnode.ns &&
                !(config.ignoredElements.length &&
                    config.ignoredElements.some(ignore => {
                        return isRegExp(ignore)
                            ? ignore.test(vnode.tag)
                            : ignore === vnode.tag;
                    })) &&
                config.isUnknownElement(vnode.tag));
        }
        let creatingElmInVPre = 0;
        function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
            if (isDef(vnode.elm) && isDef(ownerArray)) {
                // This vnode was used in a previous render!
                // now it's used as a new node, overwriting its elm would cause
                // potential patch errors down the road when it's used as an insertion
                // reference node. Instead, we clone the node on-demand before creating
                // associated DOM element for it.
                vnode = ownerArray[index] = cloneVNode(vnode);
            }
            vnode.isRootInsert = !nested; // for transition enter check
            if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
                return;
            }
            const data = vnode.data;
            const children = vnode.children;
            const tag = vnode.tag;
            if (isDef(tag)) {
                {
                    if (data && data.pre) {
                        creatingElmInVPre++;
                    }
                    if (isUnknownElement(vnode, creatingElmInVPre)) {
                        warn$2('Unknown custom element: <' +
                            tag +
                            '> - did you ' +
                            'register the component correctly? For recursive components, ' +
                            'make sure to provide the "name" option.', vnode.context);
                    }
                }
                vnode.elm = vnode.ns
                    ? nodeOps.createElementNS(vnode.ns, tag)
                    : nodeOps.createElement(tag, vnode);
                setScope(vnode);
                createChildren(vnode, children, insertedVnodeQueue);
                if (isDef(data)) {
                    invokeCreateHooks(vnode, insertedVnodeQueue);
                }
                insert(parentElm, vnode.elm, refElm);
                if (data && data.pre) {
                    creatingElmInVPre--;
                }
            }
            else if (isTrue(vnode.isComment)) {
                vnode.elm = nodeOps.createComment(vnode.text);
                insert(parentElm, vnode.elm, refElm);
            }
            else {
                vnode.elm = nodeOps.createTextNode(vnode.text);
                insert(parentElm, vnode.elm, refElm);
            }
        }
        function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
            let i = vnode.data;
            if (isDef(i)) {
                const isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
                if (isDef((i = i.hook)) && isDef((i = i.init))) {
                    i(vnode, false /* hydrating */);
                }
                // after calling the init hook, if the vnode is a child component
                // it should've created a child instance and mounted it. the child
                // component also has set the placeholder vnode's elm.
                // in that case we can just return the element and be done.
                if (isDef(vnode.componentInstance)) {
                    initComponent(vnode, insertedVnodeQueue);
                    insert(parentElm, vnode.elm, refElm);
                    if (isTrue(isReactivated)) {
                        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                    }
                    return true;
                }
            }
        }
        function initComponent(vnode, insertedVnodeQueue) {
            if (isDef(vnode.data.pendingInsert)) {
                insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
                vnode.data.pendingInsert = null;
            }
            vnode.elm = vnode.componentInstance.$el;
            if (isPatchable(vnode)) {
                invokeCreateHooks(vnode, insertedVnodeQueue);
                setScope(vnode);
            }
            else {
                // empty component root.
                // skip all element-related modules except for ref (#3455)
                registerRef(vnode);
                // make sure to invoke the insert hook
                insertedVnodeQueue.push(vnode);
            }
        }
        function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
            let i;
            // hack for #4339: a reactivated component with inner transition
            // does not trigger because the inner node's created hooks are not called
            // again. It's not ideal to involve module-specific logic in here but
            // there doesn't seem to be a better way to do it.
            let innerNode = vnode;
            while (innerNode.componentInstance) {
                innerNode = innerNode.componentInstance._vnode;
                if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
                    for (i = 0; i < cbs.activate.length; ++i) {
                        cbs.activate[i](emptyNode, innerNode);
                    }
                    insertedVnodeQueue.push(innerNode);
                    break;
                }
            }
            // unlike a newly created component,
            // a reactivated keep-alive component doesn't insert itself
            insert(parentElm, vnode.elm, refElm);
        }
        function insert(parent, elm, ref) {
            if (isDef(parent)) {
                if (isDef(ref)) {
                    if (nodeOps.parentNode(ref) === parent) {
                        nodeOps.insertBefore(parent, elm, ref);
                    }
                }
                else {
                    nodeOps.appendChild(parent, elm);
                }
            }
        }
        function createChildren(vnode, children, insertedVnodeQueue) {
            if (isArray(children)) {
                {
                    checkDuplicateKeys(children);
                }
                for (let i = 0; i < children.length; ++i) {
                    createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
                }
            }
            else if (isPrimitive(vnode.text)) {
                nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
            }
        }
        function isPatchable(vnode) {
            while (vnode.componentInstance) {
                vnode = vnode.componentInstance._vnode;
            }
            return isDef(vnode.tag);
        }
        function invokeCreateHooks(vnode, insertedVnodeQueue) {
            for (let i = 0; i < cbs.create.length; ++i) {
                cbs.create[i](emptyNode, vnode);
            }
            i = vnode.data.hook; // Reuse variable
            if (isDef(i)) {
                if (isDef(i.create))
                    i.create(emptyNode, vnode);
                if (isDef(i.insert))
                    insertedVnodeQueue.push(vnode);
            }
        }
        // set scope id attribute for scoped CSS.
        // this is implemented as a special case to avoid the overhead
        // of going through the normal attribute patching process.
        function setScope(vnode) {
            let i;
            if (isDef((i = vnode.fnScopeId))) {
                nodeOps.setStyleScope(vnode.elm, i);
            }
            else {
                let ancestor = vnode;
                while (ancestor) {
                    if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {
                        nodeOps.setStyleScope(vnode.elm, i);
                    }
                    ancestor = ancestor.parent;
                }
            }
            // for slot content they should also get the scopeId from the host instance.
            if (isDef((i = activeInstance)) &&
                i !== vnode.context &&
                i !== vnode.fnContext &&
                isDef((i = i.$options._scopeId))) {
                nodeOps.setStyleScope(vnode.elm, i);
            }
        }
        function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
            for (; startIdx <= endIdx; ++startIdx) {
                createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
            }
        }
        function invokeDestroyHook(vnode) {
            let i, j;
            const data = vnode.data;
            if (isDef(data)) {
                if (isDef((i = data.hook)) && isDef((i = i.destroy)))
                    i(vnode);
                for (i = 0; i < cbs.destroy.length; ++i)
                    cbs.destroy[i](vnode);
            }
            if (isDef((i = vnode.children))) {
                for (j = 0; j < vnode.children.length; ++j) {
                    invokeDestroyHook(vnode.children[j]);
                }
            }
        }
        function removeVnodes(vnodes, startIdx, endIdx) {
            for (; startIdx <= endIdx; ++startIdx) {
                const ch = vnodes[startIdx];
                if (isDef(ch)) {
                    if (isDef(ch.tag)) {
                        removeAndInvokeRemoveHook(ch);
                        invokeDestroyHook(ch);
                    }
                    else {
                        // Text node
                        removeNode(ch.elm);
                    }
                }
            }
        }
        function removeAndInvokeRemoveHook(vnode, rm) {
            if (isDef(rm) || isDef(vnode.data)) {
                let i;
                const listeners = cbs.remove.length + 1;
                if (isDef(rm)) {
                    // we have a recursively passed down rm callback
                    // increase the listeners count
                    rm.listeners += listeners;
                }
                else {
                    // directly removing
                    rm = createRmCb(vnode.elm, listeners);
                }
                // recursively invoke hooks on child component root node
                if (isDef((i = vnode.componentInstance)) &&
                    isDef((i = i._vnode)) &&
                    isDef(i.data)) {
                    removeAndInvokeRemoveHook(i, rm);
                }
                for (i = 0; i < cbs.remove.length; ++i) {
                    cbs.remove[i](vnode, rm);
                }
                if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {
                    i(vnode, rm);
                }
                else {
                    rm();
                }
            }
            else {
                removeNode(vnode.elm);
            }
        }
        function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
            let oldStartIdx = 0;
            let newStartIdx = 0;
            let oldEndIdx = oldCh.length - 1;
            let oldStartVnode = oldCh[0];
            let oldEndVnode = oldCh[oldEndIdx];
            let newEndIdx = newCh.length - 1;
            let newStartVnode = newCh[0];
            let newEndVnode = newCh[newEndIdx];
            let oldKeyToIdx, idxInOld, vnodeToMove, refElm;
            // removeOnly is a special flag used only by <transition-group>
            // to ensure removed elements stay in correct relative positions
            // during leaving transitions
            const canMove = !removeOnly;
            {
                checkDuplicateKeys(newCh);
            }
            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
                if (isUndef(oldStartVnode)) {
                    oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
                }
                else if (isUndef(oldEndVnode)) {
                    oldEndVnode = oldCh[--oldEndIdx];
                }
                else if (sameVnode(oldStartVnode, newStartVnode)) {
                    patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                    oldStartVnode = oldCh[++oldStartIdx];
                    newStartVnode = newCh[++newStartIdx];
                }
                else if (sameVnode(oldEndVnode, newEndVnode)) {
                    patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                    oldEndVnode = oldCh[--oldEndIdx];
                    newEndVnode = newCh[--newEndIdx];
                }
                else if (sameVnode(oldStartVnode, newEndVnode)) {
                    // Vnode moved right
                    patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                    canMove &&
                        nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
                    oldStartVnode = oldCh[++oldStartIdx];
                    newEndVnode = newCh[--newEndIdx];
                }
                else if (sameVnode(oldEndVnode, newStartVnode)) {
                    // Vnode moved left
                    patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                    canMove &&
                        nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                    oldEndVnode = oldCh[--oldEndIdx];
                    newStartVnode = newCh[++newStartIdx];
                }
                else {
                    if (isUndef(oldKeyToIdx))
                        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                    idxInOld = isDef(newStartVnode.key)
                        ? oldKeyToIdx[newStartVnode.key]
                        : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                    if (isUndef(idxInOld)) {
                        // New element
                        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                    }
                    else {
                        vnodeToMove = oldCh[idxInOld];
                        if (sameVnode(vnodeToMove, newStartVnode)) {
                            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                            oldCh[idxInOld] = undefined;
                            canMove &&
                                nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                        }
                        else {
                            // same key but different element. treat as new element
                            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                        }
                    }
                    newStartVnode = newCh[++newStartIdx];
                }
            }
            if (oldStartIdx > oldEndIdx) {
                refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
                addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
            }
            else if (newStartIdx > newEndIdx) {
                removeVnodes(oldCh, oldStartIdx, oldEndIdx);
            }
        }
        function checkDuplicateKeys(children) {
            const seenKeys = {};
            for (let i = 0; i < children.length; i++) {
                const vnode = children[i];
                const key = vnode.key;
                if (isDef(key)) {
                    if (seenKeys[key]) {
                        warn$2(`Duplicate keys detected: '${key}'. This may cause an update error.`, vnode.context);
                    }
                    else {
                        seenKeys[key] = true;
                    }
                }
            }
        }
        function findIdxInOld(node, oldCh, start, end) {
            for (let i = start; i < end; i++) {
                const c = oldCh[i];
                if (isDef(c) && sameVnode(node, c))
                    return i;
            }
        }
        function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
            if (oldVnode === vnode) {
                return;
            }
            if (isDef(vnode.elm) && isDef(ownerArray)) {
                // clone reused vnode
                vnode = ownerArray[index] = cloneVNode(vnode);
            }
            const elm = (vnode.elm = oldVnode.elm);
            if (isTrue(oldVnode.isAsyncPlaceholder)) {
                if (isDef(vnode.asyncFactory.resolved)) {
                    hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
                }
                else {
                    vnode.isAsyncPlaceholder = true;
                }
                return;
            }
            // reuse element for static trees.
            // note we only do this if the vnode is cloned -
            // if the new node is not cloned it means the render functions have been
            // reset by the hot-reload-api and we need to do a proper re-render.
            if (isTrue(vnode.isStatic) &&
                isTrue(oldVnode.isStatic) &&
                vnode.key === oldVnode.key &&
                (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
                vnode.componentInstance = oldVnode.componentInstance;
                return;
            }
            let i;
            const data = vnode.data;
            if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
                i(oldVnode, vnode);
            }
            const oldCh = oldVnode.children;
            const ch = vnode.children;
            if (isDef(data) && isPatchable(vnode)) {
                for (i = 0; i < cbs.update.length; ++i)
                    cbs.update[i](oldVnode, vnode);
                if (isDef((i = data.hook)) && isDef((i = i.update)))
                    i(oldVnode, vnode);
            }
            if (isUndef(vnode.text)) {
                if (isDef(oldCh) && isDef(ch)) {
                    if (oldCh !== ch)
                        updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
                }
                else if (isDef(ch)) {
                    {
                        checkDuplicateKeys(ch);
                    }
                    if (isDef(oldVnode.text))
                        nodeOps.setTextContent(elm, '');
                    addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
                }
                else if (isDef(oldCh)) {
                    removeVnodes(oldCh, 0, oldCh.length - 1);
                }
                else if (isDef(oldVnode.text)) {
                    nodeOps.setTextContent(elm, '');
                }
            }
            else if (oldVnode.text !== vnode.text) {
                nodeOps.setTextContent(elm, vnode.text);
            }
            if (isDef(data)) {
                if (isDef((i = data.hook)) && isDef((i = i.postpatch)))
                    i(oldVnode, vnode);
            }
        }
        function invokeInsertHook(vnode, queue, initial) {
            // delay insert hooks for component root nodes, invoke them after the
            // element is really inserted
            if (isTrue(initial) && isDef(vnode.parent)) {
                vnode.parent.data.pendingInsert = queue;
            }
            else {
                for (let i = 0; i < queue.length; ++i) {
                    queue[i].data.hook.insert(queue[i]);
                }
            }
        }
        let hydrationBailed = false;
        // list of modules that can skip create hook during hydration because they
        // are already rendered on the client or has no need for initialization
        // Note: style is excluded because it relies on initial clone for future
        // deep updates (#7063).
        const isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');
        // Note: this is a browser-only function so we can assume elms are DOM nodes.
        function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
            let i;
            const { tag, data, children } = vnode;
            inVPre = inVPre || (data && data.pre);
            vnode.elm = elm;
            if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
                vnode.isAsyncPlaceholder = true;
                return true;
            }
            // assert node match
            {
                if (!assertNodeMatch(elm, vnode, inVPre)) {
                    return false;
                }
            }
            if (isDef(data)) {
                if (isDef((i = data.hook)) && isDef((i = i.init)))
                    i(vnode, true /* hydrating */);
                if (isDef((i = vnode.componentInstance))) {
                    // child component. it should have hydrated its own tree.
                    initComponent(vnode, insertedVnodeQueue);
                    return true;
                }
            }
            if (isDef(tag)) {
                if (isDef(children)) {
                    // empty element, allow client to pick up and populate children
                    if (!elm.hasChildNodes()) {
                        createChildren(vnode, children, insertedVnodeQueue);
                    }
                    else {
                        // v-html and domProps: innerHTML
                        if (isDef((i = data)) &&
                            isDef((i = i.domProps)) &&
                            isDef((i = i.innerHTML))) {
                            if (i !== elm.innerHTML) {
                                /* istanbul ignore if */
                                if (typeof console !== 'undefined' &&
                                    !hydrationBailed) {
                                    hydrationBailed = true;
                                    console.warn('Parent: ', elm);
                                    console.warn('server innerHTML: ', i);
                                    console.warn('client innerHTML: ', elm.innerHTML);
                                }
                                return false;
                            }
                        }
                        else {
                            // iterate and compare children lists
                            let childrenMatch = true;
                            let childNode = elm.firstChild;
                            for (let i = 0; i < children.length; i++) {
                                if (!childNode ||
                                    !hydrate(childNode, children[i], insertedVnodeQueue, inVPre)) {
                                    childrenMatch = false;
                                    break;
                                }
                                childNode = childNode.nextSibling;
                            }
                            // if childNode is not null, it means the actual childNodes list is
                            // longer than the virtual children list.
                            if (!childrenMatch || childNode) {
                                /* istanbul ignore if */
                                if (typeof console !== 'undefined' &&
                                    !hydrationBailed) {
                                    hydrationBailed = true;
                                    console.warn('Parent: ', elm);
                                    console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                                }
                                return false;
                            }
                        }
                    }
                }
                if (isDef(data)) {
                    let fullInvoke = false;
                    for (const key in data) {
                        if (!isRenderedModule(key)) {
                            fullInvoke = true;
                            invokeCreateHooks(vnode, insertedVnodeQueue);
                            break;
                        }
                    }
                    if (!fullInvoke && data['class']) {
                        // ensure collecting deps for deep class bindings for future updates
                        traverse(data['class']);
                    }
                }
            }
            else if (elm.data !== vnode.text) {
                elm.data = vnode.text;
            }
            return true;
        }
        function assertNodeMatch(node, vnode, inVPre) {
            if (isDef(vnode.tag)) {
                return (vnode.tag.indexOf('vue-component') === 0 ||
                    (!isUnknownElement(vnode, inVPre) &&
                        vnode.tag.toLowerCase() ===
                            (node.tagName && node.tagName.toLowerCase())));
            }
            else {
                return node.nodeType === (vnode.isComment ? 8 : 3);
            }
        }
        return function patch(oldVnode, vnode, hydrating, removeOnly) {
            if (isUndef(vnode)) {
                if (isDef(oldVnode))
                    invokeDestroyHook(oldVnode);
                return;
            }
            let isInitialPatch = false;
            const insertedVnodeQueue = [];
            if (isUndef(oldVnode)) {
                // empty mount (likely as component), create new root element
                isInitialPatch = true;
                createElm(vnode, insertedVnodeQueue);
            }
            else {
                const isRealElement = isDef(oldVnode.nodeType);
                if (!isRealElement && sameVnode(oldVnode, vnode)) {
                    // patch existing root node
                    patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
                }
                else {
                    if (isRealElement) {
                        // mounting to a real element
                        // check if this is server-rendered content and if we can perform
                        // a successful hydration.
                        if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                            oldVnode.removeAttribute(SSR_ATTR);
                            hydrating = true;
                        }
                        if (isTrue(hydrating)) {
                            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                                invokeInsertHook(vnode, insertedVnodeQueue, true);
                                return oldVnode;
                            }
                            else {
                                warn$2('The client-side rendered virtual DOM tree is not matching ' +
                                    'server-rendered content. This is likely caused by incorrect ' +
                                    'HTML markup, for example nesting block-level elements inside ' +
                                    '<p>, or missing <tbody>. Bailing hydration and performing ' +
                                    'full client-side render.');
                            }
                        }
                        // either not server-rendered, or hydration failed.
                        // create an empty node and replace it
                        oldVnode = emptyNodeAt(oldVnode);
                    }
                    // replacing existing element
                    const oldElm = oldVnode.elm;
                    const parentElm = nodeOps.parentNode(oldElm);
                    // create new node
                    createElm(vnode, insertedVnodeQueue,
                    // extremely rare edge case: do not insert if old element is in a
                    // leaving transition. Only happens when combining transition +
                    // keep-alive + HOCs. (#4590)
                    oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm));
                    // update parent placeholder node element, recursively
                    if (isDef(vnode.parent)) {
                        let ancestor = vnode.parent;
                        const patchable = isPatchable(vnode);
                        while (ancestor) {
                            for (let i = 0; i < cbs.destroy.length; ++i) {
                                cbs.destroy[i](ancestor);
                            }
                            ancestor.elm = vnode.elm;
                            if (patchable) {
                                for (let i = 0; i < cbs.create.length; ++i) {
                                    cbs.create[i](emptyNode, ancestor);
                                }
                                // #6513
                                // invoke insert hooks that may have been merged by create hooks.
                                // e.g. for directives that uses the "inserted" hook.
                                const insert = ancestor.data.hook.insert;
                                if (insert.merged) {
                                    // start at index 1 to avoid re-invoking component mounted hook
                                    for (let i = 1; i < insert.fns.length; i++) {
                                        insert.fns[i]();
                                    }
                                }
                            }
                            else {
                                registerRef(ancestor);
                            }
                            ancestor = ancestor.parent;
                        }
                    }
                    // destroy old node
                    if (isDef(parentElm)) {
                        removeVnodes([oldVnode], 0, 0);
                    }
                    else if (isDef(oldVnode.tag)) {
                        invokeDestroyHook(oldVnode);
                    }
                }
            }
            invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
            return vnode.elm;
        };
    }

    var directives$1 = {
        create: updateDirectives,
        update: updateDirectives,
        destroy: function unbindDirectives(vnode) {
            // @ts-expect-error emptyNode is not VNodeWithData
            updateDirectives(vnode, emptyNode);
        }
    };
    function updateDirectives(oldVnode, vnode) {
        if (oldVnode.data.directives || vnode.data.directives) {
            _update(oldVnode, vnode);
        }
    }
    function _update(oldVnode, vnode) {
        const isCreate = oldVnode === emptyNode;
        const isDestroy = vnode === emptyNode;
        const oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context);
        const newDirs = normalizeDirectives(vnode.data.directives, vnode.context);
        const dirsWithInsert = [];
        const dirsWithPostpatch = [];
        let key, oldDir, dir;
        for (key in newDirs) {
            oldDir = oldDirs[key];
            dir = newDirs[key];
            if (!oldDir) {
                // new directive, bind
                callHook(dir, 'bind', vnode, oldVnode);
                if (dir.def && dir.def.inserted) {
                    dirsWithInsert.push(dir);
                }
            }
            else {
                // existing directive, update
                dir.oldValue = oldDir.value;
                dir.oldArg = oldDir.arg;
                callHook(dir, 'update', vnode, oldVnode);
                if (dir.def && dir.def.componentUpdated) {
                    dirsWithPostpatch.push(dir);
                }
            }
        }
        if (dirsWithInsert.length) {
            const callInsert = () => {
                for (let i = 0; i < dirsWithInsert.length; i++) {
                    callHook(dirsWithInsert[i], 'inserted', vnode, oldVnode);
                }
            };
            if (isCreate) {
                mergeVNodeHook(vnode, 'insert', callInsert);
            }
            else {
                callInsert();
            }
        }
        if (dirsWithPostpatch.length) {
            mergeVNodeHook(vnode, 'postpatch', () => {
                for (let i = 0; i < dirsWithPostpatch.length; i++) {
                    callHook(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
                }
            });
        }
        if (!isCreate) {
            for (key in oldDirs) {
                if (!newDirs[key]) {
                    // no longer present, unbind
                    callHook(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
                }
            }
        }
    }
    const emptyModifiers = Object.create(null);
    function normalizeDirectives(dirs, vm) {
        const res = Object.create(null);
        if (!dirs) {
            // $flow-disable-line
            return res;
        }
        let i, dir;
        for (i = 0; i < dirs.length; i++) {
            dir = dirs[i];
            if (!dir.modifiers) {
                // $flow-disable-line
                dir.modifiers = emptyModifiers;
            }
            res[getRawDirName(dir)] = dir;
            if (vm._setupState && vm._setupState.__sfc) {
                const setupDef = dir.def || resolveAsset(vm, '_setupState', 'v-' + dir.name);
                if (typeof setupDef === 'function') {
                    dir.def = {
                        bind: setupDef,
                        update: setupDef,
                    };
                }
                else {
                    dir.def = setupDef;
                }
            }
            dir.def = dir.def || resolveAsset(vm.$options, 'directives', dir.name, true);
        }
        // $flow-disable-line
        return res;
    }
    function getRawDirName(dir) {
        return (dir.rawName || `${dir.name}.${Object.keys(dir.modifiers || {}).join('.')}`);
    }
    function callHook(dir, hook, vnode, oldVnode, isDestroy) {
        const fn = dir.def && dir.def[hook];
        if (fn) {
            try {
                fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
            }
            catch (e) {
                handleError(e, vnode.context, `directive ${dir.name} ${hook} hook`);
            }
        }
    }

    var baseModules = [ref, directives$1];

    function updateAttrs(oldVnode, vnode) {
        const opts = vnode.componentOptions;
        if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
            return;
        }
        if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
            return;
        }
        let key, cur, old;
        const elm = vnode.elm;
        const oldAttrs = oldVnode.data.attrs || {};
        let attrs = vnode.data.attrs || {};
        // clone observed objects, as the user probably wants to mutate it
        if (isDef(attrs.__ob__) || isTrue(attrs._v_attr_proxy)) {
            attrs = vnode.data.attrs = extend({}, attrs);
        }
        for (key in attrs) {
            cur = attrs[key];
            old = oldAttrs[key];
            if (old !== cur) {
                setAttr(elm, key, cur, vnode.data.pre);
            }
        }
        // #4391: in IE9, setting type can reset value for input[type=radio]
        // #6666: IE/Edge forces progress value down to 1 before setting a max
        /* istanbul ignore if */
        if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
            setAttr(elm, 'value', attrs.value);
        }
        for (key in oldAttrs) {
            if (isUndef(attrs[key])) {
                if (isXlink(key)) {
                    elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
                }
                else if (!isEnumeratedAttr(key)) {
                    elm.removeAttribute(key);
                }
            }
        }
    }
    function setAttr(el, key, value, isInPre) {
        if (isInPre || el.tagName.indexOf('-') > -1) {
            baseSetAttr(el, key, value);
        }
        else if (isBooleanAttr(key)) {
            // set attribute for blank value
            // e.g. <option disabled>Select one</option>
            if (isFalsyAttrValue(value)) {
                el.removeAttribute(key);
            }
            else {
                // technically allowfullscreen is a boolean attribute for <iframe>,
                // but Flash expects a value of "true" when used on <embed> tag
                value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
                el.setAttribute(key, value);
            }
        }
        else if (isEnumeratedAttr(key)) {
            el.setAttribute(key, convertEnumeratedValue(key, value));
        }
        else if (isXlink(key)) {
            if (isFalsyAttrValue(value)) {
                el.removeAttributeNS(xlinkNS, getXlinkProp(key));
            }
            else {
                el.setAttributeNS(xlinkNS, key, value);
            }
        }
        else {
            baseSetAttr(el, key, value);
        }
    }
    function baseSetAttr(el, key, value) {
        if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
        }
        else {
            // #7138: IE10 & 11 fires input event when setting placeholder on
            // <textarea>... block the first input event and remove the blocker
            // immediately.
            /* istanbul ignore if */
            if (isIE &&
                !isIE9 &&
                el.tagName === 'TEXTAREA' &&
                key === 'placeholder' &&
                value !== '' &&
                !el.__ieph) {
                const blocker = e => {
                    e.stopImmediatePropagation();
                    el.removeEventListener('input', blocker);
                };
                el.addEventListener('input', blocker);
                // $flow-disable-line
                el.__ieph = true; /* IE placeholder patched */
            }
            el.setAttribute(key, value);
        }
    }
    var attrs = {
        create: updateAttrs,
        update: updateAttrs
    };

    function updateClass(oldVnode, vnode) {
        const el = vnode.elm;
        const data = vnode.data;
        const oldData = oldVnode.data;
        if (isUndef(data.staticClass) &&
            isUndef(data.class) &&
            (isUndef(oldData) ||
                (isUndef(oldData.staticClass) && isUndef(oldData.class)))) {
            return;
        }
        let cls = genClassForVnode(vnode);
        // handle transition classes
        const transitionClass = el._transitionClasses;
        if (isDef(transitionClass)) {
            cls = concat(cls, stringifyClass(transitionClass));
        }
        // set the class
        if (cls !== el._prevClass) {
            el.setAttribute('class', cls);
            el._prevClass = cls;
        }
    }
    var klass$1 = {
        create: updateClass,
        update: updateClass
    };

    const validDivisionCharRE = /[\w).+\-_$\]]/;
    function parseFilters(exp) {
        let inSingle = false;
        let inDouble = false;
        let inTemplateString = false;
        let inRegex = false;
        let curly = 0;
        let square = 0;
        let paren = 0;
        let lastFilterIndex = 0;
        let c, prev, i, expression, filters;
        for (i = 0; i < exp.length; i++) {
            prev = c;
            c = exp.charCodeAt(i);
            if (inSingle) {
                if (c === 0x27 && prev !== 0x5c)
                    inSingle = false;
            }
            else if (inDouble) {
                if (c === 0x22 && prev !== 0x5c)
                    inDouble = false;
            }
            else if (inTemplateString) {
                if (c === 0x60 && prev !== 0x5c)
                    inTemplateString = false;
            }
            else if (inRegex) {
                if (c === 0x2f && prev !== 0x5c)
                    inRegex = false;
            }
            else if (c === 0x7c && // pipe
                exp.charCodeAt(i + 1) !== 0x7c &&
                exp.charCodeAt(i - 1) !== 0x7c &&
                !curly &&
                !square &&
                !paren) {
                if (expression === undefined) {
                    // first filter, end of expression
                    lastFilterIndex = i + 1;
                    expression = exp.slice(0, i).trim();
                }
                else {
                    pushFilter();
                }
            }
            else {
                switch (c) {
                    case 0x22:
                        inDouble = true;
                        break; // "
                    case 0x27:
                        inSingle = true;
                        break; // '
                    case 0x60:
                        inTemplateString = true;
                        break; // `
                    case 0x28:
                        paren++;
                        break; // (
                    case 0x29:
                        paren--;
                        break; // )
                    case 0x5b:
                        square++;
                        break; // [
                    case 0x5d:
                        square--;
                        break; // ]
                    case 0x7b:
                        curly++;
                        break; // {
                    case 0x7d:
                        curly--;
                        break; // }
                }
                if (c === 0x2f) {
                    // /
                    let j = i - 1;
                    let p;
                    // find first non-whitespace prev char
                    for (; j >= 0; j--) {
                        p = exp.charAt(j);
                        if (p !== ' ')
                            break;
                    }
                    if (!p || !validDivisionCharRE.test(p)) {
                        inRegex = true;
                    }
                }
            }
        }
        if (expression === undefined) {
            expression = exp.slice(0, i).trim();
        }
        else if (lastFilterIndex !== 0) {
            pushFilter();
        }
        function pushFilter() {
            (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
            lastFilterIndex = i + 1;
        }
        if (filters) {
            for (i = 0; i < filters.length; i++) {
                expression = wrapFilter(expression, filters[i]);
            }
        }
        return expression;
    }
    function wrapFilter(exp, filter) {
        const i = filter.indexOf('(');
        if (i < 0) {
            // _f: resolveFilter
            return `_f("${filter}")(${exp})`;
        }
        else {
            const name = filter.slice(0, i);
            const args = filter.slice(i + 1);
            return `_f("${name}")(${exp}${args !== ')' ? ',' + args : args}`;
        }
    }

    /* eslint-disable no-unused-vars */
    function baseWarn(msg, range) {
        console.error(`[Vue compiler]: ${msg}`);
    }
    /* eslint-enable no-unused-vars */
    function pluckModuleFunction(modules, key) {
        return modules ? modules.map(m => m[key]).filter(_ => _) : [];
    }
    function addProp(el, name, value, range, dynamic) {
        (el.props || (el.props = [])).push(rangeSetItem({ name, value, dynamic }, range));
        el.plain = false;
    }
    function addAttr(el, name, value, range, dynamic) {
        const attrs = dynamic
            ? el.dynamicAttrs || (el.dynamicAttrs = [])
            : el.attrs || (el.attrs = []);
        attrs.push(rangeSetItem({ name, value, dynamic }, range));
        el.plain = false;
    }
    // add a raw attr (use this in preTransforms)
    function addRawAttr(el, name, value, range) {
        el.attrsMap[name] = value;
        el.attrsList.push(rangeSetItem({ name, value }, range));
    }
    function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
        (el.directives || (el.directives = [])).push(rangeSetItem({
            name,
            rawName,
            value,
            arg,
            isDynamicArg,
            modifiers
        }, range));
        el.plain = false;
    }
    function prependModifierMarker(symbol, name, dynamic) {
        return dynamic ? `_p(${name},"${symbol}")` : symbol + name; // mark the event as captured
    }
    function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
        modifiers = modifiers || emptyObject;
        // warn prevent and passive modifier
        /* istanbul ignore if */
        if (warn && modifiers.prevent && modifiers.passive) {
            warn("passive and prevent can't be used together. " +
                "Passive handler can't prevent default event.", range);
        }
        // normalize click.right and click.middle since they don't actually fire
        // this is technically browser-specific, but at least for now browsers are
        // the only target envs that have right/middle clicks.
        if (modifiers.right) {
            if (dynamic) {
                name = `(${name})==='click'?'contextmenu':(${name})`;
            }
            else if (name === 'click') {
                name = 'contextmenu';
                delete modifiers.right;
            }
        }
        else if (modifiers.middle) {
            if (dynamic) {
                name = `(${name})==='click'?'mouseup':(${name})`;
            }
            else if (name === 'click') {
                name = 'mouseup';
            }
        }
        // check capture modifier
        if (modifiers.capture) {
            delete modifiers.capture;
            name = prependModifierMarker('!', name, dynamic);
        }
        if (modifiers.once) {
            delete modifiers.once;
            name = prependModifierMarker('~', name, dynamic);
        }
        /* istanbul ignore if */
        if (modifiers.passive) {
            delete modifiers.passive;
            name = prependModifierMarker('&', name, dynamic);
        }
        let events;
        if (modifiers.native) {
            delete modifiers.native;
            events = el.nativeEvents || (el.nativeEvents = {});
        }
        else {
            events = el.events || (el.events = {});
        }
        const newHandler = rangeSetItem({ value: value.trim(), dynamic }, range);
        if (modifiers !== emptyObject) {
            newHandler.modifiers = modifiers;
        }
        const handlers = events[name];
        /* istanbul ignore if */
        if (Array.isArray(handlers)) {
            important ? handlers.unshift(newHandler) : handlers.push(newHandler);
        }
        else if (handlers) {
            events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
        }
        else {
            events[name] = newHandler;
        }
        el.plain = false;
    }
    function getRawBindingAttr(el, name) {
        return (el.rawAttrsMap[':' + name] ||
            el.rawAttrsMap['v-bind:' + name] ||
            el.rawAttrsMap[name]);
    }
    function getBindingAttr(el, name, getStatic) {
        const dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
        if (dynamicValue != null) {
            return parseFilters(dynamicValue);
        }
        else if (getStatic !== false) {
            const staticValue = getAndRemoveAttr(el, name);
            if (staticValue != null) {
                return JSON.stringify(staticValue);
            }
        }
    }
    // note: this only removes the attr from the Array (attrsList) so that it
    // doesn't get processed by processAttrs.
    // By default it does NOT remove it from the map (attrsMap) because the map is
    // needed during codegen.
    function getAndRemoveAttr(el, name, removeFromMap) {
        let val;
        if ((val = el.attrsMap[name]) != null) {
            const list = el.attrsList;
            for (let i = 0, l = list.length; i < l; i++) {
                if (list[i].name === name) {
                    list.splice(i, 1);
                    break;
                }
            }
        }
        if (removeFromMap) {
            delete el.attrsMap[name];
        }
        return val;
    }
    function getAndRemoveAttrByRegex(el, name) {
        const list = el.attrsList;
        for (let i = 0, l = list.length; i < l; i++) {
            const attr = list[i];
            if (name.test(attr.name)) {
                list.splice(i, 1);
                return attr;
            }
        }
    }
    function rangeSetItem(item, range) {
        if (range) {
            if (range.start != null) {
                item.start = range.start;
            }
            if (range.end != null) {
                item.end = range.end;
            }
        }
        return item;
    }

    /**
     * Cross-platform code generation for component v-model
     */
    function genComponentModel(el, value, modifiers) {
        const { number, trim } = modifiers || {};
        const baseValueExpression = '$$v';
        let valueExpression = baseValueExpression;
        if (trim) {
            valueExpression =
                `(typeof ${baseValueExpression} === 'string'` +
                    `? ${baseValueExpression}.trim()` +
                    `: ${baseValueExpression})`;
        }
        if (number) {
            valueExpression = `_n(${valueExpression})`;
        }
        const assignment = genAssignmentCode(value, valueExpression);
        el.model = {
            value: `(${value})`,
            expression: JSON.stringify(value),
            callback: `function (${baseValueExpression}) {${assignment}}`
        };
    }
    /**
     * Cross-platform codegen helper for generating v-model value assignment code.
     */
    function genAssignmentCode(value, assignment) {
        const res = parseModel(value);
        if (res.key === null) {
            return `${value}=${assignment}`;
        }
        else {
            return `$set(${res.exp}, ${res.key}, ${assignment})`;
        }
    }
    /**
     * Parse a v-model expression into a base path and a final key segment.
     * Handles both dot-path and possible square brackets.
     *
     * Possible cases:
     *
     * - test
     * - test[key]
     * - test[test1[key]]
     * - test["a"][key]
     * - xxx.test[a[a].test1[key]]
     * - test.xxx.a["asa"][test1[key]]
     *
     */
    let len, str, chr, index, expressionPos, expressionEndPos;
    function parseModel(val) {
        // Fix https://github.com/vuejs/vue/pull/7730
        // allow v-model="obj.val " (trailing whitespace)
        val = val.trim();
        len = val.length;
        if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
            index = val.lastIndexOf('.');
            if (index > -1) {
                return {
                    exp: val.slice(0, index),
                    key: '"' + val.slice(index + 1) + '"'
                };
            }
            else {
                return {
                    exp: val,
                    key: null
                };
            }
        }
        str = val;
        index = expressionPos = expressionEndPos = 0;
        while (!eof()) {
            chr = next();
            /* istanbul ignore if */
            if (isStringStart(chr)) {
                parseString(chr);
            }
            else if (chr === 0x5b) {
                parseBracket(chr);
            }
        }
        return {
            exp: val.slice(0, expressionPos),
            key: val.slice(expressionPos + 1, expressionEndPos)
        };
    }
    function next() {
        return str.charCodeAt(++index);
    }
    function eof() {
        return index >= len;
    }
    function isStringStart(chr) {
        return chr === 0x22 || chr === 0x27;
    }
    function parseBracket(chr) {
        let inBracket = 1;
        expressionPos = index;
        while (!eof()) {
            chr = next();
            if (isStringStart(chr)) {
                parseString(chr);
                continue;
            }
            if (chr === 0x5b)
                inBracket++;
            if (chr === 0x5d)
                inBracket--;
            if (inBracket === 0) {
                expressionEndPos = index;
                break;
            }
        }
    }
    function parseString(chr) {
        const stringQuote = chr;
        while (!eof()) {
            chr = next();
            if (chr === stringQuote) {
                break;
            }
        }
    }

    let warn$1;
    // in some cases, the event used has to be determined at runtime
    // so we used some reserved tokens during compile.
    const RANGE_TOKEN = '__r';
    const CHECKBOX_RADIO_TOKEN = '__c';
    function model$1(el, dir, _warn) {
        warn$1 = _warn;
        const value = dir.value;
        const modifiers = dir.modifiers;
        const tag = el.tag;
        const type = el.attrsMap.type;
        {
            // inputs with type="file" are read only and setting the input's
            // value will throw an error.
            if (tag === 'input' && type === 'file') {
                warn$1(`<${el.tag} v-model="${value}" type="file">:\n` +
                    `File inputs are read only. Use a v-on:change listener instead.`, el.rawAttrsMap['v-model']);
            }
        }
        if (el.component) {
            genComponentModel(el, value, modifiers);
            // component v-model doesn't need extra runtime
            return false;
        }
        else if (tag === 'select') {
            genSelect(el, value, modifiers);
        }
        else if (tag === 'input' && type === 'checkbox') {
            genCheckboxModel(el, value, modifiers);
        }
        else if (tag === 'input' && type === 'radio') {
            genRadioModel(el, value, modifiers);
        }
        else if (tag === 'input' || tag === 'textarea') {
            genDefaultModel(el, value, modifiers);
        }
        else if (!config.isReservedTag(tag)) {
            genComponentModel(el, value, modifiers);
            // component v-model doesn't need extra runtime
            return false;
        }
        else {
            warn$1(`<${el.tag} v-model="${value}">: ` +
                `v-model is not supported on this element type. ` +
                "If you are working with contenteditable, it's recommended to " +
                'wrap a library dedicated for that purpose inside a custom component.', el.rawAttrsMap['v-model']);
        }
        // ensure runtime directive metadata
        return true;
    }
    function genCheckboxModel(el, value, modifiers) {
        const number = modifiers && modifiers.number;
        const valueBinding = getBindingAttr(el, 'value') || 'null';
        const trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
        const falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
        addProp(el, 'checked', `Array.isArray(${value})` +
            `?_i(${value},${valueBinding})>-1` +
            (trueValueBinding === 'true'
                ? `:(${value})`
                : `:_q(${value},${trueValueBinding})`));
        addHandler(el, 'change', `var $$a=${value},` +
            '$$el=$event.target,' +
            `$$c=$$el.checked?(${trueValueBinding}):(${falseValueBinding});` +
            'if(Array.isArray($$a)){' +
            `var $$v=${number ? '_n(' + valueBinding + ')' : valueBinding},` +
            '$$i=_i($$a,$$v);' +
            `if($$el.checked){$$i<0&&(${genAssignmentCode(value, '$$a.concat([$$v])')})}` +
            `else{$$i>-1&&(${genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')})}` +
            `}else{${genAssignmentCode(value, '$$c')}}`, null, true);
    }
    function genRadioModel(el, value, modifiers) {
        const number = modifiers && modifiers.number;
        let valueBinding = getBindingAttr(el, 'value') || 'null';
        valueBinding = number ? `_n(${valueBinding})` : valueBinding;
        addProp(el, 'checked', `_q(${value},${valueBinding})`);
        addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
    }
    function genSelect(el, value, modifiers) {
        const number = modifiers && modifiers.number;
        const selectedVal = `Array.prototype.filter` +
            `.call($event.target.options,function(o){return o.selected})` +
            `.map(function(o){var val = "_value" in o ? o._value : o.value;` +
            `return ${number ? '_n(val)' : 'val'}})`;
        const assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
        let code = `var $$selectedVal = ${selectedVal};`;
        code = `${code} ${genAssignmentCode(value, assignment)}`;
        addHandler(el, 'change', code, null, true);
    }
    function genDefaultModel(el, value, modifiers) {
        const type = el.attrsMap.type;
        // warn if v-bind:value conflicts with v-model
        // except for inputs with v-bind:type
        {
            const value = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
            const typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
            if (value && !typeBinding) {
                const binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
                warn$1(`${binding}="${value}" conflicts with v-model on the same element ` +
                    'because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
            }
        }
        const { lazy, number, trim } = modifiers || {};
        const needCompositionGuard = !lazy && type !== 'range';
        const event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';
        let valueExpression = '$event.target.value';
        if (trim) {
            valueExpression = `$event.target.value.trim()`;
        }
        if (number) {
            valueExpression = `_n(${valueExpression})`;
        }
        let code = genAssignmentCode(value, valueExpression);
        if (needCompositionGuard) {
            code = `if($event.target.composing)return;${code}`;
        }
        addProp(el, 'value', `(${value})`);
        addHandler(el, event, code, null, true);
        if (trim || number) {
            addHandler(el, 'blur', '$forceUpdate()');
        }
    }

    // normalize v-model event tokens that can only be determined at runtime.
    // it's important to place the event as the first in the array because
    // the whole point is ensuring the v-model callback gets called before
    // user-attached handlers.
    function normalizeEvents(on) {
        /* istanbul ignore if */
        if (isDef(on[RANGE_TOKEN])) {
            // IE input[type=range] only supports `change` event
            const event = isIE ? 'change' : 'input';
            on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
            delete on[RANGE_TOKEN];
        }
        // This was originally intended to fix #4521 but no longer necessary
        // after 2.5. Keeping it for backwards compat with generated code from < 2.4
        /* istanbul ignore if */
        if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
            on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
            delete on[CHECKBOX_RADIO_TOKEN];
        }
    }
    let target;
    function createOnceHandler(event, handler, capture) {
        const _target = target; // save current target element in closure
        return function onceHandler() {
            const res = handler.apply(null, arguments);
            if (res !== null) {
                remove(event, onceHandler, capture, _target);
            }
        };
    }
    // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
    // implementation and does not fire microtasks in between event propagation, so
    // safe to exclude.
    const useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
    function add(name, handler, capture, passive) {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        if (useMicrotaskFix) {
            const attachedTimestamp = currentFlushTimestamp;
            const original = handler;
            //@ts-expect-error
            handler = original._wrapper = function (e) {
                if (
                // no bubbling, should always fire.
                // this is just a safety net in case event.timeStamp is unreliable in
                // certain weird environments...
                e.target === e.currentTarget ||
                    // event is fired after handler attachment
                    e.timeStamp >= attachedTimestamp ||
                    // bail for environments that have buggy event.timeStamp implementations
                    // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
                    // #9681 QtWebEngine event.timeStamp is negative value
                    e.timeStamp <= 0 ||
                    // #9448 bail if event is fired in another document in a multi-page
                    // electron/nw.js app, since event.timeStamp will be using a different
                    // starting reference
                    e.target.ownerDocument !== document) {
                    return original.apply(this, arguments);
                }
            };
        }
        target.addEventListener(name, handler, supportsPassive ? { capture, passive } : capture);
    }
    function remove(name, handler, capture, _target) {
        (_target || target).removeEventListener(name,
        //@ts-expect-error
        handler._wrapper || handler, capture);
    }
    function updateDOMListeners(oldVnode, vnode) {
        if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
            return;
        }
        const on = vnode.data.on || {};
        const oldOn = oldVnode.data.on || {};
        // vnode is empty when removing all listeners,
        // and use old vnode dom element
        target = vnode.elm || oldVnode.elm;
        normalizeEvents(on);
        updateListeners(on, oldOn, add, remove, createOnceHandler, vnode.context);
        target = undefined;
    }
    var events = {
        create: updateDOMListeners,
        update: updateDOMListeners,
        // @ts-expect-error emptyNode has actually data
        destroy: (vnode) => updateDOMListeners(vnode, emptyNode)
    };

    let svgContainer;
    function updateDOMProps(oldVnode, vnode) {
        if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
            return;
        }
        let key, cur;
        const elm = vnode.elm;
        const oldProps = oldVnode.data.domProps || {};
        let props = vnode.data.domProps || {};
        // clone observed objects, as the user probably wants to mutate it
        if (isDef(props.__ob__) || isTrue(props._v_attr_proxy)) {
            props = vnode.data.domProps = extend({}, props);
        }
        for (key in oldProps) {
            if (!(key in props)) {
                elm[key] = '';
            }
        }
        for (key in props) {
            cur = props[key];
            // ignore children if the node has textContent or innerHTML,
            // as these will throw away existing DOM nodes and cause removal errors
            // on subsequent patches (#3360)
            if (key === 'textContent' || key === 'innerHTML') {
                if (vnode.children)
                    vnode.children.length = 0;
                if (cur === oldProps[key])
                    continue;
                // #6601 work around Chrome version <= 55 bug where single textNode
                // replaced by innerHTML/textContent retains its parentNode property
                if (elm.childNodes.length === 1) {
                    elm.removeChild(elm.childNodes[0]);
                }
            }
            if (key === 'value' && elm.tagName !== 'PROGRESS') {
                // store value as _value as well since
                // non-string values will be stringified
                elm._value = cur;
                // avoid resetting cursor position when value is the same
                const strCur = isUndef(cur) ? '' : String(cur);
                if (shouldUpdateValue(elm, strCur)) {
                    elm.value = strCur;
                }
            }
            else if (key === 'innerHTML' &&
                isSVG(elm.tagName) &&
                isUndef(elm.innerHTML)) {
                // IE doesn't support innerHTML for SVG elements
                svgContainer = svgContainer || document.createElement('div');
                svgContainer.innerHTML = `<svg>${cur}</svg>`;
                const svg = svgContainer.firstChild;
                while (elm.firstChild) {
                    elm.removeChild(elm.firstChild);
                }
                while (svg.firstChild) {
                    elm.appendChild(svg.firstChild);
                }
            }
            else if (
            // skip the update if old and new VDOM state is the same.
            // `value` is handled separately because the DOM value may be temporarily
            // out of sync with VDOM state due to focus, composition and modifiers.
            // This  #4521 by skipping the unnecessary `checked` update.
            cur !== oldProps[key]) {
                // some property updates can throw
                // e.g. `value` on <progress> w/ non-finite value
                try {
                    elm[key] = cur;
                }
                catch (e) { }
            }
        }
    }
    function shouldUpdateValue(elm, checkVal) {
        return (
        //@ts-expect-error
        !elm.composing &&
            (elm.tagName === 'OPTION' ||
                isNotInFocusAndDirty(elm, checkVal) ||
                isDirtyWithModifiers(elm, checkVal)));
    }
    function isNotInFocusAndDirty(elm, checkVal) {
        // return true when textbox (.number and .trim) loses focus and its value is
        // not equal to the updated value
        let notInFocus = true;
        // #6157
        // work around IE bug when accessing document.activeElement in an iframe
        try {
            notInFocus = document.activeElement !== elm;
        }
        catch (e) { }
        return notInFocus && elm.value !== checkVal;
    }
    function isDirtyWithModifiers(elm, newVal) {
        const value = elm.value;
        const modifiers = elm._vModifiers; // injected by v-model runtime
        if (isDef(modifiers)) {
            if (modifiers.number) {
                return toNumber(value) !== toNumber(newVal);
            }
            if (modifiers.trim) {
                return value.trim() !== newVal.trim();
            }
        }
        return value !== newVal;
    }
    var domProps = {
        create: updateDOMProps,
        update: updateDOMProps
    };

    const parseStyleText = cached(function (cssText) {
        const res = {};
        const listDelimiter = /;(?![^(]*\))/g;
        const propertyDelimiter = /:(.+)/;
        cssText.split(listDelimiter).forEach(function (item) {
            if (item) {
                const tmp = item.split(propertyDelimiter);
                tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
            }
        });
        return res;
    });
    // merge static and dynamic style data on the same vnode
    function normalizeStyleData(data) {
        const style = normalizeStyleBinding(data.style);
        // static style is pre-processed into an object during compilation
        // and is always a fresh object, so it's safe to merge into it
        return data.staticStyle ? extend(data.staticStyle, style) : style;
    }
    // normalize possible array / string values into Object
    function normalizeStyleBinding(bindingStyle) {
        if (Array.isArray(bindingStyle)) {
            return toObject(bindingStyle);
        }
        if (typeof bindingStyle === 'string') {
            return parseStyleText(bindingStyle);
        }
        return bindingStyle;
    }
    /**
     * parent component style should be after child's
     * so that parent component's style could override it
     */
    function getStyle(vnode, checkChild) {
        const res = {};
        let styleData;
        if (checkChild) {
            let childNode = vnode;
            while (childNode.componentInstance) {
                childNode = childNode.componentInstance._vnode;
                if (childNode &&
                    childNode.data &&
                    (styleData = normalizeStyleData(childNode.data))) {
                    extend(res, styleData);
                }
            }
        }
        if ((styleData = normalizeStyleData(vnode.data))) {
            extend(res, styleData);
        }
        let parentNode = vnode;
        // @ts-expect-error parentNode.parent not VNodeWithData
        while ((parentNode = parentNode.parent)) {
            if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
                extend(res, styleData);
            }
        }
        return res;
    }

    const cssVarRE = /^--/;
    const importantRE = /\s*!important$/;
    const setProp = (el, name, val) => {
        /* istanbul ignore if */
        if (cssVarRE.test(name)) {
            el.style.setProperty(name, val);
        }
        else if (importantRE.test(val)) {
            el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
        }
        else {
            const normalizedName = normalize(name);
            if (Array.isArray(val)) {
                // Support values array created by autoprefixer, e.g.
                // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
                // Set them one by one, and the browser will only set those it can recognize
                for (let i = 0, len = val.length; i < len; i++) {
                    el.style[normalizedName] = val[i];
                }
            }
            else {
                el.style[normalizedName] = val;
            }
        }
    };
    const vendorNames = ['Webkit', 'Moz', 'ms'];
    let emptyStyle;
    const normalize = cached(function (prop) {
        emptyStyle = emptyStyle || document.createElement('div').style;
        prop = camelize(prop);
        if (prop !== 'filter' && prop in emptyStyle) {
            return prop;
        }
        const capName = prop.charAt(0).toUpperCase() + prop.slice(1);
        for (let i = 0; i < vendorNames.length; i++) {
            const name = vendorNames[i] + capName;
            if (name in emptyStyle) {
                return name;
            }
        }
    });
    function updateStyle(oldVnode, vnode) {
        const data = vnode.data;
        const oldData = oldVnode.data;
        if (isUndef(data.staticStyle) &&
            isUndef(data.style) &&
            isUndef(oldData.staticStyle) &&
            isUndef(oldData.style)) {
            return;
        }
        let cur, name;
        const el = vnode.elm;
        const oldStaticStyle = oldData.staticStyle;
        const oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
        // if static style exists, stylebinding already merged into it when doing normalizeStyleData
        const oldStyle = oldStaticStyle || oldStyleBinding;
        const style = normalizeStyleBinding(vnode.data.style) || {};
        // store normalized style under a different key for next diff
        // make sure to clone it if it's reactive, since the user likely wants
        // to mutate it.
        vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
        const newStyle = getStyle(vnode, true);
        for (name in oldStyle) {
            if (isUndef(newStyle[name])) {
                setProp(el, name, '');
            }
        }
        for (name in newStyle) {
            cur = newStyle[name];
            if (cur !== oldStyle[name]) {
                // ie9 setting to null has no effect, must use empty string
                setProp(el, name, cur == null ? '' : cur);
            }
        }
    }
    var style$1 = {
        create: updateStyle,
        update: updateStyle
    };

    const whitespaceRE$1 = /\s+/;
    /**
     * Add class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function addClass(el, cls) {
        /* istanbul ignore if */
        if (!cls || !(cls = cls.trim())) {
            return;
        }
        /* istanbul ignore else */
        if (el.classList) {
            if (cls.indexOf(' ') > -1) {
                cls.split(whitespaceRE$1).forEach(c => el.classList.add(c));
            }
            else {
                el.classList.add(cls);
            }
        }
        else {
            const cur = ` ${el.getAttribute('class') || ''} `;
            if (cur.indexOf(' ' + cls + ' ') < 0) {
                el.setAttribute('class', (cur + cls).trim());
            }
        }
    }
    /**
     * Remove class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function removeClass(el, cls) {
        /* istanbul ignore if */
        if (!cls || !(cls = cls.trim())) {
            return;
        }
        /* istanbul ignore else */
        if (el.classList) {
            if (cls.indexOf(' ') > -1) {
                cls.split(whitespaceRE$1).forEach(c => el.classList.remove(c));
            }
            else {
                el.classList.remove(cls);
            }
            if (!el.classList.length) {
                el.removeAttribute('class');
            }
        }
        else {
            let cur = ` ${el.getAttribute('class') || ''} `;
            const tar = ' ' + cls + ' ';
            while (cur.indexOf(tar) >= 0) {
                cur = cur.replace(tar, ' ');
            }
            cur = cur.trim();
            if (cur) {
                el.setAttribute('class', cur);
            }
            else {
                el.removeAttribute('class');
            }
        }
    }

    function resolveTransition(def) {
        if (!def) {
            return;
        }
        /* istanbul ignore else */
        if (typeof def === 'object') {
            const res = {};
            if (def.css !== false) {
                extend(res, autoCssTransition(def.name || 'v'));
            }
            extend(res, def);
            return res;
        }
        else if (typeof def === 'string') {
            return autoCssTransition(def);
        }
    }
    const autoCssTransition = cached(name => {
        return {
            enterClass: `${name}-enter`,
            enterToClass: `${name}-enter-to`,
            enterActiveClass: `${name}-enter-active`,
            leaveClass: `${name}-leave`,
            leaveToClass: `${name}-leave-to`,
            leaveActiveClass: `${name}-leave-active`
        };
    });
    const hasTransition = inBrowser && !isIE9;
    const TRANSITION = 'transition';
    const ANIMATION = 'animation';
    // Transition property/event sniffing
    let transitionProp = 'transition';
    let transitionEndEvent = 'transitionend';
    let animationProp = 'animation';
    let animationEndEvent = 'animationend';
    if (hasTransition) {
        /* istanbul ignore if */
        if (window.ontransitionend === undefined &&
            window.onwebkittransitionend !== undefined) {
            transitionProp = 'WebkitTransition';
            transitionEndEvent = 'webkitTransitionEnd';
        }
        if (window.onanimationend === undefined &&
            window.onwebkitanimationend !== undefined) {
            animationProp = 'WebkitAnimation';
            animationEndEvent = 'webkitAnimationEnd';
        }
    }
    // binding to window is necessary to make hot reload work in IE in strict mode
    const raf = inBrowser
        ? window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : setTimeout
        : /* istanbul ignore next */ /* istanbul ignore next */ fn => fn();
    function nextFrame(fn) {
        raf(() => {
            // @ts-expect-error
            raf(fn);
        });
    }
    function addTransitionClass(el, cls) {
        const transitionClasses = el._transitionClasses || (el._transitionClasses = []);
        if (transitionClasses.indexOf(cls) < 0) {
            transitionClasses.push(cls);
            addClass(el, cls);
        }
    }
    function removeTransitionClass(el, cls) {
        if (el._transitionClasses) {
            remove$2(el._transitionClasses, cls);
        }
        removeClass(el, cls);
    }
    function whenTransitionEnds(el, expectedType, cb) {
        const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
        if (!type)
            return cb();
        const event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
        let ended = 0;
        const end = () => {
            el.removeEventListener(event, onEnd);
            cb();
        };
        const onEnd = e => {
            if (e.target === el) {
                if (++ended >= propCount) {
                    end();
                }
            }
        };
        setTimeout(() => {
            if (ended < propCount) {
                end();
            }
        }, timeout + 1);
        el.addEventListener(event, onEnd);
    }
    const transformRE = /\b(transform|all)(,|$)/;
    function getTransitionInfo(el, expectedType) {
        const styles = window.getComputedStyle(el);
        // JSDOM may return undefined for transition properties
        const transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
        const transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
        const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
        const animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
        const animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
        const animationTimeout = getTimeout(animationDelays, animationDurations);
        let type;
        let timeout = 0;
        let propCount = 0;
        /* istanbul ignore if */
        if (expectedType === TRANSITION) {
            if (transitionTimeout > 0) {
                type = TRANSITION;
                timeout = transitionTimeout;
                propCount = transitionDurations.length;
            }
        }
        else if (expectedType === ANIMATION) {
            if (animationTimeout > 0) {
                type = ANIMATION;
                timeout = animationTimeout;
                propCount = animationDurations.length;
            }
        }
        else {
            timeout = Math.max(transitionTimeout, animationTimeout);
            type =
                timeout > 0
                    ? transitionTimeout > animationTimeout
                        ? TRANSITION
                        : ANIMATION
                    : null;
            propCount = type
                ? type === TRANSITION
                    ? transitionDurations.length
                    : animationDurations.length
                : 0;
        }
        const hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
        return {
            type,
            timeout,
            propCount,
            hasTransform
        };
    }
    function getTimeout(delays, durations) {
        /* istanbul ignore next */
        while (delays.length < durations.length) {
            delays = delays.concat(delays);
        }
        return Math.max.apply(null, durations.map((d, i) => {
            return toMs(d) + toMs(delays[i]);
        }));
    }
    // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
    // in a locale-dependent way, using a comma instead of a dot.
    // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
    // as a floor function) causing unexpected behaviors
    function toMs(s) {
        return Number(s.slice(0, -1).replace(',', '.')) * 1000;
    }

    function enter(vnode, toggleDisplay) {
        const el = vnode.elm;
        // call leave callback now
        if (isDef(el._leaveCb)) {
            el._leaveCb.cancelled = true;
            el._leaveCb();
        }
        const data = resolveTransition(vnode.data.transition);
        if (isUndef(data)) {
            return;
        }
        /* istanbul ignore if */
        if (isDef(el._enterCb) || el.nodeType !== 1) {
            return;
        }
        const { css, type, enterClass, enterToClass, enterActiveClass, appearClass, appearToClass, appearActiveClass, beforeEnter, enter, afterEnter, enterCancelled, beforeAppear, appear, afterAppear, appearCancelled, duration } = data;
        // activeInstance will always be the <transition> component managing this
        // transition. One edge case to check is when the <transition> is placed
        // as the root node of a child component. In that case we need to check
        // <transition>'s parent for appear check.
        let context = activeInstance;
        let transitionNode = activeInstance.$vnode;
        while (transitionNode && transitionNode.parent) {
            context = transitionNode.context;
            transitionNode = transitionNode.parent;
        }
        const isAppear = !context._isMounted || !vnode.isRootInsert;
        if (isAppear && !appear && appear !== '') {
            return;
        }
        const startClass = isAppear && appearClass ? appearClass : enterClass;
        const activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
        const toClass = isAppear && appearToClass ? appearToClass : enterToClass;
        const beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
        const enterHook = isAppear ? (isFunction(appear) ? appear : enter) : enter;
        const afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
        const enterCancelledHook = isAppear
            ? appearCancelled || enterCancelled
            : enterCancelled;
        const explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
        if (explicitEnterDuration != null) {
            checkDuration(explicitEnterDuration, 'enter', vnode);
        }
        const expectsCSS = css !== false && !isIE9;
        const userWantsControl = getHookArgumentsLength(enterHook);
        const cb = (el._enterCb = once(() => {
            if (expectsCSS) {
                removeTransitionClass(el, toClass);
                removeTransitionClass(el, activeClass);
            }
            // @ts-expect-error
            if (cb.cancelled) {
                if (expectsCSS) {
                    removeTransitionClass(el, startClass);
                }
                enterCancelledHook && enterCancelledHook(el);
            }
            else {
                afterEnterHook && afterEnterHook(el);
            }
            el._enterCb = null;
        }));
        if (!vnode.data.show) {
            // remove pending leave element on enter by injecting an insert hook
            mergeVNodeHook(vnode, 'insert', () => {
                const parent = el.parentNode;
                const pendingNode = parent && parent._pending && parent._pending[vnode.key];
                if (pendingNode &&
                    pendingNode.tag === vnode.tag &&
                    pendingNode.elm._leaveCb) {
                    pendingNode.elm._leaveCb();
                }
                enterHook && enterHook(el, cb);
            });
        }
        // start enter transition
        beforeEnterHook && beforeEnterHook(el);
        if (expectsCSS) {
            addTransitionClass(el, startClass);
            addTransitionClass(el, activeClass);
            nextFrame(() => {
                removeTransitionClass(el, startClass);
                // @ts-expect-error
                if (!cb.cancelled) {
                    addTransitionClass(el, toClass);
                    if (!userWantsControl) {
                        if (isValidDuration(explicitEnterDuration)) {
                            setTimeout(cb, explicitEnterDuration);
                        }
                        else {
                            whenTransitionEnds(el, type, cb);
                        }
                    }
                }
            });
        }
        if (vnode.data.show) {
            toggleDisplay && toggleDisplay();
            enterHook && enterHook(el, cb);
        }
        if (!expectsCSS && !userWantsControl) {
            cb();
        }
    }
    function leave(vnode, rm) {
        const el = vnode.elm;
        // call enter callback now
        if (isDef(el._enterCb)) {
            el._enterCb.cancelled = true;
            el._enterCb();
        }
        const data = resolveTransition(vnode.data.transition);
        if (isUndef(data) || el.nodeType !== 1) {
            return rm();
        }
        /* istanbul ignore if */
        if (isDef(el._leaveCb)) {
            return;
        }
        const { css, type, leaveClass, leaveToClass, leaveActiveClass, beforeLeave, leave, afterLeave, leaveCancelled, delayLeave, duration } = data;
        const expectsCSS = css !== false && !isIE9;
        const userWantsControl = getHookArgumentsLength(leave);
        const explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
        if (isDef(explicitLeaveDuration)) {
            checkDuration(explicitLeaveDuration, 'leave', vnode);
        }
        const cb = (el._leaveCb = once(() => {
            if (el.parentNode && el.parentNode._pending) {
                el.parentNode._pending[vnode.key] = null;
            }
            if (expectsCSS) {
                removeTransitionClass(el, leaveToClass);
                removeTransitionClass(el, leaveActiveClass);
            }
            // @ts-expect-error
            if (cb.cancelled) {
                if (expectsCSS) {
                    removeTransitionClass(el, leaveClass);
                }
                leaveCancelled && leaveCancelled(el);
            }
            else {
                rm();
                afterLeave && afterLeave(el);
            }
            el._leaveCb = null;
        }));
        if (delayLeave) {
            delayLeave(performLeave);
        }
        else {
            performLeave();
        }
        function performLeave() {
            // the delayed leave may have already been cancelled
            // @ts-expect-error
            if (cb.cancelled) {
                return;
            }
            // record leaving element
            if (!vnode.data.show && el.parentNode) {
                (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] =
                    vnode;
            }
            beforeLeave && beforeLeave(el);
            if (expectsCSS) {
                addTransitionClass(el, leaveClass);
                addTransitionClass(el, leaveActiveClass);
                nextFrame(() => {
                    removeTransitionClass(el, leaveClass);
                    // @ts-expect-error
                    if (!cb.cancelled) {
                        addTransitionClass(el, leaveToClass);
                        if (!userWantsControl) {
                            if (isValidDuration(explicitLeaveDuration)) {
                                setTimeout(cb, explicitLeaveDuration);
                            }
                            else {
                                whenTransitionEnds(el, type, cb);
                            }
                        }
                    }
                });
            }
            leave && leave(el, cb);
            if (!expectsCSS && !userWantsControl) {
                cb();
            }
        }
    }
    // only used in dev mode
    function checkDuration(val, name, vnode) {
        if (typeof val !== 'number') {
            warn$2(`<transition> explicit ${name} duration is not a valid number - ` +
                `got ${JSON.stringify(val)}.`, vnode.context);
        }
        else if (isNaN(val)) {
            warn$2(`<transition> explicit ${name} duration is NaN - ` +
                'the duration expression might be incorrect.', vnode.context);
        }
    }
    function isValidDuration(val) {
        return typeof val === 'number' && !isNaN(val);
    }
    /**
     * Normalize a transition hook's argument length. The hook may be:
     * - a merged hook (invoker) with the original in .fns
     * - a wrapped component method (check ._length)
     * - a plain function (.length)
     */
    function getHookArgumentsLength(fn) {
        if (isUndef(fn)) {
            return false;
        }
        // @ts-expect-error
        const invokerFns = fn.fns;
        if (isDef(invokerFns)) {
            // invoker
            return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
        }
        else {
            // @ts-expect-error
            return (fn._length || fn.length) > 1;
        }
    }
    function _enter(_, vnode) {
        if (vnode.data.show !== true) {
            enter(vnode);
        }
    }
    var transition = inBrowser
        ? {
            create: _enter,
            activate: _enter,
            remove(vnode, rm) {
                /* istanbul ignore else */
                if (vnode.data.show !== true) {
                    // @ts-expect-error
                    leave(vnode, rm);
                }
                else {
                    rm();
                }
            }
        }
        : {};

    var platformModules = [attrs, klass$1, events, domProps, style$1, transition];

    // the directive module should be applied last, after all
    // built-in modules have been applied.
    const modules$1 = platformModules.concat(baseModules);
    const patch = createPatchFunction({ nodeOps, modules: modules$1 });

    /**
     * Not type checking this file because flow doesn't like attaching
     * properties to Elements.
     */
    /* istanbul ignore if */
    if (isIE9) {
        // http://www.matts411.com/post/internet-explorer-9-oninput/
        document.addEventListener('selectionchange', () => {
            const el = document.activeElement;
            // @ts-expect-error
            if (el && el.vmodel) {
                trigger(el, 'input');
            }
        });
    }
    const directive = {
        inserted(el, binding, vnode, oldVnode) {
            if (vnode.tag === 'select') {
                // #6903
                if (oldVnode.elm && !oldVnode.elm._vOptions) {
                    mergeVNodeHook(vnode, 'postpatch', () => {
                        directive.componentUpdated(el, binding, vnode);
                    });
                }
                else {
                    setSelected(el, binding, vnode.context);
                }
                el._vOptions = [].map.call(el.options, getValue);
            }
            else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
                el._vModifiers = binding.modifiers;
                if (!binding.modifiers.lazy) {
                    el.addEventListener('compositionstart', onCompositionStart);
                    el.addEventListener('compositionend', onCompositionEnd);
                    // Safari < 10.2 & UIWebView doesn't fire compositionend when
                    // switching focus before confirming composition choice
                    // this also fixes the issue where some browsers e.g. iOS Chrome
                    // fires "change" instead of "input" on autocomplete.
                    el.addEventListener('change', onCompositionEnd);
                    /* istanbul ignore if */
                    if (isIE9) {
                        el.vmodel = true;
                    }
                }
            }
        },
        componentUpdated(el, binding, vnode) {
            if (vnode.tag === 'select') {
                setSelected(el, binding, vnode.context);
                // in case the options rendered by v-for have changed,
                // it's possible that the value is out-of-sync with the rendered options.
                // detect such cases and filter out values that no longer has a matching
                // option in the DOM.
                const prevOptions = el._vOptions;
                const curOptions = (el._vOptions = [].map.call(el.options, getValue));
                if (curOptions.some((o, i) => !looseEqual(o, prevOptions[i]))) {
                    // trigger change event if
                    // no matching option found for at least one value
                    const needReset = el.multiple
                        ? binding.value.some(v => hasNoMatchingOption(v, curOptions))
                        : binding.value !== binding.oldValue &&
                            hasNoMatchingOption(binding.value, curOptions);
                    if (needReset) {
                        trigger(el, 'change');
                    }
                }
            }
        }
    };
    function setSelected(el, binding, vm) {
        actuallySetSelected(el, binding, vm);
        /* istanbul ignore if */
        if (isIE || isEdge) {
            setTimeout(() => {
                actuallySetSelected(el, binding, vm);
            }, 0);
        }
    }
    function actuallySetSelected(el, binding, vm) {
        const value = binding.value;
        const isMultiple = el.multiple;
        if (isMultiple && !Array.isArray(value)) {
            warn$2(`<select multiple v-model="${binding.expression}"> ` +
                    `expects an Array value for its binding, but got ${Object.prototype.toString
                        .call(value)
                        .slice(8, -1)}`, vm);
            return;
        }
        let selected, option;
        for (let i = 0, l = el.options.length; i < l; i++) {
            option = el.options[i];
            if (isMultiple) {
                selected = looseIndexOf(value, getValue(option)) > -1;
                if (option.selected !== selected) {
                    option.selected = selected;
                }
            }
            else {
                if (looseEqual(getValue(option), value)) {
                    if (el.selectedIndex !== i) {
                        el.selectedIndex = i;
                    }
                    return;
                }
            }
        }
        if (!isMultiple) {
            el.selectedIndex = -1;
        }
    }
    function hasNoMatchingOption(value, options) {
        return options.every(o => !looseEqual(o, value));
    }
    function getValue(option) {
        return '_value' in option ? option._value : option.value;
    }
    function onCompositionStart(e) {
        e.target.composing = true;
    }
    function onCompositionEnd(e) {
        // prevent triggering an input event for no reason
        if (!e.target.composing)
            return;
        e.target.composing = false;
        trigger(e.target, 'input');
    }
    function trigger(el, type) {
        const e = document.createEvent('HTMLEvents');
        e.initEvent(type, true, true);
        el.dispatchEvent(e);
    }

    // recursively search for possible transition defined inside the component root
    function locateNode(vnode) {
        // @ts-expect-error
        return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
            ? locateNode(vnode.componentInstance._vnode)
            : vnode;
    }
    var show = {
        bind(el, { value }, vnode) {
            vnode = locateNode(vnode);
            const transition = vnode.data && vnode.data.transition;
            const originalDisplay = (el.__vOriginalDisplay =
                el.style.display === 'none' ? '' : el.style.display);
            if (value && transition) {
                vnode.data.show = true;
                enter(vnode, () => {
                    el.style.display = originalDisplay;
                });
            }
            else {
                el.style.display = value ? originalDisplay : 'none';
            }
        },
        update(el, { value, oldValue }, vnode) {
            /* istanbul ignore if */
            if (!value === !oldValue)
                return;
            vnode = locateNode(vnode);
            const transition = vnode.data && vnode.data.transition;
            if (transition) {
                vnode.data.show = true;
                if (value) {
                    enter(vnode, () => {
                        el.style.display = el.__vOriginalDisplay;
                    });
                }
                else {
                    leave(vnode, () => {
                        el.style.display = 'none';
                    });
                }
            }
            else {
                el.style.display = value ? el.__vOriginalDisplay : 'none';
            }
        },
        unbind(el, binding, vnode, oldVnode, isDestroy) {
            if (!isDestroy) {
                el.style.display = el.__vOriginalDisplay;
            }
        }
    };

    var platformDirectives = {
        model: directive,
        show
    };

    // Provides transition support for a single element/component.
    const transitionProps = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
    };
    // in case the child is also an abstract component, e.g. <keep-alive>
    // we want to recursively retrieve the real component to be rendered
    function getRealChild(vnode) {
        const compOptions = vnode && vnode.componentOptions;
        if (compOptions && compOptions.Ctor.options.abstract) {
            return getRealChild(getFirstComponentChild(compOptions.children));
        }
        else {
            return vnode;
        }
    }
    function extractTransitionData(comp) {
        const data = {};
        const options = comp.$options;
        // props
        for (const key in options.propsData) {
            data[key] = comp[key];
        }
        // events.
        // extract listeners and pass them directly to the transition methods
        const listeners = options._parentListeners;
        for (const key in listeners) {
            data[camelize(key)] = listeners[key];
        }
        return data;
    }
    function placeholder(h, rawChild) {
        // @ts-expect-error
        if (/\d-keep-alive$/.test(rawChild.tag)) {
            return h('keep-alive', {
                props: rawChild.componentOptions.propsData
            });
        }
    }
    function hasParentTransition(vnode) {
        while ((vnode = vnode.parent)) {
            if (vnode.data.transition) {
                return true;
            }
        }
    }
    function isSameChild(child, oldChild) {
        return oldChild.key === child.key && oldChild.tag === child.tag;
    }
    const isNotTextNode = (c) => c.tag || isAsyncPlaceholder(c);
    const isVShowDirective = d => d.name === 'show';
    var Transition = {
        name: 'transition',
        props: transitionProps,
        abstract: true,
        render(h) {
            let children = this.$slots.default;
            if (!children) {
                return;
            }
            // filter out text nodes (possible whitespaces)
            children = children.filter(isNotTextNode);
            /* istanbul ignore if */
            if (!children.length) {
                return;
            }
            // warn multiple elements
            if (children.length > 1) {
                warn$2('<transition> can only be used on a single element. Use ' +
                    '<transition-group> for lists.', this.$parent);
            }
            const mode = this.mode;
            // warn invalid mode
            if (mode && mode !== 'in-out' && mode !== 'out-in') {
                warn$2('invalid <transition> mode: ' + mode, this.$parent);
            }
            const rawChild = children[0];
            // if this is a component root node and the component's
            // parent container node also has transition, skip.
            if (hasParentTransition(this.$vnode)) {
                return rawChild;
            }
            // apply transition data to child
            // use getRealChild() to ignore abstract components e.g. keep-alive
            const child = getRealChild(rawChild);
            /* istanbul ignore if */
            if (!child) {
                return rawChild;
            }
            if (this._leaving) {
                return placeholder(h, rawChild);
            }
            // ensure a key that is unique to the vnode type and to this transition
            // component instance. This key will be used to remove pending leaving nodes
            // during entering.
            const id = `__transition-${this._uid}-`;
            child.key =
                child.key == null
                    ? child.isComment
                        ? id + 'comment'
                        : id + child.tag
                    : isPrimitive(child.key)
                        ? String(child.key).indexOf(id) === 0
                            ? child.key
                            : id + child.key
                        : child.key;
            const data = ((child.data || (child.data = {})).transition =
                extractTransitionData(this));
            const oldRawChild = this._vnode;
            const oldChild = getRealChild(oldRawChild);
            // mark v-show
            // so that the transition module can hand over the control to the directive
            if (child.data.directives && child.data.directives.some(isVShowDirective)) {
                child.data.show = true;
            }
            if (oldChild &&
                oldChild.data &&
                !isSameChild(child, oldChild) &&
                !isAsyncPlaceholder(oldChild) &&
                // #6687 component root is a comment node
                !(oldChild.componentInstance &&
                    oldChild.componentInstance._vnode.isComment)) {
                // replace old child transition data with fresh one
                // important for dynamic transitions!
                const oldData = (oldChild.data.transition = extend({}, data));
                // handle transition mode
                if (mode === 'out-in') {
                    // return placeholder node and queue update when leave finishes
                    this._leaving = true;
                    mergeVNodeHook(oldData, 'afterLeave', () => {
                        this._leaving = false;
                        this.$forceUpdate();
                    });
                    return placeholder(h, rawChild);
                }
                else if (mode === 'in-out') {
                    if (isAsyncPlaceholder(child)) {
                        return oldRawChild;
                    }
                    let delayedLeave;
                    const performLeave = () => {
                        delayedLeave();
                    };
                    mergeVNodeHook(data, 'afterEnter', performLeave);
                    mergeVNodeHook(data, 'enterCancelled', performLeave);
                    mergeVNodeHook(oldData, 'delayLeave', leave => {
                        delayedLeave = leave;
                    });
                }
            }
            return rawChild;
        }
    };

    // Provides transition support for list items.
    const props = extend({
        tag: String,
        moveClass: String
    }, transitionProps);
    delete props.mode;
    var TransitionGroup = {
        props,
        beforeMount() {
            const update = this._update;
            this._update = (vnode, hydrating) => {
                const restoreActiveInstance = setActiveInstance(this);
                // force removing pass
                this.__patch__(this._vnode, this.kept, false, // hydrating
                true // removeOnly (!important, avoids unnecessary moves)
                );
                this._vnode = this.kept;
                restoreActiveInstance();
                update.call(this, vnode, hydrating);
            };
        },
        render(h) {
            const tag = this.tag || this.$vnode.data.tag || 'span';
            const map = Object.create(null);
            const prevChildren = (this.prevChildren = this.children);
            const rawChildren = this.$slots.default || [];
            const children = (this.children = []);
            const transitionData = extractTransitionData(this);
            for (let i = 0; i < rawChildren.length; i++) {
                const c = rawChildren[i];
                if (c.tag) {
                    if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                        children.push(c);
                        map[c.key] = c;
                        (c.data || (c.data = {})).transition = transitionData;
                    }
                    else {
                        const opts = c.componentOptions;
                        const name = opts
                            ? getComponentName(opts.Ctor.options) || opts.tag || ''
                            : c.tag;
                        warn$2(`<transition-group> children must be keyed: <${name}>`);
                    }
                }
            }
            if (prevChildren) {
                const kept = [];
                const removed = [];
                for (let i = 0; i < prevChildren.length; i++) {
                    const c = prevChildren[i];
                    c.data.transition = transitionData;
                    // @ts-expect-error .getBoundingClientRect is not typed in Node
                    c.data.pos = c.elm.getBoundingClientRect();
                    if (map[c.key]) {
                        kept.push(c);
                    }
                    else {
                        removed.push(c);
                    }
                }
                this.kept = h(tag, null, kept);
                this.removed = removed;
            }
            return h(tag, null, children);
        },
        updated() {
            const children = this.prevChildren;
            const moveClass = this.moveClass || (this.name || 'v') + '-move';
            if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
                return;
            }
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            children.forEach(callPendingCbs);
            children.forEach(recordPosition);
            children.forEach(applyTranslation);
            // force reflow to put everything in position
            // assign to this to avoid being removed in tree-shaking
            // $flow-disable-line
            this._reflow = document.body.offsetHeight;
            children.forEach((c) => {
                if (c.data.moved) {
                    const el = c.elm;
                    const s = el.style;
                    addTransitionClass(el, moveClass);
                    s.transform = s.WebkitTransform = s.transitionDuration = '';
                    el.addEventListener(transitionEndEvent, (el._moveCb = function cb(e) {
                        if (e && e.target !== el) {
                            return;
                        }
                        if (!e || /transform$/.test(e.propertyName)) {
                            el.removeEventListener(transitionEndEvent, cb);
                            el._moveCb = null;
                            removeTransitionClass(el, moveClass);
                        }
                    }));
                }
            });
        },
        methods: {
            hasMove(el, moveClass) {
                /* istanbul ignore if */
                if (!hasTransition) {
                    return false;
                }
                /* istanbul ignore if */
                if (this._hasMove) {
                    return this._hasMove;
                }
                // Detect whether an element with the move class applied has
                // CSS transitions. Since the element may be inside an entering
                // transition at this very moment, we make a clone of it and remove
                // all other transition classes applied to ensure only the move class
                // is applied.
                const clone = el.cloneNode();
                if (el._transitionClasses) {
                    el._transitionClasses.forEach((cls) => {
                        removeClass(clone, cls);
                    });
                }
                addClass(clone, moveClass);
                clone.style.display = 'none';
                this.$el.appendChild(clone);
                const info = getTransitionInfo(clone);
                this.$el.removeChild(clone);
                return (this._hasMove = info.hasTransform);
            }
        }
    };
    function callPendingCbs(c) {
        /* istanbul ignore if */
        if (c.elm._moveCb) {
            c.elm._moveCb();
        }
        /* istanbul ignore if */
        if (c.elm._enterCb) {
            c.elm._enterCb();
        }
    }
    function recordPosition(c) {
        c.data.newPos = c.elm.getBoundingClientRect();
    }
    function applyTranslation(c) {
        const oldPos = c.data.pos;
        const newPos = c.data.newPos;
        const dx = oldPos.left - newPos.left;
        const dy = oldPos.top - newPos.top;
        if (dx || dy) {
            c.data.moved = true;
            const s = c.elm.style;
            s.transform = s.WebkitTransform = `translate(${dx}px,${dy}px)`;
            s.transitionDuration = '0s';
        }
    }

    var platformComponents = {
        Transition,
        TransitionGroup
    };

    // install platform specific utils
    Vue.config.mustUseProp = mustUseProp;
    Vue.config.isReservedTag = isReservedTag;
    Vue.config.isReservedAttr = isReservedAttr;
    Vue.config.getTagNamespace = getTagNamespace;
    Vue.config.isUnknownElement = isUnknownElement;
    // install platform runtime directives & components
    extend(Vue.options.directives, platformDirectives);
    extend(Vue.options.components, platformComponents);
    // install platform patch function
    Vue.prototype.__patch__ = inBrowser ? patch : noop;
    // public mount method
    Vue.prototype.$mount = function (el, hydrating) {
        el = el && inBrowser ? query(el) : undefined;
        return mountComponent(this, el, hydrating);
    };
    // devtools global hook
    /* istanbul ignore next */
    if (inBrowser) {
        setTimeout(() => {
            if (config.devtools) {
                if (devtools) {
                    devtools.emit('init', Vue);
                }
                else {
                    // @ts-expect-error
                    console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' +
                        'https://github.com/vuejs/vue-devtools');
                }
            }
            if (config.productionTip !== false &&
                typeof console !== 'undefined') {
                // @ts-expect-error
                console[console.info ? 'info' : 'log'](`You are running Vue in development mode.\n` +
                    `Make sure to turn on production mode when deploying for production.\n` +
                    `See more tips at https://vuejs.org/guide/deployment.html`);
            }
        }, 0);
    }

    const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
    const regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
    const buildRegex = cached(delimiters => {
        const open = delimiters[0].replace(regexEscapeRE, '\\$&');
        const close = delimiters[1].replace(regexEscapeRE, '\\$&');
        return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
    });
    function parseText(text, delimiters) {
        //@ts-expect-error
        const tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
        if (!tagRE.test(text)) {
            return;
        }
        const tokens = [];
        const rawTokens = [];
        let lastIndex = (tagRE.lastIndex = 0);
        let match, index, tokenValue;
        while ((match = tagRE.exec(text))) {
            index = match.index;
            // push text token
            if (index > lastIndex) {
                rawTokens.push((tokenValue = text.slice(lastIndex, index)));
                tokens.push(JSON.stringify(tokenValue));
            }
            // tag token
            const exp = parseFilters(match[1].trim());
            tokens.push(`_s(${exp})`);
            rawTokens.push({ '@binding': exp });
            lastIndex = index + match[0].length;
        }
        if (lastIndex < text.length) {
            rawTokens.push((tokenValue = text.slice(lastIndex)));
            tokens.push(JSON.stringify(tokenValue));
        }
        return {
            expression: tokens.join('+'),
            tokens: rawTokens
        };
    }

    function transformNode$1(el, options) {
        const warn = options.warn || baseWarn;
        const staticClass = getAndRemoveAttr(el, 'class');
        if (staticClass) {
            const res = parseText(staticClass, options.delimiters);
            if (res) {
                warn(`class="${staticClass}": ` +
                    'Interpolation inside attributes has been removed. ' +
                    'Use v-bind or the colon shorthand instead. For example, ' +
                    'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap['class']);
            }
        }
        if (staticClass) {
            el.staticClass = JSON.stringify(staticClass.replace(/\s+/g, ' ').trim());
        }
        const classBinding = getBindingAttr(el, 'class', false /* getStatic */);
        if (classBinding) {
            el.classBinding = classBinding;
        }
    }
    function genData$2(el) {
        let data = '';
        if (el.staticClass) {
            data += `staticClass:${el.staticClass},`;
        }
        if (el.classBinding) {
            data += `class:${el.classBinding},`;
        }
        return data;
    }
    var klass = {
        staticKeys: ['staticClass'],
        transformNode: transformNode$1,
        genData: genData$2
    };

    function transformNode(el, options) {
        const warn = options.warn || baseWarn;
        const staticStyle = getAndRemoveAttr(el, 'style');
        if (staticStyle) {
            /* istanbul ignore if */
            {
                const res = parseText(staticStyle, options.delimiters);
                if (res) {
                    warn(`style="${staticStyle}": ` +
                        'Interpolation inside attributes has been removed. ' +
                        'Use v-bind or the colon shorthand instead. For example, ' +
                        'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap['style']);
                }
            }
            el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
        }
        const styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
        if (styleBinding) {
            el.styleBinding = styleBinding;
        }
    }
    function genData$1(el) {
        let data = '';
        if (el.staticStyle) {
            data += `staticStyle:${el.staticStyle},`;
        }
        if (el.styleBinding) {
            data += `style:(${el.styleBinding}),`;
        }
        return data;
    }
    var style = {
        staticKeys: ['staticStyle'],
        transformNode,
        genData: genData$1
    };

    let decoder;
    var he = {
        decode(html) {
            decoder = decoder || document.createElement('div');
            decoder.innerHTML = html;
            return decoder.textContent;
        }
    };

    const isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
        'link,meta,param,source,track,wbr');
    // Elements that you can, intentionally, leave open
    // (and which close themselves)
    const canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');
    // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
    // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
    const isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
        'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
        'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
        'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
        'title,tr,track');

    /**
     * Not type-checking this file because it's mostly vendor code.
     */
    // Regular Expressions for parsing tags and attributes
    const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
    const dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
    const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z${unicodeRegExp.source}]*`;
    const qnameCapture = `((?:${ncname}\\:)?${ncname})`;
    const startTagOpen = new RegExp(`^<${qnameCapture}`);
    const startTagClose = /^\s*(\/?)>/;
    const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`);
    const doctype = /^<!DOCTYPE [^>]+>/i;
    // #7298: escape - to avoid being passed as HTML comment when inlined in page
    const comment = /^<!\--/;
    const conditionalComment = /^<!\[/;
    // Special Elements (can contain anything)
    const isPlainTextElement = makeMap('script,style,textarea', true);
    const reCache = {};
    const decodingMap = {
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&amp;': '&',
        '&#10;': '\n',
        '&#9;': '\t',
        '&#39;': "'"
    };
    const encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
    const encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
    // #5992
    const isIgnoreNewlineTag = makeMap('pre,textarea', true);
    const shouldIgnoreFirstNewline = (tag, html) => tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
    function decodeAttr(value, shouldDecodeNewlines) {
        const re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
        return value.replace(re, match => decodingMap[match]);
    }
    function parseHTML(html, options) {
        const stack = [];
        const expectHTML = options.expectHTML;
        const isUnaryTag = options.isUnaryTag || no;
        const canBeLeftOpenTag = options.canBeLeftOpenTag || no;
        let index = 0;
        let last, lastTag;
        while (html) {
            last = html;
            // Make sure we're not in a plaintext content element like script/style
            if (!lastTag || !isPlainTextElement(lastTag)) {
                let textEnd = html.indexOf('<');
                if (textEnd === 0) {
                    // Comment:
                    if (comment.test(html)) {
                        const commentEnd = html.indexOf('-->');
                        if (commentEnd >= 0) {
                            if (options.shouldKeepComment && options.comment) {
                                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
                            }
                            advance(commentEnd + 3);
                            continue;
                        }
                    }
                    // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
                    if (conditionalComment.test(html)) {
                        const conditionalEnd = html.indexOf(']>');
                        if (conditionalEnd >= 0) {
                            advance(conditionalEnd + 2);
                            continue;
                        }
                    }
                    // Doctype:
                    const doctypeMatch = html.match(doctype);
                    if (doctypeMatch) {
                        advance(doctypeMatch[0].length);
                        continue;
                    }
                    // End tag:
                    const endTagMatch = html.match(endTag);
                    if (endTagMatch) {
                        const curIndex = index;
                        advance(endTagMatch[0].length);
                        parseEndTag(endTagMatch[1], curIndex, index);
                        continue;
                    }
                    // Start tag:
                    const startTagMatch = parseStartTag();
                    if (startTagMatch) {
                        handleStartTag(startTagMatch);
                        if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
                            advance(1);
                        }
                        continue;
                    }
                }
                let text, rest, next;
                if (textEnd >= 0) {
                    rest = html.slice(textEnd);
                    while (!endTag.test(rest) &&
                        !startTagOpen.test(rest) &&
                        !comment.test(rest) &&
                        !conditionalComment.test(rest)) {
                        // < in plain text, be forgiving and treat it as text
                        next = rest.indexOf('<', 1);
                        if (next < 0)
                            break;
                        textEnd += next;
                        rest = html.slice(textEnd);
                    }
                    text = html.substring(0, textEnd);
                }
                if (textEnd < 0) {
                    text = html;
                }
                if (text) {
                    advance(text.length);
                }
                if (options.chars && text) {
                    options.chars(text, index - text.length, index);
                }
            }
            else {
                let endTagLength = 0;
                const stackedTag = lastTag.toLowerCase();
                const reStackedTag = reCache[stackedTag] ||
                    (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
                const rest = html.replace(reStackedTag, function (all, text, endTag) {
                    endTagLength = endTag.length;
                    if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
                        text = text
                            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
                            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
                    }
                    if (shouldIgnoreFirstNewline(stackedTag, text)) {
                        text = text.slice(1);
                    }
                    if (options.chars) {
                        options.chars(text);
                    }
                    return '';
                });
                index += html.length - rest.length;
                html = rest;
                parseEndTag(stackedTag, index - endTagLength, index);
            }
            if (html === last) {
                options.chars && options.chars(html);
                if (!stack.length && options.warn) {
                    options.warn(`Mal-formatted tag at end of template: "${html}"`, {
                        start: index + html.length
                    });
                }
                break;
            }
        }
        // Clean up any remaining tags
        parseEndTag();
        function advance(n) {
            index += n;
            html = html.substring(n);
        }
        function parseStartTag() {
            const start = html.match(startTagOpen);
            if (start) {
                const match = {
                    tagName: start[1],
                    attrs: [],
                    start: index
                };
                advance(start[0].length);
                let end, attr;
                while (!(end = html.match(startTagClose)) &&
                    (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
                    attr.start = index;
                    advance(attr[0].length);
                    attr.end = index;
                    match.attrs.push(attr);
                }
                if (end) {
                    match.unarySlash = end[1];
                    advance(end[0].length);
                    match.end = index;
                    return match;
                }
            }
        }
        function handleStartTag(match) {
            const tagName = match.tagName;
            const unarySlash = match.unarySlash;
            if (expectHTML) {
                if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
                    parseEndTag(lastTag);
                }
                if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
                    parseEndTag(tagName);
                }
            }
            const unary = isUnaryTag(tagName) || !!unarySlash;
            const l = match.attrs.length;
            const attrs = new Array(l);
            for (let i = 0; i < l; i++) {
                const args = match.attrs[i];
                const value = args[3] || args[4] || args[5] || '';
                const shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
                    ? options.shouldDecodeNewlinesForHref
                    : options.shouldDecodeNewlines;
                attrs[i] = {
                    name: args[1],
                    value: decodeAttr(value, shouldDecodeNewlines)
                };
                if (options.outputSourceRange) {
                    attrs[i].start = args.start + args[0].match(/^\s*/).length;
                    attrs[i].end = args.end;
                }
            }
            if (!unary) {
                stack.push({
                    tag: tagName,
                    lowerCasedTag: tagName.toLowerCase(),
                    attrs: attrs,
                    start: match.start,
                    end: match.end
                });
                lastTag = tagName;
            }
            if (options.start) {
                options.start(tagName, attrs, unary, match.start, match.end);
            }
        }
        function parseEndTag(tagName, start, end) {
            let pos, lowerCasedTagName;
            if (start == null)
                start = index;
            if (end == null)
                end = index;
            // Find the closest opened tag of the same type
            if (tagName) {
                lowerCasedTagName = tagName.toLowerCase();
                for (pos = stack.length - 1; pos >= 0; pos--) {
                    if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                        break;
                    }
                }
            }
            else {
                // If no tag name is provided, clean shop
                pos = 0;
            }
            if (pos >= 0) {
                // Close all the open elements, up the stack
                for (let i = stack.length - 1; i >= pos; i--) {
                    if ((i > pos || !tagName) && options.warn) {
                        options.warn(`tag <${stack[i].tag}> has no matching end tag.`, {
                            start: stack[i].start,
                            end: stack[i].end
                        });
                    }
                    if (options.end) {
                        options.end(stack[i].tag, start, end);
                    }
                }
                // Remove the open elements from the stack
                stack.length = pos;
                lastTag = pos && stack[pos - 1].tag;
            }
            else if (lowerCasedTagName === 'br') {
                if (options.start) {
                    options.start(tagName, [], true, start, end);
                }
            }
            else if (lowerCasedTagName === 'p') {
                if (options.start) {
                    options.start(tagName, [], false, start, end);
                }
                if (options.end) {
                    options.end(tagName, start, end);
                }
            }
        }
    }

    const onRE = /^@|^v-on:/;
    const dirRE = /^v-|^@|^:|^#/;
    const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    const stripParensRE = /^\(|\)$/g;
    const dynamicArgRE = /^\[.*\]$/;
    const argRE = /:(.*)$/;
    const bindRE = /^:|^\.|^v-bind:/;
    const modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
    const slotRE = /^v-slot(:|$)|^#/;
    const lineBreakRE = /[\r\n]/;
    const whitespaceRE = /[ \f\t\r\n]+/g;
    const invalidAttributeRE = /[\s"'<>\/=]/;
    const decodeHTMLCached = cached(he.decode);
    const emptySlotScopeToken = `_empty_`;
    // configurable state
    let warn;
    let delimiters;
    let transforms;
    let preTransforms;
    let postTransforms;
    let platformIsPreTag;
    let platformMustUseProp;
    let platformGetTagNamespace;
    let maybeComponent;
    function createASTElement(tag, attrs, parent) {
        return {
            type: 1,
            tag,
            attrsList: attrs,
            attrsMap: makeAttrsMap(attrs),
            rawAttrsMap: {},
            parent,
            children: []
        };
    }
    /**
     * Convert HTML string to AST.
     */
    function parse(template, options) {
        warn = options.warn || baseWarn;
        platformIsPreTag = options.isPreTag || no;
        platformMustUseProp = options.mustUseProp || no;
        platformGetTagNamespace = options.getTagNamespace || no;
        const isReservedTag = options.isReservedTag || no;
        maybeComponent = (el) => !!(el.component ||
            el.attrsMap[':is'] ||
            el.attrsMap['v-bind:is'] ||
            !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag)));
        transforms = pluckModuleFunction(options.modules, 'transformNode');
        preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
        postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
        delimiters = options.delimiters;
        const stack = [];
        const preserveWhitespace = options.preserveWhitespace !== false;
        const whitespaceOption = options.whitespace;
        let root;
        let currentParent;
        let inVPre = false;
        let inPre = false;
        let warned = false;
        function warnOnce(msg, range) {
            if (!warned) {
                warned = true;
                warn(msg, range);
            }
        }
        function closeElement(element) {
            trimEndingWhitespace(element);
            if (!inVPre && !element.processed) {
                element = processElement(element, options);
            }
            // tree management
            if (!stack.length && element !== root) {
                // allow root elements with v-if, v-else-if and v-else
                if (root.if && (element.elseif || element.else)) {
                    {
                        checkRootConstraints(element);
                    }
                    addIfCondition(root, {
                        exp: element.elseif,
                        block: element
                    });
                }
                else {
                    warnOnce(`Component template should contain exactly one root element. ` +
                        `If you are using v-if on multiple elements, ` +
                        `use v-else-if to chain them instead.`, { start: element.start });
                }
            }
            if (currentParent && !element.forbidden) {
                if (element.elseif || element.else) {
                    processIfConditions(element, currentParent);
                }
                else {
                    if (element.slotScope) {
                        // scoped slot
                        // keep it in the children list so that v-else(-if) conditions can
                        // find it as the prev node.
                        const name = element.slotTarget || '"default"';
                        (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
                    }
                    currentParent.children.push(element);
                    element.parent = currentParent;
                }
            }
            // final children cleanup
            // filter out scoped slots
            element.children = element.children.filter(c => !c.slotScope);
            // remove trailing whitespace node again
            trimEndingWhitespace(element);
            // check pre state
            if (element.pre) {
                inVPre = false;
            }
            if (platformIsPreTag(element.tag)) {
                inPre = false;
            }
            // apply post-transforms
            for (let i = 0; i < postTransforms.length; i++) {
                postTransforms[i](element, options);
            }
        }
        function trimEndingWhitespace(el) {
            // remove trailing whitespace node
            if (!inPre) {
                let lastNode;
                while ((lastNode = el.children[el.children.length - 1]) &&
                    lastNode.type === 3 &&
                    lastNode.text === ' ') {
                    el.children.pop();
                }
            }
        }
        function checkRootConstraints(el) {
            if (el.tag === 'slot' || el.tag === 'template') {
                warnOnce(`Cannot use <${el.tag}> as component root element because it may ` +
                    'contain multiple nodes.', { start: el.start });
            }
            if (el.attrsMap.hasOwnProperty('v-for')) {
                warnOnce('Cannot use v-for on stateful component root element because ' +
                    'it renders multiple elements.', el.rawAttrsMap['v-for']);
            }
        }
        parseHTML(template, {
            warn,
            expectHTML: options.expectHTML,
            isUnaryTag: options.isUnaryTag,
            canBeLeftOpenTag: options.canBeLeftOpenTag,
            shouldDecodeNewlines: options.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
            shouldKeepComment: options.comments,
            outputSourceRange: options.outputSourceRange,
            start(tag, attrs, unary, start, end) {
                // check namespace.
                // inherit parent ns if there is one
                const ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
                // handle IE svg bug
                /* istanbul ignore if */
                if (isIE && ns === 'svg') {
                    attrs = guardIESVGBug(attrs);
                }
                let element = createASTElement(tag, attrs, currentParent);
                if (ns) {
                    element.ns = ns;
                }
                {
                    if (options.outputSourceRange) {
                        element.start = start;
                        element.end = end;
                        element.rawAttrsMap = element.attrsList.reduce((cumulated, attr) => {
                            cumulated[attr.name] = attr;
                            return cumulated;
                        }, {});
                    }
                    attrs.forEach(attr => {
                        if (invalidAttributeRE.test(attr.name)) {
                            warn(`Invalid dynamic argument expression: attribute names cannot contain ` +
                                `spaces, quotes, <, >, / or =.`, options.outputSourceRange
                                ? {
                                    start: attr.start + attr.name.indexOf(`[`),
                                    end: attr.start + attr.name.length
                                }
                                : undefined);
                        }
                    });
                }
                if (isForbiddenTag(element) && !isServerRendering()) {
                    element.forbidden = true;
                    warn('Templates should only be responsible for mapping the state to the ' +
                            'UI. Avoid placing tags with side-effects in your templates, such as ' +
                            `<${tag}>` +
                            ', as they will not be parsed.', { start: element.start });
                }
                // apply pre-transforms
                for (let i = 0; i < preTransforms.length; i++) {
                    element = preTransforms[i](element, options) || element;
                }
                if (!inVPre) {
                    processPre(element);
                    if (element.pre) {
                        inVPre = true;
                    }
                }
                if (platformIsPreTag(element.tag)) {
                    inPre = true;
                }
                if (inVPre) {
                    processRawAttrs(element);
                }
                else if (!element.processed) {
                    // structural directives
                    processFor(element);
                    processIf(element);
                    processOnce(element);
                }
                if (!root) {
                    root = element;
                    {
                        checkRootConstraints(root);
                    }
                }
                if (!unary) {
                    currentParent = element;
                    stack.push(element);
                }
                else {
                    closeElement(element);
                }
            },
            end(tag, start, end) {
                const element = stack[stack.length - 1];
                // pop stack
                stack.length -= 1;
                currentParent = stack[stack.length - 1];
                if (options.outputSourceRange) {
                    element.end = end;
                }
                closeElement(element);
            },
            chars(text, start, end) {
                if (!currentParent) {
                    {
                        if (text === template) {
                            warnOnce('Component template requires a root element, rather than just text.', { start });
                        }
                        else if ((text = text.trim())) {
                            warnOnce(`text "${text}" outside root element will be ignored.`, {
                                start
                            });
                        }
                    }
                    return;
                }
                // IE textarea placeholder bug
                /* istanbul ignore if */
                if (isIE &&
                    currentParent.tag === 'textarea' &&
                    currentParent.attrsMap.placeholder === text) {
                    return;
                }
                const children = currentParent.children;
                if (inPre || text.trim()) {
                    text = isTextTag(currentParent)
                        ? text
                        : decodeHTMLCached(text);
                }
                else if (!children.length) {
                    // remove the whitespace-only node right after an opening tag
                    text = '';
                }
                else if (whitespaceOption) {
                    if (whitespaceOption === 'condense') {
                        // in condense mode, remove the whitespace node if it contains
                        // line break, otherwise condense to a single space
                        text = lineBreakRE.test(text) ? '' : ' ';
                    }
                    else {
                        text = ' ';
                    }
                }
                else {
                    text = preserveWhitespace ? ' ' : '';
                }
                if (text) {
                    if (!inPre && whitespaceOption === 'condense') {
                        // condense consecutive whitespaces into single space
                        text = text.replace(whitespaceRE, ' ');
                    }
                    let res;
                    let child;
                    if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
                        child = {
                            type: 2,
                            expression: res.expression,
                            tokens: res.tokens,
                            text
                        };
                    }
                    else if (text !== ' ' ||
                        !children.length ||
                        children[children.length - 1].text !== ' ') {
                        child = {
                            type: 3,
                            text
                        };
                    }
                    if (child) {
                        if (options.outputSourceRange) {
                            child.start = start;
                            child.end = end;
                        }
                        children.push(child);
                    }
                }
            },
            comment(text, start, end) {
                // adding anything as a sibling to the root node is forbidden
                // comments should still be allowed, but ignored
                if (currentParent) {
                    const child = {
                        type: 3,
                        text,
                        isComment: true
                    };
                    if (options.outputSourceRange) {
                        child.start = start;
                        child.end = end;
                    }
                    currentParent.children.push(child);
                }
            }
        });
        return root;
    }
    function processPre(el) {
        if (getAndRemoveAttr(el, 'v-pre') != null) {
            el.pre = true;
        }
    }
    function processRawAttrs(el) {
        const list = el.attrsList;
        const len = list.length;
        if (len) {
            const attrs = (el.attrs = new Array(len));
            for (let i = 0; i < len; i++) {
                attrs[i] = {
                    name: list[i].name,
                    value: JSON.stringify(list[i].value)
                };
                if (list[i].start != null) {
                    attrs[i].start = list[i].start;
                    attrs[i].end = list[i].end;
                }
            }
        }
        else if (!el.pre) {
            // non root node in pre blocks with no attributes
            el.plain = true;
        }
    }
    function processElement(element, options) {
        processKey(element);
        // determine whether this is a plain element after
        // removing structural attributes
        element.plain =
            !element.key && !element.scopedSlots && !element.attrsList.length;
        processRef(element);
        processSlotContent(element);
        processSlotOutlet(element);
        processComponent(element);
        for (let i = 0; i < transforms.length; i++) {
            element = transforms[i](element, options) || element;
        }
        processAttrs(element);
        return element;
    }
    function processKey(el) {
        const exp = getBindingAttr(el, 'key');
        if (exp) {
            {
                if (el.tag === 'template') {
                    warn(`<template> cannot be keyed. Place the key on real elements instead.`, getRawBindingAttr(el, 'key'));
                }
                if (el.for) {
                    const iterator = el.iterator2 || el.iterator1;
                    const parent = el.parent;
                    if (iterator &&
                        iterator === exp &&
                        parent &&
                        parent.tag === 'transition-group') {
                        warn(`Do not use v-for index as key on <transition-group> children, ` +
                            `this is the same as not using keys.`, getRawBindingAttr(el, 'key'), true /* tip */);
                    }
                }
            }
            el.key = exp;
        }
    }
    function processRef(el) {
        const ref = getBindingAttr(el, 'ref');
        if (ref) {
            el.ref = ref;
            el.refInFor = checkInFor(el);
        }
    }
    function processFor(el) {
        let exp;
        if ((exp = getAndRemoveAttr(el, 'v-for'))) {
            const res = parseFor(exp);
            if (res) {
                extend(el, res);
            }
            else {
                warn(`Invalid v-for expression: ${exp}`, el.rawAttrsMap['v-for']);
            }
        }
    }
    function parseFor(exp) {
        const inMatch = exp.match(forAliasRE);
        if (!inMatch)
            return;
        const res = {};
        res.for = inMatch[2].trim();
        const alias = inMatch[1].trim().replace(stripParensRE, '');
        const iteratorMatch = alias.match(forIteratorRE);
        if (iteratorMatch) {
            res.alias = alias.replace(forIteratorRE, '').trim();
            res.iterator1 = iteratorMatch[1].trim();
            if (iteratorMatch[2]) {
                res.iterator2 = iteratorMatch[2].trim();
            }
        }
        else {
            res.alias = alias;
        }
        return res;
    }
    function processIf(el) {
        const exp = getAndRemoveAttr(el, 'v-if');
        if (exp) {
            el.if = exp;
            addIfCondition(el, {
                exp: exp,
                block: el
            });
        }
        else {
            if (getAndRemoveAttr(el, 'v-else') != null) {
                el.else = true;
            }
            const elseif = getAndRemoveAttr(el, 'v-else-if');
            if (elseif) {
                el.elseif = elseif;
            }
        }
    }
    function processIfConditions(el, parent) {
        const prev = findPrevElement(parent.children);
        if (prev && prev.if) {
            addIfCondition(prev, {
                exp: el.elseif,
                block: el
            });
        }
        else {
            warn(`v-${el.elseif ? 'else-if="' + el.elseif + '"' : 'else'} ` +
                `used on element <${el.tag}> without corresponding v-if.`, el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']);
        }
    }
    function findPrevElement(children) {
        let i = children.length;
        while (i--) {
            if (children[i].type === 1) {
                return children[i];
            }
            else {
                if (children[i].text !== ' ') {
                    warn(`text "${children[i].text.trim()}" between v-if and v-else(-if) ` +
                        `will be ignored.`, children[i]);
                }
                children.pop();
            }
        }
    }
    function addIfCondition(el, condition) {
        if (!el.ifConditions) {
            el.ifConditions = [];
        }
        el.ifConditions.push(condition);
    }
    function processOnce(el) {
        const once = getAndRemoveAttr(el, 'v-once');
        if (once != null) {
            el.once = true;
        }
    }
    // handle content being passed to a component as slot,
    // e.g. <template slot="xxx">, <div slot-scope="xxx">
    function processSlotContent(el) {
        let slotScope;
        if (el.tag === 'template') {
            slotScope = getAndRemoveAttr(el, 'scope');
            /* istanbul ignore if */
            if (slotScope) {
                warn(`the "scope" attribute for scoped slots have been deprecated and ` +
                    `replaced by "slot-scope" since 2.5. The new "slot-scope" attribute ` +
                    `can also be used on plain elements in addition to <template> to ` +
                    `denote scoped slots.`, el.rawAttrsMap['scope'], true);
            }
            el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
        }
        else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
            /* istanbul ignore if */
            if (el.attrsMap['v-for']) {
                warn(`Ambiguous combined usage of slot-scope and v-for on <${el.tag}> ` +
                    `(v-for takes higher priority). Use a wrapper <template> for the ` +
                    `scoped slot to make it clearer.`, el.rawAttrsMap['slot-scope'], true);
            }
            el.slotScope = slotScope;
        }
        // slot="xxx"
        const slotTarget = getBindingAttr(el, 'slot');
        if (slotTarget) {
            el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
            el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
            // preserve slot as an attribute for native shadow DOM compat
            // only for non-scoped slots.
            if (el.tag !== 'template' && !el.slotScope) {
                addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
            }
        }
        // 2.6 v-slot syntax
        {
            if (el.tag === 'template') {
                // v-slot on <template>
                const slotBinding = getAndRemoveAttrByRegex(el, slotRE);
                if (slotBinding) {
                    {
                        if (el.slotTarget || el.slotScope) {
                            warn(`Unexpected mixed usage of different slot syntaxes.`, el);
                        }
                        if (el.parent && !maybeComponent(el.parent)) {
                            warn(`<template v-slot> can only appear at the root level inside ` +
                                `the receiving component`, el);
                        }
                    }
                    const { name, dynamic } = getSlotName(slotBinding);
                    el.slotTarget = name;
                    el.slotTargetDynamic = dynamic;
                    el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
                }
            }
            else {
                // v-slot on component, denotes default slot
                const slotBinding = getAndRemoveAttrByRegex(el, slotRE);
                if (slotBinding) {
                    {
                        if (!maybeComponent(el)) {
                            warn(`v-slot can only be used on components or <template>.`, slotBinding);
                        }
                        if (el.slotScope || el.slotTarget) {
                            warn(`Unexpected mixed usage of different slot syntaxes.`, el);
                        }
                        if (el.scopedSlots) {
                            warn(`To avoid scope ambiguity, the default slot should also use ` +
                                `<template> syntax when there are other named slots.`, slotBinding);
                        }
                    }
                    // add the component's children to its default slot
                    const slots = el.scopedSlots || (el.scopedSlots = {});
                    const { name, dynamic } = getSlotName(slotBinding);
                    const slotContainer = (slots[name] = createASTElement('template', [], el));
                    slotContainer.slotTarget = name;
                    slotContainer.slotTargetDynamic = dynamic;
                    slotContainer.children = el.children.filter((c) => {
                        if (!c.slotScope) {
                            c.parent = slotContainer;
                            return true;
                        }
                    });
                    slotContainer.slotScope = slotBinding.value || emptySlotScopeToken;
                    // remove children as they are returned from scopedSlots now
                    el.children = [];
                    // mark el non-plain so data gets generated
                    el.plain = false;
                }
            }
        }
    }
    function getSlotName(binding) {
        let name = binding.name.replace(slotRE, '');
        if (!name) {
            if (binding.name[0] !== '#') {
                name = 'default';
            }
            else {
                warn(`v-slot shorthand syntax requires a slot name.`, binding);
            }
        }
        return dynamicArgRE.test(name)
            ? // dynamic [name]
                { name: name.slice(1, -1), dynamic: true }
            : // static name
                { name: `"${name}"`, dynamic: false };
    }
    // handle <slot/> outlets
    function processSlotOutlet(el) {
        if (el.tag === 'slot') {
            el.slotName = getBindingAttr(el, 'name');
            if (el.key) {
                warn(`\`key\` does not work on <slot> because slots are abstract outlets ` +
                    `and can possibly expand into multiple elements. ` +
                    `Use the key on a wrapping element instead.`, getRawBindingAttr(el, 'key'));
            }
        }
    }
    function processComponent(el) {
        let binding;
        if ((binding = getBindingAttr(el, 'is'))) {
            el.component = binding;
        }
        if (getAndRemoveAttr(el, 'inline-template') != null) {
            el.inlineTemplate = true;
        }
    }
    function processAttrs(el) {
        const list = el.attrsList;
        let i, l, name, rawName, value, modifiers, syncGen, isDynamic;
        for (i = 0, l = list.length; i < l; i++) {
            name = rawName = list[i].name;
            value = list[i].value;
            if (dirRE.test(name)) {
                // mark element as dynamic
                el.hasBindings = true;
                // modifiers
                modifiers = parseModifiers(name.replace(dirRE, ''));
                // support .foo shorthand syntax for the .prop modifier
                if (modifiers) {
                    name = name.replace(modifierRE, '');
                }
                if (bindRE.test(name)) {
                    // v-bind
                    name = name.replace(bindRE, '');
                    value = parseFilters(value);
                    isDynamic = dynamicArgRE.test(name);
                    if (isDynamic) {
                        name = name.slice(1, -1);
                    }
                    if (value.trim().length === 0) {
                        warn(`The value for a v-bind expression cannot be empty. Found in "v-bind:${name}"`);
                    }
                    if (modifiers) {
                        if (modifiers.prop && !isDynamic) {
                            name = camelize(name);
                            if (name === 'innerHtml')
                                name = 'innerHTML';
                        }
                        if (modifiers.camel && !isDynamic) {
                            name = camelize(name);
                        }
                        if (modifiers.sync) {
                            syncGen = genAssignmentCode(value, `$event`);
                            if (!isDynamic) {
                                addHandler(el, `update:${camelize(name)}`, syncGen, null, false, warn, list[i]);
                                if (hyphenate(name) !== camelize(name)) {
                                    addHandler(el, `update:${hyphenate(name)}`, syncGen, null, false, warn, list[i]);
                                }
                            }
                            else {
                                // handler w/ dynamic event name
                                addHandler(el, `"update:"+(${name})`, syncGen, null, false, warn, list[i], true // dynamic
                                );
                            }
                        }
                    }
                    if ((modifiers && modifiers.prop) ||
                        (!el.component && platformMustUseProp(el.tag, el.attrsMap.type, name))) {
                        addProp(el, name, value, list[i], isDynamic);
                    }
                    else {
                        addAttr(el, name, value, list[i], isDynamic);
                    }
                }
                else if (onRE.test(name)) {
                    // v-on
                    name = name.replace(onRE, '');
                    isDynamic = dynamicArgRE.test(name);
                    if (isDynamic) {
                        name = name.slice(1, -1);
                    }
                    addHandler(el, name, value, modifiers, false, warn, list[i], isDynamic);
                }
                else {
                    // normal directives
                    name = name.replace(dirRE, '');
                    // parse arg
                    const argMatch = name.match(argRE);
                    let arg = argMatch && argMatch[1];
                    isDynamic = false;
                    if (arg) {
                        name = name.slice(0, -(arg.length + 1));
                        if (dynamicArgRE.test(arg)) {
                            arg = arg.slice(1, -1);
                            isDynamic = true;
                        }
                    }
                    addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
                    if (name === 'model') {
                        checkForAliasModel(el, value);
                    }
                }
            }
            else {
                // literal attribute
                {
                    const res = parseText(value, delimiters);
                    if (res) {
                        warn(`${name}="${value}": ` +
                            'Interpolation inside attributes has been removed. ' +
                            'Use v-bind or the colon shorthand instead. For example, ' +
                            'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
                    }
                }
                addAttr(el, name, JSON.stringify(value), list[i]);
                // #6887 firefox doesn't update muted state if set via attribute
                // even immediately after element creation
                if (!el.component &&
                    name === 'muted' &&
                    platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                    addProp(el, name, 'true', list[i]);
                }
            }
        }
    }
    function checkInFor(el) {
        let parent = el;
        while (parent) {
            if (parent.for !== undefined) {
                return true;
            }
            parent = parent.parent;
        }
        return false;
    }
    function parseModifiers(name) {
        const match = name.match(modifierRE);
        if (match) {
            const ret = {};
            match.forEach(m => {
                ret[m.slice(1)] = true;
            });
            return ret;
        }
    }
    function makeAttrsMap(attrs) {
        const map = {};
        for (let i = 0, l = attrs.length; i < l; i++) {
            if (map[attrs[i].name] && !isIE && !isEdge) {
                warn('duplicate attribute: ' + attrs[i].name, attrs[i]);
            }
            map[attrs[i].name] = attrs[i].value;
        }
        return map;
    }
    // for script (e.g. type="x/template") or style, do not decode content
    function isTextTag(el) {
        return el.tag === 'script' || el.tag === 'style';
    }
    function isForbiddenTag(el) {
        return (el.tag === 'style' ||
            (el.tag === 'script' &&
                (!el.attrsMap.type || el.attrsMap.type === 'text/javascript')));
    }
    const ieNSBug = /^xmlns:NS\d+/;
    const ieNSPrefix = /^NS\d+:/;
    /* istanbul ignore next */
    function guardIESVGBug(attrs) {
        const res = [];
        for (let i = 0; i < attrs.length; i++) {
            const attr = attrs[i];
            if (!ieNSBug.test(attr.name)) {
                attr.name = attr.name.replace(ieNSPrefix, '');
                res.push(attr);
            }
        }
        return res;
    }
    function checkForAliasModel(el, value) {
        let _el = el;
        while (_el) {
            if (_el.for && _el.alias === value) {
                warn(`<${el.tag} v-model="${value}">: ` +
                    `You are binding v-model directly to a v-for iteration alias. ` +
                    `This will not be able to modify the v-for source array because ` +
                    `writing to the alias is like modifying a function local variable. ` +
                    `Consider using an array of objects and use v-model on an object property instead.`, el.rawAttrsMap['v-model']);
            }
            _el = _el.parent;
        }
    }

    /**
     * Expand input[v-model] with dynamic type bindings into v-if-else chains
     * Turn this:
     *   <input v-model="data[type]" :type="type">
     * into this:
     *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
     *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
     *   <input v-else :type="type" v-model="data[type]">
     */
    function preTransformNode(el, options) {
        if (el.tag === 'input') {
            const map = el.attrsMap;
            if (!map['v-model']) {
                return;
            }
            let typeBinding;
            if (map[':type'] || map['v-bind:type']) {
                typeBinding = getBindingAttr(el, 'type');
            }
            if (!map.type && !typeBinding && map['v-bind']) {
                typeBinding = `(${map['v-bind']}).type`;
            }
            if (typeBinding) {
                const ifCondition = getAndRemoveAttr(el, 'v-if', true);
                const ifConditionExtra = ifCondition ? `&&(${ifCondition})` : ``;
                const hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
                const elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
                // 1. checkbox
                const branch0 = cloneASTElement(el);
                // process for on the main node
                processFor(branch0);
                addRawAttr(branch0, 'type', 'checkbox');
                processElement(branch0, options);
                branch0.processed = true; // prevent it from double-processed
                branch0.if = `(${typeBinding})==='checkbox'` + ifConditionExtra;
                addIfCondition(branch0, {
                    exp: branch0.if,
                    block: branch0
                });
                // 2. add radio else-if condition
                const branch1 = cloneASTElement(el);
                getAndRemoveAttr(branch1, 'v-for', true);
                addRawAttr(branch1, 'type', 'radio');
                processElement(branch1, options);
                addIfCondition(branch0, {
                    exp: `(${typeBinding})==='radio'` + ifConditionExtra,
                    block: branch1
                });
                // 3. other
                const branch2 = cloneASTElement(el);
                getAndRemoveAttr(branch2, 'v-for', true);
                addRawAttr(branch2, ':type', typeBinding);
                processElement(branch2, options);
                addIfCondition(branch0, {
                    exp: ifCondition,
                    block: branch2
                });
                if (hasElse) {
                    branch0.else = true;
                }
                else if (elseIfCondition) {
                    branch0.elseif = elseIfCondition;
                }
                return branch0;
            }
        }
    }
    function cloneASTElement(el) {
        return createASTElement(el.tag, el.attrsList.slice(), el.parent);
    }
    var model = {
        preTransformNode
    };

    var modules = [klass, style, model];

    function text(el, dir) {
        if (dir.value) {
            addProp(el, 'textContent', `_s(${dir.value})`, dir);
        }
    }

    function html(el, dir) {
        if (dir.value) {
            addProp(el, 'innerHTML', `_s(${dir.value})`, dir);
        }
    }

    var directives = {
        model: model$1,
        text,
        html
    };

    const baseOptions = {
        expectHTML: true,
        modules,
        directives,
        isPreTag,
        isUnaryTag,
        mustUseProp,
        canBeLeftOpenTag,
        isReservedTag,
        getTagNamespace,
        staticKeys: genStaticKeys$1(modules)
    };

    let isStaticKey;
    let isPlatformReservedTag;
    const genStaticKeysCached = cached(genStaticKeys);
    /**
     * Goal of the optimizer: walk the generated template AST tree
     * and detect sub-trees that are purely static, i.e. parts of
     * the DOM that never needs to change.
     *
     * Once we detect these sub-trees, we can:
     *
     * 1. Hoist them into constants, so that we no longer need to
     *    create fresh nodes for them on each re-render;
     * 2. Completely skip them in the patching process.
     */
    function optimize(root, options) {
        if (!root)
            return;
        isStaticKey = genStaticKeysCached(options.staticKeys || '');
        isPlatformReservedTag = options.isReservedTag || no;
        // first pass: mark all non-static nodes.
        markStatic(root);
        // second pass: mark static roots.
        markStaticRoots(root, false);
    }
    function genStaticKeys(keys) {
        return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
            (keys ? ',' + keys : ''));
    }
    function markStatic(node) {
        node.static = isStatic(node);
        if (node.type === 1) {
            // do not make component slot content static. this avoids
            // 1. components not able to mutate slot nodes
            // 2. static slot content fails for hot-reloading
            if (!isPlatformReservedTag(node.tag) &&
                node.tag !== 'slot' &&
                node.attrsMap['inline-template'] == null) {
                return;
            }
            for (let i = 0, l = node.children.length; i < l; i++) {
                const child = node.children[i];
                markStatic(child);
                if (!child.static) {
                    node.static = false;
                }
            }
            if (node.ifConditions) {
                for (let i = 1, l = node.ifConditions.length; i < l; i++) {
                    const block = node.ifConditions[i].block;
                    markStatic(block);
                    if (!block.static) {
                        node.static = false;
                    }
                }
            }
        }
    }
    function markStaticRoots(node, isInFor) {
        if (node.type === 1) {
            if (node.static || node.once) {
                node.staticInFor = isInFor;
            }
            // For a node to qualify as a static root, it should have children that
            // are not just static text. Otherwise the cost of hoisting out will
            // outweigh the benefits and it's better off to just always render it fresh.
            if (node.static &&
                node.children.length &&
                !(node.children.length === 1 && node.children[0].type === 3)) {
                node.staticRoot = true;
                return;
            }
            else {
                node.staticRoot = false;
            }
            if (node.children) {
                for (let i = 0, l = node.children.length; i < l; i++) {
                    markStaticRoots(node.children[i], isInFor || !!node.for);
                }
            }
            if (node.ifConditions) {
                for (let i = 1, l = node.ifConditions.length; i < l; i++) {
                    markStaticRoots(node.ifConditions[i].block, isInFor);
                }
            }
        }
    }
    function isStatic(node) {
        if (node.type === 2) {
            // expression
            return false;
        }
        if (node.type === 3) {
            // text
            return true;
        }
        return !!(node.pre ||
            (!node.hasBindings && // no dynamic bindings
                !node.if &&
                !node.for && // not v-if or v-for or v-else
                !isBuiltInTag(node.tag) && // not a built-in
                isPlatformReservedTag(node.tag) && // not a component
                !isDirectChildOfTemplateFor(node) &&
                Object.keys(node).every(isStaticKey)));
    }
    function isDirectChildOfTemplateFor(node) {
        while (node.parent) {
            node = node.parent;
            if (node.tag !== 'template') {
                return false;
            }
            if (node.for) {
                return true;
            }
        }
        return false;
    }

    const fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
    const fnInvokeRE = /\([^)]*?\);*$/;
    const simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
    // KeyboardEvent.keyCode aliases
    const keyCodes = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        delete: [8, 46]
    };
    // KeyboardEvent.key aliases
    const keyNames = {
        // #7880: IE11 and Edge use `Esc` for Escape key name.
        esc: ['Esc', 'Escape'],
        tab: 'Tab',
        enter: 'Enter',
        // #9112: IE11 uses `Spacebar` for Space key name.
        space: [' ', 'Spacebar'],
        // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
        up: ['Up', 'ArrowUp'],
        left: ['Left', 'ArrowLeft'],
        right: ['Right', 'ArrowRight'],
        down: ['Down', 'ArrowDown'],
        // #9112: IE11 uses `Del` for Delete key name.
        delete: ['Backspace', 'Delete', 'Del']
    };
    // #4868: modifiers that prevent the execution of the listener
    // need to explicitly return null so that we can determine whether to remove
    // the listener for .once
    const genGuard = condition => `if(${condition})return null;`;
    const modifierCode = {
        stop: '$event.stopPropagation();',
        prevent: '$event.preventDefault();',
        self: genGuard(`$event.target !== $event.currentTarget`),
        ctrl: genGuard(`!$event.ctrlKey`),
        shift: genGuard(`!$event.shiftKey`),
        alt: genGuard(`!$event.altKey`),
        meta: genGuard(`!$event.metaKey`),
        left: genGuard(`'button' in $event && $event.button !== 0`),
        middle: genGuard(`'button' in $event && $event.button !== 1`),
        right: genGuard(`'button' in $event && $event.button !== 2`)
    };
    function genHandlers(events, isNative) {
        const prefix = isNative ? 'nativeOn:' : 'on:';
        let staticHandlers = ``;
        let dynamicHandlers = ``;
        for (const name in events) {
            const handlerCode = genHandler(events[name]);
            //@ts-expect-error
            if (events[name] && events[name].dynamic) {
                dynamicHandlers += `${name},${handlerCode},`;
            }
            else {
                staticHandlers += `"${name}":${handlerCode},`;
            }
        }
        staticHandlers = `{${staticHandlers.slice(0, -1)}}`;
        if (dynamicHandlers) {
            return prefix + `_d(${staticHandlers},[${dynamicHandlers.slice(0, -1)}])`;
        }
        else {
            return prefix + staticHandlers;
        }
    }
    function genHandler(handler) {
        if (!handler) {
            return 'function(){}';
        }
        if (Array.isArray(handler)) {
            return `[${handler.map(handler => genHandler(handler)).join(',')}]`;
        }
        const isMethodPath = simplePathRE.test(handler.value);
        const isFunctionExpression = fnExpRE.test(handler.value);
        const isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));
        if (!handler.modifiers) {
            if (isMethodPath || isFunctionExpression) {
                return handler.value;
            }
            return `function($event){${isFunctionInvocation ? `return ${handler.value}` : handler.value}}`; // inline statement
        }
        else {
            let code = '';
            let genModifierCode = '';
            const keys = [];
            for (const key in handler.modifiers) {
                if (modifierCode[key]) {
                    genModifierCode += modifierCode[key];
                    // left/right
                    if (keyCodes[key]) {
                        keys.push(key);
                    }
                }
                else if (key === 'exact') {
                    const modifiers = handler.modifiers;
                    genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta']
                        .filter(keyModifier => !modifiers[keyModifier])
                        .map(keyModifier => `$event.${keyModifier}Key`)
                        .join('||'));
                }
                else {
                    keys.push(key);
                }
            }
            if (keys.length) {
                code += genKeyFilter(keys);
            }
            // Make sure modifiers like prevent and stop get executed after key filtering
            if (genModifierCode) {
                code += genModifierCode;
            }
            const handlerCode = isMethodPath
                ? `return ${handler.value}.apply(null, arguments)`
                : isFunctionExpression
                    ? `return (${handler.value}).apply(null, arguments)`
                    : isFunctionInvocation
                        ? `return ${handler.value}`
                        : handler.value;
            return `function($event){${code}${handlerCode}}`;
        }
    }
    function genKeyFilter(keys) {
        return (
        // make sure the key filters only apply to KeyboardEvents
        // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
        // key events that do not have keyCode property...
        `if(!$event.type.indexOf('key')&&` +
            `${keys.map(genFilterCode).join('&&')})return null;`);
    }
    function genFilterCode(key) {
        const keyVal = parseInt(key, 10);
        if (keyVal) {
            return `$event.keyCode!==${keyVal}`;
        }
        const keyCode = keyCodes[key];
        const keyName = keyNames[key];
        return (`_k($event.keyCode,` +
            `${JSON.stringify(key)},` +
            `${JSON.stringify(keyCode)},` +
            `$event.key,` +
            `${JSON.stringify(keyName)}` +
            `)`);
    }

    function on(el, dir) {
        if (dir.modifiers) {
            warn$2(`v-on without argument does not support modifiers.`);
        }
        el.wrapListeners = (code) => `_g(${code},${dir.value})`;
    }

    function bind(el, dir) {
        el.wrapData = (code) => {
            return `_b(${code},'${el.tag}',${dir.value},${dir.modifiers && dir.modifiers.prop ? 'true' : 'false'}${dir.modifiers && dir.modifiers.sync ? ',true' : ''})`;
        };
    }

    var baseDirectives = {
        on,
        bind,
        cloak: noop
    };

    class CodegenState {
        constructor(options) {
            this.options = options;
            this.warn = options.warn || baseWarn;
            this.transforms = pluckModuleFunction(options.modules, 'transformCode');
            this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
            this.directives = extend(extend({}, baseDirectives), options.directives);
            const isReservedTag = options.isReservedTag || no;
            this.maybeComponent = (el) => !!el.component || !isReservedTag(el.tag);
            this.onceId = 0;
            this.staticRenderFns = [];
            this.pre = false;
        }
    }
    function generate(ast, options) {
        const state = new CodegenState(options);
        // fix #11483, Root level <script> tags should not be rendered.
        const code = ast
            ? ast.tag === 'script'
                ? 'null'
                : genElement(ast, state)
            : '_c("div")';
        return {
            render: `with(this){return ${code}}`,
            staticRenderFns: state.staticRenderFns
        };
    }
    function genElement(el, state) {
        if (el.parent) {
            el.pre = el.pre || el.parent.pre;
        }
        if (el.staticRoot && !el.staticProcessed) {
            return genStatic(el, state);
        }
        else if (el.once && !el.onceProcessed) {
            return genOnce(el, state);
        }
        else if (el.for && !el.forProcessed) {
            return genFor(el, state);
        }
        else if (el.if && !el.ifProcessed) {
            return genIf(el, state);
        }
        else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
            return genChildren(el, state) || 'void 0';
        }
        else if (el.tag === 'slot') {
            return genSlot(el, state);
        }
        else {
            // component or element
            let code;
            if (el.component) {
                code = genComponent(el.component, el, state);
            }
            else {
                let data;
                const maybeComponent = state.maybeComponent(el);
                if (!el.plain || (el.pre && maybeComponent)) {
                    data = genData(el, state);
                }
                let tag;
                // check if this is a component in <script setup>
                const bindings = state.options.bindings;
                if (maybeComponent && bindings && bindings.__isScriptSetup !== false) {
                    tag = checkBindingType(bindings, el.tag);
                }
                if (!tag)
                    tag = `'${el.tag}'`;
                const children = el.inlineTemplate ? null : genChildren(el, state, true);
                code = `_c(${tag}${data ? `,${data}` : '' // data
                }${children ? `,${children}` : '' // children
                })`;
            }
            // module transforms
            for (let i = 0; i < state.transforms.length; i++) {
                code = state.transforms[i](el, code);
            }
            return code;
        }
    }
    function checkBindingType(bindings, key) {
        const camelName = camelize(key);
        const PascalName = capitalize(camelName);
        const checkType = (type) => {
            if (bindings[key] === type) {
                return key;
            }
            if (bindings[camelName] === type) {
                return camelName;
            }
            if (bindings[PascalName] === type) {
                return PascalName;
            }
        };
        const fromConst = checkType("setup-const" /* BindingTypes.SETUP_CONST */) ||
            checkType("setup-reactive-const" /* BindingTypes.SETUP_REACTIVE_CONST */);
        if (fromConst) {
            return fromConst;
        }
        const fromMaybeRef = checkType("setup-let" /* BindingTypes.SETUP_LET */) ||
            checkType("setup-ref" /* BindingTypes.SETUP_REF */) ||
            checkType("setup-maybe-ref" /* BindingTypes.SETUP_MAYBE_REF */);
        if (fromMaybeRef) {
            return fromMaybeRef;
        }
    }
    // hoist static sub-trees out
    function genStatic(el, state) {
        el.staticProcessed = true;
        // Some elements (templates) need to behave differently inside of a v-pre
        // node.  All pre nodes are static roots, so we can use this as a location to
        // wrap a state change and reset it upon exiting the pre node.
        const originalPreState = state.pre;
        if (el.pre) {
            state.pre = el.pre;
        }
        state.staticRenderFns.push(`with(this){return ${genElement(el, state)}}`);
        state.pre = originalPreState;
        return `_m(${state.staticRenderFns.length - 1}${el.staticInFor ? ',true' : ''})`;
    }
    // v-once
    function genOnce(el, state) {
        el.onceProcessed = true;
        if (el.if && !el.ifProcessed) {
            return genIf(el, state);
        }
        else if (el.staticInFor) {
            let key = '';
            let parent = el.parent;
            while (parent) {
                if (parent.for) {
                    key = parent.key;
                    break;
                }
                parent = parent.parent;
            }
            if (!key) {
                state.warn(`v-once can only be used inside v-for that is keyed. `, el.rawAttrsMap['v-once']);
                return genElement(el, state);
            }
            return `_o(${genElement(el, state)},${state.onceId++},${key})`;
        }
        else {
            return genStatic(el, state);
        }
    }
    function genIf(el, state, altGen, altEmpty) {
        el.ifProcessed = true; // avoid recursion
        return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
    }
    function genIfConditions(conditions, state, altGen, altEmpty) {
        if (!conditions.length) {
            return altEmpty || '_e()';
        }
        const condition = conditions.shift();
        if (condition.exp) {
            return `(${condition.exp})?${genTernaryExp(condition.block)}:${genIfConditions(conditions, state, altGen, altEmpty)}`;
        }
        else {
            return `${genTernaryExp(condition.block)}`;
        }
        // v-if with v-once should generate code like (a)?_m(0):_m(1)
        function genTernaryExp(el) {
            return altGen
                ? altGen(el, state)
                : el.once
                    ? genOnce(el, state)
                    : genElement(el, state);
        }
    }
    function genFor(el, state, altGen, altHelper) {
        const exp = el.for;
        const alias = el.alias;
        const iterator1 = el.iterator1 ? `,${el.iterator1}` : '';
        const iterator2 = el.iterator2 ? `,${el.iterator2}` : '';
        if (state.maybeComponent(el) &&
            el.tag !== 'slot' &&
            el.tag !== 'template' &&
            !el.key) {
            state.warn(`<${el.tag} v-for="${alias} in ${exp}">: component lists rendered with ` +
                `v-for should have explicit keys. ` +
                `See https://vuejs.org/guide/list.html#key for more info.`, el.rawAttrsMap['v-for'], true /* tip */);
        }
        el.forProcessed = true; // avoid recursion
        return (`${altHelper || '_l'}((${exp}),` +
            `function(${alias}${iterator1}${iterator2}){` +
            `return ${(altGen || genElement)(el, state)}` +
            '})');
    }
    function genData(el, state) {
        let data = '{';
        // directives first.
        // directives may mutate the el's other properties before they are generated.
        const dirs = genDirectives(el, state);
        if (dirs)
            data += dirs + ',';
        // key
        if (el.key) {
            data += `key:${el.key},`;
        }
        // ref
        if (el.ref) {
            data += `ref:${el.ref},`;
        }
        if (el.refInFor) {
            data += `refInFor:true,`;
        }
        // pre
        if (el.pre) {
            data += `pre:true,`;
        }
        // record original tag name for components using "is" attribute
        if (el.component) {
            data += `tag:"${el.tag}",`;
        }
        // module data generation functions
        for (let i = 0; i < state.dataGenFns.length; i++) {
            data += state.dataGenFns[i](el);
        }
        // attributes
        if (el.attrs) {
            data += `attrs:${genProps(el.attrs)},`;
        }
        // DOM props
        if (el.props) {
            data += `domProps:${genProps(el.props)},`;
        }
        // event handlers
        if (el.events) {
            data += `${genHandlers(el.events, false)},`;
        }
        if (el.nativeEvents) {
            data += `${genHandlers(el.nativeEvents, true)},`;
        }
        // slot target
        // only for non-scoped slots
        if (el.slotTarget && !el.slotScope) {
            data += `slot:${el.slotTarget},`;
        }
        // scoped slots
        if (el.scopedSlots) {
            data += `${genScopedSlots(el, el.scopedSlots, state)},`;
        }
        // component v-model
        if (el.model) {
            data += `model:{value:${el.model.value},callback:${el.model.callback},expression:${el.model.expression}},`;
        }
        // inline-template
        if (el.inlineTemplate) {
            const inlineTemplate = genInlineTemplate(el, state);
            if (inlineTemplate) {
                data += `${inlineTemplate},`;
            }
        }
        data = data.replace(/,$/, '') + '}';
        // v-bind dynamic argument wrap
        // v-bind with dynamic arguments must be applied using the same v-bind object
        // merge helper so that class/style/mustUseProp attrs are handled correctly.
        if (el.dynamicAttrs) {
            data = `_b(${data},"${el.tag}",${genProps(el.dynamicAttrs)})`;
        }
        // v-bind data wrap
        if (el.wrapData) {
            data = el.wrapData(data);
        }
        // v-on data wrap
        if (el.wrapListeners) {
            data = el.wrapListeners(data);
        }
        return data;
    }
    function genDirectives(el, state) {
        const dirs = el.directives;
        if (!dirs)
            return;
        let res = 'directives:[';
        let hasRuntime = false;
        let i, l, dir, needRuntime;
        for (i = 0, l = dirs.length; i < l; i++) {
            dir = dirs[i];
            needRuntime = true;
            const gen = state.directives[dir.name];
            if (gen) {
                // compile-time directive that manipulates AST.
                // returns true if it also needs a runtime counterpart.
                needRuntime = !!gen(el, dir, state.warn);
            }
            if (needRuntime) {
                hasRuntime = true;
                res += `{name:"${dir.name}",rawName:"${dir.rawName}"${dir.value
                    ? `,value:(${dir.value}),expression:${JSON.stringify(dir.value)}`
                    : ''}${dir.arg ? `,arg:${dir.isDynamicArg ? dir.arg : `"${dir.arg}"`}` : ''}${dir.modifiers ? `,modifiers:${JSON.stringify(dir.modifiers)}` : ''}},`;
            }
        }
        if (hasRuntime) {
            return res.slice(0, -1) + ']';
        }
    }
    function genInlineTemplate(el, state) {
        const ast = el.children[0];
        if ((el.children.length !== 1 || ast.type !== 1)) {
            state.warn('Inline-template components must have exactly one child element.', { start: el.start });
        }
        if (ast && ast.type === 1) {
            const inlineRenderFns = generate(ast, state.options);
            return `inlineTemplate:{render:function(){${inlineRenderFns.render}},staticRenderFns:[${inlineRenderFns.staticRenderFns
                .map(code => `function(){${code}}`)
                .join(',')}]}`;
        }
    }
    function genScopedSlots(el, slots, state) {
        // by default scoped slots are considered "stable", this allows child
        // components with only scoped slots to skip forced updates from parent.
        // but in some cases we have to bail-out of this optimization
        // for example if the slot contains dynamic names, has v-if or v-for on them...
        let needsForceUpdate = el.for ||
            Object.keys(slots).some(key => {
                const slot = slots[key];
                return (slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
                );
            });
        // #9534: if a component with scoped slots is inside a conditional branch,
        // it's possible for the same component to be reused but with different
        // compiled slot content. To avoid that, we generate a unique key based on
        // the generated code of all the slot contents.
        let needsKey = !!el.if;
        // OR when it is inside another scoped slot or v-for (the reactivity may be
        // disconnected due to the intermediate scope variable)
        // #9438, #9506
        // TODO: this can be further optimized by properly analyzing in-scope bindings
        // and skip force updating ones that do not actually use scope variables.
        if (!needsForceUpdate) {
            let parent = el.parent;
            while (parent) {
                if ((parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
                    parent.for) {
                    needsForceUpdate = true;
                    break;
                }
                if (parent.if) {
                    needsKey = true;
                }
                parent = parent.parent;
            }
        }
        const generatedSlots = Object.keys(slots)
            .map(key => genScopedSlot(slots[key], state))
            .join(',');
        return `scopedSlots:_u([${generatedSlots}]${needsForceUpdate ? `,null,true` : ``}${!needsForceUpdate && needsKey ? `,null,false,${hash(generatedSlots)}` : ``})`;
    }
    function hash(str) {
        let hash = 5381;
        let i = str.length;
        while (i) {
            hash = (hash * 33) ^ str.charCodeAt(--i);
        }
        return hash >>> 0;
    }
    function containsSlotChild(el) {
        if (el.type === 1) {
            if (el.tag === 'slot') {
                return true;
            }
            return el.children.some(containsSlotChild);
        }
        return false;
    }
    function genScopedSlot(el, state) {
        const isLegacySyntax = el.attrsMap['slot-scope'];
        if (el.if && !el.ifProcessed && !isLegacySyntax) {
            return genIf(el, state, genScopedSlot, `null`);
        }
        if (el.for && !el.forProcessed) {
            return genFor(el, state, genScopedSlot);
        }
        const slotScope = el.slotScope === emptySlotScopeToken ? `` : String(el.slotScope);
        const fn = `function(${slotScope}){` +
            `return ${el.tag === 'template'
                ? el.if && isLegacySyntax
                    ? `(${el.if})?${genChildren(el, state) || 'undefined'}:undefined`
                    : genChildren(el, state) || 'undefined'
                : genElement(el, state)}}`;
        // reverse proxy v-slot without scope on this.$slots
        const reverseProxy = slotScope ? `` : `,proxy:true`;
        return `{key:${el.slotTarget || `"default"`},fn:${fn}${reverseProxy}}`;
    }
    function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
        const children = el.children;
        if (children.length) {
            const el = children[0];
            // optimize single v-for
            if (children.length === 1 &&
                el.for &&
                el.tag !== 'template' &&
                el.tag !== 'slot') {
                const normalizationType = checkSkip
                    ? state.maybeComponent(el)
                        ? `,1`
                        : `,0`
                    : ``;
                return `${(altGenElement || genElement)(el, state)}${normalizationType}`;
            }
            const normalizationType = checkSkip
                ? getNormalizationType(children, state.maybeComponent)
                : 0;
            const gen = altGenNode || genNode;
            return `[${children.map(c => gen(c, state)).join(',')}]${normalizationType ? `,${normalizationType}` : ''}`;
        }
    }
    // determine the normalization needed for the children array.
    // 0: no normalization needed
    // 1: simple normalization needed (possible 1-level deep nested array)
    // 2: full normalization needed
    function getNormalizationType(children, maybeComponent) {
        let res = 0;
        for (let i = 0; i < children.length; i++) {
            const el = children[i];
            if (el.type !== 1) {
                continue;
            }
            if (needsNormalization(el) ||
                (el.ifConditions &&
                    el.ifConditions.some(c => needsNormalization(c.block)))) {
                res = 2;
                break;
            }
            if (maybeComponent(el) ||
                (el.ifConditions && el.ifConditions.some(c => maybeComponent(c.block)))) {
                res = 1;
            }
        }
        return res;
    }
    function needsNormalization(el) {
        return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
    }
    function genNode(node, state) {
        if (node.type === 1) {
            return genElement(node, state);
        }
        else if (node.type === 3 && node.isComment) {
            return genComment(node);
        }
        else {
            return genText(node);
        }
    }
    function genText(text) {
        return `_v(${text.type === 2
            ? text.expression // no need for () because already wrapped in _s()
            : transformSpecialNewlines(JSON.stringify(text.text))})`;
    }
    function genComment(comment) {
        return `_e(${JSON.stringify(comment.text)})`;
    }
    function genSlot(el, state) {
        const slotName = el.slotName || '"default"';
        const children = genChildren(el, state);
        let res = `_t(${slotName}${children ? `,function(){return ${children}}` : ''}`;
        const attrs = el.attrs || el.dynamicAttrs
            ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(attr => ({
                // slot props are camelized
                name: camelize(attr.name),
                value: attr.value,
                dynamic: attr.dynamic
            })))
            : null;
        const bind = el.attrsMap['v-bind'];
        if ((attrs || bind) && !children) {
            res += `,null`;
        }
        if (attrs) {
            res += `,${attrs}`;
        }
        if (bind) {
            res += `${attrs ? '' : ',null'},${bind}`;
        }
        return res + ')';
    }
    // componentName is el.component, take it as argument to shun flow's pessimistic refinement
    function genComponent(componentName, el, state) {
        const children = el.inlineTemplate ? null : genChildren(el, state, true);
        return `_c(${componentName},${genData(el, state)}${children ? `,${children}` : ''})`;
    }
    function genProps(props) {
        let staticProps = ``;
        let dynamicProps = ``;
        for (let i = 0; i < props.length; i++) {
            const prop = props[i];
            const value = transformSpecialNewlines(prop.value);
            if (prop.dynamic) {
                dynamicProps += `${prop.name},${value},`;
            }
            else {
                staticProps += `"${prop.name}":${value},`;
            }
        }
        staticProps = `{${staticProps.slice(0, -1)}}`;
        if (dynamicProps) {
            return `_d(${staticProps},[${dynamicProps.slice(0, -1)}])`;
        }
        else {
            return staticProps;
        }
    }
    // #3895, #4268
    function transformSpecialNewlines(text) {
        return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
    }

    // these keywords should not appear inside expressions, but operators like
    // typeof, instanceof and in are allowed
    const prohibitedKeywordRE = new RegExp('\\b' +
        ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
            'super,throw,while,yield,delete,export,import,return,switch,default,' +
            'extends,finally,continue,debugger,function,arguments')
            .split(',')
            .join('\\b|\\b') +
        '\\b');
    // these unary operators should not be used as property/method names
    const unaryOperatorsRE = new RegExp('\\b' +
        'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') +
        '\\s*\\([^\\)]*\\)');
    // strip strings in expressions
    const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
    // detect problematic expressions in a template
    function detectErrors(ast, warn) {
        if (ast) {
            checkNode(ast, warn);
        }
    }
    function checkNode(node, warn) {
        if (node.type === 1) {
            for (const name in node.attrsMap) {
                if (dirRE.test(name)) {
                    const value = node.attrsMap[name];
                    if (value) {
                        const range = node.rawAttrsMap[name];
                        if (name === 'v-for') {
                            checkFor(node, `v-for="${value}"`, warn, range);
                        }
                        else if (name === 'v-slot' || name[0] === '#') {
                            checkFunctionParameterExpression(value, `${name}="${value}"`, warn, range);
                        }
                        else if (onRE.test(name)) {
                            checkEvent(value, `${name}="${value}"`, warn, range);
                        }
                        else {
                            checkExpression(value, `${name}="${value}"`, warn, range);
                        }
                    }
                }
            }
            if (node.children) {
                for (let i = 0; i < node.children.length; i++) {
                    checkNode(node.children[i], warn);
                }
            }
        }
        else if (node.type === 2) {
            checkExpression(node.expression, node.text, warn, node);
        }
    }
    function checkEvent(exp, text, warn, range) {
        const stripped = exp.replace(stripStringRE, '');
        const keywordMatch = stripped.match(unaryOperatorsRE);
        if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
            warn(`avoid using JavaScript unary operator as property name: ` +
                `"${keywordMatch[0]}" in expression ${text.trim()}`, range);
        }
        checkExpression(exp, text, warn, range);
    }
    function checkFor(node, text, warn, range) {
        checkExpression(node.for || '', text, warn, range);
        checkIdentifier(node.alias, 'v-for alias', text, warn, range);
        checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
        checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
    }
    function checkIdentifier(ident, type, text, warn, range) {
        if (typeof ident === 'string') {
            try {
                new Function(`var ${ident}=_`);
            }
            catch (e) {
                warn(`invalid ${type} "${ident}" in expression: ${text.trim()}`, range);
            }
        }
    }
    function checkExpression(exp, text, warn, range) {
        try {
            new Function(`return ${exp}`);
        }
        catch (e) {
            const keywordMatch = exp
                .replace(stripStringRE, '')
                .match(prohibitedKeywordRE);
            if (keywordMatch) {
                warn(`avoid using JavaScript keyword as property name: ` +
                    `"${keywordMatch[0]}"\n  Raw expression: ${text.trim()}`, range);
            }
            else {
                warn(`invalid expression: ${e.message} in\n\n` +
                    `    ${exp}\n\n` +
                    `  Raw expression: ${text.trim()}\n`, range);
            }
        }
    }
    function checkFunctionParameterExpression(exp, text, warn, range) {
        try {
            new Function(exp, '');
        }
        catch (e) {
            warn(`invalid function parameter expression: ${e.message} in\n\n` +
                `    ${exp}\n\n` +
                `  Raw expression: ${text.trim()}\n`, range);
        }
    }

    const range = 2;
    function generateCodeFrame(source, start = 0, end = source.length) {
        const lines = source.split(/\r?\n/);
        let count = 0;
        const res = [];
        for (let i = 0; i < lines.length; i++) {
            count += lines[i].length + 1;
            if (count >= start) {
                for (let j = i - range; j <= i + range || end > count; j++) {
                    if (j < 0 || j >= lines.length)
                        continue;
                    res.push(`${j + 1}${repeat(` `, 3 - String(j + 1).length)}|  ${lines[j]}`);
                    const lineLength = lines[j].length;
                    if (j === i) {
                        // push underline
                        const pad = start - (count - lineLength) + 1;
                        const length = end > count ? lineLength - pad : end - start;
                        res.push(`   |  ` + repeat(` `, pad) + repeat(`^`, length));
                    }
                    else if (j > i) {
                        if (end > count) {
                            const length = Math.min(end - count, lineLength);
                            res.push(`   |  ` + repeat(`^`, length));
                        }
                        count += lineLength + 1;
                    }
                }
                break;
            }
        }
        return res.join('\n');
    }
    function repeat(str, n) {
        let result = '';
        if (n > 0) {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                // eslint-disable-line
                if (n & 1)
                    result += str;
                n >>>= 1;
                if (n <= 0)
                    break;
                str += str;
            }
        }
        return result;
    }

    function createFunction(code, errors) {
        try {
            return new Function(code);
        }
        catch (err) {
            errors.push({ err, code });
            return noop;
        }
    }
    function createCompileToFunctionFn(compile) {
        const cache = Object.create(null);
        return function compileToFunctions(template, options, vm) {
            options = extend({}, options);
            const warn = options.warn || warn$2;
            delete options.warn;
            /* istanbul ignore if */
            {
                // detect possible CSP restriction
                try {
                    new Function('return 1');
                }
                catch (e) {
                    if (e.toString().match(/unsafe-eval|CSP/)) {
                        warn('It seems you are using the standalone build of Vue.js in an ' +
                            'environment with Content Security Policy that prohibits unsafe-eval. ' +
                            'The template compiler cannot work in this environment. Consider ' +
                            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
                            'templates into render functions.');
                    }
                }
            }
            // check cache
            const key = options.delimiters
                ? String(options.delimiters) + template
                : template;
            if (cache[key]) {
                return cache[key];
            }
            // compile
            const compiled = compile(template, options);
            // check compilation errors/tips
            {
                if (compiled.errors && compiled.errors.length) {
                    if (options.outputSourceRange) {
                        compiled.errors.forEach(e => {
                            warn(`Error compiling template:\n\n${e.msg}\n\n` +
                                generateCodeFrame(template, e.start, e.end), vm);
                        });
                    }
                    else {
                        warn(`Error compiling template:\n\n${template}\n\n` +
                            compiled.errors.map(e => `- ${e}`).join('\n') +
                            '\n', vm);
                    }
                }
                if (compiled.tips && compiled.tips.length) {
                    if (options.outputSourceRange) {
                        compiled.tips.forEach(e => tip(e.msg, vm));
                    }
                    else {
                        compiled.tips.forEach(msg => tip(msg, vm));
                    }
                }
            }
            // turn code into functions
            const res = {};
            const fnGenErrors = [];
            res.render = createFunction(compiled.render, fnGenErrors);
            res.staticRenderFns = compiled.staticRenderFns.map(code => {
                return createFunction(code, fnGenErrors);
            });
            // check function generation errors.
            // this should only happen if there is a bug in the compiler itself.
            // mostly for codegen development use
            /* istanbul ignore if */
            {
                if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
                    warn(`Failed to generate render function:\n\n` +
                        fnGenErrors
                            .map(({ err, code }) => `${err.toString()} in\n\n${code}\n`)
                            .join('\n'), vm);
                }
            }
            return (cache[key] = res);
        };
    }

    function createCompilerCreator(baseCompile) {
        return function createCompiler(baseOptions) {
            function compile(template, options) {
                const finalOptions = Object.create(baseOptions);
                const errors = [];
                const tips = [];
                let warn = (msg, range, tip) => {
                    (tip ? tips : errors).push(msg);
                };
                if (options) {
                    if (options.outputSourceRange) {
                        // $flow-disable-line
                        const leadingSpaceLength = template.match(/^\s*/)[0].length;
                        warn = (msg, range, tip) => {
                            const data = typeof msg === 'string' ? { msg } : msg;
                            if (range) {
                                if (range.start != null) {
                                    data.start = range.start + leadingSpaceLength;
                                }
                                if (range.end != null) {
                                    data.end = range.end + leadingSpaceLength;
                                }
                            }
                            (tip ? tips : errors).push(data);
                        };
                    }
                    // merge custom modules
                    if (options.modules) {
                        finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
                    }
                    // merge custom directives
                    if (options.directives) {
                        finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
                    }
                    // copy other options
                    for (const key in options) {
                        if (key !== 'modules' && key !== 'directives') {
                            finalOptions[key] = options[key];
                        }
                    }
                }
                finalOptions.warn = warn;
                const compiled = baseCompile(template.trim(), finalOptions);
                {
                    detectErrors(compiled.ast, warn);
                }
                compiled.errors = errors;
                compiled.tips = tips;
                return compiled;
            }
            return {
                compile,
                compileToFunctions: createCompileToFunctionFn(compile)
            };
        };
    }

    // `createCompilerCreator` allows creating compilers that use alternative
    // parser/optimizer/codegen, e.g the SSR optimizing compiler.
    // Here we just export a default compiler using the default parts.
    const createCompiler = createCompilerCreator(function baseCompile(template, options) {
        const ast = parse(template.trim(), options);
        if (options.optimize !== false) {
            optimize(ast, options);
        }
        const code = generate(ast, options);
        return {
            ast,
            render: code.render,
            staticRenderFns: code.staticRenderFns
        };
    });

    const { compile, compileToFunctions } = createCompiler(baseOptions);

    // check whether current browser encodes a char inside attribute values
    let div;
    function getShouldDecode(href) {
        div = div || document.createElement('div');
        div.innerHTML = href ? `<a href="\n"/>` : `<div a="\n"/>`;
        return div.innerHTML.indexOf('&#10;') > 0;
    }
    // #3663: IE encodes newlines inside attribute values while other browsers don't
    const shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
    // #6828: chrome encodes content in a[href]
    const shouldDecodeNewlinesForHref = inBrowser
        ? getShouldDecode(true)
        : false;

    const idToTemplate = cached(id => {
        const el = query(id);
        return el && el.innerHTML;
    });
    const mount = Vue.prototype.$mount;
    Vue.prototype.$mount = function (el, hydrating) {
        el = el && query(el);
        /* istanbul ignore if */
        if (el === document.body || el === document.documentElement) {
            warn$2(`Do not mount Vue to <html> or <body> - mount to normal elements instead.`);
            return this;
        }
        const options = this.$options;
        // resolve template/el and convert to render function
        if (!options.render) {
            let template = options.template;
            if (template) {
                if (typeof template === 'string') {
                    if (template.charAt(0) === '#') {
                        template = idToTemplate(template);
                        /* istanbul ignore if */
                        if (!template) {
                            warn$2(`Template element not found or is empty: ${options.template}`, this);
                        }
                    }
                }
                else if (template.nodeType) {
                    template = template.innerHTML;
                }
                else {
                    {
                        warn$2('invalid template option:' + template, this);
                    }
                    return this;
                }
            }
            else if (el) {
                // @ts-expect-error
                template = getOuterHTML(el);
            }
            if (template) {
                /* istanbul ignore if */
                if (config.performance && mark) {
                    mark('compile');
                }
                const { render, staticRenderFns } = compileToFunctions(template, {
                    outputSourceRange: true,
                    shouldDecodeNewlines,
                    shouldDecodeNewlinesForHref,
                    delimiters: options.delimiters,
                    comments: options.comments
                }, this);
                options.render = render;
                options.staticRenderFns = staticRenderFns;
                /* istanbul ignore if */
                if (config.performance && mark) {
                    mark('compile end');
                    measure(`vue ${this._name} compile`, 'compile', 'compile end');
                }
            }
        }
        return mount.call(this, el, hydrating);
    };
    /**
     * Get outerHTML of elements, taking care
     * of SVG elements in IE as well.
     */
    function getOuterHTML(el) {
        if (el.outerHTML) {
            return el.outerHTML;
        }
        else {
            const container = document.createElement('div');
            container.appendChild(el.cloneNode(true));
            return container.innerHTML;
        }
    }
    Vue.compile = compileToFunctions;

    // export type EffectScheduler = (...args: any[]) => any
    /**
     * @internal since we are not exposing this in Vue 2, it's used only for
     * internal testing.
     */
    function effect(fn, scheduler) {
        const watcher = new Watcher(currentInstance, fn, noop, {
            sync: true
        });
        if (scheduler) {
            watcher.update = () => {
                scheduler(() => watcher.run());
            };
        }
    }

    extend(Vue, vca);
    Vue.effect = effect;

    module.exports = Vue;

    /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

    /***/ }),

    /***/ "./node_modules/vue/dist/vue.common.js":
    /*!*********************************************!*\
      !*** ./node_modules/vue/dist/vue.common.js ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    if (false) {} else {
      module.exports = __webpack_require__(/*! ./vue.common.dev.js */ "./node_modules/vue/dist/vue.common.dev.js")
    }


    /***/ }),

    /***/ "./node_modules/webpack/buildin/global.js":
    /*!***********************************!*\
      !*** (webpack)/buildin/global.js ***!
      \***********************************/
    /*! no static exports found */
    /***/ (function(module, exports) {

    var g;

    // This works in non-strict mode
    g = (function() {
        return this;
    })();

    try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
    } catch (e) {
        // This works if the window reference is available
        if (typeof window === "object") g = window;
    }

    // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}

    module.exports = g;


    /***/ }),

    /***/ "./node_modules/webpack/buildin/module.js":
    /*!***********************************!*\
      !*** (webpack)/buildin/module.js ***!
      \***********************************/
    /*! no static exports found */
    /***/ (function(module, exports) {

    module.exports = function(module) {
        if (!module.webpackPolyfill) {
            module.deprecate = function() {};
            module.paths = [];
            // module.parent = undefined by default
            if (!module.children) module.children = [];
            Object.defineProperty(module, "loaded", {
                enumerable: true,
                get: function() {
                    return module.l;
                }
            });
            Object.defineProperty(module, "id", {
                enumerable: true,
                get: function() {
                    return module.i;
                }
            });
            module.webpackPolyfill = 1;
        }
        return module;
    };


    /***/ }),

    /***/ "./resources/js/app.js":
    /*!*****************************!*\
      !*** ./resources/js/app.js ***!
      \*****************************/
    /*! no exports provided */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
    /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
    /* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);


    Object(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__["createInertiaApp"])({
      resolve: function resolve(name) {
        return __webpack_require__("./resources/js/pages sync recursive ^\\.\\/.*$")("./".concat(name));
      },
      setup: function setup(_ref) {
        var el = _ref.el,
          App = _ref.App,
          props = _ref.props,
          plugin = _ref.plugin;
        vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(plugin);
        new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
          render: function render(h) {
            return h(App, props);
          }
        }).$mount(el);
      }
    });

    /***/ }),

    /***/ "./resources/js/modal.js":
    /*!*******************************!*\
      !*** ./resources/js/modal.js ***!
      \*******************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var modal = function modal() {
      var modal = document.querySelector(".boxModal");
      var trigger = document.querySelector(".trigger");
      var closeButton = document.querySelector(".close-button");
      trigger.addEventListener("click", toggleModal);
      closeButton.addEventListener("click", toggleModal);
      function toggleModal() {
        modal.classList.toggle("show-modal");
      }
    };
    /* harmony default export */ __webpack_exports__["default"] = (modal);

    /***/ }),

    /***/ "./resources/js/pages sync recursive ^\\.\\/.*$":
    /*!******************************************!*\
      !*** ./resources/js/pages sync ^\.\/.*$ ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    var map = {
        "./BoxDetail": "./resources/js/pages/BoxDetail.vue",
        "./BoxDetail.vue": "./resources/js/pages/BoxDetail.vue",
        "./Home": "./resources/js/pages/Home.vue",
        "./Home.vue": "./resources/js/pages/Home.vue",
        "./layouts/Footer": "./resources/js/pages/layouts/Footer.vue",
        "./layouts/Footer.vue": "./resources/js/pages/layouts/Footer.vue",
        "./layouts/Header": "./resources/js/pages/layouts/Header.vue",
        "./layouts/Header.vue": "./resources/js/pages/layouts/Header.vue",
        "./layouts/Main": "./resources/js/pages/layouts/Main.vue",
        "./layouts/Main.vue": "./resources/js/pages/layouts/Main.vue",
        "./modals/Congratz": "./resources/js/pages/modals/Congratz.vue",
        "./modals/Congratz.vue": "./resources/js/pages/modals/Congratz.vue",
        "./modals/Rule": "./resources/js/pages/modals/Rule.vue",
        "./modals/Rule.vue": "./resources/js/pages/modals/Rule.vue"
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
    webpackContext.id = "./resources/js/pages sync recursive ^\\.\\/.*$";

    /***/ }),

    /***/ "./resources/js/pages/BoxDetail.vue":
    /*!******************************************!*\
      !*** ./resources/js/pages/BoxDetail.vue ***!
      \******************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _BoxDetail_vue_vue_type_template_id_de368e7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxDetail.vue?vue&type=template&id=de368e7a& */ "./resources/js/pages/BoxDetail.vue?vue&type=template&id=de368e7a&");
    /* harmony import */ var _BoxDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoxDetail.vue?vue&type=script&lang=js& */ "./resources/js/pages/BoxDetail.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





    /* normalize component */

    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
      _BoxDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
      _BoxDetail_vue_vue_type_template_id_de368e7a___WEBPACK_IMPORTED_MODULE_0__["render"],
      _BoxDetail_vue_vue_type_template_id_de368e7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
      false,
      null,
      null,
      null

    )

    /* hot reload */
    if (false) { var api; }
    component.options.__file = "resources/js/pages/BoxDetail.vue"
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

    /***/ }),

    /***/ "./resources/js/pages/BoxDetail.vue?vue&type=script&lang=js&":
    /*!*******************************************************************!*\
      !*** ./resources/js/pages/BoxDetail.vue?vue&type=script&lang=js& ***!
      \*******************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BoxDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BoxDetail.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

    /***/ }),

    /***/ "./resources/js/pages/BoxDetail.vue?vue&type=template&id=de368e7a&":
    /*!*************************************************************************!*\
      !*** ./resources/js/pages/BoxDetail.vue?vue&type=template&id=de368e7a& ***!
      \*************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxDetail_vue_vue_type_template_id_de368e7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./BoxDetail.vue?vue&type=template&id=de368e7a& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BoxDetail.vue?vue&type=template&id=de368e7a&");
    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxDetail_vue_vue_type_template_id_de368e7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxDetail_vue_vue_type_template_id_de368e7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



    /***/ }),

    /***/ "./resources/js/pages/Home.vue":
    /*!*************************************!*\
      !*** ./resources/js/pages/Home.vue ***!
      \*************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=b3c5cf30& */ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");
    /* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





    /* normalize component */

    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
      _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
      _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["render"],
      _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
      false,
      null,
      null,
      null

    )

    /* hot reload */
    if (false) { var api; }
    component.options.__file = "resources/js/pages/Home.vue"
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

    /***/ }),

    /***/ "./resources/js/pages/Home.vue?vue&type=script&lang=js&":
    /*!**************************************************************!*\
      !*** ./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
      \**************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

    /***/ }),

    /***/ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
    /*!********************************************************************!*\
      !*** ./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
      \********************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=b3c5cf30& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");
    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



    /***/ }),

    /***/ "./resources/js/pages/layouts/Footer.vue":
    /*!***********************************************!*\
      !*** ./resources/js/pages/layouts/Footer.vue ***!
      \***********************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _Footer_vue_vue_type_template_id_811a6dac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=811a6dac& */ "./resources/js/pages/layouts/Footer.vue?vue&type=template&id=811a6dac&");
    /* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/pages/layouts/Footer.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





    /* normalize component */

    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
      _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
      _Footer_vue_vue_type_template_id_811a6dac___WEBPACK_IMPORTED_MODULE_0__["render"],
      _Footer_vue_vue_type_template_id_811a6dac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
      false,
      null,
      null,
      null

    )

    /* hot reload */
    if (false) { var api; }
    component.options.__file = "resources/js/pages/layouts/Footer.vue"
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

    /***/ }),

    /***/ "./resources/js/pages/layouts/Footer.vue?vue&type=script&lang=js&":
    /*!************************************************************************!*\
      !*** ./resources/js/pages/layouts/Footer.vue?vue&type=script&lang=js& ***!
      \************************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/Footer.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

    /***/ }),

    /***/ "./resources/js/pages/layouts/Footer.vue?vue&type=template&id=811a6dac&":
    /*!******************************************************************************!*\
      !*** ./resources/js/pages/layouts/Footer.vue?vue&type=template&id=811a6dac& ***!
      \******************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_811a6dac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=811a6dac& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/Footer.vue?vue&type=template&id=811a6dac&");
    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_811a6dac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_811a6dac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



    /***/ }),

    /***/ "./resources/js/pages/layouts/Header.vue":
    /*!***********************************************!*\
      !*** ./resources/js/pages/layouts/Header.vue ***!
      \***********************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _Header_vue_vue_type_template_id_3eb5a5c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=3eb5a5c8& */ "./resources/js/pages/layouts/Header.vue?vue&type=template&id=3eb5a5c8&");
    /* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/pages/layouts/Header.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





    /* normalize component */

    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
      _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
      _Header_vue_vue_type_template_id_3eb5a5c8___WEBPACK_IMPORTED_MODULE_0__["render"],
      _Header_vue_vue_type_template_id_3eb5a5c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
      false,
      null,
      null,
      null

    )

    /* hot reload */
    if (false) { var api; }
    component.options.__file = "resources/js/pages/layouts/Header.vue"
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

    /***/ }),

    /***/ "./resources/js/pages/layouts/Header.vue?vue&type=script&lang=js&":
    /*!************************************************************************!*\
      !*** ./resources/js/pages/layouts/Header.vue?vue&type=script&lang=js& ***!
      \************************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/Header.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

    /***/ }),

    /***/ "./resources/js/pages/layouts/Header.vue?vue&type=template&id=3eb5a5c8&":
    /*!******************************************************************************!*\
      !*** ./resources/js/pages/layouts/Header.vue?vue&type=template&id=3eb5a5c8& ***!
      \******************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_3eb5a5c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=3eb5a5c8& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/Header.vue?vue&type=template&id=3eb5a5c8&");
    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_3eb5a5c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_3eb5a5c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



    /***/ }),

    /***/ "./resources/js/pages/layouts/Main.vue":
    /*!*********************************************!*\
      !*** ./resources/js/pages/layouts/Main.vue ***!
      \*********************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _Main_vue_vue_type_template_id_621b0c08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=621b0c08& */ "./resources/js/pages/layouts/Main.vue?vue&type=template&id=621b0c08&");
    /* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/pages/layouts/Main.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





    /* normalize component */

    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
      _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
      _Main_vue_vue_type_template_id_621b0c08___WEBPACK_IMPORTED_MODULE_0__["render"],
      _Main_vue_vue_type_template_id_621b0c08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
      false,
      null,
      null,
      null

    )

    /* hot reload */
    if (false) { var api; }
    component.options.__file = "resources/js/pages/layouts/Main.vue"
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

    /***/ }),

    /***/ "./resources/js/pages/layouts/Main.vue?vue&type=script&lang=js&":
    /*!**********************************************************************!*\
      !*** ./resources/js/pages/layouts/Main.vue?vue&type=script&lang=js& ***!
      \**********************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/Main.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

    /***/ }),

    /***/ "./resources/js/pages/layouts/Main.vue?vue&type=template&id=621b0c08&":
    /*!****************************************************************************!*\
      !*** ./resources/js/pages/layouts/Main.vue?vue&type=template&id=621b0c08& ***!
      \****************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_621b0c08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=621b0c08& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/Main.vue?vue&type=template&id=621b0c08&");
    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_621b0c08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_621b0c08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



    /***/ }),

    /***/ "./resources/js/pages/modals/Congratz.vue":
    /*!************************************************!*\
      !*** ./resources/js/pages/modals/Congratz.vue ***!
      \************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _Congratz_vue_vue_type_template_id_b91e532c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Congratz.vue?vue&type=template&id=b91e532c& */ "./resources/js/pages/modals/Congratz.vue?vue&type=template&id=b91e532c&");
    /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

    var script = {}


    /* normalize component */

    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
      script,
      _Congratz_vue_vue_type_template_id_b91e532c___WEBPACK_IMPORTED_MODULE_0__["render"],
      _Congratz_vue_vue_type_template_id_b91e532c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
      false,
      null,
      null,
      null

    )

    /* hot reload */
    if (false) { var api; }
    component.options.__file = "resources/js/pages/modals/Congratz.vue"
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

    /***/ }),

    /***/ "./resources/js/pages/modals/Congratz.vue?vue&type=template&id=b91e532c&":
    /*!*******************************************************************************!*\
      !*** ./resources/js/pages/modals/Congratz.vue?vue&type=template&id=b91e532c& ***!
      \*******************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Congratz_vue_vue_type_template_id_b91e532c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Congratz.vue?vue&type=template&id=b91e532c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/modals/Congratz.vue?vue&type=template&id=b91e532c&");
    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Congratz_vue_vue_type_template_id_b91e532c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Congratz_vue_vue_type_template_id_b91e532c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



    /***/ }),

    /***/ "./resources/js/pages/modals/Rule.vue":
    /*!********************************************!*\
      !*** ./resources/js/pages/modals/Rule.vue ***!
      \********************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _Rule_vue_vue_type_template_id_578b66cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rule.vue?vue&type=template&id=578b66cc& */ "./resources/js/pages/modals/Rule.vue?vue&type=template&id=578b66cc&");
    /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

    var script = {}


    /* normalize component */

    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
      script,
      _Rule_vue_vue_type_template_id_578b66cc___WEBPACK_IMPORTED_MODULE_0__["render"],
      _Rule_vue_vue_type_template_id_578b66cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
      false,
      null,
      null,
      null

    )

    /* hot reload */
    if (false) { var api; }
    component.options.__file = "resources/js/pages/modals/Rule.vue"
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

    /***/ }),

    /***/ "./resources/js/pages/modals/Rule.vue?vue&type=template&id=578b66cc&":
    /*!***************************************************************************!*\
      !*** ./resources/js/pages/modals/Rule.vue?vue&type=template&id=578b66cc& ***!
      \***************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Rule_vue_vue_type_template_id_578b66cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Rule.vue?vue&type=template&id=578b66cc& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/modals/Rule.vue?vue&type=template&id=578b66cc&");
    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Rule_vue_vue_type_template_id_578b66cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

    /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Rule_vue_vue_type_template_id_578b66cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



    /***/ }),

    /***/ "./resources/sass/app.scss":
    /*!*********************************!*\
      !*** ./resources/sass/app.scss ***!
      \*********************************/
    /*! no static exports found */
    /***/ (function(module, exports) {

    // removed by extract-text-webpack-plugin

    /***/ }),

    /***/ 0:
    /*!*************************************************************!*\
      !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
      \*************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {

    __webpack_require__(/*! /var/www/html/gift_box_lucky_draw/resources/js/app.js */"./resources/js/app.js");
    module.exports = __webpack_require__(/*! /var/www/html/gift_box_lucky_draw/resources/sass/app.scss */"./resources/sass/app.scss");


    /***/ }),

    /***/ 1:
    /*!********************************!*\
      !*** ./util.inspect (ignored) ***!
      \********************************/
    /*! no static exports found */
    /***/ (function(module, exports) {

    /* (ignored) */

    /***/ })

    /******/ });

