import{w as u}from"./Form-5f17be09.js";import{_ as p}from"./AppLayout-43764f53.js";import{X as d,v as b,c as _,w as r,x as t,o as g,b as s,a as l,n as x}from"./app-efdfa947.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import"./RiItalic-aa19f420.js";import"./createPopper-a1061a27.js";import"./default.css_vue_type_style_index_0_src_true_lang-cb871fb2.js";import"./multiselect-b38638ef.js";import"./WakaBtns-e122880f.js";const w={inject:["animate"],components:{wakaForm:u,AppLayout:p,Head:d},props:{config:Object,formData:Object},data(){return{form:this.formData,testconfig:{form:{url:"/bo/mycontroller{id}",formClass:"flex flex-wrap"},fields:{name:{type:"label",label:"Nom",required:!0,class:"w-full md:w-1/2"},slug:{type:"label",label:"slug",required:!0,class:"w-full md:w-1/2"},description:{type:"richeEditor",label:"contenu"},image:{type:"fileUploader",label:"Charger une image"}}},testformData:{name:"Hello World",slug:"hello-world",description:"<p>Bonjour à tous</p>"}}},mounted(){console.log("edit mounted"),this.animate="slideInv-fade"},methods:{submitForm(o){let a={preserveState:!0,onSuccess:()=>{console.log("succes"),console.log(this.$page)},onError:()=>{console.log("error"),console.log(this.formaData)}};b(o).put(`/bo/tableaux/${o.id}`,a)}}},y=l("h1",{class:"mb-8 text-3xl font-bold"},"Editer un tableaux",-1),k={class:"max-w-4xl"};function F(o,a,e,j,n,m){const i=t("Head"),c=t("wakaForm"),f=t("AppLayout");return g(),_(f,{title:"Gestion tableaux"},{default:r(()=>[s(i,{title:"editer un tableau"}),y,l("div",k,[s(c,{class:x(e.config.form.formClass),config:e.config,formData:n.form,onSubmitWakaForm:m.submitForm},{"label-name":r(()=>[]),_:1},8,["class","config","formData","onSubmitWakaForm"])])]),_:1})}const L=h(w,[["render",F]]);export{L as default};
