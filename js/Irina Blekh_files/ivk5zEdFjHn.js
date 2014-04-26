/*!CK:2218020412!*//*1392692595,178179357*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8tli1"]); }

__d("runAfterCSSTransition",["BrowserSupport","DataStore","DOM","Event","Run"],function(a,b,c,d,e,f,g,h,i,j,k){var l;if(g.hasCSSTransitions()){l=function(m,n){var o=h.get(m,'runAfterCSSTransition');if(o)return o;var p,q=j.listen(m,g.getTransitionEndEvent(),function(event){if(event.getTarget()!==m)return;p&&p();p=null;});if(!n)k.onLeave(function(){q.remove();q=null;p=null;h.remove(m,'runAfterCSSTransition');});var r=i.getID(m);o=function(s){if(!q)return;p=s;};h.set(m,'runAfterCSSTransition',o);return o;};}else l=function(){return function(m){m();};};e.exports=l;});