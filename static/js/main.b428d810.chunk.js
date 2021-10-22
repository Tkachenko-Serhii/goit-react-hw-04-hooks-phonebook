(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{17:function(t,e,n){},2:function(t,e,n){t.exports={label:"Form_label__2TM9K",text:"Form_text__1QjmF",button:"Form_button__2kGHG",input:"Form_input__19hXF"}},27:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=(n(17),n(12)),i=n(3);var u=n(2),l=n.n(u),b=n(0);function m(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),m=u[0],j=u[1],d=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":j(a);break;default:return}};return Object(b.jsxs)("form",{id:"form",onSubmit:function(t){t.preventDefault(),e(r,m),o(""),j(""),document.getElementById("form").reset()},className:l.a.form,autoComplete:"off",children:[Object(b.jsxs)("label",{className:l.a.label,children:[Object(b.jsx)("span",{className:l.a.text,children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:d,className:l.a.input,value:r})]}),Object(b.jsxs)("label",{className:l.a.label,children:[Object(b.jsx)("span",{className:l.a.text,children:"Number"}),Object(b.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:d,className:l.a.input,value:m})]}),Object(b.jsx)("button",{type:"submit",className:l.a.button,children:"Add contact"})]})}var j=n(9),d=n.n(j);function f(t){var e=t.stateFilter,n=t.onChangeFilter;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:d.a.text,children:"Find contacts by name"}),Object(b.jsx)("input",{type:"text",name:"Find contact",onChange:function(t){return n(t.target.value)},value:e,className:d.a.input})]})}var O=n(7),x=n.n(O);function h(t){var e=t.contact,n=t.onContactDel;return Object(b.jsxs)("li",{className:x.a.item,children:[Object(b.jsxs)("p",{className:x.a.contact,children:[e.name,": ",e.number]}),Object(b.jsx)("button",{className:x.a.button,onClick:function(t){return n(t.target.id)},id:e.id,children:"Delete"})]})}function p(t){var e=t.contacts,n=t.onContactDel;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)(h,{contact:t,onContactDel:n},t.id)}))})}var _=n(11),v=n.n(_);function N(){var t=function(t,e){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(t)))&&void 0!==n?n:e})),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(r))}),[r,t]),[r,o]}("contacts",[]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),u=o[0],l=o[1],j=Object(a.useMemo)((function(){return n.filter((function(t){return t.name.toLowerCase().includes(u)}))}),[n,u]);return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"addForm",children:[Object(b.jsx)("h2",{className:"title",children:"Phonebook"}),Object(b.jsx)(m,{onSubmit:function(t,e){if(n.find((function(e){return e.name===t})))alert(t+" is already in contacts");else{var a={name:t,number:e,id:v.a.generate()};c([a].concat(Object(s.a)(n)))}}})]}),Object(b.jsx)("h2",{className:"title",children:"Contacts"}),Object(b.jsx)(f,{stateFilter:u,onChangeFilter:function(t){return l(t.toLowerCase())}}),Object(b.jsx)(p,{contacts:j,onContactDel:function(t){c(n.filter((function(e){return e.id!==t})))}})]})}o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={item:"ContactItem_item__1exkF",contact:"ContactItem_contact__2AWGN",button:"ContactItem_button__fopeN"}},9:function(t,e,n){t.exports={text:"Filter_text__15ObN",input:"Filter_input__2kvm1"}}},[[27,1,2]]]);
//# sourceMappingURL=main.b428d810.chunk.js.map