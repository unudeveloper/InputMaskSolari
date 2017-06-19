!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMask=r():e.textMask=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var r=e.inputElement,t=e.mask,n=e.guide,a=e.validator,o=e.placeholderCharacter,u=(0,i["default"])({inputElement:r,mask:t,guide:n,validator:a,placeholderChar:o}),l=function(e){var r=e.target.value;return u.update(r)};return r.addEventListener("input",l),{control:u,destroy:function(){r.removeEventListener("input",l)}}}Object.defineProperty(r,"__esModule",{value:!0}),r.maskInput=a;var o=t(5),i=n(o);r["default"]=a},function(e,r,t){"use strict";function n(e){var r=e.mask,t=void 0===r?"":r,n=e.placeholderChar,a=void 0===n?f.placeholderCharacter:n;if(-1!==t.indexOf(a))throw console.log("Text Mask received placeholder character: ",a),console.log("Text Mask received mask: ",t),new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.");for(var o=!1,i="",u=0;u<t.length;u++){var l=t[u];"\\"!==l||o===!0?o!==!0?i+=-1!==f.maskingCharacters.indexOf(l)?a:l:(o=!1,i+=l):(o=!0,i+="")}return i}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.replace(/\\./g," ")}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments[1];switch(r){case f.maskingCharactersEnums.numeric:return l(e);case f.maskingCharactersEnums.uppercase:case f.maskingCharactersEnums.lowercase:case f.maskingCharactersEnums.alphabetic:return s(e);case f.maskingCharactersEnums.alphanumeric:return l(e)||s(e);case f.maskingCharactersEnums.any:return!0;default:return!1}}function u(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments[1];switch(r){case f.maskingCharactersEnums.uppercase:return e.toUpperCase();case f.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function l(e){return!isNaN(e)&&" "!==e}function s(e){return/^[a-zA-Z]+$/.test(e)}function c(e,r){for(var t=e.length>r.length?e.length:r.length,n=0;t>n;n++)if(e[n]!==r[n])return n;return null}function d(e){return"string"==typeof e||e instanceof String}function h(e){return e&&void 0===e.length&&!isNaN(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.unescapeMask=a,r.tokenize=o,r.isAcceptableCharacter=i,r.potentiallyTransformCharacter=u,r.getIndexOfFirstChange=c,r.isString=d,r.isNumber=h;var f=t(2)},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},r.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},r.maskingCharacters=["1","A","?","U","L","*"],r.placeholderCharacter="_"},function(e,r,t){"use strict";function n(e){var r=e.previousConformedInput,t=void 0===r?"":r,n=e.conformToMaskResults,o=void 0===n?{}:n,i=e.currentCaretPosition,u=void 0===i?0:i;if(0===u)return 0;var l=o.output,s=void 0===l?"":l,c=o.meta,d=void 0===c?{}:c,h=d.input,f=void 0===h?"":h,p=d.placeholderChar,v=d.placeholder,g=(0,a.getIndexOfFirstChange)(t,f),m=g-u>1;if(m)return u;var C=!(f.length<t.length),k=Math.abs(t.length-f.length)>1,b=1===f.length,y=k&&!C&&!b,M=C&&(t===s||s===v),x=""===t&&s===v,E=k||b?s:v,_=v[g]!==p,w=u;if(y)return u;if(k||b)w=0;else if(M)w--;else if(C)for(var P=u;P<v.length;P++){var A=_&&!x;if(v[P]===p){w=P+(A?1:0);break}}if(C||b){for(var I=w;I<=E.length;I++)if(E[I]===p||I===E.length)return I>s.length?s.length:I}else for(var T=w;T>=0;T--)if(E[T-1]===p||0===T)return T}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var a=t(1)},function(e,r,t){"use strict";function n(){for(var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments.length<=1||void 0===arguments[1]?"":arguments[1],t=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=t.guide,u=void 0===n?!0:n,l=t.previousConformedInput,s=void 0===l?"":l,c=t.placeholderChar,d=void 0===c?i.placeholderCharacter:c,h=t.validator,f=void 0===h?a:h,p=(0,o.convertMaskToPlaceholder)({mask:r,placeholderChar:d}),v=u===!1&&void 0!==s,g=(0,o.getIndexOfFirstChange)(s,e),m=e.length-s.length,C=(0,o.tokenize)(e),k=v&&!(e.length<s.length),b=(0,o.unescapeMask)(r),y=0,M=0;M<p.length&&C.length>0;M++){var x=M>=g&&""!==s,E=(x?M+m:M)-y;p[M]===C[E]&&C[E]!==d&&(C.splice(E,1),y++)}var _="";e:for(var w=0;w<p.length;w++){var P=p[w];if(P===d){if(C.length>0)for(;C.length>0;){var A=C.shift();if(A===d&&v!==!0){_+=d;continue e}if((0,o.isAcceptableCharacter)(A,b[w])){_+=(0,o.potentiallyTransformCharacter)(A,b[w]);continue e}}v===!1&&(_+=p.substr(w,p.length));break}_+=P}if(v&&k===!1){for(var I=null,T=0;T<_.length;T++)p[T]===d&&(I=T);_=null!==I?_.substr(0,I+1):""}return{output:f(_)?_:s,meta:{input:e,mask:r,guide:u,placeholderChar:d,placeholder:p}}}function a(){return!0}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var o=t(1),i=t(2)},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var r=e.inputElement,t=e.mask,n=e.guide,a=e.validator,u=e.placeholderChar,s={conformedInput:""},h=(0,d.convertMaskToPlaceholder)({mask:t,placeholderChar:u});return r.placeholder=""!==r.placeholder?r.placeholder:h,{state:s,update:function(){var e=arguments.length<=0||void 0===arguments[0]?r.value:arguments[0];if(e!==s.conformedInput){var d=r.selectionStart,f=s.conformedInput,p=i(e),v={previousConformedInput:f,guide:n,placeholderChar:u,validator:a},g=(0,c["default"])(p,t,v),m=g.output,C=(0,l["default"])({previousConformedInput:f,conformToMaskResults:g,currentCaretPosition:d,placeholderChar:u}),k=m===h&&0===C,b=k?"":m;s.conformedInput=b,r.value=b,o(r,C)}}}}function o(e,r){document.activeElement===e&&e.setSelectionRange(r,r,"none")}function i(e){if((0,d.isString)(e))return e;if((0,d.isNumber)(e))return String(e);if(void 0===e||null===e)return"";throw console.log("Text Mask received",e),new Error("The `value` provided to Text Mask needs to be a string or a number.")}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=a;var u=t(3),l=n(u),s=t(4),c=n(s),d=t(1)}])});