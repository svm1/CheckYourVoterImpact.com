(function(e){function t(t){for(var a,s,l=t[0],i=t[1],D=t[2],u=0,d=[];u<l.length;u++)s=l[u],r[s]&&d.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);H&&H(t);while(d.length)d.shift()();return o.push.apply(o,D||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var D=0;D<l.length;D++)t(l[D]);var H=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"2f04":function(e,t,n){e.exports=n.p+"img/Your-Voice-Your-Vote.cb0174da.jpg"},5659:function(e,t,n){"use strict";var a=n("61e7"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d"),n("def6");var a=n("2b0e"),r=n("5f2b"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{attrs:{id:"res"}},[n("div",[n("p",[e._v("You got "+e._s(e.id)+" people to come out and vote, good job!")]),e._m(0),n("p",[e._v("You got enough votes to flip: "+e._s(e.getCloseRaces(e.id)))])])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Did you knnow that control of the entire Virginia House of Delegates came down to "),n("b",[e._v("one")]),e._v(", tied distrcit where names were "),n("i",[e._v("literally pulled from a hat")])])}],l=n("3022"),i=a["default"].extend({name:"res",data:function(){return{id:this.$route.params.id,retTotal:100}},methods:{getCloseRaces:function(e){return e>=1&&e<5?"AK-HD1 and 2 State-level races in NH":e>=5&&e<6?"KY-HD96, AK-HD1 and 2 State-level races in NH":e>=6&&e<7?"KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=7&&e<9?"KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=9&&e<11?"MN-HD5A, PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=11&&e<12?"MN-HD5A, PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=12&&e<13?"IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=13&&e<14?"CT-HD120, IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=14&&e<15?"MT-HD22,CT-HD120, IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=15&&e<16?"ME-HD51, MT-HD22,CT-HD120, IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=16&&e<18?"ME-HD82\nME-HD51, MT-HD22,CT-HD120, IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=18&&e<21?"CT-HD101, ME-HD82\nME-HD51, MT-HD22,CT-HD120, IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=21&&e<24?"ND-SD25, CT-HD101, ME-HD82\nME-HD51, MT-HD22,CT-HD120, IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=24&&e<27?"NV-SD20, KY-HD81, ND-SD25, CT-HD101, ME-HD82\nME-HD51, MT-HD22,CT-HD120, IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=27&&e<28?"NM-HD63\nNV-SD20, KY-HD81, ND-SD25, CT-HD101, ME-HD82\nME-HD51, MT-HD22,CT-HD120, IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=28&&e<31?"VT Grand Isle-Chittenden, NM-HD63\nNV-SD20, KY-HD81, ND-SD25, CT-HD101, ME-HD82\nME-HD51, MT-HD22,CT-HD120, IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=31&&e<32?"RI-HD28, VT Grand Isle-Chittenden, NM-HD63\nNV-SD20, KY-HD81, ND-SD25, CT-HD101, ME-HD82\nME-HD51, MT-HD22,CT-HD120, IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=32&&e<34?"VT Franklin3-1, RI-HD28, VT Grand Isle-Chittenden, NM-HD63\nNV-SD20, KY-HD81, ND-SD25, CT-HD101, ME-HD82\nME-HD51, MT-HD22,CT-HD120, IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=34&&e<35?"MT-HD3, VT Franklin3-1, RI-HD28, VT Grand Isle-Chittenden, NM-HD63\nNV-SD20, KY-HD81, ND-SD25, CT-HD101, ME-HD82\nME-HD51, MT-HD22,CT-HD120, IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":e>=35&&e<46?"ND-HD43, KS-HD111\nMT-HD3, VT Franklin3-1, RI-HD28, VT Grand Isle-Chittenden, NM-HD63\nNV-SD20, KY-HD81, ND-SD25, CT-HD101, ME-HD82\nME-HD51, MT-HD22,CT-HD120, IL-SD21, MN-HD5A\nn PA-HD49, KY-HD91, KY-HD27, KY-HD96, AK-HD1 and 2 State-level races in NH":void 0}},computed:{total:function(){return this.id=0,this.retTotal=50,retTotal}}}),D=i,H=(n("5659"),n("2877")),u=Object(H["a"])(D,o,s,!1,null,null,null),d=u.exports;a["default"].use(r["a"]);var c=new r["a"]({mode:"history",routes:[{path:"/",name:"app",alias:"/App.vue",component:app},{path:"/Results.vue/:id",name:"results",component:d}]}),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{attrs:{id:"app"}},[a("div",{staticClass:"nav-bar mt-0"}),a("img",{attrs:{alt:"Vue logo",src:n("2f04"),width:"1000",height:"200"}}),a("div",{staticClass:"pt-5",attrs:{id:"door_qs"}},[a("p",[e._v("How many doors did you knock on?")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.doors,expression:"doors",modifiers:{number:!0}}],staticClass:"w-30",attrs:{type:"number"},domProps:{value:e.doors},on:{input:function(t){t.target.composing||(e.doors=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"pt-5",attrs:{id:"calls_qs"}},[a("p",[e._v("How many phone calls did you send?")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.calls,expression:"calls",modifiers:{number:!0}}],staticClass:"w-30",attrs:{type:"number"},domProps:{value:e.calls},on:{input:function(t){t.target.composing||(e.calls=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"pt-5",attrs:{id:"letters_qs"}},[a("p",[e._v("How many personalized letters did you send?")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.letters,expression:"letters",modifiers:{number:!0}}],staticClass:"w-30",attrs:{type:"number"},domProps:{value:e.letters},on:{input:function(t){t.target.composing||(e.letters=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"pt-5",attrs:{id:"door_qs"}},[a("p",[e._v("How many texts did you send?")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.texts,expression:"texts",modifiers:{number:!0}}],staticClass:"w-30",attrs:{type:"number"},domProps:{value:e.texts},on:{input:function(t){t.target.composing||(e.texts=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"pt-5",attrs:{id:"door_qs"}},[a("p",[e._v("How many people did you convince to vote in person in person?")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.people,expression:"people",modifiers:{number:!0}}],staticClass:"w-30",attrs:{type:"number"},domProps:{value:e.people},on:{input:function(t){t.target.composing||(e.people=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"pt-5",attrs:{id:"door_qs"}}),a("div",{staticClass:"button"},[a("nav",[a("v-btn",{attrs:{small:"",color:"blue"}},[a("router-link",{attrs:{to:{name:"results",params:{id:e.total}}}},[e._v("Click here for results")])],1)],1),a("router-view"),e._v(">\n   ")],1),e._m(0)])},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"git_link"},[a("a",{attrs:{href:"https://github.com/DevonSubel/CheckYourVoterImpact.com"}},[a("img",{attrs:{alt:"GIT_LOGO",src:n("b6cc"),width:"25",height:"25"}})])])}],h=n("e814"),m=n.n(h),v=n("ce5b"),f=n.n(v);n("bf40");a["default"].use(f.a);var K=a["default"].extend({name:"app",data:function(){return{doors:"",doorReal:0,calls:"",callReal:0,letters:"",letterReal:0,texts:"",textsReal:0,people:"",peopleReal:0}},computed:{goToResults:function(){return this.$route.params.results},total:function(){return""===this.doors&&(this.doors=0),this.doorReal=this.doors/14,""===this.calls&&(this.calls=0),this.callReal=this.calls/20,""===this.letters&&(this.letters=0),this.letterReal=this.letters/33,""===this.texts&&(this.texts=0),this.textsReal=this.texts/500,""===this.people&&(this.people=0),this.peopleReal=this.people,Math.ceil(this.doorReal+this.callReal+this.letterReal+this.textsReal+this.peopleReal)}},methods:{gotBack:function(){windows.history.length>1?this.$router.go(-1):this.$router.push("/")},getTotal:function(e,t,n,a,r){door=m()(e),NaN===door&&(door=0),call=m()(t),NaN===call&&(call=0),letter=m()(n),NaN===letter&&(letter=0),text=m()(text),NaN===text&&(text=0),r=m()(r),NaN===r&&(r=0),Object(l["print"])(door+call+letter+text+r)}}}),Y=K,N=(n("034f"),Object(H["a"])(Y,p,A,!1,null,null,null)),M=N.exports;a["default"].config.productionTip=!1,new a["default"]({router:c,render:function(e){return e(M)}}).$mount("#app")},"61e7":function(e,t,n){},"64a9":function(e,t,n){},b6cc:function(e,t){e.exports="data:image/png;base64,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"},def6:function(e,t,n){}});
//# sourceMappingURL=app.cc343cc8.js.map