(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{21:function(e,a,t){e.exports=t(31)},31:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),o=t(15),s=t(11),m=t(6),i=t(4),u=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"footer row"},r.a.createElement("div",{className:"blanco extra col-12 col-lg-5 offset-lg-1"},r.a.createElement("p",null,"Hecho con amor y bajo mucha presi\xf3n, by Luis \ud83e\udd37\ud83c\udfff\u200d\u2642\ufe0f y Sebasti\xe1n en Febrero de 2020.")),r.a.createElement("div",{className:"blanco extra col-12 col-lg-5"},r.a.createElement("a",{className:"linkPagina",href:"https://www.instagram.com/luchorb/",target:"_blank"},r.a.createElement("i",{className:"fa fa-instagram"})),r.a.createElement("a",{className:"linkPagina",href:"https://www.twitter.com/luchorb/",target:"_blank"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"linkPagina",href:"https://www.linkedin.com/in/luis-alfonso-ruiz-botero-b87305145/",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"linkPagina",href:"https://github.com/larruibo",target:"_blank"},r.a.createElement("i",{className:"fa fa-github"}))))))},p=function(e){var a=Object(n.useRef)();return console.log("answers",e.user),r.a.createElement("div",{className:"Answers"},r.a.createElement("h3",null," Lo que otros compa\xf1eros han opinado: "),r.a.createElement("form",{ref:a,onSubmit:function(t){t&&t.preventDefault();var n=new FormData(a.current).get("answer");e.onVote(e.question,n)},action:"questions/".concat(e._id,"/update"),method:"post"},e.answers.map((function(a,t){return r.a.createElement("div",{className:"itemAnswer",key:"answer"+a+e.question+t},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,a.username)," respondi\xf3:"," ")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9"},r.a.createElement("p",null,a.answer)),r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("label",{className:"labelAnswer"},r.a.createElement("input",{className:"inputElement",type:"radio",name:"answer",value:a.answer,required:!0})),r.a.createElement("div",{className:"answerElement"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("p",null,r.a.createElement("i",{class:"fa fa-heart gold"}),r.a.createElement("span",null," ",a.votes," likes ")))))))))))})),r.a.createElement("h4",null,"Puedes votar a la respuesta que consideras, resuelve la pregunta."," "),e.user?r.a.createElement("button",{type:"sumbit",className:"my-3 btn btn-primary"},"Vote"):r.a.createElement("button",{type:"",className:"my-3 btn btn-secondary",disabled:!0},"Inicia sesi\xf3n para responder")))},E=function(e){return r.a.createElement("div",{className:"Questions"},(console.log("questions",e.user),e.questions.map((function(a,t){return r.a.createElement("div",{key:"question"+t,className:"question"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(i.b,{to:"".concat(e.match.url,"/").concat(a._id)},a.question)),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"col-12 right"},r.a.createElement("span",null,a.programa)),r.a.createElement("div",{className:"col-12 right"},r.a.createElement("span",null,a.materia)))))}))))},d=function(e){var a=Object(n.useRef)(),t=function(t){t&&t.preventDefault();var n=new FormData(a.current),r=n.get("programa"),l=n.get("materia"),c=n.get("question"),o=n.get("descripcion");console.log("dentro de goCreateQuestion"),e.onCreateQuestion(r,l,c,o)};return r.a.createElement("div",{className:"FormCreateQuestion"},r.a.createElement("form",{ref:a,method:"POST",action:"create",onSubmit:t,id:"createQuestion"},r.a.createElement("label",{className:"form-group"},r.a.createElement("span",null,"Programa:"),r.a.createElement("input",{type:"text",className:"form-control",name:"programa",required:!0}),r.a.createElement("span",null,"Materia:"),r.a.createElement("input",{type:"text",className:"form-control",name:"materia",required:!0}),r.a.createElement("span",null,"Pregunta:"),r.a.createElement("input",{type:"text",className:"form-control",name:"question",required:!0}),r.a.createElement("span",null,"Descripci\xf3n:"),r.a.createElement("textarea",{name:"descripcion",form:"createQuestion",placeholder:"Incluye toda la informaci\xf3n que consideres necesaria.",required:!0}),e.user?r.a.createElement("button",{type:"button",onClick:t,className:"btn btn-primary"},"Pregunta!"):r.a.createElement("button",{type:"",className:"btn btn-secondary",disabled:!0},"Inicia sesi\xf3n para preguntar"))))},f=function(e){var a=Object(n.useRef)();return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{action:"/login",method:"post",ref:a},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("span",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",className:"form-control"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("span",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",className:"form-control"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"button",onClick:function(t){t&&t.preventDefault();var n=new FormData(a.current),r=n.get("username"),l=n.get("password");console.log("dentro de onLogin",r,l),e.onLogin(r,l)},className:"btn btn-primary"},"Login"))))},g=function(e){var a=Object(n.useRef)(),t=function(t){t&&t.preventDefault();var n=new FormData(a.current).get("answer");console.log("dentro de goCreateAnswer"),e.onCreateAnswer(e.question,n)};return r.a.createElement("div",{className:"FormCreateAnswer"},r.a.createElement("h3",null," O bien, responder la pregunta: "),r.a.createElement("form",{ref:a,onSumbit:t,method:"post",action:"/questions/".concat(e.question._id,"/createAnswer"),id:"createAnswer"},r.a.createElement("label",{className:"form-group"},r.a.createElement("span",null,"Tu respuesta:"),r.a.createElement("textarea",{name:"answer",form:"createAnswer",placeholder:"Escribe aqu\xed tu respuesta y ayuda a un compa\xf1ero.",required:!0}),e.user?r.a.createElement("button",{type:"button",onClick:t,className:"btn btn-primary"},"Responde!"):r.a.createElement("button",{type:"",className:"btn btn-secondary",disabled:!0},"Inicia sesi\xf3n para responder"))))},b=function(e){var a=Object(n.useRef)();return r.a.createElement("div",{className:"Register"},r.a.createElement("form",{action:"/register",method:"post",ref:a},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("span",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",className:"form-control"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("span",null,"Name:"),r.a.createElement("input",{type:"text",name:"name",className:"form-control"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("span",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",className:"form-control"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"sumbit",onSubmit:function(t){t&&t.preventDefault();var n=new FormData(a.current),r=n.get("username"),l=n.get("password"),c=n.get("name");console.log("dentro de onCreate",r,l,c),e.onRegister(r,l,c)},className:"btn btn-primary"},"Register"))))},v=function(e){var a=Object(n.useRef)(),t=Object(n.useRef)();return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("form",{id:"formSearch",ref:a},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Filtrar por programa",name:"filtro"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(t){t&&t.preventDefault();var n=new FormData(a.current).get("filtro");e.filtrarPrograma(n)}},"Filtrar")))),r.a.createElement("div",{className:"col-6"},r.a.createElement("form",{id:"formSearch2",ref:t},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Filtrar por materia",name:"filtro"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(a){a&&a.preventDefault();var n=new FormData(t.current).get("filtro");e.filtrarMateria(n)}},"Filtrar")))))},N=[],h=function(){var e=Object(n.useState)(N),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(null),h=Object(s.a)(c,2),w=h[0],y=h[1],q=Object(n.useState)(null),j=Object(s.a)(q,2),k=j[0],O=j[1];Object(n.useEffect)((function(){fetch("/getUser").then((function(e){return e.json()})).then((function(e){return y(e)}))}),[]),Object(n.useEffect)((function(){fetch("/getQuestions").then((function(e){return e.json()})).then((function(e){return l(N=e)}))}),[]);var P=function(e,a,t,n){console.log("dentro de onCreate",e,a,t,n);var r={programa:e,materia:a,question:t,descripcion:n};fetch("/create",{method:"POST",redirect:"follow",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(e){return console.log(e),window.location="/",window.location.href="/",O(e[0])}))},S=function(e,a){console.log("dentro de app creating Answer ",e,a);var t=Object(o.a)(e.answers);t.push({answer:a,votes:0,username:w.username}),e.answers=t,console.log(e.answers),O(e),fetch("/".concat(e._id,"/createAnswer"),{method:"POST",redirect:"follow",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return l(e)}))},C=function(e,a){l((function(t){var n=Object(o.a)(t),r=n.find((function(a){return a.question===e})),l=r.answers.map((function(e){return e.answer===a?{answer:e.answer,votes:e.votes+1,username:w.username}:e}));return r.answers=l,fetch("/".concat(r._id,"/update"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),n}))},D=function(){fetch("/logout").then((function(e){return e.json()})).then((function(e){e.ok?y(null):alert("error")}))},A=function(e,a){var t={username:e,password:a};fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.ok?(window.location="/",window.location.href="/"):alert("error")}))},x=function(e,a,t){var n={username:e,password:a,name:t};fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})};function F(){return r.a.createElement("h2",null,"Home")}function T(){return r.a.createElement("h2",null,"About")}function R(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Preguntar: "),r.a.createElement(d,{user:w,onCreateQuestion:P}))}function _(){return r.a.createElement("div",null,w?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"Bienvenido! ",r.a.createElement("b",null,w.username)),r.a.createElement("p",null,"Ahora tienes total acceso y puedes preguntar, responder y votar.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{onClick:D,className:"btn btn-danger"},"Logout"))):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h2",null," Inicia Sesi\xf3n: "),r.a.createElement(f,{onLogin:A})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h2",null," Reg\xedstrate: "),r.a.createElement(b,{onRegister:x}))))}var Q=function(e){fetch("/getQuestions/".concat(e)).then((function(e){return e.json()})).then((function(e){return console.log(e),l(e)}))},L=function(e){fetch("/getQuestions/materia/".concat(e)).then((function(e){return e.json()})).then((function(e){return console.log(e),l(e)}))};function J(){var e=Object(m.g)();return r.a.createElement("div",{className:"preguntas-section"},r.a.createElement("h2",null,"Preguntas"),r.a.createElement("div",{className:"Filtro"},r.a.createElement(v,{filtrarPrograma:Q,filtrarMateria:L})),r.a.createElement("div",{className:"preguntas"},r.a.createElement("div",null,r.a.createElement(E,{user:w,questions:t,onVote:C,match:e}))),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"".concat(e.path,"/:id")},r.a.createElement(I,null)),r.a.createElement(m.a,{path:e.path},r.a.createElement("h3",null,"Selecciona una pregunta para visualizarla."))))}function I(){var e=Object(m.f)().id;return function(e){console.log("El id que estoy buscando es: ",e),t.map((function(a){console.log("El id actual es: ",a._id),a._id===e&&(console.log("Son iguales"),console.log(a),O(a))}))}(e),console.log("Funciona co\xf1o",k),r.a.createElement("div",{key:"question"+e,className:"pregunta-section"},k?r.a.createElement("div",null,r.a.createElement("h2",null," Aqu\xed est\xe1 la pregunta: "),r.a.createElement("div",{className:"itemQuestion"},r.a.createElement("h3",null,k.question),r.a.createElement("p",null,r.a.createElement("b",null,k.username)," pregunt\xf3 el ",k.timestamp),r.a.createElement("p",null,k.descripcion)),r.a.createElement(p,{_id:k._id,user:w,answers:k.answers,question:k.question,username:k.username,onVote:C}),r.a.createElement(g,{user:w,onCreateAnswer:S,question:k})):r.a.createElement("div",null))}return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"container info"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(i.a,null,r.a.createElement("nav",{id:"navbar",className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"PreguntAndes"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("div",{className:"row menu-navbar"},r.a.createElement("div",{className:"col-12"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/preguntas"},"Preguntas")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/crearPregunta"},"Preguntar")),r.a.createElement("li",{className:"nav-item menu-login"},w?r.a.createElement(i.b,{className:"nav-link",to:"/iniciarsesion"}," ","Perfil"," "):r.a.createElement(i.b,{className:"nav-link",to:"/iniciarsesion"}," ","Iniciar Sesi\xf3n / Registro"," "))))))),r.a.createElement("div",{className:"contenido"},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/about"},r.a.createElement(T,null)),r.a.createElement(m.a,{path:"/preguntas"},r.a.createElement(J,null)),r.a.createElement(m.a,{path:"/crearPregunta"},r.a.createElement(R,null)),r.a.createElement(m.a,{path:"/iniciarsesion"},r.a.createElement(_,null)),r.a.createElement(m.a,{path:"/"},r.a.createElement(F,null)))))))),r.a.createElement(u,null))};c.a.render(r.a.createElement(h,null),document.querySelector("#target"))}},[[21,1,2]]]);
//# sourceMappingURL=main.a0d8fc88.chunk.js.map