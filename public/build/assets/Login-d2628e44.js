import{P as w,e as d,b as a,u as s,w as m,F as b,o as n,X as h,t as k,f as c,a as t,c as x,g as u,s as y,n as V,k as v}from"./app-c8adfab2.js";import{A as $}from"./AuthenticationCard-c4c76128.js";import{_ as B}from"./AuthenticationCardLogo-b803f864.js";import{_ as C}from"./Checkbox-2432535b.js";import{_ as f,a as p}from"./TextInput-116a31b4.js";import{_}from"./InputLabel-5206ffca.js";import{_ as F}from"./PrimaryButton-439e6b5e.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600"},P=["onSubmit"],S={class:"mt-4"},q={class:"block mt-4"},L={class:"flex items-center"},R=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),U={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=w({email:"",password:"",remember:!1}),g=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,o)=>(n(),d(b,null,[a(s(h),{title:"Log in"}),a($,null,{logo:m(()=>[a(B)]),default:m(()=>[l.status?(n(),d("div",N,k(l.status),1)):c("",!0),t("form",{onSubmit:v(g,["prevent"])},[t("div",null,[a(_,{for:"email",value:"Email"}),a(f,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",S,[a(_,{for:"password",value:"Password"}),a(f,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",q,[t("label",L,[a(C,{checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),R])]),t("div",U,[l.canResetPassword?(n(),x(s(y),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[u(" Forgot your password? ")]),_:1},8,["href"])):c("",!0),a(F,{class:V(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[u(" Log in ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{G as default};
