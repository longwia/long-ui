webpackJsonp([12],{493:function(t,e,i){function v(t){i(584)}var l=i(1)(i(524),i(614),v,null,null);t.exports=l.exports},524:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{back:function(){window.history.back()}}}},555:function(t,e,i){e=t.exports=i(474)(!0),e.push([t.i,".ks-grid div[class*=col-]{background:#fff;text-align:center;color:#000;border:1px solid #ddd;padding:5px;margin-bottom:15px}","",{version:3,sources:["/www/myWorkFolder/long-ui/srcExamples/pages/listView.vue"],names:[],mappings:"AACA,0BACI,gBAAiB,AACjB,kBAAmB,AACnB,WAAY,AACZ,sBAAuB,AACvB,YAAa,AACb,kBAAoB,CACvB",file:"listView.vue",sourcesContent:['\n.ks-grid div[class*="col-"] {\n    background: #fff;\n    text-align: center;\n    color: #000;\n    border: 1px solid #ddd;\n    padding: 5px;\n    margin-bottom: 15px;\n}\n'],sourceRoot:""}])},584:function(t,e,i){var v=i(555);"string"==typeof v&&(v=[[t.i,v,""]]),v.locals&&(t.exports=v.locals);i(475)("3f951324",v,!0)},614:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui-page"},[i("header-bar",[i("icon-button",{attrs:{size:48,icon:"navigate_before"},nativeOn:{click:function(e){t.back(e)}},slot:"left"}),t._v(" "),i("span",[t._v("List View")])],1),t._v(" "),i("scroll-view",[i("content-block",[i("p",[t._v("\n        long-ui 是基于 flexbox 的布局，可以组织完成各种灵活的列表项，而且可以跟icon， image 等元素完美结合。\n      ")])]),t._v(" "),i("content-title",[t._v("\n      默认的\n    ")]),t._v(" "),i("list",[i("item-cell",[i("item-media",[i("i",{staticClass:"logo"},[t._v("L")])]),t._v(" "),i("item-title",[t._v("普通的")])],1),t._v(" "),i("item-cell",[i("item-media",[i("i",{staticClass:"logo"},[t._v("L")])]),t._v(" "),i("item-title",[t._v("后面有数字的")]),t._v(" "),i("item-title-after",[t._v("23")])],1),t._v(" "),i("item-cell",[i("item-media",[i("i",{staticClass:"logo"},[t._v("L")])]),t._v(" "),i("item-title",[t._v("后面有徽章的")]),t._v(" "),i("item-title-after",[i("badge",{attrs:{value:"23"}})],1)],1)],1),t._v(" "),i("content-title",[t._v("\n      带点击标记的\n    ")]),t._v(" "),i("list",[i("item-cell",{attrs:{link:""}},[i("item-media",[i("i",{staticClass:"logo"},[t._v("L")])]),t._v(" "),i("item-title",[t._v("普通的")])],1),t._v(" "),i("item-cell",{attrs:{link:""}},[i("item-media",[i("i",{staticClass:"logo"},[t._v("L")])]),t._v(" "),i("item-title",[t._v("后面有数字的")]),t._v(" "),i("item-title-after",[t._v("23")])],1),t._v(" "),i("item-cell",{attrs:{link:""}},[i("item-media",[i("i",{staticClass:"logo"},[t._v("L")])]),t._v(" "),i("item-title",[t._v("后面有徽章的")]),t._v(" "),i("item-title-after",[i("badge",{attrs:{value:"23"}})],1)],1)],1),t._v(" "),i("content-title",[t._v("\n      分隔的\n    ")]),t._v(" "),i("list",[i("item-divider",[t._v("英雄联盟")]),t._v(" "),i("item-cell",[i("item-title",[t._v("德玛西亚之力")])],1),t._v(" "),i("item-cell",[i("item-title",[t._v("诺克萨斯之手")])],1),t._v(" "),i("item-divider",[t._v("守望先锋")]),t._v(" "),i("item-cell",{attrs:{link:""}},[i("item-title",[t._v("麦克雷")]),t._v(" "),i("item-title-after",[t._v("23")])],1),t._v(" "),i("item-divider",[t._v("其它的")]),t._v(" "),i("item-cell",{attrs:{link:""}},[i("item-media",[i("i",{staticClass:"logo"},[t._v("L")])]),t._v(" "),i("item-title",[t._v("穿越火线")]),t._v(" "),i("item-title-after",[i("badge",{attrs:{value:"23"}})],1)],1)],1),t._v(" "),i("content-title",[t._v("更多的信息")]),t._v(" "),i("list",[i("item",[i("item-content",[i("item-title-row",[i("item-title",[t._v("德玛西亚")]),t._v(" "),i("item-title-after",[t._v("2014-12-23")])],1),t._v(" "),i("item-sub-title",[t._v("\n            网通二区\n          ")]),t._v(" "),i("item-text",[t._v("\n            德玛西亚，原为著名竞技游戏英雄联盟中的一个势力，也是中国区一个服务器（网通二区）的名称。\n          ")])],1)],1),t._v(" "),i("item",[i("item-content",[i("item-title-row",[i("item-title",[t._v("德玛西亚")]),t._v(" "),i("item-title-after",[t._v("2014-12-23")])],1),t._v(" "),i("item-sub-title",[t._v("\n            网通二区\n          ")]),t._v(" "),i("item-text",[t._v("\n            诺克萨斯是著名竞技游戏《英雄联盟》中的势力名称，是坐落在瓦罗兰大陆远东中心的人类城邦，同时也是中国区服务器名称之一（别称：电信三区）\n          ")])],1)],1),t._v(" "),i("item",[i("item-content",[i("item-title-row",[i("item-title",[t._v("艾欧尼亚")]),t._v(" "),i("item-title-after",[t._v("2014-12-23")])],1),t._v(" "),i("item-sub-title",[t._v("\n            电信一区\n          ")]),t._v(" "),i("item-text",[t._v("\n            《艾欧尼亚》是由Riot Games开发并由腾讯游戏代理的网络游戏《英雄联盟》中的势力名称，同时也是中国区服务器名称之一（别称：电信一区）；位于海岛上的城邦艾欧尼亚是寻求心灵进化的天堂。艾欧尼亚人天性和平。\n          ")])],1)],1)],1),t._v(" "),i("content-title",[t._v("加上图片")]),t._v(" "),i("list",[i("item",[i("item-media",[i("img",{attrs:{src:"http://img2.imgtn.bdimg.com/it/u=584136133,2034101953&fm=21&gp=0.jpg"}})]),t._v(" "),i("item-content",[i("item-title-row",[i("item-title",[t._v("德玛西亚")]),t._v(" "),i("item-title-after",[t._v("2014-12-23")])],1),t._v(" "),i("item-sub-title",[t._v("\n            网通二区\n          ")]),t._v(" "),i("item-text",[t._v("\n            德玛西亚，原为著名竞技游戏英雄联盟中的一个势力，也是中国区一个服务器（网通二区）的名称。\n          ")])],1)],1),t._v(" "),i("item",[i("item-media",[i("img",{attrs:{src:"http://img3.imgtn.bdimg.com/it/u=1536560744,307047229&fm=21&gp=0.jpg"}})]),t._v(" "),i("item-content",[i("item-title-row",[i("item-title",[t._v("德玛西亚")]),t._v(" "),i("item-title-after",[t._v("2014-12-23")])],1),t._v(" "),i("item-sub-title",[t._v("\n            网通二区\n          ")]),t._v(" "),i("item-text",[t._v("\n            诺克萨斯是著名竞技游戏《英雄联盟》中的势力名称，是坐落在瓦罗兰大陆远东中心的人类城邦，同时也是中国区服务器名称之一（别称：电信三区）\n          ")])],1)],1),t._v(" "),i("item",[i("item-media",[i("img",{attrs:{src:"http://i1.17173cdn.com/9ih5jd/YWxqaGBf/forum/images/2013/10/16/174233sqpqp7zt7o71qu73.png"}})]),t._v(" "),i("item-content",[i("item-title-row",[i("item-title",[t._v("艾欧尼亚")]),t._v(" "),i("item-title-after",[t._v("2014-12-23")])],1),t._v(" "),i("item-sub-title",[t._v("\n            电信一区\n          ")]),t._v(" "),i("item-text",[t._v("\n            《艾欧尼亚》是由Riot Games开发并由腾讯游戏代理的网络游戏《英雄联盟》中的势力名称，同时也是中国区服务器名称之一（别称：电信一区）；位于海岛上的城邦艾欧尼亚是寻求心灵进化的天堂。艾欧尼亚人天性和平。\n          ")])],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=12.55c19a0962440005134e.js.map