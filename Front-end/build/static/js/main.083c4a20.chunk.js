(this.webpackJsonprate=this.webpackJsonprate||[]).push([[0],{20:function(e,t,n){},27:function(e,t,n){e.exports=n(39)},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),l=n.n(c),o=(n(32),n(23)),i=n(15),s=n.n(i),u=n(24),m=n(8),h=n(9),d=n(11),p=n(10),E=n(13),b=n(12),f=(n(20),function(e){function t(e){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).call(this,e))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("email").addEventListener("keyup",(function(e){13===e.keyCode&&document.getElementById("start").click()}))}},{key:"render",value:function(){return r.a.createElement("div",{class:"App-header"},r.a.createElement("img",{class:"App-logo",src:"logo192.png"}),r.a.createElement("p",{id:"errMsg"}),r.a.createElement("div",{class:"input-group"},r.a.createElement("label",{class:"text-input-label",for:"username"},"Email"),r.a.createElement("div",{class:"input-btn"},r.a.createElement("input",{id:"email",type:"email",class:"text-input",placeholder:"user@institution.edu"}),r.a.createElement("button",{class:"btn btn-lg btn-start",id:"start",onClick:this.props.handleAuth},"Start"))))}}]),t}(r.a.Component)),g=n(16),v=n(6),j=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={authenticated:!1,userEmail:"none"},n.Authenticate=n.Authenticate.bind(Object(E.a)(n)),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"Authenticate",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.getElementById("email").value,a={email:n},e.next=4,fetch("http://localhost:5000/api/login",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:5000"}}).then((function(e){e.ok?e.json().then((function(e){r.setState({authenticated:!0,userEmail:e.email}),console.log(r.state.userEmail+"in handling"),console.log(r.state.authenticated)})):e.json().then((function(e){document.getElementById("errMsg").innerText=e.errMsg}))}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(g.a,null,r.a.createElement("div",{class:"App"},r.a.createElement("nav",{class:"navbar"},r.a.createElement(g.b,{to:"/signup"},r.a.createElement("div",null,r.a.createElement("h3",{class:"navitem"},"Sign Up")))),r.a.createElement("hr",null),r.a.createElement(v.d,null,r.a.createElement(O,{path:"/login",control:this.state.authenticated},r.a.createElement(f,{handleAuth:this.Authenticate})),r.a.createElement(v.b,{path:"/home",render:function(){return r.a.createElement(y,{userEmail:e.state.userEmail})}}))))}}]),t}(r.a.Component);function O(e){var t=e.control,n=e.children,a=Object(o.a)(e,["control","children"]);return console.log(t),r.a.createElement(v.b,Object.assign({},a,{render:function(){return t?r.a.createElement(v.a,{to:"/home"}):n}}))}var y=function(e){function t(e){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).call(this,e))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"App-header"},r.a.createElement("p",null,"Welcome, ",this.props.userEmail,"!"))}}]),t}(r.a.Component),k=j;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.083c4a20.chunk.js.map