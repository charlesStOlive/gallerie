import{w as t}from"./Form-5f17be09.js";import{_ as l}from"./_plugin-vue_export-helper-c27b6911.js";import{e as m,b as s,w as n,n as i,x as c,o as f}from"./app-efdfa947.js";import"./RiItalic-aa19f420.js";import"./createPopper-a1061a27.js";import"./default.css_vue_type_style_index_0_src_true_lang-cb871fb2.js";import"./multiselect-b38638ef.js";import"./WakaBtns-e122880f.js";const p={components:{wakaForm:t},data(){return{config:{form:{url:"/bo/mycontroller{id}",formClass:"flex flex-wrap"},fields:{name:{type:"label",label:"Nom",required:!0,class:"w-full md:w-1/2"},slug:{type:"label",label:"slug",required:!0,class:"w-full md:w-1/2"},text:{type:"richeditor",label:"contenu"},image:{type:"fileuploader",label:"Charger une image"}}},formData:{name:"Hello World",slug:"hello-world",text:"<p>Bonjour à tous</p>"}}},methods:{submitForm(e){}}};function u(e,d,b,w,o,r){const a=c("wakaForm");return f(),m("div",null,[s(a,{class:i(o.config.form.formClass),config:o.config,formData:o.formData,onSubmit:r.submitForm},{"label-name":n(()=>[]),_:1},8,["class","config","formData","onSubmit"])])}const D=l(p,[["render",u]]);export{D as default};
