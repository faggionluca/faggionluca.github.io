(this.webpackJsonpcurriculum=this.webpackJsonpcurriculum||[]).push([[0],{177:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(28),o=a.n(r),l=(a(91),a(7)),c=a(15),s=(a(92),a(182)),m=a(183),d=a(187),u=a(72),p=a.n(u),g=a(3),h=a(29),f=a(44),b=a(186),v=a(17),z=a(11),w=a(181),E="576px",k="768px",x="1200px",y=a(73),j=a.n(y);function N(){var e=Object(v.a)(["\n\tmax-width: 256px;\n\tmax-height: 256px;\n\twidth: auto;\n\theight: auto;\n\n\t@media only screen and (max-width: ","){\n\t\tmax-width: 128px;\n\t\tmax-height: 128px;\n\t}\n"]);return N=function(){return e},e}function O(){var e=Object(v.a)(["\n\tposition: absolute;\n\tbackground-color: #fff;\n"]);return O=function(){return e},e}function S(){var e=Object(v.a)(["\n\toverflow: hidden;\n\tbox-sizing: border-box;\n\tpadding-top: 0;\n\tmax-height: 0;\n\theight: 100%;\n\twidth: 100%;\n\ttransition: all 0.3s ease-out;\n"]);return S=function(){return e},e}function C(){var e=Object(v.a)(["\n\tdisplay: flex;\n\tflex-flow: column;\n\tjustify-content: center;\n\talign-items: center;\n\tp {\n\t\tfont-size: 0.8rem;\n\t}\n"]);return C=function(){return e},e}function D(){var e=Object(v.a)(["\n\t@media only screen and (max-width: ","){\n\t\tmin-height: 10rem;\n\t}\n"]);return D=function(){return e},e}function U(){var e=Object(v.a)(["\n\tbackground-color: #fff;\n"]);return U=function(){return e},e}function P(){var e=Object(v.a)(["\n\tposition: absolute;\n\tz-index: -1;\n\ttop: 0;\n\tbottom: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-image: url(",");\n\tbackground-size: cover;\n\tbackground-position: center center;\n\tclip-path: polygon(0 0, 100% 0, 100% 40%, 0 48%);\n"]);return P=function(){return e},e}function I(){var e=Object(v.a)(["\n\tdisplay: grid;\n\twidth: 100%;\n\theight: 100%;\n\tpadding: 20vh 20vw;\n\n\t@media only screen and (max-width: ","){\n\t\tpadding: 10vh 15vw;\n\t}\n\n\t@media only screen and (max-width: ","){\n\t\tpadding: 15vh 10vw;\n\t}\n\n\t@media print {\n\t\tpadding: 15vh 5vw;\n\t}\n"]);return I=function(){return e},e}var M=z.b.div(I(),k,x),A=z.b.div(P(),j.a),_=Object(z.b)(w.a)(U()),q=Object(z.b)(s.a)(D(),k),G=z.b.div(C()),T=Object(z.b)(m.a)(S()),H=Object(z.b)(h.a)(O()),L=function(e){var t="border-top";return"false"===e.border&&(t=""),i.a.createElement(m.a,Object.assign({},e,{className:"".concat(t," mt-5 mx-2 mx-md-4 px-2 px-md-5 justify-content-center ").concat(e.className)}),e.children)},F=z.b.img(N(),E),V=function(e){return i.a.createElement(L,null,i.a.createElement(s.a,{className:"justify-content-center"},i.a.createElement("h2",{className:"mt-5 text-center"},e.title),e.children))},W=a(83),B=a(75),J=a.n(B),R=a(76),X=a.n(R),Q=a(77),Y=a.n(Q),$=a(78),K=a.n($),Z=a(79),ee=a.n(Z),te=a(185),ae=a(184),ne=a(55),ie=a.n(ne),re=new W.a,oe=new te.a([]);g.repositories.forEach((function(e){re.repos.get({owner:e.owner,repo:e.repo}).then((function(e){var t={name:e.data.full_name,description:e.data.description,language:e.data.language,stars:e.data.stargazers_count,watchers:e.data.watchers_count,fork:e.data.forks_count,url:e.data.html_url};oe.next(Object(c.a)({},t.name,t))}))}));var le=function(e){return i.a.createElement(s.a,{xs:"6",className:"d-flex justify-content-center align-items-center ".concat(e.className)},e.children)},ce=function(){return i.a.createElement(q,{className:"justify-content-center d-flex order-1 order-sm-1 order-lg-2 p-0",md:"12",sm:"12",lg:"auto"},i.a.createElement("div",{className:"card-profile-image"},i.a.createElement("img",{alt:"",className:"m-0 rounded-circle",src:p.a})))},se=function(e){return e.icon.hasOwnProperty("link")?i.a.createElement(G,e,i.a.createElement("a",{href:e.icon.link},i.a.createElement(h.a,{size:e.iconSize?e.iconSize:"2x",icon:e.icon.icon})),i.a.createElement("a",{href:e.icon.link},i.a.createElement("span",null,e.icon.name))):i.a.createElement(G,e,i.a.createElement(h.a,{size:e.iconSize?e.iconSize:"2x",icon:e.icon.icon}),i.a.createElement("span",null,e.icon.name))},me=function(e){var t=g.social.map((function(e,t){return t!==g.social.length-1?i.a.createElement(se,{key:t,icon:e,className:"pr-4"}):i.a.createElement(se,{key:t,icon:e})}));return i.a.createElement(m.a,{className:"justify-content-center"},t)},de=function(){return i.a.createElement(m.a,{className:"justify-content-center"},i.a.createElement(le,{className:"pt-7 pt-md-3 order-2 order-sm-2 col-sm-6 order-lg-1 col-lg-6"},i.a.createElement(me,null)),i.a.createElement(ce,null),i.a.createElement(le,{className:"pt-7 pt-md-3 order-3 order-md-3 col-sm-6 order-lg-3 col-lg-6"},i.a.createElement("a",{href:"mailto:".concat(g.contact_email)},i.a.createElement(d.a,{color:"primary"},"Contact Me"))))},ue=function(){var e=g.details.school.map((function(e,t){return i.a.createElement("div",{key:t,className:"h6 mt-2"},i.a.createElement("span",{className:"font-weight-lighter"},e.type)," @ ",i.a.createElement("span",null,e.name))})),t=g.details.programming.map((function(e,t){return i.a.createElement(s.a,{key:t,xs:"auto"},i.a.createElement(se,{icon:e}))}));return i.a.createElement(m.a,{className:"justify-content-center d-flex mt-4 mt-md-7"},i.a.createElement(s.a,{style:{minWidth:"256px"},lg:"auto",className:"justify-content-center text-center"},i.a.createElement("h3",null,"".concat(g.details.name," ").concat(g.details.surname),i.a.createElement("span",{className:"font-weight-light"},", ".concat(function(e){var t=Date.now()-e.getTime(),a=new Date(t);return Math.abs(a.getUTCFullYear()-1970)}(new Date(g.details.birthdate))))),i.a.createElement("div",{className:"h6 font-weight-300"},g.details.city,", ",g.details.state),e,i.a.createElement("div",{className:"mt-2"},g.details.hobbies),i.a.createElement(m.a,{className:"mt-5 justify-content-center"},t)))},pe=function(){var e=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],o=a[1];return i.a.createElement(b.a,{in:r,timeout:400,classNames:"dropDownSectionWrapper"},i.a.createElement(L,Object.assign({},e,{className:"".concat(e.className," dropDownSection")}),i.a.createElement(b.a,{in:r,timeout:400,classNames:"dropDownChevron"},i.a.createElement("div",{onClick:function(){o(!1===r)},className:"d-flex w-100 justify-content-center"},i.a.createElement(H,{className:"mt--2 rounded-circle shadow-sm",style:{color:"var(--light)"},icon:f.b}))),i.a.createElement(b.a,{in:r,timeout:400,classNames:"dropDownSection"},i.a.createElement(T,{xs:"12",className:" justify-content-center"},e.children))))},t=Object.keys(g.details.more).map((function(e,t){return i.a.createElement(m.a,{key:"desc-".concat(t),className:"text-right d-block font-weight-bold"},e)})),a=Object.keys(g.details.more).map((function(e,t){return i.a.createElement(m.a,{key:"sep-".concat(t)},":")})),r=[];for(var o in g.details.more)g.details.more.hasOwnProperty(o)&&r.push(i.a.createElement(m.a,{key:"val-".concat(o)},g.details.more[o]));return i.a.createElement(e,null,i.a.createElement(s.a,{xs:"auto"},t),i.a.createElement(s.a,{xs:"auto",className:"px-1 px-md-2"},a),i.a.createElement(s.a,{xs:"auto"},r))},ge=function(e){return i.a.createElement(L,{border:"false"},i.a.createElement(s.a,{xs:"auto"},i.a.createElement(m.a,{className:"justify-content-center"},i.a.createElement("h2",{className:"text-weight-bold text-center"},"Who am I?")),i.a.createElement(m.a,{className:"justify-content-center text-center"},g.whoiam)))},he=function(e){return i.a.createElement(m.a,{className:"mt-5 justify-content-center"},i.a.createElement(s.a,{xs:"12",md:"12",lg:"auto",className:"p-0 position-relative d-flex justify-content-center"},i.a.createElement(F,{className:"rounded-lg shadow overflow-hidden",alt:"",src:e.image})),i.a.createElement(s.a,{className:"mx-5 mt-sm-3 mt-md-2 mt-lg-0"},i.a.createElement(J.a,null,e.markdown)))},fe=function(e){return i.a.createElement(V,{title:"Progetti Universitari"},i.a.createElement(he,{image:X.a,markdown:"### Basi di Dati\r\n\r\n[![repo](https://img.shields.io/badge/repo-Github-blue)](https://github.com/darkimage/Universita-Basididati)\r\n[![language](https://img.shields.io/badge/main_language-PHP-green)](https://www.php.net/)\r\n[![relazione](https://img.shields.io/badge/relazione-PDF-orange)](https://github.com/darkimage/Universita-Basididati/raw/master/documents/basi_di_dati.pdf)\r\n\r\n---\r\n\r\nProgetto per l'insegnamento di **Basi di Dati e Web**, realizzato in PHP, HTML e JS con il principale scopo di effettuare un sistema di gestione delle **Task** (Attivita') aziendali. \r\n\r\nIl progetto verte sulla creazione di un sito web che utilizza un **database relazionale** per lo storage dei dati e una logica in **php** per la presentazione all'utente.\r\n\r\nNella prima fase di realizzazione e stata svolta una analisi dei requisiti per i necessari sistemi da implementare, si e' adoperata una distinzione tra Requisiti del Database per lo **storage di dati (DBMS)** e **Requisiti dell' Applicazione** (parte in PHP e presentazione ad utente finale).\r\n\r\nSono stati creati **tre principali sistemi cooperanti** per gestire queste necessita':\r\n\r\n - Utilizzo del **Pattern MVC** (Model-View-Controller)\r\n - Creazione di un **Custom Templating Engine** (Templating Classes)\r\n\t> Utilizzato per effetuare una composizione modulare di template HTML, rendendo piu efficente la realizzazione del progetto sfruttando il riutilizzo del codice. Il sistema e' un **preprocessor** per HTML, effettivamente virualizzando il DOM Tree rendendolo programmaticalmente disponibile in codice PHP\r\n\r\n\t> **[Per maggiori info sul sistema](https://github.com/darkimage/Universita-Basididati#custom-templating-engine)**\r\n - Creazione di **Domain Classes** per l'astrazione del DB\r\n\r\n"}),i.a.createElement(he,{image:Y.a,markdown:"## Ingegneria del Software\r\n\r\n[![repo](https://img.shields.io/badge/repo-Github-blue)](https://github.com/darkimage/Universita-IngegneriaDelSoftware)\r\n[![language](https://img.shields.io/badge/main_language-Groovy_Grails-green)](https://grails.org/)\r\n[![relazione](https://img.shields.io/badge/relazione-PDF-orange)](https://github.com/darkimage/Universita-IngegneriaDelSoftware/raw/master/documents/SistemadiVenditaOnline_LucaFaggion_274857.pdf)\r\n\r\n---\r\n\r\nProgetto realizzato utilizzando il framework Groovy **[Grails](https://grails.org/)**.\r\n\r\nIl principale scopo del progetto e' di ottenere una dimestichezza nello sviluppo di progetti utilizzando il metodo di iterazione continua di sviluppo e test tramite la metodologia AGILE.\r\n\r\nIl documento d'uso e' disponibile **[qui](https://github.com/darkimage/Universita-IngegneriaDelSoftware/raw/master/documents/Istruzioni-Uso-e-Installazione-274857-Faggion-Luca.pdf)**.\r\n\r\nIl report dei test e consultabile **[qui](https://darkimage.github.io/Universita-IngegneriaDelSoftware/)** (101 Unit e Integration tests, il codice dei test e' definito **[qui](https://github.com/darkimage/Universita-IngegneriaDelSoftware/tree/master/src/test/groovy/com/lucafaggion))**.\r\n\r\nNell'Analisi dei requisiti viene redatto un documento (**Documento dei Requisiti**) che comprende una esaustiva descrizione dettagliata delle necessita' del sistema."}),i.a.createElement(he,{image:K.a,markdown:"## Programmazione sistemi mobili - Android\r\n\r\n[![repo](https://img.shields.io/badge/repo-Github-blue)](https://github.com/darkimage/Universita-android-ChronotrackerApp)\r\n![language](https://img.shields.io/badge/main_language-Java-green)\r\n[![relazione](https://img.shields.io/badge/relazione-PDF-orange)](https://github.com/darkimage/Universita-android-ChronotrackerApp/raw/master/documents/relazione_android.pdf)\r\n\r\n---\r\n\r\nApplicazione realizzata utilizzando **[Android Studio](https://developer.android.com/studio)**.\r\n\r\nStrutturata per utilizzare tutte le tecniche di sviluppo mobile quali:\r\n\r\n - Utilizzo del pattern di programmazione **MVC (Model-View-Controller)** (che e' anche la base del Framework UI di Android)\r\n - Utilizzo della libreria **[Android Material](https://material.io/develop/android/)** per ottenere una UI moderna, responsiva e conforme alle specifiche del **Material Design**.\r\n\r\nIl progetto e' strutturato per utilizzare tutte le linee guida Google per la realizzazione di applicativi mobile.\r\n\r\nI principali sono:\r\n\r\n- Utilizzo del **pattern [MVC](https://it.wikipedia.org/wiki/Model-view-controller)**\r\n- Utilizzo di **Query asincrone** per la richiesta/ricezione dei dati dal Model\r\n\t> E' stato creato un sistema ADHOC per tale scopo che utilizza una classe anche essa creata per tale esigenza, [NoLeakAsyncTask](https://github.com/darkimage/Universita-android-ChronotrackerApp#classe-noleakasynctask)\r\n- Utilizzo di comunicazione tra Controllers tramite **[Observables (LiveData)](https://developer.android.com/topic/libraries/architecture/livedata)**\r\n\r\nl'applicazione realizza una app per il tracciamento e cronometraggio di atleti, mette a disposizione interfaccie per i profili degli altleti e la loro history delle prove cronometrate."}),i.a.createElement(he,{image:ee.a,markdown:"## Programmazione di sistemi mobili - iOS\r\n\r\n[![repo](https://img.shields.io/badge/repo-Github-blue)](https://github.com/darkimage/Universita-ios-weatherApp)\r\n[![language](https://img.shields.io/badge/main_language-Objective_C-green)](https://it.wikipedia.org/wiki/Objective-C)\r\n[![relazione](https://img.shields.io/badge/relazione-PDF-orange)](https://github.com/darkimage/Universita-ios-weatherApp/raw/master/Documents/relazione_ios.pdf)\r\n\r\n---\r\n\r\nProgetto realizzato con **[XCode](https://en.wikipedia.org/wiki/Xcode)** e Objective-C.\r\n\r\nl'applicazione consente di visualizzare all'utente le previsioni meteo per le citta da lui inserite. Ogni citta a la propria history, nella quale sono visualizzate le passate condizioni meteo. Ogni citta puo essere marcata come favorita e essere esportata su un file **[CSV](https://it.wikipedia.org/wiki/Comma-separated_values)** per poi essere ricaricate nell'applicazione.\r\n\r\nStrutturata per utilizzare tutte le tecniche di sviluppo mobile quali:\r\n\r\n - Utilizzo del pattern di programmazione **MVC (Model-View-Controller)**\r\n - Utilizzo delle API **[OpenWeatherMap](OpenWeatherMap)** per i dati relativi al meteo.\r\n - Utilizzo di **[Skeleton View](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a)**.\r\n\t > Consento di mostrare all'utente una interfaccia provvisoria mentre vengono recuperati i dati che saranno poi mostrati quando disponibili risultando cosi in una esperienza piu gradevo per l'utente senza continui loading screens.\r\n\t \r\n- Utilizzo di richieste Http asincrone.\r\n\r\n"}))},be=function(e){var t,a,n;return i.a.createElement(s.a,{xs:"12",md:"6",lg:"6",className:"my-2 align-items-stretch"},i.a.createElement("div",{className:"border rounded p-4 w-100 h-100"},i.a.createElement("div",{className:void 0==e.proj?"text-nowrap":""},i.a.createElement(h.a,{icon:["fas","book"]}),i.a.createElement("a",{className:"font-weight-bold ml-1",href:(null===(t=e.proj)||void 0===t?void 0:t.url)||"#",style:void 0==e.proj?{lineHeight:1,minWidth:"200px"}:{}},(null===(a=e.proj)||void 0===a?void 0:a.name)||i.a.createElement(ie.a,{className:"pr-5"})," ")),i.a.createElement("div",{className:"mt-2",style:void 0==e.proj?{lineHeight:1,minWidth:"200px"}:{}},(null===(n=e.proj)||void 0===n?void 0:n.description)||i.a.createElement(ie.a,null))))},ve=function(e){var t=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),i=a[0],r=a[1],o=Object(n.useState)(e),c=Object(l.a)(o,2),s=c[0],m=c[1];return Object(n.useEffect)((function(){return s.pipe(Object(ae.a)((function(e,t){return Object.assign({},e,t)}),{})).subscribe((function(e){r(e)})),function(){return s.unsubscribe()}}),[s]),[i,m]}(oe),a=Object(l.a)(t,2),r=a[0],o=a[1];Object(n.useEffect)((function(){o(oe)}));var c=g.repositories.map((function(e,t){return console.log(r["".concat(e.owner,"/").concat(e.repo)]),i.a.createElement(be,{proj:r["".concat(e.owner,"/").concat(e.repo)]})}));return i.a.createElement(V,{title:"Progetti Personali"},i.a.createElement(m.a,{className:"mt-5 align-items-stretch"},c))};var ze=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(M,{className:"profile-page"},i.a.createElement(_,{className:"card card-profile shadow mt-0 pb-5",fluid:!0},i.a.createElement(de,null),i.a.createElement(ue,null),i.a.createElement(pe,null),i.a.createElement(ge,null),i.a.createElement(fe,null),i.a.createElement(ve,null))),i.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(176);var we=a(26);a(33).b.add(we.c,we.a,we.b,we.e,we.f,we.d,f.a),o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(z.a,{theme:{primary:"#f5f5f5",boxShadows:"0 4.8px 6.3px rgba(0, 0, 0, 0.12), 0 38px 50px rgba(0, 0, 0, 0.14)",borderColor:"#999999"}},i.a.createElement(ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e){e.exports=JSON.parse('{"social":[{"icon":["fab","github-square"],"link":"https://github.com/darkimage","name":"Github"},{"icon":["fab","artstation"],"link":"https://www.artstation.com/darkimage","name":"Artstation"}],"whoiam":"Sono un ragazzo appassionato dall\'informatica, figlio della rivoluzione digitale, studente di ingegneria e geek di Dev OPS!","contact_email":"luc-af@live.it","details":{"city":"Parma","state":"Italia","birthdate":"12/04/1995","email":"luca.faggion@studenti.unipr.it","name":"Luca","surname":"Faggion","school":[{"type":"Studente","name":"Corso in Ingegneria Informatica, Eletronica e Telecomunicazioni, Universita\' di Parma "},{"type":"Diploma","name":"ITG Rondani, Parma"}],"hobbies":"Realtime Graphics, 3D Modelling e Automation Scripts","programming":[{"name":"C/C++","icon":["fab","cuttlefish"]},{"name":"Python","icon":["fab","python"]},{"name":"Typescript/JS","icon":["fab","js"]},{"name":"Java","icon":["fab","java"]}],"more":{"Luogo di Nascita":"La Spezia","Data di Nascita":"4 Dicembre 1995","Cellulare":"3395472642","E-mail":"luca.faggion@studenti.unipr.it"}},"repositories":[{"owner":"Raider-Arts","repo":"sphinx-uedoc-theme"},{"owner":"Raider-Arts","repo":"painter-megascan-link"},{"owner":"darkimage","repo":"react-animate-hoc"},{"owner":"darkimage","repo":"darkimage.github.io"},{"owner":"darkimage","repo":"autocad-arx"}]}')},72:function(e,t,a){e.exports=a.p+"static/media/photo.2dc69583.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/bg.50ebc7be.svg"},76:function(e,t,a){e.exports=a.p+"static/media/basididati.189f1ac0.png"},77:function(e,t,a){e.exports=a.p+"static/media/ingegneriadelsoftware.2a07b65d.png"},78:function(e,t,a){e.exports=a.p+"static/media/mobdevandroid.2b3d7279.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/mobdevios.f7ff0752.png"},86:function(e,t,a){e.exports=a(177)},91:function(e,t,a){},92:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.a8184d6e.chunk.js.map