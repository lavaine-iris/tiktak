import{d as m,g as u,o as s,c as t,F as x,h as f,u as g,s as h,r as k,b as l,w,m as v,a as r}from"./index.85eb60de.js";import{_ as E}from"./MontreAffichage.vue_vue_type_script_setup_true_lang.69738bbf.js";const C={class:"grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center"},b=m({__name:"ListeMontres",props:{max:null},async setup(c){let e,a;const d=c,{data:_,error:i}=([e,a]=u(()=>{var o;return h.from("Montre").select("*").limit((o=d.max)!=null?o:100)}),e=await e,a(),e);return i&&console.log("n'a pas pu r\xE9cup\xE9rer les montres",{error:i}),(o,L)=>{const p=k("router-link");return s(),t("ul",C,[(s(!0),t(x,null,f(g(_),n=>(s(),t("li",{key:n.id},[l(p,{to:{name:"edit-id",params:{id:n.id}}},{default:w(()=>[l(E,v({class:"w-64 flex"},n),null,16)]),_:2},1032,["to"])]))),128))])}}}),y={class:"dark:bg-gray-800"},B=r("div",{class:"p-5 dark:text-white"},[r("h3",{class:"text-black font-Oswald text-center text-4xl dark:text-white"},"MES MOD\xC8LES"),r("p",{class:"text-center m-5"},"Retrouvez tous les mod\xE8les montres que vous avez personnaliser ! ")],-1),F=m({__name:"modeles",setup(c){return(e,a)=>(s(),t("div",y,[B,r("div",null,[l(b,{max:8})])]))}});export{F as default};
