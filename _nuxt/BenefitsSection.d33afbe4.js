import l from"./BenefitsSectionSingle.5a08305b.js";import{s as c}from"./index.es.2c07294e.js";import{a as p}from"./animate.es.f9afe816.js";import{d as m,r as _,o as u,b as o,c as s,F as d,a0 as b,n as x,g}from"./entry.da37b844.js";import"./tslib.es6.0c17087b.js";const w={class:"py-24"},C=m({__name:"BenefitsSection",props:{benefits:{default:()=>[]}},setup(a){const f=a,r=_([]);return u(()=>{r.value.forEach((e,n)=>{c(p(e,{opacity:[0,1],x:[n%2?25:-25,0],scale:[.9,1],filter:["blur(20px)","blur(0px)"]}),{target:e,offset:["0% 100%","75% 100%"]})}),console.log("props.benefits=",f.benefits)}),(e,n)=>{const i=l;return o(),s("section",w,[(o(!0),s(d,null,b(e.benefits,t=>(o(),s("div",{ref_for:!0,ref_key:"benefitRef",ref:r,key:t.id,class:x(["flex flex-wrap m-auto mb-12 md:mb-24 max-w-pretty-wide",[!(t.id%2)&&"flex-row-reverse"]])},[g(i,{benefit:t},null,8,["benefit"])],2))),128))])}}});export{C as default};
