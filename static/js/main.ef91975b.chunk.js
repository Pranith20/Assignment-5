(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{22:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/wash-hand.287f4bcf.svg"},44:function(e,t,a){e.exports=a.p+"static/media/distance.567b3b9b.svg"},45:function(e,t,a){e.exports=a.p+"static/media/doctor.8cad16d7.svg"},46:function(e,t,a){e.exports=a.p+"static/media/home.1062b7c0.svg"},47:function(e,t,a){e.exports=a.p+"static/media/call.ce712694.svg"},48:function(e,t,a){e.exports=a.p+"static/media/workout.5de63bce.svg"},49:function(e,t,a){e.exports=a.p+"static/media/food.e669dac1.svg"},52:function(e,t,a){e.exports=a(93)},57:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(36),o=a.n(r),c=(a(57),a(13)),i=a(6),s=a(40),m=(a(58),a(17)),u=a.n(m),d=a(51),h=a(19),p=a(18),E=a(50),y=a(37),f=a.n(y),g=a(38),v=a.n(g);a(85);var w=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),m=Object(c.a)(o,2),y=m[0],g=m[1],w=Object(n.useState)(""),b=Object(c.a)(w,2),x=b[0],k=b[1],S=Object(n.useState)(!0),C=Object(c.a)(S,2),T=C[0],O=C[1],D=Object(n.useState)(!1),I=Object(c.a)(D,2),j=I[0],N=I[1];Object(n.useEffect)((function(){u.a.all([u.a.get("https://corona.lmao.ninja/v2/all"),u.a.get("https://corona.lmao.ninja/v2/countries")]).then((function(e){r(e[0].data),g(e[1].data),O(!1)})).catch((function(e){console.log(e)}))}),[]);var M=new Date(parseInt(a.updated)).toString(),q=y.filter((function(e){return""!==x?e.country.toLowerCase().includes(x.toLowerCase()):e})).map((function(e,t){return l.a.createElement(i.a,{key:t,bg:j?"dark":"light",text:j?"light":"dark",className:"text-center",style:{margin:"10px"}},l.a.createElement(i.a.Img,{variant:"top",src:e.countryInfo.flag}),l.a.createElement(i.a.Body,null,l.a.createElement(i.a.Title,null,e.country),l.a.createElement(i.a.Text,null,"Cases ",e.cases),l.a.createElement(i.a.Text,null,"Deaths ",e.deaths),l.a.createElement(i.a.Text,null,"Recovered ",e.recovered),l.a.createElement(i.a.Text,null,"Today's cases ",e.todayCases),l.a.createElement(i.a.Text,null,"Today's deaths ",e.todayDeaths),l.a.createElement(i.a.Text,null,"Active ",e.active),l.a.createElement(i.a.Text,null,"Critical ",e.critical)))}));return l.a.createElement("div",{style:{backgroundColor:j?"black":"white",color:j?"white":"black"}},l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(f.a,{size:50,color:"green",loading:T})),l.a.createElement("br",null),l.a.createElement("h2",{"data-tip":"Last modified date: 16/05/2020 - v2.2",style:{textAlign:"center"}},"COVID-19 Live Now"),l.a.createElement(E.a,{effect:"solid"}),l.a.createElement("br",null),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(v.a,{defaultChecked:!1,icons:{checked:"\ud83c\udf1c",unchecked:"\ud83c\udf1e"},onChange:function(){N(!j)}})),l.a.createElement("br",null),l.a.createElement(s.a,null,l.a.createElement(i.a,{bg:"secondary",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(i.a.Body,null,l.a.createElement(i.a.Title,null,"Cases"),l.a.createElement(p.a,{value:a.cases,displayType:"text",thousandSeparator:!0,style:{fontSize:"30px"}})),l.a.createElement(i.a.Footer,null,l.a.createElement("small",null,"Last updated ",M))),l.a.createElement(i.a,{bg:"danger",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(i.a.Body,null,l.a.createElement(i.a.Title,null,"Deaths"),l.a.createElement(i.a.Text,null," ",l.a.createElement(p.a,{value:a.deaths,displayType:"text",thousandSeparator:!0,style:{fontSize:"30px"}}))),l.a.createElement(i.a.Footer,null,l.a.createElement("small",null,"Last updated ",M))),l.a.createElement(i.a,{bg:"success",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(i.a.Body,null,l.a.createElement(i.a.Title,null,"Recovered"),l.a.createElement(i.a.Text,null," ",l.a.createElement(p.a,{value:a.recovered,displayType:"text",thousandSeparator:!0,style:{fontSize:"30px"}}))),l.a.createElement(i.a.Footer,null,l.a.createElement("small",null,"Last updated ",M)))),l.a.createElement("br",null),l.a.createElement(h.a,null,l.a.createElement(h.a.Group,{controlId:"formGroupSearch"},l.a.createElement(h.a.Control,{bg:"dark",type:"text",placeholder:"Search for countries",onChange:function(e){return k(e.target.value)}}))),l.a.createElement(d.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:3,query:"min-width: 1000px"}]},q))},b=(a(22),a(23)),x=a.n(b);var k=function(){var e=[{name:"Cases",data:[555,12038,69030,88369,167466,932638,2055423,3343777,3845718]},{name:"Recovered",data:[28,284,9394,42710,76026,191853,501538,1029651,1255481]},{name:"Deaths",data:[17,259,1666,2996,6472,49675,140658,238619,269567]}],t={dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["1/22/20","2/1/20","2/15/20","3/1/20","3/15/20","4/1/20","4/15/20","5/1/20","5/7/20"]},tooltip:{x:{format:"dd/MM/yy"}}};return l.a.createElement("div",{style:{backgroundColor:"white",textAlign:"center"}},l.a.createElement("br",null),l.a.createElement("h2",null,"COVID-19 Global Graphs"),l.a.createElement("br",null),l.a.createElement(x.a,{options:t,series:e,type:"area",height:350}),l.a.createElement("br",null),l.a.createElement(x.a,{options:t,series:e,type:"bar",height:350}))},S="7d4ef5d23648c7c62acd3ccfa1a0a30b",C="https://api.openweathermap.org/data/2.5/";var T=function(){var e=Object(c.a)("",2),t=e[0],a=e[1],n=Object(c.a)({},2),r=n[0],o=n[1];return l.a.createElement("div",{className:"undefined"!=typeof r.main&&r.main.temp>16?"app warm":"app"},l.a.createElement("main",null,l.a.createElement("div",{className:"search-box"},l.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return a(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(C,"weather?q=").concat(t,"&units=metric&APPID=").concat(S)).then((function(e){return e.json()})).then((function(e){o(e),a(""),console.log(e)}))}})),"undefined"!=typeof r.main?l.a.createElement("div",null,l.a.createElement("div",{className:"location-box"},l.a.createElement("div",{className:"location"},r.name,", ",r.sys.country),l.a.createElement("div",{className:"date"},function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],l=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(l)}(new Date))),l.a.createElement("div",{className:"weather-box"},l.a.createElement("div",{className:"temp"},Math.round(r.main.temp),"\xb0c"),l.a.createElement("div",{className:"weather"},r.weather[0].main))):""))},O=a(15);var D=function(){return l.a.createElement("nav",null,l.a.createElement(O.b,{style:{color:"white",textDecoration:"none"},to:"/"},l.a.createElement("div",{style:{fontSize:"30px"}},"\ud83c\udf0f")),l.a.createElement("ul",{className:"nav-links"},l.a.createElement(O.b,{style:{color:"white",textDecoration:"none",marginTop:"10px",marginRight:"40px"},to:"/symptom"},l.a.createElement("li",null,"Symptom")),l.a.createElement(O.b,{style:{color:"white",textDecoration:"none",marginTop:"10px",marginRight:"40px"},to:"/graph"},l.a.createElement("li",null,"Graph")),l.a.createElement(O.b,{style:{color:"white",textDecoration:"none",marginTop:"10px"},to:"/weather"},l.a.createElement("li",null,"Weather"))))},I=a(11),j=(a(91),a(43)),N=a.n(j),M=a(44),q=a.n(M),z=a(45),A=a.n(z),V=a(46),L=a.n(V),F=a(47),P=a.n(F),B=a(48),R=a.n(B),W=a(49),G=a.n(W);var J=function(){return l.a.createElement("div",{style:{margin:"20px"}},l.a.createElement(I.d,null,l.a.createElement(I.b,null,l.a.createElement(I.a,null,"Overview"),l.a.createElement(I.a,null,"Symptoms"),l.a.createElement(I.a,null,"Prevention"),l.a.createElement(I.a,null,"Treatments")),l.a.createElement(I.c,null,l.a.createElement("p",null,"Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus."),l.a.createElement("p",null,"Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment."),l.a.createElement("hr",null),l.a.createElement("p",null,"HOW IT SPREADS"),l.a.createElement("p",null,"The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces."),l.a.createElement("p",null,"You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth."),l.a.createElement("p",null,"Source:"," ",l.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019",target:"_blank",style:{color:"blue"}},"who.int"))),l.a.createElement(I.c,null,l.a.createElement("p",null,"COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization."),l.a.createElement("hr",null),l.a.createElement("p",null,"Most common symptoms:"),l.a.createElement("ul",null,l.a.createElement("li",null,"fever"),l.a.createElement("li",null,"dry cough"),l.a.createElement("li",null,"tiredness")),l.a.createElement("p",null,"Less common symptoms:"),l.a.createElement("ul",null,l.a.createElement("li",null,"aches and pains"),l.a.createElement("li",null,"sore throat"),l.a.createElement("li",null,"diarrhoea"),l.a.createElement("li",null,"conjunctivitis"),l.a.createElement("li",null,"headache"),l.a.createElement("li",null,"loss of taste or smell"),l.a.createElement("li",null,"a rash on skin, or discolouration of fingers or toes")),l.a.createElement("p",null,"Serious symptoms:"),l.a.createElement("ul",null,l.a.createElement("li",null,"difficulty breathing or shortness of breath"),l.a.createElement("li",null,"chest pain or pressure"),l.a.createElement("li",null,"loss of speech or movement")),l.a.createElement("p",null,"Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility."),l.a.createElement("img",{src:A.a,style:{height:350}}),l.a.createElement("p",null,"People with mild symptoms who are otherwise healthy should manage their symptoms at home."),l.a.createElement("p",null,"On average it takes 5\u20136 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days."),l.a.createElement("p",null,"Source:"," ",l.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms",target:"_blank",style:{color:"blue"}},"who.int"))),l.a.createElement(I.c,null,l.a.createElement("p",null,"Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency."),l.a.createElement("hr",null),l.a.createElement("p",null,"To prevent the spread of COVID-19:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Clean your hands often. Use soap and water, or an alcohol-based hand rub.",l.a.createElement("img",{src:N.a,style:{height:450}})),l.a.createElement("li",null,"Maintain a safe distance from anyone who is coughing or sneezing.",l.a.createElement("img",{src:q.a,style:{height:350}})),l.a.createElement("li",null,"Don\u2019t touch your eyes, nose or mouth."),l.a.createElement("li",null,"Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze."),l.a.createElement("li",null,"Stay home if you feel unwell."),l.a.createElement("li",null,"If you have a fever, cough and difficulty breathing, seek medical attention. Call in advance."),l.a.createElement("li",null,"Follow the directions of your local health authority.")),l.a.createElement("p",null,"Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively, therefore protecting you and others."),l.a.createElement("p",null,"Source:"," ",l.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public",target:"_blank",style:{color:"blue"}},"who.int"))),l.a.createElement(I.c,null,l.a.createElement("p",null,"To date, there are no specific vaccines or medicines for COVID-19. Treatments are under investigation, and will be tested through clinical trials. World Health Organization"),l.a.createElement("hr",null),l.a.createElement("p",null,"Self-care"),l.a.createElement("p",null,"If you feel sick you should rest, drink plenty of fluid, and eat nutritious food. Stay in a separate room from other family members, and use a dedicated bathroom if possible. Clean and disinfect frequently touched surfaces."),l.a.createElement("p",null,"Everyone should keep a healthy lifestyle at home. Maintain a healthy diet, sleep, stay active, and make social contact with loved ones through the phone or internet. Children need extra love and attention from adults during difficult times. Keep to regular routines and schedules as much as possible."),l.a.createElement("img",{src:L.a,style:{height:150}}),l.a.createElement("img",{src:P.a,style:{height:250}}),l.a.createElement("img",{src:R.a,style:{height:250}}),l.a.createElement("img",{src:G.a,style:{height:200}}),l.a.createElement("p",null,"It is normal to feel sad, stressed, or confused during a crisis. Talking to people you trust, such as friends and family, can help. If you feel overwhelmed, talk to a health worker or counsellor."),l.a.createElement("p",null,"Medical treatments"),l.a.createElement("p",null,"If you have mild symptoms and are otherwise healthy, self-isolate and contact your medical provider or a COVID-19 information line for advice."),l.a.createElement("p",null,"Seek medical care if you have a fever, a cough, and difficulty breathing. Call in advance."),l.a.createElement("p",null,"Source:"," ",l.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=protect",target:"_blank",style:{color:"blue"}},"who.int")))))},_=a(14);var H=function(){return l.a.createElement(O.a,null,l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement(_.c,null,l.a.createElement(_.a,{exact:!0,path:"/",component:w}),l.a.createElement(_.a,{path:"/symptom",component:J}),l.a.createElement(_.a,{path:"/graph",component:k}),l.a.createElement(_.a,{path:"/weather",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.ef91975b.chunk.js.map