layui.define(function(){var a=[],e=layui.cache.builtin;return layui.each(e,function(e){"all"===e||"layui.all"===e||a.push(e)}),layui.cache.startTime=(new Date).getTime(),a}(),function(e){"use strict";e("all",{config:{},time:(e=(new Date).getTime()-layui.cache.startTime,delete layui.cache.startTime,e)})});