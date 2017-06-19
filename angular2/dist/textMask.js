!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@angular/common"),require("@angular/core")):"function"==typeof define&&define.amd?define(["@angular/common","@angular/core"],t):"object"==typeof exports?exports.textMask=t(require("@angular/common"),require("@angular/core")):e.textMask=t(e.ng.common,e.ng.core)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var a,o=arguments.length,i=3>o?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(3>o?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},a=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},o=r(7),i=r(6),l=r(5),u=function(){function e(e,t){this.ngControl=t,this.textMaskConfig={mask:"",guide:!0,placeholderCharacter:void 0,validator:void 0},this.inputElement=e.nativeElement}return e.prototype.ngOnInit=function(){var e=this.textMaskConfig,t=e.mask,r=e.guide,n=e.placeholderCharacter,a=e.validator;this.control=l["default"]({inputElement:this.inputElement,mask:t,guide:r,placeholderCharacter:n,validator:a})},e.prototype.onInput=function(){this.control.update(),this.ngControl.viewToModelUpdate(this.inputElement.value)},n([o.Input("textMask"),a("design:type",Object)],e.prototype,"textMaskConfig",void 0),e=n([o.Directive({selector:"input[textMask]",host:{"(input)":"onInput()"}}),a("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.ElementRef&&o.ElementRef)&&t||Object,"function"==typeof(r="undefined"!=typeof i.NgControl&&i.NgControl)&&r||Object])],e);var t,r}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u,t.Directive=u},function(e,t,r){"use strict";function n(e){var t=e.mask,r=void 0===t?"":t,n=e.placeholderChar,a=void 0===n?h.placeholderCharacter:n;if(-1!==r.indexOf(a))throw console.log("Text Mask received placeholder character: ",a),console.log("Text Mask received mask: ",r),new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.");for(var o=!1,i="",l=0;l<r.length;l++){var u=r[l];"\\"!==u||o===!0?o!==!0?i+=-1!==h.maskingCharacters.indexOf(u)?a:u:(o=!1,i+=u):(o=!0,i+="")}return i}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.replace(/\\./g," ")}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case h.maskingCharactersEnums.numeric:return u(e);case h.maskingCharactersEnums.uppercase:case h.maskingCharactersEnums.lowercase:case h.maskingCharactersEnums.alphabetic:return c(e);case h.maskingCharactersEnums.alphanumeric:return u(e)||c(e);case h.maskingCharactersEnums.any:return!0;default:return!1}}function l(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case h.maskingCharactersEnums.uppercase:return e.toUpperCase();case h.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function u(e){return!isNaN(e)&&" "!==e}function c(e){return/^[a-zA-Z]+$/.test(e)}function s(e,t){for(var r=e.length>t.length?e.length:t.length,n=0;r>n;n++)if(e[n]!==t[n])return n;return null}function f(e){return"string"==typeof e||e instanceof String}function d(e){return e&&void 0===e.length&&!isNaN(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.unescapeMask=a,t.tokenize=o,t.isAcceptableCharacter=i,t.potentiallyTransformCharacter=l,t.getIndexOfFirstChange=s,t.isString=f,t.isNumber=d;var h=r(2)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},t.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},t.maskingCharacters=["1","A","?","U","L","*"],t.placeholderCharacter="_"},function(e,t,r){"use strict";function n(e){var t=e.previousConformedInput,r=void 0===t?"":t,n=e.conformToMaskResults,o=void 0===n?{}:n,i=e.currentCaretPosition,l=void 0===i?0:i;if(0===l)return 0;var u=o.output,c=void 0===u?"":u,s=o.meta,f=void 0===s?{}:s,d=f.input,h=void 0===d?"":d,p=f.placeholderChar,v=f.placeholder,g=(0,a.getIndexOfFirstChange)(r,h),m=g-l>1;if(m)return l;var C=!(h.length<r.length),k=Math.abs(r.length-h.length)>1,y=1===h.length,b=k&&!C&&!y,x=C&&(r===c||c===v),M=""===r&&c===v,E=k||y?c:v,_=v[g]!==p,O=l;if(b)return l;if(k||y)O=0;else if(x)O--;else if(C)for(var j=l;j<v.length;j++){var w=_&&!M;if(v[j]===p){O=j+(w?1:0);break}}if(C||y){for(var I=O;I<=E.length;I++)if(E[I]===p||I===E.length)return I>c.length?c.length:I}else for(var P=O;P>=0;P--)if(E[P-1]===p||0===P)return P}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var a=r(1)},function(e,t,r){"use strict";function n(){for(var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=r.guide,l=void 0===n?!0:n,u=r.previousConformedInput,c=void 0===u?"":u,s=r.placeholderChar,f=void 0===s?i.placeholderCharacter:s,d=r.validator,h=void 0===d?a:d,p=(0,o.convertMaskToPlaceholder)({mask:t,placeholderChar:f}),v=l===!1&&void 0!==c,g=(0,o.getIndexOfFirstChange)(c,e),m=e.length-c.length,C=(0,o.tokenize)(e),k=v&&!(e.length<c.length),y=(0,o.unescapeMask)(t),b=0,x=0;x<p.length&&C.length>0;x++){var M=x>=g&&""!==c,E=(M?x+m:x)-b;p[x]===C[E]&&C[E]!==f&&(C.splice(E,1),b++)}var _="";e:for(var O=0;O<p.length;O++){var j=p[O];if(j===f){if(C.length>0)for(;C.length>0;){var w=C.shift();if(w===f&&v!==!0){_+=f;continue e}if((0,o.isAcceptableCharacter)(w,y[O])){_+=(0,o.potentiallyTransformCharacter)(w,y[O]);continue e}}v===!1&&(_+=p.substr(O,p.length));break}_+=j}if(v&&k===!1){for(var I=null,P=0;P<_.length;P++)p[P]===f&&(I=P);_=null!==I?_.substr(0,I+1):""}return{output:h(_)?_:c,meta:{input:e,mask:t,guide:l,placeholderChar:f,placeholder:p}}}function a(){return!0}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var o=r(1),i=r(2)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.inputElement,r=e.mask,n=e.guide,a=e.validator,l=e.placeholderChar,c={conformedInput:""},d=(0,f.convertMaskToPlaceholder)({mask:r,placeholderChar:l});return t.placeholder=""!==t.placeholder?t.placeholder:d,{state:c,update:function(){var e=arguments.length<=0||void 0===arguments[0]?t.value:arguments[0];if(e!==c.conformedInput){var f=t.selectionStart,h=c.conformedInput,p=i(e),v={previousConformedInput:h,guide:n,placeholderChar:l,validator:a},g=(0,s["default"])(p,r,v),m=g.output,C=(0,u["default"])({previousConformedInput:h,conformToMaskResults:g,currentCaretPosition:f,placeholderChar:l}),k=m===d&&0===C,y=k?"":m;c.conformedInput=y,t.value=y,o(t,C)}}}}function o(e,t){document.activeElement===e&&e.setSelectionRange(t,t,"none")}function i(e){if((0,f.isString)(e))return e;if((0,f.isNumber)(e))return String(e);if(void 0===e||null===e)return"";throw console.log("Text Mask received",e),new Error("The `value` provided to Text Mask needs to be a string or a number.")}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var l=r(3),u=n(l),c=r(4),s=n(c),f=r(1)},function(t,r){t.exports=e},function(e,r){e.exports=t}])});