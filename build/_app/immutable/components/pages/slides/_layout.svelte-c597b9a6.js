import{S as x,i as S,s as A,C as E,k as p,a as D,q as I,l as m,m as b,h as _,c as q,r as C,n as v,b as g,G as $,I as H,D as L,E as V,F as Y,f as j,t as F,H as G}from"../../../chunks/index-2b26cad3.js";import{p as N}from"../../../chunks/stores-e1021328.js";import{j as f}from"../../../chunks/singletons-073c6ff0.js";f.disable_scroll_handling;const k=f.goto;f.invalidate;f.invalidateAll;f.preload_data;f.preload_code;f.before_navigate;f.after_navigate;function P(o){let a,d,l,r,u,n,s,h;const c=o[2].default,t=E(c,o,o[1],null);return{c(){a=p("div"),t&&t.c(),d=D(),l=p("div"),r=p("h1"),u=I("Sorry, this part of the website is not ready for mobile use."),this.h()},l(e){a=m(e,"DIV",{class:!0});var i=b(a);t&&t.l(i),i.forEach(_),d=q(e),l=m(e,"DIV",{class:!0});var y=b(l);r=m(y,"H1",{class:!0});var w=b(r);u=C(w,"Sorry, this part of the website is not ready for mobile use."),w.forEach(_),y.forEach(_),this.h()},h(){v(a,"class","hidden h-screen p-5 lg:block"),v(r,"class","text-center text-3xl font-extrabold"),v(l,"class","lg:hidden")},m(e,i){g(e,a,i),t&&t.m(a,null),g(e,d,i),g(e,l,i),$(l,r),$(r,u),n=!0,s||(h=H(window,"keydown",o[0]),s=!0)},p(e,[i]){t&&t.p&&(!n||i&2)&&L(t,c,e,e[1],n?Y(c,e[1],i,null):V(e[1]),null)},i(e){n||(j(t,e),n=!0)},o(e){F(t,e),n=!1},d(e){e&&_(a),t&&t.d(e),e&&_(d),e&&_(l),s=!1,h()}}}let R=1,z=9;function B(o,a,d){let l;G(o,N,s=>d(3,l=s));let{$$slots:r={},$$scope:u}=a;function n(s){if(!s.key)return;let h=l.route.id,c=Number(h.charAt(h.length-1));if(s.key==="ArrowRight"){let t=c+1;t<=z?k(`/slides/${t}`):alert("You are at the end of the presentation!")}else if(s.key==="ArrowLeft"){let t=c-1;t>=R?k(`/slides/${t}`):alert("You are at the first slide!")}}return o.$$set=s=>{"$$scope"in s&&d(1,u=s.$$scope)},[n,u,r]}class O extends x{constructor(a){super(),S(this,a,B,P,A,{})}}export{O as default};