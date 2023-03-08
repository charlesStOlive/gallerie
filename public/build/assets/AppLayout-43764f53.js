import{o as s,e as n,a as e,d as B,k,J as z,B as V,u as a,n as g,f as p,t as _,i as S,C as X,D,r as m,p as L,l as A,y as P,b as i,w as r,T as E,c as b,j as T,O as j,X as I,g as c,F as C,h as F,Z as R}from"./app-efdfa947.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";const J={},U={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),q=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),G=[Z,q];function K(d,u){return s(),n("svg",U,G)}const Q=H(J,[["render",K]]),W={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},Y={class:"flex items-center justify-between flex-wrap"},ee={class:"w-0 flex-1 flex items-center min-w-0"},te={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},se=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),oe=[se],re={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},ne=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),ae=[ne],ie={class:"ml-3 font-medium text-sm text-white truncate"},le={class:"shrink-0 sm:ml-3"},de=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ue=[de],ce={__name:"Banner",setup(d){const u=B(!0),o=k(()=>{var l;return((l=z().props.jetstream.flash)==null?void 0:l.bannerStyle)||"success"}),h=k(()=>{var l;return((l=z().props.jetstream.flash)==null?void 0:l.banner)||""});return V(h,async()=>{u.value=!0}),(l,y)=>(s(),n("div",null,[u.value&&a(h)?(s(),n("div",{key:0,class:g({"bg-indigo-500":a(o)=="success","bg-red-700":a(o)=="danger"})},[e("div",W,[e("div",Y,[e("div",ee,[e("span",{class:g(["flex p-2 rounded-lg",{"bg-indigo-600":a(o)=="success","bg-red-600":a(o)=="danger"}])},[a(o)=="success"?(s(),n("svg",te,oe)):p("",!0),a(o)=="danger"?(s(),n("svg",re,ae)):p("",!0)],2),e("p",ie,_(a(h)),1)]),e("div",le,[e("button",{type:"button",class:g(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":a(o)=="success","hover:bg-red-600 focus:bg-red-600":a(o)=="danger"}]),"aria-label":"Dismiss",onClick:y[0]||(y[0]=S(v=>u.value=!1,["prevent"]))},ue,2)])])])],2)):p("",!0)]))}},pe={class:"relative"},N={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(d){const u=d;let o=B(!1);const h=v=>{o.value&&v.key==="Escape"&&(o.value=!1)};X(()=>document.addEventListener("keydown",h)),D(()=>document.removeEventListener("keydown",h));const l=k(()=>({48:"w-48"})[u.width.toString()]),y=k(()=>u.align==="left"?"origin-top-left left-0":u.align==="right"?"origin-top-right right-0":"origin-top");return(v,t)=>(s(),n("div",pe,[e("div",{onClick:t[0]||(t[0]=$=>L(o)?o.value=!a(o):o=!a(o))},[m(v.$slots,"trigger")]),A(e("div",{class:"fixed inset-0 z-40",onClick:t[1]||(t[1]=$=>L(o)?o.value=!1:o=!1)},null,512),[[P,a(o)]]),i(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[A(e("div",{class:g(["absolute z-50 mt-2 rounded-md shadow-lg",[a(l),a(y)]]),style:{display:"none"},onClick:t[2]||(t[2]=$=>L(o)?o.value=!1:o=!1)},[e("div",{class:g(["rounded-md ring-1 ring-black ring-opacity-5",d.contentClasses])},[m(v.$slots,"content")],2)],2),[[P,a(o)]])]),_:3})]))}},he={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},ge=["href"],x={__name:"DropdownLink",props:{href:String,as:String},setup(d){return(u,o)=>(s(),n("div",null,[d.as=="button"?(s(),n("button",he,[m(u.$slots,"default")])):d.as=="a"?(s(),n("a",{key:1,href:d.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[m(u.$slots,"default")],8,ge)):(s(),b(a(T),{key:2,href:d.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:r(()=>[m(u.$slots,"default")]),_:3},8,["href"]))]))}},M={__name:"NavLink",props:{href:String,active:Boolean},setup(d){const u=d,o=k(()=>u.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(h,l)=>(s(),b(a(T),{href:d.href,class:g(a(o))},{default:r(()=>[m(h.$slots,"default")]),_:3},8,["href","class"]))}},w={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(d){const u=d,o=k(()=>u.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(h,l)=>(s(),n("div",null,[d.as=="button"?(s(),n("button",{key:0,class:g([a(o),"w-full text-left"])},[m(h.$slots,"default")],2)):(s(),b(a(T),{key:1,href:d.href,class:g(a(o))},{default:r(()=>[m(h.$slots,"default")]),_:3},8,["href","class"]))]))}};const fe={class:"min-h-screen bg-gray-100"},me={class:"bg-white border-b border-gray-100"},ve={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},_e={class:"flex justify-between h-16"},be={class:"flex"},ye={class:"shrink-0 flex items-center"},we={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},xe={class:"hidden sm:flex sm:items-center sm:ml-6"},ke={class:"ml-3 relative"},$e={class:"inline-flex rounded-md"},Se={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},je=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),Ce={class:"w-60"},Me=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Te=e("div",{class:"border-t border-gray-100"},null,-1),Le=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Be=["onSubmit"],ze={class:"flex items-center"},Ae={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Pe=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Fe=[Pe],Ne={class:"ml-3 relative"},De={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Ee=["src","alt"],Oe={key:1,class:"inline-flex rounded-md"},Ve={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},Xe=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})],-1),Ie=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Re=e("div",{class:"border-t border-gray-100"},null,-1),He=["onSubmit"],Je={class:"-mr-2 flex items-center sm:hidden"},Ue={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ze={class:"pt-2 pb-3 space-y-1"},qe={class:"pt-4 pb-1 border-t border-gray-200"},Ge={class:"flex items-center px-4"},Ke={key:0,class:"shrink-0 mr-3"},Qe=["src","alt"],We={class:"font-medium text-base text-gray-800"},Ye={class:"font-medium text-sm text-gray-500"},et={class:"mt-3 space-y-1"},tt=["onSubmit"],st=e("div",{class:"border-t border-gray-200"},null,-1),ot=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),rt=e("div",{class:"border-t border-gray-200"},null,-1),nt=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),at=["onSubmit"],it={class:"flex items-center"},lt={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},dt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ut=[dt],ct={key:0,class:"bg-white shadow"},pt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ft={__name:"AppLayout",props:{title:String},setup(d){let u=j.on("before",t=>{}),o=j.on("success",t=>{});D(()=>{u(),o()});const h=R("animate"),l=B(!1),y=t=>{j.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},v=()=>{j.post(route("logout"))};return(t,$)=>(s(),n("div",null,[i(a(I),{title:d.title},null,8,["title"]),i(ce),e("div",fe,[e("nav",me,[e("div",ve,[e("div",_e,[e("div",be,[e("div",ye,[i(a(T),{href:t.route("tableaux.index")},{default:r(()=>[i(Q,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",we,[i(M,{href:t.route("tableaux.index"),active:t.route().current("tableaux.index")},{default:r(()=>[c(_(t.$page.component),1)]),_:1},8,["href","active"]),i(M,{href:t.route("tags.index"),active:t.route().current("tags.index")},{default:r(()=>[c(" Tags ")]),_:1},8,["href","active"]),i(M,{href:t.route("pages.index"),active:t.route().current("pages.index")},{default:r(()=>[c(" Pages ")]),_:1},8,["href","active"]),i(M,{href:t.route("welcome")},{default:r(()=>[c(" Voir le site ")]),_:1},8,["href"])])]),e("div",xe,[e("div",ke,[t.$page.props.jetstream.hasTeamFeatures?(s(),b(N,{key:0,align:"right",width:"60"},{trigger:r(()=>[e("span",$e,[e("button",Se,[c(_(t.$page.props.user.current_team.name)+" ",1),je])])]),content:r(()=>[e("div",Ce,[t.$page.props.jetstream.hasTeamFeatures?(s(),n(C,{key:0},[Me,i(x,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:r(()=>[c(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),b(x,{key:0,href:t.route("teams.create")},{default:r(()=>[c(" Create New Team ")]),_:1},8,["href"])):p("",!0),Te,Le,(s(!0),n(C,null,F(t.$page.props.user.all_teams,f=>(s(),n("form",{key:f.id,onSubmit:S(O=>y(f),["prevent"])},[i(x,{as:"button"},{default:r(()=>[e("div",ze,[f.id==t.$page.props.user.current_team_id?(s(),n("svg",Ae,Fe)):p("",!0),e("div",null,_(f.name),1)])]),_:2},1024)],40,Be))),128))],64)):p("",!0)])]),_:1})):p("",!0)]),e("div",Ne,[i(N,{align:"right",width:"48"},{trigger:r(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),n("button",De,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ee)])):(s(),n("span",Oe,[e("button",Ve,[c(_(t.$page.props.user.name)+" ",1),Xe])]))]),content:r(()=>[Ie,i(x,{href:t.route("profile.show")},{default:r(()=>[c(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(s(),b(x,{key:0,href:t.route("api-tokens.index")},{default:r(()=>[c(" API Tokens ")]),_:1},8,["href"])):p("",!0),Re,e("form",{onSubmit:S(v,["prevent"])},[i(x,{as:"button"},{default:r(()=>[c(" Log Out ")]),_:1})],40,He)]),_:1})])]),e("div",Je,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:$[0]||($[0]=f=>l.value=!l.value)},[(s(),n("svg",Ue,[e("path",{class:g({hidden:l.value,"inline-flex":!l.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:g({hidden:!l.value,"inline-flex":l.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:g([{block:l.value,hidden:!l.value},"sm:hidden"])},[e("div",Ze,[i(w,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[c(" Dashboard XX ")]),_:1},8,["href","active"])]),e("div",qe,[e("div",Ge,[t.$page.props.jetstream.managesProfilePhotos?(s(),n("div",Ke,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Qe)])):p("",!0),e("div",null,[e("div",We,_(t.$page.props.user.name),1),e("div",Ye,_(t.$page.props.user.email),1)])]),e("div",et,[i(w,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:r(()=>[c(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(s(),b(w,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:r(()=>[c(" API Tokens ")]),_:1},8,["href","active"])):p("",!0),e("form",{method:"POST",onSubmit:S(v,["prevent"])},[i(w,{as:"button"},{default:r(()=>[c(" Log Out ")]),_:1})],40,tt),t.$page.props.jetstream.hasTeamFeatures?(s(),n(C,{key:1},[st,ot,i(w,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:r(()=>[c(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(s(),b(w,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:r(()=>[c(" Create New Team ")]),_:1},8,["href","active"])):p("",!0),rt,nt,(s(!0),n(C,null,F(t.$page.props.user.all_teams,f=>(s(),n("form",{key:f.id,onSubmit:S(O=>y(f),["prevent"])},[i(w,{as:"button"},{default:r(()=>[e("div",it,[f.id==t.$page.props.user.current_team_id?(s(),n("svg",lt,ut)):p("",!0),e("div",null,_(f.name),1)])]),_:2},1024)],40,at))),128))],64)):p("",!0)])])],2)]),t.$slots.header?(s(),n("header",ct,[e("div",pt,[m(t.$slots,"header")])])):p("",!0),i(E,{name:a(h),appear:""},{default:r(()=>[(s(),n("main",{key:t.$page.component,class:"container p-4 mx-auto mt-[60px] relative"},[m(t.$slots,"default")]))]),_:3},8,["name"])])]))}};export{ft as _};