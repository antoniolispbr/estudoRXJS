(()=>{"use strict";var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function n(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}function r(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function i(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function u(t){return this instanceof u?(this.v=t,this):new u(t)}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var c=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function s(t){return"function"==typeof t}var a,l=((a=function(t){var e;e=this,Error.call(e),e.stack=(new Error).stack,this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}).prototype=Object.create(Error.prototype),a.prototype.constructor=a,a);function f(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var h=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var e;return t.prototype.unsubscribe=function(){var t,e,n,u,c;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var f=r(a),h=f.next();!h.done;h=f.next())h.value.remove(this)}catch(e){t={error:e}}finally{try{h&&!h.done&&(e=f.return)&&e.call(f)}finally{if(t)throw t.error}}else a.remove(this);var p=this.initialTeardown;if(s(p))try{p()}catch(t){c=t instanceof l?t.errors:[t]}var v=this._finalizers;if(v){this._finalizers=null;try{for(var y=r(v),b=y.next();!b.done;b=y.next()){var m=b.value;try{d(m)}catch(t){c=null!=c?c:[],t instanceof l?c=i(i([],o(c)),o(t.errors)):c.push(t)}}}catch(t){n={error:t}}finally{try{b&&!b.done&&(u=y.return)&&u.call(y)}finally{if(n)throw n.error}}}if(c)throw new l(c)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)d(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&f(e,t)},t.prototype.remove=function(e){var n=this._finalizers;n&&f(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}();function p(t){return t instanceof h||t&&"closed"in t&&s(t.remove)&&s(t.add)&&s(t.unsubscribe)}function d(t){s(t)?t():t.unsubscribe()}h.EMPTY;var v={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},y={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var u=y.delegate;return(null==u?void 0:u.setTimeout)?u.setTimeout.apply(u,i([t,e],o(n))):setTimeout.apply(void 0,i([t,e],o(n)))},clearTimeout:function(t){var e=y.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function b(t){y.setTimeout((function(){var e=v.onUnhandledError;if(!e)throw t;e(t)}))}function m(){}var w=x("C",void 0,void 0);function x(t,e,n){return{kind:t,value:e,error:n}}var g=null,_=function(t){function n(e){var n=t.call(this)||this;return n.isStopped=!1,e?(n.destination=e,p(e)&&e.add(n)):n.destination=O,n}return e(n,t),n.create=function(t,e,n){return new I(t,e,n)},n.prototype.next=function(t){this.isStopped?P(function(t){return x("N",t,void 0)}(t),this):this._next(t)},n.prototype.error=function(t){this.isStopped?P(x("E",void 0,t),this):(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped?P(w,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(h),S=Function.prototype.bind;function E(t,e){return S.call(t,e)}var T=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(t){A(t)}},t.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(t){A(t)}else A(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){A(t)}},t}(),I=function(t){function n(e,n,r){var o,i,u=t.call(this)||this;return s(e)||!e?o={next:null!=e?e:void 0,error:null!=n?n:void 0,complete:null!=r?r:void 0}:u&&v.useDeprecatedNextContext?((i=Object.create(e)).unsubscribe=function(){return u.unsubscribe()},o={next:e.next&&E(e.next,i),error:e.error&&E(e.error,i),complete:e.complete&&E(e.complete,i)}):o=e,u.destination=new T(o),u}return e(n,t),n}(_);function A(t){var e;v.useDeprecatedSynchronousErrorHandling?(e=t,v.useDeprecatedSynchronousErrorHandling&&g&&(g.errorThrown=!0,g.error=e)):b(t)}function P(t,e){var n=v.onStoppedNotification;n&&y.setTimeout((function(){return n(t,e)}))}var O={closed:!0,next:m,error:function(t){throw t},complete:m},j="function"==typeof Symbol&&Symbol.observable||"@@observable";function k(t){return t}var L=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r,o=this,i=(r=t)&&r instanceof _||function(t){return t&&s(t.next)&&s(t.error)&&s(t.complete)}(r)&&p(r)?t:new I(t,e,n);return function(t){if(v.useDeprecatedSynchronousErrorHandling){var e=!g;if(e&&(g={errorThrown:!1,error:null}),t(),e){var n=g,r=n.errorThrown,o=n.error;if(g=null,r)throw o}}else t()}((function(){var t=o,e=t.operator,n=t.source;i.add(e?e.call(i,n):n?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=z(e))((function(e,r){var o=new I({next:function(e){try{t(e)}catch(t){r(t),o.unsubscribe()}},error:r,complete:e});n.subscribe(o)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[j]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return(0===(n=t).length?k:1===n.length?n[0]:function(t){return n.reduce((function(t,e){return e(t)}),t)})(this);var n},t.prototype.toPromise=function(t){var e=this;return new(t=z(t))((function(t,n){var r;e.subscribe((function(t){return r=t}),(function(t){return n(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function z(t){var e;return null!==(e=null!=t?t:v.Promise)&&void 0!==e?e:Promise}var C="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function D(t){if(t instanceof L)return t;if(null!=t){if(function(t){return s(t[j])}(t))return l=t,new L((function(t){var e=l[j]();if(s(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(c(t))return a=t,new L((function(t){for(var e=0;e<a.length&&!t.closed;e++)t.next(a[e]);t.complete()}));if(s(null==(i=t)?void 0:i.then))return o=t,new L((function(t){o.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,b)}));if(function(t){return Symbol.asyncIterator&&s(null==t?void 0:t[Symbol.asyncIterator])}(t))return N(t);if(function(t){return s(null==t?void 0:t[C])}(t))return e=t,new L((function(t){var n,o;try{for(var i=r(e),u=i.next();!u.done;u=i.next()){var c=u.value;if(t.next(c),t.closed)return}}catch(t){n={error:t}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}t.complete()}));if(function(t){return s(null==t?void 0:t.getReader)}(t))return N(function(t){return function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||s(t,e)}))})}function s(t,e){try{(n=o[t](e)).value instanceof u?Promise.resolve(n.value.v).then(a,l):f(i[0][2],n)}catch(t){f(i[0][3],t)}var n}function a(t){s("next",t)}function l(t){s("throw",t)}function f(t,e){t(e),i.shift(),i.length&&s(i[0][0],i[0][1])}}(this,arguments,(function(){var e,r,o;return n(this,(function(n){switch(n.label){case 0:e=t.getReader(),n.label=1;case 1:n.trys.push([1,,9,10]),n.label=2;case 2:return[4,u(e.read())];case 3:return r=n.sent(),o=r.value,r.done?[4,u(void 0)]:[3,5];case 4:return[2,n.sent()];case 5:return[4,u(o)];case 6:return[4,n.sent()];case 7:return n.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}(t))}var e,o,i,a,l;throw function(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}(t)}function N(t){return new L((function(e){(function(t,e){var o,i,u,c,s,a,l,f;return s=this,a=void 0,f=function(){var s,a;return n(this,(function(n){switch(n.label){case 0:n.trys.push([0,5,6,11]),o=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=r(t),e={},o("next"),o("throw"),o("return"),e[Symbol.asyncIterator]=function(){return this},e);function o(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){!function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)}(r,o,(e=t[n](e)).done,e.value)}))}}}(t),n.label=1;case 1:return[4,o.next()];case 2:if((i=n.sent()).done)return[3,4];if(s=i.value,e.next(s),e.closed)return[2];n.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=n.sent(),u={error:a},[3,11];case 6:return n.trys.push([6,,9,10]),i&&!i.done&&(c=o.return)?[4,c.call(o)]:[3,8];case 7:n.sent(),n.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}}))},new((l=void 0)||(l=Promise))((function(t,e){function n(t){try{o(f.next(t))}catch(t){e(t)}}function r(t){try{o(f.throw(t))}catch(t){e(t)}}function o(e){var o;e.done?t(e.value):(o=e.value,o instanceof l?o:new l((function(t){t(o)}))).then(n,r)}o((f=f.apply(s,a||[])).next())}))})(t,e).catch((function(t){return e.error(t)}))}))}function U(t){return function(e){if(function(t){return s(null==t?void 0:t.lift)}(e))return e.lift((function(e){try{return t(e,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}function H(t,e,n,r,o){return new R(t,e,n,r,o)}var R=function(t){function n(e,n,r,o,i,u){var c=t.call(this,e)||this;return c.onFinalize=i,c.shouldUnsubscribe=u,c._next=n?function(t){try{n(t)}catch(t){e.error(t)}}:t.prototype._next,c._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=r?function(){try{r()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,c}return e(n,t),n.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;t.prototype.unsubscribe.call(this),!n&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}},n}(_);function Y(t,e){return U((function(n,r){var o=0;n.subscribe(H(r,(function(n){r.next(t.call(e,n,o++))})))}))}function q(t,e,n){return void 0===n&&(n=1/0),s(e)?q((function(n,r){return Y((function(t,o){return e(n,t,r,o)}))(D(t(n,r)))}),n):("number"==typeof e&&(n=e),U((function(e,r){return function(t,e,n,r,o,i,u,c){var s=[],a=0,l=0,f=!1,h=function(){!f||s.length||a||e.complete()},p=function(t){return a<r?d(t):s.push(t)},d=function(t){a++;var o=!1;D(n(t,l++)).subscribe(H(e,(function(t){e.next(t)}),(function(){o=!0}),void 0,(function(){if(o)try{a--;for(var t=function(){var t=s.shift();d(t)};s.length&&a<r;)t();h()}catch(t){e.error(t)}})))};return t.subscribe(H(e,p,(function(){f=!0,h()}))),function(){}}(e,r,t,n)})))}var F=Array.isArray;var M=["addListener","removeListener"],B=["addEventListener","removeEventListener"],G=["on","off"];function J(t,e){return function(n){return function(r){return t[n](e,r)}}}var X=function(t){function n(e,n){return t.call(this)||this}return e(n,t),n.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},n}(h),K={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var u=K.delegate;return(null==u?void 0:u.setInterval)?u.setInterval.apply(u,i([t,e],o(n))):setInterval.apply(void 0,i([t,e],o(n)))},clearInterval:function(t){var e=K.delegate;return((null==e?void 0:e.clearInterval)||clearInterval)(t)},delegate:void 0},Q=function(t){function n(e,n){var r=t.call(this,e,n)||this;return r.scheduler=e,r.work=n,r.pending=!1,r}return e(n,t),n.prototype.schedule=function(t,e){var n;if(void 0===e&&(e=0),this.closed)return this;this.state=t;var r=this.id,o=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(o,this.id,e),this},n.prototype.requestAsyncId=function(t,e,n){return void 0===n&&(n=0),K.setInterval(t.flush.bind(t,this),n)},n.prototype.recycleAsyncId=function(t,e,n){if(void 0===n&&(n=0),null!=n&&this.delay===n&&!1===this.pending)return e;null!=e&&K.clearInterval(e)},n.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,e){var n,r=!1;try{this.work(t)}catch(t){r=!0,n=t||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),n},n.prototype.unsubscribe=function(){if(!this.closed){var e=this.id,n=this.scheduler,r=n.actions;this.work=this.state=this.scheduler=null,this.pending=!1,f(r,this),null!=e&&(this.id=this.recycleAsyncId(n,e,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},n}(X),V={now:function(){return(V.delegate||Date).now()},delegate:void 0},W=function(){function t(e,n){void 0===n&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(t,e,n){return void 0===e&&(e=0),new this.schedulerActionCtor(this,t).schedule(n,e)},t.now=V.now,t}(),Z=new(function(t){function n(e,n){void 0===n&&(n=W.now);var r=t.call(this,e,n)||this;return r.actions=[],r._active=!1,r}return e(n,t),n.prototype.flush=function(t){var e=this.actions;if(this._active)e.push(t);else{var n;this._active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}},n}(W))(Q);var $,tt=document.getElementById("button"),et=document.getElementById("output"),nt=function t(e,n,r,u){if(s(r)&&(u=r,r=void 0),u)return t(e,n,r).pipe((a=u,Y((function(t){return function(t,e){return F(e)?t.apply(void 0,i([],o(e))):t(e)}(a,t)}))));var a,l=o(function(t){return s(t.addEventListener)&&s(t.removeEventListener)}(e)?B.map((function(t){return function(o){return e[t](n,o,r)}})):function(t){return s(t.addListener)&&s(t.removeListener)}(e)?M.map(J(e,n)):function(t){return s(t.on)&&s(t.off)}(e)?G.map(J(e,n)):[],2),f=l[0],h=l[1];if(!f&&c(e))return q((function(e){return t(e,n,r)}))(D(e));if(!f)throw new TypeError("Invalid event target");return new L((function(t){var e=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.next(1<e.length?e:e[0])};return f(e),function(){return h(e)}}))}(tt,"click");function rt(t){return new L((function(e){var n=new XMLHttpRequest;et.innerText="",n.addEventListener("load",(function(){if(200==n.status){var t=JSON.parse(n.responseText);e.next(t),e.complete()}else e.error(n.statusText)})),n.open("GET",t),n.send()})).pipe(function(t){var e;void 0===t&&(t=1/0);var n=(e=t&&"object"==typeof t?t:{count:t}).count,r=void 0===n?1/0:n,o=e.delay,i=e.resetOnSuccess,u=void 0!==i&&i;return r<=0?k:U((function(t,e){var n,i=0,c=function(){var a=!1;n=t.subscribe(H(e,(function(t){u&&(i=0),e.next(t)}),void 0,(function(t){if(i++<r){var u=function(){n?(n.unsubscribe(),n=null,c()):a=!0};if(null!=o){var l="number"==typeof o?function(t,e,n){void 0===t&&(t=0),void 0===n&&(n=Z);var r,o=-1;return null!=e&&((r=e)&&s(r.schedule)?n=e:o=e),new L((function(e){var r=function(t){return t instanceof Date&&!isNaN(t)}(t)?+t-n.now():t;r<0&&(r=0);var i=0;return n.schedule((function(){e.closed||(e.next(i++),0<=o?this.schedule(void 0,o):e.complete())}),r)}))}(o):D(o(t,i)),f=H(e,(function(){f.unsubscribe(),u()}),(function(){e.complete()}));l.subscribe(f)}else u()}else e.error(t)}))),a&&(n.unsubscribe(),n=null,c())};c()}))}({count:3,delay:1e3}))}nt.pipe(($=function(){return rt("./movies.json")},U((function(t,e){var n=null,r=!1,o=function(){return r&&!n&&e.complete()};t.subscribe(H(e,(function(t){null==n||n.unsubscribe();0;D($()).subscribe(n=H(e,(function(t){return e.next(t)}),(function(){n=null,o()})))}),(function(){r=!0,o()})))})))).subscribe({next:function(t){t.forEach((function(t){var e=document.createElement("div");e.innerText=t.title,et.appendChild(e)}))},error:function(t){return console.log("Error: ".concat(t))},complete:function(){return console.log("Complete")}})})();