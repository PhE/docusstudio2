import{d as c,b as o,c as r,e as t,t as s,al as d,L as i,w as _,f as b,av as p,H as u}from"./entry.da37b844.js";const m={class:"hero-content flex-col lg:flex-row"},h=t("img",{src:"https://paxpar.tech/site/wp-content/uploads/2022/02/about1-cartoonized.png",class:"max-w-sm rounded-lg shadow-2xl"},null,-1),g={class:"text-5xl font-bold"},x={class:"py-6"},f={class:"btn bg-teal-600"},v=c({__name:"4",props:{title:{},btnlabel:{},btnto:{},background:{},img:{}},setup(a){const e=a;return(n,k)=>{const l=u;return o(),r("div",{class:"hero min bg-base-200",style:p(`background-image: url(${e.background});`)},[t("div",m,[h,t("div",null,[t("h1",g,s(e.title),1),t("div",x,[d(n.$slots,"default")]),e.btnlabel?(o(),i(l,{key:0,to:e.btnto},{default:_(()=>[t("button",f,s(e.btnlabel),1)]),_:1},8,["to"])):b("",!0)])])],4)}}});export{v as default};
