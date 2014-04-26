/*!CK:1055839402!*//*1394148732,178183207*/

if (self.CavalryLogger) { CavalryLogger.start_js(["FI4ZK"]); }

__d("BoostedPostSection.react",["React","cx"],function(a,b,c,d,e,f,g,h){var i=g.createClass({displayName:'BoostedPostSection',propTypes:{border:g.PropTypes.bool},getDefaultProps:function(){return {border:false};},render:function(){var j=(("_p2w")+(this.props.border?' '+"_p2x":''));return (g.DOM.div({className:j},this.props.children));}});e.exports=i;});
__d("BoostedPostLabeledRow.react",["Grid.react","React","XUIGrayText.react","cx"],function(a,b,c,d,e,f,g,h,i,j){var k=g.GridItem,l=h.createClass({displayName:'BoostedPostLabeledRow',propTypes:{label:h.PropTypes.string.isRequired,border:h.PropTypes.bool,alignv:h.PropTypes.oneOf(['top','middle','bottom'])},getDefaultProps:function(){return {border:false,alignv:'top'};},render:function(){var m=(("_5vgm")+(this.props.border?' '+"_5vgn":''));return (h.DOM.div({className:m},g({cols:2,fixed:true,alignv:this.props.alignv,spacing:"pas"},k({className:"_5vgo"},i({weight:"bold"},this.props.label)),k({className:"_5vgp"},this.props.children))));}});e.exports=l;});
__d("InputLabel.react",["React","cx","invariant","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){var k=0;function l(){return 'js_input_label_'+(k++);}var m=g.createClass({displayName:'InputLabel',propTypes:{display:g.PropTypes.oneOf(['block','inline'])},getDefaultProps:function(){return {display:'block'};},render:function(){i(this.props.children.length===2);var n=this.props.children[0],o=this.props.children[1];n.props.className=j(n.props.className,'uiInputLabelInput');var p=n instanceof g.DOM.input.componentConstructor;if(p)if(n.props.type==='radio'){n.props.className=j(n.props.className,'uiInputLabelRadio');}else if(n.props.type==='checkbox')n.props.className=j(n.props.className,'uiInputLabelCheckbox');if(!n.props.id)n.props.id=l();o.props.htmlFor=n.props.id;o.props.className=j(o.props.className,'uiInputLabelLabel');var q=(("uiInputLabel")+(' '+"clearfix")+(this.props.display==='inline'?' '+"inlineBlock":'')+(p?' '+"uiInputLabelLegacy":''));return this.transferPropsTo(g.DOM.div({className:q},n,o));}});e.exports=m;});
__d("HelpLink.react",["React","TooltipLink.react"],function(a,b,c,d,e,f,g,h){var i=g.createClass({displayName:'HelpLink',render:function(){return this.transferPropsTo(h({className:"uiHelpLink mls"}));}});e.exports=i;});
__d("XUIRadioInput.react",["React","ReactDOMInput","cx","joinClasses","invariant"],function(a,b,c,d,e,f,g,h,i,j,k){var l=g.createClass({displayName:'XUIRadioInput',render:function(){k(!this.props.children||this.props.children.length===0);var m=j(this.props.className,"_55sh"),n=this.transferPropsTo(h({type:"radio"}));n.props.className=null;return (g.DOM.label({className:m},n,g.DOM.span(null)));}});e.exports=l;});
__d("BoostedPostTargetingAudienceSelector.react",["AdsTargetingConstants","InputLabel.react","React","HelpLink.react","XUIRadioInput.react","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=i.createClass({displayName:'BoostedPostTargetingAudienceInfo',propTypes:{selectedAudience:i.PropTypes.oneOf([g.AUDIENCE.Grouper,g.AUDIENCE.Ncpp,g.AUDIENCE.Custom]).isRequired,showCustomAudience:i.PropTypes.bool.isRequired,isAlreadyTargeted:i.PropTypes.bool.isRequired,isInComposer:i.PropTypes.bool.isRequired,onDataUpdate:i.PropTypes.func.isRequired},_onValueChange:function(event){this.props.onDataUpdate('audience',event.target.value);},_renderGrouperOption:function(){var o=i.DOM.div(null,"Your post will only be promoted to the people who like your Page and their friends");return (h(null,k({name:"audience",value:g.AUDIENCE.Grouper,defaultChecked:this.props.selectedAudience===g.AUDIENCE.Grouper,onChange:this._onValueChange}),i.DOM.label(null,"People who like your Page and their friends",j({tooltip:o}))));},_renderNcppOption:function(){var o=i.DOM.div(null,"Your post will be promoted to people based on the targeting you choose below.");return (h({'data-testid':"ncpp_option"},k({name:"audience",value:g.AUDIENCE.Ncpp,defaultChecked:this.props.selectedAudience===g.AUDIENCE.Ncpp,onChange:this._onValueChange}),i.DOM.label(null,"People you choose through targeting",j({tooltip:o}))));},_renderCustomAudienceOption:function(){if(!this.props.showCustomAudience)return null;var o=i.DOM.div(null,"Your post will be promoted to people in the custom audience you choose below.");return (h(null,k({name:"audience",value:g.AUDIENCE.Custom,defaultChecked:this.props.selectedAudience===g.AUDIENCE.Custom,onChange:this._onValueChange}),i.DOM.label(null,"Your custom audience",j({tooltip:o}))));},_renderAlreadyTargeted:function(){if(!this.props.isAlreadyTargeted)return null;if(this.props.isInComposer){var o="Targeting for this post has already been specified.";}else o="Targeting for this post was specified when it was created.";return (i.DOM.div({className:"_5lq7"},o));},render:function(){return (i.DOM.div({className:"_3ni0"},this._renderGrouperOption(),this._renderNcppOption(),this._renderCustomAudienceOption(),this._renderAlreadyTargeted()));}});e.exports=n;});
__d("ReactSelectorUtils",[],function(a,b,c,d,e,f){var g={processAndMutateMenuItems:function(h,i){var j;for(var k=0;k<h.length;k++){var l=h[k].value===i;h[k].selected=l;if(l)j=h[k];}return j;}};e.exports=g;});
__d("AbstractSelector.react",["InlineBlock.react","React","ReactChildren","PopoverMenu.react","ReactPropTypes","ReactSelectorUtils","ContextualLayerAutoFlip","PopoverMenuContextMinWidth","PopoverMenuOverlappingBorder","cloneWithProps","cx","invariant","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t=h.createClass({displayName:'AbstractSelector',propTypes:{config:k.object.isRequired,alignh:k.oneOf(['left','center','right']),name:k.string,overlappingborder:k.bool,onChange:k.func,disabled:k.bool,maxheight:k.number},getInitialState:function(){return {value:(this.props.value!=null?this.props.value:this.props.defaultValue!=null?this.props.defaultValue:this.props.initialValue)};},setMenuValue:function(u){r(this.refs&&this.refs.popover);this._internalChange=true;this.refs.popover.getMenu().setValue(u);this._internalChange=false;},onChange:function(u,v){if(this._internalChange)return;if(this.props.value==null){this.setState({value:v.value});}else this.setMenuValue(this.props.value);if(this.props.onChange)this.props.onChange(v);},componentWillReceiveProps:function(u){if(u.value!=null)this.setState({value:u.value});},render:function(){var u=this.props.config,v=[];i.forEach(this.props.children,function(ca){v.push(ca);});var w=u.menu;w.onChange=this.onChange;w.menuitems=v;w.config.className=s("_575t",w.config.className);w.config.maxheight=this.props.maxheight;var x=l.processAndMutateMenuItems(v,this.state.value),y={label:x.label||x.reactChildren,disabled:this.props.disabled};if(x.icon)y.image=p(x.icon,{});var z=p(u.button,y),aa=[m];if(u.layerBehaviors)aa=aa.concat(u.layerBehaviors);var ba=[n];if(this.props.overlappingborder)ba.push(o);return this.transferPropsTo(g({alignv:"middle",name:null},j({ref:"popover",menu:w,alignh:this.props.alignh,layerBehaviors:aa,behaviors:ba,disabled:this.props.disabled},z),h.DOM.input({type:"hidden",name:this.props.name,value:this.state.value})));},showMenu:function(){r(this.refs&&this.refs.popover);this.refs.popover.showPopover();}});e.exports=t;});
__d("AbstractPopoverButton.react",["ReactPropTypes","React","URI","cloneWithProps","cx","merge"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=h.createClass({displayName:'AbstractPopoverButton',propTypes:{config:g.object.isRequired,haschevron:g.bool,maxwidth:g.number},getDefaultProps:function(){return {haschevron:true};},render:function(){var n=this.props.config,o=n.button.componentClass(l(n.button.props),null);o.props.image=null;var p=null;if(this.props.image)p=j(this.props.image,{className:'mrs'});o.props.label=h.DOM.span({className:"_55pe"},p,this.props.label);if(this.props.haschevron)o.props.imageRight=n.chevron;o.props.href=i('#');var q=n.defaultMaxWidth;if(typeof this.props.maxwidth!=='undefined')q=this.props.maxwidth;if(q){var r=this.props.haschevron?q-n.chevronWidth:q;if(this.props.label)o.props.label.props.style={maxWidth:r+'px'};o.props.style=l(o.props.style,{'max-width':q+'px'});}return this.transferPropsTo(o);}});e.exports=m;});
__d("XUIPopoverButton.react",["AbstractPopoverButton.react","React","Image.react","XUIButton.react","cx","joinClasses","ix"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=h.createClass({displayName:'ReactXUIPopoverButton',statics:{getButtonSize:function(o){return o.size||'medium';}},render:function(){var o=n.getButtonSize(this.props),p="_55pi";if(this.props.theme==='dark')p=l(p,(("_5vto")+(o==='small'?' '+"_55_o":'')+(o==='medium'?' '+"_55_p":'')+(o==='large'?' '+"_55_q":'')+(o==='xlarge'?' '+"_55_r":'')+(o==='xxlarge'?' '+"_55_s":'')));var q=this.props.chevron;if(!q){var r=this.props.theme==='dark'?m('/images/ui/x/button/dark/chevron.png'):m('/images/ui/x/button/normal/chevron.png');q=i({src:r});}var s={button:{componentClass:j,props:{className:p,image:this.props.image,size:o}},chevron:q,chevronWidth:14,defaultMaxWidth:this.props.maxwidth||200};return this.transferPropsTo(g({config:s}));}});e.exports=n;});
__d("XUISelector.react",["AbstractSelector.react","ContextualLayerPositionClassOnContext","React","XUIPopoverButton.react","ReactXUIMenu","invariant"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=k.SelectableMenu,n=k.SelectableItem,o=i.createClass({displayName:'ReactXUISelector',statics:{getButtonSize:function(p){return p.size||'medium';}},render:function(){var p={button:j({size:this.props.size,suppressed:this.props.suppressed,theme:"dark",maxwidth:this.props.maxwidth}),menu:m(null),layerBehaviors:[h]};return this.transferPropsTo(g({ref:"abstractSelector",config:p},this.props.children));},showMenu:function(){l(this.refs&&this.refs.abstractSelector);this.refs.abstractSelector.showMenu();}});o.Option=n;e.exports=o;});
__d("AdsTargetingNumberSelector.react",["XUISelector.react","React","cx"],function(a,b,c,d,e,f,g,h,i){var j=g.Option,k=h.createClass({displayName:'AdsTargetingNumberSelector',propTypes:{minimum:h.PropTypes.number.isRequired,maximum:h.PropTypes.number.isRequired,selectedValue:h.PropTypes.number.isRequired,onDataUpdate:h.PropTypes.func.isRequired},render:function(){var l=this.props,m=[];for(var n=l.minimum;n<=l.maximum;++n)m.push(j({value:n},n));return (h.DOM.div({className:"_5tpo"},g({onChange:l.onDataUpdate,value:l.selectedValue,maxheight:200},m)));}});e.exports=k;});
__d("AdsTargetingTogglerSafeMixin",[],function(a,b,c,d,e,f){var g={setStateSafe:function(h){setTimeout(function(){this.setState(h);}.bind(this),0);}};e.exports=g;});
__d("AdsTargetingAgeSelector.react",["AdsTargetingConstants","AdsTargetingNumberSelector.react","AdsTargetingTogglerSafeMixin","React","cx"],function(a,b,c,d,e,f,g,h,i,j,k){var l=j.createClass({displayName:'AdsTargetingAgeSelector',mixins:[i],propTypes:{minSelectableAge:j.PropTypes.number,maxSelectableAge:j.PropTypes.number,initialMinAge:j.PropTypes.number,initialMaxAge:j.PropTypes.number,onDataUpdate:j.PropTypes.func.isRequired},getDefaultProps:function(){return {minSelectableAge:g.DEFAULT_MIN_SELECTABLE_AGE,maxSelectableAge:g.DEFAULT_MAX_SELECTABLE_AGE};},getInitialState:function(){return this._getInitialAges(this.props);},componentWillReceiveProps:function(m){this.setStateSafe(this._getInitialAges(m));},_getInitialAges:function(m){var n=m.minSelectableAge,o=m.maxSelectableAge,p=m.initialMinAge?m.initialMinAge:n,q=m.initialMaxAge?m.initialMaxAge:o;if(n>p)p=n;if(o<q)q=o;return {minAge:p,maxAge:q};},_onMinAgeUpdate:function(m){var n=m.value,o=n>this.state.maxAge?n:this.state.maxAge;this._updateAges(n,o);},_onMaxAgeUpdate:function(m){var n=m.value,o=n<this.state.minAge?n:this.state.minAge;this._updateAges(o,n);},_updateAges:function(m,n){this.setStateSafe({minAge:m,maxAge:n});this.props.onDataUpdate("minimum_age",m);this.props.onDataUpdate("maximum_age",n);},render:function(){var m=this.state;return (j.DOM.div({className:"_5so_"},h({minimum:this.props.minSelectableAge,maximum:this.props.maxSelectableAge,selectedValue:m.minAge,onDataUpdate:this._onMinAgeUpdate})," - ",h({minimum:this.props.minSelectableAge,maximum:this.props.maxSelectableAge,selectedValue:m.maxAge,onDataUpdate:this._onMaxAgeUpdate})));}});e.exports=l;});
__d("XUIButtonGroup.react",["React","ReactChildren","ReactPropTypes","cx","invariant"],function(a,b,c,d,e,f,g,h,i,j,k){var l=g.createClass({displayName:'XUIButtonGroup',propTypes:{isOverlay:i.bool},render:function(){this.validateButtonSize();var m=(("_51xa")+(this.props.isOverlay?' '+"_51xb":''));return this.transferPropsTo(g.DOM.div({className:m},this.props.children));},validateButtonSize:function(){if(!this.props.isOverlay){var m;h.forEach(this.props.children,function(n){if(n){var o=n.type.getButtonSize(n.props);if(!m){m=o;}else k(o===m);}});}}});e.exports=l;});
__d("AdsTargetingGenderSelector.react",["AdsTargetingConstants","XUIButtonGroup.react","XUIButton.react","React","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=j.createClass({displayName:'AdsTargetingGenderSelector',propTypes:{onDataUpdate:j.PropTypes.func.isRequired,initialGender:j.PropTypes.number},getDefaultProps:function(){return {initialGender:g.GENDERS.All};},getInitialState:function(){return {selected:this.props.initialGender};},componentWillReceiveProps:function(n){this.setState({selected:n.initialGender});},_onClick:function(n){this.setState({selected:n});this.props.onDataUpdate("gender",n);},render:function(){var n=this.state.selected,o=n==g.GENDERS.All?'confirm':'default',p=n==g.GENDERS.Men?'confirm':'default',q=n==g.GENDERS.Women?'confirm':'default',r=(("_5v_d")),s="All",t="Men",u="Women";return (j.DOM.div({className:r},h(null,i({label:s,use:o,onClick:this._onClick.bind(null,g.GENDERS.All)}),i({label:t,use:p,onClick:this._onClick.bind(null,g.GENDERS.Men)}),i({label:u,use:q,onClick:this._onClick.bind(null,g.GENDERS.Women)}))));}});e.exports=m;});
__d("TokenizerToken.react",["CloseButton.react","ReactPropTypes","React","SearchableEntry","cx","tx"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=i.createClass({displayName:'TokenizerToken',propTypes:{label:h.string.isRequired,entry:h.instanceOf(j),onRemove:h.func,highlighted:h.bool},render:function(){var n;if(this.props.onRemove)n=g({'aria-label':l._("Remove {item}",{item:this.props.label}),className:"_58zx",size:"small",onClick:this._onClick});var o=(("_58zy")+(this.props.highlighted?' '+"_58zz":''));return this.transferPropsTo(i.DOM.span({className:o,label:null},this.props.label,n));},_onClick:function(n){n.preventDefault();this.props.onRemove(this.props.entry);}});e.exports=m;});
__d("AbstractTokenizer.react",["ReactPropTypes","React","Typeahead.react","TokenizerToken.react","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=h.createClass({displayName:'AbstractTokenizer',propTypes:{className:g.string,inputClassName:g.string,placeholder:g.string,queryString:g.string,searchSource:g.object.isRequired,searchSourceOptions:g.object,presenter:g.object.isRequired,entries:g.array,onAddEntryAttempt:g.func.isRequired,onRemoveEntryAttempt:g.func.isRequired,onReorderEntryAttempt:g.func,onQueryStringChange:g.func,onInputFocus:g.func,onInputBlur:g.func,onTypeaheadMouseDown:g.func,excludedEntries:g.object,selectOnBlur:g.bool},getDefaultProps:function(){return {selectOnBlur:false};},getInitialState:function(){return {queryString:''};},_getQueryString:function(){return this.props.queryString||this.state.queryString;},componentWillReceiveProps:function(n){if(n.queryString==null&&this.props.queryString!=null)this.setState({queryString:this.props.queryString});},render:function(){var n=!!this.props.onReorderEntryAttempt,o=l((("_58-2")+(n?' '+"_5ph3":'')),'clearfix',this.props.className),p,q=this.props.entries,r={},s=q&&q.length>0,t;if(s){p=[];for(var u=0,v=q.length;u<v;u++){var w=q[u];t=w.getUniqueID();p[u]=this._renderToken(w,u);r[t]=true;}}if(this.props.excludedEntries)for(t in this.props.excludedEntries)r[t]=this.props.excludedEntries[t];var x=s?null:this.props.placeholder;return this.transferPropsTo(h.DOM.div({className:o,placeholder:null,onClick:this._focusTypeahead,onMouseDown:this._onTypeaheadMouseDown,onDragOver:this.onBackgroundDragOver,onDrop:this.onBackgroundDrop,'data-testid':this.props['data-testid']},p,i({ref:"typeahead",selectedEntry:null,className:"_58-0",inputClassName:this.props.inputClassName,showEntriesOnFocus:this.props.showEntriesOnFocus,queryString:this._getQueryString(),placeholder:x,presenter:this.props.presenter,searchSource:this.props.searchSource,searchSourceOptions:this.props.searchSourceOptions,excludedEntries:r,onSelectAttempt:this._onSelectAttempt,onChange:this._onInputChange,onFocus:this.props.onInputFocus,onBlur:this.props.onInputBlur,onBackspace:this._onBackspace,autoHighlight:true,selectOnBlur:this.props.selectOnBlur,context:this.props.context}),h.DOM.span({ref:"textSizeProxy",className:"_58-3",'aria-hidden':"true"},this._getQueryString()||x)));},componentDidMount:function(){this._syncTimer=setTimeout(this._syncInputWidth,0);},componentDidUpdate:function(){clearTimeout(this._syncTimer);this._syncTimer=setTimeout(this._syncInputWidth,0);},componentWillUnmount:function(){clearTimeout(this._syncTimer);},clearActiveEntries:function(){this.refs.typeahead&&this.refs.typeahead.clearActiveEntries();},focusInput:function(){if(this.refs&&this.refs.typeahead)this.refs.typeahead.focusInput();},_focusTypeahead:function(n){n.preventDefault();this.focusInput();},_onTypeaheadMouseDown:function(){this.props.onTypeaheadMouseDown&&this.props.onTypeaheadMouseDown();},_onInputChange:function(event){if(this.props.queryString==null)this.setState({queryString:event.target.value});if(this.props.onQueryStringChange)this.props.onQueryStringChange(event);},_onSelectAttempt:function(n){if(n){this.props.onAddEntryAttempt(n);if(this.props.queryString==null)this.setState({queryString:''});}setTimeout(this.focusInput,0);},_onRemove:function(n){this.props.onRemoveEntryAttempt(n);},_onBackspace:function(event){var n=this.props.entries;if(n&&!this._getQueryString()&&n.length){var o=n[n.length-1];this.props.onRemoveEntryAttempt(o);event.preventDefault();setTimeout(this.focusInput,0);}},_syncInputWidth:function(){var n=this.refs.textSizeProxy.getDOMNode().offsetWidth;if(n===0)return;this.refs.typeahead.getTextFieldDOM().style.width=n+'px';},onBackgroundDragOver:function(event){event.preventDefault();var n=event.nativeEvent.dataTransfer;if(n)n.dropEffect='move';var o=this.props.entries;this.onTokenDragOver(o[o.length-1],o.length-1,false);},onBackgroundDrop:function(event){this.onTokenDrop(null,this.props.entries.length);},onTokenDragStart:function(n,o){this.setState({draggingIndex:o});},onTokenDragEnd:function(n,o){this.setState({draggingIndex:null});},onTokenDragLeave:function(n,o){if(this.leaveTimer)return;this.leaveTimer=setTimeout(function(){this.leaveTimer=null;if(this.state.dragTargetIndex===null)return;this.setState({dragTargetIndex:null});}.bind(this),100);},onTokenDragOver:function(n,o,p){if(this.leaveTimer){clearTimeout(this.leaveTimer);this.leaveTimer=null;}if(this.state.draggingIndex!==null&&this.state.draggingIndex!==o&&this.props.onReorderEntryAttempt){if(this.state.dragTargetIndex===o&&this.state.draggedOverLeftSideOfElement===p)return;this.setState({dragTargetIndex:o,draggedOverLeftSideOfElement:p});}},onTokenDrop:function(n,o){if(this.state.draggingIndex!==null&&this.props.onReorderEntryAttempt){if(!this.state.draggedOverLeftSideOfElement)o++;if(this.state.draggingIndex!==o)this.props.onReorderEntryAttempt(this.state.draggingIndex,o);}this.setState({draggingIndex:null,dragTargetIndex:null,draggedOverLeftSideOfElement:null});},_renderToken:function(n,o){var p=this.props.presenter.TokenRenderer||j,q=!!this.props.onReorderEntryAttempt,r=this.state.dragTargetIndex===o,s=((this.state.draggingIndex===o?"_5ph4":'')+(r?' '+"_5o8i":'')+(r&&this.state.draggedOverLeftSideOfElement?' '+"_5o8j":'')+(r&&!this.state.draggedOverLeftSideOfElement?' '+"_5o8k":''));return (p({className:s,key:n.getUniqueID(),label:n.getTitle(),entry:n,index:o,onRemove:this._onRemove,isDragDropEnabled:q,onTokenDragStart:this.onTokenDragStart,onTokenDragEnd:this.onTokenDragEnd,onTokenDragOver:this.onTokenDragOver,onTokenDragLeave:this.onTokenDragLeave,onTokenDrop:this.onTokenDrop}));}});e.exports=m;});
__d("DraggableTokenMixin.react",["ReactPropTypes","React","Rect","cx"],function(a,b,c,d,e,f,g,h,i,j){var k={lastDragEventPageX:null,propTypes:{isDragDropEnabled:g.bool,index:g.number.isRequired,onTokenDragStart:g.func.isRequired,onTokenDragEnd:g.func.isRequired,onTokenDragLeave:g.func.isRequired,onTokenDragOver:g.func.isRequired,onTokenDrop:g.func.isRequired},onTokenDragStart:function(event){var m=event.nativeEvent.dataTransfer;if(m){m.setData('text','');m.setDragImage(this.refs.draggableToken.getDOMNode(),0,0);}this.props.onTokenDragStart(this.props.entry,this.props.index);},onTokenDragEnd:function(event){this.props.onTokenDragEnd(this.props.entry,this.props.index);},onTokenDragLeave:function(event){this.props.onTokenDragLeave(this.props.entry,this.props.index);},onTokenDragOver:function(event){event.preventDefault();var m=event.nativeEvent.dataTransfer;if(m)m.dropEffect='move';if(event.pageX!==this.lastDragEventPageX){var n=this.getDOMNode(),o=i.getElementBounds(n).getCenter().x,p=event.pageX<o;this.props.onTokenDragOver(this.props.entry,this.props.index,p);}return false;},onTokenDrop:function(event){event.stopPropagation();this.props.onTokenDrop(this.props.entry,this.props.index);},renderDraggableToken:function(m){if(!this.props.isDragDropEnabled)return m;return (h.DOM.a({className:"_5o8l",draggable:true,href:"#",onClick:l,onDragStart:this.onTokenDragStart,onDragEnd:this.onTokenDragEnd,onDragOver:this.onTokenDragOver,onDragLeave:this.onTokenDragLeave,onDrop:this.onTokenDrop,ref:"draggableToken"},m));}};function l(m){m.preventDefault();}e.exports=k;});
__d("XUITokenizerToken.react",["DraggableTokenMixin.react","ReactPropTypes","React","SearchableEntry","XUICloseButton.react","cx","tx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=i.createClass({displayName:'XUITokenizerToken',mixins:[g],propTypes:{label:h.string.isRequired,entry:h.instanceOf(j),onRemove:h.func,highlighted:h.bool},_onRemove:function(o){o.preventDefault();this.props.onRemove(this.props.entry);},render:function(){var o;if(this.props.onRemove)o=k({type:"button",'aria-label':m._("Remove {item}",{item:this.props.label}),className:"_1z6_",size:"small",onClick:this._onRemove});var p=(("_59_o")+(this.props.highlighted?' '+"_59_r":''));return this.renderDraggableToken(this.transferPropsTo(i.DOM.span({className:p,label:null},i.DOM.span({'aria-label':this.props.label,title:this.props.label,className:"_5aab"},this.props.label),o)));}});e.exports=n;});
__d("AdsTargetingTokenizer.react",["AbstractTokenizer.react","WebAsyncSearchSource","React","XUITokenizerToken.react","XUITypeaheadView.react","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={ViewRenderer:k,TokenRenderer:j,useLayer:true},n=i.createClass({displayName:'AdsTargetingTokenizer',propTypes:{onDataUpdate:i.PropTypes.func.isRequired,uri:i.PropTypes.string.isRequired,queryData:i.PropTypes.object,placeholder:i.PropTypes.string,initialEntries:i.PropTypes.array,smallInput:i.PropTypes.bool},getDefaultProps:function(){return {queryData:{}};},getInitialState:function(){return {entries:this.props.initialEntries||[]};},componentWillMount:function(){this._createSearchSource(this.props);},componentWillReceiveProps:function(o){if(o.initialEntries)this.setState({entries:o.initialEntries});this._createSearchSource(o);},_createSearchSource:function(o){this._searchSource=new h({queryRequests:[{uri:o.uri,data:o.queryData}]});},_onAdd:function(o){var p=this.state.entries;p.push(o);this.setState({entries:p});this.props.onDataUpdate(p,o);},_onRemove:function(o){var p=this.state.entries,q=p.indexOf(o);p.splice(q,1);this.setState({entries:p});this.props.onDataUpdate(p,o);},getEntries:function(){return this.state.entries;},render:function(){var o=(("_59_m")+(' '+"_557c")+(this.props.smallInput?' '+"_p63":''));return (i.DOM.div({className:o},g({'data-testid':this.props['data-testid'],className:"_59_n",entries:this.state.entries,onAddEntryAttempt:this._onAdd,onRemoveEntryAttempt:this._onRemove,placeholder:this.props.placeholder,presenter:m,searchSource:this._searchSource})));}});e.exports=n;});
__d("AdsTargetingKeywordTypeahead.react",["AdsTargetingAdmarketKeywordCategory","AdsTargetingTokenizer.react","AdsTargetingConstants","React","fbt"],function(a,b,c,d,e,f,g,h,i,j,k){var l=j.createClass({displayName:'AdsTargetingKeywordTypeahead',propTypes:{onDataUpdate:j.PropTypes.func.isRequired,initialEntries:j.PropTypes.array,maxEntries:j.PropTypes.number,smallInput:j.PropTypes.bool},getDefaultProps:function(){return {maxEntries:i.MAX_KEYWORDS_ENTRIES};},_onChange:function(m,n){this.props.onDataUpdate('keywords',m);},render:function(){var m={kw_filter:[g.KEYWORD_CATEGORY_WIKI],max_results:this.props.maxEntries,show_coverage:false,kw_as_value:true,no_wiki_hashtag:true},n="Enter 4-10 interests...";return (j.DOM.div(null,h({uri:i.KEYWORD_URI,queryData:m,onDataUpdate:this._onChange,placeholder:n,initialEntries:this.props.initialEntries,smallInput:this.props.smallInput})));}});e.exports=l;});
__d("AdsTargetingKeywordSelector.react",["AdsTargetingConstants","AdsTargetingKeywordSuggestions.react","AdsTargetingKeywordTypeahead.react","React","SearchableEntry","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=j.createClass({displayName:'AdsTargetingKeywordSelector',_tokenizerEntries:[],propTypes:{onDataUpdate:j.PropTypes.func.isRequired,initialEntries:j.PropTypes.array,maxEntries:j.PropTypes.number,primedDao:j.PropTypes.object,smallInput:j.PropTypes.bool},getDefaultProps:function(){return {initialEntries:[]};},getInitialState:function(){return {suggestions:[],entries:this.props.initialEntries};},_initializeSelector:function(n){this._tokenizerEntries=n.initialEntries;this._fetchKeywordSuggestions(this._getKeywordTokens(n.initialEntries));},componentWillMount:function(){if(!this.props.initialEntries.length)return;this._initializeSelector(this.props);},componentWillReceiveProps:function(n){this._initializeSelector(n);},_updateSuggestions:function(n){this.setState({suggestions:n});},_onDataUpdate:function(n,o){this._fetchKeywordSuggestions(this._getKeywordTokens(o));this._tokenizerEntries=o;this.props.onDataUpdate(n,o);},_handleSuggestionClick:function(n){var o=new k({uniqueID:'#'+n.text,title:n.text});this._tokenizerEntries.push(o);this._onDataUpdate('keywords',this._tokenizerEntries);},_fetchKeywordSuggestions:function(n){if(!this.props.primedDao||!n.length){this._updateSuggestions([]);return;}this.props.primedDao.fetch.adKeywordSuggestion.one(this._renderKeywordSuggestions,{keyword_list:n,offset:0,include_algorithm:false,limit:2*g.MAX_KEYWORDS_SUGGESTIONS});},_getKeywordTokens:function(n){var o=[],p=n.length;for(var q=0;q<p;q++)o.push(n[q].getUniqueID());return o;},_renderKeywordSuggestions:function(n){if(!n||!n.length){n=[];}else n=n.filter(function(o){if(!o.name||o.name.charAt(0)!='#')return false;o.text=o.uid=o.name;if(o.text.charAt(0)=='#')o.text=o.text.slice(1);return true;}).slice(0,g.MAX_KEYWORDS_SUGGESTIONS);this._updateSuggestions(n);},render:function(){var n=(("mts")+(!this.state.suggestions?' '+"hidden_elem":''));return (j.DOM.div(null,i({onDataUpdate:this._onDataUpdate,initialEntries:this.state.entries,maxEntries:this.props.maxEntries,smallInput:this.props.smallInput}),j.DOM.div({className:n},h({suggestions:this.state.suggestions,onSuggestionClick:this._handleSuggestionClick}))));}});e.exports=m;});
__d("AdsTargetingLocationSelector.react",["XUISelector.react","AdsTargetingTokenizer.react","AdsTargetingTogglerSafeMixin","AdsTargetingConstants","React","XUIGrayText.react","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=g.Option,p=[5,10,25,50],q=k.createClass({displayName:'AdsTargetingLocationSelector',mixins:[i],propTypes:{onDataUpdate:k.PropTypes.func.isRequired,initialTokenizer:k.PropTypes.number,initialTokens:k.PropTypes.object,initialRadius:k.PropTypes.number,defaultCountries:k.PropTypes.string,smallInput:k.PropTypes.bool},getDefaultProps:function(){return {initialTokenizer:j.LOCATION_TYPES.Countries,initialTokens:{},initialRadius:p[0]};},getInitialState:function(){var r=this.props.initialTokenizer;return {countryRestriction:this._getCountryRestrictionFromProps(this.props),tokenizerShown:r,hasTokens:!!(this.props.initialTokens[this._getKeyString(r)]&&this.props.initialTokens[this._getKeyString(r)].length),radiusSelected:this.props.initialRadius};},componentWillReceiveProps:function(r){this.setStateSafe({tokenizerShown:r.initialTokenizer,countryRestriction:this._getCountryRestrictionFromProps(r),hasTokens:this._hasTokens(r)});},_hasTokens:function(r){var s=this.props.initialTokenizer;return Boolean(this.props.initialTokens[this._getKeyString(s)]&&this.props.initialTokens[this._getKeyString(s)].length);},_hasInitialRegions:function(r){return (r.initialTokenizer===j.LOCATION_TYPES.Regions&&r.initialTokens.regions&&r.initialTokens.regions.length);},_getCountryRestrictionFromProps:function(r){if(!this._hasInitialRegions(r))return null;return r.initialTokens.regions[0].getSubtitle();},_getKeyString:function(r){switch(r){case j.LOCATION_TYPES.Countries:return 'countries';case j.LOCATION_TYPES.Regions:return 'regions';case j.LOCATION_TYPES.Cities:return 'cities';}},_getLocationEntries:function(r){return this.refs[this._getKeyString(r)].getEntries();},_onSelectorChange:function(r){var s=r.value,t=this._getLocationEntries(s);this.setStateSafe({tokenizerShown:s,hasTokens:!!t.length,countryRestriction:null});this.props.onDataUpdate(this._getKeyString(s),t);},_onEntriesUpdate:function(r,s){if(this.state.tokenizerShown===j.LOCATION_TYPES.Regions)this._onRegionDataUpdate(r,s);this.setStateSafe({hasTokens:!!r.length});this.props.onDataUpdate(this._getKeyString(this.state.tokenizerShown),r);},_onRadiusChange:function(r){this.setStateSafe({radiusSelected:r.value});this.props.onDataUpdate(j.TARGETING_SPEC_KEYS.RADIUS,r.value);},_onRegionDataUpdate:function(r,s){if(r.length){this.setStateSafe({countryRestriction:s.getSubtitle()});}else this.setStateSafe({countryRestriction:null});},_getCountriesTokenizer:function(){return (h({'data-testid':"country_token",uri:j.LOCATION_URIS[j.LOCATION_TYPES.Countries],onDataUpdate:this._onEntriesUpdate,initialEntries:this.props.initialTokens.countries,smallInput:this.props.smallInput,ref:"countries"}));},_getRegionsTokenizer:function(){var r={version:2};if(this.state.countryRestriction)r.whitelist_countries=this.state.countryRestriction;return (h({'data-testid':"region_token",uri:j.LOCATION_URIS[j.LOCATION_TYPES.Regions],onDataUpdate:this._onEntriesUpdate,queryData:r,initialEntries:this.props.initialTokens.regions,smallInput:this.props.smallInput,ref:"regions"}));},_getCitiesTokenizer:function(){return (h({'data-testid':"city_token",uri:j.LOCATION_URIS[j.LOCATION_TYPES.Cities],onDataUpdate:this._onEntriesUpdate,initialEntries:this.props.initialTokens.cities,smallInput:this.props.smallInput,ref:"cities"}));},_getCitiesRadiusSelector:function(){if(this.state.tokenizerShown!==j.LOCATION_TYPES.Cities)return null;var r=p.map(function(s){return (o({value:s,'data-testid':"within_"+s+"_miles"},n._("Within {radiusValue} miles",[n.param("radiusValue",s)])));});return (g({maxwidth:150,onChange:this._onRadiusChange,value:this.state.radiusSelected,className:"rfloat",'data-testid':"radius_selector"},r));},_getWarningMessage:function(){if(!this.props.defaultCountries)return null;var r=(("mts")+(this.state.hasTokens?' '+"hidden_elem":''));return (k.DOM.div({className:r},l(null,n._("If left blank, your ad will be delivered to {list_of_countries}.",[n.param("list_of_countries",this.props.defaultCountries)]))));},render:function(){var r=this.state,s=((r.tokenizerShown!=j.LOCATION_TYPES.Countries?"hidden_elem":'')),t=((r.tokenizerShown!=j.LOCATION_TYPES.Regions?"hidden_elem":'')),u=((r.tokenizerShown!=j.LOCATION_TYPES.Cities?"hidden_elem":''));return (k.DOM.div(null,k.DOM.div({className:"_5tpn"},g({'data-testid':"location_selector",onChange:this._onSelectorChange,value:r.tokenizerShown},o({'data-testid':"location_selector_country_item",value:j.LOCATION_TYPES.Countries},"Countries"),o({value:j.LOCATION_TYPES.Regions},"Regions"),o({'data-testid':"location_selector_city_item",value:j.LOCATION_TYPES.Cities},"Cities")),this._getCitiesRadiusSelector()),k.DOM.div({className:"_5tpn"},k.DOM.div({className:s},this._getCountriesTokenizer()),k.DOM.div({className:t},this._getRegionsTokenizer()),k.DOM.div({className:u},this._getCitiesTokenizer())),this._getWarningMessage()));}});e.exports=q;});
__d("BoostedPostTargetingSection.react",["AdsTargetingAgeSelector.react","AdsTargetingGenderSelector.react","AdsTargetingKeywordSelector.react","AdsTargetingLocationSelector.react","BoostedPostLabeledRow.react","BoostedPrimedDao","AdsTargetingConstants","React","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=n.createClass({displayName:'BoostedPostTargetingSection',propTypes:{adAccountID:n.PropTypes.string.isRequired,onDataUpdate:n.PropTypes.func.isRequired,audienceSelected:n.PropTypes.number.isRequired,initialData:n.PropTypes.object.isRequired,ageSelectorOptions:n.PropTypes.object.isRequired,locationSelectorOptions:n.PropTypes.object.isRequired},componentWillMount:function(){l.setAccountID(this.props.adAccountID);},_getInitialLocationTokenizer:function(){switch(this.props.initialData.targetingLevel){case 'country':return m.LOCATION_TYPES.Countries;case 'region':return m.LOCATION_TYPES.Regions;default:return m.LOCATION_TYPES.Cities;}},getLocationSelector:function(){var r="Location";return (k({label:r},j({onDataUpdate:this.props.onDataUpdate,initialTokenizer:this._getInitialLocationTokenizer(),initialTokens:this.props.locationSelectorOptions.targetingLocations,initialRadius:this.props.initialData.radius,defaultCountries:this.props.locationSelectorOptions.defaultCountries,smallInput:true})));},getAgeSelector:function(){var r=this.props.ageSelectorOptions,s="Age";return (k({label:s},g({minSelectableAge:r.minSelectableAge,maxSelectableAge:r.maxSelectableAge,initialMinAge:this.props.initialData.age.ageMin,initialMaxAge:this.props.initialData.age.ageMax,onDataUpdate:this.props.onDataUpdate})));},getGenderSelector:function(){var r="Gender";return (k({label:r},h({onDataUpdate:this.props.onDataUpdate,initialGender:this.props.initialData.gender})));},getKeywordSelector:function(){var r="Interests";return (k({label:r},i({initialEntries:this.props.initialData.keywords,onDataUpdate:this.props.onDataUpdate,primedDao:l.getDaoForCurrentAccount(),smallInput:true})));},render:function(){var r=(("_3ja")+(this.props.audienceSelected===m.AUDIENCE.Grouper?' '+"hidden_elem":''));return (n.DOM.div({className:r},this.getLocationSelector(),this.getAgeSelector(),this.getGenderSelector(),this.getKeywordSelector()));}});e.exports=q;});
__d("BoostedPostCreateFlyoutBody.react",["Arbiter","BoostedPostSection.react","BoostedPostSpecs","BoostedPostLabeledRow.react","BoostedPostTargetingAudienceSelector.react","BoostedPostTargetingSection.react","PromotedPostConstants","React","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=n.createClass({displayName:'BoostedPostCreateFlyoutBody',propTypes:{adAccountID:n.PropTypes.string.isRequired,boostedPostSpecs:n.PropTypes.instanceOf(i),hasAudienceBuilder:n.PropTypes.bool.isRequired,audienceInfoOptions:n.PropTypes.object.isRequired,locationSelectorOptions:n.PropTypes.object.isRequired,ageSelectorOptions:n.PropTypes.object.isRequired},componentDidMount:function(){this.subscribeGlobalEvents();},getInitialState:function(){return {audienceSelected:this.props.audienceInfoOptions.selectedAudience,isAlreadyTargeted:this.props.audienceInfoOptions.isAlreadyTargeted};},updateTargetingSpec:function(q,r){switch(q){case 'audience':var s=parseInt(r,10);this.setState({audienceSelected:s});this.props.boostedPostSpecs.setAudience(s);break;case 'cities':this.props.boostedPostSpecs.setLocation(this._getLocationSpecs('city',r));break;case 'countries':this.props.boostedPostSpecs.setLocation(this._getLocationSpecs('country',r));break;case 'regions':this.props.boostedPostSpecs.setLocation(this._getLocationSpecs('region',r));break;case 'radius':this.props.boostedPostSpecs.setRadius(r);break;case 'minimum_age':this.props.boostedPostSpecs.setMinAge(r);break;case 'maximum_age':this.props.boostedPostSpecs.setMaxAge(r);break;case 'gender':this.props.boostedPostSpecs.setGender(r);break;case 'keywords':this.props.boostedPostSpecs.setKeywords(this._getTokens(r));break;}},_getLocationSpecs:function(q,r){var s={},t=this._getTokens(r);if(Object.keys(t).length===0)return null;s[q]=t;return s;},_getTokens:function(q){var r={},s=q.length;for(var t=0;t<s;t++)r[q[t].getUniqueID()]=q[t].getTitle();return r;},subscribeGlobalEvents:function(){g.subscribe(m.TARGETING_CHANGE,function(q,r){this.setState({isAlreadyTargeted:!!Object.keys(r.targeting_spec).length});}.bind(this));},getAudienceSelectorRow:function(){var q="Audience",r=this.props.audienceInfoOptions;return (j({label:q},k({selectedAudience:this.state.audienceSelected,showCustomAudience:r.showCustomAudience,isAlreadyTargeted:this.state.isAlreadyTargeted,isInComposer:r.isInComposer,onDataUpdate:this.updateTargetingSpec})));},getTargetingSection:function(){if(this.state.isAlreadyTargeted||this.props.hasAudienceBuilder)return null;var q={targetingLevel:this.props.boostedPostSpecs.getTargetingLevel(),radius:this.props.boostedPostSpecs.getRadius(),age:this.props.boostedPostSpecs.getAgeRange(),gender:this.props.boostedPostSpecs.getGender(),keywords:this.props.boostedPostSpecs.getTokenizedKeywords()};return (l({adAccountID:this.props.adAccountID,onDataUpdate:this.updateTargetingSpec,audienceSelected:this.state.audienceSelected,initialData:q,ageSelectorOptions:this.props.ageSelectorOptions,locationSelectorOptions:this.props.locationSelectorOptions}));},render:function(){return (n.DOM.div(null,h({border:true},this.getAudienceSelectorRow(),this.getTargetingSection())));}});e.exports=p;});
__d("UFIEntStreamOrderingModeSelector.react",["InlineBlock.react","LoadingIndicator.react","React","XUISelector.react","cx"],function(a,b,c,d,e,f,g,h,i,j,k){var l=j.Option,m=i.createClass({displayName:'UFIEntStreamOrderingModeSelector',getInitialState:function(){var n=null;this.props.orderingmodes.map(function(o){if(o.selected)n=o;});return {selectedMode:n};},onSelectorChange:function(n){this.props.orderingmodes.map(function(o){if(o.value===n.value)this.setState({selectedMode:o});}.bind(this));this.props.onOrderChanged(n.value);},render:function(){var n=null;if(this.props.currentOrderingMode!=this.state.selectedMode.value)n=h({className:"UFIOrderingModeSelectorLoading",color:"white",size:"small"});var o=this.props.orderingmodes,p=[],q;for(var r=0;r<o.length;r++){var s=o[r];p.push(l({key:s.value,value:s.value},s.name));if(s.selected)q=s.value;}return (i.DOM.div({className:"UFIOrderingModeSelector"},n,g(null,j({className:"UFIOrderingModeSelectorPopover",onChange:this.onSelectorChange,suppressed:true,size:"small",initialValue:q},p))));}});e.exports=m;});