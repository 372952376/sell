webpackJsonp([1],{"3I7P":function(t,e){},"3LkF":function(t,e){},"5OHe":function(t,e){},K4T6:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},a,!1,function(t){s("yBqj")},null,null).exports,i=s("/ocq"),c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",[s("a",{on:{click:function(e){return t.redirect("/home")}}},[s("svg",{staticClass:"index-footerTabIcon_1EbB8w5"},[s("use",{attrs:{"xlink:href":"#h5-component-index"}})]),t._v(" "),s("span",[t._v("首页")])]),t._v(" "),s("a",{on:{click:function(e){return t.redirect("/discover")}}},[s("svg",{staticClass:"index-footerTabIcon_1EbB8wS"},[s("use",{attrs:{"xlink:href":"#h5-component-discoverRegular"}})]),t._v(" "),s("span",[t._v("发现")])]),t._v(" "),s("a",{on:{click:function(e){return t.redirect("/order")}}},[s("svg",{staticClass:"index-footerTabIcon_1EbB8wS"},[s("use",{attrs:{"xlink:href":"#h5-component-orderRegular"}})]),t._v(" "),s("span",[t._v("订单")])]),t._v(" "),s("a",{on:{click:function(e){return t.redirect("/profile")}}},[s("svg",{staticClass:"index-footerTabIcon_1EbB8wS"},[s("use",{attrs:{"xlink:href":"#h5-component-profileRegular"}})]),t._v(" "),s("span",[t._v("我的")])])])])},staticRenderFns:[]};var o=s("VU/8")({methods:{redirect:function(t){this.$router.push({path:t})}}},c,!1,function(t){s("3LkF")},"data-v-593dcb9d",null).exports,l=s("//Fk"),u=s.n(l),v=s("aozt"),_=s.n(v);var f=s("psq8"),h=s.n(f),p=s("wSez"),d=(s("5OHe"),s("bghU"),{props:{score:Number,size:Number},computed:{starType:function(){return"star-"+this.size},starClasses:function(){for(var t=Math.floor(2*this.score)/2,e=Math.floor(t),s=t%1!=0,n=[],a=0;a<e;a++)n.push("on");for(s&&n.push("half");n.length<5;)n.push("off");return n}}}),m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"star",class:this.starType},this._l(this.starClasses,function(t,s){return e("span",{key:s,staticClass:"star-item",class:t})}),0)},staticRenderFns:[]};var g=s("VU/8")(d,m,!1,function(t){s("iLtD")},"data-v-8d698cf8",null).exports;n.default.component(p.Swipe.name,p.Swipe),n.default.component(p.SwipeItem.name,p.SwipeItem);var b={components:{"elm-tabbar":o,"elm-star":g},data:function(){return{hotsearches:[],entries:[],restaurants:[]}},created:function(){var t=this;new u.a(function(t,e){_.a.get("static/hot-search.json").then(function(e){t(e)}).catch(function(t){e(t)})}).then(function(e){t.hotsearches=e.data}).catch(function(t){console.log(t)}),new u.a(function(t,e){_.a.get("static/entries.json").then(function(e){t(e)}).catch(function(t){e(t)})}).then(function(e){t.entries=h.a.chunk(e.data[0].entries,8),console.log(t.entries)}).catch(function(t){console.log(t)}),new u.a(function(t,e){_.a.get("static/restaurants.json").then(function(e){t(e)}).catch(function(t){e(t)})}).then(function(e){console.log(e.data.items),t.restaurants=e.data.items}).catch(function(t){console.log(t)})},filters:{imgUrl:function(t){var e="https://fuss10.elemecdn.com/",s=(e+=t.slice(0,1)+"/"+t.slice(1,3)+"/"+t.slice(3)).match(/jpeg|jpg|png$/);return console.log(s[0]),e+="."+s[0]+"?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",[s("div",{staticClass:"location"},[s("svg",{staticClass:"icon-location",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 31"}},[s("path",{attrs:{fill:"#FFF","fill-rule":"evenodd",d:"M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"}})]),t._v(" "),s("span",[t._v("河北软件职业技术学院")]),t._v(" "),s("svg",{staticClass:"icon-arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 8"}},[s("path",{attrs:{fill:"#FFF","fill-rule":"evenodd",d:"M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"}})])])]),t._v(" "),s("section",{staticClass:"search"},[s("div",{staticClass:"button"},[s("a",{attrs:{href:""}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[s("path",{attrs:{"fill-opacity":".38",d:"M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"}})]),t._v(" "),s("span",[t._v("搜索饿了么商家、商品名称")])])])]),t._v(" "),s("section",{staticClass:"hot-search"},[s("ul",t._l(t.hotsearches,function(e,n){return s("li",{key:n},[t._v(t._s(e.word))])}),0)]),t._v(" "),s("section",{staticClass:"entries"},[s("mt-swipe",{attrs:{auto:4e3}},t._l(t.entries,function(e,n){return s("mt-swipe-item",{key:n},t._l(e,function(e,n){return s("a",{key:n,attrs:{href:""}},[s("img",{attrs:{src:t._f("imgUrl")(e.image_hash),alt:""}}),t._v(" "),s("span",[t._v(t._s(e.name))])])}),0)}),1)],1),t._v(" "),s("section",{staticClass:"recommends"},[t._m(0),t._v(" "),t._l(t.restaurants,function(e,n){return s("section",{key:n,staticClass:"shop-list"},[s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-logo"},[s("img",{attrs:{src:t._f("imgUrl")(e.restaurant.image_path),alt:""}})]),t._v(" "),s("div",{staticClass:"shop-main"},[s("div",{staticClass:"title"},[s("h3",[t._v(t._s(e.restaurant.name))]),t._v(" "),t._m(1,!0)]),t._v(" "),s("div",{staticClass:"rating"},[s("div",{staticClass:"ratingWrap"},[s("elm-star",{attrs:{score:e.restaurant.rating,size:24}}),t._v(" "),s("span",[t._v(t._s(e.restaurant.rating))]),t._v(" "),s("span",[t._v("月售"+t._s(e.restaurant.recent_order_num)+"单")])],1),t._v(" "),t._m(2,!0)]),t._v(" "),s("div",{staticClass:"deliver"},[s("div",{staticClass:"money"},[s("span",[t._v("￥"+t._s(e.restaurant.float_minimum_order_amount)+"起送")]),t._v(" "),s("span",[t._v("免配送费")])]),t._v(" "),s("div",{staticClass:"distance"},[s("span",[t._v(t._s(e.restaurant.distance)+"米")]),t._v(" "),s("span",[t._v(t._s(e.restaurant.order_lead_time)+"分钟")])])]),t._v(" "),s("div",{staticClass:"shop-activity"},[s("div",{staticClass:"activities"},t._l(e.restaurant.activities,function(e,n){return s("div",{key:n,staticClass:"activity-list"},[s("span",{staticStyle:{"background-color":"rgb(240, 136, 79)",color:"#fff"}},[t._v(t._s(e.icon_name))]),t._v(" "),s("span",[t._v(t._s(e.tips))])])}),0),t._v(" "),s("div",{staticClass:"activity-btn"},[s("span",[t._v(t._s(e.restaurant.activities.length)+"活动")]),t._v(" "),s("img",{attrs:{src:"",alt:""}})])])])])])})],2),t._v(" "),s("elm-tabbar")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"shop-title"},[e("h3",[this._v("推荐商家")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("广告")]),this._v(" "),e("li",[this._v("保险")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"deliver-mode"},[e("span",[this._v("蜂鸟专送")])])}]};var C=s("VU/8")(b,w,!1,function(t){s("SP8N")},"data-v-fbb8f314",null).exports,x={components:{"elm-tabbar":o}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("订单")]),this._v(" "),e("elm-tabbar")],1)},staticRenderFns:[]};var y=s("VU/8")(x,k,!1,function(t){s("sU1K")},"data-v-1399aa9b",null).exports,F={components:{"elm-tabbar":o}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("发现")]),this._v(" "),e("elm-tabbar")],1)},staticRenderFns:[]};var U=s("VU/8")(F,E,!1,function(t){s("K4T6")},"data-v-67271c25",null).exports,$={components:{"elm-tabbar":o}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("我的")]),this._v(" "),e("elm-tabbar")],1)},staticRenderFns:[]};var R=s("VU/8")($,S,!1,function(t){s("3I7P")},"data-v-12d0a2f6",null).exports;n.default.use(i.a);var z=new i.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:C},{path:"/order",component:y},{path:"/discover",component:U},{path:"/profile",component:R}]});n.default.config.productionTip=!1,new n.default({el:"#app",router:z,components:{App:r},template:"<App/>"})},SP8N:function(t,e){},iLtD:function(t,e){},sU1K:function(t,e){},yBqj:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b1a5c6053248416c438a.js.map