import{_ as c}from"./AppLayout-56a3e38f.js";import p from"./DeleteUserForm-1a0e56f8.js";import l from"./LogoutOtherBrowserSessionsForm-ab29ae57.js";import{S as s}from"./SectionBorder-41ee9d3f.js";import f from"./TwoFactorAuthenticationForm-560850e3.js";import u from"./UpdatePasswordForm-14f1aebf.js";import _ from"./UpdateProfileInformationForm-71efebdb.js";import{c as d,w as n,o,a as i,e as r,b as t,f as a,F as h}from"./app-6dd79a14.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-38a673ff.js";import"./SectionTitle-61abbf92.js";import"./DangerButton-159c4c79.js";import"./TextInput-784f2c8e.js";import"./SecondaryButton-3bdd5f32.js";import"./ActionMessage-0e7d0bf1.js";import"./PrimaryButton-22aabaa4.js";import"./InputLabel-f8815beb.js";import"./FormSection-7c341808.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};