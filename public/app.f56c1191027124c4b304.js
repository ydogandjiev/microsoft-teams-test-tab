/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 129:
/***/ (function(module) {

/*! For license information please see MicrosoftTeams.min.js.LICENSE.txt */
!function(e,t){ true?module.exports=t():0}("undefined"!=typeof self?self:this,(()=>(()=>{var e={446:(e,t)=>{"use strict";t.byteLength=function(e){var t=s(e),n=t[0],r=t[1];return 3*(n+r)/4-r},t.toByteArray=function(e){var t,n,i=s(e),a=i[0],u=i[1],l=new o(c(e,a,u)),d=0,f=u>0?a-4:a;for(n=0;n<f;n+=4)t=r[e.charCodeAt(n)]<<18|r[e.charCodeAt(n+1)]<<12|r[e.charCodeAt(n+2)]<<6|r[e.charCodeAt(n+3)],l[d++]=t>>16&255,l[d++]=t>>8&255,l[d++]=255&t;2===u&&(t=r[e.charCodeAt(n)]<<2|r[e.charCodeAt(n+1)]>>4,l[d++]=255&t);1===u&&(t=r[e.charCodeAt(n)]<<10|r[e.charCodeAt(n+1)]<<4|r[e.charCodeAt(n+2)]>>2,l[d++]=t>>8&255,l[d++]=255&t);return l},t.fromByteArray=function(e){for(var t,r=e.length,o=r%3,i=[],a=16383,s=0,c=r-o;s<c;s+=a)i.push(l(e,s,s+a>c?c:s+a));1===o?(t=e[r-1],i.push(n[t>>2]+n[t<<4&63]+"==")):2===o&&(t=(e[r-2]<<8)+e[r-1],i.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"="));return i.join("")};for(var n=[],r=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0;a<64;++a)n[a]=i[a],r[i.charCodeAt(a)]=a;function s(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function c(e,t,n){return 3*(t+n)/4-n}function u(e){return n[e>>18&63]+n[e>>12&63]+n[e>>6&63]+n[63&e]}function l(e,t,n){for(var r,o=[],i=t;i<n;i+=3)r=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]),o.push(u(r));return o.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},313:(e,t,n)=>{"use strict";const r=n(446),o=n(164),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.lW=c,t.h2=50;const a=2147483647;function s(e){if(e>a)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,c.prototype),t}function c(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return f(e)}return u(e,t,n)}function u(e,t,n){if("string"==typeof e)return p(e,t);if(ArrayBuffer.isView(e))return g(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(oe(e,ArrayBuffer)||e&&oe(e.buffer,ArrayBuffer))return m(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(oe(e,SharedArrayBuffer)||e&&oe(e.buffer,SharedArrayBuffer)))return m(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return c.from(r,t,n);const o=w(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return c.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function d(e,t,n){return l(e),e<=0?s(e):void 0!==t?"string"==typeof n?s(e).fill(t,n):s(e).fill(t):s(e)}function f(e){return l(e),s(e<0?0:0|v(e))}function p(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!c.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|y(e,t);let r=s(n);const o=r.write(e,t);return o!==n&&(r=r.slice(0,o)),r}function h(e){const t=e.length<0?0:0|v(e.length),n=s(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function g(e){if(oe(e,Uint8Array)){const t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return h(e)}function m(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,c.prototype),r}function w(e){if(c.isBuffer(e)){const t=0|v(e.length),n=s(t);return 0===n.length||e.copy(n,0,0,t),n}return void 0!==e.length?"number"!=typeof e.length||ie(e.length)?s(0):h(e):"Buffer"===e.type&&Array.isArray(e.data)?h(e.data):void 0}function v(e){if(e>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|e}function y(e,t){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||oe(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ne(e).length;default:if(o)return r?-1:Y(e).length;t=(""+t).toLowerCase(),o=!0}}function C(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return H(this,t,n);case"utf8":case"utf-8":return O(this,t,n);case"ascii":return U(this,t,n);case"latin1":case"binary":return L(this,t,n);case"base64":return R(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function b(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function S(e,t,n,r,o){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),ie(n=+n)&&(n=o?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(o)return-1;n=e.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof t&&(t=c.from(t,r)),c.isBuffer(t))return 0===t.length?-1:E(e,t,n,r,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):E(e,[t],n,r,o);throw new TypeError("val must be string, number or Buffer")}function E(e,t,n,r,o){let i,a=1,s=e.length,c=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;a=2,s/=2,c/=2,n/=2}function u(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(o){let r=-1;for(i=n;i<s;i++)if(u(e,i)===u(t,-1===r?0:i-r)){if(-1===r&&(r=i),i-r+1===c)return r*a}else-1!==r&&(i-=i-r),r=-1}else for(n+c>s&&(n=s-c),i=n;i>=0;i--){let n=!0;for(let r=0;r<c;r++)if(u(e,i+r)!==u(t,r)){n=!1;break}if(n)return i}return-1}function I(e,t,n,r){n=Number(n)||0;const o=e.length-n;r?(r=Number(r))>o&&(r=o):r=o;const i=t.length;let a;for(r>i/2&&(r=i/2),a=0;a<r;++a){const r=parseInt(t.substr(2*a,2),16);if(ie(r))return a;e[n+a]=r}return a}function A(e,t,n,r){return re(Y(t,e.length-n),e,n,r)}function T(e,t,n,r){return re(ee(t),e,n,r)}function P(e,t,n,r){return re(ne(t),e,n,r)}function F(e,t,n,r){return re(te(t,e.length-n),e,n,r)}function R(e,t,n){return 0===t&&n===e.length?r.fromByteArray(e):r.fromByteArray(e.slice(t,n))}function O(e,t,n){n=Math.min(e.length,n);const r=[];let o=t;for(;o<n;){const t=e[o];let i=null,a=t>239?4:t>223?3:t>191?2:1;if(o+a<=n){let n,r,s,c;switch(a){case 1:t<128&&(i=t);break;case 2:n=e[o+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(i=c));break;case 3:n=e[o+1],r=e[o+2],128==(192&n)&&128==(192&r)&&(c=(15&t)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(i=c));break;case 4:n=e[o+1],r=e[o+2],s=e[o+3],128==(192&n)&&128==(192&r)&&128==(192&s)&&(c=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&s,c>65535&&c<1114112&&(i=c))}}null===i?(i=65533,a=1):i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|1023&i),r.push(i),o+=a}return M(r)}c.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),c.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),c.poolSize=8192,c.from=function(e,t,n){return u(e,t,n)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array),c.alloc=function(e,t,n){return d(e,t,n)},c.allocUnsafe=function(e){return f(e)},c.allocUnsafeSlow=function(e){return f(e)},c.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==c.prototype},c.compare=function(e,t){if(oe(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),oe(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let o=0,i=Math.min(n,r);o<i;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=c.allocUnsafe(t);let o=0;for(n=0;n<e.length;++n){let t=e[n];if(oe(t,Uint8Array))o+t.length>r.length?(c.isBuffer(t)||(t=c.from(t)),t.copy(r,o)):Uint8Array.prototype.set.call(r,t,o);else{if(!c.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,o)}o+=t.length}return r},c.byteLength=y,c.prototype._isBuffer=!0,c.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},c.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},c.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},c.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?O(this,0,e):C.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){let e="";const n=t.h2;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"},i&&(c.prototype[i]=c.prototype.inspect),c.prototype.compare=function(e,t,n,r,o){if(oe(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),t<0||n>e.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&t>=n)return 0;if(r>=o)return-1;if(t>=n)return 1;if(this===e)return 0;let i=(o>>>=0)-(r>>>=0),a=(n>>>=0)-(t>>>=0);const s=Math.min(i,a),u=this.slice(r,o),l=e.slice(t,n);for(let e=0;e<s;++e)if(u[e]!==l[e]){i=u[e],a=l[e];break}return i<a?-1:a<i?1:0},c.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},c.prototype.indexOf=function(e,t,n){return S(this,e,t,n,!0)},c.prototype.lastIndexOf=function(e,t,n){return S(this,e,t,n,!1)},c.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const o=this.length-t;if((void 0===n||n>o)&&(n=o),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let i=!1;for(;;)switch(r){case"hex":return I(this,e,t,n);case"utf8":case"utf-8":return A(this,e,t,n);case"ascii":case"latin1":case"binary":return T(this,e,t,n);case"base64":return P(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return F(this,e,t,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const k=4096;function M(e){const t=e.length;if(t<=k)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=k));return n}function U(e,t,n){let r="";n=Math.min(e.length,n);for(let o=t;o<n;++o)r+=String.fromCharCode(127&e[o]);return r}function L(e,t,n){let r="";n=Math.min(e.length,n);for(let o=t;o<n;++o)r+=String.fromCharCode(e[o]);return r}function H(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let o="";for(let r=t;r<n;++r)o+=ae[e[r]];return o}function N(e,t,n){const r=e.slice(t,n);let o="";for(let e=0;e<r.length-1;e+=2)o+=String.fromCharCode(r[e]+256*r[e+1]);return o}function B(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function x(e,t,n,r,o,i){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function D(e,t,n,r,o){J(t,r,o,e,n,7);let i=Number(t&BigInt(4294967295));e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,n}function _(e,t,n,r,o){J(t,r,o,e,n,7);let i=Number(t&BigInt(4294967295));e[n+7]=i,i>>=8,e[n+6]=i,i>>=8,e[n+5]=i,i>>=8,e[n+4]=i;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=a,a>>=8,e[n+2]=a,a>>=8,e[n+1]=a,a>>=8,e[n]=a,n+8}function V(e,t,n,r,o,i){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function W(e,t,n,r,i){return t=+t,n>>>=0,i||V(e,0,n,4),o.write(e,t,n,r,23,4),n+4}function j(e,t,n,r,i){return t=+t,n>>>=0,i||V(e,0,n,8),o.write(e,t,n,r,52,8),n+8}c.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,c.prototype),r},c.prototype.readUintLE=c.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||B(e,t,this.length);let r=this[e],o=1,i=0;for(;++i<t&&(o*=256);)r+=this[e+i]*o;return r},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||B(e,t,this.length);let r=this[e+--t],o=1;for(;t>0&&(o*=256);)r+=this[e+--t]*o;return r},c.prototype.readUint8=c.prototype.readUInt8=function(e,t){return e>>>=0,t||B(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,t){return e>>>=0,t||B(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,t){return e>>>=0,t||B(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,t){return e>>>=0,t||B(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,t){return e>>>=0,t||B(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readBigUInt64LE=se((function(e){K(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Z(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,o=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(o)<<BigInt(32))})),c.prototype.readBigUInt64BE=se((function(e){K(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Z(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],o=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(o)})),c.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||B(e,t,this.length);let r=this[e],o=1,i=0;for(;++i<t&&(o*=256);)r+=this[e+i]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*t)),r},c.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||B(e,t,this.length);let r=t,o=1,i=this[e+--r];for(;r>0&&(o*=256);)i+=this[e+--r]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*t)),i},c.prototype.readInt8=function(e,t){return e>>>=0,t||B(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){e>>>=0,t||B(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(e,t){e>>>=0,t||B(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt32LE=function(e,t){return e>>>=0,t||B(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return e>>>=0,t||B(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readBigInt64LE=se((function(e){K(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Z(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),c.prototype.readBigInt64BE=se((function(e){K(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Z(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),c.prototype.readFloatLE=function(e,t){return e>>>=0,t||B(e,4,this.length),o.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return e>>>=0,t||B(e,4,this.length),o.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return e>>>=0,t||B(e,8,this.length),o.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return e>>>=0,t||B(e,8,this.length),o.read(this,e,!1,52,8)},c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){x(this,e,t,n,Math.pow(2,8*n)-1,0)}let o=1,i=0;for(this[t]=255&e;++i<n&&(o*=256);)this[t+i]=e/o&255;return t+n},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){x(this,e,t,n,Math.pow(2,8*n)-1,0)}let o=n-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+n},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||x(this,e,t,1,255,0),this[t]=255&e,t+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||x(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||x(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||x(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||x(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigUInt64LE=se((function(e,t=0){return D(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeBigUInt64BE=se((function(e,t=0){return _(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);x(this,e,t,n,r-1,-r)}let o=0,i=1,a=0;for(this[t]=255&e;++o<n&&(i*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/i>>0)-a&255;return t+n},c.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);x(this,e,t,n,r-1,-r)}let o=n-1,i=1,a=0;for(this[t+o]=255&e;--o>=0&&(i*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/i>>0)-a&255;return t+n},c.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||x(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||x(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||x(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||x(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},c.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||x(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigInt64LE=se((function(e,t=0){return D(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeBigInt64BE=se((function(e,t=0){return _(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeFloatLE=function(e,t,n){return W(this,e,t,!0,n)},c.prototype.writeFloatBE=function(e,t,n){return W(this,e,t,!1,n)},c.prototype.writeDoubleLE=function(e,t,n){return j(this,e,t,!0,n)},c.prototype.writeDoubleBE=function(e,t,n){return j(this,e,t,!1,n)},c.prototype.copy=function(e,t,n,r){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const o=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),o},c.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{const i=c.isBuffer(e)?e:c.from(e,r),a=i.length;if(0===a)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<n-t;++o)this[o+t]=i[o%a]}return this};const z={};function $(e,t,n){z[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function q(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function G(e,t,n){K(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||Z(t,e.length-(n+1))}function J(e,t,n,r,o,i){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let o;throw o=i>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(i+1)}${r}`:`>= -(2${r} ** ${8*(i+1)-1}${r}) and < 2 ** ${8*(i+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new z.ERR_OUT_OF_RANGE("value",o,e)}G(r,o,i)}function K(e,t){if("number"!=typeof e)throw new z.ERR_INVALID_ARG_TYPE(t,"number",e)}function Z(e,t,n){if(Math.floor(e)!==e)throw K(e,n),new z.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new z.ERR_BUFFER_OUT_OF_BOUNDS;throw new z.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}$("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),$("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),$("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>2**32?o=q(String(n)):"bigint"==typeof n&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=q(o)),o+="n"),r+=` It must be ${t}. Received ${o}`,r}),RangeError);const Q=/[^+/0-9A-Za-z-_]/g;function X(e){if((e=(e=e.split("=")[0]).trim().replace(Q,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}function Y(e,t){let n;t=t||1/0;const r=e.length;let o=null;const i=[];for(let a=0;a<r;++a){if(n=e.charCodeAt(a),n>55295&&n<57344){if(!o){if(n>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(t-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((t-=1)<0)break;i.push(n)}else if(n<2048){if((t-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function ee(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}function te(e,t){let n,r,o;const i=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)n=e.charCodeAt(a),r=n>>8,o=n%256,i.push(o),i.push(r);return i}function ne(e){return r.toByteArray(X(e))}function re(e,t,n,r){let o;for(o=0;o<r&&!(o+n>=t.length||o>=e.length);++o)t[o+n]=e[o];return o}function oe(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function ie(e){return e!=e}const ae=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let o=0;o<16;++o)t[r+o]=e[n]+e[o]}return t}();function se(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}},302:(e,t,n)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(r++,"%c"===e&&(o=r))})),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(65)(t);const{formatters:r}=e.exports;r.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},65:(e,t,n)=>{e.exports=function(e){function t(e){let n,o,i,a=null;function s(...e){if(!s.enabled)return;const r=s,o=Number(new Date),i=o-(n||o);r.diff=i,r.prev=n,r.curr=o,n=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return"%";a++;const i=t.formatters[o];if("function"==typeof i){const t=e[a];n=i.call(r,t),e.splice(a,1),a--}return n})),t.formatArgs.call(r,e);(r.log||t.log).apply(r,e)}return s.namespace=e,s.useColors=t.useColors(),s.color=t.selectColor(e),s.extend=r,s.destroy=t.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(o!==t.namespaces&&(o=t.namespaces,i=t.enabled(e)),i),set:e=>{a=e}}),"function"==typeof t.init&&t.init(s),s}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(247),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},164:(e,t)=>{t.read=function(e,t,n,r,o){var i,a,s=8*o-r-1,c=(1<<s)-1,u=c>>1,l=-7,d=n?o-1:0,f=n?-1:1,p=e[t+d];for(d+=f,i=p&(1<<-l)-1,p>>=-l,l+=s;l>0;i=256*i+e[t+d],d+=f,l-=8);for(a=i&(1<<-l)-1,i>>=-l,l+=r;l>0;a=256*a+e[t+d],d+=f,l-=8);if(0===i)i=1-u;else{if(i===c)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,r),i-=u}return(p?-1:1)*a*Math.pow(2,i-r)},t.write=function(e,t,n,r,o,i){var a,s,c,u=8*i-o-1,l=(1<<u)-1,d=l>>1,f=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:i-1,h=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=l):(a=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-a))<1&&(a--,c*=2),(t+=a+d>=1?f/c:f*Math.pow(2,1-d))*c>=2&&(a++,c/=2),a+d>=l?(s=0,a=l):a+d>=1?(s=(t*c-1)*Math.pow(2,o),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,o),a=0));o>=8;e[n+p]=255&s,p+=h,s/=256,o-=8);for(a=a<<o|s,u+=o;u>0;e[n+p]=255&a,p+=h,a/=256,u-=8);e[n+p-h]|=128*g}},247:e=>{var t=1e3,n=60*t,r=60*n,o=24*r;function i(e){if(!((e=String(e)).length>100)){var i=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(i){var a=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*a;case"weeks":case"week":case"w":return 6048e5*a;case"days":case"day":case"d":return a*o;case"hours":case"hour":case"hrs":case"hr":case"h":return a*r;case"minutes":case"minute":case"mins":case"min":case"m":return a*n;case"seconds":case"second":case"secs":case"sec":case"s":return a*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}function a(e){var i=Math.abs(e);return i>=o?Math.round(e/o)+"d":i>=r?Math.round(e/r)+"h":i>=n?Math.round(e/n)+"m":i>=t?Math.round(e/t)+"s":e+"ms"}function s(e){var i=Math.abs(e);return i>=o?c(e,i,o,"day"):i>=r?c(e,i,r,"hour"):i>=n?c(e,i,n,"minute"):i>=t?c(e,i,t,"second"):e+" ms"}function c(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return i(e);if("number"===n&&isFinite(e))return t.long?s(e):a(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})();var r={};return(()=>{"use strict";n.r(r),n.d(r,{ActionObjectType:()=>k,ChannelType:()=>W,ChildAppWindow:()=>Vr,DialogDimension:()=>V,ErrorCode:()=>U,FileOpenPreference:()=>O,FrameContexts:()=>x,HostClientType:()=>N,HostName:()=>B,LiveShareHost:()=>mi,ParentAppWindow:()=>Wr,SecondaryM365ContentIdName:()=>M,TaskModuleDimension:()=>j,TeamType:()=>D,UserTeamRole:()=>_,app:()=>It,appEntity:()=>qi,appInitialization:()=>Lo,appInstallDialog:()=>gr,authentication:()=>rt,barCode:()=>Mr,calendar:()=>Kr,call:()=>Mo,chat:()=>Ur,clipboard:()=>Hr,conversations:()=>ur,dialog:()=>ut,enablePrintCapability:()=>Do,executeDeepLink:()=>ti,externalAppAuthentication:()=>Mi,externalAppCardActions:()=>Ui,externalAppCommands:()=>Hi,files:()=>Bi,geoLocation:()=>xr,getAdaptiveCardSchemaVersion:()=>Dr,getContext:()=>Vo,getMruTabInstances:()=>Yo,getTabInstances:()=>Xo,initialize:()=>xo,initializeWithFrameContext:()=>ri,liveShare:()=>gi,location:()=>zr,logs:()=>er,mail:()=>Zr,marketplace:()=>Oi,media:()=>vr,meeting:()=>Gr,meetingRoom:()=>Di,menus:()=>dt,messageChannels:()=>_i,monetization:()=>Jr,navigateBack:()=>ci,navigateCrossDomain:()=>si,navigateToTab:()=>ai,nestedAppAuth:()=>Nr,notifications:()=>Wi,openFilePreview:()=>sr,otherAppStateChange:()=>ji,pages:()=>xt,people:()=>Xr,print:()=>_o,profile:()=>to,registerAppButtonClickHandler:()=>zo,registerAppButtonHoverEnterHandler:()=>$o,registerAppButtonHoverLeaveHandler:()=>qo,registerBackButtonHandler:()=>Go,registerBeforeUnloadHandler:()=>Ko,registerChangeSettingsHandler:()=>Qo,registerCustomHandler:()=>ir,registerFocusEnterHandler:()=>Zo,registerFullScreenHandler:()=>jo,registerOnLoadHandler:()=>Jo,registerOnThemeChangeHandler:()=>Wo,registerUserSettingsChangeHandler:()=>ar,remoteCamera:()=>$i,returnFocus:()=>ii,search:()=>Io,secondaryBrowser:()=>jr,sendCustomEvent:()=>or,sendCustomMessage:()=>rr,setFrameContext:()=>ni,settings:()=>li,shareDeepLink:()=>ei,sharing:()=>To,stageView:()=>Po,tasks:()=>pi,teams:()=>Ji,teamsCore:()=>Qr,thirdPartyCloudStorage:()=>No,uploadCustomApp:()=>nr,version:()=>He,videoEffects:()=>So,videoEffectsEx:()=>Qi,visualMedia:()=>Oo,webStorage:()=>ko});const e=(0,n(302).debug)("teamsJs");function t(t){return e.extend(t)}function o(e,t){return`${e}_${t}`}function i(e){return/^v\d+_[\w.]+$/.test(e)}const a=JSON.parse('{"validOrigins":["teams.microsoft.com","teams.microsoft.us","gov.teams.microsoft.us","dod.teams.microsoft.us","int.teams.microsoft.com","outlook.office.com","outlook-sdf.office.com","outlook.office365.com","outlook-sdf.office365.com","outlook.live.com","outlook-sdf.live.com","teams.live.com","local.teams.live.com","local.teams.live.com:8080","local.teams.office.com","local.teams.office.com:8080","devspaces.skype.com","*.www.office.com","www.office.com","word.office.com","excel.office.com","powerpoint.office.com","www.officeppe.com","*.www.microsoft365.com","www.microsoft365.com","bing.com","edgeservices.bing.com","www.bing.com","www.staging-bing-int.com","teams.cloud.microsoft","outlook.cloud.microsoft","m365.cloud.microsoft","copilot.microsoft.com","windows.msn.com"]}');const s="2.0.1",c="2.0.3",u="1.9.0",l="1.8.0",d=n.t(a,2).validOrigins,f=new URL("https://res.cdn.office.net/teams-js/validDomains/json/validDomains.json"),p=/^https:\/\//,h="https",g="teams.microsoft.com",m="The library has not yet been initialized",w="The runtime has not yet been initialized",v="The runtime version is not supported";class y{}y.initializeCalled=!1,y.initializeCompleted=!1,y.additionalValidOrigins=[],y.initializePromise=void 0,y.isFramelessWindow=!1,y.frameContext=void 0,y.hostClientType=void 0,y.printCapabilityEnabled=!1;var C=n(313);const b={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let S;const E=new Uint8Array(16);function I(){if(!S&&(S="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!S))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return S(E)}const A=[];for(let e=0;e<256;++e)A.push((e+256).toString(16).slice(1));function T(e,t=0){return(A[e[t+0]]+A[e[t+1]]+A[e[t+2]]+A[e[t+3]]+"-"+A[e[t+4]]+A[e[t+5]]+"-"+A[e[t+6]]+A[e[t+7]]+"-"+A[e[t+8]]+A[e[t+9]]+"-"+A[e[t+10]]+A[e[t+11]]+A[e[t+12]]+A[e[t+13]]+A[e[t+14]]+A[e[t+15]]).toLowerCase()}const P=function(e,t,n){if(b.randomUUID&&!t&&!e)return b.randomUUID();const r=(e=e||{}).random||(e.rng||I)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return T(r)},F=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const R=function(e){return"string"==typeof e&&F.test(e)};var O,k,M,U,L,H,N,B,x,D,_,V;!function(e){e.Inline="inline",e.Desktop="desktop",e.Web="web"}(O||(O={})),function(e){e.M365Content="m365content"}(k||(k={})),function(e){e.DriveId="driveId",e.GroupId="groupId",e.SiteId="siteId",e.UserId="userId"}(M||(M={})),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT=501]="NOT_SUPPORTED_IN_CURRENT_CONTEXT",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(U||(U={})),function(e){e.GeoLocation="geolocation",e.Media="media"}(L||(L={})),function(e){e.TextPlain="text/plain",e.TextHtml="text/html",e.ImagePNG="image/png",e.ImageJPEG="image/jpeg"}(H||(H={})),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.ipados="ipados",e.macos="macos",e.rigel="rigel",e.surfaceHub="surfaceHub",e.teamsRoomsWindows="teamsRoomsWindows",e.teamsRoomsAndroid="teamsRoomsAndroid",e.teamsPhones="teamsPhones",e.teamsDisplays="teamsDisplays"}(N||(N={})),function(e){e.office="Office",e.outlook="Outlook",e.outlookWin32="OutlookWin32",e.orange="Orange",e.places="Places",e.teams="Teams",e.teamsModern="TeamsModern"}(B||(B={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage",e.meetingStage="meetingStage"}(x||(x={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(D||(D={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(_||(_={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(V||(V={}));var W,j=V;!function(e){e.Regular="Regular",e.Private="Private",e.Shared="Shared"}(W||(W={}));const z={errorCode:U.NOT_SUPPORTED_ON_PLATFORM},$=1,q=5,G={adaptiveCardSchemaVersion:{majorVersion:1,minorVersion:5}},J=new Error("Invalid input count: Must supply a valid image count (limit of 10)."),K=new Error("Invalid response: Received more images than the specified max limit in the response.");function Z(e){return(t,n)=>{if(!t)throw new Error(e||n)}}function Q(e,t){if("string"!=typeof e||"string"!=typeof t)return NaN;const n=e.split("."),r=t.split(".");function o(e){return/^\d+$/.test(e)}if(!n.every(o)||!r.every(o))return NaN;for(;n.length<r.length;)n.push("0");for(;r.length<n.length;)r.push("0");for(let e=0;e<n.length;++e)if(Number(n[e])!=Number(r[e]))return Number(n[e])>Number(r[e])?1:-1;return 0}function X(){return P()}function Y(e){return Object.keys(e).forEach((t=>{"object"==typeof e[t]&&Y(e[t])})),Object.freeze(e)}function ee(e,t,...n){const r=e(...n);return r.then((e=>{t&&t(void 0,e)})).catch((e=>{t&&t(e)})),r}function te(e,t,...n){const r=e(...n);return r.then((()=>{t&&t(null)})).catch((e=>{t&&t(e)})),r}function ne(e,t,...n){const r=e(...n);return r.then((e=>{t&&t(null,e)})).catch((e=>{t&&t(e,null)})),r}function re(e,t,n){return new Promise(((r,o)=>{const i=setTimeout(o,t,n);e().then((e=>{clearTimeout(i),r(e)})).catch((e=>{clearTimeout(i),o(e)}))}))}function oe(e){const t=new URL("https://teams.microsoft.com/l/entity/"+encodeURIComponent(e.appId)+"/"+encodeURIComponent(e.pageId));return e.webUrl&&t.searchParams.append("webUrl",e.webUrl),(e.channelId||e.subPageId)&&t.searchParams.append("context",JSON.stringify({channelId:e.channelId,subEntityId:e.subPageId})),t.toString()}function ie(e){return!(Q(`${e.majorVersion}.${e.minorVersion}`,`${$}.${q}`)>=0)}function ae(e){return"https:"===e.protocol}function se(e,t){return new Promise(((n,r)=>{if(e||r("MimeType cannot be null or empty."),t||r("Base64 string cannot be null or empty."),e.startsWith("image/")){const r=atob(t),o=new Uint8Array(r.length);for(let e=0;e<r.length;e++)o[e]=r.charCodeAt(e);n(new Blob([o],{type:e}))}const o=C.lW.from(t,"base64").toString();n(new Blob([o],{type:e}))}))}function ce(e){return new Promise(((t,n)=>{0===e.size&&n(new Error("Blob cannot be empty."));const r=new FileReader;r.onloadend=()=>{r.result?t(r.result.toString().split(",")[1]):n(new Error("Failed to read the blob"))},r.onerror=()=>{n(r.error)},r.readAsDataURL(e)}))}function ue(){if(le())throw new Error("window object undefined at SSR check");return window}function le(){return"undefined"==typeof window}function de(e,t){if(fe(e)||!pe(e)||!he(e))throw t||new Error("id is not valid.")}function fe(e){return/<script[^>]*>[\s\S]*?<\/script[^>]*>/gi.test(e)}function pe(e){return e.length<256&&e.length>4}function he(e){for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);if(n<32||n>126)return!1}return!0}function ge(e){if(!e)throw new Error("id must not be empty");if(!1===R(e))throw new Error("id must be a valid UUID")}var me=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const we=t("runtime"),ve=4;function ye(e){return e.apiVersion===ve}const Ce={apiVersion:-1,supports:{}};function be(e){if(ye(e))return!0;throw-1===e.apiVersion?new Error(w):new Error(v)}let Se=Ce;const Ee={apiVersion:4,isNAAChannelRecommended:!1,hostVersionsInfo:G,isLegacyTeams:!0,supports:{appInstallDialog:{},appEntity:{},call:{},chat:{},conversations:{},dialog:{card:{bot:{}},url:{bot:{},parentCommunication:{}},update:{}},interactive:{},logs:{},meetingRoom:{},menus:{},monetization:{},notifications:{},pages:{config:{},backStack:{},fullTrust:{}},remoteCamera:{},teams:{fullTrust:{}},teamsCore:{},video:{sharedFrame:{}}}},Ie=[N.desktop,N.web,N.rigel,N.surfaceHub,N.teamsRoomsWindows,N.teamsRoomsAndroid,N.teamsPhones,N.teamsDisplays],Ae=[N.android,N.ios,N.ipados],Te=[...Ie,...Ae];function Pe(e){let t=e;if(t.apiVersion<ve&&Fe.forEach((e=>{t.apiVersion===e.versionToUpgradeFrom&&(t=e.upgradeToNextVersion(t))})),ye(t))return t;throw new Error("Received a runtime that could not be upgraded to the latest version")}const Fe=[{versionToUpgradeFrom:1,upgradeToNextVersion:e=>{var t;return{apiVersion:2,hostVersionsInfo:void 0,isLegacyTeams:e.isLegacyTeams,supports:Object.assign(Object.assign({},e.supports),{dialog:e.supports.dialog?{card:void 0,url:e.supports.dialog,update:null===(t=e.supports.dialog)||void 0===t?void 0:t.update}:void 0})}}},{versionToUpgradeFrom:2,upgradeToNextVersion:e=>{const t=e.supports,{appNotification:n}=t,r=me(t,["appNotification"]);return Object.assign(Object.assign({},e),{apiVersion:3,supports:r})}},{versionToUpgradeFrom:3,upgradeToNextVersion:e=>{var t,n,r,o,i;return{apiVersion:4,hostVersionsInfo:e.hostVersionsInfo,isNAAChannelRecommended:e.isNAAChannelRecommended,isLegacyTeams:e.isLegacyTeams,supports:Object.assign(Object.assign({},e.supports),{dialog:e.supports.dialog?{card:null===(t=e.supports.dialog)||void 0===t?void 0:t.card,url:{bot:null===(r=null===(n=e.supports.dialog)||void 0===n?void 0:n.url)||void 0===r?void 0:r.bot,parentCommunication:(null===(o=e.supports.dialog)||void 0===o?void 0:o.url)?{}:void 0},update:null===(i=e.supports.dialog)||void 0===i?void 0:i.update}:void 0})}}}],Re={"1.0.0":[{capability:{pages:{appButton:{},tabs:{}},stageView:{}},hostClientTypes:Ie}],"1.9.0":[{capability:{location:{}},hostClientTypes:Te}],"2.0.0":[{capability:{people:{}},hostClientTypes:Te},{capability:{sharing:{}},hostClientTypes:[N.desktop,N.web]}],"2.0.1":[{capability:{teams:{fullTrust:{joinedTeams:{}}}},hostClientTypes:[N.android,N.desktop,N.ios,N.teamsRoomsAndroid,N.teamsPhones,N.teamsDisplays,N.web]},{capability:{webStorage:{}},hostClientTypes:[N.desktop]}],"2.0.5":[{capability:{webStorage:{}},hostClientTypes:[N.android,N.ios]}],"2.0.8":[{capability:{sharing:{}},hostClientTypes:[N.android,N.ios]}]},Oe=we.extend("generateBackCompatRuntimeConfig");function ke(e,t){const n=Object.assign({},e);for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&("object"!=typeof t[r]||Array.isArray(t[r])?r in e||(n[r]=t[r]):n[r]=ke(e[r]||{},t[r]));return n}function Me(e,t,n){Oe("generating back compat runtime config for %s",e);let r=Object.assign({},t.supports);Oe("Supported capabilities in config before updating based on highestSupportedVersion: %o",r),Object.keys(n).forEach((t=>{Q(e,t)>=0&&n[t].forEach((e=>{void 0!==y.hostClientType&&e.hostClientTypes.includes(y.hostClientType)&&(r=ke(r,e.capability))}))}));const o={apiVersion:ve,hostVersionsInfo:G,isLegacyTeams:!0,supports:r};return Oe("Runtime config after updating based on highestSupportedVersion: %o",o),o}const Ue=we.extend("applyRuntimeConfig");function Le(e){"string"==typeof e.apiVersion&&(Ue("Trying to apply runtime with string apiVersion, processing as v1: %o",e),e=Object.assign(Object.assign({},e),{apiVersion:1})),Ue("Fast-forwarding runtime %o",e);const t=Pe(e);Ue("Applying runtime %o",t),Se=Y(t)}const He="2.22.0",Ne=t("internal"),Be=Ne.extend("ensureInitializeCalled"),xe=Ne.extend("ensureInitialized");function De(){if(!y.initializeCalled)throw Be(m),new Error(m)}function _e(e,...t){if(!y.initializeCompleted)throw xe("%s. initializeCalled: %s",m,y.initializeCalled.toString()),new Error(m);if(t&&t.length>0){let e=!1;for(let n=0;n<t.length;n++)if(t[n]===y.frameContext){e=!0;break}if(!e)throw new Error(`This call is only allowed in following contexts: ${JSON.stringify(t)}. Current context: "${y.frameContext}".`)}return be(e)}function Ve(e=s){const t=Q(y.clientSupportedSDKVersion,e);return!isNaN(t)&&t>=0}function We(){return y.hostClientType==N.android||y.hostClientType==N.ios||y.hostClientType==N.ipados}function je(e=s){if(!We()){throw{errorCode:U.NOT_SUPPORTED_ON_PLATFORM}}if(!Ve(e)){throw{errorCode:U.OLD_PLATFORM}}}function ze(e){let t=y.additionalValidOrigins.concat(e.filter((e=>"string"==typeof e&&p.test(e))));const n={};t=t.filter((e=>!n[e]&&(n[e]=!0,!0))),y.additionalValidOrigins=t}function $e(e){return null==e}var qe=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};let Ge=[];const Je=t("validateOrigin");function Ke(){return qe(this,void 0,void 0,(function*(){yield Qe()}))}function Ze(){return 0!==Ge.length}function Qe(){return qe(this,void 0,void 0,(function*(){return Ze()?Ge:le()?(Ge=d,d):fetch(f).then((e=>{if(!e.ok)throw new Error("Invalid Response from Fetch Call");return e.json().then((e=>{if(Xe(JSON.stringify(e)))return Ge=e.validOrigins,Ge;throw new Error("Valid Origins List Is Invalid")}))})).catch((e=>(Je("validOrigins fetch call to CDN failed with error: %s. Defaulting to fallback list",e),Ge=d,Ge)))}))}function Xe(e){let t=JSON.parse(e);try{t=JSON.parse(e)}catch(e){return!1}if(!t.validOrigins)return!1;for(const e of t.validOrigins)try{new URL("https://"+e)}catch(t){return Je("isValidOriginsFromCDN call failed to validate origin: %s",e),!1}return!0}function Ye(e,t){if("*."===e.substring(0,2)){const n=e.substring(1);if(t.length>n.length&&t.split(".").length===n.split(".").length&&t.substring(t.length-n.length)===n)return!0}else if(e===t)return!0;return!1}function et(e){return Qe().then((t=>{if(!ae(e))return Je("Origin %s is invalid because it is not using https protocol. Protocol being used: %s",e,e.protocol),!1;const n=e.host;if(t.some((e=>Ye(e,n))))return!0;for(const e of y.additionalValidOrigins){if(Ye("https://"===e.substring(0,8)?e.substring(8):e,n))return!0}return Je("Origin %s is invalid because it is not an origin approved by this library or included in the call to app.initialize.\nOrigins approved by this library: %o\nOrigins included in app.initialize: %o",e,t,y.additionalValidOrigins),!1}))}const tt="v1",nt="v2";var rt;!function(e){let t,n,r,i;function a(e,n){return new Promise(((r,o)=>{if(y.hostClientType===N.desktop||y.hostClientType===N.android||y.hostClientType===N.ios||y.hostClientType===N.ipados||y.hostClientType===N.macos||y.hostClientType===N.rigel||y.hostClientType===N.teamsRoomsWindows||y.hostClientType===N.teamsRoomsAndroid||y.hostClientType===N.teamsPhones||y.hostClientType===N.teamsDisplays||y.hostClientType===N.surfaceHub){const t=document.createElement("a");t.href=n.url,r(yn(e,"authentication.authenticate",[t.href,n.width,n.height,n.isExternal]).then((([e,t])=>{if(e)return t;throw new Error(t)})))}else t={success:r,fail:o},l(n)}))}function s(e,t){return new Promise((n=>{n(yn(e,"authentication.getAuthToken",[null==t?void 0:t.resources,null==t?void 0:t.claims,null==t?void 0:t.silent,null==t?void 0:t.tenantId]))})).then((([e,t])=>{if(e)return t;throw new Error(t)}))}function c(e){return new Promise((t=>{t(yn(e,"authentication.getUser"))})).then((([e,t])=>{if(e)return t;throw new Error(t)}))}function u(){d();try{dn.childWindow&&dn.childWindow.close()}finally{dn.childWindow=null,dn.childOrigin=null}}function l(e){u();let t=e.width||600,n=e.height||400;t=Math.min(t,dn.currentWindow.outerWidth-400),n=Math.min(n,dn.currentWindow.outerHeight-200);const r=document.createElement("a");r.href=e.url.replace("{oauthRedirectMethod}","web");let o=void 0!==dn.currentWindow.screenLeft?dn.currentWindow.screenLeft:dn.currentWindow.screenX,i=void 0!==dn.currentWindow.screenTop?dn.currentWindow.screenTop:dn.currentWindow.screenY;o+=dn.currentWindow.outerWidth/2-t/2,i+=dn.currentWindow.outerHeight/2-n/2,dn.childWindow=dn.currentWindow.open(r.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+i+", left="+o+", width="+t+", height="+n),dn.childWindow?f():h("FailedToOpenWindow")}function d(){n&&(clearInterval(n),n=0),qt("initialize"),qt("navigateCrossDomain")}function f(){d(),n=dn.currentWindow.setInterval((()=>{if(!dn.childWindow||dn.childWindow.closed)h("CancelledByUser");else{const e=dn.childOrigin;try{dn.childOrigin="*",Kn("ping")}finally{dn.childOrigin=e}}}),100),$t(o(tt,"authentication.authenticationWindow.registerInitializeHandler"),"initialize",(()=>[x.authentication,y.hostClientType])),$t(o(tt,"authentication.authenticationWindow.registerNavigateCrossDomainHandler"),"navigateCrossDomain",(()=>!1))}function p(e){try{t&&t.success(e)}finally{t=void 0,u()}}function h(e){try{t&&t.fail(new Error(e))}finally{t=void 0,u()}}e.initialize=function(){$t(o(tt,"authentication.registerAuthenticateSuccessHandler"),"authentication.authenticate.success",p,!1),$t(o(tt,"authentication.registerAuthenticateFailureHandler"),"authentication.authenticate.failure",h,!1)},e.registerAuthenticationHandlers=function(e){r=e},e.authenticate=function(e){const t=void 0!==e,n=t?e:r;if(!n)throw new Error("No parameters are provided for authentication");return _e(Se,x.content,x.sidePanel,x.settings,x.remove,x.task,x.stage,x.meetingStage),a(n.successCallback||n.failureCallback?o(tt,"authentication.authenticate"):o(nt,"authentication.authenticate"),n).then((e=>{try{return n&&n.successCallback?(n.successCallback(e),""):e}finally{t||(r=void 0)}})).catch((e=>{try{if(n&&n.failureCallback)return n.failureCallback(e.message),"";throw e}finally{t||(r=void 0)}}))},e.getAuthToken=function(e){return De(),s(e&&(e.successCallback||e.failureCallback)?o(tt,"authentication.getAuthToken"):o(nt,"authentication.getAuthToken"),e).then((t=>e&&e.successCallback?(e.successCallback(t),""):t)).catch((t=>{if(e&&e.failureCallback)return e.failureCallback(t.message),"";throw t}))},e.getUser=function(e){return De(),c(e&&(e.successCallback||e.failureCallback)?o(tt,"authentication.getUser"):o(nt,"authentication.getUser")).then((t=>e&&e.successCallback?(e.successCallback(t),null):t)).catch((t=>{if(e&&e.failureCallback)return e.failureCallback(t.message),null;throw t}))},e.notifySuccess=function(e,t){_e(Se,x.authentication),En(o(t?tt:nt,"authentication.notifySuccess"),"authentication.authenticate.success",[e]),Gn(dn.parentWindow,(()=>setTimeout((()=>dn.currentWindow.close()),200)))},e.notifyFailure=function(e,t){_e(Se,x.authentication),En(o(t?tt:nt,"authentication.notifyFailure"),"authentication.authenticate.failure",[e]),Gn(dn.parentWindow,(()=>setTimeout((()=>dn.currentWindow.close()),200)))},function(e){e.Public="public",e.EUDB="eudb",e.Other="other"}(i=e.DataResidency||(e.DataResidency={}))}(rt||(rt={}));const ot="v2";function it(e,t){if(_e(Se,x.content,x.sidePanel,x.task,x.meetingStage),!ut.update.isSupported())throw z;En(e,"tasks.updateTask",[t])}function at(e,t,n,r){if(_e(Se,x.content,x.sidePanel,x.meetingStage),!ut.url.isSupported())throw z;r&&$t(o(ot,"dialog.url.registerMessageForParentHandler"),"messageForParent",r);En(e,"tasks.startTask",[ut.url.getDialogInfoFromUrlDialogInfo(t)],((e,t)=>{null==n||n({err:e,result:t}),qt("messageForParent")}))}function st(e,t,n,r){if(_e(Se,x.content,x.sidePanel,x.meetingStage),!ut.url.bot.isSupported())throw z;r&&$t(o(ot,"dialog.url.bot.registerMessageForParentHandler"),"messageForParent",r);En(e,"tasks.startTask",[ut.url.getDialogInfoFromBotUrlDialogInfo(t)],((e,t)=>{null==n||n({err:e,result:t}),qt("messageForParent")}))}function ct(e,t,n){if(_e(Se,x.content,x.task),!ut.url.isSupported())throw z;En(e,"tasks.completeTask",[t,n?Array.isArray(n)?n:[n]:[]])}var ut;!function(e){const t=[];function n(e){y.frameContext&&(y.frameContext===x.task?t.push(e):qt("messageForChild"))}let r,i,a;e.initialize=function(){$t(o(ot,"dialog.registerMessageForChildHandler"),"messageForChild",n,!1)},function(e){let n,r;function i(e){return{url:e.url,height:e.size?e.size.height:V.Small,width:e.size?e.size.width:V.Small,title:e.title,fallbackUrl:e.fallbackUrl}}e.open=function(e,t,n){at(o(ot,"dialog.url.open"),e,t,n)},e.submit=function(e,t){ct(o(ot,"dialog.url.submit"),e,t)},function(e){function n(){var e,t;return _e(Se)&&!!(null===(t=null===(e=Se.supports.dialog)||void 0===e?void 0:e.url)||void 0===t?void 0:t.parentCommunication)}e.sendMessageToParentFromDialog=function(e){if(_e(Se,x.task),!n())throw z;En(o(ot,"dialog.url.parentCommunication.sendMessageToParentFromDialog"),"messageForParent",[e])},e.sendMessageToDialog=function(e){if(_e(Se,x.content,x.sidePanel,x.meetingStage),!n())throw z;En(o(ot,"dialog.url.parentCommunication.sendMessageToDialog"),"messageForChild",[e])},e.registerOnMessageFromParent=function(e){if(_e(Se,x.task),!n())throw z;for(qt("messageForChild"),$t(o(ot,"dialog.url.parentCommunication.registerMessageForChildHandler"),"messageForChild",e),t.reverse();t.length>0;){e(t.pop())}},e.isSupported=n}(n=e.parentCommunication||(e.parentCommunication={})),e.isSupported=function(){return _e(Se)&&void 0!==(Se.supports.dialog&&Se.supports.dialog.url)},function(e){e.open=function(e,t,n){st(o(ot,"dialog.url.bot.open"),e,t,n)},e.isSupported=function(){return _e(Se)&&void 0!==(Se.supports.dialog&&Se.supports.dialog.url&&Se.supports.dialog.url.bot)}}(r=e.bot||(e.bot={})),e.getDialogInfoFromUrlDialogInfo=i,e.getDialogInfoFromBotUrlDialogInfo=function(e){const t=i(e);return t.completionBotId=e.completionBotId,t}}(r=e.url||(e.url={})),e.isSupported=function(){return!(!_e(Se)||!Se.supports.dialog)},function(e){e.resize=function(e){it(o(ot,"dialog.update.resize"),e)},e.isSupported=function(){return!(!_e(Se)||!Se.supports.dialog)&&!!Se.supports.dialog.update}}(i=e.update||(e.update={})),function(e){function t(){const e=Se.hostVersionsInfo&&Se.hostVersionsInfo.adaptiveCardSchemaVersion&&!ie(Se.hostVersionsInfo.adaptiveCardSchemaVersion);return _e(Se)&&void 0!==(e&&Se.supports.dialog&&Se.supports.dialog.card)}let n;function r(e){return{card:e.card,height:e.size?e.size.height:V.Small,width:e.size?e.size.width:V.Small,title:e.title}}function i(e){const t=r(e);return t.completionBotId=e.completionBotId,t}e.open=function(e,n){if(_e(Se,x.content,x.sidePanel,x.meetingStage),!t())throw z;const i=r(e);En(o(ot,"dialog.adaptiveCard.open"),"tasks.startTask",[i],((e,t)=>{null==n||n({err:e,result:t})}))},e.isSupported=t,function(e){function t(){const e=Se.hostVersionsInfo&&Se.hostVersionsInfo.adaptiveCardSchemaVersion&&!ie(Se.hostVersionsInfo.adaptiveCardSchemaVersion);return _e(Se)&&void 0!==(e&&Se.supports.dialog&&Se.supports.dialog.card&&Se.supports.dialog.card.bot)}e.open=function(e,n){if(_e(Se,x.content,x.sidePanel,x.meetingStage),!t())throw z;const r=i(e);En(o(ot,"dialog.adaptiveCard.bot.open"),"tasks.startTask",[r],((e,t)=>{null==n||n({err:e,result:t})}))},e.isSupported=t}(n=e.bot||(e.bot={}))}(a=e.adaptiveCard||(e.adaptiveCard={}))}(ut||(ut={}));const lt="v2";var dt;!function(e){let t,n,r,i,a;!function(e){e[e.ifRoom=0]="ifRoom",e[e.overflowOnly=1]="overflowOnly"}(t=e.DisplayMode||(e.DisplayMode={}));function s(e){a&&a(e)||(_e(Se),En(o(lt,"menus.handleViewConfigItemPress"),"viewConfigItemPress",[e]))}function c(e){r&&r(e)||(_e(Se),En(o(lt,"menus.handleNavBarMenuItemPress"),"handleNavBarMenuItemPress",[e]))}function u(e){i&&i(e)||(_e(Se),En(o(lt,"menus.handleActionMenuItemPress"),"handleActionMenuItemPress",[e]))}function l(){return!(!_e(Se)||!Se.supports.menus)}e.MenuItem=class{constructor(){this.enabled=!0,this.selected=!1}},function(e){e.dropDown="dropDown",e.popOver="popOver"}(n=e.MenuListType||(e.MenuListType={})),e.initialize=function(){$t(o(lt,"menus.registerNavBarMenuItemPressHandler"),"navBarMenuItemPress",c,!1),$t(o(lt,"menus.registerActionMenuItemPressHandler"),"actionMenuItemPress",u,!1),$t(o(lt,"menus.registerSetModuleViewHandler"),"setModuleView",s,!1)},e.setUpViews=function(e,t){if(_e(Se),!l())throw z;a=t,En(o(lt,"menus.setUpViews"),"setUpViews",[e])},e.setNavBarMenu=function(e,t){if(_e(Se),!l())throw z;r=t,En(o(lt,"menus.setNavBarMenu"),"setNavBarMenu",[e])},e.showActionMenu=function(e,t){if(_e(Se),!l())throw z;i=t,En(o(lt,"menus.showActionMenu"),"showActionMenu",[e])},e.isSupported=l}(dt||(dt={}));const ft="v2",pt=5e3,ht=t("app");function gt(e,t){if(le()){return ht.extend("initialize")("window object undefined at initialization"),Promise.resolve()}return re((()=>bt(e,t)),pt,new Error("SDK initialization timed out."))}function mt(e){En(e,It.Messages.AppLoaded,[He])}function wt(e,t){En(e,It.Messages.ExpectedFailure,[t.reason,t.message])}function vt(e,t){En(e,It.Messages.Failure,[t.reason,t.message])}function yt(e){En(e,It.Messages.Success,[He])}const Ct=ht.extend("initializeHelper");function bt(e,t){return new Promise((n=>{y.initializeCalled||(y.initializeCalled=!0,Vt(),y.initializePromise=pn(t,e).then((({context:e,clientType:t,runtimeConfig:n,clientSupportedSDKVersion:r=s})=>{y.frameContext=e,y.hostClientType=t,y.clientSupportedSDKVersion=r;try{Ct("Parsing %s",n);const e=JSON.parse(n);if(Ct("Checking if %o is a valid runtime object",null!=e?e:"null"),!e||!e.apiVersion)throw new Error("Received runtime config is invalid");n&&Le(e)}catch(e){if(!(e instanceof SyntaxError))throw e;try{Ct("Attempting to parse %s as an SDK version",n),isNaN(Q(n,s))||(y.clientSupportedSDKVersion=n);const e=JSON.parse(r);if(Ct("givenRuntimeConfig parsed to %o",null!=e?e:"null"),!e)throw new Error("givenRuntimeConfig string was successfully parsed. However, it parsed to value of null");Le(e)}catch(e){if(!(e instanceof SyntaxError))throw e;Le(Me(y.clientSupportedSDKVersion,Ee,Re))}}y.initializeCompleted=!0})),rt.initialize(),dt.initialize(),xt.config.initialize(),ut.initialize()),Array.isArray(t)&&ze(t),void 0!==y.initializePromise?n(y.initializePromise):Ct("GlobalVars.initializePromise is unexpectedly undefined")}))}function St(e,t){!$e(t)&&De(),Kt(e,t)}function Et(e,t){return new Promise((n=>{_e(Se,x.content,x.sidePanel,x.settings,x.task,x.stage,x.meetingStage),n(mn(e,"executeDeepLink",t))}))}var It;function At(e){var t;return{actionInfo:e.actionInfo,app:{locale:e.locale,sessionId:e.appSessionId?e.appSessionId:"",theme:e.theme?e.theme:"default",iconPositionVertical:e.appIconPosition,osLocaleInfo:e.osLocaleInfo,parentMessageId:e.parentMessageId,userClickTime:e.userClickTime,userFileOpenPreference:e.userFileOpenPreference,host:{name:e.hostName?e.hostName:B.teams,clientType:e.hostClientType?e.hostClientType:N.web,sessionId:e.sessionId?e.sessionId:"",ringId:e.ringId},appLaunchId:e.appLaunchId},page:{id:e.entityId,frameContext:e.frameContext?e.frameContext:y.frameContext,subPageId:e.subEntityId,isFullScreen:e.isFullScreen,isMultiWindow:e.isMultiWindow,sourceOrigin:e.sourceOrigin},user:{id:null!==(t=e.userObjectId)&&void 0!==t?t:"",displayName:e.userDisplayName,isCallingAllowed:e.isCallingAllowed,isPSTNCallingAllowed:e.isPSTNCallingAllowed,licenseType:e.userLicenseType,loginHint:e.loginHint,userPrincipalName:e.userPrincipalName,tenant:e.tid?{id:e.tid,teamsSku:e.tenantSKU}:void 0},channel:e.channelId?{id:e.channelId,displayName:e.channelName,relativeUrl:e.channelRelativeUrl,membershipType:e.channelType,defaultOneNoteSectionId:e.defaultOneNoteSectionId,ownerGroupId:e.hostTeamGroupId,ownerTenantId:e.hostTeamTenantId}:void 0,chat:e.chatId?{id:e.chatId}:void 0,meeting:e.meetingId?{id:e.meetingId}:void 0,sharepoint:e.sharepoint,team:e.teamId?{internalId:e.teamId,displayName:e.teamName,type:e.teamType,groupId:e.groupId,templateId:e.teamTemplateId,isArchived:e.isTeamArchived,userRole:e.userTeamRole}:void 0,sharePointSite:e.teamSiteUrl||e.teamSiteDomain||e.teamSitePath||e.mySitePath||e.mySiteDomain?{teamSiteUrl:e.teamSiteUrl,teamSiteDomain:e.teamSiteDomain,teamSitePath:e.teamSitePath,teamSiteId:e.teamSiteId,mySitePath:e.mySitePath,mySiteDomain:e.mySiteDomain}:void 0,dialogParameters:e.dialogParameters||{}}}!function(e){const n=t("app");let r,i,a;e.Messages={AppLoaded:"appInitialization.appLoaded",Success:"appInitialization.success",Failure:"appInitialization.failure",ExpectedFailure:"appInitialization.expectedFailure"},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(r=e.FailedReason||(e.FailedReason={})),function(e){e.PermissionError="PermissionError",e.NotFound="NotFound",e.Throttling="Throttling",e.Offline="Offline",e.Other="Other"}(i=e.ExpectedFailureReason||(e.ExpectedFailureReason={})),e.isInitialized=function(){return y.initializeCompleted},e.getFrameContext=function(){return y.frameContext},function(){if(le())return;const e=document.getElementsByTagName("script"),t=e&&e[e.length-1]&&e[e.length-1].src,r="Today, teamsjs can only be used from a single script or you may see undefined behavior. This log line is used to help detect cases where teamsjs is loaded multiple times -- it is always written. The presence of the log itself does not indicate a multi-load situation, but multiples of these log lines will. If you would like to use teamjs from more than one script at the same time, please open an issue at https://github.com/OfficeDev/microsoft-teams-library-js/issues";t&&0!==t.length?n("teamsjs is being used from %s. %s",t,r):n("teamsjs is being used from a script tag embedded directly in your html. %s",r)}(),e.initialize=function(e){return Ke(),gt(o(ft,"app.initialize"),e)},e._initialize=function(e){dn.currentWindow=e},e._uninitialize=function(){y.initializeCalled&&(Wt(),y.initializeCalled=!1,y.initializeCompleted=!1,y.initializePromise=void 0,y.additionalValidOrigins=[],y.frameContext=void 0,y.hostClientType=void 0,y.isFramelessWindow=!1,hn())},e.getContext=function(){return new Promise((e=>{De(),e(gn(o(ft,"app.getContext"),"getContext"))})).then((e=>At(e)))},e.notifyAppLoaded=function(){De(),mt(o(ft,"app.notifyAppLoaded"))},e.notifySuccess=function(){De(),yt(o(ft,"app.notifySuccess"))},e.notifyFailure=function(e){De(),vt(o(ft,"app.notifyFailure"),e)},e.notifyExpectedFailure=function(e){De(),wt(o(ft,"app.notifyExpectedFailure"),e)},e.registerOnThemeChangeHandler=function(e){St(o(ft,"app.registerOnThemeChangeHandler"),e)},e.openLink=function(e){return Et(o(ft,"app.openLink"),e)},function(e){e.registerBeforeSuspendOrTerminateHandler=function(e){if(!e)throw new Error("[app.lifecycle.registerBeforeSuspendOrTerminateHandler] Handler cannot be null");_e(Se),tn(e)},e.registerOnResumeHandler=function(e){if(!e)throw new Error("[app.lifecycle.registerOnResumeHandler] Handler cannot be null");_e(Se),nn(e)}}(a=e.lifecycle||(e.lifecycle={}))}(It||(It={}));const Tt="v2";function Pt(e,t){return new Promise((n=>{if(_e(Se,x.content,x.sidePanel,x.settings,x.remove,x.task,x.stage,x.meetingStage),!xt.isSupported())throw z;n(wn(e,"navigateCrossDomain","Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.",t))}))}function Ft(e){return new Promise((t=>{if(_e(Se),!xt.backStack.isSupported())throw z;t(wn(e,"navigateBack","Back navigation is not supported in the current client or context."))}))}function Rt(e,t){return new Promise((n=>{if(_e(Se),!xt.tabs.isSupported())throw z;n(wn(e,"navigateToTab","Invalid internalTabInstanceId and/or channelId were/was provided",t))}))}function Ot(e,t){if(_e(Se),!xt.isSupported())throw z;En(e,"returnFocus",[t])}function kt(e,t){return new Promise((n=>{if(_e(Se),!xt.tabs.isSupported())throw z;n(gn(e,"getTabInstances",t))}))}function Mt(e,t){return new Promise((n=>{if(_e(Se),!xt.tabs.isSupported())throw z;n(gn(e,"getMruTabInstances",t))}))}function Ut(e,t){if(_e(Se,x.content,x.sidePanel,x.meetingStage),!xt.isSupported())throw z;En(e,"shareDeepLink",[t.subPageId,t.subPageLabel,t.subPageWebUrl])}function Lt(e,t){if(_e(Se,x.content),!xt.isSupported())throw z;En(e,"setFrameContext",[t])}function Ht(e,t){if(_e(Se,x.settings,x.remove),!xt.config.isSupported())throw z;En(e,"settings.setValidityState",[t])}function Nt(e){return new Promise((t=>{if(_e(Se,x.content,x.settings,x.remove,x.sidePanel),!xt.isSupported())throw z;t(gn(e,"settings.getSettings"))}))}function Bt(e,t){return new Promise((n=>{if(_e(Se,x.content,x.settings,x.sidePanel),!xt.config.isSupported())throw z;n(mn(e,"settings.setSettings",t))}))}var xt;!function(e){function t(e){Lt(o(Tt,"pages.setCurrentFrame"),e)}function n(){return!(!_e(Se)||!Se.supports.pages)}let r,i,a,s,c,u;e.returnFocus=function(e){Ot(o(Tt,"pages.returnFocus"),e)},e.registerFocusEnterHandler=function(e){Jt(o(Tt,"pages.registerFocusEnterHandler"),"focusEnter",e,[],(()=>{if(!n())throw z}))},e.setCurrentFrame=t,e.initializeWithFrameContext=function(e,n,r){Ke(),gt(o(Tt,"pages.initializeWithFrameContext"),r).then((()=>n&&n())),t(e)},e.getConfig=function(){return Nt(o(Tt,"pages.getConfig."))},e.navigateCrossDomain=function(e){return Pt(o(Tt,"pages.navigateCrossDomain"),e)},e.navigateToApp=function(e){return new Promise((t=>{if(_e(Se,x.content,x.sidePanel,x.settings,x.task,x.stage,x.meetingStage),!n())throw z;const r=o(Tt,"pages.navigateCrossDomain");Se.isLegacyTeams?t(mn(r,"executeDeepLink",oe(e))):t(mn(r,"pages.navigateToApp",e))}))},e.shareDeepLink=function(e){return Ut(o(Tt,"pages.shareDeepLink"),e)},e.registerFullScreenHandler=function(e){Jt(o(Tt,"pages.registerFullScreenHandler"),"fullScreenChange",e,[],(()=>{if(!$e(e)&&!n())throw z}))},e.isSupported=n,function(e){e.navigateToTab=function(e){return Rt(o(Tt,"pages.tabs.navigateToTab"),e)},e.getTabInstances=function(e){return kt(o(Tt,"pages.tabs.getTabInstances"),e)},e.getMruTabInstances=function(e){return Mt(o(Tt,"pages.tabs.getMruTabInstances"),e)},e.isSupported=function(){return!(!_e(Se)||!Se.supports.pages)&&!!Se.supports.pages.tabs}}(r=e.tabs||(e.tabs={})),function(e){let t,n;function r(e,n,r){!$e(n)&&_e(Se,x.settings),r&&r(),t=n,!$e(n)&&En(e,"registerHandler",["save"])}function i(e,t,r){!$e(t)&&_e(Se,x.remove,x.settings),r&&r(),n=t,!$e(t)&&En(e,"registerHandler",["remove"])}function a(e){const n=new s(e);t?t(n):dn.childWindow?Kn("settings.save",[e]):n.notifySuccess()}e.initialize=function(){$t(o(Tt,"pages.config.registerSettingsSaveHandler"),"settings.save",a,!1),$t(o(Tt,"pages.config.registerSettingsRemoveHandler"),"settings.remove",c,!1)},e.setValidityState=function(e){return Ht(o(Tt,"pages.config.setValidityState"),e)},e.setConfig=function(e){return Bt(o(Tt,"pages.config.setConfig"),e)},e.registerOnSaveHandler=function(e){r(o(Tt,"pages.config.registerOnSaveHandler"),e,(()=>{if(!$e(e)&&!l())throw z}))},e.registerOnSaveHandlerHelper=r,e.registerOnRemoveHandler=function(e){i(o(Tt,"pages.config.registerOnRemoveHandler"),e,(()=>{if(!$e(e)&&!l())throw z}))},e.registerOnRemoveHandlerHelper=i,e.registerChangeConfigHandler=function(e){Jt(o(Tt,"pages.config.registerChangeConfigHandler"),"changeSettings",e,[x.content],(()=>{if(!l())throw z}))};class s{constructor(e){this.notified=!1,this.result=e||{}}notifySuccess(){this.ensureNotNotified(),En(o(Tt,"pages.saveEvent.notifySuccess"),"settings.save.success"),this.notified=!0}notifyFailure(e){this.ensureNotNotified(),En(o(Tt,"pages.saveEvent.notifyFailure"),"settings.save.failure",[e]),this.notified=!0}ensureNotNotified(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")}}function c(){const e=new u;n?n(e):dn.childWindow?Kn("settings.remove",[]):e.notifySuccess()}class u{constructor(){this.notified=!1}notifySuccess(){this.ensureNotNotified(),En(o(Tt,"pages.removeEvent.notifySuccess"),"settings.remove.success"),this.notified=!0}notifyFailure(e){this.ensureNotNotified(),En(o(Tt,"pages.removeEvent.notifyFailure"),"settings.remove.failure",[e]),this.notified=!0}ensureNotNotified(){if(this.notified)throw new Error("The removeEventType may only notify success or failure once.")}}function l(){return!(!_e(Se)||!Se.supports.pages)&&!!Se.supports.pages.config}e.isSupported=l}(i=e.config||(e.config={})),function(e){let t;function n(){return Ft(o(Tt,"pages.backStack.navigateBack"))}function r(e,n,r){!$e(n)&&_e(Se),r&&r(),t=n,!$e(n)&&En(e,"registerHandler",["backButton"])}function i(){t&&t()||(dn.childWindow?Kn("backButtonPress",[]):n())}function a(){return!(!_e(Se)||!Se.supports.pages)&&!!Se.supports.pages.backStack}e._initialize=function(){$t(o(Tt,"pages.backStack.registerBackButtonPressHandler"),"backButtonPress",i,!1)},e.navigateBack=n,e.registerBackButtonHandler=function(e){r(o(Tt,"pages.backStack.registerBackButtonHandler"),e,(()=>{if(!$e(e)&&!a())throw z}))},e.registerBackButtonHandlerHelper=r,e.isSupported=a}(a=e.backStack||(e.backStack={})),function(e){function t(){return!(!_e(Se)||!Se.supports.pages)&&!!Se.supports.pages.fullTrust}e.enterFullscreen=function(){if(_e(Se,x.content),!t())throw z;En(o(Tt,"pages.fullTrust.enterFullscreen"),"enterFullscreen",[])},e.exitFullscreen=function(){if(_e(Se,x.content),!t())throw z;En(o(Tt,"pages.fullTrust.exitFullscreen"),"exitFullscreen",[])},e.isSupported=t}(s=e.fullTrust||(e.fullTrust={})),function(e){function t(){return!(!_e(Se)||!Se.supports.pages)&&!!Se.supports.pages.appButton}e.onClick=function(e){Jt(o(Tt,"pages.appButton.onClick"),"appButtonClick",e,[x.content],(()=>{if(!t())throw z}))},e.onHoverEnter=function(e){Jt(o(Tt,"pages.appButton.onHoverEnter"),"appButtonHoverEnter",e,[x.content],(()=>{if(!t())throw z}))},e.onHoverLeave=function(e){Jt(o(Tt,"pages.appButton.onHoverLeave"),"appButtonHoverLeave",e,[x.content],(()=>{if(!t())throw z}))},e.isSupported=t}(c=e.appButton||(e.appButton={})),function(e){function t(){return!(!_e(Se)||!Se.supports.pages)&&!!Se.supports.pages.currentApp}e.navigateTo=function(e){return new Promise((n=>{if(_e(Se,x.content,x.sidePanel,x.settings,x.task,x.stage,x.meetingStage),!t())throw z;n(vn(o(Tt,"pages.currentApp.navigateTo"),"pages.currentApp.navigateTo",e))}))},e.navigateToDefaultPage=function(){return new Promise((e=>{if(_e(Se,x.content,x.sidePanel,x.settings,x.task,x.stage,x.meetingStage),!t())throw z;e(vn(o(Tt,"pages.currentApp.navigateToDefaultPage"),"pages.currentApp.navigateToDefaultPage"))}))},e.isSupported=t}(u=e.currentApp||(e.currentApp={}))}(xt||(xt={}));const Dt=t("handlers");class _t{static initializeHandlers(){_t.handlers.themeChange=Zt,_t.handlers.load=Xt,_t.handlers.beforeUnload=en,xt.backStack._initialize()}static uninitializeHandlers(){_t.handlers={},_t.themeChangeHandler=null,_t.loadHandler=null,_t.beforeUnloadHandler=null,_t.beforeSuspendOrTerminateHandler=null,_t.resumeHandler=null}}function Vt(){_t.initializeHandlers()}function Wt(){_t.uninitializeHandlers()}_t.handlers={},_t.themeChangeHandler=null,_t.loadHandler=null,_t.beforeUnloadHandler=null,_t.beforeSuspendOrTerminateHandler=null,_t.resumeHandler=null;const jt=Dt.extend("callHandler");function zt(e,t){const n=_t.handlers[e];if(n){jt("Invoking the registered handler for message %s with arguments %o",e,t);return[!0,n.apply(this,t)]}return dn.childWindow?(Kn(e,t),[!1,void 0]):(jt("Handler for action message %s not found.",e),[!1,void 0])}function $t(e,t,n,r=!0,o=[]){n?(_t.handlers[t]=n,r&&En(e,"registerHandler",[t,...o])):delete _t.handlers[t]}function qt(e){delete _t.handlers[e]}function Gt(e){return null!=_t.handlers[e]}function Jt(e,t,n,r,o){n&&_e(Se,...r),o&&o(),$t(e,t,n)}function Kt(e,t){_t.themeChangeHandler=t,!$e(t)&&En(e,"registerHandler",["themeChange"])}function Zt(e){_t.themeChangeHandler&&_t.themeChangeHandler(e),dn.childWindow&&Kn("themeChange",[e])}function Qt(e,t){_t.loadHandler=t,!$e(t)&&En(e,"registerHandler",["load"])}function Xt(e){_t.resumeHandler?_t.resumeHandler(e):_t.loadHandler&&_t.loadHandler(e),dn.childWindow&&Kn("load",[e])}function Yt(e,t){_t.beforeUnloadHandler=t,!$e(t)&&En(e,"registerHandler",["beforeUnload"])}function en(){const e=()=>{En(o("v2","handleBeforeUnload"),"readyToUnload",[])};_t.beforeSuspendOrTerminateHandler?(_t.beforeSuspendOrTerminateHandler(),dn.childWindow?Kn("beforeUnload"):e()):_t.beforeUnloadHandler&&_t.beforeUnloadHandler(e)||(dn.childWindow?Kn("beforeUnload"):e())}function tn(e){_t.beforeSuspendOrTerminateHandler=e,!$e(e)&&En(o("v2","registerBeforeSuspendOrTerminateHandler"),"registerHandler",["beforeUnload"])}function nn(e){_t.resumeHandler=e,!$e(e)&&En(o("v2","registerOnResumeHandler"),"registerHandler",["load"])}const rn=t("nestedAppAuthUtils"),on=rn.extend("tryPolyfillWithNestedAppAuthBridge");function an(e,t,n){var r;const o=on;if(y.isFramelessWindow)return void o("Cannot polyfill nestedAppAuthBridge as current window is frameless");if(!t)return void o("Cannot polyfill nestedAppAuthBridge as current window does not exist");const i=(()=>{try{return JSON.parse(e)}catch(e){return null}})();if(!i||!(null===(r=i.supports)||void 0===r?void 0:r.nestedAppAuth))return void o("Cannot polyfill nestedAppAuthBridge as current hub does not support nested app auth");const a=t;if(a.nestedAppAuthBridge)return void o("nestedAppAuthBridge already exists on current window, skipping polyfill");const s=cn(a,n);s&&(a.nestedAppAuthBridge=s)}const sn=rn.extend("createNestedAppAuthBridge");function cn(e,t){const n=sn;if(!e)return n("nestedAppAuthBridge cannot be created as current window does not exist"),null;const{onMessage:r,sendPostMessage:o}=t,i=e=>t=>r(t,e);return{addEventListener:(t,r)=>{"message"===t?e.addEventListener(t,i(r)):n(`Event ${t} is not supported by nestedAppAuthBridge`)},postMessage:e=>{const t=(()=>{try{return JSON.parse(e)}catch(e){return null}})();t&&"object"==typeof t&&"NestedAppAuthRequest"===t.messageType?o(e):n("Unrecognized data format received by app, message being ignored. Message: %o",e)},removeEventListener:(t,n)=>{e.removeEventListener(t,i(n))}}}var un=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const ln=t("communication");class dn{}class fn{}function pn(e,t){if(fn.messageListener=e=>un(this,void 0,void 0,(function*(){return yield kn(e)})),dn.currentWindow=dn.currentWindow||ue(),dn.parentWindow=dn.currentWindow.parent!==dn.currentWindow.self?dn.currentWindow.parent:dn.currentWindow.opener,dn.topWindow=dn.currentWindow.top,(dn.parentWindow||e)&&dn.currentWindow.addEventListener("message",fn.messageListener,!1),!dn.parentWindow){const e=dn.currentWindow;if(!e.nativeInterface)return Promise.reject(new Error("Initialization Failed. No Parent window found."));y.isFramelessWindow=!0,e.onNativeMessage=xn}try{return dn.parentOrigin="*",yn(t,"initialize",[He,ve]).then((([e,t,n,r])=>(an(r,dn.currentWindow,{onMessage:Un,sendPostMessage:An}),{context:e,clientType:t,runtimeConfig:n,clientSupportedSDKVersion:r})))}finally{dn.parentOrigin=null}}function hn(){dn.currentWindow&&dn.currentWindow.removeEventListener("message",fn.messageListener,!1),dn.currentWindow=null,dn.parentWindow=null,dn.parentOrigin=null,dn.childWindow=null,dn.childOrigin=null,fn.parentMessageQueue=[],fn.childMessageQueue=[],fn.nextMessageId=0,fn.callbacks={},fn.promiseCallbacks={},fn.portCallbacks={}}function gn(e,t,...n){return yn(e,t,n).then((([e])=>e))}function mn(e,t,...n){return yn(e,t,n).then((([e,t])=>{if(!e)throw new Error(t)}))}function wn(e,t,n,...r){return yn(e,t,r).then((([e,t])=>{if(!e)throw new Error(t||n)}))}function vn(e,t,...n){return yn(e,t,n).then((([e,t])=>{if(e)throw e;return t}))}function yn(e,t,n=void 0){if(!i(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);return new Promise((r=>{r(Sn(Rn(e,t,n).id))}))}function Cn(e,t,n=void 0){if(!i(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);return bn(Rn(e,t,n).id)}function bn(e){return new Promise(((t,n)=>{fn.portCallbacks[e]=(e,r)=>{e instanceof MessagePort?t(e):n(r&&r.length>0?r[0]:new Error("Host responded without port or error details."))}}))}function Sn(e){return new Promise((t=>{fn.promiseCallbacks[e]=t}))}function En(e,t,n,r){let o;if(n instanceof Function?r=n:n instanceof Array&&(o=n),!i(e))throw Error(`apiVersionTag: ${e} passed in doesn't follow the pattern starting with 'v' followed by digits, then underscore with words, please check.`);const a=Rn(e,t,o);r&&(fn.callbacks[a.id]=r)}fn.parentMessageQueue=[],fn.childMessageQueue=[],fn.topMessageQueue=[],fn.nextMessageId=0,fn.callbacks={},fn.promiseCallbacks={},fn.portCallbacks={};const In=ln.extend("sendNestedAuthRequestToTopWindow");function An(e){const t=In,n=dn.topWindow,r=Qn(e);return t("Message %i information: %o",r.id,{actionName:r.func}),Pn(n,r)}const Tn=ln.extend("sendRequestToTargetWindowHelper");function Pn(e,t){const n=Tn,r=zn(e);if(y.isFramelessWindow)dn.currentWindow&&dn.currentWindow.nativeInterface&&(n(`Sending message %i to ${r} via framelessPostMessage interface`,t.id),dn.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(t)));else{const o=jn(e);e&&o?(n(`Sending message %i to ${r} via postMessage`,t.id),e.postMessage(t,o)):(n(`Adding message %i to ${r} message queue`,t.id),Wn(e).push(t))}return t}const Fn=ln.extend("sendMessageToParentHelper");function Rn(e,t,n){const r=Fn,o=dn.parentWindow,i=Zn(e,t,n);return r("Message %i information: %o",i.id,{actionName:t,args:n}),Pn(o,i)}const On=ln.extend("processMessage");function kn(e){return un(this,void 0,void 0,(function*(){if(!e||!e.data||"object"!=typeof e.data)return void On("Unrecognized message format received by app, message being ignored. Message: %o",e);const t=e.source||e.originalEvent&&e.originalEvent.source,n=e.origin||e.originalEvent&&e.originalEvent.origin;return Hn(t,n).then((r=>{r?(Nn(t,n),t===dn.parentWindow?xn(e):t===dn.childWindow&&_n(e)):On("Message being ignored by app because it is either coming from the current window or a different window with an invalid origin")}))}))}const Mn=ln.extend("processAuthBridgeMessage");function Un(e,t){var n,r;const o=Mn;if(!e||!e.data||"object"!=typeof e.data)return void o("Unrecognized message format received by app, message being ignored. Message: %o",e);const{args:i}=e.data,[,a]=null!=i?i:[],s=(()=>{try{return JSON.parse(a)}catch(e){return null}})();if(!s||"object"!=typeof s||"NestedAppAuthResponse"!==s.messageType)return void o("Unrecognized data format received by app, message being ignored. Message: %o",e);const c=e.source||(null===(n=null==e?void 0:e.originalEvent)||void 0===n?void 0:n.source),u=e.origin||(null===(r=null==e?void 0:e.originalEvent)||void 0===r?void 0:r.origin);c?Hn(c,u)?(dn.topWindow&&!dn.topWindow.closed&&c!==dn.topWindow||(dn.topWindow=c,dn.topOrigin=u),dn.topWindow&&dn.topWindow.closed&&(dn.topWindow=null,dn.topOrigin=null),qn(dn.topWindow),t(a)):o("Message being ignored by app because it is either coming from the current window or a different window with an invalid origin"):o("Message being ignored by app because it is coming for a target that is null")}const Ln=ln.extend("shouldProcessMessage");function Hn(e,t){return un(this,void 0,void 0,(function*(){if(dn.currentWindow&&e===dn.currentWindow)return Ln("Should not process message because it is coming from the current window"),!1;if(dn.currentWindow&&dn.currentWindow.location&&t&&t===dn.currentWindow.location.origin)return!0;{const e=yield et(new URL(t));return e||Ln("Message has an invalid origin of %s",t),e}}))}function Nn(e,t){y.isFramelessWindow||dn.parentWindow&&!dn.parentWindow.closed&&e!==dn.parentWindow?dn.childWindow&&!dn.childWindow.closed&&e!==dn.childWindow||(dn.childWindow=e,dn.childOrigin=t):(dn.parentWindow=e,dn.parentOrigin=t),dn.parentWindow&&dn.parentWindow.closed&&(dn.parentWindow=null,dn.parentOrigin=null),dn.childWindow&&dn.childWindow.closed&&(dn.childWindow=null,dn.childOrigin=null),qn(dn.parentWindow),qn(dn.childWindow)}const Bn=ln.extend("handleParentMessage");function xn(e){const t=Bn;if("id"in e.data&&"number"==typeof e.data.id){const n=e.data,r=fn.callbacks[n.id];t("Received a response from parent for message %i",n.id),r&&(t("Invoking the registered callback for message %i with arguments %o",n.id,n.args),r.apply(null,[...n.args,n.isPartialResponse]),Dn(e)||(t("Removing registered callback for message %i",n.id),delete fn.callbacks[n.id]));const o=fn.promiseCallbacks[n.id];o&&(t("Invoking the registered promise callback for message %i with arguments %o",n.id,n.args),o(n.args),t("Removing registered promise callback for message %i",n.id),delete fn.promiseCallbacks[n.id]);const i=fn.portCallbacks[n.id];if(i){let r;t("Invoking the registered port callback for message %i with arguments %o",n.id,n.args),e.ports&&e.ports[0]instanceof MessagePort&&(r=e.ports[0]),i(r,n.args),t("Removing registered port callback for message %i",n.id),delete fn.portCallbacks[n.id]}}else if("func"in e.data&&"string"==typeof e.data.func){const n=e.data;t("Received an action message %s from parent",n.func),zt(n.func,n.args)}else t("Received an unknown message: %O",e)}function Dn(e){return!0===e.data.isPartialResponse}function _n(e){if("id"in e.data&&"func"in e.data){const t=e.data,[n,r]=zt(t.func,t.args);n&&void 0!==r?Jn(t.id,Array.isArray(r)?r:[r]):En(o("v2","tasks.startTask"),t.func,t.args,((...e)=>{if(dn.childWindow){const n=e.pop();Jn(t.id,e,n)}}))}}function Vn(){return dn.topWindow!==dn.parentWindow}function Wn(e){return e===dn.topWindow&&Vn()?fn.topMessageQueue:e===dn.parentWindow?fn.parentMessageQueue:e===dn.childWindow?fn.childMessageQueue:[]}function jn(e){return e===dn.topWindow&&Vn()?dn.topOrigin:e===dn.parentWindow?dn.parentOrigin:e===dn.childWindow?dn.childOrigin:null}function zn(e){return e===dn.topWindow&&Vn()?"top":e===dn.parentWindow?"parent":e===dn.childWindow?"child":null}const $n=ln.extend("flushMessageQueue");function qn(e){const t=jn(e),n=Wn(e),r=zn(e);for(;e&&t&&n.length>0;){const o=n.shift();$n("Flushing message %i from "+r+" message queue via postMessage.",null==o?void 0:o.id),e.postMessage(o,t)}}function Gn(e,t){let n;n=dn.currentWindow.setInterval((()=>{0===Wn(e).length&&(clearInterval(n),t())}),100)}function Jn(e,t,n){const r=dn.childWindow,o=Xn(e,t,n),i=jn(r);r&&i&&r.postMessage(o,i)}function Kn(e,t){const n=dn.childWindow,r=Yn(e,t),o=jn(n);n&&o?n.postMessage(r,o):Wn(n).push(r)}function Zn(e,t,n){return{id:fn.nextMessageId++,func:t,timestamp:Date.now(),args:n||[],apiVersionTag:e}}function Qn(e){return{id:fn.nextMessageId++,func:"nestedAppAuth.execute",timestamp:Date.now(),args:[],data:e}}function Xn(e,t,n){return{id:e,args:t||[],isPartialResponse:n}}function Yn(e,t){return{func:e,args:t||[]}}var er;!function(e){function t(){return!(!_e(Se)||!Se.supports.logs)}e.registerGetLogHandler=function(e){if(!$e(e)&&_e(Se),!$e(e)&&!t())throw z;e?$t(o("v1","log.request"),"log.request",(()=>{const t=e();En(o("v1","log.receive"),"log.receive",[t])})):qt("log.request")},e.isSupported=t}(er||(er={}));const tr="v1";function nr(e,t){_e(Se),En(o(tr,"uploadCustomApp"),"uploadCustomApp",[e],t||Z())}function rr(e,t,n){_e(Se),En(o(tr,"sendCustomMessage"),e,t,n)}function or(e,t){if(_e(Se),!dn.childWindow)throw new Error("The child window has not yet been initialized or is not present");Kn(e,t)}function ir(e,t){_e(Se),$t(o(tr,"registerCustomHandler"),e,((...e)=>t.apply(this,e)))}function ar(e,t){_e(Se),$t(o(tr,"registerUserSettingsChangeHandler"),"userSettingsChange",t,!0,[e])}function sr(e){_e(Se,x.content,x.task);const t=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction,e.fileOpenPreference,e.conversationId,e.sizeInBytes];En(o(tr,"openFilePreview"),"openFilePreview",t)}const cr="v1";var ur;!function(e){function t(){return!(!_e(Se)||!Se.supports.conversations)}e.openConversation=function(e){return new Promise((n=>{if(_e(Se,x.content),!t())throw z;const r=mn(o(cr,"conversations.openConversation"),"conversations.openConversation",{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId});e.onStartConversation&&$t(o(cr,"conversations.registerStartConversationHandler"),"startConversation",((t,n,r,o)=>{var i;return null===(i=e.onStartConversation)||void 0===i?void 0:i.call(e,{subEntityId:t,conversationId:n,channelId:r,entityId:o})})),e.onCloseConversation&&$t(o(cr,"conversations.registerCloseConversationHandler"),"closeConversation",((t,n,r,o)=>{var i;return null===(i=e.onCloseConversation)||void 0===i?void 0:i.call(e,{subEntityId:t,conversationId:n,channelId:r,entityId:o})})),n(r)}))},e.closeConversation=function(){if(_e(Se,x.content),!t())throw z;En(o(cr,"conversations.closeConversation"),"conversations.closeConversation"),qt("startConversation"),qt("closeConversation")},e.getChatMembers=function(){return new Promise((e=>{if(_e(Se),!t())throw z;e(gn(o(cr,"conversations.getChatMember"),"getChatMembers"))}))},e.isSupported=t}(ur||(ur={}));const lr="users";function dr(e,t,n){if(0===e.length)throw new Error("Must have at least one user when creating a chat deep link");const r=`${lr}=`+e.map((e=>encodeURIComponent(e))).join(","),o=void 0===t?"":`&topicName=${encodeURIComponent(t)}`,i=void 0===n?"":`&message=${encodeURIComponent(n)}`;return`${h}://${g}/l/chat/0/0?${r}${o}${i}`}function fr(e,t,n){if(0===e.length)throw new Error("Must have at least one target when creating a call deep link");const r=`${lr}=`+e.map((e=>encodeURIComponent(e))).join(","),o=void 0===t?"":`&withVideo=${encodeURIComponent(t)}`,i=void 0===n?"":`&source=${encodeURIComponent(n)}`;return`${h}://${g}/l/call/0/0?${r}${o}${i}`}function pr(e,t,n,r,o){const i=void 0===e?"":"attendees="+e.map((e=>encodeURIComponent(e))).join(","),a=void 0===t?"":`&startTime=${encodeURIComponent(t)}`,s=void 0===n?"":`&endTime=${encodeURIComponent(n)}`,c=void 0===r?"":`&subject=${encodeURIComponent(r)}`,u=void 0===o?"":`&content=${encodeURIComponent(o)}`;return`${h}://${g}/l/meeting/new?${i}${a}${s}${c}${u}`}function hr(e){if(!e)throw new Error("App ID must be set when creating an app install dialog deep link");return`${h}://${g}/l/app/${encodeURIComponent(e)}`}var gr;!function(e){function t(){return!(!_e(Se)||!Se.supports.appInstallDialog)}e.openAppInstallDialog=function(e){return new Promise((n=>{if(_e(Se,x.content,x.sidePanel,x.settings,x.task,x.stage,x.meetingStage),!t())throw new Error("Not supported");const r=o("v1","appInstallDialog.openAppInstallDialog");Se.isLegacyTeams?n(mn(r,"executeDeepLink",hr(e.appId))):(En(r,"appInstallDialog.openAppInstallDialog",[e]),n())}))},e.isSupported=t}(gr||(gr={}));const mr="v1",wr=t("media");var vr;function yr(e,t){if(null==e||null==t||e.length<=0)return null;let n=null,r=1;return e.sort(((e,t)=>e.sequence>t.sequence?1:-1)),e.forEach((e=>{e.sequence==r&&(n=n?new Blob([n,e.file],{type:t}):new Blob([e.file],{type:t}),r++)})),n}function Cr(e,t){if(null==e||null==t)return null;const n=atob(e.chunk),r=new Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);const o=new Uint8Array(r),i=new Blob([o],{type:t});return{sequence:e.chunkSequence,file:i}}function br(e){Ar(e)?je("2.0.2"):Tr(e)?je(c):Ir(e)&&je("2.0.4")}function Sr(e){return!(e.mediaType!=vr.MediaType.Video||!e.videoProps||!e.videoProps.videoController)}function Er(e){return!(null==e||e.maxMediaCount>10)}function Ir(e){var t;return!((null==e?void 0:e.mediaType)!=vr.MediaType.Image||!(null===(t=null==e?void 0:e.imageProps)||void 0===t?void 0:t.imageOutputFormats))}function Ar(e){return!(!e||e.mediaType!=vr.MediaType.VideoAndImage&&!e.videoAndImageProps)}function Tr(e){return!(!e||e.mediaType!=vr.MediaType.Video||!e.videoProps||e.videoProps.isFullScreenMode)}function Pr(e,t,n){return null!=e&&null!=t&&t==vr.FileFormat.ID&&null!=n}function Fr(e){return!(null==e||e.length<=0||e.length>10)}function Rr(e){return!e||!(null===e.timeOutIntervalInSec||null!=e.timeOutIntervalInSec&&e.timeOutIntervalInSec<=0||null!=e.timeOutIntervalInSec&&e.timeOutIntervalInSec>60)}function Or(e){if(e){if(e.title&&"string"!=typeof e.title)return!1;if(e.setSelected&&"object"!=typeof e.setSelected)return!1;if(e.openOrgWideSearchInChatOrChannel&&"boolean"!=typeof e.openOrgWideSearchInChatOrChannel)return!1;if(e.singleSelect&&"boolean"!=typeof e.singleSelect)return!1}return!0}!function(e){let t,n,r,i,a,s,u;!function(e){e.Base64="base64",e.ID="id"}(t=e.FileFormat||(e.FileFormat={}));class d{}function f(){return!(!_e(Se)||!Se.supports.permissions)}e.File=d,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");if(_e(Se,x.content,x.task),y.isFramelessWindow)if(Ve("1.7.0"))En(o(mr,"media.captureImage"),"captureImage",e);else{e({errorCode:U.OLD_PLATFORM},[])}else{e({errorCode:U.NOT_SUPPORTED_ON_PLATFORM},[])}},e.hasPermission=function(){if(_e(Se,x.content,x.task),!f())throw z;const e=L.Media;return new Promise((t=>{t(vn(o(mr,"media.hasPermission"),"permissions.has",e))}))},e.requestPermission=function(){if(_e(Se,x.content,x.task),!f())throw z;const e=L.Media;return new Promise((t=>{t(vn(o(mr,"media.requestPermission"),"permissions.request",e))}))};class p extends d{constructor(e){super(),e&&(this.content=e.content,this.format=e.format,this.mimeType=e.mimeType,this.name=e.name,this.preview=e.preview,this.size=e.size)}getMedia(e){if(!e)throw new Error("[get Media] Callback cannot be null");if(_e(Se,x.content,x.task),Ve(l))if(Pr(this.mimeType,this.format,this.content))Ve("2.0.0")?this.getMediaViaCallback(e):this.getMediaViaHandler(e);else{e({errorCode:U.INVALID_ARGUMENTS},new Blob)}else{e({errorCode:U.OLD_PLATFORM},new Blob)}}getMediaViaCallback(e){const t={mediaMimeType:this.mimeType,assembleAttachment:[]},n=[this.content];En(o(mr,"media.getMedia"),"getMedia",n,(function(n){if(e)if(n&&n.error)e(n.error,new Blob);else if(n&&n.mediaChunk)if(n.mediaChunk.chunkSequence<=0){const r=yr(t.assembleAttachment,t.mediaMimeType);e(n.error,null!=r?r:new Blob)}else{const e=Cr(n.mediaChunk,t.mediaMimeType);e?t.assembleAttachment.push(e):wr(`Received a null assemble attachment for when decoding chunk sequence ${n.mediaChunk.chunkSequence}; not including the chunk in the assembled file.`)}else e({errorCode:U.INTERNAL_ERROR,message:"data received is null"},new Blob)}))}getMediaViaHandler(e){const t=X(),n={mediaMimeType:this.mimeType,assembleAttachment:[]},r=[t,this.content];this.content&&!$e(e)&&En(o(mr,"media.getMedia"),"getMedia",r),$t(o(mr,"media.registerGetMediaRequestHandler"),"getMedia"+t,(function(r){if(e){const o=JSON.parse(r);if(o.error)e(o.error,new Blob),qt("getMedia"+t);else if(o.mediaChunk)if(o.mediaChunk.chunkSequence<=0){const r=yr(n.assembleAttachment,n.mediaMimeType);e(o.error,null!=r?r:new Blob),qt("getMedia"+t)}else{const e=Cr(o.mediaChunk,n.mediaMimeType);e&&n.assembleAttachment.push(e)}else e({errorCode:U.INTERNAL_ERROR,message:"data received is null"},new Blob),qt("getMedia"+t)}}))}}e.Media=p;class h{constructor(e){this.controllerCallback=e}notifyEventToHost(e,t){_e(Se,x.content,x.task);try{je(c)}catch(e){return void(t&&t(e))}const n={mediaType:this.getMediaType(),mediaControllerEvent:e};En(o(mr,"media.controller"),"media.controller",[n],(e=>{t&&t(e)}))}stop(e){this.notifyEventToHost(n.StopRecording,e)}}e.VideoController=class extends h{getMediaType(){return a.Video}notifyEventToApp(e){if(this.controllerCallback)switch(e){case n.StartRecording:if(this.controllerCallback.onRecordingStarted){this.controllerCallback.onRecordingStarted();break}}}},function(e){e[e.StartRecording=1]="StartRecording",e[e.StopRecording=2]="StopRecording"}(n=e.MediaControllerEvent||(e.MediaControllerEvent={})),function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(r=e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(i=e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Video=2]="Video",e[e.VideoAndImage=3]="VideoAndImage",e[e.Audio=4]="Audio"}(a=e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(s=e.ImageUriType||(e.ImageUriType={})),function(e){e[e.IMAGE=1]="IMAGE",e[e.PDF=2]="PDF"}(u=e.ImageOutputFormats||(e.ImageOutputFormats={})),e.selectMedia=function(e,t){if(!t)throw new Error("[select Media] Callback cannot be null");if(_e(Se,x.content,x.task),!Ve(l)){const e={errorCode:U.OLD_PLATFORM};return void t(e,[])}try{br(e)}catch(e){return void t(e,[])}if(!Er(e)){const e={errorCode:U.INVALID_ARGUMENTS};return void t(e,[])}const n=[e];En(o(mr,"media.selectMedia"),"selectMedia",n,((n,r,o)=>{var i,a;if(o)return void(Sr(e)&&(null===(a=null===(i=null==e?void 0:e.videoProps)||void 0===i?void 0:i.videoController)||void 0===a||a.notifyEventToApp(o)));if(!r)return void t(n,[]);const s=[];for(const e of r)s.push(new p(e));t(n,s)}))},e.viewImages=function(e,t){if(!t)throw new Error("[view images] Callback cannot be null");if(_e(Se,x.content,x.task),!Ve(l)){return void t({errorCode:U.OLD_PLATFORM})}if(!Fr(e)){return void t({errorCode:U.INVALID_ARGUMENTS})}const n=[e];En(o(mr,"media.viewImages"),"viewImages",n,t)},e.scanBarCode=function(e,t){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");if(_e(Se,x.content,x.task),y.hostClientType!==N.desktop&&y.hostClientType!==N.web&&y.hostClientType!==N.rigel&&y.hostClientType!==N.teamsRoomsWindows&&y.hostClientType!==N.teamsRoomsAndroid&&y.hostClientType!==N.teamsPhones&&y.hostClientType!==N.teamsDisplays)if(Ve("1.9.0"))if(Rr(t))En(o(mr,"media.scanBarCode"),"media.scanBarCode",[t],e);else{e({errorCode:U.INVALID_ARGUMENTS},"")}else{e({errorCode:U.OLD_PLATFORM},"")}else{e({errorCode:U.NOT_SUPPORTED_ON_PLATFORM},"")}}}(vr||(vr={}));const kr="v2";var Mr;!function(e){function t(){return!!(_e(Se)&&Se.supports.barCode&&Se.supports.permissions)}e.scanBarCode=function(e){return new Promise((n=>{if(_e(Se,x.content,x.task),!t())throw z;if(!Rr(e))throw{errorCode:U.INVALID_ARGUMENTS};n(vn(o(kr,"barCode.scanBarCode"),"media.scanBarCode",e))}))},e.hasPermission=function(){if(_e(Se,x.content,x.task),!t())throw z;const e=L.Media;return new Promise((t=>{t(vn(o(kr,"barCode.hasPermission"),"permissions.has",e))}))},e.requestPermission=function(){if(_e(Se,x.content,x.task),!t())throw z;const e=L.Media;return new Promise((t=>{t(vn(o(kr,"barCode.requestPermission"),"permissions.request",e))}))},e.isSupported=t}(Mr||(Mr={}));var Ur;!function(e){function t(e,t){return new Promise((r=>{if(_e(Se,x.content,x.task),!n())throw z;if(Se.isLegacyTeams)r(mn(e,"executeDeepLink",dr([t.user],void 0,t.message)));else{r(mn(e,"chat.openChat",{members:[t.user],message:t.message}))}}))}function n(){return!(!_e(Se)||!Se.supports.chat)}e.openChat=function(e){return t(o("v2","chat.openChat"),e)},e.openGroupChat=function(e){const r=o("v2","chat.openGroupChat");return new Promise((o=>{if(e.users.length<1)throw Error("OpenGroupChat Failed: No users specified");if(1===e.users.length){const n={user:e.users[0],message:e.message};o(t(r,n))}else{if(_e(Se,x.content,x.task),!n())throw z;if(Se.isLegacyTeams)o(mn(r,"executeDeepLink",dr(e.users,e.topic,e.message)));else{o(mn(r,"chat.openChat",{members:e.users,message:e.message,topic:e.topic}))}}}))},e.isSupported=n}(Ur||(Ur={}));var Lr=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};var Hr,Nr;!function(e){function t(){return!!(_e(Se)&&navigator&&navigator.clipboard&&Se.supports.clipboard)}e.write=function(e){return Lr(this,void 0,void 0,(function*(){if(_e(Se,x.content,x.meetingStage,x.task,x.settings,x.stage,x.sidePanel),!t())throw z;if(!e.type||!Object.values(H).includes(e.type))throw new Error(`Blob type ${e.type} is not supported. Supported blob types are ${Object.values(H)}`);const n=yield ce(e),r={mimeType:e.type,content:n};return vn(o("v2","clipboard.write"),"clipboard.writeToClipboard",r)}))},e.read=function(){return Lr(this,void 0,void 0,(function*(){_e(Se,x.content,x.meetingStage,x.task,x.settings,x.stage,x.sidePanel);const e=o("v2","clipboard.read");if(!t())throw z;const n=yield vn(e,"clipboard.readFromClipboard");if("string"==typeof n){const e=JSON.parse(n);return se(e.mimeType,e.content)}return n}))},e.isSupported=t}(Hr||(Hr={})),function(e){e.isNAAChannelRecommended=function(){var e;return null!==(e=_e(Se)&&Se.isNAAChannelRecommended)&&void 0!==e&&e}}(Nr||(Nr={}));const Br="v2";var xr;function Dr(){return Se.hostVersionsInfo?Se.hostVersionsInfo.adaptiveCardSchemaVersion:void 0}!function(e){function t(){return!!(_e(Se)&&Se.supports.geoLocation&&Se.supports.permissions)}let n;e.getCurrentLocation=function(){if(_e(Se,x.content,x.task),!t())throw z;return vn(o(Br,"geoLocation.getCurrentLocation"),"location.getLocation",{allowChooseLocation:!1,showMap:!1})},e.hasPermission=function(){if(_e(Se,x.content,x.task),!t())throw z;const e=L.GeoLocation;return new Promise((t=>{t(vn(o(Br,"geoLocation.hasPermission"),"permissions.has",e))}))},e.requestPermission=function(){if(_e(Se,x.content,x.task),!t())throw z;const e=L.GeoLocation;return new Promise((t=>{t(vn(o(Br,"geoLocation.requestPermission"),"permissions.request",e))}))},e.isSupported=t,function(e){function t(){return!!(_e(Se)&&Se.supports.geoLocation&&Se.supports.geoLocation.map&&Se.supports.permissions)}e.chooseLocation=function(){if(_e(Se,x.content,x.task),!t())throw z;return vn(o(Br,"geoLocation.map.chooseLocation"),"location.getLocation",{allowChooseLocation:!0,showMap:!0})},e.showLocation=function(e){if(_e(Se,x.content,x.task),!t())throw z;if(!e)throw{errorCode:U.INVALID_ARGUMENTS};return vn(o(Br,"geoLocation.showLocation"),"location.showLocation",e)},e.isSupported=t}(n=e.map||(e.map={}))}(xr||(xr={}));const _r="v1";class Vr{postMessage(e,t){_e(Se),En(o(_r,"appWindow.childAppWindow.postMessage"),"messageForChild",[e],t||Z())}addEventListener(e,t){_e(Se),"message"===e&&$t(o(_r,"appWindow.childAppWindow.addEventListener"),"messageForParent",t)}}class Wr{static get Instance(){return this._instance||(this._instance=new this)}postMessage(e,t){_e(Se,x.task),En(o(_r,"appWindow.parentAppWindow.postMessage"),"messageForParent",[e],t||Z())}addEventListener(e,t){_e(Se,x.task),"message"===e&&$t(o(_r,"appWindow.parentAppWindow.addEventListener"),"messageForChild",t)}}var jr;!function(e){function t(){return!(!_e(Se)||!Se.supports.secondaryBrowser)}e.open=function(e){if(_e(Se,x.content),!t())throw z;if(!e||!ae(e))throw{errorCode:U.INVALID_ARGUMENTS,message:"Invalid Url: Only https URL is allowed"};return vn(o("v2","secondaryBrowser.openUrl"),"secondaryBrowser.open",e.toString())},e.isSupported=t}(jr||(jr={}));var zr;!function(e){function t(){return!(!_e(Se)||!Se.supports.location)}e.getLocation=function(e,n){if(!n)throw new Error("[location.getLocation] Callback cannot be null");if(_e(Se,x.content,x.task),!Ve(u))throw{errorCode:U.OLD_PLATFORM};if(!e)throw{errorCode:U.INVALID_ARGUMENTS};if(!t())throw z;En(o("v1","location.getLocation"),"location.getLocation",[e],n)},e.showLocation=function(e,n){if(!n)throw new Error("[location.showLocation] Callback cannot be null");if(_e(Se,x.content,x.task),!Ve(u))throw{errorCode:U.OLD_PLATFORM};if(!e)throw{errorCode:U.INVALID_ARGUMENTS};if(!t())throw z;En(o("v1","location.showLocation"),"location.showLocation",[e],n)},e.isSupported=t}(zr||(zr={}));var $r=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const qr="v1";var Gr;!function(e){let t,n,r,i,a,s,c;function u(e,n){En(o(qr,"meeting.requestAppAudioHandling"),"meeting.requestAppAudioHandling",[e.isAppHandlingAudio],((r,i)=>{if(r&&null!=i)throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");if(r)throw new Error(`[requestAppAudioHandling] Callback response - SDK error ${r.errorCode} ${r.message}`);if("boolean"!=typeof i)throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");$t(o(qr,"meeting.registerMicStateChangeHandler"),"meeting.micStateChanged",(n=>$r(this,void 0,void 0,(function*(){try{const r=yield e.micMuteStateChangedCallback(n);d(r,r.isMicMuted===n.isMicMuted?t.HostInitiated:t.AppDeclinedToChange)}catch(e){d(n,t.AppFailedToChange)}}))));$t(o(qr,"meeting.registerAudioDeviceSelectionChangedHandler"),"meeting.audioDeviceSelectionChanged",(t=>{var n;null===(n=e.audioDeviceSelectionChangedCallback)||void 0===n||n.call(e,t)})),n(i)}))}function l(e,t){En(o(qr,"meeting.requestAppAudioHandling"),"meeting.requestAppAudioHandling",[e.isAppHandlingAudio],((e,n)=>{if(e&&null!=n)throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");if(e)throw new Error(`[requestAppAudioHandling] Callback response - SDK error ${e.errorCode} ${e.message}`);if("boolean"!=typeof n)throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");Gt("meeting.micStateChanged")&&qt("meeting.micStateChanged"),Gt("meeting.audioDeviceSelectionChanged")&&qt("meeting.audioDeviceSelectionChanged"),t(n)}))}function d(e,t){_e(Se,x.sidePanel,x.meetingStage),En(o(qr,"meeting.setMicStateWithReason"),"meeting.updateMicState",[e,t])}!function(e){e[e.HostInitiated=0]="HostInitiated",e[e.AppInitiated=1]="AppInitiated",e[e.AppDeclinedToChange=2]="AppDeclinedToChange",e[e.AppFailedToChange=3]="AppFailedToChange"}(t||(t={})),function(e){e.like="like",e.heart="heart",e.laugh="laugh",e.surprised="surprised",e.applause="applause"}(n=e.MeetingReactionType||(e.MeetingReactionType={})),function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(r=e.MeetingType||(e.MeetingType={})),function(e){e.OneOnOneCall="oneOnOneCall",e.GroupCall="groupCall"}(i=e.CallType||(e.CallType={})),function(e){e.Collaborative="Collaborative",e.ScreenShare="ScreenShare"}(a=e.SharingProtocol||(e.SharingProtocol={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");_e(Se,x.sidePanel,x.meetingStage),En(o(qr,"meeting.getIncomingClientAudioState"),"getIncomingClientAudioState",e)},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");_e(Se,x.sidePanel,x.meetingStage),En(o(qr,"meeting.toggleIncomingClientAudio"),"toggleIncomingClientAudio",e)},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");_e(Se,x.sidePanel,x.meetingStage,x.settings,x.content),En(o(qr,"meeting.getMeetingDetails"),"meeting.getMeetingDetails",e)},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");_e(Se,x.sidePanel,x.meetingStage,x.task),En(o(qr,"meeting.getAuthenticationTokenForAnonymousUser"),"meeting.getAuthenticationTokenForAnonymousUser",e)},e.getLiveStreamState=function(e){if(!e)throw new Error("[get live stream state] Callback cannot be null");_e(Se,x.sidePanel),En(o(qr,"meeting.getLiveStreamState"),"meeting.getLiveStreamState",e)},e.requestStartLiveStreaming=function(e,t,n){if(!e)throw new Error("[request start live streaming] Callback cannot be null");_e(Se,x.sidePanel),En(o(qr,"meeting.requestStartLiveStreaming"),"meeting.requestStartLiveStreaming",[t,n],e)},e.requestStopLiveStreaming=function(e){if(!e)throw new Error("[request stop live streaming] Callback cannot be null");_e(Se,x.sidePanel),En(o(qr,"meeting.requestStopLiveStreaming"),"meeting.requestStopLiveStreaming",e)},e.registerLiveStreamChangedHandler=function(e){if(!e)throw new Error("[register live stream changed handler] Handler cannot be null");_e(Se,x.sidePanel),$t(o(qr,"meeting.registerLiveStreamChangedHandler"),"meeting.liveStreamChanged",e)},e.shareAppContentToStage=function(e,t,n={sharingProtocol:a.Collaborative}){if(!e)throw new Error("[share app content to stage] Callback cannot be null");_e(Se,x.sidePanel,x.meetingStage),En(o(qr,"meeting.shareAppContentToStage"),"meeting.shareAppContentToStage",[t,n],e)},e.getAppContentStageSharingCapabilities=function(e){if(!e)throw new Error("[get app content stage sharing capabilities] Callback cannot be null");_e(Se,x.sidePanel,x.meetingStage),En(o(qr,"meeting.getAppContentStageSharingCapabilities"),"meeting.getAppContentStageSharingCapabilities",e)},e.stopSharingAppContentToStage=function(e){if(!e)throw new Error("[stop sharing app content to stage] Callback cannot be null");_e(Se,x.sidePanel,x.meetingStage),En(o(qr,"meeting.stopSharingAppContentToStage"),"meeting.stopSharingAppContentToStage",e)},e.getAppContentStageSharingState=function(e){if(!e)throw new Error("[get app content stage sharing state] Callback cannot be null");_e(Se,x.sidePanel,x.meetingStage),En(o(qr,"meeting.getAppContentStageSharingState"),"meeting.getAppContentStageSharingState",e)},e.registerSpeakingStateChangeHandler=function(e){if(!e)throw new Error("[registerSpeakingStateChangeHandler] Handler cannot be null");_e(Se,x.sidePanel,x.meetingStage),$t(o(qr,"meeting.registerSpeakingStateChangeHandler"),"meeting.speakingStateChanged",e)},e.registerRaiseHandStateChangedHandler=function(e){if(!e)throw new Error("[registerRaiseHandStateChangedHandler] Handler cannot be null");_e(Se,x.sidePanel,x.meetingStage),$t(o(qr,"meeting.registerRaiseHandStateChangedHandler"),"meeting.raiseHandStateChanged",e)},e.registerMeetingReactionReceivedHandler=function(e){if(!e)throw new Error("[registerMeetingReactionReceivedHandler] Handler cannot be null");_e(Se,x.sidePanel,x.meetingStage),$t(o(qr,"meeting.registerMeetingReactionReceivedHandler"),"meeting.meetingReactionReceived",e)},e.joinMeeting=function(e){if(void 0===(null==e?void 0:e.joinWebUrl)||null===(null==e?void 0:e.joinWebUrl))return Promise.reject(new Error("Invalid joinMeetingParams"));_e(Se);const t={joinWebUrl:e.joinWebUrl.href,source:e.source||s.Other};return vn(o("v2","meeting.joinMeeting"),"meeting.joinMeeting",t)},function(e){e.M365CalendarGridContextMenu="m365_calendar_grid_context_menu",e.M365CalendarGridPeek="m365_calendar_grid_peek",e.M365CalendarGridEventCardJoinButton="m365_calendar_grid_event_card_join_button",e.M365CalendarFormRibbonJoinButton="m365_calendar_form_ribbon_join_button",e.M365CalendarFormJoinTeamsMeetingButton="m365_calendar_form_join_teams_meeting_button",e.Other="other"}(s=e.EventActionSource||(e.EventActionSource={})),function(e){e.setOptions=function(e){_e(Se,x.sidePanel),e.contentUrl&&new URL(e.contentUrl),En(o(qr,"meeting.appShareButton.setOptions"),"meeting.appShareButton.setOptions",[e])}}(c=e.appShareButton||(e.appShareButton={})),e.requestAppAudioHandling=function(e,t){if(!t)throw new Error("[requestAppAudioHandling] Callback response cannot be null");if(!e.micMuteStateChangedCallback)throw new Error("[requestAppAudioHandling] Callback Mic mute state handler cannot be null");_e(Se,x.sidePanel,x.meetingStage),e.isAppHandlingAudio?u(e,t):l(e,t)},e.updateMicState=function(e){d(e,t.AppInitiated)}}(Gr||(Gr={}));var Jr;!function(e){function t(){return!(!_e(Se)||!Se.supports.monetization)}e.openPurchaseExperience=function(e,n){let r,i,a="";return"function"==typeof e?(r=e,i=n,a=o("v1","monetization.openPurchaseExperience")):(i=e,a=o("v2","monetization.openPurchaseExperience")),_e(Se,x.content),ne((()=>new Promise((e=>{if(!t())throw z;e(vn(a,"monetization.openPurchaseExperience",i))}))),r)},e.isSupported=t}(Jr||(Jr={}));var Kr;!function(e){function t(){return!(!_e(Se)||!Se.supports.calendar)}e.openCalendarItem=function(e){return new Promise((n=>{if(_e(Se,x.content),!t())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openCalendarItem");n(mn(o("v2","calendar.openCalendarItem"),"calendar.openCalendarItem",e))}))},e.composeMeeting=function(e){return new Promise((n=>{if(_e(Se,x.content),!t())throw new Error("Not supported");const r=o("v2","calendar.composeMeeting");Se.isLegacyTeams?n(mn(r,"executeDeepLink",pr(e.attendees,e.startTime,e.endTime,e.subject,e.content))):n(mn(r,"calendar.composeMeeting",e))}))},e.isSupported=t}(Kr||(Kr={}));var Zr;!function(e){function t(){return!(!_e(Se)||!Se.supports.mail)}let n;e.openMailItem=function(e){return new Promise((n=>{if(_e(Se,x.content),!t())throw new Error("Not supported");if(!e.itemId||!e.itemId.trim())throw new Error("Must supply an itemId to openMailItem");n(mn(o("v2","mail.openMailItem"),"mail.openMailItem",e))}))},e.composeMail=function(e){return new Promise((n=>{if(_e(Se,x.content),!t())throw new Error("Not supported");n(mn(o("v2","mail.composeMail"),"mail.composeMail",e))}))},e.isSupported=t,function(e){e.New="new",e.Reply="reply",e.ReplyAll="replyAll",e.Forward="forward"}(n=e.ComposeMailType||(e.ComposeMailType={}))}(Zr||(Zr={}));var Qr;!function(e){function t(){ue().print()}function n(e,t,n){!$e(t)&&_e(Se),!$e(t)&&n&&n(),Qt(e,t)}function r(e,t,n){!$e(t)&&_e(Se),!$e(t)&&n&&n(),Yt(e,t)}function i(){return!(!_e(Se)||!Se.supports.teamsCore)}e.enablePrintCapability=function(){if(!y.printCapabilityEnabled){if(_e(Se),!i())throw z;y.printCapabilityEnabled=!0,document.addEventListener("keydown",(e=>{(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(t(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))}},e.print=t,e.registerOnLoadHandler=function(e){n(o("v2","teamsAPIs_registerOnLoadHandler"),e,(()=>{if(!$e(e)&&!i())throw z}))},e.registerOnLoadHandlerHelper=n,e.registerBeforeUnloadHandler=function(e){r(o("v2","teamsAPIs_registerBeforeUnloadHandler"),e,(()=>{if(!$e(e)&&!i())throw z}))},e.registerBeforeUnloadHandlerHelper=r,e.isSupported=i}(Qr||(Qr={}));var Xr;function Yr(e){return e?e.modality&&"string"!=typeof e.modality?[!1,"modality must be a string"]:e.targetElementBoundingRect&&"object"==typeof e.targetElementBoundingRect?e.triggerType&&"string"==typeof e.triggerType?eo(e.persona):[!1,"triggerType must be a valid string"]:[!1,"targetElementBoundingRect must be a DOMRect"]:[!1,"A request object is required"]}function eo(e){return e?e.displayName&&"string"!=typeof e.displayName?[!1,"displayName must be a string"]:e.identifiers&&"object"==typeof e.identifiers?e.identifiers.AadObjectId||e.identifiers.Smtp||e.identifiers.Upn?e.identifiers.AadObjectId&&"string"!=typeof e.identifiers.AadObjectId?[!1,"AadObjectId identifier must be a string"]:e.identifiers.Smtp&&"string"!=typeof e.identifiers.Smtp?[!1,"Smtp identifier must be a string"]:e.identifiers.Upn&&"string"!=typeof e.identifiers.Upn?[!1,"Upn identifier must be a string"]:[!0,void 0]:[!1,"at least one valid identifier must be provided"]:[!1,"persona identifiers object must be provided"]:[!1,"persona object must be provided"]}!function(e){function t(e,t){return new Promise((r=>{if(!Ve("2.0.0"))throw{errorCode:U.OLD_PLATFORM};if(!Or(t))throw{errorCode:U.INVALID_ARGUMENTS};if(!n())throw z;r(vn(e,"people.selectPeople",t))}))}function n(){return!(!_e(Se)||!Se.supports.people)}e.selectPeople=function(e,n){let r,i;_e(Se,x.content,x.task,x.settings);let a="";return"function"==typeof e?([r,i]=[e,n],a=o("v1","people.selectPeople")):(i=e,a=o("v2","people.selectPeople")),ee(t,r,a,i)},e.isSupported=n}(Xr||(Xr={}));var to;!function(e){e.showProfile=function(e){return _e(Se,x.content),new Promise((t=>{const[n,r]=Yr(e);if(!n)throw{errorCode:U.INVALID_ARGUMENTS,message:r};const i={modality:e.modality,persona:e.persona,triggerType:e.triggerType,targetRectangle:{x:e.targetElementBoundingRect.x,y:e.targetElementBoundingRect.y,width:e.targetElementBoundingRect.width,height:e.targetElementBoundingRect.height}};t(vn(o("v2","profile.showProfile"),"profile.showProfile",i))}))},e.isSupported=function(){return!(!_e(Se)||!Se.supports.profile)}}(to||(to={}));var no=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const ro="v2";function oo(e,t,n,r){var o,i;return no(this,void 0,void 0,(function*(){const a=so();!le()&&(null===(i=null===(o=window.chrome)||void 0===o?void 0:o.webview)||void 0===i||i.registerTextureStream(e,a)),co(yield ao(e,n,r),new uo(n,t),a.writable)}))}function io(e,t,n,r){var o,i;return no(this,void 0,void 0,(function*(){const a=so();!le()&&(null===(i=null===(o=window.chrome)||void 0===o?void 0:o.webview)||void 0===i||i.registerTextureStream(e,a)),co(yield ao(e,n,r),new po(n,t),a.writable)}))}function ao(e,t,n){return no(this,void 0,void 0,(function*(){if(le())throw z;const r=ue().chrome;try{null==n||n.reportGettingTextureStream(e);const t=(yield r.webview.getTextureStream(e)).getVideoTracks();if(0===t.length)throw new Error(`No video track in stream ${e}`);return null==n||n.reportTextureStreamAcquired(),t[0]}catch(n){throw t(`Failed to get video track from stream ${e}, error: ${n}`),new Error(`Internal error: can't get video track from stream ${e}`)}}))}function so(){if(le())throw z;const e=window.MediaStreamTrackGenerator;if(!e)throw z;return new e({kind:"video"})}function co(e,t,n){new(0,ue().MediaStreamTrackProcessor)({track:e}).readable.pipeThrough(new TransformStream(t)).pipeTo(n)}class uo{constructor(e,t){this.notifyError=e,this.videoFrameHandler=t,this.transform=(e,t)=>no(this,void 0,void 0,(function*(){const n=e.timestamp;if(null!==n)try{const r=yield this.videoFrameHandler({videoFrame:e}),o=new VideoFrame(r,{timestamp:n});t.enqueue(o),e.close(),r.close()}catch(t){e.close(),this.notifyError(t)}else this.notifyError("timestamp of the original video frame is null")}))}}class lo{constructor(e,t){if(this.headerBuffer=e,this.notifyError=t,this.ONE_TEXTURE_INPUT_ID=1869900081,this.INVALID_HEADER_ERROR="Invalid video frame header",this.UNSUPPORTED_LAYOUT_ERROR="Unsupported texture layout",this.headerDataView=new Uint32Array(e),this.headerDataView.length<8)throw this.notifyError(this.INVALID_HEADER_ERROR),new Error(this.INVALID_HEADER_ERROR);if(this.headerDataView[0]!==this.ONE_TEXTURE_INPUT_ID)throw this.notifyError(this.UNSUPPORTED_LAYOUT_ERROR),new Error(this.UNSUPPORTED_LAYOUT_ERROR)}get oneTextureLayoutId(){return this.headerDataView[0]}get version(){return this.headerDataView[1]}get frameRowOffset(){return this.headerDataView[2]}get frameFormat(){return this.headerDataView[3]}get frameWidth(){return this.headerDataView[4]}get frameHeight(){return this.headerDataView[5]}get multiStreamHeaderRowOffset(){return this.headerDataView[6]}get multiStreamCount(){return this.headerDataView[7]}}class fo{constructor(e,t){this.metadataMap=new Map,this.AUDIO_INFERENCE_RESULT_STREAM_ID=828664161;const n=new Uint32Array(e);for(let r=0,o=0;r<t;r++){const t=n[o++],r=n[o++],i=n[o++],a=new Uint8Array(e,r,i);this.metadataMap.set(t,a)}}get audioInferenceResult(){return this.metadataMap.get(this.AUDIO_INFERENCE_RESULT_STREAM_ID)}}class po{constructor(e,t){this.notifyError=e,this.videoFrameHandler=t,this.shouldDiscardAudioInferenceResult=!1,this.transform=(e,t)=>no(this,void 0,void 0,(function*(){const n=e.timestamp;if(null!==n)try{const{videoFrame:r,metadata:{audioInferenceResult:o}={}}=yield this.extractVideoFrameAndMetadata(e),i=yield this.videoFrameHandler({videoFrame:r,audioInferenceResult:o}),a=new VideoFrame(i,{timestamp:n});t.enqueue(a),r.close(),e.close(),i.close()}catch(t){e.close(),this.notifyError(t)}else this.notifyError("timestamp of the original video frame is null")})),this.extractVideoFrameAndMetadata=e=>no(this,void 0,void 0,(function*(){if(le())throw z;if("NV12"!==e.format)throw this.notifyError("Unsupported video frame pixel format"),new Error("Unsupported video frame pixel format");const t={x:0,y:0,width:e.codedWidth,height:2},n=new ArrayBuffer(t.width*t.height*3/2);yield e.copyTo(n,{rect:t});const r=new lo(n,this.notifyError),o={x:0,y:r.multiStreamHeaderRowOffset,width:e.codedWidth,height:e.codedHeight-r.multiStreamHeaderRowOffset},i=new ArrayBuffer(o.width*o.height*3/2);yield e.copyTo(i,{rect:o});const a=new fo(i,r.multiStreamCount);return{videoFrame:new VideoFrame(e,{timestamp:e.timestamp,visibleRect:{x:0,y:r.frameRowOffset,width:r.frameWidth,height:r.frameHeight}}),metadata:{audioInferenceResult:this.shouldDiscardAudioInferenceResult?void 0:a.audioInferenceResult}}})),$t(o(ro,"videoEffectsUtils.transformerWithMetadata.constructor"),"video.mediaStream.audioInferenceDiscardStatusChange",(({discardAudioInferenceResult:e})=>{this.shouldDiscardAudioInferenceResult=e}))}}function ho(e,t){return(n,r)=>{null==t||t.reportApplyingVideoEffect(n||"",r),e(n,r).then((()=>{null==t||t.reportVideoEffectChanged(n||"",r),En(o(ro,"videoEffectsUtils.reportVideoEffectChanged"),"video.videoEffectReadiness",[!0,n,void 0,r])})).catch((e=>{const t=e in So.EffectFailureReason?e:So.EffectFailureReason.InitializationFailure;En(o(ro,"videoEffectsUtils.effectFailure"),"video.videoEffectReadiness",[!1,n,t,r])}))}}class go{static setTimeout(e,t){const n=performance.now(),r=X();return go.setTimeoutCallbacks[r]={callback:e,timeoutInMs:t,startedAtInMs:n},r}static clearTimeout(e){delete go.setTimeoutCallbacks[e]}static setInterval(e,t){go.setTimeout((function n(){e(),go.setTimeout(n,t)}),t)}static tick(){const e=performance.now(),t=[];for(const n in go.setTimeoutCallbacks){const r=go.setTimeoutCallbacks[n];e-r.startedAtInMs>=r.timeoutInMs&&t.push(n)}for(const e of t){go.setTimeoutCallbacks[e].callback(),delete go.setTimeoutCallbacks[e]}}}go.setTimeoutCallbacks={};class mo{constructor(e,t){this.reportStatisticsResult=t,this.sampleCount=0,this.distributionBins=new Uint32Array(e)}processStarts(e,t,n,r){go.tick(),this.suitableForThisSession(e,t,n,r)||this.reportAndResetSession(this.getStatistics(),e,r,t,n),this.start()}processEnds(){const e=performance.now()-this.frameProcessingStartedAt,t=Math.floor(Math.max(0,Math.min(this.distributionBins.length-1,e)));this.distributionBins[t]+=1,this.sampleCount+=1}getStatistics(){return this.currentSession?{effectId:this.currentSession.effectId,effectParam:this.currentSession.effectParam,frameHeight:this.currentSession.frameHeight,frameWidth:this.currentSession.frameWidth,duration:performance.now()-this.currentSession.startedAtInMs,sampleCount:this.sampleCount,distributionBins:this.distributionBins.slice()}:null}start(){this.frameProcessingStartedAt=performance.now()}suitableForThisSession(e,t,n,r){return this.currentSession&&this.currentSession.effectId===e&&this.currentSession.effectParam===r&&this.currentSession.frameWidth===t&&this.currentSession.frameHeight===n}reportAndResetSession(e,t,n,r,o){e&&this.reportStatisticsResult(e),this.resetCurrentSession(this.getNextTimeout(t,this.currentSession),t,n,r,o),this.timeoutId&&go.clearTimeout(this.timeoutId),this.timeoutId=go.setTimeout((()=>this.reportAndResetSession(this.getStatistics(),t,n,r,o)).bind(this),this.currentSession.timeoutInMs)}resetCurrentSession(e,t,n,r,o){this.currentSession={startedAtInMs:performance.now(),timeoutInMs:e,effectId:t,effectParam:n,frameWidth:r,frameHeight:o},this.sampleCount=0,this.distributionBins.fill(0)}getNextTimeout(e,t){return t&&t.effectId===e?Math.min(mo.maxSessionTimeoutInMs,2*t.timeoutInMs):mo.initialSessionTimeoutInMs}}mo.initialSessionTimeoutInMs=1e3,mo.maxSessionTimeoutInMs=3e4;const wo="v2";class vo{constructor(e){this.reportPerformanceEvent=e,this.isFirstFrameProcessed=!1,this.frameProcessTimeLimit=100,this.frameProcessingStartedAt=0,this.frameProcessingTimeCost=0,this.processedFrameCount=0,this.performanceStatistics=new mo(vo.distributionBinSize,(e=>this.reportPerformanceEvent(o(wo,"videoPerformanceMonitor.performanceDataGenerated"),"video.performance.performanceDataGenerated",[e])))}startMonitorSlowFrameProcessing(){go.setInterval((()=>{if(0===this.processedFrameCount)return;const e=this.frameProcessingTimeCost/this.processedFrameCount;e>this.frameProcessTimeLimit&&this.reportPerformanceEvent(o(wo,"videoPerformanceMonitor.startMonitorSlowFrameProcessing"),"video.performance.frameProcessingSlow",[e]),this.frameProcessingTimeCost=0,this.processedFrameCount=0}),vo.calculateFPSInterval)}setFrameProcessTimeLimit(e){this.frameProcessTimeLimit=e}reportApplyingVideoEffect(e,t){var n,r;(null===(n=this.applyingEffect)||void 0===n?void 0:n.effectId)===e&&(null===(r=this.applyingEffect)||void 0===r?void 0:r.effectParam)===t||(this.applyingEffect={effectId:e,effectParam:t},this.appliedEffect=void 0)}reportVideoEffectChanged(e,t){void 0===this.applyingEffect||this.applyingEffect.effectId!==e&&this.applyingEffect.effectParam!==t||(this.appliedEffect={effectId:e,effectParam:t},this.applyingEffect=void 0,this.isFirstFrameProcessed=!1)}reportStartFrameProcessing(e,t){go.tick(),this.appliedEffect&&(this.frameProcessingStartedAt=performance.now(),this.performanceStatistics.processStarts(this.appliedEffect.effectId,e,t,this.appliedEffect.effectParam))}reportFrameProcessed(){var e;this.appliedEffect&&(this.processedFrameCount++,this.frameProcessingTimeCost+=performance.now()-this.frameProcessingStartedAt,this.performanceStatistics.processEnds(),this.isFirstFrameProcessed||(this.isFirstFrameProcessed=!0,this.reportPerformanceEvent(o(wo,"videoPerformanceMonitor.reportFrameProcessed"),"video.performance.firstFrameProcessed",[Date.now(),this.appliedEffect.effectId,null===(e=this.appliedEffect)||void 0===e?void 0:e.effectParam])))}reportGettingTextureStream(e){this.gettingTextureStreamStartedAt=performance.now(),this.currentStreamId=e}reportTextureStreamAcquired(){if(void 0!==this.gettingTextureStreamStartedAt){const e=performance.now()-this.gettingTextureStreamStartedAt;this.reportPerformanceEvent(o(wo,"videoPerformanceMonitor.reportTextureStreamAcquired"),"video.performance.textureStreamAcquired",[this.currentStreamId,e])}}}vo.distributionBinSize=1e3,vo.calculateFPSInterval=1e3;var yo=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))},Co=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const bo="v2";var So;!function(e){const t=le()?void 0:new vo(En);let n,r,i;function a(e){En(o(bo,"videoEffects.notifyVideoFrameProcessed"),"video.videoFrameProcessed",[e])}function s(e){En(o(bo,"videoEffects.notifyError"),"video.notifyError",[e])}function c(){return _e(Se)&&!!Se.supports.video&&(!!Se.supports.video.mediaStream||!!Se.supports.video.sharedFrame)}function u(e,n){if(_e(Se,x.sidePanel),!c()||!p())throw z;$t(o(bo,"videoEffects.startVideoExtensibilityVideoStreamHandler"),"video.startVideoExtensibilityVideoStream",(n=>yo(this,void 0,void 0,(function*(){const{streamId:r}=n,o=l(e,t);yield oo(r,o,s,t)}))),!1),En(o(bo,"videoEffects.mediaStream.registerForVideoFrame"),"video.mediaStream.registerForVideoFrame",[n])}function l(e,t){return n=>yo(this,void 0,void 0,(function*(){const r=n.videoFrame;null==t||t.reportStartFrameProcessing(r.codedWidth,r.codedHeight);const o=yield e(n);return null==t||t.reportFrameProcessed(),o}))}function d(e,n){if(_e(Se,x.sidePanel),!c()||!g())throw z;$t(o(bo,"videoEffects.registerForVideoBufferHandler"),"video.newVideoFrame",(n=>{if(n){const r=n.timestamp;null==t||t.reportStartFrameProcessing(n.width,n.height),e(f(n),(()=>{null==t||t.reportFrameProcessed(),a(r)}),s)}}),!1),En(o(bo,"videoEffects.registerForVideoFrame"),"video.registerForVideoFrame",[n])}function f(e){if("videoFrameBuffer"in e)return e;{const{data:t}=e,n=Co(e,["data"]);return Object.assign(Object.assign({},n),{videoFrameBuffer:t})}}function p(){var e;return _e(Se,x.sidePanel)&&h()&&!!(null===(e=Se.supports.video)||void 0===e?void 0:e.mediaStream)}function h(){var e,t,n,r;return!(!(null===(t=null===(e=ue().chrome)||void 0===e?void 0:e.webview)||void 0===t?void 0:t.getTextureStream)||!(null===(r=null===(n=ue().chrome)||void 0===n?void 0:n.webview)||void 0===r?void 0:r.registerTextureStream))}function g(){var e;return _e(Se,x.sidePanel)&&!!(null===(e=Se.supports.video)||void 0===e?void 0:e.sharedFrame)}!function(e){e.NV12="NV12"}(n=e.VideoFrameFormat||(e.VideoFrameFormat={})),function(e){e.EffectChanged="EffectChanged",e.EffectDisabled="EffectDisabled"}(r=e.EffectChangeType||(e.EffectChangeType={})),function(e){e.InvalidEffectId="InvalidEffectId",e.InitializationFailure="InitializationFailure"}(i=e.EffectFailureReason||(e.EffectFailureReason={})),e.registerForVideoFrame=function(e){if(_e(Se,x.sidePanel),!c())throw z;if(!e.videoFrameHandler||!e.videoBufferHandler)throw new Error("Both videoFrameHandler and videoBufferHandler must be provided");if($t(o(bo,"videoEffects.setFrameProcessTimeLimitHandler"),"video.setFrameProcessTimeLimit",(e=>null==t?void 0:t.setFrameProcessTimeLimit(e.timeLimit)),!1),p())u(e.videoFrameHandler,e.config);else{if(!g())throw z;d(e.videoBufferHandler,e.config)}null==t||t.startMonitorSlowFrameProcessing()},e.notifySelectedVideoEffectChanged=function(e,t){if(_e(Se,x.sidePanel),!c())throw z;En(o(bo,"videoEffects.notifySelectedVideoEffectChanged"),"video.videoEffectChanged",[e,t])},e.registerForVideoEffect=function(e){if(_e(Se,x.sidePanel),!c())throw z;$t(o(bo,"videoEffects.registerEffectParameterChangeHandler"),"video.effectParameterChange",ho(e,t),!1),En(o(bo,"videoEffects.registerForVideoEffect"),"video.registerForVideoEffect")},e.isSupported=c}(So||(So={}));const Eo="v2";var Io;!function(e){const t="search.queryChange",n="search.queryClose",r="search.queryExecute";function i(){return!(!_e(Se)||!Se.supports.search)}e.registerHandlers=function(e,a,s){if(_e(Se,x.content),!i())throw z;$t(o(Eo,"search.registerOnClosedHandler"),n,e),$t(o(Eo,"search.registerOnExecutedHandler"),r,a),s&&$t(o(Eo,"search.registerOnChangeHandler"),t,s)},e.unregisterHandlers=function(){if(_e(Se,x.content),!i())throw z;En(o(Eo,"search.unregisterHandlers"),"search.unregister"),qt(t),qt(n),qt(r)},e.isSupported=i,e.closeSearch=function(){return new Promise((e=>{if(_e(Se,x.content),!i())throw new Error("Not supported");e(mn(o(Eo,"search.closeSearch"),"search.closeSearch"))}))}}(Io||(Io={}));var Ao=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};var To;!function(e){function t(t,n){return new Promise((r=>{if(!a())throw z;r(vn(t,e.SharingAPIMessages.shareWebContent,n))}))}function n(e){if(!(e&&e.content&&e.content.length)){throw{errorCode:U.INVALID_ARGUMENTS,message:"Shared content is missing"}}}function r(e){let t;if(e.content.some((e=>!e.type)))throw t={errorCode:U.INVALID_ARGUMENTS,message:"Shared content type cannot be undefined"},t;if(e.content.some((t=>t.type!==e.content[0].type)))throw t={errorCode:U.INVALID_ARGUMENTS,message:"Shared content must be of the same type"},t}function i(e){let t;if("URL"!==e.content[0].type)throw t={errorCode:U.INVALID_ARGUMENTS,message:"Content type is unsupported"},t;if(e.content.some((e=>!e.url)))throw t={errorCode:U.INVALID_ARGUMENTS,message:"URLs are required for URL content types"},t}function a(){return!(!_e(Se)||!Se.supports.sharing)}let s;e.SharingAPIMessages={shareWebContent:"sharing.shareWebContent"},e.shareWebContent=function(e,a){try{n(e),r(e),i(e)}catch(e){return te((()=>Promise.reject(e)),a)}return _e(Se,x.content,x.sidePanel,x.task,x.stage,x.meetingStage),te(t,a,o(a?"v1":"v2","sharing.shareWebContent"),e)},e.isSupported=a,function(e){function t(){var e;return _e(Se)&&void 0!==(null===(e=Se.supports.sharing)||void 0===e?void 0:e.history)}e.getContent=function(){return Ao(this,void 0,void 0,(function*(){if(_e(Se,x.sidePanel,x.meetingStage),!t())throw z;const e=yield vn(o("v2","sharing.history.getContent"),"sharing.history.getContent");return e.map((e=>{ge(e.author),ge(e.threadId)})),e}))},e.isSupported=t}(s=e.history||(e.history={}))}(To||(To={}));var Po;!function(e){let t;function n(){return!(!_e(Se)||!Se.supports.stageView)}!function(e){e.modal="modal",e.popout="popout",e.popoutWithChat="popoutWithChat"}(t=e.StageViewOpenMode||(e.StageViewOpenMode={})),e.open=function(e){return new Promise((t=>{if(_e(Se,x.content),!n())throw z;if(!e)throw new Error("[stageView.open] Stage view params cannot be null");t(vn(o("v2","stageView.open"),"stageView.open",e))}))},e.isSupported=n}(Po||(Po={}));var Fo=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const Ro="v2";var Oo,ko;!function(e){let t,n,r;!function(e){e[e.FrontOrRear=1]="FrontOrRear",e[e.FrontOnly=2]="FrontOnly",e[e.RearOnly=3]="RearOnly"}(t=e.CameraRestriction||(e.CameraRestriction={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(n=e.Source||(e.Source={})),e.hasPermission=function(){if(_e(Se,x.content,x.task),!r.isSupported())throw z;const e=L.Media;return vn(o(Ro,"visualMedia.hasPermission"),"permissions.has",e)},e.requestPermission=function(){if(_e(Se,x.content,x.task),!r.isSupported())throw z;const e=L.Media;return vn(o(Ro,"visualMedia.requestPermission"),"permissions.request",e)},function(e){function t(){return!!(_e(Se)&&Se.supports.visualMedia&&Se.supports.visualMedia.image&&Se.supports.permissions)}function n(){if(!t())throw z}function r(e){if(!e||e.maxVisualMediaCount>10||e.maxVisualMediaCount<1)throw J}function i(e,t){if(t.length>e)throw K}e.captureImages=function(e){return Fo(this,void 0,void 0,(function*(){_e(Se,x.content,x.task),n(),r(e);const t=yield vn(o(Ro,"visualMedia.image.captureImages"),"visualMedia.image.captureImages",e);return i(e.maxVisualMediaCount,t),t}))},e.retrieveImages=function(e){return Fo(this,void 0,void 0,(function*(){_e(Se,x.content,x.task),n(),r(e);const t=yield vn(o(Ro,"visualMedia.image.retrieveImages"),"visualMedia.image.retrieveImages",e);return i(e.maxVisualMediaCount,t),t}))},e.isSupported=t}(r=e.image||(e.image={}))}(Oo||(Oo={})),function(e){function t(){return!(!_e(Se)||!Se.supports.webStorage)}e.isWebStorageClearedOnUserLogOut=function(){return _e(Se),t()},e.isSupported=t}(ko||(ko={}));var Mo;!function(e){let t;function n(){return!(!_e(Se)||!Se.supports.call)}!function(e){e.Unknown="unknown",e.Audio="audio",e.Video="video",e.VideoBasedScreenSharing="videoBasedScreenSharing",e.Data="data"}(t=e.CallModalities||(e.CallModalities={})),e.startCall=function(e){const r=o("v2","call.startCall");return new Promise((o=>{var i;if(_e(Se,x.content,x.task),!n())throw z;if(!Se.isLegacyTeams)return En(r,"call.startCall",[e],o);o(gn(r,"executeDeepLink",fr(e.targets,null===(i=e.requestedModalities)||void 0===i?void 0:i.includes(t.Video),e.source)).then((e=>{if(!e)throw new Error("The call was not properly started");return e})))}))},e.isSupported=n}(Mo||(Mo={}));const Uo="v1";var Lo;!function(e){e.Messages=It.Messages,e.FailedReason=It.FailedReason,e.ExpectedFailureReason=It.ExpectedFailureReason,e.notifyAppLoaded=function(){mt(o(Uo,"appInitialization.notifyAppLoaded"))},e.notifySuccess=function(){yt(o(Uo,"appInitialization.notifySuccess"))},e.notifyFailure=function(e){vt(o(Uo,"appInitialization.notifyFailure"),e)},e.notifyExpectedFailure=function(e){wt(o(Uo,"appInitialization.notifyExpectedFailure"),e)}}(Lo||(Lo={}));const Ho=t("thirdPartyCloudStorage");var No;!function(e){class t{constructor(e,t){this.fileType=e,this.assembleAttachment=t}}let n=[],r=null,i=!0,a=null;function s(e){if(a)if(e&&e.error)a([],e.error),a=null;else if(e&&e.fileChunk)try{i||0!==e.fileChunk.chunkSequence||(Ho("Last chunk is not received or 'endOfFile' value for previous chunk was not set to true"),i=!0,a([],{errorCode:U.INTERNAL_ERROR,message:"error occurred while receiving data"}),n=[],a=null);const o=Cr(e.fileChunk,e.fileType);if(o?(r||(r=new t(e.fileType,[])),r.assembleAttachment.push(o)):(Ho(`Received a null assemble attachment for when decoding chunk sequence ${e.fileChunk.chunkSequence}; not including the chunk in the assembled file.`),a?a([],{errorCode:U.INTERNAL_ERROR,message:"error occurred while receiving data"}):a=null,n=[],a=null,i=!0),i=e.fileChunk.endOfFile,e.fileChunk.endOfFile&&r){const t=yr(r.assembleAttachment,r.fileType);if(t){const r=new File([t],e.fileName,{type:t.type});n.push(r)}e.isLastFile&&a&&(a(n,e.error),n=[],a=null,i=!0),r=null}}catch(e){a&&(a([],{errorCode:U.INTERNAL_ERROR,message:e}),n=[],a=null,i=!0)}else a([],{errorCode:U.INTERNAL_ERROR,message:"data received is null"}),n=[],a=null,i=!0}function c(){return!(!_e(Se)||!Se.supports.thirdPartyCloudStorage)}e.getDragAndDropFiles=function(e,t){if(!t)throw new Error("[getDragAndDropFiles] Callback cannot be null");if(e&&""!==e){if(_e(Se,x.content,x.task),!c())throw z;if(a)throw a=null,new Error("getDragAndDropFiles cannot be called twice");a=t,i=!0,En(o("v2","thirdPartyCloudStorage.getDragAndDropFiles"),"thirdPartyCloudStorage.getDragAndDropFiles",[e],s)}else{t([],{errorCode:U.INVALID_ARGUMENTS})}},e.isSupported=c}(No||(No={}));const Bo="v1";function xo(e,t){gt(o(Bo,"initialize"),t).then((()=>{e&&e()}))}function Do(){Qr.enablePrintCapability()}function _o(){Qr.print()}function Vo(e){De(),En(o(Bo,"getContext"),"getContext",(t=>{t.frameContext||(t.frameContext=y.frameContext),e(t)}))}function Wo(e){St(o(Bo,"registerOnThemeChangeHandlerHelper"),e)}function jo(e){Jt(o(Bo,"registerFullScreenHandler"),"fullScreenChange",e,[])}function zo(e){Jt(o(Bo,"registerAppButtonClickHandler"),"appButtonClick",e,[x.content])}function $o(e){Jt(o(Bo,"registerAppButtonHoverEnterHandler"),"appButtonHoverEnter",e,[x.content])}function qo(e){Jt(o(Bo,"registerAppButtonHoverLeaveHandler"),"appButtonHoverLeave",e,[x.content])}function Go(e){xt.backStack.registerBackButtonHandlerHelper(o(Bo,"registerBackButtonHandler"),e)}function Jo(e){Qr.registerOnLoadHandlerHelper(o(Bo,"registerOnLoadHandler"),e)}function Ko(e){Qr.registerBeforeUnloadHandlerHelper(o(Bo,"registerBeforeUnloadHandler"),e)}function Zo(e){Jt(o(Bo,"registerFocusEnterHandler"),"focusEnter",e,[])}function Qo(e){Jt(o(Bo,"registerChangeSettingsHandler"),"changeSettings",e,[x.content])}function Xo(e,t){_e(Se),kt(o(Bo,"getTabInstances"),t).then((t=>{e(t)}))}function Yo(e,t){_e(Se),Mt(o(Bo,"getMruTabInstances"),t).then((t=>{e(t)}))}function ei(e){Ut(o(Bo,"shareDeepLink"),{subPageId:e.subEntityId,subPageLabel:e.subEntityLabel,subPageWebUrl:e.subEntityWebUrl})}function ti(e,t){_e(Se,x.content,x.sidePanel,x.settings,x.task,x.stage,x.meetingStage);const n=null!=t?t:Z();Et(o(Bo,"executeDeepLink"),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))}function ni(e){Lt(o(Bo,"setFrameContext"),e)}function ri(e,t,n){gt(o(Bo,"initializeWithFrameContext"),n).then((()=>t&&t())),Lt(o(Bo,"setFrameContext"),e)}const oi="v1";function ii(e){Ot(o(oi,"navigation.returnFocus"),e)}function ai(e,t){_e(Se);const n=null!=t?t:Z();Rt(o(oi,"navigation.navigateToTab"),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))}function si(e,t){_e(Se,x.content,x.sidePanel,x.settings,x.remove,x.task,x.stage,x.meetingStage);const n=null!=t?t:Z();Pt(o(oi,"navigation.navigateCrossDomain"),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))}function ci(e){_e(Se);const t=null!=e?e:Z();Ft(o(oi,"navigation.navigateBack")).then((()=>{t(!0)})).catch((e=>{t(!1,e.message)}))}const ui="v1";var li;!function(e){e.setValidityState=function(e){Ht(o(ui,"settings.setValidityState"),e)},e.getSettings=function(e){_e(Se,x.content,x.settings,x.remove,x.sidePanel),Nt(o(ui,"settings.getSettings")).then((t=>{e(t)}))},e.setSettings=function(e,t){_e(Se,x.content,x.settings,x.sidePanel);const n=null!=t?t:Z();Bt(o(ui,"settings.setSettings"),e).then((()=>{n(!0)})).catch((e=>{n(!1,e.message)}))},e.registerOnSaveHandler=function(e){xt.config.registerOnSaveHandlerHelper(o(ui,"settings.registerOnSaveHandler"),e)},e.registerOnRemoveHandler=function(e){xt.config.registerOnRemoveHandlerHelper(o(ui,"settings.registerOnRemoveHandler"),e)}}(li||(li={}));var di=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const fi="v1";var pi;!function(e){function t(e){if(void 0===e.url)throw new Error("url property of taskInfo object can't be undefined");return{url:e.url,size:{height:e.height?e.height:j.Small,width:e.width?e.width:j.Small},title:e.title,fallbackUrl:e.fallbackUrl}}function n(e){if(void 0===e.url||void 0===e.completionBotId)throw new Error(`Both url ${e.url} and completionBotId ${e.completionBotId} are required for bot url dialog. At least one is undefined.`);return{url:e.url,size:{height:e.height?e.height:j.Small,width:e.width?e.width:j.Small},title:e.title,fallbackUrl:e.fallbackUrl,completionBotId:e.completionBotId}}function r(e){return e.height=e.height?e.height:j.Small,e.width=e.width?e.width:j.Small,e}e.startTask=function(e,r){const i=o(fi,"tasks.startTask"),a=r?e=>{var t,n;return r(null!==(t=e.err)&&void 0!==t?t:"",null!==(n=e.result)&&void 0!==n?n:"")}:void 0;return void 0===e.card&&void 0===e.url||e.card?(_e(Se,x.content,x.sidePanel,x.meetingStage),En(i,"tasks.startTask",[e],r)):void 0!==e.completionBotId?st(i,n(e),a):at(i,t(e),a),new Vr},e.updateTask=function(e){e=r(e);const{width:t,height:n}=e,i=di(e,["width","height"]);if(Object.keys(i).length)throw new Error("resize requires a TaskInfo argument containing only width and height");it(o(fi,"tasks.updateTask"),e)},e.submitTask=function(e,t){ct(o(fi,"tasks.submitTask"),e,t)},e.getDefaultSizeIfNotProvided=r}(pi||(pi={}));const hi="v2";var gi;!function(e){let t,n;!function(e){e.guest="Guest",e.attendee="Attendee",e.presenter="Presenter",e.organizer="Organizer"}(t=e.UserMeetingRole||(e.UserMeetingRole={})),function(e){e.added="Added",e.alreadyExists="AlreadyExists",e.conflict="Conflict",e.notFound="NotFound"}(n=e.ContainerState||(e.ContainerState={})),e.isSupported=function(){return!(!_e(Se,x.meetingStage,x.sidePanel)||!Se.supports.interactive)}}(gi||(gi={}));class mi{getFluidTenantInfo(){return wi(),new Promise((e=>{e(vn(o(hi,"interactive.getFluidTenantInfo"),"interactive.getFluidTenantInfo"))}))}getFluidToken(e){return wi(),new Promise((t=>{t(vn(o(hi,"interactive.getFluidToken"),"interactive.getFluidToken",e))}))}getFluidContainerId(){return wi(),new Promise((e=>{e(vn(o(hi,"interactive.getFluidContainerId"),"interactive.getFluidContainerId"))}))}setFluidContainerId(e){return wi(),new Promise((t=>{t(vn(o(hi,"interactive.setFluidContainerId"),"interactive.setFluidContainerId",e))}))}getNtpTime(){return wi(),new Promise((e=>{e(vn(o(hi,"interactive.getNtpTime"),"interactive.getNtpTime"))}))}registerClientId(e){return wi(),new Promise((t=>{t(vn(o(hi,"interactive.registerClientId"),"interactive.registerClientId",e))}))}getClientRoles(e){return wi(),new Promise((t=>{t(vn(o(hi,"interactive.getClientRoles"),"interactive.getClientRoles",e))}))}getClientInfo(e){return wi(),new Promise((t=>{t(vn(o(hi,"interactive.getClientInfo"),"interactive.getClientInfo",e))}))}static create(){return wi(),new mi}}function wi(){if(!gi.isSupported())throw new Error("LiveShareHost Not supported")}var vi=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function yi(e){try{return e.cartItems=Ci(e.cartItems),e}catch(e){throw new Error("Error deserializing cart")}}function Ci(e){return e.map((e=>{if(e.imageURL){const t=new URL(e.imageURL);e.imageURL=t}return e.accessories&&(e.accessories=Ci(e.accessories)),e}))}const bi=e=>{try{return e.map((e=>{const{imageURL:t,accessories:n}=e,r=vi(e,["imageURL","accessories"]),o=Object.assign({},r);return t&&(o.imageURL=t.href),n&&(o.accessories=bi(n)),o}))}catch(e){throw new Error("Error serializing cart items")}};function Si(e){if(!Array.isArray(e)||0===e.length)throw new Error("cartItems must be a non-empty array");for(const t of e)Ii(t),Ei(t.accessories)}function Ei(e){if(null!=e){if(!Array.isArray(e)||0===e.length)throw new Error("CartItem.accessories must be a non-empty array");for(const t of e){if(t.accessories)throw new Error("Item in CartItem.accessories cannot have accessories");Ii(t)}}}function Ii(e){if(!e.id)throw new Error("cartItem.id must not be empty");if(!e.name)throw new Error("cartItem.name must not be empty");Ti(e.price),Pi(e.quantity)}function Ai(e){if(null!=e){if(!e)throw new Error("id must not be empty");if(!1===R(e))throw new Error("id must be a valid UUID")}}function Ti(e){if("number"!=typeof e||e<0)throw new Error(`price ${e} must be a number not less than 0`);if(parseFloat(e.toFixed(3))!==e)throw new Error(`price ${e} must have at most 3 decimal places`)}function Pi(e){if("number"!=typeof e||e<=0||parseInt(e.toString())!==e)throw new Error(`quantity ${e} must be an integer greater than 0`)}function Fi(e){if(!Object.values(Oi.CartStatus).includes(e))throw new Error(`cartStatus ${e} is not valid`)}const Ri="v2";var Oi;!function(e){let t,n;function r(){return!(!_e(Se)||!Se.supports.marketplace)}e.cartVersion={majorVersion:1,minorVersion:1},function(e){e.TACAdminUser="TACAdminUser",e.TeamsAdminUser="TeamsAdminUser",e.TeamsEndUser="TeamsEndUser"}(t=e.Intent||(e.Intent={})),function(e){e.Open="Open",e.Processing="Processing",e.Processed="Processed",e.Closed="Closed",e.Error="Error"}(n=e.CartStatus||(e.CartStatus={})),e.getCart=function(){if(_e(Se,x.content,x.task),!r())throw z;return vn(o(Ri,"marketplace.getCart"),"marketplace.getCart",e.cartVersion).then(yi)},e.addOrUpdateCartItems=function(t){if(_e(Se,x.content,x.task),!r())throw z;if(!t)throw new Error("addOrUpdateCartItemsParams must be provided");return Ai(null==t?void 0:t.cartId),Si(null==t?void 0:t.cartItems),vn(o(Ri,"marketplace.addOrUpdateCartItems"),"marketplace.addOrUpdateCartItems",Object.assign(Object.assign({},t),{cartItems:bi(t.cartItems),cartVersion:e.cartVersion})).then(yi)},e.removeCartItems=function(t){if(_e(Se,x.content,x.task),!r())throw z;if(!t)throw new Error("removeCartItemsParams must be provided");if(Ai(null==t?void 0:t.cartId),!Array.isArray(null==t?void 0:t.cartItemIds)||0===(null==t?void 0:t.cartItemIds.length))throw new Error("cartItemIds must be a non-empty array");return vn(o(Ri,"marketplace.removeCartItems"),"marketplace.removeCartItems",Object.assign(Object.assign({},t),{cartVersion:e.cartVersion})).then(yi)},e.updateCartStatus=function(t){if(_e(Se,x.content,x.task),!r())throw z;if(!t)throw new Error("updateCartStatusParams must be provided");return Ai(null==t?void 0:t.cartId),Fi(null==t?void 0:t.cartStatus),vn(o(Ri,"marketplace.updateCartStatus"),"marketplace.updateCartStatus",Object.assign(Object.assign({},t),{cartVersion:e.cartVersion})).then(yi)},e.isSupported=r}(Oi||(Oi={}));const ki="v2";var Mi;!function(e){const t="Action.Execute";function n(e){if("ActionExecuteInvokeRequest"===e.requestType){const n=e;if(n.type!==t){throw{errorCode:"INTERNAL_ERROR",message:`Invalid action type ${n.type}. Action type must be "${t}"`}}}else if("QueryMessageExtensionRequest"===e.requestType){if(e.commandId.length>64)throw new Error("originalRequestInfo.commandId exceeds the maximum size of 64 characters");if(e.parameters.length>5)throw new Error("originalRequestInfo.parameters exceeds the maximum size of 5");for(const t of e.parameters){if(t.name.length>64)throw new Error("originalRequestInfo.parameters.name exceeds the maximum size of 64 characters");if(t.value.length>512)throw new Error("originalRequestInfo.parameters.value exceeds the maximum size of 512 characters")}}}function r(){return!(!_e(Se)||!Se.supports.externalAppAuthentication)}e.authenticateAndResendRequest=function(e,t,i){if(_e(Se,x.content),!r())throw z;return de(e,new Error("App id is not valid.")),n(i),yn(o(ki,"externalAppAuthentication.authenticateAndResendRequest"),"externalAppAuthentication.authenticateAndResendRequest",[e,i,t.url.href,t.width,t.height,t.isExternal]).then((([e,t])=>{if(e&&null!=t.responseType)return t;throw t}))},e.authenticateWithSSO=function(e,t){if(_e(Se,x.content),!r())throw z;return de(e,new Error("App id is not valid.")),yn(o(ki,"externalAppAuthentication.authenticateWithSSO"),"externalAppAuthentication.authenticateWithSSO",[e,t.claims,t.silent]).then((([e,t])=>{if(!e)throw t}))},e.authenticateWithSSOAndResendRequest=function(e,t,i){if(_e(Se,x.content),!r())throw z;return de(e,new Error("App id is not valid.")),n(i),yn(o(ki,"externalAppAuthentication.authenticateWithSSOAndResendRequest"),"externalAppAuthentication.authenticateWithSSOAndResendRequest",[e,i,t.claims,t.silent]).then((([e,t])=>{if(e&&null!=t.responseType)return t;throw t}))},e.authenticateWithOauth2=function(e,t,n){if(_e(Se,x.content),!r())throw z;return de(e,new Error("titleId is Invalid.")),de(t,new Error("oauthConfigId is Invalid.")),yn(o(ki,"externalAppAuthentication.authenticateWithOauth2"),"externalAppAuthentication.authenticateWithOauth2",[e,t,n.width,n.height,n.isExternal]).then((([e,t])=>{if(!e)throw t}))},e.isSupported=r}(Mi||(Mi={}));var Ui;!function(e){function t(){return!(!_e(Se)||!Se.supports.externalAppCardActions)}e.processActionSubmit=function(e,n){if(_e(Se,x.content),!t())throw z;return de(e,new Error("App id is not valid.")),yn(o("v2","externalAppCardActions.processActionSubmit"),"externalAppCardActions.processActionSubmit",[e,n]).then((([e,t])=>{if(!e)throw t}))},e.processActionOpenUrl=function(e,n,r){if(_e(Se,x.content),!t())throw z;return de(e,new Error("App id is not valid.")),yn(o("v2","externalAppCardActions.processActionOpenUrl"),"externalAppCardActions.processActionOpenUrl",[e,n.href,r]).then((([e,t])=>{if(e)throw e;return t}))},e.isSupported=t}(Ui||(Ui={}));var Li=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};var Hi;!function(e){function t(){return!(!_e(Se)||!Se.supports.externalAppCommands)}e.processActionCommand=function(e,n,r){return Li(this,void 0,void 0,(function*(){if(_e(Se,x.content),!t())throw z;de(e,new Error("App id is not valid."));const[i,a]=yield yn(o("v2","externalAppCommands.processActionCommand"),"externalAppCommands.processActionCommand",[e,n,r]);if(i)throw i;return a}))},e.isSupported=t}(Hi||(Hi={}));const Ni="v1";var Bi;!function(e){function t(e,t){return{errorCode:e,message:t}}e.getCloudStorageFolders=function(e,t){if(_e(Se,x.content),!e||0===e.length)throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");if(!t)throw new Error("[files.getCloudStorageFolders] Callback cannot be null");En(o(Ni,"files.getCloudStorageFolders"),"files.getCloudStorageFolders",[e],t)},e.addCloudStorageFolder=function(e,t){if(_e(Se,x.content),!e||0===e.length)throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");if(!t)throw new Error("[files.addCloudStorageFolder] Callback cannot be null");En(o(Ni,"files.addCloudStorageFolder"),"files.addCloudStorageFolder",[e],t)},e.deleteCloudStorageFolder=function(e,t,n){if(_e(Se,x.content),!e)throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");if(!t)throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");if(!n)throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");En(o(Ni,"files.deleteCloudStorageFolder"),"files.deleteCloudStorageFolder",[e,t],n)},e.getCloudStorageFolderContents=function(e,t,n){if(_e(Se,x.content),!e||!t)throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");if(!n)throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");if("isSubdirectory"in e&&!e.isSubdirectory)throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");En(o(Ni,"files.getCloudStorageFolderContents"),"files.getCloudStorageFolderContents",[e,t],n)},e.openCloudStorageFile=function(e,t,n){if(_e(Se,x.content),!e||!t)throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");if(e.isSubdirectory)throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");En(o(Ni,"files.openCloudStorageFile"),"files.openCloudStorageFile",[e,t,n])},e.getExternalProviders=function(e=!1,t){if(_e(Se,x.content),!t)throw new Error("[files.getExternalProviders] Callback cannot be null");En(o(Ni,"files.getExternalProviders"),"files.getExternalProviders",[e],t)},e.copyMoveFiles=function(e,t,n,r,i=!1,a){if(_e(Se,x.content),!e||0===e.length)throw new Error("[files.copyMoveFiles] selectedFiles cannot be null or empty");if(!t)throw new Error("[files.copyMoveFiles] providerCode cannot be null or empty");if(!n)throw new Error("[files.copyMoveFiles] destinationFolder cannot be null or empty");if(!r)throw new Error("[files.copyMoveFiles] destinationProviderCode cannot be null or empty");if(!a)throw new Error("[files.copyMoveFiles] callback cannot be null");En(o(Ni,"files.copyMoveFiles"),"files.copyMoveFiles",[e,t,n,r,i],a)},e.getFileDownloads=function(e){if(_e(Se,x.content),!e)throw new Error("[files.getFileDownloads] Callback cannot be null");En(o(Ni,"files.getFileDownloads"),"files.getFileDownloads",[],e)},e.openDownloadFolder=function(e=void 0,t){if(_e(Se,x.content),!t)throw new Error("[files.openDownloadFolder] Callback cannot be null");En(o(Ni,"files.openDownloadFolder"),"files.openDownloadFolder",[e],t)},e.addCloudStorageProvider=function(e){if(_e(Se,x.content),!e)throw t(U.INVALID_ARGUMENTS,"[files.addCloudStorageProvider] callback cannot be null");En(o(Ni,"files.addCloudStorageProvider"),"files.addCloudStorageProvider",[],e)},e.removeCloudStorageProvider=function(e,n){if(_e(Se,x.content),!n)throw t(U.INVALID_ARGUMENTS,"[files.removeCloudStorageProvider] callback cannot be null");if(!e||!e.content)throw t(U.INVALID_ARGUMENTS,"[files.removeCloudStorageProvider] 3P cloud storage provider request content is missing");En(o(Ni,"files.removeCloudStorageProvider"),"files.removeCloudStorageProvider",[e],n)},e.addCloudStorageProviderFile=function(e,n){if(_e(Se,x.content),!n)throw t(U.INVALID_ARGUMENTS,"[files.addCloudStorageProviderFile] callback cannot be null");if(!e||!e.content)throw t(U.INVALID_ARGUMENTS,"[files.addCloudStorageProviderFile] 3P cloud storage provider request content is missing");En(o(Ni,"files.addCloudStorageProviderFile"),"files.addCloudStorageProviderFile",[e],n)},e.renameCloudStorageProviderFile=function(e,n){if(_e(Se,x.content),!n)throw t(U.INVALID_ARGUMENTS,"[files.renameCloudStorageProviderFile] callback cannot be null");if(!e||!e.content)throw t(U.INVALID_ARGUMENTS,"[files.renameCloudStorageProviderFile] 3P cloud storage provider request content is missing");En(o(Ni,"files.renameCloudStorageProviderFile"),"files.renameCloudStorageProviderFile",[e],n)},e.deleteCloudStorageProviderFile=function(e,n){if(_e(Se,x.content),!n)throw t(U.INVALID_ARGUMENTS,"[files.deleteCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw t(U.INVALID_ARGUMENTS,"[files.deleteCloudStorageProviderFile] 3P cloud storage provider request content details are missing");En(o(Ni,"files.deleteCloudStorageProviderFile"),"files.deleteCloudStorageProviderFile",[e],n)},e.downloadCloudStorageProviderFile=function(e,n){if(_e(Se,x.content),!n)throw t(U.INVALID_ARGUMENTS,"[files.downloadCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw t(U.INVALID_ARGUMENTS,"[files.downloadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");En(o(Ni,"files.downloadCloudStorageProviderFile"),"files.downloadCloudStorageProviderFile",[e],n)},e.uploadCloudStorageProviderFile=function(e,n){if(_e(Se,x.content),!n)throw t(U.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] callback cannot be null");if(!(e&&e.content&&e.content.itemList&&e.content.itemList.length>0))throw t(U.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");if(!e.content.destinationFolder)throw t(U.INVALID_ARGUMENTS,"[files.uploadCloudStorageProviderFile] Invalid destination folder details");En(o(Ni,"files.uploadCloudStorageProviderFile"),"files.uploadCloudStorageProviderFile",[e],n)},e.registerCloudStorageProviderListChangeHandler=function(e){if(_e(Se),!e)throw new Error("[registerCloudStorageProviderListChangeHandler] Handler cannot be null");$t(o(Ni,"files.registerCloudStorageProviderListChangeHandler"),"files.cloudStorageProviderListChange",e)},e.registerCloudStorageProviderContentChangeHandler=function(e){if(_e(Se),!e)throw new Error("[registerCloudStorageProviderContentChangeHandler] Handler cannot be null");$t(o(Ni,"files.registerCloudStorageProviderContentChangeHandler"),"files.cloudStorageProviderContentChange",e)}}(Bi||(Bi={}));const xi="v1";var Di;!function(e){function t(){return!(!_e(Se)||!Se.supports.meetingRoom)}e.getPairedMeetingRoomInfo=function(){return new Promise((e=>{if(_e(Se),!t())throw z;e(vn(o(xi,"meetingRoom.getPairedMeetingRoomInfo"),"meetingRoom.getPairedMeetingRoomInfo"))}))},e.sendCommandToPairedMeetingRoom=function(e){return new Promise((n=>{if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(_e(Se),!t())throw z;n(vn(o(xi,"meetingRoom.sendCommandToPairedMeetingRoom"),"meetingRoom.sendCommandToPairedMeetingRoom",e))}))},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");if(_e(Se),!t())throw z;$t(o(xi,"meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler"),"meetingRoom.meetingRoomCapabilitiesUpdate",(t=>{_e(Se),e(t)}))},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");if(_e(Se),!t())throw z;$t(o(xi,"meetingRoom.registerMeetingRoomStatesUpdateHandler"),"meetingRoom.meetingRoomStatesUpdate",(t=>{_e(Se),e(t)}))},e.isSupported=t}(Di||(Di={}));var _i,Vi=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};!function(e){let n;const r=t("messageChannels");function i(){return!(!_e(Se)||!Se.supports.messageChannels)}e.getTelemetryPort=function(){return Vi(this,void 0,void 0,(function*(){if(n)return r("Returning telemetry port from cache"),n;if(!i())throw z;return n=yield Cn(o("v1","messageChannels.getTelemetryPort"),"messageChannels.getTelemetryPort"),n}))},e.isSupported=i,e._clearTelemetryPort=function(){n=void 0}}(_i||(_i={}));var Wi,ji;!function(e){function t(){return!(!_e(Se)||!Se.supports.notifications)}e.showNotification=function(e){if(_e(Se,x.content),!t())throw z;En(o("v1","notifications.showNotification"),"notifications.showNotification",[e])},e.isSupported=t}(Wi||(Wi={})),function(e){function t(){return!(!_e(Se)||!Se.supports.otherAppStateChange)}e.registerAppInstallationHandler=function(e){if(!t())throw new Error(U.NOT_SUPPORTED_ON_PLATFORM.toString());if($e(e))throw new Error(U.INVALID_ARGUMENTS.toString());$t(o("v2","otherApp.install"),"otherApp.install",e)},e.unregisterAppInstallationHandler=function(){if(!t())throw new Error(U.NOT_SUPPORTED_ON_PLATFORM.toString());En(o("v2","otherApp.unregisterInstall"),"otherApp.unregisterInstall"),qt("otherApp.install")},e.isSupported=t}(ji||(ji={}));const zi="v1";var $i;!function(e){let t;function n(){return!(!_e(Se)||!Se.supports.remoteCamera)}!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(t=e.ControlCommand||(e.ControlCommand={})),e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");if(_e(Se,x.sidePanel),!n())throw z;En(o(zi,"remoteCamera.getCapableParticipants"),"remoteCamera.getCapableParticipants",e)},e.requestControl=function(e,t){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!t)throw new Error("[remoteCamera.requestControl] Callback cannot be null");if(_e(Se,x.sidePanel),!n())throw z;En(o(zi,"remoteCamera.requestControl"),"remoteCamera.requestControl",[e],t)},e.sendControlCommand=function(e,t){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!t)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");if(_e(Se,x.sidePanel),!n())throw z;En(o(zi,"remoteCamera.sendControlCommand"),"remoteCamera.sendControlCommand",[e],t)},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");if(_e(Se,x.sidePanel),!n())throw z;En(o(zi,"remoteCamera.terminateSession"),"remoteCamera.terminateSession",e)},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");if(_e(Se,x.sidePanel),!n())throw z;$t(o(zi,"remoteCamera.registerOnCapableParticipantsChangeHandler"),"remoteCamera.capableParticipantsChange",e)},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");if(_e(Se,x.sidePanel),!n())throw z;$t(o(zi,"remoteCamera.registerOnErrorHandler"),"remoteCamera.handlerError",e)},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");if(_e(Se,x.sidePanel),!n())throw z;$t(o(zi,"remoteCamera.registerOnDeviceStateChangeHandler"),"remoteCamera.deviceStateChange",e)},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");if(_e(Se,x.sidePanel),!n())throw z;$t(o(zi,"remoteCamera.registerOnSessionStatusChangeHandler"),"remoteCamera.sessionStatusChange",e)},e.isSupported=n}($i||($i={}));var qi;!function(e){function t(){return!(!_e(Se)||!Se.supports.appEntity)}e.selectAppEntity=function(e,n,r,i){if(_e(Se,x.content),!t())throw z;if(!e||0==e.length)throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");if(!i)throw new Error("[appEntity.selectAppEntity] Callback cannot be null");En(o("v1","appEntity.selectAppEntity"),"appEntity.selectAppEntity",[e,n,r],i)},e.isSupported=t}(qi||(qi={}));const Gi="v1";var Ji;!function(e){function t(){return!(!_e(Se)||!Se.supports.teams)}let n;e.getTeamChannels=function(e,n){if(_e(Se,x.content),!t())throw z;if(!e)throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");if(!n)throw new Error("[teams.getTeamChannels] Callback cannot be null");En(o(Gi,"teams.getTeamChannels"),"teams.getTeamChannels",[e],n)},e.refreshSiteUrl=function(e,n){if(_e(Se),!t())throw z;if(!e)throw new Error("[teams.refreshSiteUrl] threadId cannot be null or empty");if(!n)throw new Error("[teams.refreshSiteUrl] Callback cannot be null");En(o(Gi,"teams.refreshSiteUrl"),"teams.refreshSiteUrl",[e],n)},e.isSupported=t,function(e){let t;function n(){return!(!_e(Se)||!Se.supports.teams)&&!!Se.supports.teams.fullTrust}!function(e){function t(){return!(!_e(Se)||!Se.supports.teams)&&(!!Se.supports.teams.fullTrust&&!!Se.supports.teams.fullTrust.joinedTeams)}e.getUserJoinedTeams=function(e){return new Promise((n=>{if(_e(Se),!t())throw z;if((y.hostClientType===N.android||y.hostClientType===N.teamsRoomsAndroid||y.hostClientType===N.teamsPhones||y.hostClientType===N.teamsDisplays)&&!Ve("2.0.1")){const e={errorCode:U.OLD_PLATFORM};throw new Error(JSON.stringify(e))}n(gn(o(Gi,"teams.fullTrust.joinedTeams.getUserJoinedTeams"),"getUserJoinedTeams",e))}))},e.isSupported=t}(t=e.joinedTeams||(e.joinedTeams={})),e.getConfigSetting=function(e){return new Promise((t=>{if(_e(Se),!n())throw z;t(gn(o(Gi,"teams.fullTrust.getConfigSetting"),"getConfigSetting",e))}))},e.isSupported=n}(n=e.fullTrust||(e.fullTrust={}))}(Ji||(Ji={}));var Ki=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};const Zi="v2";var Qi;!function(e){e.frameProcessingTimeoutInMs=2e3;const t=le()?void 0:new vo(En);function n(){const t=setTimeout((()=>{c(`Frame not processed in ${e.frameProcessingTimeoutInMs}ms`,"warn")}),e.frameProcessingTimeoutInMs);return function(){clearTimeout(t)}}function r(e,t){return r=>Ki(this,void 0,void 0,(function*(){const o=r.videoFrame;t.reportStartFrameProcessing(o.codedWidth,o.codedHeight);const i=n(),a=yield e(r);return i(),t.reportFrameProcessed(),a}))}function i(e){return e.videoFrameBuffer=e.videoFrameBuffer||e.data,delete e.data,e}function a(){return _e(Se),So.isSupported()}function s(e){En(o(Zi,"videoEffectsEx.notifyVideoFrameProcessed"),"video.videoFrameProcessed",[e])}function c(e,t="warn"){En(o(Zi,"videoEffectsEx.notifyError"),"video.notifyError",[e,t])}e.registerForVideoFrame=function(e){var u,l;if(!a())throw z;if(!e.videoFrameHandler||!e.videoBufferHandler)throw new Error("Both videoFrameHandler and videoBufferHandler must be provided");if(_e(Se,x.sidePanel)){if($t(o(Zi,"videoEffectsEX.registerSetFrameProcessTimeLimitHandler"),"video.setFrameProcessTimeLimit",(e=>null==t?void 0:t.setFrameProcessTimeLimit(e)),!1),null===(u=Se.supports.video)||void 0===u?void 0:u.mediaStream)$t(o(Zi,"videoEffectsEX.registerStartVideoExtensibilityVideoStreamHandler"),"video.startVideoExtensibilityVideoStream",(n=>Ki(this,void 0,void 0,(function*(){const{streamId:o,metadataInTexture:i}=n,a=t?r(e.videoFrameHandler,t):e.videoFrameHandler;i?yield io(o,a,c,t):yield oo(o,a,c,t)}))),!1),En(o(Zi,"videoEffectsEX.mediaStream.registerForVideoFrame"),"video.mediaStream.registerForVideoFrame",[e.config]);else{if(!(null===(l=Se.supports.video)||void 0===l?void 0:l.sharedFrame))throw z;$t(o(Zi,"videoEffectsEx.registerNewVideoFrameHandler"),"video.newVideoFrame",(r=>{if(r){null==t||t.reportStartFrameProcessing(r.width,r.height);const o=n(),a=r.timestamp;e.videoBufferHandler(i(r),(()=>{o(),null==t||t.reportFrameProcessed(),s(a)}),c)}}),!1),En(o(Zi,"videoEffectsEx.registerForVideoFrame"),"video.registerForVideoFrame",[e.config])}null==t||t.startMonitorSlowFrameProcessing()}},e.notifySelectedVideoEffectChanged=function(e,t,n){if(_e(Se,x.sidePanel),!a())throw z;En(o(Zi,"videoEffectsEx.notifySelectedVideoEffectChanged"),"video.videoEffectChanged",[e,t,n])},e.registerForVideoEffect=function(e){if(_e(Se,x.sidePanel),!a())throw z;$t(o(Zi,"videoEffectsEx.registerEffectParamterChangeHandler"),"video.effectParameterChange",ho(e,t),!1),En(o(Zi,"videoEffectsEx.registerForVideoEffect"),"video.registerForVideoEffect")},e.updatePersonalizedEffects=function(e){if(_e(Se,x.sidePanel),!So.isSupported())throw z;En(o(Zi,"videoEffectsEx.updatePersonalizedEffects"),"video.personalizedEffectsChanged",[e])},e.isSupported=a,e.notifyFatalError=function(e){if(_e(Se),!So.isSupported())throw z;c(e,"fatal")}}(Qi||(Qi={}))})(),r})()));
//# sourceMappingURL=MicrosoftTeams.min.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(129);
;// CONCATENATED MODULE: ./src/utils.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let inputs = {};
let container = document.createElement("div");
container.classList.add("moduleContainer");
function addModule(config) {
    var element = document.createElement("div");
    var button = document.createElement("button");
    button.appendChild(document.createTextNode(config.name));
    button.setAttribute("aria-label", config.name);
    button.id = "button-" + config.name;
    element.appendChild(button);
    element.appendChild(document.createElement("br"));
    if (config.inputs) {
        element.appendChild(document.createElement("br"));
        for (var i = 0; i < config.inputs.length; i++) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(config.inputs[i].name + ":"));
            element.appendChild(label);
            element.appendChild(document.createElement("br"));
            let input;
            let valueGetter;
            const defaultInputValue = (config.inputs[i].defaultValue) ? config.inputs[i].defaultValue : null;
            switch (config.inputs[i].type) {
                case "string":
                    input = document.createElement("input");
                    valueGetter = function () {
                        return input.value;
                    };
                    break;
                case "boolean":
                    input = document.createElement("input");
                    input.type = "checkbox";
                    if (defaultInputValue) {
                        input.checked = defaultInputValue;
                    }
                    valueGetter = function () {
                        return input.checked;
                    };
                    break;
                case "object":
                    input = document.createElement("textarea");
                    valueGetter = function () {
                        input.style.backgroundColor = "";
                        try {
                            return JSON.parse(input.value);
                        }
                        catch (e) {
                            input.style.backgroundColor = "red";
                            if (defaultInputValue) {
                                input.value = defaultInputValue;
                            }
                            return null;
                        }
                    };
                    break;
            }
            config.inputs[i].valueGetter = valueGetter;
            input.setAttribute("aria-label", "input-" + config.name);
            input.id = "input-" + config.name + "-" + i;
            element.appendChild(input);
            inputs[input.id] = input;
            element.appendChild(document.createElement("br"));
        }
    }
    if (config.hasOutput) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("Output:"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var textarea = document.createElement("textarea");
        textarea.setAttribute("aria-label", "textarea-" + config.name);
        textarea.id = "textarea-" + config.name;
        element.appendChild(textarea);
    }
    if (config.hasSelectMedia) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("SelectMediaOutput:"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var image = document.createElement("img");
        image.id = "image-" + config.name;
        image.height = 30;
        image.width = 20;
        element.appendChild(image);
        element.appendChild(document.createElement("br"));
        var image1 = document.createElement("img");
        image1.id = "image-1" + config.name;
        image1.height = 30;
        image1.width = 20;
        element.appendChild(image1);
        element.appendChild(document.createElement("br"));
        var image2 = document.createElement("img");
        image2.id = "image-2" + config.name;
        image2.height = 30;
        image2.width = 20;
        element.appendChild(image2);
        element.appendChild(document.createElement("br"));
        var image3 = document.createElement("img");
        image3.id = "image-3" + config.name;
        image3.height = 30;
        image3.width = 20;
        element.appendChild(image3);
        element.appendChild(document.createElement("br"));
        var image4 = document.createElement("img");
        image4.id = "image-4" + config.name;
        image4.height = 30;
        image4.width = 20;
        element.appendChild(image4);
        element.appendChild(document.createElement("br"));
        var image5 = document.createElement("img");
        image5.id = "image-5" + config.name;
        image5.height = 30;
        image5.width = 20;
        element.appendChild(image5);
        element.appendChild(document.createElement("br"));
        var image6 = document.createElement("img");
        image6.id = "image-6" + config.name;
        image6.height = 30;
        image6.width = 20;
        element.appendChild(image6);
        element.appendChild(document.createElement("br"));
        var image7 = document.createElement("img");
        image7.id = "image-7" + config.name;
        image7.height = 30;
        image7.width = 20;
        element.appendChild(image7);
        element.appendChild(document.createElement("br"));
        var image8 = document.createElement("img");
        image8.id = "image-8" + config.name;
        image8.height = 30;
        image8.width = 20;
        element.appendChild(image8);
        element.appendChild(document.createElement("br"));
        var image9 = document.createElement("img");
        image9.id = "image-9" + config.name;
        image9.height = 30;
        image9.width = 20;
        element.appendChild(image9);
    }
    if (config.hasGetMedia) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("GetMedia (First selected):"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var getMediaImage = document.createElement("img");
        getMediaImage.id = "image-getMediaImage" + config.name;
        getMediaImage.height = 200;
        getMediaImage.width = 150;
        element.appendChild(getMediaImage);
    }
    container.appendChild(element);
    button.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        var args = [];
        if (config.inputs) {
            for (var i = 0; i < config.inputs.length; i++) {
                var inputValue = config.inputs[i].valueGetter();
                if (inputValue === null) {
                    return;
                }
                args.push(inputValue);
            }
        }
        if (config.hasSelectMedia) {
            args.push(function (result) {
                if (typeof result !== typeof []) {
                    alert("something went wrong");
                }
                if (result.length > 0 && result[0]) {
                    image.src = result[0];
                }
                else {
                    image.removeAttribute('src');
                }
                if (result.length > 1 && result[1]) {
                    image1.src = result[1];
                }
                else {
                    image1.removeAttribute('src');
                }
                if (result.length > 2 && result[2]) {
                    image2.src = result[2];
                }
                else {
                    image2.removeAttribute('src');
                }
                if (result.length > 3 && result[3]) {
                    image3.src = result[3];
                }
                else {
                    image3.removeAttribute('src');
                }
                if (result.length > 4 && result[4]) {
                    image4.src = result[4];
                }
                else {
                    image4.removeAttribute('src');
                }
                if (result.length > 5 && result[5]) {
                    image5.src = result[5];
                }
                else {
                    image5.removeAttribute('src');
                }
                if (result.length > 6 && result[6]) {
                    image6.src = result[6];
                }
                else {
                    image6.removeAttribute('src');
                }
                if (result.length > 7 && result[7]) {
                    image7.src = result[7];
                }
                else {
                    image7.removeAttribute('src');
                }
                if (result.length > 8 && result[8]) {
                    image8.src = result[8];
                }
                else {
                    image8.removeAttribute('src');
                }
                if (result.length > 9 && result[9]) {
                    image9.src = result[9];
                }
                else {
                    image9.removeAttribute('src');
                }
            });
        }
        if (config.hasGetMedia) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                getMediaImage.src = result;
            });
        }
        if (config.hasOutput) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                textarea.value = result;
            });
        }
        if (config.onClick) {
            textarea.value = yield config.onClick.apply(null, args);
        }
        if (config.action)
            config.action.apply(null, args);
    }));
    var searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function () {
        // Show element if it matches search text or searchBox is empty
        if (searchInput.value === "" || config.name.toLowerCase().indexOf(searchInput.value.toLowerCase()) !== -1) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
}
function restoreState() {
    var stateStr = localStorage.getItem("state");
    if (!stateStr) {
        return;
    }
    var state = JSON.parse(stateStr);
    for (var id in state) {
        inputs[id].value = state[id];
    }
}
function saveState() {
    var state = {};
    for (var id in inputs) {
        state[id] = inputs[id].value;
    }
    localStorage.setItem("state", JSON.stringify(state));
}
function downloadHandler() {
    var input = document.querySelector("#image_uploads");
    var preview = document.querySelector(".fileUploadPreview");
    input.style.opacity = 0;
    input.addEventListener("change", updateImageDisplay);
    function updateImageDisplay() {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        var curFiles = input.files;
        if (curFiles.length === 0) {
            var para = document.createElement("p");
            para.textContent = "No files currently selected for upload";
            preview.appendChild(para);
        }
        else {
            var list = document.createElement("ol");
            preview.appendChild(list);
            for (var i = 0; i < curFiles.length; i++) {
                var listItem = document.createElement("li");
                var para = document.createElement("p");
                if (validFileType(curFiles[i])) {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ", file size " +
                            returnFileSize(curFiles[i].size) +
                            ".";
                    var image = document.createElement("img");
                    image.src = window.URL.createObjectURL(curFiles[i]);
                    listItem.appendChild(image);
                    listItem.appendChild(para);
                }
                else {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ": Not a valid file type. Update your selection.";
                    listItem.appendChild(para);
                }
                list.appendChild(listItem);
            }
        }
    }
    var fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];
    function validFileType(file) {
        for (var i = 0; i < fileTypes.length; i++) {
            if (file.type === fileTypes[i]) {
                return true;
            }
        }
        return false;
    }
    function returnFileSize(number) {
        if (number < 1024) {
            return number + "bytes";
        }
        else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + "KB";
        }
        else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + "MB";
        }
    }
}
function filterHandler() {
    var searchInput = document.getElementById('searchInput');
    var sectionTitle = document.getElementsByClassName('sectionTitle');
    searchInput.addEventListener('input', function () {
        var searchText = searchInput.value.toLowerCase();
        for (var i = 0; i < sectionTitle.length; i++) {
            var title = sectionTitle[i].textContent.toLowerCase();
            if (title.indexOf(searchText) === -1) {
                sectionTitle[i].parentElement.style.display = 'none';
            }
            else {
                sectionTitle[i].parentElement.style.display = 'block';
            }
        }
    });
}
function initializeDownloadLinks() {
    const csv = "Id,Value\n1,Hello world!\n";
    const data = new Blob([csv]);
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = URL.createObjectURL(data);
    const downloadButton = document.getElementById("downloadButton");
    downloadButton.onclick = () => {
        const csv = "Id, Value\n1,Hello world!\n";
        const data = new Blob([csv]);
        let downloadLink = document.getElementById("hiddenDownloadLink");
        if (downloadLink == null) {
            downloadLink = document.createElement('a');
            downloadLink.setAttribute('download', 'DownloadViaButton.csv');
            downloadLink.setAttribute('id', 'hiddenDownloadLink');
            document.body.appendChild(downloadLink);
        }
        downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        downloadLink.href = URL.createObjectURL(data);
        downloadLink.style.display = 'none';
        downloadLink.click();
    };
}
function outputTabRenderedLocation(getContext) {
    if (isInTeams()) {
        getContext(outputTabRenderedLocationInTeams);
    }
    else {
        addPageSection(`Currently running outside of Microsoft Teams.`);
    }
    function isInTeams() {
        if ((window.parent === window.self && window.nativeInterface) ||
            window.name === "embedded-page-container" ||
            window.name === "extension-tab-frame") {
            return true;
        }
        return false;
    }
}
function outputTabRenderedLocationInTeams(context) {
    var appLocation = 'unidentified location...';
    const perfData = window.performance;
    if (context.meetingId) {
        appLocation = 'Meeting';
    }
    else if (context.chatId) {
        appLocation = 'Chat';
    }
    else if (context.teamId && context.channelId) {
        appLocation = `${context.channelName} channel in ${context.teamName}`;
    }
    else {
        appLocation = 'Teams App';
    }
    if (isInConfig()) {
        appLocation = `${appLocation} (Config page)`;
    }
    else if (isInSidePanel()) {
        appLocation = `${appLocation} (Side Panel)`;
    }
    addPageSection(`Currently running in: ${appLocation}.  with time ${perfData.timing.navigationStart - context.userClickTime}`);
    function isInConfig() {
        return context.frameContext === MicrosoftTeams_min.FrameContexts.settings;
    }
    function isInSidePanel() {
        return context.frameContext === MicrosoftTeams_min.FrameContexts.sidePanel;
    }
}
;
function addPageSection(content) {
    var element = document.createElement("div");
    var title = document.createElement("div");
    title.classList.add("sectionTitle");
    title.textContent = content;
    element.appendChild(title);
    container.prepend(element);
}

