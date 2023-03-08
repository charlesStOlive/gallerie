import{a as g,_ as b}from"./TextInput-3d30f377.js";import{_}from"./InputLabel-8221c94a.js";import{_ as p,a as w}from"./SvgLoading-0b97ec26.js";import{e as x,a as o,b as n,l as u,x as f,g as c,i as h,s as l,o as v}from"./app-f8c09bae.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const k={props:["form","isOpen","isEdit","isWorking"],components:{InputError:g,InputLabel:_,TextInput:b,TextArea:p,SvgLoading:w},data(){return{}},methods:{}},E={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},I={class:"grid grid-cols-1 lg:grid-cols-2 gap-x-1"},V={class:""},S={class:""},L={class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},W={class:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},C=["disabled"],T={class:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},N=["disabled"],B={class:"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"},U=["disabled"];function j(a,s,e,q,z,M){const i=l("InputLabel"),r=l("TextInput"),m=l("InputError"),d=l("SvgLoading");return v(),x("form",{onSubmit:s[5]||(s[5]=h((...t)=>a.submit&&a.submit(...t),["prevent"]))},[o("div",E,[o("div",I,[o("div",V,[n(i,{for:"name",value:"Nom : "}),n(r,{id:"name",modelValue:e.form.name,"onUpdate:modelValue":s[0]||(s[0]=t=>e.form.name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name",placeholder:"Entrez un nom"},null,8,["modelValue"]),n(m,{class:"mt-2",message:e.form.errors.name},null,8,["message"])]),o("div",S,[n(i,{for:"slug",value:"Slug : "}),n(r,{id:"slug",modelValue:e.form.slug,"onUpdate:modelValue":s[1]||(s[1]=t=>e.form.slug=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name",placeholder:"Entrez un slug"},null,8,["modelValue"]),n(m,{class:"mt-2",message:e.form.errors.slug},null,8,["message"])])])]),o("div",L,[o("span",W,[u(o("button",{type:"button",onClick:s[2]||(s[2]=t=>a.$emit("formsave",e.form)),class:"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5",disabled:e.isWorking},[n(d,{show:e.isWorking},null,8,["show"]),c(" Save ")],8,C),[[f,!e.isEdit]])]),o("span",T,[u(o("button",{type:"button",onClick:s[3]||(s[3]=t=>a.$emit("formsave",e.form)),class:"inline-flex items-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5",disabled:e.isWorking},[n(d,{show:e.isWorking},null,8,["show"]),c(" Update ")],8,N),[[f,e.isEdit]])]),o("span",B,[o("button",{type:"button",onClick:s[4]||(s[4]=t=>a.$emit("formclose")),class:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5",disabled:e.isWorking}," Cancel ",8,U)])])],32)}const H=y(k,[["render",j]]);export{H as default};