parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"ciUy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={btnStart:document.querySelector('[data-action="start"]'),btnStop:document.querySelector('[data-action="stop"]'),btnReset:document.querySelector('[data-action="reset"]'),clockface:document.querySelector('[data-action="clockface"]')};exports.default=t;
},{}],"yUcf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class t{constructor({refs:t,onTick:e}){this.timerId=null,this.isActive=!0,this.refs=t,this.onTick=e,this.onTick(this.getTimeComponent(0))}start(){if(!this.isActive)return;const t=new Date;this.timerId=setInterval(()=>{const e=new Date-t;this.renderClockface(e)},10),this.isActive=!1}stop(){this.isActive||(clearInterval(this.timerId),this.isActive=!0)}reset(){this.stop(),this.renderClockface(0),console.log(this.isActive)}getTimeComponent(t){return{mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}pad(t){return String(t).padStart(2,"0")}renderClockface(t){const e=this.getTimeComponent(t);this.onTick(e)}}exports.default=t;
},{}],"wzc3":[function(require,module,exports) {
"use strict";var t=n(require("./stopwatch-refs")),e=n(require("./stopwatch-class"));function n(t){return t&&t.__esModule?t:{default:t}}const s=new e.default({refs:t.default,onTick:c});function c({mins:e,secs:n}){t.default.clockface.textContent=`${e}:${n}`}t.default.btnStart.addEventListener("click",s.start.bind(s)),t.default.btnStop.addEventListener("click",s.stop.bind(s)),t.default.btnReset.addEventListener("click",s.reset.bind(s));
},{"./stopwatch-refs":"ciUy","./stopwatch-class":"yUcf"}],"GQZK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.params=exports.refs=void 0;const e={calculator:document.querySelector(".container-calc"),display:document.querySelector('[data-action="output"]')};exports.refs=e;const t={firstNumber:"",secondNumber:"",operator:"",previousKey:{dataset:{state:""}},previousKeyType:"",result:""};exports.params=t;
},{}],"IvFA":[function(require,module,exports) {
"use strict";function e(e,t,r){let u;return"+"===e&&(u=t+r),"-"===e&&(u=t-r),"*"===e&&(u=t*r),"/"===e&&(u=t/r),""===e&&(u=0),u}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"nWel":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var t=require("./data"),e=r(require("./secondary-func"));function r(t){return t&&t.__esModule?t:{default:t}}const{display:a}=t.refs;let{firstNumber:s,secondNumber:o,operator:n,previousKey:u,previousKeyType:d,result:p}=t.params;function i(t){if("BUTTON"!==t.target.nodeName)return;const r=t.target,i=r.textContent,{type:f}=r.dataset;"equal"!==f&&"reset"!==f&&(r.dataset.state="selected"),"number"===f&&"operator"!==d&&(s+=i,a.textContent=s,u.dataset.state=""),"operator"===f&&""===o&&(n=i.trim(),a.textContent=n,d="operator",u.dataset.state=""),"operator"===d&&"number"===f&&(o+=i,a.textContent=o,u.dataset.state=""),"operator"===f&&""!==o&&(s=Number(s),o=Number(o),p=(0,e.default)(n,s,o),a.textContent=p,s=p,o="",n=i.trim(),u.dataset.state=""),"equal"===f&&(s=Number(s),o=Number(o),p=(0,e.default)(n,s,o),a.textContent=p,u.dataset.state="",l()),"reset"===f&&(a.textContent="0",u.dataset.state="",l()),u=r}function l(){s="",o="",n="",d="",p=""}
},{"./data":"GQZK","./secondary-func":"IvFA"}],"sIwi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=require("./data"),t=r(require("./secondary-func"));function r(e){return e&&e.__esModule?e:{default:e}}const{display:o}=e.refs;let{firstNumber:n,secondNumber:u,operator:a,previousKey:s,previousKeyType:l,result:p}=e.params;function i(e){const r=e.key;if("Alt"===r||"CapsLock"===r||"Control"===r||"Shift"===r)return;let s=null;"1"!==r&&"2"!==r&&"3"!==r&&"4"!==r&&"5"!==r&&"6"!==r&&"7"!==r&&"8"!==r&&"9"!==r&&"0"!==r||(s="number"),"+"!==r&&"-"!==r&&"*"!==r&&"/"!==r||(s="operator"),"Enter"===r&&(s="equal"),"Delete"!==r&&"Escape"!==r||(s="reset"),"number"===s&&"operator"!==l&&(n+=r,o.textContent=n),"operator"===s&&""===u&&(a=r.trim(),o.textContent=a,l="operator"),"operator"===l&&"number"===s&&(u+=r,o.textContent=u),"operator"===s&&""!==u&&(n=Number(n),u=Number(u),p=(0,t.default)(a,n,u),o.textContent=p,n=p,u="",a=r.trim()),"equal"===s&&(e.preventDefault(),n=Number(n),u=Number(u),p=(0,t.default)(a,n,u),o.textContent=p,f()),"reset"===s&&(o.textContent="0",f())}function f(){n="",u="",a="",l="",p=""}
},{"./data":"GQZK","./secondary-func":"IvFA"}],"hDHP":[function(require,module,exports) {
"use strict";var e=require("./data"),n=t(require("./onClick-func")),r=t(require("./onKeydown-func"));function t(e){return e&&e.__esModule?e:{default:e}}const{calculator:u}=e.refs;u.addEventListener("click",n.default),window.addEventListener("keydown",r.default);
},{"./data":"GQZK","./onClick-func":"nWel","./onKeydown-func":"sIwi"}],"YBCI":[function(require,module,exports) {
const t={input:document.querySelector(".js-input"),btn:document.querySelector(".js-btn"),toDoList:document.querySelector(".js-list")},{input:e,btn:n,toDoList:c}=t;e.addEventListener("input",s),n.addEventListener("click",i),c.addEventListener("click",l),window.addEventListener("keydown",o);let a=0;function o(t){const n=e.dataset.value;"Enter"===t.key&&n&&(d(u(n)),n="")}function s(t){e.dataset.value="",e.dataset.value+=t.target.value}function i(t){d(u(e.dataset.value)),e.value=""}function l(t){"BUTTON"===t.target.nodeName&&(t.target.parentNode.style.display="none")}function u(t){return`<li class="toDo__item js-item">\n            <input type="checkbox" class="check__input" id="checkId-${a+=1}"/>\n            <span class="checkbox"></span>\n            <label class="check" for="checkId-${a}">\n            ${t}\n            </label>\n            <button class="toDo__delete js-deleteBtn" type="button">-</button>\n          </li>`}function d(t){c.insertAdjacentHTML("beforeend",t)}
},{}],"nbmr":[function(require,module,exports) {
const t={rgb_set:document.querySelector(".rgb-guess"),newColorBtn:document.querySelector(".colors-set"),colorsList:document.querySelector(".colors-wrapper-guess"),resultDisplay:document.querySelector(".result")},{rgb_set:o,newColorBtn:e,colorsList:r,resultDisplay:n}=t;let l=[];const c=[...r.children];function s(t){if(t.target.style.backgroundColor!==o.dataset.color)return n.textContent="Try Again";n.textContent="Correct",c.map(o=>{o.style.backgroundColor=`${t.target.style.backgroundColor}`})}function u(){c.map(t=>{t.style.backgroundColor=`${d()}`,l.push(t.style.backgroundColor)})}function a(){n.textContent="",u();const t=i(0,l.length),e=l[t];o.dataset.color=`${e}`,o.textContent=`${e}`,l=[]}function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}function i(t,o){return Math.floor(Math.random()*(o-t+1)+t)}e.addEventListener("click",a),r.addEventListener("click",s);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/stopwatch/stopwatch"),require("./js/calculator/calculator"),require("./js/to-do/toDo"),require("./js/guess-colors/guess-colors");
},{"./sass/main.scss":"clu1","./js/stopwatch/stopwatch":"wzc3","./js/calculator/calculator":"hDHP","./js/to-do/toDo":"YBCI","./js/guess-colors/guess-colors":"nbmr"}]},{},["Focm"], null)
//# sourceMappingURL=/mini-apps-vanilla-js/src.270a3e15.js.map