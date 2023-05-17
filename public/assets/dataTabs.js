/*!
 * dataTabs v0.11.7
 * https://github.com/VladimirIvanin/dataTabs/
 */
!function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=f.p+""+e+"."+$+".hot-update.js",t.appendChild(n)}function o(){return new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,o=f.p+""+$+".hot-update.json";n.open("GET",o,!0),n.timeout=1e4,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+o+" failed."));else{try{var a=JSON.parse(n.responseText)}catch(e){return void t(e)}e(a)}}})}function a(e){var t=D[e];if(!t)return f;var n=function(n){return t.hot.active?(D[n]?D[n].parents.indexOf(e)<0&&D[n].parents.push(e):(x=[e],v=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),x=[]),f(n)};for(var o in f)Object.prototype.hasOwnProperty.call(f,o)&&"e"!==o&&Object.defineProperty(n,o,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(t){f[e]=t}}}(o));return n.e=function(e){function t(){M--,"prepare"===C&&(j[e]||l(e),0===M&&0===_&&u())}return"ready"===C&&i("prepare"),M++,f.e(e).then(t,function(e){throw t(),e})},n}function s(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:c,apply:p,status:function(e){if(!e)return C;O.push(e)},addStatusHandler:function(e){O.push(e)},removeStatusHandler:function(e){var t=O.indexOf(e);t>=0&&O.splice(t,1)},data:T[e]};return v=void 0,t}function i(e){C=e;for(var t=0;t<O.length;t++)O[t].call(null,e)}function r(e){return+e+""===e?+e:e}function c(e){if("idle"!==C)throw new Error("check() is only allowed in idle status");return y=e,i("check"),o().then(function(e){if(!e)return i("idle"),null;S={},j={},I=e.c,m=e.h,i("prepare");var t=new Promise(function(e,t){b={resolve:e,reject:t}});g={};return l(0),"prepare"===C&&0===M&&0===_&&u(),t})}function d(e,t){if(I[e]&&S[e]){S[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0==--_&&0===M&&u()}}function l(e){I[e]?(S[e]=!0,_++,n(e)):j[e]=!0}function u(){i("ready");var e=b;if(b=null,e)if(y)p(y).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(r(n));e.resolve(t)}}function p(n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];e.indexOf(o)<0&&e.push(o)}}if("ready"!==C)throw new Error("apply() is only allowed in ready status");n=n||{};var a,s,c,d,l,u={},p=[],h={},v=function(){console.warn("[HMR] unexpected require("+y.moduleId+") to disposed module")};for(var b in g)if(Object.prototype.hasOwnProperty.call(g,b)){l=r(b);var y;y=g[b]?function(e){for(var t=[e],n={},a=t.slice().map(function(e){return{chain:[e],id:e}});a.length>0;){var s=a.pop(),i=s.id,r=s.chain;if((d=D[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:r,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:r,moduleId:i};for(var c=0;c<d.parents.length;c++){var l=d.parents[c],u=D[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:r.concat([l]),moduleId:i,parentId:l};t.indexOf(l)>=0||(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),o(n[l],[i])):(delete n[l],t.push(l),a.push({chain:r.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(l):{type:"disposed",moduleId:b};var w=!1,O=!1,_=!1,M="";switch(y.chain&&(M="\nUpdate propagation: "+y.chain.join(" -> ")),y.type){case"self-declined":n.onDeclined&&n.onDeclined(y),n.ignoreDeclined||(w=new Error("Aborted because of self decline: "+y.moduleId+M));break;case"declined":n.onDeclined&&n.onDeclined(y),n.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+y.moduleId+" in "+y.parentId+M));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(y),n.ignoreUnaccepted||(w=new Error("Aborted because "+l+" is not accepted"+M));break;case"accepted":n.onAccepted&&n.onAccepted(y),O=!0;break;case"disposed":n.onDisposed&&n.onDisposed(y),_=!0;break;default:throw new Error("Unexception type "+y.type)}if(w)return i("abort"),Promise.reject(w);if(O){h[l]=g[l],o(p,y.outdatedModules);for(l in y.outdatedDependencies)Object.prototype.hasOwnProperty.call(y.outdatedDependencies,l)&&(u[l]||(u[l]=[]),o(u[l],y.outdatedDependencies[l]))}_&&(o(p,[y.moduleId]),h[l]=v)}var j=[];for(s=0;s<p.length;s++)l=p[s],D[l]&&D[l].hot._selfAccepted&&j.push({module:l,errorHandler:D[l].hot._selfAccepted});i("dispose"),Object.keys(I).forEach(function(e){!1===I[e]&&t(e)});for(var S,E=p.slice();E.length>0;)if(l=E.pop(),d=D[l]){var H={},q=d.hot._disposeHandlers;for(c=0;c<q.length;c++)(a=q[c])(H);for(T[l]=H,d.hot.active=!1,delete D[l],c=0;c<d.children.length;c++){var P=D[d.children[c]];P&&((S=P.parents.indexOf(l))>=0&&P.parents.splice(S,1))}}var A,k;for(l in u)if(Object.prototype.hasOwnProperty.call(u,l)&&(d=D[l]))for(k=u[l],c=0;c<k.length;c++)A=k[c],(S=d.children.indexOf(A))>=0&&d.children.splice(S,1);i("apply"),$=m;for(l in h)Object.prototype.hasOwnProperty.call(h,l)&&(e[l]=h[l]);var B=null;for(l in u)if(Object.prototype.hasOwnProperty.call(u,l)){d=D[l],k=u[l];var N=[];for(s=0;s<k.length;s++)A=k[s],a=d.hot._acceptedDependencies[A],N.indexOf(a)>=0||N.push(a);for(s=0;s<N.length;s++){a=N[s];try{a(k)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:k[s],error:e}),n.ignoreErrored||B||(B=e)}}}for(s=0;s<j.length;s++){var U=j[s];l=U.module,x=[l];try{f(l)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,orginalError:e}),n.ignoreErrored||B||(B=t),B||(B=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||B||(B=e)}}return B?(i("fail"),Promise.reject(B)):(i("idle"),new Promise(function(e){e(p)}))}function f(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:s(t),parents:(w=x,x=[],w),children:[]};return e[t].call(n.exports,n,n.exports,a(t)),n.l=!0,n.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){d(e,t),h&&h(e,t)};var v,b,g,m,y=!0,$="d95589bc372b640e871a",T={},x=[],w=[],O=[],C="idle",_=0,M=0,j={},S={},I={},D={};f.m=e,f.c=D,f.i=function(e){return e},f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="",f.h=function(){return $},a(8)(f.s=8)}([function(e,t,n){"use strict";function o(e,t,n){var o=e.options,i=o.classes,c=e.$element.get(0).dataTabs.uuid,d=e.$element,l=null,u=e.$targets,p=e.$anchors,f=e.counterElements-1;if(t>f&&(t=f),$.isNumeric(t)){var h=p.eq(t),v=h.data(o.controls.anchor),b="[data-"+o.controls.container+"]";if(d=e.$element.find("[data-"+o.controls.anchor+'="'+v+'"]').filter(function(e,t){var n=!1,o=$(t).parents(b).get(0);return o&&o.dataTabs&&o.dataTabs.uuid&&(n=o.dataTabs.uuid==c),n}),!(d.get(0)&&d.get(0).dataTabs&&d.get(0).dataTabs.$target))return void console.warn("Для кнопки не назначен контент!",d);l=d.get(0).dataTabs.$target}(0,r.default)(e.options,"triggerTab:index",t),(0,r.default)(e.options,"triggerTab:$anchor",d);var g=d.hasClass(i.activeButton)&&l.is(":visible")&&l.hasClass(i.activeTab);o.initOpenTab||(g=l.is(":visible")),(0,r.default)(e.options,"triggerTab:isActive",g);var m=l.find(".swiper-container");g?o.useToggle&&(p.removeClass(i.activeButton).addClass(i.closeButton),u.removeClass(i.activeTab).addClass(i.closeTab),o.useJqMethods&&o.jqMethodClose&&$.each(u,function(e,t){$(t).is(":visible")&&$(t)[o.jqMethodClose](o.jqMethodCloseSpeed)}),a(m),o.pauseVideoAudio&&s(u.not("."+i.activeTab))):(p.removeClass(i.activeButton).addClass(i.closeButton),d.removeClass(i.closeButton).addClass(i.activeButton),u.removeClass(i.activeTab).addClass(i.closeTab),l.removeClass(i.closeTab).addClass(i.activeTab),o.useJqMethods&&o.jqMethodClose&&$.each(u,function(e,t){($(t).is(":visible")||$(t).hasClass(i.closeTab))&&$(t)[o.jqMethodClose](o.jqMethodCloseSpeed)}),o.useJqMethods&&o.jqMethodOpen&&l.is(":hidden")&&l[o.jqMethodOpen](o.jqMethodOpenSpeed),a(m),o.pauseVideoAudio&&s(u.not("."+i.activeTab))),e.states.activeIndex=t,e.options.onTab(e,d,l),$(document).trigger("datatabs:update",[c]),o.useToggle&&g?e.$element.addClass(i.closeContainer).removeClass(i.activeContainer):e.$element.addClass(i.activeContainer).removeClass(i.closeContainer)}function a(e){e&&e[0]&&e[0].swiper&&$.each(e,function(e,t){t.swiper.update&&t.swiper.update(),t.swiper.pagination&&t.swiper.pagination.render&&(t.swiper.pagination.render(),t.swiper.pagination.update())})}function s(e){e.each(function(e,t){$(t).find("video").each(function(){this.pause()}),$(t).find("audio").each(function(){this.pause()})})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(i)},function(e,t,n){"use strict";function o(e,t,n){e.debug&&(console.info("==DataTabs=="),console.log(t),n&&console.log(n),console.log("///////////////////"),console.log("///DataTabs///////"),console.log("/////////////////"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(){var e=this,t=e.options,n=e.$element,o=null;n.on("touchstart",function(e){clearInterval(o)}),n.hover(function(){clearInterval(o)},function(){o=setInterval(a,t.speedSwitching)}),setTimeout(function(){o=setInterval(a,t.speedSwitching)},0);var a=function(){var o=n.find("[data-"+t.controls.anchor+"]"),a=o.length,i=e.states.activeIndex||0,r=0;"number"==typeof i&&(r=++i),r>=a&&(r=0),n.hasClass(t.classes.hover)&&t.pauseOnHover||(0,s.default)(e,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(a)},function(e,t,n){"use strict";function o(){var e=this,t=e.options,n=e.counterElements-1;e.$next&&($(document).on("datatabs:update",function(o,s){s==e.$element.get(0).dataTabs.uuid&&(a(e,n).isNext?e.$next.removeClass(t.classes.disabledSwitcher):e.$next.addClass(t.classes.disabledSwitcher))}),e.$next.on(t.switchersEvent,function(t){t.preventDefault();var o=a(e,n);o.isNext&&(0,u.default)(e,o.next)})),e.$prev&&($(document).on("datatabs:update",function(o,a){a==e.$element.get(0).dataTabs.uuid&&(s(e,n).isPrev?e.$prev.removeClass(t.classes.disabledSwitcher):e.$prev.addClass(t.classes.disabledSwitcher))}),e.$prev.on(t.switchersEvent,function(t){t.preventDefault();var o=s(e,n);o.isPrev&&(0,u.default)(e,o.prev)}))}function a(e,t){var n=e.states.activeIndex+1,o=!0;return n>t&&(e.options.loop?n=0:o=!1),{next:n,isNext:o}}function s(e,t){var n=e.states.activeIndex-1,o=!0;return n<0&&(e.options.loop?n=t:o=!1),{prev:n,isPrev:o}}function i(){var e=this,t=e.options;e.$anchors.on(t.event,function(n){t.prevent&&n.preventDefault();var o=$(this).get(0);(0,u.default)(e,o.dataTabs.myIndex)})}function r(){var e=this;e.options.hideOnClosest&&$(document).on("click",function(t){0==$(t.target).closest(e.$element).length&&e.closeAllTabs()})}function c(){var e=this,t=(e.$element,e.options.useJqMethods&&e.options.jqMethodClose),n=e.options.useToggle,o=e.options.classes.activeTab,a=e.options.classes.closeTab,s=e.options.classes.activeButton,i=e.options.classes.closeButton,r=n?e.$targets:e.$targets.not("."+o),c=n?e.$anchors:e.$anchors.not("."+s);t&&r[e.options.jqMethodClose](),c.removeClass(s).addClass(i),r.removeClass(o).addClass(a)}function d(){var e=this,t=e.options,n=e.$element;n.hover(function(o){n.addClass(t.classes.hover),t.onMouseover(o,e)},function(o){n.removeClass(t.classes.hover),t.onMouseout(o,e),e.options.hideOnMouseout&&(e.options.mouseoutTimeOut?setTimeout(function(){e.$element.hasClass(t.classes.hover)||e.closeAllTabs()},e.options.mouseoutTimeOut):e.closeAllTabs())})}Object.defineProperty(t,"__esModule",{value:!0}),t.bindSwitchers=o,t.bindTriggers=i,t.hideOnClosest=r,t.closeAllTabs=c,t.bindHover=d;var l=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={event:"click",switchersEvent:"click",controls:{container:"tabs-container",control:"tab-control",anchor:"tab-anchor",box:"tab-box",target:"tab-target",next:"tab-next",prev:"tab-prev"},pauseOnHover:!0,activeIndex:1,speedSwitching:5e3,useToggle:!1,autoSwitching:!1,hideOnClosest:!1,hideOnMouseout:!1,prevent:!0,debug:!1,useHash:!0,useJqMethods:!0,loop:!1,initOpenTab:!0,pauseVideoAudio:!0,state:"tab",mouseoutTimeOut:!1,jqMethodOpenSpeed:300,jqMethodOpen:"fadeIn",jqMethodCloseSpeed:0,jqMethodClose:"hide",onInit:function(){},onTab:function(){},onMouseover:function(){},onMouseout:function(){},classes:{hover:"is-data-tabs-hover",disabledSwitcher:"is-switcher-disabled",disabledButton:"is-button-disabled",activeButton:"is-button-active",closeButton:"is-button-close",activeTab:"is-tab-active",closeTab:"is-tab-close",activeContainer:"is-active-container",closeContainer:"is-close-container"}};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(){var e=this,t=e.options,n=i(t.controls.anchor),o=i(t.controls.target),a=i(t.controls.container),s=null;e.activeHash&&"string"==typeof e.activeHash&&(s=e.$element.find(i(t.controls.anchor,e.activeHash.replace("#","")))),e.$element.is(a)||(console.warn("Не указан контейнер для блока табов: "+a),e.$element.attr("data-"+t.controls.container,"")),e.$element.get(0).dataTabs||(e.$element.get(0).dataTabs={},e.$element.get(0).dataTabs.list=[]),e.$element.get(0).dataTabs.instance=e,e.$element.get(0).dataTabs.uuid=(0,c.default)(),(0,l.default)(e.options,"self.$element.get(0).dataTabs",e.$element.get(0).dataTabs);var r=e.$element.get(0).dataTabs.uuid;e.$anchors=e.$element.find(n).filter(function(e,t){var n=!1,o=$(t).parents(a+":first").get(0);return o&&o.dataTabs&&o.dataTabs.uuid&&(n=o.dataTabs.uuid==r),n}),(0,l.default)(e.options,"self.$anchors",e.$anchors),e.$targets=e.$element.find(o).filter(function(e,t){var n=!1,o=$(t).parents(a).get(0);return o&&o.dataTabs&&o.dataTabs.uuid&&(n=o.dataTabs.uuid==r),n}),(0,l.default)(e.options,"self.$targets",e.$targets),!0===e.$anchors.is("[data-tab-active]")&&(e.options.activeIndex=[]),e.$anchors.each(function(n,o){var a=$(o).data(t.controls.anchor),s=i(t.controls.target,a),r=$(o).get(0);r.dataTabs||(r.dataTabs={}),r.dataTabs.myIndex=n,r.dataTabs.$target=null,$(o).is("[data-tab-active]")&&e.options.activeIndex.push(n),e.$targets.each(function(e,t){$(t).is(s)&&($(o).get(0).dataTabs.$target=$(t))}),(0,l.default)(e.options,"anchor.dataTabs",r.dataTabs),$(o).get(0).dataTabs.$target||console.warn("Для кнопки не назначен контент!",$(o))}),s&&s.length&&(e.options.activeIndex=s.index()+1),e.counterElements=e.$anchors.length}function s(){var e=this;e.$next=e.$element.find(i(e.options.controls.next)),e.$prev=e.$element.find(i(e.options.controls.prev))}function i(e,t){return"[data-"+(t?e+'="'+t+'"':e)+"]"}Object.defineProperty(t,"__esModule",{value:!0}),t.initElements=a,t.initSwitchers=s;var r=n(7),c=o(r),d=n(1),l=o(d)},function(e,t,n){"use strict";function o(e,t){var n=$.isNumeric(t),o=Array.isArray(t);if(n){var a=--t;a<0&&(a=0),(0,s.default)(e,a,"initTabs")}else o&&$.each(t,function(t,n){(0,s.default)(e,n,"initTabs")})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(a)},function(e,t,n){"use strict";function o(){var e=(new Date).getTime();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(2),i=o(s),r=n(6),c=o(r),d=n(5),l=n(3),u=n(4),p=o(u);!function(e,t,n){function o(t,n){this.element=t,this.$element=e(t),this.states={},this.activeHash=null;var o=this.getDataParam();this.options=e.extend(!0,{},p.default,n),this.options=e.extend(!0,{},this.options,o),this.init(n)}o.prototype.init=function(e){var n=this;"accordion"==n.options.state&&(n.options.activeIndex=e.activeIndex||null,n.options.useToggle=!0,0==n.options.jqMethodCloseSpeed&&(n.options.jqMethodCloseSpeed=n.options.jqMethodOpenSpeed)),n.options.useHash&&(n.activeHash=t.location.hash),n.initElements(),n.initSwitchers(),n.bindSwitchers(),n.bindTriggers(),n.bindHover(),n.hideOnClosest(),n.options.initOpenTab&&n.options.activeIndex&&n.initTabs(n,n.options.activeIndex),n.options.autoSwitching&&n.initAutoSwitching(),n.options.onInit(n)},o.prototype.initElements=d.initElements,o.prototype.initTabs=c.default,o.prototype.initAutoSwitching=i.default,o.prototype.initBinds=l.binding,o.prototype.initSwitchers=d.initSwitchers,o.prototype.bindSwitchers=l.bindSwitchers,o.prototype.bindTriggers=l.bindTriggers,o.prototype.bindHover=l.bindHover,o.prototype.closeAllTabs=l.closeAllTabs,o.prototype.hideOnClosest=l.hideOnClosest,o.prototype.getDataParam=function(){return this.$element.data()},e.fn.dataTabs=function(t){var n,s=arguments,i=t||{};return void 0===i||"object"===(void 0===i?"undefined":a(i))?this.each(function(t,n){e.data(this,"datatabs")||e.data(this,"datatabs",new o(this,i))}):"string"==typeof i&&"_"!==i[0]&&"init"!==i?(n=e.data(this,"datatabs"),n instanceof datatabs&&"function"==typeof n[i]?n[i].apply(n,Array.prototype.slice.call(s,1)):this):void 0}}(jQuery,window)}]);
