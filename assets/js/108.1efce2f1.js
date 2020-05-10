(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{274:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"ruby-类和对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ruby-类和对象"}},[s._v("#")]),s._v(" Ruby 类和对象")]),s._v(" "),t("p",[s._v("对象是类的实例。Ruby 是一种完美的面向对象编程语言。面向对象编程语言的特性包括：")]),s._v(" "),t("ul",[t("li",[s._v("数据封装")]),s._v(" "),t("li",[s._v("数据抽象")]),s._v(" "),t("li",[s._v("多态性")]),s._v(" "),t("li",[s._v("继承")])]),s._v(" "),t("p",[s._v("在 Ruby 中，类总是以关键字 "),t("code",[s._v("class")]),s._v(" 开始，后跟类的名称。类名的首字母应该大写。类 User 如下所示：")]),s._v(" "),t("div",{staticClass:"language-ruby extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])])]),t("p",[s._v("在 Ruby 中，您可以使用类的方法 "),t("code",[s._v("new")]),s._v(" 创建对象。该方法属于类方法，在 Ruby 库中预定义。您可以给方法 "),t("code",[s._v("new")]),s._v(" 传递参数，这些参数可用于初始化类变量。当您想要声明带参数的 "),t("code",[s._v("new")]),s._v(" 方法时，您需要在创建类的同时声明方法 "),t("code",[s._v("initialize")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("initialize")]),s._v(" 方法是一种特殊类型的方法，将在调用带参数的类的 new 方法时执行。")]),s._v(" "),t("p",[s._v("下面的实例创建了 "),t("code",[s._v("initialize")]),s._v(" 方法：")]),s._v(" "),t("div",{staticClass:"language-ruby extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@@no_of_users")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token method-definition"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("initialize")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" addr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@user_id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("id\n      "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@user_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("name\n      "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@user_addr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("addr\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])])]),t("p",[s._v("在本实例中，您可以声明带有 id、name、addr 作为局部变量的 "),t("code",[s._v("initialize")]),s._v("方法。在这里，"),t("code",[s._v("def")]),s._v("和 "),t("code",[s._v("end")]),s._v(" 用于定义 Ruby 方法 "),t("code",[s._v("initialize")]),s._v("。")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("initialize")]),s._v(" 方法中，把这些局部变量的值传给实例变量 @cust_id、@cust_name 和 @cust_addr。在这里，局部变量的值是随着 new 方法进行传递的。")]),s._v(" "),t("p",[s._v("现在，您可以创建对象，如下所示：")]),s._v(" "),t("div",{staticClass:"language-ruby extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[s._v("user1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"张三"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"陕西西安"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nuser2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"李四"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"浙江杭州"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}],!1,null,null,null);a.default=n.exports}}]);