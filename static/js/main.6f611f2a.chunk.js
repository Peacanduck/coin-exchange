(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{293:function(e,n,t){},328:function(e,n){},337:function(e,n){},355:function(e,n){},357:function(e,n){},374:function(e,n){},375:function(e,n){},438:function(e,n){},440:function(e,n){},449:function(e,n){},451:function(e,n){},476:function(e,n){},478:function(e,n){},479:function(e,n){},485:function(e,n){},498:function(e,n){},510:function(e,n){},513:function(e,n){},518:function(e,n){},529:function(e,n){},532:function(e,n){},585:function(e,n,t){"use strict";t.r(n);var a,r,c,o=t(0),i=t.n(o),l=t(22),s=t.n(l),u=(t(293),t(112)),m=t(27),p=t(64),f=t(62),d=t(58),h=t(9),b=t(10),g=t(16),w=t(15),E=t.p+"static/media/logo.2d27ead7.svg",v=t(59),O=v.a.img(a||(a=Object(d.a)(["\nheight: 9rem;\npointer-events: none;\n\n@media (prefers-reduced-motion: no-preference) {\n      animation: App-logo-spin infinite 10s linear;\n  }\n  @keyframes App-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]))),j=v.a.header(r||(r=Object(d.a)(["\nbackground-color: #282c34;\nmin-height: 20vh;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: flex-start;\nfont-size: 36px;\ncolor: white;\n"]))),k=function(e){Object(g.a)(t,e);var n=Object(w.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return i.a.createElement(j,{className:"App-header"},i.a.createElement(O,{src:E,className:"App-logo",alt:"logo"}),i.a.createElement("h1",null,"Coin Exchange"))}}]),t}(o.Component),y=t(625),x=t(628),S=v.a.section(c||(c=Object(d.a)(["\n     font-size:2rem;\n     text-align: left;\n     padding: 1.5rem 0 1.5rem 5rem;\n        \n"]))),C={margin:"2px 2px",minWidth:200,display:"inline-block",color:"#fff",backgroundColor:"#212121",padding:"4px"};function N(e){var n=e.showBalance,t=n?"Hide Balance":"Show Balance",a=null;return a=n?i.a.createElement(i.a.Fragment,null," Balance: $",e.amount,i.a.createElement("br",null),"Account: ",e.account," "):i.a.createElement(i.a.Fragment,null," * "),i.a.createElement(S,null,i.a.createElement(y.a,{style:C},a,i.a.createElement("br",null),i.a.createElement(x.a,{color:"primary",onClick:e.handleHide},t),i.a.createElement(x.a,{color:"primary",onClick:e.enableEth},"Connect MetaMask")))}var B=t(629),A=t(630),D=t(8),M=Object(D.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(B.a),P=Object(D.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(A.a);function z(e){return i.a.createElement(P,null,i.a.createElement(M,null,e.name),i.a.createElement(M,{align:"right"},e.ticker),i.a.createElement(M,{align:"right"},e.price),i.a.createElement(M,{align:"right"},e.balance),i.a.createElement(M,{align:"right"},i.a.createElement("form",{action:"#",method:"POST"},i.a.createElement(x.a,{color:"default",onClick:function(n){n.preventDefault(),e.handleRefresh(e.tickerId)}},"Refresh"))))}var F=t(588),I=t(633),R=t(634),H=t(632),T=t(635),W=t(631),q=Object(D.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(B.a),J=(Object(D.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(A.a),Object(W.a)({table:{minWidth:650}}));function U(e){var n=J();return i.a.createElement(H.a,{component:F.a},i.a.createElement(I.a,{className:n.table,"aria-label":"simple table"},i.a.createElement(R.a,null,i.a.createElement(A.a,null,i.a.createElement(q,null,"Name"),i.a.createElement(q,{align:"right"},"Ticker"),i.a.createElement(q,{align:"right"},"Price"),i.a.createElement(q,{align:"right"},"Balance"),i.a.createElement(q,{align:"right"},"Actions"))),i.a.createElement(T.a,null,e.coinData.map((function(n){var t=n.key,a=n.name,r=n.ticker,c=n.price,o=n.balance;return i.a.createElement(z,{key:t,handleRefresh:e.handleRefresh,name:a,ticker:r,price:c,balance:e.visible?o:"*",tickerId:t})})))))}var $=t(119),G=t.n($),L=t(161),X=t.n(L),Y=t(51),_=t(644),K=t(637),Q=t(639),V=t(643),Z=t(638),ee=t(589),ne=t(590),te=t(642),ae=t(645),re=t(641),ce=t(640),oe=t(75),ie=t(277),le=t.n(ie),se=t(162),ue=t.n(se),me=t(120),pe=t.n(me),fe=t(5),de=240,he=Object(W.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:de,width:"calc(100% - ".concat(de,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:de,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:de,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(Y.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));function be(e){var n,t,a=[i.a.createElement(le.a,null),i.a.createElement(ue.a,null),i.a.createElement(pe.a,null),i.a.createElement(pe.a,null)],r=he(),c=(Object(oe.a)(),i.a.useState(!1)),o=Object(f.a)(c,2),l=o[0],s=o[1],u=function(){s(!0)},m=function(){s(!1)};return i.a.createElement("div",{className:r.root},i.a.createElement(K.a,null),i.a.createElement(V.a,{variant:"permanent",className:Object(fe.a)(r.drawer,(n={},Object(Y.a)(n,r.drawerOpen,l),Object(Y.a)(n,r.drawerClose,!l),n)),classes:{paper:Object(fe.a)((t={},Object(Y.a)(t,r.drawerOpen,l),Object(Y.a)(t,r.drawerClose,!l),t))}},i.a.createElement("div",{className:r.toolbar},i.a.createElement(Z.a,{onClick:function(){l?m():u()}},i.a.createElement(_.a,{className:r.orange},"N"))),i.a.createElement(Q.a,null),i.a.createElement(ce.a,null,["Overview","History","filler","Drafts"].map((function(e,n){return i.a.createElement("form",{action:"#",method:"POST"},i.a.createElement(re.a,{button:!0,key:e,onClick:function(n){return function(e,n){n.preventDefault(),alert("hi "+e.toString())}(e,n)}},i.a.createElement(te.a,null,a[n]),i.a.createElement(ae.a,{primary:e})))}))),i.a.createElement(Q.a,null),i.a.createElement(ee.a,null,["All mail","Trash","Spam"].map((function(e,n){return i.a.createElement(ne.a,{button:!0,key:e},i.a.createElement(te.a,null,n%2===0?i.a.createElement(pe.a,null):i.a.createElement(ue.a,null)),i.a.createElement(ae.a,{primary:e}))})))),i.a.createElement("main",{className:r.content},i.a.createElement("div",{className:r.toolbar}),e.header,e.body,e.footer))}var ge,we=t(278),Ee=t.n(we),ve=v.a.div(ge||(ge=Object(d.a)(["\ntext-align: center;\nbackground-color: blue;\ncolor: #cccccc;\n"])));function Oe(e,n){var t=e.data.find((function(e){return e.id===n})).quotes.USD.price;return Number(parseFloat(Number(t)).toFixed(4))}var je=function(e){var n=new X.a(window.web3.currentProvider),t=Object(o.useState)(0),a=Object(f.a)(t,2),r=a[0],c=a[1],l=Object(o.useState)(!0),s=Object(f.a)(l,2),d=s[0],h=s[1],b=Object(o.useState)([]),g=Object(f.a)(b,2),w=g[0],E=g[1],v=Object(o.useState)([]),O=Object(f.a)(v,2),j=O[0],y=O[1];function x(){return(x=Object(p.a)(Object(m.a)().mark((function e(){var t;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee()();case 2:(t=e.sent)?S(t):console.log("Please install MetaMask!"),window.web3?n=new X.a(window.web3.currentProvider):alert("You have to install MetaMask !");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){try{e!==window.ethereum&&console.error("Do you have multiple wallets installed?"),window.ethereum.enable().then(Object(p.a)(Object(m.a)().mark((function n(){var t,a;return Object(m.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.send("eth_requestAccounts");case 2:return t=n.sent,n.next=5,C(t.result[0]);case 5:a=n.sent,y(t.result),console.log(t.result[0]),console.log(a);case 9:case"end":return n.stop()}}),n)}))))}catch(n){}}Object(o.useEffect)((function(){0===w.length&&B()})),window.ethereum.on("accountsChanged",function(){var e=Object(p.a)(Object(m.a)().mark((function e(n){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(n),e.t0=c,e.next=4,C(n[0]);case 4:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=console,e.next=9,C(n[0]);case 9:e.t3=e.sent,e.t2.log.call(e.t2,e.t3),console.log(n);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());var C=function(){var e=Object(p.a)(Object(m.a)().mark((function e(t){var a;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.eth.getBalance(t,(function(e,t){if(e)console.log(e);else{var a=n.utils.fromWei(t,"ether");c(a),console.log(a+" ETH")}}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(Object(m.a)().mark((function e(){var n,t;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([G.a.get("https://api.coinpaprika.com/v1/coins"),G.a.get("https://api.coinpaprika.com/v1/tickers")]);case 2:n=e.sent,t=n[0].data.slice(0,30).map((function(e){return{key:e.id,name:e.name,ticker:e.symbol,balance:0,price:Oe(n[1],e.id)}})),E(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(p.a)(Object(m.a)().mark((function e(n){var t,a,r;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.coinpaprika.com/v1/tickers/"+n);case 2:t=e.sent,a=Number(parseFloat(Number(t.data.quotes.USD.price).toFixed(4))),r=w.map((function(e){var t=Object(u.a)({},e);return console.log(e),console.log(t),n===e.key&&(t.price=a),t})),E(r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return i.a.createElement(ve,{className:"App"},i.a.createElement(be,{header:i.a.createElement(k,null),body:i.a.createElement(N,{amount:r,account:j[0]||"no account selected",showBalance:d,handleHide:function(){h((function(e){return!e}))},enableEth:function(){return x.apply(this,arguments)}}),footer:i.a.createElement(U,{visible:d,coinData:w,handleRefresh:A})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[585,1,2]]]);
//# sourceMappingURL=main.6f611f2a.chunk.js.map