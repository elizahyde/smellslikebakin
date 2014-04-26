/*!CK:2974115716!*//*1392692497,178127439*/

if (self.CavalryLogger) { CavalryLogger.start_js(["twKz1"]); }

__d("BlueBarMinWidth",["Arbiter","DOM","DOMDimensions","Event","Locale","Style","Vector","$","csx","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){f.init=function(){var q=n('pageHead'),r=h.find(q,"._59g8"),s,t=p.bind(null,function(){var u=i.getElementDimensions(q).width,v;if(k.isRTL()){v=-m.getElementPosition(q).x;}else v=m.getElementPosition(q).x+u-i.getViewportDimensions().width;if(v>0){var w=i.measureElementBox(q,'width',true);s=u-v-w+'px';}else s='';},function(){l.set(r,'width',s);},'BlueBarMinWidth');j.listen(window,'resize',t);g.subscribe(['LitestandSidebar/expand','LitestandSidebar/collapse'],t);t();};});
__d("FBPaymentsBoostsStats",["Event"],function(a,b,c,d,e,f,g){var h={listen:function(i,j){g.listen(i,'click',j.show.bind(j));}};e.exports=h;});