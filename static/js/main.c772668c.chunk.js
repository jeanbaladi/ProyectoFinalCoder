(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{35:function(t,e,c){},43:function(t,e,c){},44:function(t,e,c){"use strict";c.r(e);var n=c(2),i=c(25),r=c.n(i),a=c(9),o=c(7),s=c(4),j=c(15),l=Object(j.createContext)(),d=c(22),b=(c(45),"cmVhY3QtY29kZXJob3VzZS01M2E2My5maXJlYmFzZWFwcC5jb20="),u="cmVhY3QtY29kZXJob3VzZS01M2E2Mw==",O="cmVhY3QtY29kZXJob3VzZS01M2E2My5hcHBzcG90LmNvbQ==",h="NTU3MDcxNDAyNzIy",m="MTo1NTcwNzE0MDI3MjI6d2ViOmFmM2MzZmEyYzVmNDY3MDM4MjgwYmI=",x={apiKey:atob("QUl6YVN5Q1JCTVA0Y2RVbE1fNWlsdmdSNUcxZGJlckVLMEZaTjln"),authDomain:atob(b),projectId:atob(u),storageBucket:atob(O),messagingSenderId:atob(h),appId:atob(m)};console.log(x);var p=d.a.initializeApp(x),f=d.a.firestore(p),v=c(1),g=function(){var t=Object(j.useContext)(l),e=t.carrito,c=t.setCarrito,i=Object(n.useState)(""),r=Object(a.a)(i,2),o=r[0],s=r[1],d=Object(n.useState)(""),b=Object(a.a)(d,2),u=b[0],O=b[1],h=Object(n.useState)(""),m=Object(a.a)(h,2),x=m[0],p=m[1],g=[];return 0===e.length?Object(v.jsx)("h2",{children:"No hay productos en el carrito"}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"producto"}),Object(v.jsx)("ul",{children:e.map((function(t){var n=t.cantidad>t[0].stock?t[0].price*t[0].stock:t[0].price*t.cantidad;return g.push(n),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("li",{children:["producto: ",t[0].title]},t[0].id),Object(v.jsxs)("li",{children:["Costo por unidad: ",t[0].price," "]}),Object(v.jsxs)("li",{children:["cantidad: ",t.cantidad>t[0].stock?"".concat(t[0].stock," (stock maximo alcanzado)"):t.cantidad," total: ",n]}),Object(v.jsx)("li",{children:Object(v.jsx)("button",{onClick:function(){return n=t[0].id,void c(e.filter((function(t){return t[0].id!==n})));var n},children:"eliminar"})})]})}))}),Object(v.jsxs)("h3",{children:["total: ",g.reduce((function(t,e){return t+e}))]}),Object(v.jsx)("h5",{children:"Rellene los datos para confirmar compra:"}),Object(v.jsxs)("form",{onSubmit:function(t){t.preventDefault()},children:[Object(v.jsx)("label",{children:"Nombre Y Apellido:"}),Object(v.jsx)("input",{type:"text",value:o,onChange:function(t){var e=t.target;s(e.value)},required:!0}),Object(v.jsx)("label",{children:"Celular:"}),Object(v.jsx)("input",{type:"number",value:u,onChange:function(t){var e=t.target;O(e.value)},required:!0}),Object(v.jsx)("label",{children:"Email"}),Object(v.jsx)("input",{type:"email",value:x,onChange:function(t){var e=t.target;p(e.value)},required:!0}),0===o.length||0===u.length||0===x.length?Object(v.jsx)("input",{type:"submit"}):Object(v.jsx)("input",{type:"submit",onClick:function(t){var c=f.collection("ordenes"),n={buyer:{nombre:o,telf:u,email:x},items:[{carrito:e}],total:0===e.length?null:g.reduce((function(t,e){return t+e}))};c.add(n).then((function(t){console.log(t.id)})).catch((function(t){console.log(t)})),setTimeout((function(){window.location.reload()}),3e3)}})]})]})},k=(c(35),function(){var t=Object(j.useContext)(l).carrito.map((function(t){return t.cantidad})).length;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"flexi",children:[Object(v.jsx)(o.b,{to:"/Cart",children:Object(v.jsx)("span",{className:"material-icons",children:"add_shopping_cart"})}),Object(v.jsxs)(o.b,{to:"/Cart",children:["Total de productos: ",t]})]})})}),N=function(){return Object(v.jsx)("nav",{children:Object(v.jsx)("div",{className:"nav-wrapper",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/1",children:"Comida"})}),Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/2",children:"Articulos"})}),Object(v.jsx)("li",{children:Object(v.jsx)(k,{})})]})})})},C=c(12),y=(c(43),function(t){var e=t.name,c=t.img,n=t.id;return Object(v.jsx)("div",{className:"col m12 l4",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsxs)("div",{className:"card-image",children:[Object(v.jsx)("img",{src:c,alt:"..."}),Object(v.jsx)("span",{className:"card-title",children:e})]}),Object(v.jsx)("div",{className:"card-content",children:Object(v.jsx)("p",{children:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."})}),Object(v.jsx)("div",{className:"card-action",children:Object(v.jsx)(o.b,{to:"producto/".concat(n),children:"Ver detalles"})})]})})}),M=function(){var t=Object(n.useState)([]),e=Object(a.a)(t,2),c=e[0],i=e[1],r=Object(s.f)().id;return Object(n.useEffect)((function(){f.collection("items").get().then((function(t){var e=[];t.docs.forEach((function(t){var c=Object(C.a)({id:t.id},t.data());e.push(c),setTimeout((function(){i(e)}),1e3)}))})).catch((function(){console.log("Mal")}))}),[]),0===c.length?Object(v.jsx)("p",{children:"Cargando..."}):"1"===r?Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"cards-items row",children:c.filter((function(t){return 2===t.category})).map((function(t){return Object(v.jsx)(y,{name:t.title,img:t.image,id:t.id,stock:t.stock,price:t.price},t.id)}))})}):"2"===r?Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"cards-items row",children:c.filter((function(t){return 1===t.category})).map((function(t){return Object(v.jsx)(y,{name:t.title,img:t.image,id:t.id,stock:t.stock,price:t.price},t.id)}))})}):Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"cards-items row",children:c.map((function(t){return Object(v.jsx)(y,{name:t.title,img:t.image,id:t.id,stock:t.stock,price:t.price},t.id)}))})})},S=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(M,{})})},V=c(28),E=function(t){var e=t.onAdd,c=t.stock,i=Object(n.useState)(1),r=Object(a.a)(i,2),s=r[0],j=r[1],l=Object(n.useState)(!0),d=Object(a.a)(l,2),b=d[0],u=d[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:function(){j(s===c?s+0:s+1)},children:" + "}),Object(v.jsxs)("span",{children:[" ",s===c?"cantidad : ".concat(s," (stock maximo)"):"contador: ".concat(s)," "]}),Object(v.jsx)("button",{onClick:function(){j(1===s?s-0:s-1)},children:" - "}),!0===b?Object(v.jsx)("button",{onClick:function(){return u(!1),void e(s)},children:" Agregar al carrito "}):Object(v.jsx)("button",{children:Object(v.jsx)(o.b,{to:"/Cart",children:"Ver carrito"})})]})},I=function(){var t=Object(n.useState)([]),e=Object(a.a)(t,2),c=e[0],i=e[1];Object(n.useEffect)((function(){f.collection("items").get().then((function(t){var e=[];t.docs.forEach((function(t){var c=Object(C.a)({id:t.id},t.data());e.push(c),setTimeout((function(){i(e)}),1e3)}))})).catch((function(){console.log("Mal")}))}),[]);var r=Object(s.f)().id,o=c.filter((function(t){return t.id===r})),j=c.filter((function(t){return t.id===r})).map((function(t){return t.stock})),d=parseInt(j),b=Object(n.useContext)(l),u=b.setCarrito,O=b.carrito;return 0===c.length?Object(v.jsx)("p",{children:"cargando..."}):c.length>0?Object(v.jsxs)("div",{children:[c.filter((function(t){return t.id===r})).map((function(t){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{children:t.title},t.id),Object(v.jsxs)("p",{children:["stock disponible: ",t.stock]}),Object(v.jsxs)("p",{children:["precio: ",t.price]})]})})),Object(v.jsx)(E,{onAdd:function(t){var e=Object(C.a)(Object(C.a)({},o),{},{cantidad:t}),c=[];c=O.find((function(t){return t[0].id===r}))?O.map((function(e){return e[0].id===r?Object(C.a)(Object(C.a)({},e),{},{cantidad:e.cantidad+t}):e})):[].concat(Object(V.a)(O),[e]),u(c)},stock:d})]}):void 0},Y=function(){return Object(v.jsxs)(o.a,{children:[Object(v.jsx)(N,{}),Object(v.jsxs)(s.c,{children:[Object(v.jsx)(s.a,{path:"/Cart",component:g}),Object(v.jsx)(s.a,{path:"/producto/:id",component:I}),Object(v.jsx)(s.a,{path:"/",component:S,exact:!0}),Object(v.jsx)(s.a,{path:"/:id",component:S})]})]})},w=function(){var t=Object(n.useState)([]),e=Object(a.a)(t,2),c=e[0],i=e[1];return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(l.Provider,{value:{carrito:c,setCarrito:i},children:Object(v.jsx)(Y,{})})})};r.a.render(Object(v.jsx)(w,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c772668c.chunk.js.map