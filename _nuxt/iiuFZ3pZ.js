import{e as p,u as h,f as m,h as f,k as A}from"./DMsBHW3d.js";const w=["p","h1","h2","h3","h4","h5","h6","li"];function u(r,e){return r.type===e||typeof r.type=="object"&&r.type.tag===e||r.tag===e}function a(r){return u(r,"text")||u(r,Symbol.for("v-txt"))}function o(r){return Array.isArray(r.children)||typeof r.children=="string"?r.children:typeof r.children?.default=="function"?r.children.default():[]}function l(r){if(!r)return"";if(Array.isArray(r))return r.map(l).join("");if(a(r))return r.children||r.value||"";const e=o(r);return Array.isArray(e)?e.map(l).filter(Boolean).join(""):""}function y(r,e=[]){if(Array.isArray(r))return r.flatMap(n=>y(n,e));let t=r;return e.some(n=>n==="*"||u(r,n))&&(t=o(r)||r,!Array.isArray(t)&&w.some(n=>u(r,n))&&(t=[t])),t}function c(r,e=[]){return r=Array.isArray(r)?r:[r],e.length?r.flatMap(t=>c(y(t,[e[0]]),e.slice(1))).filter(t=>!(a(t)&&l(t).trim()==="")):r}function S(r,e=[]){return typeof e=="string"&&(e=e.split(",").map(t=>t.trim()).filter(Boolean)),e.length?c(r,e).reduce((t,n)=>(a(n)?typeof t[t.length-1]=="string"?t[t.length-1]+=n.children:t.push(n.children):t.push(n),t),[]):r}const g=p({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(r){const{parent:e}=A(),{default:t}=h(),n=m(()=>typeof r.unwrap=="string"?r.unwrap.split(" "):["*"]);return{fallbackSlot:t,tags:n,parent:e}},render({use:r,unwrap:e,fallbackSlot:t,tags:n,parent:s}){try{let i=r;return typeof r=="string"&&(i=s?.slots[r]||s?.parent?.slots[r],console.warn(`Please set :use="$slots.${r}" in <MDCSlot> component to enable reactivity`)),i?e?S(i(),n):[i()]:t?t():f("div")}catch{return f("div")}}}),T=p({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(r){return f(g,r)}});export{T as default};
