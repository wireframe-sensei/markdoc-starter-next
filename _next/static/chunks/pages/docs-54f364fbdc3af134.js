(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{8956:function(t,e){function r(t){let e={},r={};return t&&Object.entries(t).forEach(([t,n])=>{if(e[t])throw Error(`"${t}" has already been declared`);let u=n.render?t.match(/[a-z]+/gi).map(t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()).join(""):void 0;e[t]={...n,render:u},u&&(r[u]=n.render)}),{output:e,components:r}}e.J=function(t){let{output:e,components:n}=r(t.tags),{output:u,components:o}=r(t.nodes);return{...t,tags:e,nodes:u,components:{...n,...o}}},e.w=function(t){return Object.prototype.hasOwnProperty.call(t,"default")?t.default:t||{}}},8789:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return r(6942)}])},4718:function(t,e,r){"use strict";r.r(e),r.d(e,{includes:function(){return n},upper:function(){return u}});let n={transform(t){let[e,r]=Object.values(t);return!!Array.isArray(e)&&e.includes(r)}},u={transform(t){let e=t[0];return"string"==typeof e?e.toUpperCase():e}}},8394:function(t,e,r){"use strict";r.r(e),r.d(e,{fence:function(){return o},heading:function(){return i}});var n=r(4211),u=r(7002);let o={render:u.dn,attributes:n.td.fence.attributes},i={render:u.X6,children:["inline"],attributes:{id:{type:String},level:{type:Number,required:!0,default:1},className:{type:String}},transform(t,e){let r=t.transformAttributes(e),u=t.transformChildren(e),o=r.id&&"string"==typeof r.id?r.id:u.filter(t=>"string"==typeof t).join(" ").replace(/[?]/g,"").replace(/\s+/g,"-").toLowerCase();return new n.Vp(this.render,{...r,id:o},u)}}},925:function(t,e,r){"use strict";r.r(e),r.d(e,{callout:function(){return u}});var n=r(7002);let u={render:n.UW,children:["paragraph","tag","list"],attributes:{title:{type:String}}}},6942:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return d},default:function(){return l}});var n=r(7294),u=r(4211),o=r(8956),i=r(925),s=r(8394),c=r(4718);let a={tags:(0,o.w)(i),nodes:(0,o.w)(s),functions:(0,o.w)(c),...(0,o.w)({})},{components:f}=(0,o.J)(a);var d=!0;function l(t){let e=t.markdoc;return u.RZ.react(e.content,n,{components:{...f,...t.components}})}}},function(t){t.O(0,[649,774,888,179],function(){return t(t.s=8789)}),_N_E=t.O()}]);