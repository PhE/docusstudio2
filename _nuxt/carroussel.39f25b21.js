import{d as b,r as C,s as B,ao as F,ay as N,q as V,b as o,L as r,w as a,c,F as Y,a0 as $,K as p,g as m,G as f,t as l,e as h,f as L,cm as q,cn as M,O as T,H as z}from"./entry.da37b844.js";import E from"./Card.dc1dc22d.js";import G from"./CardGrid.2ce44969.js";import"./slot.9c9e22e4.js";import"./node.676c5e99.js";const H={class:"relative"},I=["src"],K={class:"badge"},Q=b({__name:"carroussel",props:{model:{default:"article"},show_date:{type:Boolean,default:!1}},async setup(g){let n,_;const d=g,s=C(!0),{path:y}=B(),{data:v}=([n,_]=F(()=>N(`content-${y}-${d.model}`,()=>V().where({model:d.model}).only(["title","description","image","icon","_path","createdAt"]).find())),n=await n,_(),n);function x(t){if(t.createdAt!==void 0)return s.value?q(Date.parse(t.createdAt)):M(Date.parse(t.createdAt),"YYYY-MM-DD").value}function A(){return"mdi:lightbulb-outline"}return(t,i)=>{const k=T,u=z,w=E,D=G;return o(),r(D,null,{default:a(()=>[(o(!0),c(Y,null,$(p(v),e=>(o(),r(w,{icon:e.icon},{title:a(()=>[m(u,{href:e._path},{default:a(()=>[f(l(e.title),1)]),_:2},1032,["href"])]),description:a(()=>[m(u,{href:e._path},{default:a(()=>[f(l(e.description),1)]),_:2},1032,["href"])]),default:a(()=>[h("div",H,[e.image?(o(),c("img",{key:0,src:e.image},null,8,I)):(o(),r(k,{key:1,name:A(),size:"128"},null,8,["name"])),t.show_date&&e.createdAt?(o(),c("div",{key:2,onClick:i[0]||(i[0]=O=>s.value=!p(s)),class:"absolute bottom-0 left-0 m-1 cursor-progress"},[h("span",K,l(x(e)),1)])):L("",!0)])]),_:2},1032,["icon"]))),256))]),_:1})}}});export{Q as default};
