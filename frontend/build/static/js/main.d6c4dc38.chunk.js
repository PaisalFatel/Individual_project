(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(64)},35:function(e,t,n){},36:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(27),r=n.n(c),l=(n(35),n(3)),u=n(4),i=n(9),s=n(8),m=n(10),d=(n(36),n(13)),h=n(11),b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},o.a.createElement("div",null,o.a.createElement("a",{href:"http://www.google.com",className:"navbar-brand"},"Best Friend")),o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",null,o.a.createElement(d.b,{className:"nav-link",to:"/todo"},"Todo")),o.a.createElement("li",null,o.a.createElement(d.b,{className:"nav-link",to:"/add-todo"},"Add Todo")))))}}]),t}(a.Component),p=n(14),f=n.n(p),v="http://localhost:8080/todo",E=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"executeGetService",value:function(){return f.a.get(v)}},{key:"executePostService",value:function(e){return f.a.post(v,e)}},{key:"executeDeleteService",value:function(e){return f.a.delete(v+"/"+e)}}]),e}()),g={marginBottom:"7px"},j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={todoName:""},n.handleChange=function(e){n.setState({todoName:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),E.executePostService({todoName:n.state.todoName}).then(function(e){n.props.history.push("/todo")})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Add something I need to do"),o.a.createElement("form",{className:"form-group",onSubmit:this.handleSubmit},o.a.createElement("label",null,o.a.createElement("input",{className:"form-control",type:"text",name:"todoName",onChange:this.handleChange})),o.a.createElement("button",{style:g,className:"btn btn-success",type:"submit"},"Add Todo")))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},n.gotoBeanComponent=function(){n.props.history.push("/add-todo")},n.deleteTodo=function(e){E.executeDeleteService(e).then(function(e){n.setState({todos:e.data})})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.executeGetService().then(function(t){e.setState({todos:t.data})})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Todo Component"),o.a.createElement("div",null,o.a.createElement("ul",{className:"list-group"},this.state.todos.map(function(t){return o.a.createElement("li",{className:"list-group-item",key:t.id},"Todo: ",t.todoName," ",o.a.createElement("button",{className:"btn btn-danger float-right",onClick:function(){e.deleteTodo(t.id)}},"x"))}))),o.a.createElement("div",{className:"float-right"},o.a.createElement("button",{className:"btn btn-success ",onClick:this.gotoBeanComponent},"Add Todo")))}}]),t}(a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null),o.a.createElement("div",{className:"container"},o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/",exact:!0,component:O}),o.a.createElement(h.a,{path:"/todo",component:O}),o.a.createElement(h.a,{path:"/add-todo",component:j}))))))}}]),t}(a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(y,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.d6c4dc38.chunk.js.map