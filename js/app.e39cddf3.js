(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"font-nunito overflow-hidden",attrs:{id:"app"}},[n("Header"),e.questions.length?n("QuestionContainer",{attrs:{currentQuestion:e.questions[e.index],next:e.next}}):e._e()],1)},i=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"flex justify-between p-4 border-b-2 "},[n("li",[e._v("Quiz App")]),n("li",[e._v("Counter: 5/10")])])])}],u={name:"Header",props:{}},c=u,l=n("2877"),p=Object(l["a"])(c,a,s,!1,null,null,null),d=p.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-screen flex justify-center items-center"},[n("div",{staticClass:"text-center w-2/5 bg-gray-300 p-5 md:w-9/12 lg:w-7/12 sm:w-screen"},[n("div",{staticClass:"p-1 border-b-2 text-xl"},[e._v(" "+e._s(e.currentQuestion.question)+" ")]),e._m(0),n("div",[n("button",{staticClass:"text-white bg-indigo-400 p-1 rounded focus:outline-none mx-1"},[e._v(" Submit ")]),n("button",{staticClass:"bg-green-500 text-white p-1 rounded focus:outline-none mx-1",on:{click:e.next}},[e._v(" Next ")])])])])},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-4"},[n("div",{staticClass:"bg-white p-2 border border-gray-300 cursor-pointer hover:bg-gray-400"},[e._v(" I want a dog ")]),n("div",{staticClass:"bg-white p-2 border border-gray-300 cursor-pointer hover:bg-gray-400"},[e._v(" I want a dog ")]),n("div",{staticClass:"bg-white p-2 border border-gray-300 cursor-pointer hover:bg-gray-400"},[e._v(" I want a dog ")]),n("div",{staticClass:"bg-white p-2 border border-gray-300 cursor-pointer hover:bg-gray-400"},[e._v(" I want a dog ")])])}],v={name:"QuestionContainer",props:{currentQuestion:Object,next:Function}},g=v,h=Object(l["a"])(g,f,b,!1,null,null,null),m=h.exports,y=n("bc3a"),_=n.n(y),w=n("2106"),x=n.n(w);r["a"].use(x.a,_.a);var C={name:"App",components:{Header:d,QuestionContainer:m},data:function(){return{questions:[],index:0}},methods:{next:function(){this.index++}},mounted:function(){var e=this;r["a"].axios.get("https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple").then((function(t){e.questions=t.data.results,console.log(e.questions)}))}},j=C,O=Object(l["a"])(j,o,i,!1,null,null,null),P=O.exports;n("a766");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(P)}}).$mount("#app")},a766:function(e,t,n){}});
//# sourceMappingURL=app.e39cddf3.js.map