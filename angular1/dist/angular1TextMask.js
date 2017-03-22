!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.angular1TextMask=r():e.angular1TextMask=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){"ngInject";return{restrict:"A",require:"ngModel",scope:{textMask:"="},link:function(e,r,t,n){function o(){s=(0,l.default)(a({inputElement:u},e.textMask))}function i(e){return u.value=e,s.update(e),u.value}var u,s;u="INPUT"===r[0].tagName?r[0]:r[0].getElementsByTagName("INPUT")[0],r.on("blur keyup change input",function(){s.update(u.value),n.$setViewValue(u.value)}),e.$watch("textMask",function(){o(),s.update()},!0),o(),n.$formatters.unshift(i)}}}Object.defineProperty(r,"__esModule",{value:!0}),r.conformToMask=void 0;var a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i=t(2);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(i).default}});var u=t(5),l=n(u),s=angular.module("text-mask",[]).directive("textMask",o).name;r.default=s},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,l=t.previousConformedValue,s=void 0===l?i:l,f=t.placeholderChar,d=void 0===f?a.placeholderChar:f,c=t.placeholder,v=void 0===c?(0,o.convertMaskToPlaceholder)(r,d):c,p=t.currentCaretPosition,h=t.keepCharPositions,g=u===!1&&void 0!==s,m=e.length,y=s.length,b=v.length,C=r.length,P=m-y,k=P>0,x=p+(k?-P:0),O=x+Math.abs(P);if(h===!0&&!k){for(var M=i,T=x;T<O;T++)v[T]===d&&(M+=d);e=e.slice(0,x)+M+e.slice(x,m)}for(var j=e.split(i).map(function(e,r){return{char:e,isNew:r>=x&&r<O}}),w=m-1;w>=0;w--){var V=j[w].char;if(V!==d){var _=w>=x&&y===C;V===v[_?w-P:w]&&j.splice(w,1)}}var S=i,N=!1;e:for(var E=0;E<b;E++){var A=v[E];if(A===d){if(j.length>0)for(;j.length>0;){var I=j.shift(),R=I.char,q=I.isNew;if(R===d&&g!==!0){S+=d;continue e}if(r[E].test(R)){if(h===!0&&q!==!1&&s!==i&&u!==!1&&k){for(var J=j.length,$=null,F=0;F<J;F++){var L=j[F];if(L.char!==d&&L.isNew===!1)break;if(L.char===d){$=F;break}}null!==$?(S+=R,j.splice($,1)):E--}else S+=R;continue e}N=!0}g===!1&&(S+=v.substr(E,b));break}S+=A}if(g&&k===!1){for(var U=null,W=0;W<S.length;W++)v[W]===d&&(U=W);S=null!==U?S.substr(0,U+1):i}return{conformedValue:S,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(3),a=t(1),i=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function i(e){for(var r=[],t=void 0;t=e.indexOf(s),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=a,r.processCaretTraps=i;var u=t(1),l=[],s="[]"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,a=e.previousPlaceholder,i=void 0===a?o:a,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,v=e.indexesOfPipedChars,p=void 0===v?n:v,h=e.caretTrapIndexes,g=void 0===h?n:h;if(0===l)return 0;var m=f.length,y=t.length,b=c.length,C=s.length,P=m-y,k=P>0,x=0===y,O=P>1&&!k&&!x;if(O)return l;var M=k&&(t===s||s===c),T=0,j=void 0;if(M)T=l-P;else{var w=s.toLowerCase(),V=f.toLowerCase(),_=V.substr(0,l).split(o),S=_.filter(function(e){return w.indexOf(e)!==-1}),N=S[S.length-1];j=void 0!==i[S.length-1]&&void 0!==c[S.length-2]&&i[S.length-1]!==d&&i[S.length-1]!==c[S.length-1]&&i[S.length-1]===c[S.length-2];for(var E=p.map(function(e){return w[e]}),A=E.filter(function(e){return e===N}).length,I=S.filter(function(e){return e===N}).length,R=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===N&&f[r]!==e}).length,q=R+I+A,J=0,$=0;$<C;$++){var F=w[$];if(T=$+1,F===N&&J++,J>=q)break}}if(k){for(var L=T,U=T;U<=b;U++)if(c[U]===d&&(L=U),c[U]===d||g.indexOf(U)!==-1||U===b)return L}else for(var W=T+(j?1:0);W>=0;W--)if(c[W-1]===d||g.indexOf(W)!==-1||0===W)return W}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,b=n.placeholderChar,C=void 0===b?p.placeholderChar:b,P=n.keepCharPositions,k=void 0!==P&&P;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var x=void 0,O=void 0;if(s instanceof Array&&(x=(0,v.convertMaskToPlaceholder)(s,C)),s!==!1){var M=i(t),T=o.selectionStart,j=r.previousConformedValue,w=r.previousPlaceholder,V=void 0;if(("undefined"==typeof s?"undefined":l(s))===h){if(O=s(M,{currentCaretPosition:T,previousConformedValue:j,placeholderChar:C}),O===!1)return;var _=(0,v.processCaretTraps)(O),S=_.maskWithoutCaretTraps,N=_.indexes;O=S,V=N,x=(0,v.convertMaskToPlaceholder)(O,C)}else O=s;var E={previousConformedValue:j,guide:d,placeholderChar:C,pipe:m,placeholder:x,currentCaretPosition:T,keepCharPositions:k},A=(0,c.default)(M,O,E),I=A.conformedValue,R=("undefined"==typeof m?"undefined":l(m))===h,q={};R&&(q=m(I,u({rawValue:M},E)),q===!1?q={value:j,rejected:!0}:(0,v.isString)(q)&&(q={value:q}));var J=R?q.value:I,$=(0,f.default)({previousConformedValue:j,previousPlaceholder:w,conformedValue:J,placeholder:x,rawValue:M,currentCaretPosition:T,placeholderChar:C,indexesOfPipedChars:q.indexesOfPipedChars,caretTrapIndexes:V}),F=J===x&&0===$,L=F?g:J;r.previousConformedValue=L,r.previousPlaceholder=x,o.value!==L&&(o.value=L,a(o,$))}}}}}function a(e,r){document.activeElement===e&&(b?C(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function i(e){if((0,v.isString)(e))return e;if((0,v.isNumber)(e))return String(e);if(void 0===e||null===e)return g;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(4),f=n(s),d=t(2),c=n(d),v=t(3),p=t(1),h="function",g="",m="none",y="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});