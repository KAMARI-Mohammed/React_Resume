(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(2),r=t.n(l);t(12);var o=e=>{let{name:a,title:t,profileImage:n,contact:l}=e;return i.a.createElement("div",{className:"profile"},i.a.createElement("img",{src:n,alt:"Profile"}),i.a.createElement("h1",null,a),i.a.createElement("h2",null,t),i.a.createElement("p",null,"Email: ",l.email),i.a.createElement("p",null,"Phone: ",l.phone),i.a.createElement("p",null,"LinkedIn: ",l.linkedin),i.a.createElement("p",null,"GitHub: ",l.github))};var c=e=>{let{education:a}=e;return i.a.createElement("div",null,i.a.createElement("h3",null,"Education"),a.map((e,a)=>i.a.createElement("div",{key:a},i.a.createElement("p",null,e.degree),i.a.createElement("p",null,e.school),i.a.createElement("p",null,e.year))))};var s=e=>{let{experience:a}=e;return i.a.createElement("div",null,i.a.createElement("h3",null,"Experience"),a.map((e,a)=>i.a.createElement("div",{key:a},i.a.createElement("h4",null,e.title),i.a.createElement("p",null,e.company),i.a.createElement("p",null,e.year),i.a.createElement("p",null,e.mission))))};var m=e=>{let{skills:a}=e;return i.a.createElement("div",null,i.a.createElement("h3",null,"Skills"),i.a.createElement("ul",null,a.map((e,a)=>i.a.createElement("li",{key:a},e))))};var u={name:"KAMARI Mohammed",title:"Data Analyst",contact:{email:"kamarimohammed@gmail.com",phone:"0765868918",linkedin:"https://www.linkedin.com/in/mohammedkamari/",github:"https://github.com/dashboard"},education:[{degree:"Master Web Analyste",school:"University of Lille",year:"Graduated in 2024"},{degree:"M1 EN ING\xc9NIERIE DES SYST\xc8MES D\u2019INFORMATION",school:"ESISA",year:"Graduated in 2023"},{degree:"Licence en Ing\xe9nierie logicielle",school:"ESISA",year:"Graduated in 2022"},{degree:"Licence Professionnel g\xe9nie logiciel et multim\xe9dia",school:"Facult\xe9 des Sciences Dhar El Mehraz",year:"Graduated in 2019"},{degree:"Dipl\xf4me Technicien Sp\xe9cialis\xe9 en D\xe9veloppement Informatique",school:"Institut Sp\xe9cialis\xe9 de Technologie Appliqu\xe9e",year:"Graduated in 2017"}],experience:[{title:"D\xe9veloppeur full stack",company:"EST",year:"De juin 2022 \xe0 ao\xfbt 2022",mission:"Etude benchmarking sur les th\xe8mes(GEC et GED) - Auto formation( Angular - PHP(SLIM Framewor)Configuration du serveur SMTP pour assurer le bon envoie des courrier et document. -param\xe9trage - D\xe9ploiement sur un serveur web Ubunt"},{title:"Agent Mailer",company:"E.TRANSIT",year:"De juil. 2017 \xe0 juil. 2019",description:"Int\xe9gration des offres(pr\xe9paration Cr\xe9atives) : HTML5,CSS3 - Effectuer une s\xe9rie de tests pour assurer lenvoie des offres : PORT 25 - Gestion et maintenance des Serveurs - Attribution de Vps a chaque membre de \xe9quipe - animer une r\xe9union chaque semaine pour faire le point de l\u2019avancement de travail"},{title:"D\xe9veloppeur full stack",company:"ISTA Adarissa",year:"De avril 2017 \xe0 juin 2017",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}],skills:["JavaScript","React.js","HTML","CSS","Node.js"]};t(13);var d={name:"KAMARI Mohammed",title:"Data Analyst",contact:{email:"kamarimohammed@gmail.com",phone:"0765868918",linkedin:"https://www.linkedin.com/in/mohammedkamari/",github:"https://github.com/dashboard"},education:[{degree:"Master Web Analyste",school:"Universit\xe9 de Lille",year:"Dipl\xf4m\xe9 en 2024"},{degree:"M1 EN ING\xc9NIERIE DES SYST\xc8MES D\u2019INFORMATION",school:"ESISA",year:"Dipl\xf4m\xe9 en 2023"},{degree:"Licence en Ing\xe9nierie logicielle",school:"ESISA",year:"Dipl\xf4m\xe9 en 2022"},{degree:"Licence Professionnel g\xe9nie logiciel et multim\xe9dia",school:"Facult\xe9 des Sciences Dhar El Mehraz",year:"Dipl\xf4m\xe9 en 2019"},{degree:"Dipl\xf4me Technicien Sp\xe9cialis\xe9 en D\xe9veloppement Informatique",school:"Institut Sp\xe9cialis\xe9 de Technologie Appliqu\xe9e",year:"Dipl\xf4m\xe9 en 2017"}],experience:[{title:"D\xe9veloppeur full stack",company:"EST",year:"De juin 2022 \xe0 ao\xfbt 2022",mission:"Etude benchmarking sur les th\xe8mes(GEC et GED) - Auto formation( Angular - PHP(SLIM Framewor)Configuration du serveur SMTP pour assurer le bon envoie des courrier et document. -param\xe9trage - D\xe9ploiement sur un serveur web Ubunt"},{title:"Agent Mailer",company:"E.TRANSIT",year:"De juil. 2017 \xe0 juil. 2019",description:"Int\xe9gration des offres(pr\xe9paration Cr\xe9atives) : HTML5,CSS3 - Effectuer une s\xe9rie de tests pour assurer lenvoie des offres : PORT 25 - Gestion et maintenance des Serveurs - Attribution de Vps a chaque membre de \xe9quipe - animer une r\xe9union chaque semaine pour faire le point de l\u2019avancement de travail"},{title:"D\xe9veloppeur full stack",company:"ISTA Adarissa",year:"De avril 2017 \xe0 juin 2017"}],skills:["JavaScript","React.js","HTML","CSS","Node.js"]};var p=()=>{const[e,a]=Object(n.useState)("en"),t="en"===e?u:d;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"contact-info"},i.a.createElement("div",null,i.a.createElement("button",{className:"language-button",onClick:()=>{a(e=>"en"===e?"fr":"en")}},"Change Language")),i.a.createElement(o,{name:t.name,title:t.title,profileImage:"/img/profil.jpeg",contact:t.contact}),i.a.createElement("div",{className:"skills"},i.a.createElement(m,{skills:t.skills}))),i.a.createElement("div",{className:"right-column"},i.a.createElement(c,{education:t.education}),i.a.createElement(s,{experience:t.experience})))};var E=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then(a=>{let{getCLS:t,getFID:n,getFCP:i,getLCP:l,getTTFB:r}=a;t(e),n(e),i(e),l(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,null))),E()},3:function(e,a,t){e.exports=t(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.0c586114.chunk.js.map