webpackJsonp([1],{76:function(e,o,t){var n,d,i;!function(t,a){d=[o],n=a,i="function"==typeof n?n.apply(o,d):n,!(void 0!==i&&(e.exports=i))}(this,function(o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{defaultStyle:{width:"1000px",height:"600px"},snap:{}}},computed:{},methods:{},ready:function(){console.log("minder loader is finished");var e=this;this.$nextTick(function(){var o=this.$refs.minder.minder;this.snap;o.on("editText",function(e,o){var t=e.minder.getSelectedNode();console.log(e,t)}),o.on("selectionchange",function(o){e.minder=o.minder;var t=o.minder.getSelectedNode();e.currentNode=t,e.lock&&t,e.lock=!0}),o.on("beforeExecCommand",function(o){var t=o.minder.getSelectedNode();console.log(t),/append/i.test(o.commandName)?(console.log("add",t),e.snap[t.data.id]=t):/remove/i.test(o.commandName)&&(console.log("remove",t),delete e.snap[t.data.id])}),o.on("beforeExecCommand",function(o){var t=o.minder.getSelectedNode();console.log(t),/append/i.test(o.commandName)?(console.log("add",t),e.snap[t.data.id]=t):/remove/i.test(o.commandName)&&(console.log("remove",t),delete e.snap[t.data.id])})})}},e.exports=o.default})},168:function(e,o){},178:function(e,o){e.exports=" <minder v-ref:minder :style=defaultStyle></minder> "},182:function(e,o,t){var n,d,i={};t(168),n=t(76),d=t(178),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;d&&(a.template=d),a.computed||(a.computed={}),Object.keys(i).forEach(function(e){var o=i[e];a.computed[e]=function(){return o}})}});