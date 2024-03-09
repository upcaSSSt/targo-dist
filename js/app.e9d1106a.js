(function(){"use strict";var t={8831:function(t,e,s){var n=s(9242),o=s(3396);const a={class:"main"},r={class:"main__container"};function i(t,e,s,n,i,d){const c=(0,o.up)("FormAdd"),l=(0,o.up)("OrdersPlot"),u=(0,o.up)("TargoHeader"),m=(0,o.up)("CardsContainer"),h=(0,o.up)("TargoFooter");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o.Wm)(l,{ref:"ordersPlot"},null,512),(0,o.Wm)(u),(0,o._)("main",a,[(0,o._)("div",r,[(0,o.Wm)(m,{onCardClick:d.cardClick},null,8,["onCardClick"])])]),(0,o.Wm)(h)],64)}var d=s(4870);const c={class:"form-add"},l=(0,o.uE)('<h2 class="add__title" data-v-658dbe63> Добавить товар </h2><div class="add__img" data-v-658dbe63><input class="add__input" type="file" accept="image/*" name="img" data-v-658dbe63></div><div class="add__name" data-v-658dbe63><label data-v-658dbe63><h3 class="add-subtitle" data-v-658dbe63>Название</h3><input class="add__input" type="text" name="name" data-v-658dbe63></label></div><div class="add__price" data-v-658dbe63><label data-v-658dbe63><h3 class="add-subtitle" data-v-658dbe63>Цена</h3><input class="add__input" name="price" type="number" min="1" data-v-658dbe63></label></div><div class="add__description" data-v-658dbe63><label data-v-658dbe63><h3 class="add-subtitle" data-v-658dbe63>Описание</h3><textarea name="description" class="add__input" data-v-658dbe63></textarea></label></div><div class="add__button" data-v-658dbe63><button class="btn" data-v-658dbe63> Добавить </button></div>',6),u=[l];function m(t,e,s,a,r,i){return(0,o.wy)(((0,o.wg)(),(0,o.iD)("section",c,[(0,o._)("form",{name:"product-add",class:"form-add__add add",enctype:"multipart/form-data",onSubmit:e[0]||(e[0]=(...t)=>i.addProduct&&i.addProduct(...t))},u,32)],512)),[[n.F8,a.showAddForm]])}s(560);const h={name:"FormAdd",setup(){const t=(0,o.f3)("theme"),e=(0,o.f3)("products"),s=(0,o.f3)("showAddForm"),n=(0,o.f3)("themeAlpha");return{theme:t,products:e,showAddForm:s,themeAlpha:n}},data(){return{id:0}},mounted(){this.id=this.products.length},methods:{async addProduct(t){t.preventDefault();const e=document.querySelector(".form-add__add"),s=new FormData(e);e.reset();await fetch("http://localhost:3000/",{method:"post",body:s});const n=new Date;n.setHours(n.getTimezoneOffset()/-60,0,0,0);try{setTimeout((()=>{this.products.push({imgName:s.get("img").name,name:s.get("name"),price:+s.get("price"),description:s.get("description"),orders:[{date:n,n:1}],id:this.id}),this.id+=1}),2e3)}catch{alert("Не удалось добавить товар. Попробуйте снова")}}}},p=()=>{(0,n.sj)((t=>({"225ddc37":t.themeAlpha(),f7ed6cf0:t.theme})))},_=h.setup;h.setup=_?(t,e)=>(p(),_(t,e)):p;var v=h,f=s(89);const g=(0,f.Z)(v,[["render",m],["__scopeId","data-v-658dbe63"]]);var b=g;const w=t=>((0,o.dD)("data-v-60135823"),t=t(),(0,o.Cn)(),t),y={class:"plot__container"},C={class:"plot__body"},I={class:"plot__item"},x={class:"plot__item"},k=w((()=>(0,o._)("div",{class:"plot__content"},null,-1)));function T(t,e,s,n,a,r){return(0,o.wg)(),(0,o.iD)("section",{class:"plot",onClick:e[3]||(e[3]=(...t)=>r.closePopup&&r.closePopup(...t))},[(0,o._)("div",y,[(0,o._)("div",C,[(0,o._)("div",{class:"plot__items",onClick:e[2]||(e[2]=t=>t.stopPropagation())},[(0,o._)("div",I,[(0,o._)("input",{class:"plot__input_min",type:"date",onChange:e[0]||(e[0]=(...t)=>r.minChange&&r.minChange(...t))},null,32)]),(0,o._)("div",x,[(0,o._)("input",{class:"plot__input_max",type:"date",onChange:e[1]||(e[1]=(...t)=>r.maxChange&&r.maxChange(...t))},null,32)])]),k])])])}var S=s(8302),P=s.n(S);const F={name:"OrdersPlot",setup(){const t=(0,o.f3)("theme"),e=(0,o.f3)("themeAlpha");return{theme:t,themeAlpha:e}},data(){return{minI:0,maxI:0,orders:[],plotContent:null,minInput:null,maxInput:null}},mounted(){this.plotContent=document.querySelector(".plot__content"),this.minInput=document.querySelector(".plot__input_min"),this.maxInput=document.querySelector(".plot__input_max");const t={title:{text:"Количество заказов",font:{color:"#000"}},xaxis:{title:{text:"Даты",font:{color:"#000"}}},yaxis:{title:{text:"Количество",font:{color:"#000"}}}};P().newPlot(this.plotContent,[{}],t,{staticPlot:!0,responsive:!0})},methods:{cardClick(t){this.maxI=t.length-1,this.minInput.value=t[0].date.toISOString().slice(0,-14),this.maxInput.value=t.at(-1).date.toISOString().slice(0,-14),this.minInput.min=t[0].date.toISOString().slice(0,-14),this.minInput.max=this.maxInput.value,this.maxInput.min=this.minInput.value,this.maxInput.max=t.at(-1).date.toISOString().slice(0,-14),P().deleteTraces(this.plotContent,0),P().addTraces(this.plotContent,{x:t.slice(this.minI,this.maxI+1).map((t=>t.date.toLocaleString("ru").slice(0,-10))),y:t.slice(this.minI,this.maxI+1).map((t=>t.n)),mode:"lines+markers",name:"test1",line:{color:this.theme}}),this.orders=t},closePopup(){document.querySelector(".plot").classList.remove("_open"),document.body.classList.remove("_lock")},minChange(t){this.maxInput.min=t.target.value;const e=new Date(t.target.value);for(let s=0;s<=this.maxI;s++)if(this.orders[s].date>=e){this.minI=s;break}P().deleteTraces(this.plotContent,0),P().addTraces(this.plotContent,{x:this.orders.slice(this.minI,this.maxI+1).map((t=>t.date.toLocaleString("ru").slice(0,-10))),y:this.orders.slice(this.minI,this.maxI+1).map((t=>t.n)),mode:"lines+markers",name:"test1",line:{color:this.theme}})},maxChange(t){this.minInput.max=t.target.value;const e=new Date(t.target.value);for(let s=this.orders.length-1;s>=this.minI;s--)if(this.orders[s].date<=e){this.maxI=s;break}P().deleteTraces(this.plotContent,0),P().addTraces(this.plotContent,{x:this.orders.slice(this.minI,this.maxI+1).map((t=>t.date.toLocaleString("ru").slice(0,-10))),y:this.orders.slice(this.minI,this.maxI+1).map((t=>t.n)),mode:"lines+markers",name:"test1",line:{color:this.theme}})},changeFormat(t,e=".",s="-"){return t.split(e).reverse().join(s)}}},O=()=>{(0,n.sj)((t=>({"53dc724c":t.themeAlpha()})))},A=F.setup;F.setup=A?(t,e)=>(O(),A(t,e)):O;var D=F;const j=(0,f.Z)(D,[["render",T],["__scopeId","data-v-60135823"]]);var q=j;const J=t=>((0,o.dD)("data-v-53a94502"),t=t(),(0,o.Cn)(),t),H={class:"header"},L={class:"header__container"},N=J((()=>(0,o._)("div",{class:"header__logo"}," Targo ",-1))),Z={class:"header__themes themes"};function z(t,e,s,n,a,r){const i=(0,o.up)("BtnAdd");return(0,o.wg)(),(0,o.iD)("section",H,[(0,o._)("div",L,[N,(0,o._)("div",Z,[(0,o._)("button",{class:"themes__button _selected",onClick:e[0]||(e[0]=(...t)=>r.switchTheme&&r.switchTheme(...t))}),(0,o._)("button",{class:"themes__button themes_purple",onClick:e[1]||(e[1]=(...t)=>r.switchTheme&&r.switchTheme(...t))}),(0,o._)("button",{class:"themes__button themes_banana",onClick:e[2]||(e[2]=(...t)=>r.switchTheme&&r.switchTheme(...t))}),(0,o._)("button",{class:"themes__button themes_cyan",onClick:e[3]||(e[3]=(...t)=>r.switchTheme&&r.switchTheme(...t))}),(0,o._)("button",{class:"themes__button themes_lavender",onClick:e[4]||(e[4]=(...t)=>r.switchTheme&&r.switchTheme(...t))})]),(0,o.Wm)(i)])])}const W={class:"add"};function $(t,e,s,n,a,r){return(0,o.wg)(),(0,o.iD)("div",W,[(0,o._)("button",{onClick:e[0]||(e[0]=(...t)=>r.showForm&&r.showForm(...t))}," + ")])}var B={name:"BtnAdd",setup(){const t=(0,o.f3)("toggleForm");return{toggleForm:t}},methods:{showForm(){this.toggleForm(),document.body.classList.toggle("_lock")}}};const Y=(0,f.Z)(B,[["render",$],["__scopeId","data-v-4f9c44bc"]]);var E=Y;const K={name:"TargoHeader",components:{BtnAdd:E},setup(){const t=(0,o.f3)("theme");return{theme:t}},methods:{switchTheme(t){document.querySelector(".themes__button._selected").classList.remove("_selected"),this.theme=window.getComputedStyle(t.target).backgroundColor,t.target.classList.add("_selected")}}},M=()=>{(0,n.sj)((t=>({"0e61fe4c":t.theme})))},G=K.setup;K.setup=G?(t,e)=>(M(),G(t,e)):M;var Q=K;const R=(0,f.Z)(Q,[["render",z],["__scopeId","data-v-53a94502"]]);var U=R;const V={class:"products"};function X(t,e,s,n,a,r){const i=(0,o.up)("ProductCard");return(0,o.wg)(),(0,o.iD)("section",V,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.products,(t=>((0,o.wg)(),(0,o.j4)(i,{key:t.id,"img-name":t.imgName,name:t.name,price:t.price,description:t.description,orders:t.orders},null,8,["img-name","name","price","description","orders"])))),128))])}var tt=s(7139);const et={class:"card__img"},st=["src"],nt={class:"card__name"},ot={class:"card__price"},at={class:"card__description"},rt={class:"card__buttons"};function it(t,e,s,n,a,r){return(0,o.wg)(),(0,o.iD)("div",{class:"card",onClick:e[2]||(e[2]=(...t)=>r.showPlot&&r.showPlot(...t))},[(0,o._)("div",et,[(0,o._)("img",{src:`../../img/${s.imgName}`,alt:"Product"},null,8,st)]),(0,o._)("h3",nt,(0,tt.zw)(s.name),1),(0,o._)("div",ot,(0,tt.zw)(`${s.price.toLocaleString("ru")} ₽`),1),(0,o._)("div",at,(0,tt.zw)(s.description),1),(0,o._)("div",rt,[(0,o._)("button",{class:"card__button",onClick:e[0]||(e[0]=(...t)=>r.order&&r.order(...t))}," Заказать "),(0,o._)("button",{class:"card__button card__button_red",onClick:e[1]||(e[1]=(...t)=>r.del&&r.del(...t))}," Удалить ")])])}const dt={name:"TargoHeader",props:{imgName:{type:String,default:"404.webp",require:!0},name:{type:String,default:"Без имени",require:!0},price:{type:Number,default:0,require:!0},description:{type:String,default:"Описание отсутствует",require:!0},orders:{type:Array,default:null,require:!0}},emits:["cardClick"],setup(){const t=(0,o.f3)("theme"),e=(0,o.f3)("products"),s=(0,o.FN)().vnode.key;return{theme:t,products:e,key:s}},methods:{showPlot(){this.$parent.$emit("cardClick",this.orders),document.querySelector(".plot").classList.add("_open"),document.body.classList.add("_lock")},async order(t){t.stopPropagation();const e=this.products.findIndex((t=>t.id===this.key)),s=new Date;s.setHours(s.getTimezoneOffset()/-60,0,0,0),this.products[e].orders.at(-1).date<s?this.products[e].orders.push({date:s,n:1}):this.products[e].orders.at(-1).n+=1;await fetch("http://localhost:3000/order",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({index:e,now:s.toISOString().slice(0,-14)})})},async del(t){t.stopPropagation();const e=this.products.findIndex((t=>t.id===this.key));this.products.splice(e,1);await fetch("http://localhost:3000/del",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({index:e})})}}},ct=()=>{(0,n.sj)((t=>({"2b842bdc":t.theme})))},lt=dt.setup;dt.setup=lt?(t,e)=>(ct(),lt(t,e)):ct;var ut=dt;const mt=(0,f.Z)(ut,[["render",it],["__scopeId","data-v-b2687b04"]]);var ht=mt,pt={name:"CardsContainer",components:{ProductCard:ht},setup(){const t=(0,o.f3)("theme"),e=(0,o.f3)("products");return{theme:t,products:e}},mounted(){fetch("http://localhost:3000/products").then((t=>t.json())).then((t=>{for(let e=0;e<t.length;e++){t[e].id=e;for(const s of t[e].orders)s.date=new Date(s.date)}this.products=t}))}};const _t=(0,f.Z)(pt,[["render",X],["__scopeId","data-v-5dbd2e94"]]);var vt=_t;const ft={class:"footer"},gt={class:"footer__container"};function bt(t,e,s,n,a,r){return(0,o.wg)(),(0,o.iD)("section",ft,[(0,o._)("div",gt," Все права защищены © "+(0,tt.zw)((new Date).getFullYear()),1)])}const wt={name:"TargoFooter",setup(){const t=(0,o.f3)("theme");return{theme:t}}},yt=()=>{(0,n.sj)((t=>({f4f8d3ea:t.theme})))},Ct=wt.setup;wt.setup=Ct?(t,e)=>(yt(),Ct(t,e)):yt;var It=wt;const xt=(0,f.Z)(It,[["render",bt],["__scopeId","data-v-863ccaea"]]);var kt=xt;const Tt={name:"App",components:{FormAdd:b,OrdersPlot:q,TargoHeader:U,CardsContainer:vt,TargoFooter:kt},setup(){const t=(0,d.iH)("rgb(245, 245, 220)"),e=(0,d.iH)(!1),s=(0,d.iH)([]),n=()=>`rgba${t.value.slice(3,-1)}, 0.5)`,a=()=>e.value=!e.value;return(0,o.JJ)("theme",t),(0,o.JJ)("showAddForm",e),(0,o.JJ)("products",s),(0,o.JJ)("themeAlpha",n),(0,o.JJ)("toggleForm",a),{theme:t,products:s,themeAlpha:n}},methods:{cardClick(t){this.$refs.ordersPlot.cardClick(t)}}},St=()=>{(0,n.sj)((t=>({c3657278:t.theme})))},Pt=Tt.setup;Tt.setup=Pt?(t,e)=>(St(),Pt(t,e)):St;var Ft=Tt;const Ot=(0,f.Z)(Ft,[["render",i]]);var At=Ot;const Dt=(0,n.ri)(At);Dt.mount("#app")}},e={};function s(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,n,o,a){if(!n){var r=1/0;for(l=0;l<t.length;l++){n=t[l][0],o=t[l][1],a=t[l][2];for(var i=!0,d=0;d<n.length;d++)(!1&a||r>=a)&&Object.keys(s.O).every((function(t){return s.O[t](n[d])}))?n.splice(d--,1):(i=!1,a<r&&(r=a));if(i){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[n,o,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,a,r=n[0],i=n[1],d=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(d)var l=d(s)}for(e&&e(n);c<r.length;c++)a=r[c],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(l)},n=self["webpackChunktargo"]=self["webpackChunktargo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(8831)}));n=s.O(n)})();
//# sourceMappingURL=app.e9d1106a.js.map