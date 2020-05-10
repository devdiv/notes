(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{182:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"shell-变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-变量"}},[s._v("#")]),s._v(" Shell 变量")]),s._v(" "),t("p",[s._v("定义变量时，变量名不加美元符号（$，PHP 语言中变量需要），如：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("my_class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"School"')]),s._v("\n")])])]),t("p",[s._v("注意，变量名和等号之间不能有空格，这可能和你熟悉的所有编程语言都不一样。同时，变量名的命名须遵循如下规则：")]),s._v(" "),t("ul",[t("li",[s._v("命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。")]),s._v(" "),t("li",[s._v("中间不能有空格，可以使用下划线（_）。")]),s._v(" "),t("li",[s._v("不能使用标点符号。")]),s._v(" "),t("li",[s._v("不能使用 bash 里的关键字（可用 help 命令查看保留关键字）。")])]),s._v(" "),t("p",[s._v("有效的 Shell 变量名示例如下：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("SCHOOL\nLIBRARY_PATH\n_var\nvar1\n")])])]),t("p",[s._v("1、 使用变量")]),s._v(" "),t("p",[s._v("使用一个定义过的变量，只要在变量名前面加美元符号即可，如：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("my_class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"School"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$my_class")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${my_class}")]),s._v("\n")])])]),t("p",[s._v("变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界，比如下面这种情况：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("skill")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" Ada Coffe Action Java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I am good at '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${skill}")]),s._v('Script"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),t("p",[s._v("2、只读变量")]),s._v(" "),t("p",[s._v("使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。")]),s._v(" "),t("p",[s._v("下面的例子尝试更改只读变量，结果报错：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("my_class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"School"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v(" my_class\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("my_class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MySchool"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行脚本，结果如下：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /bin/sh: NAME: This variable is read only.")]),s._v("\n")])])]),t("p",[s._v("3、删除变量")]),s._v(" "),t("p",[s._v("使用 unset 命令可以删除变量。语法：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" variable_name\n")])])]),t("p",[s._v("变量被删除后不能再次使用。unset 命令不能删除只读变量。")]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("my_class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"School"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" my_class\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$my_class")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以上实例执行将没有任何输出。")]),s._v("\n")])])]),t("p",[s._v("4、变量类型")]),s._v(" "),t("p",[s._v("运行 shell 时，会同时存在三种变量：")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("局部变量")]),s._v(" 局部变量在脚本或命令中定义，仅在当前 shell 实例中有效，其他 shell 启动的程序不能访问局部变量。")]),s._v(" "),t("li",[t("strong",[s._v("环境变量")]),s._v(" 所有的程序，包括 shell 启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候 shell 脚本也可以定义环境变量。")]),s._v(" "),t("li",[t("strong",[s._v("shell 变量")]),s._v(" shell 变量是由 shell 程序设置的特殊变量。shell 变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了 shell 的正常运行")])])])}],!1,null,null,null);a.default=n.exports}}]);