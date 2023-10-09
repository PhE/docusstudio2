import{m as D,y as E,U as _,l as z}from"./entry.da37b844.js";import{u as q}from"./fetch.5c3c76d5.js";import{u as I}from"./url.6edfad5e.js";import{u as G}from"./useToast.71e63648.js";function f(){return D("backend",()=>{const e=I(),u=z().public.backendForced,r=e.hostname;var s,t;return u!==void 0?(s=u,t="forcing via runtine config !!!!"):r==="localhost"?(s="http://localhost:8881",t="hostname is localhost"):l(r,"dev")?(s="https://dev.paxpar.tech",t="hostname contains `.dev.`"):l(r,"uat")?(s="https://uat.paxpar.tech",t="hostname contains `.uat.`"):(s="https://paxpar.tech",t="no other env detected"),console.log(`🐣 useBackend ${s} because ${t}`),s}).value}const N={toast:{pending:{enable:!0,delay:500,duration:3e3},success:{enable:!0,duration:3e3},error:{enable:!0,duration:3e3}}},W=async(a,e)=>{var g,m,h,b,k,$,v,i,P,C,y,F,w,x,B,L,T,U,A,R;const n=await f(),u=await O(),r=G();e=E(N,e,{headers:{...e==null?void 0:e.headers,Authorization:`Bearer ${u}`}});var s=!0,t;(m=(g=e==null?void 0:e.toast)==null?void 0:g.pending)!=null&&m.enable&&setTimeout(()=>{var c,S;s===!0&&(t=r.loading(((S=(c=e==null?void 0:e.toast)==null?void 0:c.pending)==null?void 0:S.msg)||`${a}`))},e.toast.pending.delay);const d=await q(`${n}${a}`,e,"$0fIGPU0xdF");if(s=!1,d.error.value){const c=((b=(h=e==null?void 0:e.toast)==null?void 0:h.error)==null?void 0:b.msg)||`Error (${d.error.value.statusCode}) : ${d.error.value.message}`;($=(k=e==null?void 0:e.toast)==null?void 0:k.pending)!=null&&$.enable&&t?r.update(t,{render:c,autoClose:(v=e==null?void 0:e.toast.error)==null?void 0:v.duration,closeOnClick:!0,closeButton:!0,type:"error",isLoading:!1}):((P=(i=e==null?void 0:e.toast)==null?void 0:i.error)!=null&&P.enable||(y=(C=e==null?void 0:e.toast)==null?void 0:C.pending)!=null&&y.enable)&&r.error(c)}else{const c=((w=(F=e==null?void 0:e.toast)==null?void 0:F.success)==null?void 0:w.msg)||`${a}`;(B=(x=e==null?void 0:e.toast)==null?void 0:x.pending)!=null&&B.enable&&t?r.update(t,{render:c,autoClose:(L=e.toast.success)==null?void 0:L.duration,closeOnClick:!0,closeButton:!0,type:"success",isLoading:!1}):((U=(T=e==null?void 0:e.toast)==null?void 0:T.success)!=null&&U.enable||(R=(A=e==null?void 0:e.toast)==null?void 0:A.pending)!=null&&R.enable)&&r.success(c)}return d};function j(a,e){const u=`${f()}${a}`,r=new URL(u);return r.searchParams.set("Authorization",`Bearer ${e}`),r.toString()}function l(a,e){return a.includes(`.${e}.`)||a.startsWith(`${e}.`)}function H(){return I().hostname}async function O(){var u;const a=await _(),{data:e,error:n}=await a.auth.getSession();return(u=e==null?void 0:e.session)==null?void 0:u.access_token}const V=()=>({addAuthURL:j,backend:f(),domain:H(),isDomainEnv:l,useFetchPP:W,getToken:O});export{V as u};
