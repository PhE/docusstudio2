import{d as u,U as p,V as d,r as m,o as b,b as f,c as v,e as t,t as y,K as _}from"./entry.da37b844.js";import{u as h}from"./usePaxparAPI.15b996af.js";import"./fetch.5c3c76d5.js";import"./url.6edfad5e.js";import"./useToast.71e63648.js";const g=t("h1",null,"DEBUG realtime",-1),S=u({__name:"realtime",setup(k){const s=p();d();const{useFetchPP:r}=h();var e;const a=m();b(()=>{console.log({client:s}),e=s.realtime.channel("broadcast-test"),e.on("broadcast",{event:"some-event"},n=>console.log(n)),e.subscribe(async(n,o)=>{n==="SUBSCRIBED"?await e.send({type:"broadcast",event:"some-event",payload:{hello:"init"}}):console.log(`unknown status ${n}, err = ${o}`)})});async function c(){await e.send({type:"broadcast",event:"some-event",payload:{hello:"world"}})}async function l(){await s.from("ppevent").insert({aaa:433,bbb:"hello !!"})}async function i(){a.value=(await r("/api/ref/dummy")).data}return(n,o)=>(f(),v("div",null,[g,t("p",null,"res1 = "+y(_(a)),1),t("button",{onClick:c,class:"btn"},"sendMsg Front"),t("button",{onClick:l,class:"btn"},"insert Front"),t("button",{onClick:i,class:"btn"},"sendMsg Back")]))}});export{S as default};
