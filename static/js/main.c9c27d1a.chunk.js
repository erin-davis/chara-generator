(this["webpackJsonpchara-generator"]=this["webpackJsonpchara-generator"]||[]).push([[0],{31:function(e,a,t){e.exports=t(66)},36:function(e,a,t){},37:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),o=t(11),s=(t(36),t(3)),i=t(1),d=t(10),m=t(4),u=(t(37),function(e){var a=Object(n.useState)({player_name:""}),t=Object(s.a)(a,2),l=t[0],c=t[1],o=Object(i.f)(),u=function(a){a.preventDefault(),e.addNewPlayerName(l),c({player_name:""}),o.push("/use")};return r.a.createElement("div",{className:"landing-page"},r.a.createElement("header",null,r.a.createElement("h1",null,"Welcome to an Interactive Character Generator")),r.a.createElement("section",null,r.a.createElement("p",null,"This character generator is build with Dungeons and Dragons 5th Edition in mind. It can also be used for making random characters as well if you desire. I can't stop you from doing what you want. If you want to the Github repository for this web application, ",r.a.createElement("a",{href:"https://github.com/erin-davis/chara-generator",target:"_blank"},"click here"),"!")),r.a.createElement("section",null,r.a.createElement("h2",null,"Ready to go?"),r.a.createElement("form",{onSubmit:u},r.a.createElement("label",{htmlFor:"player_name"},"Your Name: "),r.a.createElement("input",{type:"text",name:"player_name",id:"player_name",value:l.player_name,placeholder:"Player Name",onChange:function(e){c(Object(m.a)(Object(m.a)({},l),{},Object(d.a)({},e.target.name,[e.target.value])))}})),r.a.createElement("button",{type:"submit",onClick:u},"Start")))}),h=t(5),p=t.n(h),f=t(12),g=t(15),b=t.n(g),y="https://www.dnd5eapi.co",E="https://www.behindthename.com/api/random.json?key=".concat("er706470300"),v=function(){var e=Object(f.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(y,"/api/classes"));case 3:return a=e.sent,e.abrupt("return",a.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log("there is an error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(y,"/api/races"));case 3:return a=e.sent,e.abrupt("return",a.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log("there is an error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(f.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"&number=6"));case 3:return a=e.sent,e.abrupt("return",a.data.names);case 7:e.prev=7,e.t0=e.catch(0),console.log("there is an error in the name api",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),x=[{index:1,id:"lawful_good",name:"Lawful Good",summary:"A lawful good character typically acts with compassion and always with honor and a sense of duty. However, lawful good characters will often regret taking any action they fear would violate their code, even if they recognize such action as being good. Such characters include gold dragons, righteous knights, paladins, and most dwarves."},{index:2,id:"neutral_good",name:"Neutral Good",summary:"A neutral good character typically acts altruistically, without regard for or against lawful precepts such as rules or tradition. A neutral good character has no problems with cooperating with lawful officials, but does not feel beholden to them. In the event that doing the right thing requires the bending or breaking of rules, they do not suffer the same inner conflict that a lawful good character would. Examples of this alignment include many celestials, some cloud giants, and most gnomes."},{index:3,id:"chaotic_good",name:"Chaotic Good",summary:"A chaotic good character does what is necessary to bring about change for the better, disdains bureaucratic organizations that get in the way of social improvement, and places a high value on personal freedom, not only for oneself, but for others as well. Chaotic good characters usually intend to do the right thing, but their methods are generally disorganized and often out of sync with the rest of society. Examples of this alignment include copper dragons, many elves, and unicorns."},{index:4,id:"lawful_neutral",name:"Lawful Neutral",summary:"A lawful neutral character typically believes strongly in lawful concepts such as honor, order, rules, and tradition, but often follows a personal code in addition to, or even in preference to, one set down by a benevolent authority. Examples of this alignment include a soldier who always follows orders, a judge or enforcer who adheres mercilessly to the letter of the law, a disciplined monk, and some wizards."},{index:5,id:"true_neutral",name:"True Neutral",summary:"A neutral character (also called \"true neutral\") is neutral on both axes and tends not to feel strongly towards any alignment, or actively seeks their balance. Druids frequently follow this dedication to balance and, under Advanced Dungeons & Dragons rules, were required to be this alignment. In an example given in the 2nd Edition Player's Handbook, a typical druid might fight against a band of marauding gnolls, only to switch sides to save the gnolls' clan from being totally exterminated. Examples of this alignment include lizardfolk, most druids, and many humans."},{index:6,id:"chaotic_neutral",name:"Chaotic Neutral",summary:"A chaotic neutral character is an individualist who follows their own heart and generally shirks rules and traditions. Although chaotic neutral characters promote the ideals of freedom, it is their own freedom that comes first; good and evil come second to their need to be free. Examples of this alignment include many barbarians and rogues, and some bards."},{index:7,id:"lawful_evil",name:"Lawful Evil",summary:"A lawful evil character sees a well-ordered system as being easier to exploit than to necessarily follow. Examples of this alignment include tyrants, devils, corrupt officials, undiscriminating mercenary types who have a strict code of conduct, blue dragons, and hobgoblins."},{index:8,id:"neutral_evil",name:"Neutral Evil",summary:"A neutral evil character is typically selfish and has no qualms about turning on allies-of-the-moment, and usually makes allies primarily to further their own goals. A neutral evil character has no compunctions about harming others to get what they want, but neither will they go out of their way to cause carnage or mayhem when they see no direct benefit for themselves. Another valid interpretation of neutral evil holds up evil as an ideal, doing evil for evil's sake and trying to spread its influence. Examples of the first type are an assassin who has little regard for formal laws but does not needlessly kill, a henchman who plots behind their superior's back, or a mercenary who readily switches sides if made a better offer. An example of the second type would be a masked killer who strikes only for the sake of causing fear and distrust in the community. Examples of this alignment include many drow, some cloud giants, and yugoloths."},{index:9,id:"chaotic_evil",name:"Chaotic Evil",summary:"A chaotic evil character tends to have no respect for rules, other people's lives, or anything but their own desires, which are typically selfish and cruel. They set a high value on personal freedom, but do not have much regard for the lives or freedom of other people. Chaotic evil characters do not work well in groups because they resent being given orders and usually do not behave themselves unless there is no alternative. Examples of this alignment include higher forms of undead (such as liches), violent killers who strike for pleasure rather than profit, demons, red dragons, and orcs."},{index:10,id:"unaligned",name:"Unaligned",summary:'Creatures not sapient enough to make decisions based on moral choices, but operating purely on instinct, are described as "unaligned".[16] Sharks are savage predators, for example, but they are not evil: they have no alignment.[16] The use of "unaligned" for creatures was introduced in the 4th edition, and retained in 5th edition.'}],N=[{index:"cha",name:"CHA",url:"/api/ability-scores/cha"},{index:"con",name:"CON",url:"/api/ability-scores/con"},{index:"dex",name:"DEX",url:"/api/ability-scores/dex"},{index:"int",name:"INT",url:"/api/ability-scores/int"},{index:"str",name:"STR",url:"/api/ability-scores/str"},{index:"wis",name:"WIS",url:"/api/ability-scores/wis"}],O=(t(61),function(e){var a=Object(i.f)(),t=Object(n.useState)({character_name:"",dnd_class:"",dnd_alignment:"",sex:"",dnd_race:"",chara_level:"",str:10,dex:10,con:10,int:10,cha:10,wis:10}),l=Object(s.a)(t,2),c=l[0],o=(l[1],Object(n.useState)([])),d=Object(s.a)(o,2),m=d[0],u=d[1],h=Object(n.useState)([]),g=Object(s.a)(h,2),b=g[0],y=g[1],E=Object(n.useState)({}),O=Object(s.a)(E,2),j=O[0],k=O[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,v();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=y,e.next=8,w();case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=k,e.next=13,_();case 13:e.t5=e.sent,(0,e.t4)(e.t5);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement("div",{className:"gen-use"},r.a.createElement("header",null,r.a.createElement("h1",null,"What do you want to create?")),r.a.createElement("div",{className:"creation-use"},r.a.createElement("section",{className:"NPC",onClick:j.length>0?function(){var t=function(e,a,t){var n=e.length,r=Math.floor(Math.random()*(n-t)+t);e[r].name?c[a]=e[r].name:c[a]=e[r]};c.chara_level=1;N.map((function(e){c[e.index]=Math.floor(16*Math.random()+5)})),t(b,"dnd_race",1),t(m,"dnd_class",1),t(j,"character_name",0),t(x,"dnd_alignment",1),function(){var e=Math.floor(3*Math.random());c.sex=["Male","Female","Other"][e]}(),e.addNewChara(c),e.addNewDndStats(c),a.push("/final")}:r.a.createElement("p",null,"Try again!")},r.a.createElement("h2",null,"Non-Player Character"),r.a.createElement("p",{className:"NPC-gen-desc"},"This will bring you to a fully randomly generated character! Use this one if you just want to make characters quickly!"),r.a.createElement("p",{className:"NPC-gen-desc"},"(At present, this only works with level one characters)")),r.a.createElement("section",{className:"PC",onClick:function(){a.push("/selection")}},r.a.createElement("h2",null,"Player Character"),r.a.createElement("p",{className:"PC-gen-desc"},"This will allow you to have a more indepth character creation experience! You can pick and choose information and stats you want your character to have."))))}),j=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-caret-up",width:"60",height:"60",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:" #F71735",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),r.a.createElement("path",{d:"M18 15l-6-6l-6 6h12"})),k=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-caret-down",width:"60",height:"60",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:" #F71735",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),r.a.createElement("path",{d:"M18 15l-6-6l-6 6h12",transform:"rotate(180 12 12)"})),S=(t(62),function(e){var a=Object(i.f)(),t=Object(n.useState)({str:10,dex:10,con:10,int:10,cha:10,wis:10}),l=Object(s.a)(t,2),c=l[0],o=l[1],u=function(e){e.preventDefault(),o(Object(m.a)(Object(m.a)({},c),{},Object(d.a)({},e.target.name,c[e.target.name]+1))),c[e.target.name]>19&&(alert("Sorry, this is the highest you can go!"),o(Object(m.a)(Object(m.a)({},c),{},Object(d.a)({},e.target.name,20))))},h=function(e){e.preventDefault(),o(Object(m.a)(Object(m.a)({},c),{},Object(d.a)({},e.target.name,c[e.target.name]-1))),c[e.target.name]<6&&(alert("Sorry, you can't go any lower than this!"),o(Object(m.a)(Object(m.a)({},c),{},Object(d.a)({},e.target.name,5))))};return r.a.createElement("div",{className:"ability-score-container"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addNewDndStats(c),o({str:10,dex:10,con:10,int:10,cha:10,wis:10}),a.push("/final")},onReset:function(e){alert("The numbers will be reset now."),o({str:10,dex:10,con:10,int:10,cha:10,wis:10})}},r.a.createElement("h2",null,"Input the ability scores you're looking for!"),N.map((function(e){return r.a.createElement("div",{className:"ability-scores"},r.a.createElement("h2",null,e.name),r.a.createElement("div",{className:"scores",max:"20"},r.a.createElement("h3",null,c[e.index],"(",Math.floor((c[e.index]-10)/2),")")),r.a.createElement("span",{className:"arrow-container"},r.a.createElement("button",{className:"bttn",name:e.index,onClick:u},r.a.createElement("i",{className:"up-arrow",alt:"Up Arrow to Increase ".concat(e.name)},j))),r.a.createElement("span",{className:"arrow-container"},r.a.createElement("button",{className:"bttn",name:e.index,onClick:h},r.a.createElement("i",{className:"down-arrow",alt:"Down Arrow to decrease ".concat(e.name)},k))))})),r.a.createElement("div",{className:"buttons-container"},r.a.createElement("button",{type:"reset"},"Reset"),r.a.createElement("button",{type:"submit"},"Submit"))))}),C=(t(63),function(e){var a=Object(i.f)(),t=Object(n.useState)({player_name:"",character_name:"",dnd_class:"",dnd_alignment:"",sex:"",dnd_race:"",chara_level:""}),l=Object(s.a)(t,2),c=l[0],o=l[1],u=Object(n.useState)([]),h=Object(s.a)(u,2),g=h[0],b=h[1],y=Object(n.useState)([]),E=Object(s.a)(y,2),N=E[0],O=E[1],j=Object(n.useState)({}),k=Object(s.a)(j,2),S=k[0],C=k[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,v();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=O,e.next=8,w();case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=C,e.next=13,_();case 13:e.t5=e.sent,(0,e.t4)(e.t5);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var M=function(e){o(Object(m.a)(Object(m.a)({},c),{},Object(d.a)({},e.target.name,[e.target.value])))};if("random"==c.dnd_class||"random"==c.dnd_alignment||"random"==c.dnd_race){if("random"==c.dnd_class){var A=g.length,I=Math.floor(Math.random()*(A-1)+1);c.dnd_class=g[I].name}if("random"==c.dnd_race){var D=N.length,P=Math.floor(Math.random()*(D-1)+1);c.dnd_race=N[P].name}if("random"==c.dnd_alignment){var F=x.length,T=Math.floor(Math.random()*(F-1)+1);c.dnd_alignment=x[T].name}}return r.a.createElement("div",{className:"dynamic-sheet"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addNewChara(c),o({player_name:"",character_name:"",dnd_class:"",dnd_alignment:"",sex:"",dnd_race:"",chara_level:""}),a.push("/ability-scores")},onReset:function(e){o({player_name:"",character_name:"",dnd_class:"",dnd_alignment:"",sex:"",dnd_race:"",chara_level:""})}},r.a.createElement("h2",null,"Start your character creation here!"),r.a.createElement("section",{className:"name-choice-container"},r.a.createElement("label",null,"Character Name"),r.a.createElement("select",{name:"character_name",id:"character_name",onChange:M},r.a.createElement("option",{value:""},"Pick a Name!"),S.length>0?S.map((function(e,a){return r.a.createElement("option",{value:e,key:a},e)})):null)),r.a.createElement("section",{className:"form-sex"},r.a.createElement("label",null,"Sex?"),r.a.createElement("article",null,r.a.createElement("input",{type:"radio",name:"sex",id:"female",value:"Female",onChange:M}),r.a.createElement("label",{htmlFor:"female"},"Female"),r.a.createElement("input",{type:"radio",name:"sex",id:"male",value:"Male",onChange:M}),r.a.createElement("label",{htmlFor:"male"},"Male"),r.a.createElement("input",{type:"radio",name:"sex",id:"other",value:"Other",onChange:M}),r.a.createElement("label",{htmlFor:"other"},"Other"))),r.a.createElement("section",{className:"chara-level"},r.a.createElement("label",{htmlFor:"chara_level"},"Level"),r.a.createElement("input",{className:"chara-level",type:"number",id:"chara_level",name:"chara_level",min:"1",max:"20",onChange:M})),r.a.createElement("section",{className:"dnd-class"},r.a.createElement("label",{htmlFor:"dnd_class"},"Class"),r.a.createElement("select",{name:"dnd_class",id:"dnd_class",onChange:M},r.a.createElement("option",{value:""},"Select a Class!"),g.map((function(e,a){return r.a.createElement("option",{value:e.name,key:a},e.name)})),r.a.createElement("option",{value:"random"},"Surprise Me!"))),r.a.createElement("section",{className:"dnd-race"},r.a.createElement("label",{htmlFor:"dnd_race"},"Race"),r.a.createElement("select",{name:"dnd_race",id:"dnd_race",onChange:M},r.a.createElement("option",{value:""},"Select a Race!"),N.map((function(e,a){return r.a.createElement("option",{value:e.name,key:a},e.name)})),r.a.createElement("option",{value:"random"},"Surprise Me!"))),r.a.createElement("section",{className:"dnd-align"},r.a.createElement("label",null,"Alignment"),r.a.createElement("select",{name:"dnd_alignment",id:"dnd_alignment",onChange:M},r.a.createElement("option",{value:""},"Choose Your Alignment!"),x.map((function(e){return r.a.createElement("option",{value:e.name,id:e.id},e.name)})),r.a.createElement("option",{value:"TBA"},"Decide Later"),r.a.createElement("option",{value:"random"},"Surprise Me!"))),r.a.createElement("section",{className:"buttons"},r.a.createElement("button",{type:"reset"},"Reset"),r.a.createElement("button",{type:"submit"},"Next"))))}),M=(t(64),function(e){var a=Object(i.f)();return r.a.createElement("div",{className:"final-chara-sheet"},r.a.createElement("div",{className:"character-sheet"},r.a.createElement("h1",null,"Here is your final character sheet! Be kind to your new character. Or don't! I'm not a cop."),r.a.createElement("div",{className:"character-details"},r.a.createElement("h3",null,"Player Name: "),r.a.createElement("p",null,e.savedPlayerName[0].player_name?"".concat(e.savedPlayerName[0].player_name):"No input name :("),r.a.createElement("h3",null,"Character Name: "),r.a.createElement("p",null,e.finalInput[0].character_name),r.a.createElement("h3",null,"Level: "),r.a.createElement("p",null,e.finalInput[0].chara_level),r.a.createElement("h3",null,"Class: "),r.a.createElement("p",null,e.finalInput[0].dnd_class),r.a.createElement("h3",null,"Race: "),r.a.createElement("p",null,e.finalInput[0].dnd_race),r.a.createElement("h3",null,"Morality Alignment: "),r.a.createElement("p",null,e.finalInput[0].dnd_alignment)),r.a.createElement("div",{className:"stats"},r.a.createElement("section",{className:"AC"},r.a.createElement("p",null,e.dndStats[0].dex>4?"".concat(10+Math.floor((e.dndStats[0].dex-10)/2)):null),r.a.createElement("h3",null,"Armor Class")),r.a.createElement("section",{className:"initiative"},r.a.createElement("p",null,e.dndStats[0].dex>4?"".concat(10+Math.floor((e.dndStats[0].dex-10)/2)):null),r.a.createElement("h3",null,"Initiative"))),r.a.createElement("div",{className:"ability-stats"},r.a.createElement("section",null,r.a.createElement("p",null,e.dndStats[0].str,e.dndStats[0].str>4?"(".concat(Math.floor((e.dndStats[0].str-10)/2),")"):null),r.a.createElement("h3",null,"Strength")),r.a.createElement("section",null,r.a.createElement("p",null,e.dndStats[0].dex,e.dndStats[0].dex>4?"(".concat(Math.floor((e.dndStats[0].dex-10)/2),")"):null),r.a.createElement("h3",null,"Dexterity")),r.a.createElement("section",null,r.a.createElement("p",null,e.dndStats[0].con,e.dndStats[0].con>4?"(".concat(Math.floor((e.dndStats[0].con-10)/2),")"):null),r.a.createElement("h3",null,"Constitution")),r.a.createElement("section",null,r.a.createElement("p",null,e.dndStats[0].int,e.dndStats[0].int>4?"(".concat(Math.floor((e.dndStats[0].int-10)/2),")"):null),r.a.createElement("h3",null,"Intellegence")),r.a.createElement("section",null,r.a.createElement("p",null,e.dndStats[0].cha,e.dndStats[0].cha>4?"(".concat(Math.floor((e.dndStats[0].cha-10)/2),")"):null),r.a.createElement("h3",null,"Charisma")),r.a.createElement("section",null,r.a.createElement("p",null,e.dndStats[0].wis,e.dndStats[0].wis>4?"(".concat(Math.floor((e.dndStats[0].wis-10)/2),")"):null),r.a.createElement("h3",null,"Wisdom"))),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){a.push("/")}},"Start Over!"))))});var A=function(e){Object(i.f)();var a=Object(n.useState)([{player_name:""}]),t=Object(s.a)(a,2),l=t[0],c=t[1],d=Object(n.useState)([{id:"",player_name:"",character_name:"",dnd_class:"",dnd_alignment:"",sex:"",dnd_race:"",chara_level:""}]),m=Object(s.a)(d,2),h=m[0],p=m[1],f=function(e){var a={id:Date.now(),dnd_class:e.dnd_class,player_level:e.level,player_name:e.player_name,character_name:e.character_name,dnd_alignment:e.dnd_alignment,sex:e.sex,dnd_race:e.dnd_race,chara_level:e.chara_level};p([a])},g=Object(n.useState)([{str:"",dex:"",con:"",int:"",cha:"",wis:""}]),b=Object(s.a)(g,2),y=b[0],E=b[1],v=function(e){var a={str:e.str,int:e.int,wis:e.wis,dex:e.dex,con:e.con,cha:e.cha};E([a])};return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(u,{addNewPlayerName:function(e){var a={player_name:e.player_name};c([a])}})),r.a.createElement(i.a,{path:"/use"},r.a.createElement(O,{addNewChara:f,addNewDndStats:v})),r.a.createElement(i.a,{path:"/final"},r.a.createElement(M,{finalInput:h,dndStats:y,savedPlayerName:l})),r.a.createElement(i.a,{path:"/ability-scores"},r.a.createElement(S,{addNewDndStats:v,finalInput:h})),r.a.createElement(i.a,{path:"/selection"},r.a.createElement(C,{addNewChara:f}))))};t(65);function I(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.b,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.c9c27d1a.chunk.js.map