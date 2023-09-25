"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[642],{4137:(e,o,r)=>{r.d(o,{Zo:()=>d,kt:()=>f});var t=r(7294);function a(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function n(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(o){a(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function c(e,o){if(null==e)return{};var r,t,a=function(e,o){if(null==e)return{};var r,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),p=function(e){var o=t.useContext(i),r=o;return e&&(r="function"==typeof e?e(o):s(s({},o),e)),r},d=function(e){var o=p(e.components);return t.createElement(i.Provider,{value:o},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(r),u=a,f=l["".concat(i,".").concat(u)]||l[u]||m[u]||n;return r?t.createElement(f,s(s({ref:o},d),{},{components:r})):t.createElement(f,s({ref:o},d))}));function f(e,o){var r=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=u;var c={};for(var i in o)hasOwnProperty.call(o,i)&&(c[i]=o[i]);c.originalType=e,c[l]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<n;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},395:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var t=r(7462),a=(r(7294),r(4137));const n={slug:"/mch/processador",title:"Processador",sidebar_position:3,tags:["mch","processador","componente"]},s=void 0,c={unversionedId:"MCH/processador",id:"MCH/processador",title:"Processador",description:"CPU",source:"@site/docs/MCH/processador.md",sourceDirName:"MCH",slug:"/mch/processador",permalink:"/notes/mch/processador",draft:!1,editUrl:"https://github.com/mirescordeiro/notes/edit/main/docs/MCH/processador.md",tags:[{label:"mch",permalink:"/notes/tags/mch"},{label:"processador",permalink:"/notes/tags/processador"},{label:"componente",permalink:"/notes/tags/componente"}],version:"current",lastUpdatedBy:"Tamires Cordeiro",lastUpdatedAt:1695668218,formattedLastUpdatedAt:"Sep 25, 2023",sidebarPosition:3,frontMatter:{slug:"/mch/processador",title:"Processador",sidebar_position:3,tags:["mch","processador","componente"]},sidebar:"docs",previous:{title:"Placa m\xe3e",permalink:"/notes/mch/placa-mae"},next:{title:"Mem\xf3ria",permalink:"/notes/mch/memoria"}},i={},p=[{value:"Cooler",id:"cooler",level:2},{value:"Clock",id:"clock",level:2},{value:"N\xfacleos",id:"n\xfacleos",level:2}],d={toc:p},l="wrapper";function m(e){let{components:o,...r}=e;return(0,a.kt)(l,(0,t.Z)({},d,r,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/AMD_AM3_CPU_Socket-top_closed_-_with_AMD_Phenom_II_X6_1090T_%28HDT90ZFBK6DGR%29_CPU_PNr%C2%B00300.jpg/418px-AMD_AM3_CPU_Socket-top_closed_-_with_AMD_Phenom_II_X6_1090T_%28HDT90ZFBK6DGR%29_CPU_PNr%C2%B00300.jpg",alt:"CPU"})),(0,a.kt)("p",null,"A Unidade Central de Processamento (CPU), tamb\xe9m chamada de microprocessador ou simplesmente processador, \xe9 considerada o c\xe9rebro do computador, pois \xe9 o componente respons\xe1vel por todo o fluxo de informa\xe7\xf5es de um PC."),(0,a.kt)("p",null,"\xc9 necess\xe1rio que o processador e a placa m\xe3e sejam compat\xedveis, essa compatibilidade se d\xe1 atrav\xe9s do padr\xe3o de soquete da placa m\xe3e."),(0,a.kt)("p",null,"O desempenho dos processadores est\xe1 relacionado \xe0 sua quantidade de bits, processadores atuais trabalham com 32 bits(x86) e com 64 bits(x64). Um bit representa a quantidade de dados que os circuitos conseguem trabalhar por vez. Portanto quanto maior a quantidade de bits, maior a capacidade de c\xe1lculos e processamentos de dados da CPU."),(0,a.kt)("h2",{id:"cooler"},"Cooler"),(0,a.kt)("p",null,"Devido ao alto processamento de dados \xe9 necess\xe1rio resfriar o processador, para isso \xe9 usado uma pe\xe7a chamada ",(0,a.kt)("em",{parentName:"p"},"cooler"),'. Cada modelo \xe9 espec\xedfico de um processador e tem um aspecto de um "ventilador".'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/AM3%2B_Stock_Cooler_2_2016-07-06.jpg/320px-AM3%2B_Stock_Cooler_2_2016-07-06.jpg",alt:"Cooler"})),(0,a.kt)("h2",{id:"clock"},"Clock"),(0,a.kt)("p",null,"Sincroniza a medida de tempo de transfer\xeancia de dados no computador, medida em Hertz(Hz). Indica o n\xfamero de ciclos que ocorre dentro de um tempo, podendo ser ",(0,a.kt)("strong",{parentName:"p"},"interno")," ou ",(0,a.kt)("strong",{parentName:"p"},"externo"),"."),(0,a.kt)("h2",{id:"n\xfacleos"},"N\xfacleos"),(0,a.kt)("p",null,"Devido a limita\xe7\xf5es f\xedsicas como temperatura (quanto mais mega-hertz um processador tiver mais calor ele gera), e de desenvolvimento (chips com clocks maiores) a solu\xe7\xe3o encontrada por fabricantes foi disponibilizar processadores com dois n\xfacleos, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"dual core")),", quatro n\xfacleos, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"quad core")),", ou mais ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"multi core")),". Assim, o dispositivo pode lidar com dois processos (ou mais) por vez, cada um em um n\xfacleo, melhorando seu desempenho."))}m.isMDXComponent=!0}}]);