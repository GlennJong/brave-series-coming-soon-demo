(this["webpackJsonpbrave-series-comming-soon"]=this["webpackJsonpbrave-series-comming-soon"]||[]).push([[0],{61:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t.n(i),a=t(24),c=t.n(a),o=t(2),s=t(3),l={mainColor:"#333",black:"#000",white:"#FFF",green:"#D0FE55",pink:"#C73175"};function d(n,e){var t;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(n))return 3==(t=n.substring(1).split("")).length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),"rgba("+[(t="0x"+t.join(""))>>16&255,t>>8&255,255&t].join(",")+","+e+")";throw new Error("Bad Hex")}var b,x,j,p,g={square:"background-color: transparent;\n          background-image:  linear-gradient(".concat(d(l.green,.1)," 1px, transparent 1px), linear-gradient(to right, ").concat(d(l.green,.1)," 1px, transparent 1px);\n          background-position: center center;\n          background-size: 120px 120px;"),green:"background-color: transparent;\n          background-image:  linear-gradient(".concat(d(l.green,.1)," 1px, transparent 1px), linear-gradient(to right, ").concat(d(l.green,.1)," 1px, transparent 1px);\n          background-position: center center;\n          background-size: 120px 120px;"),black:"background-color: transparent;\n          background-image:  linear-gradient(".concat(d(l.black,.1)," 1px, transparent 1px), linear-gradient(to right, ").concat(d(l.black,.1)," 1px, transparent 1px);\n          background-position: center center;\n          background-size: 120px 120px;")},m=Object(s.a)(b||(b=Object(o.a)(["\n        @font-face {\n            font-family: 'Nimbus';\n            src: url('/fonts/Nimbus-Sans-D-OT-Black.ttf');\n        }\n        @font-face {\n            font-family: 'Nimbus-extend';\n            src: url('/fonts/Nimbus-Sans-D-OT-Black-Extended.ttf')\n        }\n    body {\n        margin: 0;\n        background: ",";\n        font-family: 'Noto Sans TC', sans-serif;\n    }\n    #app {\n        display: flex;\n        flex-direction: column;\n    }\n    ul {\n        padding-inline-start: 0;\n        margin-block-start: 0;\n        margin-block-end: 0;\n        list-style-type: none;\n    }\n    a {\n        text-decoration: none;\n        cursor: pointer;\n        color: currentColor;\n    }\n    button {\n        outline: none;\n        cursor: pointer;\n    }\n    dd {\n        margin-inline-start: 0;\n    }\n\n"])),l.black),u=t(28),f=t(32),h=t(11),O=t(31),v=t.n(O),w=t(63),k=t(0),y=null,L=function(n){var e="object"===typeof n;e&&(y=n);var t=Object(i.useState)(e),r=Object(h.a)(t,2),a=r[0],c=r[1];return Object(i.useEffect)((function(){"string"===typeof n&&function(n){return"string"===typeof n?new Promise((function(e,t){v()(n).then((function(n){return n.data})).then((function(n){y=n,e()})).catch((function(n){t(n)}))})):(y=n,new Promise((function(n,e){n()})))}(n).then((function(){return c(!0)}))}),[]),a},_=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];if(y){1===e.length&&(e=e[0].split("."));var i=w.a(e,y)||"";return"string"===typeof i&&((i=Z(i)).__proto__.currentValue=i,i.__proto__.nl2br=function(){return z(i)},i.__proto__.nl2p=function(){return M(i)},i.__proto__.nl2array=function(){return S(i)},i.__proto__.param=function(n,e){return A(i,n,e)}),"object"===typeof i&&(i=N(i)),i}},N=function n(e){return Object.keys(e).forEach((function(t){e[t]=Z(e[t]),"object"===typeof e[t]&&(e[t]=n(e[t]))})),e},Z=function(n){return"string"===typeof n&&0===n.indexOf("=>")?_.apply(void 0,Object(f.a)(n.replace("=>","").split("."))):n},A=function(n,e,t){var i,r=new RegExp("\\$\\{".concat(e,"\\}"),"g"),a=(null===(i=n.__proto__.currentValue)||void 0===i?void 0:i.replace(r,t))||"";return n.__proto__.currentValue=a,a},z=function(n){var e,t,r,a;return null===n||void 0===n?"":navigator.userAgent.match("MSIE")||navigator.userAgent.match(".NET")?n:null===(r=n=null===(e=(t=n).replace)||void 0===e?void 0:e.call(t,/\\n/g,"\n"))||void 0===r||null===(a=r.split)||void 0===a?void 0:a.call(r,"\n").map((function(n,e){return Object(k.jsxs)(i.Fragment,{children:[n,Object(k.jsx)("br",{})]},"nl2br"+e)}))},M=function(n){var e,t,i,r;return null===n||void 0===n?"":null===(i=n=null===(e=(t=n).replace)||void 0===e?void 0:e.call(t,/\\n/g,"\n"))||void 0===i||null===(r=i.split)||void 0===r?void 0:r.call(i,"\n").map((function(n,e){return n=""!==n?n:Object(k.jsx)("br",{}),Object(k.jsx)("p",{children:n},"nl2p"+e)}))},S=function(n){var e,t,i,r;return null===n||void 0===n?"":null===(i=n=null===(e=(t=n).replace)||void 0===e?void 0:e.call(t,/\\n/g,"\n"))||void 0===i||null===(r=i.split)||void 0===r?void 0:r.call(i,"\n")},B=s.b.div(x||(x=Object(o.a)(["\n  width: 1156px;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 0 24px;\n  box-sizing: border-box;\n"]))),H=t(4),C=t(7),E={xs:360,sm:576,md:768,lg:992,xl:1280},T={},R={};Object.keys(E).forEach((function(n){T[n]=" @media (max-width: ".concat(E[n],"px)")})),Object.keys(E).forEach((function(n){R[n]=" @media (min-width: ".concat(E[n]+1,"px)")}));s.b.header(j||(j=Object(o.a)(["\n  background: ",";\n"])),l.background),s.b.div(p||(p=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 5;\n  box-sizing: border-box;\n  color: ",";\n  transition: transform .3s ease;\n\n"])),l.black);var I,V,F,P,D,q,J,U,$,K,W,Y,G,Q,X,nn=s.b.div(I||(I=Object(o.a)(["\n  padding: 36px 0;\n  padding-bottom: 0;\n  "," {\n    padding: 24px 0;\n    padding-bottom: 0;\n  }\n"])),T.md),en=Object(s.b)(B)(V||(V=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all .3s ease ","ms;\n  .logo {\n    display: inline-block;\n    img {\n      "," {\n        width: 74px;\n      }\n    }\n  }\n"])),(function(n){return n.time}),T.md),tn=function(){return Object(k.jsx)(nn,{children:Object(k.jsx)(en,{children:Object(k.jsx)("a",{href:"/",className:"logo",children:Object(k.jsx)("img",{src:"/images/header-logo.svg",alt:""})})})})},rn=["color","children"],an=s.b.div(F||(F=Object(o.a)(["\n  text-shadow:  0px 0px 1px ",",\n                0px 0px 1px ",",\n                0px 0px 1px ",",\n                0px 0px 1px ",",\n                0px 0px 1px ",",\n                0px 0px 1px ",",\n                0px 0px 1px ",",\n                0px 0px 1px ",",\n                0px 0px 1px ",",\n                0px 0px 1px ",";\n  color: ",";\n"])),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),l.black),cn=function(n){var e=n.color,t=void 0===e?l.green:e,i=n.children,r=Object(C.a)(n,rn);return Object(k.jsx)(an,Object(H.a)(Object(H.a)({color:t},r),{},{children:i}))},on=function(n){var e=Object.assign({},n);return Object(k.jsx)("svg",Object(H.a)(Object(H.a)({width:"20.475",height:"11.689",viewBox:"0 0 20.475 11.689"},e),{},{children:Object(k.jsxs)("g",{id:"Path_286","data-name":"Path 286",transform:"translate(-729.307 -45.88)",fill:"#d0fe55","stroke-miterlimit":"10",children:[Object(k.jsx)("path",{d:"M 743.5030517578125 57.39226913452148 L 743.4179077148438 57.30086898803711 L 742.501953125 56.31737899780273 L 742.4166870117188 56.22581100463867 L 742.5083618164062 56.14062118530273 L 746.4041748046875 52.52027893066406 L 729.5570068359375 52.52027893066406 L 729.4320068359375 52.52027893066406 L 729.4320068359375 52.39527893066406 L 729.4320068359375 51.052490234375 L 729.4320068359375 50.927490234375 L 729.5570068359375 50.927490234375 L 746.401611328125 50.927490234375 L 742.5083618164062 47.30842971801758 L 742.4166870117188 47.22325134277344 L 742.501953125 47.13169097900391 L 743.4179077148438 46.14820098876953 L 743.5030517578125 46.05678939819336 L 743.5945434570312 46.14184951782227 L 749.5000610351562 51.63365173339844 L 749.5985107421875 51.72520065307617 L 749.5000610351562 51.81674194335938 L 743.594482421875 57.30723190307617 L 743.5030517578125 57.39226913452148 Z",stroke:"none"}),Object(k.jsx)("path",{d:"M 743.5093994140625 46.23339080810547 L 742.5934448242188 47.21688079833984 L 746.7196655273438 51.052490234375 L 729.5570068359375 51.052490234375 L 729.5570068359375 52.39527893066406 L 746.7222900390625 52.39527893066406 L 742.5934448242188 56.2321891784668 L 743.5093994140625 57.21567916870117 L 749.4149169921875 51.72518920898438 L 743.5093994140625 46.23339080810547 M 743.4967041015625 45.88019943237305 L 749.7820434570312 51.72521209716797 L 743.4967041015625 57.56885147094727 L 742.2399291992188 56.21942901611328 L 746.0859985351562 52.64527893066406 L 729.3070068359375 52.64527893066406 L 729.3070068359375 50.802490234375 L 746.0835571289062 50.802490234375 L 742.2399291992188 47.22962188720703 L 743.4967041015625 45.88019943237305 Z",stroke:"none",fill:"#d0fe55"})]})}))},sn=function(n){var e=Object.assign({},n);return Object(k.jsx)("svg",Object(H.a)(Object(H.a)({width:"14",height:"14",viewBox:"0 0 14 14"},e),{},{children:Object(k.jsx)("path",{id:"Icon_awesome-facebook-square","data-name":"Icon awesome-facebook-square",d:"M12.5,2.25H1.5A1.5,1.5,0,0,0,0,3.75v11a1.5,1.5,0,0,0,1.5,1.5H5.789V11.49H3.82V9.25H5.789V7.542A2.734,2.734,0,0,1,8.716,4.527a11.927,11.927,0,0,1,1.735.151V6.585H9.474A1.12,1.12,0,0,0,8.211,7.8V9.25H10.36l-.344,2.24H8.211v4.76H12.5a1.5,1.5,0,0,0,1.5-1.5v-11a1.5,1.5,0,0,0-1.5-1.5Z",transform:"translate(0 -2.25)",fill:"currentColor"})}))},ln=function(n){var e=Object.assign({},n);return Object(k.jsx)("svg",Object(H.a)(Object(H.a)({width:"12.25",height:"14",viewBox:"0 0 12.25 14"},e),{},{children:Object(k.jsx)("path",{id:"Icon_awesome-discord","data-name":"Icon awesome-discord",d:"M8.127,6.65a.717.717,0,1,1-.714-.777A.746.746,0,0,1,8.127,6.65ZM4.858,5.873a.78.78,0,0,0,0,1.554.746.746,0,0,0,.714-.777A.741.741,0,0,0,4.858,5.873ZM12.25,1.442V14c-1.764-1.558-1.2-1.043-3.248-2.947l.371,1.3H1.435A1.438,1.438,0,0,1,0,10.906V1.442A1.438,1.438,0,0,1,1.435,0h9.38A1.438,1.438,0,0,1,12.25,1.442Zm-2,6.636A9.374,9.374,0,0,0,9.247,4,3.462,3.462,0,0,0,7.28,3.262l-.1.112a4.659,4.659,0,0,1,1.743.889A5.948,5.948,0,0,0,3.7,4.06c-.259.119-.413.2-.413.2a4.722,4.722,0,0,1,1.841-.917l-.07-.084A3.462,3.462,0,0,0,3.087,4,9.374,9.374,0,0,0,2.079,8.078,2.538,2.538,0,0,0,4.214,9.142s.259-.315.469-.581a2.177,2.177,0,0,1-1.225-.826c.1.072.273.166.287.175a5.1,5.1,0,0,0,4.368.245,4.006,4.006,0,0,0,.8-.413,2.209,2.209,0,0,1-1.267.833c.21.266.462.567.462.567A2.559,2.559,0,0,0,10.255,8.078Z",fill:"currentColor"})}))},dn=function(n){var e=Object.assign({},n);return Object(k.jsx)("svg",Object(H.a)(Object(H.a)({width:"13.989",height:"14",viewBox:"0 0 13.989 14"},e),{},{children:Object(k.jsx)("path",{id:"Path_287","data-name":"Path 287",d:"M663.193,48.392h0c-.309-.232-.662-.449-.787-.524a6.991,6.991,0,0,0-7.719,11.617,9.8,9.8,0,0,0,.828.561c.119.068.24.132.363.192l.011.005a6.994,6.994,0,0,0,7.3-11.851Zm.572,1.792a6.1,6.1,0,0,1,1.108,2.277,9.111,9.111,0,0,1-1.155-.177A10.9,10.9,0,0,0,663.765,50.184Zm-1.059-1.053.031.023a10.017,10.017,0,0,1,.112,2.89,8.725,8.725,0,0,1-1.592-.714Zm-4.389,5.048-1.137,1.706a10.316,10.316,0,0,0-1.889-.89,7.71,7.71,0,0,1,.828-2.281ZM656.6,51.97a7.774,7.774,0,0,1,1.816-1.756,10.364,10.364,0,0,0,1.6,1.4l-1.207,1.832Zm2.454,2.7,2.2,1.468a7.74,7.74,0,0,1-1.8,1.65,9.544,9.544,0,0,0-1.54-1.412Zm.489-.738,1.218-1.847a9.549,9.549,0,0,0,1.948.852,7.816,7.816,0,0,1-.948,2.473Zm.969-3.078a9.659,9.659,0,0,1-1.317-1.131,10.15,10.15,0,0,1,2.755-1.051Zm-1.552-3.019a6.089,6.089,0,0,1,1.744.256,10.9,10.9,0,0,0-2.115.951,9.1,9.1,0,0,1-.772-1.1A6.16,6.16,0,0,1,658.959,47.835Zm-2.025.346a9.1,9.1,0,0,0,.9,1.354,8.7,8.7,0,0,0-1.951,1.919l-.018.026-1.8-1.2A6.1,6.1,0,0,1,656.933,48.181Zm-2.672,9.686a6.105,6.105,0,0,1-1.249-2.508,9.4,9.4,0,0,1,1.285.267A11.909,11.909,0,0,0,654.262,57.867Zm-1.4-3.417a6.075,6.075,0,0,1,.721-3.424l1.794,1.2a8.529,8.529,0,0,0-.939,2.511A9.486,9.486,0,0,0,652.866,54.45Zm2.291,1.457a9.664,9.664,0,0,1,1.521.731l-1.426,2.14A11.986,11.986,0,0,1,655.157,55.907Zm2.257,1.221a8.726,8.726,0,0,1,1.259,1.129,11.958,11.958,0,0,1-2.686,1.013Zm1.532,2.937a6.067,6.067,0,0,1-1.692-.242,11.887,11.887,0,0,0,2-.871,9.1,9.1,0,0,1,.664,1.034A6.152,6.152,0,0,1,658.947,60.065Zm1.861-.288a10.319,10.319,0,0,0-.8-1.292A8.553,8.553,0,0,0,662,56.631l1.721,1.147A6.1,6.1,0,0,1,660.807,59.777Zm3.408-2.73L662.5,55.9l.017-.026a8.732,8.732,0,0,0,1.056-2.714,10.291,10.291,0,0,0,1.466.2A6.08,6.08,0,0,1,664.215,57.048Z",transform:"translate(-651.959 -46.95)",fill:"currentColor"})}))},bn=function(n){var e=Object.assign({},n);return Object(k.jsx)("svg",Object(H.a)(Object(H.a)({width:"17.678",height:"17.678",viewBox:"0 0 17.678 17.678"},e),{},{children:Object(k.jsx)("line",{id:"Line_3","data-name":"Line 3",x2:"24",transform:"translate(0.354 17.324) rotate(-45)",fill:"none",stroke:"#cafe5d","stroke-width":"1"})}))},xn=function(n){var e=Object.assign({},n);return Object(k.jsx)("svg",Object(H.a)(Object(H.a)({width:"24",height:"24",viewBox:"0 0 24 24"},e),{},{children:Object(k.jsx)("path",{id:"Union_10","data-name":"Union 10",d:"M3356-1123.051v-2.013a9.513,9.513,0,0,1-8.987-8.987H3344v-1h3.014a9.513,9.513,0,0,1,8.987-8.987v-3.014h1v3.014a9.513,9.513,0,0,1,8.987,8.987H3368v1h-2.013a9.514,9.514,0,0,1-8.987,8.987v2.013Zm0-4.016v-6.984h-6.984A7.512,7.512,0,0,0,3356-1127.067Zm1,0a7.512,7.512,0,0,0,6.984-6.984H3357Zm6.984-7.984a7.512,7.512,0,0,0-6.984-6.984v6.984Zm-7.984,0v-6.984a7.511,7.511,0,0,0-6.984,6.984Z",transform:"translate(-3344 1147.051)",fill:"#cafe5d"})}))},jn=function(n){var e=Object.assign({},n);return Object(k.jsxs)("svg",Object(H.a)(Object(H.a)({width:"16.971",height:"16.971",viewBox:"0 0 16.971 16.971"},e),{},{children:[Object(k.jsx)("rect",{id:"Rectangle_533","data-name":"Rectangle 533",width:"20",height:"4",transform:"translate(2.828) rotate(45)",fill:"currentColor"}),Object(k.jsx)("rect",{id:"Rectangle_534","data-name":"Rectangle 534",width:"20",height:"4",transform:"translate(16.971 2.828) rotate(135)",fill:"currentColor"})]}))},pn=function(n){var e=Object.assign({},n);return Object(k.jsx)("svg",Object(H.a)(Object(H.a)({width:"19",height:"19",viewBox:"0 0 19 19"},e),{},{children:Object(k.jsx)("path",{id:"Polygon_8","data-name":"Polygon 8",d:"M12.046,0,11.4,6.209l5.054-3.664L12.791,7.6,19,6.954,13.3,9.5,19,12.046,12.791,11.4l3.664,5.054L11.4,12.791,12.046,19,9.5,13.3,6.954,19,7.6,12.791,2.546,16.454,6.209,11.4,0,12.046,5.7,9.5,0,6.954,6.209,7.6,2.546,2.546,7.6,6.209,6.954,0,9.5,5.7Z",fill:"currentColor"})}))},gn=s.b.div(P||(P=Object(o.a)(["\n  position: relative;\n  border-bottom: 6px solid ",";\n  padding-top: 64px;\n  padding-bottom: 112px;\n  "," {\n    padding-top: 50px;\n    padding-bottom: 100px;\n  }\n  .icon {\n    position: absolute;\n    bottom: 14px;\n    &.left { left: 16px; }\n    &.right { right: 16px; }\n  }\n"])),l.green,T.md),mn=s.b.div(D||(D=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n  "," {\n    flex-direction: column;\n  }\n  .slice {\n    margin: 0 12px;\n    "," {\n      display: none;\n    }\n  }\n"])),T.md,T.md),un=s.b.a(q||(q=Object(o.a)(["\n  display: inline-block;\n  "," {\n    margin-bottom: 16px;\n  }\n  .text {\n    display: inline-block;\n    vertical-align: top;\n    font-family: 'Nimbus-extend';\n    font-size: 28px;\n  }\n  > svg {\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 4px;\n    margin-left: 12px;\n    color: ",";\n  }\n  &.disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"])),T.md,l.green),fn=s.b.div(J||(J=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 60px;\n  color: ",";\n  font-size: 12px;\n  font-family: 'Roboto';\n  font-weight: 600;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 3px;\n  "," {\n    width: 320px;\n    margin: 0 auto;\n    margin-bottom: 54px;\n  }\n  > svg {\n    margin: 0 12px;\n    "," {\n      margin: 0;\n    }\n  }\n"])),l.green,T.md,T.md),hn=s.b.div(U||(U=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  "," {\n    display: block;\n  }\n  img {\n    display: block;\n    margin: 0 28px;\n    "," {\n      display: block;\n      margin: 16px auto;\n    }\n  }\n"])),T.md,T.md),On=function(){var n=_("footer");return Object(k.jsxs)(gn,{children:[Object(k.jsxs)(B,{children:[Object(k.jsxs)(mn,{children:[Object(k.jsxs)(un,{as:"a",href:n.facebook,target:"_blank",children:[Object(k.jsx)(cn,{className:"text",color:l.green,children:"FACEBOOK"}),Object(k.jsx)(sn,{})]}),Object(k.jsx)(bn,{className:"slice"}),Object(k.jsxs)(un,{as:"a",href:n.discord,target:"_blank",children:[Object(k.jsx)(cn,{className:"text",color:l.green,children:"DISCORD"}),Object(k.jsx)(ln,{})]}),Object(k.jsx)(bn,{className:"slice"}),Object(k.jsxs)(un,{className:"disabled",as:"a",target:"_blank",children:[Object(k.jsx)(cn,{className:"text",color:l.green,children:"WEBSITE"}),Object(k.jsx)(dn,{})]})]}),Object(k.jsxs)(fn,{children:[Object(k.jsx)(pn,{}),n.copyright,Object(k.jsx)(pn,{})]}),Object(k.jsxs)(hn,{children:[Object(k.jsx)("img",{src:"/images/logo-brave-series.svg",alt:""}),Object(k.jsx)("img",{src:"/images/logo-fondora.svg",alt:""}),Object(k.jsx)("img",{src:"/images/logo-lootex.svg",alt:""}),Object(k.jsx)("img",{src:"/images/logo-redreamer.svg",alt:""})]})]}),Object(k.jsx)(xn,{className:"icon left"}),Object(k.jsx)(xn,{className:"icon right"})]})},vn=function(n){var e=n.count,t=n.unit;return Object(k.jsxs)(kn,{children:[Object(k.jsxs)("div",{className:"counter",children:["days"===t&&Math.floor(e/864e5),"hours"===t&&Math.floor(e%864e5/36e5),"minutes"===t&&Math.floor(e%36e5/6e4),"seconds"===t&&Math.floor(e%6e4/1e3)]}),Object(k.jsx)("div",{className:"unit",children:t})]})},wn=s.b.div($||($=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n"]))),kn=s.b.div(K||(K=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 8px;\n  border: 1px solid ",";\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  box-sizing: border-box; \n  "," {\n    width: 72px;\n    height: 72px;\n  }\n  > .counter {\n    margin-top: -12px;\n    font-family: 'Oswald';\n    font-size: 40px;\n    color: ",";\n    "," {\n      font-size: 24px;\n    }\n  }\n  > .unit {\n    text-transform: uppercase;\n    text-align: center;\n    font-family: 'Roboto Mono';\n    font-size: 12px;\n    letter-spacing: 0.5px;\n  }\n"])),l.green,T.md,l.green,T.md),yn=function(n){var e=n.limit,t=Object(i.useRef)(null),r=Object(i.useRef)(null),a=Object(i.useState)(null),c=Object(h.a)(a,2),o=c[0],s=c[1];Object(i.useRef)(null);function l(){var n=(new Date).getTime();s(r.current-n)}return Object(i.useEffect)((function(){return r.current=new Date(e).getTime(),t.current=setInterval(l,1e3),function(){return clearInterval(t.current)}}),[]),Object(k.jsx)(wn,{children:o&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(vn,{unit:"days",count:o}),Object(k.jsx)(vn,{unit:"hours",count:o}),Object(k.jsx)(vn,{unit:"minutes",count:o}),Object(k.jsx)(vn,{unit:"seconds",count:o})]})})},Ln=["children"],_n=s.b.button(W||(W=Object(o.a)(["\n  background: transparent;\n  border: 0;\n  > svg {\n    margin-bottom: 32px;\n  }\n"]))),Nn=function(n){var e=n.children,t=Object(C.a)(n,Ln);return Object(k.jsxs)(_n,Object(H.a)(Object(H.a)({},t),{},{children:[Object(k.jsx)("svg",{width:"46.43",height:"116.709",viewBox:"0 0 46.43 116.709",children:Object(k.jsxs)("g",{id:"Path_58","data-name":"Path 58",transform:"translate(91.25 -719.642) rotate(90)",fill:"none","stroke-miterlimit":"10",children:[Object(k.jsx)("path",{d:"M811.435,46.233l-3.637,3.9,16.383,15.229H720.642V70.7h103.55L807.8,85.933l3.637,3.9,23.448-21.8Z",stroke:"none"}),Object(k.jsx)("path",{d:"M 811.435302734375 46.2333984375 L 807.798583984375 50.13825225830078 L 824.181396484375 65.36717987060547 L 720.641845703125 65.36717987060547 L 720.641845703125 70.69861602783203 L 824.1917724609375 70.69861602783203 L 807.798583984375 85.93273162841797 L 811.435302734375 89.83760070800781 L 834.8828125 68.03810119628906 L 811.435302734375 46.2333984375 M 811.384521484375 44.82063293457031 L 836.3513793945312 68.03818511962891 L 811.3844604492188 91.25028228759766 L 806.384521484375 85.88168334960938 L 821.6466674804688 71.69861602783203 L 719.641845703125 71.69861602783203 L 719.641845703125 64.36717987060547 L 821.6368408203125 64.36717987060547 L 806.3845825195312 50.18920135498047 L 811.384521484375 44.82063293457031 Z",stroke:"none",fill:"#cafe5d"})]})}),e]}))};function Zn(n){return n<.5?8*n*n*n*n:1-Math.pow(-2*n+2,4)/2}function An(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(new Date).getTime(),r=window.pageYOffset,a=function a(){var c=.001*((new Date).getTime()-i),o=1-Math.min(1,c/e),s=t-r;window.autoScrolling=!0,window.scrollTo(0,t-Zn(o)*s),c<=e?n=requestAnimationFrame(a):(window.autoScrolling=!1,cancelAnimationFrame(n))};window.autoScrolling||a()}var zn,Mn,Sn,Bn,Hn,Cn,En,Tn=s.b.div(Y||(Y=Object(o.a)(["\n"]))),Rn=Object(s.b)(B)(G||(G=Object(o.a)(["\n  position: relative;\n  padding: 50px 0px 25px;\n  "," {\n    padding-bottom: 140px;\n  }\n  > img {\n    position: absolute;\n    bottom: 0;\n    width: 240px;\n    height: auto;\n    "," {\n      width: 136px;\n    }\n    &.left { left: 0; }\n    &.right { right: 0; }\n  }\n  > .bottom {\n    margin-top: 70px;\n    text-align: center;\n    "," {\n      margin-top: 35px;\n    }\n    .drop {\n      color: ",";\n      font-family: 'Nimbus-extend';\n      font-size: 16px;\n      "," {\n        font-size: 12px;\n      }\n    }\n  }\n"])),T.md,T.md,T.md,l.green,T.md),In=s.b.div(Q||(Q=Object(o.a)(["\n  color: ",";\n  .head {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 22px;\n    .item {\n      display: flex;\n      align-items: center;\n      position: relative;\n      margin-left: 12px;\n      font-size: 28px;\n      font-family: 'Nimbus-extend';\n      "," {\n        font-size: 18px;\n      }\n      &:first-child {\n        margin: 0;\n        .icon { display: none; }\n      }\n      .icon {\n        margin-right: 12px;\n        color: ",";\n        "," {\n          margin-top: -4px;\n        }\n      }\n    }\n  }\n  .title {\n    font-size: 80px;\n    line-height: 72px;\n    font-family: 'Nimbus-extend';\n    text-align: center;\n    "," {\n      font-size: 32px;\n      line-height: 32px;\n    }\n  }\n  .description {\n    font-size: 16px;\n    strong {\n      display: inline-block;\n      margin: 0 8px;\n      color: ",";\n    }\n  }\n"])),l.green,T.md,l.pink,T.md,T.md,l.pink),Vn=s.b.div(X||(X=Object(o.a)(["\n    margin-bottom: 35px;\n    font-size: 80px;\n    line-height: 72px;\n    font-family: 'Nimbus-extend';\n    text-align: center;\n    "," {\n      margin-bottom: 24px;\n      font-size: 32px;\n      line-height: 32px;\n    }\n"])),T.md),Fn=function(n){var e=Object.assign({},n),t=_("intro"),r=Object(i.useRef)(null);return Object(k.jsx)(Tn,Object(H.a)(Object(H.a)({ref:r},e),{},{children:Object(k.jsxs)(Rn,{children:[Object(k.jsxs)(In,{children:[Object(k.jsx)("div",{className:"head",children:t.head.map((function(n){return Object(k.jsxs)("div",{className:"item",children:[Object(k.jsx)(jn,{className:"icon"}),Object(k.jsx)(cn,{children:n})]},n)}))}),Object(k.jsx)(cn,{className:"title",children:z(t.title)}),Object(k.jsx)(Vn,{children:t.coming_soon}),Object(k.jsx)(yn,{limit:t.datetime})]}),Object(k.jsx)("div",{className:"bottom",children:Object(k.jsx)(Nn,{onClick:function(){An(1,r.current.offsetHeight+r.current.offsetTop)},children:Object(k.jsx)("div",{className:"drop",children:t.free})})}),Object(k.jsx)("img",{className:"left",src:"/images/charactor.png",alt:""}),Object(k.jsx)("img",{className:"right",src:"/images/charactor.png",alt:""})]})}))},Pn=function(){return Object(k.jsx)("svg",{width:"20.014",height:"19.872",viewBox:"0 0 20.014 19.872",children:Object(k.jsx)("path",{id:"Subtraction_2","data-name":"Subtraction 2",d:"M3059.031-2473.106h0a9.946,9.946,0,0,0-2.98-6.978,9.946,9.946,0,0,0-7.026-2.888,10.02,10.02,0,0,0,10.008-10.006,9.942,9.942,0,0,0,2.931,7.075,9.941,9.941,0,0,0,7.075,2.931,9.952,9.952,0,0,0-7.026,2.889A9.944,9.944,0,0,0,3059.031-2473.106Z",transform:"translate(-3049.022 2492.978)",fill:"#c73175"})})},Dn=s.b.div(zn||(zn=Object(o.a)(["\n  ",";\n  background-color: ",";\n"])),g.black,l.green),qn=s.b.div(Mn||(Mn=Object(o.a)(["\n  position: relative;\n  margin: 0 auto;\n  width: 764px;\n  max-width: 100%;\n  padding: 50px 0px 192px;\n  box-sizing: border-box;\n  "," {\n    padding: 42px 24px;\n  }\n"])),T.md),Jn=s.b.div(Sn||(Sn=Object(o.a)(["\n  margin-bottom: 40px;\n  color: ",";\n  "," {\n    margin-bottom: 26px;\n  }\n  .head {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    "," {\n      margin-bottom: 6px;\n    }\n    .item {\n      display: flex;\n      align-items: center;\n      position: relative;\n      font-size: 28px;\n      "," {\n        font-size: 16px;\n      }\n    }\n    .icon {\n      margin: 0 12px;\n      color: ",";\n      "," {\n        margin: 0 6px;\n        margin-top: 4px;\n        width: 12px;\n      }\n    }\n  }\n"])),l.black,T.md,T.md,T.md,l.pink,T.md),Un=s.b.div(Bn||(Bn=Object(o.a)(["\n  font-size: 40px;\n  font-weight: 600;\n  line-height: 56px;\n  letter-spacing: 1.5px;\n  text-align: center;\n  "," {\n    font-size: 20px;\n    line-height: 1;\n  }\n"])),T.md),$n=s.b.div(Hn||(Hn=Object(o.a)(["\n  > img {\n    display: block;\n    margin: 0 auto;\n    max-width: 100%;\n    height: auto;\n    "," {\n      width: 260px;\n    }\n  }\n  .title {\n    display: flex;\n    align-items: center;\n    margin-top: 60px;\n    margin-bottom: 16px;\n    letter-spacing: 1.5px;\n    font-weight: 600;\n    font-size: 18px;\n    "," {\n      margin-top: 40px;\n    }\n    > svg {\n      margin-right: 8px;\n    }\n  }\n  .steps {\n    margin-bottom: 72px;\n    li {\n      display: flex;\n      justify-content: flex-start;\n      margin-bottom: 8px;\n      > span {\n        display: inline-block;\n        margin-top: 4px;\n        margin-right: 16px;\n        white-space: nowrap;\n        font-size: 16px;\n        font-family: 'Nimbus-extend';\n      }\n      > p {\n        margin: 0;\n        font-size: 16px;\n        line-height: 24px;\n        white-space: break-spaces;\n        a {\n          color: ",";\n          text-decoration: underline;\n        }\n        &.note {\n          font-size: 14px;\n        }\n      }\n    }\n  }\n  .link {\n    display: block;\n    padding: 12px;\n    background: ",";\n    color: ",";\n    text-align: center;\n    > svg {\n      margin-left: 12px;\n    }\n  }\n"])),T.md,T.md,l.pink,l.black,l.green),Kn=function(n){var e=Object.assign({},n),t=_("reserve");return Object(k.jsx)(Dn,Object(H.a)(Object(H.a)({},e),{},{children:Object(k.jsxs)(qn,{children:[Object(k.jsxs)(Jn,{children:[Object(k.jsxs)("div",{className:"head",children:[Object(k.jsx)("span",{className:"item",children:t.head_front}),Object(k.jsx)(jn,{className:"icon"}),Object(k.jsx)("span",{className:"item",children:t.head_end})]}),Object(k.jsx)(Un,{children:t.title})]}),Object(k.jsxs)($n,{children:[Object(k.jsx)("img",{src:"/images/more_want.png",alt:""}),Object(k.jsxs)("div",{className:"title",children:[Object(k.jsx)(Pn,{}),t.info.title]}),Object(k.jsxs)("ul",{className:"steps",children:[Object(k.jsxs)("li",{children:[Object(k.jsx)("span",{children:"Step 1."}),Object(k.jsxs)("p",{children:[t.info.step1,Object(k.jsx)("a",{href:t.info.discord_link,target:"_blank",children:t.info.discord})]})]}),Object(k.jsxs)("li",{children:[Object(k.jsx)("span",{children:"Step 2."}),Object(k.jsx)("p",{dangerouslySetInnerHTML:{__html:t.info.step2}})]}),Object(k.jsxs)("li",{children:[Object(k.jsx)("span",{children:"Step 3."}),Object(k.jsx)("p",{children:t.info.step3})]}),Object(k.jsx)("li",{children:Object(k.jsx)("p",{className:"note",children:t.info.note})})]}),Object(k.jsxs)("a",{className:"link",href:t.info.reserve_link,target:"_blank",children:[t.info.reserve,Object(k.jsx)(on,{})]})]})]})}))},Wn=s.b.div(Cn||(Cn=Object(o.a)(["\n  ",";\n"])),g.green),Yn=function(){return Object(k.jsxs)(Wn,{children:[Object(k.jsx)(tn,{}),Object(k.jsx)(Fn,{}),Object(k.jsx)(Kn,{}),Object(k.jsx)(On,{})]})},Gn=s.b.div(En||(En=Object(o.a)(["\n\n"]))),Qn=function(n){var e=n.wording,t=L(null!==e&&void 0!==e?e:"/wordings/main.json");return Object(k.jsxs)(Gn,{children:[Object(k.jsxs)(u.a,{children:[Object(k.jsx)("title",{children:"Coming Soon..."}),Object(k.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(k.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),Object(k.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700;900&display=swap",rel:"stylesheet"}),Object(k.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap",rel:"stylesheet"})]}),Object(k.jsx)(m,{}),!t&&Object(k.jsx)("div",{children:"\u7db2\u7ad9\u5167\u5bb9\u6e96\u5099\u4e2d\uff0c\u8acb\u7a0d\u5019"}),t&&Object(k.jsx)(Yn,{})]})};c.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(Qn,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.b946b655.chunk.js.map