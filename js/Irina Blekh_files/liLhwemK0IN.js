/*!CK:3431441751!*//*1392700204,178184021*/

if (self.CavalryLogger) { CavalryLogger.start_js(["mX+1K"]); }

__d("ComposerCitySharer",["Arbiter","ArbiterMixin","AsyncRequest","CSS","DOM","Event","Parent","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o={},p=n(h);for(var q in p)if(p.hasOwnProperty(q))s[q]=p[q];var r=p===null?null:p.prototype;s.prototype=Object.create(r);s.prototype.constructor=s;s.__superConstructor__=p;function s(t){"use strict";this.root=t;}s.prototype.init=function(t,u,v,w,x){"use strict";this.cityLink=t;this.closeButton=u;this.input=v;this.disableShareInput=w;this._options=x;this.cityName=k.find(this.cityLink,'.cityName');this.data={};l.listen(this.closeButton,'click',function(){this.clearCity();this.disableShareInput.value='true';}.bind(this));o[this.root]=this;this.inform('init',null,g.BEHAVIOR_PERSISTENT);};s.prototype.changeCity=function(t,u,v){"use strict";this.setCityId(t,u,v);this.toggleLocationSharing(t,u,v,false);};s.prototype.setCityId=function(t,u,v){"use strict";if(u){this.data={city_name:t,city_page_id:u,city_id:v};this.input.value=u;var w=t.lastIndexOf(',');if(w!=-1)t=t.substring(0,w);var x=t;k.setContent(this.cityName,x);j.addClass(this.root,'ComposerCitySharerCitySelected');j.conditionShow(this.closeButton,!this._placeSelected);this.inform('change',this.data,g.BEHAVIOR_PERSISTENT);}};s.prototype.toggleLocationSharing=function(t,u,v,w){"use strict";if(u)new i().setURI('/ajax/places/toggle_location_sharing').setData({city_id:v,city_page_id:u,city_name:t,is_default:w,session_id:this._options.session_id}).send();};s.prototype.setDefaultCity=function(t,u,v){"use strict";this._defaultCityData=[t,u,v];};s.prototype.useDefaultCity=function(){"use strict";if(this._defaultCityData){var t=this._defaultCityData[0],u=this._defaultCityData[1],v=this._defaultCityData[2];this.setCityId(t,u,v);this.toggleLocationSharing(t,u,v,true);}};s.prototype.addPlace=function(t){"use strict";if(t.city_id){this.changeCity(t.city_name,t.city_page_id,t.city_id);}else this.clearCity();this._placeSelected=true;j.addClass(this.cityLink,'placeIconSelected');j.hide(this.closeButton);};s.prototype.clearPlace=function(t){"use strict";this._placeSelected=false;j.removeClass(this.cityLink,'placeIconSelected');j.conditionShow(this.closeButton,this.getValue());};s.prototype.clearCity=function(){"use strict";this.data={};this.input.value='';k.setContent(this.cityName,'');j.removeClass(this.root,'ComposerCitySharerCitySelected');j.hide(this.closeButton);this.inform('change',null,g.BEHAVIOR_PERSISTENT);};s.prototype.getIcon=function(){"use strict";return this.root;};s.prototype.getValue=function(){"use strict";return this.input.value;};s.getInstance=function(t){"use strict";var u=m.byClass(t,'ComposerCitySharer');return u&&o[u];};e.exports=s;});
__d("ContextualBlind",["Event","Animation","DOM","Rect","Vector","$"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=[],n=null,o=null,p=false,q=.8,r=500;function s(v,w){w.getPositionVector().setElementPosition(v);w.getDimensionVector().setElementDimensions(v);}function t(){m=[];n&&n.remove();n=null;o&&i.remove(o);p=false;}var u={STYLE_LIGHT:0,STYLE_DARK:1,show:function(v,w,x,y,z){u.hide();y=y||q;z=z||u.STYLE_LIGHT;var aa=(z==u.STYLE_LIGHT)?'contextualBlind':'contextualBlind contextualBlindDark';for(var ba=0;ba<4;ba++)m.push(i.create('div',{className:aa,style:'opacity:'+y}));i.appendContent(document.body,m);if(x!==false){aa=(z==u.STYLE_LIGHT)?'contextualBlindContext':'contextualBlindContext contextualBlindContextDark';o=i.create('div',{className:aa});i.appendContent(document.body,o);}u.updatePosition(v,w);n=g.listen(window,'resize',u.updatePosition.bind(u,v,w));p=true;},fadeIn:function(v,w,x,y,z){var aa=p;u.show(v,w,x);if(aa)return;q=y!==undefined?y:q;r=z!==undefined?z:r;for(var ba=0;ba<m.length;ba++){var ca=m[ba];new h(ca).duration(r).from('opacity',0).to('opacity',q).go();}},hide:function(){m.forEach(i.remove);t();},fadeOut:function(){for(var v=0;v<m.length;v++){var w=m[v];new h(w).duration(r).from('opacity',q).to('opacity',0).ondone(i.remove.bind(null,w)).go();}t();},updatePosition:function(v,w){var x=k.getDocumentDimensions().y,y=j.getElementBounds(l(v));if(w)y=new j(y.t-w,y.r+w,y.b+w,y.l-w,y.domain);var z=document,aa=(z&&z.documentElement&&z.documentElement.clientWidth)||(z&&z.body&&z.body.clientWidth)||0;s(m[0],new j(0,aa,y.t,0,'document'));s(m[1],new j(y.t,aa,y.b,y.r,'document'));s(m[2],new j(y.b,aa,x,0,'document'));s(m[3],new j(y.t,y.l,y.b,0,'document'));if(o)s(o,y);}};e.exports=a.ContextualBlind||u;});
__d("TourAutoPilot",["ContextualBlind","DOMScroll","Tour","copyProperties"],function(a,b,c,d,e,f,g,h,i,j){for(var k in i)if(i.hasOwnProperty(k))m[k]=i[k];var l=i===null?null:i.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=i;function m(){"use strict";if(i!==null)i.apply(this,arguments);}m.prototype.registerStep=function(n,o){"use strict";n.subscribe('tour-dialog-show',this.handleShowDialog.bind(this,n,o));l.registerStep.call(this,n,o);};m.prototype.handleLeavePage=function(){"use strict";this.openDialog&&this.openDialog.destroy();this.hideContextualBlind();l.handleLeavePage.call(this);};m.prototype.handleShowDialog=function(n,o){"use strict";var p=n.getContext();this.showContextualBlind(p,true);h.scrollTo(p,true,true,0);};m.prototype.handleTourStop=function(){"use strict";this.hideContextualBlind(true);l.handleTourStop.call(this);};m.prototype.showContextualBlind=function(n,o){"use strict";if(this.blindShowing){g.show(n,0,o,this.opacity);}else g.fadeIn(n,0,o,this.opacity);this.blindShowing=true;};m.prototype.hideContextualBlind=function(n){"use strict";if(n){g.fadeOut();}else g.hide();this.blindShowing=false;};j(m.prototype,{blindShowing:false,opacity:null});f.TourAutoPilot=m;});
__d("ComposerTour",["Arbiter","AsyncRequest","ComposerCitySharer","CSS","DOM","Parent","Tour","URI","$","TourAutoPilot"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=b('TourAutoPilot').TourAutoPilot;for(var q in p)if(p.hasOwnProperty(q))s[q]=p[q];var r=p===null?null:p.prototype;s.prototype=Object.create(r);s.prototype.constructor=s;s.__superConstructor__=p;function s(){"use strict";if(p!==null)p.apply(this,arguments);}s.prototype.handleShowDialog=function(t,u){"use strict";var v=l.byClass(o('composerTourStart'),'uiComposer');if(u!='start'){r.handleShowDialog.call(this,t,u);this.showContextualBlind(v);}};s.prototype.showContextualBlind=function(t){"use strict";j.addClass(document.body,'composerTourInProgress');r.showContextualBlind.call(this,t);};s.prototype.hideContextualBlind=function(t){"use strict";r.hideContextualBlind.call(this,t);j.removeClass(document.body,'composerTourInProgress');};s.openComposer=function(){"use strict";var t=l.byClass(o('composerTourStart'),'uiComposerAttachment'),u=l.byTag(t,'form');u.action=t.getAttribute('data-endpoint');u.xhpc.value=t.id;u.xhpc.click();};s.closeOnComposerReset=function(){"use strict";g.subscribe('composer/reset',function(){m.getInstance().setTourStop();});};s.sendLocationOption=function(t,u){"use strict";var v=new n(u).addQueryData({use_location:t});new h(v.toString()).send();};s.addCity=function(){"use strict";var t=l.byClass(o('composerTourLocation'),'uiComposer'),u=i.getInstance(k.scry(t,'span.ComposerCitySharer')[0]);u&&u.useDefaultCity();};s.clearCity=function(){"use strict";var t=l.byClass(o('composerTourLocation'),'uiComposer'),u=i.getInstance(k.scry(t,'span.ComposerCitySharer')[0]);u&&u.clearCity();};s.hideStartDialog=function(){"use strict";var t=m.getInstance().steps.start;t&&t.hide();};e.exports=s;});
__d("legacy:composer-tour-js",["ComposerTour"],function(a,b,c,d){a.ComposerTour=b('ComposerTour');},3);
__d("TimelineTour",["Animation","AsyncRequest","Bootloader","CSS","DOM","DOMScroll","Event","PagesAdminPanel","Parent","Style","TimelineCover","TimelineTourConfig","Vector","$","copyProperties","csx","TourAutoPilot"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var w=b('TourAutoPilot').TourAutoPilot;for(var x in w)if(w.hasOwnProperty(x))z[x]=w[x];var y=w===null?null:w.prototype;z.prototype=Object.create(y);z.prototype.constructor=z;z.__superConstructor__=w;function z(aa,ba){"use strict";w.call(this);this._isPage=aa;this._pageID=ba;this._tourStartedClass=aa?'pagesTimelineTourStarted':'timelineTourStarted';this._profilePic=k.find(t('fbTimelineHeadline'),'.profilePicThumb img');this._hasProfilePic=!j.hasClass(this._profilePic,'silhouette');this._profilePicFrame=o.byClass(this._profilePic,'profilePicThumb');}z.prototype.isAnimateCoverStep=function(aa){"use strict";return aa=='coverphoto'||(this._hasProfilePic&&aa==='picture');};z.prototype.handleTourComplete=function(){"use strict";this._stopCoverPhotoTour(true);j.removeClass(document.body,this._tourStartedClass);j.removeClass(document.body,'timelineTourCoverPhoto');j.removeClass(document.body,'timelineTour');l.scrollTo(new s(0,0,'document'));};z.prototype.showTour=function(){"use strict";j.addClass(document.body,'timelineTour');j.show(t('timeline_tour_toolbar'));};z.prototype.handleTourStart=function(){"use strict";if(this._isPage)this._didCoverStep=true;j.addClass(document.body,this._tourStartedClass);};z.prototype.registerStep=function(aa,ba){"use strict";if(this.isAnimateCoverStep(ba)){this._coverPhotoDialog=aa;}else y.registerStep.call(this,aa,ba);aa.subscribe('tour-dialog-show',this.handleShowDialog.bind(this,aa,ba));};z.prototype.showStep=function(aa){"use strict";if(this.isAnimateCoverStep(this._currentStep))this._stopCoverPhotoTour();this._currentStep=aa;this._showStep(aa);};z.prototype._showStep=function(aa){"use strict";var ba,ca=false;switch(aa){case 'activity_log':ba=o.byClass(t('activityLogButton'),'fbTimelineSection');break;case 'timeline':var da=k.scry(t('pagelet_timeline_recent'),'.spinePointer');this.steps[aa].context=da[1]||da[0]||t('timeline_tab_content');ba=document.body;break;case 'curation':var ea=k.scry(t('pagelet_timeline_recent'),'.firstUnit');this.steps[aa].context=(ea&&ea[0])||t('timeline_tab_content');ba=t('timeline_tab_content');break;case 'getting_around':ba=t('timelineNavContent');this.steps[aa].context=k.find(t('fbTimelineHeadline'),"._6-7");break;case 'profilephoto':if(this._hasProfilePic)ba=this.profilePic;break;case 'nav_tabs':ba=t('timelineNavContent');break;case 'admin_panel':ca=true;ba=t('admin_panel');break;case 'messages':ca=true;this.steps[aa].context=t('admin_panel_messages');ba=t('admin_panel_messages');break;case 'picture':if(!this._hasProfilePic){j.hide(t('fbProfilePicSelector'));ba=this._profilePicFrame;}break;case 'about':ba=t(r.basicInfoSelector);break;case 'stories':j.show(t('fbProfilePicSelector'));ba=k.find(t('pagelet_timeline_recent'),'li.fbTimelineComposerCapsule');break;case 'thanks':ba=k.find(t('pagelet_timeline_recent'),'li.fbTimelineIndeterminateContent');break;case 'collections':ba=k.find(t('pagelet_timeline_recent'),"._5uwh");break;}if(this._isPage)if(ca){n.show(this._pageID,true);}else n.hide(this._pageID,true);if(ba){this.showContextualBlind(ba);}else{this.hideContextualBlind();if(this.isAnimateCoverStep(aa))this._startCoverPhotoTour();}y.showStep.call(this,aa);};z.prototype.handleShowDialog=function(aa,ba){"use strict";var ca=aa.getContext();l.scrollTo(ca,true,true,0);};z.prototype._scrollToTop=function(){"use strict";l.scrollToTop(true);};z.prototype._startCoverPhotoTour=function(){"use strict";if(q.getInstance()&&q.getInstance().isInEditMode())q.getInstance().cancelUpdate();j.addClass(document.body,'timelineTourCoverPhoto');var aa=k.find(document.body,'#fbProfileCover .cover');if(aa.childNodes[0]&&!j.hasClass(aa.childNodes[0],'coverNoImage')){this._hasCoverPhoto=true;this._didCoverStep=true;}if(!this._didCoverStep)setTimeout(this._showCoverImages.bind(this),1000);if(this._coverPhotoImages.length){if(this._didCoverStep)this._showCoverImages();}else{this.showContextualBlind(aa,false);this._coverPhotoDialog.show();}j.hide(o.byClass(this._profilePic,'photoContainer'));j.hide(t('fbProfileCoverPhotoSelector'));if(this._hasCoverPhoto)this._doDragger(k.find(document.body,'#fbProfileCover .photo'));};z.prototype._stopCoverPhotoTour=function(){"use strict";this._dragger&&this._dragger.destroy();this._dragger=null;this._coverPhotoDialog&&this._coverPhotoDialog.hide();this._coverClickListener&&this._coverClickListener.remove();j.show(o.byClass(this._profilePic,'photoContainer'));j.show(t('fbProfileCoverPhotoSelector'));j.removeClass(document.body,'timelineTourCoverPhoto');var aa=k.scry(document.body,'#fbProfileCover .tourCoverPreview')[0];if(aa)k.remove(aa);};z.prototype.setCover=function(aa){"use strict";var ba;if(!this._hasCoverPhoto){var ca=k.scry(document.body,'#fbProfileCover .tourCoverPreview')[0];ca&&k.remove(ca);var da=k.scry(document.body,'#fbProfileCover .coverImage')[0];j.removeClass(da,'coverNoImage');ba=k.create('img',{className:'photo img'});var ea=k.create('div',{className:'coverBorder'}),fa=k.create('div',{className:'coverWrap'},[ba,ea]);k.prependContent(da,fa);this._hasCoverPhoto=true;}else ba=k.scry(document.body,'#fbProfileCover .photo')[0];p.set(ba,'top','0px');ba.src=aa;j.hide(t('coverSelector'));j.show(t('coverSelected'));j.show(t('coverPickDifferentPhoto'));this._doDragger(ba);};z.prototype._doDragger=function(aa){"use strict";var ba=k.scry(document.body,'#fbProfileCover .cover')[0],ca={height:ba.offsetHeight,width:ba.offsetWidth,vertical:true,listenOn:ba};if(ba&&!this._coverClickListener)this._coverClickListener=m.listen(ba,"click",function(event){event.kill();});if(!this._dragger){i.loadModules(["TimelineDrag"],function(da){this._dragger=new da(aa,t('cover_offset'),ca);}.bind(this));}else this._dragger.setPicture(aa,ca);};z.prototype.saveCoverOffset=function(aa){"use strict";if(!this._hasCoverPhoto)return;var ba={profile_id:aa,photo_offset:t('cover_offset').value};new h().setURI('/ajax/timeline/cover_photo_tour_select.php').setMethod('POST').setData(ba).send();};z.prototype.setTourData=function(aa,ba,ca){"use strict";this._coverWidth=ba;this._coverHeight=ca;u(this._coverPhotoImages,aa);var da=new Image();for(var ea=0;ea<aa.length;ea++)da.src=aa[ea].url;};z.prototype._showCoverImages=function(){"use strict";if(!this.isAnimateCoverStep(this._currentStep)){this._didCoverStep=true;return;}if(this._hasCoverPhoto){this._showCoverPhotoDialog();return;}var aa=k.scry(document.body,'#fbProfileCover .tourCoverPreview')[0];if(!aa){aa=k.create('img',{className:'tourCoverPreview'});k.appendContent(k.find(document.body,'#fbProfileCover .coverImage'),aa);}if(this._didCoverStep){aa.src=this._coverPhotoImages[2].url;p.set(aa,'top',this._coverPhotoImages[2].offset+'px');p.set(aa,'opacity',.3);this._showCoverPhotoDialog();}else{this._didCoverStep=true;this._animateCover(0,aa);}};z.prototype._showCoverPhotoDialog=function(){"use strict";if(this.tourComplete)return;var aa=k.find(document.body,'#fbProfileCover .cover');this.showContextualBlind(aa,false);this._scrollToTop();this._coverPhotoDialog.show();var ba=740,ca=s.getViewportDimensions().y;if(ba>ca)window.scrollTo(0,ba-ca);};z.prototype._animateCover=function(aa,ba){"use strict";if(aa>=3&&!this.tourComplete){if(this.isAnimateCoverStep(this._currentStep)){var ca=k.find(document.body,'#fbProfileCover .cover');this.showContextualBlind(ca,false);this._coverPhotoDialog.show();}return;}ba.src=this._coverPhotoImages[aa].url;p.set(ba,'top',this._coverPhotoImages[aa].offset+'px');new g(ba).to('opacity',1).duration(500).checkpoint(1,function(){setTimeout(function(){new g(ba).to('opacity',aa<2?0:1).duration(aa<2?500:250).ease(g.ease.both).checkpoint(1,function(){this._animateCover(aa+1,ba);}.bind(this)).go();}.bind(this),1500);}.bind(this)).go();};z.showTour=function(){"use strict";j.addClass(document.body,'timelineTour');};z.closeTour=function(aa){"use strict";j.removeClass(document.body,'timelineTour');(new h()).setURI(aa).setMethod('post').send();};u(z.prototype,{_hasCoverPhoto:false,_didCoverStep:false,_coverPhotoImages:[]});e.exports=z;});
__d("legacy:timeline-tour",["TimelineTour"],function(a,b,c,d){a.TimelineTour=b('TimelineTour');},3);