;// CONCATENATED MODULE: ./src/app.ts
var app_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const initializeAppModules = () => {
    try {
        var childWindow;
        let totalStates = 0;
        let attachmentArray;
        MicrosoftTeams_min.initialize(undefined, ["https://teams.microsoftonline.cn"]);
        MicrosoftTeams_min.appInitialization.notifyAppLoaded();
        initializeDownloadLinks();
        outputTabRenderedLocation(MicrosoftTeams_min.getContext);
        addModule({
            name: "hasStorageAccess",
            initializedRequired: true,
            hasOutput: true,
            onClick: () => app_awaiter(void 0, void 0, void 0, function* () {
                const perm = yield document.hasStorageAccess();
                console.log(perm);
                return perm;
            }),
        });
        addModule({
            name: "popOut",
            initializedRequired: true,
            hasOutput: true,
            onClick: () => {
                window.open(window.location.href);
            },
        });
        addModule({
            name: "setUnpartitionedCookie",
            initializedRequired: true,
            hasOutput: true,
            onClick: () => app_awaiter(void 0, void 0, void 0, function* () {
                document.cookie = document.cookie + `myCookie${Math.random() % 100}=helloworld`;
                return document.cookie;
            }),
        });
        addModule({
            name: "readUnpartitionedCookie",
            initializedRequired: true,
            hasOutput: true,
            onClick: () => app_awaiter(void 0, void 0, void 0, function* () {
                console.log(document.cookie);
                return document.cookie;
            }),
        });
        addModule({
            name: "requestStorageAccess",
            initializedRequired: true,
            hasOutput: true,
            onClick: () => app_awaiter(void 0, void 0, void 0, function* () {
                const perm = yield document.requestStorageAccess();
                console.log(perm);
                return perm;
            }),
        });
        addModule({
            name: "enablePrintCapability",
            initializedRequired: true,
            hasOutput: false,
            action: function () {
                MicrosoftTeams_min.enablePrintCapability();
            },
        });
        addModule({
            name: "print",
            initializedRequired: true,
            hasOutput: false,
            action: function () {
                MicrosoftTeams_min.print();
            },
        });
        addModule({
            name: "getContext",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getContext(output);
            },
        });
        addModule({
            name: "getTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getTabInstances(output);
            },
        });
        addModule({
            name: "getMRUTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.getMruTabInstances(output);
            },
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "url",
                },
            ],
            action: function (url) {
                MicrosoftTeams_min.navigateCrossDomain(url);
            },
        });
        addModule({
            name: "pages.registerFocusEnterHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.pages.registerFocusEnterHandler((navigateForward) => {
                    if (navigateForward) {
                        output("Focus entered forward");
                    }
                    else {
                        output("Focus entered backward");
                    }
                    var searchInput = document.getElementById("searchInput");
                    searchInput.focus();
                });
            }
        });
        addModule({
            name: "pages.returnFocus",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "navigateForward",
                },
            ],
            action: function (navigateForward) {
                MicrosoftTeams_min.pages.returnFocus(navigateForward);
            },
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "url",
                },
            ],
            action: function (url) {
                MicrosoftTeams_min.navigateCrossDomain(url);
            },
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerOnThemeChangeHandler(output);
            },
        });
        addModule({
            name: "registerChangeSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerChangeSettingsHandler(function () {
                    output("Change Settings Event recieved");
                });
            },
        });
        addModule({
            name: "registerAppButtonClickHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonClickHandler(function () {
                    output("Click event received");
                });
            },
        });
        addModule({
            name: "registerAppButtonHoverEnterHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonHoverEnterHandler(function () {
                    output(`Hover enter event received`);
                });
            },
        });
        addModule({
            name: "registerAppButtonHoverLeaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.registerAppButtonHoverLeaveHandler(function () {
                    output(`Hover leave event received`);
                });
            },
        });
        addModule({
            name: "shareDeepLink",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "deepLinkParameters",
                },
            ],
            action: function (deepLinkParameters) {
                MicrosoftTeams_min.shareDeepLink(deepLinkParameters);
            },
        });
        addModule({
            name: "executeDeepLink",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "deepLink",
                },
            ],
            action: function (deepLink) {
                MicrosoftTeams_min.executeDeepLink(deepLink);
            },
        });
        addModule({
            name: "navigateToApp",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "navigateToAppParameters",
                },
            ],
            action: (navigateToAppParameters) => {
                MicrosoftTeams_min.pages.navigateToApp(navigateToAppParameters);
            },
        });
        addModule({
            name: "authentication.authenticate",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "url",
                },
            ],
            hasOutput: true,
            action: function (url, output) {
                MicrosoftTeams_min.authentication.authenticate({
                    url: url,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                        MessageEvent;
                    },
                });
            },
        });
        addModule({
            name: "authentication_externalBrowser",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "mockOAuth", // do not go to the actual oauth provider, for scenario testing purpose
                },
            ],
            hasOutput: true,
            action: function (mockOAuth, output) {
                MicrosoftTeams_min.authentication.authenticate({
                    url: `auth_start.html?oauthRedirectMethod={oauthRedirectMethod}&authId=${mockOAuth ? "1" : "{authId}"}&mockOAuth=${mockOAuth}&hostRedirectUrl={hostRedirectUrl}`,
                    isExternal: true,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                    },
                });
            },
        });
        addModule({
            name: "tasks.startTask and listen for task module messages",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "taskInfo",
                    defaultValue: '{"title": "Test Task Module", "height": "medium", "width": "medium", "url": "https://teams-test-tab.azurewebsites.net"}',
                },
            ],
            action: function (taskInfo, output) {
                childWindow = MicrosoftTeams_min.tasks.startTask(taskInfo);
                childWindow.addEventListener("message", function (message) {
                    output("Message from task module: " + message);
                    childWindow.postMessage("tab received - " + message);
                });
            },
        });
        addModule({
            name: "send message to Child Window(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "message",
                },
            ],
            action: function (message, output) {
                if (childWindow) {
                    childWindow.postMessage(message);
                }
                else {
                    output("child window not available");
                }
            },
        });
        addModule({
            name: "send message to parent Window(task module to tab)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "message",
                },
            ],
            action: function (message, output) {
                var parentWindow = MicrosoftTeams_min.ParentAppWindow.Instance;
                if (parentWindow) {
                    parentWindow.postMessage(message);
                    output("message sent to parent(tab)");
                }
                else {
                    output("parent window not available");
                }
            },
        });
        addModule({
            name: "register listener for parent message(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                var parentWindow = MicrosoftTeams_min.ParentAppWindow.Instance;
                if (parentWindow) {
                    parentWindow.addEventListener("message", function (message) {
                        output("message from tab: " + message);
                    });
                }
                else {
                    output("parent window not available");
                }
            },
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "showNotificationParameters",
                },
            ],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min.notifications.showNotification(showNotificationParameters);
            },
        });
        addModule({
            name: "authentication.getAuthToken",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "getAuthTokenParameters",
                },
            ],
            action: function (getAuthTokenParameters, output) {
                getAuthTokenParameters.successCallback = (token) => {
                    output("Success: " + token);
                };
                getAuthTokenParameters.failureCallback = (reason) => {
                    output("Failure: " + reason);
                };
                MicrosoftTeams_min.authentication.getAuthToken(getAuthTokenParameters);
            },
        });
        addModule({
            name: "authentication.getUser",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.authentication.getUser({
                    successCallback: output,
                    failureCallback: output,
                });
            },
        });
        addModule({
            name: "authentication.notifyFailure",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "reason",
                },
            ],
            action: function (reason) {
                MicrosoftTeams_min.authentication.notifyFailure(reason);
            },
        });
        addModule({
            name: "authentication.notifySuccess",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "result",
                },
            ],
            action: function (result) {
                MicrosoftTeams_min.authentication.notifySuccess(result);
            },
        });
        addModule({
            name: "settings.getSettings",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.getSettings(output);
            },
        });
        addModule({
            name: "settings.registerOnSaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.registerOnSaveHandler(function (saveEvent) {
                    window.saveEvent = saveEvent;
                    const configUrl = window.location.href;
                    MicrosoftTeams_min.settings.setSettings({
                        websiteUrl: configUrl,
                        contentUrl: configUrl,
                        entityId: "tabconfig",
                        suggestedDisplayName: "Test Tab RegisterOnSave",
                    });
                    output("SaveEvent recieved");
                });
            },
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "reason",
                },
            ],
            action: function (reason) {
                window.saveEvent &&
                    window.saveEvent.notifyFailure(reason);
            },
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.saveEvent && window.saveEvent.notifySuccess();
            },
        });
        addModule({
            name: "settings.setSettings",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "settings",
                    defaultValue: '{"contentUrl": "https://teams-test-tab.azurewebsites.net/", "entityId": "someEntity", "websiteUrl": "https://teams-test-tab.azurewebsites.net/"}',
                },
            ],
            hasOutput: true,
            action: function (settings, output) {
                MicrosoftTeams_min.settings.setSettings(settings);
            },
        });
        addModule({
            name: "settings.setValidityState",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "validityState",
                },
            ],
            action: function (validityState) {
                MicrosoftTeams_min.settings.setValidityState(validityState);
            },
        });
        addModule({
            name: "settings.registerOnRemoveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.settings.registerOnRemoveHandler(function (removeEvent) {
                    window.removeEvent = removeEvent;
                    output("RemoveEvent recieved");
                });
            },
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "reason",
                },
            ],
            action: function (reason) {
                window.removeEvent &&
                    window.removeEvent.notifyFailure(reason);
            },
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.removeEvent &&
                    window.removeEvent.notifySuccess();
            },
        });
        addModule({
            name: "openFilePreview",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "filePreviewParameters",
                },
            ],
            action: function (filePreviewParameters) {
                MicrosoftTeams_min.openFilePreview(filePreviewParameters);
            },
        });
        addModule({
            name: "task.submitTask",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "result",
                },
                {
                    type: "string",
                    name: "appId",
                },
            ],
            action: function (result, appId) {
                MicrosoftTeams_min.tasks.submitTask(result, appId);
            },
        });
        addModule({
            name: "tasks.startTask",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "taskInfo",
                    defaultValue: '{"title": "Test Task Module", "height": "medium", "width": "medium", "url": "https://teams-test-tab.azurewebsites.net"}',
                },
            ],
            hasOutput: true,
            action: function (taskInfo, output) {
                MicrosoftTeams_min.tasks.startTask(taskInfo, (error, result) => {
                    if (error) {
                        output("Error: " + error);
                    }
                    else {
                        output("Result: " + result);
                    }
                });
            },
        });
        addModule({
            name: "tasks.updateTask",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "taskInfo",
                },
            ],
            action: function (taskInfo) {
                MicrosoftTeams_min.tasks.updateTask(taskInfo);
            },
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "showNotificationParameters",
                },
            ],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min.notifications.showNotification(showNotificationParameters);
            },
        });
        addModule({
            name: "getChatMembers",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.conversations.getChatMembers().then(output);
            },
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.teams.fullTrust.joinedTeams
                    .getUserJoinedTeams()
                    .then(output);
            },
        });
        addModule({
            name: "registerBeforeUnload",
            initializedRequired: true,
            inputs: [
                {
                    type: "string",
                    name: "readyToUnloadDelay",
                },
            ],
            action: function (readyToUnloadDelay) {
                const delay = Number(readyToUnloadDelay);
                MicrosoftTeams_min.registerBeforeUnloadHandler(function (readyToUnload) {
                    window.readyToUnload = readyToUnload;
                    setTimeout(() => {
                        readyToUnload();
                    }, delay);
                    alert(`beforeUnload recieved; calling readyToUnload in ${delay / 1000} seconds`);
                    return true;
                });
            },
        });
        addModule({
            name: "readyToUnload",
            initializedRequired: true,
            action: function () {
                window.readyToUnload && window.readyToUnload();
            },
        });
        addModule({
            name: "add states",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "includeHistory",
                    defaultValue: true,
                },
            ],
            hasOutput: true,
            action: function (includeHistory, output) {
                totalStates++;
                if (includeHistory) {
                    window.history.pushState({ some: "state", id: totalStates }, "tab state" + totalStates, "/testTab");
                }
                output("total States: " + totalStates);
                let historyStates = totalStates;
                window.addEventListener("popstate", function (event) {
                    historyStates--;
                    output("onpopstate: back button clicked. total remaining state: " +
                        historyStates);
                }, false);
            },
        });
        addModule({
            name: "registerBackButtonHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                output("total States: " + totalStates);
                MicrosoftTeams_min.registerBackButtonHandler(function () {
                    if (totalStates > 0) {
                        totalStates--;
                        output("back button clicked. total remaining state: " + totalStates);
                        return true;
                    }
                    return false;
                });
            },
        });
        addModule({
            name: "navigateBack",
            initializedRequired: true,
            action: function () {
                MicrosoftTeams_min.pages.backStack.navigateBack();
            },
        });
        addModule({
            name: "returnFocus",
            initializedRequired: true,
            inputs: [
                {
                    type: "boolean",
                    name: "navigateForward",
                },
            ],
            action: function (navigateForward) {
                MicrosoftTeams_min.returnFocus(navigateForward);
            },
        });
        addModule({
            name: "conversations.openConversation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "openConversationRequest",
                },
            ],
            action: function (openConversationRequest, output) {
                openConversationRequest.onStartConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " +
                        conversationResponse.subEntityId +
                        " Conversation Id: " +
                        conversationResponse.conversationId +
                        " Entity Id: " +
                        conversationResponse.entityId +
                        " Channel Id: " +
                        conversationResponse.channelId);
                };
                openConversationRequest.onCloseConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " +
                        conversationResponse.subEntityId +
                        " Conversation Id: " +
                        conversationResponse.conversationId +
                        " Entity Id: " +
                        conversationResponse.entityId +
                        " Channel Id: " +
                        conversationResponse.channelId);
                };
                try {
                    MicrosoftTeams_min.conversations.openConversation(openConversationRequest);
                }
                catch (e) {
                    output("Error" + e);
                }
            },
        });
        addModule({
            name: "conversations.closeConversation",
            initializedRequired: true,
            action: function () {
                MicrosoftTeams_min.conversations.closeConversation();
            },
        });
        addModule({
            name: "captureImage",
            initializedRequired: true,
            hasOutput: true,
            action: (output) => {
                MicrosoftTeams_min.media.captureImage((err, files) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const file = files[0];
                    let content = "";
                    let len = 20;
                    if (file.content) {
                        len = Math.min(len, file.content.length);
                        content = file.content.substr(0, len);
                    }
                    output("format: " +
                        file.format +
                        ", size: " +
                        file.size +
                        ", mimeType: " +
                        file.mimeType +
                        ", content: " +
                        content);
                });
            },
        });
        addModule({
            name: "selectMedia",
            initializedRequired: true,
            hasSelectMedia: true,
            inputs: [{
                    type: "object",
                    name: "mediaInputs",
                    defaultValue: '{"mediaType":1,"maxMediaCount":5,"imageProps":{"sources":[1,2],"startMode":1,"ink":true,"cameraSwitcher":true,"textSticker":true,"enableFilter":false}}',
                }],
            action: (mediaInputs, output) => {
                MicrosoftTeams_min.media.selectMedia(mediaInputs, (error, attachments) => {
                    if (error) {
                        if (error.message) {
                            alert(" ErrorCode: " + error.errorCode + error.message);
                        }
                        else {
                            alert(" ErrorCode: " + error.errorCode);
                        }
                    }
                    else if (attachments) {
                        let imageArr = [];
                        attachmentArray = attachments;
                        for (let i = 0; i < attachments.length; i++)
                            if (attachments[i].mimeType.includes("image")) {
                                console.log("***debug***attach", attachments[i]);
                                imageArr.push("data:" + attachments[i].mimeType + ";base64," + attachments[i].preview);
                                output(imageArr);
                            }
                    }
                });
            }
        });
        addModule({
            name: "getMedia",
            initializedRequired: true,
            hasGetMedia: true,
            action: (output) => {
                if (attachmentArray == null || attachmentArray.length < 0) {
                    alert("You haven't selected anything");
                }
                else {
                    let mediaInput = attachmentArray[0];
                    mediaInput.getMedia((error, blob) => {
                        if (blob) {
                            if (blob.type.includes("image")) {
                                output(URL.createObjectURL(blob));
                            }
                        }
                        if (error) {
                            if (error.message) {
                                alert(" ErrorCode: " + error.errorCode + error.message);
                            }
                            else {
                                alert(" ErrorCode: " + error.errorCode);
                            }
                        }
                    });
                }
            }
        });
        addModule({
            name: "viewImagesWithId",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "selectMediaInputs",
                    defaultValue: '{"mediaType":1,"maxMediaCount":5,"imageProps":{"sources":[1,2],"startMode":1,"ink":true,"cameraSwitcher":true,"textSticker":true,"enableFilter":false}}',
                },
            ],
            action: (selectMediaInputs, output) => {
                MicrosoftTeams_min.media.selectMedia(selectMediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const urlList = [];
                    for (let i = 0; i < medias.length; i++) {
                        const media = medias[i];
                        urlList.push({
                            value: media.content,
                            type: 1, //microsoftTeams.ImageUriType.ID
                        });
                    }
                    MicrosoftTeams_min.media.viewImages(urlList, (gmErr) => {
                        if (gmErr) {
                            output(gmErr);
                            return;
                        }
                        output("Success");
                    });
                });
            },
        });
        addModule({
            name: "viewImagesWithUrls",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "imageUrls",
                    defaultValue: '["https://www.w3schools.com/images/picture.jpg","https://www.w3schools.com/images/picture.jpg"]',
                },
            ],
            action: (imageUrls, output) => {
                const urlList = [];
                for (let i = 0; i < imageUrls.length; i++) {
                    const imageUrl = imageUrls[i];
                    urlList.push({
                        value: imageUrl,
                        type: 2, //microsoftTeams.ImageUriType.URL
                    });
                }
                MicrosoftTeams_min.media.viewImages(urlList, (err) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output("Success");
                });
            },
        });
        addModule({
            name: "getLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "locationProps",
                    defaultValue: '{"allowChooseLocation":true,"showMap":true}',
                },
            ],
            action: (locationProps, output) => {
                MicrosoftTeams_min.location.getLocation(locationProps, (err, location) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(JSON.stringify(location));
                });
            },
        });
        addModule({
            name: "showLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "location",
                    defaultValue: '{"latitude":17,"longitude":17}',
                },
            ],
            action: (location, output) => {
                MicrosoftTeams_min.location.showLocation(location, (err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            },
        });
        addModule({
            name: "geoLocation.requestPermission",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                output(""); // Clear output
                MicrosoftTeams_min.geoLocation
                    .requestPermission()
                    .then((value) => output(`Consented: ${value}`))
                    .catch((err) => output(err));
            },
        });
        addModule({
            name: "media.scanBarCode",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "scanBarCodeConfig",
                    defaultValue: '{"timeOutIntervalInSec":30}',
                },
            ],
            action: (scanBarCodeConfig, output) => {
                MicrosoftTeams_min.media.scanBarCode((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                }, scanBarCodeConfig);
            },
        });
        addModule({
            name: "call.startCall",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "startCallParams",
                    defaultValue: '{"requestedModalities":["audio"],"targets":["yudogan@microsoft.com"]}',
                },
            ],
            action: function (startCallParams, output) {
                MicrosoftTeams_min.call
                    .startCall(startCallParams)
                    .then(() => output("Success"))
                    .catch((err) => output(`Error: ${err}`));
            },
        });
        addModule({
            name: "meeting.getMeetingDetails",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getMeetingDetails((err, meetingDetailsResponse) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(meetingDetailsResponse);
                });
            },
        });
        addModule({
            name: "meeting.shareAppContentToStage",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.shareAppContentToStage((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                }, window.location.href);
            },
        });
        addModule({
            name: "meeting.getAppContentStageSharingState",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getAppContentStageSharingState((err, appContentStageSharingState) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(appContentStageSharingState);
                });
            },
        });
        addModule({
            name: "meeting.getAppContentStageSharingCapabilities",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getAppContentStageSharingCapabilities((err, appContentStageSharingCapabilities) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(appContentStageSharingCapabilities);
                });
            },
        });
        addModule({
            name: "monetization.openPurchaseExperience",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.monetization.openPurchaseExperience((err) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(null);
                });
            },
        });
        addModule({
            name: "getIncomingClientAudioState",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getIncomingClientAudioState((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            },
        });
        addModule({
            name: "toggleIncomingClientAudio",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.toggleIncomingClientAudio((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            },
        });
        addModule({
            name: "meeting.getAuthenticationTokenForAnonymousUser",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min.meeting.getAuthenticationTokenForAnonymousUser((err, authenticationTokenOfAnonymousUser) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(authenticationTokenOfAnonymousUser);
                });
            },
        });
        addModule({
            name: "people.selectPeople",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "peoplePickerInputs",
                    defaultValue: '{"title":"", "setSelected":[], "openOrgWideSearchInChatOrChannel":false, "singleSelect":false}',
                },
            ],
            action: (peoplePickerInputs, output) => {
                MicrosoftTeams_min.people.selectPeople((err, people) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output("People length: " + people.length + " " + JSON.stringify(people));
                }, peoplePickerInputs);
            },
        });
        addModule({
            name: "setFrameContext",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "frameContext",
                    defaultValue: '{"contentUrl":"", "websiteUrl":""}',
                },
            ],
            action: (frameContext) => {
                MicrosoftTeams_min.setFrameContext(frameContext);
            },
        });
        addModule({
            name: "navigateToTab",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "tabInstance",
                },
            ],
            action: (tabInstance, output) => {
                MicrosoftTeams_min.navigateToTab(tabInstance, (status, reason) => {
                    if (reason) {
                        output(reason);
                        return;
                    }
                    output(status);
                });
            },
        });
        addModule({
            name: "sharing.shareWebContent",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "shareWebContentRequest",
                    defaultValue: '{"content":[{"type":"URL","url":"https://teams-test-tab.azurewebsites.net/"}]}',
                },
            ],
            action: (shareWebContentRequest, output) => {
                // Clear the output box prior to action
                output("");
                MicrosoftTeams_min.sharing.shareWebContent(shareWebContentRequest, (err) => {
                    if (err) {
                        output(err.message);
                        return;
                    }
                    output("Sharing was successful.");
                });
            },
        });
        addModule({
            name: "stageView.open",
            initializedRequired: true,
            inputs: [
                {
                    type: "object",
                    name: "stageViewParams",
                },
            ],
            action: function (stageViewParams) {
                MicrosoftTeams_min.stageView.open(stageViewParams);
            },
        });
        addModule({
            name: "setNavBarMenu",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "navBarMenuItems",
                    defaultValue: '[{"id":"submenu1","title":"SubMenu1","displayMode":1,"icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC4wNjkgMTNoLTQuMDY5di0yaDQuMDY5Yy0uMDQxLjMyOC0uMDY5LjY2MS0uMDY5IDFzLjAyOC42NzIuMDY5IDF6bTMuMDM0LTcuMzEybC0yLjg4MS0yLjg4MS0xLjQxNCAxLjQxNCAyLjg4MSAyLjg4MWMuNDExLS41MjkuODg1LTEuMDAzIDEuNDE0LTEuNDE0em0xMS4yMDkgMS40MTRsMi44ODEtMi44ODEtMS40MTQtMS40MTQtMi44ODEgMi44ODFjLjUyOC40MTEgMS4wMDIuODg2IDEuNDE0IDEuNDE0em0tNi4zMTItMy4xMDJjLjMzOSAwIC42NzIuMDI4IDEgLjA2OXYtNC4wNjloLTJ2NC4wNjljLjMyOC0uMDQxLjY2MS0uMDY5IDEtLjA2OXptMCAxNmMtLjMzOSAwLS42NzItLjAyOC0xLS4wNjl2NC4wNjloMnYtNC4wNjljLS4zMjguMDQxLS42NjEuMDY5LTEgLjA2OXptNy45MzEtOWMuMDQxLjMyOC4wNjkuNjYxLjA2OSAxcy0uMDI4LjY3Mi0uMDY5IDFoNC4wNjl2LTJoLTQuMDY5em0tMy4wMzMgNy4zMTJsMi44OCAyLjg4IDEuNDE1LTEuNDE0LTIuODgtMi44OGMtLjQxMi41MjgtLjg4NiAxLjAwMi0xLjQxNSAxLjQxNHptLTExLjIxLTEuNDE1bC0yLjg4IDIuODggMS40MTQgMS40MTQgMi44OC0yLjg4Yy0uNTI4LS40MTEtMS4wMDMtLjg4NS0xLjQxNC0xLjQxNHptMi4zMTItNC44OTdjMCAyLjIwNiAxLjc5NCA0IDQgNHM0LTEuNzk0IDQtNC0xLjc5NC00LTQtNC00IDEuNzk0LTQgNHptMTAgMGMwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNnoiLz48L3N2Zz4=","contentDescription":"SubMenu1","enabled":"true"},{"id":"submenu2","title":"SubMenu2","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTEgMTFoLTExdi0yaDExYy41NTIgMCAxLS40NDggMS0xcy0uNDQ4LTEtMS0xYy0uNDAzIDAtLjc0Ny4yNDItLjkwNS41ODdsLTEuNzQ5LS45NTZjLjQ5OS0uOTY1IDEuNDk0LTEuNjMxIDIuNjU0LTEuNjMxIDMuOTcxIDAgMy45NjkgNiAwIDZ6bTcgN2MwLTEuNjU2LTEuMzQ0LTMtMy0zaC0xNXYyaDE1Yy41NTIgMCAxIC40NDggMSAxcy0uNDQ4IDEtMSAxYy0uNDAzIDAtLjc0Ny0uMjQyLS45MDUtLjU4N2wtMS43NDkuOTU2Yy40OTkuOTY1IDEuNDk0IDEuNjMxIDIuNjU0IDEuNjMxIDEuNjU2IDAgMy0xLjM0NCAzLTN6bTEuMDE0LTcuNjU1Yy4wODItLjc1My43MTItMS4zNDUgMS40ODYtMS4zNDUuODI3IDAgMS41LjY3MyAxLjUgMS41cy0uNjczIDEuNS0xLjUgMS41aC0yMC41djJoMjAuNWMxLjkzMiAwIDMuNS0xLjU2OCAzLjUtMy41cy0xLjU2OC0zLjUtMy41LTMuNWMtMS42MjQgMC0yLjk3NyAxLjExNi0zLjM3MiAyLjYxN2wxLjg4Ni43Mjh6bS0xMy43NjQtNy44NDVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0zLjUtMS41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0uNSAxOC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xMC41IDJjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0zLTNjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTExIC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0tLjUtNGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTEuNSA2LjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0xMy0zYy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xNy41LTJjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS0xNy0xMWMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTQgMGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptNi00LjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTMgMS41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xMiAuOTY5Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM3Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0tMyAxLjAzMWMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptMC0zLjVjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bS00LjUgOC41Yy0uNDE1IDAtLjc1LjMzNi0uNzUuNzVzLjMzNS43NS43NS43NS43NS0uMzM2Ljc1LS43NS0uMzM1LS43NS0uNzUtLjc1em0xLjUtN2MtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTEgM2MtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTItNGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptLTkuNSAyMGMtLjQxNSAwLS43NS4zMzYtLjc1Ljc1cy4zMzUuNzUuNzUuNzUuNzUtLjMzNi43NS0uNzUtLjMzNS0uNzUtLjc1LS43NXptMy41IDBjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6bTE1IDBjLS40MTUgMC0uNzUuMzM2LS43NS43NXMuMzM1Ljc1Ljc1Ljc1Ljc1LS4zMzYuNzUtLjc1LS4zMzUtLjc1LS43NS0uNzV6Ii8+PC9zdmc+","contentDescription":"SubMenu2","enabled":"true"},{"id":"submenu3","title":"SubMenu3","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEuMTkyIDQuMjIxbC0yLjg4MSAyLjg4MWMtLjQxMS0uNTI4LS44ODYtMS4wMDMtMS40MTQtMS40MTRsMi44ODEtMi44ODEgMS40MTQgMS40MTR6bS04LjE5Mi0uMTUydi00LjA2OWgtMnY0LjA2OWMuMzI4LS4wNDEuNjYxLS4wNjkgMS0uMDY5cy42NzIuMDI4IDEgLjA2OXptNi45MzEgNi45MzFjLjA0MS4zMjguMDY5LjY2MS4wNjkgMXMtLjAyOC42NzItLjA2OSAxaDQuMDY5di0yaC00LjA2OXptLTEuOTMxIDFjMCAuMzQxLS4wMzUuNjc0LS4wOSAxaC0xMS44MmMtLjA1NS0uMzI2LS4wOS0uNjU5LS4wOS0xIDAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDZ6bS0xMC44OTctNi4zMTJsLTIuODgxLTIuODgxLTEuNDE0IDEuNDE0IDIuODgxIDIuODgxYy40MTEtLjUyOS44ODUtMS4wMDMgMS40MTQtMS40MTR6bS03LjEwMyA1LjMxMnYyaDQuMDY5Yy0uMDQxLS4zMjgtLjA2OS0uNjYxLS4wNjktMXMuMDI4LS42NzIuMDY5LTFoLTQuMDY5em05LjA2MiAxMS42NjdjLTEuMjA1LTEuMTk1LTEuMzY0LTEuODkzLS4zMTItMy4yNi4zNy0uNDgxLjUzLS45NDIuNTMtMS40IDAtLjk1OS0uNjk5LTEuOTA2LTEuNjIzLTMuMDA2bC0xLjQ0OSAxLjM3OWMxLjM3NSAxLjYgMS4yNDcgMS43NzIuMjYgMy4xODQtLjMxNi40NTMtLjQ0Ni45MDgtLjQ0NiAxLjM1NSAwIDEuMTU5Ljg3NiAyLjI1OSAxLjY2NSAzLjA4MmwxLjM3NS0xLjMzNHptOC42ODggMGMtMS4yMDUtMS4xOTUtMS4zNjQtMS44OTMtLjMxMi0zLjI2LjM3LS40ODEuNTI5LS45NDIuNTI5LTEuNCAwLS45NTktLjY5OS0xLjkwNi0xLjYyMi0zLjAwNmwtMS40NDggMS4zNzljMS4zNzUgMS42IDEuMjQ2IDEuNzcyLjI2IDMuMTg0LS4zMTYuNDUzLS40NDYuOTA4LS40NDYgMS4zNTUgMCAxLjE1OS44NzYgMi4yNTkgMS42NjUgMy4wODJsMS4zNzQtMS4zMzR6bS00LjM5NiAwYy0xLjIwNS0xLjE5NS0xLjM2NC0xLjg5My0uMzEyLTMuMjYuMzctLjQ4MS41MjktLjk0Mi41MjktMS40IDAtLjk1OS0uNjk5LTEuOTA2LTEuNjIyLTMuMDA2bC0xLjQ0OCAxLjM3OWMxLjM3NSAxLjYgMS4yNDYgMS43NzIuMjYgMy4xODQtLjMxNi40NTMtLjQ0Ni45MDgtLjQ0NiAxLjM1NSAwIDEuMTU5Ljg3NiAyLjI1OSAxLjY2NSAzLjA4MmwxLjM3NC0xLjMzNHoiLz48L3N2Zz4","contentDescription":"SubMenu3","enabled":"true"},{"id":"submenu4","title":"SubMenu4","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcuNSAyYy44MjcgMCAxLjUuNjczIDEuNSAxLjV2Ny41MjVjMCAxLjU2OS41MTQgMi4yODcgMS40MTEgMy4wNSAxLjAxLjg1OCAxLjU4OSAyLjEwNiAxLjU4OSAzLjQyNSAwIDIuNDgxLTIuMDE5IDQuNS00LjUgNC41cy00LjUtMi4wMTktNC41LTQuNWMwLTEuMzE5LjU3OS0yLjU2NyAxLjU5LTMuNDI1Ljg5Ni0uNzYxIDEuNDEtMS40NzkgMS40MS0zLjA1di03LjUyNWMwLS44MjcuNjczLTEuNSAxLjUtMS41em0wLTJjLTEuOTMzIDAtMy41IDEuNTY3LTMuNSAzLjV2Ny41MjVjMCAuNTg3LS4yNTggMS4xNDYtLjcwNSAxLjUyNS0xLjQwMyAxLjE5Mi0yLjI5NSAyLjk2NS0yLjI5NSA0Ljk1IDAgMy41OSAyLjkwOSA2LjUgNi41IDYuNXM2LjUtMi45MSA2LjUtNi41YzAtMS45ODUtLjg5Mi0zLjc1OC0yLjI5NS00Ljk1LS40NDctLjM4LS43MDUtLjkzOC0uNzA1LTEuNTI1di03LjUyNWMwLTEuOTMzLTEuNTY3LTMuNS0zLjUtMy41em0yLjEwNyAxNC43MThjLTEuMDEyLS44OS0xLjYwNy0xLjczNC0xLjYwNy0zLjIydi02LjQ5OGgtMXY2LjQ5OGMwIDEuNDg0LS41OTcgMi4zMzItMS42MDcgMy4yMi0uNzk0LjY5OC0xLjM5MyAxLjY0Mi0xLjM5MyAyLjc4MiAwIDEuOTMzIDEuNTY3IDMuNSAzLjUgMy41czMuNS0xLjU2NyAzLjUtMy41YzAtMS4xNC0uNTk5LTIuMDgzLTEuMzkzLTIuNzgyem0tOS42MDctNi4yMThjMCAxLjkzMy0xLjU2NyAzLjUtMy41IDMuNXMtMy41LTEuNTY3LTMuNS0zLjUgMS41NjctMy41IDMuNS0zLjUgMy41IDEuNTY3IDMuNSAzLjV6bS04IDBjMC0uMTcxLjAzMi0uMzMzLjA1MS0uNWgtMi4wNTF2MWgyLjA1MWMtLjAxOS0uMTY3LS4wNTEtLjMyOS0uMDUxLS41em0xLjcwNS0zLjUwMWwtMS40NDgtMS40NDktLjcwNy43MDcgMS40NDggMS40NDhjLjIxLS4yNjEuNDQ1LS40OTcuNzA3LS43MDZ6bTYuMjk3LjcwNmwxLjQ0Ny0xLjQ0OC0uNzA3LS43MDctMS40NDggMS40NDhjLjI2My4yMS40OTguNDQ1LjcwOC43MDd6bS0zLjUwMi0xLjcwNWMuMTcxIDAgLjMzNC4wMzIuNS4wNXYtMi4wNWgtMXYyLjA1Yy4xNjYtLjAxOC4zMjktLjA1LjUtLjA1em0wIDljLS4xNzEgMC0uMzM0LS4wMzItLjUtLjA1djIuMDVoMXYtMi4wNWMtLjE2Ni4wMTgtLjMyOS4wNS0uNS4wNXptNC40NDktNWMuMDE5LjE2Ny4wNTEuMzI5LjA1MS41bC0uMDUxLjVoMi4wNTF2LTFoLTIuMDUxem0tNy45NTEgMy4yOTRsLTEuNDQ4IDEuNDQ5LjcwNy43MDcgMS40NDgtMS40NDhjLS4yNjItLjIxLS40OTctLjQ0Ni0uNzA3LS43MDh6bTYuMjk2LjcwOGwxLjQ0OCAxLjQ0OC43MDctLjcwNy0xLjQ0Ny0xLjQ0OGMtLjIxLjI2Mi0uNDQ1LjQ5Ny0uNzA4LjcwN3oiLz48L3N2Zz4=","contentDescription":"SubMenu4","enabled":"true"},{"id":"submenu5","title":"SubMenu5","icon":"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMi4zOTYgOWgtMi4zOTZ2LTJoMi4zOTZ2MnptNy42MDQtNi40NTh2LTIuNTQyaC0ydjIuNTQyaDJ6bS00Ljc5My44NzZsLTEuODU5LTEuODU5LTEuNDE0IDEuNDE0IDEuODU5IDEuODU5IDEuNDE0LTEuNDE0em05LjIyMi0yLjE1NmwtMS44NzUgMS44NzUgMS40MTQgMS40MTQgMS44NzUtMS44NzUtMS40MTQtMS40MTR6bS0xMS40NiAxMC42NjdsLTIuMDUzIDEuNzczIDEuMzAzIDEuNTE3IDIuMDUzLTEuNzczLTEuMzAzLTEuNTE3em0yMS4wMzEgMi43OTNjMCAyLjM2Mi0xLjk0OSA0LjI3OC00LjM1NCA0LjI3OGgtMTAuMjkyYy0yLjQwNSAwLTQuMzU0LTEuOTE2LTQuMzU0LTQuMjc4IDAtLjc3LjIxMS0xLjQ5LjU3NC0yLjExMy0uOTY1LS45MDctMS41NzQtMi4xOC0xLjU3NC0zLjYwOSAwLTIuNzYyIDIuMjM4LTUgNS01IDEuMzI4IDAgMi41MjMuNTI4IDMuNDE0IDEuMzc2LjY0OC0uMjQgMS4zNS0uMzc2IDIuMDg2LS4zNzYgMy4xNzIgMCA1Ljc1MyAyLjQ0MyA1LjkyMiA1LjUxNiAyLjAzMy4zNTkgMy41NzggMi4xMDUgMy41NzggNC4yMDZ6bS0xOC01LjcyMmMwIC44Ni4zNyAxLjYyOC45NTUgMi4xNzIuNDg0LS4zMTYgMS4wMjktLjU1MSAxLjYyMy0uNjU2LjA4OS0xLjYxLjg0NC0zLjA0MiAxLjk5NC00LjA0Ni0uNDU5LS4yODgtLjk5LS40Ny0xLjU3Mi0uNDctMS42NTQgMC0zIDEuMzQ2LTMgM3ptMTYgNS43MjJjMC0yLjA3Ni0xLjk3OS0yLjYxOC0zLjQ4OC0yLjUxMi4yMTctMS40MzktLjI0MS01LjIxLTQuMDEyLTUuMjEtMy44NzUgMC00LjA2MiAzLjg1NC00LjAxMiA1LjIwOS0xLjM4NC0uMDg0LTMuNDg4LjM5NS0zLjQ4OCAyLjUxMyAwIDEuMjU2IDEuMDU3IDIuMjc4IDIuMzU0IDIuMjc4aDEwLjI5MWMxLjI5OCAwIDIuMzU1LTEuMDIyIDIuMzU1LTIuMjc4em0tMTUuNTggOS4yNzhsLTEuNDEtMS40MSAyLjU5LTIuNTkgMS40MSAxLjQxLTIuNTkgMi41OXptNy41NDMtMi41OWwtMS40MS0xLjQxLTIuNTkgMi41OSAxLjQxIDEuNDEgMi41OS0yLjU5em00Ljg3NSAwbC0xLjQxLTEuNDEtMi41OSAyLjU5IDEuNDEgMS40MSAyLjU5LTIuNTl6Ii8+PC9zdmc+","contentDescription":"SubMenu5","enabled":"true"}]',
                },
            ],
            action: function (navBarMenuItems, output) {
                MicrosoftTeams_min.menus.setNavBarMenu(navBarMenuItems, (id) => {
                    navBarMenuItems.map((item) => {
                        if (item.id === id) {
                            output("Clicked id is : " + id);
                        }
                    });
                    return true;
                });
            },
        });
        addModule({
            name: "appEntity.selectAppEntity",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "selectAppEntityParams",
                },
            ],
            action: function (selectAppEntityParams, output) {
                MicrosoftTeams_min.appEntity.selectAppEntity(selectAppEntityParams.threadId, selectAppEntityParams.categories, selectAppEntityParams.subEntityId, (sdkError, appEntity) => {
                    output(sdkError || appEntity);
                });
            },
        });
        addModule({
            name: "chat.openGroupChat",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "object",
                    name: "openChatRequest",
                    defaultValue: '{"message":"Test Group Chat Message","topic":"Test Group Chat","users":["a@contoso.com","b@contoso.com"]}',
                },
            ],
            action: function (openChatRequest, output) {
                MicrosoftTeams_min.chat
                    .openGroupChat(openChatRequest)
                    .then((result) => {
                    output(result);
                })
                    .catch((error) => {
                    output(error);
                });
            },
        });
        addModule({
            name: "ExternalAppAuthentication.authenticateAndResendRequest",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "appId",
                    defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
                },
                {
                    type: "object",
                    name: "authenticateParameters",
                    defaultValue: JSON.stringify({ url: new URL("https://www.bing.com") }),
                },
                {
                    type: "object",
                    name: "originalRequestInfo",
                    defaultValue: JSON.stringify({
                        requestType: "QueryMessageExtensionRequest",
                        commandId: "searchNews",
                        parameters: [{
                                name: "searchText",
                                value: "news",
                            }]
                    }),
                }
            ],
            action: function (appId, authenticateParameters, originalRequestInfo, output) {
                MicrosoftTeams_min.externalAppAuthentication
                    .authenticateAndResendRequest(appId, authenticateParameters, originalRequestInfo)
                    .then((result) => {
                    output(result);
                })
                    .catch((error) => {
                    output(error);
                });
            },
        });
        addModule({
            name: "ExternalAppAuthentication.authenticateWithSSO",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "appId",
                    defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
                },
                {
                    type: "object",
                    name: "authTokenRequest",
                    defaultValue: '{}',
                }
            ],
            action: function (appId, authTokenRequest, output) {
                MicrosoftTeams_min.externalAppAuthentication
                    .authenticateWithSSO(appId, authTokenRequest)
                    .then((result) => {
                    output(result);
                })
                    .catch((error) => {
                    output(error);
                });
            },
        });
        addModule({
            name: "ExternalAppAuthentication.authenticateWithSSOAndResendRequest",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "appId",
                    defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
                },
                {
                    type: "object",
                    name: "authTokenRequest",
                    defaultValue: '{}',
                },
                {
                    type: "object",
                    name: "originalRequestInfo",
                    defaultValue: JSON.stringify({
                        requestType: "QueryMessageExtensionRequest",
                        commandId: "searchNews",
                        parameters: [{
                                name: "searchText",
                                value: "news",
                            }]
                    }),
                }
            ],
            action: function (appId, authTokenRequest, originalRequestInfo, output) {
                MicrosoftTeams_min.externalAppAuthentication
                    .authenticateWithSSOAndResendRequest(appId, authTokenRequest, originalRequestInfo)
                    .then((result) => {
                    output(result);
                })
                    .catch((error) => {
                    output(error);
                });
            },
        });
        addModule({
            name: "ExternalAppCardActions.processActionSubmit",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "appId",
                    defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
                },
                {
                    type: "object",
                    name: "actionSubmitPayload",
                    defaultValue: JSON.stringify({
                        id: "submitActionId",
                        data: {
                            key: "value",
                            key2: "value2"
                        }
                    })
                }
            ],
            action: function (appId, actionSubmitPayload, output) {
                MicrosoftTeams_min.externalAppCardActions
                    .processActionSubmit(appId, actionSubmitPayload)
                    .then((result) => {
                    output(result);
                })
                    .catch((error) => {
                    output(error);
                });
            },
        });
        addModule({
            name: "ExternalAppCardActions.processActionOpenUrl",
            initializedRequired: true,
            hasOutput: true,
            inputs: [
                {
                    type: "string",
                    name: "appId",
                    defaultValue: "f350a51f-0251-47f2-b355-e0819a1bc44a"
                },
                {
                    type: "string",
                    name: "url",
                    defaultValue: "https://bing.com"
                }
            ],
            action: function (appId, url, output) {
                MicrosoftTeams_min.externalAppCardActions
                    .processActionOpenUrl(appId, new URL(url))
                    .then((result) => {
                    output(result);
                })
                    .catch((error) => {
                    output(error);
                });
            },
        });
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
        // Add handling for F6 and Ctrl/Cmd + F6
        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 117) {
                event.cancelBubble = true;
                event.preventDefault();
                event.stopImmediatePropagation();
                const navigateForward = !(event.ctrlKey || event.metaKey);
                MicrosoftTeams_min.pages.returnFocus(navigateForward);
            }
        });
        MicrosoftTeams_min.appInitialization.notifySuccess();
    }
    catch (err) {
        MicrosoftTeams_min.appInitialization.notifyFailure({
            reason: MicrosoftTeams_min.appInitialization.FailedReason.Other,
            message: err.message,
        });
    }
};

;// CONCATENATED MODULE: ./src/index.ts



(function () {
    initializeAppModules();
    document.body.appendChild(container);
    // Give the DOM a chance to update from the appendChild above
    setTimeout(restoreState, 0);
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("load", () => {
        downloadHandler();
        filterHandler();
    });
    // Define global functions for use from html files
    window.enablePrintCapability = () => {
        MicrosoftTeams_min.teamsCore.enablePrintCapability();
    };
    window.printHandler = () => {
        window.print();
    };
})();

})();

/******/ })()
;
//# sourceMappingURL=app.f56c1191027124c4b304.js.map