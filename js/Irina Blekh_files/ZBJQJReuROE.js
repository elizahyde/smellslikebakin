/*!CK:4088044806!*//*1392692520,178191169*/

if (self.CavalryLogger) { CavalryLogger.start_js(["BP+zC"]); }

__d("LitestandSidebarBookmarkLevels",[],function(a,b,c,d,e,f){var g={TOP_LEVEL:'top',ONE_CLICK:'1',TWO_CLICKS:'2'};e.exports=g;});
__d("LitestandSidebarDisplay",["CSS","DOMQuery","Event","LitestandSidebarConfig","csx"],function(a,b,c,d,e,f,g,h,i,j,k){var l={FIRST_ITEM_HEIGHT:48,ITEM_HEIGHT:40,display:function(m){var n=h.scry(m,"._4g5p"),o=h.scry(m,"._5bw6")[0],p=n.length,q=function(){var r=l.getItemsToShow(document.documentElement.clientHeight,p);for(var s=0;s<p;s++){g.conditionShow(n[s],s<r);if(n[s].previousSibling===o)g.conditionShow(o,s<r);}};this._resizeListener=i.listen(window,'resize',q);q();},done:function(){this._resizeListener.remove();},getItemsToShow:function(m,n){var o=m-l.FIRST_ITEM_HEIGHT-l.ITEM_HEIGHT,p=Math.floor(o/l.ITEM_HEIGHT);if(!j.blended_full_height)p=Math.min(p,j.max_blended_bm_items);return Math.min(p,n);}};e.exports=l;});