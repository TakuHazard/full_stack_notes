(this.webpackJsonpdatafromserver=this.webpackJsonpdatafromserver||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=n(4),i=n(3),l=n(2),m=n.n(l),f=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},s=function(){var t=m.a.get("/api/notes"),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},p=function(t){return m.a.post("/api/notes",t).then((function(t){return t.data}))},d=function(t,e){return m.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},v=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},E=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null," Note app, Taku 2020"))},b=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(""),l=Object(i.a)(c,2),m=l[0],b=l[1],h=Object(a.useState)(!0),g=Object(i.a)(h,2),O=g[0],j=g[1],S=Object(a.useState)(null),k=Object(i.a)(S,2),y=k[0],w=k[1];Object(a.useEffect)((function(){s().then((function(t){o(t)}))}),[]);var N=O?n:n.filter((function(t){return t.important}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(v,{message:y}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return j(!O)}},"show",O?"important":"all")),r.a.createElement("ul",null,N.map((function(t){return r.a.createElement(f,{key:t.id,note:t,toggleImportance:function(){return function(t){"http://localhost:3001/notes/".concat(t);var e=n.find((function(e){return e.id===t})),a=Object(u.a)(Object(u.a)({},e),{},{important:!e.important});d(t,a).then((function(e){o(n.map((function(n){return n.id!==t?n:e})))})).catch((function(a){w("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),o(n.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:m,date:(new Date).toISOString(),important:Math.random()<.5};p(e).then((function(t){o(n.concat(t)),b("")}))}},r.a.createElement("input",{value:m,onChange:function(t){b(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(E,null))};n(37);c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a37c5d93.chunk.js.map