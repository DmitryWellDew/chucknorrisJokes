(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(n,t,e){},46:function(n,t,e){},71:function(n,t,e){"use strict";e.r(t);var r=e(2),c=e(1),a=e.n(c),i=e(18),o=e.n(i),u=(e(45),e(5)),s=(e(46),e(9)),b=e(10),l="SET-ASYNC-RANDOM-JOKE",d="SET-ASYNC-MAIN-IMAGE",f={value:"",mainImage:""},j=function(n){return{type:"SET-RANDOM-JOKE",data:n}},p=function(n){return{type:"SET-MAIN-IMAGE",data:n}},h=e.p+"static/media/arrowLeft.abdec602.gif",x=e(6);function O(){var n=Object(u.a)(["\nwidth: 150px;\nheight: 75px;\nposition: absolute;\nleft: 0;\nright: 0;\ntop: 0;\nbottom: 0;\nmargin: auto;\n"]);return O=function(){return n},n}function v(){var n=Object(u.a)(["\nwidth: 1000px;\nheight: 20px;\ndisplay: table;\nposition: absolute;\nleft: 0;\nright: 0;\ntop: 0;\nbottom: 0;\nmargin: auto;\ncolor: aliceblue;\n"]);return v=function(){return n},n}function g(){var n=Object(u.a)(["\nwidth: 1050px;\nheight: 200px;\nposition: relative;\n"]);return g=function(){return n},n}function m(){var n=Object(u.a)(["\nwidth: 150px;\nheight: 200px;\nposition: relative;\n"]);return m=function(){return n},n}function w(){var n=Object(u.a)(["\ntext-align: center;\nbackground-color: chocolate;\nborder-radius: 7px;\n:active, \n:focus {\n    outline: none;\n}\ncolor: aliceblue;\n"]);return w=function(){return n},n}function E(){var n=Object(u.a)(["\nwidth: 50px;\nheight: 50px;\ndisplay: block;\nmargin: 0 auto;\n"]);return E=function(){return n},n}function k(){var n=Object(u.a)(["\ndisplay: flex;\nwidth: 1200px;\nheight: 200px;\nborder: 1px solid darkslateblue;\nbackground-color: darkslateblue;\ntext-align: center;\nbox-shadow: 1px 6px 36px 7px;\n"]);return k=function(){return n},n}var T=x.a.div(k()),S=x.a.div(E()),y=x.a.button(w()),R=x.a.div(m()),C=x.a.div(g()),A=x.a.div(v()),P=x.a.div(O());function N(){var n=Object(s.b)();Object(c.useEffect)((function(){n({type:d})}),[n]);var t=Object(s.c)((function(n){return n.RandomJokeReducer.value})),e=Object(s.c)((function(n){return n.RandomJokeReducer.mainImage}));return Object(r.jsxs)(T,{children:[Object(r.jsx)(R,{children:Object(r.jsxs)(P,{children:[Object(r.jsx)(S,{as:"img",src:e,alt:"mainImage"}),Object(r.jsx)(y,{onClick:function(){n({type:l})},children:"Random Joke"})]})}),Object(r.jsx)(C,{children:Object(r.jsx)(A,{children:t||Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{src:h}),Object(r.jsx)("div",{children:"Click the button"})]})})})]})}var I=e(13),J=e(23),F="SET-ASYNC-JOKE-CATEGORIES",G="SET-ASYNC-CATEGORY",M={categories:[],value:""},L=function(n){return{type:"SET-JOKE-CATEGORIES",data:n}},Y=function(n){return{type:"SET-CATEGORY",value:n}},D=function(n){return{type:G,value:n}};function K(){var n=Object(u.a)(["\nborder-radius: 10px;\nbackground-color: chocolate;\ncolor: aliceblue;\n:active, \n:focus {\n    outline: none;\n}\n"]);return K=function(){return n},n}function z(){var n=Object(u.a)(["\ndisplay: block;\nwidth: 100px;\nheight: 30px;\nfont-size: 17px;\nmargin: 0 auto;\nbackground-color: aliceblue;\nborder-radius: 10px;\n:active, \n:focus {\n    outline: none;\n"]);return z=function(){return n},n}function B(){var n=Object(u.a)(["\nwidth: 900px;\nheight: 20px;\ntext-align: center;\nposition: absolute;\nleft: 0;\nright: 0;\ntop: 0;\nbottom: 0;\nmargin: auto;\ncolor: aliceblue;\n"]);return B=function(){return n},n}function U(){var n=Object(u.a)(["\nwidth: 1000px;\nposition: relative;\n"]);return U=function(){return n},n}function X(){var n=Object(u.a)(["\nwidth: 200px;\nheight: 66px;\nposition: absolute;\nleft: 0;\nright: 0;\ntop: 0;\nbottom: 0;\nmargin: auto;\n"]);return X=function(){return n},n}function q(){var n=Object(u.a)(["\nwidth: 200px;\nheight: 300px;\nposition: relative;\n"]);return q=function(){return n},n}function _(){var n=Object(u.a)(["\ndisplay: flex;\nwidth:1200px;\nheight: 300px;\nmargin: 0 auto;\nbackground-color: darkslateblue;\nborder: 1px solid darkslateblue;\nbox-shadow: 1px 6px 36px 7px;\n"]);return _=function(){return n},n}var H=x.a.div(_()),Q=x.a.div(q()),V=x.a.div(X()),W=x.a.div(U()),Z=x.a.div(B()),$=x.a.select(z()),nn=x.a.button(K());function tn(){var n=Object(s.b)();Object(c.useEffect)((function(){n({type:F})}),[n]);var t=Object(c.useState)(""),e=Object(I.a)(t,2),a=e[0],i=e[1],o=Object(s.c)((function(n){return n.JokeCategoriesReducer.categories})),u=Object(s.c)((function(n){return n.JokeCategoriesReducer.value}));return Object(r.jsxs)(H,{className:"App",children:[Object(r.jsx)(Q,{children:Object(r.jsxs)(V,{children:[Object(r.jsx)($,{onChange:function(t){n(D(t.target.value)),i(t.target.value)},children:o.map((function(n,t){return Object(r.jsx)("option",{value:n,children:n},t)}))}),Object(r.jsx)(nn,{onClick:function(){n(D(""===a?a=o[0]:a))},children:"Enjoy by other jokes of this category"})]})}),Object(r.jsx)(W,{children:Object(r.jsx)(Z,{children:u||Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{alt:"arrow",src:h}),Object(r.jsx)("div",{children:"Choose the category"})]})})})]})}var en="SET-FREE-ENTERED-ASYNC-TEXT",rn={jokesList:[]};function cn(){var n=Object(u.a)(["\n  height: 100%;\n  margin-top: 64px;\n"]);return cn=function(){return n},n}function an(){var n=Object(u.a)(["\n  width: 150px;\n  height: 100px;\n  color: aliceblue;\n  left: 0;\n  right: 0;\n  top: 117px;\n  bottom: 0;\n  margin: 0 auto;\n  position: absolute;\n"]);return an=function(){return n},n}function on(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n"]);return on=function(){return n},n}function un(){var n=Object(u.a)(["\n  width: 223px;\n  height: 20px;\n  position: absolute;\n  left: 42px;\n"]);return un=function(){return n},n}function sn(){var n=Object(u.a)(["\n  display: flex;\n  position: relative;\n"]);return sn=function(){return n},n}function bn(){var n=Object(u.a)(["\n  color: ",";;\n  margin-right: ",";;\n  cursor: pointer;\n"]);return bn=function(){return n},n}function ln(){var n=Object(u.a)(["\n  text-align: center;\n  background-color: chocolate;\n  border-radius: 7px;\n  :active,\n  :focus {\n    outline: none;\n  }\n  color: aliceblue;\n  margin: 0 auto;\n"]);return ln=function(){return n},n}function dn(){var n=Object(u.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 117px;\n  bottom: 0;\n  margin: auto;\n"]);return dn=function(){return n},n}function fn(){var n=Object(u.a)(["\n  width: 200px;\n  height: 100%;\n  position: relative;\n"]);return fn=function(){return n},n}function jn(){var n=Object(u.a)(["\n  width: 900px;\n  text-align: center;\n  padding: 10px;\n"]);return jn=function(){return n},n}function pn(){var n=Object(u.a)(["\n  width: 1000px;\n  color: aliceblue;\n  margin-top: 40px;\n"]);return pn=function(){return n},n}function hn(){var n=Object(u.a)(["\n  display: flex;\n  width: 1200px;\n  min-height: 100%;\n  margin: 0 auto;\n  background-color: darkslateblue;\n  border: 1px solid darkslateblue;\n  box-shadow: 1px 6px 36px 7px;\n"]);return hn=function(){return n},n}function xn(){var n=Object(u.a)(["\n  width: 170px;\n  height: 30px;\n  border-radius: 10px;\n  border: ",";\n  background-color: ",";\n  :active,\n  :focus {\n    outline: none;\n  }\n  ::placeholder {\n    color: red;\n    font-size: 14px;\n    font-weight: bold;\n    opacity: 0.5;\n  }\n"]);return xn=function(){return n},n}var On=x.a.input(xn(),(function(n){return n.showError?"4px solid red":"1px solid aliceblue"}),(function(n){return n.showError?"mistyrose":"aliceblue"})),vn=x.a.div(hn()),gn=x.a.div(pn()),mn=x.a.div(jn()),wn=x.a.div(fn()),En=x.a.div(dn()),kn=x.a.button(ln()),Tn=x.a.span(bn(),(function(n){return n.isNumberClicked?"chocolate":"white"}),(function(n){return n.isFirstPortion?"5px":"13px"})),Sn=x.a.div(sn()),yn=x.a.div(un()),Rn=x.a.div(on()),Cn=x.a.div(an()),An=x.a.div(cn()),Pn={currentPage:1};function Nn(){var n=Object(u.a)(["\n  display: ",";\n  position: absolute;\n  left: 268px;\n"]);return Nn=function(){return n},n}var In=x.a.button(Nn(),(function(n){return n.isShowButton?"block":"none"})),Jn=a.a.memo((function(n){for(var t=Object(s.b)(),e=Object(s.c)((function(n){return n.PaginationPagesReducer.currentPage})),a=[],i=[],o=n.portionPagesSize,u=0,b=!0,l=Object(c.useState)(1),d=Object(I.a)(l,2),f=d[0],j=d[1],p=(f-1)*o+1,h=f*o,x=0;x<=n.list.length;x++)i.push(x),u=Math.ceil(i.length/o);for(var O=1;O<=u;O++)a.push(O);return u>=p&&u<=h&&(b=!1),Object(r.jsxs)(Sn,{children:[f>1&&Object(r.jsxs)("button",{onClick:function(){j(f-1)},children:[" ","prev"," "]}),Object(r.jsx)(yn,{children:a.filter((function(n){if(n>=p&&n<=h)return n})).map((function(c,a){return Object(r.jsx)(Tn,{onClick:function(){t(function(n){return{type:"SET-CURRENT-PAGE",page:n}}(c)),n.getPage()},isNumberClicked:e==c,isFirstPortion:f>1,children:c},a)}))}),Object(r.jsx)(In,{onClick:function(){j(f+1)},isShowButton:b,children:"next"}),Object(r.jsx)("div",{children:"dfdfdf"})]})})),Fn=a.a.memo((function(){var n=Object(s.b)(),t=Object(s.c)((function(n){return n.FreeTextSearchingReducer.jokesList})),e=Object(s.c)((function(n){return n.PaginationPagesReducer.currentPage})),a=Object(c.useState)(""),i=Object(I.a)(a,2),o=i[0],u=i[1],b=Object(c.useState)(!1),l=Object(I.a)(b,2),d=l[0],f=l[1],j=Object(c.useState)(1),p=Object(I.a)(j,2),x=p[0],O=p[1],v=5*(x-1)+1,g=5*x;return Object(r.jsxs)(vn,{className:"App",children:[Object(r.jsx)(wn,{children:Object(r.jsxs)(En,{children:[Object(r.jsx)(On,{onFocus:function(){f(d=!1)},placeholder:d?"Please write something":"",showError:d,onChange:function(n){return t=n.currentTarget.value,void u(t);var t},type:"text"}),Object(r.jsx)(kn,{onClick:function(){""===o?f(d=!0):(n({type:en,value:o}),f(d=!1))},children:"Enter some Text"})]})}),0!==t.length?Object(r.jsxs)(gn,{children:[Object(r.jsx)(Jn,{list:t,getPage:function(){O(e)},portionPagesSize:10}),Object(r.jsx)(An,{children:t.filter((function(n,t){if(t>=v&&t<=g)return n})).map((function(n,t){return Object(r.jsxs)(mn,{children:[Object(r.jsx)("div",{children:n.value}),Object(r.jsx)("div",{children:"----------------------------------"})]},t)}))})]}):Object(r.jsx)(Rn,{children:Object(r.jsxs)(Cn,{children:[Object(r.jsx)("img",{alt:"arrow",src:h}),Object(r.jsx)("div",{children:"Enter some text"})]})})]})}));function Gn(){var n=Object(u.a)(["\nwidth:1200px;\nheight: 500px;\nmargin: 0 auto;\n"]);return Gn=function(){return n},n}var Mn=x.a.div(Gn());var Ln=function(){return Object(r.jsxs)(Mn,{children:[Object(r.jsx)(N,{}),Object(r.jsx)(tn,{}),Object(r.jsx)(Fn,{})]})},Yn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,72)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;e(n),r(n),c(n),a(n),i(n)}))},Dn=e(12),Kn=e(39),zn=e(7),Bn=e.n(zn),Un=e(8),Xn=e(38),qn=e.n(Xn).a.create({baseURL:"https://api.chucknorris.io/jokes/",withCredentials:!0}),_n=function(){return qn.get("random").then((function(n){return n.data.icon_url}))},Hn=function(){return qn.get("random").then((function(n){return n.data.value}))},Qn=function(){return qn.get("categories").then((function(n){return n.data}))},Vn=function(n){return qn.get("random?category=".concat(n)).then((function(n){return n.data.value}))},Wn=function(n){return qn.get("search?query=".concat(n))},Zn=Bn.a.mark(et),$n=Bn.a.mark(rt),nt=Bn.a.mark(ct),tt=Bn.a.mark(at);function et(){var n;return Bn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Un.b)(Hn);case 2:return n=t.sent,t.next=5,Object(Un.c)(j(n));case 5:case"end":return t.stop()}}),Zn)}function rt(){return Bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Un.d)(l,et);case 2:case"end":return n.stop()}}),$n)}function ct(){var n;return Bn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Un.b)(_n);case 2:return n=t.sent,t.next=5,Object(Un.c)(p(n));case 5:case"end":return t.stop()}}),nt)}function at(){return Bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Un.d)(d,ct);case 2:case"end":return n.stop()}}),tt)}var it=Bn.a.mark(ut),ot=Bn.a.mark(st);function ut(n){var t,e;return Bn.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.value,r.next=3,Object(Un.b)((function(){return Wn(t)}));case 3:return e=r.sent,r.next=6,Object(Un.c)({type:"SET-FREE-ENTERED-TEXT",jokesList:e.data.result});case 6:case"end":return r.stop()}}),it)}function st(){return Bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Un.d)(en,ut);case 2:case"end":return n.stop()}}),ot)}var bt=Bn.a.mark(jt),lt=Bn.a.mark(pt),dt=Bn.a.mark(ht),ft=Bn.a.mark(xt);function jt(){var n;return Bn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Un.b)(Qn);case 2:return n=t.sent,t.next=5,Object(Un.c)(L(n));case 5:case"end":return t.stop()}}),bt)}function pt(n){var t,e;return Bn.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.value,r.next=3,Object(Un.b)((function(){return Vn(t)}));case 3:return e=r.sent,r.next=6,Object(Un.c)(Y(e));case 6:case"end":return r.stop()}}),lt)}function ht(){return Bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Un.d)(F,jt);case 2:case"end":return n.stop()}}),dt)}function xt(){return Bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Un.d)(G,pt);case 2:case"end":return n.stop()}}),ft)}var Ot=Bn.a.mark(vt);function vt(){return Bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Un.a)([rt(),st(),ht(),xt(),at()]);case 2:case"end":return n.stop()}}),Ot)}var gt=Object(Kn.a)(),mt=Object(Dn.c)({RandomJokeReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-RANDOM-JOKE":return Object(b.a)(Object(b.a)({},n),{},{value:t.data});case"SET-MAIN-IMAGE":return Object(b.a)(Object(b.a)({},n),{},{mainImage:t.data});default:return n}},JokeCategoriesReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-JOKE-CATEGORIES":return Object(b.a)(Object(b.a)({},n),{},{categories:[].concat(Object(J.a)(n.categories),Object(J.a)(t.data))});case"SET-CATEGORY":return Object(b.a)(Object(b.a)({},n),{},{value:t.value});default:return n}},FreeTextSearchingReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-FREE-ENTERED-TEXT":return Object(b.a)(Object(b.a)({},n),{},{jokesList:t.jokesList});default:return n}},PaginationPagesReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-CURRENT-PAGE":return Object(b.a)(Object(b.a)({},n),{},{currentPage:t.page});default:return n}}}),wt=Object(Dn.e)(mt,Object(Dn.a)(gt));window.store=wt,gt.run(vt),o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(s.a,{store:wt,children:Object(r.jsx)(Ln,{})})}),document.getElementById("root")),Yn()}},[[71,1,2]]]);
//# sourceMappingURL=main.428f1839.chunk.js.map