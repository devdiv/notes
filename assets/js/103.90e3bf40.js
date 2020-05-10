(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{269:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"ruby-日期-时间（date-time）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ruby-日期-时间（date-time）"}},[t._v("#")]),t._v(" Ruby 日期 & 时间（Date & Time）")]),t._v(" "),a("p",[t._v("Time 类在 Ruby 中用于表示日期和时间。它是基于操作系统提供的系统日期和时间之上。该类可能无法表示 1970 年之前或者 2038 年之后的日期。")]),t._v(" "),a("p",[t._v("1、创建当前的日期和时间")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/ruby -w")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -*- coding: UTF-8 -*-")]),t._v("\n\ntime1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("\n\nputs "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"当前时间 : "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" time1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inspect\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Time.now 功能相同")]),t._v("\ntime2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now\nputs "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"当前时间 : "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" time2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inspect\n")])])]),a("p",[t._v("2、获取 Date & Time 组件")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/ruby -w")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -*- coding: UTF-8 -*-")]),t._v("\n\ntime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Time 的组件")]),t._v("\nputs "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"当前时间 : "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inspect\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("year    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 日期的年份")]),t._v("\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("month   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 日期的月份（1 到 12）")]),t._v("\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("day     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 一个月中的第几天（1 到 31）")]),t._v("\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wday    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 一周中的星期几（0 是星期日）")]),t._v("\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("yday    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 365：一年中的第几天")]),t._v("\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hour    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 23：24 小时制")]),t._v("\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("min     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 59")]),t._v("\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sec     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 59")]),t._v("\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usec    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 999999：微秒")]),t._v("\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zone    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "UTC"：时区名称')]),t._v("\n")])])]),a("p",[t._v("3、时区和夏令时")]),t._v(" "),a("p",[a("code",[t._v("Time.utc、Time.gm 和 Time.local")]),t._v(" 这些函数可用于格式化标准格式的日期，如下所示：")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# July 8, 2020")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# July 8, 2020, 09:10am，本地时间")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# July 8, 2020, 09:10 UTC")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# July 8, 2020, 09:10:11 GMT （与 UTC 相同）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("下面的实例在数组中获取所有的组件,该数组可被传到 Time.utc 或 Time.local 函数来获取日期的不同格式，如下所示：")]),t._v(" "),a("p",[a("strong",[t._v("[sec,min,hour,day,month,year,wday,yday,isdst,zone]")])]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/ruby -w")]),t._v("\n\ntime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("\n\nvalues "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_a\np values "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# -> [39, 25, 15, 17, 9, 2020, 4, 260, false, "CST"]')]),t._v("\nputs "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -> 2020-09-17 15:26:09 UTC")]),t._v("\n")])])]),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里是解释")]),t._v("\ntime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zone       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "UTC"：返回时区')]),t._v("\ntime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utc_offset "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 0：UTC 是相对于 UTC 的 0 秒偏移")]),t._v("\ntime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zone       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# => "PST"（或其他时区）')]),t._v("\ntime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isdst      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => false：如果 UTC 没有 DST（夏令时）")]),t._v("\ntime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => true：如果在 UTC 时区")]),t._v("\ntime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localtime  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 转换为本地时区")]),t._v("\ntime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gmtime     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 转换回 UTC")]),t._v("\ntime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getlocal   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回本地区中的一个新的 Time 对象")]),t._v("\ntime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getutc     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回 UTC 中的一个新的 Time 对象")]),t._v("\n")])])]),a("p",[t._v("4、格式化时间和日期")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/ruby -w")]),t._v("\ntime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("\n\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_s "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -> 2020-09-17 15:26:42 +0800")]),t._v("\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctime "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -> Thu Sep 17 15:26:42 2020")]),t._v("\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localtime "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -> 2020-09-17 15:26:42 +0800")]),t._v("\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%Y-%m-%d %H:%M:%S"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -> 2020-09-17 15:26:42")]),t._v("\n\ntime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_i  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回从纪元以来的秒数")]),t._v("\nputs "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把秒数转换为 Time 对象")]),t._v("\nputs time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_f "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回从纪元以来的秒数，包含微妙")]),t._v("\n")])])]),a("p",[t._v("5、时间格式化指令")]),t._v(" "),a("p",[t._v("下表所列出的指令与方法 Time.strftime 一起使用。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("指令")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("%a")]),t._v(" "),a("td",[t._v("星期几名称的缩写（比如 Sun）。")])]),t._v(" "),a("tr",[a("td",[t._v("%A")]),t._v(" "),a("td",[t._v("星期几名称的全称（比如 Sunday）。")])]),t._v(" "),a("tr",[a("td",[t._v("%b")]),t._v(" "),a("td",[t._v("月份名称的缩写（比如 Jan）。")])]),t._v(" "),a("tr",[a("td",[t._v("%B")]),t._v(" "),a("td",[t._v("月份名称的全称（比如 January）。")])]),t._v(" "),a("tr",[a("td",[t._v("%c")]),t._v(" "),a("td",[t._v("优选的本地日期和时间表示法。")])]),t._v(" "),a("tr",[a("td",[t._v("%d")]),t._v(" "),a("td",[t._v("一个月中的第几天（01 到 31）。")])]),t._v(" "),a("tr",[a("td",[t._v("%H")]),t._v(" "),a("td",[t._v("一天中的第几小时，24 小时制（00 到 23）。")])]),t._v(" "),a("tr",[a("td",[t._v("%I")]),t._v(" "),a("td",[t._v("一天中的第几小时，12 小时制（01 到 12）。")])]),t._v(" "),a("tr",[a("td",[t._v("%j")]),t._v(" "),a("td",[t._v("一年中的第几天（001 到 366）。")])]),t._v(" "),a("tr",[a("td",[t._v("%m")]),t._v(" "),a("td",[t._v("一年中的第几月（01 到 12）。")])]),t._v(" "),a("tr",[a("td",[t._v("%M")]),t._v(" "),a("td",[t._v("小时中的第几分钟（00 到 59）。")])]),t._v(" "),a("tr",[a("td",[t._v("%p")]),t._v(" "),a("td",[t._v("子午线指示（AM 或 PM）。")])]),t._v(" "),a("tr",[a("td",[t._v("%S")]),t._v(" "),a("td",[t._v("分钟中的第几秒（00 或 60）。")])]),t._v(" "),a("tr",[a("td",[t._v("%U")]),t._v(" "),a("td",[t._v("当前年中的周数，从第一个星期日（作为第一周的第一天）开始（00 到 53）。")])]),t._v(" "),a("tr",[a("td",[t._v("%W")]),t._v(" "),a("td",[t._v("当前年中的周数，从第一个星期一（作为第一周的第一天）开始（00 到 53）。")])]),t._v(" "),a("tr",[a("td",[t._v("%w")]),t._v(" "),a("td",[t._v("一星期中的第几天（Sunday 是 0，0 到 6）。")])]),t._v(" "),a("tr",[a("td",[t._v("%x")]),t._v(" "),a("td",[t._v("只有日期没有时间的优先表示法。")])]),t._v(" "),a("tr",[a("td",[t._v("%X")]),t._v(" "),a("td",[t._v("只有时间没有日期的优先表示法。")])]),t._v(" "),a("tr",[a("td",[t._v("%y")]),t._v(" "),a("td",[t._v("不带世纪的年份表示（00 到 99）。")])]),t._v(" "),a("tr",[a("td",[t._v("%Y")]),t._v(" "),a("td",[t._v("带有世纪的年份。")])]),t._v(" "),a("tr",[a("td",[t._v("%Z")]),t._v(" "),a("td",[t._v("时区名称。")])]),t._v(" "),a("tr",[a("td",[t._v("%%")]),t._v(" "),a("td",[t._v("% 字符。")])])])]),t._v(" "),a("p",[t._v("6、时间算法")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2020-09-17 15:27:08 +0800")]),t._v("\npast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2020-09-17 15:26:58 +0800")]),t._v("\nfuture "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2020-09-17 15:27:18 +0800")]),t._v("\ndiff "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" future "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" now "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 10.0")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);