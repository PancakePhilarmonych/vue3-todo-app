(function(t){function e(e){for(var s,i,c=e[0],r=e[1],l=e[2],d=0,m=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,c=1;c<n.length;c++){var r=n[c];0!==a[r]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/v3-todo-app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"066e":function(t,e,n){"use strict";n("f30a")},"2fb4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2fb4");var s=n("7a23"),a=(n("99af"),{class:"container"});function o(t,e,n,o,i,c){var r=Object(s["n"])("list"),l=Object(s["n"])("draggable"),u=Object(s["n"])("base-input");return Object(s["j"])(),Object(s["d"])("div",a,[Object(s["f"])(l,{class:"list-draggable",list:i.lists,options:{group:"lists"},group:"lists","ghost-class":"ghost",onChange:c.updateListNames},{default:Object(s["q"])((function(){return[(Object(s["j"])(!0),Object(s["d"])(s["a"],null,Object(s["m"])(i.lists,(function(t,e){return Object(s["j"])(),Object(s["c"])(r,{ref:"list-".concat(e),"list-index":e,key:"key-".concat(e,"-").concat(c.getGeneratedId()),list:t,style:Object(s["i"])(c.setlistColorVariable(t.color)),onAddNewTaskName:c.addNewTaskName,onChangeListName:c.changeListName,onRemoveItem:c.removeItem,onRemoveList:function(t){return c.removeList(e)}},null,8,["list-index","list","style","onAddNewTaskName","onChangeListName","onRemoveItem","onRemoveList"])})),128))]})),_:1},8,["list","onChange"]),Object(s["f"])(u,{modelValue:i.newListName,"onUpdate:modelValue":e[0]||(e[0]=function(t){return i.newListName=t}),placeholder:"+ Add new list",onOnEnterHandler:c.addNewList},null,8,["modelValue","onOnEnterHandler"])])}n("b64b"),n("159b"),n("b0c0"),n("a434"),n("7db0"),n("d3b7"),n("25f0");var i={red:"#e74c3c",red2:"#c0392b",yellow:"#f1c40f",yellow2:"#f39c12",blue:"#3498db",blue2:"#2980b9",green:"#2ecc71",green2:"#27ae60",purple:"#9b59b6",purple2:"#8e44ad",orange:"#e67e22",orange2:"##d35400"},c=n("7d42"),r=["placeholder"];function l(t,e,n,a,o,i){return Object(s["r"])((Object(s["j"])(),Object(s["d"])("input",{class:"card card-input",placeholder:n.placeholder,"onUpdate:modelValue":e[0]||(e[0]=function(t){return i.value=t}),type:"text",onKeyup:e[1]||(e[1]=Object(s["s"])((function(){return i.onEnter&&i.onEnter.apply(i,arguments)}),["enter"]))},null,40,r)),[[s["p"],i.value]])}var u={props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""}},emits:["update:modelValue","onEnterHandler"],methods:{onEnter:function(){this.$emit("onEnterHandler")}},computed:{value:{get:function(){return this.modelValue},set:function(t){this.$emit("update:modelValue",t)}}}},d=n("d959"),m=n.n(d),f=m()(u,[["render",l]]);Object(s["l"])("data-v-43220cea");var p={class:"list"},h={class:"card title"},b={class:"options"},j={class:"inputs"},O={class:"icon"},v={class:"options"},g={class:"inputs"},L=["onClick"],N=["onUpdate:modelValue","onBlur","onKeyup"],k={class:"icon"},w=["onClick"];function y(t,e,n,a,o,i){var c=Object(s["n"])("icon-trash"),r=Object(s["n"])("draggable"),l=Object(s["n"])("base-input");return Object(s["j"])(),Object(s["d"])("div",p,[Object(s["e"])("div",h,[Object(s["e"])("div",b,[Object(s["e"])("div",j,[Object(s["e"])("button",{ref:"list-name-button-".concat(n.list.name),onClick:e[0]||(e[0]=function(t){return i.showListInput("".concat(n.list.name))})},Object(s["o"])(o.listName),513),Object(s["r"])(Object(s["e"])("input",{class:"hidden",type:"text",ref:"list-name-input-".concat(n.list.name),"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.listName=t}),onBlur:e[2]||(e[2]=function(t){return i.showListButton("".concat(n.list.name))}),onKeyup:e[3]||(e[3]=Object(s["s"])((function(t){return i.showListButton("".concat(n.list.name))}),["enter"]))},null,544),[[s["p"],o.listName]])]),Object(s["e"])("div",O,[Object(s["e"])("div",{class:"remove",onClick:e[4]||(e[4]=function(){return i.removeList&&i.removeList.apply(i,arguments)})}," ✕ ")])])]),Object(s["f"])(r,{"item-key":"".concat(n.listIndex-o.taskName),options:{group:"tasks"},list:n.list.tasks,group:"tasks","ghost-class":"ghost",class:"cards"},{default:Object(s["q"])((function(){return[(Object(s["j"])(!0),Object(s["d"])(s["a"],null,Object(s["m"])(n.list.tasks,(function(t,e){return Object(s["j"])(),Object(s["d"])("div",{class:"card",key:"".concat(n.list.name,"-").concat(e)},[Object(s["e"])("div",v,[Object(s["e"])("div",g,[Object(s["e"])("button",{ref:"task-button-".concat("".concat(e,"-").concat(n.list.name)),onClick:function(t){return i.showInput("".concat(e,"-").concat(n.list.name))}},Object(s["o"])(t.name),9,L),Object(s["r"])(Object(s["e"])("input",{class:"hidden",ref:"task-input-".concat("".concat(e,"-").concat(n.list.name)),type:"text","onUpdate:modelValue":function(e){return t.name=e},name:"taskName",onBlur:function(t){return i.showButton("".concat(e,"-").concat(n.list.name))},onKeyup:Object(s["s"])((function(t){return i.showButton("".concat(e,"-").concat(n.list.name))}),["enter"])},null,40,N),[[s["p"],t.name]])]),Object(s["e"])("div",k,[Object(s["e"])("div",{class:"remove",onClick:function(t){return i.removeItem(e)}},[Object(s["f"])(c)],8,w)])])])})),128))]})),_:1},8,["item-key","list"]),Object(s["f"])(l,{modelValue:o.taskName,"onUpdate:modelValue":e[5]||(e[5]=function(t){return o.taskName=t}),placeholder:"+ Add new task",onOnEnterHandler:i.addNewTaskName},null,8,["modelValue","onOnEnterHandler"])])}Object(s["k"])();n("a9e3");var I={fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px"},x=Object(s["e"])("path",{fill:"white",d:"M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z"},null,-1),$=[x];function C(t,e){return Object(s["j"])(),Object(s["d"])("svg",I,$)}const V={};var B=m()(V,[["render",C]]),T={components:{draggable:c["a"],BaseInput:f,IconTrash:B},emits:["addNewTaskName","removeItem","changeListName","removeList"],props:{list:{type:Object,required:!0},listIndex:{type:Number,required:!0}},data:function(){return{taskName:"",listName:""}},mounted:function(){this.updateName()},methods:{updateName:function(){this.listName=this.list.name},removeItem:function(t){this.$emit("removeItem",[this.listIndex,t])},removeList:function(){this.$emit("removeList")},showInput:function(t){this.$refs["task-input-".concat(t)].classList.remove("hidden"),this.$refs["task-input-".concat(t)].focus(),this.$refs["task-button-".concat(t)].classList.add("hidden")},showButton:function(t){this.$refs["task-input-".concat(t)].classList.remove("hidden"),this.$refs["task-button-".concat(t)].classList.add("hidden")},showListInput:function(t){this.$refs["list-name-input-".concat(t)].classList.remove("hidden"),this.$refs["list-name-input-".concat(t)].focus(),this.$refs["list-name-button-".concat(t)].classList.add("hidden")},showListButton:function(t){this.$refs["list-name-input-".concat(t)].classList.remove("hidden"),this.$refs["list-name-button-".concat(t)].classList.add("hidden")},addNewTaskName:function(){this.taskName&&(this.$emit("addNewTaskName",[this.taskName,this.listIndex]),this.taskName="")}},watch:{listName:function(t){this.$emit("changeListName",[t,this.listIndex])}}},_=(n("90b2"),m()(T,[["render",y],["__scopeId","data-v-43220cea"]])),E={name:"App",components:{List:_,BaseInput:f,draggable:c["a"]},data:function(){return{newListName:"",newTaskName:"",lists:[{name:"Дом",tasks:[{name:"Уборка"},{name:"Купить продукты"}],color:"#2980b9"},{name:"Работа",tasks:[{name:"Уборка"},{name:"Купить продукты"}],color:"#27ae60"}]}},computed:{colorsKeys:function(){return Object.keys(i)}},methods:{updateListNames:function(){var t=this;this.lists.forEach((function(e,n){t.$refs["list-".concat(n)].updateName()}))},changeListName:function(t){this.lists[t[1]].name=t[0]},removeItem:function(t){this.lists[t[0]].tasks.splice(t[1],1),this.updateListNames()},removeList:function(t){this.lists.splice(t,1)},addNewList:function(){var t=this;this.newListName&&(this.lists.find((function(e){return e.name===t.newListName}))||(this.lists.push({name:this.newListName,tasks:[],color:this.getRandomColor()}),this.newListName=""))},addNewTaskName:function(t){this.lists[t[1]].tasks.push({name:t[0]})},randomColorIndex:function(){return Math.round(Math.random()*this.colorsKeys.length)},getRandomColor:function(){return this.colors[this.colorsKeys[this.randomColorIndex()]]},setlistColorVariable:function(t){return{"--list-color":t}},getGeneratedId:function(){return"_"+Math.random().toString(36).substr(2,9)}}},M=(n("066e"),m()(E,[["render",o]]));Object(s["b"])(M).mount("#app")},6669:function(t,e,n){},"90b2":function(t,e,n){"use strict";n("6669")},f30a:function(t,e,n){}});
//# sourceMappingURL=app.47e6829e.js.map