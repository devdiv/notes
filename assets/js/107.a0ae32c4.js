(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{273:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("1、目录操作常见有以下几种方法：")]),t._v(" "),t._m(1),t._v(" "),t._m(2),n("p",[t._v("2、创建临时文件 & 目录")]),t._v(" "),n("p",[t._v("临时文件是那些在程序执行过程中被简单地创建，但不会永久性存储的信息。")]),t._v(" "),n("p",[t._v("Dir.tmpdir 提供了当前系统上临时目录的路径，但是该方法默认情况下是不可用的。为了让 Dir.tmpdir 可用，使用必需的 'tmpdir' 是必要的。")]),t._v(" "),n("p",[t._v("您可以把 Dir.tmpdir 和 File.join 一起使用，来创建一个独立于平台的临时文件：")]),t._v(" "),t._m(3),n("p",[t._v("这段代码创建了一个临时文件，并向其中写入数据，然后删除文件。Ruby 的标准库也包含了一个名为 Tempfile 的库，该库可用于创建临时文件：")]),t._v(" "),t._m(4),n("ul",[n("li",[n("router-link",{attrs:{to:"./Dir类和方法.html"}},[t._v("更多目录操作请参考")]),t._v("，Dir 类和方法")],1)])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ruby-目录操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ruby-目录操作"}},[this._v("#")]),this._v(" Ruby 目录操作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("创建目录")]),this._v(" "),s("li",[this._v("删除目录")]),this._v(" "),s("li",[this._v("浏览目录")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ruby extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# **********创建目录**********")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 掩码 755 设置所有者（owner）、所属组（group）、每个人（world [anyone]）的权限为 rwxrxrx，其中 r = read 读取，w = write 写入，x = execute 执行。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mkdir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mynewdir"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mkdir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mynewdir"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("755")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# **********删除目录**********")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Dir.delete 可用于删除目录。Dir.unlink 和 Dir.rmdir 执行同样的功能")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delete"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testdir"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# **********浏览目录**********")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改变当前目录为 /usr/bin")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chdir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/bin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前目录")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pwd\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取指定目录内的文件和目录列表")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entries"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/bin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Dir.entries 返回一个数组，包含指定目录内的所有项。Dir.foreach 提供了相同的功能")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foreach"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/bin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("entry"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n   puts entry\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ruby extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tmpdir'")]),t._v("\ntempfilename "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tmpdir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tingtong"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntempfile "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tempfilename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntempfile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("puts "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a temporary file"')]),t._v("\ntempfile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("File")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delete"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tempfilename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-ruby extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tempfile'")]),t._v("\nf "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Tempfile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tingtong'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("puts "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),t._v("\nputs f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path\nf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close\n")])])])}],!1,null,null,null);s.default=e.exports}}]);