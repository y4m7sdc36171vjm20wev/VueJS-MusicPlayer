(function(t){function n(n){for(var i,o,s=n[0],l=n[1],c=n[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);p&&p(n);while(d.length)d.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],i=!0,s=1;s<e.length;s++){var l=e[s];0!==r[l]&&(i=!1)}i&&(a.splice(n--,1),t=o(o.s=e[0]))}return t}var i={},r={app:0},a=[];function o(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)o.d(e,i,function(n){return t[n]}.bind(null,i));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p=" /";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var p=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"4cc3":function(t,n,e){t.exports=e.p+"./cradles.4d7bf1c1.mp3"},5044:function(t,n,e){t.exports=e.p+"./mind.143e7d3c.mp3"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Poppins&display=swap",rel:"stylesheet"}}),e("front-page")],1)},a=[],o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"player"},[e("span",{staticClass:"title"},[t._v(" Josh's Playlist ")]),e("br"),e("br"),e("br"),e("div",{staticClass:"btns"},[t.isPlaying?t._e():e("button",{on:{click:t.play}},[t._v("Play")]),t.isPlaying?e("button",{on:{click:t.pause}},[t._v("Pause")]):t._e(),e("button",{on:{click:t.prev}},[t._v("Previous")]),e("button",{on:{click:t.next}},[t._v("Next")])]),e("br"),e("br"),e("br"),e("div",{staticClass:"playing"},[e("label",[t._v("Song Title: ")]),e("h3",{staticClass:"currentTitle"},[t._v(t._s(t.songs[t.index].title))]),e("br"),e("br"),e("label",[t._v("Song Author: ")]),e("h3",{staticClass:"currentAuthor"},[t._v(t._s(t.songs[t.index].author))])])])])},s=[],l={name:"FrontPage",data:function(){return{autoplay:!1,isPlaying:!1,index:0,songs:[{title:"Cradles",author:"Sub Urban",src:e("4cc3")},{title:"Something For your M.I.N.D",author:"SuperOrganism",src:e("5044")},{title:"Blame It on the Kids",author:"AVIVA",src:e("aa1d")},{title:"Alien Boy",author:"Oliver Tree",src:e("db8d")},{title:"Rock Bottom",author:"grandson",src:e("c1e1")}],playing:""}},methods:{play:function(){this.index>this.songs.length-1&&(this.index=0),""==this.playing&&(this.playing=new Audio(this.songs[this.index].src)),void 0!=this.playing.play()&&this.playing.play(),this.playing.onended=function(){this.isPlaying=!1,1==this.autoplay&&this.next()},this.isPlaying=!0},pause:function(){this.playing.pause(),this.isPlaying=!1},next:function(){this.index++,this.playing.pause(),this.playing="",this.play(),this.playing.play()},prev:function(){this.index--,this.playing.pause(),this.playing="",this.play(),this.playing.play()}}},c=l,p=(e("e3d6"),e("2877")),u=Object(p["a"])(c,o,s,!1,null,null,null),d=u.exports,f={name:"App",components:{FrontPage:d},data:function(){return{words:"Welcome To my Webpage"}}},h=f,y=Object(p["a"])(h,r,a,!1,null,null,null),g=y.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(g)}}).$mount("#app")},aa1d:function(t,n,e){t.exports=e.p+"./onk.0c7d63df.mp3"},c1e1:function(t,n,e){t.exports=e.p+"./rock.9daa9530.mp3"},db8d:function(t,n,e){t.exports=e.p+"./alien.ddc12089.mp3"},e3d6:function(t,n,e){"use strict";var i=e("fcca"),r=e.n(i);r.a},fcca:function(t,n,e){}});
//# sourceMappingURL=app.37a6f528.js.map
