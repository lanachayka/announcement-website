(this["webpackJsonpannouncement-website"]=this["webpackJsonpannouncement-website"]||[]).push([[0],{11:function(e,n,t){e.exports={wrapper:"Announcements_wrapper__wGCx3"}},17:function(e,n,t){},18:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),u=t(5),o=t.n(u),i=(t(17),t(18),t(3)),r=t.n(i),s=t.p+"static/media/delete_white_24dp.68aade56.svg",d=t(1);function m(e){return Object(d.jsxs)("div",{className:r.a.wrapper,children:[Object(d.jsx)("div",{className:r.a.buttons,children:Object(d.jsx)("button",{onClick:function(){return e.deleteAnnouncement(e.id)},className:r.a.btn,children:Object(d.jsx)("img",{src:s,alt:"delete icon"})})}),Object(d.jsx)("h3",{className:r.a.title,children:e.title}),Object(d.jsx)("p",{className:r.a.text,children:e.description})]})}var l=t(4),p=t.n(l);function j(e){var n=e.newAnnouncementTitle,t=e.newAnnouncementText,a=e.addAnnouncement,c=e.updateNewAnnouncementTitle,u=e.updateNewAnnouncementText;return Object(d.jsxs)("div",{className:p.a.wrapper,children:[Object(d.jsx)("input",{onChange:function(e){c(e.target.value)},value:n,className:p.a.input,placeholder:"Title..."}),Object(d.jsx)("textarea",{onChange:function(e){u(e.target.value)},value:t,className:p.a.textarea,placeholder:"Your announcement..."}),Object(d.jsx)("button",{onClick:function(){n.length>0&&t.length>0&&a()},className:p.a.btn,children:"Add new announcement"})]})}var b=t(11),w=t.n(b);var A=t(6),x=t(9),T=t(2),N="UPDATE-NEW-ANNOUNCEMENT-TITLE",O="UPDATE-NEW-ANNOUNCEMENT-TEXT",h="ADD-ANNOUNCEMENT",f="DELETE-ANNOUNCEMENT",_=t(26),v={announcementData:[{id:1,title:"Lost Cat!",description:"Small grey cat missing in the Less Hall area. She is frightended of dogs and teenage boys. If you see her please phone 09651 324472",dateAdded:"04.11.2021"}],newAnnouncementTitle:"",newAnnouncementText:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case N:return Object(T.a)(Object(T.a)({},e),{},{newAnnouncementTitle:n.newTitle});case O:return Object(T.a)(Object(T.a)({},e),{},{newAnnouncementText:n.newText});case h:return Object(T.a)(Object(T.a)({},e),{},{announcementData:[].concat(Object(x.a)(e.announcementData),[{id:e.announcementData[e.announcementData.length-1].id+1,title:e.newAnnouncementTitle,description:e.newAnnouncementText,dateAdded:_().format("DD.MM.YYYY")}]),newAnnouncementTitle:"",newAnnouncementText:""});case f:var t=Object(T.a)(Object(T.a)({},e),{},{announcementData:Object(x.a)(e.announcementData)}),a=t.announcementData.filter((function(e){return e.id!==n.id}));return Object(T.a)(Object(T.a)({},e),{},{announcementData:a});default:return e}},D=Object(A.b)((function(e){return{announcementData:e.announcements.announcementData,newAnnouncementTitle:e.announcements.newAnnouncementTitle,newAnnouncementText:e.announcements.newAnnouncementText}}),(function(e){return{addAnnouncement:function(){e({type:h})},updateNewAnnouncementTitle:function(n){e({type:N,newTitle:n})},updateNewAnnouncementText:function(n){e({type:O,newText:n})},deleteAnnouncement:function(n){e(function(e){return{type:f,id:e}}(n))}}}))((function(e){return Object(d.jsxs)("div",{className:w.a.wrapper,children:[Object(d.jsx)(j,{newAnnouncementTitle:e.newAnnouncementTitle,newAnnouncementText:e.newAnnouncementText,addAnnouncement:e.addAnnouncement,updateNewAnnouncementTitle:e.updateNewAnnouncementTitle,updateNewAnnouncementText:e.updateNewAnnouncementText}),Object(d.jsx)("div",{children:e.announcementData.map((function(n){return Object(d.jsx)(m,{id:n.id,title:n.title,description:n.description,dateAdded:n.dateAdded,deleteAnnouncement:e.deleteAnnouncement},n.id)}))})]})}));var E=function(){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h1",{className:"title",children:"Notice Board"}),Object(d.jsx)(D,{})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,u=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),u(e),o(e)}))},y=t(10),I=Object(y.a)({announcements:g}),L=Object(y.b)(I);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(A.a,{store:L,children:Object(d.jsx)(E,{})})}),document.getElementById("root")),C()},3:function(e,n,t){e.exports={wrapper:"Item_wrapper__j_slw",title:"Item_title__28sDW",text:"Item_text__1k7Uu",buttons:"Item_buttons__3QZSX",btn:"Item_btn__v5BqH"}},4:function(e,n,t){e.exports={wrapper:"NewAnnouncement_wrapper__2VY-L",input:"NewAnnouncement_input__3dtu0",textarea:"NewAnnouncement_textarea__3dnCu",btn:"NewAnnouncement_btn__27Pjn"}}},[[27,1,2]]]);
//# sourceMappingURL=main.311346be.chunk.js.map