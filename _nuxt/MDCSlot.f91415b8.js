import{f as i}from"./node.676c5e99.js";import{d as u,a1 as f,J as c,O as l,ao as d}from"./entry.002e3023.js";const y=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=d(),{default:o}=f(),r=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:o,tags:r,parent:s}},render({use:t,unwrap:s,fallbackSlot:o,tags:r,parent:e}){var a;try{let n=t;return typeof t=="string"&&(n=(e==null?void 0:e.slots[t])||((a=e==null?void 0:e.parent)==null?void 0:a.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),n?s?i(n(),r):[n()]:o?o():l("div")}catch{return l("div")}}});export{y as _};
