(this["webpackJsonpannouncement-website"]=this["webpackJsonpannouncement-website"]||[]).push([[0],{11:function(e,n,t){e.exports={title:"SimilarItems_title__UPKxe",text:"SimilarItems_text__703zp"}},21:function(e,n,t){},22:function(e,n,t){},3:function(e,n,t){e.exports={wrapper:"Item_wrapper__j_slw",title:"Item_title__28sDW",text:"Item_text__1k7Uu",buttons:"Item_buttons__3QZSX",btn:"Item_btn__v5BqH",edit:"Item_edit__1_HwY",editPlace:"Item_editPlace__14SAl"}},31:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),i=t(8),o=t.n(i),u=(t(21),t(22),t(4)),s=t(3),d=t.n(s),l=t.p+"static/media/delete_white_24dp.68aade56.svg",r=t.p+"static/media/edit_white_24dp.83e85947.svg",m=t(0);function j(e){var n=Object(c.useState)(!1),t=Object(u.a)(n,2),a=t[0],i=t[1];return Object(m.jsxs)("div",{className:d.a.wrapper,children:[Object(m.jsxs)("div",{className:d.a.buttons,children:[Object(m.jsx)("button",{onClick:function(){e.updateNewAnnouncementTitle(e.title),e.updateNewAnnouncementText(e.description),i(!0)},className:d.a.btn,children:Object(m.jsx)("img",{src:r,alt:"edit icon"})}),Object(m.jsx)("button",{onClick:function(){return e.deleteAnnouncement(e.id)},className:d.a.btn,children:Object(m.jsx)("img",{src:l,alt:"delete icon"})})]}),a?Object(m.jsxs)("div",{className:d.a.edit,children:[Object(m.jsx)("input",{onChange:function(n){e.updateNewAnnouncementTitle(n.target.value)},value:e.newAnnouncementTitle}),Object(m.jsx)("textarea",{onChange:function(n){e.updateNewAnnouncementText(n.target.value)},className:d.a.editPlace,value:e.newAnnouncementText}),Object(m.jsx)("button",{onClick:function(){e.editAnnouncement(e.id),i(!1)},className:d.a.btn,children:"Submit Changes"})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:d.a.title,children:e.title}),Object(m.jsx)("p",{className:d.a.text,children:e.description}),Object(m.jsx)("p",{className:d.a.text,children:e.dateAdded})]})]})}var p=t(7),b=t.n(p);function h(e){var n=e.newAnnouncementTitle,t=e.newAnnouncementText,c=e.addAnnouncement,a=e.updateNewAnnouncementTitle,i=e.updateNewAnnouncementText;return Object(m.jsxs)("div",{className:b.a.wrapper,children:[Object(m.jsx)("input",{onChange:function(e){a(e.target.value)},className:b.a.input,placeholder:"Title..."}),Object(m.jsx)("textarea",{onChange:function(e){i(e.target.value)},className:b.a.textarea,placeholder:"Your announcement..."}),Object(m.jsx)("button",{onClick:function(){n.length>0&&t.length>0&&c()},className:b.a.btn,children:"Add new announcement"})]})}var x=t(5),A=t.n(x),O=t(11),w=t.n(O);function T(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:w.a.title,children:e.title}),Object(m.jsx)("p",{className:w.a.text,children:e.description}),Object(m.jsx)("p",{className:w.a.text,children:e.dateAdded})]})}var f=t(10),N=t(12),_=t(2),g="UPDATE-NEW-ANNOUNCEMENT-TITLE",v="UPDATE-NEW-ANNOUNCEMENT-TEXT",D="ADD-ANNOUNCEMENT",C="DELETE-ANNOUNCEMENT",E="EDIT-ANNOUNCEMENT",I=t(30),k={announcementData:[{id:1,title:"Lost Cat!",description:"Small grey cat missing in the Less Hall area. She is frightended of dogs and teenage boys. If you see her please phone 09651 324472",dateAdded:"04.11.2021"},{id:2,title:"Computer problems?",description:"Experienced IT engineer will sort out problems with home computers. Call me: 09651 325693",dateAdded:"02.11.2021"},{id:3,title:"TV for sale!",description:"Thomson 32wh412b TV for sale. Diagonal 32. Fully working, remote control available. Suitable for cable and T2. Tel: 09652 355662",dateAdded:"05.10.2021"},{id:4,title:"Vegetables for sale!",description:"We will sell house potatoes and anouther vegetables, specify the price 0501042169",dateAdded:"01.09.2021"},{id:5,title:"Lost Dog!",description:"Dog missing in the Central Park. If you see him please phone 0789 324775",dateAdded:"07.09.2021"}],newAnnouncementTitle:"",newAnnouncementText:""},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:return Object(_.a)(Object(_.a)({},e),{},{newAnnouncementTitle:n.newTitle});case v:return Object(_.a)(Object(_.a)({},e),{},{newAnnouncementText:n.newText});case D:return Object(_.a)(Object(_.a)({},e),{},{announcementData:[].concat(Object(N.a)(e.announcementData),[{id:e.announcementData[e.announcementData.length-1].id+1,title:e.newAnnouncementTitle,description:e.newAnnouncementText,dateAdded:I().format("DD.MM.YYYY")}]),newAnnouncementTitle:"",newAnnouncementText:""});case C:var t=Object(_.a)(Object(_.a)({},e),{},{announcementData:Object(N.a)(e.announcementData)}),c=t.announcementData.filter((function(e){return e.id!==n.id}));return Object(_.a)(Object(_.a)({},e),{},{announcementData:c});case E:var a=Object(_.a)(Object(_.a)({},e),{},{announcementData:Object(N.a)(e.announcementData)});return a.announcementData.forEach((function(e){e.id===n.id&&(e.title=a.newAnnouncementTitle,e.description=a.newAnnouncementText)})),a.newAnnouncementTitle="",a.newAnnouncementText="",a;default:return e}},S=Object(f.b)((function(e){return{announcementData:e.announcements.announcementData,newAnnouncementTitle:e.announcements.newAnnouncementTitle,newAnnouncementText:e.announcements.newAnnouncementText}}),(function(e){return{addAnnouncement:function(){e({type:D})},updateNewAnnouncementTitle:function(n){e({type:g,newTitle:n})},updateNewAnnouncementText:function(n){e({type:v,newText:n})},deleteAnnouncement:function(n){e(function(e){return{type:C,id:e}}(n))},editAnnouncement:function(n){e(function(e){return{type:E,id:e}}(n))}}}))((function(e){var n=Object(c.useState)(""),t=Object(u.a)(n,2),a=t[0],i=t[1],o=e.announcementData.filter((function(e){return e.title.toLowerCase().includes(a)})),s=Object(c.useState)(!0),d=Object(u.a)(s,2),l=d[0],r=d[1],p=Object(c.useState)(!0),b=Object(u.a)(p,2),x=b[0],O=b[1],w=Object(c.useState)(!0),f=Object(u.a)(w,2),N=f[0],_=f[1],g=[];return Object(m.jsxs)("div",{className:A.a.wrapper,children:[Object(m.jsx)(h,{newAnnouncementTitle:e.newAnnouncementTitle,newAnnouncementText:e.newAnnouncementText,addAnnouncement:e.addAnnouncement,updateNewAnnouncementTitle:e.updateNewAnnouncementTitle,updateNewAnnouncementText:e.updateNewAnnouncementText}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:A.a.search,children:[Object(m.jsx)("p",{children:"Search by Title"}),Object(m.jsx)("input",{onChange:function(e){i(e.target.value.toLowerCase())},className:A.a.searchInput})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Select Details:"}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",defaultChecked:!0,onChange:function(e){r(e.target.checked)}}),"Title"]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",defaultChecked:!0,onChange:function(e){O(e.target.checked)}}),"Description"]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",defaultChecked:!0,onChange:function(e){_(e.target.checked)}}),"Date Added"]})]}),o.map((function(n){return Object(m.jsx)(j,{id:n.id,title:l?n.title:"",description:x?n.description:"",dateAdded:N?n.dateAdded:"",deleteAnnouncement:e.deleteAnnouncement,updateNewAnnouncementText:e.updateNewAnnouncementText,newAnnouncementText:e.newAnnouncementText,updateNewAnnouncementTitle:e.updateNewAnnouncementTitle,newAnnouncementTitle:e.newAnnouncementTitle,editAnnouncement:e.editAnnouncement},n.id)})),1===o.length&&function(e,n,t){var c=e.split(" "),a=n.split(" "),i=[],o=[],u=[];t.forEach((function(e){c.forEach((function(n){e.title.includes(n)&&i.push(e)})),a.forEach((function(n){e.description.includes(n)&&o.push(e)})),i.includes(e)&&o.includes(e)&&u.push(e)})),g=u}(o[0].title,o[0].description,e.announcementData),g.filter((function(e){return e!==o[0]})).length<=3?g.filter((function(e){return e!==o[0]})).map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{className:A.a.line}),Object(m.jsx)("h3",{children:"Top similiar announcements:"}),Object(m.jsx)(T,{id:e.id,title:l?e.title:"",description:x?e.description:"",dateAdded:N?e.dateAdded:""},e.id)]})})):g.filter((function(e){return e!==o[0]})).slice(0,3).map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{className:A.a.line}),Object(m.jsx)("h3",{children:"Top similiar announcements:"}),Object(m.jsx)(T,{id:e.id,title:l?e.title:"",description:x?e.description:"",dateAdded:N?e.dateAdded:""},e.id)]})}))]})]})}));var L=function(){return Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h1",{className:"title",children:"Notice Board"}),Object(m.jsx)(S,{})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),i(e),o(e)}))},U=t(15),M=Object(U.a)({announcements:y}),Y=Object(U.b)(M);o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(f.a,{store:Y,children:Object(m.jsx)(L,{})})}),document.getElementById("root")),P()},5:function(e,n,t){e.exports={wrapper:"Announcements_wrapper__wGCx3",search:"Announcements_search__hcmX2",searchInput:"Announcements_searchInput__1EjFA",btn:"Announcements_btn__c9ajd",line:"Announcements_line__3Lp6D"}},7:function(e,n,t){e.exports={wrapper:"NewAnnouncement_wrapper__2VY-L",input:"NewAnnouncement_input__3dtu0",textarea:"NewAnnouncement_textarea__3dnCu",btn:"NewAnnouncement_btn__27Pjn"}}},[[31,1,2]]]);
//# sourceMappingURL=main.4fd02d99.chunk.js.map