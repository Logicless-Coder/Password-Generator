(this["webpackJsonppwd-gen"]=this["webpackJsonppwd-gen"]||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(3),c=a.n(l),r=(a(18),a(4)),o=a(5),i=a(12),h=a(10),m=a(9),d=a(6),p=(a(22),a(11)),u=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).generatePassword=function(){var e=[];if(n.state.lower)for(var t=97;t<123;t++)e.push(String.fromCharCode(t));if(n.state.upper)for(var a=65;a<91;a++)e.push(String.fromCharCode(a));if(n.state.digits)for(var s=48;s<58;s++)e.push(String.fromCharCode(s));if(n.state.symbols){for(var l=33;l<48;l++)e.push(String.fromCharCode(l));for(var c=58;c<65;c++)e.push(String.fromCharCode(c))}console.log(e);for(var r="",o=0;o<n.state.length;o++){r+=e[Math.floor(Math.random()*e.length)]}console.log(r),n.setState({pwd:r})},n.handleChange=function(e){var t=e.target.name;"lower"===t&&n.setState({lower:!n.state.lower}),"upper"===t&&n.setState({upper:!n.state.upper}),"digits"===t&&n.setState({digits:!n.state.digits}),"symbols"===t&&n.setState({symbols:!n.state.symbols})},n.state={pwd:"",length:12,lower:!0,upper:!0,digits:!0,symbols:!0,copySuccess:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"main"},s.a.createElement("h1",{className:"header"},"Generate a strong Password"),s.a.createElement("div",{className:"pwd-gen"},s.a.createElement("div",{className:"pwd-display"},s.a.createElement("input",{className:"pwd-field",type:"text",placeholder:"Generated password will be shown here",value:this.state.pwd}),s.a.createElement(d.CopyToClipboard,{text:this.state.pwd,className:"copy-button",onCopy:function(){return e.setState({copySuccess:!0})}},s.a.createElement("button",null,s.a.createElement(p.a,null))),s.a.createElement("div",{className:"copy-message"},this.state.copySuccess?s.a.createElement("span",null,"Copied."):null)),s.a.createElement("div",{className:"slider-box"},s.a.createElement("label",{className:"length-label"},this.state.length),s.a.createElement(m.a,{className:"slider",axis:"x",xstep:1,xmin:1,xmax:20,x:this.state.length,onChange:function(t){var a=t.x;return e.setState({length:parseInt(a)})},styles:{track:{backgroundColor:"rgba(163, 203, 56, 0.5)",width:200,height:20},active:{backgroundColor:"rgba(0, 148, 50,1.0)"}}})),s.a.createElement("div",{className:"conditions"},s.a.createElement("label",{className:"checkbox-label"},s.a.createElement("input",{type:"checkbox",className:"checkbox",name:"lower",onClick:this.handleChange,checked:this.state.lower}),"a - z"),s.a.createElement("label",{className:"checkbox-label"},s.a.createElement("input",{type:"checkbox",className:"checkbox",name:"upper",onClick:this.handleChange,checked:this.state.upper}),"A - Z"),s.a.createElement("label",{className:"checkbox-label"},s.a.createElement("input",{type:"checkbox",className:"checkbox",name:"digits",onClick:this.handleChange,checked:this.state.digits}),"0 - 9"),s.a.createElement("label",{className:"checkbox-label"},s.a.createElement("input",{type:"checkbox",className:"checkbox",name:"symbols",onClick:this.handleChange,checked:this.state.symbols}),"Symbols")),s.a.createElement("div",{className:"button-box"},s.a.createElement("button",{onClick:this.generatePassword,className:"generate-button"},"Generate"))))}}]),a}(n.Component);a(23);var b=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.7ddd02b6.chunk.js.map