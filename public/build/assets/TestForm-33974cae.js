import{w as l}from"./Form-504a3bb0.js";import{_ as t}from"./_plugin-vue_export-helper-c27b6911.js";import{e as m,b as s,w as n,n as i,s as c,o as f}from"./app-f8c09bae.js";import"./RiItalic-eaf762bd.js";import"./createPopper-a1061a27.js";import"./default.css_vue_type_style_index_0_src_true_lang-c57d6165.js";import"./multiselect-674e5fe0.js";const u={components:{wakaForm:l},data(){return{config:{form:{url:"/bo/mycontroller{id}",formClass:"flex flex-wrap"},fields:{name:{type:"label",label:"Nom",required:!0,class:"w-full md:w-1/2"},slug:{type:"label",label:"slug",required:!0,class:"w-full md:w-1/2"},text:{type:"richeditor",label:"contenu"},image:{type:"fileuploader",label:"Charger une image"}}},formData:{name:"Hello World",slug:"hello-world",text:"<p>Bonjour à tous</p>"}}},methods:{submitForm(e){}}};function p(e,d,b,w,o,r){const a=c("wakaForm");return f(),m("div",null,[s(a,{class:i(o.config.form.formClass),config:o.config,formData:o.formData,onSubmit:r.submitForm},{"label-name":n(()=>[]),_:1},8,["class","config","formData","onSubmit"])])}const y=t(u,[["render",p]]);export{y as default};