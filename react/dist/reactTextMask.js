!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.reactTextMask=t(require("react")):e.reactTextMask=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MaskedInput=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(6),i=n(o),s=r(5),u=n(s),l=t.MaskedInput=i["default"].createClass({displayName:"MaskedInput",propTypes:{mask:o.PropTypes.string.isRequired,guide:o.PropTypes.bool,value:o.PropTypes.oneOfType([o.PropTypes.string,o.PropTypes.number]),validator:o.PropTypes.func},componentDidMount:function(){var e=this.props,t=this.props,r=t.placeholderCharacter,n=t.value;this.control=(0,u["default"])(Object.assign({inputElement:this.inputElement,placeholderChar:r},e)),this.control.update(n)},componentDidUpdate:function(){this.control.update(this.props.value)},render:function(){var e=this;return i["default"].createElement("input",a({},this.props,{onChange:this.onChange,ref:function(t){return e.inputElement=t}}))},onChange:function(e){this.control.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}});t["default"]=l},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?f.placeholderCharacter:arguments[1];if(-1!==e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));for(var r=!1,n="",a=0;a<e.length;a++){var o=e[a];"\\"!==o||r===!0?r!==!0?n+=-1!==f.maskingCharacters.indexOf(o)?t:o:(r=!1,n+=o):(r=!0,n+="")}return n}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.replace(/\\./g," ")}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case f.maskingCharactersEnums.numeric:return u(e);case f.maskingCharactersEnums.uppercase:case f.maskingCharactersEnums.lowercase:case f.maskingCharactersEnums.alphabetic:return l(e);case f.maskingCharactersEnums.alphanumeric:return u(e)||l(e);case f.maskingCharactersEnums.any:return!0;default:return!1}}function s(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case f.maskingCharactersEnums.uppercase:return e.toUpperCase();case f.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function u(e){return!isNaN(e)&&" "!==e}function l(e){return/^[a-zA-Z]+$/.test(e)}function c(e,t){for(var r=e.length>t.length?e.length:t.length,n=0;r>n;n++)if(e[n]!==t[n])return n;return null}function p(e){return"string"==typeof e||e instanceof String}function h(e){return e&&void 0===e.length&&!isNaN(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.unescapeMask=a,t.tokenize=o,t.isAcceptableCharacter=i,t.potentiallyTransformCharacter=s,t.getIndexOfFirstChange=c,t.isString=p,t.isNumber=h;var f=r(2)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},t.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},t.maskingCharacters=["1","A","?","U","L","*"],t.placeholderCharacter="_"},function(e,t,r){"use strict";function n(e){var t=e.previousConformedInput,r=void 0===t?"":t,n=e.conformToMaskResults,o=void 0===n?{}:n,i=e.currentCaretPosition,s=void 0===i?0:i;if(0===s)return 0;var u=o.output,l=void 0===u?"":u,c=o.meta,p=void 0===c?{}:c,h=p.input,f=void 0===h?"":h,d=p.placeholderChar,v=p.placeholder,g=(0,a.getIndexOfFirstChange)(r,f),m=g-s>1;if(m)return s;var C=!(f.length<r.length),y=Math.abs(r.length-f.length)>1,k=1===f.length,b=y&&!C&&!k,M=C&&(r===l||l===v),T=""===r&&l===v,P=y||k?l:v,O=v[g]!==d,x=s;if(b)return s;if(y||k)x=0;else if(M)x--;else if(C)for(var w=s;w<v.length;w++){var E=O&&!T;if(v[w]===d){x=w+(E?1:0);break}}if(C||k){for(var _=x;_<=P.length;_++)if(P[_]===d||_===P.length)return _>l.length?l.length:_}else for(var A=x;A>=0;A--)if(P[A-1]===d||0===A)return A}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var a=r(1)},function(e,t,r){"use strict";function n(){for(var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=r.guide,s=void 0===n?!0:n,u=r.previousConformedInput,l=void 0===u?"":u,c=r.placeholderChar,p=void 0===c?i.placeholderCharacter:c,h=r.validator,f=void 0===h?a:h,d=(0,o.convertMaskToPlaceholder)(t,p),v=s===!1&&void 0!==l,g=(0,o.getIndexOfFirstChange)(l,e),m=e.length-l.length,C=(0,o.tokenize)(e),y=v&&!(e.length<l.length),k=(0,o.unescapeMask)(t),b=0,M=0;M<d.length&&C.length>0;M++){var T=M>=g&&""!==l,P=(T?M+m:M)-b;d[M]===C[P]&&C[P]!==p&&(C.splice(P,1),b++)}var O="";e:for(var x=0;x<d.length;x++){var w=d[x];if(w===p){if(C.length>0)for(;C.length>0;){var E=C.shift();if(E===p&&v!==!0){O+=p;continue e}if((0,o.isAcceptableCharacter)(E,k[x])){O+=(0,o.potentiallyTransformCharacter)(E,k[x]);continue e}}v===!1&&(O+=d.substr(x,d.length));break}O+=w}if(v&&y===!1){for(var _=null,A=0;A<O.length;A++)d[A]===p&&(_=A);O=null!==_?O.substr(0,_+1):""}return{output:f(O)?O:l,meta:{input:e,mask:t,guide:s,placeholderChar:p,placeholder:d}}}function a(){return!0}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var o=r(1),i=r(2)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.inputElement,r=e.mask,n=e.guide,a=e.validator,s=e.placeholderChar,l=e.onAccept,h=e.onReject,f={previousConformedInput:""},d=(0,p.convertMaskToPlaceholder)(r,s);return""===t.placeholder&&t.setAttribute("placeholder",d),{state:f,update:function(){var e=arguments.length<=0||void 0===arguments[0]?t.value:arguments[0];if(e!==f.previousConformedInput){var p=t.selectionStart,v=f.previousConformedInput,g=i(e),m={previousConformedInput:v,guide:n,placeholderChar:s,validator:a},C=(0,c["default"])(g,r,m),y=C.output,k=(0,u["default"])({previousConformedInput:v,conformToMaskResults:C,currentCaretPosition:p,placeholderChar:s}),b=y===d&&0===k,M=b?"":y,T=g.length<v.length;"function"==typeof l&&M!==v&&l(),"function"==typeof h&&M===v&&T===!1&&p<=r.length&&h(),t.value=M,f.previousConformedInput=M,o(t,k)}}}}function o(e,t){document.activeElement===e&&e.setSelectionRange(t,t,"none")}function i(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return"";throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var s=r(3),u=n(s),l=r(4),c=n(l),p=r(1)},function(t,r){t.exports=e}])});