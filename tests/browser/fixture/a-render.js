/*compiled by xtemplate#@VERSION@*/
var tpl = require("./a");
var XTemplateRuntime = require("../../../lib/xtemplate/runtime");
var instance = new XTemplateRuntime(tpl);
module.exports = function(){
return instance.render.apply(instance,arguments);
};