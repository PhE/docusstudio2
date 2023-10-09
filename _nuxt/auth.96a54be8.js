import{_ as $}from"./CopyButton.vue.ea6b6665.js";import{N as f,x as P,h as x,d as V,U as R,V as A,r as d,b as I,L as S,w as O,e as t,G as g,W as r,X as u,K as a,Y as c,t as i,g as j,S as B}from"./entry.da37b844.js";import{u as D}from"./usePaxparAPI.15b996af.js";import"./index.a5100756.js";import"./fetch.5c3c76d5.js";import"./url.6edfad5e.js";import"./useToast.71e63648.js";const N=()=>({authenticated:!0,conf:f(()=>P().paxpar),email:x("login_email"),remember_me:x("login_remember"),logins:0}),W=t("h1",{class:"card-title"},"DEBUG Auth",-1),K={class:"card m-6 bg-blue-100 shadow-xl"},E={class:"card-body"},G=t("h2",{class:"card-title"},"Auth Settings",-1),M={class:"card-actions justify-end"},X={class:"card m-6 bg-blue-100 shadow-xl"},Y={class:"card-body"},q=t("h2",{class:"card-title"},"Login with magic email",-1),z={class:"card-actions justify-end"},F={class:"card m-6 bg-blue-100 shadow-xl"},H={class:"card-body"},J=t("h2",{class:"card-title"},"Login with email/password",-1),Q={class:"card-actions justify-end"},Z={class:"card m-6 bg-blue-100 shadow-xl"},tt={class:"card-body"},st=t("h2",{class:"card-title"},"Login with auth providers",-1),et={class:"card-actions justify-end"},at={class:"card m-6 bg-blue-100 shadow-xl"},ot={class:"card-body"},nt=t("h2",{class:"card-title"},"API data :",-1),lt=t("h2",{class:"card-title"},"API error :",-1),it=t("h2",{class:"card-title"},"user = useSupabaseUser() :",-1),dt=t("div",{class:"divider"},null,-1),rt=t("h2",{class:"card-title"},"supabase backend",-1),gt=V({__name:"auth",setup(ut){const n=R(),k=A(),{backend:C}=D(),p=d(C),b=d("http://localhost:3000/console"),{email:o}=N(),m=d(),h=d(),_=d(),y=f(()=>`${p.value}/api/auth/redirect?to=${encodeURIComponent(b.value)}`);async function L(){const{data:l,error:s}=await n.auth.signInWithPassword({email:o.value,password:m.value});_.value=s,h.value=l}async function U(){const{data:l,error:s}=await n.auth.signInWithOtp({email:o.value,options:{emailRedirectTo:y.value}});_.value=s,h.value=l}const v=async l=>{const{data:s,error:w}=await n.auth.signInWithOAuth({provider:l});_.value=w,h.value=s};return(l,s)=>{const w=$,T=B;return I(),S(T,null,{default:O(()=>[t("div",null,[W,t("div",K,[t("div",E,[G,g(" backend : "),r(t("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>c(p)?p.value=e:null),type:"text",placeholder:"emailRedirectTo",class:"input w-full"},null,512),[[u,a(p)]]),g(" redirectTo : "),r(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>c(b)?b.value=e:null),type:"text",placeholder:"emailRedirectTo",class:"input w-full"},null,512),[[u,a(b)]]),g(" emailRedirectTo : "+i(a(y))+" ",1),t("div",M,[t("button",{onClick:s[2]||(s[2]=e=>a(n).auth.signOut()),class:"btn btn-primary"}," Logout ")])])]),t("div",X,[t("div",Y,[q,r(t("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>c(o)?o.value=e:null),type:"text",placeholder:"email",class:"input w-full max-w-xs"},null,512),[[u,a(o)]]),t("div",z,[t("button",{onClick:s[4]||(s[4]=e=>U()),class:"btn btn-primary"},"Login")])])]),t("div",F,[t("div",H,[J,r(t("input",{"onUpdate:modelValue":s[5]||(s[5]=e=>c(o)?o.value=e:null),type:"text",placeholder:"email",class:"input w-full max-w-xs"},null,512),[[u,a(o)]]),r(t("input",{"onUpdate:modelValue":s[6]||(s[6]=e=>c(m)?m.value=e:null),type:"text",placeholder:"password",class:"input w-full max-w-xs"},null,512),[[u,a(m)]]),t("div",Q,[t("button",{onClick:s[7]||(s[7]=e=>L()),class:"btn btn-primary"},"Login")])])]),t("div",Z,[t("div",tt,[st,t("div",et,[t("button",{onClick:s[8]||(s[8]=e=>v("gitlab")),class:"btn btn-primary"}," Login with gitlab "),t("button",{onClick:s[9]||(s[9]=e=>v("github")),class:"btn btn-primary"}," Login with github "),t("button",{onClick:s[10]||(s[10]=e=>v("bitbucket")),class:"btn btn-primary"}," Login with bitbucket "),t("button",{onClick:s[11]||(s[11]=e=>v("google")),class:"btn btn-primary"}," Login with google ")])])]),t("div",at,[t("div",ot,[nt,t("pre",null,i(a(h)),1),lt,t("pre",null,i(a(_)),1),it,t("pre",null,i(a(k)),1),dt,rt,t("p",null,"URL = "+i(a(n).supabaseUrl),1),t("p",null,[g(" key = "+i(a(n).supabaseKey)+" ",1),j(w,{content:a(n).supabaseKey},null,8,["content"])])])])])]),_:1})}}});export{gt as default};
