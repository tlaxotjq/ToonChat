function wP(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in n)){const l=Object.getOwnPropertyDescriptor(i,a);l&&Object.defineProperty(n,a,l.get?l:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function bP(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var q_={exports:{}},zc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eb;function IP(){if(Eb)return zc;Eb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:i,key:u,ref:a!==void 0?a:null,props:l}}return zc.Fragment=e,zc.jsx=t,zc.jsxs=t,zc}var Tb;function AP(){return Tb||(Tb=1,q_.exports=IP()),q_.exports}var pe=AP(),j_={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wb;function SP(){if(wb)return Oe;wb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,B={};function V(P,te,le){this.props=P,this.context=te,this.refs=B,this.updater=le||R}V.prototype.isReactComponent={},V.prototype.setState=function(P,te){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,te,"setState")},V.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function Z(){}Z.prototype=V.prototype;function X(P,te,le){this.props=P,this.context=te,this.refs=B,this.updater=le||R}var Y=X.prototype=new Z;Y.constructor=X,L(Y,V.prototype),Y.isPureReactComponent=!0;var oe=Array.isArray,se={H:null,A:null,T:null,S:null,V:null},ue=Object.prototype.hasOwnProperty;function S(P,te,le,ae,Te,xe){return le=xe.ref,{$$typeof:n,type:P,key:te,ref:le!==void 0?le:null,props:xe}}function A(P,te){return S(P.type,te,void 0,void 0,void 0,P.props)}function C(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function N(P){var te={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(le){return te[le]})}var k=/\/+/g;function M(P,te){return typeof P=="object"&&P!==null&&P.key!=null?N(""+P.key):te.toString(36)}function x(){}function Pt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(x,x):(P.status="pending",P.then(function(te){P.status==="pending"&&(P.status="fulfilled",P.value=te)},function(te){P.status==="pending"&&(P.status="rejected",P.reason=te)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function lt(P,te,le,ae,Te){var xe=typeof P;(xe==="undefined"||xe==="boolean")&&(P=null);var be=!1;if(P===null)be=!0;else switch(xe){case"bigint":case"string":case"number":be=!0;break;case"object":switch(P.$$typeof){case n:case e:be=!0;break;case y:return be=P._init,lt(be(P._payload),te,le,ae,Te)}}if(be)return Te=Te(P),be=ae===""?"."+M(P,0):ae,oe(Te)?(le="",be!=null&&(le=be.replace(k,"$&/")+"/"),lt(Te,te,le,"",function(Jt){return Jt})):Te!=null&&(C(Te)&&(Te=A(Te,le+(Te.key==null||P&&P.key===Te.key?"":(""+Te.key).replace(k,"$&/")+"/")+be)),te.push(Te)),1;be=0;var Et=ae===""?".":ae+":";if(oe(P))for(var $e=0;$e<P.length;$e++)ae=P[$e],xe=Et+M(ae,$e),be+=lt(ae,te,le,xe,Te);else if($e=w(P),typeof $e=="function")for(P=$e.call(P),$e=0;!(ae=P.next()).done;)ae=ae.value,xe=Et+M(ae,$e++),be+=lt(ae,te,le,xe,Te);else if(xe==="object"){if(typeof P.then=="function")return lt(Pt(P),te,le,ae,Te);throw te=String(P),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return be}function Q(P,te,le){if(P==null)return P;var ae=[],Te=0;return lt(P,ae,"","",function(xe){return te.call(le,xe,Te++)}),ae}function he(P){if(P._status===-1){var te=P._result;te=te(),te.then(function(le){(P._status===0||P._status===-1)&&(P._status=1,P._result=le)},function(le){(P._status===0||P._status===-1)&&(P._status=2,P._result=le)}),P._status===-1&&(P._status=0,P._result=te)}if(P._status===1)return P._result.default;throw P._result}var ve=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Ne(){}return Oe.Children={map:Q,forEach:function(P,te,le){Q(P,function(){te.apply(this,arguments)},le)},count:function(P){var te=0;return Q(P,function(){te++}),te},toArray:function(P){return Q(P,function(te){return te})||[]},only:function(P){if(!C(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Oe.Component=V,Oe.Fragment=t,Oe.Profiler=a,Oe.PureComponent=X,Oe.StrictMode=i,Oe.Suspense=p,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return se.H.useMemoCache(P)}},Oe.cache=function(P){return function(){return P.apply(null,arguments)}},Oe.cloneElement=function(P,te,le){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var ae=L({},P.props),Te=P.key,xe=void 0;if(te!=null)for(be in te.ref!==void 0&&(xe=void 0),te.key!==void 0&&(Te=""+te.key),te)!ue.call(te,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&te.ref===void 0||(ae[be]=te[be]);var be=arguments.length-2;if(be===1)ae.children=le;else if(1<be){for(var Et=Array(be),$e=0;$e<be;$e++)Et[$e]=arguments[$e+2];ae.children=Et}return S(P.type,Te,void 0,void 0,xe,ae)},Oe.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},Oe.createElement=function(P,te,le){var ae,Te={},xe=null;if(te!=null)for(ae in te.key!==void 0&&(xe=""+te.key),te)ue.call(te,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(Te[ae]=te[ae]);var be=arguments.length-2;if(be===1)Te.children=le;else if(1<be){for(var Et=Array(be),$e=0;$e<be;$e++)Et[$e]=arguments[$e+2];Te.children=Et}if(P&&P.defaultProps)for(ae in be=P.defaultProps,be)Te[ae]===void 0&&(Te[ae]=be[ae]);return S(P,xe,void 0,void 0,null,Te)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(P){return{$$typeof:d,render:P}},Oe.isValidElement=C,Oe.lazy=function(P){return{$$typeof:y,_payload:{_status:-1,_result:P},_init:he}},Oe.memo=function(P,te){return{$$typeof:g,type:P,compare:te===void 0?null:te}},Oe.startTransition=function(P){var te=se.T,le={};se.T=le;try{var ae=P(),Te=se.S;Te!==null&&Te(le,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(Ne,ve)}catch(xe){ve(xe)}finally{se.T=te}},Oe.unstable_useCacheRefresh=function(){return se.H.useCacheRefresh()},Oe.use=function(P){return se.H.use(P)},Oe.useActionState=function(P,te,le){return se.H.useActionState(P,te,le)},Oe.useCallback=function(P,te){return se.H.useCallback(P,te)},Oe.useContext=function(P){return se.H.useContext(P)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(P,te){return se.H.useDeferredValue(P,te)},Oe.useEffect=function(P,te,le){var ae=se.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(P,te)},Oe.useId=function(){return se.H.useId()},Oe.useImperativeHandle=function(P,te,le){return se.H.useImperativeHandle(P,te,le)},Oe.useInsertionEffect=function(P,te){return se.H.useInsertionEffect(P,te)},Oe.useLayoutEffect=function(P,te){return se.H.useLayoutEffect(P,te)},Oe.useMemo=function(P,te){return se.H.useMemo(P,te)},Oe.useOptimistic=function(P,te){return se.H.useOptimistic(P,te)},Oe.useReducer=function(P,te,le){return se.H.useReducer(P,te,le)},Oe.useRef=function(P){return se.H.useRef(P)},Oe.useState=function(P){return se.H.useState(P)},Oe.useSyncExternalStore=function(P,te,le){return se.H.useSyncExternalStore(P,te,le)},Oe.useTransition=function(){return se.H.useTransition()},Oe.version="19.1.0",Oe}var bb;function fv(){return bb||(bb=1,j_.exports=SP()),j_.exports}var ge=fv();const jl=bP(ge),RP=wP({__proto__:null,default:jl},[ge]);var G_={exports:{}},Fc={},H_={exports:{}},$_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ib;function CP(){return Ib||(Ib=1,function(n){function e(Q,he){var ve=Q.length;Q.push(he);e:for(;0<ve;){var Ne=ve-1>>>1,P=Q[Ne];if(0<a(P,he))Q[Ne]=he,Q[ve]=P,ve=Ne;else break e}}function t(Q){return Q.length===0?null:Q[0]}function i(Q){if(Q.length===0)return null;var he=Q[0],ve=Q.pop();if(ve!==he){Q[0]=ve;e:for(var Ne=0,P=Q.length,te=P>>>1;Ne<te;){var le=2*(Ne+1)-1,ae=Q[le],Te=le+1,xe=Q[Te];if(0>a(ae,ve))Te<P&&0>a(xe,ae)?(Q[Ne]=xe,Q[Te]=ve,Ne=Te):(Q[Ne]=ae,Q[le]=ve,Ne=le);else if(Te<P&&0>a(xe,ve))Q[Ne]=xe,Q[Te]=ve,Ne=Te;else break e}}return he}function a(Q,he){var ve=Q.sortIndex-he.sortIndex;return ve!==0?ve:Q.id-he.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],g=[],y=1,v=null,w=3,R=!1,L=!1,B=!1,V=!1,Z=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function oe(Q){for(var he=t(g);he!==null;){if(he.callback===null)i(g);else if(he.startTime<=Q)i(g),he.sortIndex=he.expirationTime,e(p,he);else break;he=t(g)}}function se(Q){if(B=!1,oe(Q),!L)if(t(p)!==null)L=!0,ue||(ue=!0,M());else{var he=t(g);he!==null&&lt(se,he.startTime-Q)}}var ue=!1,S=-1,A=5,C=-1;function N(){return V?!0:!(n.unstable_now()-C<A)}function k(){if(V=!1,ue){var Q=n.unstable_now();C=Q;var he=!0;try{e:{L=!1,B&&(B=!1,X(S),S=-1),R=!0;var ve=w;try{t:{for(oe(Q),v=t(p);v!==null&&!(v.expirationTime>Q&&N());){var Ne=v.callback;if(typeof Ne=="function"){v.callback=null,w=v.priorityLevel;var P=Ne(v.expirationTime<=Q);if(Q=n.unstable_now(),typeof P=="function"){v.callback=P,oe(Q),he=!0;break t}v===t(p)&&i(p),oe(Q)}else i(p);v=t(p)}if(v!==null)he=!0;else{var te=t(g);te!==null&&lt(se,te.startTime-Q),he=!1}}break e}finally{v=null,w=ve,R=!1}he=void 0}}finally{he?M():ue=!1}}}var M;if(typeof Y=="function")M=function(){Y(k)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,Pt=x.port2;x.port1.onmessage=k,M=function(){Pt.postMessage(null)}}else M=function(){Z(k,0)};function lt(Q,he){S=Z(function(){Q(n.unstable_now())},he)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Q){Q.callback=null},n.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Q?Math.floor(1e3/Q):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(Q){switch(w){case 1:case 2:case 3:var he=3;break;default:he=w}var ve=w;w=he;try{return Q()}finally{w=ve}},n.unstable_requestPaint=function(){V=!0},n.unstable_runWithPriority=function(Q,he){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ve=w;w=Q;try{return he()}finally{w=ve}},n.unstable_scheduleCallback=function(Q,he,ve){var Ne=n.unstable_now();switch(typeof ve=="object"&&ve!==null?(ve=ve.delay,ve=typeof ve=="number"&&0<ve?Ne+ve:Ne):ve=Ne,Q){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=ve+P,Q={id:y++,callback:he,priorityLevel:Q,startTime:ve,expirationTime:P,sortIndex:-1},ve>Ne?(Q.sortIndex=ve,e(g,Q),t(p)===null&&Q===t(g)&&(B?(X(S),S=-1):B=!0,lt(se,ve-Ne))):(Q.sortIndex=P,e(p,Q),L||R||(L=!0,ue||(ue=!0,M()))),Q},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(Q){var he=w;return function(){var ve=w;w=he;try{return Q.apply(this,arguments)}finally{w=ve}}}}($_)),$_}var Ab;function DP(){return Ab||(Ab=1,H_.exports=CP()),H_.exports}var K_={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sb;function xP(){if(Sb)return Tn;Sb=1;var n=fv();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:p,containerInfo:g,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Tn.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},Tn.flushSync=function(p){var g=u.T,y=i.p;try{if(u.T=null,i.p=2,p)return p()}finally{u.T=g,i.p=y,i.d.f()}},Tn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},Tn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},Tn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,v=d(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:R}):y==="script"&&i.d.X(p,{crossOrigin:v,integrity:w,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Tn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},Tn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,v=d(y,g.crossOrigin);i.d.L(p,y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Tn.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},Tn.requestFormReset=function(p){i.d.r(p)},Tn.unstable_batchedUpdates=function(p,g){return p(g)},Tn.useFormState=function(p,g,y){return u.H.useFormState(p,g,y)},Tn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Tn.version="19.1.0",Tn}var Rb;function lS(){if(Rb)return K_.exports;Rb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),K_.exports=xP(),K_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cb;function PP(){if(Cb)return Fc;Cb=1;var n=DP(),e=fv(),t=lS();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function u(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,c=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),r;if(m===c)return d(f),s;m=m.sibling}throw Error(i(188))}if(o.return!==c.return)o=f,c=m;else{for(var T=!1,b=f.child;b;){if(b===o){T=!0,o=f,c=m;break}if(b===c){T=!0,c=f,o=m;break}b=b.sibling}if(!T){for(b=m.child;b;){if(b===o){T=!0,o=m,c=f;break}if(b===c){T=!0,c=m,o=f;break}b=b.sibling}if(!T)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function g(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=g(r),s!==null)return s;r=r.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function M(r){return r===null||typeof r!="object"?null:(r=k&&r[k]||r["@@iterator"],typeof r=="function"?r:null)}var x=Symbol.for("react.client.reference");function Pt(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===x?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case L:return"Fragment";case V:return"Profiler";case B:return"StrictMode";case se:return"Suspense";case ue:return"SuspenseList";case C:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case R:return"Portal";case Y:return(r.displayName||"Context")+".Provider";case X:return(r._context.displayName||"Context")+".Consumer";case oe:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case S:return s=r.displayName||null,s!==null?s:Pt(r.type)||"Memo";case A:s=r._payload,r=r._init;try{return Pt(r(s))}catch{}}return null}var lt=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve={pending:!1,data:null,method:null,action:null},Ne=[],P=-1;function te(r){return{current:r}}function le(r){0>P||(r.current=Ne[P],Ne[P]=null,P--)}function ae(r,s){P++,Ne[P]=r.current,r.current=s}var Te=te(null),xe=te(null),be=te(null),Et=te(null);function $e(r,s){switch(ae(be,s),ae(xe,r),ae(Te,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?Qw(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=Qw(s),r=Yw(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}le(Te),ae(Te,r)}function Jt(){le(Te),le(xe),le(be)}function si(r){r.memoizedState!==null&&ae(Et,r);var s=Te.current,o=Yw(s,r.type);s!==o&&(ae(xe,r),ae(Te,o))}function kn(r){xe.current===r&&(le(Te),le(xe)),Et.current===r&&(le(Et),kc._currentValue=ve)}var yn=Object.prototype.hasOwnProperty,ua=n.unstable_scheduleCallback,ca=n.unstable_cancelCallback,Nu=n.unstable_shouldYield,pd=n.unstable_requestPaint,ai=n.unstable_now,qm=n.unstable_getCurrentPriorityLevel,Ou=n.unstable_ImmediatePriority,Do=n.unstable_UserBlockingPriority,ha=n.unstable_NormalPriority,jm=n.unstable_LowPriority,xo=n.unstable_IdlePriority,Vu=n.log,md=n.unstable_setDisableYieldValue,At=null,Je=null;function Hn(r){if(typeof Vu=="function"&&md(r),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(At,r)}catch{}}var vn=Math.clz32?Math.clz32:da,gd=Math.log,Gm=Math.LN2;function da(r){return r>>>=0,r===0?32:31-(gd(r)/Gm|0)|0}var fa=256,pa=4194304;function bi(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Po(r,s,o){var c=r.pendingLanes;if(c===0)return 0;var f=0,m=r.suspendedLanes,T=r.pingedLanes;r=r.warmLanes;var b=c&134217727;return b!==0?(c=b&~m,c!==0?f=bi(c):(T&=b,T!==0?f=bi(T):o||(o=b&~r,o!==0&&(f=bi(o))))):(b=c&~m,b!==0?f=bi(b):T!==0?f=bi(T):o||(o=c&~r,o!==0&&(f=bi(o)))),f===0?0:s!==0&&s!==f&&(s&m)===0&&(m=f&-f,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:f}function ma(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function ku(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mu(){var r=fa;return fa<<=1,(fa&4194048)===0&&(fa=256),r}function Lu(){var r=pa;return pa<<=1,(pa&62914560)===0&&(pa=4194304),r}function fr(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function pr(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Uu(r,s,o,c,f,m){var T=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var b=r.entanglements,D=r.expirationTimes,j=r.hiddenUpdates;for(o=T&~o;0<o;){var W=31-vn(o),ee=1<<W;b[W]=0,D[W]=-1;var G=j[W];if(G!==null)for(j[W]=null,W=0;W<G.length;W++){var H=G[W];H!==null&&(H.lane&=-536870913)}o&=~ee}c!==0&&Vi(r,c,0),m!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=m&~(T&~s))}function Vi(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-vn(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|o&4194090}function Bu(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var c=31-vn(o),f=1<<c;f&s|r[c]&s&&(r[c]|=s),o&=~f}}function Zr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function No(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function es(){var r=he.p;return r!==0?r:(r=window.event,r===void 0?32:pb(r.type))}function _d(r,s){var o=he.p;try{return he.p=r,s()}finally{he.p=o}}var ft=Math.random().toString(36).slice(2),Ht="__reactFiber$"+ft,Ut="__reactProps$"+ft,oi="__reactContainer$"+ft,zu="__reactEvents$"+ft,Hm="__reactListeners$"+ft,ts="__reactHandles$"+ft,yd="__reactResources$"+ft,ga="__reactMarker$"+ft;function ns(r){delete r[Ht],delete r[Ut],delete r[zu],delete r[Hm],delete r[ts]}function mr(r){var s=r[Ht];if(s)return s;for(var o=r.parentNode;o;){if(s=o[oi]||o[Ht]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=Zw(r);r!==null;){if(o=r[Ht])return o;r=Zw(r)}return s}r=o,o=r.parentNode}return null}function ki(r){if(r=r[Ht]||r[oi]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Mi(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function Sn(r){var s=r[yd];return s||(s=r[yd]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Nt(r){r[ga]=!0}var Fu=new Set,Oo={};function Ii(r,s){gr(r,s),gr(r+"Capture",s)}function gr(r,s){for(Oo[r]=s,r=0;r<s.length;r++)Fu.add(s[r])}var vd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ed={},_a={};function Td(r){return yn.call(_a,r)?!0:yn.call(Ed,r)?!1:vd.test(r)?_a[r]=!0:(Ed[r]=!0,!1)}function is(r,s,o){if(Td(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Li(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function un(r,s,o,c){if(c===null)r.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+c)}}var ya,wd;function _r(r){if(ya===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);ya=s&&s[1]||"",wd=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ya+r+wd}var Vo=!1;function ko(r,s){if(!r||Vo)return"";Vo=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(H){var G=H}Reflect.construct(r,[],ee)}else{try{ee.call()}catch(H){G=H}r.call(ee.prototype)}}else{try{throw Error()}catch(H){G=H}(ee=r())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(H){if(H&&G&&typeof H.stack=="string")return[H.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),T=m[0],b=m[1];if(T&&b){var D=T.split(`
`),j=b.split(`
`);for(f=c=0;c<D.length&&!D[c].includes("DetermineComponentFrameRoot");)c++;for(;f<j.length&&!j[f].includes("DetermineComponentFrameRoot");)f++;if(c===D.length||f===j.length)for(c=D.length-1,f=j.length-1;1<=c&&0<=f&&D[c]!==j[f];)f--;for(;1<=c&&0<=f;c--,f--)if(D[c]!==j[f]){if(c!==1||f!==1)do if(c--,f--,0>f||D[c]!==j[f]){var W=`
`+D[c].replace(" at new "," at ");return r.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",r.displayName)),W}while(1<=c&&0<=f);break}}}finally{Vo=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?_r(o):""}function qu(r){switch(r.tag){case 26:case 27:case 5:return _r(r.type);case 16:return _r("Lazy");case 13:return _r("Suspense");case 19:return _r("SuspenseList");case 0:case 15:return ko(r.type,!1);case 11:return ko(r.type.render,!1);case 1:return ko(r.type,!0);case 31:return _r("Activity");default:return""}}function Mo(r){try{var s="";do s+=qu(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Rn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ju(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function $m(r){var s=ju(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Lo(r){r._valueTracker||(r._valueTracker=$m(r))}function Gu(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),c="";return r&&(c=ju(r)?r.checked?"true":"false":r.value),r=c,r!==o?(s.setValue(r),!0):!1}function va(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var Km=/[\n"\\]/g;function Bt(r){return r.replace(Km,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function $n(r,s,o,c,f,m,T,b){r.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?r.type=T:r.removeAttribute("type"),s!=null?T==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+Rn(s)):r.value!==""+Rn(s)&&(r.value=""+Rn(s)):T!=="submit"&&T!=="reset"||r.removeAttribute("value"),s!=null?rs(r,T,Rn(s)):o!=null?rs(r,T,Rn(o)):c!=null&&r.removeAttribute("value"),f==null&&m!=null&&(r.defaultChecked=!!m),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.name=""+Rn(b):r.removeAttribute("name")}function Ea(r,s,o,c,f,m,T,b){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+Rn(o):"",s=s!=null?""+Rn(s):o,b||s===r.value||(r.value=s),r.defaultValue=s}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=b?r.checked:!!c,r.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(r.name=T)}function rs(r,s,o){s==="number"&&va(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function yr(r,s,o,c){if(r=r.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=s.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&c&&(r[o].defaultSelected=!0)}else{for(o=""+Rn(o),s=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function it(r,s,o){if(s!=null&&(s=""+Rn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+Rn(o):""}function Ta(r,s,o,c){if(s==null){if(c!=null){if(o!=null)throw Error(i(92));if(lt(c)){if(1<c.length)throw Error(i(93));c=c[0]}o=c}o==null&&(o=""),s=o}o=Rn(s),r.defaultValue=o,c=r.textContent,c===o&&c!==""&&c!==null&&(r.value=c)}function li(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var wa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bd(r,s,o){var c=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,o):typeof o!="number"||o===0||wa.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function Hu(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var f in s)c=s[f],s.hasOwnProperty(f)&&o[f]!==c&&bd(r,f,c)}else for(var m in s)s.hasOwnProperty(m)&&bd(r,m,s[m])}function $u(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ym=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uo(r){return Ym.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var vr=null;function ui(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Er=null,Tr=null;function Ku(r){var s=ki(r);if(s&&(r=s.stateNode)){var o=r[Ut]||null;e:switch(r=s.stateNode,s.type){case"input":if($n(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Bt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var c=o[s];if(c!==r&&c.form===r.form){var f=c[Ut]||null;if(!f)throw Error(i(90));$n(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)c=o[s],c.form===r.form&&Gu(c)}break e;case"textarea":it(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&yr(r,!!o.multiple,s,!1)}}}var Ui=!1;function Id(r,s,o){if(Ui)return r(s,o);Ui=!0;try{var c=r(s);return c}finally{if(Ui=!1,(Er!==null||Tr!==null)&&(yf(),Er&&(s=Er,r=Tr,Tr=Er=null,Ku(s),r)))for(s=0;s<r.length;s++)Ku(r[s])}}function ba(r,s){var o=r.stateNode;if(o===null)return null;var c=o[Ut]||null;if(c===null)return null;o=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ci=!1;if(Ai)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){ci=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{ci=!1}var Bi=null,ss=null,wr=null;function Qu(){if(wr)return wr;var r,s=ss,o=s.length,c,f="value"in Bi?Bi.value:Bi.textContent,m=f.length;for(r=0;r<o&&s[r]===f[r];r++);var T=o-r;for(c=1;c<=T&&s[o-c]===f[m-c];c++);return wr=f.slice(r,1<c?1-c:void 0)}function zi(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Fi(){return!0}function Yu(){return!1}function Zt(r){function s(o,c,f,m,T){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var b in r)r.hasOwnProperty(b)&&(o=r[b],this[b]=o?o(m):m[b]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Fi:Yu,this.isPropagationStopped=Yu,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),s}var We={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bo=Zt(We),Aa=y({},We,{view:0,detail:0}),Ad=Zt(Aa),zo,Fo,qi,Sa=y({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Da,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==qi&&(qi&&r.type==="mousemove"?(zo=r.screenX-qi.screenX,Fo=r.screenY-qi.screenY):Fo=zo=0,qi=r),zo)},movementY:function(r){return"movementY"in r?r.movementY:Fo}}),hi=Zt(Sa),Sd=y({},Sa,{dataTransfer:0}),Wm=Zt(Sd),Ra=y({},Aa,{relatedTarget:0}),qo=Zt(Ra),Wu=y({},We,{animationName:0,elapsedTime:0,pseudoElement:0}),jo=Zt(Wu),Rd=y({},We,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Go=Zt(Rd),Xm=y({},We,{data:0}),Xu=Zt(Xm),Ca={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ju(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Dd[r])?!!s[r]:!1}function Da(){return Ju}var xd=y({},Aa,{key:function(r){if(r.key){var s=Ca[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=zi(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Cd[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Da,charCode:function(r){return r.type==="keypress"?zi(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?zi(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Ho=Zt(xd),Pd=y({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zu=Zt(Pd),br=y({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Da}),Nd=Zt(br),Od=y({},We,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vd=Zt(Od),kd=y({},Sa,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),$o=Zt(kd),Cn=y({},We,{newState:0,oldState:0}),Md=Zt(Cn),Ld=[9,13,27,32],ji=Ai&&"CompositionEvent"in window,h=null;Ai&&"documentMode"in document&&(h=document.documentMode);var _=Ai&&"TextEvent"in window&&!h,E=Ai&&(!ji||h&&8<h&&11>=h),I=" ",z=!1;function K(r,s){switch(r){case"keyup":return Ld.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ce(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var qe=!1;function $t(r,s){switch(r){case"compositionend":return ce(s);case"keypress":return s.which!==32?null:(z=!0,I);case"textInput":return r=s.data,r===I&&z?null:r;default:return null}}function je(r,s){if(qe)return r==="compositionend"||!ji&&K(r,s)?(r=Qu(),wr=ss=Bi=null,qe=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var en={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kt(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!en[r.type]:s==="textarea"}function Ir(r,s,o,c){Er?Tr?Tr.push(c):Tr=[c]:Er=c,s=If(s,"onChange"),0<s.length&&(o=new Bo("onChange","change",null,o,c),r.push({event:o,listeners:s}))}var cn=null,Gi=null;function ec(r){jw(r,0)}function Ud(r){var s=Mi(r);if(Gu(s))return r}function cT(r,s){if(r==="change")return s}var hT=!1;if(Ai){var Jm;if(Ai){var Zm="oninput"in document;if(!Zm){var dT=document.createElement("div");dT.setAttribute("oninput","return;"),Zm=typeof dT.oninput=="function"}Jm=Zm}else Jm=!1;hT=Jm&&(!document.documentMode||9<document.documentMode)}function fT(){cn&&(cn.detachEvent("onpropertychange",pT),Gi=cn=null)}function pT(r){if(r.propertyName==="value"&&Ud(Gi)){var s=[];Ir(s,Gi,r,ui(r)),Id(ec,s)}}function JD(r,s,o){r==="focusin"?(fT(),cn=s,Gi=o,cn.attachEvent("onpropertychange",pT)):r==="focusout"&&fT()}function ZD(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ud(Gi)}function ex(r,s){if(r==="click")return Ud(s)}function tx(r,s){if(r==="input"||r==="change")return Ud(s)}function nx(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Kn=typeof Object.is=="function"?Object.is:nx;function tc(r,s){if(Kn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),c=Object.keys(s);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!yn.call(s,f)||!Kn(r[f],s[f]))return!1}return!0}function mT(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function gT(r,s){var o=mT(r);r=0;for(var c;o;){if(o.nodeType===3){if(c=r+o.textContent.length,r<=s&&c>=s)return{node:o,offset:s-r};r=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=mT(o)}}function _T(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?_T(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function yT(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=va(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=va(r.document)}return s}function eg(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var ix=Ai&&"documentMode"in document&&11>=document.documentMode,Ko=null,tg=null,nc=null,ng=!1;function vT(r,s,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ng||Ko==null||Ko!==va(c)||(c=Ko,"selectionStart"in c&&eg(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),nc&&tc(nc,c)||(nc=c,c=If(tg,"onSelect"),0<c.length&&(s=new Bo("onSelect","select",null,s,o),r.push({event:s,listeners:c}),s.target=Ko)))}function xa(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var Qo={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},ig={},ET={};Ai&&(ET=document.createElement("div").style,"AnimationEvent"in window||(delete Qo.animationend.animation,delete Qo.animationiteration.animation,delete Qo.animationstart.animation),"TransitionEvent"in window||delete Qo.transitionend.transition);function Pa(r){if(ig[r])return ig[r];if(!Qo[r])return r;var s=Qo[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in ET)return ig[r]=s[o];return r}var TT=Pa("animationend"),wT=Pa("animationiteration"),bT=Pa("animationstart"),rx=Pa("transitionrun"),sx=Pa("transitionstart"),ax=Pa("transitioncancel"),IT=Pa("transitionend"),AT=new Map,rg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rg.push("scrollEnd");function Si(r,s){AT.set(r,s),Ii(s,[r])}var ST=new WeakMap;function di(r,s){if(typeof r=="object"&&r!==null){var o=ST.get(r);return o!==void 0?o:(s={value:r,source:s,stack:Mo(s)},ST.set(r,s),s)}return{value:r,source:s,stack:Mo(s)}}var fi=[],Yo=0,sg=0;function Bd(){for(var r=Yo,s=sg=Yo=0;s<r;){var o=fi[s];fi[s++]=null;var c=fi[s];fi[s++]=null;var f=fi[s];fi[s++]=null;var m=fi[s];if(fi[s++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}m!==0&&RT(o,f,m)}}function zd(r,s,o,c){fi[Yo++]=r,fi[Yo++]=s,fi[Yo++]=o,fi[Yo++]=c,sg|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function ag(r,s,o,c){return zd(r,s,o,c),Fd(r)}function Wo(r,s){return zd(r,null,null,s),Fd(r)}function RT(r,s,o){r.lanes|=o;var c=r.alternate;c!==null&&(c.lanes|=o);for(var f=!1,m=r.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(f=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,f&&s!==null&&(f=31-vn(o),r=m.hiddenUpdates,c=r[f],c===null?r[f]=[s]:c.push(s),s.lane=o|536870912),m):null}function Fd(r){if(50<Rc)throw Rc=0,d_=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Xo={};function ox(r,s,o,c){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(r,s,o,c){return new ox(r,s,o,c)}function og(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Ar(r,s){var o=r.alternate;return o===null?(o=Qn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function CT(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function qd(r,s,o,c,f,m){var T=0;if(c=r,typeof r=="function")og(r)&&(T=1);else if(typeof r=="string")T=uP(r,o,Te.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case C:return r=Qn(31,o,s,f),r.elementType=C,r.lanes=m,r;case L:return Na(o.children,f,m,s);case B:T=8,f|=24;break;case V:return r=Qn(12,o,s,f|2),r.elementType=V,r.lanes=m,r;case se:return r=Qn(13,o,s,f),r.elementType=se,r.lanes=m,r;case ue:return r=Qn(19,o,s,f),r.elementType=ue,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Z:case Y:T=10;break e;case X:T=9;break e;case oe:T=11;break e;case S:T=14;break e;case A:T=16,c=null;break e}T=29,o=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=Qn(T,o,s,f),s.elementType=r,s.type=c,s.lanes=m,s}function Na(r,s,o,c){return r=Qn(7,r,c,s),r.lanes=o,r}function lg(r,s,o){return r=Qn(6,r,null,s),r.lanes=o,r}function ug(r,s,o){return s=Qn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Jo=[],Zo=0,jd=null,Gd=0,pi=[],mi=0,Oa=null,Sr=1,Rr="";function Va(r,s){Jo[Zo++]=Gd,Jo[Zo++]=jd,jd=r,Gd=s}function DT(r,s,o){pi[mi++]=Sr,pi[mi++]=Rr,pi[mi++]=Oa,Oa=r;var c=Sr;r=Rr;var f=32-vn(c)-1;c&=~(1<<f),o+=1;var m=32-vn(s)+f;if(30<m){var T=f-f%5;m=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Sr=1<<32-vn(s)+f|o<<f|c,Rr=m+r}else Sr=1<<m|o<<f|c,Rr=r}function cg(r){r.return!==null&&(Va(r,1),DT(r,1,0))}function hg(r){for(;r===jd;)jd=Jo[--Zo],Jo[Zo]=null,Gd=Jo[--Zo],Jo[Zo]=null;for(;r===Oa;)Oa=pi[--mi],pi[mi]=null,Rr=pi[--mi],pi[mi]=null,Sr=pi[--mi],pi[mi]=null}var Dn=null,St=null,Ye=!1,ka=null,Hi=!1,dg=Error(i(519));function Ma(r){var s=Error(i(418,""));throw sc(di(s,r)),dg}function xT(r){var s=r.stateNode,o=r.type,c=r.memoizedProps;switch(s[Ht]=r,s[Ut]=c,o){case"dialog":Ue("cancel",s),Ue("close",s);break;case"iframe":case"object":case"embed":Ue("load",s);break;case"video":case"audio":for(o=0;o<Dc.length;o++)Ue(Dc[o],s);break;case"source":Ue("error",s);break;case"img":case"image":case"link":Ue("error",s),Ue("load",s);break;case"details":Ue("toggle",s);break;case"input":Ue("invalid",s),Ea(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Lo(s);break;case"select":Ue("invalid",s);break;case"textarea":Ue("invalid",s),Ta(s,c.value,c.defaultValue,c.children),Lo(s)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||c.suppressHydrationWarning===!0||Kw(s.textContent,o)?(c.popover!=null&&(Ue("beforetoggle",s),Ue("toggle",s)),c.onScroll!=null&&Ue("scroll",s),c.onScrollEnd!=null&&Ue("scrollend",s),c.onClick!=null&&(s.onclick=Af),s=!0):s=!1,s||Ma(r)}function PT(r){for(Dn=r.return;Dn;)switch(Dn.tag){case 5:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Dn=Dn.return}}function ic(r){if(r!==Dn)return!1;if(!Ye)return PT(r),Ye=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||C_(r.type,r.memoizedProps)),o=!o),o&&St&&Ma(r),PT(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){St=Ci(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}St=null}}else s===27?(s=St,Ts(r.type)?(r=N_,N_=null,St=r):St=s):St=Dn?Ci(r.stateNode.nextSibling):null;return!0}function rc(){St=Dn=null,Ye=!1}function NT(){var r=ka;return r!==null&&(Un===null?Un=r:Un.push.apply(Un,r),ka=null),r}function sc(r){ka===null?ka=[r]:ka.push(r)}var fg=te(null),La=null,Cr=null;function as(r,s,o){ae(fg,s._currentValue),s._currentValue=o}function Dr(r){r._currentValue=fg.current,le(fg)}function pg(r,s,o){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===o)break;r=r.return}}function mg(r,s,o,c){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var m=f.dependencies;if(m!==null){var T=f.child;m=m.firstContext;e:for(;m!==null;){var b=m;m=f;for(var D=0;D<s.length;D++)if(b.context===s[D]){m.lanes|=o,b=m.alternate,b!==null&&(b.lanes|=o),pg(m.return,o,r),c||(T=null);break e}m=b.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(i(341));T.lanes|=o,m=T.alternate,m!==null&&(m.lanes|=o),pg(T,o,r),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===r){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function ac(r,s,o,c){r=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var b=f.type;Kn(f.pendingProps.value,T.value)||(r!==null?r.push(b):r=[b])}}else if(f===Et.current){if(T=f.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(kc):r=[kc])}f=f.return}r!==null&&mg(s,r,o,c),s.flags|=262144}function Hd(r){for(r=r.firstContext;r!==null;){if(!Kn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Ua(r){La=r,Cr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function En(r){return OT(La,r)}function $d(r,s){return La===null&&Ua(r),OT(r,s)}function OT(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Cr===null){if(r===null)throw Error(i(308));Cr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Cr=Cr.next=s;return o}var lx=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},ux=n.unstable_scheduleCallback,cx=n.unstable_NormalPriority,Qt={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gg(){return{controller:new lx,data:new Map,refCount:0}}function oc(r){r.refCount--,r.refCount===0&&ux(cx,function(){r.controller.abort()})}var lc=null,_g=0,el=0,tl=null;function hx(r,s){if(lc===null){var o=lc=[];_g=0,el=v_(),tl={status:"pending",value:void 0,then:function(c){o.push(c)}}}return _g++,s.then(VT,VT),s}function VT(){if(--_g===0&&lc!==null){tl!==null&&(tl.status="fulfilled");var r=lc;lc=null,el=0,tl=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function dx(r,s){var o=[],c={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(c.status="rejected",c.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),c}var kT=Q.S;Q.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&hx(r,s),kT!==null&&kT(r,s)};var Ba=te(null);function yg(){var r=Ba.current;return r!==null?r:ut.pooledCache}function Kd(r,s){s===null?ae(Ba,Ba.current):ae(Ba,s.pool)}function MT(){var r=yg();return r===null?null:{parent:Qt._currentValue,pool:r}}var uc=Error(i(460)),LT=Error(i(474)),Qd=Error(i(542)),vg={then:function(){}};function UT(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Yd(){}function BT(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Yd,Yd),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,FT(r),r;default:if(typeof s.status=="string")s.then(Yd,Yd);else{if(r=ut,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=c}},function(c){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,FT(r),r}throw cc=s,uc}}var cc=null;function zT(){if(cc===null)throw Error(i(459));var r=cc;return cc=null,r}function FT(r){if(r===uc||r===Qd)throw Error(i(483))}var os=!1;function Eg(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function ls(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function us(r,s,o){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Ze&2)!==0){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,s=Fd(r),RT(r,null,o),s}return zd(r,c,s,o),Fd(r)}function hc(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var c=s.lanes;c&=r.pendingLanes,o|=c,s.lanes=o,Bu(r,o)}}function wg(r,s){var o=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=T:m=m.next=T,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var bg=!1;function dc(){if(bg){var r=tl;if(r!==null)throw r}}function fc(r,s,o,c){bg=!1;var f=r.updateQueue;os=!1;var m=f.firstBaseUpdate,T=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var D=b,j=D.next;D.next=null,T===null?m=j:T.next=j,T=D;var W=r.alternate;W!==null&&(W=W.updateQueue,b=W.lastBaseUpdate,b!==T&&(b===null?W.firstBaseUpdate=j:b.next=j,W.lastBaseUpdate=D))}if(m!==null){var ee=f.baseState;T=0,W=j=D=null,b=m;do{var G=b.lane&-536870913,H=G!==b.lane;if(H?(Ge&G)===G:(c&G)===G){G!==0&&G===el&&(bg=!0),W!==null&&(W=W.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var De=r,Ae=b;G=s;var at=o;switch(Ae.tag){case 1:if(De=Ae.payload,typeof De=="function"){ee=De.call(at,ee,G);break e}ee=De;break e;case 3:De.flags=De.flags&-65537|128;case 0:if(De=Ae.payload,G=typeof De=="function"?De.call(at,ee,G):De,G==null)break e;ee=y({},ee,G);break e;case 2:os=!0}}G=b.callback,G!==null&&(r.flags|=64,H&&(r.flags|=8192),H=f.callbacks,H===null?f.callbacks=[G]:H.push(G))}else H={lane:G,tag:b.tag,payload:b.payload,callback:b.callback,next:null},W===null?(j=W=H,D=ee):W=W.next=H,T|=G;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;H=b,b=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);W===null&&(D=ee),f.baseState=D,f.firstBaseUpdate=j,f.lastBaseUpdate=W,m===null&&(f.shared.lanes=0),_s|=T,r.lanes=T,r.memoizedState=ee}}function qT(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function jT(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)qT(o[r],s)}var nl=te(null),Wd=te(0);function GT(r,s){r=Mr,ae(Wd,r),ae(nl,s),Mr=r|s.baseLanes}function Ig(){ae(Wd,Mr),ae(nl,nl.current)}function Ag(){Mr=Wd.current,le(nl),le(Wd)}var cs=0,ke=null,rt=null,zt=null,Xd=!1,il=!1,za=!1,Jd=0,pc=0,rl=null,fx=0;function Ot(){throw Error(i(321))}function Sg(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!Kn(r[o],s[o]))return!1;return!0}function Rg(r,s,o,c,f,m){return cs=m,ke=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Q.H=r===null||r.memoizedState===null?R0:C0,za=!1,m=o(c,f),za=!1,il&&(m=$T(s,o,c,f)),HT(r),m}function HT(r){Q.H=sf;var s=rt!==null&&rt.next!==null;if(cs=0,zt=rt=ke=null,Xd=!1,pc=0,rl=null,s)throw Error(i(300));r===null||tn||(r=r.dependencies,r!==null&&Hd(r)&&(tn=!0))}function $T(r,s,o,c){ke=r;var f=0;do{if(il&&(rl=null),pc=0,il=!1,25<=f)throw Error(i(301));if(f+=1,zt=rt=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Q.H=Ex,m=s(o,c)}while(il);return m}function px(){var r=Q.H,s=r.useState()[0];return s=typeof s.then=="function"?mc(s):s,r=r.useState()[0],(rt!==null?rt.memoizedState:null)!==r&&(ke.flags|=1024),s}function Cg(){var r=Jd!==0;return Jd=0,r}function Dg(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function xg(r){if(Xd){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Xd=!1}cs=0,zt=rt=ke=null,il=!1,pc=Jd=0,rl=null}function Mn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?ke.memoizedState=zt=r:zt=zt.next=r,zt}function Ft(){if(rt===null){var r=ke.alternate;r=r!==null?r.memoizedState:null}else r=rt.next;var s=zt===null?ke.memoizedState:zt.next;if(s!==null)zt=s,rt=r;else{if(r===null)throw ke.alternate===null?Error(i(467)):Error(i(310));rt=r,r={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},zt===null?ke.memoizedState=zt=r:zt=zt.next=r}return zt}function Pg(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mc(r){var s=pc;return pc+=1,rl===null&&(rl=[]),r=BT(rl,r,s),s=ke,(zt===null?s.memoizedState:zt.next)===null&&(s=s.alternate,Q.H=s===null||s.memoizedState===null?R0:C0),r}function Zd(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return mc(r);if(r.$$typeof===Y)return En(r)}throw Error(i(438,String(r)))}function Ng(r){var s=null,o=ke.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var c=ke.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Pg(),ke.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),c=0;c<r;c++)o[c]=N;return s.index++,o}function xr(r,s){return typeof s=="function"?s(r):s}function ef(r){var s=Ft();return Og(s,rt,r)}function Og(r,s,o){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=o;var f=r.baseQueue,m=c.pending;if(m!==null){if(f!==null){var T=f.next;f.next=m.next,m.next=T}s.baseQueue=f=m,c.pending=null}if(m=r.baseState,f===null)r.memoizedState=m;else{s=f.next;var b=T=null,D=null,j=s,W=!1;do{var ee=j.lane&-536870913;if(ee!==j.lane?(Ge&ee)===ee:(cs&ee)===ee){var G=j.revertLane;if(G===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),ee===el&&(W=!0);else if((cs&G)===G){j=j.next,G===el&&(W=!0);continue}else ee={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},D===null?(b=D=ee,T=m):D=D.next=ee,ke.lanes|=G,_s|=G;ee=j.action,za&&o(m,ee),m=j.hasEagerState?j.eagerState:o(m,ee)}else G={lane:ee,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},D===null?(b=D=G,T=m):D=D.next=G,ke.lanes|=ee,_s|=ee;j=j.next}while(j!==null&&j!==s);if(D===null?T=m:D.next=b,!Kn(m,r.memoizedState)&&(tn=!0,W&&(o=tl,o!==null)))throw o;r.memoizedState=m,r.baseState=T,r.baseQueue=D,c.lastRenderedState=m}return f===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function Vg(r){var s=Ft(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var c=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do m=r(m,T.action),T=T.next;while(T!==f);Kn(m,s.memoizedState)||(tn=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,c]}function KT(r,s,o){var c=ke,f=Ft(),m=Ye;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var T=!Kn((rt||f).memoizedState,o);T&&(f.memoizedState=o,tn=!0),f=f.queue;var b=WT.bind(null,c,f,r);if(gc(2048,8,b,[r]),f.getSnapshot!==s||T||zt!==null&&zt.memoizedState.tag&1){if(c.flags|=2048,sl(9,tf(),YT.bind(null,c,f,o,s),null),ut===null)throw Error(i(349));m||(cs&124)!==0||QT(c,s,o)}return o}function QT(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=ke.updateQueue,s===null?(s=Pg(),ke.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function YT(r,s,o,c){s.value=o,s.getSnapshot=c,XT(s)&&JT(r)}function WT(r,s,o){return o(function(){XT(s)&&JT(r)})}function XT(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!Kn(r,o)}catch{return!0}}function JT(r){var s=Wo(r,2);s!==null&&Zn(s,r,2)}function kg(r){var s=Mn();if(typeof r=="function"){var o=r;if(r=o(),za){Hn(!0);try{o()}finally{Hn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:r},s}function ZT(r,s,o,c){return r.baseState=o,Og(r,rt,typeof c=="function"?c:xr)}function mx(r,s,o,c,f){if(rf(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};Q.T!==null?o(!0):m.isTransition=!1,c(m),o=s.pending,o===null?(m.next=s.pending=m,e0(s,m)):(m.next=o.next,s.pending=o.next=m)}}function e0(r,s){var o=s.action,c=s.payload,f=r.state;if(s.isTransition){var m=Q.T,T={};Q.T=T;try{var b=o(f,c),D=Q.S;D!==null&&D(T,b),t0(r,s,b)}catch(j){Mg(r,s,j)}finally{Q.T=m}}else try{m=o(f,c),t0(r,s,m)}catch(j){Mg(r,s,j)}}function t0(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){n0(r,s,c)},function(c){return Mg(r,s,c)}):n0(r,s,o)}function n0(r,s,o){s.status="fulfilled",s.value=o,i0(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,e0(r,o)))}function Mg(r,s,o){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=o,i0(s),s=s.next;while(s!==c)}r.action=null}function i0(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function r0(r,s){return s}function s0(r,s){if(Ye){var o=ut.formState;if(o!==null){e:{var c=ke;if(Ye){if(St){t:{for(var f=St,m=Hi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ci(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){St=Ci(f.nextSibling),c=f.data==="F!";break e}}Ma(c)}c=!1}c&&(s=o[0])}}return o=Mn(),o.memoizedState=o.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r0,lastRenderedState:s},o.queue=c,o=I0.bind(null,ke,c),c.dispatch=o,c=kg(!1),m=Fg.bind(null,ke,!1,c.queue),c=Mn(),f={state:s,dispatch:null,action:r,pending:null},c.queue=f,o=mx.bind(null,ke,f,m,o),f.dispatch=o,c.memoizedState=r,[s,o,!1]}function a0(r){var s=Ft();return o0(s,rt,r)}function o0(r,s,o){if(s=Og(r,s,r0)[0],r=ef(xr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var c=mc(s)}catch(T){throw T===uc?Qd:T}else c=s;s=Ft();var f=s.queue,m=f.dispatch;return o!==s.memoizedState&&(ke.flags|=2048,sl(9,tf(),gx.bind(null,f,o),null)),[c,m,r]}function gx(r,s){r.action=s}function l0(r){var s=Ft(),o=rt;if(o!==null)return o0(s,o,r);Ft(),s=s.memoizedState,o=Ft();var c=o.queue.dispatch;return o.memoizedState=r,[s,c,!1]}function sl(r,s,o,c){return r={tag:r,create:o,deps:c,inst:s,next:null},s=ke.updateQueue,s===null&&(s=Pg(),ke.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(c=o.next,o.next=r,r.next=c,s.lastEffect=r),r}function tf(){return{destroy:void 0,resource:void 0}}function u0(){return Ft().memoizedState}function nf(r,s,o,c){var f=Mn();c=c===void 0?null:c,ke.flags|=r,f.memoizedState=sl(1|s,tf(),o,c)}function gc(r,s,o,c){var f=Ft();c=c===void 0?null:c;var m=f.memoizedState.inst;rt!==null&&c!==null&&Sg(c,rt.memoizedState.deps)?f.memoizedState=sl(s,m,o,c):(ke.flags|=r,f.memoizedState=sl(1|s,m,o,c))}function c0(r,s){nf(8390656,8,r,s)}function h0(r,s){gc(2048,8,r,s)}function d0(r,s){return gc(4,2,r,s)}function f0(r,s){return gc(4,4,r,s)}function p0(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function m0(r,s,o){o=o!=null?o.concat([r]):null,gc(4,4,p0.bind(null,s,r),o)}function Lg(){}function g0(r,s){var o=Ft();s=s===void 0?null:s;var c=o.memoizedState;return s!==null&&Sg(s,c[1])?c[0]:(o.memoizedState=[r,s],r)}function _0(r,s){var o=Ft();s=s===void 0?null:s;var c=o.memoizedState;if(s!==null&&Sg(s,c[1]))return c[0];if(c=r(),za){Hn(!0);try{r()}finally{Hn(!1)}}return o.memoizedState=[c,s],c}function Ug(r,s,o){return o===void 0||(cs&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=Ew(),ke.lanes|=r,_s|=r,o)}function y0(r,s,o,c){return Kn(o,s)?o:nl.current!==null?(r=Ug(r,o,c),Kn(r,s)||(tn=!0),r):(cs&42)===0?(tn=!0,r.memoizedState=o):(r=Ew(),ke.lanes|=r,_s|=r,s)}function v0(r,s,o,c,f){var m=he.p;he.p=m!==0&&8>m?m:8;var T=Q.T,b={};Q.T=b,Fg(r,!1,s,o);try{var D=f(),j=Q.S;if(j!==null&&j(b,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var W=dx(D,c);_c(r,s,W,Jn(r))}else _c(r,s,c,Jn(r))}catch(ee){_c(r,s,{then:function(){},status:"rejected",reason:ee},Jn())}finally{he.p=m,Q.T=T}}function _x(){}function Bg(r,s,o,c){if(r.tag!==5)throw Error(i(476));var f=E0(r).queue;v0(r,f,s,ve,o===null?_x:function(){return T0(r),o(c)})}function E0(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ve,baseState:ve,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:ve},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function T0(r){var s=E0(r).next.queue;_c(r,s,{},Jn())}function zg(){return En(kc)}function w0(){return Ft().memoizedState}function b0(){return Ft().memoizedState}function yx(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=Jn();r=ls(o);var c=us(s,r,o);c!==null&&(Zn(c,s,o),hc(c,s,o)),s={cache:gg()},r.payload=s;return}s=s.return}}function vx(r,s,o){var c=Jn();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},rf(r)?A0(s,o):(o=ag(r,s,o,c),o!==null&&(Zn(o,r,c),S0(o,s,c)))}function I0(r,s,o){var c=Jn();_c(r,s,o,c)}function _c(r,s,o,c){var f={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(rf(r))A0(s,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var T=s.lastRenderedState,b=m(T,o);if(f.hasEagerState=!0,f.eagerState=b,Kn(b,T))return zd(r,s,f,0),ut===null&&Bd(),!1}catch{}finally{}if(o=ag(r,s,f,c),o!==null)return Zn(o,r,c),S0(o,s,c),!0}return!1}function Fg(r,s,o,c){if(c={lane:2,revertLane:v_(),action:c,hasEagerState:!1,eagerState:null,next:null},rf(r)){if(s)throw Error(i(479))}else s=ag(r,o,c,2),s!==null&&Zn(s,r,2)}function rf(r){var s=r.alternate;return r===ke||s!==null&&s===ke}function A0(r,s){il=Xd=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function S0(r,s,o){if((o&4194048)!==0){var c=s.lanes;c&=r.pendingLanes,o|=c,s.lanes=o,Bu(r,o)}}var sf={readContext:En,use:Zd,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useLayoutEffect:Ot,useInsertionEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useSyncExternalStore:Ot,useId:Ot,useHostTransitionStatus:Ot,useFormState:Ot,useActionState:Ot,useOptimistic:Ot,useMemoCache:Ot,useCacheRefresh:Ot},R0={readContext:En,use:Zd,useCallback:function(r,s){return Mn().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:c0,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,nf(4194308,4,p0.bind(null,s,r),o)},useLayoutEffect:function(r,s){return nf(4194308,4,r,s)},useInsertionEffect:function(r,s){nf(4,2,r,s)},useMemo:function(r,s){var o=Mn();s=s===void 0?null:s;var c=r();if(za){Hn(!0);try{r()}finally{Hn(!1)}}return o.memoizedState=[c,s],c},useReducer:function(r,s,o){var c=Mn();if(o!==void 0){var f=o(s);if(za){Hn(!0);try{o(s)}finally{Hn(!1)}}}else f=s;return c.memoizedState=c.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},c.queue=r,r=r.dispatch=vx.bind(null,ke,r),[c.memoizedState,r]},useRef:function(r){var s=Mn();return r={current:r},s.memoizedState=r},useState:function(r){r=kg(r);var s=r.queue,o=I0.bind(null,ke,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:Lg,useDeferredValue:function(r,s){var o=Mn();return Ug(o,r,s)},useTransition:function(){var r=kg(!1);return r=v0.bind(null,ke,r.queue,!0,!1),Mn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var c=ke,f=Mn();if(Ye){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),ut===null)throw Error(i(349));(Ge&124)!==0||QT(c,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,c0(WT.bind(null,c,m,r),[r]),c.flags|=2048,sl(9,tf(),YT.bind(null,c,m,o,s),null),o},useId:function(){var r=Mn(),s=ut.identifierPrefix;if(Ye){var o=Rr,c=Sr;o=(c&~(1<<32-vn(c)-1)).toString(32)+o,s="«"+s+"R"+o,o=Jd++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=fx++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:zg,useFormState:s0,useActionState:s0,useOptimistic:function(r){var s=Mn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Fg.bind(null,ke,!0,o),o.dispatch=s,[r,s]},useMemoCache:Ng,useCacheRefresh:function(){return Mn().memoizedState=yx.bind(null,ke)}},C0={readContext:En,use:Zd,useCallback:g0,useContext:En,useEffect:h0,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:_0,useReducer:ef,useRef:u0,useState:function(){return ef(xr)},useDebugValue:Lg,useDeferredValue:function(r,s){var o=Ft();return y0(o,rt.memoizedState,r,s)},useTransition:function(){var r=ef(xr)[0],s=Ft().memoizedState;return[typeof r=="boolean"?r:mc(r),s]},useSyncExternalStore:KT,useId:w0,useHostTransitionStatus:zg,useFormState:a0,useActionState:a0,useOptimistic:function(r,s){var o=Ft();return ZT(o,rt,r,s)},useMemoCache:Ng,useCacheRefresh:b0},Ex={readContext:En,use:Zd,useCallback:g0,useContext:En,useEffect:h0,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:_0,useReducer:Vg,useRef:u0,useState:function(){return Vg(xr)},useDebugValue:Lg,useDeferredValue:function(r,s){var o=Ft();return rt===null?Ug(o,r,s):y0(o,rt.memoizedState,r,s)},useTransition:function(){var r=Vg(xr)[0],s=Ft().memoizedState;return[typeof r=="boolean"?r:mc(r),s]},useSyncExternalStore:KT,useId:w0,useHostTransitionStatus:zg,useFormState:l0,useActionState:l0,useOptimistic:function(r,s){var o=Ft();return rt!==null?ZT(o,rt,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Ng,useCacheRefresh:b0},al=null,yc=0;function af(r){var s=yc;return yc+=1,al===null&&(al=[]),BT(al,r,s)}function vc(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function of(r,s){throw s.$$typeof===v?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function D0(r){var s=r._init;return s(r._payload)}function x0(r){function s(U,O){if(r){var q=U.deletions;q===null?(U.deletions=[O],U.flags|=16):q.push(O)}}function o(U,O){if(!r)return null;for(;O!==null;)s(U,O),O=O.sibling;return null}function c(U){for(var O=new Map;U!==null;)U.key!==null?O.set(U.key,U):O.set(U.index,U),U=U.sibling;return O}function f(U,O){return U=Ar(U,O),U.index=0,U.sibling=null,U}function m(U,O,q){return U.index=q,r?(q=U.alternate,q!==null?(q=q.index,q<O?(U.flags|=67108866,O):q):(U.flags|=67108866,O)):(U.flags|=1048576,O)}function T(U){return r&&U.alternate===null&&(U.flags|=67108866),U}function b(U,O,q,J){return O===null||O.tag!==6?(O=lg(q,U.mode,J),O.return=U,O):(O=f(O,q),O.return=U,O)}function D(U,O,q,J){var _e=q.type;return _e===L?W(U,O,q.props.children,J,q.key):O!==null&&(O.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===A&&D0(_e)===O.type)?(O=f(O,q.props),vc(O,q),O.return=U,O):(O=qd(q.type,q.key,q.props,null,U.mode,J),vc(O,q),O.return=U,O)}function j(U,O,q,J){return O===null||O.tag!==4||O.stateNode.containerInfo!==q.containerInfo||O.stateNode.implementation!==q.implementation?(O=ug(q,U.mode,J),O.return=U,O):(O=f(O,q.children||[]),O.return=U,O)}function W(U,O,q,J,_e){return O===null||O.tag!==7?(O=Na(q,U.mode,J,_e),O.return=U,O):(O=f(O,q),O.return=U,O)}function ee(U,O,q){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=lg(""+O,U.mode,q),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return q=qd(O.type,O.key,O.props,null,U.mode,q),vc(q,O),q.return=U,q;case R:return O=ug(O,U.mode,q),O.return=U,O;case A:var J=O._init;return O=J(O._payload),ee(U,O,q)}if(lt(O)||M(O))return O=Na(O,U.mode,q,null),O.return=U,O;if(typeof O.then=="function")return ee(U,af(O),q);if(O.$$typeof===Y)return ee(U,$d(U,O),q);of(U,O)}return null}function G(U,O,q,J){var _e=O!==null?O.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return _e!==null?null:b(U,O,""+q,J);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case w:return q.key===_e?D(U,O,q,J):null;case R:return q.key===_e?j(U,O,q,J):null;case A:return _e=q._init,q=_e(q._payload),G(U,O,q,J)}if(lt(q)||M(q))return _e!==null?null:W(U,O,q,J,null);if(typeof q.then=="function")return G(U,O,af(q),J);if(q.$$typeof===Y)return G(U,O,$d(U,q),J);of(U,q)}return null}function H(U,O,q,J,_e){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return U=U.get(q)||null,b(O,U,""+J,_e);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case w:return U=U.get(J.key===null?q:J.key)||null,D(O,U,J,_e);case R:return U=U.get(J.key===null?q:J.key)||null,j(O,U,J,_e);case A:var Me=J._init;return J=Me(J._payload),H(U,O,q,J,_e)}if(lt(J)||M(J))return U=U.get(q)||null,W(O,U,J,_e,null);if(typeof J.then=="function")return H(U,O,q,af(J),_e);if(J.$$typeof===Y)return H(U,O,q,$d(O,J),_e);of(O,J)}return null}function De(U,O,q,J){for(var _e=null,Me=null,we=O,Re=O=0,rn=null;we!==null&&Re<q.length;Re++){we.index>Re?(rn=we,we=null):rn=we.sibling;var Ke=G(U,we,q[Re],J);if(Ke===null){we===null&&(we=rn);break}r&&we&&Ke.alternate===null&&s(U,we),O=m(Ke,O,Re),Me===null?_e=Ke:Me.sibling=Ke,Me=Ke,we=rn}if(Re===q.length)return o(U,we),Ye&&Va(U,Re),_e;if(we===null){for(;Re<q.length;Re++)we=ee(U,q[Re],J),we!==null&&(O=m(we,O,Re),Me===null?_e=we:Me.sibling=we,Me=we);return Ye&&Va(U,Re),_e}for(we=c(we);Re<q.length;Re++)rn=H(we,U,Re,q[Re],J),rn!==null&&(r&&rn.alternate!==null&&we.delete(rn.key===null?Re:rn.key),O=m(rn,O,Re),Me===null?_e=rn:Me.sibling=rn,Me=rn);return r&&we.forEach(function(Ss){return s(U,Ss)}),Ye&&Va(U,Re),_e}function Ae(U,O,q,J){if(q==null)throw Error(i(151));for(var _e=null,Me=null,we=O,Re=O=0,rn=null,Ke=q.next();we!==null&&!Ke.done;Re++,Ke=q.next()){we.index>Re?(rn=we,we=null):rn=we.sibling;var Ss=G(U,we,Ke.value,J);if(Ss===null){we===null&&(we=rn);break}r&&we&&Ss.alternate===null&&s(U,we),O=m(Ss,O,Re),Me===null?_e=Ss:Me.sibling=Ss,Me=Ss,we=rn}if(Ke.done)return o(U,we),Ye&&Va(U,Re),_e;if(we===null){for(;!Ke.done;Re++,Ke=q.next())Ke=ee(U,Ke.value,J),Ke!==null&&(O=m(Ke,O,Re),Me===null?_e=Ke:Me.sibling=Ke,Me=Ke);return Ye&&Va(U,Re),_e}for(we=c(we);!Ke.done;Re++,Ke=q.next())Ke=H(we,U,Re,Ke.value,J),Ke!==null&&(r&&Ke.alternate!==null&&we.delete(Ke.key===null?Re:Ke.key),O=m(Ke,O,Re),Me===null?_e=Ke:Me.sibling=Ke,Me=Ke);return r&&we.forEach(function(TP){return s(U,TP)}),Ye&&Va(U,Re),_e}function at(U,O,q,J){if(typeof q=="object"&&q!==null&&q.type===L&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case w:e:{for(var _e=q.key;O!==null;){if(O.key===_e){if(_e=q.type,_e===L){if(O.tag===7){o(U,O.sibling),J=f(O,q.props.children),J.return=U,U=J;break e}}else if(O.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===A&&D0(_e)===O.type){o(U,O.sibling),J=f(O,q.props),vc(J,q),J.return=U,U=J;break e}o(U,O);break}else s(U,O);O=O.sibling}q.type===L?(J=Na(q.props.children,U.mode,J,q.key),J.return=U,U=J):(J=qd(q.type,q.key,q.props,null,U.mode,J),vc(J,q),J.return=U,U=J)}return T(U);case R:e:{for(_e=q.key;O!==null;){if(O.key===_e)if(O.tag===4&&O.stateNode.containerInfo===q.containerInfo&&O.stateNode.implementation===q.implementation){o(U,O.sibling),J=f(O,q.children||[]),J.return=U,U=J;break e}else{o(U,O);break}else s(U,O);O=O.sibling}J=ug(q,U.mode,J),J.return=U,U=J}return T(U);case A:return _e=q._init,q=_e(q._payload),at(U,O,q,J)}if(lt(q))return De(U,O,q,J);if(M(q)){if(_e=M(q),typeof _e!="function")throw Error(i(150));return q=_e.call(q),Ae(U,O,q,J)}if(typeof q.then=="function")return at(U,O,af(q),J);if(q.$$typeof===Y)return at(U,O,$d(U,q),J);of(U,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,O!==null&&O.tag===6?(o(U,O.sibling),J=f(O,q),J.return=U,U=J):(o(U,O),J=lg(q,U.mode,J),J.return=U,U=J),T(U)):o(U,O)}return function(U,O,q,J){try{yc=0;var _e=at(U,O,q,J);return al=null,_e}catch(we){if(we===uc||we===Qd)throw we;var Me=Qn(29,we,null,U.mode);return Me.lanes=J,Me.return=U,Me}finally{}}}var ol=x0(!0),P0=x0(!1),gi=te(null),$i=null;function hs(r){var s=r.alternate;ae(Yt,Yt.current&1),ae(gi,r),$i===null&&(s===null||nl.current!==null||s.memoizedState!==null)&&($i=r)}function N0(r){if(r.tag===22){if(ae(Yt,Yt.current),ae(gi,r),$i===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&($i=r)}}else ds()}function ds(){ae(Yt,Yt.current),ae(gi,gi.current)}function Pr(r){le(gi),$i===r&&($i=null),le(Yt)}var Yt=te(0);function lf(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||P_(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function qg(r,s,o,c){s=r.memoizedState,o=o(c,s),o=o==null?s:y({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var jg={enqueueSetState:function(r,s,o){r=r._reactInternals;var c=Jn(),f=ls(c);f.payload=s,o!=null&&(f.callback=o),s=us(r,f,c),s!==null&&(Zn(s,r,c),hc(s,r,c))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var c=Jn(),f=ls(c);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=us(r,f,c),s!==null&&(Zn(s,r,c),hc(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=Jn(),c=ls(o);c.tag=2,s!=null&&(c.callback=s),s=us(r,c,o),s!==null&&(Zn(s,r,o),hc(s,r,o))}};function O0(r,s,o,c,f,m,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,T):s.prototype&&s.prototype.isPureReactComponent?!tc(o,c)||!tc(f,m):!0}function V0(r,s,o,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,c),s.state!==r&&jg.enqueueReplaceState(s,s.state,null)}function Fa(r,s){var o=s;if("ref"in s){o={};for(var c in s)c!=="ref"&&(o[c]=s[c])}if(r=r.defaultProps){o===s&&(o=y({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var uf=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function k0(r){uf(r)}function M0(r){console.error(r)}function L0(r){uf(r)}function cf(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function U0(r,s,o){try{var c=r.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Gg(r,s,o){return o=ls(o),o.tag=3,o.payload={element:null},o.callback=function(){cf(r,s)},o}function B0(r){return r=ls(r),r.tag=3,r}function z0(r,s,o,c){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=c.value;r.payload=function(){return f(m)},r.callback=function(){U0(s,o,c)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(r.callback=function(){U0(s,o,c),typeof f!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var b=c.stack;this.componentDidCatch(c.value,{componentStack:b!==null?b:""})})}function Tx(r,s,o,c,f){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=o.alternate,s!==null&&ac(s,o,f,!0),o=gi.current,o!==null){switch(o.tag){case 13:return $i===null?p_():o.alternate===null&&Rt===0&&(Rt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,c===vg?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([c]):s.add(c),g_(r,c,f)),!1;case 22:return o.flags|=65536,c===vg?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([c]):o.add(c)),g_(r,c,f)),!1}throw Error(i(435,o.tag))}return g_(r,c,f),p_(),!1}if(Ye)return s=gi.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,c!==dg&&(r=Error(i(422),{cause:c}),sc(di(r,o)))):(c!==dg&&(s=Error(i(423),{cause:c}),sc(di(s,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,c=di(c,o),f=Gg(r.stateNode,c,f),wg(r,f),Rt!==4&&(Rt=2)),!1;var m=Error(i(520),{cause:c});if(m=di(m,o),Sc===null?Sc=[m]:Sc.push(m),Rt!==4&&(Rt=2),s===null)return!0;c=di(c,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=Gg(o.stateNode,c,r),wg(o,r),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ys===null||!ys.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=B0(f),z0(f,r,o,c),wg(o,f),!1}o=o.return}while(o!==null);return!1}var F0=Error(i(461)),tn=!1;function hn(r,s,o,c){s.child=r===null?P0(s,null,o,c):ol(s,r.child,o,c)}function q0(r,s,o,c,f){o=o.render;var m=s.ref;if("ref"in c){var T={};for(var b in c)b!=="ref"&&(T[b]=c[b])}else T=c;return Ua(s),c=Rg(r,s,o,T,m,f),b=Cg(),r!==null&&!tn?(Dg(r,s,f),Nr(r,s,f)):(Ye&&b&&cg(s),s.flags|=1,hn(r,s,c,f),s.child)}function j0(r,s,o,c,f){if(r===null){var m=o.type;return typeof m=="function"&&!og(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,G0(r,s,m,c,f)):(r=qd(o.type,null,c,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!Jg(r,f)){var T=m.memoizedProps;if(o=o.compare,o=o!==null?o:tc,o(T,c)&&r.ref===s.ref)return Nr(r,s,f)}return s.flags|=1,r=Ar(m,c),r.ref=s.ref,r.return=s,s.child=r}function G0(r,s,o,c,f){if(r!==null){var m=r.memoizedProps;if(tc(m,c)&&r.ref===s.ref)if(tn=!1,s.pendingProps=c=m,Jg(r,f))(r.flags&131072)!==0&&(tn=!0);else return s.lanes=r.lanes,Nr(r,s,f)}return Hg(r,s,o,c,f)}function H0(r,s,o){var c=s.pendingProps,f=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((s.flags&128)!==0){if(c=m!==null?m.baseLanes|o:o,r!==null){for(f=s.child=r.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;s.childLanes=m&~c}else s.childLanes=0,s.child=null;return $0(r,s,c,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Kd(s,m!==null?m.cachePool:null),m!==null?GT(s,m):Ig(),N0(s);else return s.lanes=s.childLanes=536870912,$0(r,s,m!==null?m.baseLanes|o:o,o)}else m!==null?(Kd(s,m.cachePool),GT(s,m),ds(),s.memoizedState=null):(r!==null&&Kd(s,null),Ig(),ds());return hn(r,s,f,o),s.child}function $0(r,s,o,c){var f=yg();return f=f===null?null:{parent:Qt._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},r!==null&&Kd(s,null),Ig(),N0(s),r!==null&&ac(r,s,c,!0),null}function hf(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function Hg(r,s,o,c,f){return Ua(s),o=Rg(r,s,o,c,void 0,f),c=Cg(),r!==null&&!tn?(Dg(r,s,f),Nr(r,s,f)):(Ye&&c&&cg(s),s.flags|=1,hn(r,s,o,f),s.child)}function K0(r,s,o,c,f,m){return Ua(s),s.updateQueue=null,o=$T(s,c,o,f),HT(r),c=Cg(),r!==null&&!tn?(Dg(r,s,m),Nr(r,s,m)):(Ye&&c&&cg(s),s.flags|=1,hn(r,s,o,m),s.child)}function Q0(r,s,o,c,f){if(Ua(s),s.stateNode===null){var m=Xo,T=o.contextType;typeof T=="object"&&T!==null&&(m=En(T)),m=new o(c,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=jg,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=c,m.state=s.memoizedState,m.refs={},Eg(s),T=o.contextType,m.context=typeof T=="object"&&T!==null?En(T):Xo,m.state=s.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(qg(s,o,T,c),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&jg.enqueueReplaceState(m,m.state,null),fc(s,c,m,f),dc(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){m=s.stateNode;var b=s.memoizedProps,D=Fa(o,b);m.props=D;var j=m.context,W=o.contextType;T=Xo,typeof W=="object"&&W!==null&&(T=En(W));var ee=o.getDerivedStateFromProps;W=typeof ee=="function"||typeof m.getSnapshotBeforeUpdate=="function",b=s.pendingProps!==b,W||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b||j!==T)&&V0(s,m,c,T),os=!1;var G=s.memoizedState;m.state=G,fc(s,c,m,f),dc(),j=s.memoizedState,b||G!==j||os?(typeof ee=="function"&&(qg(s,o,ee,c),j=s.memoizedState),(D=os||O0(s,o,D,c,G,j,T))?(W||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=j),m.props=c,m.state=j,m.context=T,c=D):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{m=s.stateNode,Tg(r,s),T=s.memoizedProps,W=Fa(o,T),m.props=W,ee=s.pendingProps,G=m.context,j=o.contextType,D=Xo,typeof j=="object"&&j!==null&&(D=En(j)),b=o.getDerivedStateFromProps,(j=typeof b=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==ee||G!==D)&&V0(s,m,c,D),os=!1,G=s.memoizedState,m.state=G,fc(s,c,m,f),dc();var H=s.memoizedState;T!==ee||G!==H||os||r!==null&&r.dependencies!==null&&Hd(r.dependencies)?(typeof b=="function"&&(qg(s,o,b,c),H=s.memoizedState),(W=os||O0(s,o,W,c,G,H,D)||r!==null&&r.dependencies!==null&&Hd(r.dependencies))?(j||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,H,D),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,H,D)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=H),m.props=c,m.state=H,m.context=D,c=W):(typeof m.componentDidUpdate!="function"||T===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),c=!1)}return m=c,hf(r,s),c=(s.flags&128)!==0,m||c?(m=s.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&c?(s.child=ol(s,r.child,null,f),s.child=ol(s,null,o,f)):hn(r,s,o,f),s.memoizedState=m.state,r=s.child):r=Nr(r,s,f),r}function Y0(r,s,o,c){return rc(),s.flags|=256,hn(r,s,o,c),s.child}var $g={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kg(r){return{baseLanes:r,cachePool:MT()}}function Qg(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=_i),r}function W0(r,s,o){var c=s.pendingProps,f=!1,m=(s.flags&128)!==0,T;if((T=m)||(T=r!==null&&r.memoizedState===null?!1:(Yt.current&2)!==0),T&&(f=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,r===null){if(Ye){if(f?hs(s):ds(),Ye){var b=St,D;if(D=b){e:{for(D=b,b=Hi;D.nodeType!==8;){if(!b){b=null;break e}if(D=Ci(D.nextSibling),D===null){b=null;break e}}b=D}b!==null?(s.memoizedState={dehydrated:b,treeContext:Oa!==null?{id:Sr,overflow:Rr}:null,retryLane:536870912,hydrationErrors:null},D=Qn(18,null,null,0),D.stateNode=b,D.return=s,s.child=D,Dn=s,St=null,D=!0):D=!1}D||Ma(s)}if(b=s.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return P_(b)?s.lanes=32:s.lanes=536870912,null;Pr(s)}return b=c.children,c=c.fallback,f?(ds(),f=s.mode,b=df({mode:"hidden",children:b},f),c=Na(c,f,o,null),b.return=s,c.return=s,b.sibling=c,s.child=b,f=s.child,f.memoizedState=Kg(o),f.childLanes=Qg(r,T,o),s.memoizedState=$g,c):(hs(s),Yg(s,b))}if(D=r.memoizedState,D!==null&&(b=D.dehydrated,b!==null)){if(m)s.flags&256?(hs(s),s.flags&=-257,s=Wg(r,s,o)):s.memoizedState!==null?(ds(),s.child=r.child,s.flags|=128,s=null):(ds(),f=c.fallback,b=s.mode,c=df({mode:"visible",children:c.children},b),f=Na(f,b,o,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,ol(s,r.child,null,o),c=s.child,c.memoizedState=Kg(o),c.childLanes=Qg(r,T,o),s.memoizedState=$g,s=f);else if(hs(s),P_(b)){if(T=b.nextSibling&&b.nextSibling.dataset,T)var j=T.dgst;T=j,c=Error(i(419)),c.stack="",c.digest=T,sc({value:c,source:null,stack:null}),s=Wg(r,s,o)}else if(tn||ac(r,s,o,!1),T=(o&r.childLanes)!==0,tn||T){if(T=ut,T!==null&&(c=o&-o,c=(c&42)!==0?1:Zr(c),c=(c&(T.suspendedLanes|o))!==0?0:c,c!==0&&c!==D.retryLane))throw D.retryLane=c,Wo(r,c),Zn(T,r,c),F0;b.data==="$?"||p_(),s=Wg(r,s,o)}else b.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=D.treeContext,St=Ci(b.nextSibling),Dn=s,Ye=!0,ka=null,Hi=!1,r!==null&&(pi[mi++]=Sr,pi[mi++]=Rr,pi[mi++]=Oa,Sr=r.id,Rr=r.overflow,Oa=s),s=Yg(s,c.children),s.flags|=4096);return s}return f?(ds(),f=c.fallback,b=s.mode,D=r.child,j=D.sibling,c=Ar(D,{mode:"hidden",children:c.children}),c.subtreeFlags=D.subtreeFlags&65011712,j!==null?f=Ar(j,f):(f=Na(f,b,o,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,b=r.child.memoizedState,b===null?b=Kg(o):(D=b.cachePool,D!==null?(j=Qt._currentValue,D=D.parent!==j?{parent:j,pool:j}:D):D=MT(),b={baseLanes:b.baseLanes|o,cachePool:D}),f.memoizedState=b,f.childLanes=Qg(r,T,o),s.memoizedState=$g,c):(hs(s),o=r.child,r=o.sibling,o=Ar(o,{mode:"visible",children:c.children}),o.return=s,o.sibling=null,r!==null&&(T=s.deletions,T===null?(s.deletions=[r],s.flags|=16):T.push(r)),s.child=o,s.memoizedState=null,o)}function Yg(r,s){return s=df({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function df(r,s){return r=Qn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function Wg(r,s,o){return ol(s,r.child,null,o),r=Yg(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function X0(r,s,o){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),pg(r.return,s,o)}function Xg(r,s,o,c,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function J0(r,s,o){var c=s.pendingProps,f=c.revealOrder,m=c.tail;if(hn(r,s,c.children,o),c=Yt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&X0(r,o,s);else if(r.tag===19)X0(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(ae(Yt,c),f){case"forwards":for(o=s.child,f=null;o!==null;)r=o.alternate,r!==null&&lf(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Xg(s,!1,f,o,m);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&lf(r)===null){s.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}Xg(s,!0,o,null,m);break;case"together":Xg(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Nr(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),_s|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(ac(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=Ar(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=Ar(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function Jg(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Hd(r)))}function wx(r,s,o){switch(s.tag){case 3:$e(s,s.stateNode.containerInfo),as(s,Qt,r.memoizedState.cache),rc();break;case 27:case 5:si(s);break;case 4:$e(s,s.stateNode.containerInfo);break;case 10:as(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(hs(s),s.flags|=128,null):(o&s.child.childLanes)!==0?W0(r,s,o):(hs(s),r=Nr(r,s,o),r!==null?r.sibling:null);hs(s);break;case 19:var f=(r.flags&128)!==0;if(c=(o&s.childLanes)!==0,c||(ac(r,s,o,!1),c=(o&s.childLanes)!==0),f){if(c)return J0(r,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ae(Yt,Yt.current),c)break;return null;case 22:case 23:return s.lanes=0,H0(r,s,o);case 24:as(s,Qt,r.memoizedState.cache)}return Nr(r,s,o)}function Z0(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)tn=!0;else{if(!Jg(r,o)&&(s.flags&128)===0)return tn=!1,wx(r,s,o);tn=(r.flags&131072)!==0}else tn=!1,Ye&&(s.flags&1048576)!==0&&DT(s,Gd,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,f=c._init;if(c=f(c._payload),s.type=c,typeof c=="function")og(c)?(r=Fa(c,r),s.tag=1,s=Q0(null,s,c,r,o)):(s.tag=0,s=Hg(null,s,c,r,o));else{if(c!=null){if(f=c.$$typeof,f===oe){s.tag=11,s=q0(null,s,c,r,o);break e}else if(f===S){s.tag=14,s=j0(null,s,c,r,o);break e}}throw s=Pt(c)||c,Error(i(306,s,""))}}return s;case 0:return Hg(r,s,s.type,s.pendingProps,o);case 1:return c=s.type,f=Fa(c,s.pendingProps),Q0(r,s,c,f,o);case 3:e:{if($e(s,s.stateNode.containerInfo),r===null)throw Error(i(387));c=s.pendingProps;var m=s.memoizedState;f=m.element,Tg(r,s),fc(s,c,null,o);var T=s.memoizedState;if(c=T.cache,as(s,Qt,c),c!==m.cache&&mg(s,[Qt],o,!0),dc(),c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=Y0(r,s,c,o);break e}else if(c!==f){f=di(Error(i(424)),s),sc(f),s=Y0(r,s,c,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(St=Ci(r.firstChild),Dn=s,Ye=!0,ka=null,Hi=!0,o=P0(s,null,c,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(rc(),c===f){s=Nr(r,s,o);break e}hn(r,s,c,o)}s=s.child}return s;case 26:return hf(r,s),r===null?(o=ib(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ye||(o=s.type,r=s.pendingProps,c=Sf(be.current).createElement(o),c[Ht]=s,c[Ut]=r,fn(c,o,r),Nt(c),s.stateNode=c):s.memoizedState=ib(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return si(s),r===null&&Ye&&(c=s.stateNode=eb(s.type,s.pendingProps,be.current),Dn=s,Hi=!0,f=St,Ts(s.type)?(N_=f,St=Ci(c.firstChild)):St=f),hn(r,s,s.pendingProps.children,o),hf(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Ye&&((f=c=St)&&(c=Wx(c,s.type,s.pendingProps,Hi),c!==null?(s.stateNode=c,Dn=s,St=Ci(c.firstChild),Hi=!1,f=!0):f=!1),f||Ma(s)),si(s),f=s.type,m=s.pendingProps,T=r!==null?r.memoizedProps:null,c=m.children,C_(f,m)?c=null:T!==null&&C_(f,T)&&(s.flags|=32),s.memoizedState!==null&&(f=Rg(r,s,px,null,null,o),kc._currentValue=f),hf(r,s),hn(r,s,c,o),s.child;case 6:return r===null&&Ye&&((r=o=St)&&(o=Xx(o,s.pendingProps,Hi),o!==null?(s.stateNode=o,Dn=s,St=null,r=!0):r=!1),r||Ma(s)),null;case 13:return W0(r,s,o);case 4:return $e(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=ol(s,null,c,o):hn(r,s,c,o),s.child;case 11:return q0(r,s,s.type,s.pendingProps,o);case 7:return hn(r,s,s.pendingProps,o),s.child;case 8:return hn(r,s,s.pendingProps.children,o),s.child;case 12:return hn(r,s,s.pendingProps.children,o),s.child;case 10:return c=s.pendingProps,as(s,s.type,c.value),hn(r,s,c.children,o),s.child;case 9:return f=s.type._context,c=s.pendingProps.children,Ua(s),f=En(f),c=c(f),s.flags|=1,hn(r,s,c,o),s.child;case 14:return j0(r,s,s.type,s.pendingProps,o);case 15:return G0(r,s,s.type,s.pendingProps,o);case 19:return J0(r,s,o);case 31:return c=s.pendingProps,o=s.mode,c={mode:c.mode,children:c.children},r===null?(o=df(c,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Ar(r.child,c),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return H0(r,s,o);case 24:return Ua(s),c=En(Qt),r===null?(f=yg(),f===null&&(f=ut,m=gg(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:c,cache:f},Eg(s),as(s,Qt,f)):((r.lanes&o)!==0&&(Tg(r,s),fc(s,null,null,o),dc()),f=r.memoizedState,m=s.memoizedState,f.parent!==c?(f={parent:c,cache:c},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),as(s,Qt,c)):(c=m.cache,as(s,Qt,c),c!==f.cache&&mg(s,[Qt],o,!0))),hn(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Or(r){r.flags|=4}function ew(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!lb(s)){if(s=gi.current,s!==null&&((Ge&4194048)===Ge?$i!==null:(Ge&62914560)!==Ge&&(Ge&536870912)===0||s!==$i))throw cc=vg,LT;r.flags|=8192}}function ff(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Lu():536870912,r.lanes|=s,hl|=s)}function Ec(r,s){if(!Ye)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Tt(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,c=0;if(s)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=o,s}function bx(r,s,o){var c=s.pendingProps;switch(hg(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(s),null;case 1:return Tt(s),null;case 3:return o=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),Dr(Qt),Jt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(ic(s)?Or(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,NT())),Tt(s),null;case 26:return o=s.memoizedState,r===null?(Or(s),o!==null?(Tt(s),ew(s,o)):(Tt(s),s.flags&=-16777217)):o?o!==r.memoizedState?(Or(s),Tt(s),ew(s,o)):(Tt(s),s.flags&=-16777217):(r.memoizedProps!==c&&Or(s),Tt(s),s.flags&=-16777217),null;case 27:kn(s),o=be.current;var f=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Or(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return Tt(s),null}r=Te.current,ic(s)?xT(s):(r=eb(f,c,o),s.stateNode=r,Or(s))}return Tt(s),null;case 5:if(kn(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Or(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return Tt(s),null}if(r=Te.current,ic(s))xT(s);else{switch(f=Sf(be.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?f.createElement(o,{is:c.is}):f.createElement(o)}}r[Ht]=s,r[Ut]=c;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=r;e:switch(fn(r,o,c),o){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Or(s)}}return Tt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&Or(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=be.current,ic(s)){if(r=s.stateNode,o=s.memoizedProps,c=null,f=Dn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}r[Ht]=s,r=!!(r.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||Kw(r.nodeValue,o)),r||Ma(s)}else r=Sf(r).createTextNode(c),r[Ht]=s,s.stateNode=r}return Tt(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=ic(s),c!==null&&c.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Ht]=s}else rc(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Tt(s),f=!1}else f=NT(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(Pr(s),s):(Pr(s),null)}if(Pr(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=c!==null,r=r!==null&&r.memoizedState!==null,o){c=s.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==f&&(c.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),ff(s,s.updateQueue),Tt(s),null;case 4:return Jt(),r===null&&b_(s.stateNode.containerInfo),Tt(s),null;case 10:return Dr(s.type),Tt(s),null;case 19:if(le(Yt),f=s.memoizedState,f===null)return Tt(s),null;if(c=(s.flags&128)!==0,m=f.rendering,m===null)if(c)Ec(f,!1);else{if(Rt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=lf(r),m!==null){for(s.flags|=128,Ec(f,!1),r=m.updateQueue,s.updateQueue=r,ff(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)CT(o,r),o=o.sibling;return ae(Yt,Yt.current&1|2),s.child}r=r.sibling}f.tail!==null&&ai()>gf&&(s.flags|=128,c=!0,Ec(f,!1),s.lanes=4194304)}else{if(!c)if(r=lf(m),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,ff(s,r),Ec(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ye)return Tt(s),null}else 2*ai()-f.renderingStartTime>gf&&o!==536870912&&(s.flags|=128,c=!0,Ec(f,!1),s.lanes=4194304);f.isBackwards?(m.sibling=s.child,s.child=m):(r=f.last,r!==null?r.sibling=m:s.child=m,f.last=m)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=ai(),s.sibling=null,r=Yt.current,ae(Yt,c?r&1|2:r&1),s):(Tt(s),null);case 22:case 23:return Pr(s),Ag(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(o&536870912)!==0&&(s.flags&128)===0&&(Tt(s),s.subtreeFlags&6&&(s.flags|=8192)):Tt(s),o=s.updateQueue,o!==null&&ff(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==o&&(s.flags|=2048),r!==null&&le(Ba),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Dr(Qt),Tt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function Ix(r,s){switch(hg(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Dr(Qt),Jt(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return kn(s),null;case 13:if(Pr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));rc()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return le(Yt),null;case 4:return Jt(),null;case 10:return Dr(s.type),null;case 22:case 23:return Pr(s),Ag(),r!==null&&le(Ba),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Dr(Qt),null;case 25:return null;default:return null}}function tw(r,s){switch(hg(s),s.tag){case 3:Dr(Qt),Jt();break;case 26:case 27:case 5:kn(s);break;case 4:Jt();break;case 13:Pr(s);break;case 19:le(Yt);break;case 10:Dr(s.type);break;case 22:case 23:Pr(s),Ag(),r!==null&&le(Ba);break;case 24:Dr(Qt)}}function Tc(r,s){try{var o=s.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&r)===r){c=void 0;var m=o.create,T=o.inst;c=m(),T.destroy=c}o=o.next}while(o!==f)}}catch(b){ot(s,s.return,b)}}function fs(r,s,o){try{var c=s.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var m=f.next;c=m;do{if((c.tag&r)===r){var T=c.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,f=s;var D=o,j=b;try{j()}catch(W){ot(f,D,W)}}}c=c.next}while(c!==m)}}catch(W){ot(s,s.return,W)}}function nw(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{jT(s,o)}catch(c){ot(r,r.return,c)}}}function iw(r,s,o){o.props=Fa(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(c){ot(r,s,c)}}function wc(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof o=="function"?r.refCleanup=o(c):o.current=c}}catch(f){ot(r,s,f)}}function Ki(r,s){var o=r.ref,c=r.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(f){ot(r,s,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){ot(r,s,f)}else o.current=null}function rw(r){var s=r.type,o=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(f){ot(r,r.return,f)}}function Zg(r,s,o){try{var c=r.stateNode;Hx(c,r.type,o,s),c[Ut]=s}catch(f){ot(r,r.return,f)}}function sw(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Ts(r.type)||r.tag===4}function e_(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||sw(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Ts(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function t_(r,s,o){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Af));else if(c!==4&&(c===27&&Ts(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(t_(r,s,o),r=r.sibling;r!==null;)t_(r,s,o),r=r.sibling}function pf(r,s,o){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(c!==4&&(c===27&&Ts(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(pf(r,s,o),r=r.sibling;r!==null;)pf(r,s,o),r=r.sibling}function aw(r){var s=r.stateNode,o=r.memoizedProps;try{for(var c=r.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);fn(s,c,o),s[Ht]=r,s[Ut]=o}catch(m){ot(r,r.return,m)}}var Vr=!1,Vt=!1,n_=!1,ow=typeof WeakSet=="function"?WeakSet:Set,nn=null;function Ax(r,s){if(r=r.containerInfo,S_=Nf,r=yT(r),eg(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var T=0,b=-1,D=-1,j=0,W=0,ee=r,G=null;t:for(;;){for(var H;ee!==o||f!==0&&ee.nodeType!==3||(b=T+f),ee!==m||c!==0&&ee.nodeType!==3||(D=T+c),ee.nodeType===3&&(T+=ee.nodeValue.length),(H=ee.firstChild)!==null;)G=ee,ee=H;for(;;){if(ee===r)break t;if(G===o&&++j===f&&(b=T),G===m&&++W===c&&(D=T),(H=ee.nextSibling)!==null)break;ee=G,G=ee.parentNode}ee=H}o=b===-1||D===-1?null:{start:b,end:D}}else o=null}o=o||{start:0,end:0}}else o=null;for(R_={focusedElem:r,selectionRange:o},Nf=!1,nn=s;nn!==null;)if(s=nn,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,nn=r;else for(;nn!==null;){switch(s=nn,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var De=Fa(o.type,f,o.elementType===o.type);r=c.getSnapshotBeforeUpdate(De,m),c.__reactInternalSnapshotBeforeUpdate=r}catch(Ae){ot(o,o.return,Ae)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)x_(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":x_(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,nn=r;break}nn=s.return}}function lw(r,s,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:ps(r,o),c&4&&Tc(5,o);break;case 1:if(ps(r,o),c&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(T){ot(o,o.return,T)}else{var f=Fa(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(f,s,r.__reactInternalSnapshotBeforeUpdate)}catch(T){ot(o,o.return,T)}}c&64&&nw(o),c&512&&wc(o,o.return);break;case 3:if(ps(r,o),c&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{jT(r,s)}catch(T){ot(o,o.return,T)}}break;case 27:s===null&&c&4&&aw(o);case 26:case 5:ps(r,o),s===null&&c&4&&rw(o),c&512&&wc(o,o.return);break;case 12:ps(r,o);break;case 13:ps(r,o),c&4&&hw(r,o),c&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=Vx.bind(null,o),Jx(r,o))));break;case 22:if(c=o.memoizedState!==null||Vr,!c){s=s!==null&&s.memoizedState!==null||Vt,f=Vr;var m=Vt;Vr=c,(Vt=s)&&!m?ms(r,o,(o.subtreeFlags&8772)!==0):ps(r,o),Vr=f,Vt=m}break;case 30:break;default:ps(r,o)}}function uw(r){var s=r.alternate;s!==null&&(r.alternate=null,uw(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&ns(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var pt=null,Ln=!1;function kr(r,s,o){for(o=o.child;o!==null;)cw(r,s,o),o=o.sibling}function cw(r,s,o){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(At,o)}catch{}switch(o.tag){case 26:Vt||Ki(o,s),kr(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Vt||Ki(o,s);var c=pt,f=Ln;Ts(o.type)&&(pt=o.stateNode,Ln=!1),kr(r,s,o),Pc(o.stateNode),pt=c,Ln=f;break;case 5:Vt||Ki(o,s);case 6:if(c=pt,f=Ln,pt=null,kr(r,s,o),pt=c,Ln=f,pt!==null)if(Ln)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(o.stateNode)}catch(m){ot(o,s,m)}else try{pt.removeChild(o.stateNode)}catch(m){ot(o,s,m)}break;case 18:pt!==null&&(Ln?(r=pt,Jw(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),Bc(r)):Jw(pt,o.stateNode));break;case 4:c=pt,f=Ln,pt=o.stateNode.containerInfo,Ln=!0,kr(r,s,o),pt=c,Ln=f;break;case 0:case 11:case 14:case 15:Vt||fs(2,o,s),Vt||fs(4,o,s),kr(r,s,o);break;case 1:Vt||(Ki(o,s),c=o.stateNode,typeof c.componentWillUnmount=="function"&&iw(o,s,c)),kr(r,s,o);break;case 21:kr(r,s,o);break;case 22:Vt=(c=Vt)||o.memoizedState!==null,kr(r,s,o),Vt=c;break;default:kr(r,s,o)}}function hw(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Bc(r)}catch(o){ot(s,s.return,o)}}function Sx(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new ow),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new ow),s;default:throw Error(i(435,r.tag))}}function i_(r,s){var o=Sx(r);s.forEach(function(c){var f=kx.bind(null,r,c);o.has(c)||(o.add(c),c.then(f,f))})}function Yn(r,s){var o=s.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],m=r,T=s,b=T;e:for(;b!==null;){switch(b.tag){case 27:if(Ts(b.type)){pt=b.stateNode,Ln=!1;break e}break;case 5:pt=b.stateNode,Ln=!1;break e;case 3:case 4:pt=b.stateNode.containerInfo,Ln=!0;break e}b=b.return}if(pt===null)throw Error(i(160));cw(m,T,f),pt=null,Ln=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)dw(s,r),s=s.sibling}var Ri=null;function dw(r,s){var o=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Yn(s,r),Wn(r),c&4&&(fs(3,r,r.return),Tc(3,r),fs(5,r,r.return));break;case 1:Yn(s,r),Wn(r),c&512&&(Vt||o===null||Ki(o,o.return)),c&64&&Vr&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var f=Ri;if(Yn(s,r),Wn(r),c&512&&(Vt||o===null||Ki(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=r.memoizedState,o===null)if(c===null)if(r.stateNode===null){e:{c=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ga]||m[Ht]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(c),f.head.insertBefore(m,f.querySelector("head > title"))),fn(m,c,o),m[Ht]=r,Nt(m),c=m;break e;case"link":var T=ab("link","href",f).get(c+(o.href||""));if(T){for(var b=0;b<T.length;b++)if(m=T[b],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(b,1);break t}}m=f.createElement(c),fn(m,c,o),f.head.appendChild(m);break;case"meta":if(T=ab("meta","content",f).get(c+(o.content||""))){for(b=0;b<T.length;b++)if(m=T[b],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(b,1);break t}}m=f.createElement(c),fn(m,c,o),f.head.appendChild(m);break;default:throw Error(i(468,c))}m[Ht]=r,Nt(m),c=m}r.stateNode=c}else ob(f,r.type,r.stateNode);else r.stateNode=sb(f,c,r.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?ob(f,r.type,r.stateNode):sb(f,c,r.memoizedProps)):c===null&&r.stateNode!==null&&Zg(r,r.memoizedProps,o.memoizedProps)}break;case 27:Yn(s,r),Wn(r),c&512&&(Vt||o===null||Ki(o,o.return)),o!==null&&c&4&&Zg(r,r.memoizedProps,o.memoizedProps);break;case 5:if(Yn(s,r),Wn(r),c&512&&(Vt||o===null||Ki(o,o.return)),r.flags&32){f=r.stateNode;try{li(f,"")}catch(H){ot(r,r.return,H)}}c&4&&r.stateNode!=null&&(f=r.memoizedProps,Zg(r,f,o!==null?o.memoizedProps:f)),c&1024&&(n_=!0);break;case 6:if(Yn(s,r),Wn(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,o=r.stateNode;try{o.nodeValue=c}catch(H){ot(r,r.return,H)}}break;case 3:if(Df=null,f=Ri,Ri=Rf(s.containerInfo),Yn(s,r),Ri=f,Wn(r),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Bc(s.containerInfo)}catch(H){ot(r,r.return,H)}n_&&(n_=!1,fw(r));break;case 4:c=Ri,Ri=Rf(r.stateNode.containerInfo),Yn(s,r),Wn(r),Ri=c;break;case 12:Yn(s,r),Wn(r);break;case 13:Yn(s,r),Wn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(u_=ai()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,i_(r,c)));break;case 22:f=r.memoizedState!==null;var D=o!==null&&o.memoizedState!==null,j=Vr,W=Vt;if(Vr=j||f,Vt=W||D,Yn(s,r),Vt=W,Vr=j,Wn(r),c&8192)e:for(s=r.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||D||Vr||Vt||qa(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){D=o=s;try{if(m=D.stateNode,f)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{b=D.stateNode;var ee=D.memoizedProps.style,G=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;b.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(H){ot(D,D.return,H)}}}else if(s.tag===6){if(o===null){D=s;try{D.stateNode.nodeValue=f?"":D.memoizedProps}catch(H){ot(D,D.return,H)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,i_(r,o))));break;case 19:Yn(s,r),Wn(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,i_(r,c)));break;case 30:break;case 21:break;default:Yn(s,r),Wn(r)}}function Wn(r){var s=r.flags;if(s&2){try{for(var o,c=r.return;c!==null;){if(sw(c)){o=c;break}c=c.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=e_(r);pf(r,m,f);break;case 5:var T=o.stateNode;o.flags&32&&(li(T,""),o.flags&=-33);var b=e_(r);pf(r,b,T);break;case 3:case 4:var D=o.stateNode.containerInfo,j=e_(r);t_(r,j,D);break;default:throw Error(i(161))}}catch(W){ot(r,r.return,W)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function fw(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;fw(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function ps(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)lw(r,s.alternate,s),s=s.sibling}function qa(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:fs(4,s,s.return),qa(s);break;case 1:Ki(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&iw(s,s.return,o),qa(s);break;case 27:Pc(s.stateNode);case 26:case 5:Ki(s,s.return),qa(s);break;case 22:s.memoizedState===null&&qa(s);break;case 30:qa(s);break;default:qa(s)}r=r.sibling}}function ms(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,f=r,m=s,T=m.flags;switch(m.tag){case 0:case 11:case 15:ms(f,m,o),Tc(4,m);break;case 1:if(ms(f,m,o),c=m,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(j){ot(c,c.return,j)}if(c=m,f=c.updateQueue,f!==null){var b=c.stateNode;try{var D=f.shared.hiddenCallbacks;if(D!==null)for(f.shared.hiddenCallbacks=null,f=0;f<D.length;f++)qT(D[f],b)}catch(j){ot(c,c.return,j)}}o&&T&64&&nw(m),wc(m,m.return);break;case 27:aw(m);case 26:case 5:ms(f,m,o),o&&c===null&&T&4&&rw(m),wc(m,m.return);break;case 12:ms(f,m,o);break;case 13:ms(f,m,o),o&&T&4&&hw(f,m);break;case 22:m.memoizedState===null&&ms(f,m,o),wc(m,m.return);break;case 30:break;default:ms(f,m,o)}s=s.sibling}}function r_(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&oc(o))}function s_(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&oc(r))}function Qi(r,s,o,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)pw(r,s,o,c),s=s.sibling}function pw(r,s,o,c){var f=s.flags;switch(s.tag){case 0:case 11:case 15:Qi(r,s,o,c),f&2048&&Tc(9,s);break;case 1:Qi(r,s,o,c);break;case 3:Qi(r,s,o,c),f&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&oc(r)));break;case 12:if(f&2048){Qi(r,s,o,c),r=s.stateNode;try{var m=s.memoizedProps,T=m.id,b=m.onPostCommit;typeof b=="function"&&b(T,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(D){ot(s,s.return,D)}}else Qi(r,s,o,c);break;case 13:Qi(r,s,o,c);break;case 23:break;case 22:m=s.stateNode,T=s.alternate,s.memoizedState!==null?m._visibility&2?Qi(r,s,o,c):bc(r,s):m._visibility&2?Qi(r,s,o,c):(m._visibility|=2,ll(r,s,o,c,(s.subtreeFlags&10256)!==0)),f&2048&&r_(T,s);break;case 24:Qi(r,s,o,c),f&2048&&s_(s.alternate,s);break;default:Qi(r,s,o,c)}}function ll(r,s,o,c,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,T=s,b=o,D=c,j=T.flags;switch(T.tag){case 0:case 11:case 15:ll(m,T,b,D,f),Tc(8,T);break;case 23:break;case 22:var W=T.stateNode;T.memoizedState!==null?W._visibility&2?ll(m,T,b,D,f):bc(m,T):(W._visibility|=2,ll(m,T,b,D,f)),f&&j&2048&&r_(T.alternate,T);break;case 24:ll(m,T,b,D,f),f&&j&2048&&s_(T.alternate,T);break;default:ll(m,T,b,D,f)}s=s.sibling}}function bc(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,c=s,f=c.flags;switch(c.tag){case 22:bc(o,c),f&2048&&r_(c.alternate,c);break;case 24:bc(o,c),f&2048&&s_(c.alternate,c);break;default:bc(o,c)}s=s.sibling}}var Ic=8192;function ul(r){if(r.subtreeFlags&Ic)for(r=r.child;r!==null;)mw(r),r=r.sibling}function mw(r){switch(r.tag){case 26:ul(r),r.flags&Ic&&r.memoizedState!==null&&hP(Ri,r.memoizedState,r.memoizedProps);break;case 5:ul(r);break;case 3:case 4:var s=Ri;Ri=Rf(r.stateNode.containerInfo),ul(r),Ri=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Ic,Ic=16777216,ul(r),Ic=s):ul(r));break;default:ul(r)}}function gw(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Ac(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];nn=c,yw(c,r)}gw(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)_w(r),r=r.sibling}function _w(r){switch(r.tag){case 0:case 11:case 15:Ac(r),r.flags&2048&&fs(9,r,r.return);break;case 3:Ac(r);break;case 12:Ac(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,mf(r)):Ac(r);break;default:Ac(r)}}function mf(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];nn=c,yw(c,r)}gw(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:fs(8,s,s.return),mf(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,mf(s));break;default:mf(s)}r=r.sibling}}function yw(r,s){for(;nn!==null;){var o=nn;switch(o.tag){case 0:case 11:case 15:fs(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:oc(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,nn=c;else e:for(o=r;nn!==null;){c=nn;var f=c.sibling,m=c.return;if(uw(c),c===o){nn=null;break e}if(f!==null){f.return=m,nn=f;break e}nn=m}}}var Rx={getCacheForType:function(r){var s=En(Qt),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},Cx=typeof WeakMap=="function"?WeakMap:Map,Ze=0,ut=null,Le=null,Ge=0,et=0,Xn=null,gs=!1,cl=!1,a_=!1,Mr=0,Rt=0,_s=0,ja=0,o_=0,_i=0,hl=0,Sc=null,Un=null,l_=!1,u_=0,gf=1/0,_f=null,ys=null,dn=0,vs=null,dl=null,fl=0,c_=0,h_=null,vw=null,Rc=0,d_=null;function Jn(){if((Ze&2)!==0&&Ge!==0)return Ge&-Ge;if(Q.T!==null){var r=el;return r!==0?r:v_()}return es()}function Ew(){_i===0&&(_i=(Ge&536870912)===0||Ye?Mu():536870912);var r=gi.current;return r!==null&&(r.flags|=32),_i}function Zn(r,s,o){(r===ut&&(et===2||et===9)||r.cancelPendingCommit!==null)&&(pl(r,0),Es(r,Ge,_i,!1)),pr(r,o),((Ze&2)===0||r!==ut)&&(r===ut&&((Ze&2)===0&&(ja|=o),Rt===4&&Es(r,Ge,_i,!1)),Yi(r))}function Tw(r,s,o){if((Ze&6)!==0)throw Error(i(327));var c=!o&&(s&124)===0&&(s&r.expiredLanes)===0||ma(r,s),f=c?Px(r,s):m_(r,s,!0),m=c;do{if(f===0){cl&&!c&&Es(r,s,0,!1);break}else{if(o=r.current.alternate,m&&!Dx(o)){f=m_(r,s,!1),m=!1;continue}if(f===2){if(m=s,r.errorRecoveryDisabledLanes&m)var T=0;else T=r.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var b=r;f=Sc;var D=b.current.memoizedState.isDehydrated;if(D&&(pl(b,T).flags|=256),T=m_(b,T,!1),T!==2){if(a_&&!D){b.errorRecoveryDisabledLanes|=m,ja|=m,f=4;break e}m=Un,Un=f,m!==null&&(Un===null?Un=m:Un.push.apply(Un,m))}f=T}if(m=!1,f!==2)continue}}if(f===1){pl(r,0),Es(r,s,0,!0);break}e:{switch(c=r,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:Es(c,s,_i,!gs);break e;case 2:Un=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(f=u_+300-ai(),10<f)){if(Es(c,s,_i,!gs),Po(c,0,!0)!==0)break e;c.timeoutHandle=Ww(ww.bind(null,c,o,Un,_f,l_,s,_i,ja,hl,gs,m,2,-0,0),f);break e}ww(c,o,Un,_f,l_,s,_i,ja,hl,gs,m,0,-0,0)}}break}while(!0);Yi(r)}function ww(r,s,o,c,f,m,T,b,D,j,W,ee,G,H){if(r.timeoutHandle=-1,ee=s.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(Vc={stylesheets:null,count:0,unsuspend:cP},mw(s),ee=dP(),ee!==null)){r.cancelPendingCommit=ee(Dw.bind(null,r,s,m,o,c,f,T,b,D,W,1,G,H)),Es(r,m,T,!j);return}Dw(r,s,m,o,c,f,T,b,D)}function Dx(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!Kn(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Es(r,s,o,c){s&=~o_,s&=~ja,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var f=s;0<f;){var m=31-vn(f),T=1<<m;c[m]=-1,f&=~T}o!==0&&Vi(r,o,s)}function yf(){return(Ze&6)===0?(Cc(0),!1):!0}function f_(){if(Le!==null){if(et===0)var r=Le.return;else r=Le,Cr=La=null,xg(r),al=null,yc=0,r=Le;for(;r!==null;)tw(r.alternate,r),r=r.return;Le=null}}function pl(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,Kx(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),f_(),ut=r,Le=o=Ar(r.current,null),Ge=s,et=0,Xn=null,gs=!1,cl=ma(r,s),a_=!1,hl=_i=o_=ja=_s=Rt=0,Un=Sc=null,l_=!1,(s&8)!==0&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var f=31-vn(c),m=1<<f;s|=r[f],c&=~m}return Mr=s,Bd(),o}function bw(r,s){ke=null,Q.H=sf,s===uc||s===Qd?(s=zT(),et=3):s===LT?(s=zT(),et=4):et=s===F0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Xn=s,Le===null&&(Rt=1,cf(r,di(s,r.current)))}function Iw(){var r=Q.H;return Q.H=sf,r===null?sf:r}function Aw(){var r=Q.A;return Q.A=Rx,r}function p_(){Rt=4,gs||(Ge&4194048)!==Ge&&gi.current!==null||(cl=!0),(_s&134217727)===0&&(ja&134217727)===0||ut===null||Es(ut,Ge,_i,!1)}function m_(r,s,o){var c=Ze;Ze|=2;var f=Iw(),m=Aw();(ut!==r||Ge!==s)&&(_f=null,pl(r,s)),s=!1;var T=Rt;e:do try{if(et!==0&&Le!==null){var b=Le,D=Xn;switch(et){case 8:f_(),T=6;break e;case 3:case 2:case 9:case 6:gi.current===null&&(s=!0);var j=et;if(et=0,Xn=null,ml(r,b,D,j),o&&cl){T=0;break e}break;default:j=et,et=0,Xn=null,ml(r,b,D,j)}}xx(),T=Rt;break}catch(W){bw(r,W)}while(!0);return s&&r.shellSuspendCounter++,Cr=La=null,Ze=c,Q.H=f,Q.A=m,Le===null&&(ut=null,Ge=0,Bd()),T}function xx(){for(;Le!==null;)Sw(Le)}function Px(r,s){var o=Ze;Ze|=2;var c=Iw(),f=Aw();ut!==r||Ge!==s?(_f=null,gf=ai()+500,pl(r,s)):cl=ma(r,s);e:do try{if(et!==0&&Le!==null){s=Le;var m=Xn;t:switch(et){case 1:et=0,Xn=null,ml(r,s,m,1);break;case 2:case 9:if(UT(m)){et=0,Xn=null,Rw(s);break}s=function(){et!==2&&et!==9||ut!==r||(et=7),Yi(r)},m.then(s,s);break e;case 3:et=7;break e;case 4:et=5;break e;case 7:UT(m)?(et=0,Xn=null,Rw(s)):(et=0,Xn=null,ml(r,s,m,7));break;case 5:var T=null;switch(Le.tag){case 26:T=Le.memoizedState;case 5:case 27:var b=Le;if(!T||lb(T)){et=0,Xn=null;var D=b.sibling;if(D!==null)Le=D;else{var j=b.return;j!==null?(Le=j,vf(j)):Le=null}break t}}et=0,Xn=null,ml(r,s,m,5);break;case 6:et=0,Xn=null,ml(r,s,m,6);break;case 8:f_(),Rt=6;break e;default:throw Error(i(462))}}Nx();break}catch(W){bw(r,W)}while(!0);return Cr=La=null,Q.H=c,Q.A=f,Ze=o,Le!==null?0:(ut=null,Ge=0,Bd(),Rt)}function Nx(){for(;Le!==null&&!Nu();)Sw(Le)}function Sw(r){var s=Z0(r.alternate,r,Mr);r.memoizedProps=r.pendingProps,s===null?vf(r):Le=s}function Rw(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=K0(o,s,s.pendingProps,s.type,void 0,Ge);break;case 11:s=K0(o,s,s.pendingProps,s.type.render,s.ref,Ge);break;case 5:xg(s);default:tw(o,s),s=Le=CT(s,Mr),s=Z0(o,s,Mr)}r.memoizedProps=r.pendingProps,s===null?vf(r):Le=s}function ml(r,s,o,c){Cr=La=null,xg(s),al=null,yc=0;var f=s.return;try{if(Tx(r,f,s,o,Ge)){Rt=1,cf(r,di(o,r.current)),Le=null;return}}catch(m){if(f!==null)throw Le=f,m;Rt=1,cf(r,di(o,r.current)),Le=null;return}s.flags&32768?(Ye||c===1?r=!0:cl||(Ge&536870912)!==0?r=!1:(gs=r=!0,(c===2||c===9||c===3||c===6)&&(c=gi.current,c!==null&&c.tag===13&&(c.flags|=16384))),Cw(s,r)):vf(s)}function vf(r){var s=r;do{if((s.flags&32768)!==0){Cw(s,gs);return}r=s.return;var o=bx(s.alternate,s,Mr);if(o!==null){Le=o;return}if(s=s.sibling,s!==null){Le=s;return}Le=s=r}while(s!==null);Rt===0&&(Rt=5)}function Cw(r,s){do{var o=Ix(r.alternate,r);if(o!==null){o.flags&=32767,Le=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){Le=r;return}Le=r=o}while(r!==null);Rt=6,Le=null}function Dw(r,s,o,c,f,m,T,b,D){r.cancelPendingCommit=null;do Ef();while(dn!==0);if((Ze&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=sg,Uu(r,o,m,T,b,D),r===ut&&(Le=ut=null,Ge=0),dl=s,vs=r,fl=o,c_=m,h_=f,vw=c,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,Mx(ha,function(){return Vw(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||c){c=Q.T,Q.T=null,f=he.p,he.p=2,T=Ze,Ze|=4;try{Ax(r,s,o)}finally{Ze=T,he.p=f,Q.T=c}}dn=1,xw(),Pw(),Nw()}}function xw(){if(dn===1){dn=0;var r=vs,s=dl,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=Q.T,Q.T=null;var c=he.p;he.p=2;var f=Ze;Ze|=4;try{dw(s,r);var m=R_,T=yT(r.containerInfo),b=m.focusedElem,D=m.selectionRange;if(T!==b&&b&&b.ownerDocument&&_T(b.ownerDocument.documentElement,b)){if(D!==null&&eg(b)){var j=D.start,W=D.end;if(W===void 0&&(W=j),"selectionStart"in b)b.selectionStart=j,b.selectionEnd=Math.min(W,b.value.length);else{var ee=b.ownerDocument||document,G=ee&&ee.defaultView||window;if(G.getSelection){var H=G.getSelection(),De=b.textContent.length,Ae=Math.min(D.start,De),at=D.end===void 0?Ae:Math.min(D.end,De);!H.extend&&Ae>at&&(T=at,at=Ae,Ae=T);var U=gT(b,Ae),O=gT(b,at);if(U&&O&&(H.rangeCount!==1||H.anchorNode!==U.node||H.anchorOffset!==U.offset||H.focusNode!==O.node||H.focusOffset!==O.offset)){var q=ee.createRange();q.setStart(U.node,U.offset),H.removeAllRanges(),Ae>at?(H.addRange(q),H.extend(O.node,O.offset)):(q.setEnd(O.node,O.offset),H.addRange(q))}}}}for(ee=[],H=b;H=H.parentNode;)H.nodeType===1&&ee.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ee.length;b++){var J=ee[b];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}Nf=!!S_,R_=S_=null}finally{Ze=f,he.p=c,Q.T=o}}r.current=s,dn=2}}function Pw(){if(dn===2){dn=0;var r=vs,s=dl,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=Q.T,Q.T=null;var c=he.p;he.p=2;var f=Ze;Ze|=4;try{lw(r,s.alternate,s)}finally{Ze=f,he.p=c,Q.T=o}}dn=3}}function Nw(){if(dn===4||dn===3){dn=0,pd();var r=vs,s=dl,o=fl,c=vw;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?dn=5:(dn=0,dl=vs=null,Ow(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(ys=null),No(o),s=s.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(At,s,void 0,(s.current.flags&128)===128)}catch{}if(c!==null){s=Q.T,f=he.p,he.p=2,Q.T=null;try{for(var m=r.onRecoverableError,T=0;T<c.length;T++){var b=c[T];m(b.value,{componentStack:b.stack})}}finally{Q.T=s,he.p=f}}(fl&3)!==0&&Ef(),Yi(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===d_?Rc++:(Rc=0,d_=r):Rc=0,Cc(0)}}function Ow(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,oc(s)))}function Ef(r){return xw(),Pw(),Nw(),Vw()}function Vw(){if(dn!==5)return!1;var r=vs,s=c_;c_=0;var o=No(fl),c=Q.T,f=he.p;try{he.p=32>o?32:o,Q.T=null,o=h_,h_=null;var m=vs,T=fl;if(dn=0,dl=vs=null,fl=0,(Ze&6)!==0)throw Error(i(331));var b=Ze;if(Ze|=4,_w(m.current),pw(m,m.current,T,o),Ze=b,Cc(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(At,m)}catch{}return!0}finally{he.p=f,Q.T=c,Ow(r,s)}}function kw(r,s,o){s=di(o,s),s=Gg(r.stateNode,s,2),r=us(r,s,2),r!==null&&(pr(r,2),Yi(r))}function ot(r,s,o){if(r.tag===3)kw(r,r,o);else for(;s!==null;){if(s.tag===3){kw(s,r,o);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ys===null||!ys.has(c))){r=di(o,r),o=B0(2),c=us(s,o,2),c!==null&&(z0(o,c,s,r),pr(c,2),Yi(c));break}}s=s.return}}function g_(r,s,o){var c=r.pingCache;if(c===null){c=r.pingCache=new Cx;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(o)||(a_=!0,f.add(o),r=Ox.bind(null,r,s,o),s.then(r,r))}function Ox(r,s,o){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,ut===r&&(Ge&o)===o&&(Rt===4||Rt===3&&(Ge&62914560)===Ge&&300>ai()-u_?(Ze&2)===0&&pl(r,0):o_|=o,hl===Ge&&(hl=0)),Yi(r)}function Mw(r,s){s===0&&(s=Lu()),r=Wo(r,s),r!==null&&(pr(r,s),Yi(r))}function Vx(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),Mw(r,o)}function kx(r,s){var o=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),Mw(r,o)}function Mx(r,s){return ua(r,s)}var Tf=null,gl=null,__=!1,wf=!1,y_=!1,Ga=0;function Yi(r){r!==gl&&r.next===null&&(gl===null?Tf=gl=r:gl=gl.next=r),wf=!0,__||(__=!0,Ux())}function Cc(r,s){if(!y_&&wf){y_=!0;do for(var o=!1,c=Tf;c!==null;){if(r!==0){var f=c.pendingLanes;if(f===0)var m=0;else{var T=c.suspendedLanes,b=c.pingedLanes;m=(1<<31-vn(42|r)+1)-1,m&=f&~(T&~b),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,zw(c,m))}else m=Ge,m=Po(c,c===ut?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||ma(c,m)||(o=!0,zw(c,m));c=c.next}while(o);y_=!1}}function Lx(){Lw()}function Lw(){wf=__=!1;var r=0;Ga!==0&&($x()&&(r=Ga),Ga=0);for(var s=ai(),o=null,c=Tf;c!==null;){var f=c.next,m=Uw(c,s);m===0?(c.next=null,o===null?Tf=f:o.next=f,f===null&&(gl=o)):(o=c,(r!==0||(m&3)!==0)&&(wf=!0)),c=f}Cc(r)}function Uw(r,s){for(var o=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var T=31-vn(m),b=1<<T,D=f[T];D===-1?((b&o)===0||(b&c)!==0)&&(f[T]=ku(b,s)):D<=s&&(r.expiredLanes|=b),m&=~b}if(s=ut,o=Ge,o=Po(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,o===0||r===s&&(et===2||et===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&ca(c),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||ma(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(c!==null&&ca(c),No(o)){case 2:case 8:o=Do;break;case 32:o=ha;break;case 268435456:o=xo;break;default:o=ha}return c=Bw.bind(null,r),o=ua(o,c),r.callbackPriority=s,r.callbackNode=o,s}return c!==null&&c!==null&&ca(c),r.callbackPriority=2,r.callbackNode=null,2}function Bw(r,s){if(dn!==0&&dn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(Ef()&&r.callbackNode!==o)return null;var c=Ge;return c=Po(r,r===ut?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(Tw(r,c,s),Uw(r,ai()),r.callbackNode!=null&&r.callbackNode===o?Bw.bind(null,r):null)}function zw(r,s){if(Ef())return null;Tw(r,s,!0)}function Ux(){Qx(function(){(Ze&6)!==0?ua(Ou,Lx):Lw()})}function v_(){return Ga===0&&(Ga=Mu()),Ga}function Fw(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Uo(""+r)}function qw(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function Bx(r,s,o,c,f){if(s==="submit"&&o&&o.stateNode===f){var m=Fw((f[Ut]||null).action),T=c.submitter;T&&(s=(s=T[Ut]||null)?Fw(s.formAction):T.getAttribute("formAction"),s!==null&&(m=s,T=null));var b=new Bo("action","action",null,c,f);r.push({event:b,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ga!==0){var D=T?qw(f,T):new FormData(f);Bg(o,{pending:!0,data:D,method:f.method,action:m},null,D)}}else typeof m=="function"&&(b.preventDefault(),D=T?qw(f,T):new FormData(f),Bg(o,{pending:!0,data:D,method:f.method,action:m},m,D))},currentTarget:f}]})}}for(var E_=0;E_<rg.length;E_++){var T_=rg[E_],zx=T_.toLowerCase(),Fx=T_[0].toUpperCase()+T_.slice(1);Si(zx,"on"+Fx)}Si(TT,"onAnimationEnd"),Si(wT,"onAnimationIteration"),Si(bT,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(rx,"onTransitionRun"),Si(sx,"onTransitionStart"),Si(ax,"onTransitionCancel"),Si(IT,"onTransitionEnd"),gr("onMouseEnter",["mouseout","mouseover"]),gr("onMouseLeave",["mouseout","mouseover"]),gr("onPointerEnter",["pointerout","pointerover"]),gr("onPointerLeave",["pointerout","pointerover"]),Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dc));function jw(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var c=r[o],f=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var T=c.length-1;0<=T;T--){var b=c[T],D=b.instance,j=b.currentTarget;if(b=b.listener,D!==m&&f.isPropagationStopped())break e;m=b,f.currentTarget=j;try{m(f)}catch(W){uf(W)}f.currentTarget=null,m=D}else for(T=0;T<c.length;T++){if(b=c[T],D=b.instance,j=b.currentTarget,b=b.listener,D!==m&&f.isPropagationStopped())break e;m=b,f.currentTarget=j;try{m(f)}catch(W){uf(W)}f.currentTarget=null,m=D}}}}function Ue(r,s){var o=s[zu];o===void 0&&(o=s[zu]=new Set);var c=r+"__bubble";o.has(c)||(Gw(s,r,2,!1),o.add(c))}function w_(r,s,o){var c=0;s&&(c|=4),Gw(o,r,c,s)}var bf="_reactListening"+Math.random().toString(36).slice(2);function b_(r){if(!r[bf]){r[bf]=!0,Fu.forEach(function(o){o!=="selectionchange"&&(qx.has(o)||w_(o,!1,r),w_(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[bf]||(s[bf]=!0,w_("selectionchange",!1,s))}}function Gw(r,s,o,c){switch(pb(s)){case 2:var f=mP;break;case 8:f=gP;break;default:f=L_}o=f.bind(null,s,o,r),f=void 0,!ci||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(s,o,{capture:!0,passive:f}):r.addEventListener(s,o,!0):f!==void 0?r.addEventListener(s,o,{passive:f}):r.addEventListener(s,o,!1)}function I_(r,s,o,c,f){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var b=c.stateNode.containerInfo;if(b===f)break;if(T===4)for(T=c.return;T!==null;){var D=T.tag;if((D===3||D===4)&&T.stateNode.containerInfo===f)return;T=T.return}for(;b!==null;){if(T=mr(b),T===null)return;if(D=T.tag,D===5||D===6||D===26||D===27){c=m=T;continue e}b=b.parentNode}}c=c.return}Id(function(){var j=m,W=ui(o),ee=[];e:{var G=AT.get(r);if(G!==void 0){var H=Bo,De=r;switch(r){case"keypress":if(zi(o)===0)break e;case"keydown":case"keyup":H=Ho;break;case"focusin":De="focus",H=qo;break;case"focusout":De="blur",H=qo;break;case"beforeblur":case"afterblur":H=qo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=hi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Nd;break;case TT:case wT:case bT:H=jo;break;case IT:H=Vd;break;case"scroll":case"scrollend":H=Ad;break;case"wheel":H=$o;break;case"copy":case"cut":case"paste":H=Go;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Zu;break;case"toggle":case"beforetoggle":H=Md}var Ae=(s&4)!==0,at=!Ae&&(r==="scroll"||r==="scrollend"),U=Ae?G!==null?G+"Capture":null:G;Ae=[];for(var O=j,q;O!==null;){var J=O;if(q=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||q===null||U===null||(J=ba(O,U),J!=null&&Ae.push(xc(O,J,q))),at)break;O=O.return}0<Ae.length&&(G=new H(G,De,null,o,W),ee.push({event:G,listeners:Ae}))}}if((s&7)===0){e:{if(G=r==="mouseover"||r==="pointerover",H=r==="mouseout"||r==="pointerout",G&&o!==vr&&(De=o.relatedTarget||o.fromElement)&&(mr(De)||De[oi]))break e;if((H||G)&&(G=W.window===W?W:(G=W.ownerDocument)?G.defaultView||G.parentWindow:window,H?(De=o.relatedTarget||o.toElement,H=j,De=De?mr(De):null,De!==null&&(at=l(De),Ae=De.tag,De!==at||Ae!==5&&Ae!==27&&Ae!==6)&&(De=null)):(H=null,De=j),H!==De)){if(Ae=hi,J="onMouseLeave",U="onMouseEnter",O="mouse",(r==="pointerout"||r==="pointerover")&&(Ae=Zu,J="onPointerLeave",U="onPointerEnter",O="pointer"),at=H==null?G:Mi(H),q=De==null?G:Mi(De),G=new Ae(J,O+"leave",H,o,W),G.target=at,G.relatedTarget=q,J=null,mr(W)===j&&(Ae=new Ae(U,O+"enter",De,o,W),Ae.target=q,Ae.relatedTarget=at,J=Ae),at=J,H&&De)t:{for(Ae=H,U=De,O=0,q=Ae;q;q=_l(q))O++;for(q=0,J=U;J;J=_l(J))q++;for(;0<O-q;)Ae=_l(Ae),O--;for(;0<q-O;)U=_l(U),q--;for(;O--;){if(Ae===U||U!==null&&Ae===U.alternate)break t;Ae=_l(Ae),U=_l(U)}Ae=null}else Ae=null;H!==null&&Hw(ee,G,H,Ae,!1),De!==null&&at!==null&&Hw(ee,at,De,Ae,!0)}}e:{if(G=j?Mi(j):window,H=G.nodeName&&G.nodeName.toLowerCase(),H==="select"||H==="input"&&G.type==="file")var _e=cT;else if(Kt(G))if(hT)_e=tx;else{_e=ZD;var Me=JD}else H=G.nodeName,!H||H.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?j&&$u(j.elementType)&&(_e=cT):_e=ex;if(_e&&(_e=_e(r,j))){Ir(ee,_e,o,W);break e}Me&&Me(r,G,j),r==="focusout"&&j&&G.type==="number"&&j.memoizedProps.value!=null&&rs(G,"number",G.value)}switch(Me=j?Mi(j):window,r){case"focusin":(Kt(Me)||Me.contentEditable==="true")&&(Ko=Me,tg=j,nc=null);break;case"focusout":nc=tg=Ko=null;break;case"mousedown":ng=!0;break;case"contextmenu":case"mouseup":case"dragend":ng=!1,vT(ee,o,W);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":vT(ee,o,W)}var we;if(ji)e:{switch(r){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else qe?K(r,o)&&(Re="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Re="onCompositionStart");Re&&(E&&o.locale!=="ko"&&(qe||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&qe&&(we=Qu()):(Bi=W,ss="value"in Bi?Bi.value:Bi.textContent,qe=!0)),Me=If(j,Re),0<Me.length&&(Re=new Xu(Re,r,null,o,W),ee.push({event:Re,listeners:Me}),we?Re.data=we:(we=ce(o),we!==null&&(Re.data=we)))),(we=_?$t(r,o):je(r,o))&&(Re=If(j,"onBeforeInput"),0<Re.length&&(Me=new Xu("onBeforeInput","beforeinput",null,o,W),ee.push({event:Me,listeners:Re}),Me.data=we)),Bx(ee,r,j,o,W)}jw(ee,s)})}function xc(r,s,o){return{instance:r,listener:s,currentTarget:o}}function If(r,s){for(var o=s+"Capture",c=[];r!==null;){var f=r,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=ba(r,o),f!=null&&c.unshift(xc(r,f,m)),f=ba(r,s),f!=null&&c.push(xc(r,f,m))),r.tag===3)return c;r=r.return}return[]}function _l(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function Hw(r,s,o,c,f){for(var m=s._reactName,T=[];o!==null&&o!==c;){var b=o,D=b.alternate,j=b.stateNode;if(b=b.tag,D!==null&&D===c)break;b!==5&&b!==26&&b!==27||j===null||(D=j,f?(j=ba(o,m),j!=null&&T.unshift(xc(o,j,D))):f||(j=ba(o,m),j!=null&&T.push(xc(o,j,D)))),o=o.return}T.length!==0&&r.push({event:s,listeners:T})}var jx=/\r\n?/g,Gx=/\u0000|\uFFFD/g;function $w(r){return(typeof r=="string"?r:""+r).replace(jx,`
`).replace(Gx,"")}function Kw(r,s){return s=$w(s),$w(r)===s}function Af(){}function st(r,s,o,c,f,m){switch(o){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||li(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&li(r,""+c);break;case"className":Li(r,"class",c);break;case"tabIndex":Li(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Li(r,o,c);break;case"style":Hu(r,c,m);break;case"data":if(s!=="object"){Li(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(o);break}c=Uo(""+c),r.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&st(r,s,"name",f.name,f,null),st(r,s,"formEncType",f.formEncType,f,null),st(r,s,"formMethod",f.formMethod,f,null),st(r,s,"formTarget",f.formTarget,f,null)):(st(r,s,"encType",f.encType,f,null),st(r,s,"method",f.method,f,null),st(r,s,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(o);break}c=Uo(""+c),r.setAttribute(o,c);break;case"onClick":c!=null&&(r.onclick=Af);break;case"onScroll":c!=null&&Ue("scroll",r);break;case"onScrollEnd":c!=null&&Ue("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}o=Uo(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,""+c):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":c===!0?r.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,c):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(o,c):r.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(o):r.setAttribute(o,c);break;case"popover":Ue("beforetoggle",r),Ue("toggle",r),is(r,"popover",c);break;case"xlinkActuate":un(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":un(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":un(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":un(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":un(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":un(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":un(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":un(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":un(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":is(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Qm.get(o)||o,is(r,o,c))}}function A_(r,s,o,c,f,m){switch(o){case"style":Hu(r,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof c=="string"?li(r,c):(typeof c=="number"||typeof c=="bigint")&&li(r,""+c);break;case"onScroll":c!=null&&Ue("scroll",r);break;case"onScrollEnd":c!=null&&Ue("scrollend",r);break;case"onClick":c!=null&&(r.onclick=Af);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oo.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=r[Ut]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(s,m,f),typeof c=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,c,f);break e}o in r?r[o]=c:c===!0?r.setAttribute(o,""):is(r,o,c)}}}function fn(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",r),Ue("load",r);var c=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var T=o[m];if(T!=null)switch(m){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:st(r,s,m,T,o,null)}}f&&st(r,s,"srcSet",o.srcSet,o,null),c&&st(r,s,"src",o.src,o,null);return;case"input":Ue("invalid",r);var b=m=T=f=null,D=null,j=null;for(c in o)if(o.hasOwnProperty(c)){var W=o[c];if(W!=null)switch(c){case"name":f=W;break;case"type":T=W;break;case"checked":D=W;break;case"defaultChecked":j=W;break;case"value":m=W;break;case"defaultValue":b=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(i(137,s));break;default:st(r,s,c,W,o,null)}}Ea(r,m,b,D,j,T,f,!1),Lo(r);return;case"select":Ue("invalid",r),c=T=m=null;for(f in o)if(o.hasOwnProperty(f)&&(b=o[f],b!=null))switch(f){case"value":m=b;break;case"defaultValue":T=b;break;case"multiple":c=b;default:st(r,s,f,b,o,null)}s=m,o=T,r.multiple=!!c,s!=null?yr(r,!!c,s,!1):o!=null&&yr(r,!!c,o,!0);return;case"textarea":Ue("invalid",r),m=f=c=null;for(T in o)if(o.hasOwnProperty(T)&&(b=o[T],b!=null))switch(T){case"value":c=b;break;case"defaultValue":f=b;break;case"children":m=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(i(91));break;default:st(r,s,T,b,o,null)}Ta(r,c,f,m),Lo(r);return;case"option":for(D in o)if(o.hasOwnProperty(D)&&(c=o[D],c!=null))switch(D){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:st(r,s,D,c,o,null)}return;case"dialog":Ue("beforetoggle",r),Ue("toggle",r),Ue("cancel",r),Ue("close",r);break;case"iframe":case"object":Ue("load",r);break;case"video":case"audio":for(c=0;c<Dc.length;c++)Ue(Dc[c],r);break;case"image":Ue("error",r),Ue("load",r);break;case"details":Ue("toggle",r);break;case"embed":case"source":case"link":Ue("error",r),Ue("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in o)if(o.hasOwnProperty(j)&&(c=o[j],c!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:st(r,s,j,c,o,null)}return;default:if($u(s)){for(W in o)o.hasOwnProperty(W)&&(c=o[W],c!==void 0&&A_(r,s,W,c,o,void 0));return}}for(b in o)o.hasOwnProperty(b)&&(c=o[b],c!=null&&st(r,s,b,c,o,null))}function Hx(r,s,o,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,T=null,b=null,D=null,j=null,W=null;for(H in o){var ee=o[H];if(o.hasOwnProperty(H)&&ee!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":D=ee;default:c.hasOwnProperty(H)||st(r,s,H,null,c,ee)}}for(var G in c){var H=c[G];if(ee=o[G],c.hasOwnProperty(G)&&(H!=null||ee!=null))switch(G){case"type":m=H;break;case"name":f=H;break;case"checked":j=H;break;case"defaultChecked":W=H;break;case"value":T=H;break;case"defaultValue":b=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(i(137,s));break;default:H!==ee&&st(r,s,G,H,c,ee)}}$n(r,T,b,D,j,W,m,f);return;case"select":H=T=b=G=null;for(m in o)if(D=o[m],o.hasOwnProperty(m)&&D!=null)switch(m){case"value":break;case"multiple":H=D;default:c.hasOwnProperty(m)||st(r,s,m,null,c,D)}for(f in c)if(m=c[f],D=o[f],c.hasOwnProperty(f)&&(m!=null||D!=null))switch(f){case"value":G=m;break;case"defaultValue":b=m;break;case"multiple":T=m;default:m!==D&&st(r,s,f,m,c,D)}s=b,o=T,c=H,G!=null?yr(r,!!o,G,!1):!!c!=!!o&&(s!=null?yr(r,!!o,s,!0):yr(r,!!o,o?[]:"",!1));return;case"textarea":H=G=null;for(b in o)if(f=o[b],o.hasOwnProperty(b)&&f!=null&&!c.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:st(r,s,b,null,c,f)}for(T in c)if(f=c[T],m=o[T],c.hasOwnProperty(T)&&(f!=null||m!=null))switch(T){case"value":G=f;break;case"defaultValue":H=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&st(r,s,T,f,c,m)}it(r,G,H);return;case"option":for(var De in o)if(G=o[De],o.hasOwnProperty(De)&&G!=null&&!c.hasOwnProperty(De))switch(De){case"selected":r.selected=!1;break;default:st(r,s,De,null,c,G)}for(D in c)if(G=c[D],H=o[D],c.hasOwnProperty(D)&&G!==H&&(G!=null||H!=null))switch(D){case"selected":r.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:st(r,s,D,G,c,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in o)G=o[Ae],o.hasOwnProperty(Ae)&&G!=null&&!c.hasOwnProperty(Ae)&&st(r,s,Ae,null,c,G);for(j in c)if(G=c[j],H=o[j],c.hasOwnProperty(j)&&G!==H&&(G!=null||H!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(i(137,s));break;default:st(r,s,j,G,c,H)}return;default:if($u(s)){for(var at in o)G=o[at],o.hasOwnProperty(at)&&G!==void 0&&!c.hasOwnProperty(at)&&A_(r,s,at,void 0,c,G);for(W in c)G=c[W],H=o[W],!c.hasOwnProperty(W)||G===H||G===void 0&&H===void 0||A_(r,s,W,G,c,H);return}}for(var U in o)G=o[U],o.hasOwnProperty(U)&&G!=null&&!c.hasOwnProperty(U)&&st(r,s,U,null,c,G);for(ee in c)G=c[ee],H=o[ee],!c.hasOwnProperty(ee)||G===H||G==null&&H==null||st(r,s,ee,G,c,H)}var S_=null,R_=null;function Sf(r){return r.nodeType===9?r:r.ownerDocument}function Qw(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yw(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function C_(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var D_=null;function $x(){var r=window.event;return r&&r.type==="popstate"?r===D_?!1:(D_=r,!0):(D_=null,!1)}var Ww=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,Xw=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof Xw<"u"?function(r){return Xw.resolve(null).then(r).catch(Yx)}:Ww;function Yx(r){setTimeout(function(){throw r})}function Ts(r){return r==="head"}function Jw(r,s){var o=s,c=0,f=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<c&&8>c){o=c;var T=r.ownerDocument;if(o&1&&Pc(T.documentElement),o&2&&Pc(T.body),o&4)for(o=T.head,Pc(o),T=o.firstChild;T;){var b=T.nextSibling,D=T.nodeName;T[ga]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&T.rel.toLowerCase()==="stylesheet"||o.removeChild(T),T=b}}if(f===0){r.removeChild(m),Bc(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:c=o.charCodeAt(0)-48;else c=0;o=m}while(o);Bc(s)}function x_(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":x_(o),ns(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function Wx(r,s,o,c){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[ga])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=Ci(r.nextSibling),r===null)break}return null}function Xx(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=Ci(r.nextSibling),r===null))return null;return r}function P_(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function Jx(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var c=function(){s(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function Ci(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var N_=null;function Zw(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function eb(r,s,o){switch(s=Sf(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Pc(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);ns(r)}var yi=new Map,tb=new Set;function Rf(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Lr=he.d;he.d={f:Zx,r:eP,D:tP,C:nP,L:iP,m:rP,X:aP,S:sP,M:oP};function Zx(){var r=Lr.f(),s=yf();return r||s}function eP(r){var s=ki(r);s!==null&&s.tag===5&&s.type==="form"?T0(s):Lr.r(r)}var yl=typeof document>"u"?null:document;function nb(r,s,o){var c=yl;if(c&&typeof s=="string"&&s){var f=Bt(s);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),tb.has(f)||(tb.add(f),r={rel:r,crossOrigin:o,href:s},c.querySelector(f)===null&&(s=c.createElement("link"),fn(s,"link",r),Nt(s),c.head.appendChild(s)))}}function tP(r){Lr.D(r),nb("dns-prefetch",r,null)}function nP(r,s){Lr.C(r,s),nb("preconnect",r,s)}function iP(r,s,o){Lr.L(r,s,o);var c=yl;if(c&&r&&s){var f='link[rel="preload"][as="'+Bt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Bt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Bt(o.imageSizes)+'"]')):f+='[href="'+Bt(r)+'"]';var m=f;switch(s){case"style":m=vl(r);break;case"script":m=El(r)}yi.has(m)||(r=y({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),yi.set(m,r),c.querySelector(f)!==null||s==="style"&&c.querySelector(Nc(m))||s==="script"&&c.querySelector(Oc(m))||(s=c.createElement("link"),fn(s,"link",r),Nt(s),c.head.appendChild(s)))}}function rP(r,s){Lr.m(r,s);var o=yl;if(o&&r){var c=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Bt(c)+'"][href="'+Bt(r)+'"]',m=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=El(r)}if(!yi.has(m)&&(r=y({rel:"modulepreload",href:r},s),yi.set(m,r),o.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Oc(m)))return}c=o.createElement("link"),fn(c,"link",r),Nt(c),o.head.appendChild(c)}}}function sP(r,s,o){Lr.S(r,s,o);var c=yl;if(c&&r){var f=Sn(c).hoistableStyles,m=vl(r);s=s||"default";var T=f.get(m);if(!T){var b={loading:0,preload:null};if(T=c.querySelector(Nc(m)))b.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":s},o),(o=yi.get(m))&&O_(r,o);var D=T=c.createElement("link");Nt(D),fn(D,"link",r),D._p=new Promise(function(j,W){D.onload=j,D.onerror=W}),D.addEventListener("load",function(){b.loading|=1}),D.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Cf(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:b},f.set(m,T)}}}function aP(r,s){Lr.X(r,s);var o=yl;if(o&&r){var c=Sn(o).hoistableScripts,f=El(r),m=c.get(f);m||(m=o.querySelector(Oc(f)),m||(r=y({src:r,async:!0},s),(s=yi.get(f))&&V_(r,s),m=o.createElement("script"),Nt(m),fn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function oP(r,s){Lr.M(r,s);var o=yl;if(o&&r){var c=Sn(o).hoistableScripts,f=El(r),m=c.get(f);m||(m=o.querySelector(Oc(f)),m||(r=y({src:r,async:!0,type:"module"},s),(s=yi.get(f))&&V_(r,s),m=o.createElement("script"),Nt(m),fn(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function ib(r,s,o,c){var f=(f=be.current)?Rf(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=vl(o.href),o=Sn(f).hoistableStyles,c=o.get(s),c||(c={type:"style",instance:null,count:0,state:null},o.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=vl(o.href);var m=Sn(f).hoistableStyles,T=m.get(r);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,T),(m=f.querySelector(Nc(r)))&&!m._p&&(T.instance=m,T.state.loading=5),yi.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},yi.set(r,o),m||lP(f,r,o,T.state))),s&&c===null)throw Error(i(528,""));return T}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=El(o),o=Sn(f).hoistableScripts,c=o.get(s),c||(c={type:"script",instance:null,count:0,state:null},o.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function vl(r){return'href="'+Bt(r)+'"'}function Nc(r){return'link[rel="stylesheet"]['+r+"]"}function rb(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function lP(r,s,o,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),fn(s,"link",o),Nt(s),r.head.appendChild(s))}function El(r){return'[src="'+Bt(r)+'"]'}function Oc(r){return"script[async]"+r}function sb(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+Bt(o.href)+'"]');if(c)return s.instance=c,Nt(c),c;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),Nt(c),fn(c,"style",f),Cf(c,o.precedence,r),s.instance=c;case"stylesheet":f=vl(o.href);var m=r.querySelector(Nc(f));if(m)return s.state.loading|=4,s.instance=m,Nt(m),m;c=rb(o),(f=yi.get(f))&&O_(c,f),m=(r.ownerDocument||r).createElement("link"),Nt(m);var T=m;return T._p=new Promise(function(b,D){T.onload=b,T.onerror=D}),fn(m,"link",c),s.state.loading|=4,Cf(m,o.precedence,r),s.instance=m;case"script":return m=El(o.src),(f=r.querySelector(Oc(m)))?(s.instance=f,Nt(f),f):(c=o,(f=yi.get(m))&&(c=y({},o),V_(c,f)),r=r.ownerDocument||r,f=r.createElement("script"),Nt(f),fn(f,"link",c),r.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Cf(c,o.precedence,r));return s.instance}function Cf(r,s,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,m=f,T=0;T<c.length;T++){var b=c[T];if(b.dataset.precedence===s)m=b;else if(m!==f)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function O_(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function V_(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Df=null;function ab(r,s,o){if(Df===null){var c=new Map,f=Df=new Map;f.set(o,c)}else f=Df,c=f.get(o),c||(c=new Map,f.set(o,c));if(c.has(r))return c;for(c.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var m=o[f];if(!(m[ga]||m[Ht]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(s)||"";T=r+T;var b=c.get(T);b?b.push(m):c.set(T,[m])}}return c}function ob(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function uP(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function lb(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Vc=null;function cP(){}function hP(r,s,o){if(Vc===null)throw Error(i(475));var c=Vc;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=vl(o.href),m=r.querySelector(Nc(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=xf.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=m,Nt(m);return}m=r.ownerDocument||r,o=rb(o),(f=yi.get(f))&&O_(o,f),m=m.createElement("link"),Nt(m);var T=m;T._p=new Promise(function(b,D){T.onload=b,T.onerror=D}),fn(m,"link",o),s.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=xf.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function dP(){if(Vc===null)throw Error(i(475));var r=Vc;return r.stylesheets&&r.count===0&&k_(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&k_(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function xf(){if(this.count--,this.count===0){if(this.stylesheets)k_(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Pf=null;function k_(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Pf=new Map,s.forEach(fP,r),Pf=null,xf.call(r))}function fP(r,s){if(!(s.state.loading&4)){var o=Pf.get(r);if(o)var c=o.get(null);else{o=new Map,Pf.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var T=f[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),c=T)}c&&o.set(null,c)}f=s.instance,T=f.getAttribute("data-precedence"),m=o.get(T)||c,m===c&&o.set(null,f),o.set(T,f),this.count++,c=xf.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),m?m.parentNode.insertBefore(f,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),s.state.loading|=4}}var kc={$$typeof:Y,Provider:null,Consumer:null,_currentValue:ve,_currentValue2:ve,_threadCount:0};function pP(r,s,o,c,f,m,T,b){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fr(0),this.hiddenUpdates=fr(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function ub(r,s,o,c,f,m,T,b,D,j,W,ee){return r=new pP(r,s,o,T,b,D,j,ee),s=1,m===!0&&(s|=24),m=Qn(3,null,null,s),r.current=m,m.stateNode=r,s=gg(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:s},Eg(m),r}function cb(r){return r?(r=Xo,r):Xo}function hb(r,s,o,c,f,m){f=cb(f),c.context===null?c.context=f:c.pendingContext=f,c=ls(s),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=us(r,c,s),o!==null&&(Zn(o,r,s),hc(o,r,s))}function db(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function M_(r,s){db(r,s),(r=r.alternate)&&db(r,s)}function fb(r){if(r.tag===13){var s=Wo(r,67108864);s!==null&&Zn(s,r,67108864),M_(r,67108864)}}var Nf=!0;function mP(r,s,o,c){var f=Q.T;Q.T=null;var m=he.p;try{he.p=2,L_(r,s,o,c)}finally{he.p=m,Q.T=f}}function gP(r,s,o,c){var f=Q.T;Q.T=null;var m=he.p;try{he.p=8,L_(r,s,o,c)}finally{he.p=m,Q.T=f}}function L_(r,s,o,c){if(Nf){var f=U_(c);if(f===null)I_(r,s,c,Of,o),mb(r,c);else if(yP(f,r,s,o,c))c.stopPropagation();else if(mb(r,c),s&4&&-1<_P.indexOf(r)){for(;f!==null;){var m=ki(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=bi(m.pendingLanes);if(T!==0){var b=m;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var D=1<<31-vn(T);b.entanglements[1]|=D,T&=~D}Yi(m),(Ze&6)===0&&(gf=ai()+500,Cc(0))}}break;case 13:b=Wo(m,2),b!==null&&Zn(b,m,2),yf(),M_(m,2)}if(m=U_(c),m===null&&I_(r,s,c,Of,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else I_(r,s,c,null,o)}}function U_(r){return r=ui(r),B_(r)}var Of=null;function B_(r){if(Of=null,r=mr(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=u(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return Of=r,null}function pb(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qm()){case Ou:return 2;case Do:return 8;case ha:case jm:return 32;case xo:return 268435456;default:return 32}default:return 32}}var z_=!1,ws=null,bs=null,Is=null,Mc=new Map,Lc=new Map,As=[],_P="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mb(r,s){switch(r){case"focusin":case"focusout":ws=null;break;case"dragenter":case"dragleave":bs=null;break;case"mouseover":case"mouseout":Is=null;break;case"pointerover":case"pointerout":Mc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lc.delete(s.pointerId)}}function Uc(r,s,o,c,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},s!==null&&(s=ki(s),s!==null&&fb(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function yP(r,s,o,c,f){switch(s){case"focusin":return ws=Uc(ws,r,s,o,c,f),!0;case"dragenter":return bs=Uc(bs,r,s,o,c,f),!0;case"mouseover":return Is=Uc(Is,r,s,o,c,f),!0;case"pointerover":var m=f.pointerId;return Mc.set(m,Uc(Mc.get(m)||null,r,s,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,Lc.set(m,Uc(Lc.get(m)||null,r,s,o,c,f)),!0}return!1}function gb(r){var s=mr(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=u(o),s!==null){r.blockedOn=s,_d(r.priority,function(){if(o.tag===13){var c=Jn();c=Zr(c);var f=Wo(o,c);f!==null&&Zn(f,o,c),M_(o,c)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Vf(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=U_(r.nativeEvent);if(o===null){o=r.nativeEvent;var c=new o.constructor(o.type,o);vr=c,o.target.dispatchEvent(c),vr=null}else return s=ki(o),s!==null&&fb(s),r.blockedOn=o,!1;s.shift()}return!0}function _b(r,s,o){Vf(r)&&o.delete(s)}function vP(){z_=!1,ws!==null&&Vf(ws)&&(ws=null),bs!==null&&Vf(bs)&&(bs=null),Is!==null&&Vf(Is)&&(Is=null),Mc.forEach(_b),Lc.forEach(_b)}function kf(r,s){r.blockedOn===s&&(r.blockedOn=null,z_||(z_=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,vP)))}var Mf=null;function yb(r){Mf!==r&&(Mf=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Mf===r&&(Mf=null);for(var s=0;s<r.length;s+=3){var o=r[s],c=r[s+1],f=r[s+2];if(typeof c!="function"){if(B_(c||o)===null)continue;break}var m=ki(o);m!==null&&(r.splice(s,3),s-=3,Bg(m,{pending:!0,data:f,method:o.method,action:c},c,f))}}))}function Bc(r){function s(D){return kf(D,r)}ws!==null&&kf(ws,r),bs!==null&&kf(bs,r),Is!==null&&kf(Is,r),Mc.forEach(s),Lc.forEach(s);for(var o=0;o<As.length;o++){var c=As[o];c.blockedOn===r&&(c.blockedOn=null)}for(;0<As.length&&(o=As[0],o.blockedOn===null);)gb(o),o.blockedOn===null&&As.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var f=o[c],m=o[c+1],T=f[Ut]||null;if(typeof m=="function")T||yb(o);else if(T){var b=null;if(m&&m.hasAttribute("formAction")){if(f=m,T=m[Ut]||null)b=T.formAction;else if(B_(f)!==null)continue}else b=T.action;typeof b=="function"?o[c+1]=b:(o.splice(c,3),c-=3),yb(o)}}}function F_(r){this._internalRoot=r}Lf.prototype.render=F_.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,c=Jn();hb(o,c,r,s,null,null)},Lf.prototype.unmount=F_.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;hb(r.current,2,null,r,null,null),yf(),s[oi]=null}};function Lf(r){this._internalRoot=r}Lf.prototype.unstable_scheduleHydration=function(r){if(r){var s=es();r={blockedOn:null,target:r,priority:s};for(var o=0;o<As.length&&s!==0&&s<As[o].priority;o++);As.splice(o,0,r),o===0&&gb(r)}};var vb=e.version;if(vb!=="19.1.0")throw Error(i(527,vb,"19.1.0"));he.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var EP={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uf.isDisabled&&Uf.supportsFiber)try{At=Uf.inject(EP),Je=Uf}catch{}}return Fc.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,c="",f=k0,m=M0,T=L0,b=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(b=s.unstable_transitionCallbacks)),s=ub(r,1,!1,null,null,o,c,f,m,T,b,null),r[oi]=s.current,b_(r),new F_(s)},Fc.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var c=!1,f="",m=k0,T=M0,b=L0,D=null,j=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(b=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(D=o.unstable_transitionCallbacks),o.formState!==void 0&&(j=o.formState)),s=ub(r,1,!0,s,o??null,c,f,m,T,b,D,j),s.context=cb(null),o=s.current,c=Jn(),c=Zr(c),f=ls(c),f.callback=null,us(o,f,c),o=c,s.current.lanes=o,pr(s,o),Yi(s),r[oi]=s.current,b_(r),new Lf(s)},Fc.version="19.1.0",Fc}var Db;function NP(){if(Db)return G_.exports;Db=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),G_.exports=PP(),G_.exports}var OP=NP();lS();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mp(){return mp=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},mp.apply(this,arguments)}var Vs;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Vs||(Vs={}));const xb="popstate";function VP(n){n===void 0&&(n={});function e(a,l){let{pathname:u="/",search:d="",hash:p=""}=Gh(a.location.hash.substr(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),_y("",{pathname:u,search:d,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(a,l){let u=a.document.querySelector("base"),d="";if(u&&u.getAttribute("href")){let p=a.location.href,g=p.indexOf("#");d=g===-1?p:p.slice(0,g)}return d+"#"+(typeof l=="string"?l:uS(l))}function i(a,l){pv(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return MP(e,t,i,n)}function Gn(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function pv(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kP(){return Math.random().toString(36).substr(2,8)}function Pb(n,e){return{usr:n.state,key:n.key,idx:e}}function _y(n,e,t,i){return t===void 0&&(t=null),mp({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Gh(e):e,{state:t,key:e&&e.key||i||kP()})}function uS(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Gh(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function MP(n,e,t,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:l=!1}=i,u=a.history,d=Vs.Pop,p=null,g=y();g==null&&(g=0,u.replaceState(mp({},u.state,{idx:g}),""));function y(){return(u.state||{idx:null}).idx}function v(){d=Vs.Pop;let V=y(),Z=V==null?null:V-g;g=V,p&&p({action:d,location:B.location,delta:Z})}function w(V,Z){d=Vs.Push;let X=_y(B.location,V,Z);t&&t(X,V),g=y()+1;let Y=Pb(X,g),oe=B.createHref(X);try{u.pushState(Y,"",oe)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;a.location.assign(oe)}l&&p&&p({action:d,location:B.location,delta:1})}function R(V,Z){d=Vs.Replace;let X=_y(B.location,V,Z);t&&t(X,V),g=y();let Y=Pb(X,g),oe=B.createHref(X);u.replaceState(Y,"",oe),l&&p&&p({action:d,location:B.location,delta:0})}function L(V){let Z=a.location.origin!=="null"?a.location.origin:a.location.href,X=typeof V=="string"?V:uS(V);return X=X.replace(/ $/,"%20"),Gn(Z,"No window.location.(origin|href) available to create URL for href: "+X),new URL(X,Z)}let B={get action(){return d},get location(){return n(a,u)},listen(V){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(xb,v),p=V,()=>{a.removeEventListener(xb,v),p=null}},createHref(V){return e(a,V)},createURL:L,encodeLocation(V){let Z=L(V);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:w,replace:R,go(V){return u.go(V)}};return B}var Nb;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Nb||(Nb={}));function LP(n,e,t){return t===void 0&&(t="/"),UP(n,e,t)}function UP(n,e,t,i){let a=typeof e=="string"?Gh(e):e,l=dS(a.pathname||"/",t);if(l==null)return null;let u=cS(n);BP(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let g=XP(l);d=QP(u[p],g)}return d}function cS(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let a=(l,u,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};p.relativePath.startsWith("/")&&(Gn(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let g=Ml([i,p.relativePath]),y=t.concat(p);l.children&&l.children.length>0&&(Gn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),cS(l.children,e,y,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:$P(g,l.index),routesMeta:y})};return n.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,u);else for(let p of hS(l.path))a(l,u,p)}),e}function hS(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let u=hS(i.join("/")),d=[];return d.push(...u.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...u),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function BP(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:KP(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const zP=/^:[\w-]+$/,FP=3,qP=2,jP=1,GP=10,HP=-2,Ob=n=>n==="*";function $P(n,e){let t=n.split("/"),i=t.length;return t.some(Ob)&&(i+=HP),e&&(i+=qP),t.filter(a=>!Ob(a)).reduce((a,l)=>a+(zP.test(l)?FP:l===""?jP:GP),i)}function KP(n,e){return n.length===e.length&&n.slice(0,-1).every((i,a)=>i===e[a])?n[n.length-1]-e[e.length-1]:0}function QP(n,e,t){let{routesMeta:i}=n,a={},l="/",u=[];for(let d=0;d<i.length;++d){let p=i[d],g=d===i.length-1,y=l==="/"?e:e.slice(l.length)||"/",v=YP({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y),w=p.route;if(!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:Ml([l,v.pathname]),pathnameBase:JP(Ml([l,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(l=Ml([l,v.pathnameBase]))}return u}function YP(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=WP(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],u=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((g,y,v)=>{let{paramName:w,isOptional:R}=y;if(w==="*"){let B=d[v]||"";u=l.slice(0,l.length-B.length).replace(/(.)\/+$/,"$1")}const L=d[v];return R&&!L?g[w]=void 0:g[w]=(L||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:u,pattern:n}}function WP(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),pv(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function XP(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pv(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function dS(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const Ml=n=>n.join("/").replace(/\/\/+/g,"/"),JP=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/");function ZP(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const fS=["post","put","patch","delete"];new Set(fS);const eN=["get",...fS];new Set(eN);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gp(){return gp=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},gp.apply(this,arguments)}const tN=ge.createContext(null),nN=ge.createContext(null),pS=ge.createContext(null),Yp=ge.createContext(null),Wp=ge.createContext({outlet:null,matches:[],isDataRoute:!1}),mS=ge.createContext(null);function mv(){return ge.useContext(Yp)!=null}function iN(){return mv()||Gn(!1),ge.useContext(Yp).location}function rN(n,e){return sN(n,e)}function sN(n,e,t,i){mv()||Gn(!1);let{navigator:a}=ge.useContext(pS),{matches:l}=ge.useContext(Wp),u=l[l.length-1],d=u?u.params:{};u&&u.pathname;let p=u?u.pathnameBase:"/";u&&u.route;let g=iN(),y;if(e){var v;let V=typeof e=="string"?Gh(e):e;p==="/"||(v=V.pathname)!=null&&v.startsWith(p)||Gn(!1),y=V}else y=g;let w=y.pathname||"/",R=w;if(p!=="/"){let V=p.replace(/^\//,"").split("/");R="/"+w.replace(/^\//,"").split("/").slice(V.length).join("/")}let L=LP(n,{pathname:R}),B=cN(L&&L.map(V=>Object.assign({},V,{params:Object.assign({},d,V.params),pathname:Ml([p,a.encodeLocation?a.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?p:Ml([p,a.encodeLocation?a.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),l,t,i);return e&&B?ge.createElement(Yp.Provider,{value:{location:gp({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Vs.Pop}},B):B}function aN(){let n=pN(),e=ZP(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ge.createElement(ge.Fragment,null,ge.createElement("h2",null,"Unexpected Application Error!"),ge.createElement("h3",{style:{fontStyle:"italic"}},e),t?ge.createElement("pre",{style:a},t):null,null)}const oN=ge.createElement(aN,null);class lN extends ge.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ge.createElement(Wp.Provider,{value:this.props.routeContext},ge.createElement(mS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uN(n){let{routeContext:e,match:t,children:i}=n,a=ge.useContext(tN);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),ge.createElement(Wp.Provider,{value:e},i)}function cN(n,e,t,i){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let u=n,d=(a=t)==null?void 0:a.errors;if(d!=null){let y=u.findIndex(v=>v.route.id&&(d==null?void 0:d[v.route.id])!==void 0);y>=0||Gn(!1),u=u.slice(0,Math.min(u.length,y+1))}let p=!1,g=-1;if(t&&i&&i.v7_partialHydration)for(let y=0;y<u.length;y++){let v=u[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(g=y),v.route.id){let{loaderData:w,errors:R}=t,L=v.route.loader&&w[v.route.id]===void 0&&(!R||R[v.route.id]===void 0);if(v.route.lazy||L){p=!0,g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}return u.reduceRight((y,v,w)=>{let R,L=!1,B=null,V=null;t&&(R=d&&v.route.id?d[v.route.id]:void 0,B=v.route.errorElement||oN,p&&(g<0&&w===0?(mN("route-fallback"),L=!0,V=null):g===w&&(L=!0,V=v.route.hydrateFallbackElement||null)));let Z=e.concat(u.slice(0,w+1)),X=()=>{let Y;return R?Y=B:L?Y=V:v.route.Component?Y=ge.createElement(v.route.Component,null):v.route.element?Y=v.route.element:Y=y,ge.createElement(uN,{match:v,routeContext:{outlet:y,matches:Z,isDataRoute:t!=null},children:Y})};return t&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?ge.createElement(lN,{location:t.location,revalidation:t.revalidation,component:B,error:R,children:X(),routeContext:{outlet:null,matches:Z,isDataRoute:!0}}):X()},null)}var gS=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(gS||{});function hN(n){let e=ge.useContext(nN);return e||Gn(!1),e}function dN(n){let e=ge.useContext(Wp);return e||Gn(!1),e}function fN(n){let e=dN(),t=e.matches[e.matches.length-1];return t.route.id||Gn(!1),t.route.id}function pN(){var n;let e=ge.useContext(mS),t=hN(gS.UseRouteError),i=fN();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}const Vb={};function mN(n,e,t){Vb[n]||(Vb[n]=!0)}function gN(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function _S(n){Gn(!1)}function _N(n){let{basename:e="/",children:t=null,location:i,navigationType:a=Vs.Pop,navigator:l,static:u=!1,future:d}=n;mv()&&Gn(!1);let p=e.replace(/^\/*/,"/"),g=ge.useMemo(()=>({basename:p,navigator:l,static:u,future:gp({v7_relativeSplatPath:!1},d)}),[p,d,l,u]);typeof i=="string"&&(i=Gh(i));let{pathname:y="/",search:v="",hash:w="",state:R=null,key:L="default"}=i,B=ge.useMemo(()=>{let V=dS(y,p);return V==null?null:{location:{pathname:V,search:v,hash:w,state:R,key:L},navigationType:a}},[p,y,v,w,R,L,a]);return B==null?null:ge.createElement(pS.Provider,{value:g},ge.createElement(Yp.Provider,{children:t,value:B}))}function yN(n){let{children:e,location:t}=n;return rN(yy(e),t)}new Promise(()=>{});function yy(n,e){e===void 0&&(e=[]);let t=[];return ge.Children.forEach(n,(i,a)=>{if(!ge.isValidElement(i))return;let l=[...e,a];if(i.type===ge.Fragment){t.push.apply(t,yy(i.props.children,l));return}i.type!==_S&&Gn(!1),!i.props.index||!i.props.children||Gn(!1);let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=yy(i.props.children,l)),t.push(u)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const vN="6";try{window.__reactRouterVersion=vN}catch{}const EN="startTransition",kb=RP[EN];function TN(n){let{basename:e,children:t,future:i,window:a}=n,l=ge.useRef();l.current==null&&(l.current=VP({window:a,v5Compat:!0}));let u=l.current,[d,p]=ge.useState({action:u.action,location:u.location}),{v7_startTransition:g}=i||{},y=ge.useCallback(v=>{g&&kb?kb(()=>p(v)):p(v)},[p,g]);return ge.useLayoutEffect(()=>u.listen(y),[u,y]),ge.useEffect(()=>gN(i),[i]),ge.createElement(_N,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:u,future:i})}var Mb;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Mb||(Mb={}));var Lb;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Lb||(Lb={}));var zn=function(){return zn=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},zn.apply(this,arguments)};function _p(n,e,t){if(t||arguments.length===2)for(var i=0,a=e.length,l;i<a;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return n.concat(l||Array.prototype.slice.call(e))}var ht="-ms-",sh="-moz-",Xe="-webkit-",yS="comm",Xp="rule",gv="decl",wN="@import",vS="@keyframes",bN="@layer",ES=Math.abs,_v=String.fromCharCode,vy=Object.assign;function IN(n,e){return an(n,0)^45?(((e<<2^an(n,0))<<2^an(n,1))<<2^an(n,2))<<2^an(n,3):0}function TS(n){return n.trim()}function Ur(n,e){return(n=e.exec(n))?n[0]:n}function Ve(n,e,t){return n.replace(e,t)}function Wf(n,e,t){return n.indexOf(e,t)}function an(n,e){return n.charCodeAt(e)|0}function Gl(n,e,t){return n.slice(e,t)}function Xi(n){return n.length}function wS(n){return n.length}function Xc(n,e){return e.push(n),n}function AN(n,e){return n.map(e).join("")}function Ub(n,e){return n.filter(function(t){return!Ur(t,e)})}var Jp=1,Hl=1,bS=0,Ti=0,Gt=0,yu="";function Zp(n,e,t,i,a,l,u,d){return{value:n,root:e,parent:t,type:i,props:a,children:l,line:Jp,column:Hl,length:u,return:"",siblings:d}}function Ns(n,e){return vy(Zp("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Tl(n){for(;n.root;)n=Ns(n.root,{children:[n]});Xc(n,n.siblings)}function SN(){return Gt}function RN(){return Gt=Ti>0?an(yu,--Ti):0,Hl--,Gt===10&&(Hl=1,Jp--),Gt}function Pi(){return Gt=Ti<bS?an(yu,Ti++):0,Hl++,Gt===10&&(Hl=1,Jp++),Gt}function so(){return an(yu,Ti)}function Xf(){return Ti}function em(n,e){return Gl(yu,n,e)}function Ey(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function CN(n){return Jp=Hl=1,bS=Xi(yu=n),Ti=0,[]}function DN(n){return yu="",n}function Q_(n){return TS(em(Ti-1,Ty(n===91?n+2:n===40?n+1:n)))}function xN(n){for(;(Gt=so())&&Gt<33;)Pi();return Ey(n)>2||Ey(Gt)>3?"":" "}function PN(n,e){for(;--e&&Pi()&&!(Gt<48||Gt>102||Gt>57&&Gt<65||Gt>70&&Gt<97););return em(n,Xf()+(e<6&&so()==32&&Pi()==32))}function Ty(n){for(;Pi();)switch(Gt){case n:return Ti;case 34:case 39:n!==34&&n!==39&&Ty(Gt);break;case 40:n===41&&Ty(n);break;case 92:Pi();break}return Ti}function NN(n,e){for(;Pi()&&n+Gt!==57;)if(n+Gt===84&&so()===47)break;return"/*"+em(e,Ti-1)+"*"+_v(n===47?n:Pi())}function ON(n){for(;!Ey(so());)Pi();return em(n,Ti)}function VN(n){return DN(Jf("",null,null,null,[""],n=CN(n),0,[0],n))}function Jf(n,e,t,i,a,l,u,d,p){for(var g=0,y=0,v=u,w=0,R=0,L=0,B=1,V=1,Z=1,X=0,Y="",oe=a,se=l,ue=i,S=Y;V;)switch(L=X,X=Pi()){case 40:if(L!=108&&an(S,v-1)==58){Wf(S+=Ve(Q_(X),"&","&\f"),"&\f",ES(g?d[g-1]:0))!=-1&&(Z=-1);break}case 34:case 39:case 91:S+=Q_(X);break;case 9:case 10:case 13:case 32:S+=xN(L);break;case 92:S+=PN(Xf()-1,7);continue;case 47:switch(so()){case 42:case 47:Xc(kN(NN(Pi(),Xf()),e,t,p),p);break;default:S+="/"}break;case 123*B:d[g++]=Xi(S)*Z;case 125*B:case 59:case 0:switch(X){case 0:case 125:V=0;case 59+y:Z==-1&&(S=Ve(S,/\f/g,"")),R>0&&Xi(S)-v&&Xc(R>32?zb(S+";",i,t,v-1,p):zb(Ve(S," ","")+";",i,t,v-2,p),p);break;case 59:S+=";";default:if(Xc(ue=Bb(S,e,t,g,y,a,d,Y,oe=[],se=[],v,l),l),X===123)if(y===0)Jf(S,e,ue,ue,oe,l,v,d,se);else switch(w===99&&an(S,3)===110?100:w){case 100:case 108:case 109:case 115:Jf(n,ue,ue,i&&Xc(Bb(n,ue,ue,0,0,a,d,Y,a,oe=[],v,se),se),a,se,v,d,i?oe:se);break;default:Jf(S,ue,ue,ue,[""],se,0,d,se)}}g=y=R=0,B=Z=1,Y=S="",v=u;break;case 58:v=1+Xi(S),R=L;default:if(B<1){if(X==123)--B;else if(X==125&&B++==0&&RN()==125)continue}switch(S+=_v(X),X*B){case 38:Z=y>0?1:(S+="\f",-1);break;case 44:d[g++]=(Xi(S)-1)*Z,Z=1;break;case 64:so()===45&&(S+=Q_(Pi())),w=so(),y=v=Xi(Y=S+=ON(Xf())),X++;break;case 45:L===45&&Xi(S)==2&&(B=0)}}return l}function Bb(n,e,t,i,a,l,u,d,p,g,y,v){for(var w=a-1,R=a===0?l:[""],L=wS(R),B=0,V=0,Z=0;B<i;++B)for(var X=0,Y=Gl(n,w+1,w=ES(V=u[B])),oe=n;X<L;++X)(oe=TS(V>0?R[X]+" "+Y:Ve(Y,/&\f/g,R[X])))&&(p[Z++]=oe);return Zp(n,e,t,a===0?Xp:d,p,g,y,v)}function kN(n,e,t,i){return Zp(n,e,t,yS,_v(SN()),Gl(n,2,-2),0,i)}function zb(n,e,t,i,a){return Zp(n,e,t,gv,Gl(n,0,i),Gl(n,i+1,-1),i,a)}function IS(n,e,t){switch(IN(n,e)){case 5103:return Xe+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Xe+n+n;case 4789:return sh+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Xe+n+sh+n+ht+n+n;case 5936:switch(an(n,e+11)){case 114:return Xe+n+ht+Ve(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Xe+n+ht+Ve(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Xe+n+ht+Ve(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Xe+n+ht+n+n;case 6165:return Xe+n+ht+"flex-"+n+n;case 5187:return Xe+n+Ve(n,/(\w+).+(:[^]+)/,Xe+"box-$1$2"+ht+"flex-$1$2")+n;case 5443:return Xe+n+ht+"flex-item-"+Ve(n,/flex-|-self/g,"")+(Ur(n,/flex-|baseline/)?"":ht+"grid-row-"+Ve(n,/flex-|-self/g,""))+n;case 4675:return Xe+n+ht+"flex-line-pack"+Ve(n,/align-content|flex-|-self/g,"")+n;case 5548:return Xe+n+ht+Ve(n,"shrink","negative")+n;case 5292:return Xe+n+ht+Ve(n,"basis","preferred-size")+n;case 6060:return Xe+"box-"+Ve(n,"-grow","")+Xe+n+ht+Ve(n,"grow","positive")+n;case 4554:return Xe+Ve(n,/([^-])(transform)/g,"$1"+Xe+"$2")+n;case 6187:return Ve(Ve(Ve(n,/(zoom-|grab)/,Xe+"$1"),/(image-set)/,Xe+"$1"),n,"")+n;case 5495:case 3959:return Ve(n,/(image-set\([^]*)/,Xe+"$1$`$1");case 4968:return Ve(Ve(n,/(.+:)(flex-)?(.*)/,Xe+"box-pack:$3"+ht+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Xe+n+n;case 4200:if(!Ur(n,/flex-|baseline/))return ht+"grid-column-align"+Gl(n,e)+n;break;case 2592:case 3360:return ht+Ve(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,a){return e=a,Ur(i.props,/grid-\w+-end/)})?~Wf(n+(t=t[e].value),"span",0)?n:ht+Ve(n,"-start","")+n+ht+"grid-row-span:"+(~Wf(t,"span",0)?Ur(t,/\d+/):+Ur(t,/\d+/)-+Ur(n,/\d+/))+";":ht+Ve(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return Ur(i.props,/grid-\w+-start/)})?n:ht+Ve(Ve(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ve(n,/(.+)-inline(.+)/,Xe+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xi(n)-1-e>6)switch(an(n,e+1)){case 109:if(an(n,e+4)!==45)break;case 102:return Ve(n,/(.+:)(.+)-([^]+)/,"$1"+Xe+"$2-$3$1"+sh+(an(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Wf(n,"stretch",0)?IS(Ve(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Ve(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,u,d,p,g){return ht+a+":"+l+g+(u?ht+a+"-span:"+(d?p:+p-+l)+g:"")+n});case 4949:if(an(n,e+6)===121)return Ve(n,":",":"+Xe)+n;break;case 6444:switch(an(n,an(n,14)===45?18:11)){case 120:return Ve(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Xe+(an(n,14)===45?"inline-":"")+"box$3$1"+Xe+"$2$3$1"+ht+"$2box$3")+n;case 100:return Ve(n,":",":"+ht)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ve(n,"scroll-","scroll-snap-")+n}return n}function yp(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function MN(n,e,t,i){switch(n.type){case bN:if(n.children.length)break;case wN:case gv:return n.return=n.return||n.value;case yS:return"";case vS:return n.return=n.value+"{"+yp(n.children,i)+"}";case Xp:if(!Xi(n.value=n.props.join(",")))return""}return Xi(t=yp(n.children,i))?n.return=n.value+"{"+t+"}":""}function LN(n){var e=wS(n);return function(t,i,a,l){for(var u="",d=0;d<e;d++)u+=n[d](t,i,a,l)||"";return u}}function UN(n){return function(e){e.root||(e=e.return)&&n(e)}}function BN(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case gv:n.return=IS(n.value,n.length,t);return;case vS:return yp([Ns(n,{value:Ve(n.value,"@","@"+Xe)})],i);case Xp:if(n.length)return AN(t=n.props,function(a){switch(Ur(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Tl(Ns(n,{props:[Ve(a,/:(read-\w+)/,":"+sh+"$1")]})),Tl(Ns(n,{props:[a]})),vy(n,{props:Ub(t,i)});break;case"::placeholder":Tl(Ns(n,{props:[Ve(a,/:(plac\w+)/,":"+Xe+"input-$1")]})),Tl(Ns(n,{props:[Ve(a,/:(plac\w+)/,":"+sh+"$1")]})),Tl(Ns(n,{props:[Ve(a,/:(plac\w+)/,ht+"input-$1")]})),Tl(Ns(n,{props:[a]})),vy(n,{props:Ub(t,i)});break}return""})}}var zN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ei={},$l=typeof process<"u"&&ei!==void 0&&(ei.REACT_APP_SC_ATTR||ei.SC_ATTR)||"data-styled",AS="active",SS="data-styled-version",tm="6.1.18",yv=`/*!sc*/
`,vp=typeof window<"u"&&typeof document<"u",FN=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ei!==void 0&&ei.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ei.REACT_APP_SC_DISABLE_SPEEDY!==""?ei.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ei.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ei!==void 0&&ei.SC_DISABLE_SPEEDY!==void 0&&ei.SC_DISABLE_SPEEDY!==""&&ei.SC_DISABLE_SPEEDY!=="false"&&ei.SC_DISABLE_SPEEDY),nm=Object.freeze([]),Kl=Object.freeze({});function qN(n,e,t){return t===void 0&&(t=Kl),n.theme!==t.theme&&n.theme||e||t.theme}var RS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,GN=/(^-|-$)/g;function Fb(n){return n.replace(jN,"-").replace(GN,"")}var HN=/(a)(d)/gi,Bf=52,qb=function(n){return String.fromCharCode(n+(n>25?39:97))};function wy(n){var e,t="";for(e=Math.abs(n);e>Bf;e=e/Bf|0)t=qb(e%Bf)+t;return(qb(e%Bf)+t).replace(HN,"$1-$2")}var Y_,CS=5381,Vl=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},DS=function(n){return Vl(CS,n)};function $N(n){return wy(DS(n)>>>0)}function KN(n){return n.displayName||n.name||"Component"}function W_(n){return typeof n=="string"&&!0}var xS=typeof Symbol=="function"&&Symbol.for,PS=xS?Symbol.for("react.memo"):60115,QN=xS?Symbol.for("react.forward_ref"):60112,YN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},WN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},NS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},XN=((Y_={})[QN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Y_[PS]=NS,Y_);function jb(n){return("type"in(e=n)&&e.type.$$typeof)===PS?NS:"$$typeof"in n?XN[n.$$typeof]:YN;var e}var JN=Object.defineProperty,ZN=Object.getOwnPropertyNames,Gb=Object.getOwnPropertySymbols,eO=Object.getOwnPropertyDescriptor,tO=Object.getPrototypeOf,Hb=Object.prototype;function OS(n,e,t){if(typeof e!="string"){if(Hb){var i=tO(e);i&&i!==Hb&&OS(n,i,t)}var a=ZN(e);Gb&&(a=a.concat(Gb(e)));for(var l=jb(n),u=jb(e),d=0;d<a.length;++d){var p=a[d];if(!(p in WN||t&&t[p]||u&&p in u||l&&p in l)){var g=eO(e,p);try{JN(n,p,g)}catch{}}}}return n}function Ql(n){return typeof n=="function"}function vv(n){return typeof n=="object"&&"styledComponentId"in n}function eo(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function $b(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function vh(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function by(n,e,t){if(t===void 0&&(t=!1),!t&&!vh(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=by(n[i],e[i]);else if(vh(e))for(var i in e)n[i]=by(n[i],e[i]);return n}function Ev(n,e){Object.defineProperty(n,"toString",{value:e})}function Hh(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var nO=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;e>=l;)if((l<<=1)<0)throw Hh(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=a;u<l;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),p=(u=0,t.length);u<p;u++)this.tag.insertRule(d,t[u])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),a=i+t;this.groupSizes[e]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],a=this.indexOfGroup(e),l=a+i,u=a;u<l;u++)t+="".concat(this.tag.getRule(u)).concat(yv);return t},n}(),Zf=new Map,Ep=new Map,ep=1,zf=function(n){if(Zf.has(n))return Zf.get(n);for(;Ep.has(ep);)ep++;var e=ep++;return Zf.set(n,e),Ep.set(e,n),e},iO=function(n,e){ep=e+1,Zf.set(n,e),Ep.set(e,n)},rO="style[".concat($l,"][").concat(SS,'="').concat(tm,'"]'),sO=new RegExp("^".concat($l,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),aO=function(n,e,t){for(var i,a=t.split(","),l=0,u=a.length;l<u;l++)(i=a[l])&&n.registerName(e,i)},oO=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(yv),a=[],l=0,u=i.length;l<u;l++){var d=i[l].trim();if(d){var p=d.match(sO);if(p){var g=0|parseInt(p[1],10),y=p[2];g!==0&&(iO(y,g),aO(n,y,p[3]),n.getTag().insertRules(g,a)),a.length=0}else a.push(d)}}},Kb=function(n){for(var e=document.querySelectorAll(rO),t=0,i=e.length;t<i;t++){var a=e[t];a&&a.getAttribute($l)!==AS&&(oO(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function lO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var VS=function(n){var e=document.head,t=n||e,i=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat($l,"]")));return p[p.length-1]}(t),l=a!==void 0?a.nextSibling:null;i.setAttribute($l,AS),i.setAttribute(SS,tm);var u=lO();return u&&i.setAttribute("nonce",u),t.insertBefore(i,l),i},uO=function(){function n(e){this.element=VS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var u=i[a];if(u.ownerNode===t)return u}throw Hh(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),cO=function(){function n(e){this.element=VS(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),hO=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Qb=vp,dO={isServer:!vp,useCSSOMInjection:!FN},kS=function(){function n(e,t,i){e===void 0&&(e=Kl),t===void 0&&(t={});var a=this;this.options=zn(zn({},dO),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&vp&&Qb&&(Qb=!1,Kb(this)),Ev(this,function(){return function(l){for(var u=l.getTag(),d=u.length,p="",g=function(v){var w=function(Z){return Ep.get(Z)}(v);if(w===void 0)return"continue";var R=l.names.get(w),L=u.getGroup(v);if(R===void 0||!R.size||L.length===0)return"continue";var B="".concat($l,".g").concat(v,'[id="').concat(w,'"]'),V="";R!==void 0&&R.forEach(function(Z){Z.length>0&&(V+="".concat(Z,","))}),p+="".concat(L).concat(B,'{content:"').concat(V,'"}').concat(yv)},y=0;y<d;y++)g(y);return p}(a)})}return n.registerId=function(e){return zf(e)},n.prototype.rehydrate=function(){!this.server&&vp&&Kb(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(zn(zn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,a=t.target;return t.isServer?new hO(a):i?new uO(a):new cO(a)}(this.options),new nO(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(zf(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(zf(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(zf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),fO=/&/g,pO=/^\s*\/\/.*$/gm;function MS(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=MS(t.children,e)),t})}function mO(n){var e,t,i,a=Kl,l=a.options,u=l===void 0?Kl:l,d=a.plugins,p=d===void 0?nm:d,g=function(w,R,L){return L.startsWith(t)&&L.endsWith(t)&&L.replaceAll(t,"").length>0?".".concat(e):w},y=p.slice();y.push(function(w){w.type===Xp&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(fO,t).replace(i,g))}),u.prefix&&y.push(BN),y.push(MN);var v=function(w,R,L,B){R===void 0&&(R=""),L===void 0&&(L=""),B===void 0&&(B="&"),e=B,t=R,i=new RegExp("\\".concat(t,"\\b"),"g");var V=w.replace(pO,""),Z=VN(L||R?"".concat(L," ").concat(R," { ").concat(V," }"):V);u.namespace&&(Z=MS(Z,u.namespace));var X=[];return yp(Z,LN(y.concat(UN(function(Y){return X.push(Y)})))),X};return v.hash=p.length?p.reduce(function(w,R){return R.name||Hh(15),Vl(w,R.name)},CS).toString():"",v}var gO=new kS,Iy=mO(),LS=jl.createContext({shouldForwardProp:void 0,styleSheet:gO,stylis:Iy});LS.Consumer;jl.createContext(void 0);function Yb(){return ge.useContext(LS)}var _O=function(){function n(e,t){var i=this;this.inject=function(a,l){l===void 0&&(l=Iy);var u=i.name+l.hash;a.hasNameForId(i.id,u)||a.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ev(this,function(){throw Hh(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Iy),this.name+e.hash},n}(),yO=function(n){return n>="A"&&n<="Z"};function Wb(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;yO(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var US=function(n){return n==null||n===!1||n===""},BS=function(n){var e,t,i=[];for(var a in n){var l=n[a];n.hasOwnProperty(a)&&!US(l)&&(Array.isArray(l)&&l.isCss||Ql(l)?i.push("".concat(Wb(a),":"),l,";"):vh(l)?i.push.apply(i,_p(_p(["".concat(a," {")],BS(l),!1),["}"],!1)):i.push("".concat(Wb(a),": ").concat((e=a,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in zN||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function ao(n,e,t,i){if(US(n))return[];if(vv(n))return[".".concat(n.styledComponentId)];if(Ql(n)){if(!Ql(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var a=n(e);return ao(a,e,t,i)}var l;return n instanceof _O?t?(n.inject(t,i),[n.getName(i)]):[n]:vh(n)?BS(n):Array.isArray(n)?Array.prototype.concat.apply(nm,n.map(function(u){return ao(u,e,t,i)})):[n.toString()]}function vO(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Ql(t)&&!vv(t))return!1}return!0}var EO=DS(tm),TO=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&vO(e),this.componentId=t,this.baseHash=Vl(EO,t),this.baseStyle=i,kS.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=eo(a,this.staticRulesId);else{var l=$b(ao(this.rules,e,t,i)),u=wy(Vl(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,u)){var d=i(l,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,d)}a=eo(a,u),this.staticRulesId=u}else{for(var p=Vl(this.baseHash,i.hash),g="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")g+=v;else if(v){var w=$b(ao(v,e,t,i));p=Vl(p,w+y),g+=w}}if(g){var R=wy(p>>>0);t.hasNameForId(this.componentId,R)||t.insertRules(this.componentId,R,i(g,".".concat(R),void 0,this.componentId)),a=eo(a,R)}}return a},n}(),zS=jl.createContext(void 0);zS.Consumer;var X_={};function wO(n,e,t){var i=vv(n),a=n,l=!W_(n),u=e.attrs,d=u===void 0?nm:u,p=e.componentId,g=p===void 0?function(oe,se){var ue=typeof oe!="string"?"sc":Fb(oe);X_[ue]=(X_[ue]||0)+1;var S="".concat(ue,"-").concat($N(tm+ue+X_[ue]));return se?"".concat(se,"-").concat(S):S}(e.displayName,e.parentComponentId):p,y=e.displayName,v=y===void 0?function(oe){return W_(oe)?"styled.".concat(oe):"Styled(".concat(KN(oe),")")}(n):y,w=e.displayName&&e.componentId?"".concat(Fb(e.displayName),"-").concat(e.componentId):e.componentId||g,R=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,L=e.shouldForwardProp;if(i&&a.shouldForwardProp){var B=a.shouldForwardProp;if(e.shouldForwardProp){var V=e.shouldForwardProp;L=function(oe,se){return B(oe,se)&&V(oe,se)}}else L=B}var Z=new TO(t,w,i?a.componentStyle:void 0);function X(oe,se){return function(ue,S,A){var C=ue.attrs,N=ue.componentStyle,k=ue.defaultProps,M=ue.foldedComponentIds,x=ue.styledComponentId,Pt=ue.target,lt=jl.useContext(zS),Q=Yb(),he=ue.shouldForwardProp||Q.shouldForwardProp,ve=qN(S,lt,k)||Kl,Ne=function(xe,be,Et){for(var $e,Jt=zn(zn({},be),{className:void 0,theme:Et}),si=0;si<xe.length;si+=1){var kn=Ql($e=xe[si])?$e(Jt):$e;for(var yn in kn)Jt[yn]=yn==="className"?eo(Jt[yn],kn[yn]):yn==="style"?zn(zn({},Jt[yn]),kn[yn]):kn[yn]}return be.className&&(Jt.className=eo(Jt.className,be.className)),Jt}(C,S,ve),P=Ne.as||Pt,te={};for(var le in Ne)Ne[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&Ne.theme===ve||(le==="forwardedAs"?te.as=Ne.forwardedAs:he&&!he(le,P)||(te[le]=Ne[le]));var ae=function(xe,be){var Et=Yb(),$e=xe.generateAndInjectStyles(be,Et.styleSheet,Et.stylis);return $e}(N,Ne),Te=eo(M,x);return ae&&(Te+=" "+ae),Ne.className&&(Te+=" "+Ne.className),te[W_(P)&&!RS.has(P)?"class":"className"]=Te,A&&(te.ref=A),ge.createElement(P,te)}(Y,oe,se)}X.displayName=v;var Y=jl.forwardRef(X);return Y.attrs=R,Y.componentStyle=Z,Y.displayName=v,Y.shouldForwardProp=L,Y.foldedComponentIds=i?eo(a.foldedComponentIds,a.styledComponentId):"",Y.styledComponentId=w,Y.target=i?a.target:n,Object.defineProperty(Y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(oe){this._foldedDefaultProps=i?function(se){for(var ue=[],S=1;S<arguments.length;S++)ue[S-1]=arguments[S];for(var A=0,C=ue;A<C.length;A++)by(se,C[A],!0);return se}({},a.defaultProps,oe):oe}}),Ev(Y,function(){return".".concat(Y.styledComponentId)}),l&&OS(Y,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Y}function Xb(n,e){for(var t=[n[0]],i=0,a=e.length;i<a;i+=1)t.push(e[i],n[i+1]);return t}var Jb=function(n){return Object.assign(n,{isCss:!0})};function bO(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Ql(n)||vh(n))return Jb(ao(Xb(nm,_p([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?ao(i):Jb(ao(Xb(i,e)))}function Ay(n,e,t){if(t===void 0&&(t=Kl),!e)throw Hh(1,e);var i=function(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return n(e,t,bO.apply(void 0,_p([a],l,!1)))};return i.attrs=function(a){return Ay(n,e,zn(zn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Ay(n,e,zn(zn({},t),a))},i}var FS=function(n){return Ay(wO,n)},Se=FS;RS.forEach(function(n){Se[n]=FS(n)});const IO=Se.div`
  position: relative;
  width: 375px;
  height: 812px;
  border-radius: 40px;
  background-color: #f8f8f8;
  box-shadow: 0px 0px 8px 2px #aaaaaa;
  overflow: hidden;
`;function AO({children:n}){return pe.jsx(IO,{children:n})}const SO=Se.div`
  width: 100%;
  height: 180px;
  background-color: #DEFDF9;

  & > img {
  width: 375px;
  height: 54px;
  }
`,RO=Se.div`
  font-family: CookieRun-Regular;
  font-weight: 700;
  display: grid;

  & > h1 {
    grid-area: 1 / 1;
    font-family: CookieRun-Regular;
    font-size: 40px;
  }
`,CO=Se.h1`
    margin-top: 2px;
    margin-left: 2px;
    color: #222222;
    text-shadow: 
    2px 2px 1px #222222,
    2px 0px 1px #222222,
    2px -1px 1px #222222,
    0px 2px 1px #222222,
    0px 0px 1px #222222, 
    0px -1px 1px #222222,
    -1px 1px 1px #222222,
    -1px 0px 1px #222222,
    -1px -1px 1px #222222;
`,DO=Se.h1`
    color: #FFF8D2;
`,xO=Se.button`
  width: 48px;
  height: 48px;
  margin-left: -4px;
  border-radius: 0 12px 12px 0;
  border: none;
  background-color: var(--main-color);
  display: flex;
  padding: 12px;
  align-items: center;

`,PO=Se.div`
  display: flex;
  gap: 8px;
`;function NO(n){return pe.jsxs(SO,{children:[pe.jsx("img",{src:"./StatusBar.svg"}),pe.jsxs(PO,{children:[pe.jsx(xO,{children:pe.jsx("img",{src:"/ToonChat/Triangle.svg"})}),pe.jsxs(RO,{children:[pe.jsx(CO,{children:"제목"}),pe.jsx(DO,{children:"제목"})]})]})]})}const OO=()=>{};var Zb={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},VO=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const a=n[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],u=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(u&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],u=n[t++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return e.join("")},jS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<n.length;a+=3){const l=n[a],u=a+1<n.length,d=u?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,v=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,R=g&63;p||(R=64,u||(w=64)),i.push(t[y],t[v],t[w],t[R])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(qS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):VO(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const v=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||v==null)throw new kO;const w=l<<2|d>>4;if(i.push(w),g!==64){const R=d<<4&240|g>>2;if(i.push(R),v!==64){const L=g<<6&192|v;i.push(L)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MO=function(n){const e=qS(n);return jS.encodeByteArray(e,!0)},Tp=function(n){return MO(n).replace(/\./g,"")},Tv=function(n){try{return jS.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function wp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!LO(t)||(n[t]=wp(n[t],e[t]));return n}function LO(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=()=>wv().__FIREBASE_DEFAULTS__,BO=()=>{if(typeof process>"u"||typeof Zb>"u")return;const n=Zb.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zO=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Tv(n[1]);return e&&JSON.parse(e)},bv=()=>{try{return OO()||UO()||BO()||zO()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},GS=()=>{var n;return(n=bv())===null||n===void 0?void 0:n.config},FO=n=>{var e;return(e=bv())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n){return n.endsWith(".cloudworkstations.dev")}async function HS(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Tp(JSON.stringify(t)),Tp(JSON.stringify(u)),""].join(".")}const ah={};function GO(){const n={prod:[],emulator:[]};for(const e of Object.keys(ah))ah[e]?n.emulator.push(e):n.prod.push(e);return n}function HO(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let eI=!1;function Iv(n,e){if(typeof window>"u"||typeof document>"u"||!$h(window.location.host)||ah[n]===e||ah[n]||eI)return;ah[n]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",l=GO().prod.length>0;function u(){const w=document.getElementById(i);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,R){w.setAttribute("width","24"),w.setAttribute("id",R),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{eI=!0,u()},w}function y(w,R){w.setAttribute("id",R),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function v(){const w=HO(i),R=t("text"),L=document.getElementById(R)||document.createElement("span"),B=t("learnmore"),V=document.getElementById(B)||document.createElement("a"),Z=t("preprendIcon"),X=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const Y=w.element;d(Y),y(V,B);const oe=g();p(X,Z),Y.append(X,L,V,oe),document.body.appendChild(Y)}l?(L.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(X.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $O(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function Av(){var n;const e=(n=bv())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KO(){return typeof window<"u"||$S()}function $S(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function QO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QS(){const n=bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function YS(){return!Av()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Eh(){try{return typeof indexedDB=="object"}catch{return!1}}function YO(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO="FirebaseError";class Nn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=WO,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bo.prototype.create)}}class bo{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],u=l?XO(l,i):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new Nn(a,d,i)}}function XO(n,e){return n.replace(JO,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const JO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ZO(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function js(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const a of t){if(!i.includes(a))return!1;const l=n[a],u=e[a];if(nI(l)&&nI(u)){if(!js(l,u))return!1}else if(l!==u)return!1}for(const a of i)if(!t.includes(a))return!1;return!0}function nI(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function kl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Jc(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function WS(n,e){const t=new eV(n,e);return t.subscribe.bind(t)}class eV{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let a;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");tV(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:i},a.next===void 0&&(a.next=J_),a.error===void 0&&(a.error=J_),a.complete===void 0&&(a.complete=J_);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tV(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function J_(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n){return n&&n._delegate?n._delegate:n}class lr{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new qO;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rV(e))try{this.getOrInitializeService({instanceIdentifier:$a})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=$a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$a){return this.instances.has(e)}getOptions(e=$a){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&u.resolve(a)}return a}onInit(e,t){var i;const a=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(a))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(a,l);const u=this.instances.get(a);return u&&e(u,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:iV(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=$a){return this.component?this.component.multipleInstances?e:$a:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iV(n){return n===$a?void 0:n}function rV(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nV(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=[];var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const JS={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},sV=Be.INFO,aV={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},oV=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),a=aV[e];if(a)console[a](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class im{constructor(e){this.name=e,this._logLevel=sV,this._logHandler=oV,this._userLogHandler=null,Rv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}function lV(n){Rv.forEach(e=>{e.setLogLevel(n)})}function uV(n,e){for(const t of Rv){let i=null;e&&e.level&&(i=JS[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(a,l,...u)=>{const d=u.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");l>=(i??a.logLevel)&&n({level:Be[l].toLowerCase(),message:d,args:u,type:a.name})}}}const cV=(n,e)=>e.some(t=>n instanceof t);let iI,rI;function hV(){return iI||(iI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dV(){return rI||(rI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ZS=new WeakMap,Sy=new WeakMap,eR=new WeakMap,Z_=new WeakMap,Cv=new WeakMap;function fV(n){const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{t(Us(n.result)),a()},u=()=>{i(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&ZS.set(t,n)}).catch(()=>{}),Cv.set(e,n),e}function pV(n){if(Sy.has(n))return;const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{t(),a()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});Sy.set(n,e)}let Ry={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sy.get(n);if(e==="objectStoreNames")return n.objectStoreNames||eR.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Us(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function mV(n){Ry=n(Ry)}function gV(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ey(this),e,...t);return eR.set(i,e.sort?e.sort():[e]),Us(i)}:dV().includes(n)?function(...e){return n.apply(ey(this),e),Us(ZS.get(this))}:function(...e){return Us(n.apply(ey(this),e))}}function _V(n){return typeof n=="function"?gV(n):(n instanceof IDBTransaction&&pV(n),cV(n,hV())?new Proxy(n,Ry):n)}function Us(n){if(n instanceof IDBRequest)return fV(n);if(Z_.has(n))return Z_.get(n);const e=_V(n);return e!==n&&(Z_.set(n,e),Cv.set(e,n)),e}const ey=n=>Cv.get(n);function yV(n,e,{blocked:t,upgrade:i,blocking:a,terminated:l}={}){const u=indexedDB.open(n,e),d=Us(u);return i&&u.addEventListener("upgradeneeded",p=>{i(Us(u.result),p.oldVersion,p.newVersion,Us(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const vV=["get","getKey","getAll","getAllKeys","count"],EV=["put","add","delete","clear"],ty=new Map;function sI(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ty.get(e))return ty.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=EV.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||vV.includes(t)))return;const l=async function(u,...d){const p=this.transaction(u,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return ty.set(e,l),l}mV(n=>({...n,get:(e,t,i)=>sI(e,t)||n.get(e,t,i),has:(e,t)=>!!sI(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wV(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function wV(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bp="@firebase/app",Cy="0.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new im("@firebase/app"),bV="@firebase/app-compat",IV="@firebase/analytics-compat",AV="@firebase/analytics",SV="@firebase/app-check-compat",RV="@firebase/app-check",CV="@firebase/auth",DV="@firebase/auth-compat",xV="@firebase/database",PV="@firebase/data-connect",NV="@firebase/database-compat",OV="@firebase/functions",VV="@firebase/functions-compat",kV="@firebase/installations",MV="@firebase/installations-compat",LV="@firebase/messaging",UV="@firebase/messaging-compat",BV="@firebase/performance",zV="@firebase/performance-compat",FV="@firebase/remote-config",qV="@firebase/remote-config-compat",jV="@firebase/storage",GV="@firebase/storage-compat",HV="@firebase/firestore",$V="@firebase/vertexai",KV="@firebase/firestore-compat",QV="firebase",YV="11.7.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="[DEFAULT]",WV={[bp]:"fire-core",[bV]:"fire-core-compat",[AV]:"fire-analytics",[IV]:"fire-analytics-compat",[RV]:"fire-app-check",[SV]:"fire-app-check-compat",[CV]:"fire-auth",[DV]:"fire-auth-compat",[xV]:"fire-rtdb",[PV]:"fire-data-connect",[NV]:"fire-rtdb-compat",[OV]:"fire-fn",[VV]:"fire-fn-compat",[kV]:"fire-iid",[MV]:"fire-iid-compat",[LV]:"fire-fcm",[UV]:"fire-fcm-compat",[BV]:"fire-perf",[zV]:"fire-perf-compat",[FV]:"fire-rc",[qV]:"fire-rc-compat",[jV]:"fire-gcs",[GV]:"fire-gcs-compat",[HV]:"fire-fst",[KV]:"fire-fst-compat",[$V]:"fire-vertex","fire-js":"fire-js",[QV]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new Map,Yl=new Map,Wl=new Map;function Th(n,e){try{n.container.addComponent(e)}catch(t){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function tR(n,e){n.container.addOrOverwriteComponent(e)}function $s(n){const e=n.name;if(Wl.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;Wl.set(e,n);for(const t of Hs.values())Th(t,n);for(const t of Yl.values())Th(t,n);return!0}function nR(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function XV(n,e,t=Gs){nR(n,e).clearInstance(t)}function iR(n){return n.options!==void 0}function gt(n){return n==null?!1:n.settings!==void 0}function JV(){Wl.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new bo("app","Firebase",ZV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rR=class{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(n,e){const t=Tv(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,l=new Date().getTime();a-l<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class ek extends rR{constructor(e,t,i,a){const l=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:i,automaticDataCollectionEnabled:l};if(e.apiKey!==void 0)super(e,u,a);else{const d=e;super(d.options,u,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:l},t),this._serverConfig.authIdToken&&aI(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&aI(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Ni(bp,Cy,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){xv(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Ei.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=YV;function Dv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Gs,automaticDataCollectionEnabled:!1},e),a=i.name;if(typeof a!="string"||!a)throw Ei.create("bad-app-name",{appName:String(a)});if(t||(t=GS()),!t)throw Ei.create("no-options");const l=Hs.get(a);if(l){if(js(t,l.options)&&js(i,l.config))return l;throw Ei.create("duplicate-app",{appName:a})}const u=new XS(a);for(const p of Wl.values())u.addComponent(p);const d=new rR(t,i,u);return Hs.set(a,d),d}function tk(n,e){if(KO()&&!$S())throw Ei.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;iR(n)?t=n.options:t=n;const i=Object.assign(Object.assign({},e),t);i.releaseOnDeref!==void 0&&delete i.releaseOnDeref;const a=g=>[...g].reduce((y,v)=>Math.imul(31,y)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Ei.create("finalization-registry-not-supported",{});const l=""+a(JSON.stringify(i)),u=Yl.get(l);if(u)return u.incRefCount(e.releaseOnDeref),u;const d=new XS(l);for(const g of Wl.values())d.addComponent(g);const p=new ek(t,e,l,d);return Yl.set(l,p),p}function nk(n=Gs){const e=Hs.get(n);if(!e&&n===Gs&&GS())return Dv();if(!e)throw Ei.create("no-app",{appName:n});return e}function ik(){return Array.from(Hs.values())}async function xv(n){let e=!1;const t=n.name;Hs.has(t)?(e=!0,Hs.delete(t)):Yl.has(t)&&n.decRefCount()<=0&&(Yl.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(i=>i.delete())),n.isDeleted=!0)}function Ni(n,e,t){var i;let a=(i=WV[n])!==null&&i!==void 0?i:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(d.join(" "));return}$s(new lr(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function sR(n,e){if(n!==null&&typeof n!="function")throw Ei.create("invalid-log-argument");uV(n,e)}function aR(n){lV(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk="firebase-heartbeat-database",sk=1,wh="firebase-heartbeat-store";let ny=null;function oR(){return ny||(ny=yV(rk,sk,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(wh)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ei.create("idb-open",{originalErrorMessage:n.message})})),ny}async function ak(n){try{const t=(await oR()).transaction(wh),i=await t.objectStore(wh).get(lR(n));return await t.done,i}catch(e){if(e instanceof Nn)qr.warn(e.message);else{const t=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qr.warn(t.message)}}}async function oI(n,e){try{const i=(await oR()).transaction(wh,"readwrite");await i.objectStore(wh).put(e,lR(n)),await i.done}catch(t){if(t instanceof Nn)qr.warn(t.message);else{const i=Ei.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qr.warn(i.message)}}}function lR(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=1024,lk=30;class uk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hk(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=lI();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>lk){const u=dk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){qr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lI(),{heartbeatsToSend:i,unsentEntries:a}=ck(this._heartbeatsCache.heartbeats),l=Tp(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return qr.warn(t),""}}}function lI(){return new Date().toISOString().substring(0,10)}function ck(n,e=ok){const t=[];let i=n.slice();for(const a of n){const l=t.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),uI(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),uI(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class hk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eh()?YO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ak(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return oI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return oI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function uI(n){return Tp(JSON.stringify({version:2,heartbeats:n})).length}function dk(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(n){$s(new lr("platform-logger",e=>new TV(e),"PRIVATE")),$s(new lr("heartbeat",e=>new uk(e),"PRIVATE")),Ni(bp,Cy,n),Ni(bp,Cy,"esm2017"),Ni("fire-js","")}fk("");const pk=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Nn,SDK_VERSION:na,_DEFAULT_ENTRY_NAME:Gs,_addComponent:Th,_addOrOverwriteComponent:tR,_apps:Hs,_clearComponents:JV,_components:Wl,_getProvider:nR,_isFirebaseApp:iR,_isFirebaseServerApp:gt,_registerComponent:$s,_removeServiceInstance:XV,_serverApps:Yl,deleteApp:xv,getApp:nk,getApps:ik,initializeApp:Dv,initializeServerApp:tk,onLog:sR,registerVersion:Ni,setLogLevel:aR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,t){this._delegate=e,this.firebase=t,Th(e,new lr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),xv(this._delegate)))}_getService(e,t=Gs){var i;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((i=a.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=Gs){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Th(this._delegate,e)}_addOrOverwriteComponent(e){tR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},cI=new bo("app-compat","Firebase",gk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(n){const e={},t={__esModule:!0,initializeApp:l,app:a,registerVersion:Ni,setLogLevel:aR,onLog:sR,apps:null,SDK_VERSION:na,INTERNAL:{registerComponent:d,removeApp:i,useAsService:p,modularAPIs:pk}};t.default=t,Object.defineProperty(t,"apps",{get:u});function i(g){delete e[g]}function a(g){if(g=g||Gs,!tI(e,g))throw cI.create("no-app",{appName:g});return e[g]}a.App=n;function l(g,y={}){const v=Dv(g,y);if(tI(e,v.name))return e[v.name];const w=new n(v,t);return e[v.name]=w,w}function u(){return Object.keys(e).map(g=>e[g])}function d(g){const y=g.name,v=y.replace("-compat","");if($s(g)&&g.type==="PUBLIC"){const w=(R=a())=>{if(typeof R[v]!="function")throw cI.create("invalid-app-argument",{appName:y});return R[v]()};g.serviceProps!==void 0&&wp(w,g.serviceProps),t[v]=w,n.prototype[v]=function(...R){return this._getService.bind(this,y).apply(this,g.multipleInstances?R:[])}}return g.type==="PUBLIC"?t[v]:null}function p(g,y){return y==="serverAuth"?null:y}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(){const n=_k(mk);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:uR,extendNamespace:e,createSubscribe:WS,ErrorFactory:bo,deepExtend:wp});function e(t){wp(n,t)}return n}const yk=uR();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=new im("@firebase/app-compat"),vk="@firebase/app-compat",Ek="0.3.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(n){Ni(vk,Ek,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=wv();if(n.firebase!==void 0){hI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&hI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Eu=yk;Tk();var wk="firebase",bk="11.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Eu.registerVersion(wk,bk,"app-compat");function Pv(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(n);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a])&&(t[i[a]]=n[i[a]]);return t}const qc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},wl={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function cR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ak=Ik,Sk=cR,hR=new bo("auth","Firebase",cR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=new im("@firebase/auth");function Rk(n,...e){Ip.logLevel<=Be.WARN&&Ip.warn(`Auth (${na}): ${n}`,...e)}function tp(n,...e){Ip.logLevel<=Be.ERROR&&Ip.error(`Auth (${na}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n,...e){throw Ov(n,...e)}function Wt(n,...e){return Ov(n,...e)}function Nv(n,e,t){const i=Object.assign(Object.assign({},Sk()),{[e]:t});return new bo("auth","Firebase",i).create(e,{appName:n.name})}function ln(n){return Nv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tu(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&_n(n,"argument-error"),Nv(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ov(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return hR.create(n,...e)}function re(n,e,...t){if(!n)throw Ov(e,...t)}function ir(n){const e="INTERNAL ASSERTION FAILED: "+n;throw tp(e),new Error(e)}function Oi(n,e){n||ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Vv(){return dI()==="http:"||dI()==="https:"}function dI(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vv()||KS()||"connection"in navigator)?navigator.onLine:!0}function Dk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t){this.shortDelay=e,this.longDelay=t,Oi(t>e,"Short delay should be less than long delay!"),this.isMobile=$O()||Sv()}get(){return Ck()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(n,e){Oi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Nk=new Kh(3e4,6e4);function Dt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xt(n,e,t,i,a={}){return fR(n,a,async()=>{let l={},u={};i&&(e==="GET"?u=i:l={body:JSON.stringify(i)});const d=vu(Object.assign({key:n.config.apiKey},u)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:p},l);return QO()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&$h(n.emulatorConfig.host)&&(g.credentials="include"),dR.fetch()(await pR(n,n.config.apiHost,t,d),g)})}async function fR(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},xk),e);try{const a=new Vk(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw Zc(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const d=l.ok?u.errorMessage:u.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zc(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw Zc(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw Zc(n,"user-disabled",u);const y=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Nv(n,y,g);_n(n,y)}}catch(a){if(a instanceof Nn)throw a;_n(n,"network-request-failed",{message:String(a)})}}async function Kr(n,e,t,i,a={}){const l=await xt(n,e,t,i,a);return"mfaPendingCredential"in l&&_n(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function pR(n,e,t,i){const a=`${e}${t}?${i}`,l=n,u=l.config.emulator?kv(n.config,a):`${n.config.apiScheme}://${a}`;return Pk.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function Ok(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Wt(this.auth,"network-request-failed")),Nk.get())})}}function Zc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const a=Wt(n,e,i);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(n){return n!==void 0&&n.getResponse!==void 0}function pI(n){return n!==void 0&&n.enterprise!==void 0}class mR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ok(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(n){return(await xt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function gR(n,e){return xt(n,"GET","/v2/recaptchaConfig",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(n,e){return xt(n,"POST","/v1/accounts:delete",e)}async function Lk(n,e){return xt(n,"POST","/v1/accounts:update",e)}async function Ap(n,e){return xt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Uk(n,e=!1){const t=Ie(n),i=await t.getIdToken(e),a=rm(i);re(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,u=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:oh(iy(a.auth_time)),issuedAtTime:oh(iy(a.iat)),expirationTime:oh(iy(a.exp)),signInProvider:u||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function iy(n){return Number(n)*1e3}function rm(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return tp("JWT malformed, contained fewer than 3 sections"),null;try{const a=Tv(t);return a?JSON.parse(a):(tp("Failed to decode base64 JWT payload"),null)}catch(a){return tp("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function mI(n){const e=rm(n);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Nn&&Bk(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Bk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oh(this.lastLoginAt),this.creationTime=oh(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ih(n){var e;const t=n.auth,i=await n.getIdToken(),a=await jr(n,Ap(t,{idToken:i}));re(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const u=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?_R(l.providerUserInfo):[],d=qk(n.providerData,u),p=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),y=p?g:!1,v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Dy(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function Fk(n){const e=Ie(n);await Ih(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qk(n,e){return[...n.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function _R(n){return n.map(e=>{var{providerId:t}=e,i=Pv(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(n,e){const t=await fR(n,{},async()=>{const i=vu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,u=await pR(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",dR.fetch()(u,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Gk(n,e){return xt(n,"POST","/v2/accounts:revokeToken",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=mI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:a,expiresIn:l}=await jk(e,t);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:a,expirationTime:l}=t,u=new Ll;return i&&(re(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),a&&(re(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),l&&(re(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ll,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n,e){re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xi{constructor(e){var{uid:t,auth:i,stsTokenManager:a}=e,l=Pv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Dy(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await jr(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Uk(this,e)}reload(){return Fk(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ih(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gt(this.auth.app))return Promise.reject(ln(this.auth));const e=await this.getIdToken();return await jr(this,Mk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,a,l,u,d,p,g,y;const v=(i=t.displayName)!==null&&i!==void 0?i:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,R=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,L=(u=t.photoURL)!==null&&u!==void 0?u:void 0,B=(d=t.tenantId)!==null&&d!==void 0?d:void 0,V=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,Z=(g=t.createdAt)!==null&&g!==void 0?g:void 0,X=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:Y,emailVerified:oe,isAnonymous:se,providerData:ue,stsTokenManager:S}=t;re(Y&&S,e,"internal-error");const A=Ll.fromJSON(this.name,S);re(typeof Y=="string",e,"internal-error"),Rs(v,e.name),Rs(w,e.name),re(typeof oe=="boolean",e,"internal-error"),re(typeof se=="boolean",e,"internal-error"),Rs(R,e.name),Rs(L,e.name),Rs(B,e.name),Rs(V,e.name),Rs(Z,e.name),Rs(X,e.name);const C=new xi({uid:Y,auth:e,email:w,emailVerified:oe,displayName:v,isAnonymous:se,photoURL:L,phoneNumber:R,tenantId:B,stsTokenManager:A,createdAt:Z,lastLoginAt:X});return ue&&Array.isArray(ue)&&(C.providerData=ue.map(N=>Object.assign({},N))),V&&(C._redirectEventId=V),C}static async _fromIdTokenResponse(e,t,i=!1){const a=new Ll;a.updateFromServerResponse(t);const l=new xi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await Ih(l),l}static async _fromGetAccountInfoResponse(e,t,i){const a=t.users[0];re(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?_R(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new Ll;d.updateFromIdToken(i);const p=new xi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Dy(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new Map;function ii(n){Oi(n instanceof Function,"Expected a class definition");let e=gI.get(n);return e?(Oi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gI.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yR.type="NONE";const Xl=yR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n,e,t){return`firebase:${n}:${e}:${t}`}class Ul{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=oo(this.userKey,a.apiKey,l),this.fullPersistenceKey=oo("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ap(this.auth,{idToken:e}).catch(()=>{});return t?xi._fromGetAccountInfoResponse(this.auth,t,e):null}return xi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ul(ii(Xl),e,i);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||ii(Xl);const u=oo(i,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(u);if(y){let v;if(typeof y=="string"){const w=await Ap(e,{idToken:y}).catch(()=>{});if(!w)break;v=await xi._fromGetAccountInfoResponse(e,w,y)}else v=xi._fromJSON(e,y);g!==l&&(d=v),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ul(l,e,i):(l=p[0],d&&await l._set(u,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(u)}catch{}})),new Ul(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bR(e))return"Blackberry";if(IR(e))return"Webos";if(ER(e))return"Safari";if((e.includes("chrome/")||TR(e))&&!e.includes("edge/"))return"Chrome";if(Qh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function vR(n=bt()){return/firefox\//i.test(n)}function ER(n=bt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TR(n=bt()){return/crios\//i.test(n)}function wR(n=bt()){return/iemobile/i.test(n)}function Qh(n=bt()){return/android/i.test(n)}function bR(n=bt()){return/blackberry/i.test(n)}function IR(n=bt()){return/webos/i.test(n)}function Yh(n=bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Hk(n=bt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function $k(n=bt()){var e;return Yh(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kk(){return QS()&&document.documentMode===10}function AR(n=bt()){return Yh(n)||Qh(n)||IR(n)||bR(n)||/windows phone/i.test(n)||wR(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(n,e=[]){let t;switch(n){case"Browser":t=_I(bt());break;case"Worker":t=`${_I(bt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${na}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((u,d)=>{try{const p=e(l);u(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(n,e={}){return xt(n,"GET","/v2/passwordPolicy",Dt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=6;class Xk{constructor(e){var t,i,a,l;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:Wk,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,a,l,u,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,t,i,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yI(this),this.idTokenSubscription=new yI(this),this.beforeStateQueue=new Qk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ii(t)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await Ul.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ap(this,{idToken:e}),i=await xi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(gt(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ih(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gt(this.app))return Promise.reject(ln(this));const t=e?Ie(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gt(this.app)?Promise.reject(ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gt(this.app)?Promise.reject(ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ii(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yk(this),t=new Xk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bo("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Gk(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ii(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await Ul.create(this,[ii(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(d,this,"internal-error"),d.then(()=>{u||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=SR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Rk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function It(n){return Ie(n)}class yI{constructor(e){this.auth=e,this.observer=null,this.addObserver=WS(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zk(n){Wh=n}function Mv(n){return Wh.loadJS(n)}function e2(){return Wh.recaptchaV2Script}function t2(){return Wh.recaptchaEnterpriseScript}function n2(){return Wh.gapiScript}function RR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=500,r2=6e4,Ff=1e12;class s2{constructor(e){this.auth=e,this.counter=Ff,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new l2(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||Ff;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||Ff;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||Ff;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class a2{constructor(){this.enterprise=new o2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class o2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class l2{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;re(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=u2(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},r2)},i2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function u2(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const c2="recaptcha-enterprise",lh="NO_RECAPTCHA";class CR{constructor(e){this.type=c2,this.auth=It(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,d)=>{gR(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new mR(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,u(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,u,d){const p=window.grecaptcha;pI(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{u(g)}).catch(()=>{u(lh)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new a2().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(d=>{if(!t&&pI(window.grecaptcha))a(d,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=t2();p.length!==0&&(p+=d),Mv(p).then(()=>{a(d,l,u)}).catch(g=>{u(g)})}}).catch(d=>{u(d)})})}}async function jc(n,e,t,i=!1,a=!1){const l=new CR(n);let u;if(a)u=lh;else try{u=await l.verify(t)}catch{u=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Bs(n,e,t,i,a){var l,u;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await jc(n,e,t,t==="getOobCode");return i(n,d)}else return i(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await jc(n,e,t,t==="getOobCode");return i(n,p)}else return Promise.reject(d)});else if(a==="PHONE_PROVIDER")if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("PHONE_PROVIDER")){const d=await jc(n,e,t);return i(n,d).catch(async p=>{var g;if(((g=n._getRecaptchaConfig())===null||g===void 0?void 0:g.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await jc(n,e,t,!1,!0);return i(n,y)}return Promise.reject(p)})}else{const d=await jc(n,e,t,!1,!0);return i(n,d)}else return Promise.reject(a+" provider is not supported.")}async function h2(n){const e=It(n),t=await gR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new mR(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new CR(e).verify()}function d2(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ii);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function f2(n,e,t){const i=It(n);re(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),l=DR(e),{host:u,port:d}=p2(e),p=d===null?"":`:${d}`,g={url:`${l}//${u}${p}/`},y=Object.freeze({host:u,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){re(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),re(js(g,i.config.emulator)&&js(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,$h(u)?(Iv("Auth",!0),HS(`${l}//${u}${p}`)):a||m2()}function DR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function p2(n){const e=DR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:vI(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:vI(u)}}}function vI(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function m2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,t){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(n,e){return xt(n,"POST","/v1/accounts:resetPassword",Dt(n,e))}async function g2(n,e){return xt(n,"POST","/v1/accounts:update",e)}async function _2(n,e){return xt(n,"POST","/v1/accounts:signUp",e)}async function y2(n,e){return xt(n,"POST","/v1/accounts:update",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(n,e){return Kr(n,"POST","/v1/accounts:signInWithPassword",Dt(n,e))}async function sm(n,e){return xt(n,"POST","/v1/accounts:sendOobCode",Dt(n,e))}async function E2(n,e){return sm(n,e)}async function T2(n,e){return sm(n,e)}async function w2(n,e){return sm(n,e)}async function b2(n,e){return sm(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(n,e){return Kr(n,"POST","/v1/accounts:signInWithEmailLink",Dt(n,e))}async function A2(n,e){return Kr(n,"POST","/v1/accounts:signInWithEmailLink",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends wu{constructor(e,t,i,a=null){super("password",i),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Ah(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ah(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bs(e,t,"signInWithPassword",v2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return I2(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bs(e,i,"signUpPassword",_2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return A2(e,{idToken:t,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n,e){return Kr(n,"POST","/v1/accounts:signInWithIdp",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2="http://localhost";class ur extends wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a}=t,l=Pv(t,["providerId","signInMethod"]);if(!i||!a)return null;const u=new ur(i,a);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Fr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}buildRequest(){const e={requestUri:S2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(n,e){return xt(n,"POST","/v1/accounts:sendVerificationCode",Dt(n,e))}async function R2(n,e){return Kr(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,e))}async function C2(n,e){const t=await Kr(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,e));if(t.temporaryProof)throw Zc(n,"account-exists-with-different-credential",t);return t}const D2={USER_NOT_FOUND:"user-not-found"};async function x2(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Kr(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,t),D2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends wu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new lo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new lo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return R2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return C2(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return x2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l}=e;return!i&&!t&&!a&&!l?null:new lo({verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function N2(n){const e=kl(Jc(n)).link,t=e?kl(Jc(e)).deep_link_id:null,i=kl(Jc(n)).deep_link_id;return(i?kl(Jc(i)).link:null)||i||t||e||n}class am{constructor(e){var t,i,a,l,u,d;const p=kl(Jc(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(i=p.oobCode)!==null&&i!==void 0?i:null,v=P2((a=p.mode)!==null&&a!==void 0?a:null);re(g&&y&&v,"argument-error"),this.apiKey=g,this.operation=v,this.code=y,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(u=p.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=N2(e);try{return new am(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.providerId=ia.PROVIDER_ID}static credential(e,t){return Ah._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=am.parseLink(t);return re(i,"argument-error"),Ah._fromEmailAndCode(e,i.code,i.tenantId)}}ia.PROVIDER_ID="password";ia.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ia.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends Qr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Bl extends bu{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return re("providerId"in t&&"signInMethod"in t,"argument-error"),ur._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return re(e.idToken||e.accessToken,"argument-error"),ur._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Bl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Bl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:a,pendingToken:l,nonce:u,providerId:d}=e;if(!i&&!a&&!t&&!l||!d)return null;try{return new Bl(d)._credential({idToken:t,accessToken:i,nonce:u,pendingToken:l})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends bu{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:Zi.PROVIDER_ID,signInMethod:Zi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zi.credentialFromTaggedObject(e)}static credentialFromError(e){return Zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zi.credential(e.oauthAccessToken)}catch{return null}}}Zi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends bu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ur._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return er.credential(t,i)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends bu{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2="http://localhost";class Jl extends wu{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Fr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,pendingToken:l}=t;return!i||!a||!l||i!==a?null:new Jl(i,l)}static _create(e,t){return new Jl(e,t)}buildRequest(){return{requestUri:O2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2="saml.";class Sp extends Qr{constructor(e){re(e.startsWith(V2),"argument-error"),super(e)}static credentialFromResult(e){return Sp.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Sp.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Jl.fromJSON(e);return re(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return Jl._create(i,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends bu{constructor(){super("twitter.com")}static credential(e,t){return ur._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return nr.credential(t,i)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(n,e){return Kr(n,"POST","/v1/accounts:signUp",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,a=!1){const l=await xi._fromIdTokenResponse(e,i,a),u=TI(i);return new wi({user:l,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const a=TI(i);return new wi({user:e,providerId:a,_tokenResponse:i,operationType:t})}}function TI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(n){var e;if(gt(n.app))return Promise.reject(ln(n));const t=It(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new wi({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await PR(t,{returnSecureToken:!0}),a=await wi._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp extends Nn{constructor(e,t,i,a){var l;super(t.code,t.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,Rp.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,a){return new Rp(e,t,i,a)}}function NR(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Rp._fromErrorAndOperation(n,l,e,i):l})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M2(n,e){const t=Ie(n);await om(!0,t,e);const{providerUserInfo:i}=await Lk(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=OR(i||[]);return t.providerData=t.providerData.filter(l=>a.has(l.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Lv(n,e,t=!1){const i=await jr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wi._forOperation(n,"link",i)}async function om(n,e,t){await Ih(e);const i=OR(e.providerData),a=n===!1?"provider-already-linked":"no-such-provider";re(i.has(t)===n,e.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(n,e,t=!1){const{auth:i}=n;if(gt(i.app))return Promise.reject(ln(i));const a="reauthenticate";try{const l=await jr(n,NR(i,a,e,n),t);re(l.idToken,i,"internal-error");const u=rm(l.idToken);re(u,i,"internal-error");const{sub:d}=u;return re(n.uid===d,i,"user-mismatch"),wi._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&_n(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(n,e,t=!1){if(gt(n.app))return Promise.reject(ln(n));const i="signIn",a=await NR(n,i,e),l=await wi._fromIdTokenResponse(n,i,a);return t||await n._updateCurrentUser(l.user),l}async function lm(n,e){return kR(It(n),e)}async function MR(n,e){const t=Ie(n);return await om(!1,t,e.providerId),Lv(t,e)}async function LR(n,e){return VR(Ie(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(n,e){return Kr(n,"POST","/v1/accounts:signInWithCustomToken",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(n,e){if(gt(n.app))return Promise.reject(ln(n));const t=It(n),i=await L2(t,{token:e,returnSecureToken:!0}),a=await wi._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Uv._fromServerResponse(e,t):"totpInfo"in t?Bv._fromServerResponse(e,t):_n(e,"internal-error")}}class Uv extends Xh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Uv(t)}}class Bv extends Xh{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Bv(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n,e,t){var i;re(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),re(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),re(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(re(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(re(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zv(n){const e=It(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function B2(n,e,t){const i=It(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&um(i,a,t),await Bs(i,a,"getOobCode",T2,"EMAIL_PASSWORD_PROVIDER")}async function z2(n,e,t){await xR(Ie(n),{oobCode:e,newPassword:t}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&zv(n),i})}async function F2(n,e){await y2(Ie(n),{oobCode:e})}async function UR(n,e){const t=Ie(n),i=await xR(t,{oobCode:e}),a=i.requestType;switch(re(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":re(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":re(i.mfaInfo,t,"internal-error");default:re(i.email,t,"internal-error")}let l=null;return i.mfaInfo&&(l=Xh._fromServerResponse(It(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:l},operation:a}}async function q2(n,e){const{data:t}=await UR(Ie(n),e);return t.email}async function j2(n,e,t){if(gt(n.app))return Promise.reject(ln(n));const i=It(n),u=await Bs(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",PR,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&zv(n),p}),d=await wi._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(d.user),d}function G2(n,e,t){return gt(n.app)?Promise.reject(ln(n)):lm(Ie(n),ia.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&zv(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H2(n,e,t){const i=It(n),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function l(u,d){re(d.handleCodeInApp,i,"argument-error"),d&&um(i,u,d)}l(a,t),await Bs(i,a,"getOobCode",w2,"EMAIL_PASSWORD_PROVIDER")}function $2(n,e){const t=am.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function K2(n,e,t){if(gt(n.app))return Promise.reject(ln(n));const i=Ie(n),a=ia.credentialWithLink(e,t||bh());return re(a._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),lm(i,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q2(n,e){return xt(n,"POST","/v1/accounts:createAuthUri",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y2(n,e){const t=Vv()?bh():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:a}=await Q2(Ie(n),i);return a||[]}async function W2(n,e){const t=Ie(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&um(t.auth,a,e);const{email:l}=await E2(t.auth,a);l!==n.email&&await n.reload()}async function X2(n,e,t){const i=Ie(n),l={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&um(i.auth,l,t);const{email:u}=await b2(i.auth,l);u!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(n,e){return xt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z2(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Ie(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await jr(i,J2(i.auth,l));i.displayName=u.displayName||null,i.photoURL=u.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(u)}function eM(n,e){const t=Ie(n);return gt(t.auth.app)?Promise.reject(ln(t.auth)):BR(t,e,null)}function tM(n,e){return BR(Ie(n),null,e)}async function BR(n,e,t){const{auth:i}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const u=await jr(n,g2(i,l));await n._updateTokensIfNecessary(u,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(n){var e,t;if(!n)return null;const{providerId:i}=n,a=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},l=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(n!=null&&n.idToken)){const u=(t=(e=rm(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(u){const d=u!=="anonymous"&&u!=="custom"?u:null;return new zl(l,d)}}if(!i)return null;switch(i){case"facebook.com":return new iM(l,a);case"github.com":return new rM(l,a);case"google.com":return new sM(l,a);case"twitter.com":return new aM(l,a,n.screenName||null);case"custom":case"anonymous":return new zl(l,null);default:return new zl(l,i,a)}}class zl{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class zR extends zl{constructor(e,t,i,a){super(e,t,i),this.username=a}}class iM extends zl{constructor(e,t){super(e,"facebook.com",t)}}class rM extends zR{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class sM extends zl{constructor(e,t){super(e,"google.com",t)}}class aM extends zR{constructor(e,t,i){super(e,"twitter.com",t,i)}}function oM(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:nM(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,i){this.type=e,this.credential=t,this.user=i}static _fromIdtoken(e,t){return new to("enroll",e,t)}static _fromMfaPendingCredential(e){return new to("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return to._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return to._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=It(e),a=t.customData._serverResponse,l=(a.mfaInfo||[]).map(d=>Xh._fromServerResponse(i,d));re(a.mfaPendingCredential,i,"internal-error");const u=to._fromMfaPendingCredential(a.mfaPendingCredential);return new Fv(u,l,async d=>{const p=await d._process(i,u);delete a.mfaInfo,delete a.mfaPendingCredential;const g=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(t.operationType){case"signIn":const y=await wi._fromIdTokenResponse(i,t.operationType,g);return await i._updateCurrentUser(y.user),y;case"reauthenticate":return re(t.user,i,"internal-error"),wi._forOperation(t.user,t.operationType,g);default:_n(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function lM(n,e){var t;const i=Ie(n),a=e;return re(e.customData.operationType,i,"argument-error"),re((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,i,"argument-error"),Fv._fromError(i,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(n,e){return xt(n,"POST","/v2/accounts/mfaEnrollment:start",Dt(n,e))}function uM(n,e){return xt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Dt(n,e))}function cM(n,e){return xt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Dt(n,e))}class qv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>Xh._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new qv(e)}async getSession(){return to._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const i=e,a=await this.getSession(),l=await jr(this.user,i._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(l),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const a=await jr(this.user,cM(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:l})=>l!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const ry=new WeakMap;function hM(n){const e=Ie(n);return ry.has(e)||ry.set(e,qv._fromUser(e)),ry.get(e)}const Cp="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cp,"1"),this.storage.removeItem(Cp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=1e3,fM=10;class qR extends FR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=AR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),a=this.localCache[t];i!==a&&e(t,a,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);Kk()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,fM):a()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},dM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qR.type="LOCAL";const jv=qR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR extends FR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jR.type="SESSION";const co=jR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const i=new cm(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:a,data:l}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(u).map(async g=>g(t.origin,l)),p=await pM(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cm.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,u;return new Promise((d,p)=>{const g=Jh("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},i);u={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function gM(n){jt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function _M(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yM(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function vM(){return Gv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR="firebaseLocalStorageDb",EM=1,Dp="firebaseLocalStorage",HR="fbase_key";class Zh{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function hm(n,e){return n.transaction([Dp],e?"readwrite":"readonly").objectStore(Dp)}function TM(){const n=indexedDB.deleteDatabase(GR);return new Zh(n).toPromise()}function xy(){const n=indexedDB.open(GR,EM);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Dp,{keyPath:HR})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Dp)?e(i):(i.close(),await TM(),e(await xy()))})})}async function bI(n,e,t){const i=hm(n,!0).put({[HR]:e,value:t});return new Zh(i).toPromise()}async function wM(n,e){const t=hm(n,!1).get(e),i=await new Zh(t).toPromise();return i===void 0?null:i.value}function II(n,e){const t=hm(n,!0).delete(e);return new Zh(t).toPromise()}const bM=800,IM=3;class $R{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xy(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>IM)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cm._getInstance(vM()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _M(),!this.activeServiceWorker)return;this.sender=new mM(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xy();return await bI(e,Cp,"1"),await II(e,Cp),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>bI(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>wM(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>II(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=hm(a,!1).getAll();return new Zh(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$R.type="LOCAL";const Sh=$R;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(n,e){return xt(n,"POST","/v2/accounts/mfaSignIn:start",Dt(n,e))}function AM(n,e){return xt(n,"POST","/v2/accounts/mfaSignIn:finalize",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=RR("rcb"),SM=new Kh(3e4,6e4);class RM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=jt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return re(CM(t),e,"argument-error"),this.shouldResolveImmediately(t)&&fI(jt().grecaptcha)?Promise.resolve(jt().grecaptcha):new Promise((i,a)=>{const l=jt().setTimeout(()=>{a(Wt(e,"network-request-failed"))},SM.get());jt()[sy]=()=>{jt().clearTimeout(l),delete jt()[sy];const d=jt().grecaptcha;if(!d||!fI(d)){a(Wt(e,"internal-error"));return}const p=d.render;d.render=(g,y)=>{const v=p(g,y);return this.counter++,v},this.hostLanguage=t,i(d)};const u=`${e2()}?${vu({onload:sy,render:"explicit",hl:t})}`;Mv(u).catch(()=>{clearTimeout(l),a(Wt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=jt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function CM(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class DM{async load(e){return new s2(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="recaptcha",xM={theme:"light",type:"image"};let PM=class{constructor(e,t,i=Object.assign({},xM)){this.parameters=i,this.type=uh,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=It(e),this.isInvisible=this.parameters.size==="invisible",re(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;re(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new DM:new RM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(a=>{const l=u=>{u&&(this.tokenChangeListeners.delete(l),a(u))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){re(!this.parameters.sitekey,this.auth,"argument-error"),re(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),re(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=jt()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){re(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){re(Vv()&&!Gv(),this.auth,"internal-error"),await NM(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await kk(this.auth);re(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return re(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function NM(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=lo._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function OM(n,e,t){if(gt(n.app))return Promise.reject(ln(n));const i=It(n),a=await dm(i,e,Ie(t));return new Hv(a,l=>lm(i,l))}async function VM(n,e,t){const i=Ie(n);await om(!1,i,"phone");const a=await dm(i.auth,e,Ie(t));return new Hv(a,l=>MR(i,l))}async function kM(n,e,t){const i=Ie(n);if(gt(i.auth.app))return Promise.reject(ln(i.auth));const a=await dm(i.auth,e,Ie(t));return new Hv(a,l=>LR(i,l))}async function dm(n,e,t){var i;if(!n._getRecaptchaConfig())try{await h2(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const l=a.session;if("phoneNumber"in a){re(l.type==="enroll",n,"internal-error");const u={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Bs(n,u,"mfaSmsEnrollment",async(y,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===lh){re((t==null?void 0:t.type)===uh,y,"argument-error");const w=await ay(y,v,t);return wI(y,w)}return wI(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{re(l.type==="signin",n,"internal-error");const u=((i=a.multiFactorHint)===null||i===void 0?void 0:i.uid)||a.multiFactorUid;re(u,n,"missing-multi-factor-info");const d={mfaPendingCredential:l.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Bs(n,d,"mfaSmsSignIn",async(v,w)=>{if(w.phoneSignInInfo.captchaResponse===lh){re((t==null?void 0:t.type)===uh,v,"argument-error");const R=await ay(v,w,t);return AI(v,R)}return AI(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const l={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Bs(n,l,"sendVerificationCode",async(g,y)=>{if(y.captchaResponse===lh){re((t==null?void 0:t.type)===uh,g,"argument-error");const v=await ay(g,y,t);return EI(g,v)}return EI(g,y)},"PHONE_PROVIDER").catch(g=>Promise.reject(g))).sessionInfo}}finally{t==null||t._reset()}}async function MM(n,e){const t=Ie(n);if(gt(t.auth.app))return Promise.reject(ln(t.auth));await Lv(t,e)}async function ay(n,e,t){re(t.type===uh,n,"argument-error");const i=await t.verify();re(typeof i=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.captchaResponse,d=a.phoneEnrollmentInfo.clientType,p=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:i,captchaResponse:u,clientType:d,recaptchaVersion:p}}),a}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.captchaResponse,u=a.phoneSignInInfo.clientType,d=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:l,clientType:u,recaptchaVersion:d}}),a}else return Object.assign(a,{recaptchaToken:i}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho=class np{constructor(e){this.providerId=np.PROVIDER_ID,this.auth=It(e)}verifyPhoneNumber(e,t){return dm(this.auth,e,Ie(t))}static credential(e,t){return lo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return np.credentialFromTaggedObject(t)}static credentialFromError(e){return np.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?lo._fromTokenResponse(t,i):null}};ho.PROVIDER_ID="phone";ho.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n,e){return e?ii(e):(re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v extends wu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function LM(n){return kR(n.auth,new $v(n),n.bypassAuthState)}function UM(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),VR(t,new $v(n),n.bypassAuthState)}async function BM(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),Lv(t,new $v(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,t,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:a,tenantId:l,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LM;case"linkViaPopup":case"linkViaRedirect":return BM;case"reauthViaPopup":case"reauthViaRedirect":return UM;default:_n(this.auth,"internal-error")}}resolve(e){Oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=new Kh(2e3,1e4);async function FM(n,e,t){if(gt(n.app))return Promise.reject(Wt(n,"operation-not-supported-in-this-environment"));const i=It(n);Tu(n,e,Qr);const a=Io(i,t);return new Br(i,"signInViaPopup",e,a).executeNotNull()}async function qM(n,e,t){const i=Ie(n);if(gt(i.auth.app))return Promise.reject(Wt(i.auth,"operation-not-supported-in-this-environment"));Tu(i.auth,e,Qr);const a=Io(i.auth,t);return new Br(i.auth,"reauthViaPopup",e,a,i).executeNotNull()}async function jM(n,e,t){const i=Ie(n);Tu(i.auth,e,Qr);const a=Io(i.auth,t);return new Br(i.auth,"linkViaPopup",e,a,i).executeNotNull()}class Br extends KR{constructor(e,t,i,a,l){super(e,t,a,l),this.provider=i,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Oi(this.filter.length===1,"Popup operations only handle one event");const e=Jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zM.get())};e()}}Br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM="pendingRedirect",ch=new Map;class HM extends KR{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ch.get(this.auth._key());if(!e){try{const i=await $M(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ch.set(this.auth._key(),e)}return this.bypassAuthState||ch.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $M(n,e){const t=YR(e),i=QR(n);if(!await i._isAvailable())return!1;const a=await i._get(t)==="true";return await i._remove(t),a}async function Kv(n,e){return QR(n)._set(YR(e),"true")}function KM(){ch.clear()}function Qv(n,e){ch.set(n._key(),e)}function QR(n){return ii(n._redirectPersistence)}function YR(n){return oo(GM,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QM(n,e,t){return YM(n,e,t)}async function YM(n,e,t){if(gt(n.app))return Promise.reject(ln(n));const i=It(n);Tu(n,e,Qr),await i._initializationPromise;const a=Io(i,t);return await Kv(a,i),a._openRedirect(i,e,"signInViaRedirect")}function WM(n,e,t){return XM(n,e,t)}async function XM(n,e,t){const i=Ie(n);if(Tu(i.auth,e,Qr),gt(i.auth.app))return Promise.reject(ln(i.auth));await i.auth._initializationPromise;const a=Io(i.auth,t);await Kv(a,i.auth);const l=await WR(i);return a._openRedirect(i.auth,e,"reauthViaRedirect",l)}function JM(n,e,t){return ZM(n,e,t)}async function ZM(n,e,t){const i=Ie(n);Tu(i.auth,e,Qr),await i.auth._initializationPromise;const a=Io(i.auth,t);await om(!1,i,e.providerId),await Kv(a,i.auth);const l=await WR(i);return a._openRedirect(i.auth,e,"linkViaRedirect",l)}async function e4(n,e){return await It(n)._initializationPromise,fm(n,e,!1)}async function fm(n,e,t=!1){if(gt(n.app))return Promise.reject(ln(n));const i=It(n),a=Io(i,e),u=await new HM(i,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}async function WR(n){const e=Jh(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4=10*60*1e3;class XR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!n4(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!JR(e)){const a=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Wt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=t4&&this.cachedEventUids.clear(),this.cachedEventUids.has(SI(e))}saveEventToCache(e){this.cachedEventUids.add(SI(e)),this.lastProcessedEventTime=Date.now()}}function SI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function JR({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function n4(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return JR(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(n,e={}){return xt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,r4=/^https?/;async function s4(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ZR(n);for(const t of e)try{if(a4(t))return}catch{}_n(n,"unauthorized-domain")}function a4(n){const e=bh(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!r4.test(t))return!1;if(i4.test(n))return i===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o4=new Kh(3e4,6e4);function RI(){const n=jt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function l4(n){return new Promise((e,t)=>{var i,a,l;function u(){RI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{RI(),t(Wt(n,"network-request-failed"))},timeout:o4.get()})}if(!((a=(i=jt().gapi)===null||i===void 0?void 0:i.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=jt().gapi)===null||l===void 0)&&l.load)u();else{const d=RR("iframefcb");return jt()[d]=()=>{gapi.load?u():t(Wt(n,"network-request-failed"))},Mv(`${n2()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw ip=null,e})}let ip=null;function u4(n){return ip=ip||l4(n),ip}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4=new Kh(5e3,15e3),h4="__/auth/iframe",d4="emulator/auth/iframe",f4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},p4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m4(n){const e=n.config;re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?kv(e,d4):`https://${n.config.authDomain}/${h4}`,i={apiKey:e.apiKey,appName:n.name,v:na},a=p4.get(n.config.apiHost);a&&(i.eid=a);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${vu(i).slice(1)}`}async function g4(n){const e=await u4(n),t=jt().gapi;return re(t,n,"internal-error"),e.open({where:document.body,url:m4(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:f4,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const u=Wt(n,"network-request-failed"),d=jt().setTimeout(()=>{l(u)},c4.get());function p(){jt().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},y4=500,v4=600,E4="_blank",T4="http://localhost";class CI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function w4(n,e,t,i=y4,a=v4){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},_4),{width:i.toString(),height:a.toString(),top:l,left:u}),g=bt().toLowerCase();t&&(d=TR(g)?E4:t),vR(g)&&(e=e||T4,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[R,L])=>`${w}${R}=${L},`,"");if($k(g)&&d!=="_self")return b4(e||"",d),new CI(null);const v=window.open(e||"",d,y);re(v,n,"popup-blocked");try{v.focus()}catch{}return new CI(v)}function b4(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4="__/auth/handler",A4="emulator/auth/handler",S4=encodeURIComponent("fac");async function Py(n,e,t,i,a,l){re(n.config.authDomain,n,"auth-domain-config-required"),re(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:na,eventId:a};if(e instanceof Qr){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",ZO(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries(l||{}))u[y]=v}if(e instanceof bu){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${S4}=${encodeURIComponent(p)}`:"";return`${R4(n)}?${vu(d).slice(1)}${g}`}function R4({config:n}){return n.emulator?kv(n,A4):`https://${n.authDomain}/${I4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="webStorageSupport";class C4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=co,this._completeRedirectFn=fm,this._overrideRedirectResult=Qv}async _openPopup(e,t,i,a){var l;Oi((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const u=await Py(e,t,i,bh(),a);return w4(e,u,Jh())}async _openRedirect(e,t,i,a){await this._originValidation(e);const l=await Py(e,t,i,bh(),a);return gM(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Oi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await g4(e),i=new XR(e);return t.register("authEvent",a=>(re(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(oy,{type:oy},a=>{var l;const u=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[oy];u!==void 0&&t(!!u),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=s4(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return AR()||ER()||Yh()}}const D4=C4;class x4{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return ir("unexpected MultiFactorSessionType")}}}class Yv extends x4{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Yv(e)}_finalizeEnroll(e,t,i){return uM(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return AM(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class e1{constructor(){}static assertion(e){return Yv._fromCredential(e)}}e1.FACTOR_ID="phone";var DI="@firebase/auth",xI="1.10.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N4(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function O4(n){$s(new lr("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=i.options;re(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:SR(n)},g=new Jk(i,a,l,p);return d2(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),$s(new lr("auth-internal",e=>{const t=It(e.getProvider("auth").getImmediate());return(i=>new P4(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ni(DI,xI,N4(n)),Ni(DI,xI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V4=5*60;FO("authIdTokenMaxAge");function k4(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Zk({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=a=>{const l=Wt("internal-error");l.customData=a,t(l)},i.type="text/javascript",i.charset="UTF-8",k4().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});O4("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4=2e3;async function L4(n,e,t){var i;const{BuildInfo:a}=fo();Oi(e.sessionId,"AuthEvent did not contain a session ID");const l=await q4(e.sessionId),u={};return Yh()?u.ibi=a.packageName:Qh()?u.apn=a.packageName:_n(n,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=l,Py(n,t,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,u)}async function U4(n){const{BuildInfo:e}=fo(),t={};Yh()?t.iosBundleId=e.packageName:Qh()?t.androidPackageName=e.packageName:_n(n,"operation-not-supported-in-this-environment"),await ZR(n,t)}function B4(n){const{cordova:e}=fo();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let a=null;i?e.plugins.browsertab.openUrl(n):a=e.InAppBrowser.open(n,Hk()?"_blank":"_system","location=yes"),t(a)})})}async function z4(n,e,t){const{cordova:i}=fo();let a=()=>{};try{await new Promise((l,u)=>{let d=null;function p(){var v;l();const w=(v=i.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function g(){d||(d=window.setTimeout(()=>{u(Wt(n,"redirect-cancelled-by-user"))},M4))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(p),document.addEventListener("resume",g,!1),Qh()&&document.addEventListener("visibilitychange",y,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",y,!1),d&&window.clearTimeout(d)}})}finally{a()}}function F4(n){var e,t,i,a,l,u,d,p,g,y;const v=fo();re(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),re(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),re(typeof((l=(a=(i=v==null?void 0:v.cordova)===null||i===void 0?void 0:i.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),re(typeof((p=(d=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||d===void 0?void 0:d.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),re(typeof((y=(g=v==null?void 0:v.cordova)===null||g===void 0?void 0:g.InAppBrowser)===null||y===void 0?void 0:y.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function q4(n){const e=j4(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function j4(n){if(Oi(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let i=0;i<n.length;i++)t[i]=n.charCodeAt(i);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G4=20;class H4 extends XR{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function $4(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:Y4(),postBody:null,tenantId:n.tenantId,error:Wt(n,"no-auth-event")}}function K4(n,e){return Ny()._set(Oy(n),e)}async function PI(n){const e=await Ny()._get(Oy(n));return e&&await Ny()._remove(Oy(n)),e}function Q4(n,e){var t,i;const a=X4(e);if(a.includes("/__/auth/callback")){const l=rp(a),u=l.firebaseError?W4(decodeURIComponent(l.firebaseError)):null,d=(i=(t=u==null?void 0:u.code)===null||t===void 0?void 0:t.split("auth/"))===null||i===void 0?void 0:i[1],p=d?Wt(d):null;return p?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:a,postBody:null}}return null}function Y4(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<G4;t++){const i=Math.floor(Math.random()*e.length);n.push(e.charAt(i))}return n.join("")}function Ny(){return ii(jv)}function Oy(n){return oo("authEvent",n.config.apiKey,n.name)}function W4(n){try{return JSON.parse(n)}catch{return null}}function X4(n){const e=rp(n),t=e.link?decodeURIComponent(e.link):void 0,i=rp(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return rp(a).link||a||i||t||n}function rp(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return kl(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4=500;class Z4{constructor(){this._redirectPersistence=co,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=fm,this._overrideRedirectResult=Qv}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new H4(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){_n(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,a){F4(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),KM(),await this._originValidation(e);const u=$4(e,i,a);await K4(e,u);const d=await L4(e,u,t),p=await B4(d);return z4(e,l,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=U4(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:a,BuildInfo:l}=fo(),u=setTimeout(async()=>{await PI(e),t.onEvent(NI())},J4),d=async y=>{clearTimeout(u);const v=await PI(e);let w=null;v&&(y!=null&&y.url)&&(w=Q4(v,y.url)),t.onEvent(w||NI())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,d);const p=a,g=`${l.packageName.toLowerCase()}://`;fo().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(g)&&d({url:y}),typeof p=="function")try{p(y)}catch(v){console.error(v)}}}}const eL=Z4;function NI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Wt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(n,e){It(n)._logFramework(e)}var nL="@firebase/auth-compat",iL="0.5.24";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL=1e3;function hh(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function sL(){return hh()==="http:"||hh()==="https:"}function t1(n=bt()){return!!((hh()==="file:"||hh()==="ionic:"||hh()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function aL(){return Sv()||Av()}function oL(){return QS()&&(document==null?void 0:document.documentMode)===11}function lL(n=bt()){return/Edge\/\d+/.test(n)}function uL(n=bt()){return oL()||lL(n)}function n1(){try{const n=self.localStorage,e=Jh();if(n)return n.setItem(e,"1"),n.removeItem(e),uL()?Eh():!0}catch{return Wv()&&Eh()}return!1}function Wv(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function ly(){return(sL()||KS()||t1())&&!aL()&&n1()&&!Wv()}function i1(){return t1()&&typeof document<"u"}async function cL(){return i1()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},rL);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function hL(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni={LOCAL:"local",NONE:"none",SESSION:"session"},Gc=re,r1="persistence";function dL(n,e){if(Gc(Object.values(ni).includes(e),n,"invalid-persistence-type"),Sv()){Gc(e!==ni.SESSION,n,"unsupported-persistence-type");return}if(Av()){Gc(e===ni.NONE,n,"unsupported-persistence-type");return}if(Wv()){Gc(e===ni.NONE||e===ni.LOCAL&&Eh(),n,"unsupported-persistence-type");return}Gc(e===ni.NONE||n1(),n,"unsupported-persistence-type")}async function Vy(n){await n._initializationPromise;const e=s1(),t=oo(r1,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistenceType())}function fL(n,e){const t=s1();if(!t)return[];const i=oo(r1,n,e);switch(t.getItem(i)){case ni.NONE:return[Xl];case ni.LOCAL:return[Sh,co];case ni.SESSION:return[co];default:return[]}}function s1(){var n;try{return((n=hL())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL=re;class ks{constructor(){this.browserResolver=ii(D4),this.cordovaResolver=ii(eL),this.underlyingResolver=null,this._redirectPersistence=co,this._completeRedirectFn=fm,this._overrideRedirectResult=Qv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,a)}async _openRedirect(e,t,i,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return i1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return pL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await cL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(n){return n.unwrap()}function mL(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gL(n){return o1(n)}function _L(n,e){var t;const i=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new yL(n,lM(n,e))}else if(i){const a=o1(e),l=e;a&&(l.credential=a,l.tenantId=i.tenantId||void 0,l.email=i.email||void 0,l.phoneNumber=i.phoneNumber||void 0)}}function o1(n){const{_tokenResponse:e}=n instanceof Nn?n.customData:n;if(!e)return null;if(!(n instanceof Nn)&&"temporaryProof"in e&&"phoneNumber"in e)return ho.credentialFromResult(n);const t=e.providerId;if(!t||t===qc.PASSWORD)return null;let i;switch(t){case qc.GOOGLE:i=er;break;case qc.FACEBOOK:i=Zi;break;case qc.GITHUB:i=tr;break;case qc.TWITTER:i=nr;break;default:const{oauthIdToken:a,oauthAccessToken:l,oauthTokenSecret:u,pendingToken:d,nonce:p}=e;return!l&&!u&&!a&&!d?null:d?t.startsWith("saml.")?Jl._create(t,d):ur._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:a,accessToken:l}):new Bl(t).credential({idToken:a,accessToken:l,rawNonce:p})}return n instanceof Nn?i.credentialFromError(n):i.credentialFromResult(n)}function Bn(n,e){return e.catch(t=>{throw t instanceof Nn&&_L(n,t),t}).then(t=>{const i=t.operationType,a=t.user;return{operationType:i,credential:gL(t),additionalUserInfo:oM(t),user:pm.getOrCreate(a)}})}async function ky(n,e){const t=await e;return{verificationId:t.verificationId,confirm:i=>Bn(n,t.confirm(i))}}class yL{constructor(e,t){this.resolver=t,this.auth=mL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Bn(a1(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pm=class eh{constructor(e){this._delegate=e,this.multiFactor=hM(e)}static getOrCreate(e){return eh.USER_MAP.has(e)||eh.USER_MAP.set(e,new eh(e)),eh.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Bn(this.auth,MR(this._delegate,e))}async linkWithPhoneNumber(e,t){return ky(this.auth,VM(this._delegate,e,t))}async linkWithPopup(e){return Bn(this.auth,jM(this._delegate,e,ks))}async linkWithRedirect(e){return await Vy(It(this.auth)),JM(this._delegate,e,ks)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Bn(this.auth,LR(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return ky(this.auth,kM(this._delegate,e,t))}reauthenticateWithPopup(e){return Bn(this.auth,qM(this._delegate,e,ks))}async reauthenticateWithRedirect(e){return await Vy(It(this.auth)),WM(this._delegate,e,ks)}sendEmailVerification(e){return W2(this._delegate,e)}async unlink(e){return await M2(this._delegate,e),this}updateEmail(e){return eM(this._delegate,e)}updatePassword(e){return tM(this._delegate,e)}updatePhoneNumber(e){return MM(this._delegate,e)}updateProfile(e){return Z2(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return X2(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};pm.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=re;class My{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;Hc(i,"invalid-api-key",{appName:e.name}),Hc(i,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?ks:void 0;this._delegate=t.initialize({options:{persistence:vL(i,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(Ak),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?pm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){f2(this._delegate,e,t)}applyActionCode(e){return F2(this._delegate,e)}checkActionCode(e){return UR(this._delegate,e)}confirmPasswordReset(e,t){return z2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Bn(this._delegate,j2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Y2(this._delegate,e)}isSignInWithEmailLink(e){return $2(this._delegate,e)}async getRedirectResult(){Hc(ly(),this._delegate,"operation-not-supported-in-this-environment");const e=await e4(this._delegate,ks);return e?Bn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){tL(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:a,error:l,complete:u}=OI(e,t,i);return this._delegate.onAuthStateChanged(a,l,u)}onIdTokenChanged(e,t,i){const{next:a,error:l,complete:u}=OI(e,t,i);return this._delegate.onIdTokenChanged(a,l,u)}sendSignInLinkToEmail(e,t){return H2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return B2(this._delegate,e,t||void 0)}async setPersistence(e){dL(this._delegate,e);let t;switch(e){case ni.SESSION:t=co;break;case ni.LOCAL:t=await ii(Sh)._isAvailable()?Sh:jv;break;case ni.NONE:t=Xl;break;default:return _n("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Bn(this._delegate,k2(this._delegate))}signInWithCredential(e){return Bn(this._delegate,lm(this._delegate,e))}signInWithCustomToken(e){return Bn(this._delegate,U2(this._delegate,e))}signInWithEmailAndPassword(e,t){return Bn(this._delegate,G2(this._delegate,e,t))}signInWithEmailLink(e,t){return Bn(this._delegate,K2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return ky(this._delegate,OM(this._delegate,e,t))}async signInWithPopup(e){return Hc(ly(),this._delegate,"operation-not-supported-in-this-environment"),Bn(this._delegate,FM(this._delegate,e,ks))}async signInWithRedirect(e){return Hc(ly(),this._delegate,"operation-not-supported-in-this-environment"),await Vy(this._delegate),QM(this._delegate,e,ks)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return q2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}My.Persistence=ni;function OI(n,e,t){let i=n;typeof n!="function"&&({next:i,error:e,complete:t}=n);const a=i;return{next:u=>a(u&&pm.getOrCreate(u)),error:e,complete:t}}function vL(n,e){const t=fL(n,e);if(typeof self<"u"&&!t.includes(Sh)&&t.push(Sh),typeof window<"u")for(const i of[jv,co])t.includes(i)||t.push(i);return t.includes(Xl)||t.push(Xl),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{static credential(e,t){return ho.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new ho(a1(Eu.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Xv.PHONE_SIGN_IN_METHOD=ho.PHONE_SIGN_IN_METHOD;Xv.PROVIDER_ID=ho.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=re;class TL{constructor(e,t,i=Eu.app()){var a;EL((a=i.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new PM(i.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL="auth-compat";function bL(n){n.INTERNAL.registerComponent(new lr(wL,e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new My(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:wl.EMAIL_SIGNIN,PASSWORD_RESET:wl.PASSWORD_RESET,RECOVER_EMAIL:wl.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:wl.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:wl.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:wl.VERIFY_EMAIL}},EmailAuthProvider:ia,FacebookAuthProvider:Zi,GithubAuthProvider:tr,GoogleAuthProvider:er,OAuthProvider:Bl,SAMLAuthProvider:Sp,PhoneAuthProvider:Xv,PhoneMultiFactorGenerator:e1,RecaptchaVerifier:TL,TwitterAuthProvider:nr,Auth:My,AuthCredential:wu,Error:Nn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(nL,iL)}bL(Eu);var VI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zs,l1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,A){function C(){}C.prototype=A.prototype,S.D=A.prototype,S.prototype=new C,S.prototype.constructor=S,S.C=function(N,k,M){for(var x=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)x[Pt-2]=arguments[Pt];return A.prototype[k].apply(N,x)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(S,A,C){C||(C=0);var N=Array(16);if(typeof A=="string")for(var k=0;16>k;++k)N[k]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(k=0;16>k;++k)N[k]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=S.g[0],C=S.g[1],k=S.g[2];var M=S.g[3],x=A+(M^C&(k^M))+N[0]+3614090360&4294967295;A=C+(x<<7&4294967295|x>>>25),x=M+(k^A&(C^k))+N[1]+3905402710&4294967295,M=A+(x<<12&4294967295|x>>>20),x=k+(C^M&(A^C))+N[2]+606105819&4294967295,k=M+(x<<17&4294967295|x>>>15),x=C+(A^k&(M^A))+N[3]+3250441966&4294967295,C=k+(x<<22&4294967295|x>>>10),x=A+(M^C&(k^M))+N[4]+4118548399&4294967295,A=C+(x<<7&4294967295|x>>>25),x=M+(k^A&(C^k))+N[5]+1200080426&4294967295,M=A+(x<<12&4294967295|x>>>20),x=k+(C^M&(A^C))+N[6]+2821735955&4294967295,k=M+(x<<17&4294967295|x>>>15),x=C+(A^k&(M^A))+N[7]+4249261313&4294967295,C=k+(x<<22&4294967295|x>>>10),x=A+(M^C&(k^M))+N[8]+1770035416&4294967295,A=C+(x<<7&4294967295|x>>>25),x=M+(k^A&(C^k))+N[9]+2336552879&4294967295,M=A+(x<<12&4294967295|x>>>20),x=k+(C^M&(A^C))+N[10]+4294925233&4294967295,k=M+(x<<17&4294967295|x>>>15),x=C+(A^k&(M^A))+N[11]+2304563134&4294967295,C=k+(x<<22&4294967295|x>>>10),x=A+(M^C&(k^M))+N[12]+1804603682&4294967295,A=C+(x<<7&4294967295|x>>>25),x=M+(k^A&(C^k))+N[13]+4254626195&4294967295,M=A+(x<<12&4294967295|x>>>20),x=k+(C^M&(A^C))+N[14]+2792965006&4294967295,k=M+(x<<17&4294967295|x>>>15),x=C+(A^k&(M^A))+N[15]+1236535329&4294967295,C=k+(x<<22&4294967295|x>>>10),x=A+(k^M&(C^k))+N[1]+4129170786&4294967295,A=C+(x<<5&4294967295|x>>>27),x=M+(C^k&(A^C))+N[6]+3225465664&4294967295,M=A+(x<<9&4294967295|x>>>23),x=k+(A^C&(M^A))+N[11]+643717713&4294967295,k=M+(x<<14&4294967295|x>>>18),x=C+(M^A&(k^M))+N[0]+3921069994&4294967295,C=k+(x<<20&4294967295|x>>>12),x=A+(k^M&(C^k))+N[5]+3593408605&4294967295,A=C+(x<<5&4294967295|x>>>27),x=M+(C^k&(A^C))+N[10]+38016083&4294967295,M=A+(x<<9&4294967295|x>>>23),x=k+(A^C&(M^A))+N[15]+3634488961&4294967295,k=M+(x<<14&4294967295|x>>>18),x=C+(M^A&(k^M))+N[4]+3889429448&4294967295,C=k+(x<<20&4294967295|x>>>12),x=A+(k^M&(C^k))+N[9]+568446438&4294967295,A=C+(x<<5&4294967295|x>>>27),x=M+(C^k&(A^C))+N[14]+3275163606&4294967295,M=A+(x<<9&4294967295|x>>>23),x=k+(A^C&(M^A))+N[3]+4107603335&4294967295,k=M+(x<<14&4294967295|x>>>18),x=C+(M^A&(k^M))+N[8]+1163531501&4294967295,C=k+(x<<20&4294967295|x>>>12),x=A+(k^M&(C^k))+N[13]+2850285829&4294967295,A=C+(x<<5&4294967295|x>>>27),x=M+(C^k&(A^C))+N[2]+4243563512&4294967295,M=A+(x<<9&4294967295|x>>>23),x=k+(A^C&(M^A))+N[7]+1735328473&4294967295,k=M+(x<<14&4294967295|x>>>18),x=C+(M^A&(k^M))+N[12]+2368359562&4294967295,C=k+(x<<20&4294967295|x>>>12),x=A+(C^k^M)+N[5]+4294588738&4294967295,A=C+(x<<4&4294967295|x>>>28),x=M+(A^C^k)+N[8]+2272392833&4294967295,M=A+(x<<11&4294967295|x>>>21),x=k+(M^A^C)+N[11]+1839030562&4294967295,k=M+(x<<16&4294967295|x>>>16),x=C+(k^M^A)+N[14]+4259657740&4294967295,C=k+(x<<23&4294967295|x>>>9),x=A+(C^k^M)+N[1]+2763975236&4294967295,A=C+(x<<4&4294967295|x>>>28),x=M+(A^C^k)+N[4]+1272893353&4294967295,M=A+(x<<11&4294967295|x>>>21),x=k+(M^A^C)+N[7]+4139469664&4294967295,k=M+(x<<16&4294967295|x>>>16),x=C+(k^M^A)+N[10]+3200236656&4294967295,C=k+(x<<23&4294967295|x>>>9),x=A+(C^k^M)+N[13]+681279174&4294967295,A=C+(x<<4&4294967295|x>>>28),x=M+(A^C^k)+N[0]+3936430074&4294967295,M=A+(x<<11&4294967295|x>>>21),x=k+(M^A^C)+N[3]+3572445317&4294967295,k=M+(x<<16&4294967295|x>>>16),x=C+(k^M^A)+N[6]+76029189&4294967295,C=k+(x<<23&4294967295|x>>>9),x=A+(C^k^M)+N[9]+3654602809&4294967295,A=C+(x<<4&4294967295|x>>>28),x=M+(A^C^k)+N[12]+3873151461&4294967295,M=A+(x<<11&4294967295|x>>>21),x=k+(M^A^C)+N[15]+530742520&4294967295,k=M+(x<<16&4294967295|x>>>16),x=C+(k^M^A)+N[2]+3299628645&4294967295,C=k+(x<<23&4294967295|x>>>9),x=A+(k^(C|~M))+N[0]+4096336452&4294967295,A=C+(x<<6&4294967295|x>>>26),x=M+(C^(A|~k))+N[7]+1126891415&4294967295,M=A+(x<<10&4294967295|x>>>22),x=k+(A^(M|~C))+N[14]+2878612391&4294967295,k=M+(x<<15&4294967295|x>>>17),x=C+(M^(k|~A))+N[5]+4237533241&4294967295,C=k+(x<<21&4294967295|x>>>11),x=A+(k^(C|~M))+N[12]+1700485571&4294967295,A=C+(x<<6&4294967295|x>>>26),x=M+(C^(A|~k))+N[3]+2399980690&4294967295,M=A+(x<<10&4294967295|x>>>22),x=k+(A^(M|~C))+N[10]+4293915773&4294967295,k=M+(x<<15&4294967295|x>>>17),x=C+(M^(k|~A))+N[1]+2240044497&4294967295,C=k+(x<<21&4294967295|x>>>11),x=A+(k^(C|~M))+N[8]+1873313359&4294967295,A=C+(x<<6&4294967295|x>>>26),x=M+(C^(A|~k))+N[15]+4264355552&4294967295,M=A+(x<<10&4294967295|x>>>22),x=k+(A^(M|~C))+N[6]+2734768916&4294967295,k=M+(x<<15&4294967295|x>>>17),x=C+(M^(k|~A))+N[13]+1309151649&4294967295,C=k+(x<<21&4294967295|x>>>11),x=A+(k^(C|~M))+N[4]+4149444226&4294967295,A=C+(x<<6&4294967295|x>>>26),x=M+(C^(A|~k))+N[11]+3174756917&4294967295,M=A+(x<<10&4294967295|x>>>22),x=k+(A^(M|~C))+N[2]+718787259&4294967295,k=M+(x<<15&4294967295|x>>>17),x=C+(M^(k|~A))+N[9]+3951481745&4294967295,S.g[0]=S.g[0]+A&4294967295,S.g[1]=S.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,S.g[2]=S.g[2]+k&4294967295,S.g[3]=S.g[3]+M&4294967295}i.prototype.u=function(S,A){A===void 0&&(A=S.length);for(var C=A-this.blockSize,N=this.B,k=this.h,M=0;M<A;){if(k==0)for(;M<=C;)a(this,S,M),M+=this.blockSize;if(typeof S=="string"){for(;M<A;)if(N[k++]=S.charCodeAt(M++),k==this.blockSize){a(this,N),k=0;break}}else for(;M<A;)if(N[k++]=S[M++],k==this.blockSize){a(this,N),k=0;break}}this.h=k,this.o+=A},i.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var A=1;A<S.length-8;++A)S[A]=0;var C=8*this.o;for(A=S.length-8;A<S.length;++A)S[A]=C&255,C/=256;for(this.u(S),S=Array(16),A=C=0;4>A;++A)for(var N=0;32>N;N+=8)S[C++]=this.g[A]>>>N&255;return S};function l(S,A){var C=d;return Object.prototype.hasOwnProperty.call(C,S)?C[S]:C[S]=A(S)}function u(S,A){this.h=A;for(var C=[],N=!0,k=S.length-1;0<=k;k--){var M=S[k]|0;N&&M==A||(C[k]=M,N=!1)}this.g=C}var d={};function p(S){return-128<=S&&128>S?l(S,function(A){return new u([A|0],0>A?-1:0)}):new u([S|0],0>S?-1:0)}function g(S){if(isNaN(S)||!isFinite(S))return v;if(0>S)return V(g(-S));for(var A=[],C=1,N=0;S>=C;N++)A[N]=S/C|0,C*=4294967296;return new u(A,0)}function y(S,A){if(S.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(S.charAt(0)=="-")return V(y(S.substring(1),A));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(A,8)),N=v,k=0;k<S.length;k+=8){var M=Math.min(8,S.length-k),x=parseInt(S.substring(k,k+M),A);8>M?(M=g(Math.pow(A,M)),N=N.j(M).add(g(x))):(N=N.j(C),N=N.add(g(x)))}return N}var v=p(0),w=p(1),R=p(16777216);n=u.prototype,n.m=function(){if(B(this))return-V(this).m();for(var S=0,A=1,C=0;C<this.g.length;C++){var N=this.i(C);S+=(0<=N?N:4294967296+N)*A,A*=4294967296}return S},n.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(L(this))return"0";if(B(this))return"-"+V(this).toString(S);for(var A=g(Math.pow(S,6)),C=this,N="";;){var k=oe(C,A).g;C=Z(C,k.j(A));var M=((0<C.g.length?C.g[0]:C.h)>>>0).toString(S);if(C=k,L(C))return M+N;for(;6>M.length;)M="0"+M;N=M+N}},n.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function L(S){if(S.h!=0)return!1;for(var A=0;A<S.g.length;A++)if(S.g[A]!=0)return!1;return!0}function B(S){return S.h==-1}n.l=function(S){return S=Z(this,S),B(S)?-1:L(S)?0:1};function V(S){for(var A=S.g.length,C=[],N=0;N<A;N++)C[N]=~S.g[N];return new u(C,~S.h).add(w)}n.abs=function(){return B(this)?V(this):this},n.add=function(S){for(var A=Math.max(this.g.length,S.g.length),C=[],N=0,k=0;k<=A;k++){var M=N+(this.i(k)&65535)+(S.i(k)&65535),x=(M>>>16)+(this.i(k)>>>16)+(S.i(k)>>>16);N=x>>>16,M&=65535,x&=65535,C[k]=x<<16|M}return new u(C,C[C.length-1]&-2147483648?-1:0)};function Z(S,A){return S.add(V(A))}n.j=function(S){if(L(this)||L(S))return v;if(B(this))return B(S)?V(this).j(V(S)):V(V(this).j(S));if(B(S))return V(this.j(V(S)));if(0>this.l(R)&&0>S.l(R))return g(this.m()*S.m());for(var A=this.g.length+S.g.length,C=[],N=0;N<2*A;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(var k=0;k<S.g.length;k++){var M=this.i(N)>>>16,x=this.i(N)&65535,Pt=S.i(k)>>>16,lt=S.i(k)&65535;C[2*N+2*k]+=x*lt,X(C,2*N+2*k),C[2*N+2*k+1]+=M*lt,X(C,2*N+2*k+1),C[2*N+2*k+1]+=x*Pt,X(C,2*N+2*k+1),C[2*N+2*k+2]+=M*Pt,X(C,2*N+2*k+2)}for(N=0;N<A;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=A;N<2*A;N++)C[N]=0;return new u(C,0)};function X(S,A){for(;(S[A]&65535)!=S[A];)S[A+1]+=S[A]>>>16,S[A]&=65535,A++}function Y(S,A){this.g=S,this.h=A}function oe(S,A){if(L(A))throw Error("division by zero");if(L(S))return new Y(v,v);if(B(S))return A=oe(V(S),A),new Y(V(A.g),V(A.h));if(B(A))return A=oe(S,V(A)),new Y(V(A.g),A.h);if(30<S.g.length){if(B(S)||B(A))throw Error("slowDivide_ only works with positive integers.");for(var C=w,N=A;0>=N.l(S);)C=se(C),N=se(N);var k=ue(C,1),M=ue(N,1);for(N=ue(N,2),C=ue(C,2);!L(N);){var x=M.add(N);0>=x.l(S)&&(k=k.add(C),M=x),N=ue(N,1),C=ue(C,1)}return A=Z(S,k.j(A)),new Y(k,A)}for(k=v;0<=S.l(A);){for(C=Math.max(1,Math.floor(S.m()/A.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),M=g(C),x=M.j(A);B(x)||0<x.l(S);)C-=N,M=g(C),x=M.j(A);L(M)&&(M=w),k=k.add(M),S=Z(S,x)}return new Y(k,S)}n.A=function(S){return oe(this,S).h},n.and=function(S){for(var A=Math.max(this.g.length,S.g.length),C=[],N=0;N<A;N++)C[N]=this.i(N)&S.i(N);return new u(C,this.h&S.h)},n.or=function(S){for(var A=Math.max(this.g.length,S.g.length),C=[],N=0;N<A;N++)C[N]=this.i(N)|S.i(N);return new u(C,this.h|S.h)},n.xor=function(S){for(var A=Math.max(this.g.length,S.g.length),C=[],N=0;N<A;N++)C[N]=this.i(N)^S.i(N);return new u(C,this.h^S.h)};function se(S){for(var A=S.g.length+1,C=[],N=0;N<A;N++)C[N]=S.i(N)<<1|S.i(N-1)>>>31;return new u(C,S.h)}function ue(S,A){var C=A>>5;A%=32;for(var N=S.g.length-C,k=[],M=0;M<N;M++)k[M]=0<A?S.i(M+C)>>>A|S.i(M+C+1)<<32-A:S.i(M+C);return new u(k,S.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l1=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=y,zs=u}).apply(typeof VI<"u"?VI:typeof self<"u"?self:typeof window<"u"?window:{});var qf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var u1,th,c1,sp,Ly,h1,d1,f1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,E){return h==Array.prototype||h==Object.prototype||(h[_]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof qf=="object"&&qf];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=t(this);function a(h,_){if(_)e:{var E=i;h=h.split(".");for(var I=0;I<h.length-1;I++){var z=h[I];if(!(z in E))break e;E=E[z]}h=h[h.length-1],I=E[h],_=_(I),_!=I&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var E=0,I=!1,z={next:function(){if(!I&&E<h.length){var K=E++;return{value:_(K,h[K]),done:!1}}return I=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,E){return h.call.apply(h.bind,arguments)}function v(h,_,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,I),h.apply(_,z)}}return function(){return h.apply(_,arguments)}}function w(h,_,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,w.apply(null,arguments)}function R(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function L(h,_){function E(){}E.prototype=_.prototype,h.aa=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,z,K){for(var ce=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ce[qe-2]=arguments[qe];return _.prototype[z].apply(I,ce)}}function B(h){const _=h.length;if(0<_){const E=Array(_);for(let I=0;I<_;I++)E[I]=h[I];return E}return[]}function V(h,_){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(p(I)){const z=h.length||0,K=I.length||0;h.length=z+K;for(let ce=0;ce<K;ce++)h[z+ce]=I[ce]}else h.push(I)}}class Z{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function X(h){return/^[\s\xa0]*$/.test(h)}function Y(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function oe(h){return oe[" "](h),h}oe[" "]=function(){};var se=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function ue(h,_,E){for(const I in h)_.call(E,h[I],I,h)}function S(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function A(h){const _={};for(const E in h)_[E]=h[E];return _}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(h,_){let E,I;for(let z=1;z<arguments.length;z++){I=arguments[z];for(E in I)h[E]=I[E];for(let K=0;K<C.length;K++)E=C[K],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function k(h){var _=1;h=h.split(":");const E=[];for(;0<_&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function M(h){d.setTimeout(()=>{throw h},0)}function x(){var h=Ne;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Pt{constructor(){this.h=this.g=null}add(_,E){const I=lt.get();I.set(_,E),this.h?this.h.next=I:this.g=I,this.h=I}}var lt=new Z(()=>new Q,h=>h.reset());class Q{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ve=!1,Ne=new Pt,P=()=>{const h=d.Promise.resolve(void 0);he=()=>{h.then(te)}};var te=()=>{for(var h;h=x();){try{h.h.call(h.g)}catch(E){M(E)}var _=lt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ve=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Te=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,_),d.removeEventListener("test",E,_)}catch{}return h}();function xe(h,_){if(ae.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(se){e:{try{oe(_.nodeName);var z=!0;break e}catch{}z=!1}z||(_=null)}}else E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement);this.relatedTarget=_,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:be[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&xe.aa.h.call(this)}}L(xe,ae);var be={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Et="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Jt(h,_,E,I,z){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!I,this.ha=z,this.key=++$e,this.da=this.fa=!1}function si(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function kn(h){this.src=h,this.g={},this.h=0}kn.prototype.add=function(h,_,E,I,z){var K=h.toString();h=this.g[K],h||(h=this.g[K]=[],this.h++);var ce=ua(h,_,I,z);return-1<ce?(_=h[ce],E||(_.fa=!1)):(_=new Jt(_,this.src,K,!!I,z),_.fa=E,h.push(_)),_};function yn(h,_){var E=_.type;if(E in h.g){var I=h.g[E],z=Array.prototype.indexOf.call(I,_,void 0),K;(K=0<=z)&&Array.prototype.splice.call(I,z,1),K&&(si(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function ua(h,_,E,I){for(var z=0;z<h.length;++z){var K=h[z];if(!K.da&&K.listener==_&&K.capture==!!E&&K.ha==I)return z}return-1}var ca="closure_lm_"+(1e6*Math.random()|0),Nu={};function pd(h,_,E,I,z){if(Array.isArray(_)){for(var K=0;K<_.length;K++)pd(h,_[K],E,I,z);return null}return E=md(E),h&&h[Et]?h.K(_,E,g(I)?!!I.capture:!1,z):ai(h,_,E,!1,I,z)}function ai(h,_,E,I,z,K){if(!_)throw Error("Invalid event type");var ce=g(z)?!!z.capture:!!z,qe=xo(h);if(qe||(h[ca]=qe=new kn(h)),E=qe.add(_,E,I,ce,K),E.proxy)return E;if(I=qm(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)Te||(z=ce),z===void 0&&(z=!1),h.addEventListener(_.toString(),I,z);else if(h.attachEvent)h.attachEvent(ha(_.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function qm(){function h(E){return _.call(h.src,h.listener,E)}const _=jm;return h}function Ou(h,_,E,I,z){if(Array.isArray(_))for(var K=0;K<_.length;K++)Ou(h,_[K],E,I,z);else I=g(I)?!!I.capture:!!I,E=md(E),h&&h[Et]?(h=h.i,_=String(_).toString(),_ in h.g&&(K=h.g[_],E=ua(K,E,I,z),-1<E&&(si(K[E]),Array.prototype.splice.call(K,E,1),K.length==0&&(delete h.g[_],h.h--)))):h&&(h=xo(h))&&(_=h.g[_.toString()],h=-1,_&&(h=ua(_,E,I,z)),(E=-1<h?_[h]:null)&&Do(E))}function Do(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Et])yn(_.i,h);else{var E=h.type,I=h.proxy;_.removeEventListener?_.removeEventListener(E,I,h.capture):_.detachEvent?_.detachEvent(ha(E),I):_.addListener&&_.removeListener&&_.removeListener(I),(E=xo(_))?(yn(E,h),E.h==0&&(E.src=null,_[ca]=null)):si(h)}}}function ha(h){return h in Nu?Nu[h]:Nu[h]="on"+h}function jm(h,_){if(h.da)h=!0;else{_=new xe(_,this);var E=h.listener,I=h.ha||h.src;h.fa&&Do(h),h=E.call(I,_)}return h}function xo(h){return h=h[ca],h instanceof kn?h:null}var Vu="__closure_events_fn_"+(1e9*Math.random()>>>0);function md(h){return typeof h=="function"?h:(h[Vu]||(h[Vu]=function(_){return h.handleEvent(_)}),h[Vu])}function At(){le.call(this),this.i=new kn(this),this.M=this,this.F=null}L(At,le),At.prototype[Et]=!0,At.prototype.removeEventListener=function(h,_,E,I){Ou(this,h,_,E,I)};function Je(h,_){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=_.type||_,typeof _=="string")_=new ae(_,h);else if(_ instanceof ae)_.target=_.target||h;else{var z=_;_=new ae(I,h),N(_,z)}if(z=!0,E)for(var K=E.length-1;0<=K;K--){var ce=_.g=E[K];z=Hn(ce,I,!0,_)&&z}if(ce=_.g=h,z=Hn(ce,I,!0,_)&&z,z=Hn(ce,I,!1,_)&&z,E)for(K=0;K<E.length;K++)ce=_.g=E[K],z=Hn(ce,I,!1,_)&&z}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var E=h.g[_],I=0;I<E.length;I++)si(E[I]);delete h.g[_],h.h--}}this.F=null},At.prototype.K=function(h,_,E,I){return this.i.add(String(h),_,!1,E,I)},At.prototype.L=function(h,_,E,I){return this.i.add(String(h),_,!0,E,I)};function Hn(h,_,E,I){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var z=!0,K=0;K<_.length;++K){var ce=_[K];if(ce&&!ce.da&&ce.capture==E){var qe=ce.listener,$t=ce.ha||ce.src;ce.fa&&yn(h.i,ce),z=qe.call($t,I)!==!1&&z}}return z&&!I.defaultPrevented}function vn(h,_,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function gd(h){h.g=vn(()=>{h.g=null,h.i&&(h.i=!1,gd(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Gm extends le{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:gd(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function da(h){le.call(this),this.h=h,this.g={}}L(da,le);var fa=[];function pa(h){ue(h.g,function(_,E){this.g.hasOwnProperty(E)&&Do(_)},h),h.g={}}da.prototype.N=function(){da.aa.N.call(this),pa(this)},da.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bi=d.JSON.stringify,Po=d.JSON.parse,ma=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function ku(){}ku.prototype.h=null;function Mu(h){return h.h||(h.h=h.i())}function Lu(){}var fr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){ae.call(this,"d")}L(pr,ae);function Uu(){ae.call(this,"c")}L(Uu,ae);var Vi={},Bu=null;function Zr(){return Bu=Bu||new At}Vi.La="serverreachability";function No(h){ae.call(this,Vi.La,h)}L(No,ae);function es(h){const _=Zr();Je(_,new No(_))}Vi.STAT_EVENT="statevent";function _d(h,_){ae.call(this,Vi.STAT_EVENT,h),this.stat=_}L(_d,ae);function ft(h){const _=Zr();Je(_,new _d(_,h))}Vi.Ma="timingevent";function Ht(h,_){ae.call(this,Vi.Ma,h),this.size=_}L(Ht,ae);function Ut(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function oi(){this.g=!0}oi.prototype.xa=function(){this.g=!1};function zu(h,_,E,I,z,K){h.info(function(){if(h.g)if(K)for(var ce="",qe=K.split("&"),$t=0;$t<qe.length;$t++){var je=qe[$t].split("=");if(1<je.length){var en=je[0];je=je[1];var Kt=en.split("_");ce=2<=Kt.length&&Kt[1]=="type"?ce+(en+"="+je+"&"):ce+(en+"=redacted&")}}else ce=null;else ce=K;return"XMLHTTP REQ ("+I+") [attempt "+z+"]: "+_+`
`+E+`
`+ce})}function Hm(h,_,E,I,z,K,ce){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+z+"]: "+_+`
`+E+`
`+K+" "+ce})}function ts(h,_,E,I){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+ga(h,E)+(I?" "+I:"")})}function yd(h,_){h.info(function(){return"TIMEOUT: "+_})}oi.prototype.info=function(){};function ga(h,_){if(!h.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var z=I[1];if(Array.isArray(z)&&!(1>z.length)){var K=z[0];if(K!="noop"&&K!="stop"&&K!="close")for(var ce=1;ce<z.length;ce++)z[ce]=""}}}}return bi(E)}catch{return _}}var ns={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ki;function Mi(){}L(Mi,ku),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},ki=new Mi;function Sn(h,_,E,I){this.j=h,this.i=_,this.l=E,this.R=I||1,this.U=new da(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}var Fu={},Oo={};function Ii(h,_,E){h.L=1,h.v=Ta($n(_)),h.m=E,h.P=!0,gr(h,null)}function gr(h,_){h.F=Date.now(),_a(h),h.A=$n(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),Ku(E.i,"t",I),h.C=0,E=h.j.J,h.h=new Nt,h.g=Vd(h.j,E?_:null,!h.m),0<h.O&&(h.M=new Gm(w(h.Y,h,h.g),h.O)),_=h.U,E=h.g,I=h.ca;var z="readystatechange";Array.isArray(z)||(z&&(fa[0]=z.toString()),z=fa);for(var K=0;K<z.length;K++){var ce=pd(E,z[K],I||_.handleEvent,!1,_.h||_);if(!ce)break;_.g[ce.key]=ce}_=h.H?A(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),es(),zu(h.i,h.u,h.A,h.l,h.R,h.m)}Sn.prototype.ca=function(h){h=h.target;const _=this.M;_&&hi(h)==3?_.j():this.Y(h)},Sn.prototype.Y=function(h){try{if(h==this.g)e:{const Kt=hi(this.g);var _=this.g.Ba();const Ir=this.g.Z();if(!(3>Kt)&&(Kt!=3||this.g&&(this.h.h||this.g.oa()||Sd(this.g)))){this.J||Kt!=4||_==7||(_==8||0>=Ir?es(3):es(2)),is(this);var E=this.g.Z();this.X=E;t:if(vd(this)){var I=Sd(this.g);h="";var z=I.length,K=hi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Li(this);var ce="";break t}this.h.i=new d.TextDecoder}for(_=0;_<z;_++)this.h.h=!0,h+=this.h.i.decode(I[_],{stream:!(K&&_==z-1)});I.length=0,this.h.g+=h,this.C=0,ce=this.h.g}else ce=this.g.oa();if(this.o=E==200,Hm(this.i,this.u,this.A,this.l,this.R,Kt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,$t=this.g;if((qe=$t.g?$t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(qe)){var je=qe;break t}}je=null}if(E=je)ts(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ya(this,E);else{this.o=!1,this.s=3,ft(12),un(this),Li(this);break e}}if(this.P){E=!0;let cn;for(;!this.J&&this.C<ce.length;)if(cn=Ed(this,ce),cn==Oo){Kt==4&&(this.s=4,ft(14),E=!1),ts(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==Fu){this.s=4,ft(15),ts(this.i,this.l,ce,"[Invalid Chunk]"),E=!1;break}else ts(this.i,this.l,cn,null),ya(this,cn);if(vd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Kt!=4||ce.length!=0||this.h.h||(this.s=1,ft(16),E=!1),this.o=this.o&&E,!E)ts(this.i,this.l,ce,"[Invalid Chunked Response]"),un(this),Li(this);else if(0<ce.length&&!this.W){this.W=!0;var en=this.j;en.g==this&&en.ba&&!en.M&&(en.j.info("Great, no buffering proxy detected. Bytes received: "+ce.length),Da(en),en.M=!0,ft(11))}}else ts(this.i,this.l,ce,null),ya(this,ce);Kt==4&&un(this),this.o&&!this.J&&(Kt==4?Pd(this.j,this):(this.o=!1,_a(this)))}else Wm(this.g),E==400&&0<ce.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),un(this),Li(this)}}}catch{}finally{}};function vd(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Ed(h,_){var E=h.C,I=_.indexOf(`
`,E);return I==-1?Oo:(E=Number(_.substring(E,I)),isNaN(E)?Fu:(I+=1,I+E>_.length?Oo:(_=_.slice(I,I+E),h.C=I+E,_)))}Sn.prototype.cancel=function(){this.J=!0,un(this)};function _a(h){h.S=Date.now()+h.I,Td(h,h.I)}function Td(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Ut(w(h.ba,h),_)}function is(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Sn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(yd(this.i,this.A),this.L!=2&&(es(),ft(17)),un(this),this.s=2,Li(this)):Td(this,this.S-h)};function Li(h){h.j.G==0||h.J||Pd(h.j,h)}function un(h){is(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,pa(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function ya(h,_){try{var E=h.j;if(E.G!=0&&(E.g==h||qu(E.h,h))){if(!h.K&&qu(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(_)}catch{I=null}if(Array.isArray(I)&&I.length==3){var z=I;if(z[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)Ho(E),jo(E);else break e;Ju(E),ft(18)}}else E.za=z[1],0<E.za-E.T&&37500>z[2]&&E.F&&E.v==0&&!E.C&&(E.C=Ut(w(E.Za,E),6e3));if(1>=ko(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else br(E,11)}else if((h.K||E.g==h)&&Ho(E),!X(_))for(z=E.Da.g.parse(_),_=0;_<z.length;_++){let je=z[_];if(E.T=je[0],je=je[1],E.G==2)if(je[0]=="c"){E.K=je[1],E.ia=je[2];const en=je[3];en!=null&&(E.la=en,E.j.info("VER="+E.la));const Kt=je[4];Kt!=null&&(E.Aa=Kt,E.j.info("SVER="+E.Aa));const Ir=je[5];Ir!=null&&typeof Ir=="number"&&0<Ir&&(I=1.5*Ir,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const cn=h.g;if(cn){const Gi=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var K=I.h;K.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Mo(K,K.h),K.h=null))}if(I.D){const ec=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;ec&&(I.ya=ec,it(I.I,I.D,ec))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ce=h;if(I.qa=Od(I,I.J?I.ia:null,I.W),ce.K){Rn(I.h,ce);var qe=ce,$t=I.L;$t&&(qe.I=$t),qe.B&&(is(qe),_a(qe)),I.g=ce}else Dd(I);0<E.i.length&&Go(E)}else je[0]!="stop"&&je[0]!="close"||br(E,7);else E.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?br(E,7):Wu(E):je[0]!="noop"&&E.l&&E.l.ta(je),E.v=0)}}es(4)}catch{}}var wd=class{constructor(h,_){this.g=h,this.map=_}};function _r(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vo(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function ko(h){return h.h?1:h.g?h.g.size:0}function qu(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Mo(h,_){h.g?h.g.add(_):h.h=_}function Rn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}_r.prototype.cancel=function(){if(this.i=ju(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function ju(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.D);return _}return B(h.i)}function $m(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],E=h.length,I=0;I<E;I++)_.push(h[I]);return _}_=[],E=0;for(I in h)_[E++]=h[I];return _}function Lo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var E=0;E<h;E++)_.push(E);return _}_=[],E=0;for(const I in h)_[E++]=I;return _}}}function Gu(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var E=Lo(h),I=$m(h),z=I.length,K=0;K<z;K++)_.call(void 0,I[K],E&&E[K],h)}var va=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Km(h,_){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),z=null;if(0<=I){var K=h[E].substring(0,I);z=h[E].substring(I+1)}else K=h[E];_(K,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Bt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Bt){this.h=h.h,Ea(this,h.j),this.o=h.o,this.g=h.g,rs(this,h.s),this.l=h.l;var _=h.i,E=new vr;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),yr(this,E),this.m=h.m}else h&&(_=String(h).match(va))?(this.h=!1,Ea(this,_[1]||"",!0),this.o=li(_[2]||""),this.g=li(_[3]||"",!0),rs(this,_[4]),this.l=li(_[5]||"",!0),yr(this,_[6]||"",!0),this.m=li(_[7]||"")):(this.h=!1,this.i=new vr(null,this.h))}Bt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(wa(_,Hu,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(wa(_,Hu,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(wa(E,E.charAt(0)=="/"?Qm:$u,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",wa(E,Uo)),h.join("")};function $n(h){return new Bt(h)}function Ea(h,_,E){h.j=E?li(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function rs(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function yr(h,_,E){_ instanceof vr?(h.i=_,Id(h.i,h.h)):(E||(_=wa(_,Ym)),h.i=new vr(_,h.h))}function it(h,_,E){h.i.set(_,E)}function Ta(h){return it(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function li(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function wa(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,bd),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function bd(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Hu=/[#\/\?@]/g,$u=/[#\?:]/g,Qm=/[#\?]/g,Ym=/[#\?@]/g,Uo=/#/g;function vr(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function ui(h){h.g||(h.g=new Map,h.h=0,h.i&&Km(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}n=vr.prototype,n.add=function(h,_){ui(this),this.i=null,h=Ui(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function Er(h,_){ui(h),_=Ui(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Tr(h,_){return ui(h),_=Ui(h,_),h.g.has(_)}n.forEach=function(h,_){ui(this),this.g.forEach(function(E,I){E.forEach(function(z){h.call(_,z,I,this)},this)},this)},n.na=function(){ui(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let I=0;I<_.length;I++){const z=h[I];for(let K=0;K<z.length;K++)E.push(_[I])}return E},n.V=function(h){ui(this);let _=[];if(typeof h=="string")Tr(this,h)&&(_=_.concat(this.g.get(Ui(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)_=_.concat(h[E])}return _},n.set=function(h,_){return ui(this),this.i=null,h=Ui(this,h),Tr(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Ku(h,_,E){Er(h,_),0<E.length&&(h.i=null,h.g.set(Ui(h,_),B(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var I=_[E];const K=encodeURIComponent(String(I)),ce=this.V(I);for(I=0;I<ce.length;I++){var z=K;ce[I]!==""&&(z+="="+encodeURIComponent(String(ce[I]))),h.push(z)}}return this.i=h.join("&")};function Ui(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Id(h,_){_&&!h.j&&(ui(h),h.i=null,h.g.forEach(function(E,I){var z=I.toLowerCase();I!=z&&(Er(this,I),Ku(this,z,E))},h)),h.j=_}function ba(h,_){const E=new oi;if(d.Image){const I=new Image;I.onload=R(ci,E,"TestLoadImage: loaded",!0,_,I),I.onerror=R(ci,E,"TestLoadImage: error",!1,_,I),I.onabort=R(ci,E,"TestLoadImage: abort",!1,_,I),I.ontimeout=R(ci,E,"TestLoadImage: timeout",!1,_,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else _(!1)}function Ai(h,_){const E=new oi,I=new AbortController,z=setTimeout(()=>{I.abort(),ci(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:I.signal}).then(K=>{clearTimeout(z),K.ok?ci(E,"TestPingServer: ok",!0,_):ci(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(z),ci(E,"TestPingServer: error",!1,_)})}function ci(h,_,E,I,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),I(E)}catch{}}function Ia(){this.g=new ma}function Bi(h,_,E){const I=E||"";try{Gu(h,function(z,K){let ce=z;g(z)&&(ce=bi(z)),_.push(I+K+"="+encodeURIComponent(ce))})}catch(z){throw _.push(I+"type="+encodeURIComponent("_badmap")),z}}function ss(h){this.l=h.Ub||null,this.j=h.eb||!1}L(ss,ku),ss.prototype.g=function(){return new wr(this.l,this.j)},ss.prototype.i=function(h){return function(){return h}}({});function wr(h,_){At.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(wr,At),n=wr.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Fi(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Fi(this)),this.g&&(this.readyState=3,Fi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qu(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qu(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?zi(this):Fi(this),this.readyState==3&&Qu(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,zi(this))},n.Qa=function(h){this.g&&(this.response=h,zi(this))},n.ga=function(){this.g&&zi(this)};function zi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Fi(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function Fi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Yu(h){let _="";return ue(h,function(E,I){_+=I,_+=":",_+=E,_+=`\r
`}),_}function Zt(h,_,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=Yu(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):it(h,_,E))}function We(h){At.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(We,At);var Bo=/^https?$/i,Aa=["POST","PUT"];n=We.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ki.g(),this.v=this.o?Mu(this.o):Mu(ki),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(K){Ad(this,K);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var z in I)E.set(z,I[z]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const K of I.keys())E.set(K,I.get(K));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(K=>K.toLowerCase()=="content-type"),z=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Aa,_,void 0))||I||z||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,ce]of E)this.g.setRequestHeader(K,ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sa(this),this.u=!0,this.g.send(h),this.u=!1}catch(K){Ad(this,K)}};function Ad(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,zo(h),qi(h)}function zo(h){h.A||(h.A=!0,Je(h,"complete"),Je(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Je(this,"complete"),Je(this,"abort"),qi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),We.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Fo(this):this.bb())},n.bb=function(){Fo(this)};function Fo(h){if(h.h&&typeof u<"u"&&(!h.v[1]||hi(h)!=4||h.Z()!=2)){if(h.u&&hi(h)==4)vn(h.Ea,0,h);else if(Je(h,"readystatechange"),hi(h)==4){h.h=!1;try{const ce=h.Z();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var I;if(I=ce===0){var z=String(h.D).match(va)[1]||null;!z&&d.self&&d.self.location&&(z=d.self.location.protocol.slice(0,-1)),I=!Bo.test(z?z.toLowerCase():"")}E=I}if(E)Je(h,"complete"),Je(h,"success");else{h.m=6;try{var K=2<hi(h)?h.g.statusText:""}catch{K=""}h.l=K+" ["+h.Z()+"]",zo(h)}}finally{qi(h)}}}}function qi(h,_){if(h.g){Sa(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Je(h,"ready");try{E.onreadystatechange=I}catch{}}}function Sa(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function hi(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<hi(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Po(_)}};function Sd(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Wm(h){const _={};h=(h.g&&2<=hi(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(X(h[I]))continue;var E=k(h[I]);const z=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const K=_[z]||[];_[z]=K,K.push(E)}S(_,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ra(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function qo(h){this.Aa=0,this.i=[],this.j=new oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ra("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ra("baseRetryDelayMs",5e3,h),this.cb=Ra("retryDelaySeedMs",1e4,h),this.Wa=Ra("forwardChannelMaxRetries",2,h),this.wa=Ra("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new _r(h&&h.concurrentRequestLimit),this.Da=new Ia,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=qo.prototype,n.la=8,n.G=1,n.connect=function(h,_,E,I){ft(0),this.W=h,this.H=_||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Od(this,null,this.W),Go(this)};function Wu(h){if(Rd(h),h.G==3){var _=h.U++,E=$n(h.I);if(it(E,"SID",h.K),it(E,"RID",_),it(E,"TYPE","terminate"),Ca(h,E),_=new Sn(h,h.j,_),_.L=2,_.v=Ta($n(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=_.v,E=!0),E||(_.g=Vd(_.j,null),_.g.ea(_.v)),_.F=Date.now(),_a(_)}Nd(h)}function jo(h){h.g&&(Da(h),h.g.cancel(),h.g=null)}function Rd(h){jo(h),h.u&&(d.clearTimeout(h.u),h.u=null),Ho(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Go(h){if(!Vo(h.h)&&!h.s){h.s=!0;var _=h.Ga;he||P(),ve||(he(),ve=!0),Ne.add(_,h),h.B=0}}function Xm(h,_){return ko(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Ut(w(h.Ga,h,_),Zu(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const z=new Sn(this,this.j,h);let K=this.o;if(this.S&&(K?(K=A(K),N(K,this.S)):K=this.S),this.m!==null||this.O||(z.H=K,K=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(_+=I,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=Cd(this,z,_),E=$n(this.I),it(E,"RID",h),it(E,"CVER",22),this.D&&it(E,"X-HTTP-Session-Id",this.D),Ca(this,E),K&&(this.O?_="headers="+encodeURIComponent(String(Yu(K)))+"&"+_:this.m&&Zt(E,this.m,K)),Mo(this.h,z),this.Ua&&it(E,"TYPE","init"),this.P?(it(E,"$req",_),it(E,"SID","null"),z.T=!0,Ii(z,E,null)):Ii(z,E,_),this.G=2}}else this.G==3&&(h?Xu(this,h):this.i.length==0||Vo(this.h)||Xu(this))};function Xu(h,_){var E;_?E=_.l:E=h.U++;const I=$n(h.I);it(I,"SID",h.K),it(I,"RID",E),it(I,"AID",h.T),Ca(h,I),h.m&&h.o&&Zt(I,h.m,h.o),E=new Sn(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Cd(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Mo(h.h,E),Ii(E,I,_)}function Ca(h,_){h.H&&ue(h.H,function(E,I){it(_,I,E)}),h.l&&Gu({},function(E,I){it(_,I,E)})}function Cd(h,_,E){E=Math.min(h.i.length,E);var I=h.l?w(h.l.Na,h.l,h):null;e:{var z=h.i;let K=-1;for(;;){const ce=["count="+E];K==-1?0<E?(K=z[0].g,ce.push("ofs="+K)):K=0:ce.push("ofs="+K);let qe=!0;for(let $t=0;$t<E;$t++){let je=z[$t].g;const en=z[$t].map;if(je-=K,0>je)K=Math.max(0,z[$t].g-100),qe=!1;else try{Bi(en,ce,"req"+je+"_")}catch{I&&I(en)}}if(qe){I=ce.join("&");break e}}}return h=h.i.splice(0,E),_.D=h,I}function Dd(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;he||P(),ve||(he(),ve=!0),Ne.add(_,h),h.v=0}}function Ju(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Ut(w(h.Fa,h),Zu(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,xd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Ut(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),jo(this),xd(this))};function Da(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function xd(h){h.g=new Sn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=$n(h.qa);it(_,"RID","rpc"),it(_,"SID",h.K),it(_,"AID",h.T),it(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&it(_,"TO",h.ja),it(_,"TYPE","xmlhttp"),Ca(h,_),h.m&&h.o&&Zt(_,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Ta($n(_)),E.m=null,E.P=!0,gr(E,h)}n.Za=function(){this.C!=null&&(this.C=null,jo(this),Ju(this),ft(19))};function Ho(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Pd(h,_){var E=null;if(h.g==_){Ho(h),Da(h),h.g=null;var I=2}else if(qu(h.h,_))E=_.D,Rn(h.h,_),I=1;else return;if(h.G!=0){if(_.o)if(I==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var z=h.B;I=Zr(),Je(I,new Ht(I,E)),Go(h)}else Dd(h);else if(z=_.s,z==3||z==0&&0<_.X||!(I==1&&Xm(h,_)||I==2&&Ju(h)))switch(E&&0<E.length&&(_=h.h,_.i=_.i.concat(E)),z){case 1:br(h,5);break;case 4:br(h,10);break;case 3:br(h,6);break;default:br(h,2)}}}function Zu(h,_){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*_}function br(h,_){if(h.j.info("Error code "+_),_==2){var E=w(h.fb,h),I=h.Xa;const z=!I;I=new Bt(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ea(I,"https"),Ta(I),z?ba(I.toString(),E):Ai(I.toString(),E)}else ft(2);h.G=0,h.l&&h.l.sa(_),Nd(h),Rd(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Nd(h){if(h.G=0,h.ka=[],h.l){const _=ju(h.h);(_.length!=0||h.i.length!=0)&&(V(h.ka,_),V(h.ka,h.i),h.h.i.length=0,B(h.i),h.i.length=0),h.l.ra()}}function Od(h,_,E){var I=E instanceof Bt?$n(E):new Bt(E);if(I.g!="")_&&(I.g=_+"."+I.g),rs(I,I.s);else{var z=d.location;I=z.protocol,_=_?_+"."+z.hostname:z.hostname,z=+z.port;var K=new Bt(null);I&&Ea(K,I),_&&(K.g=_),z&&rs(K,z),E&&(K.l=E),I=K}return E=h.D,_=h.ya,E&&_&&it(I,E,_),it(I,"VER",h.la),Ca(h,I),I}function Vd(h,_,E){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new We(new ss({eb:E})):new We(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function kd(){}n=kd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function $o(){}$o.prototype.g=function(h,_){return new Cn(h,_)};function Cn(h,_){At.call(this),this.g=new qo(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!X(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!X(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new ji(this)}L(Cn,At),Cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Cn.prototype.close=function(){Wu(this.g)},Cn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=bi(h),h=E);_.i.push(new wd(_.Ya++,h)),_.G==3&&Go(_)},Cn.prototype.N=function(){this.g.l=null,delete this.j,Wu(this.g),delete this.g,Cn.aa.N.call(this)};function Md(h){pr.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}L(Md,pr);function Ld(){Uu.call(this),this.status=1}L(Ld,Uu);function ji(h){this.g=h}L(ji,kd),ji.prototype.ua=function(){Je(this.g,"a")},ji.prototype.ta=function(h){Je(this.g,new Md(h))},ji.prototype.sa=function(h){Je(this.g,new Ld)},ji.prototype.ra=function(){Je(this.g,"b")},$o.prototype.createWebChannel=$o.prototype.g,Cn.prototype.send=Cn.prototype.o,Cn.prototype.open=Cn.prototype.m,Cn.prototype.close=Cn.prototype.close,f1=function(){return new $o},d1=function(){return Zr()},h1=Vi,Ly={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ns.NO_ERROR=0,ns.TIMEOUT=8,ns.HTTP_ERROR=6,sp=ns,mr.COMPLETE="complete",c1=mr,Lu.EventType=fr,fr.OPEN="a",fr.CLOSE="b",fr.ERROR="c",fr.MESSAGE="d",At.prototype.listen=At.prototype.K,th=Lu,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,u1=We}).apply(typeof qf<"u"?qf:typeof self<"u"?self:typeof window<"u"?window:{});const kI="@firebase/firestore",MI="4.7.14";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}on.UNAUTHENTICATED=new on(null),on.GOOGLE_CREDENTIALS=new on("google-credentials-uid"),on.FIRST_PARTY=new on("first-party-uid"),on.MOCK_USER=new on("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu="11.7.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new im("@firebase/firestore");function Dl(){return Ks.logLevel}function IL(n){Ks.setLogLevel(n)}function ie(n,...e){if(Ks.logLevel<=Be.DEBUG){const t=e.map(Jv);Ks.debug(`Firestore (${Iu}): ${n}`,...t)}}function kt(n,...e){if(Ks.logLevel<=Be.ERROR){const t=e.map(Jv);Ks.error(`Firestore (${Iu}): ${n}`,...t)}}function cr(n,...e){if(Ks.logLevel<=Be.WARN){const t=e.map(Jv);Ks.warn(`Firestore (${Iu}): ${n}`,...t)}}function Jv(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,p1(n,i,t)}function p1(n,e,t){let i=`FIRESTORE (${Iu}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw kt(i),new Error(i)}function ye(n,e,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,n||p1(e,a,i)}function AL(n,e){n||me(57014,e)}function fe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Nn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(on.UNAUTHENTICATED))}shutdown(){}}class RL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class CL{constructor(e){this.t=e,this.currentUser=on.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new gn,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new gn)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ye(typeof i.accessToken=="string",31837,{l:i}),new m1(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new on(e)}}class DL{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=on.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xL{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new DL(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(on.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PL{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0,3512);const i=l=>{l.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.m;return this.m=l.token,ie("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new LI(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new LI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=NL(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<t&&(i+=e.charAt(a[l]%62))}return i}}function Ce(n,e){return n<e?-1:n>e?1:0}function Uy(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),a=e.codePointAt(t);if(i!==a){if(i<128&&a<128)return Ce(i,a);{const l=Zv(),u=OL(l.encode(UI(n,t)),l.encode(UI(e,t)));return u!==0?u:Ce(i,a)}}t+=i>65535?2:1}return Ce(n.length,e.length)}function UI(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function OL(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ce(n[t],e[t]);return Ce(n.length,e.length)}function Zl(n,e,t){return n.length===e.length&&n.every((i,a)=>t(i,e[a]))}function _1(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=-62135596800,zI=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*zI);return new vt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<BI)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zI}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-BI;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new vt(0,0))}static max(){return new Ee(new vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="__name__";class Wi{constructor(e,t,i){t===void 0?t=0:t>e.length&&me(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&me(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Wi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Wi?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let a=0;a<i;a++){const l=Wi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ce(e.length,t.length)}static compareSegments(e,t){const i=Wi.isNumericId(e),a=Wi.isNumericId(t);return i&&!a?-1:!i&&a?1:i&&a?Wi.extractNumericId(e).compare(Wi.extractNumericId(t)):Uy(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zs.fromString(e.substring(4,e.length-2))}}class ze extends Wi{construct(e,t,i){return new ze(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ne($.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(a=>a.length>0))}return new ze(t)}static emptyPath(){return new ze([])}}const VL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Wi{construct(e,t,i){return new _t(e,t,i)}static isValidIdentifier(e){return VL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===FI}static keyField(){return new _t([FI])}static fromServerFormat(e){const t=[];let i="",a=0;const l=()=>{if(i.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ne($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ne($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(i+=d,a++):(l(),a++)}if(l(),u)throw new ne($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(t)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(ze.fromString(e))}static fromName(e){return new de(ze.fromString(e).popFirst(5))}static empty(){return new de(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new ze(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=-1;class xp{constructor(e,t,i,a){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=a}}function By(n){return n.fields.find(e=>e.kind===2)}function Ka(n){return n.fields.filter(e=>e.kind!==2)}xp.UNKNOWN_ID=-1;class ap{constructor(e,t){this.fieldPath=e,this.kind=t}}class Rh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Rh(0,ri.min())}}function y1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,a=Ee.fromTimestamp(i===1e9?new vt(t+1,0):new vt(t,i));return new ri(a,de.empty(),e)}function v1(n){return new ri(n.readTime,n.key,eu)}class ri{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ri(Ee.min(),de.empty(),eu)}static max(){return new ri(Ee.max(),de.empty(),eu)}}function eE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(n.documentKey,e.documentKey),t!==0?t:Ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class T1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==E1)throw n;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):F.reject(t)}static resolve(e){return new F((t,i)=>{t(e)})}static reject(e){return new F((t,i)=>{i(e)})}static waitFor(e){return new F((t,i)=>{let a=0,l=0,u=!1;e.forEach(d=>{++a,d.next(()=>{++l,u&&l===a&&t()},p=>i(p))}),u=!0,l===a&&t()})}static or(e){let t=F.resolve(!1);for(const i of e)t=t.next(a=>a?F.resolve(a):i());return t}static forEach(e,t){const i=[];return e.forEach((a,l)=>{i.push(t.call(this,a,l))}),this.waitFor(i)}static mapArray(e,t){return new F((i,a)=>{const l=e.length,u=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(y=>{u[g]=y,++d,d===l&&i(u)},y=>a(y))}})}static doWhile(e,t){return new F((i,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):i()};l()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="SimpleDb";class mm{static open(e,t,i,a){try{return new mm(t,e.transaction(a,i))}catch(l){throw new dh(t,l)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new gn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new dh(e,t.error)):this.S.resolve()},this.transaction.onerror=i=>{const a=tE(i.target.error);this.S.reject(new dh(e,a))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(ie(ti,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ML(t)}}class ar{static delete(e){return ie(ti,"Removing database:",e),Ya(wv().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Eh())return!1;if(ar.F())return!0;const e=bt(),t=ar.M(e),i=0<t&&t<10,a=w1(e),l=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||l)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(i)}constructor(e,t,i){this.name=e,this.version=t,this.B=i,this.L=null,ar.M(bt())===12.2&&kt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(ie(ti,"Opening database:",this.name),this.db=await new Promise((t,i)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=l=>{const u=l.target.result;t(u)},a.onblocked=()=>{i(new dh(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=l=>{const u=l.target.error;u.name==="VersionError"?i(new ne($.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?i(new ne($.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):i(new dh(e,u))},a.onupgradeneeded=l=>{ie(ti,'Database "'+this.name+'" requires upgrade from version:',l.oldVersion);const u=l.target.result;if(this.L!==null&&this.L!==l.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${l.oldVersion}, event.newVersion=${l.newVersion}, db.version=${u.version}`);this.B.q(u,a.transaction,l.oldVersion,this.version).next(()=>{ie(ti,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const i=t.target;this.L=i.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,i,a){const l=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.k(e);const d=mm.open(this.db,e,l?"readonly":"readwrite",i),p=a(d).next(g=>(d.v(),g)).catch(g=>(d.abort(g),F.reject(g))).toPromise();return p.catch(()=>{}),await d.D,p}catch(d){const p=d,g=p.name!=="FirebaseError"&&u<3;if(ie(ti,"Transaction failed with error:",p.message,"Retrying:",g),this.close(),!g)return Promise.reject(p)}}}close(){this.db&&this.db.close(),this.db=void 0}}function w1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class kL{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return Ya(this.K.delete())}}class dh extends ne{constructor(e,t){super($.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function sa(n){return n.name==="IndexedDbTransactionError"}class ML{constructor(e){this.store=e}put(e,t){let i;return t!==void 0?(ie(ti,"PUT",this.store.name,e,t),i=this.store.put(t,e)):(ie(ti,"PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),Ya(i)}add(e){return ie(ti,"ADD",this.store.name,e,e),Ya(this.store.add(e))}get(e){return Ya(this.store.get(e)).next(t=>(t===void 0&&(t=null),ie(ti,"GET",this.store.name,e,t),t))}delete(e){return ie(ti,"DELETE",this.store.name,e),Ya(this.store.delete(e))}count(){return ie(ti,"COUNT",this.store.name),Ya(this.store.count())}J(e,t){const i=this.options(e,t),a=i.index?this.store.index(i.index):this.store;if(typeof a.getAll=="function"){const l=a.getAll(i.range);return new F((u,d)=>{l.onerror=p=>{d(p.target.error)},l.onsuccess=p=>{u(p.target.result)}})}{const l=this.cursor(i),u=[];return this.Y(l,(d,p)=>{u.push(p)}).next(()=>u)}}Z(e,t){const i=this.store.getAll(e,t===null?void 0:t);return new F((a,l)=>{i.onerror=u=>{l(u.target.error)},i.onsuccess=u=>{a(u.target.result)}})}X(e,t){ie(ti,"DELETE ALL",this.store.name);const i=this.options(e,t);i.ee=!1;const a=this.cursor(i);return this.Y(a,(l,u,d)=>d.delete())}te(e,t){let i;t?i=e:(i={},t=e);const a=this.cursor(i);return this.Y(a,t)}ne(e){const t=this.cursor({});return new F((i,a)=>{t.onerror=l=>{const u=tE(l.target.error);a(u)},t.onsuccess=l=>{const u=l.target.result;u?e(u.primaryKey,u.value).next(d=>{d?u.continue():i()}):i()}})}Y(e,t){const i=[];return new F((a,l)=>{e.onerror=u=>{l(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void a();const p=new kL(d),g=t(d.primaryKey,d.value,p);if(g instanceof F){const y=g.catch(v=>(p.done(),F.reject(v)));i.push(y)}p.isDone?a():p.j===null?d.continue():d.continue(p.j)}}).next(()=>F.waitFor(i))}options(e,t){let i;return e!==void 0&&(typeof e=="string"?i=e:t=e),{index:i,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const i=this.store.index(e.index);return e.ee?i.openKeyCursor(e.range,t):i.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ya(n){return new F((e,t)=>{n.onsuccess=i=>{const a=i.target.result;e(a)},n.onerror=i=>{const a=tE(i.target.error);t(a)}})}let qI=!1;function tE(n){const e=ar.M(bt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const i=new ne("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qI||(qI=!0,setTimeout(()=>{throw i},0)),i}}return n}const fh="IndexBackfiller";class LL{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){ie(fh,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();ie(fh,`Documents written: ${t}`)}catch(t){sa(t)?ie(fh,"Ignoring IndexedDB error during index backfill: ",t):await ra(t)}await this.ie(6e4)})}}class UL{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const i=new Set;let a=t,l=!0;return F.doWhile(()=>l===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!i.has(u))return ie(fh,`Processing collection: ${u}`),this._e(e,u,a).next(d=>{a-=d,i.add(u)});l=!1})).next(()=>t-a)}_e(e,t,i){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,i).next(l=>{const u=l.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.ae(a,l)).next(d=>(ie(fh,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d))).next(()=>u.size)}))}ae(e,t){let i=e;return t.changes.forEach((a,l)=>{const u=v1(l);eE(u,i)>0&&(i=u)}),new ri(i.readTime,i.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>t.writeSequenceNumber(i))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Fn.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=-1;function ed(n){return n==null}function Ch(n){return n===0&&1/n==-1/0}function b1(n){return typeof n=="number"&&Number.isInteger(n)&&!Ch(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="";function In(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=jI(e)),e=BL(n.get(t),e);return jI(e)}function BL(n,e){let t=e;const i=n.length;for(let a=0;a<i;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Pp:t+="";break;default:t+=l}}return t}function jI(n){return n+Pp+""}function rr(n){const e=n.length;if(ye(e>=2,64408,{path:n}),e===2)return ye(n.charAt(0)===Pp&&n.charAt(1)==="",56145,{path:n}),ze.emptyPath();const t=e-2,i=[];let a="";for(let l=0;l<e;){const u=n.indexOf(Pp,l);switch((u<0||u>t)&&me(50515,{path:n}),n.charAt(u+1)){case"":const d=n.substring(l,u);let p;a.length===0?p=d:(a+=d,p=a,a=""),i.push(p);break;case"":a+=n.substring(l,u),a+="\0";break;case"":a+=n.substring(l,u+1);break;default:me(61167,{path:n})}l=u+2}return new ze(i)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="remoteDocuments",td="owner",bl="owner",Dh="mutationQueues",zL="userId",Di="mutations",GI="batchId",no="userMutationsIndex",HI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n,e){return[n,In(e)]}function I1(n,e,t){return[n,In(e),t]}const FL={},tu="documentMutations",Np="remoteDocumentsV14",qL=["prefixPath","collectionGroup","readTime","documentId"],lp="documentKeyIndex",jL=["prefixPath","collectionGroup","documentId"],A1="collectionGroupIndex",GL=["collectionGroup","readTime","prefixPath","documentId"],xh="remoteDocumentGlobal",zy="remoteDocumentGlobalKey",nu="targets",S1="queryTargetsIndex",HL=["canonicalId","targetId"],iu="targetDocuments",$L=["targetId","path"],nE="documentTargetsIndex",KL=["path","targetId"],Op="targetGlobalKey",uo="targetGlobal",Ph="collectionParents",QL=["collectionId","parent"],ru="clientMetadata",YL="clientId",gm="bundles",WL="bundleId",_m="namedQueries",XL="name",iE="indexConfiguration",JL="indexId",Fy="collectionGroupIndex",ZL="collectionGroup",Vp="indexState",eU=["indexId","uid"],R1="sequenceNumberIndex",tU=["uid","sequenceNumber"],kp="indexEntries",nU=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],C1="documentKeyIndex",iU=["indexId","uid","orderedDocumentKey"],ym="documentOverlays",rU=["userId","collectionPath","documentId"],qy="collectionPathOverlayIndex",sU=["userId","collectionPath","largestBatchId"],D1="collectionGroupOverlayIndex",aU=["userId","collectionGroup","largestBatchId"],rE="globals",oU="name",x1=[Dh,Di,tu,Qa,nu,td,uo,iu,ru,xh,Ph,gm,_m],lU=[...x1,ym],P1=[Dh,Di,tu,Np,nu,td,uo,iu,ru,xh,Ph,gm,_m,ym],N1=P1,sE=[...N1,iE,Vp,kp],uU=sE,cU=[...sE,rE];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy extends T1{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function Xt(n,e){const t=fe(n);return ar.N(t.he,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function aa(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function O1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){this.comparator=e,this.root=t||pn.EMPTY}insert(e,t){return new ct(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pn.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return t+i.left.size;a<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jf(this.root,e,this.comparator,!1)}getReverseIterator(){return new jf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jf(this.root,e,this.comparator,!0)}}class jf{constructor(e,t,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pn{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??pn.RED,this.left=a??pn.EMPTY,this.right=l??pn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,a,l){return new pn(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return pn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return pn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}pn.EMPTY=null,pn.RED=!0,pn.BLACK=!1;pn.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,t,i,a,l){return this}insert(e,t,i){return new pn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new KI(this.data.getIterator())}getIteratorFrom(e){return new KI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class KI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Il(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new qn([])}unionWith(e){let t=new nt(_t.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zl(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hU(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new V1("Invalid base64 string: "+l):l}}(e);return new Ct(t)}static fromUint8Array(e){const t=function(a){let l="";for(let u=0;u<a.length;++u)l+=String.fromCharCode(a[u]);return l}(e);return new Ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const dU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(n){if(ye(!!n,39018),typeof n=="string"){let e=0;const t=dU.exec(n);if(ye(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:mt(n.seconds),nanos:mt(n.nanos)}}function mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Hr(n){return typeof n=="string"?Ct.fromBase64String(n):Ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="server_timestamp",M1="__type__",L1="__previous_value__",U1="__local_write_time__";function vm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[M1])===null||t===void 0?void 0:t.stringValue)===k1}function Em(n){const e=n.mapValue.fields[L1];return vm(e)?Em(e):e}function Nh(n){const e=Gr(n.mapValue.fields[U1].timestampValue);return new vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fU{constructor(e,t,i,a,l,u,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const Gy="(default)";class Qs{constructor(e,t){this.projectId=e,this.database=t||Gy}static empty(){return new Qs("","")}get isDefaultDatabase(){return this.database===Gy}isEqual(e){return e instanceof Qs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="__type__",B1="__max__",Ms={mapValue:{fields:{__type__:{stringValue:B1}}}},oE="__vector__",su="value",up={nullValue:"NULL_VALUE"};function Ys(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vm(n)?4:z1(n)?9007199254740991:Tm(n)?10:11:me(28295,{value:n})}function hr(n,e){if(n===e)return!0;const t=Ys(n);if(t!==Ys(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Nh(n).isEqual(Nh(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const u=Gr(a.timestampValue),d=Gr(l.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return Hr(a.bytesValue).isEqual(Hr(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return mt(a.geoPointValue.latitude)===mt(l.geoPointValue.latitude)&&mt(a.geoPointValue.longitude)===mt(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return mt(a.integerValue)===mt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const u=mt(a.doubleValue),d=mt(l.doubleValue);return u===d?Ch(u)===Ch(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return Zl(n.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return function(a,l){const u=a.mapValue.fields||{},d=l.mapValue.fields||{};if($I(u)!==$I(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!hr(u[p],d[p])))return!1;return!0}(n,e);default:return me(52216,{left:n})}}function Oh(n,e){return(n.values||[]).find(t=>hr(t,e))!==void 0}function Ws(n,e){if(n===e)return 0;const t=Ys(n),i=Ys(e);if(t!==i)return Ce(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(n.booleanValue,e.booleanValue);case 2:return function(l,u){const d=mt(l.integerValue||l.doubleValue),p=mt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return QI(n.timestampValue,e.timestampValue);case 4:return QI(Nh(n),Nh(e));case 5:return Uy(n.stringValue,e.stringValue);case 6:return function(l,u){const d=Hr(l),p=Hr(u);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,u){const d=l.split("/"),p=u.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Ce(d[g],p[g]);if(y!==0)return y}return Ce(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,u){const d=Ce(mt(l.latitude),mt(u.latitude));return d!==0?d:Ce(mt(l.longitude),mt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return YI(n.arrayValue,e.arrayValue);case 10:return function(l,u){var d,p,g,y;const v=l.fields||{},w=u.fields||{},R=(d=v[su])===null||d===void 0?void 0:d.arrayValue,L=(p=w[su])===null||p===void 0?void 0:p.arrayValue,B=Ce(((g=R==null?void 0:R.values)===null||g===void 0?void 0:g.length)||0,((y=L==null?void 0:L.values)===null||y===void 0?void 0:y.length)||0);return B!==0?B:YI(R,L)}(n.mapValue,e.mapValue);case 11:return function(l,u){if(l===Ms.mapValue&&u===Ms.mapValue)return 0;if(l===Ms.mapValue)return 1;if(u===Ms.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=u.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let v=0;v<p.length&&v<y.length;++v){const w=Uy(p[v],y[v]);if(w!==0)return w;const R=Ws(d[p[v]],g[y[v]]);if(R!==0)return R}return Ce(p.length,y.length)}(n.mapValue,e.mapValue);default:throw me(23264,{Pe:t})}}function QI(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ce(n,e);const t=Gr(n),i=Gr(e),a=Ce(t.seconds,i.seconds);return a!==0?a:Ce(t.nanos,i.nanos)}function YI(n,e){const t=n.values||[],i=e.values||[];for(let a=0;a<t.length&&a<i.length;++a){const l=Ws(t[a],i[a]);if(l)return l}return Ce(t.length,i.length)}function au(n){return Hy(n)}function Hy(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Gr(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Hr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return de.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",a=!0;for(const l of t.values||[])a?a=!1:i+=",",i+=Hy(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const u of i)l?l=!1:a+=",",a+=`${u}:${Hy(t.fields[u])}`;return a+"}"}(n.mapValue):me(61005,{value:n})}function cp(n){switch(Ys(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Em(n);return e?16+cp(e):16;case 5:return 2*n.stringValue.length;case 6:return Hr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+cp(l),0)}(n.arrayValue);case 10:case 11:return function(i){let a=0;return aa(i.fields,(l,u)=>{a+=l.length+cp(u)}),a}(n.mapValue);default:throw me(13486,{value:n})}}function po(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function $y(n){return!!n&&"integerValue"in n}function Vh(n){return!!n&&"arrayValue"in n}function WI(n){return!!n&&"nullValue"in n}function XI(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hp(n){return!!n&&"mapValue"in n}function Tm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[aE])===null||t===void 0?void 0:t.stringValue)===oE}function ph(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return aa(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ph(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ph(n.arrayValue.values[t]);return e}return Object.assign({},n)}function z1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===B1}const F1={mapValue:{fields:{[aE]:{stringValue:oE},[su]:{arrayValue:{}}}}};function pU(n){return"nullValue"in n?up:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?po(Qs.empty(),de.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Tm(n)?F1:{mapValue:{}}:me(35942,{value:n})}function mU(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?po(Qs.empty(),de.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?F1:"mapValue"in n?Tm(n)?{mapValue:{}}:Ms:me(61959,{value:n})}function JI(n,e){const t=Ws(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function ZI(n,e){const t=Ws(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!hp(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ph(t)}setAll(e){let t=_t.emptyPath(),i={},a=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,a),i={},a=[],t=d.popLast()}u?i[d.lastSegment()]=ph(u):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,a)}delete(e){const t=this.field(e.popLast());hp(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=t.mapValue.fields[e.get(i)];hp(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,i){aa(t,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new mn(ph(this.value))}}function q1(n){const e=[];return aa(n.fields,(t,i)=>{const a=new _t([t]);if(hp(i)){const l=q1(i.mapValue).fields;if(l.length===0)e.push(a);else for(const u of l)e.push(a.child(u))}else e.push(a)}),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t,i,a,l,u,d){this.key=e,this.documentType=t,this.version=i,this.readTime=a,this.createTime=l,this.data=u,this.documentState=d}static newInvalidDocument(e){return new dt(e,0,Ee.min(),Ee.min(),Ee.min(),mn.empty(),0)}static newFoundDocument(e,t,i,a){return new dt(e,1,t,Ee.min(),i,a,0)}static newNoDocument(e,t){return new dt(e,2,t,Ee.min(),Ee.min(),mn.empty(),0)}static newUnknownDocument(e,t){return new dt(e,3,t,Ee.min(),Ee.min(),mn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t){this.position=e,this.inclusive=t}}function eA(n,e,t){let i=0;for(let a=0;a<n.position.length;a++){const l=e[a],u=n.position[a];if(l.field.isKeyField()?i=de.comparator(de.fromName(u.referenceValue),t.key):i=Ws(u,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function tA(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!hr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t="asc"){this.field=e,this.dir=t}}function gU(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{}class Fe extends j1{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new _U(e,t,i):t==="array-contains"?new EU(e,i):t==="in"?new Y1(e,i):t==="not-in"?new TU(e,i):t==="array-contains-any"?new wU(e,i):new Fe(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new yU(e,i):new vU(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ws(t,this.value)):t!==null&&Ys(this.value)===Ys(t)&&this.matchesComparison(Ws(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends j1{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new tt(e,t)}matches(e){return ou(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function ou(n){return n.op==="and"}function Ky(n){return n.op==="or"}function lE(n){return G1(n)&&ou(n)}function G1(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function Qy(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+au(n.value);if(lE(n))return n.filters.map(e=>Qy(e)).join(",");{const e=n.filters.map(t=>Qy(t)).join(",");return`${n.op}(${e})`}}function H1(n,e){return n instanceof Fe?function(i,a){return a instanceof Fe&&i.op===a.op&&i.field.isEqual(a.field)&&hr(i.value,a.value)}(n,e):n instanceof tt?function(i,a){return a instanceof tt&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,u,d)=>l&&H1(u,a.filters[d]),!0):!1}(n,e):void me(19439)}function $1(n,e){const t=n.filters.concat(e);return tt.create(t,n.op)}function K1(n){return n instanceof Fe?function(t){return`${t.field.canonicalString()} ${t.op} ${au(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(K1).join(" ,")+"}"}(n):"Filter"}class _U extends Fe{constructor(e,t,i){super(e,t,i),this.key=de.fromName(i.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class yU extends Fe{constructor(e,t){super(e,"in",t),this.keys=Q1("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class vU extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=Q1("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Q1(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>de.fromName(i.referenceValue))}class EU extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vh(t)&&Oh(t.arrayValue,this.value)}}class Y1 extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Oh(this.value.arrayValue,t)}}class TU extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Oh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Oh(this.value.arrayValue,t)}}class wU extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Oh(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bU{constructor(e,t=null,i=[],a=[],l=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=u,this.endAt=d,this.Ie=null}}function Yy(n,e=null,t=[],i=[],a=null,l=null,u=null){return new bU(n,e,t,i,a,l,u)}function mo(n){const e=fe(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Qy(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),ed(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>au(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>au(i)).join(",")),e.Ie=t}return e.Ie}function nd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!gU(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!H1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!tA(n.startAt,e.startAt)&&tA(n.endAt,e.endAt)}function Mp(n){return de.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Lp(n,e){return n.filters.filter(t=>t instanceof Fe&&t.field.isEqual(e))}function nA(n,e,t){let i=up,a=!0;for(const l of Lp(n,e)){let u=up,d=!0;switch(l.op){case"<":case"<=":u=pU(l.value);break;case"==":case"in":case">=":u=l.value;break;case">":u=l.value,d=!1;break;case"!=":case"not-in":u=up}JI({value:i,inclusive:a},{value:u,inclusive:d})<0&&(i=u,a=d)}if(t!==null){for(let l=0;l<n.orderBy.length;++l)if(n.orderBy[l].field.isEqual(e)){const u=t.position[l];JI({value:i,inclusive:a},{value:u,inclusive:t.inclusive})<0&&(i=u,a=t.inclusive);break}}return{value:i,inclusive:a}}function iA(n,e,t){let i=Ms,a=!0;for(const l of Lp(n,e)){let u=Ms,d=!0;switch(l.op){case">=":case">":u=mU(l.value),d=!1;break;case"==":case"in":case"<=":u=l.value;break;case"<":u=l.value,d=!1;break;case"!=":case"not-in":u=Ms}ZI({value:i,inclusive:a},{value:u,inclusive:d})>0&&(i=u,a=d)}if(t!==null){for(let l=0;l<n.orderBy.length;++l)if(n.orderBy[l].field.isEqual(e)){const u=t.position[l];ZI({value:i,inclusive:a},{value:u,inclusive:t.inclusive})>0&&(i=u,a=t.inclusive);break}}return{value:i,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t=null,i=[],a=[],l=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=u,this.startAt=d,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function W1(n,e,t,i,a,l,u,d){return new Yr(n,e,t,i,a,l,u,d)}function Au(n){return new Yr(n)}function rA(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function uE(n){return n.collectionGroup!==null}function Fl(n){const e=fe(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new nt(_t.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new kh(l,i))}),t.has(_t.keyField().canonicalString())||e.Ee.push(new kh(_t.keyField(),i))}return e.Ee}function On(n){const e=fe(n);return e.de||(e.de=IU(e,Fl(n))),e.de}function IU(n,e){if(n.limitType==="F")return Yy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new kh(a.field,l)});const t=n.endAt?new Xs(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Xs(n.startAt.position,n.startAt.inclusive):null;return Yy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Wy(n,e){const t=n.filters.concat([e]);return new Yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Up(n,e,t){return new Yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function id(n,e){return nd(On(n),On(e))&&n.limitType===e.limitType}function X1(n){return`${mo(On(n))}|lt:${n.limitType}`}function xl(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(a=>K1(a)).join(", ")}]`),ed(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>au(a)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>au(a)).join(",")),`Target(${i})`}(On(n))}; limitType=${n.limitType})`}function rd(n,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):de.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,a){for(const l of Fl(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(i,a){return!(i.startAt&&!function(u,d,p){const g=eA(u,d,p);return u.inclusive?g<=0:g<0}(i.startAt,Fl(i),a)||i.endAt&&!function(u,d,p){const g=eA(u,d,p);return u.inclusive?g>=0:g>0}(i.endAt,Fl(i),a))}(n,e)}function J1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Z1(n){return(e,t)=>{let i=!1;for(const a of Fl(n)){const l=AU(a,e,t);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function AU(n,e,t){const i=n.field.isKeyField()?de.comparator(e.key,t.key):function(l,u,d){const p=u.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Ws(p,g):me(42886)}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return me(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[t]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){aa(this.inner,(t,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return O1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SU=new ct(de.comparator);function jn(){return SU}const eC=new ct(de.comparator);function nh(...n){let e=eC;for(const t of n)e=e.insert(t.key,t);return e}function tC(n){let e=eC;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function sr(){return mh()}function nC(){return mh()}function mh(){return new Wr(n=>n.toString(),(n,e)=>n.isEqual(e))}const RU=new ct(de.comparator),CU=new nt(de.comparator);function Pe(...n){let e=CU;for(const t of n)e=e.add(t);return e}const DU=new nt(Ce);function cE(){return DU}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ch(e)?"-0":e}}function iC(n){return{integerValue:""+n}}function rC(n,e){return b1(e)?iC(e):hE(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this._=void 0}}function xU(n,e,t){return n instanceof lu?function(a,l){const u={fields:{[M1]:{stringValue:k1},[U1]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&vm(l)&&(l=Em(l)),l&&(u.fields[L1]=l),{mapValue:u}}(t,e):n instanceof go?aC(n,e):n instanceof _o?oC(n,e):function(a,l){const u=sC(a,l),d=sA(u)+sA(a.Re);return $y(u)&&$y(a.Re)?iC(d):hE(a.serializer,d)}(n,e)}function PU(n,e,t){return n instanceof go?aC(n,e):n instanceof _o?oC(n,e):t}function sC(n,e){return n instanceof uu?function(i){return $y(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class lu extends wm{}class go extends wm{constructor(e){super(),this.elements=e}}function aC(n,e){const t=lC(e);for(const i of n.elements)t.some(a=>hr(a,i))||t.push(i);return{arrayValue:{values:t}}}class _o extends wm{constructor(e){super(),this.elements=e}}function oC(n,e){let t=lC(e);for(const i of n.elements)t=t.filter(a=>!hr(a,i));return{arrayValue:{values:t}}}class uu extends wm{constructor(e,t){super(),this.serializer=e,this.Re=t}}function sA(n){return mt(n.integerValue||n.doubleValue)}function lC(n){return Vh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.field=e,this.transform=t}}function NU(n,e){return n.field.isEqual(e.field)&&function(i,a){return i instanceof go&&a instanceof go||i instanceof _o&&a instanceof _o?Zl(i.elements,a.elements,hr):i instanceof uu&&a instanceof uu?hr(i.Re,a.Re):i instanceof lu&&a instanceof lu}(n.transform,e.transform)}class OU{constructor(e,t){this.version=e,this.transformResults=t}}class yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dp(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bm{}function uC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ru(n.key,yt.none()):new Su(n.key,n.data,yt.none());{const t=n.data,i=mn.empty();let a=new nt(_t.comparator);for(let l of e.fields)if(!a.has(l)){let u=t.field(l);u===null&&l.length>1&&(l=l.popLast(),u=t.field(l)),u===null?i.delete(l):i.set(l,u),a=a.add(l)}return new Xr(n.key,i,new qn(a.toArray()),yt.none())}}function VU(n,e,t){n instanceof Su?function(a,l,u){const d=a.value.clone(),p=oA(a.fieldTransforms,l,u.transformResults);d.setAll(p),l.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Xr?function(a,l,u){if(!dp(a.precondition,l))return void l.convertToUnknownDocument(u.version);const d=oA(a.fieldTransforms,l,u.transformResults),p=l.data;p.setAll(cC(a)),p.setAll(d),l.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(n,e,t):function(a,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function gh(n,e,t,i){return n instanceof Su?function(l,u,d,p){if(!dp(l.precondition,u))return d;const g=l.value.clone(),y=lA(l.fieldTransforms,p,u);return g.setAll(y),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(n,e,t,i):n instanceof Xr?function(l,u,d,p){if(!dp(l.precondition,u))return d;const g=lA(l.fieldTransforms,p,u),y=u.data;return y.setAll(cC(l)),y.setAll(g),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(v=>v.field))}(n,e,t,i):function(l,u,d){return dp(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function kU(n,e){let t=null;for(const i of n.fieldTransforms){const a=e.data.field(i.field),l=sC(i.transform,a||null);l!=null&&(t===null&&(t=mn.empty()),t.set(i.field,l))}return t||null}function aA(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&Zl(i,a,(l,u)=>NU(l,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Su extends bm{constructor(e,t,i,a=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Xr extends bm{constructor(e,t,i,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function cC(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function oA(n,e,t){const i=new Map;ye(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let a=0;a<t.length;a++){const l=n[a],u=l.transform,d=e.data.field(l.field);i.set(l.field,PU(u,d,t[a]))}return i}function lA(n,e,t){const i=new Map;for(const a of n){const l=a.transform,u=t.data.field(a.field);i.set(a.field,xU(l,u,e))}return i}class Ru extends bm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dE extends bm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,t,i,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&VU(l,e,i[a])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=gh(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=gh(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=nC();return this.mutations.forEach(a=>{const l=e.get(a.key),u=l.overlayedDocument;let d=this.applyToLocalView(u,l.mutatedFields);d=t.has(a.key)?null:d;const p=uC(u,d);p!==null&&i.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(Ee.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&Zl(this.mutations,e.mutations,(t,i)=>aA(t,i))&&Zl(this.baseMutations,e.baseMutations,(t,i)=>aA(t,i))}}class pE{constructor(e,t,i,a){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=a}static from(e,t,i){ye(e.mutations.length===i.length,58842,{fe:e.mutations.length,ge:i.length});let a=function(){return RU}();const l=e.mutations;for(let u=0;u<l.length;u++)a=a.insert(l[u].key,i[u].version);return new pE(e,t,i,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt,He;function hC(n){switch(n){case $.OK:return me(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return me(15467,{code:n})}}function dC(n){if(n===void 0)return kt("GRPC error has no .code"),$.UNKNOWN;switch(n){case qt.OK:return $.OK;case qt.CANCELLED:return $.CANCELLED;case qt.UNKNOWN:return $.UNKNOWN;case qt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case qt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case qt.INTERNAL:return $.INTERNAL;case qt.UNAVAILABLE:return $.UNAVAILABLE;case qt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case qt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case qt.NOT_FOUND:return $.NOT_FOUND;case qt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case qt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case qt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case qt.ABORTED:return $.ABORTED;case qt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case qt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case qt.DATA_LOSS:return $.DATA_LOSS;default:return me(39323,{code:n})}}(He=qt||(qt={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LU=new zs([4294967295,4294967295],0);function uA(n){const e=Zv().encode(n),t=new l1;return t.update(e),new Uint8Array(t.digest())}function cA(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new zs([t,i],0),new zs([a,l],0)]}class gE{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ih(`Invalid padding: ${t}`);if(i<0)throw new ih(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ih(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ih(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=zs.fromNumber(this.pe)}we(e,t,i){let a=e.add(t.multiply(zs.fromNumber(i)));return a.compare(LU)===1&&(a=new zs([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=uA(e),[i,a]=cA(t);for(let l=0;l<this.hashCount;l++){const u=this.we(i,a,l);if(!this.be(u))return!1}return!0}static create(e,t,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),u=new gE(l,a,t);return i.forEach(d=>u.insert(d)),u}insert(e){if(this.pe===0)return;const t=uA(e),[i,a]=cA(t);for(let l=0;l<this.hashCount;l++){const u=this.we(i,a,l);this.Se(u)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ih extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t,i,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const a=new Map;return a.set(e,od.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new ad(Ee.min(),a,new ct(Ce),jn(),Pe())}}class od{constructor(e,t,i,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new od(i,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,t,i,a){this.De=e,this.removedTargetIds=t,this.key=i,this.ve=a}}class fC{constructor(e,t){this.targetId=e,this.Ce=t}}class pC{constructor(e,t,i=Ct.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=a}}class hA{constructor(){this.Fe=0,this.Me=dA(),this.xe=Ct.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Pe(),t=Pe(),i=Pe();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:i=i.add(a);break;default:me(38017,{changeType:l})}}),new od(this.xe,this.Oe,e,t,i)}Qe(){this.Ne=!1,this.Me=dA()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ye(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class UU{constructor(e){this.ze=e,this.je=new Map,this.He=jn(),this.Je=Gf(),this.Ye=Gf(),this.Ze=new ct(Ce)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const i=this.rt(t);switch(e.state){case 0:this.it(t)&&i.ke(e.resumeToken);break;case 1:i.We(),i.Be||i.Qe(),i.ke(e.resumeToken);break;case 2:i.We(),i.Be||this.removeTarget(t);break;case 3:this.it(t)&&(i.Ge(),i.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),i.ke(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((i,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,i=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(Mp(l))if(i===0){const u=new de(l.path);this.tt(t,u,dt.newNoDocument(u,Ee.min()))}else ye(i===1,20013,{expectedCount:i});else{const u=this.ut(t);if(u!==i){const d=this.ct(e),p=d?this.lt(d,e,u):1;if(p!==0){this.st(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=t;let u,d;try{u=Hr(i).toUint8Array()}catch(p){if(p instanceof V1)return cr("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new gE(u,a,l)}catch(p){return cr(p instanceof ih?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.pe===0?null:d}lt(e,t,i){return t.Ce.count===i-this.Tt(e,t.targetId)?0:2}Tt(e,t){const i=this.ze.getRemoteKeysForTarget(t);let a=0;return i.forEach(l=>{const u=this.ze.Pt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,u)=>{const d=this._t(u);if(d){if(l.current&&Mp(d.target)){const p=new de(d.target.path);this.Et(p).has(u)||this.dt(u,p)||this.tt(u,p,dt.newNoDocument(p,e))}l.Le&&(t.set(u,l.qe()),l.Qe())}});let i=Pe();this.Ye.forEach((l,u)=>{let d=!0;u.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.He.forEach((l,u)=>u.setReadTime(e));const a=new ad(e,t,this.Ze,this.He,i);return this.He=jn(),this.Je=Gf(),this.Ye=Gf(),this.Ze=new ct(Ce),a}et(e,t){if(!this.it(e))return;const i=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,i),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,i){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),i&&(this.He=this.He.insert(t,i))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new hA,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new nt(Ce),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new nt(Ce),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new hA),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Gf(){return new ct(de.comparator)}function dA(){return new ct(de.comparator)}const BU={asc:"ASCENDING",desc:"DESCENDING"},zU={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},FU={and:"AND",or:"OR"};class qU{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xy(n,e){return n.useProto3Json||ed(e)?e:{value:e}}function cu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function jU(n,e){return cu(n,e.toTimestamp())}function Mt(n){return ye(!!n,49232),Ee.fromTimestamp(function(t){const i=Gr(t);return new vt(i.seconds,i.nanos)}(n))}function _E(n,e){return Jy(n,e).canonicalString()}function Jy(n,e){const t=function(a){return new ze(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function gC(n){const e=ze.fromString(n);return ye(SC(e),10190,{key:e.toString()}),e}function Mh(n,e){return _E(n.databaseId,e.path)}function or(n,e){const t=gC(e);if(t.get(1)!==n.databaseId.projectId)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new de(vC(t))}function _C(n,e){return _E(n.databaseId,e)}function yC(n){const e=gC(n);return e.length===4?ze.emptyPath():vC(e)}function Zy(n){return new ze(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vC(n){return ye(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function fA(n,e,t){return{name:Mh(n,e),fields:t.value.mapValue.fields}}function EC(n,e,t){const i=or(n,e.name),a=Mt(e.updateTime),l=e.createTime?Mt(e.createTime):Ee.min(),u=new mn({mapValue:{fields:e.fields}}),d=dt.newFoundDocument(i,a,l,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function GU(n,e){return"found"in e?function(i,a){ye(!!a.found,43571),a.found.name,a.found.updateTime;const l=or(i,a.found.name),u=Mt(a.found.updateTime),d=a.found.createTime?Mt(a.found.createTime):Ee.min(),p=new mn({mapValue:{fields:a.found.fields}});return dt.newFoundDocument(l,u,d,p)}(n,e):"missing"in e?function(i,a){ye(!!a.missing,3894),ye(!!a.readTime,22933);const l=or(i,a.missing),u=Mt(a.readTime);return dt.newNoDocument(l,u)}(n,e):me(7234,{result:e})}function HU(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:me(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,y){return g.useProto3Json?(ye(y===void 0||typeof y=="string",58123),Ct.fromBase64String(y||"")):(ye(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),Ct.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(g){const y=g.code===void 0?$.UNKNOWN:dC(g.code);return new ne(y,g.message||"")}(u);t=new pC(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=or(n,i.document.name),l=Mt(i.document.updateTime),u=i.document.createTime?Mt(i.document.createTime):Ee.min(),d=new mn({mapValue:{fields:i.document.fields}}),p=dt.newFoundDocument(a,l,u,d),g=i.targetIds||[],y=i.removedTargetIds||[];t=new fp(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=or(n,i.document),l=i.readTime?Mt(i.readTime):Ee.min(),u=dt.newNoDocument(a,l),d=i.removedTargetIds||[];t=new fp([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=or(n,i.document),l=i.removedTargetIds||[];t=new fp([],l,a,null)}else{if(!("filter"in e))return me(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,u=new MU(a,l),d=i.targetId;t=new fC(d,u)}}return t}function Lh(n,e){let t;if(e instanceof Su)t={update:fA(n,e.key,e.value)};else if(e instanceof Ru)t={delete:Mh(n,e.key)};else if(e instanceof Xr)t={update:fA(n,e.key,e.data),updateMask:XU(e.fieldMask)};else{if(!(e instanceof dE))return me(16599,{ft:e.type});t={verify:Mh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,u){const d=u.transform;if(d instanceof lu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof go)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof _o)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof uu)return{fieldPath:u.field.canonicalString(),increment:d.Re};throw me(20930,{transform:u.transform})}(0,i))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:jU(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:me(27497)}(n,e.precondition)),t}function ev(n,e){const t=e.currentDocument?function(l){return l.updateTime!==void 0?yt.updateTime(Mt(l.updateTime)):l.exists!==void 0?yt.exists(l.exists):yt.none()}(e.currentDocument):yt.none(),i=e.updateTransforms?e.updateTransforms.map(a=>function(u,d){let p=null;if("setToServerValue"in d)ye(d.setToServerValue==="REQUEST_TIME",16630,{proto:d}),p=new lu;else if("appendMissingElements"in d){const y=d.appendMissingElements.values||[];p=new go(y)}else if("removeAllFromArray"in d){const y=d.removeAllFromArray.values||[];p=new _o(y)}else"increment"in d?p=new uu(u,d.increment):me(16584,{proto:d});const g=_t.fromServerFormat(d.fieldPath);return new sd(g,p)}(n,a)):[];if(e.update){e.update.name;const a=or(n,e.update.name),l=new mn({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(p){const g=p.fieldPaths||[];return new qn(g.map(y=>_t.fromServerFormat(y)))}(e.updateMask);return new Xr(a,l,u,t,i)}return new Su(a,l,t,i)}if(e.delete){const a=or(n,e.delete);return new Ru(a,t)}if(e.verify){const a=or(n,e.verify);return new dE(a,t)}return me(1463,{proto:e})}function $U(n,e){return n&&n.length>0?(ye(e!==void 0,14353),n.map(t=>function(a,l){let u=a.updateTime?Mt(a.updateTime):Mt(l);return u.isEqual(Ee.min())&&(u=Mt(l)),new OU(u,a.transformResults||[])}(t,e))):[]}function TC(n,e){return{documents:[_C(n,e.path)]}}function wC(n,e){const t={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=_C(n,a);const l=function(g){if(g.length!==0)return AC(tt.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const u=function(g){if(g.length!==0)return g.map(y=>function(w){return{field:Pl(w.field),direction:QU(w.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Xy(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:a}}function bC(n){let e=yC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let a=null;if(i>0){ye(i===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(v){const w=IC(v);return w instanceof tt&&lE(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(w=>function(L){return new kh(Nl(L.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(v){let w;return w=typeof v=="object"?v.value:v,ed(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(v){const w=!!v.before,R=v.values||[];return new Xs(R,w)}(t.startAt));let g=null;return t.endAt&&(g=function(v){const w=!v.before,R=v.values||[];return new Xs(R,w)}(t.endAt)),W1(e,a,u,l,d,"F",p,g)}function KU(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function IC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Nl(t.unaryFilter.field);return Fe.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=Nl(t.unaryFilter.field);return Fe.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Nl(t.unaryFilter.field);return Fe.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Nl(t.unaryFilter.field);return Fe.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(n):n.fieldFilter!==void 0?function(t){return Fe.create(Nl(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(i=>IC(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(t.compositeFilter.op))}(n):me(30097,{filter:n})}function QU(n){return BU[n]}function YU(n){return zU[n]}function WU(n){return FU[n]}function Pl(n){return{fieldPath:n.canonicalString()}}function Nl(n){return _t.fromServerFormat(n.fieldPath)}function AC(n){return n instanceof Fe?function(t){if(t.op==="=="){if(XI(t.value))return{unaryFilter:{field:Pl(t.field),op:"IS_NAN"}};if(WI(t.value))return{unaryFilter:{field:Pl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(XI(t.value))return{unaryFilter:{field:Pl(t.field),op:"IS_NOT_NAN"}};if(WI(t.value))return{unaryFilter:{field:Pl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pl(t.field),op:YU(t.op),value:t.value}}}(n):n instanceof tt?function(t){const i=t.getFilters().map(a=>AC(a));return i.length===1?i[0]:{compositeFilter:{op:WU(t.op),filters:i}}}(n):me(54877,{filter:n})}function XU(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function SC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t,i,a,l=Ee.min(),u=Ee.min(),d=Ct.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.wt=e}}function JU(n,e){let t;if(e.document)t=EC(n.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const i=de.fromSegments(e.noDocument.path),a=vo(e.noDocument.readTime);t=dt.newNoDocument(i,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return me(56709);{const i=de.fromSegments(e.unknownDocument.path),a=vo(e.unknownDocument.version);t=dt.newUnknownDocument(i,a)}}return e.readTime&&t.setReadTime(function(a){const l=new vt(a[0],a[1]);return Ee.fromTimestamp(l)}(e.readTime)),t}function pA(n,e){const t=e.key,i={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Bp(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())i.document=function(l,u){return{name:Mh(l,u.key),fields:u.data.value.mapValue.fields,updateTime:cu(l,u.version.toTimestamp()),createTime:cu(l,u.createTime.toTimestamp())}}(n.wt,e);else if(e.isNoDocument())i.noDocument={path:t.path.toArray(),readTime:yo(e.version)};else{if(!e.isUnknownDocument())return me(57904,{document:e});i.unknownDocument={path:t.path.toArray(),version:yo(e.version)}}return i}function Bp(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function yo(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function vo(n){const e=new vt(n.seconds,n.nanoseconds);return Ee.fromTimestamp(e)}function Wa(n,e){const t=(e.baseMutations||[]).map(l=>ev(n.wt,l));for(let l=0;l<e.mutations.length-1;++l){const u=e.mutations[l];if(l+1<e.mutations.length&&e.mutations[l+1].transform!==void 0){const d=e.mutations[l+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(l+1,1),++l}}const i=e.mutations.map(l=>ev(n.wt,l)),a=vt.fromMillis(e.localWriteTimeMs);return new fE(e.batchId,a,t,i)}function rh(n){const e=vo(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?vo(n.lastLimboFreeSnapshotVersion):Ee.min();let i;return i=function(l){return l.documents!==void 0}(n.query)?function(l){const u=l.documents.length;return ye(u===1,1966,{count:u}),On(Au(yC(l.documents[0])))}(n.query):function(l){return On(bC(l))}(n.query),new zr(i,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ct.fromBase64String(n.resumeToken))}function CC(n,e){const t=yo(e.snapshotVersion),i=yo(e.lastLimboFreeSnapshotVersion);let a;a=Mp(e.target)?TC(n.wt,e.target):wC(n.wt,e.target).gt;const l=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:mo(e.target),readTime:t,resumeToken:l,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:a}}function yE(n){const e=bC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Up(e,e.limit,"L"):e}function uy(n,e){return new mE(e.largestBatchId,ev(n.wt,e.overlayMutation))}function mA(n,e){const t=e.path.lastSegment();return[n,In(e.path.popLast()),t]}function gA(n,e,t,i){return{indexId:n,uid:e,sequenceNumber:t,readTime:yo(i.readTime),documentKey:In(i.documentKey.path),largestBatchId:i.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZU{getBundleMetadata(e,t){return _A(e).get(t).next(i=>{if(i)return function(l){return{id:l.bundleId,createTime:vo(l.createTime),version:l.version}}(i)})}saveBundleMetadata(e,t){return _A(e).put(function(a){return{bundleId:a.id,createTime:yo(Mt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return yA(e).get(t).next(i=>{if(i)return function(l){return{name:l.name,query:yE(l.bundledQuery),readTime:vo(l.readTime)}}(i)})}saveNamedQuery(e,t){return yA(e).put(function(a){return{name:a.name,readTime:yo(Mt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function _A(n){return Xt(n,gm)}function yA(n){return Xt(n,_m)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.serializer=e,this.userId=t}static bt(e,t){const i=t.uid||"";return new Im(e,i)}getOverlay(e,t){return $c(e).get(mA(this.userId,t)).next(i=>i?uy(this.serializer,i):null)}getOverlays(e,t){const i=sr();return F.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,t,i){const a=[];return i.forEach((l,u)=>{const d=new mE(t,u);a.push(this.St(e,d))}),F.waitFor(a)}removeOverlaysForBatchId(e,t,i){const a=new Set;t.forEach(u=>a.add(In(u.getCollectionPath())));const l=[];return a.forEach(u=>{const d=IDBKeyRange.bound([this.userId,u,i],[this.userId,u,i+1],!1,!0);l.push($c(e).X(qy,d))}),F.waitFor(l)}getOverlaysForCollection(e,t,i){const a=sr(),l=In(t),u=IDBKeyRange.bound([this.userId,l,i],[this.userId,l,Number.POSITIVE_INFINITY],!0);return $c(e).J(qy,u).next(d=>{for(const p of d){const g=uy(this.serializer,p);a.set(g.getKey(),g)}return a})}getOverlaysForCollectionGroup(e,t,i,a){const l=sr();let u;const d=IDBKeyRange.bound([this.userId,t,i],[this.userId,t,Number.POSITIVE_INFINITY],!0);return $c(e).te({index:D1,range:d},(p,g,y)=>{const v=uy(this.serializer,g);l.size()<a||v.largestBatchId===u?(l.set(v.getKey(),v),u=v.largestBatchId):y.done()}).next(()=>l)}St(e,t){return $c(e).put(function(a,l,u){const[d,p,g]=mA(l,u.mutation.key);return{userId:l,collectionPath:p,documentId:g,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Lh(a.wt,u.mutation)}}(this.serializer,this.userId,t))}}function $c(n){return Xt(n,ym)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{Dt(e){return Xt(e,rE)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const i=t==null?void 0:t.value;return i?Ct.fromUint8Array(i):Ct.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(mt(e.integerValue));else if("doubleValue"in e){const i=mt(e.doubleValue);isNaN(i)?this.Mt(t,13):(this.Mt(t,15),Ch(i)?t.xt(0):t.xt(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Mt(t,20),typeof i=="string"&&(i=Gr(i)),t.Ot(`${i.seconds||""}`),t.xt(i.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(Hr(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const i=e.geoPointValue;this.Mt(t,45),t.xt(i.latitude||0),t.xt(i.longitude||0)}else"mapValue"in e?z1(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):Tm(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):me(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const i=e.fields||{};this.Mt(t,55);for(const a of Object.keys(i))this.Nt(a,t),this.Ct(i[a],t)}qt(e,t){var i,a;const l=e.fields||{};this.Mt(t,53);const u=su,d=((a=(i=l[u].arrayValue)===null||i===void 0?void 0:i.values)===null||a===void 0?void 0:a.length)||0;this.Mt(t,15),t.xt(mt(d)),this.Nt(u,t),this.Ct(l[u],t)}$t(e,t){const i=e.values||[];this.Mt(t,50);for(const a of i)this.Ct(a,t)}kt(e,t){this.Mt(t,37),de.fromName(e).path.forEach(i=>{this.Mt(t,60),this.Kt(i,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}Xa.Wt=new Xa;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=255;function t6(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function vA(n){const e=64-function(i){let a=0;for(let l=0;l<8;++l){const u=t6(255&i[l]);if(a+=u,u!==8)break}return a}(n);return Math.ceil(e/8)}class n6{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.zt(i.value),i=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Jt(i.value),i=t.next();this.Yt()}Zt(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.zt(i);else if(i<2048)this.zt(960|i>>>6),this.zt(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|i>>>12),this.zt(128|63&i>>>6),this.zt(128|63&i);else{const a=t.codePointAt(0);this.zt(240|a>>>18),this.zt(128|63&a>>>12),this.zt(128|63&a>>>6),this.zt(128|63&a)}}this.jt()}Xt(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Jt(i);else if(i<2048)this.Jt(960|i>>>6),this.Jt(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i);else{const a=t.codePointAt(0);this.Jt(240|a>>>18),this.Jt(128|63&a>>>12),this.Jt(128|63&a>>>6),this.Jt(128|63&a)}}this.Yt()}en(e){const t=this.tn(e),i=vA(t);this.nn(1+i),this.buffer[this.position++]=255&i;for(let a=t.length-i;a<t.length;++a)this.buffer[this.position++]=255&t[a]}rn(e){const t=this.tn(e),i=vA(t);this.nn(1+i),this.buffer[this.position++]=~(255&i);for(let a=t.length-i;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}sn(){this._n(Al),this._n(255)}an(){this.un(Al),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(l){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,l,!1),new Uint8Array(u.buffer)}(e),i=!!(128&t[0]);t[0]^=i?255:128;for(let a=1;a<t.length;++a)t[a]^=i?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Al?(this._n(Al),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===Al?(this.un(Al),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let i=2*this.buffer.length;i<t&&(i=t);const a=new Uint8Array(i);a.set(this.buffer),this.buffer=a}}class i6{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class r6{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class Kc{constructor(){this.ln=new n6,this.hn=new i6(this.ln),this.Pn=new r6(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,i,a){this.indexId=e,this.documentKey=t,this.arrayValue=i,this.directionalValue=a}In(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,i=new Uint8Array(t);return i.set(this.directionalValue,0),t!==e?i.set([0],this.directionalValue.length):++i[i.length-1],new Ja(this.indexId,this.documentKey,this.arrayValue,i)}}function Cs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=EA(n.arrayValue,e.arrayValue),t!==0?t:(t=EA(n.directionalValue,e.directionalValue),t!==0?t:de.comparator(n.documentKey,e.documentKey)))}function EA(n,e){for(let t=0;t<n.length&&t<e.length;++t){const i=n[t]-e[t];if(i!==0)return i}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.En=new nt((t,i)=>_t.comparator(t.field,i.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.An=[];for(const t of e.filters){const i=t;i.isInequality()?this.En=this.En.add(i):this.An.push(i)}}get Rn(){return this.En.size>1}Vn(e){if(ye(e.collectionGroup===this.collectionId,49279),this.Rn)return!1;const t=By(e);if(t!==void 0&&!this.mn(t))return!1;const i=Ka(e);let a=new Set,l=0,u=0;for(;l<i.length&&this.mn(i[l]);++l)a=a.add(i[l].fieldPath.canonicalString());if(l===i.length)return!0;if(this.En.size>0){const d=this.En.getIterator().getNext();if(!a.has(d.field.canonicalString())){const p=i[l];if(!this.fn(d,p)||!this.gn(this.dn[u++],p))return!1}++l}for(;l<i.length;++l){const d=i[l];if(u>=this.dn.length||!this.gn(this.dn[u++],d))return!1}return!0}pn(){if(this.Rn)return null;let e=new nt(_t.comparator);const t=[];for(const i of this.An)if(!i.field.isKeyField())if(i.op==="array-contains"||i.op==="array-contains-any")t.push(new ap(i.field,2));else{if(e.has(i.field))continue;e=e.add(i.field),t.push(new ap(i.field,0))}for(const i of this.dn)i.field.isKeyField()||e.has(i.field)||(e=e.add(i.field),t.push(new ap(i.field,i.dir==="asc"?0:1)));return new xp(xp.UNKNOWN_ID,this.collectionId,t,Rh.empty())}mn(e){for(const t of this.An)if(this.fn(t,e))return!0;return!1}fn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const i=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===i}gn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(n){var e,t;if(ye(n instanceof Fe||n instanceof tt,20012),n instanceof Fe){if(n instanceof Y1){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(l=>Fe.create(n.field,"==",l)))||[];return tt.create(a,"or")}return n}const i=n.filters.map(a=>DC(a));return tt.create(i,n.op)}function s6(n){if(n.getFilters().length===0)return[];const e=iv(DC(n));return ye(xC(e),7391),tv(e)||nv(e)?[e]:e.getFilters()}function tv(n){return n instanceof Fe}function nv(n){return n instanceof tt&&lE(n)}function xC(n){return tv(n)||nv(n)||function(t){if(t instanceof tt&&Ky(t)){for(const i of t.getFilters())if(!tv(i)&&!nv(i))return!1;return!0}return!1}(n)}function iv(n){if(ye(n instanceof Fe||n instanceof tt,34018),n instanceof Fe)return n;if(n.filters.length===1)return iv(n.filters[0]);const e=n.filters.map(i=>iv(i));let t=tt.create(e,n.op);return t=zp(t),xC(t)?t:(ye(t instanceof tt,64498),ye(ou(t),40251),ye(t.filters.length>1,57927),t.filters.reduce((i,a)=>vE(i,a)))}function vE(n,e){let t;return ye(n instanceof Fe||n instanceof tt,38388),ye(e instanceof Fe||e instanceof tt,25473),t=n instanceof Fe?e instanceof Fe?function(a,l){return tt.create([a,l],"and")}(n,e):wA(n,e):e instanceof Fe?wA(e,n):function(a,l){if(ye(a.filters.length>0&&l.filters.length>0,48005),ou(a)&&ou(l))return $1(a,l.getFilters());const u=Ky(a)?a:l,d=Ky(a)?l:a,p=u.filters.map(g=>vE(g,d));return tt.create(p,"or")}(n,e),zp(t)}function wA(n,e){if(ou(e))return $1(e,n.getFilters());{const t=e.filters.map(i=>vE(n,i));return tt.create(t,"or")}}function zp(n){if(ye(n instanceof Fe||n instanceof tt,11850),n instanceof Fe)return n;const e=n.getFilters();if(e.length===1)return zp(e[0]);if(G1(n))return n;const t=e.map(a=>zp(a)),i=[];return t.forEach(a=>{a instanceof Fe?i.push(a):a instanceof tt&&(a.op===n.op?i.push(...a.filters):i.push(a))}),i.length===1?i[0]:tt.create(i,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(){this.yn=new EE}addToCollectionParentIndex(e,t){return this.yn.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(ri.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(ri.min())}updateCollectionGroup(e,t,i){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class EE{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t]||new nt(ze.comparator),l=!a.has(i);return this.index[t]=a.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t];return a&&a.has(i)}getEntries(e){return(this.index[e]||new nt(ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="IndexedDbIndexManager",Hf=new Uint8Array(0);class o6{constructor(e,t){this.databaseId=t,this.wn=new EE,this.bn=new Wr(i=>mo(i),(i,a)=>nd(i,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.wn.has(t)){const i=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.wn.add(t)});const l={collectionId:i,parent:In(a)};return IA(e).put(l)}return F.resolve()}getCollectionParents(e,t){const i=[],a=IDBKeyRange.bound([t,""],[_1(t),""],!1,!0);return IA(e).J(a).next(l=>{for(const u of l){if(u.collectionId!==t)break;i.push(rr(u.parent))}return i})}addFieldIndex(e,t){const i=Qc(e),a=function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map(p=>[p.fieldPath.canonicalString(),p.kind])}}(t);delete a.indexId;const l=i.add(a);if(t.indexState){const u=Rl(e);return l.next(d=>{u.put(gA(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return l.next()}deleteFieldIndex(e,t){const i=Qc(e),a=Rl(e),l=Sl(e);return i.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>l.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Qc(e),i=Sl(e),a=Rl(e);return t.X().next(()=>i.X()).next(()=>a.X())}createTargetIndexes(e,t){return F.forEach(this.Sn(t),i=>this.getIndexType(e,i).next(a=>{if(a===0||a===1){const l=new TA(i).pn();if(l!=null)return this.addFieldIndex(e,l)}}))}getDocumentsMatchingTarget(e,t){const i=Sl(e);let a=!0;const l=new Map;return F.forEach(this.Sn(t),u=>this.Dn(e,u).next(d=>{a&&(a=!!d),l.set(u,d)})).next(()=>{if(a){let u=Pe();const d=[];return F.forEach(l,(p,g)=>{ie(bA,`Using index ${function(Y){return`id=${Y.indexId}|cg=${Y.collectionGroup}|f=${Y.fields.map(oe=>`${oe.fieldPath}:${oe.kind}`).join(",")}`}(p)} to execute ${mo(t)}`);const y=function(Y,oe){const se=By(oe);if(se===void 0)return null;for(const ue of Lp(Y,se.fieldPath))switch(ue.op){case"array-contains-any":return ue.value.arrayValue.values||[];case"array-contains":return[ue.value]}return null}(g,p),v=function(Y,oe){const se=new Map;for(const ue of Ka(oe))for(const S of Lp(Y,ue.fieldPath))switch(S.op){case"==":case"in":se.set(ue.fieldPath.canonicalString(),S.value);break;case"not-in":case"!=":return se.set(ue.fieldPath.canonicalString(),S.value),Array.from(se.values())}return null}(g,p),w=function(Y,oe){const se=[];let ue=!0;for(const S of Ka(oe)){const A=S.kind===0?nA(Y,S.fieldPath,Y.startAt):iA(Y,S.fieldPath,Y.startAt);se.push(A.value),ue&&(ue=A.inclusive)}return new Xs(se,ue)}(g,p),R=function(Y,oe){const se=[];let ue=!0;for(const S of Ka(oe)){const A=S.kind===0?iA(Y,S.fieldPath,Y.endAt):nA(Y,S.fieldPath,Y.endAt);se.push(A.value),ue&&(ue=A.inclusive)}return new Xs(se,ue)}(g,p),L=this.vn(p,g,w),B=this.vn(p,g,R),V=this.Cn(p,g,v),Z=this.Fn(p.indexId,y,L,w.inclusive,B,R.inclusive,V);return F.forEach(Z,X=>i.Z(X,t.limit).next(Y=>{Y.forEach(oe=>{const se=de.fromSegments(oe.documentKey);u.has(se)||(u=u.add(se),d.push(se))})}))}).next(()=>d)}return F.resolve(null)})}Sn(e){let t=this.bn.get(e);return t||(e.filters.length===0?t=[e]:t=s6(tt.create(e.filters,"and")).map(i=>Yy(e.path,e.collectionGroup,e.orderBy,i.getFilters(),e.limit,e.startAt,e.endAt)),this.bn.set(e,t),t)}Fn(e,t,i,a,l,u,d){const p=(t!=null?t.length:1)*Math.max(i.length,l.length),g=p/(t!=null?t.length:1),y=[];for(let v=0;v<p;++v){const w=t?this.Mn(t[v/g]):Hf,R=this.xn(e,w,i[v%g],a),L=this.On(e,w,l[v%g],u),B=d.map(V=>this.xn(e,w,V,!0));y.push(...this.createRange(R,L,B))}return y}xn(e,t,i,a){const l=new Ja(e,de.empty(),t,i);return a?l:l.In()}On(e,t,i,a){const l=new Ja(e,de.empty(),t,i);return a?l.In():l}Dn(e,t){const i=new TA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(l=>{let u=null;for(const d of l)i.Vn(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u})}getIndexType(e,t){let i=2;const a=this.Sn(t);return F.forEach(a,l=>this.Dn(e,l).next(u=>{u?i!==0&&u.fields.length<function(p){let g=new nt(_t.comparator),y=!1;for(const v of p.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?y=!0:g=g.add(w.field));for(const v of p.orderBy)v.field.isKeyField()||(g=g.add(v.field));return g.size+(y?1:0)}(l)&&(i=1):i=0})).next(()=>function(u){return u.limit!==null}(t)&&a.length>1&&i===2?1:i)}Nn(e,t){const i=new Kc;for(const a of Ka(e)){const l=t.data.field(a.fieldPath);if(l==null)return null;const u=i.Tn(a.kind);Xa.Wt.vt(l,u)}return i.cn()}Mn(e){const t=new Kc;return Xa.Wt.vt(e,t.Tn(0)),t.cn()}Bn(e,t){const i=new Kc;return Xa.Wt.vt(po(this.databaseId,t),i.Tn(function(l){const u=Ka(l);return u.length===0?0:u[u.length-1].kind}(e))),i.cn()}Cn(e,t,i){if(i===null)return[];let a=[];a.push(new Kc);let l=0;for(const u of Ka(e)){const d=i[l++];for(const p of a)if(this.Ln(t,u.fieldPath)&&Vh(d))a=this.kn(a,u,d);else{const g=p.Tn(u.kind);Xa.Wt.vt(d,g)}}return this.qn(a)}vn(e,t,i){return this.Cn(e,t,i.position)}qn(e){const t=[];for(let i=0;i<e.length;++i)t[i]=e[i].cn();return t}kn(e,t,i){const a=[...e],l=[];for(const u of i.arrayValue.values||[])for(const d of a){const p=new Kc;p.seed(d.cn()),Xa.Wt.vt(u,p.Tn(t.kind)),l.push(p)}return l}Ln(e,t){return!!e.filters.find(i=>i instanceof Fe&&i.field.isEqual(t)&&(i.op==="in"||i.op==="not-in"))}getFieldIndexes(e,t){const i=Qc(e),a=Rl(e);return(t?i.J(Fy,IDBKeyRange.bound(t,t)):i.J()).next(l=>{const u=[];return F.forEach(l,d=>a.get([d.indexId,this.uid]).next(p=>{u.push(function(y,v){const w=v?new Rh(v.sequenceNumber,new ri(vo(v.readTime),new de(rr(v.documentKey)),v.largestBatchId)):Rh.empty(),R=y.fields.map(([L,B])=>new ap(_t.fromServerFormat(L),B));return new xp(y.indexId,y.collectionGroup,R,w)}(d,p))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((i,a)=>{const l=i.indexState.sequenceNumber-a.indexState.sequenceNumber;return l!==0?l:Ce(i.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,i){const a=Qc(e),l=Rl(e);return this.Qn(e).next(u=>a.J(Fy,IDBKeyRange.bound(t,t)).next(d=>F.forEach(d,p=>l.put(gA(p.indexId,this.uid,u,i)))))}updateIndexEntries(e,t){const i=new Map;return F.forEach(t,(a,l)=>{const u=i.get(a.collectionGroup);return(u?F.resolve(u):this.getFieldIndexes(e,a.collectionGroup)).next(d=>(i.set(a.collectionGroup,d),F.forEach(d,p=>this.$n(e,a,p).next(g=>{const y=this.Un(l,p);return g.isEqual(y)?F.resolve():this.Kn(e,l,p,g,y)}))))})}Wn(e,t,i,a){return Sl(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.Bn(i,t.key),documentKey:t.key.path.toArray()})}Gn(e,t,i,a){return Sl(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.Bn(i,t.key),t.key.path.toArray()])}$n(e,t,i){const a=Sl(e);let l=new nt(Cs);return a.te({index:C1,range:IDBKeyRange.only([i.indexId,this.uid,this.Bn(i,t)])},(u,d)=>{l=l.add(new Ja(i.indexId,t,d.arrayValue,d.directionalValue))}).next(()=>l)}Un(e,t){let i=new nt(Cs);const a=this.Nn(t,e);if(a==null)return i;const l=By(t);if(l!=null){const u=e.data.field(l.fieldPath);if(Vh(u))for(const d of u.arrayValue.values||[])i=i.add(new Ja(t.indexId,e.key,this.Mn(d),a))}else i=i.add(new Ja(t.indexId,e.key,Hf,a));return i}Kn(e,t,i,a,l){ie(bA,"Updating index entries for document '%s'",t.key);const u=[];return function(p,g,y,v,w){const R=p.getIterator(),L=g.getIterator();let B=Il(R),V=Il(L);for(;B||V;){let Z=!1,X=!1;if(B&&V){const Y=y(B,V);Y<0?X=!0:Y>0&&(Z=!0)}else B!=null?X=!0:Z=!0;Z?(v(V),V=Il(L)):X?(w(B),B=Il(R)):(B=Il(R),V=Il(L))}}(a,l,Cs,d=>{u.push(this.Wn(e,t,i,d))},d=>{u.push(this.Gn(e,t,i,d))}),F.waitFor(u)}Qn(e){let t=1;return Rl(e).te({index:R1,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(i,a,l)=>{l.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,i){i=i.sort((u,d)=>Cs(u,d)).filter((u,d,p)=>!d||Cs(u,p[d-1])!==0);const a=[];a.push(e);for(const u of i){const d=Cs(u,e),p=Cs(u,t);if(d===0)a[0]=e.In();else if(d>0&&p<0)a.push(u),a.push(u.In());else if(p>0)break}a.push(t);const l=[];for(let u=0;u<a.length;u+=2){if(this.zn(a[u],a[u+1]))return[];const d=[a[u].indexId,this.uid,a[u].arrayValue,a[u].directionalValue,Hf,[]],p=[a[u+1].indexId,this.uid,a[u+1].arrayValue,a[u+1].directionalValue,Hf,[]];l.push(IDBKeyRange.bound(d,p))}return l}zn(e,t){return Cs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(AA)}getMinOffset(e,t){return F.mapArray(this.Sn(t),i=>this.Dn(e,i).next(a=>a||me(44426))).next(AA)}}function IA(n){return Xt(n,Ph)}function Sl(n){return Xt(n,kp)}function Qc(n){return Xt(n,iE)}function Rl(n){return Xt(n,Vp)}function AA(n){ye(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let i=1;i<n.length;i++){const a=n[i].indexState.offset;eE(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new ri(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},PC=41943040;class bn{static withCacheSize(e){return new bn(e,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(n,e,t){const i=n.store(Di),a=n.store(tu),l=[],u=IDBKeyRange.only(t.batchId);let d=0;const p=i.te({range:u},(y,v,w)=>(d++,w.delete()));l.push(p.next(()=>{ye(d===1,47070,{batchId:t.batchId})}));const g=[];for(const y of t.mutations){const v=I1(e,y.key.path,t.batchId);l.push(a.delete(v)),g.push(y.key)}return F.waitFor(l).next(()=>g)}function Fp(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw me(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.DEFAULT_COLLECTION_PERCENTILE=10,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bn.DEFAULT=new bn(PC,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bn.DISABLED=new bn(-1,0,0);class Am{constructor(e,t,i,a){this.userId=e,this.serializer=t,this.indexManager=i,this.referenceDelegate=a,this.jn={}}static bt(e,t,i,a){ye(e.uid!=="",64387);const l=e.isAuthenticated()?e.uid:"";return new Am(l,t,i,a)}checkEmpty(e){let t=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ds(e).te({index:no,range:i},(a,l,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,i,a){const l=Ol(e),u=Ds(e);return u.add({}).next(d=>{ye(typeof d=="number",49019);const p=new fE(d,t,i,a),g=function(R,L,B){const V=B.baseMutations.map(X=>Lh(R.wt,X)),Z=B.mutations.map(X=>Lh(R.wt,X));return{userId:L,batchId:B.batchId,localWriteTimeMs:B.localWriteTime.toMillis(),baseMutations:V,mutations:Z}}(this.serializer,this.userId,p),y=[];let v=new nt((w,R)=>Ce(w.canonicalString(),R.canonicalString()));for(const w of a){const R=I1(this.userId,w.key.path,d);v=v.add(w.key.path.popLast()),y.push(u.put(g)),y.push(l.put(R,FL))}return v.forEach(w=>{y.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.jn[d]=p.keys()}),F.waitFor(y).next(()=>p)})}lookupMutationBatch(e,t){return Ds(e).get(t).next(i=>i?(ye(i.userId===this.userId,48,"Unexpected user for mutation batch",{userId:i.userId,batchId:t}),Wa(this.serializer,i)):null)}Hn(e,t){return this.jn[t]?F.resolve(this.jn[t]):this.lookupMutationBatch(e,t).next(i=>{if(i){const a=i.keys();return this.jn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=IDBKeyRange.lowerBound([this.userId,i]);let l=null;return Ds(e).te({index:no,range:a},(u,d,p)=>{d.userId===this.userId&&(ye(d.batchId>=i,47524,{Jn:i}),l=Wa(this.serializer,d)),p.done()}).next(()=>l)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=Fs;return Ds(e).te({index:no,range:t,reverse:!0},(a,l,u)=>{i=l.batchId,u.done()}).next(()=>i)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Fs],[this.userId,Number.POSITIVE_INFINITY]);return Ds(e).J(no,t).next(i=>i.map(a=>Wa(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const i=op(this.userId,t.path),a=IDBKeyRange.lowerBound(i),l=[];return Ol(e).te({range:a},(u,d,p)=>{const[g,y,v]=u,w=rr(y);if(g===this.userId&&t.path.isEqual(w))return Ds(e).get(v).next(R=>{if(!R)throw me(61480,{Yn:u,batchId:v});ye(R.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:R.userId,batchId:v}),l.push(Wa(this.serializer,R))});p.done()}).next(()=>l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new nt(Ce);const a=[];return t.forEach(l=>{const u=op(this.userId,l.path),d=IDBKeyRange.lowerBound(u),p=Ol(e).te({range:d},(g,y,v)=>{const[w,R,L]=g,B=rr(R);w===this.userId&&l.path.isEqual(B)?i=i.add(L):v.done()});a.push(p)}),F.waitFor(a).next(()=>this.Zn(e,i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1,l=op(this.userId,i),u=IDBKeyRange.lowerBound(l);let d=new nt(Ce);return Ol(e).te({range:u},(p,g,y)=>{const[v,w,R]=p,L=rr(w);v===this.userId&&i.isPrefixOf(L)?L.length===a&&(d=d.add(R)):y.done()}).next(()=>this.Zn(e,d))}Zn(e,t){const i=[],a=[];return t.forEach(l=>{a.push(Ds(e).get(l).next(u=>{if(u===null)throw me(35274,{batchId:l});ye(u.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:u.userId,batchId:l}),i.push(Wa(this.serializer,u))}))}),F.waitFor(a).next(()=>i)}removeMutationBatch(e,t){return NC(e.he,this.userId,t).next(i=>(e.addOnCommittedListener(()=>{this.Xn(t.batchId)}),F.forEach(i,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}Xn(e){delete this.jn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return F.resolve();const i=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),a=[];return Ol(e).te({range:i},(l,u,d)=>{if(l[0]===this.userId){const p=rr(l[1]);a.push(p)}else d.done()}).next(()=>{ye(a.length===0,56720,{er:a.map(l=>l.canonicalString())})})})}containsKey(e,t){return OC(e,this.userId,t)}tr(e){return VC(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Fs,lastStreamToken:""})}}function OC(n,e,t){const i=op(e,t.path),a=i[1],l=IDBKeyRange.lowerBound(i);let u=!1;return Ol(n).te({range:l,ee:!0},(d,p,g)=>{const[y,v,w]=d;y===e&&v===a&&(u=!0),g.done()}).next(()=>u)}function Ds(n){return Xt(n,Di)}function Ol(n){return Xt(n,tu)}function VC(n){return Xt(n,Dh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new Eo(0)}static ir(){return new Eo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.sr(e).next(t=>{const i=new Eo(t.highestTargetId);return t.highestTargetId=i.next(),this._r(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.sr(e).next(t=>Ee.fromTimestamp(new vt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.sr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,i){return this.sr(e).next(a=>(a.highestListenSequenceNumber=t,i&&(a.lastRemoteSnapshotVersion=i.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this._r(e,a)))}addTargetData(e,t){return this.ar(e,t).next(()=>this.sr(e).next(i=>(i.targetCount+=1,this.ur(t,i),this._r(e,i))))}updateTargetData(e,t){return this.ar(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Cl(e).delete(t.targetId)).next(()=>this.sr(e)).next(i=>(ye(i.targetCount>0,8065),i.targetCount-=1,this._r(e,i)))}removeTargets(e,t,i){let a=0;const l=[];return Cl(e).te((u,d)=>{const p=rh(d);p.sequenceNumber<=t&&i.get(p.targetId)===null&&(a++,l.push(this.removeTargetData(e,p)))}).next(()=>F.waitFor(l)).next(()=>a)}forEachTarget(e,t){return Cl(e).te((i,a)=>{const l=rh(a);t(l)})}sr(e){return RA(e).get(Op).next(t=>(ye(t!==null,2888),t))}_r(e,t){return RA(e).put(Op,t)}ar(e,t){return Cl(e).put(CC(this.serializer,t))}ur(e,t){let i=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,i=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,i=!0),i}getTargetCount(e){return this.sr(e).next(t=>t.targetCount)}getTargetData(e,t){const i=mo(t),a=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let l=null;return Cl(e).te({range:a,index:S1},(u,d,p)=>{const g=rh(d);nd(t,g.target)&&(l=g,p.done())}).next(()=>l)}addMatchingKeys(e,t,i){const a=[],l=Os(e);return t.forEach(u=>{const d=In(u.path);a.push(l.put({targetId:i,path:d})),a.push(this.referenceDelegate.addReference(e,i,u))}),F.waitFor(a)}removeMatchingKeys(e,t,i){const a=Os(e);return F.forEach(t,l=>{const u=In(l.path);return F.waitFor([a.delete([i,u]),this.referenceDelegate.removeReference(e,i,l)])})}removeMatchingKeysForTargetId(e,t){const i=Os(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return i.delete(a)}getMatchingKeysForTargetId(e,t){const i=IDBKeyRange.bound([t],[t+1],!1,!0),a=Os(e);let l=Pe();return a.te({range:i,ee:!0},(u,d,p)=>{const g=rr(u[1]),y=new de(g);l=l.add(y)}).next(()=>l)}containsKey(e,t){const i=In(t.path),a=IDBKeyRange.bound([i],[_1(i)],!1,!0);let l=0;return Os(e).te({index:nE,ee:!0,range:a},([u,d],p,g)=>{u!==0&&(l++,g.done())}).next(()=>l>0)}Rt(e,t){return Cl(e).get(t).next(i=>i?rh(i):null)}}function Cl(n){return Xt(n,nu)}function RA(n){return Xt(n,uo)}function Os(n){return Xt(n,iu)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="LruGarbageCollector",u6=1048576;function DA([n,e],[t,i]){const a=Ce(n,t);return a===0?Ce(e,i):a}class c6{constructor(e){this.cr=e,this.buffer=new nt(DA),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();DA(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class kC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){ie(CA,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sa(t)?ie(CA,"Ignoring IndexedDB error during garbage collection: ",t):await ra(t)}await this.Ir(3e5)})}}class h6{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return F.resolve(Fn.le);const i=new c6(t);return this.Er.forEachTarget(e,a=>i.Pr(a.sequenceNumber)).next(()=>this.Er.Ar(e,a=>i.Pr(a))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Er.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(SA)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),SA):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let i,a,l,u,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),a=this.params.maximumSequenceNumbersToCollect):a=v,u=Date.now(),this.nthSequenceNumber(e,a))).next(v=>(i=v,d=Date.now(),this.removeTargets(e,i,t))).next(v=>(l=v,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(v=>(g=Date.now(),Dl()<=Be.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${v} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:v})))}}function MC(n,e){return new h6(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d6{constructor(e,t){this.db=e,this.garbageCollector=MC(this,t)}dr(e){const t=this.Vr(e);return this.db.getTargetCache().getTargetCount(e).next(i=>t.next(a=>i+a))}Vr(e){let t=0;return this.Ar(e,i=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ar(e,t){return this.mr(e,(i,a)=>t(a))}addReference(e,t,i){return $f(e,i)}removeReference(e,t,i){return $f(e,i)}removeTargets(e,t,i){return this.db.getTargetCache().removeTargets(e,t,i)}markPotentiallyOrphaned(e,t){return $f(e,t)}gr(e,t){return function(a,l){let u=!1;return VC(a).ne(d=>OC(a,d,l).next(p=>(p&&(u=!0),F.resolve(!p)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let l=0;return this.mr(e,(u,d)=>{if(d<=t){const p=this.gr(e,u).next(g=>{if(!g)return l++,i.getEntry(e,u).next(()=>(i.removeEntry(u,Ee.min()),Os(e).delete(function(v){return[0,In(v.path)]}(u))))});a.push(p)}}).next(()=>F.waitFor(a)).next(()=>i.apply(e)).next(()=>l)}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,i)}updateLimboDocument(e,t){return $f(e,t)}mr(e,t){const i=Os(e);let a,l=Fn.le;return i.te({index:nE},([u,d],{path:p,sequenceNumber:g})=>{u===0?(l!==Fn.le&&t(new de(rr(a)),l),l=g,a=p):l=Fn.le}).next(()=>{l!==Fn.le&&t(new de(rr(a)),l)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function $f(n,e){return Os(n).put(function(i,a){return{targetId:0,path:In(i.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.changes=new Wr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?F.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,i){return Ha(e).put(i)}removeEntry(e,t,i){return Ha(e).delete(function(l,u){const d=l.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],Bp(u),d[d.length-1]]}(t,i))}updateMetadata(e,t){return this.getMetadata(e).next(i=>(i.byteSize+=t,this.pr(e,i)))}getEntry(e,t){let i=dt.newInvalidDocument(t);return Ha(e).te({index:lp,range:IDBKeyRange.only(Yc(t))},(a,l)=>{i=this.yr(t,l)}).next(()=>i)}wr(e,t){let i={size:0,document:dt.newInvalidDocument(t)};return Ha(e).te({index:lp,range:IDBKeyRange.only(Yc(t))},(a,l)=>{i={document:this.yr(t,l),size:Fp(l)}}).next(()=>i)}getEntries(e,t){let i=jn();return this.br(e,t,(a,l)=>{const u=this.yr(a,l);i=i.insert(a,u)}).next(()=>i)}Sr(e,t){let i=jn(),a=new ct(de.comparator);return this.br(e,t,(l,u)=>{const d=this.yr(l,u);i=i.insert(l,d),a=a.insert(l,Fp(u))}).next(()=>({documents:i,Dr:a}))}br(e,t,i){if(t.isEmpty())return F.resolve();let a=new nt(NA);t.forEach(p=>a=a.add(p));const l=IDBKeyRange.bound(Yc(a.first()),Yc(a.last())),u=a.getIterator();let d=u.getNext();return Ha(e).te({index:lp,range:l},(p,g,y)=>{const v=de.fromSegments([...g.prefixPath,g.collectionGroup,g.documentId]);for(;d&&NA(d,v)<0;)i(d,null),d=u.getNext();d&&d.isEqual(v)&&(i(d,g),d=u.hasNext()?u.getNext():null),d?y.H(Yc(d)):y.done()}).next(()=>{for(;d;)i(d,null),d=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,i,a,l){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),Bp(i.readTime),i.documentKey.path.isEmpty()?"":i.documentKey.path.lastSegment()],p=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ha(e).J(IDBKeyRange.bound(d,p,!0)).next(g=>{l==null||l.incrementDocumentReadCount(g.length);let y=jn();for(const v of g){const w=this.yr(de.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(rd(t,w)||a.has(w.key))&&(y=y.insert(w.key,w))}return y})}getAllFromCollectionGroup(e,t,i,a){let l=jn();const u=PA(t,i),d=PA(t,ri.max());return Ha(e).te({index:A1,range:IDBKeyRange.bound(u,d,!0)},(p,g,y)=>{const v=this.yr(de.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);l=l.insert(v.key,v),l.size===a&&y.done()}).next(()=>l)}newChangeBuffer(e){return new p6(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return xA(e).get(zy).next(t=>(ye(!!t,20021),t))}pr(e,t){return xA(e).put(zy,t)}yr(e,t){if(t){const i=JU(this.serializer,t);if(!(i.isNoDocument()&&i.version.isEqual(Ee.min())))return i}return dt.newInvalidDocument(e)}}function UC(n){return new f6(n)}class p6 extends LC{constructor(e,t){super(),this.vr=e,this.trackRemovals=t,this.Cr=new Wr(i=>i.toString(),(i,a)=>i.isEqual(a))}applyChanges(e){const t=[];let i=0,a=new nt((l,u)=>Ce(l.canonicalString(),u.canonicalString()));return this.changes.forEach((l,u)=>{const d=this.Cr.get(l);if(t.push(this.vr.removeEntry(e,l,d.readTime)),u.isValidDocument()){const p=pA(this.vr.serializer,u);a=a.add(l.path.popLast());const g=Fp(p);i+=g-d.size,t.push(this.vr.addEntry(e,l,p))}else if(i-=d.size,this.trackRemovals){const p=pA(this.vr.serializer,u.convertToNoDocument(Ee.min()));t.push(this.vr.addEntry(e,l,p))}}),a.forEach(l=>{t.push(this.vr.indexManager.addToCollectionParentIndex(e,l))}),t.push(this.vr.updateMetadata(e,i)),F.waitFor(t)}getFromCache(e,t){return this.vr.wr(e,t).next(i=>(this.Cr.set(t,{size:i.size,readTime:i.document.readTime}),i.document))}getAllFromCache(e,t){return this.vr.Sr(e,t).next(({documents:i,Dr:a})=>(a.forEach((l,u)=>{this.Cr.set(l,{size:u,readTime:i.get(l).readTime})}),i))}}function xA(n){return Xt(n,xh)}function Ha(n){return Xt(n,Np)}function Yc(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function PA(n,e){const t=e.documentKey.path.toArray();return[n,Bp(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function NA(n,e){const t=n.path.toArray(),i=e.path.toArray();let a=0;for(let l=0;l<t.length-2&&l<i.length-2;++l)if(a=Ce(t[l],i[l]),a)return a;return a=Ce(t.length,i.length),a||(a=Ce(t[t.length-2],i[i.length-2]),a||Ce(t[t.length-1],i[i.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m6{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,t,i,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(i!==null&&gh(i.mutation,a,qn.empty(),vt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Pe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Pe()){const a=sr();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,i).next(l=>{let u=nh();return l.forEach((d,p)=>{u=u.insert(d,p.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const i=sr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Pe()))}populateOverlays(e,t,i){const a=[];return i.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,i,a){let l=jn();const u=mh(),d=function(){return mh()}();return t.forEach((p,g)=>{const y=i.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Xr)?l=l.insert(g.key,g):y!==void 0?(u.set(g.key,y.mutation.getFieldMask()),gh(y.mutation,g,y.mutation.getFieldMask(),vt.now())):u.set(g.key,qn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,y)=>u.set(g,y)),t.forEach((g,y)=>{var v;return d.set(g,new m6(y,(v=u.get(g))!==null&&v!==void 0?v:null))}),d))}recalculateAndSaveOverlays(e,t){const i=mh();let a=new ct((u,d)=>u-d),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let y=i.get(p)||qn.empty();y=d.applyToLocalView(g,y),i.set(p,y);const v=(a.get(d.batchId)||Pe()).add(p);a=a.insert(d.batchId,v)})}).next(()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,v=nC();y.forEach(w=>{if(!l.has(w)){const R=uC(t.get(w),i.get(w));R!==null&&v.set(w,R),l=l.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,g,v))}return F.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,a){return function(u){return de.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):uE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,a):this.getDocumentsMatchingCollectionQuery(e,t,i,a)}getNextDocuments(e,t,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,a).next(l=>{const u=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,a-l.size):F.resolve(sr());let d=eu,p=l;return u.next(g=>F.forEach(g,(y,v)=>(d<v.largestBatchId&&(d=v.largestBatchId),l.get(y)?F.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{p=p.insert(y,w)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Pe())).next(y=>({batchId:d,changes:tC(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next(i=>{let a=nh();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,i,a){const l=t.collectionGroup;let u=nh();return this.indexManager.getCollectionParents(e,l).next(d=>F.forEach(d,p=>{const g=function(v,w){return new Yr(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next(y=>{y.forEach((v,w)=>{u=u.insert(v,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,a))).next(u=>{l.forEach((p,g)=>{const y=g.getKey();u.get(y)===null&&(u=u.insert(y,dt.newInvalidDocument(y)))});let d=nh();return u.forEach((p,g)=>{const y=l.get(p);y!==void 0&&gh(y.mutation,g,qn.empty(),vt.now()),rd(t,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g6{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return F.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Mt(a.createTime)}}(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(a){return{name:a.name,query:yE(a.bundledQuery),readTime:Mt(a.readTime)}}(t)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _6{constructor(){this.overlays=new ct(de.comparator),this.Or=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const i=sr();return F.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((a,l)=>{this.St(e,t,l)}),F.resolve()}removeOverlaysForBatchId(e,t,i){const a=this.Or.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Or.delete(i)),F.resolve()}getOverlaysForCollection(e,t,i){const a=sr(),l=t.length+1,u=new de(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return F.resolve(a)}getOverlaysForCollectionGroup(e,t,i,a){let l=new ct((g,y)=>g-y);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>i){let y=l.get(g.largestBatchId);y===null&&(y=sr(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=sr(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=a)););return F.resolve(d)}St(e,t,i){const a=this.overlays.get(i.key);if(a!==null){const u=this.Or.get(a.largestBatchId).delete(i.key);this.Or.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new mE(t,i));let l=this.Or.get(t);l===void 0&&(l=Pe(),this.Or.set(t,l)),this.Or.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(){this.Nr=new nt(sn.Br),this.Lr=new nt(sn.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const i=new sn(e,t);this.Nr=this.Nr.add(i),this.Lr=this.Lr.add(i)}qr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Qr(new sn(e,t))}$r(e,t){e.forEach(i=>this.removeReference(i,t))}Ur(e){const t=new de(new ze([])),i=new sn(t,e),a=new sn(t,e+1),l=[];return this.Lr.forEachInRange([i,a],u=>{this.Qr(u),l.push(u.key)}),l}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new de(new ze([])),i=new sn(t,e),a=new sn(t,e+1);let l=Pe();return this.Lr.forEachInRange([i,a],u=>{l=l.add(u.key)}),l}containsKey(e){const t=new sn(e,0),i=this.Nr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class sn{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return de.comparator(e.key,t.key)||Ce(e.Gr,t.Gr)}static kr(e,t){return Ce(e.Gr,t.Gr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v6{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new nt(sn.Br)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,a){const l=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new fE(l,t,i,a);this.mutationQueue.push(u);for(const d of a)this.zr=this.zr.add(new sn(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return F.resolve(u)}lookupMutationBatch(e,t){return F.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=this.Hr(i),l=a<0?0:a;return F.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Fs:this.Jn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new sn(t,0),a=new sn(t,Number.POSITIVE_INFINITY),l=[];return this.zr.forEachInRange([i,a],u=>{const d=this.jr(u.Gr);l.push(d)}),F.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new nt(Ce);return t.forEach(a=>{const l=new sn(a,0),u=new sn(a,Number.POSITIVE_INFINITY);this.zr.forEachInRange([l,u],d=>{i=i.add(d.Gr)})}),F.resolve(this.Jr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1;let l=i;de.isDocumentKey(l)||(l=l.child(""));const u=new sn(new de(l),0);let d=new nt(Ce);return this.zr.forEachWhile(p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Gr)),!0)},u),F.resolve(this.Jr(d))}Jr(e){const t=[];return e.forEach(i=>{const a=this.jr(i);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ye(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.zr;return F.forEach(t.mutations,a=>{const l=new sn(a.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.zr=i})}Xn(e){}containsKey(e,t){const i=new sn(t,0),a=this.zr.firstAfterOrEqual(i);return F.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E6{constructor(e){this.Zr=e,this.docs=function(){return new ct(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,a=this.docs.get(i),l=a?a.size:0,u=this.Zr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return F.resolve(i?i.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let i=jn();return t.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():dt.newInvalidDocument(a))}),F.resolve(i)}getDocumentsMatchingQuery(e,t,i,a){let l=jn();const u=t.path,d=new de(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||eE(v1(y),i)<=0||(a.has(y.key)||rd(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return F.resolve(l)}getAllFromCollectionGroup(e,t,i,a){me(9500)}Xr(e,t){return F.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new T6(this)}getSize(e){return F.resolve(this.size)}}class T6 extends LC{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?t.push(this.vr.addEntry(e,a)):this.vr.removeEntry(i)}),F.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w6{constructor(e){this.persistence=e,this.ei=new Wr(t=>mo(t),nd),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.ti=0,this.ni=new TE,this.targetCount=0,this.ri=Eo.rr()}forEachTarget(e,t){return this.ei.forEach((i,a)=>t(a)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ti&&(this.ti=t),F.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new Eo(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.ar(t),F.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,i){let a=0;const l=[];return this.ei.forEach((u,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.ei.delete(u),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),F.waitFor(l).next(()=>a)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const i=this.ei.get(t)||null;return F.resolve(i)}addMatchingKeys(e,t,i){return this.ni.qr(t,i),F.resolve()}removeMatchingKeys(e,t,i){this.ni.$r(t,i);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(u=>{l.push(a.markPotentiallyOrphaned(e,u))}),F.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),F.resolve()}getMatchingKeysForTargetId(e,t){const i=this.ni.Wr(t);return F.resolve(i)}containsKey(e,t){return F.resolve(this.ni.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,t){this.ii={},this.overlays={},this.si=new Fn(0),this.oi=!1,this.oi=!0,this._i=new y6,this.referenceDelegate=e(this),this.ai=new w6(this),this.indexManager=new a6,this.remoteDocumentCache=function(a){return new E6(a)}(i=>this.referenceDelegate.ui(i)),this.serializer=new RC(t),this.ci=new g6(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _6,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ii[e.toKey()];return i||(i=new v6(t,this.referenceDelegate),this.ii[e.toKey()]=i),i}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,i){ie("MemoryPersistence","Starting transaction:",e);const a=new b6(this.si.next());return this.referenceDelegate.li(),i(a).next(l=>this.referenceDelegate.hi(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Pi(e,t){return F.or(Object.values(this.ii).map(i=>()=>i.containsKey(e,t)))}}class b6 extends T1{constructor(e){super(),this.currentSequenceNumber=e}}class Sm{constructor(e){this.persistence=e,this.Ti=new TE,this.Ii=null}static Ei(e){return new Sm(e)}get di(){if(this.Ii)return this.Ii;throw me(60996)}addReference(e,t,i){return this.Ti.addReference(i,t),this.di.delete(i.toString()),F.resolve()}removeReference(e,t,i){return this.Ti.removeReference(i,t),this.di.add(i.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),F.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(a=>this.di.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.di.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,i=>{const a=de.fromPath(i);return this.Ai(e,a).next(l=>{l||t.removeEntry(a,Ee.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return F.or([()=>F.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class qp{constructor(e,t){this.persistence=e,this.Ri=new Wr(i=>In(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=MC(this,t)}static Ei(e,t){return new qp(e,t)}li(){}hi(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(a=>i+a))}Vr(e){let t=0;return this.Ar(e,i=>{t++}).next(()=>t)}Ar(e,t){return F.forEach(this.Ri,(i,a)=>this.gr(e,i,a).next(l=>l?F.resolve():t(a)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.Xr(e,u=>this.gr(e,u,t).next(d=>{d||(i++,l.removeEntry(u,Ee.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.Ri.set(i,e.currentSequenceNumber),F.resolve()}removeReference(e,t,i){return this.Ri.set(i,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),F.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=cp(e.data.value)),t}gr(e,t,i){return F.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.Ri.get(t);return F.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I6{constructor(e){this.serializer=e}q(e,t,i,a){const l=new mm("createOrUpgrade",t);i<1&&a>=1&&(function(p){p.createObjectStore(td)}(e),function(p){p.createObjectStore(Dh,{keyPath:zL}),p.createObjectStore(Di,{keyPath:GI,autoIncrement:!0}).createIndex(no,HI,{unique:!0}),p.createObjectStore(tu)}(e),OA(e),function(p){p.createObjectStore(Qa)}(e));let u=F.resolve();return i<3&&a>=3&&(i!==0&&(function(p){p.deleteObjectStore(iu),p.deleteObjectStore(nu),p.deleteObjectStore(uo)}(e),OA(e)),u=u.next(()=>function(p){const g=p.store(uo),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ee.min().toTimestamp(),targetCount:0};return g.put(Op,y)}(l))),i<4&&a>=4&&(i!==0&&(u=u.next(()=>function(p,g){return g.store(Di).J().next(v=>{p.deleteObjectStore(Di),p.createObjectStore(Di,{keyPath:GI,autoIncrement:!0}).createIndex(no,HI,{unique:!0});const w=g.store(Di),R=v.map(L=>w.put(L));return F.waitFor(R)})}(e,l))),u=u.next(()=>{(function(p){p.createObjectStore(ru,{keyPath:YL})})(e)})),i<5&&a>=5&&(u=u.next(()=>this.Vi(l))),i<6&&a>=6&&(u=u.next(()=>(function(p){p.createObjectStore(xh)}(e),this.mi(l)))),i<7&&a>=7&&(u=u.next(()=>this.fi(l))),i<8&&a>=8&&(u=u.next(()=>this.gi(e,l))),i<9&&a>=9&&(u=u.next(()=>{(function(p){p.objectStoreNames.contains("remoteDocumentChanges")&&p.deleteObjectStore("remoteDocumentChanges")})(e)})),i<10&&a>=10&&(u=u.next(()=>this.pi(l))),i<11&&a>=11&&(u=u.next(()=>{(function(p){p.createObjectStore(gm,{keyPath:WL})})(e),function(p){p.createObjectStore(_m,{keyPath:XL})}(e)})),i<12&&a>=12&&(u=u.next(()=>{(function(p){const g=p.createObjectStore(ym,{keyPath:rU});g.createIndex(qy,sU,{unique:!1}),g.createIndex(D1,aU,{unique:!1})})(e)})),i<13&&a>=13&&(u=u.next(()=>function(p){const g=p.createObjectStore(Np,{keyPath:qL});g.createIndex(lp,jL),g.createIndex(A1,GL)}(e)).next(()=>this.yi(e,l)).next(()=>e.deleteObjectStore(Qa))),i<14&&a>=14&&(u=u.next(()=>this.wi(e,l))),i<15&&a>=15&&(u=u.next(()=>function(p){p.createObjectStore(iE,{keyPath:JL,autoIncrement:!0}).createIndex(Fy,ZL,{unique:!1}),p.createObjectStore(Vp,{keyPath:eU}).createIndex(R1,tU,{unique:!1}),p.createObjectStore(kp,{keyPath:nU}).createIndex(C1,iU,{unique:!1})}(e))),i<16&&a>=16&&(u=u.next(()=>{t.objectStore(Vp).clear()}).next(()=>{t.objectStore(kp).clear()})),i<17&&a>=17&&(u=u.next(()=>{(function(p){p.createObjectStore(rE,{keyPath:oU})})(e)})),u}mi(e){let t=0;return e.store(Qa).te((i,a)=>{t+=Fp(a)}).next(()=>{const i={byteSize:t};return e.store(xh).put(zy,i)})}Vi(e){const t=e.store(Dh),i=e.store(Di);return t.J().next(a=>F.forEach(a,l=>{const u=IDBKeyRange.bound([l.userId,Fs],[l.userId,l.lastAcknowledgedBatchId]);return i.J(no,u).next(d=>F.forEach(d,p=>{ye(p.userId===l.userId,18650,"Cannot process batch from unexpected user",{batchId:p.batchId});const g=Wa(this.serializer,p);return NC(e,l.userId,g).next(()=>{})}))}))}fi(e){const t=e.store(iu),i=e.store(Qa);return e.store(uo).get(Op).next(a=>{const l=[];return i.te((u,d)=>{const p=new ze(u),g=function(v){return[0,In(v)]}(p);l.push(t.get(g).next(y=>y?F.resolve():(v=>t.put({targetId:0,path:In(v),sequenceNumber:a.highestListenSequenceNumber}))(p)))}).next(()=>F.waitFor(l))})}gi(e,t){e.createObjectStore(Ph,{keyPath:QL});const i=t.store(Ph),a=new EE,l=u=>{if(a.add(u)){const d=u.lastSegment(),p=u.popLast();return i.put({collectionId:d,parent:In(p)})}};return t.store(Qa).te({ee:!0},(u,d)=>{const p=new ze(u);return l(p.popLast())}).next(()=>t.store(tu).te({ee:!0},([u,d,p],g)=>{const y=rr(d);return l(y.popLast())}))}pi(e){const t=e.store(nu);return t.te((i,a)=>{const l=rh(a),u=CC(this.serializer,l);return t.put(u)})}yi(e,t){const i=t.store(Qa),a=[];return i.te((l,u)=>{const d=t.store(Np),p=function(v){return v.document?new de(ze.fromString(v.document.name).popFirst(5)):v.noDocument?de.fromSegments(v.noDocument.path):v.unknownDocument?de.fromSegments(v.unknownDocument.path):me(36783)}(u).path.toArray(),g={prefixPath:p.slice(0,p.length-2),collectionGroup:p[p.length-2],documentId:p[p.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};a.push(d.put(g))}).next(()=>F.waitFor(a))}wi(e,t){const i=t.store(Di),a=UC(this.serializer),l=new wE(Sm.Ei,this.serializer.wt);return i.J().next(u=>{const d=new Map;return u.forEach(p=>{var g;let y=(g=d.get(p.userId))!==null&&g!==void 0?g:Pe();Wa(this.serializer,p).keys().forEach(v=>y=y.add(v)),d.set(p.userId,y)}),F.forEach(d,(p,g)=>{const y=new on(g),v=Im.bt(this.serializer,y),w=l.getIndexManager(y),R=Am.bt(y,this.serializer,w,l.referenceDelegate);return new BC(a,R,v,w).recalculateAndSaveOverlaysForDocumentKeys(new jy(t,Fn.le),p).next()})})}}function OA(n){n.createObjectStore(iu,{keyPath:$L}).createIndex(nE,KL,{unique:!0}),n.createObjectStore(nu,{keyPath:"targetId"}).createIndex(S1,HL,{unique:!0}),n.createObjectStore(uo)}const xs="IndexedDbPersistence",cy=18e5,hy=5e3,dy="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",zC="main";class bE{constructor(e,t,i,a,l,u,d,p,g,y,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=i,this.bi=l,this.window=u,this.document=d,this.Si=g,this.Di=y,this.Ci=v,this.si=null,this.oi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Fi=null,this.inForeground=!1,this.Mi=null,this.xi=null,this.Oi=Number.NEGATIVE_INFINITY,this.Ni=w=>Promise.resolve(),!bE.C())throw new ne($.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new d6(this,a),this.Bi=t+zC,this.serializer=new RC(p),this.Li=new ar(this.Bi,this.Ci,new I6(this.serializer)),this._i=new e6,this.ai=new l6(this.referenceDelegate,this.serializer),this.remoteDocumentCache=UC(this.serializer),this.ci=new ZU,this.window&&this.window.localStorage?this.ki=this.window.localStorage:(this.ki=null,y===!1&&kt(xs,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.qi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ne($.FAILED_PRECONDITION,dy);return this.Qi(),this.$i(),this.Ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ai.getHighestSequenceNumber(e))}).then(e=>{this.si=new Fn(e,this.Si)}).then(()=>{this.oi=!0}).catch(e=>(this.Li&&this.Li.close(),Promise.reject(e)))}Ki(e){return this.Ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Li.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.bi.enqueueAndForget(async()=>{this.started&&await this.qi()}))}qi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Kf(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Wi(e).next(t=>{t||(this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)))})}).next(()=>this.Gi(e)).next(t=>this.isPrimary&&!t?this.zi(e).next(()=>!1):!!t&&this.ji(e).next(()=>!0))).catch(e=>{if(sa(e))return ie(xs,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ie(xs,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.bi.enqueueRetryable(()=>this.Ni(e)),this.isPrimary=e})}Wi(e){return Wc(e).get(bl).next(t=>F.resolve(this.Hi(t)))}Ji(e){return Kf(e).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.Zi(this.Oi,cy)){this.Oi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const i=Xt(t,ru);return i.J().next(a=>{const l=this.Xi(a,cy),u=a.filter(d=>l.indexOf(d)===-1);return F.forEach(u,d=>i.delete(d.clientId)).next(()=>u)})}).catch(()=>[]);if(this.ki)for(const t of e)this.ki.removeItem(this.es(t.clientId))}}Ui(){this.xi=this.bi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.qi().then(()=>this.Yi()).then(()=>this.Ui()))}Hi(e){return!!e&&e.ownerId===this.clientId}Gi(e){return this.Di?F.resolve(!0):Wc(e).get(bl).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,hy)&&!this.ts(t.ownerId)){if(this.Hi(t)&&this.networkEnabled)return!0;if(!this.Hi(t)){if(!t.allowTabSynchronization)throw new ne($.FAILED_PRECONDITION,dy);return!1}}return!(!this.networkEnabled||!this.inForeground)||Kf(e).J().next(i=>this.Xi(i,hy).find(a=>{if(this.clientId!==a.clientId){const l=!this.networkEnabled&&a.networkEnabled,u=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(l||u&&d)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&ie(xs,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.oi=!1,this.ns(),this.xi&&(this.xi.cancel(),this.xi=null),this.rs(),this.ss(),await this.Li.runTransaction("shutdown","readwrite",[td,ru],e=>{const t=new jy(e,Fn.le);return this.zi(t).next(()=>this.Ji(t))}),this.Li.close(),this._s()}Xi(e,t){return e.filter(i=>this.Zi(i.updateTimeMs,t)&&!this.ts(i.clientId))}us(){return this.runTransaction("getActiveClients","readonly",e=>Kf(e).J().next(t=>this.Xi(t,cy).map(i=>i.clientId)))}get started(){return this.oi}getGlobalsCache(){return this._i}getMutationQueue(e,t){return Am.bt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new o6(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return Im.bt(this.serializer,e)}getBundleCache(){return this.ci}runTransaction(e,t,i){ie(xs,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",l=function(p){return p===17?cU:p===16?uU:p===15?sE:p===14?N1:p===13?P1:p===12?lU:p===11?x1:void me(60245)}(this.Ci);let u;return this.Li.runTransaction(e,a,l,d=>(u=new jy(d,this.si?this.si.next():Fn.le),t==="readwrite-primary"?this.Wi(u).next(p=>!!p||this.Gi(u)).next(p=>{if(!p)throw kt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)),new ne($.FAILED_PRECONDITION,E1);return i(u)}).next(p=>this.ji(u).next(()=>p)):this.cs(u).next(()=>i(u)))).then(d=>(u.raiseOnCommittedEvent(),d))}cs(e){return Wc(e).get(bl).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,hy)&&!this.ts(t.ownerId)&&!this.Hi(t)&&!(this.Di||this.allowTabSynchronization&&t.allowTabSynchronization))throw new ne($.FAILED_PRECONDITION,dy)})}ji(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Wc(e).put(bl,t)}static C(){return ar.C()}zi(e){const t=Wc(e);return t.get(bl).next(i=>this.Hi(i)?(ie(xs,"Releasing primary lease."),t.delete(bl)):F.resolve())}Zi(e,t){const i=Date.now();return!(e<i-t)&&(!(e>i)||(kt(`Detected an update time that is in the future: ${e} > ${i}`),!1))}Qi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Mi=()=>{this.bi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.qi()))},this.document.addEventListener("visibilitychange",this.Mi),this.inForeground=this.document.visibilityState==="visible")}rs(){this.Mi&&(this.document.removeEventListener("visibilitychange",this.Mi),this.Mi=null)}$i(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Fi=()=>{this.ns();const t=/(?:Version|Mobile)\/1[456]/;YS()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.bi.enterRestrictedMode(!0),this.bi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Fi))}ss(){this.Fi&&(this.window.removeEventListener("pagehide",this.Fi),this.Fi=null)}ts(e){var t;try{const i=((t=this.ki)===null||t===void 0?void 0:t.getItem(this.es(e)))!==null;return ie(xs,`Client '${e}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(i){return kt(xs,"Failed to get zombied client id.",i),!1}}ns(){if(this.ki)try{this.ki.setItem(this.es(this.clientId),String(Date.now()))}catch(e){kt("Failed to set zombie client id.",e)}}_s(){if(this.ki)try{this.ki.removeItem(this.es(this.clientId))}catch{}}es(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Wc(n){return Xt(n,td)}function Kf(n){return Xt(n,ru)}function IE(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,t,i,a){this.targetId=e,this.fromCache=t,this.ls=i,this.hs=a}static Ps(e,t){let i=Pe(),a=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new AE(e,t.fromCache,i,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A6{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return YS()?8:w1(bt())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,i,a){const l={result:null};return this.Rs(e,t).next(u=>{l.result=u}).next(()=>{if(!l.result)return this.Vs(e,t,a,i).next(u=>{l.result=u})}).next(()=>{if(l.result)return;const u=new A6;return this.fs(e,t,u).next(d=>{if(l.result=d,this.Is)return this.gs(e,t,u,d.size)})}).next(()=>l.result)}gs(e,t,i,a){return i.documentReadCount<this.Es?(Dl()<=Be.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",xl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),F.resolve()):(Dl()<=Be.DEBUG&&ie("QueryEngine","Query:",xl(t),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.ds*a?(Dl()<=Be.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",xl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(t))):F.resolve())}Rs(e,t){if(rA(t))return F.resolve(null);let i=On(t);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Up(t,null,"F"),i=On(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const u=Pe(...l);return this.As.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const g=this.ps(t,d);return this.ys(t,g,u,p.readTime)?this.Rs(e,Up(t,null,"F")):this.ws(e,g,t,p)}))})))}Vs(e,t,i,a){return rA(t)||a.isEqual(Ee.min())?F.resolve(null):this.As.getDocuments(e,i).next(l=>{const u=this.ps(t,l);return this.ys(t,u,i,a)?F.resolve(null):(Dl()<=Be.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),xl(t)),this.ws(e,u,t,y1(a,eu)).next(d=>d))})}ps(e,t){let i=new nt(Z1(e));return t.forEach((a,l)=>{rd(e,l)&&(i=i.add(l))}),i}ys(e,t,i,a){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}fs(e,t,i){return Dl()<=Be.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",xl(t)),this.As.getDocumentsMatchingQuery(e,t,ri.min(),i)}ws(e,t,i,a){return this.As.getDocumentsMatchingQuery(e,i,a).next(l=>(t.forEach(u=>{l=l.insert(u.key,u)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="LocalStore",S6=3e8;class R6{constructor(e,t,i,a){this.persistence=e,this.bs=t,this.serializer=a,this.Ss=new ct(Ce),this.Ds=new Wr(l=>mo(l),nd),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(i)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BC(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function qC(n,e,t,i){return new R6(n,e,t,i)}async function jC(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let a;return t.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,t.Fs(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const u=[],d=[];let p=Pe();for(const g of a){u.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(i,p).next(g=>({Ms:g,removedBatchIds:u,addedBatchIds:d}))})})}function C6(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=t.Cs.newChangeBuffer({trackRemovals:!0});return function(d,p,g,y){const v=g.batch,w=v.keys();let R=F.resolve();return w.forEach(L=>{R=R.next(()=>y.getEntry(p,L)).next(B=>{const V=g.docVersions.get(L);ye(V!==null,48541),B.version.compareTo(V)<0&&(v.applyToRemoteDocument(B,g),B.isValidDocument()&&(B.setReadTime(g.commitVersion),y.addEntry(B)))})}),R.next(()=>d.mutationQueue.removeMutationBatch(p,v))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Pe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,a))})}function GC(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function D6(n,e){const t=fe(n),i=e.snapshotVersion;let a=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const u=t.Cs.newChangeBuffer({trackRemovals:!0});a=t.Ss;const d=[];e.targetChanges.forEach((y,v)=>{const w=a.get(v);if(!w)return;d.push(t.ai.removeMatchingKeys(l,y.removedDocuments,v).next(()=>t.ai.addMatchingKeys(l,y.addedDocuments,v)));let R=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(v)!==null?R=R.withResumeToken(Ct.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):y.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(y.resumeToken,i)),a=a.insert(v,R),function(B,V,Z){return B.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=S6?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0}(w,R,y)&&d.push(t.ai.updateTargetData(l,R))});let p=jn(),g=Pe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(HC(l,u,e.documentUpdates).next(y=>{p=y.xs,g=y.Os})),!i.isEqual(Ee.min())){const y=t.ai.getLastRemoteSnapshotVersion(l).next(v=>t.ai.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(y)}return F.waitFor(d).next(()=>u.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.Ss=a,l))}function HC(n,e,t){let i=Pe(),a=Pe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let u=jn();return t.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Ee.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):ie(SE,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{xs:u,Os:a}})}function x6(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Fs),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function hu(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return t.ai.getTargetData(i,e).next(l=>l?(a=l,F.resolve(a)):t.ai.allocateTargetId(i).next(u=>(a=new zr(e,u,"TargetPurposeListen",i.currentSequenceNumber),t.ai.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=t.Ss.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(i.targetId,i),t.Ds.set(e,i.targetId)),i})}async function du(n,e,t){const i=fe(n),a=i.Ss.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,u=>i.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!sa(u))throw u;ie(SE,`Failed to update sequence numbers for target ${e}: ${u}`)}i.Ss=i.Ss.remove(e),i.Ds.delete(a.target)}function jp(n,e,t){const i=fe(n);let a=Ee.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",u=>function(p,g,y){const v=fe(p),w=v.Ds.get(y);return w!==void 0?F.resolve(v.Ss.get(w)):v.ai.getTargetData(g,y)}(i,u,On(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.ai.getMatchingKeysForTargetId(u,d.targetId).next(p=>{l=p})}).next(()=>i.bs.getDocumentsMatchingQuery(u,e,t?a:Ee.min(),t?l:Pe())).next(d=>(QC(i,J1(e),d),{documents:d,Ns:l})))}function $C(n,e){const t=fe(n),i=fe(t.ai),a=t.Ss.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",l=>i.Rt(l,e).next(u=>u?u.target:null))}function KC(n,e){const t=fe(n),i=t.vs.get(e)||Ee.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.Cs.getAllFromCollectionGroup(a,e,y1(i,eu),Number.MAX_SAFE_INTEGER)).then(a=>(QC(t,e,a),a))}function QC(n,e,t){let i=n.vs.get(e)||Ee.min();t.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.vs.set(e,i)}async function P6(n,e,t,i){const a=fe(n);let l=Pe(),u=jn();for(const g of t){const y=e.Bs(g.metadata.name);g.document&&(l=l.add(y));const v=e.Ls(g);v.setReadTime(e.ks(g.metadata.readTime)),u=u.insert(y,v)}const d=a.Cs.newChangeBuffer({trackRemovals:!0}),p=await hu(a,function(y){return On(Au(ze.fromString(`__bundle__/docs/${y}`)))}(i));return a.persistence.runTransaction("Apply bundle documents","readwrite",g=>HC(g,d,u).next(y=>(d.apply(g),y)).next(y=>a.ai.removeMatchingKeysForTargetId(g,p.targetId).next(()=>a.ai.addMatchingKeys(g,l,p.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(g,y.xs,y.Os)).next(()=>y.xs)))}async function N6(n,e,t=Pe()){const i=await hu(n,On(yE(e.bundledQuery))),a=fe(n);return a.persistence.runTransaction("Save named query","readwrite",l=>{const u=Mt(e.readTime);if(i.snapshotVersion.compareTo(u)>=0)return a.ci.saveNamedQuery(l,e);const d=i.withResumeToken(Ct.EMPTY_BYTE_STRING,u);return a.Ss=a.Ss.insert(d.targetId,d),a.ai.updateTargetData(l,d).next(()=>a.ai.removeMatchingKeysForTargetId(l,i.targetId)).next(()=>a.ai.addMatchingKeys(l,t,i.targetId)).next(()=>a.ci.saveNamedQuery(l,e))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="firestore_clients";function VA(n,e){return`${YC}_${n}_${e}`}const WC="firestore_mutations";function kA(n,e,t){let i=`${WC}_${n}_${t}`;return e.isAuthenticated()&&(i+=`_${e.uid}`),i}const XC="firestore_targets";function fy(n,e){return`${XC}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="SharedClientState";class Gp{constructor(e,t,i,a){this.user=e,this.batchId=t,this.state=i,this.error=a}static qs(e,t,i){const a=JSON.parse(i);let l,u=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return u&&a.error&&(u=typeof a.error.message=="string"&&typeof a.error.code=="string",u&&(l=new ne(a.error.code,a.error.message))),u?new Gp(e,t,a.state,l):(kt(Ji,`Failed to parse mutation state for ID '${t}': ${i}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class _h{constructor(e,t,i){this.targetId=e,this.state=t,this.error=i}static qs(e,t){const i=JSON.parse(t);let a,l=typeof i=="object"&&["not-current","current","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return l&&i.error&&(l=typeof i.error.message=="string"&&typeof i.error.code=="string",l&&(a=new ne(i.error.code,i.error.message))),l?new _h(e,i.state,a):(kt(Ji,`Failed to parse target state for ID '${e}': ${t}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Hp{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static qs(e,t){const i=JSON.parse(t);let a=typeof i=="object"&&i.activeTargetIds instanceof Array,l=cE();for(let u=0;a&&u<i.activeTargetIds.length;++u)a=b1(i.activeTargetIds[u]),l=l.add(i.activeTargetIds[u]);return a?new Hp(e,l):(kt(Ji,`Failed to parse client data for instance '${e}': ${t}`),null)}}class RE{constructor(e,t){this.clientId=e,this.onlineState=t}static qs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new RE(t.clientId,t.onlineState):(kt(Ji,`Failed to parse online state: ${e}`),null)}}class rv{constructor(){this.activeTargetIds=cE()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class py{constructor(e,t,i,a,l){this.window=e,this.bi=t,this.persistenceKey=i,this.Ks=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ws=this.Gs.bind(this),this.zs=new ct(Ce),this.started=!1,this.js=[];const u=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=l,this.Hs=VA(this.persistenceKey,this.Ks),this.Js=function(p){return`firestore_sequence_number_${p}`}(this.persistenceKey),this.zs=this.zs.insert(this.Ks,new rv),this.Ys=new RegExp(`^${YC}_${u}_([^_]*)$`),this.Zs=new RegExp(`^${WC}_${u}_(\\d+)(?:_(.*))?$`),this.Xs=new RegExp(`^${XC}_${u}_(\\d+)$`),this.eo=function(p){return`firestore_online_state_${p}`}(this.persistenceKey),this.no=function(p){return`firestore_bundle_loaded_v2_${p}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ws)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.us();for(const i of e){if(i===this.Ks)continue;const a=this.getItem(VA(this.persistenceKey,i));if(a){const l=Hp.qs(i,a);l&&(this.zs=this.zs.insert(l.clientId,l))}}this.ro();const t=this.storage.getItem(this.eo);if(t){const i=this.io(t);i&&this.so(i)}for(const i of this.js)this.Gs(i);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Js,JSON.stringify(e))}getAllActiveQueryTargets(){return this.oo(this.zs)}isActiveQueryTarget(e){let t=!1;return this.zs.forEach((i,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this._o(e,"pending")}updateMutationState(e,t,i){this._o(e,t,i),this.ao(e)}addLocalQueryTarget(e,t=!0){let i="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(fy(this.persistenceKey,e));if(a){const l=_h.qs(e,a);l&&(i=l.state)}}return t&&this.uo.$s(e),this.ro(),i}removeLocalQueryTarget(e){this.uo.Us(e),this.ro()}isLocalQueryTarget(e){return this.uo.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(fy(this.persistenceKey,e))}updateQueryState(e,t,i){this.co(e,t,i)}handleUserChange(e,t,i){t.forEach(a=>{this.ao(a)}),this.currentUser=e,i.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.lo(e)}notifyBundleLoaded(e){this.ho(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ws),this.removeItem(this.Hs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ie(Ji,"READ",e,t),t}setItem(e,t){ie(Ji,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){ie(Ji,"REMOVE",e),this.storage.removeItem(e)}Gs(e){const t=e;if(t.storageArea===this.storage){if(ie(Ji,"EVENT",t.key,t.newValue),t.key===this.Hs)return void kt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.bi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ys.test(t.key)){if(t.newValue==null){const i=this.Po(t.key);return this.To(i,null)}{const i=this.Io(t.key,t.newValue);if(i)return this.To(i.clientId,i)}}else if(this.Zs.test(t.key)){if(t.newValue!==null){const i=this.Eo(t.key,t.newValue);if(i)return this.Ao(i)}}else if(this.Xs.test(t.key)){if(t.newValue!==null){const i=this.Ro(t.key,t.newValue);if(i)return this.Vo(i)}}else if(t.key===this.eo){if(t.newValue!==null){const i=this.io(t.newValue);if(i)return this.so(i)}}else if(t.key===this.Js){const i=function(l){let u=Fn.le;if(l!=null)try{const d=JSON.parse(l);ye(typeof d=="number",30636,{mo:l}),u=d}catch(d){kt(Ji,"Failed to read sequence number from WebStorage",d)}return u}(t.newValue);i!==Fn.le&&this.sequenceNumberHandler(i)}else if(t.key===this.no){const i=this.fo(t.newValue);await Promise.all(i.map(a=>this.syncEngine.po(a)))}}}else this.js.push(t)})}}get uo(){return this.zs.get(this.Ks)}ro(){this.setItem(this.Hs,this.uo.Qs())}_o(e,t,i){const a=new Gp(this.currentUser,e,t,i),l=kA(this.persistenceKey,this.currentUser,e);this.setItem(l,a.Qs())}ao(e){const t=kA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}lo(e){const t={clientId:this.Ks,onlineState:e};this.storage.setItem(this.eo,JSON.stringify(t))}co(e,t,i){const a=fy(this.persistenceKey,e),l=new _h(e,t,i);this.setItem(a,l.Qs())}ho(e){const t=JSON.stringify(Array.from(e));this.setItem(this.no,t)}Po(e){const t=this.Ys.exec(e);return t?t[1]:null}Io(e,t){const i=this.Po(e);return Hp.qs(i,t)}Eo(e,t){const i=this.Zs.exec(e),a=Number(i[1]),l=i[2]!==void 0?i[2]:null;return Gp.qs(new on(l),a,t)}Ro(e,t){const i=this.Xs.exec(e),a=Number(i[1]);return _h.qs(a,t)}io(e){return RE.qs(e)}fo(e){return JSON.parse(e)}async Ao(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.yo(e.batchId,e.state,e.error);ie(Ji,`Ignoring mutation for non-active user ${e.user.uid}`)}Vo(e){return this.syncEngine.wo(e.targetId,e.state,e.error)}To(e,t){const i=t?this.zs.insert(e,t):this.zs.remove(e),a=this.oo(this.zs),l=this.oo(i),u=[],d=[];return l.forEach(p=>{a.has(p)||u.push(p)}),a.forEach(p=>{l.has(p)||d.push(p)}),this.syncEngine.bo(u,d).then(()=>{this.zs=i})}so(e){this.zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}oo(e){let t=cE();return e.forEach((i,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class JC{constructor(){this.So=new rv,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,i){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new rv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="ConnectivityMonitor";class LA{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){ie(MA,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){ie(MA,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qf=null;function sv(){return Qf===null?Qf=function(){return 268435456+Math.round(2147483648*Math.random())}():Qf++,"0x"+Qf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="RestConnection",V6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class k6{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${i}/databases/${a}`,this.qo=this.databaseId.database===Gy?`project_id=${i}`:`project_id=${i}&database_id=${a}`}Qo(e,t,i,a,l){const u=sv(),d=this.$o(e,t.toUriEncodedString());ie(my,`Sending RPC '${e}' ${u}:`,d,i);const p={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(p,a,l);const{host:g}=new URL(d),y=$h(g);return this.Ko(e,d,p,i,y).then(v=>(ie(my,`Received RPC '${e}' ${u}: `,v),v),v=>{throw cr(my,`RPC '${e}' ${u} failed with error: `,v,"url: ",d,"request:",i),v})}Wo(e,t,i,a,l,u){return this.Qo(e,t,i,a,l)}Uo(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Iu}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}$o(e,t){const i=V6[e];return`${this.Lo}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M6{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="WebChannelConnection";class L6 extends k6{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,i,a,l){const u=sv();return new Promise((d,p)=>{const g=new u1;g.setWithCredentials(!0),g.listenOnce(c1.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case sp.NO_ERROR:const v=g.getResponseJson();ie(wn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(v)),d(v);break;case sp.TIMEOUT:ie(wn,`RPC '${e}' ${u} timed out`),p(new ne($.DEADLINE_EXCEEDED,"Request time out"));break;case sp.HTTP_ERROR:const w=g.getStatus();if(ie(wn,`RPC '${e}' ${u} failed with status:`,w,"response text:",g.getResponseText()),w>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const L=R==null?void 0:R.error;if(L&&L.status&&L.message){const B=function(Z){const X=Z.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(X)>=0?X:$.UNKNOWN}(L.status);p(new ne(B,L.message))}else p(new ne($.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ne($.UNAVAILABLE,"Connection failed."));break;default:me(9055,{s_:e,streamId:u,o_:g.getLastErrorCode(),__:g.getLastError()})}}finally{ie(wn,`RPC '${e}' ${u} completed.`)}});const y=JSON.stringify(a);ie(wn,`RPC '${e}' ${u} sending request:`,a),g.send(t,"POST",y,i,15)})}a_(e,t,i){const a=sv(),l=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=f1(),d=d1(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Uo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const y=l.join("");ie(wn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const v=u.createWebChannel(y,p);let w=!1,R=!1;const L=new M6({Go:V=>{R?ie(wn,`Not sending because RPC '${e}' stream ${a} is closed:`,V):(w||(ie(wn,`Opening RPC '${e}' stream ${a} transport.`),v.open(),w=!0),ie(wn,`RPC '${e}' stream ${a} sending:`,V),v.send(V))},zo:()=>v.close()}),B=(V,Z,X)=>{V.listen(Z,Y=>{try{X(Y)}catch(oe){setTimeout(()=>{throw oe},0)}})};return B(v,th.EventType.OPEN,()=>{R||(ie(wn,`RPC '${e}' stream ${a} transport opened.`),L.t_())}),B(v,th.EventType.CLOSE,()=>{R||(R=!0,ie(wn,`RPC '${e}' stream ${a} transport closed`),L.r_())}),B(v,th.EventType.ERROR,V=>{R||(R=!0,cr(wn,`RPC '${e}' stream ${a} transport errored. Name:`,V.name,"Message:",V.message),L.r_(new ne($.UNAVAILABLE,"The operation could not be completed")))}),B(v,th.EventType.MESSAGE,V=>{var Z;if(!R){const X=V.data[0];ye(!!X,16349);const Y=X,oe=(Y==null?void 0:Y.error)||((Z=Y[0])===null||Z===void 0?void 0:Z.error);if(oe){ie(wn,`RPC '${e}' stream ${a} received error:`,oe);const se=oe.status;let ue=function(C){const N=qt[C];if(N!==void 0)return dC(N)}(se),S=oe.message;ue===void 0&&(ue=$.INTERNAL,S="Unknown error status: "+se+" with message "+oe.message),R=!0,L.r_(new ne(ue,S)),v.close()}else ie(wn,`RPC '${e}' stream ${a} received:`,X),L.i_(X)}}),B(d,h1.STAT_EVENT,V=>{V.stat===Ly.PROXY?ie(wn,`RPC '${e}' stream ${a} detected buffering proxy`):V.stat===Ly.NOPROXY&&ie(wn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{L.n_()},0),L}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(){return typeof window<"u"?window:null}function pp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(n){return new qU(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,t,i=1e3,a=1.5,l=6e4){this.bi=e,this.timerId=t,this.u_=i,this.c_=a,this.l_=l,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),i=Math.max(0,Date.now()-this.T_),a=Math.max(0,t-i);a>0&&ie("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,a,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="PersistentStream";class eD{constructor(e,t,i,a,l,u,d,p){this.bi=e,this.R_=i,this.V_=a,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new CE(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(kt(t.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.m_===t&&this.B_(i,a)},i=>{e(()=>{const a=new ne($.UNKNOWN,"Fetching auth token failed: "+i.message);return this.L_(a)})})}B_(e,t){const i=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{i(()=>this.listener.jo())}),this.stream.Jo(()=>{i(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(a=>{i(()=>this.L_(a))}),this.stream.onMessage(a=>{i(()=>++this.p_==1?this.q_(a):this.onNext(a))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return ie(UA,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(ie(UA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class U6 extends eD{constructor(e,t,i,a,l,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,a,u),this.serializer=l}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=HU(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ee.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?Ee.min():u.readTime?Mt(u.readTime):Ee.min()}(e);return this.listener.Q_(t,i)}U_(e){const t={};t.database=Zy(this.serializer),t.addTarget=function(l,u){let d;const p=u.target;if(d=Mp(p)?{documents:TC(l,p)}:{query:wC(l,p).gt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=mC(l,u.resumeToken);const g=Xy(l,u.expectedCount);g!==null&&(d.expectedCount=g)}else if(u.snapshotVersion.compareTo(Ee.min())>0){d.readTime=cu(l,u.snapshotVersion.toTimestamp());const g=Xy(l,u.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=KU(this.serializer,e);i&&(t.labels=i),this.F_(t)}K_(e){const t={};t.database=Zy(this.serializer),t.removeTarget=e,this.F_(t)}}class B6 extends eD{constructor(e,t,i,a,l,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,a,u),this.serializer=l}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=$U(e.writeResults,e.commitTime),i=Mt(e.commitTime);return this.listener.j_(i,t)}H_(){const e={};e.database=Zy(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>Lh(this.serializer,i))};this.F_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z6{}class F6 extends z6{constructor(e,t,i,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=a,this.J_=!1}Y_(){if(this.J_)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,i,a){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.Qo(e,Jy(t,i),a,l,u)).catch(l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ne($.UNKNOWN,l.toString())})}Wo(e,t,i,a,l){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Wo(e,Jy(t,i),a,u,d,l)).catch(u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ne($.UNKNOWN,u.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class q6{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(kt(t),this.ea=!1):ie("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="RemoteStore";class j6{constructor(e,t,i,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=l,this.ca.vo(u=>{i.enqueueAndForget(async()=>{oa(this)&&(ie(To,"Restarting streams for network reachability change."),await async function(p){const g=fe(p);g.aa.add(4),await Cu(g),g.la.set("Unknown"),g.aa.delete(4),await ud(g)}(this))})}),this.la=new q6(i,a)}}async function ud(n){if(oa(n))for(const e of n.ua)await e(!0)}async function Cu(n){for(const e of n.ua)await e(!1)}function Rm(n,e){const t=fe(n);t._a.has(e.targetId)||(t._a.set(e.targetId,e),PE(t)?xE(t):xu(t).b_()&&DE(t,e))}function fu(n,e){const t=fe(n),i=xu(t);t._a.delete(e),i.b_()&&tD(t,e),t._a.size===0&&(i.b_()?i.v_():oa(t)&&t.la.set("Unknown"))}function DE(n,e){if(n.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xu(n).U_(e)}function tD(n,e){n.ha.Ke(e),xu(n).K_(e)}function xE(n){n.ha=new UU({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n._a.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),xu(n).start(),n.la.ta()}function PE(n){return oa(n)&&!xu(n).w_()&&n._a.size>0}function oa(n){return fe(n).aa.size===0}function nD(n){n.ha=void 0}async function G6(n){n.la.set("Online")}async function H6(n){n._a.forEach((e,t)=>{DE(n,e)})}async function $6(n,e){nD(n),PE(n)?(n.la.ia(e),xE(n)):n.la.set("Unknown")}async function K6(n,e,t){if(n.la.set("Online"),e instanceof pC&&e.state===2&&e.cause)try{await async function(a,l){const u=l.cause;for(const d of l.targetIds)a._a.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a._a.delete(d),a.ha.removeTarget(d))}(n,e)}catch(i){ie(To,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await $p(n,i)}else if(e instanceof fp?n.ha.Xe(e):e instanceof fC?n.ha.ot(e):n.ha.nt(e),!t.isEqual(Ee.min()))try{const i=await GC(n.localStore);t.compareTo(i)>=0&&await function(l,u){const d=l.ha.It(u);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l._a.get(g);y&&l._a.set(g,y.withResumeToken(p.resumeToken,u))}}),d.targetMismatches.forEach((p,g)=>{const y=l._a.get(p);if(!y)return;l._a.set(p,y.withResumeToken(Ct.EMPTY_BYTE_STRING,y.snapshotVersion)),tD(l,p);const v=new zr(y.target,p,g,y.sequenceNumber);DE(l,v)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){ie(To,"Failed to raise snapshot:",i),await $p(n,i)}}async function $p(n,e,t){if(!sa(e))throw e;n.aa.add(1),await Cu(n),n.la.set("Offline"),t||(t=()=>GC(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ie(To,"Retrying IndexedDB access"),await t(),n.aa.delete(1),await ud(n)})}function iD(n,e){return e().catch(t=>$p(n,t,e))}async function Du(n){const e=fe(n),t=Js(e);let i=e.oa.length>0?e.oa[e.oa.length-1].batchId:Fs;for(;Q6(e);)try{const a=await x6(e.localStore,i);if(a===null){e.oa.length===0&&t.v_();break}i=a.batchId,Y6(e,a)}catch(a){await $p(e,a)}rD(e)&&sD(e)}function Q6(n){return oa(n)&&n.oa.length<10}function Y6(n,e){n.oa.push(e);const t=Js(n);t.b_()&&t.W_&&t.G_(e.mutations)}function rD(n){return oa(n)&&!Js(n).w_()&&n.oa.length>0}function sD(n){Js(n).start()}async function W6(n){Js(n).H_()}async function X6(n){const e=Js(n);for(const t of n.oa)e.G_(t.mutations)}async function J6(n,e,t){const i=n.oa.shift(),a=pE.from(i,e,t);await iD(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Du(n)}async function Z6(n,e){e&&Js(n).W_&&await async function(i,a){if(function(u){return hC(u)&&u!==$.ABORTED}(a.code)){const l=i.oa.shift();Js(i).D_(),await iD(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Du(i)}}(n,e),rD(n)&&sD(n)}async function BA(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),ie(To,"RemoteStore received new credentials");const i=oa(t);t.aa.add(3),await Cu(t),i&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await ud(t)}async function av(n,e){const t=fe(n);e?(t.aa.delete(2),await ud(t)):e||(t.aa.add(2),await Cu(t),t.la.set("Unknown"))}function xu(n){return n.Pa||(n.Pa=function(t,i,a){const l=fe(t);return l.Y_(),new U6(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{jo:G6.bind(null,n),Jo:H6.bind(null,n),Zo:$6.bind(null,n),Q_:K6.bind(null,n)}),n.ua.push(async e=>{e?(n.Pa.D_(),PE(n)?xE(n):n.la.set("Unknown")):(await n.Pa.stop(),nD(n))})),n.Pa}function Js(n){return n.Ta||(n.Ta=function(t,i,a){const l=fe(t);return l.Y_(),new B6(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{jo:()=>Promise.resolve(),Jo:W6.bind(null,n),Zo:Z6.bind(null,n),z_:X6.bind(null,n),j_:J6.bind(null,n)}),n.ua.push(async e=>{e?(n.Ta.D_(),await Du(n)):(await n.Ta.stop(),n.oa.length>0&&(ie(To,`Stopping write stream with ${n.oa.length} pending writes`),n.oa=[]))})),n.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,t,i,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,a,l){const u=Date.now()+i,d=new NE(e,t,u,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pu(n,e){if(kt("AsyncQueue",`${e}: ${n}`),sa(n))return new ne($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{static emptySet(e){return new ql(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||de.comparator(t.key,i.key):(t,i)=>de.comparator(t.key,i.key),this.keyedMap=nh(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ql)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new ql;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.Ia=new ct(de.comparator)}track(e){const t=e.doc.key,i=this.Ia.get(t);i?e.type!==0&&i.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&i.type!==1?this.Ia=this.Ia.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Ia=this.Ia.remove(t):e.type===1&&i.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):me(63341,{Vt:e,Ea:i}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,i)=>{e.push(i)}),e}}class pu{constructor(e,t,i,a,l,u,d,p,g){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,i,a,l){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new pu(e,t,ql.emptySet(t),u,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&id(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==i[a].type||!t[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class t3{constructor(){this.queries=FA(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,i){const a=fe(t),l=a.queries;a.queries=FA(),l.forEach((u,d)=>{for(const p of d.Ra)p.onError(i)})})(this,new ne($.ABORTED,"Firestore shutting down"))}}function FA(){return new Wr(n=>X1(n),id)}async function OE(n,e){const t=fe(n);let i=3;const a=e.query;let l=t.queries.get(a);l?!l.Va()&&e.ma()&&(i=2):(l=new e3,i=e.ma()?0:1);try{switch(i){case 0:l.Aa=await t.onListen(a,!0);break;case 1:l.Aa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=Pu(u,`Initialization of query '${xl(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Ra.push(e),e.ga(t.onlineState),l.Aa&&e.pa(l.Aa)&&kE(t)}async function VE(n,e){const t=fe(n),i=e.query;let a=3;const l=t.queries.get(i);if(l){const u=l.Ra.indexOf(e);u>=0&&(l.Ra.splice(u,1),l.Ra.length===0?a=e.ma()?0:1:!l.Va()&&e.ma()&&(a=2))}switch(a){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function n3(n,e){const t=fe(n);let i=!1;for(const a of e){const l=a.query,u=t.queries.get(l);if(u){for(const d of u.Ra)d.pa(a)&&(i=!0);u.Aa=a}}i&&kE(t)}function i3(n,e,t){const i=fe(n),a=i.queries.get(e);if(a)for(const l of a.Ra)l.onError(t);i.queries.delete(e)}function kE(n){n.fa.forEach(e=>{e.next()})}var ov,qA;(qA=ov||(ov={})).ya="default",qA.Cache="cache";class ME{constructor(e,t,i){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=i||{}}pa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new pu(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const i=t!=="Offline";return(!this.options.Fa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=pu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==ov.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e,t){this.Ma=e,this.byteLength=t}xa(){return"metadata"in this.Ma}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.serializer=e}Bs(e){return or(this.serializer,e)}Ls(e){return e.metadata.exists?EC(this.serializer,e.document,!1):dt.newNoDocument(this.Bs(e.metadata.name),this.ks(e.metadata.readTime))}ks(e){return Mt(e)}}class s3{constructor(e,t,i){this.Oa=e,this.localStore=t,this.serializer=i,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=aD(e)}Na(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ma.namedQuery)this.queries.push(e.Ma.namedQuery);else if(e.Ma.documentMetadata){this.documents.push({metadata:e.Ma.documentMetadata}),e.Ma.documentMetadata.exists||++t;const i=ze.fromString(e.Ma.documentMetadata.name);this.collectionGroups.add(i.get(i.length-2))}else e.Ma.document&&(this.documents[this.documents.length-1].document=e.Ma.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ba(e){const t=new Map,i=new jA(this.serializer);for(const a of e)if(a.metadata.queries){const l=i.Bs(a.metadata.name);for(const u of a.metadata.queries){const d=(t.get(u)||Pe()).add(l);t.set(u,d)}}return t}async complete(){const e=await P6(this.localStore,new jA(this.serializer),this.documents,this.Oa.id),t=this.Ba(this.documents);for(const i of this.queries)await N6(this.localStore,i,t.get(i.name));return this.progress.taskState="Success",{progress:this.progress,La:this.collectionGroups,ka:e}}}function aD(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e){this.key=e}}class lD{constructor(e){this.key=e}}class uD{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Pe(),this.mutatedKeys=Pe(),this.Ua=Z1(e),this.Ka=new ql(this.Ua)}get Wa(){return this.qa}Ga(e,t){const i=t?t.za:new zA,a=t?t.Ka:this.Ka;let l=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,v)=>{const w=a.get(y),R=rd(this.query,v)?v:null,L=!!w&&this.mutatedKeys.has(w.key),B=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;w&&R?w.data.isEqual(R.data)?L!==B&&(i.track({type:3,doc:R}),V=!0):this.ja(w,R)||(i.track({type:2,doc:R}),V=!0,(p&&this.Ua(R,p)>0||g&&this.Ua(R,g)<0)&&(d=!0)):!w&&R?(i.track({type:0,doc:R}),V=!0):w&&!R&&(i.track({type:1,doc:w}),V=!0,(p||g)&&(d=!0)),V&&(R?(u=u.add(R),l=B?l.add(y):l.delete(y)):(u=u.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),l=l.delete(y.key),i.track({type:1,doc:y})}return{Ka:u,za:i,ys:d,mutatedKeys:l}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,a){const l=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const u=e.za.da();u.sort((y,v)=>function(R,L){const B=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Vt:V})}};return B(R)-B(L)}(y.type,v.type)||this.Ua(y.doc,v.doc)),this.Ha(i),a=a!=null&&a;const d=t&&!a?this.Ja():[],p=this.$a.size===0&&this.current&&!a?1:0,g=p!==this.Qa;return this.Qa=p,u.length!==0||g?{snapshot:new pu(this.query,e.Ka,l,u,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ya:d}:{Ya:d}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new zA,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=Pe(),this.Ka.forEach(i=>{this.Za(i.key)&&(this.$a=this.$a.add(i.key))});const t=[];return e.forEach(i=>{this.$a.has(i)||t.push(new lD(i))}),this.$a.forEach(i=>{e.has(i)||t.push(new oD(i))}),t}Xa(e){this.qa=e.Ns,this.$a=Pe();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return pu.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const la="SyncEngine";class a3{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class o3{constructor(e){this.key=e,this.tu=!1}}class l3{constructor(e,t,i,a,l,u){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.nu={},this.ru=new Wr(d=>X1(d),id),this.iu=new Map,this.su=new Set,this.ou=new ct(de.comparator),this._u=new Map,this.au=new TE,this.uu={},this.cu=new Map,this.lu=Eo.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function u3(n,e,t=!0){const i=Cm(n);let a;const l=i.ru.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.eu()):a=await cD(i,e,t,!0),a}async function c3(n,e){const t=Cm(n);await cD(t,e,!0,!1)}async function cD(n,e,t,i){const a=await hu(n.localStore,On(e)),l=a.targetId,u=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await LE(n,e,l,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&Rm(n.remoteStore,a),d}async function LE(n,e,t,i,a){n.Pu=(v,w,R)=>async function(B,V,Z,X){let Y=V.view.Ga(Z);Y.ys&&(Y=await jp(B.localStore,V.query,!1).then(({documents:S})=>V.view.Ga(S,Y)));const oe=X&&X.targetChanges.get(V.targetId),se=X&&X.targetMismatches.get(V.targetId)!=null,ue=V.view.applyChanges(Y,B.isPrimaryClient,oe,se);return lv(B,V.targetId,ue.Ya),ue.snapshot}(n,v,w,R);const l=await jp(n.localStore,e,!0),u=new uD(e,l.Ns),d=u.Ga(l.documents),p=od.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",a),g=u.applyChanges(d,n.isPrimaryClient,p);lv(n,t,g.Ya);const y=new a3(e,t,u);return n.ru.set(e,y),n.iu.has(t)?n.iu.get(t).push(e):n.iu.set(t,[e]),g.snapshot}async function h3(n,e,t){const i=fe(n),a=i.ru.get(e),l=i.iu.get(a.targetId);if(l.length>1)return i.iu.set(a.targetId,l.filter(u=>!id(u,e))),void i.ru.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await du(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),t&&fu(i.remoteStore,a.targetId),mu(i,a.targetId)}).catch(ra)):(mu(i,a.targetId),await du(i.localStore,a.targetId,!0))}async function d3(n,e){const t=fe(n),i=t.ru.get(e),a=t.iu.get(i.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),fu(t.remoteStore,i.targetId))}async function f3(n,e,t){const i=FE(n);try{const a=await function(u,d){const p=fe(u),g=vt.now(),y=d.reduce((R,L)=>R.add(L.key),Pe());let v,w;return p.persistence.runTransaction("Locally write mutations","readwrite",R=>{let L=jn(),B=Pe();return p.Cs.getEntries(R,y).next(V=>{L=V,L.forEach((Z,X)=>{X.isValidDocument()||(B=B.add(Z))})}).next(()=>p.localDocuments.getOverlayedDocuments(R,L)).next(V=>{v=V;const Z=[];for(const X of d){const Y=kU(X,v.get(X.key).overlayedDocument);Y!=null&&Z.push(new Xr(X.key,Y,q1(Y.value.mapValue),yt.exists(!0)))}return p.mutationQueue.addMutationBatch(R,g,Z,d)}).next(V=>{w=V;const Z=V.applyToLocalDocumentSet(v,B);return p.documentOverlayCache.saveOverlays(R,V.batchId,Z)})}).then(()=>({batchId:w.batchId,changes:tC(v)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(u,d,p){let g=u.uu[u.currentUser.toKey()];g||(g=new ct(Ce)),g=g.insert(d,p),u.uu[u.currentUser.toKey()]=g}(i,a.batchId,t),await Jr(i,a.changes),await Du(i.remoteStore)}catch(a){const l=Pu(a,"Failed to persist write");t.reject(l)}}async function hD(n,e){const t=fe(n);try{const i=await D6(t.localStore,e);e.targetChanges.forEach((a,l)=>{const u=t._u.get(l);u&&(ye(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?u.tu=!0:a.modifiedDocuments.size>0?ye(u.tu,14607):a.removedDocuments.size>0&&(ye(u.tu,42227),u.tu=!1))}),await Jr(t,i,e)}catch(i){await ra(i)}}function GA(n,e,t){const i=fe(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const a=[];i.ru.forEach((l,u)=>{const d=u.view.ga(e);d.snapshot&&a.push(d.snapshot)}),function(u,d){const p=fe(u);p.onlineState=d;let g=!1;p.queries.forEach((y,v)=>{for(const w of v.Ra)w.ga(d)&&(g=!0)}),g&&kE(p)}(i.eventManager,e),a.length&&i.nu.Q_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function p3(n,e,t){const i=fe(n);i.sharedClientState.updateQueryState(e,"rejected",t);const a=i._u.get(e),l=a&&a.key;if(l){let u=new ct(de.comparator);u=u.insert(l,dt.newNoDocument(l,Ee.min()));const d=Pe().add(l),p=new ad(Ee.min(),new Map,new ct(Ce),u,d);await hD(i,p),i.ou=i.ou.remove(l),i._u.delete(e),zE(i)}else await du(i.localStore,e,!1).then(()=>mu(i,e,t)).catch(ra)}async function m3(n,e){const t=fe(n),i=e.batch.batchId;try{const a=await C6(t.localStore,e);BE(t,i,null),UE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Jr(t,a)}catch(a){await ra(a)}}async function g3(n,e,t){const i=fe(n);try{const a=await function(u,d){const p=fe(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next(v=>(ye(v!==null,37113),y=v.keys(),p.mutationQueue.removeMutationBatch(g,v))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>p.localDocuments.getDocuments(g,y))})}(i.localStore,e);BE(i,e,t),UE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Jr(i,a)}catch(a){await ra(a)}}async function _3(n,e){const t=fe(n);oa(t.remoteStore)||ie(la,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const i=await function(u){const d=fe(u);return d.persistence.runTransaction("Get highest unacknowledged batch id","readonly",p=>d.mutationQueue.getHighestUnacknowledgedBatchId(p))}(t.localStore);if(i===Fs)return void e.resolve();const a=t.cu.get(i)||[];a.push(e),t.cu.set(i,a)}catch(i){const a=Pu(i,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function UE(n,e){(n.cu.get(e)||[]).forEach(t=>{t.resolve()}),n.cu.delete(e)}function BE(n,e,t){const i=fe(n);let a=i.uu[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),i.uu[i.currentUser.toKey()]=a}}function mu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.iu.get(e))n.ru.delete(i),t&&n.nu.Tu(i,t);n.iu.delete(e),n.isPrimaryClient&&n.au.Ur(e).forEach(i=>{n.au.containsKey(i)||dD(n,i)})}function dD(n,e){n.su.delete(e.path.canonicalString());const t=n.ou.get(e);t!==null&&(fu(n.remoteStore,t),n.ou=n.ou.remove(e),n._u.delete(t),zE(n))}function lv(n,e,t){for(const i of t)i instanceof oD?(n.au.addReference(i.key,e),y3(n,i)):i instanceof lD?(ie(la,"Document no longer in limbo: "+i.key),n.au.removeReference(i.key,e),n.au.containsKey(i.key)||dD(n,i.key)):me(19791,{Iu:i})}function y3(n,e){const t=e.key,i=t.path.canonicalString();n.ou.get(t)||n.su.has(i)||(ie(la,"New document in limbo: "+t),n.su.add(i),zE(n))}function zE(n){for(;n.su.size>0&&n.ou.size<n.maxConcurrentLimboResolutions;){const e=n.su.values().next().value;n.su.delete(e);const t=new de(ze.fromString(e)),i=n.lu.next();n._u.set(i,new o3(t)),n.ou=n.ou.insert(t,i),Rm(n.remoteStore,new zr(On(Au(t.path)),i,"TargetPurposeLimboResolution",Fn.le))}}async function Jr(n,e,t){const i=fe(n),a=[],l=[],u=[];i.ru.isEmpty()||(i.ru.forEach((d,p)=>{u.push(i.Pu(p,e,t).then(g=>{var y;if((g||t)&&i.isPrimaryClient){const v=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;i.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(g){a.push(g);const v=AE.Ps(p.targetId,g);l.push(v)}}))}),await Promise.all(u),i.nu.Q_(a),await async function(p,g){const y=fe(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>F.forEach(g,w=>F.forEach(w.ls,R=>y.persistence.referenceDelegate.addReference(v,w.targetId,R)).next(()=>F.forEach(w.hs,R=>y.persistence.referenceDelegate.removeReference(v,w.targetId,R)))))}catch(v){if(!sa(v))throw v;ie(SE,"Failed to update sequence numbers: "+v)}for(const v of g){const w=v.targetId;if(!v.fromCache){const R=y.Ss.get(w),L=R.snapshotVersion,B=R.withLastLimboFreeSnapshotVersion(L);y.Ss=y.Ss.insert(w,B)}}}(i.localStore,l))}async function v3(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){ie(la,"User change. New user:",e.toKey());const i=await jC(t.localStore,e);t.currentUser=e,function(l,u){l.cu.forEach(d=>{d.forEach(p=>{p.reject(new ne($.CANCELLED,u))})}),l.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Jr(t,i.Ms)}}function E3(n,e){const t=fe(n),i=t._u.get(e);if(i&&i.tu)return Pe().add(i.key);{let a=Pe();const l=t.iu.get(e);if(!l)return a;for(const u of l){const d=t.ru.get(u);a=a.unionWith(d.view.Wa)}return a}}async function T3(n,e){const t=fe(n),i=await jp(t.localStore,e.query,!0),a=e.view.Xa(i);return t.isPrimaryClient&&lv(t,e.targetId,a.Ya),a}async function w3(n,e){const t=fe(n);return KC(t.localStore,e).then(i=>Jr(t,i))}async function b3(n,e,t,i){const a=fe(n),l=await function(d,p){const g=fe(d),y=fe(g.mutationQueue);return g.persistence.runTransaction("Lookup mutation documents","readonly",v=>y.Hn(v,p).next(w=>w?g.localDocuments.getDocuments(v,w):F.resolve(null)))}(a.localStore,e);l!==null?(t==="pending"?await Du(a.remoteStore):t==="acknowledged"||t==="rejected"?(BE(a,e,i||null),UE(a,e),function(d,p){fe(fe(d).mutationQueue).Xn(p)}(a.localStore,e)):me(6720,"Unknown batchState",{Eu:t}),await Jr(a,l)):ie(la,"Cannot apply mutation batch with id: "+e)}async function I3(n,e){const t=fe(n);if(Cm(t),FE(t),e===!0&&t.hu!==!0){const i=t.sharedClientState.getAllActiveQueryTargets(),a=await HA(t,i.toArray());t.hu=!0,await av(t.remoteStore,!0);for(const l of a)Rm(t.remoteStore,l)}else if(e===!1&&t.hu!==!1){const i=[];let a=Promise.resolve();t.iu.forEach((l,u)=>{t.sharedClientState.isLocalQueryTarget(u)?i.push(u):a=a.then(()=>(mu(t,u),du(t.localStore,u,!0))),fu(t.remoteStore,u)}),await a,await HA(t,i),function(u){const d=fe(u);d._u.forEach((p,g)=>{fu(d.remoteStore,g)}),d.au.Kr(),d._u=new Map,d.ou=new ct(de.comparator)}(t),t.hu=!1,await av(t.remoteStore,!1)}}async function HA(n,e,t){const i=fe(n),a=[],l=[];for(const u of e){let d;const p=i.iu.get(u);if(p&&p.length!==0){d=await hu(i.localStore,On(p[0]));for(const g of p){const y=i.ru.get(g),v=await T3(i,y);v.snapshot&&l.push(v.snapshot)}}else{const g=await $C(i.localStore,u);d=await hu(i.localStore,g),await LE(i,fD(g),u,!1,d.resumeToken)}a.push(d)}return i.nu.Q_(l),a}function fD(n){return W1(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function A3(n){return function(t){return fe(fe(t).persistence).us()}(fe(n).localStore)}async function S3(n,e,t,i){const a=fe(n);if(a.hu)return void ie(la,"Ignoring unexpected query state notification.");const l=a.iu.get(e);if(l&&l.length>0)switch(t){case"current":case"not-current":{const u=await KC(a.localStore,J1(l[0])),d=ad.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ct.EMPTY_BYTE_STRING);await Jr(a,u,d);break}case"rejected":await du(a.localStore,e,!0),mu(a,e,i);break;default:me(64155,t)}}async function R3(n,e,t){const i=Cm(n);if(i.hu){for(const a of e){if(i.iu.has(a)&&i.sharedClientState.isActiveQueryTarget(a)){ie(la,"Adding an already active target "+a);continue}const l=await $C(i.localStore,a),u=await hu(i.localStore,l);await LE(i,fD(l),u.targetId,!1,u.resumeToken),Rm(i.remoteStore,u)}for(const a of t)i.iu.has(a)&&await du(i.localStore,a,!1).then(()=>{fu(i.remoteStore,a),mu(i,a)}).catch(ra)}}function Cm(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=hD.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=E3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=p3.bind(null,e),e.nu.Q_=n3.bind(null,e.eventManager),e.nu.Tu=i3.bind(null,e.eventManager),e}function FE(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=m3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=g3.bind(null,e),e}function C3(n,e,t){const i=fe(n);(async function(l,u,d){try{const p=await u.getMetadata();if(await function(R,L){const B=fe(R),V=Mt(L.createTime);return B.persistence.runTransaction("hasNewerBundle","readonly",Z=>B.ci.getBundleMetadata(Z,L.id)).then(Z=>!!Z&&Z.createTime.compareTo(V)>=0)}(l.localStore,p))return await u.close(),d._completeWith(function(R){return{taskState:"Success",documentsLoaded:R.totalDocuments,bytesLoaded:R.totalBytes,totalDocuments:R.totalDocuments,totalBytes:R.totalBytes}}(p)),Promise.resolve(new Set);d._updateProgress(aD(p));const g=new s3(p,l.localStore,u.serializer);let y=await u.du();for(;y;){const w=await g.Na(y);w&&d._updateProgress(w),y=await u.du()}const v=await g.complete();return await Jr(l,v.ka,void 0),await function(R,L){const B=fe(R);return B.persistence.runTransaction("Save bundle","readwrite",V=>B.ci.saveBundleMetadata(V,L))}(l.localStore,p),d._completeWith(v.progress),Promise.resolve(v.La)}catch(p){return cr(la,`Loading bundle failed with ${p}`),d._failWith(p),Promise.resolve(new Set)}})(i,e,t).then(a=>{i.sharedClientState.notifyBundleLoaded(a)})}class Uh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ld(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return qC(this.persistence,new FC,e.initialUser,this.serializer)}Ru(e){return new wE(Sm.Ei,this.serializer)}Au(e){return new JC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uh.provider={build:()=>new Uh};class D3 extends Uh{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){ye(this.persistence.referenceDelegate instanceof qp,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new kC(i,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?bn.withCacheSize(this.cacheSizeBytes):bn.DEFAULT;return new wE(i=>qp.Ei(i,t),this.serializer)}}class pD extends Uh{constructor(e,t,i){super(),this.gu=e,this.cacheSizeBytes=t,this.forceOwnership=i,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.gu.initialize(this,e),await FE(this.gu.syncEngine),await Du(this.gu.remoteStore),await this.persistence.Ki(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Vu(e){return qC(this.persistence,new FC,e.initialUser,this.serializer)}mu(e,t){const i=this.persistence.referenceDelegate.garbageCollector;return new kC(i,e.asyncQueue,t)}fu(e,t){const i=new UL(t,this.persistence);return new LL(e.asyncQueue,i)}Ru(e){const t=IE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),i=this.cacheSizeBytes!==void 0?bn.withCacheSize(this.cacheSizeBytes):bn.DEFAULT;return new bE(this.synchronizeTabs,t,e.clientId,i,e.asyncQueue,ZC(),pp(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Au(e){return new JC}}class x3 extends pD{constructor(e,t){super(e,t,!1),this.gu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.gu.syncEngine;this.sharedClientState instanceof py&&(this.sharedClientState.syncEngine={yo:b3.bind(null,t),wo:S3.bind(null,t),bo:R3.bind(null,t),us:A3.bind(null,t),po:w3.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ki(async i=>{await I3(this.gu.syncEngine,i),this.gcScheduler&&(i&&!this.gcScheduler.started?this.gcScheduler.start():i||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(i&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():i||this.indexBackfillerScheduler.stop())})}Au(e){const t=ZC();if(!py.C(t))throw new ne($.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const i=IE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new py(t,e.asyncQueue,i,e.clientId,e.initialUser)}}class Bh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>GA(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=v3.bind(null,this.syncEngine),await av(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new t3}()}createDatastore(e){const t=ld(e.databaseInfo.databaseId),i=function(l){return new L6(l)}(e.databaseInfo);return function(l,u,d,p){return new F6(l,u,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,a,l,u,d){return new j6(i,a,l,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>GA(this.syncEngine,t,0),function(){return LA.C()?new LA:new O6}())}createSyncEngine(e,t){return function(a,l,u,d,p,g,y){const v=new l3(a,l,u,d,p,g);return y&&(v.hu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=fe(a);ie(To,"RemoteStore shutting down."),l.aa.add(5),await Cu(l),l.ca.shutdown(),l.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Bh.provider={build:()=>new Bh};function $A(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const i={value:n.slice(t,t+e),done:!1};return t+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):kt("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P3{constructor(e,t){this.wu=e,this.serializer=t,this.metadata=new gn,this.buffer=new Uint8Array,this.bu=function(){return new TextDecoder("utf-8")}(),this.Su().then(i=>{i&&i.xa()?this.metadata.resolve(i.Ma.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(i==null?void 0:i.Ma)}`))},i=>this.metadata.reject(i))}close(){return this.wu.cancel()}async getMetadata(){return this.metadata.promise}async du(){return await this.getMetadata(),this.Su()}async Su(){const e=await this.Du();if(e===null)return null;const t=this.bu.decode(e),i=Number(t);isNaN(i)&&this.vu(`length string (${t}) is not valid number`);const a=await this.Cu(i);return new r3(JSON.parse(a),e.length+i)}Fu(){return this.buffer.findIndex(e=>e===123)}async Du(){for(;this.Fu()<0&&!await this.Mu(););if(this.buffer.length===0)return null;const e=this.Fu();e<0&&this.vu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cu(e){for(;this.buffer.length<e;)await this.Mu()&&this.vu("Reached the end of bundle when more is expected.");const t=this.bu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}vu(e){throw this.wu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Mu(){const e=await this.wu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ne($.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,l){const u=fe(a),d={documents:l.map(v=>Mh(u.serializer,v))},p=await u.Wo("BatchGetDocuments",u.serializer.databaseId,ze.emptyPath(),d,l.length),g=new Map;p.forEach(v=>{const w=GU(u.serializer,v);g.set(w.key.toString(),w)});const y=[];return l.forEach(v=>{const w=g.get(v.toString());ye(!!w,55234,{key:v}),y.push(w)}),y}(this.datastore,e);return t.forEach(i=>this.recordVersion(i)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ru(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,i)=>{const a=de.fromPath(i);this.mutations.push(new dE(a,this.precondition(a)))}),await async function(i,a){const l=fe(i),u={writes:a.map(d=>Lh(l.serializer,d))};await l.Qo("Commit",l.serializer.databaseId,ze.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw me(50498,{xu:e.constructor.name});t=Ee.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new ne($.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ee.min())?yt.exists(!1):yt.updateTime(t):yt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ee.min()))throw new ne($.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return yt.updateTime(t)}return yt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3{constructor(e,t,i,a,l){this.asyncQueue=e,this.datastore=t,this.options=i,this.updateFunction=a,this.deferred=l,this.Ou=i.maxAttempts,this.y_=new CE(this.asyncQueue,"transaction_retry")}Nu(){this.Ou-=1,this.Bu()}Bu(){this.y_.E_(async()=>{const e=new N3(this.datastore),t=this.Lu(e);t&&t.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(a=>{this.ku(a)}))}).catch(i=>{this.ku(i)})})}Lu(e){try{const t=this.updateFunction(e);return!ed(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ku(e){this.Ou>0&&this.qu(e)?(this.Ou-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bu(),Promise.resolve()))):this.deferred.reject(e)}qu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!hC(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="FirestoreClient";class V3{constructor(e,t,i,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=a,this.user=on.UNAUTHENTICATED,this.clientId=g1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async u=>{ie(Zs,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(ie(Zs,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Pu(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function gy(n,e){n.asyncQueue.verifyOperationInProgress(),ie(Zs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async a=>{i.isEqual(a)||(await jC(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function KA(n,e){n.asyncQueue.verifyOperationInProgress();const t=await qE(n);ie(Zs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>BA(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,a)=>BA(e.remoteStore,a)),n._onlineComponents=e}async function qE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ie(Zs,"Using user provided OfflineComponentProvider");try{await gy(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===$.FAILED_PRECONDITION||a.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;cr("Error using user provided cache. Falling back to memory cache: "+t),await gy(n,new Uh)}}else ie(Zs,"Using default OfflineComponentProvider"),await gy(n,new D3(void 0));return n._offlineComponents}async function xm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ie(Zs,"Using user provided OnlineComponentProvider"),await KA(n,n._uninitializedComponentsProvider._online)):(ie(Zs,"Using default OnlineComponentProvider"),await KA(n,new Bh))),n._onlineComponents}function mD(n){return qE(n).then(e=>e.persistence)}function jE(n){return qE(n).then(e=>e.localStore)}function gD(n){return xm(n).then(e=>e.remoteStore)}function GE(n){return xm(n).then(e=>e.syncEngine)}function k3(n){return xm(n).then(e=>e.datastore)}async function gu(n){const e=await xm(n),t=e.eventManager;return t.onListen=u3.bind(null,e.syncEngine),t.onUnlisten=h3.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=c3.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=d3.bind(null,e.syncEngine),t}function M3(n){return n.asyncQueue.enqueue(async()=>{const e=await mD(n),t=await gD(n);return e.setNetworkEnabled(!0),function(a){const l=fe(a);return l.aa.delete(0),ud(l)}(t)})}function L3(n){return n.asyncQueue.enqueue(async()=>{const e=await mD(n),t=await gD(n);return e.setNetworkEnabled(!1),async function(a){const l=fe(a);l.aa.add(0),await Cu(l),l.la.set("Offline")}(t)})}function U3(n,e){const t=new gn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,l,u){try{const d=await function(g,y){const v=fe(g);return v.persistence.runTransaction("read document","readonly",w=>v.localDocuments.getDocument(w,y))}(a,l);d.isFoundDocument()?u.resolve(d):d.isNoDocument()?u.resolve(null):u.reject(new ne($.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const p=Pu(d,`Failed to get document '${l} from cache`);u.reject(p)}}(await jE(n),e,t)),t.promise}function _D(n,e,t={}){const i=new gn;return n.asyncQueue.enqueueAndForget(async()=>function(l,u,d,p,g){const y=new Dm({next:w=>{y.yu(),u.enqueueAndForget(()=>VE(l,v));const R=w.docs.has(d);!R&&w.fromCache?g.reject(new ne($.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&w.fromCache&&p&&p.source==="server"?g.reject(new ne($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),v=new ME(Au(d.path),y,{includeMetadataChanges:!0,Fa:!0});return OE(l,v)}(await gu(n),n.asyncQueue,e,t,i)),i.promise}function B3(n,e){const t=new gn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,l,u){try{const d=await jp(a,l,!0),p=new uD(l,d.Ns),g=p.Ga(d.documents),y=p.applyChanges(g,!1);u.resolve(y.snapshot)}catch(d){const p=Pu(d,`Failed to execute query '${l} against cache`);u.reject(p)}}(await jE(n),e,t)),t.promise}function yD(n,e,t={}){const i=new gn;return n.asyncQueue.enqueueAndForget(async()=>function(l,u,d,p,g){const y=new Dm({next:w=>{y.yu(),u.enqueueAndForget(()=>VE(l,v)),w.fromCache&&p.source==="server"?g.reject(new ne($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),v=new ME(d,y,{includeMetadataChanges:!0,Fa:!0});return OE(l,v)}(await gu(n),n.asyncQueue,e,t,i)),i.promise}function z3(n,e){const t=new Dm(e);return n.asyncQueue.enqueueAndForget(async()=>function(a,l){fe(a).fa.add(l),l.next()}(await gu(n),t)),()=>{t.yu(),n.asyncQueue.enqueueAndForget(async()=>function(a,l){fe(a).fa.delete(l)}(await gu(n),t))}}function F3(n,e,t,i){const a=function(u,d){let p;return p=typeof u=="string"?Zv().encode(u):u,function(y,v){return new P3(y,v)}(function(y,v){if(y instanceof Uint8Array)return $A(y,v);if(y instanceof ArrayBuffer)return $A(new Uint8Array(y),v);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(p),d)}(t,ld(e));n.asyncQueue.enqueueAndForget(async()=>{C3(await GE(n),a,i)})}function q3(n,e){return n.asyncQueue.enqueue(async()=>function(i,a){const l=fe(i);return l.persistence.runTransaction("Get named query","readonly",u=>l.ci.getNamedQuery(u,a))}(await jE(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(n,e,t){if(!t)throw new ne($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ED(n,e,t,i){if(e===!0&&i===!0)throw new ne($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function YA(n){if(!de.isDocumentKey(n))throw new ne($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function WA(n){if(de.isDocumentKey(n))throw new ne($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":me(12329,{type:typeof n})}function Qe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ne($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Pm(n);throw new ne($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function TD(n,e){if(e<=0)throw new ne($.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD="firestore.googleapis.com",XA=!0;class JA{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ne($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wD,this.ssl=XA}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:XA;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=PC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<u6)throw new ne($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ED("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vD((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cd{constructor(e,t,i,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new JA({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new JA(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new SL;switch(i.type){case"firstParty":return new xL(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ne($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,Iv("Firestore",this._settings.isUsingEmulator),this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=QA.get(t);i&&(ie("ComponentProvider","Removing Datastore"),QA.delete(t),i.terminate())}(this),Promise.resolve()}}function j3(n,e,t,i={}){var a;n=Qe(n,cd);const l=$h(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;u.host!==wD&&u.host!==p&&cr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},u),{host:p,ssl:l,emulatorOptions:i});if(!js(g,d)&&(n._setSettings(g),l&&(HS(`https://${p}`),Iv("Firestore",!0)),i.mockUserToken)){let y,v;if(typeof i.mockUserToken=="string")y=i.mockUserToken,v=on.MOCK_USER;else{y=jO(i.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new ne($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new on(w)}n._authCredentials=new RL(new m1(y,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn=class bD{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new bD(this.firestore,e,this._query)}},wt=class ID{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ID(this.firestore,e,this._key)}},qs=class AD extends Vn{constructor(e,t,i){super(e,t,Au(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new de(e))}withConverter(e){return new AD(this.firestore,e,this._path)}};function SD(n,e,...t){if(n=Ie(n),HE("collection","path",e),n instanceof cd){const i=ze.fromString(e,...t);return WA(i),new qs(n,null,i)}{if(!(n instanceof wt||n instanceof qs))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ze.fromString(e,...t));return WA(i),new qs(n.firestore,null,i)}}function G3(n,e){if(n=Qe(n,cd),HE("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new ne($.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Vn(n,null,function(i){return new Yr(ze.emptyPath(),i)}(e))}function Kp(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=g1.newId()),HE("doc","path",e),n instanceof cd){const i=ze.fromString(e,...t);return YA(i),new wt(n,null,new de(i))}{if(!(n instanceof wt||n instanceof qs))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ze.fromString(e,...t));return YA(i),new wt(n.firestore,n instanceof qs?n.converter:null,new de(i))}}function RD(n,e){return n=Ie(n),e=Ie(e),(n instanceof wt||n instanceof qs)&&(e instanceof wt||e instanceof qs)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function CD(n,e){return n=Ie(n),e=Ie(e),n instanceof Vn&&e instanceof Vn&&n.firestore===e.firestore&&id(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="AsyncQueue";class eS{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new CE(this,"async_queue_retry"),this.ju=()=>{const i=pp();i&&ie(ZA,"Visibility state changed to "+i.visibilityState),this.y_.A_()},this.Hu=e;const t=pp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=pp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new gn;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!sa(e))throw e;ie(ZA,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(i=>{throw this.Ku=i,this.Wu=!1,kt("INTERNAL UNHANDLED ERROR: ",tS(i)),i}).then(i=>(this.Wu=!1,i))));return this.Hu=t,t}enqueueAfterDelay(e,t,i){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const a=NE.createAndSchedule(this,e,t,i,l=>this.Xu(l));return this.Uu.push(a),a}Ju(){this.Ku&&me(47125,{ec:tS(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function tS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1}(n,["next","error","complete"])}class H3{constructor(){this._progressObserver={},this._taskCompletionResolver=new gn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,i){this._progressObserver={next:e,error:t,complete:i}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $3=-1;let Lt=class extends cd{constructor(e,t,i,a){super(e,t,i,a),this.type="firestore",this._queue=new eS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new eS(e),this._firestoreClient=void 0,await e}}};function An(n){if(n._terminated)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||DD(n),n._firestoreClient}function DD(n){var e,t,i;const a=n._freezeSettings(),l=function(d,p,g,y){return new fU(d,p,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,vD(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=a.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new V3(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}function K3(n,e){cr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return xD(n,Bh.provider,{build:i=>new pD(i,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function Q3(n){cr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();xD(n,Bh.provider,{build:t=>new x3(t,e.cacheSizeBytes)})}function xD(n,e,t){if((n=Qe(n,Lt))._firestoreClient||n._terminated)throw new ne($.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new ne($.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},DD(n)}function Y3(n){if(n._initialized&&!n._terminated)throw new ne($.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new gn;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(i){if(!ar.C())return Promise.resolve();const a=i+zC;await ar.delete(a)}(IE(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function W3(n){return function(t){const i=new gn;return t.asyncQueue.enqueueAndForget(async()=>_3(await GE(t),i)),i.promise}(An(n=Qe(n,Lt)))}function X3(n){return M3(An(n=Qe(n,Lt)))}function J3(n){return L3(An(n=Qe(n,Lt)))}function Z3(n,e){const t=An(n=Qe(n,Lt)),i=new H3;return F3(t,n._databaseId,e,i),i}function e9(n,e){return q3(An(n=Qe(n,Lt)),e).then(t=>t?new Vn(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dr(Ct.fromBase64String(e))}catch(t){throw new ne($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dr(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t9=/^__.*__$/;class n9{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Su(e,this.data,t,this.fieldTransforms)}}class PD{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Xr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ND(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{oc:n})}}class Om{constructor(e,t,i,a,l,u){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this._c(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Om(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ac({path:i,cc:!1});return a.lc(e),a}hc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ac({path:i,cc:!1});return a._c(),a}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return Qp(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(ND(this.oc)&&t9.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class i9{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||ld(e)}dc(e,t,i,a=!1){return new Om({oc:e,methodName:t,Ec:i,path:_t.emptyPath(),cc:!1,Ic:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function So(n){const e=n._freezeSettings(),t=ld(n._databaseId);return new i9(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Vm(n,e,t,i,a,l={}){const u=n.dc(l.merge||l.mergeFields?2:0,e,t,a);ZE("Data must be an object, but it was:",u,i);const d=kD(i,u);let p,g;if(l.merge)p=new qn(u.fieldMask),g=u.fieldTransforms;else if(l.mergeFields){const y=[];for(const v of l.mergeFields){const w=cv(e,v,t);if(!u.contains(w))throw new ne($.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);LD(y,w)||y.push(w)}p=new qn(y),g=u.fieldTransforms.filter(v=>p.covers(v.field))}else p=null,g=u.fieldTransforms;return new n9(new mn(d),p,g)}class hd extends Ao{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hd}}function OD(n,e,t){return new Om({oc:3,Ec:e.settings.Ec,methodName:n._methodName,cc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class KE extends Ao{_toFieldTransform(e){return new sd(e.path,new lu)}isEqual(e){return e instanceof KE}}class QE extends Ao{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=OD(this,e,!0),i=this.Ac.map(l=>Ro(l,t)),a=new go(i);return new sd(e.path,a)}isEqual(e){return e instanceof QE&&js(this.Ac,e.Ac)}}class YE extends Ao{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=OD(this,e,!0),i=this.Ac.map(l=>Ro(l,t)),a=new _o(i);return new sd(e.path,a)}isEqual(e){return e instanceof YE&&js(this.Ac,e.Ac)}}class WE extends Ao{constructor(e,t){super(e),this.Rc=t}_toFieldTransform(e){const t=new uu(e.serializer,rC(e.serializer,this.Rc));return new sd(e.path,t)}isEqual(e){return e instanceof WE&&this.Rc===e.Rc}}function XE(n,e,t,i){const a=n.dc(1,e,t);ZE("Data must be an object, but it was:",a,i);const l=[],u=mn.empty();aa(i,(p,g)=>{const y=eT(e,p,t);g=Ie(g);const v=a.hc(y);if(g instanceof hd)l.push(y);else{const w=Ro(g,v);w!=null&&(l.push(y),u.set(y,w))}});const d=new qn(l);return new PD(u,d,a.fieldTransforms)}function JE(n,e,t,i,a,l){const u=n.dc(1,e,t),d=[cv(e,i,t)],p=[a];if(l.length%2!=0)throw new ne($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(cv(e,l[w])),p.push(l[w+1]);const g=[],y=mn.empty();for(let w=d.length-1;w>=0;--w)if(!LD(g,d[w])){const R=d[w];let L=p[w];L=Ie(L);const B=u.hc(R);if(L instanceof hd)g.push(R);else{const V=Ro(L,B);V!=null&&(g.push(R),y.set(R,V))}}const v=new qn(g);return new PD(y,v,u.fieldTransforms)}function VD(n,e,t,i=!1){return Ro(t,n.dc(i?4:3,e))}function Ro(n,e){if(MD(n=Ie(n)))return ZE("Unsupported field value:",e,n),kD(n,e);if(n instanceof Ao)return function(i,a){if(!ND(a.oc))throw a.Tc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Tc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(i,a){const l=[];let u=0;for(const d of i){let p=Ro(d,a.Pc(u));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),u++}return{arrayValue:{values:l}}}(n,e)}return function(i,a){if((i=Ie(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return rC(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=vt.fromDate(i);return{timestampValue:cu(a.serializer,l)}}if(i instanceof vt){const l=new vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:cu(a.serializer,l)}}if(i instanceof Nm)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof dr)return{bytesValue:mC(a.serializer,i._byteString)};if(i instanceof wt){const l=a.databaseId,u=i.firestore._databaseId;if(!u.isEqual(l))throw a.Tc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:_E(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof $E)return function(u,d){return{mapValue:{fields:{[aE]:{stringValue:oE},[su]:{arrayValue:{values:u.toArray().map(g=>{if(typeof g!="number")throw d.Tc("VectorValues must only contain numeric values.");return hE(d.serializer,g)})}}}}}}(i,a);throw a.Tc(`Unsupported field value: ${Pm(i)}`)}(n,e)}function kD(n,e){const t={};return O1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):aa(n,(i,a)=>{const l=Ro(a,e.uc(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function MD(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof Nm||n instanceof dr||n instanceof wt||n instanceof Ao||n instanceof $E)}function ZE(n,e,t){if(!MD(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const i=Pm(t);throw i==="an object"?e.Tc(n+" a custom object"):e.Tc(n+" "+i)}}function cv(n,e,t){if((e=Ie(e))instanceof ea)return e._internalPath;if(typeof e=="string")return eT(n,e);throw Qp("Field path arguments must be of type string or ",n,!1,void 0,t)}const r9=new RegExp("[~\\*/\\[\\]]");function eT(n,e,t){if(e.search(r9)>=0)throw Qp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ea(...e.split("."))._internalPath}catch{throw Qp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Qp(n,e,t,i,a){const l=i&&!i.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||u)&&(p+=" (found",l&&(p+=` in field ${i}`),u&&(p+=` in document ${a}`),p+=")"),new ne($.INVALID_ARGUMENT,d+n+p)}function LD(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,t,i,a,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s9(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(km("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class s9 extends zh{data(){return super.data()}}function km(n,e){return typeof e=="string"?eT(n,e):e instanceof ea?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ne($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tT{}class dd extends tT{}function Ps(n,e,...t){let i=[];e instanceof tT&&i.push(e),i=i.concat(t),function(l){const u=l.filter(p=>p instanceof nT).length,d=l.filter(p=>p instanceof Mm).length;if(u>1||u>0&&d>0)throw new ne($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const a of i)n=a._apply(n);return n}class Mm extends dd{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Mm(e,t,i)}_apply(e){const t=this._parse(e);return zD(e._query,t),new Vn(e.firestore,e.converter,Wy(e._query,t))}_parse(e){const t=So(e.firestore);return function(l,u,d,p,g,y,v){let w;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ne($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){iS(v,y);const L=[];for(const B of v)L.push(nS(p,l,B));w={arrayValue:{values:L}}}else w=nS(p,l,v)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||iS(v,y),w=VD(d,u,v,y==="in"||y==="not-in");return Fe.create(g,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function a9(n,e,t){const i=e,a=km("where",n);return Mm._create(a,i,t)}class nT extends tT{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new nT(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,l){let u=a;const d=l.getFlattenedFilters();for(const p of d)zD(u,p),u=Wy(u,p)}(e._query,t),new Vn(e.firestore,e.converter,Wy(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class iT extends dd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new iT(e,t)}_apply(e){const t=function(a,l,u){if(a.startAt!==null)throw new ne($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ne($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new kh(l,u)}(e._query,this._field,this._direction);return new Vn(e.firestore,e.converter,function(a,l){const u=a.explicitOrderBy.concat([l]);return new Yr(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function o9(n,e="asc"){const t=e,i=km("orderBy",n);return iT._create(i,t)}class Lm extends dd{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new Lm(e,t,i)}_apply(e){return new Vn(e.firestore,e.converter,Up(e._query,this._limit,this._limitType))}}function l9(n){return TD("limit",n),Lm._create("limit",n,"F")}function u9(n){return TD("limitToLast",n),Lm._create("limitToLast",n,"L")}class Um extends dd{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new Um(e,t,i)}_apply(e){const t=BD(e,this.type,this._docOrFields,this._inclusive);return new Vn(e.firestore,e.converter,function(a,l){return new Yr(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,l,a.endAt)}(e._query,t))}}function c9(...n){return Um._create("startAt",n,!0)}function h9(...n){return Um._create("startAfter",n,!1)}class Bm extends dd{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new Bm(e,t,i)}_apply(e){const t=BD(e,this.type,this._docOrFields,this._inclusive);return new Vn(e.firestore,e.converter,function(a,l){return new Yr(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,l)}(e._query,t))}}function d9(...n){return Bm._create("endBefore",n,!1)}function f9(...n){return Bm._create("endAt",n,!0)}function BD(n,e,t,i){if(t[0]=Ie(t[0]),t[0]instanceof zh)return function(l,u,d,p,g){if(!p)throw new ne($.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const y=[];for(const v of Fl(l))if(v.field.isKeyField())y.push(po(u,p.key));else{const w=p.data.field(v.field);if(vm(w))throw new ne($.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const R=v.field.canonicalString();throw new ne($.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${R}' (used as the orderBy) does not exist.`)}y.push(w)}return new Xs(y,g)}(n._query,n.firestore._databaseId,e,t[0]._document,i);{const a=So(n.firestore);return function(u,d,p,g,y,v){const w=u.explicitOrderBy;if(y.length>w.length)throw new ne($.INVALID_ARGUMENT,`Too many arguments provided to ${g}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const R=[];for(let L=0;L<y.length;L++){const B=y[L];if(w[L].field.isKeyField()){if(typeof B!="string")throw new ne($.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${g}(), but got a ${typeof B}`);if(!uE(u)&&B.indexOf("/")!==-1)throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${g}() must be a plain document ID, but '${B}' contains a slash.`);const V=u.path.child(ze.fromString(B));if(!de.isDocumentKey(V))throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${g}() must result in a valid document path, but '${V}' is not because it contains an odd number of segments.`);const Z=new de(V);R.push(po(d,Z))}else{const V=VD(p,g,B);R.push(V)}}return new Xs(R,v)}(n._query,n.firestore._databaseId,a,e,t,i)}}function nS(n,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new ne($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uE(e)&&t.indexOf("/")!==-1)throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(ze.fromString(t));if(!de.isDocumentKey(i))throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return po(n,new de(i))}if(t instanceof wt)return po(n,t._key);throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pm(t)}.`)}function iS(n,e){if(!Array.isArray(n)||n.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zD(n,e){const t=function(a,l){for(const u of a)for(const d of u.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ne($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class rT{convertValue(e,t="none"){switch(Ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return aa(e,(a,l)=>{i[a]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,a;const l=(a=(i=(t=e.fields)===null||t===void 0?void 0:t[su].arrayValue)===null||i===void 0?void 0:i.values)===null||a===void 0?void 0:a.map(u=>mt(u.doubleValue));return new $E(l)}convertGeoPoint(e){return new Nm(mt(e.latitude),mt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Em(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Nh(e));default:return null}}convertTimestamp(e){const t=Gr(e);return new vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ze.fromString(e);ye(SC(i),9688,{name:e});const a=new Qs(i.get(1),i.get(3)),l=new de(i.popFirst(5));return a.isEqual(t)||kt(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class p9 extends rT{constructor(e){super(),this.firestore=e}convertBytes(e){return new dr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let $r=class extends zh{constructor(e,t,i,a,l,u){super(e,t,i,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(km("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}},yh=class extends $r{data(e={}){return super.data(e)}},ta=class{constructor(e,t,i,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new io(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new yh(this._firestore,this._userDataWriter,i.key,i,new io(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(d=>{const p=new yh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new io(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new yh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new io(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:m9(d.type),doc:p,oldIndex:g,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function m9(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:n})}}function FD(n,e){return n instanceof $r&&e instanceof $r?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ta&&e instanceof ta&&n._firestore===e._firestore&&CD(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g9(n){n=Qe(n,wt);const e=Qe(n.firestore,Lt);return _D(An(e),n._key).then(t=>sT(e,n,t))}class Co extends rT{constructor(e){super(),this.firestore=e}convertBytes(e){return new dr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,t)}}function _9(n){n=Qe(n,wt);const e=Qe(n.firestore,Lt),t=An(e),i=new Co(e);return U3(t,n._key).then(a=>new $r(e,i,n._key,a,new io(a!==null&&a.hasLocalMutations,!0),n.converter))}function y9(n){n=Qe(n,wt);const e=Qe(n.firestore,Lt);return _D(An(e),n._key,{source:"server"}).then(t=>sT(e,n,t))}function v9(n){n=Qe(n,Vn);const e=Qe(n.firestore,Lt),t=An(e),i=new Co(e);return UD(n._query),yD(t,n._query).then(a=>new ta(e,i,n,a))}function E9(n){n=Qe(n,Vn);const e=Qe(n.firestore,Lt),t=An(e),i=new Co(e);return B3(t,n._query).then(a=>new ta(e,i,n,a))}function T9(n){n=Qe(n,Vn);const e=Qe(n.firestore,Lt),t=An(e),i=new Co(e);return yD(t,n._query,{source:"server"}).then(a=>new ta(e,i,n,a))}function rS(n,e,t){n=Qe(n,wt);const i=Qe(n.firestore,Lt),a=zm(n.converter,e,t);return fd(i,[Vm(So(i),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,yt.none())])}function sS(n,e,t,...i){n=Qe(n,wt);const a=Qe(n.firestore,Lt),l=So(a);let u;return u=typeof(e=Ie(e))=="string"||e instanceof ea?JE(l,"updateDoc",n._key,e,t,i):XE(l,"updateDoc",n._key,e),fd(a,[u.toMutation(n._key,yt.exists(!0))])}function w9(n){return fd(Qe(n.firestore,Lt),[new Ru(n._key,yt.none())])}function b9(n,e){const t=Qe(n.firestore,Lt),i=Kp(n),a=zm(n.converter,e);return fd(t,[Vm(So(n.firestore),"addDoc",i._key,a,n.converter!==null,{}).toMutation(i._key,yt.exists(!1))]).then(()=>i)}function qD(n,...e){var t,i,a;n=Ie(n);let l={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||uv(e[u])||(l=e[u],u++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(uv(e[u])){const v=e[u];e[u]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[u+1]=(i=v.error)===null||i===void 0?void 0:i.bind(v),e[u+2]=(a=v.complete)===null||a===void 0?void 0:a.bind(v)}let p,g,y;if(n instanceof wt)g=Qe(n.firestore,Lt),y=Au(n._key.path),p={next:v=>{e[u]&&e[u](sT(g,n,v))},error:e[u+1],complete:e[u+2]};else{const v=Qe(n,Vn);g=Qe(v.firestore,Lt),y=v._query;const w=new Co(g);p={next:R=>{e[u]&&e[u](new ta(g,w,v,R))},error:e[u+1],complete:e[u+2]},UD(n._query)}return function(w,R,L,B){const V=new Dm(B),Z=new ME(R,V,L);return w.asyncQueue.enqueueAndForget(async()=>OE(await gu(w),Z)),()=>{V.yu(),w.asyncQueue.enqueueAndForget(async()=>VE(await gu(w),Z))}}(An(g),y,d,p)}function I9(n,e){return z3(An(n=Qe(n,Lt)),uv(e)?e:{next:e})}function fd(n,e){return function(i,a){const l=new gn;return i.asyncQueue.enqueueAndForget(async()=>f3(await GE(i),a,l)),l.promise}(An(n),e)}function sT(n,e,t){const i=t.docs.get(e._key),a=new Co(n);return new $r(n,a,e._key,i,new io(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A9={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S9=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=So(e)}set(e,t,i){this._verifyNotCommitted();const a=Ls(e,this._firestore),l=zm(a.converter,t,i),u=Vm(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,i);return this._mutations.push(u.toMutation(a._key,yt.none())),this}update(e,t,i,...a){this._verifyNotCommitted();const l=Ls(e,this._firestore);let u;return u=typeof(t=Ie(t))=="string"||t instanceof ea?JE(this._dataReader,"WriteBatch.update",l._key,t,i,a):XE(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(u.toMutation(l._key,yt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ls(e,this._firestore);return this._mutations=this._mutations.concat(new Ru(t._key,yt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ne($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Ls(n,e){if((n=Ie(n)).firestore!==e)throw new ne($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R9{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=So(e)}get(e){const t=Ls(e,this._firestore),i=new p9(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return me(24041);const l=a[0];if(l.isFoundDocument())return new zh(this._firestore,i,l.key,l,t.converter);if(l.isNoDocument())return new zh(this._firestore,i,t._key,null,t.converter);throw me(18433,{doc:l})})}set(e,t,i){const a=Ls(e,this._firestore),l=zm(a.converter,t,i),u=Vm(this._dataReader,"Transaction.set",a._key,l,a.converter!==null,i);return this._transaction.set(a._key,u),this}update(e,t,i,...a){const l=Ls(e,this._firestore);let u;return u=typeof(t=Ie(t))=="string"||t instanceof ea?JE(this._dataReader,"Transaction.update",l._key,t,i,a):XE(this._dataReader,"Transaction.update",l._key,t),this._transaction.update(l._key,u),this}delete(e){const t=Ls(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C9=class extends R9{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ls(e,this._firestore),i=new Co(this._firestore);return super.get(e).then(a=>new $r(this._firestore,i,t._key,a._document,new io(!1,!1),t.converter))}};function D9(n,e,t){n=Qe(n,Lt);const i=Object.assign(Object.assign({},A9),t);return function(l){if(l.maxAttempts<1)throw new ne($.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(l,u,d){const p=new gn;return l.asyncQueue.enqueueAndForget(async()=>{const g=await k3(l);new O3(l.asyncQueue,g,d,u,p).Nu()}),p.promise}(An(n),a=>e(new C9(n,a)),i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x9(){return new hd("deleteField")}function P9(){return new KE("serverTimestamp")}function N9(...n){return new QE("arrayUnion",n)}function O9(...n){return new YE("arrayRemove",n)}function V9(n){return new WE("increment",n)}(function(e,t=!0){(function(a){Iu=a})(na),$s(new lr("firestore",(i,{instanceIdentifier:a,options:l})=>{const u=i.getProvider("app").getImmediate(),d=new Lt(new CL(i.getProvider("auth-internal")),new PL(u,i.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ne($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qs(g.options.projectId,y)}(u,a),u);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Ni(kI,MI,e),Ni(kI,MI,"esm2017")})();const k9="@firebase/firestore-compat",M9="0.3.49";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new ne("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(){if(typeof Uint8Array>"u")throw new ne("unimplemented","Uint8Arrays are not available in this environment.")}function oS(){if(!hU())throw new ne("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Fh{constructor(e){this._delegate=e}static fromBase64String(e){return oS(),new Fh(dr.fromBase64String(e))}static fromUint8Array(e){return aS(),new Fh(dr.fromUint8Array(e))}toBase64(){return oS(),this._delegate.toBase64()}toUint8Array(){return aS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(n){return L9(n,["next","error","complete"])}function L9(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U9{enableIndexedDbPersistence(e,t){return K3(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Q3(e._delegate)}clearIndexedDbPersistence(e){return Y3(e._delegate)}}class jD{constructor(e,t,i){this._delegate=t,this._persistenceProvider=i,this.INTERNAL={delete:()=>this.terminate()},e instanceof Qs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&cr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,i={}){j3(this._delegate,e,t,i)}enableNetwork(){return X3(this._delegate)}disableNetwork(){return J3(this._delegate)}enablePersistence(e){let t=!1,i=!1;return e&&(t=!!e.synchronizeTabs,i=!!e.experimentalForceOwningTab,ED("synchronizeTabs",t,"experimentalForceOwningTab",i)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,i)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return W3(this._delegate)}onSnapshotsInSync(e){return I9(this._delegate,e)}get app(){if(!this._appCompat)throw new ne("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new _u(this,SD(this._delegate,e))}catch(t){throw Pn(t,"collection()","Firestore.collection()")}}doc(e){try{return new vi(this,Kp(this._delegate,e))}catch(t){throw Pn(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new xn(this,G3(this._delegate,e))}catch(t){throw Pn(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return D9(this._delegate,t=>e(new GD(this,t)))}batch(){return An(this._delegate),new HD(new S9(this._delegate,e=>fd(this._delegate,e)))}loadBundle(e){return Z3(this._delegate,e)}namedQuery(e){return e9(this._delegate,e).then(t=>t?new xn(this,t):null)}}class Fm extends rT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fh(new dr(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return vi.forKey(t,this.firestore,null)}}function B9(n){IL(n)}class GD{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Fm(e)}get(e){const t=ro(e);return this._delegate.get(t).then(i=>new qh(this._firestore,new $r(this._firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,t.converter)))}set(e,t,i){const a=ro(e);return i?(aT("Transaction.set",i),this._delegate.set(a,t,i)):this._delegate.set(a,t),this}update(e,t,i,...a){const l=ro(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,i,...a),this}delete(e){const t=ro(e);return this._delegate.delete(t),this}}class HD{constructor(e){this._delegate=e}set(e,t,i){const a=ro(e);return i?(aT("WriteBatch.set",i),this._delegate.set(a,t,i)):this._delegate.set(a,t),this}update(e,t,i,...a){const l=ro(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,i,...a),this}delete(e){const t=ro(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class wo{constructor(e,t,i){this._firestore=e,this._userDataWriter=t,this._delegate=i}fromFirestore(e,t){const i=new yh(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new jh(this._firestore,i),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const i=wo.INSTANCES;let a=i.get(e);a||(a=new WeakMap,i.set(e,a));let l=a.get(t);return l||(l=new wo(e,new Fm(e),t),a.set(t,l)),l}}wo.INSTANCES=new WeakMap;class vi{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Fm(e)}static forPath(e,t,i){if(e.length%2!==0)throw new ne("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new vi(t,new wt(t._delegate,i,new de(e)))}static forKey(e,t,i){return new vi(t,new wt(t._delegate,i,e))}get id(){return this._delegate.id}get parent(){return new _u(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new _u(this.firestore,SD(this._delegate,e))}catch(t){throw Pn(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ie(e),e instanceof wt?RD(this._delegate,e):!1}set(e,t){t=aT("DocumentReference.set",t);try{return t?rS(this._delegate,e,t):rS(this._delegate,e)}catch(i){throw Pn(i,"setDoc()","DocumentReference.set()")}}update(e,t,...i){try{return arguments.length===1?sS(this._delegate,e):sS(this._delegate,e,t,...i)}catch(a){throw Pn(a,"updateDoc()","DocumentReference.update()")}}delete(){return w9(this._delegate)}onSnapshot(...e){const t=$D(e),i=KD(e,a=>new qh(this.firestore,new $r(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return qD(this._delegate,t,i)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=_9(this._delegate):(e==null?void 0:e.source)==="server"?t=y9(this._delegate):t=g9(this._delegate),t.then(i=>new qh(this.firestore,new $r(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)))}withConverter(e){return new vi(this.firestore,e?this._delegate.withConverter(wo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Pn(n,e,t){return n.message=n.message.replace(e,t),n}function $D(n){for(const e of n)if(typeof e=="object"&&!hv(e))return e;return{}}function KD(n,e){var t,i;let a;return hv(n[0])?a=n[0]:hv(n[1])?a=n[1]:typeof n[0]=="function"?a={next:n[0],error:n[1],complete:n[2]}:a={next:n[1],error:n[2],complete:n[3]},{next:l=>{a.next&&a.next(e(l))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(i=a.complete)===null||i===void 0?void 0:i.bind(a)}}class qh{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new vi(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return FD(this._delegate,e._delegate)}}class jh extends qh{data(e){const t=this._delegate.data(e);return this._delegate._converter||AL(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}}class xn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Fm(e)}where(e,t,i){try{return new xn(this.firestore,Ps(this._delegate,a9(e,t,i)))}catch(a){throw Pn(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new xn(this.firestore,Ps(this._delegate,o9(e,t)))}catch(i){throw Pn(i,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new xn(this.firestore,Ps(this._delegate,l9(e)))}catch(t){throw Pn(t,"limit()","Query.limit()")}}limitToLast(e){try{return new xn(this.firestore,Ps(this._delegate,u9(e)))}catch(t){throw Pn(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new xn(this.firestore,Ps(this._delegate,c9(...e)))}catch(t){throw Pn(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new xn(this.firestore,Ps(this._delegate,h9(...e)))}catch(t){throw Pn(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new xn(this.firestore,Ps(this._delegate,d9(...e)))}catch(t){throw Pn(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new xn(this.firestore,Ps(this._delegate,f9(...e)))}catch(t){throw Pn(t,"endAt()","Query.endAt()")}}isEqual(e){return CD(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=E9(this._delegate):(e==null?void 0:e.source)==="server"?t=T9(this._delegate):t=v9(this._delegate),t.then(i=>new dv(this.firestore,new ta(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)))}onSnapshot(...e){const t=$D(e),i=KD(e,a=>new dv(this.firestore,new ta(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return qD(this._delegate,t,i)}withConverter(e){return new xn(this.firestore,e?this._delegate.withConverter(wo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class z9{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new jh(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class dv{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new xn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new jh(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new z9(this._firestore,t))}forEach(e,t){this._delegate.forEach(i=>{e.call(t,new jh(this._firestore,i))})}isEqual(e){return FD(this._delegate,e._delegate)}}class _u extends xn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new vi(this.firestore,e):null}doc(e){try{return e===void 0?new vi(this.firestore,Kp(this._delegate)):new vi(this.firestore,Kp(this._delegate,e))}catch(t){throw Pn(t,"doc()","CollectionReference.doc()")}}add(e){return b9(this._delegate,e).then(t=>new vi(this.firestore,t))}isEqual(e){return RD(this._delegate,e._delegate)}withConverter(e){return new _u(this.firestore,e?this._delegate.withConverter(wo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ro(n){return Qe(n,wt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(...e){this._delegate=new ea(...e)}static documentId(){return new oT(_t.keyField().canonicalString())}isEqual(e){return e=Ie(e),e instanceof ea?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{static serverTimestamp(){const e=P9();return e._methodName="FieldValue.serverTimestamp",new Za(e)}static delete(){const e=x9();return e._methodName="FieldValue.delete",new Za(e)}static arrayUnion(...e){const t=N9(...e);return t._methodName="FieldValue.arrayUnion",new Za(t)}static arrayRemove(...e){const t=O9(...e);return t._methodName="FieldValue.arrayRemove",new Za(t)}static increment(e){const t=V9(e);return t._methodName="FieldValue.increment",new Za(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F9={Firestore:jD,GeoPoint:Nm,Timestamp:vt,Blob:Fh,Transaction:GD,WriteBatch:HD,DocumentReference:vi,DocumentSnapshot:qh,Query:xn,QueryDocumentSnapshot:jh,QuerySnapshot:dv,CollectionReference:_u,FieldPath:oT,FieldValue:Za,setLogLevel:B9,CACHE_SIZE_UNLIMITED:$3};function q9(n,e){n.INTERNAL.registerComponent(new lr("firestore-compat",t=>{const i=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(i,a)},"PUBLIC").setServiceProps(Object.assign({},F9)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j9(n){q9(n,(e,t)=>new jD(e,t,new U9)),n.registerVersion(k9,M9)}j9(Eu);const G9={apiKey:"AIzaSyDRrSWlhYnkfpNdVKrxq96Xvk0YEENEe_A",authDomain:"toon-chat-a8794.firebaseapp.com",projectId:"toon-chat-a8794",storageBucket:"toon-chat-a8794.firebasestorage.app",messagingSenderId:"304902859990",appId:"1:304902859990:web:aba297d2e41161ebf66d77",measurementId:"G-T1H2429HBG"},H9=Eu.initializeApp(G9),$9=H9.firestore(),K9=Se.svg`
  position: relative; 
`,Q9=Se.image`
  position: absolute;
  z-index: 2;
  x: 28%;
  y: 0%
`;Se.image`
  position: absolute;
  z-index: 1;
  x: 32%;
  y: 10%;
`;const Y9=Se.image`
  position: absolute;
  z-index: 1;
  x: 10%;
  y: 18%;
`,W9=Se.image`
  position: absolute;
  z-index: 2;
  y: 41%;
`;function QD(n){const{type:e}=n;return pe.jsx("div",{children:pe.jsxs(K9,{viewBox:"0 0 200 200",width:"120",height:"120",children:[pe.jsx(Q9,{href:`/ToonChat/test_emotion_${e||"basic"}.svg`}),pe.jsx(Y9,{href:"/ToonChat/test_body.svg"}),pe.jsx(W9,{href:"/ToonChat/test_hand.svg"})]})})}const YD=ge.createContext(),lT=()=>ge.useContext(YD),X9=({children:n})=>{const[e,t]=ge.useState([]);ge.useEffect(()=>{t([{id:1,name:"홍길동"},{id:2,name:"사용자"}])},[]);const[i,a]=ge.useState(null);return ge.useEffect(()=>{e.length>0&&!i&&a(e[0])},[e]),pe.jsx(YD.Provider,{value:{userListData:e,nowuser:i,setUser:a},children:n})},WD=Se.div`
border: 4px #444444 solid;
width: 80%;
margin-left: 8px;
margin-right: 8px;
border-radius: 4px;
display: flex;
flex-direction: column;
padding: 8px 20px 0 20px;
overflow: hidden;
`,J9=Se(WD)`
align-items: end;
margin-left: auto;
`,Z9=Se(WD)`
align-items: start;
margin-right: auto;
`,e5=Se.div`
  position: relative;
  display: inline-block;
  margin-bottom: 16px;

`,t5=Se.div`
  background: white;
  border: 2px solid #444;
  padding: 20px 40px;
  border-radius: 4px;
  font-size: 12px;

`,n5=Se.div`
  position: absolute;
  bottom: -5px;
  left: ${n=>n.isright?"70%":"30%"};
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 1px;
  transform: rotate(-45deg);
  border-left: 2px solid #444444;
  border-bottom: 2px solid #444444;
  z-index: 1;
`,i5=Se.div`
  position: absolute;
  left: -40%;
  top: -40%;
  height: 200%; 
  width: 200%;
`,r5=Se.div`
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
`,s5=Se.img`
  top: ${n=>n.$top}%;
  left: ${n=>n.$left}%;
  transform: rotate(${n=>n.$rotate}deg) scale(${n=>n.$scale});
  width: ${n=>n.$baseSize||60}px;
  opacity: 0.9;
  pointer-events: none;
  position: absolute;
`,a5=Se.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;function o5(n){const{nowuser:e}=lT(),{chat:t,isright:i}=n;if(!t||!e)return null;const a=pe.jsxs(a5,{children:[t.backpatten?pe.jsx(i5,{children:t.backpatten.map((l,u)=>pe.jsx(s5,{src:"/ToonChat"+t.backsrc,$top:l.top,$left:l.left,$rotate:l.rotate,$scale:l.scale},u))}):pe.jsx(pe.Fragment,{}),pe.jsxs(r5,{children:[pe.jsxs(e5,{children:[pe.jsx(t5,{children:t.content}),pe.jsx(n5,{$isright:t.user===e.id})]}),pe.jsx(QD,{type:t.type})]})]});return pe.jsx("div",{children:t.user===e.id?pe.jsx(J9,{children:a}):pe.jsx(Z9,{children:a})})}const XD=ge.createContext(),uT=()=>ge.useContext(XD),l5=({children:n})=>{const[e,t]=ge.useState([]);return pe.jsx(XD.Provider,{value:{nowChat:e,setChat:t},children:n})},u5=Se.div`
`;Se.div`
border: 4px #444444 solid;
width: 80%;
margin-left: 8px;
margin-right: 8px;
border-radius: 4px;
display: flex;
flex-direction: column;
padding: 8px 20px 0 20px;
overflow: hidden;
align-items: end;
margin-left: auto;
`;Se.div`
  position: relative;
  display: inline-block;
  margin-bottom: 16px;

`;const c5=Se.div`
  background: white;
  border: 2px solid #444;
  padding: 20px 40px;
  border-radius: 4px;
  font-size: 12px;

`,h5=Se.div`
  position: absolute;
  bottom: -5px;
  left:  "70%"};
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 1px;
  transform: rotate(-45deg);
  border-left: 2px solid #444444;
  border-bottom: 2px solid #444444;
  z-index: 1;
`,d5=Se.div`
  position: absolute;
  left: -40%;
  top: -40%;
  height: 200%; 
  width: 200%;
`,f5=Se.div`
  position: relative;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,p5=Se.img`
  top: ${n=>n.$top}%;
  left: ${n=>n.$left}%;
  transform: rotate(${n=>n.$rotate}deg) scale(${n=>n.$scale});
  width: ${n=>n.$baseSize||60}px;
  opacity: 0.9;
  pointer-events: none;
  position: absolute;
`,m5=Se.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`,g5=Se.div`
  width: 32px;
  height: 32px;
  border: solid 4px #444444;
  background: #FF9F05;
  position: absolute;
  cursor: pointer;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`,_5=Se.div`
  height: 320px;
  position: relative;
`,Yf=Se.div`
  position: absolute;  // 또는 원하는 색
  outline: 1px #444444 solid;
  transform-origin: left center;
  overflow: hidden;
`,y5=Se.div`
  position: relative;
  width: 100%;
  height: 100%;
`;function v5(n){const{onInput:e,setOnInput:t}=n,{nowChat:i,setChat:a}=uT(),[l,u]=ge.useState(null),d=ge.useRef(),p=ge.useRef(null);if(ge.useEffect(()=>{d.current&&u(d.current.getBoundingClientRect())},[e]),!i)return null;const g=pe.jsxs(m5,{children:[i.backpatten?pe.jsx(d5,{children:i.backpatten.map((X,Y)=>pe.jsx(p5,{src:i.backsrc,$top:X.top,$left:X.left,$rotate:X.rotate,$scale:X.scale},Y))}):pe.jsx(pe.Fragment,{}),pe.jsxs(f5,{children:[pe.jsx(c5,{children:i.content}),pe.jsx(h5,{}),pe.jsx(QD,{type:i.type})]})]}),[y,v]=ge.useState({topLeft:{x:17,y:20},topRight:{x:98,y:20},bottomLeft:{x:17,y:80},bottomRight:{x:98,y:80}}),w=ge.useRef(y),R=ge.useRef(null),L={topLeft:{xMin:2,xMax:50,yMin:0,yMax:40},topRight:{xMin:70,xMax:98,yMin:0,yMax:40},bottomRight:{xMin:70,xMax:98,yMin:60,yMax:100},bottomLeft:{xMin:2,xMax:50,yMin:60,yMax:100}},B=(X,Y,oe)=>Math.min(Math.max(X,Y),oe),V=()=>{a({...i,corners:y})};ge.useEffect(()=>()=>{R.current&&cancelAnimationFrame(R.current)},[]);const Z=(X,Y,oe)=>{const se=X.x/100*oe.width,ue=X.y/100*oe.height,S=Y.x/100*oe.width,A=Y.y/100*oe.height,C=S-se,N=A-ue,k=Math.sqrt(C*C+N*N),M=Math.atan2(N,C)*(180/Math.PI);return{position:"absolute",left:`${se}px`,top:`${ue}px`,width:`${k}px`,height:"2px",backgroundColor:"#000",transform:`rotate(${M}deg) translateY(-50%)`,transformOrigin:"0 0"}};return pe.jsx(pe.Fragment,{children:e&&pe.jsx(u5,{onClick:X=>V(),children:pe.jsxs(y5,{ref:d,children:[pe.jsx(_5,{ref:d,style:{clipPath:`polygon(
              ${y.topLeft.x}% ${y.topLeft.y}%,
              ${y.topRight.x}% ${y.topRight.y}%,
              ${y.bottomRight.x}% ${y.bottomRight.y}%,
              ${y.bottomLeft.x}% ${y.bottomLeft.y}%
            )`},children:g}),l&&pe.jsxs(pe.Fragment,{children:[pe.jsx(Yf,{style:Z(y.topLeft,y.topRight,l)}),pe.jsx(Yf,{style:Z(y.topRight,y.bottomRight,l)}),pe.jsx(Yf,{style:Z(y.bottomRight,y.bottomLeft,l)}),pe.jsx(Yf,{style:Z(y.bottomLeft,y.topLeft,l)})]}),l&&Object.entries(y).map(([X,Y])=>{const oe=Y.y/100*l.height,se=Y.x/100*l.width;return pe.jsx(g5,{style:{top:`${oe}px`,left:`${se}px`},onMouseDown:ue=>{ue.preventDefault();const S=d.current;if(!S)return;const A=S.getBoundingClientRect();p.current={boundingRect:A,cornerKey:X};const C=k=>{const{boundingRect:M,cornerKey:x}=p.current,Pt=(k.clientX-M.left)/M.width*100,lt=(k.clientY-M.top)/M.height*100,Q=L[x],he=B(Pt,Q.xMin,Q.xMax),ve=B(lt,Q.yMin,Q.yMax);w.current={...w.current,[x]:{x:he,y:ve}},R.current||(R.current=requestAnimationFrame(()=>{v({...w.current}),R.current=null}))},N=()=>{window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",N)};window.addEventListener("mousemove",C),window.addEventListener("mouseup",N)}},X)})]})})})}const E5=Se.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  bottom: 0;
  margin: 0 20px;
  padding: 20px 0;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 1px rgba(153, 153, 153, 30%);
  background-color: #ffffff;

  scrollbar-width: none;        
  -ms-overflow-style: none;  
  
  &:-webkit-scrollbar {
    display: none;
  }
`;function T5(n){const{onInput:e,setOnInput:t}=n,{nowChat:i}=uT(),[a,l]=ge.useState([]);ge.useEffect(()=>{const d=$9.collection("chat").onSnapshot(p=>{const g=p.docs.map(y=>({id:y.id,...y.data()}));l(g)});return()=>d});const u=a.map(d=>pe.jsx(o5,{chat:d},d.id));return pe.jsxs(E5,{children:[u,pe.jsx(v5,{chat:i,onInput:e,setOnInput:t})]})}const w5=Se.div`
position: absolute;
bottom: 0;
width: 375px;
height: 80px;
background-color: #ffffff;
border-top: #444444 solid 2px;
color: #333333;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
box-sizing: border-box;
gap : 12px;

& > img{
height: 40px;
width: 40px;
border-radius: 20px;
border: 2px #444444 solid;
}

& > button{
height: 40px;
width: 40px;
border-radius: 20px;
background-color: var(--main-color);
color: #ffffff;
font-size: 20px;
font-weight: 700;
border: 2px #444444 solid;
}
`,b5=Se.input`
resize: none;
background-color: #f8f8f8;
height: 40px;
border-radius: 4px;
border: 2px #444444 solid;
width: 232px;
color: #222222;
`;function I5(n){const{setOnInput:e,onInput:t}=n,{userListData:i,nowuser:a,setUser:l}=lT(),[u,d]=ge.useState(""),p=B=>{d(B.target.value)},{nowChat:g,setChat:y}=uT(),v=B=>{const V=[];let Z="/Back_boom.svg";return/(\^\^|ㅋㅋ+|ㅎㅎ+)/.test(B)&&(V.push("happy"),Z="/Back_boom.svg"),/(ㅠㅠ+|ㅜㅜ+)/.test(B)&&(V.push("cry"),Z="/Back_water.svg"),(/[!?]{2,}/.test(B)||/[?]{4,}/.test(B)||/[?]{2,3}/.test(B)||/(\?)/.test(B))&&(V.push("basic"),Z="/Back_question.svg"),/(❤️)/.test(B)&&(V.push("happy"),Z="/Back_heart.svg"),{types:V.length>0?V:["basic"],src:Z}};function w(B,V){const Z=[],X=100/V,Y=100/B;for(let oe=0;oe<B;oe++)for(let se=0;se<V;se++)Z.push({top:oe*Y+Math.random()*(Y*.6),left:se*X+Math.random()*(X*.6),rotate:Math.random()*360,scale:.1+Math.random()*2.9});return Z}const R=w(4,4),L=()=>{v(u);const B=v(u);let V=new Date().getTime().toString();y({id:`${V}.${a==null?void 0:a.id}`,user:a.id,content:u,match:2,type:B.types,backpatten:R,backsrc:B.src}),d(""),e(!0)};return pe.jsxs(w5,{children:[pe.jsx("button",{children:"?"}),pe.jsx(b5,{type:"text",value:u,onChange:p}),pe.jsx("img",{src:"./BasicUser.svg",onClick:L})]})}Se.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: #f0f0f0;
  overflow: hidden;
`;Se.img`
  position: absolute;
  top: ${n=>n.$top}%;
  left: ${n=>n.$left}%;
  transform: rotate(${n=>n.$rotate}deg) scale(${n=>n.$scale});
  width: ${n=>n.$baseSize||40}px;
  opacity: 0.9;
  pointer-events: none;
`;const A5=Se.div`
top: 116px;
width: 100%;
display: flex;
flex-direction: column;
position: absolute;
`;function S5(n){const[e,t]=ge.useState(!1);return pe.jsxs(AO,{children:[pe.jsx(NO,{}),pe.jsx(A5,{children:pe.jsx(T5,{setOnInput:t,onInput:e})}),pe.jsx(I5,{setOnInput:t,onInput:e})]})}Se.div`
  width: 108px;
  height: 32px;
  background-color: #FAFAFA;
  border: 2px #444444 solid;
  border-radius: 2px;
  font-weight: 700;
  color: #444444;
  font-size: 17px;
  line-height: 26px;
`;Se.div`
  position: relative;
  top: -16px;
  right: calc(-100% + 128px);
  width: 110px;
  height: 34px;
  border-radius: 2px;
  background-color: #444444;
  outline: 2px solid #444444;
  padding-right: 3px;
`;Se.div`
top: 116px;
width: 100%;
display: flex;
flex-direction: column;
position: absolute;
`;Se.div`
height: 80px;
background-color: #FFCD71;
`;Se.div`
margin-top: 44px;
height: 104px;

background-color: #FFF5E1;
`;Se.div`
margin-top: 52px;
height: 534px;

background-color: #FFF5E1;
`;Se.div`
  
`;Se.div`
  
`;const R5=Se.div`
display: flex;
gap : 40px;
align-items: center;
justify-content: center;
height: 100vh;
`;function C5(n){const{userListData:e,nowuser:t,setUser:i}=lT(),a=e.map(l=>pe.jsx("li",{onClick:()=>{i(l)},children:l.name},l.id));return pe.jsxs(R5,{children:[pe.jsxs("ul",{children:[pe.jsxs("p",{children:["현재 유저 : ",t==null?void 0:t.name]}),a]}),pe.jsx(yN,{children:pe.jsx(_S,{index:!0,element:pe.jsx(S5,{})})})]})}const D5=({children:n})=>pe.jsx(X9,{children:pe.jsx(l5,{children:n})});function x5(){return pe.jsx(TN,{children:pe.jsx(D5,{children:pe.jsx(C5,{})})})}OP.createRoot(document.getElementById("root")).render(pe.jsx(ge.StrictMode,{children:pe.jsx(x5,{})}));
