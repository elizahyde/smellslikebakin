/*!CK:70789003!*//*1392692612,178163779*/

if (self.CavalryLogger) { CavalryLogger.start_js(["dYy\/1"]); }

__d("TimelineCollectionsCuration",["getContextualParent","CSS","Parent","$","cx"],function(a,b,c,d,e,f,g,h,i,j,k){var l={hideAppSection:function(m){var n=g(j(m),true),o=['getTimelineUnitFromChildElement','getMedleyAppSectionFromChildElement'];for(var p=0;p<o.length;p++){var q=l[o[p]](n);if(q)return h.hide(q);}},getTimelineUnitFromChildElement:function(m){return i.byClass(m,'fbTimelineUnit');},getMedleyAppSectionFromChildElement:function(m){return i.byClass(m,"_30f");}};e.exports=l;});
__d("OGCollectionAddToggle",["CSS","DOM","Event","TimelineCollectionsCuration","csx","cx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={},o="_4__4";function p(r,s,t){g.conditionShow(r,t);g.conditionClass(s,o,t);}var q={initTypeaheadToggleInReport:function(r,s,t){h.prependContent(h.find(j.getTimelineUnitFromChildElement(r),"._5amu"),s);if(n[t]===undefined){n[t]=g.hasClass(s,o);}else p(r,s,n[t]);m(i.listen(s,'click',function(u){p(r,s,n[t]=!n[t]);}));}};e.exports=q;});
__d("HubsTypeaheadView",["Arbiter","AsyncRequest","ContextualTypeaheadView","CSS","DOM","Event","$","copyProperties","tx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){for(var q in i)if(i.hasOwnProperty(q))s[q]=i[q];var r=i===null?null:i.prototype;s.prototype=Object.create(r);s.prototype.constructor=s;s.__superConstructor__=i;function s(t,u){"use strict";i.call(this,t,u);if(u.allowDedupe)this.subscribe('select',this.selectDuplicates.bind(this));}s.prototype.hide=function(){"use strict";return this.canHide?r.hide.call(this):null;};s.prototype.reset=function(){"use strict";return this.canHide?r.reset.call(this):null;};s.prototype._createFreeFormNode=function(t){"use strict";var u=t;if(this.showCreatePrompt){u=o._("Add \"{partial_name}\"",{partial_name:t});}else if(this.showAltCreatePrompt)u=p._("Create \"{partial_name}\"",[p.param("partial_name",t)]);return {text:u,orig_text:t,type:'addnew calltoaction',uid:'0'};};s.prototype.render=function(t,u,v){"use strict";var w=[],x=Math.max(1,Math.floor(u.length/10));for(var y=x;y<u.length;y++)if(!!u[y].already_added){w.push(u[y]);u.splice(y,1);y--;}u=u.concat(w);if(this.alwaysRender&&t!=='')if(this.allowFreeformEntry){u.push(this._createFreeFormNode(t));}else{var z=t.toLowerCase().trim(),aa=false;for(var ba=0;ba<u.length;ba++)if(z==u[ba].text.toLowerCase().trim()){aa=true;break;}if(!aa)u.push(this._createFreeFormNode(t));}var ca=u.length;for(var da=0;da<u.length;da++)if(u[da].uid==false)ca--;if(this.allowDedupe&&ca>1)u.push({text:"Mark Duplicate Results",type:'dupelink calltoaction'});return r.render.call(this,t,u,v);};s.prototype.selectDuplicates=function(t,u){"use strict";if(!u.selected.type.match('dupelink'))return;var v=[];for(var w=0;w<this.results.length;w++){if(this.results[w].uid==false)continue;v.push(this.results[w].uid);}var x=g.subscribe('typeahead/'+this.collectionID+'/confirmDupes',function(y,z){var aa=this.results.map(function(da){return da.uid;});for(var ba=0;ba<z.dupe_ids.length;ba++){var ca=aa.indexOf(z.dupe_ids[ba]);j.hide(this.items[ca]);}this.hasHiddenDupes=z.dupe_ids.length>0;}.bind(this));g.subscribe('typeahead/'+this.collectionID+'/finishDupes',function(y,z){g.unsubscribe(x);this.canHide=true;this.hasHiddenDupes&&j.hide(k.find(this.content,'.dupelink'));this.hasHiddenDupes=false;}.bind(this));this.canHide=false;new h('/ajax/typeahead/quality/duplicates').setData({ids:v,surface:m('collections_surface').value,collection_id:this.collectionID}).send();};s.initFreeformBoxes=function(){"use strict";var t=k.scry(document,'div.fbAddFormDialog')[0];if(!t)return;var u=k.find(t,'form');l.listen(u,'submit',function(){k.scry(u,'div.fbFreeformInput').forEach(function(v){if(k.find(v,'input.inputtext').value)j.addClass(v.firstChild,'selected');});});};n(s.prototype,{canHide:true,hasHiddenDupes:false});e.exports=s;});
__d("TimelineAboutUnitAddCityDialog",["AsyncRequest","Button","CSS","DOMQuery","Event"],function(a,b,c,d,e,f,g,h,i,j,k){function l(m,n,o,p,q,r){"use strict";this._dialog=n;var s=n.getRoot();this._icon=m;this._typeahead=o;this._radioCities=j.scry(s,'input[type="radio"]');this._textOther=j.find(s,'.textOther');this._buttonSave=j.scry(s,'button[name="save"]')[0];this._buttonClose=j.scry(s,'a.layerCancel')[0];this._form=j.scry(s,'form[name="city_form"]')[0];this._ref=q;this._uri=r;if(this._radioCities.length>0){this._radioCityOther=j.find(s,'.radioCityOther');this._typeahead.subscribe('select',this._enableSaveButtonTypeahead.bind(this));this._typeahead.subscribe('unselect',this._disableSaveButtonTypeahead.bind(this));for(var t=0;t<this._radioCities.length-1;t++)k.listen(this._radioCities[t],'click',this._enableSaveButton.bind(this));k.listen(this._radioCityOther,'click',this._saveButtonCityOther.bind(this));}else{this._typeahead.subscribe('select',this._enableSaveButton.bind(this));this._typeahead.subscribe('unselect',this._disableSaveButton.bind(this));}k.listen(m,'click',this._onIconClick.bind(this));if(this._radioCityOther){k.listen(this._textOther,'focus',this._selectRadioOther.bind(this));k.listen(this._radioCityOther,'click',this._focusTextOther.bind(this));}if(p)n.show();k.listen(this._buttonClose,'click',this._onClose.bind(this));k.listen(this._form,'submit',this._onSubmit.bind(this));}l.prototype._onSubmit=function(){"use strict";var m=false;if(this._radioCities.length===0){if(this._typeahead.getCore().getHiddenValue()!=='')m=true;}else{for(var n=0;n<this._radioCities.length-1;n++)if(this._radioCities[n].checked){m=true;break;}if(this._radioCityOther.checked)if(this._typeahead.getCore().getHiddenValue()!==''){m=true;}else m=false;}if(m){i.hide(this._icon);}else this._onClose();};l.prototype._onIconClick=function(m){"use strict";new g().setURI(this._uri).setData({log:'icon_clicked',ref:this._ref}).setMethod('POST').send();m.prevent();this._dialog.show();};l.prototype._onClose=function(){"use strict";new g().setURI(this._uri).setData({log:'close_clicked',ref:this._ref}).setMethod('POST').send();};l.prototype._focusTextOther=function(){"use strict";this._textOther.focus();};l.prototype._selectRadioOther=function(){"use strict";this._radioCityOther.checked=true;if(this._typeahead.getCore().getHiddenValue()!==''){h.setEnabled(this._buttonSave,true);}else h.setEnabled(this._buttonSave,false);};l.prototype._enableSaveButton=function(){"use strict";h.setEnabled(this._buttonSave,true);};l.prototype._disableSaveButton=function(){"use strict";h.setEnabled(this._buttonSave,false);};l.prototype._enableSaveButtonTypeahead=function(){"use strict";if(this._radioCityOther.checked)h.setEnabled(this._buttonSave,true);};l.prototype._disableSaveButtonTypeahead=function(){"use strict";if(this._radioCityOther.checked)h.setEnabled(this._buttonSave,false);};l.prototype._saveButtonCityOther=function(){"use strict";if(this._typeahead.getCore().getHiddenValue()!==''){h.setEnabled(this._buttonSave,true);}else h.setEnabled(this._buttonSave,false);};e.exports=l;});
__d("TypeaheadRequireSelection",["Event","copyProperties"],function(a,b,c,d,e,f,g,h){function i(j){"use strict";this._typeahead=j;}i.prototype.enable=function(){"use strict";var j=this._typeahead.getCore(),k=j.getElement().form;function l(){!j.getHiddenValue()&&j.reset();}l();this._subscription=j.subscribe('blur',l);if(k)this._eventListener=g.listen(k,'submit',l);};i.prototype.disable=function(){"use strict";this._typeahead.getCore().unsubscribe(this._subscription);this._subscription=null;if(this._eventListener){this._eventListener.remove();this._eventListener=null;}};h(i.prototype,{_subscription:null,_eventListener:null});e.exports=i;});
__d("legacy:RequireSelectionTypeaheadBehavior",["TypeaheadRequireSelection"],function(a,b,c,d,e,f,g){if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.requireSelection=function(h){h.enableBehavior(g);};},3);
__d("TypeaheadSetPhotoOnSelect",["CSS","DOM","Event","copyProperties"],function(a,b,c,d,e,f,g,h,i,j){function k(l){"use strict";this._typeahead=l;}k.prototype.enable=function(){"use strict";var l=h.scry(this._typeahead.getElement(),'.photo')[0];if(l){if(!h.isNodeOfType(l,'img')){var m=h.create('img',{className:l.className});h.replace(l,m);l=m;}var n=g.hide.bind(null,l),o=g.show.bind(null,l);this._eventListener=i.listen(l,{load:o,error:n,abort:n});this._subscription=this._typeahead.subscribe('select',function(p,q){var r=q.selected.photo||this._typeahead.view.fallbackPhoto;r?l.setAttribute('src',r):n();}.bind(this));}};k.prototype.disable=function(){"use strict";this._eventListener.remove();this._eventListener=null;this._typeahead.unsubscribe(this._subscription);this._subscription=null;};j(k.prototype,{_eventListener:null,_subscription:null});e.exports=k;});
__d("legacy:SetPhotoOnSelectTypeaheadBehavior",["TypeaheadSetPhotoOnSelect"],function(a,b,c,d,e,f,g){if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.setPhotoOnSelect=function(h){h.enableBehavior(g);};},3);
__d("TypeaheadShowResultsOnFocus",["Event","Keys","copyProperties"],function(a,b,c,d,e,f,g,h,i){function j(k){"use strict";this._typeahead=k;}j.prototype.enable=function(){"use strict";var k=this._typeahead.getCore(),l=this._typeahead.getData();k.resetOnKeyup=false;this._subscription=this._typeahead.subscribe('bootstrap',function(m,n){this.firstFetch(n,k,l);}.bind(this));this._keyUpListener=g.listen(k.getElement(),'keyup',function(event){if(g.getKeyCode(event)==h.BACKSPACE||g.getKeyCode(event)==h.DELETE)this.respond(k,l);}.bind(this));this._focusListener=g.listen(k.getElement(),'focus',function(event){this.respond(k,l);}.bind(this));};j.prototype.disable=function(){"use strict";this._typeahead.unsubscribe(this._subscription);this._subscription=null;this._keyUpListener.remove();this._keyUpListener=null;this._focusListener.remove();this._focusListener=null;};j.prototype.firstFetch=function(k,l,m){"use strict";!k.bootstrapping&&this.respond(l,m);};j.prototype.respond=function(k,l){"use strict";if(!k.getValue()){var m=this.getUidsFromData(l);k.setValue('');var n=l.buildUids(' ',m);l.respond('',n);}};j.prototype.getUidsFromData=function(k){"use strict";var l=k.getAllEntries(),m=[];for(var n in l)m.push({uid:l[n].uid,index:l[n].index});m.sort(function(o,p){return o.index-p.index;});return m.map(function(o){return o.uid;});};i(j.prototype,{_subscription:null,_keyUpListener:null,_focusListener:null});e.exports=j;});
__d("TypeaheadShowBootstrapOnFocus",["TypeaheadShowResultsOnFocus"],function(a,b,c,d,e,f,g){for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(k){"use strict";g.call(this,k);this._uids=[];}j.prototype.getMaxBootstrapEntries=function(){"use strict";return 3;};j.prototype.firstFetch=function(k,l,m){"use strict";if(!k.bootstrapping){this._uids=this.getUidsFromData(m);this.respond(l,m);}};j.prototype.respond=function(k,l){"use strict";if(!k.getValue()){k.setValue('');var m=l.buildUids(' ',this._uids);l.respond('',m);}};j.prototype.getUidsFromData=function(k){"use strict";var l=k.getAllEntries(),m=[];for(var n in l)if(l[n].bootstrapped)m.push({uid:l[n].uid,index:l[n].index});m.sort(function(o,p){return o.index-p.index;});if(this.getMaxBootstrapEntries())m=m.slice(0,this.getMaxBootstrapEntries());return m.map(function(o){return o.uid;});};e.exports=j;});