!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.textMask=t(require("react")):e.textMask=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=t.conformToMask=t.MaskedInput=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(2);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(o)["default"]}});var i=r(6),s=n(i),u=r(5),l=["mask","guide","placeholderCharacter","validator"],c=t.MaskedInput=s["default"].createClass({displayName:"MaskedInput",propTypes:{mask:i.PropTypes.string.isRequired,guide:i.PropTypes.bool,value:i.PropTypes.oneOfType([i.PropTypes.string,i.PropTypes.number])},getInitialState:function(){var e=this.props,t=e.value,r=e.mask,n=e.guide,a=e.placeholderCharacter,o=e.validator;return(0,u.getComponentInitialState)({inputValue:t,mask:r,validator:o,guide:n,placeholderChar:a})},componentWillReceiveProps:function(e){for(var t=this.processComponentChanges,r=this.inputElement,n=this.props,a=e.value,o=e.mask,i=e.placeholderCharacter,s=!1,c=0;c<l.length;c++){var d=l[c];if(e[d]!==n[d]){s=!0;break}}if(s||e.value!==r.value){var p=t(a,e),h=p.conformedInput,f=p.adjustedCaretPosition,v=(0,u.convertMaskToPlaceholder)({mask:o,placeholderChar:i});this.setState({conformedInput:h,adjustedCaretPosition:f,componentPlaceholder:v})}},componentDidUpdate:function(){(0,u.safeSetSelection)(this.inputElement,this.state.adjustedCaretPosition)},render:function(){var e=this,t=this.props,r=this.state,n=r.componentPlaceholder,o=r.conformedInput,i=this.onChange,u=t.placeholder,l=void 0===u?n:u,c=t.type,d=void 0===c?"text":c;return s["default"].createElement("input",a({},t,{type:d,onChange:i,value:o,placeholder:l,ref:function(t){return e.inputElement=t}}))},onChange:function d(e){var t=e.target.value,r=this.processComponentChanges,n=this.props,d=this.props.onChange,a=r(t,n),o=a.conformedInput,i=a.adjustedCaretPosition;this.setState({conformedInput:o,adjustedCaretPosition:i}),e.target.value=o,"function"==typeof d&&d(e)},processComponentChanges:function(e,t){var r=this.inputElement,n=this.state,a=n.componentPlaceholder,o=n.conformedInput,i=t.mask,s=t.validator,l=t.guide,c=t.placeholderCharacter,d=r.selectionStart,p=(0,u.processComponentChanges)({userInput:e,placeholder:a,previousConformedInput:o,mask:i,validator:s,guide:l,placeholderChar:c,currentCaretPosition:d}),h=p.conformedInput,f=p.adjustedCaretPosition;return{conformedInput:h,adjustedCaretPosition:f}}});t["default"]=c,t.convertMaskToPlaceholder=u.convertMaskToPlaceholder},function(e,t,r){"use strict";function n(e){var t=e.mask,r=void 0===t?"":t,n=e.placeholderChar,a=void 0===n?h.placeholderCharacter:n;if(-1!==r.indexOf(a))throw console.log("Text Mask received placeholder character: ",a),console.log("Text Mask received mask: ",r),new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.");for(var o=!1,i="",s=0;s<r.length;s++){var u=r[s];"\\"!==u||o===!0?o!==!0?i+=-1!==h.maskingCharacters.indexOf(u)?a:u:(o=!1,i+=u):(o=!0,i+="")}return i}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.replace(/\\./g," ")}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case h.maskingCharactersEnums.numeric:return u(e);case h.maskingCharactersEnums.uppercase:case h.maskingCharactersEnums.lowercase:case h.maskingCharactersEnums.alphabetic:return l(e);case h.maskingCharactersEnums.alphanumeric:return u(e)||l(e);case h.maskingCharactersEnums.any:return!0;default:return!1}}function s(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case h.maskingCharactersEnums.uppercase:return e.toUpperCase();case h.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function u(e){return!isNaN(e)&&" "!==e}function l(e){return/^[a-zA-Z]+$/.test(e)}function c(e,t){for(var r=e.length>t.length?e.length:t.length,n=0;r>n;n++)if(e[n]!==t[n])return n;return null}function d(e){return"string"==typeof e||e instanceof String}function p(e){return e&&void 0===e.length&&!isNaN(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.unescapeMask=a,t.tokenize=o,t.isAcceptableCharacter=i,t.potentiallyTransformCharacter=s,t.getIndexOfFirstChange=c,t.isString=d,t.isNumber=p;var h=r(3)},function(e,t,r){"use strict";function n(){for(var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=r.guide,s=void 0===n?!0:n,u=r.previousConformedInput,l=void 0===u?"":u,c=r.placeholderChar,d=void 0===c?i.placeholderCharacter:c,p=r.validator,h=void 0===p?a:p,f=(0,o.convertMaskToPlaceholder)({mask:t,placeholderChar:d}),v=s===!1&&void 0!==l,m=(0,o.getIndexOfFirstChange)(l,e),g=e.length-l.length,C=(0,o.tokenize)(e),k=v&&!(e.length<l.length),P=(0,o.unescapeMask)(t),y=0,b=0;b<f.length&&C.length>0;b++){var M=b>=m&&""!==l,I=(M?b+g:b)-y;f[b]===C[I]&&C[I]!==d&&(C.splice(I,1),y++)}var T="";e:for(var x=0;x<f.length;x++){var j=f[x];if(j===d){if(C.length>0)for(;C.length>0;){var E=C.shift();if(E===d&&v!==!0){T+=d;continue e}if((0,o.isAcceptableCharacter)(E,P[x])){T+=(0,o.potentiallyTransformCharacter)(E,P[x]);continue e}}v===!1&&(T+=f.substr(x,f.length));break}T+=j}if(v&&k===!1){for(var _=null,O=0;O<T.length;O++)f[O]===d&&(_=O);T=null!==_?T.substr(0,_+1):""}return{output:h(T)?T:l,meta:{input:e,mask:t,guide:s,placeholderChar:d,placeholder:f}}}function a(){return!0}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var o=r(1),i=r(3)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},t.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},t.maskingCharacters=["1","A","?","U","L","*"],t.placeholderCharacter="_"},function(e,t,r){"use strict";function n(e){var t=e.previousConformedInput,r=void 0===t?"":t,n=e.conformToMaskResults,o=void 0===n?{}:n,i=e.currentCaretPosition,s=void 0===i?0:i;if(0===s)return 0;var u=o.output,l=void 0===u?"":u,c=o.meta,d=void 0===c?{}:c,p=d.input,h=void 0===p?"":p,f=d.placeholderChar,v=d.placeholder,m=(0,a.getIndexOfFirstChange)(r,h),g=m-s>1;if(g)return s;var C=!(h.length<r.length),k=Math.abs(r.length-h.length)>1,P=1===h.length,y=k&&!C&&!P,b=C&&(r===l||l===v),M=""===r&&l===v,I=k||P?l:v,T=v[m]!==f,x=s;if(y)return s;if(k||P)x=0;else if(b)x--;else if(C)for(var j=s;j<v.length;j++){var E=T&&!M;if(v[j]===f){x=j+(E?1:0);break}}if(C||P){for(var _=x;_<=I.length;_++)if(I[_]===f||_===I.length)return _>l.length?l.length:_}else for(var O=x;O>=0;O--)if(I[O-1]===f||0===O)return O}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var a=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.userInput,r=void 0===t?"":t,n=e.placeholder,a=void 0===n?"":n,o=e.previousConformedInput,i=void 0===o?"":o,s=e.mask,u=void 0===s?"":s,c=e.guide,p=void 0===c?"":c,h=e.validator,f=e.currentCaretPosition,v=void 0===f?0:f,m=e.placeholderChar,g=(0,d["default"])(r,u,{previousConformedInput:i,guide:p,placeholderChar:m,validator:h}),C=g.output,k=(0,l["default"])({previousConformedInput:i,conformToMaskResults:g,currentCaretPosition:v,placeholderChar:m}),P=C===a&&0===k,y=P?"":C;return{conformedInput:y,adjustedCaretPosition:k}}function o(e){var t=e.inputValue,r=e.mask,n=e.validator,a=e.guide,o=e.placeholderChar,i=s(t),u=i.length>0,l={validator:n,guide:a,previousConformedInput:"",placeholderChar:o},c=u?(0,d["default"])(i,r,l):{output:""},h=c.output;return{conformedInput:h,adjustedCaretPosition:0,componentPlaceholder:(0,p.convertMaskToPlaceholder)({mask:r,placeholderChar:o})}}function i(e,t){document.activeElement===e&&e.setSelectionRange(t,t,"none")}function s(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return"";throw console.log("Text Mask received",e),new Error("The `value` provided to Text Mask needs to be a string or a number.")}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=void 0,t.processComponentChanges=a,t.getComponentInitialState=o,t.safeSetSelection=i;var u=r(4),l=n(u),c=r(2),d=n(c),p=r(1);t.convertMaskToPlaceholder=p.convertMaskToPlaceholder},function(t,r){t.exports=e}])});