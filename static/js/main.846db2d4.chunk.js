(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{290:function(e,t,a){},291:function(e,t,a){},440:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),s=a.n(r),c=(a(290),a(291),a(24)),l=a(63),o=a(70),d=a(220),j=a(502),b=a(510),h=a(524),m=a(242),x=a.n(m),p=a(513),u=a(521),O=a(507),w=a(526),g=a(522),D=a(528),v=a(444),y=a(514),f=a(515),C=a(516),H=a(529),S=a(517),N=(a(439),a(511)),B=a(512),k=a(442),P=a(519),M=a(518),A=a(520),F=a(247),R=a(37),T=a(490),I=a(491),L=a(495),E=a(143),W=a(144),G=a(46),z=a(118),K=a(240),U=a(58),V=a(3);function q(e){return Object(V.jsx)(k.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}var J=Object(U.a)("%b %Y");function X(e){var t=e.title,a=e.data,n=e.yAxisLabel,r=void 0===n?"Rate (per 100,000)":n,s=Object(R.a)();return Object(V.jsxs)(i.a.Fragment,{children:[Object(V.jsx)(q,{children:t}),Object(V.jsx)(T.a,{children:Object(V.jsxs)(I.a,{data:a,margin:{top:16,right:16,bottom:0,left:24},children:[Object(V.jsx)(L.a,{strokeDasharray:"3 3"}),Object(V.jsx)(E.a,{dataKey:"date",stroke:s.palette.text.secondary,tickFormatter:J}),Object(V.jsx)(W.a,{stroke:s.palette.text.secondary,children:Object(V.jsx)(G.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:s.palette.text.primary},children:r})}),Object(V.jsx)(z.a,{}),Object(V.jsx)(K.a,{type:"monotone",dataKey:"rate",stroke:s.palette.primary.main,dot:!1})]})})]})}var Y=a(496),Q=a(244);function Z(e){var t=e.title,a=e.data,n=Object(R.a)();return Object(V.jsxs)(i.a.Fragment,{children:[Object(V.jsx)(q,{children:t}),Object(V.jsx)(T.a,{width:"100%",height:"100%",children:Object(V.jsxs)(Y.a,{data:a,margin:{top:16,right:16,bottom:24,left:0},children:[Object(V.jsx)(L.a,{strokeDasharray:"3 3"}),Object(V.jsx)(E.a,{dataKey:"hospital",stroke:n.palette.text.secondary,tick:{width:75},interval:0}),Object(V.jsx)(W.a,{stroke:n.palette.text.secondary}),Object(V.jsx)(z.a,{}),Object(V.jsx)(Q.a,{dataKey:"beds",fill:n.palette.primary.main})]})})]})}var $=a(497),_=a(501),ee=a(500),te=a(498),ae=a(499);function ne(e,t,a,n){return{id:e,provider:t,availabilityNew:a,availabilityFU:n}}var ie=[ne(0,"Eric Arzubi, MD",new Date("2021-08-23"),new Date("2021-08-23")),ne(1,"Reza Hosseini Ghomi, MD",new Date("2021-08-20"),new Date("2021-08-16")),ne(2,"Robert Sise, MT",new Date("2021-08-13"),new Date("2021-08-13")),ne(3,"Melinda Truesdell, NP",new Date("2021-09-06"),new Date("2021-09-05")),ne(4,"Mark Ackerman, NP",new Date("2021-08-12"),new Date("2021-08-06")),ne(5,"Meghan Lehman, NP",new Date("2021-08-06"),new Date("2021-08-06")),ne(6,"Ankur Patel, MD",new Date("2021-08-15"),new Date("2021-08-12"))];function re(e){return Object(U.a)("%b %e")(e)}function se(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(q,{children:"Provider Availability"}),Object(V.jsxs)($.a,{size:"small",children:[Object(V.jsx)(te.a,{children:Object(V.jsxs)(ae.a,{children:[Object(V.jsx)(ee.a,{children:"Provider"}),Object(V.jsx)(ee.a,{children:"Next Availability - NEW"}),Object(V.jsx)(ee.a,{children:"Next Availability - F/U"})]})}),Object(V.jsx)(_.a,{children:ie.map((function(e){return Object(V.jsxs)(ae.a,{children:[Object(V.jsx)(ee.a,{children:e.provider}),Object(V.jsx)(ee.a,{children:re(e.availabilityNew)}),Object(V.jsx)(ee.a,{children:re(e.availabilityFU)})]},e.id)}))})]})]})}var ce=a(503),le=a(525),oe=a(504),de=a(505),je=Object(j.a)((function(e){return{root:{width:"100%",height:"100vh"}}})),be=[47.035744045448006,-109.96669218680697],he=function(e){var t=e.title,a=e.data,n=je();return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(q,{children:t}),Object(V.jsxs)(ce.a,{center:be,zoom:5.5,className:n.root,children:[Object(V.jsx)(le.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a.map((function(e){return Object(V.jsx)(oe.a,{position:e.coordinates,children:Object(V.jsxs)(de.a,{children:[Object(V.jsx)(k.a,{variant:"h6",align:"center",color:"primary",children:e.name}),Object(V.jsx)(k.a,{variant:"subtitle1",align:"center",children:e.city}),Object(V.jsxs)(k.a,{variant:"subtitle2",align:"center",gutterBottom:!0,children:["phone #: ",e.number]})]})},e.name)}))]})]})},me=a(506),xe=Object(j.a)({inactiveButton:{color:"primary",backgroundColor:"#676fa1"},activeButton:{color:"primary"}});function pe(e){var t=e.active1,a=e.active2,n=e.handleClick1,i=e.handleClick2,r=xe();return Object(V.jsxs)(me.a,{variant:"contained",color:"primary",children:[Object(V.jsx)(v.a,{className:t?r.activeButton:r.inactiveButton,onClick:n,children:"Frontier"}),Object(V.jsx)(v.a,{className:a?r.activeButton:r.inactiveButton,onClick:i,children:"Statewide"})]})}var ue=Object(j.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:60}}}));function Oe(e){var t=e.options,a=e.section,n=e.handleSectionChange,i=ue();return Object(V.jsxs)(O.a,{className:i.formControl,variant:"outlined",fullWidth:!0,children:[Object(V.jsx)(w.a,{id:"section-label",children:"Section"}),Object(V.jsx)(g.a,{labelId:"section-label",label:"Section",id:"section",value:a,onChange:n,children:t.map((function(e){return Object(V.jsx)(D.a,{value:e.id,children:e.label},e.id)}))})]})}var we=[{hospital:"Providence St. Patrick Hospital",beds:31},{hospital:"Logan Health",beds:26},{hospital:"Benefis Community Care",beds:32},{hospital:"Billings Clinic Hospital",beds:45},{hospital:"Montana State Hospital",beds:42},{hospital:"St. Peter's Health",beds:24},{hospital:"Glendive Medical Center",beds:50}],ge=[{hospital:"Shodair Children's Hospital",beds:9},{hospital:"Billings Clinic Hospital",beds:30},{hospital:"Providence Hospital",beds:29}],De=[{hospital:"Billings Clinic Hospital",beds:35},{hospital:"Glendive Medical Center",beds:6},{hospital:"Holy Rosary Hospital",beds:22},{hospital:"Sidney Health Center",beds:9},{hospital:"Shodair Children's Hospital",beds:22}],ve=[{hospital:"Billings Clinic Hospital",beds:8},{hospital:"Shodair Children's Hospital",beds:12}],ye=[{date:new Date("2020-09"),rate:13.66},{date:new Date("2020-10"),rate:21.11},{date:new Date("2020-11"),rate:18.54},{date:new Date("2020-12"),rate:19.06},{date:new Date("2021-01"),rate:12.1},{date:new Date("2021-02"),rate:16.36},{date:new Date("2021-03"),rate:14.68},{date:new Date("2021-04"),rate:16.08},{date:new Date("2021-05"),rate:11.95},{date:new Date("2021-06"),rate:11},{date:new Date("2021-07"),rate:13.54},{date:new Date("2021-08"),rate:12.92}],fe=[{date:new Date("2020-09"),rate:17.3},{date:new Date("2020-10"),rate:24.13},{date:new Date("2020-11"),rate:20.13},{date:new Date("2020-12"),rate:18.4},{date:new Date("2021-01"),rate:17.8},{date:new Date("2021-02"),rate:20.93},{date:new Date("2021-03"),rate:19.63},{date:new Date("2021-04"),rate:21.37},{date:new Date("2021-05"),rate:15.73},{date:new Date("2021-06"),rate:20.42},{date:new Date("2021-07"),rate:21.9},{date:new Date("2021-08"),rate:19.88}],Ce=[{date:new Date("2020-09"),rate:26.99},{date:new Date("2020-10"),rate:37.56},{date:new Date("2020-11"),rate:30.96},{date:new Date("2020-12"),rate:30.9},{date:new Date("2021-01"),rate:26.37},{date:new Date("2021-02"),rate:26.51},{date:new Date("2021-03"),rate:32.18},{date:new Date("2021-04"),rate:29.3},{date:new Date("2021-05"),rate:30.69},{date:new Date("2021-06"),rate:33.21},{date:new Date("2021-07"),rate:33.13},{date:new Date("2021-08"),rate:31.23}],He=[{date:new Date("2020-09"),rate:17.19},{date:new Date("2020-10"),rate:22.63},{date:new Date("2020-11"),rate:15.03},{date:new Date("2020-12"),rate:23.06},{date:new Date("2021-01"),rate:26.96},{date:new Date("2021-02"),rate:11.4},{date:new Date("2021-03"),rate:15.46},{date:new Date("2021-04"),rate:22.94},{date:new Date("2021-05"),rate:19.84},{date:new Date("2021-06"),rate:20.27},{date:new Date("2021-07"),rate:18.57},{date:new Date("2021-08"),rate:19.72}],Se=[{date:new Date("2020-09"),rate:461},{date:new Date("2020-10"),rate:52},{date:new Date("2020-11"),rate:498},{date:new Date("2020-12"),rate:321},{date:new Date("2021-01"),rate:270},{date:new Date("2021-02"),rate:452},{date:new Date("2021-03"),rate:197},{date:new Date("2021-04"),rate:275},{date:new Date("2021-05"),rate:61},{date:new Date("2021-06"),rate:285},{date:new Date("2021-07"),rate:60},{date:new Date("2021-08"),rate:70}],Ne=[{date:new Date("2020-09"),rate:9},{date:new Date("2020-10"),rate:9},{date:new Date("2020-11"),rate:4},{date:new Date("2020-12"),rate:3},{date:new Date("2021-01"),rate:3},{date:new Date("2021-02"),rate:7},{date:new Date("2021-03"),rate:4},{date:new Date("2021-04"),rate:7},{date:new Date("2021-05"),rate:9},{date:new Date("2021-06"),rate:6},{date:new Date("2021-07"),rate:10},{date:new Date("2021-08"),rate:7}],Be=[{name:"Glendive Medical Center",city:"Glendive",number:"738-555-3160",coordinates:[47.11792650055652,-104.70395611627464]},{name:"Frances Mahon Deaconess Hospital",city:"Glasgow",number:"359-555-7621",coordinates:[48.18981204076515,-106.63537154631985]},{name:"Barrett Hospital & Healthcare",city:"Dillon",number:"155-814-5327",coordinates:[45.20219723945498,-112.64728273273796]},{name:"Holy Rosary Healthcare",city:"Miles City",number:"868-784-6670",coordinates:[46.395851529810614,-105.8282375780751]},{name:"Roosevelt Medical Center",city:"Culbertson",number:"250-281-1727",coordinates:[48.15189390927604,-104.5147349003122]},{name:"Livingston HealthCare",city:"Livingston",number:"553-345-7334",coordinates:[45.67583250052617,-110.52708275521294]},{name:"St. Luke Community Healthcare",city:"Ronan",number:"932-393-3863",coordinates:[47.52994452935552,-114.10704674671666]},{name:"Big Horn County Memorial Hospital",city:"Hardin",number:"995-707-3046",coordinates:[45.72950822276518,-107.61654354777687]}],ke=[{name:"Providence Hospital",city:"Missoula",number:"406-543-7271",coordinates:[46.87577554264733,-113.9994216911055]},{name:"Logan Health",city:"Kalispell",number:"406-752-5111",coordinates:[48.21513891885364,-114.32372034630467]},{name:"Benefis Community Care",city:"Kalispell",number:"406-752-0580",coordinates:[48.22682230319765,-114.30257078705924]},{name:"Billings Clinic Hospital",city:"Billings",number:"406-238-2500",coordinates:[45.78986201223207,-108.51278637102406]},{name:"Montana State Hospital",city:"Warm Springs",number:"406-693-7000",coordinates:[46.181160158654244,-112.79057523957525]},{name:"St. Peter's Health",city:"Helena",number:"406-442-2480",coordinates:[46.58370091445607,-111.99672560865174]},{name:"Glendive Medical Center",city:"Glendive",number:"406-345-3306",coordinates:[47.11804331455797,-104.70382737024401]}],Pe=[{id:"service",label:"Service Accessibility"},{id:"epidemiology",label:"Epidemiology"}],Me=[new Date("2020-09"),new Date("2020-10"),new Date("2020-11"),new Date("2020-12"),new Date("2021-01"),new Date("2021-02"),new Date("2021-03"),new Date("2021-04"),new Date("2021-05"),new Date("2021-06"),new Date("2021-07"),new Date("2021-08")],Ae=["Barrett Hospital & Healthcare","Benefis Community Care","Big Horn County Community Hospital","Billings Clinic Hospital","Frances Mahon Deaconess Hospital","Glendive Medical Center","Holy Rosary Healthcare","Livingston HealthCare","Logan Health","Montana State Hospital","Providence Hospital","Roosevelt Medical Center","St. Luke Community Healthcare","St. Peter's Health"],Fe=Object(j.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:250,width:"calc(100% - ".concat(250,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:250,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(l.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:360},sectionHeader:{width:"100%",paddingTop:e.spacing(4),paddingBottom:e.spacing(2)},navTool:{padding:e.spacing(1),paddingTop:e.spacing(2),display:"flex",justifyContent:"center"},formControl:{margin:e.spacing(1),minWidth:60},dialogContent:{display:"flex",flexFlow:"row wrap"},textField:{margin:e.spacing(1),align:"center",minWidth:"45%"}}}));function Re(){var e=Fe(),t=Object(d.a)(e.paper,e.fixedHeight),a=Object(n.useState)(!1),i=Object(c.a)(a,2),r=i[0],s=i[1],l=Object(n.useState)(!0),o=Object(c.a)(l,2),j=o[0],m=o[1],R=Object(n.useState)(new Date("2020-09")),T=Object(c.a)(R,2),I=T[0],L=T[1],E=Object(n.useState)(new Date("2021-08")),W=Object(c.a)(E,2),G=W[0],z=W[1],K=Object(n.useState)(""),q=Object(c.a)(K,2),J=q[0],Y=q[1],Q=Object(n.useState)(!1),$=Object(c.a)(Q,2),_=$[0],ee=$[1],te=function(){ee(!1)},ae=Object(n.useState)(null),ne=Object(c.a)(ae,2),ie=ne[0],re=ne[1];return Object(V.jsxs)("div",{className:e.root,children:[Object(V.jsx)(b.a,{}),Object(V.jsx)(N.a,{position:"absolute",className:e.appBar,children:Object(V.jsxs)(B.a,{className:e.toolbar,children:[Object(V.jsx)("div",{className:e.toolbarIcon,children:Object(V.jsx)(p.a,{children:Object(V.jsx)(x.a,{})})}),Object(V.jsx)(k.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Frontier Mental Health Data Dashboard"})]})}),Object(V.jsxs)(h.a,{variant:"permanent",classes:{paper:e.drawerPaper},className:e.drawer,children:[Object(V.jsx)(B.a,{}),Object(V.jsx)(u.a,{className:e.navTool,children:Object(V.jsx)(pe,{active1:r,active2:j,handleClick1:function(e){s(!0),m(!1)},handleClick2:function(e){m(!0),s(!1)}})}),Object(V.jsx)(u.a,{className:e.navTool,children:Object(V.jsx)(Oe,{options:Pe,section:J,handleSectionChange:function(e){Y(e.target.value),document.getElementById(e.target.value).scrollIntoView()}})}),Object(V.jsxs)(u.a,{className:e.navTool,alignItems:"center",children:[Object(V.jsxs)(O.a,{className:e.formControl,variant:"outlined",size:"small",fullWidth:!0,children:[Object(V.jsx)(w.a,{id:"start-label",children:"Start"}),Object(V.jsx)(g.a,{labelId:"start-label",label:"Start",id:"start",value:I,onChange:function(e){L(e.target.value)},displayEmpty:!0,renderValue:function(e){return Object(U.a)("%b %y")(e)},children:Me.map((function(e){return Object(V.jsx)(D.a,{value:e,children:Object(U.a)("%b %y")(e)},e)}))})]}),Object(V.jsx)(k.a,{variant:"body2",color:"textPrimary",children:"to"}),Object(V.jsxs)(O.a,{className:e.formControl,variant:"outlined",size:"small",fullWidth:!0,children:[Object(V.jsx)(w.a,{id:"end-label",children:"End"}),Object(V.jsx)(g.a,{labelId:"end-label",label:"End",id:"end",value:G,onChange:function(e){z(e.target.value)},displayEmpty:!0,renderValue:function(e){return Object(U.a)("%b %y")(e)},children:Me.map((function(e){return Object(V.jsx)(D.a,{value:e,children:Object(U.a)("%b %y")(e)},e)}))})]})]}),Object(V.jsxs)(u.a,{className:e.navTool,children:[Object(V.jsx)(v.a,{id:"refer-patient",variant:"contained",color:"primary",onClick:function(){ee(!0)},children:"Refer Patient"}),Object(V.jsxs)(y.a,{open:_,onClose:te,fullWidth:!0,maxWidth:"sm",children:[Object(V.jsx)(f.a,{id:"refer-patient-title",children:"Refer a Patient"}),Object(V.jsxs)(C.a,{className:e.dialogContent,children:[Object(V.jsx)(H.a,{required:!0,id:"patient-name",label:"Patient Name",className:e.textField}),Object(V.jsx)(H.a,{select:!0,required:!0,id:"hospital",label:"Hospital",value:ie,onChange:function(e){re(e.target.value)},helperText:"Please select a hospital",variant:"outlined",className:e.textField,children:Ae.map((function(e){return Object(V.jsx)(D.a,{value:e,children:e},e)}))}),Object(V.jsx)(H.a,{multiline:!0,id:"description",label:"Description",rows:6,fullWidth:!0,variant:"outlined",className:e.textField})]}),Object(V.jsxs)(S.a,{children:[Object(V.jsx)(v.a,{onClick:te,color:"primary",children:"Cancel"}),Object(V.jsx)(v.a,{onClick:te,color:"primary",children:"Submit Referral"})]})]})]})]}),Object(V.jsxs)("main",{className:e.content,children:[Object(V.jsx)("div",{className:e.appBarSpacer}),Object(V.jsxs)(M.a,{maxWidth:"lg",className:e.container,children:[Object(V.jsxs)(u.a,{id:"service",className:e.sectionHeader,children:[Object(V.jsx)(k.a,{color:"textSecondary",variant:"h4",children:"Service Accessibility"}),Object(V.jsx)(P.a,{})]}),Object(V.jsxs)(A.a,{container:!0,spacing:2,children:[Object(V.jsx)(A.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{className:t,children:Object(V.jsx)(he,{title:"Hospitals with Emergency Telepsychiatry Access",data:Be})})}),Object(V.jsx)(A.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{className:t,children:Object(V.jsx)(he,{title:"Mental Health Hospitals",data:ke})})}),Object(V.jsx)(A.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{className:t,children:Object(V.jsx)(Z,{title:"Available Adult Inpatient Psychiatric Beds",data:we})})}),Object(V.jsx)(A.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{className:t,children:Object(V.jsx)(Z,{title:"Available Child Inpatient Psychiatric Beds",data:ge})})}),Object(V.jsx)(A.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{className:t,children:Object(V.jsx)(Z,{title:"Available Adult EmPATH Seats",data:De})})}),Object(V.jsx)(A.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{className:t,children:Object(V.jsx)(Z,{title:"Available Child EmPATH Seats",data:ve})})}),Object(V.jsx)(A.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{className:t,children:Object(V.jsx)(se,{})})})]}),Object(V.jsxs)(u.a,{id:"epidemiology",className:e.sectionHeader,children:[Object(V.jsx)(k.a,{color:"textSecondary",variant:"h4",children:"Epidemiology"}),Object(V.jsx)(P.a,{})]}),Object(V.jsxs)(A.a,{container:!0,spacing:2,children:[Object(V.jsx)(A.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{className:t,children:Object(V.jsx)(X,{title:"Hospital Readmission Rate",data:He})})}),Object(V.jsx)(A.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{className:t,children:Object(V.jsx)(X,{title:"Average Time since Last Hospitalization",data:Se,yAxisLabel:"Days"})})}),Object(V.jsx)(A.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{className:t,children:Object(V.jsx)(X,{title:"Average Hospital Stay Duration",data:Ne,yAxisLabel:"Days"})})}),Object(V.jsx)(A.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{className:t,children:Object(V.jsx)(X,{title:"Suicide Rate",data:ye})})}),Object(V.jsx)(A.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{className:t,children:Object(V.jsx)(X,{title:"SMI Diagnosis Rate",data:fe})})}),Object(V.jsx)(A.a,{item:!0,xs:6,children:Object(V.jsx)(F.a,{className:t,children:Object(V.jsx)(X,{title:"SUD Diagnosis Rate",data:Ce})})})]})]})]})]})}var Te=function(){return Object(V.jsx)(Re,{})},Ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,532)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(V.jsx)(Te,{}),document.getElementById("dashboard")),Ie()}},[[440,1,2]]]);
//# sourceMappingURL=main.846db2d4.chunk.js.map