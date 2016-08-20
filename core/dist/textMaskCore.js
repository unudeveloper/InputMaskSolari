!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMaskCore=r():e.textMaskCore=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o)["default"]}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i)["default"]}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a)["default"]}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.currentCaretPosition,a=void 0===i?0:i,u=e.conformedValue,l=e.rawValue,f=e.placeholderChar,s=e.placeholder,d=e.indexesOfPipedChars,c=void 0===d?n:d,p=e.caretTrapIndexes,v=void 0===p?n:p;if(0===a)return 0;var h=l.length,m=t.length,g=s.length,C=u.length,b=h-m,y=b>0,P=0===m,x=b>1&&!y&&!P;if(x)return a;var j=y&&(t===u||u===s),k=0;if(j?k=a-b:!function(){for(var e=u.toLowerCase(),r=l.toLowerCase(),t=r.substr(0,a).split(o),n=t.filter(function(r){return e.indexOf(r)!==-1}),i=n[n.length-1],d=c.map(function(r){return e[r]}),p=d.filter(function(e){return e===i}).length,v=n.filter(function(e){return e===i}).length,h=s.substr(0,s.indexOf(f)).split(o).filter(function(e,r){return e===i&&l[r]!==e}).length,m=h+v+p,g=0,b=0;b<C;b++){var y=e[b];if(k=b+1,y===i&&g++,g>=m)break}}(),y){for(var O=k,M=k;M<=g;M++)if(s[M]===f&&(O=M),s[M]===f||v.indexOf(M)!==-1||M===g)return O}else for(var T=k;T>=0;T--)if(s[T-1]===f||v.indexOf(T)!==-1||0===T)return T}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?a:arguments[0],r=arguments.length<=1||void 0===arguments[1]?a:arguments[1],t=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=t.guide,u=void 0===n||n,l=t.previousConformedValue,f=void 0===l?a:l,s=t.placeholderChar,d=void 0===s?i.placeholderChar:s,c=t.placeholder,p=void 0===c?(0,o.convertMaskToPlaceholder)(r,d):c,v=t.currentCaretPosition,h=t.keepCharPositions,m=u===!1&&void 0!==f,g=e.length,C=f.length,b=p.length,y=r.length,P=g-C,x=P>0,j=v+(x?-P:0),k=j+Math.abs(P);if(h===!0&&!x){for(var O=a,M=j;M<k;M++)p[M]===d&&(O+=d);e=e.slice(0,j)+O+e.slice(j,g)}for(var T=e.split(a).map(function(e,r){return{"char":e,isNew:r>=j&&r<k}}),V=g-1;V>=0;V--){var _=T[V]["char"];if(_!==d){var w=V>=j&&C===y;_===p[w?V-P:V]&&T.splice(V,1)}}var S=a,N=!1;e:for(var R=0;R<b;R++){var E=p[R];if(E===d){if(T.length>0)for(;T.length>0;){var A=T.shift(),I=A["char"],J=A.isNew;if(I===d&&m!==!0){S+=d;continue e}if(r[R].test(I)){if(h===!0&&J!==!1&&f!==a&&u!==!1&&x){for(var L=T.length,W=null,q=0;q<L;q++){var z=T[q];if(z["char"]!==d&&z.isNew===!1)break;if(z["char"]===d){W=q;break}}null!==W?(S+=I,T.splice(W,1)):R--}else S+=I;continue e}N=!0}m===!1&&(S+=p.substr(R,b));break}S+=E}if(m&&x===!1){for(var B=null,D=0;D<S.length;D++)p[D]===d&&(B=D);S=null!==B?S.substr(0,B+1):a}return{conformedValue:S,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var o=t(4),i=t(1),a=""},function(e,r,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?l:arguments[0],r=arguments.length<=1||void 0===arguments[1]?u.placeholderChar:arguments[1];if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return e&&void 0===e.length&&!isNaN(e)}function a(e){for(var r=[],t=void 0;t=e.indexOf(f),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=i,r.processCaretTraps=a;var u=t(1),l=[],f="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var r=e.inputElement,t=e.mask,n=e.guide,o=e.pipe,f=e.placeholderChar,d=void 0===f?v.placeholderChar:f,C=e.onAccept,b=e.onReject,y=e.keepCharPositions,P=void 0!==y&&y;"object"===("undefined"==typeof t?"undefined":l(t))&&void 0!==t.pipe&&void 0!==t.mask&&(o=t.pipe,t=t.mask);var x={previousConformedValue:g},j=void 0,k=void 0;return t instanceof Array&&(j=(0,p.convertMaskToPlaceholder)(t,d)),r.placeholder===g&&r.setAttribute(h,j),{state:x,update:function(){var e=arguments.length<=0||void 0===arguments[0]?r.value:arguments[0];if(e!==x.previousConformedValue){var f=a(e),v=r.selectionStart,h=x.previousConformedValue,y=void 0;if(("undefined"==typeof t?"undefined":l(t))===m){k=t(f,{currentCaretPosition:v,previousConformedValue:h,placeholderChar:d});var O=(0,p.processCaretTraps)(k),M=O.maskWithoutCaretTraps,T=O.indexes;k=M,y=T,j=(0,p.convertMaskToPlaceholder)(k,d)}else k=t;var V={previousConformedValue:h,guide:n,placeholderChar:d,pipe:o,placeholder:j,currentCaretPosition:v,keepCharPositions:P},_=(0,c["default"])(f,k,V),w=_.conformedValue,S=_.meta.someCharsRejected,N=("undefined"==typeof o?"undefined":l(o))===m,R={};N&&(R=o(w,u({rawValue:f},V)),R===!1?R={value:h,rejected:!0}:(0,p.isString)(R)&&(R={value:R}));var E=N?R.value:w,A=(0,s["default"])({previousConformedValue:h,conformedValue:E,placeholder:j,rawValue:f,currentCaretPosition:v,placeholderChar:d,indexesOfPipedChars:R.indexesOfPipedChars,caretTrapIndexes:y}),I=E===j&&0===A,J=I?g:E;r.value=J,i(r,A),x.previousConformedValue=J,("undefined"==typeof C?"undefined":l(C))===m&&J!==h&&C();var L=f.length<h.length;("undefined"==typeof b?"undefined":l(b))===m&&(S||R.rejected)&&L===!1&&b({conformedValue:E,pipeRejection:R.rejected,maskRejection:S})}}}}function i(e,r){document.activeElement===e&&e.setSelectionRange(r,r,C)}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return g;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};r["default"]=o;var f=t(2),s=n(f),d=t(3),c=n(d),p=t(4),v=t(1),h="placeholder",m="function",g="",C="none"}])});