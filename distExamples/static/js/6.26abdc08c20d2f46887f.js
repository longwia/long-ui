webpackJsonp([6],{"8Wlt":function(t,e){},BKiM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={methods:{back:function(){window.history.back()},handleChange:function(t){console.log(t)}},data:function(){return{data1:!1,data2:!0,data3:!1,data4:!0}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui-page"},[a("header-bar",[a("icon-button",{attrs:{slot:"left",size:36,icon:"navigate_before"},nativeOn:{click:function(e){return t.back(e)}},slot:"left"}),t._v(" "),a("span",[t._v("Switch")])],1),t._v(" "),a("scroll-view",[a("content-title",[t._v("\n      默认\n    ")]),t._v(" "),a("content-block",[a("ui-switch",{attrs:{label:t.data1?"true":"false",value:t.data1},on:{"update:value":function(e){t.data1=e},change:t.handleChange}}),t._v(" "),a("ui-switch",{attrs:{label:t.data2?"true":"false",value:t.data2},on:{"update:value":function(e){t.data2=e},change:t.handleChange}})],1),t._v(" "),a("content-title",[t._v("\n      label 在左边的\n    ")]),t._v(" "),a("content-block",[a("ui-switch",{attrs:{"label-left":"",label:"左边的label 1",value:!0},on:{change:t.handleChange}}),t._v(" "),a("ui-switch",{attrs:{"label-left":"",label:"左边的label 2",value:!1},on:{change:t.handleChange}})],1),t._v(" "),a("content-title",[t._v("\n      搭配 list 使用\n    ")]),t._v(" "),a("list",[a("item-cell",[a("item-title",[t._v("\n            选项1    "+t._s(t.data3?"true":"false")+"\n          ")]),t._v(" "),a("item-title-after",[a("ui-switch",{attrs:{value:t.data3},on:{"update:value":function(e){t.data3=e},change:t.handleChange}})],1)],1),t._v(" "),a("item-cell",[a("item-title",[t._v("\n            选项2    "+t._s(t.data4?"true":"false")+"\n          ")]),t._v(" "),a("item-title-after",[a("ui-switch",{attrs:{value:t.data4},on:{"update:value":function(e){t.data4=e},change:t.handleChange}})],1)],1)],1),t._v(" "),a("content-title",[t._v("\n      搭配其它表单\n    ")]),t._v(" "),a("form-list",[a("text-field",{attrs:{label:"用户名",placeholder:"请输入你的姓名",icon:"user"}}),t._v(" "),a("item-form",{attrs:{icon:"question",label:"是否是学生"}},[a("ui-switch",{attrs:{value:!0},on:{change:t.handleChange}})],1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(n,l,!1,function(t){a("8Wlt")},null,null);e.default=i.exports}});
//# sourceMappingURL=6.26abdc08c20d2f46887f.js.map