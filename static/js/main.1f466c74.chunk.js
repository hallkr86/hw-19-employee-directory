(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{41:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(2),a=s(12),c=s.n(a),l=s(13),o=s(14),i=s(17),h=s(16),u=s(15),m=s.n(u),j=function(){return console.log("getEmployee"),m.a.get("https://randomuser.me/api/?results=15&nat=us")};var d=function(e){return Object(n.jsx)("div",{className:"container",style:e.style,children:e.children})};var p=function(e){return Object(n.jsx)("form",{className:"search",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"employee",children:"Employee Name:"}),Object(n.jsx)("input",{value:e.value,onChange:e.handleInputChange,name:"search",type:"text",className:"form-control",placeholder:"Type in an employee name",id:"search"}),Object(n.jsx)("datalist",{id:"employees",children:e.employees.map((function(e){return Object(n.jsx)("option",{value:e.name.last},e.name.first)}))}),Object(n.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-success",children:"Search"})]})})};var b=function(e){return Object(n.jsx)("ul",{className:"list-group search-results",children:e.employees.length&&e.employees.map((function(e){return Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("img",{alt:"result.title",src:e.picture.large,className:"img-fluid"}),Object(n.jsxs)("h6",{children:["First Name: ",e.name.first]}),Object(n.jsxs)("h6",{children:["Last Name: ",e.name.last]}),Object(n.jsxs)("h6",{children:["ID: ",e.login.uuid]}),Object(n.jsxs)("h6",{children:["Email: ",e.email]}),Object(n.jsxs)("h6",{children:["Phone: ",e.phone]}),Object(n.jsxs)("h6",{children:["Age: ",e.dob.age]})]},e.id)}))})},y=s(18);var O=function(e){return Object(n.jsx)("div",{role:"alert",className:"alert alert-".concat(e.type," fade in"),style:Object(y.a)({width:"80%",margin:"0 auto",marginTop:18},e.style),children:e.children})},x=function(e){Object(i.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employees:[],filteredEmployees:[],error:""},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),j(e.state.search).then((function(t){if("error"===t.data.status)throw new Error(t.data.message);console.log({res:t}),e.setState({employees:t.data.results,error:""})})).catch((function(t){return e.setState({error:t.message})}))},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log("componentMounted"),j().then((function(t){return e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(d,{style:{minHeight:"80%"},children:[Object(n.jsx)("h2",{className:"text-center",children:"Search By Empolyee"}),Object(n.jsx)(O,{type:"success",style:{opacity:this.state.error?1:0,marginBottom:10},children:this.state.error}),Object(n.jsx)(p,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,employees:this.state.employees}),Object(n.jsx)(b,{employees:this.state.employees})]})})}}]),s}(r.Component),f=(s(41),function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"header text-center",children:"Employee Directory"}),Object(n.jsx)("br",{}),Object(n.jsx)(x,{})]})});var g=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(f,{}),Object(n.jsx)("p",{children:"Employee Directory"})]})};s(42);c.a.render(Object(n.jsx)(g,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.1f466c74.chunk.js.map