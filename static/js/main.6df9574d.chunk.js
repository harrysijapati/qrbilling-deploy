(this["webpackJsonpfancy-store"]=this["webpackJsonpfancy-store"]||[]).push([[0],{103:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),i=(a(93),a(12)),l=a(17),s=function(e){var t=e.value;return o.a.createElement("h1",null,t)},u=function(){return o.a.createElement(s,{value:" Not found page"})},d=a(7),p=a(148),m=a(143),f=a(53),b=a(33),h=a(28),g=a(77),x=a(75),E=a(76),C=(a(97),"https://api.cupponpro.com/api/v1/"),v=function(e){Object(g.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={delay:100,result:"No result",facingMode:"rear"},n.handleScan=n.handleScan.bind(Object(h.a)(n)),n}return Object(b.a)(a,[{key:"handleScan",value:function(e){if(e){this.setState({result:e});var t=JSON.parse(e);t.company_id&&t.table_no&&window.location.assign("https://mastarqr.com/"+t.company_id+"?table_no="+t.table_no)}}},{key:"handleError",value:function(e){console.error(e)}},{key:"handleCameraSwitch",value:function(){this.setState({facingMode:"rear"==this.state.facingMode?"front":"rear"})}},{key:"render",value:function(){var e=this;return console.log(this.state.facingMode,"facing mode"),o.a.createElement("div",null,o.a.createElement(m.a,{style:{color:"#00e6ff",fontSize:"15pt",textAlign:"center"},onClick:function(){return e.handleCameraSwitch()}},"Switch Camera"),o.a.createElement(E.a,{resolution:!0,className:"qrReader",delay:this.state.delay,style:{height:300,width:300,position:"relative",borderStyle:"solid",borderColor:"red"},onError:this.handleError,onScan:this.handleScan,facingMode:this.state.facingMode}))}}]),a}(n.Component),y=a(147),N=Object(y.a)({root:{display:"flex",backgroundColor:"rgba(0,0,0,0.8)",justifyContent:"center",height:"100vh",flexDirection:"column"},scanOrder:{justifyContent:"center",display:"flex",flexDirection:"column",textAlign:"center"},scan:{color:"white",fontSize:"22pt"},order:{color:"white",fontSize:"15pt"},qr:{alignItems:"center"}}),O=function(e){var t=Object(n.useState)(!0),a=Object(d.a)(t,2),r=a[0],c=a[1],i=N(e);return o.a.createElement(p.a,{container:!0,className:i.root},o.a.createElement("div",{className:i.scanOrder},o.a.createElement(m.a,{className:i.scan}," Scan The QR CODE"),o.a.createElement(m.a,{className:i.order},"And Order Food")),o.a.createElement(p.a,null,r?o.a.createElement(v,{className:i.qr}):o.a.createElement("img",{src:"https://i.pinimg.com/originals/9b/56/2c/9b562ca0be290e80f201486a4fbcf849.png",alt:"image",onClick:function(){return c(!r)}})))},j=a(20),S=a.n(j),k=a(8),w=a(22),T=a(35),F=(a(2),a(149)),I=a(150),R=a(151),D=a(3),M=a(72),_=a.n(M),z=Object(y.a)((function(e){return{back:{cursor:"pointer",margin:"8px 16px"},shape:{backgroundColor:"white",width:30,height:30},shapeCircle:{borderRadius:"50%"},arrow:{margin:"5px 0 0px 10px",fontSize:"1rem"},card:{display:"flex",justifyContent:"space-between",padding:"8px 16px 30px",margin:"18px 0 0"},logo:{backgroundColor:"#F8F9F9",borderRadius:"5px",width:"25%",height:"106px",marginRight:"8px"},img:{width:"106px",height:"106px",objectFit:"cover"},info:{backgroundColor:"#F8F9F9",borderRadius:"5px",width:"72%",height:"106px"},cardContent:{padding:"6px 12px"},resName:{fontSize:"14pt",fontWeight:"bold",lineHeight:"22px"},tableNumber:{fontSize:"12pt",lineHeight:"22px",marginBottom:"3px"},txt:{fontSize:"12pt",lineHeight:"22px"}}})),P=function(e){var t=e.menuList,a=(e.tableNumber,z()),n=o.a.createElement("div",{className:Object(D.a)(a.shape,a.shapeCircle)},o.a.createElement(_.a,{className:a.arrow}));return o.a.createElement("div",null,o.a.createElement(F.a,{color:"secondary",badgeContent:0,className:a.back},n),o.a.createElement("div",{className:a.card},t&&t.data&&o.a.createElement(I.a,{className:a.logo},o.a.createElement("img",{src:t.data.logo_icon,className:a.img})),t&&t.data&&o.a.createElement(I.a,{className:a.info},o.a.createElement(R.a,{className:a.cardContent},o.a.createElement(m.a,{className:a.resName},t.data.name),o.a.createElement(m.a,{className:a.tableNumber}," ",t.data.asset.name)))))},A=a(153),B=a(167),L=a(166),G=a(155),q=a(156),W=a(162),J=a(160),H=a(165),V=a(152),$=a(163),Q=a(74),Z=a.n(Q),U=a(62),Y=a.n(U),K=a(61),X=a.n(K),ee=a(73),te=Object(y.a)((function(e){return{bill:{backgroundColor:"#FFFFFF",fontFamily:"SF Pro Display Regular"},billTxt:{fontWeight:"bold",fontFamily:"SF Pro Display Regular",fontSize:"14px",padding:"16px 16px 8px",textTransform:"uppercase"},billing:{display:"flex",justifyContent:"space-between",padding:"5px 16px",fontSize:"12px",textTransform:"uppercase"},dot:{border:"1px dashed #707070",margin:"5px 0 -5px"},total:{display:"flex",justifyContent:"space-between",padding:"16px",fontSize:"12px",textTransform:"uppercase",color:"#4EA23A",fontWeight:700}}})),ae=function(e){var t=te(),a=e.billingInfo,n=e.totalPrice,r=e.serviceCharge,c=e.taxCharge,i=e.grandTotal,l=e.previousGrandTotal,s=e.tax,u=e.service;return o.a.createElement("div",null,o.a.createElement("div",{className:t.bill},o.a.createElement(m.a,{className:t.billTxt},"Bill"),l>0&&o.a.createElement("div",{className:t.billing},o.a.createElement("div",null,"Previous"),o.a.createElement("div",{className:t.price},"Rs.",l.toFixed(2))),o.a.createElement("div",{className:t.billing},o.a.createElement("div",null,"Sub Total"),o.a.createElement("div",{className:t.price},"Rs.",(a.data&&a.data.total)+(a.data&&a.data.discount_amount)||n)),a.data&&a.data.discount_amount>0&&o.a.createElement("div",{className:t.billing},o.a.createElement("div",null,"Discount"),o.a.createElement("div",{className:t.price},"Rs.",a.data&&a.data.discount_amount&&a.data.discount_amount.toFixed(2)||0)),o.a.createElement("div",{container:!0,className:t.billing},o.a.createElement("div",null,"Restaurant service charge(",u,"%)"),o.a.createElement("div",{className:t.price},"Rs.",a.data&&a.data.service_charge_amount.toFixed(2)||r.toFixed(2))),o.a.createElement("div",{className:t.billing},o.a.createElement("div",null,"VAT(",s,"%)"),o.a.createElement("div",{className:t.price},"Rs.",a.data&&a.data.taxed_amount.toFixed(2)||c.toFixed(2))),o.a.createElement("div",{className:t.dot}),o.a.createElement("div",{className:t.total},o.a.createElement("div",null,"Grand Total"),o.a.createElement("div",{className:t.price},"Rs.",((a.data&&a.data.grand_total||i)+l).toFixed(2)))))},ne=Object(y.a)((function(e){return{root:{backgroundImage:'url("https://www.scandichotels.com/imagevault/publishedmedia/qn6infvg30381stkubky/scandic-sundsvall-city-restaurant-verket-10.jpg")'},secondary:{borderRadius:"20px 20px 0px 0px",display:"flex",flexDirection:"column",height:"auto",justifyContent:"space-between",backgroundColor:"#ECECEC"},third:{borderRadius:"20px 20px 0px 0px",backgroundColor:"#ECECEC"},stepper:{backgroundColor:"#ECECEC",borderRadius:"20px 20px 0px 0px","& .MuiStepIcon-root.MuiStepIcon-completed":{color:"green"},"& .MuiStepIcon-root.MuiStepIcon-active":{color:"#CECECE"}},steps:{flexDirection:"column",fontFamily:"SF Pro Display Regular","&.MuiStepLabel-iconContainer, &.MuiStepIcon-text":{display:"none",color:"currentColor",fontSize:"0"}},itemCart:{backgroundColor:"#a62a22",color:"white",display:"flex",justifyContent:"space-between",padding:"16px"},itemCartTxt:{fontSize:"14px"},AddItemTxt:{fontSize:"12px",textTransform:"uppercase"},orderList:{"& .MuiAccordionSummary-content.Mui-expanded":{margin:"10px 0"},"& .MuiIconButton-root":{padding:10}},processingTxt:{display:"flex",justifyContent:"space-between",width:"100%",fontFamily:"SF Pro Display Regular"},detailList:{display:"flex",flexDirection:"column"},detailListItem:{padding:"10px 0",display:"flex",justifyContent:"space-between",alignItems:"center",lineHeight:"1","&:first-child":{paddingTop:0}},productName:{fontWeight:"bold",fontSize:"14px",textTransform:"capitalize"},order:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",backgroundColor:"white",padding:"13px 16px"},buttons:{border:"1px solid black",borderRadius:"10px","& .MuiButton-root":{minWidth:"45px"}},divider:{border:"1px solid #D6D6D6",width:"99%",height:"0px"},bottomContainer:{backgroundColor:"#FFFFFF",padding:"16px",marginTop:"16px",display:"flex",flexDirection:"column"},bottomContainerTitle:{fontSize:16,fontWeight:700,marginBottom:8},inputField:{border:"1px solid #707070",borderRadius:"10px",height:30,margin:"6px 0","&:focus":{outline:"none"},"&:hover":{outline:"none"},"& .MuiInputBase-input":{padding:"0 14px",height:30},"& .MuiOutlinedInput-root":{height:30,"&:focus":{outline:"none"},"&:hover":{outline:"none"}},"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderRadius:10},"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline:focus":{outline:"none"},"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline:hover":{outline:"none"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"transparent"},"& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{borderColor:"transparent"}},errorText:{color:"#A62A22",fontSize:13},btnGreen:{backgroundColor:"#4EA23A",color:"white",borderRadius:"5px",padding:"3px 14px",margin:"6px 0","&:hover, &:focus":{outline:"none",backgroundColor:"#4EA23A"}},btnGrid:{width:"100%",textAlign:"center",padding:"16px",backgroundColor:"#ECECEC"},btnRed:{backgroundColor:"#a62a22",color:"white",width:"100%",borderRadius:"5px","&:hover, &:focus":{outline:"none",backgroundColor:"#a62a22"}},second:{backgroundColor:"#FFFFFF"},select:{width:"75%",border:"1px solid #D0D3D5",borderRadius:"10px","&.MuiInput-underline:after":{borderBottom:"none"}}}}));var oe=function(e){var t=e.itemTotal,a=e.menuList,r=e.tableNumber,c=e.companyId;console.log(t,"test");var i=ne(),l=Object(n.useState)({}),s=Object(d.a)(l,2),u=s[0],f=s[1],b=Object(n.useState)({}),h=Object(d.a)(b,2),g=h[0],x=h[1],E=Object(n.useState)(!1),v=Object(d.a)(E,2),y=(v[0],v[1]),N=Object(n.useState)({}),O=Object(d.a)(N,2),j=O[0],F=O[1],I=Object(n.useState)(3),R=Object(d.a)(I,2),D=R[0],M=R[1],_=["QR CODE","ORDER","CONFIRM","COMPLETE"],z=Object(n.useState)("panel1"),Q=Object(d.a)(z,2),U=Q[0],K=Q[1],te=Object(n.useState)(null),oe=Object(d.a)(te,2),re=oe[0],ce=oe[1];function ie(){return(ie=Object(T.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=ge(),F(t),Object.keys(t).length>0||(a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone_number:re&&re.phoneNumber,email:re&&re.email||""})},fetch(C+"order-user-detail?company=".concat(c),a).then((function(e){return e.json()})).then((function(e){return f(e)})).catch((function(e){return y(e)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return(le=Object(T.a)(S.a.mark((function e(){var t,n,o,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.data.order&&a.data.order.order_lines?((t=g.data).order_lines=a.data.order.order_lines.concat(t.order_lines),n={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(w.a)(Object(w.a)({},t),{},{company:c,asset:r,id:a.data.order.id}))},fetch(C+"company/".concat(c,"/order/").concat(a.data.order.id),n).then((function(e){return e.json()})).then((function(e){return e.success?pe.push("/Success"):function(){}})).catch((function(e){return y(e)}))):(o=g.data,i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(w.a)(Object(w.a)({},o),{},{company:c,asset:r}))},fetch(C+"company/".concat(c,"/order"),i).then((function(e){return e.json()})).then((function(e){return e.success?pe.push("/Success"):function(){}})).catch((function(e){return y(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(T.a)(S.a.mark((function e(n){var o,i,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=xe(),F(o),!n&&Object.keys(o).length>0||(i=[],Object.keys(t).map((function(e){var n={id:null,product:t[e].id,product_name:t[e].name,product_code:t[e].productCode,rate:t[e].perPlate,quantity:t[e].number,total:t[e].total,state:"New",company:c,order:a.data.order&&a.data.order.id||null};i.push(n)})),l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({company:c,asset:r,user:u.data.user||null,name:re&&re.fullName||u.data.name||null,phone_number:re&&re.phoneNumber,email:re&&re.email||u.data.email||null,voucher:re&&re.couponeId||null,tax:13,bill:null,order_lines:i})},fetch(C+"company/af174b04-b495-47c1-bc32-c0dff7170c34/order/verify",l).then((function(e){return e.json()})).then((function(e){return x(e)})).catch((function(e){return y(e)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return(de=Object(T.a)(S.a.mark((function e(n){var o,i,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(o={}),!n&&Object.keys(o).length>0||(i=[],Object.keys(t).map((function(e){var n={id:null,product:t[e].id,product_name:t[e].name,product_code:t[e].productCode,rate:t[e].perPlate,quantity:t[e].number,total:t[e].total,state:"New",company:c,order:a.data.order&&a.data.order.id||null};i.push(n)})),l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({company:c,asset:r,user:u.data.user||null,name:re&&re.fullName||u.data.name||null,phone_number:re&&re.phoneNumber,email:re&&re.email||u.data.email||null,voucher:re&&re.couponeId||null,tax:13,bill:null,order_lines:i})},fetch(C+"company/af174b04-b495-47c1-bc32-c0dff7170c34/order/verify",l).then((function(e){return e.json()})).then((function(e){return x(e)})).catch((function(e){return y(e)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){u&&u.data&&u.data.voucher&&0==u.data.voucher.length&&se(!0)}),[u]);var pe=Object(ee.useHistory)(),me=0;for(var fe in t)t.hasOwnProperty(fe)&&(me+=t[fe].total);var be,he=function(e,t){delete j[e.target.name],t=Object(w.a)(Object(w.a)({},t),{},Object(k.a)({},e.target.name,e.target.value)),ce(t)},ge=function(){var e={};return re&&re.phoneNumber?re.phoneNumber.match(/^[0-9]{8,15}$/)||(e.phoneNumber="Not valid"):e.phoneNumber="Phone is required",e},xe=function(){var e={};return re&&re.fullName||(e.fullName="Name is required"),re.email&&!re.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)&&(e.email="Not valid"),e},Ee=me*(a.data.service_charge/100)||0,Ce=me*(a.data.tax/100)||0,ve=me+Ee+Ce;return o.a.createElement("div",{className:i.root},o.a.createElement(P,{menuList:a,props:e}),o.a.createElement("div",{className:i.secondary},o.a.createElement("div",{className:i.third},o.a.createElement(p.a,{className:i.stepperContainer},o.a.createElement(H.a,{activeStep:D,className:i.stepper},_.map((function(e){return o.a.createElement(V.a,{key:e},o.a.createElement($.a,{className:i.steps},e))}))),o.a.createElement("div",null,D===_.length?o.a.createElement("div",null,o.a.createElement(m.a,{className:i.instructions},"All steps completed"),o.a.createElement(A.a,{onClick:function(){M(0)}},"Reset")):null)),o.a.createElement("div",{className:i.itemCart},o.a.createElement(m.a,{className:i.itemCartTxt},"Items In Cart"),o.a.createElement(m.a,{className:i.AddItemTxt,onClick:function(){return e.proceedToRedeem()}},"Add More Items +")),o.a.createElement(B.a,{square:!0,expanded:"panel1"===U,onChange:(be="panel1",function(e,t){K(!!t&&be)}),className:i.orderList},o.a.createElement(L.a,{expandIcon:o.a.createElement(Z.a,null)},o.a.createElement("div",{className:i.processingTxt},o.a.createElement(m.a,null,"Previous Order"),o.a.createElement(m.a,null,"Processing"))),o.a.createElement(G.a,{className:i.detailList},a.data.order&&a.data.order.order_lines.map((function(e,t){return o.a.createElement("div",{className:i.detailListItem},o.a.createElement(m.a,{className:i.productName,key:t},e.product_name),o.a.createElement("span",null,e.state))})))),Object.keys(e.itemTotal).map((function(t,a){return e.itemTotal[t].total>0&&o.a.createElement(p.a,{container:!0,className:i.item,key:a},o.a.createElement("div",{className:i.order},o.a.createElement(m.a,{className:i.productName},e.itemTotal[t].name),o.a.createElement(p.a,null,o.a.createElement("div",{className:i.buttons},o.a.createElement(A.a,{onClick:function(){return e.removeItem(t,"",e.itemTotal[t].perPlate,e.itemTotal[t].name,e.itemTotal[t].id,e.itemTotal[t].product_code)}},o.a.createElement(X.a,null)),o.a.createElement("span",null,e.itemTotal[t]&&e.itemTotal[t].number||0),o.a.createElement(A.a,{onClick:function(){return e.addItem(t,"",e.itemTotal[t].perPlate,e.itemTotal[t].name,e.itemTotal[t].id,e.itemTotal[t].product_code)}},o.a.createElement(Y.a,null))))),o.a.createElement(q.a,{className:i.divider}))})),o.a.createElement(ae,{billingInfo:g,totalPrice:me,serviceCharge:Ee,taxCharge:Ce,grandTotal:ve,previousGrandTotal:a.data&&a.data.order&&a.data.order.grand_total||0,tax:a.data.tax,service:a.data.service_charge})),0==Object.keys(g).length&&o.a.createElement(p.a,{className:i.bottomContainer},0==Object.keys(u).length&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{component:"h5",className:i.bottomContainerTitle},"Coupon & Discount"),o.a.createElement(W.a,{variant:"outlined",placeholder:"Phone No.",className:i.inputField,name:"phoneNumber",value:re&&re.phoneNumber||"",onChange:function(e){return he(e,re)}}),j&&j.phoneNumber&&o.a.createElement("p",{className:i.errorText},j.phoneNumber),a.data.order&&0==Object.keys(u).length&&o.a.createElement(A.a,{variant:"contained",className:i.btnGreen,onClick:function(){return function(){return ie.apply(this,arguments)}()}},"Continue")),u&&u.data&&!u.data.voucher&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{component:"h5",className:i.bottomContainerTitle},"Register For Coupon"),o.a.createElement(W.a,{variant:"outlined",placeholder:"Full Name",className:i.inputField,name:"fullName",value:re&&re.fullName||"",onChange:function(e){return he(e,re)}}),j&&j.fullName&&o.a.createElement("p",{className:i.errorText},j.fullName),o.a.createElement(W.a,{variant:"outlined",placeholder:"Email Address (Optional)",className:i.inputField,name:"email",value:re&&re.email||"",onChange:function(e){return he(e,re)}}),j&&j.email&&o.a.createElement("p",{className:"danger",style:{color:"red"}},j.email),o.a.createElement(A.a,{variant:"contained",onClick:function(){return se()},className:i.btnGreen},"Continue")),u&&u.data&&u.data.voucher&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{component:"h5",className:i.bottomContainerTitle},"Coupon & Discount"),o.a.createElement(J.a,{name:"couponeId",native:!0,className:i.select,value:re&&re.couponeId||"",onChange:function(e){return he(e,re)},placeholder:"Select Coupone"},o.a.createElement("option",{"aria-label":"None",value:""}),u.data.voucher.map((function(e,t){return o.a.createElement("option",{value:e.id,key:t},e.description)}))),o.a.createElement(A.a,{variant:"contained",onClick:function(){return function(e){return de.apply(this,arguments)}()}},"Apply"))),0!=Object.keys(g).length&&o.a.createElement(p.a,{className:i.btnGrid},o.a.createElement(A.a,{variant:"contained",className:i.btnRed,onClick:function(){return function(){return le.apply(this,arguments)}()}},D===_.length-1?"Finish":"Confirm Order"))))};a(161),a(159),a(154),Object(y.a)({root:{backgroundColor:"#ECECEC",display:"flex",justifyContent:"space-between",padding:"9px 20px",alignItems:"center"},buttons:{border:"1px solid black",borderRadius:"10px",fontFamily:"SF Pro Display","& .MuiButton-root":{minWidth:"45px"},"& button":{"&:hover, &:focus":{outline:"none"}}},addOrder:{border:"1px solid #707070",borderRadius:"10px",fontSize:"13px",backgroundColor:"#fff",fontFamily:"SF Pro Display",color:"#8D8E94","&:hover, &:focus":{outline:"none",backgroundColor:"#fff"}},productName:{fontSize:"16px",color:"#0D0D0D",fontFamily:"SF Pro Display",textTransform:"capitalize"},productPrice:{fontFamily:"SF Pro Display",fontSize:"16px",color:"#707070"},viewImg:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"5px"},viewTxt:{cursor:"pointer",fontFamily:"SF Pro Display",marginLeft:"5px",padding:"2px 5px",fontSize:"11px",backgroundColor:"#D6D6D6"},imgView:Object(k.a)({position:"fixed",zIndex:"1",paddingTop:"100px",left:"0",top:"0",width:"100%",height:"100%",overflow:"auto",backgroundColor:"rgb(0,0,0)"},"backgroundColor","rgba(0,0,0,0.9)")});Object(y.a)((function(e){return{root:{backgroundImage:'url("https://www.scandichotels.com/imagevault/publishedmedia/qn6infvg30381stkubky/scandic-sundsvall-city-restaurant-verket-10.jpg")',backgroundColor:"#ECECEC"},secondRoot:{borderRadius:"20px 20px 0px 0px",padding:"18px 0",backgroundColor:"#ECECEC",height:"73vh",display:"flex",flexDirection:"column"},tabs:{backgroundColor:"#ECECEC",marginTop:-15,borderRadius:"20px 20px 0px 0px","&.MuiTab-textColorInherit.Mui-selected":{color:"#a62a22"}},checkoutContainer:{width:"100%",backgroundColor:"#4EA23A",justifyContent:"space-between",alignItems:"center",position:"sticky",padding:"9px 20px",bottom:0},totalPrice:{color:"#fff",fontSize:16,fontWeight:700},checkout:{border:"1px solid black",borderRadius:"10px",fontSize:"14px",backgroundColor:"#ECECEC !important"},product:{padding:"none"},panel:{backgroundColor:"#ECECEC !important",paddingBottom:"65px","&.MuiBox-root-15":{padding:"0"}},orderBtn:{color:"white",backgroundColor:"#A62A22",borderRadius:"10px",padding:"8px 16px","&:hover, &:focus":{outline:"none",backgroundColor:"#A62A22"}},orderBtnContainer:{position:"fixed",justifyContent:"center",bottom:20},total:{color:"white",fontSize:"14px",lineHeight:"14px"},viewTxt:{color:"#273238"}}}));var re=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2);a[0],a[1];return o.a.createElement(o.a.Fragment,null,e.children)},ce=Object(y.a)((function(e){return{root:{backgroundImage:'url("https://www.scandichotels.com/imagevault/publishedmedia/qn6infvg30381stkubky/scandic-sundsvall-city-restaurant-verket-10.jpg")',fontFamily:"SF Pro Display Regular"},secondRoot:{borderRadius:"20px 20px 0px 0px",padding:"18px 0",backgroundColor:"#ECECEC",height:"73vh",display:"flex",flexDirection:"column"},stepper:{backgroundColor:"#ECECEC",borderRadius:"20px 20px 0px 0px",padding:"0 24px","& .MuiStepIcon-root.MuiStepIcon-completed":{color:"green"},"& .MuiStepIcon-root.MuiStepIcon-active":{color:"#CECECE"}},steps:{flexDirection:"column"},showCase:{flex:"1 0 auto",display:"flex",flexDirection:"column",justifyContent:"space-around"},svg:{display:"flex",justifyContent:"center"},otherImages:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},cupponproSVG:{paddingLeft:"24px",width:"40%"},discountSVG:{width:"40%"},successText:{color:"#000000",textTransform:"uppercase",fontWeight:"bold",fontSize:"28px",display:"flex",justifyContent:"center"},successSubText:{color:"#000000",textTransform:"uppercase",fontSize:"14px",display:"flex",justifyContent:"center"},btnGroups:{display:"flex",padding:"0 24px",flexDirection:"column"},btnCupponpro:{marginBottom:"10px",backgroundColor:"#a62a22",color:"white"},btnDone:{backgroundColor:"#273238",color:"white"}}}));var ie=function(e){var t=e.props,a=ce(),r=Object(n.useState)({}),c=Object(d.a)(r,2),i=c[0],l=(c[1],Object(n.useState)(!1)),s=Object(d.a)(l,2),u=(s[0],s[1],Object(n.useState)(4)),p=Object(d.a)(u,2),f=p[0],b=(p[1],["QR CODE","ORDER","CONFIRM","COMPLETE"]);return o.a.createElement("div",{className:a.root},o.a.createElement(P,{menuList:i,props:t}),o.a.createElement("div",{className:a.secondRoot},o.a.createElement(H.a,{activeStep:f,className:a.stepper},b.map((function(e){return o.a.createElement(V.a,{key:e},o.a.createElement($.a,{className:a.steps},e))}))),o.a.createElement("div",{className:a.showCase},o.a.createElement("div",{className:a.svg},o.a.createElement("img",{src:"/complete.svg",alt:"complete",className:a.img})),o.a.createElement("div",null,o.a.createElement(m.a,{className:a.successText},"Order Success"),o.a.createElement(m.a,{className:a.successSubText},"Your food will arrive shortly")),o.a.createElement("div",{className:a.otherImages},o.a.createElement("img",{className:a.cupponproSVG,src:"/Cp.svg",alt:"Cp"}),o.a.createElement("img",{src:"/Discount.svg",alt:"Cp",className:a.discountSVG}))),o.a.createElement("div",{className:a.btnGroups},o.a.createElement(A.a,{variant:"contained",className:a.btnCupponpro},"Go To Cupponpro"),o.a.createElement(A.a,{variant:"contained",className:a.btnDone},"Done"))))},le=Object(l.createBrowserHistory)(),se=function(){return o.a.createElement(i.Router,{history:le},o.a.createElement(re,null,o.a.createElement(i.Switch,null,o.a.createElement(i.Route,{path:"/",exact:!0,component:O}),o.a.createElement(i.Route,{path:"/success",exact:!0,component:ie}),o.a.createElement(i.Route,{path:"/:id",exact:!0,component:O}),o.a.createElement(i.Route,{path:"/:id/billing",exact:!0,component:oe}),o.a.createElement(i.Route,{component:u}))))};a(103);var ue=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=a(50);a(104);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(de.a,null,o.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(105)},93:function(e,t,a){},97:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.6df9574d.chunk.js.map