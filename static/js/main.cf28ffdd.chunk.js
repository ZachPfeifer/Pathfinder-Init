(this.webpackJsonpdd=this.webpackJsonpdd||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(6),o=a.n(l),r=(a(17),a(7)),c=a(8),s=a(11),u=a(9),m=a(1),d=a(10),v=(a(18),a(19),a(2)),h=a.n(v),b=[{id:h()(),name:"Zach",initiative:void 0,hitpoints:void 0,ac:void 0},{id:h()(),name:"Charles",initiative:void 0,hitpoints:void 0,ac:void 0},{id:h()(),name:"Gabe",initiative:void 0,hitpoints:void 0,ac:void 0},{id:h()(),name:"",initiative:void 0,hitpoints:void 0,ac:void 0}],f=[{rolls:void 0}],p=function(e){var t=e.label,a=e.type,n=e.value,l=e.onChange;return i.a.createElement("div",{className:"mycard"},i.a.createElement("label",null,t,i.a.createElement("input",{type:a,value:n,onChange:l})))},g=function(){return Math.floor(20*Math.random())+1},E=function(e){var t=e.id,a=e.name,n=e.initiative,l=e.hitpoints,o=e.ac,r=e.onNameChange,c=e.onInitiativeChange,s=e.onHitpointsChange,u=e.onAcChange,m=e.onRemoveElement;return i.a.createElement("div",{className:"mycard"},i.a.createElement(p,{label:"Name",type:"text",value:a,onChange:function(e){return r(t,e)}}),i.a.createElement("div",{id:"initiative"},i.a.createElement(p,{label:"Initiative",type:"number",value:n,onChange:function(e){return c(t,e)}}),i.a.createElement("button",{className:"btn btn-dark btn-sm",type:"button",onClick:function(){return c(t,{target:{value:g()}})}},"D20")),i.a.createElement(p,{label:"AC",type:"number",value:o,onChange:function(e){return u(t,e)}}),i.a.createElement(p,{label:"Hitpoints",type:"number",value:l,onChange:function(e){return s(t,e)}}),i.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){return m(t)}},"X"))},k=function(e){var t=e.rolls,a=e.onDiceRoll;return i.a.createElement("div",{className:"dice "},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 col-sm-12 d-flex justify-content-center"},i.a.createElement(p,{label:"Roll Results",type:"number",value:t,onChange:function(e){return a(e)}}))),i.a.createElement("hr",null),i.a.createElement("span",{className:"d-flex justify-content-center"},i.a.createElement("p",null,"Rolls:  "),i.a.createElement("button",{className:"btn btn-dark",onClick:function(){return a({target:{value:g()}})}},"D20"),i.a.createElement("button",{className:"btn btn-dark",onClick:function(){return a({target:{value:Math.floor(12*Math.random())+1}})}},"D12"),i.a.createElement("button",{className:"btn btn-dark",onClick:function(){return a({target:{value:Math.floor(10*Math.random())+1}})}},"D10"),i.a.createElement("button",{className:"btn btn-dark",onClick:function(){return a({target:{value:Math.floor(8*Math.random())+1}})}},"D8"),i.a.createElement("button",{className:"btn btn-dark",onClick:function(){return a({target:{value:Math.floor(6*Math.random())+1}})}},"D6"),i.a.createElement("button",{className:"btn btn-dark",onClick:function(){return a({target:{value:Math.floor(4*Math.random())+1}})}},"D4"),i.a.createElement("button",{className:"btn btn-dark",onClick:function(){return a({target:{value:Math.floor(100*Math.random())+1}})}},"%")))},N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={elements:b,diceRoll:f},a.updateName=a.updateName.bind(Object(m.a)(a)),a.updateInitiative=a.updateInitiative.bind(Object(m.a)(a)),a.updateHitpoints=a.updateHitpoints.bind(Object(m.a)(a)),a.updateAc=a.updateAc.bind(Object(m.a)(a)),a.addCard=a.addCard.bind(Object(m.a)(a)),a.removeElement=a.removeElement.bind(Object(m.a)(a)),a.updateRoll=a.updateRoll.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){localStorage.getItem("Players")&&this.setState({elements:JSON.parse(localStorage.getItem("Players"))})}},{key:"UNSAFE_componentDidMount",value:function(){localStorage.getItem("Players")?console.log("Using Local Storage for Player Info"):this.fetchData()}},{key:"UNSAFE_componentWillUpdate",value:function(e,t){localStorage.setItem("Players",JSON.stringify(t.elements))}},{key:"clearLocalStorage",value:function(){localStorage.removeItem("Players"),window.location.reload(!1)}},{key:"fetchData",value:function(){}},{key:"updateName",value:function(e,t){var a=t.target.value,n=this.state.elements,i=n.findIndex((function(t){return t.id===e}));n[i].name=a,this.setState({elements:n})}},{key:"updateInitiative",value:function(e,t){var a=this;clearTimeout(this.timeout_);var n=t.target.value,i=this.state.elements,l=i.findIndex((function(t){return t.id===e}));i[l].initiative=Number(n),this.setState({elements:i}),this.timeout_=setTimeout((function(){return a.sortElements()}),500)}},{key:"updateHitpoints",value:function(e,t){var a=t.target.value,n=this.state.elements,i=n.findIndex((function(t){return t.id===e}));n[i].hitpoints=Number(a),this.setState({elements:n})}},{key:"updateAc",value:function(e,t){var a=t.target.value,n=this.state.elements,i=n.findIndex((function(t){return t.id===e}));n[i].ac=Number(a),this.setState({elements:n})}},{key:"updateRoll",value:function(e){var t=e.target.value,a=this.state.diceRoll;a=t,this.setState({diceRoll:a})}},{key:"addCard",value:function(){var e=this.state.elements;e[e.length]={id:h()(),name:"player ".concat(e.length+1),initiative:void 0,hitpoints:void 0,ac:void 0},this.setState({elements:e.sort((function(e,t){return t.initiative-e.initiative}))})}},{key:"removeElement",value:function(e){var t=this.state.elements;t=t.filter((function(t){return t.id!==e})),this.setState({elements:t})}},{key:"sortElements",value:function(){var e=this.state.elements;this.setState({elements:e.sort((function(e,t){return t.initiative-e.initiative}))})}},{key:"render",value:function(){var e=this;console.log(h()()),console.log(this.state.elements),console.log(this.state.diceRoll);var t=this.state.elements,a=this.state.diceRoll;return i.a.createElement("div",{className:"container center"},i.a.createElement("div",{className:"card bg-light mb-3 d-flex justify-content-center"},i.a.createElement("h1",{className:"card-header"},"Pathfinder Initiative Tracker"),i.a.createElement("div",{className:"card-body "},i.a.createElement("h5",{className:"card-title"},"Initiatives:"),i.a.createElement("p",{className:"card-text "},t.map((function(t){return i.a.createElement(E,{key:t.key,name:t.name,initiative:t.initiative,hitpoints:t.hitpoints,ac:t.ac,onNameChange:e.updateName,onInitiativeChange:e.updateInitiative,onHitpointsChange:e.updateHitpoints,onAcChange:e.updateAc,onRemoveElement:e.removeElement,id:t.id})})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement(k,{rolls:a,onDiceRoll:this.updateRoll}))))),i.a.createElement("div",{className:"card-footer"},i.a.createElement("div",{className:"btn-container row"},i.a.createElement("button",{className:"btn btn-dark col-6",onClick:this.addCard},"+ Add Player"),i.a.createElement("button",{className:"btn btn-dark col-6",onClick:this.clearLocalStorage},"Clear Storage")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.cf28ffdd.chunk.js.map