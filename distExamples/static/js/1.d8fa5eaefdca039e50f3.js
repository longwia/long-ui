webpackJsonp([1],{505:function(t,e,i){function l(t){i(580)}var v=i(1)(i(536),i(610),l,null,null);t.exports=v.exports},536:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tabActive:0}},methods:{back:function(){window.history.back()},tabBarClick:function(t){this.tabActive=t}}}},551:function(t,e,i){e=t.exports=i(474)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"tabbar.vue",sourceRoot:""}])},580:function(t,e,i){var l=i(551);"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);i(475)("0528b471",l,!0)},610:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui-page"},[i("header-bar",[i("icon-button",{attrs:{size:48,icon:"navigate_before"},nativeOn:{click:function(e){t.back(e)}},slot:"left"}),t._v(" "),i("span",[t._v("Tab Bar")])],1),t._v(" "),i("tab-bar",{attrs:{active:t.tabActive},on:{"tab-change":t.tabBarClick}},[i("tab-bar-item",[t._v("\n      tab1\n    ")]),t._v(" "),i("tab-bar-item",[t._v("\n      tab2\n    ")]),t._v(" "),i("tab-bar-item",[t._v("\n      tab3\n    ")])],1),t._v(" "),i("scroll-view",[i("list",[i("item-cell",[i("item-title",[t._v("当前选中")]),t._v(" "),i("item-title-after",[t._v("\n          tab"+t._s(t.tabActive+1)+"\n        ")])],1)],1),t._v(" "),0===t.tabActive?i("list",[i("item-cell",[i("item-title",[t._v("内容1")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("内容2")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("内容3")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("内容4")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("内容5")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("内容6")])],1)],1):t._e(),t._v(" "),1===t.tabActive?i("list",[i("item-cell",[i("item-title",[t._v("测试1")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("测试2")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("测试3")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("测试4")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("测试5")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("测试6")])],1)],1):t._e(),t._v(" "),2===t.tabActive?i("list",[i("item-cell",[i("item-title",[t._v("选项1")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("选项2")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("选项3")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("选项4")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("选项5")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("选项6")])],1)],1):t._e()],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.d8fa5eaefdca039e50f3.js.map