(this["webpackJsonpannouncement-website"]=this["webpackJsonpannouncement-website"]||[]).push([[0],{10:function(e,n,t){e.exports={wrapper:"Announcements_wrapper__wGCx3",search:"Announcements_search__hcmX2",searchInput:"Announcements_searchInput__1EjFA",btn:"Announcements_btn__c9ajd"}},20:function(e,n,t){},21:function(e,n,t){},3:function(e,n,t){e.exports={wrapper:"Item_wrapper__j_slw",title:"Item_title__28sDW",text:"Item_text__1k7Uu",buttons:"Item_buttons__3QZSX",btn:"Item_btn__v5BqH",edit:"Item_edit__1_HwY",editPlace:"Item_editPlace__14SAl"}},30:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),i=t(6),o=t.n(i),u=(t(20),t(21),t(9)),s=t(3),r=t.n(s),d=t.p+"static/media/delete_white_24dp.68aade56.svg",l=t.p+"static/media/edit_white_24dp.83e85947.svg",m=t(1);function p(e){var n=Object(c.useState)(!1),t=Object(u.a)(n,2),a=t[0],i=t[1];return Object(m.jsxs)("div",{className:r.a.wrapper,children:[Object(m.jsxs)("div",{className:r.a.buttons,children:[Object(m.jsx)("button",{onClick:function(){e.updateNewAnnouncementTitle(e.title),e.updateNewAnnouncementText(e.description),i(!0)},className:r.a.btn,children:Object(m.jsx)("img",{src:l,alt:"edit icon"})}),Object(m.jsx)("button",{onClick:function(){return e.deleteAnnouncement(e.id)},className:r.a.btn,children:Object(m.jsx)("img",{src:d,alt:"delete icon"})})]}),a?Object(m.jsxs)("div",{className:r.a.edit,children:[Object(m.jsx)("input",{onChange:function(n){e.updateNewAnnouncementTitle(n.target.value)},value:e.newAnnouncementTitle}),Object(m.jsx)("textarea",{onChange:function(n){e.updateNewAnnouncementText(n.target.value)},className:r.a.editPlace,value:e.newAnnouncementText}),Object(m.jsx)("button",{onClick:function(){e.editAnnouncement(e.id),i(!1)},className:r.a.btn,children:"Submit Changes"})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:r.a.title,children:e.title}),Object(m.jsx)("p",{className:r.a.text,children:e.description})]})]})}var b=t(5),j=t.n(b);function A(e){var n=e.newAnnouncementTitle,t=e.newAnnouncementText,c=e.addAnnouncement,a=e.updateNewAnnouncementTitle,i=e.updateNewAnnouncementText;return Object(m.jsxs)("div",{className:j.a.wrapper,children:[Object(m.jsx)("input",{onChange:function(e){a(e.target.value)},className:j.a.input,placeholder:"Title..."}),Object(m.jsx)("textarea",{onChange:function(e){i(e.target.value)},className:j.a.textarea,placeholder:"Your announcement..."}),Object(m.jsx)("button",{onClick:function(){n.length>0&&t.length>0&&c()},className:j.a.btn,children:"Add new announcement"})]})}var w=t(10),T=t.n(w);var x=t(8),h=t(11),N=t(2),O="UPDATE-NEW-ANNOUNCEMENT-TITLE",_="UPDATE-NEW-ANNOUNCEMENT-TEXT",f="ADD-ANNOUNCEMENT",g="DELETE-ANNOUNCEMENT",v="EDIT-ANNOUNCEMENT",D=t(29),C={announcementData:[{id:1,title:"Lost Cat!",description:"Small grey cat missing in the Less Hall area. She is frightended of dogs and teenage boys. If you see her please phone 09651 324472",dateAdded:"04.11.2021"},{id:2,title:"Computer problems?",description:"Experienced IT engineer will sort out problems with home computers. Call me: 09651 325693",dateAdded:"02.11.2021"},{id:3,title:"TV for sale!",description:"Thomson 32wh412b TV for sale. Diagonal 32. Fully working, remote control available. Suitable for cable and T2. Tel: 09652 355662",dateAdded:"05.10.2021"},{id:4,title:"Vegetables for sale!",description:"We will sell house potatoes and anouther vegetables, specify the price 0501042169",dateAdded:"01.09.2021"}],newAnnouncementTitle:"",newAnnouncementText:""},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case O:return Object(N.a)(Object(N.a)({},e),{},{newAnnouncementTitle:n.newTitle});case _:return Object(N.a)(Object(N.a)({},e),{},{newAnnouncementText:n.newText});case f:return Object(N.a)(Object(N.a)({},e),{},{announcementData:[].concat(Object(h.a)(e.announcementData),[{id:e.announcementData[e.announcementData.length-1].id+1,title:e.newAnnouncementTitle,description:e.newAnnouncementText,dateAdded:D().format("DD.MM.YYYY")}]),newAnnouncementTitle:"",newAnnouncementText:""});case g:var t=Object(N.a)(Object(N.a)({},e),{},{announcementData:Object(h.a)(e.announcementData)}),c=t.announcementData.filter((function(e){return e.id!==n.id}));return Object(N.a)(Object(N.a)({},e),{},{announcementData:c});case v:var a=Object(N.a)(Object(N.a)({},e),{},{announcementData:Object(h.a)(e.announcementData)});return a.announcementData.forEach((function(e){e.id===n.id&&(e.title=a.newAnnouncementTitle,e.description=a.newAnnouncementText)})),a.newAnnouncementTitle="",a.newAnnouncementText="",a;default:return e}},I=Object(x.b)((function(e){return{announcementData:e.announcements.announcementData,newAnnouncementTitle:e.announcements.newAnnouncementTitle,newAnnouncementText:e.announcements.newAnnouncementText}}),(function(e){return{addAnnouncement:function(){e({type:f})},updateNewAnnouncementTitle:function(n){e({type:O,newTitle:n})},updateNewAnnouncementText:function(n){e({type:_,newText:n})},deleteAnnouncement:function(n){e(function(e){return{type:g,id:e}}(n))},editAnnouncement:function(n){e(function(e){return{type:v,id:e}}(n))}}}))((function(e){var n=Object(c.useState)(""),t=Object(u.a)(n,2),a=t[0],i=t[1];return Object(m.jsxs)("div",{className:T.a.wrapper,children:[Object(m.jsx)(A,{newAnnouncementTitle:e.newAnnouncementTitle,newAnnouncementText:e.newAnnouncementText,addAnnouncement:e.addAnnouncement,updateNewAnnouncementTitle:e.updateNewAnnouncementTitle,updateNewAnnouncementText:e.updateNewAnnouncementText}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:T.a.search,children:[Object(m.jsx)("p",{children:"Search by Title"}),Object(m.jsx)("input",{onChange:function(e){i(e.target.value.toLowerCase())},className:T.a.searchInput})]}),e.announcementData.filter((function(e){return e.title.toLowerCase().includes(a)})).map((function(n){return Object(m.jsx)(p,{id:n.id,title:n.title,description:n.description,dateAdded:n.dateAdded,deleteAnnouncement:e.deleteAnnouncement,updateNewAnnouncementText:e.updateNewAnnouncementText,newAnnouncementText:e.newAnnouncementText,updateNewAnnouncementTitle:e.updateNewAnnouncementTitle,newAnnouncementTitle:e.newAnnouncementTitle,editAnnouncement:e.editAnnouncement},n.id)}))]})]})}));var y=function(){return Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h1",{className:"title",children:"Notice Board"}),Object(m.jsx)(I,{})]})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),i(e),o(e)}))},L=t(14),k=Object(L.a)({announcements:E}),M=Object(L.b)(k);o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(x.a,{store:M,children:Object(m.jsx)(y,{})})}),document.getElementById("root")),S()},5:function(e,n,t){e.exports={wrapper:"NewAnnouncement_wrapper__2VY-L",input:"NewAnnouncement_input__3dtu0",textarea:"NewAnnouncement_textarea__3dnCu",btn:"NewAnnouncement_btn__27Pjn"}}},[[30,1,2]]]);
//# sourceMappingURL=main.f6d3479f.chunk.js.map