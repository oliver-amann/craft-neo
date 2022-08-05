(()=>{"use strict";var t={n:e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},d:(e,i)=>{for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=jQuery;var i=t.n(e);i().fn.insertAt=function(t,e){return this.each((function(){0===t?e.prepend(this):e.children().eq(t-1).after(this)}))};const s=Garnish;var n=t.n(s);const o=Craft;var a,l=t.n(o),r=new Uint8Array(16);function c(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}const h=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const d=function(t){return"string"==typeof t&&h.test(t)};for(var p=[],g=0;g<256;++g)p.push((g+256).toString(16).substr(1));const u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(p[t[e+0]]+p[t[e+1]]+p[t[e+2]]+p[t[e+3]]+"-"+p[t[e+4]]+p[t[e+5]]+"-"+p[t[e+6]]+p[t[e+7]]+"-"+p[t[e+8]]+p[t[e+9]]+"-"+p[t[e+10]]+p[t[e+11]]+p[t[e+12]]+p[t[e+13]]+p[t[e+14]]+p[t[e+15]]).toLowerCase();if(!d(i))throw TypeError("Stringified UUID is invalid");return i};const m=function(t,e,i){var s=(t=t||{}).random||(t.rng||c)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){i=i||0;for(var n=0;n<16;++n)e[i+n]=s[n];return e}return u(s)},y={_stack:[[]],enter(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("string"==typeof t&&(t=this.fromFieldName(t)),e){const e=this.getNamespace();e.push(...t),t=e}this._stack.push(t)},enterByFieldName(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.enter(this.fromFieldName(t),e)},leave(){return this._stack.length>1?this._stack.pop():this.getNamespace()},getNamespace(){return Array.from(this._stack[this._stack.length-1])},parse(t){return"string"==typeof t?t.indexOf("[")>-1?this.fromFieldName(t):t.indexOf("-")>-1?t.split("-"):t.indexOf(".")>-1?t.split("."):t:Array.from(t)},value(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";const i=this.getNamespace();return i.push(t),i.join(e)},fieldName(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const e=this.toFieldName();return e?e+t.replace(/([^'"[\]]+)([^'"]*)/,"[$1]$2"):t},toString(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-";return this.getNamespace().join(t)},toFieldName(){const t=this.getNamespace();switch(t.length){case 0:return"";case 1:return t[0]}return t[0]+"["+t.slice(1).join("][")+"]"},fromFieldName:t=>t.match(/[^[\]\s]+/g)||[]},k={settings:null},f=n().Base.extend({_selected:!1,init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},k,t),this._settings=t.settings},getSettings(){return this._settings},select(){this.toggleSelect(!0)},deselect(){this.toggleSelect(!1)},toggleSelect:function(t){this._selected="boolean"==typeof t?t:!this._selected,this.trigger("toggleSelect",{selected:this._selected})},isSelected(){return this._selected}}),B={namespace:[],html:"",layout:null,id:-1,blockId:null,blockName:""},_=n().Base.extend({_templateNs:[],init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},B,t),this._templateNs=y.parse(t.namespace),this._id=0|t.id,this._blockTypeId=t.blockTypeId,this.$container=i()(t.html).find(".layoutdesigner"),this.$container.removeAttr("id");const e=this.$container.find('input[name="fieldLayout"]');e.length>0&&(e[0].name="neoBlockType".concat(this._blockTypeId,"[fieldLayout]"),t.layout&&(e[0].value=JSON.stringify(t.layout))),y.enter(this._templateNs),this._fld=new(l().FieldLayoutDesigner)(this.$container,{customizableTabs:!0,customizableUi:!0}),y.leave();const s=()=>{const t="[data-type=benf-neo-fieldlayoutelements-ChildBlocksUiElement]",e=this._fld.$uiLibraryElements.filter(t),s=this._fld.$tabContainer.find(t);e.toggleClass("hidden",s.length>0||i()("body.dragging .draghelper"+t).length>0),s.hasClass("velocity-animating")&&s.removeClass("hidden")};s(),this._tabObserver=new window.MutationObserver(s),this._tabObserver.observe(this._fld.$tabContainer[0],{childList:!0,subtree:!0})},getId(){return this._id},getBlockTypeId(){return this._blockTypeId},getConfig(){const t={tabs:[]};for(const e of this._fld.config.tabs){const i=[];for(const t of e.elements){const e={};for(const i in t)e[i]="required"!==i||t[i]?t[i]:"";i.push(e)}t.tabs.push({elements:i,name:e.name.slice()})}return t}}),b={namespace:[],fieldLayout:null},w=f.extend({_templateNs:[],init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.base(t);const e=this.getSettings();t=Object.assign({},b,t),this._templateNs=y.parse(t.namespace),this._fieldLayout=t.fieldLayout,this.$container=this._generateBlockType(e);const i=this.$container.find("[data-neo-bt]");this.$nameText=i.filter('[data-neo-bt="text.name"]'),this.$handleText=i.filter('[data-neo-bt="text.handle"]'),this.$moveButton=i.filter('[data-neo-bt="button.move"]'),this.$actionsButton=i.filter('[data-neo-bt="button.actions"]'),this.$actionsMenu=i.filter('[data-neo-bt="container.menu"]'),this._actionsMenu=new(n().MenuBtn)(this.$actionsButton),this._actionsMenu.on("optionSelect",(t=>this["@actionSelect"](t))),this.addListener(this.$actionsButton,"click",(t=>t.stopPropagation())),e&&(e.on("change",(()=>this._updateTemplate())),e.on("destroy",(()=>this.trigger("destroy"))),this._updateTemplate()),this.deselect()},_generateBlockType(t){const e=t.getErrors(),s=(Array.isArray(e)?e:Object.keys(e)).length>0;return i()('\n      <div class="nc_sidebar_list_item'.concat(s?" has-errors":"",'">\n        <div class="label" data-neo-bt="text.name">').concat(t.getName(),'</div>\n        <div class="smalltext light code" data-neo-bt="text.handle">').concat(t.getHandle(),'</div>\n        <a class="move icon" title="').concat(l().t("neo","Reorder"),'" role="button" data-neo-bt="button.move"></a>\n        <button class="settings icon menubtn" title="').concat(l().t("neo","Actions"),'" role="button" type="button" data-neo-bt="button.actions"></button>\n        <div class="menu" data-neo-bt="container.menu">\n          <ul class="padded">\n            <li><a data-icon="field" data-action="copy">').concat(l().t("neo","Copy"),'</a></li>\n            <li class="disabled"><a data-icon="brush" data-action="paste">').concat(l().t("neo","Paste"),'</a></li>\n            <li><a data-icon="share" data-action="clone">').concat(l().t("neo","Clone"),'</a></li>\n            <li><a class="error" data-icon="remove" data-action="delete">').concat(l().t("neo","Delete"),"</a></li>\n          </ul>\n        </div>\n      </div>"))},getFieldLayout(){return this._fieldLayout},loadFieldLayout(){if(this._fieldLayout)return Promise.resolve();this.trigger("beforeLoadFieldLayout");const t=this.getSettings(),e=t.getFieldLayoutConfig(),i=t.getFieldLayoutId(),s=e?{layout:e}:{layoutId:i};return new Promise(((e,n)=>{l().sendActionRequest("POST","neo/configurator/render-field-layout",{data:s}).then((s=>{this._fieldLayout=new _({namespace:[...this._templateNs,this._id],html:s.data.html,id:i,blockTypeId:t.getId()}),this.trigger("afterLoadFieldLayout"),e()})).catch(n)}))},toggleSelect:function(t){this.base(t);const e=this.getSettings(),i=this.getFieldLayout(),s=this.isSelected();e&&e.$container.toggleClass("hidden",!s),i?i.$container.toggleClass("hidden",!s):s&&this.loadFieldLayout(),this.$container.toggleClass("is-selected",s)},_updateTemplate(){const t=this.getSettings();t&&(this.$nameText.text(t.getName()),this.$handleText.text(t.getHandle()),this.$container.toggleClass("is-child",!t.getTopLevel()))},"@actionSelect"(t){const e=i()(t.option);if(!e.hasClass("disabled"))switch(e.attr("data-action")){case"copy":this.trigger("copy");break;case"paste":this.trigger("paste");break;case"clone":this.trigger("clone");break;case"delete":window.confirm(l().t("neo","Are you sure you want to delete this block type?"))&&this.getSettings().destroy()}}}),v=n().Base.extend({$container:new(i()),_sortOrder:0,getSortOrder(){return this._sortOrder},setSortOrder(t){const e=this._sortOrder;this._sortOrder=0|t,e!==this._sortOrder&&this.trigger("change",{property:"sortOrder",oldValue:e,newValue:this._sortOrder})},getFocusElement:()=>new(i()),destroy(){var t;null===(t=this.$foot)||void 0===t||t.remove(),this.trigger("destroy")},_refreshSetting(t,e,i){(i=!n().prefersReducedMotion()&&("boolean"!=typeof i||i))?e?t.hasClass("hidden")&&t.removeClass("hidden").css({opacity:0,marginBottom:-t.outerHeight()}).velocity({opacity:1,marginBottom:24},"fast"):t.hasClass("hidden")||t.css({opacity:1,marginBottom:24}).velocity({opacity:0,marginBottom:-t.outerHeight()},"fast",(()=>{t.addClass("hidden")})):t.toggleClass("hidden",!e).css("margin-bottom",e?24:"")}}),$={namespace:[],id:null,sortOrder:0,fieldLayoutId:null,fieldLayoutConfig:null,name:"",handle:"",description:"",minBlocks:0,maxBlocks:0,maxSiblingBlocks:0,minChildBlocks:0,maxChildBlocks:0,topLevel:!0,childBlocks:null,childBlockTypes:[],html:"",js:"",errors:{}},C=v.extend({_templateNs:[],_childBlockTypes:[],_initialised:!1,$sortOrderInput:new(i()),$nameInput:new(i()),$handleInput:new(i()),$descriptionInput:new(i()),$minBlocksInput:new(i()),$maxBlocksInput:new(i()),$maxSiblingBlocksInput:new(i()),$minChildBlocksInput:new(i()),$maxChildBlocksInput:new(i()),init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},$,t),this._templateNs=y.parse(t.namespace),this._childBlockTypes=[],this._childBlocks=t.childBlocks,this._id=t.id,this._fieldLayoutId=t.fieldLayoutId,this._fieldLayoutConfig=t.fieldLayoutConfig,this._errors=t.errors,this._js=t.js,this._settingsChildBlockTypes=t.childBlockTypes,this.$container=i()(t.html);const e=this.$container.find("[data-neo-bts]");this.$sortOrderInput=e.filter('[data-neo-bts="input.sortOrder"]'),this.$nameInput=e.filter('[data-neo-bts="input.name"]'),this.$handleInput=e.filter('[data-neo-bts="input.handle"]'),this.$descriptionInput=e.filter('[data-neo-bts="input.description"]'),this.$minBlocksInput=e.filter('[data-neo-bts="input.minBlocks"]'),this.$maxBlocksInput=e.filter('[data-neo-bts="input.maxBlocks"]'),this.$maxSiblingBlocksInput=e.filter('[data-neo-bts="input.maxSiblingBlocks"]'),this.$minChildBlocksInput=e.filter('[data-neo-bts="input.minChildBlocks"]'),this.$minChildBlocksContainer=e.filter('[data-neo-bts="container.minChildBlocks"]'),this.$maxChildBlocksInput=e.filter('[data-neo-bts="input.maxChildBlocks"]'),this.$maxChildBlocksContainer=e.filter('[data-neo-bts="container.maxChildBlocks"]'),this.$topLevelInput=e.filter('[data-neo-bts="input.topLevel"]'),this.$topLevelContainer=e.filter('[data-neo-bts="container.topLevel"]'),this.$childBlocksInput=e.filter('[data-neo-bts="input.childBlocks"]'),this.$childBlocksContainer=e.filter('[data-neo-bts="container.childBlocks"]'),this.$deleteButton=e.filter('[data-neo-bts="button.delete"]'),this.setSortOrder(t.sortOrder),this.setName(t.name),this.setHandle(t.handle),this.setDescription(t.description),this.setMinBlocks(t.minBlocks),this.setMaxBlocks(t.maxBlocks),this.setMaxSiblingBlocks(t.maxSiblingBlocks),this.setMinChildBlocks(t.minChildBlocks),this.setMaxChildBlocks(t.maxChildBlocks),this.setTopLevel(t.topLevel)},initUi(){if(!this._initialised){this.$foot=i()(this._js),n().$bod.append(this.$foot),l().initUiElements(this.$container),this._childBlocksSelect=this.$childBlocksInput.data("checkboxSelect"),this._topLevelLightswitch=this.$topLevelInput.data("lightswitch"),this._handleGenerator=new(l().HandleGenerator)(this.$nameInput,this.$handleInput),""!==this.getHandle()&&this._handleGenerator.stopListening();for(const t of this._settingsChildBlockTypes)this.addChildBlockType(t);this.setChildBlocks(this._childBlocks),this.addListener(this.$nameInput,"keyup change",(()=>{this.setName(this.$nameInput.val()),this._handleGenerator.listening&&setTimeout((()=>this.setHandle(this.$handleInput.val())),200)})),this.addListener(this.$handleInput,"keyup change textchange",(()=>this.setHandle(this.$handleInput.val()))),this.addListener(this.$descriptionInput,"keyup change textchange",(()=>this.setDescription(this.$descriptionInput.val()))),this.addListener(this.$minBlocksInput,"keyup change",(()=>this.setMinBlocks(this.$minBlocksInput.val()))),this.addListener(this.$maxBlocksInput,"keyup change",(()=>this.setMaxBlocks(this.$maxBlocksInput.val()))),this.addListener(this.$maxSiblingBlocksInput,"keyup change",(()=>this.setMaxSiblingBlocks(this.$maxSiblingBlocksInput.val()))),this.addListener(this.$minChildBlocksInput,"keyup change",(()=>this.setMinChildBlocks(this.$minChildBlocksInput.val()))),this.addListener(this.$maxChildBlocksInput,"keyup change",(()=>this.setMaxChildBlocks(this.$maxChildBlocksInput.val()))),this.addListener(this._topLevelLightswitch,"change",(()=>this.setTopLevel(this._topLevelLightswitch.on))),this.addListener(this.$deleteButton,"click",(()=>{window.confirm(l().t("neo","Are you sure you want to delete this block type?"))&&this.destroy()})),this.$childBlocksInput.on("change","input",(()=>this._refreshChildBlockSettings())),this._initialised=!0}},_generateChildBlocksCheckbox(t){y.enter(this._templateNs);const e=y.value("childBlock-"+t.getId(),"-"),s=y.fieldName("childBlocks");return y.leave(),i()('\n      <div>\n        <input type="checkbox" value="'.concat(t.getHandle(),'" id="').concat(e,'" class="checkbox" name="').concat(s,'[]" data-neo-btsc="input">\n        <label for="').concat(e,'" data-neo-btsc="text.label">').concat(t.getName(),"</label>\n      </div>"))},getFocusInput(){return this.$nameInput},getId(){return this._id},getFieldLayoutId(){return this._fieldLayoutId},getFieldLayoutConfig(){return Object.assign({},this._fieldLayoutConfig)},isNew(){return/^new/.test(this.getId())},getErrors(){return this._errors},setSortOrder(t){this.base(t),this.$sortOrderInput.val(this.getSortOrder())},getName(){return this._name},setName(t){if(t!==this._name){const e=this._name;this._name=t,this.$nameInput.val()!==this._name&&this.$nameInput.val(this._name),this.trigger("change",{property:"name",oldValue:e,newValue:this._name})}},getHandle(){return this._handle},setHandle(t){if(t!==this._handle){const e=this._handle;this._handle=t,this.$handleInput.val()!==this._handle&&this.$handleInput.val(this._handle),this.trigger("change",{property:"handle",oldValue:e,newValue:this._handle})}},getDescription(){return this._description},setDescription(t){if(t!==this._description){const e=this._description;this._description=t,this.$descriptionInput.val()!==this._description&&this.$descriptionInput.val(this._description),this.trigger("change",{property:"description",oldValue:e,newValue:this._description})}},getMinBlocks(){return this._minBlocks},setMinBlocks(t){this._setBlocksConstraint("minBlocks",t)},getMaxBlocks(){return this._maxBlocks},setMaxBlocks(t){this._setBlocksConstraint("maxBlocks",t)},getMaxSiblingBlocks(){return this._maxSiblingBlocks},setMaxSiblingBlocks(t){const e=this._maxSiblingBlocks,i=Math.max(0,0|t);0===i&&this.$maxSiblingBlocksInput.val(null),e!==i&&(this._maxSiblingBlocks=i,this._maxSiblingBlocks>0&&parseInt(this.$maxSiblingBlocksInput.val())!==this._maxSiblingBlocks&&this.$maxSiblingBlocksInput.val(this._maxSiblingBlocks),this.trigger("change",{property:"maxSiblingBlocks",oldValue:e,newValue:this._maxSiblingBlocks}))},getMinChildBlocks(){return this._minChildBlocks},getMaxChildBlocks(){return this._maxChildBlocks},setMinChildBlocks(t){this._setBlocksConstraint("minChildBlocks",t)},setMaxChildBlocks(t){this._setBlocksConstraint("maxChildBlocks",t)},_setBlocksConstraint(t,e){const i="_".concat(t),s="$".concat(t,"Input"),n=this[i],o=Math.max(0,0|e);0===o&&this[s].val(null),n!==o&&(this[i]=o,this[i]>0&&parseInt(this[s].val())!==this[i]&&this[s].val(this[i]),this.trigger("change",{property:t,oldValue:n,newValue:this[i]}))},getTopLevel(){return this._topLevel},setTopLevel(t){const e=this._topLevel,i=!!t;e!==i&&(this._topLevel=i,this._topLevelLightswitch&&this._topLevelLightswitch.on!==this._topLevel&&(this._topLevelLightswitch.on=this._topLevel,this._topLevelLightswitch.toggle()),this.trigger("change",{property:"topLevel",oldValue:e,newValue:this._topLevel}))},getChildBlocks(){const t=this._childBlocksSelect,e=[];var s;return void 0===t?!0===this._childBlocks||Array.from(null!==(s=this._childBlocks)&&void 0!==s?s:[]):!!t.$all.prop("checked")||(t.$options.each((function(t){const s=i()(this);s.prop("checked")&&e.push(s.val())})),e.length>0&&e)},setChildBlocks(t){const e=this._childBlocksSelect;if(!0===t||"*"===t)e.$all.prop("checked",!0),e.onAllChange();else if(Array.isArray(t)){e.$all.prop("checked",!1);for(const i of t)e.$options.filter('[value="'.concat(i,'"]')).prop("checked",!0)}else e.$all.prop("checked",!1),e.$options.prop("checked",!1);this._refreshChildBlockSettings(!1)},addChildBlockType(t){if(!this._childBlockTypes.includes(t)){const e=t.getSettings(),i=this._generateChildBlocksCheckbox(e);this._childBlockTypes.push(t),this.$childBlocksContainer.append(i),this._refreshChildBlocks();const s=this._childBlocksSelect,n=s.$all.prop("checked");s.$options=s.$options.add(i.find("input")),n&&s.onAllChange();const o=".childBlock"+this.getId();e.on("change"+o,(e=>this["@onChildBlockTypeChange"](e,t,i))),e.on("destroy"+o,(e=>this.removeChildBlockType(t)))}},removeChildBlockType(t){const e=this._childBlockTypes.indexOf(t);if(e>=0){this._childBlockTypes.splice(e,1);const i=t.getSettings(),s=this.$childBlocksContainer.children().eq(e);s.remove();const n=this._childBlocksSelect;n.$options=n.$options.remove(s.find("input"));const o=".childBlock"+this.getId();i.off(o),this._refreshChildBlocks()}},_refreshChildBlocks(){const t=Array.from(this._childBlockTypes),e=this.$childBlocksContainer.children(),i=i=>e.get(t.indexOf(i));this._childBlockTypes=this._childBlockTypes.sort(((t,e)=>t.getSettings().getSortOrder()-e.getSettings().getSortOrder())),e.remove();for(const t of this._childBlockTypes){const e=i(t);this.$childBlocksContainer.append(e)}},_refreshChildBlockSettings(t){this._refreshSetting(this.$minChildBlocksContainer,!!this.getChildBlocks(),t),this._refreshSetting(this.$maxChildBlocksContainer,!!this.getChildBlocks(),t)},"@onChildBlockTypeChange"(t,e,i){const s=i.find("[data-neo-btsc]"),n=s.filter('[data-neo-btsc="input"]'),o=s.filter('[data-neo-btsc="text.label"]');switch(t.property){case"name":o.text(t.newValue);break;case"handle":n.val(t.newValue);break;case"sortOrder":this._refreshChildBlocks()}}},{_totalNewBlockTypes:0,getNewId(){return"new".concat(this._totalNewBlockTypes++)}}),S={namespace:[]},L=f.extend({_templateNs:[],init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.base(t),t=Object.assign({},S,t);const e=this.getSettings();this._templateNs=y.parse(t.namespace),this.$container=this._generateGroup(e);const i=this.$container.find("[data-neo-g]");this.$nameText=i.filter('[data-neo-g="text.name"]'),this.$moveButton=i.filter('[data-neo-g="button.move"]'),e&&(e.on("change",(()=>this._updateTemplate())),e.on("destroy",(()=>this.trigger("destroy")))),this.deselect()},_generateGroup(t){var e;return i()('\n      <div class="nc_sidebar_list_item type-heading">\n        <div class="label" data-neo-g="text.name">'.concat(null!==(e=t.getName())&&void 0!==e?e:"",'</div>\n        <a class="move icon" title="').concat(l().t("neo","Reorder"),'" role="button" data-neo-g="button.move"></a>\n      </div>'))},toggleSelect:function(t){this.base(t);const e=this.getSettings(),i=this.isSelected();e&&e.$container.toggleClass("hidden",!i),this.$container.toggleClass("is-selected",i)},_updateTemplate(){const t=this.getSettings();t&&this.$nameText.text(t.getName())}}),I={namespace:[],id:null,sortOrder:0,name:"",alwaysShowDropdown:null,defaultAlwaysShowGroupDropdowns:!0},T=v.extend({_templateNs:[],$sortOrderInput:new(i()),$nameInput:new(i()),$handleInput:new(i()),$maxBlocksInput:new(i()),init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},I,t),this._templateNs=y.parse(t.namespace),this._id=t.id,this._alwaysShowDropdown=t.alwaysShowDropdown,this._defaultAlwaysShowGroupDropdowns=t.defaultAlwaysShowGroupDropdowns,this.$container=this._generateGroupSettings();const e=this.$container.find("[data-neo-gs]");this.$sortOrderInput=e.filter('[data-neo-gs="input.sortOrder"]'),this.$nameInput=e.filter('[data-neo-gs="input.name"]'),this.$deleteButton=e.filter('[data-neo-gs="button.delete"]'),this.$alwaysShowDropdownContainer=e.filter('[data-neo-gs="container.alwaysShowDropdown"]'),this.setSortOrder(t.sortOrder),this.setName(t.name),this.addListener(this.$nameInput,"keyup change",(()=>this.setName(this.$nameInput.val()))),this.addListener(this.$deleteButton,"click",(()=>{window.confirm(l().t("neo","Are you sure you want to delete this group?"))&&this.destroy()}))},_generateGroupSettings(){y.enter(this._templateNs);const t=y.fieldName("sortOrder"),e=y.value("name","-"),s=y.fieldName("name"),n=y.value("alwaysShowDropdown","-"),o=y.fieldName("alwaysShowDropdown");y.leave();const a=[{value:"show",label:l().t("neo","Show")},{value:"hide",label:l().t("neo","Hide")},{value:"global",label:this._defaultAlwaysShowGroupDropdowns?l().t("neo","Use global setting (Show)"):l().t("neo","Use global setting (Hide)")}],r=l().ui.createTextField({type:"text",id:e,name:s,label:l().t("neo","Name"),instructions:l().t("neo","This can be left blank if you just want an unlabeled separator."),value:this.getName()});return r.find("input").attr("data-neo-gs","input.name"),i()('\n      <div>\n      <input type="hidden" name="'.concat(t,'" value="').concat(this.getSortOrder(),'" data-neo-gs="input.sortOrder">\n      <div>\n        ').concat(i()('<div class="field">').append(r).html(),'\n        <div data-neo-gs="container.alwaysShowDropdown">\n          <div class="field">\n            ').concat(l().ui.createSelectField({label:l().t("neo","Always Show Dropdown?"),instructions:l().t("neo","Whether to show the dropdown for this group if it only has one available block type."),id:n,name:o,options:a,value:this._alwaysShowDropdown?"show":!1===this._alwaysShowDropdown?"hide":"global"}).html(),'\n          </div>\n        </div>\n      </div>\n      <hr>\n      <a class="error delete" data-neo-gs="button.delete">').concat(l().t("neo","Delete group"),"</a>\n    </div>"))},getFocusInput(){return this.$nameInput},getId(){return this._id},setSortOrder(t){this.base(t),this.$sortOrderInput.val(this.getSortOrder())},getName(){return this._name},setName(t){if(t!==this._name){const e=this._name;this._name=t,this.$nameInput.val(this._name),this._refreshAlwaysShowDropdown(),this.trigger("change",{property:"name",oldValue:e,newValue:this._name})}},getAlwaysShowDropdown(){return this._alwaysShowDropdown},_refreshAlwaysShowDropdown(t){this._refreshSetting(this.$alwaysShowDropdownContainer,!!this._name,t)}},{_totalNewGroups:0,getNewId(){return"new".concat(this._totalNewGroups++)}}),x={namespace:[],blockTypes:[],groups:[],blockTypeSettingsHtml:"",blockTypeSettingsJs:"",fieldLayoutHtml:""},N=n().Base.extend({_templateNs:[],_items:[],init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},x,t);const e=l().formatInputId(t.namespace),s=i()("#".concat(e,"-neo-configurator"));this.$container=s.children(".field").children(".input"),this._templateNs=y.parse(t.namespace),this._blockTypeSettingsHtml=t.blockTypeSettingsHtml,this._blockTypeSettingsJs=t.blockTypeSettingsJs,this._fieldLayoutHtml=t.fieldLayoutHtml,this._items=[];const o=this.$container.find("[data-neo]");this.$mainContainer=o.filter('[data-neo="container.main"]'),this.$sidebarContainer=o.filter('[data-neo="container.sidebar"]'),this.$blockTypesContainer=o.filter('[data-neo="container.blockTypes"]'),this.$settingsContainer=o.filter('[data-neo="container.settings"]'),this.$fieldLayoutContainer=o.filter('[data-neo="container.fieldLayout"]'),this.$blockTypeButton=o.filter('[data-neo="button.blockType"]'),this.$groupButton=o.filter('[data-neo="button.group"]'),this.$settingsButton=o.filter('[data-neo="button.settings"]'),this.$fieldLayoutButton=o.filter('[data-neo="button.fieldLayout"]'),this._itemSort=new(n().DragSort)(null,{container:this.$blockTypeItemsContainer,handle:'[data-neo-bt="button.move"], [data-neo-g="button.move"]',axis:"y",onSortChange:()=>this._updateItemOrder()});const a=[],r=[...this._templateNs,"blockTypes"],c=[...this._templateNs,"groups"];for(const e of t.blockTypes){const t=new C({namespace:[...r,e.id],sortOrder:e.sortOrder,id:e.id,name:e.name,handle:e.handle,description:e.description,minBlocks:e.minBlocks,maxBlocks:e.maxBlocks,maxSiblingBlocks:e.maxSiblingBlocks,minChildBlocks:e.minChildBlocks,maxChildBlocks:e.maxChildBlocks,topLevel:e.topLevel,html:e.settingsHtml,js:e.settingsJs,errors:e.errors,fieldLayoutId:e.fieldLayoutId,fieldLayoutConfig:e.fieldLayoutConfig,childBlockTypes:a.filter((t=>t instanceof w))}),s=new w({namespace:r,settings:t});s.on("copy.configurator",(()=>this._copyBlockType(s))),s.on("paste.configurator",(()=>this._pasteBlockType())),s.on("clone.configurator",(()=>this._createBlockTypeFrom(s))),s.on("beforeLoadFieldLayout.configurator",(()=>this.$fieldLayoutContainer.append(i()('<span class="spinner"/></span>')))),s.on("afterLoadFieldLayout.configurator",(()=>{this.$fieldLayoutContainer.children(".spinner").remove(),this._addFieldLayout(s.getFieldLayout())})),a.push(s)}for(const e of t.groups){const i=new T({namespace:[...c,e.id],sortOrder:e.sortOrder,id:e.id,name:e.name,alwaysShowDropdown:e.alwaysShowDropdown,defaultAlwaysShowGroupDropdowns:t.defaultAlwaysShowGroupDropdowns}),s=new L({namespace:c,settings:i});a.push(s)}for(const t of a.sort(((t,e)=>t.getSettings().getSortOrder()-e.getSettings().getSortOrder())))this.addItem(t);for(const e of this.getBlockTypes()){const i=e.getSettings(),s=t.blockTypes.find((t=>t.handle===i.getHandle()));i.setChildBlocks(s.childBlocks)}const h=()=>{const t=!window.localStorage.getItem("neo:copyBlockType");for(const e of this.getBlockTypes())e.$actionsMenu.find('[data-action="paste"]').parent().toggleClass("disabled",t)};h(),this.addListener(document,"visibilitychange.configurator",h),this.selectTab("settings"),this.addListener(this.$blockTypeButton,"click","@newBlockType"),this.addListener(this.$groupButton,"click","@newGroup"),this.addListener(this.$settingsButton,"click",(()=>this.selectTab("settings"))),this.addListener(this.$fieldLayoutButton,"click",(()=>this.selectTab("fieldLayout")))},addItem(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;const i=t.getSettings();if(this._insertAt(t.$container,e),this._itemSort.addItems(t.$container),i&&(this.$settingsContainer.append(i.$container),t instanceof w&&i.initUi()),this.$mainContainer.removeClass("hidden"),this.addListener(t.$container,"click","@selectItem"),t.on("destroy.configurator",(()=>this.removeItem(t,!1))),t instanceof w&&this._addFieldLayout(t.getFieldLayout()),this._items.push(t),this._updateItemOrder(),t instanceof w)for(const e of this.getBlockTypes()){const i=e.getSettings();i&&i.addChildBlockType(t)}this.trigger("addItem",{item:t,index:e})},_addFieldLayout(t){t&&this.$fieldLayoutContainer.append(t.$container)},removeItem(t,e){if(e="boolean"==typeof e&&e){const e=l().t("neo","Are you sure you want to delete this {type}?",{type:t instanceof w?"block type":t instanceof L?"group":"item"});window.confirm(e)&&this.removeItem(t,!1)}else{const e=t.getSettings();if(this._itemSort.removeItems(t.$container),t.$container.remove(),e&&e.$container.remove(),t instanceof w){const e=t.getFieldLayout();e&&e.$container.remove()}this.removeListener(t.$container,"click"),t.off(".configurator"),this._updateItemOrder(),0===this._items.length&&this.$mainContainer.addClass("hidden"),this.trigger("removeItem",{item:t})}},getItems(){return Array.from(this._items)},getItemByElement(t){return this._items.find((e=>e.$container.is(t)))},getSelectedItem(){return this._items.find((t=>t.isSelected()))},selectItem(t,e){e="boolean"!=typeof e||e;const i=t?t.getSettings():null;for(const e of this._items){const i=e===t;if(e.toggleSelect(i),i){const t=!(e instanceof w);this.$fieldLayoutButton.toggleClass("hidden",t),t&&this.selectTab("settings")}}e&&i&&!n().isMobileBrowser()&&setTimeout((()=>i.getFocusInput().focus()),100)},getBlockTypes(){return this._items.filter((t=>t instanceof w))},getGroups(){return this._items.filter((t=>t instanceof L))},selectTab(t){this.$settingsContainer.toggleClass("hidden","settings"!==t),this.$fieldLayoutContainer.toggleClass("hidden","fieldLayout"!==t),this.$settingsButton.toggleClass("is-selected","settings"===t),this.$fieldLayoutButton.toggleClass("is-selected","fieldLayout"===t)},_getNewBlockTypeSettingsHtml(t,e){return this._blockTypeSettingsHtml.replace(/__NEOBLOCKTYPE_ID__/g,t).replace(/__NEOBLOCKTYPE_SORTORDER__/,e)},_getNewBlockTypeSettingsJs(t){return this._blockTypeSettingsJs.replace(/__NEOBLOCKTYPE_ID__/g,t)},_getNewFieldLayoutHtml(){return this._fieldLayoutHtml.replace(/&quot;uid&quot;:&quot;([a-f0-9-]+)&quot;/,"&quot;uid&quot;:&quot;".concat(m(),"&quot;"))},_updateItemOrder(){const t=[];this._itemSort.$items.each(((e,i)=>{const s=this.getItemByElement(i);if(s){const i=s.getSettings();i&&i.setSortOrder(e+1),t.push(s)}})),this._items=t},_createBlockTypeFrom(t){const e=[...this._templateNs,"blockTypes"],s=C.getNewId(),n=this.getSelectedItem(),o=n?n.getSettings().getSortOrder():-1;if(null===t){const t=new C({childBlockTypes:this.getBlockTypes(),id:s,namespace:[...e,s],sortOrder:this._items.length,html:this._getNewBlockTypeSettingsHtml(s,o),js:this._getNewBlockTypeSettingsJs(s)}),i=new _({blockTypeId:s,html:this._getNewFieldLayoutHtml(),namespace:[...e,s]});this._initBlockType(e,t,i,o)}else{const n=t.getSettings(),a=new C({childBlocks:n.getChildBlocks(),childBlockTypes:this.getBlockTypes(),handle:"".concat(n.getHandle(),"_").concat(Date.now()),id:s,minBlocks:n.getMinBlocks(),maxBlocks:n.getMaxBlocks(),minChildBlocks:n.getMinChildBlocks(),maxChildBlocks:n.getMaxChildBlocks(),maxSiblingBlocks:n.getMaxSiblingBlocks(),name:n.getName(),description:n.getDescription(),namespace:[...e,s],sortOrder:this._items.length,topLevel:n.getTopLevel(),html:this._getNewBlockTypeSettingsHtml(s,o),js:this._getNewBlockTypeSettingsJs(s)}),r=i()('<div class="nc_sidebar_list_item type-spinner"><span class="spinner"></span></div>');this._insertAt(r,o),t.loadFieldLayout().then((()=>{const i=t.getFieldLayout().getConfig();if(i.tabs.length>0){const t={layout:i};l().queue.push((()=>new Promise(((i,n)=>{l().sendActionRequest("POST","neo/configurator/render-field-layout",{data:t}).then((t=>{const n=new _({blockTypeId:s,html:t.data.html,namespace:[...e,s]});this.$blockTypesContainer.find(".type-spinner").remove(),this._initBlockType(e,a,n,o),i()})).catch(n)}))))}else{const t=new _({blockTypeId:s,html:this._getNewFieldLayoutHtml(),namespace:[...e,s]});this.$blockTypesContainer.find(".type-spinner").remove(),this._initBlockType(e,a,t,o)}})).catch((()=>l().cp.displayError(l().t("neo","Couldn’t create new block type."))))}},_initBlockType(t,e,i,s){const n=new w({namespace:t,settings:e,fieldLayout:i});this.addItem(n,s),this.selectItem(n),this.selectTab("settings"),n.on("copy.configurator",(()=>this._copyBlockType(n))),n.on("paste.configurator",(()=>this._pasteBlockType())),n.on("clone.configurator",(()=>this._createBlockTypeFrom(n)))},_copyBlockType(t){t.loadFieldLayout().then((()=>{const e=t.getSettings(),i={childBlocks:e.getChildBlocks(),handle:e.getHandle(),layout:t.getFieldLayout().getConfig(),minBlocks:e.getMinBlocks(),maxBlocks:e.getMaxBlocks(),minChildBlocks:e.getMinChildBlocks(),maxChildBlocks:e.getMaxChildBlocks(),maxSiblingBlocks:e.getMaxSiblingBlocks(),name:e.getName(),topLevel:e.getTopLevel()};window.localStorage.setItem("neo:copyBlockType",JSON.stringify(i)),this.getBlockTypes().forEach((t=>t.$actionsMenu.find('[data-action="paste"]').parent().removeClass("disabled")))})).catch((()=>l().cp.displayError(l().t("neo","Couldn’t copy block type."))))},_pasteBlockType(){const t=window.localStorage.getItem("neo:copyBlockType");if(!t)return;const e=JSON.parse(t),i=this.getBlockTypes().map((t=>t.getSettings().getHandle())),s=Array.isArray(e.childBlocks)?e.childBlocks.filter((t=>i.includes(t))):!!e.childBlocks||[],n=new C({childBlocks:s,childBlockTypes:this.getBlockTypes(),handle:e.handle,minBlocks:e.minBlocks,maxBlocks:e.maxBlocks,minChildBlocks:e.minChildBlocks,maxChildBlocks:e.maxChildBlocks,maxSiblingBlocks:e.maxSiblingBlocks,name:e.name,topLevel:e.topLevel}),o=new _({html:this._getNewFieldLayoutHtml(),layout:e.layout}),a=new w({settings:n,fieldLayout:o});this._createBlockTypeFrom(a)},_insertAt(t,e){const s=i()(t);e>=0&&e<this._items.length?s.insertAt(e,this.$blockTypesContainer):this.$blockTypesContainer.append(s)},"@newBlockType"(){this._createBlockTypeFrom(null)},"@newGroup"(){const t=[...this._templateNs,"groups"],e=T.getNewId(),i=new T({namespace:[...t,e],sortOrder:this._items.length,id:e}),s=new L({namespace:t,settings:i}),n=this.getSelectedItem(),o=n?n.getSettings().getSortOrder():-1;this.addItem(s,o),this.selectItem(s)},"@selectItem"(t){const e=this.getItemByElement(t.currentTarget);this.selectItem(e)}});var O;const F=null!==(O=window)&&void 0!==O?O:void 0,M=[];F.Neo={Configurator:N,configurators:M,createConfigurator(){const t=new N(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});return M.push(t),t}}})();
//# sourceMappingURL=neo-configurator.js.map