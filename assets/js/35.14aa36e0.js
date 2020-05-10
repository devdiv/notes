(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{201:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"c-命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-命名空间"}},[s._v("#")]),s._v(" C# 命名空间")]),s._v(" "),t("p",[s._v("命名空间的设计目的是提供一种让一组名称与其他名称分隔开的方式。在一个命名空间中声明的类的名称与另一个命名空间中声明的相同的类的名称不冲突。类似与 Ruby 中 Module。")]),s._v(" "),t("p",[s._v("1、定义命名空间")]),s._v(" "),t("p",[s._v("命名空间的定义是以关键字 namespace 开始，后跟命名空间的名称，如下所示：")]),s._v(" "),t("div",{staticClass:"language-cs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("namespace_name")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码声明")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("2、using 关键字")]),s._v(" "),t("ol",[t("li",[s._v("using 指令：引入命名空间")])]),s._v(" "),t("div",{staticClass:"language-cs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("Namespace1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SubNameSpace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("using static 指令：指定访问静态成员的类型")])]),s._v(" "),t("div",{staticClass:"language-cs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Math")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 直接使用System.Math.PI")]),s._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("起别名")])]),s._v(" "),t("div",{staticClass:"language-cs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProMng")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AutoTest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Tools"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ProjectManager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("using 语句：将实例与代码绑定，自动调用 Dispose 方法，释放实例")])]),s._v(" "),t("div",{staticClass:"language-cs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Font")]),s._v(" font3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("Font")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Arial"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            font4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("Font")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Arial"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Use font3 and font4.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n代码段结束时，自动调用font3和font4的Dispose方法，释放实例。\n")])])]),t("p",[s._v("3、嵌套命名空间")]),s._v(" "),t("p",[s._v("命名空间可以被嵌套，即您可以在一个命名空间内定义另一个命名空间，如下所示：")]),s._v(" "),t("div",{staticClass:"language-cs extra-class"},[t("pre",{pre:!0,attrs:{class:"language-cs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("namespace_name1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码声明")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("namespace_name2")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码声明")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("您可以使用点（.）运算符访问嵌套的命名空间的成员，如下所示：")])])}],!1,null,null,null);a.default=e.exports}}]);