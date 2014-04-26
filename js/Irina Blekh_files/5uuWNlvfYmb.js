/*!CK:3776108400!*//*1392702353,178184021*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ii9D0"]); }

__d("AppRequestRemindersMenu",["DOMQuery","CSS","Form"],function(a,b,c,d,e,f,g,h,i){var j={init:function(k,l,m){var n=m.getTriggerElem();m=m.getPopover();m.subscribe(['show','hide'],function(o){var p=g.find(n,'^.fbRemindersRemove');h.conditionClass(p,'openMenu',o=='show');});l.subscribe('itemclick',function(o,p){var q=p.item.getValue();if(q){var r={};r[q]=true;i.createHiddenInputs(r,k);i.bootstrap(k);}});}};e.exports=j;});
__d("ReminderStoryUtils",["CSS","Event"],function(a,b,c,d,e,f,g,h){var i={hideOnClick:function(j,k){h.listen(k,'click',function(){g.hide(j);});}};e.exports=i;});