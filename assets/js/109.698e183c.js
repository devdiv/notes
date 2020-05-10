(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{275:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"ruby-编码类型转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ruby-编码类型转换"}},[t._v("#")]),t._v(" Ruby 编码类型转换")]),t._v(" "),n("p",[t._v("Ruby1.9 之后，我们可以直接通过使用 String 类的实例方法 encoding, force_encoding, encode, encode!进行相关的编码操作。")]),t._v(" "),n("p",[t._v("本文重点参考了 Ruby 安装目录：/share/doc/ruby/html/String.html 中对字符编码转换方法的相关说明。")]),t._v(" "),n("p",[t._v("我们可以通过以下方法，对字符类型进行编码转换：")]),t._v(" "),n("p",[t._v("1、使用 "),n("code",[t._v("encode")]),t._v(" 方法，返回字符串")]),t._v(" "),n("div",{staticClass:"language-rb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rb"}},[n("code",[t._v("encode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encoding "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" → str\nencode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dst_encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" src_encoding "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" → str\nencode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" → str\n")])])]),n("p",[t._v("第一个表单返回一个已转码的 str 的副本进行编码。第二个表单返回从 src_encoding 转码到 dst_encoding 的 str 的副本。最后一个表单返回一个已转码的 str 的副本，转码类型为："),n("code",[t._v("Encoding.default_internal")]),t._v(".。")]),t._v(" "),n("p",[t._v("默认情况下，第一种和第二种形式为目标编码中未定义的字符引发"),n("code",[t._v("Encoding::UndefinedConversionError")]),t._v("，以及源编码中无效的字节序列引发"),n("code",[t._v("Encoding::InvalidByteSequenceError")]),t._v("。默认情况下，最后一种不会引发异常，而是使用替换字符串。")]),t._v(" "),n("p",[n("code",[t._v("options")]),t._v(" Hash 值给出了可以通过 "),n("code",[t._v("keys")]),t._v(" 描述更多的转换细节：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("keys")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v(":invald")]),t._v(" "),n("td",[t._v("如果值是:replace, encode 将用替换字符替换 str 中无效的字节序列。默认情况下是引发"),n("code",[t._v("Encoding::InvalidByteSequenceError")]),t._v("异常。")])]),t._v(" "),n("tr",[n("td",[t._v(":undef")]),t._v(" "),n("td",[t._v("如果值是:replace, encode 将用替换字符替换目标编码中未定义的字符。默认情况下是引发编码"),n("code",[t._v("Encoding::UndefinedConversionError")]),t._v("。")])]),t._v(" "),n("tr",[n("td",[t._v(":replace")]),t._v(" "),n("td",[t._v("将替换字符串设置为给定值。默认的替换字符串是 Unicode 编码格式的“uFFFD”，以及“?”。")])]),t._v(" "),n("tr",[n("td",[t._v(":fallback")]),t._v(" "),n("td",[t._v("根据给定对象为未定义字符设置替换字符串。对象应该是一个 Hash、一个 Proc、一个方法或一个具有[]方法的对象。它的键是在当前转码器的源编码中编码的未定义字符。它的值可以是任何编码，直到可以转换为转码器的目标编码为止。")])]),t._v(" "),n("tr",[n("td",[t._v(":xml")]),t._v(" "),n("td",[t._v("值必须是 "),n("code",[t._v(":text")]),t._v(" 或者 "),n("code",[t._v(":attr")]),t._v("。 如果值为 "),n("code",[t._v(":text")]),t._v(" "),n("code",[t._v("encode")]),t._v(" 用(大写十六进制)数字字符引用替换未定义的字符。"),n("code",[t._v("'&'")]),t._v(", "),n("code",[t._v("'<'")]),t._v(", 和 "),n("code",[t._v("'>'")]),t._v(" 将被分别替换为 "),n("code",[t._v("“&amp;”")]),t._v(", "),n("code",[t._v("“&lt;”")]),t._v(", 和 "),n("code",[t._v("“&gt;”")]),t._v("。 如果值为 "),n("code",[t._v(":attr")]),t._v(", encode 也将引用替换结果 (using '“'), 并将 '”' 替换为 “\"”.")])]),t._v(" "),n("tr",[n("td",[t._v(":cr_newline")]),t._v(" "),n("td",[t._v('如果值为真，则将 LF (" n ")替换为 CR (" r ")。')])]),t._v(" "),n("tr",[n("td",[t._v(":crlf_newline")]),t._v(" "),n("td",[t._v('如果值为真，则用 CRLF (" rn ")替换 LF (" n ")。')])]),t._v(" "),n("tr",[n("td",[t._v(":universal_newline")]),t._v(" "),n("td",[t._v('如果值为真，将 CRLF (" rn ")和 CR (" r ")替换为 LF (" n ")。')])])])]),t._v(" "),n("p",[t._v("2、使用 "),n("code",[t._v("encode!")]),t._v(" 方法，返回字符串")]),t._v(" "),n("div",{staticClass:"language-rb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rb"}},[n("code",[t._v("encode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encoding "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" → str\nencode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dst_encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" src_encoding "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" → str\n")])])]),n("p",[t._v("第一种格式将 str 的内容从 str.encoding 转换为 encoding。第二种格式将 str 的内容从 src_encoding 转换为 dst_encoding。options 哈希给出了转换的详细信息。有关详细信息，请参见字符串#encode。即使没有进行任何更改，也返回该字符串。")]),t._v(" "),n("p",[t._v("方法定义：")]),t._v(" "),n("div",{staticClass:"language-rb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rb"}},[n("code",[t._v("static "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VALUE")]),t._v("\nstr_encode_bang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("int argc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VALUE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VALUE")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VALUE")]),t._v(" newstr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    int encidx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    rb_check_frozen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    newstr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    encidx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str_transcode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("newstr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encidx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newstr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rb_enc_associate_index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encidx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    rb_str_shared_replace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newstr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str_encode_associate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encidx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("3、使用 "),n("code",[t._v("encoding")]),t._v(" 方法，返回 encoding")]),t._v(" "),n("div",{staticClass:"language-rb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rb"}},[n("code",[t._v("encoding → encoding    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回表示obj编码的编码对象。")]),t._v("\n")])])]),n("p",[t._v("方法定义：")]),t._v(" "),n("div",{staticClass:"language-rb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rb"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VALUE")]),t._v("\nrb_obj_encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VALUE")]),t._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    int idx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rb_enc_get_index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\trb_raise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rb_eTypeError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unknown encoding"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" rb_enc_from_encoding_index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENC_INDEX_MASK")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("4、使用 "),n("code",[t._v("force_encoding")]),t._v(" 方法，返回字符串")]),t._v(" "),n("div",{staticClass:"language-rb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rb"}},[n("code",[t._v("force_encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" → str   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将编码更改为encoding并返回self。")]),t._v("\n")])])]),n("p",[t._v("方法定义：")]),t._v(" "),n("div",{staticClass:"language-rb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rb"}},[n("code",[t._v("static "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VALUE")]),t._v("\nrb_str_force_encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VALUE")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VALUE")]),t._v(" enc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    str_modifiable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    rb_enc_associate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rb_to_encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENC_CODERANGE_CLEAR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("5、使用 "),n("code",[t._v("valid_encoding")]),t._v(" ,验证字符串编码是否正确")]),t._v(" "),n("div",{staticClass:"language-rb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rb"}},[n("code",[t._v("valid_encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" → "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对于正确编码的字符串返回true。")]),t._v("\n")])])]),n("p",[t._v("方法定义：")]),t._v(" "),n("div",{staticClass:"language-rb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rb"}},[n("code",[t._v("static "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VALUE")]),t._v("\nrb_str_valid_encoding_p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VALUE")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    int cr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rb_enc_str_coderange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENC_CODERANGE_BROKEN")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Qfalse")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Qtrue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("实例：")]),t._v(" "),n("div",{staticClass:"language-rb extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rb"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\xc2\\xa1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("force_encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("valid_encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\xc2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("force_encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("valid_encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> false")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\x80"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("force_encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("valid_encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> false")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);