(this["webpackJsonpannouncement-website"]=this["webpackJsonpannouncement-website"]||[]).push([[0],{10:function(e,n,t){e.exports={wrapper:"Announcements_wrapper__wGCx3"}},17:function(e,n,t){},18:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),u=t(4),o=t.n(u),i=(t(17),t(18),t(6)),r=t.n(i),s=t(1);function d(e){return Object(s.jsxs)("div",{className:r.a.wrapper,children:[Object(s.jsx)("h3",{className:r.a.title,children:e.title}),Object(s.jsx)("p",{className:r.a.text,children:e.description})]})}var l=t(3),m=t.n(l);function p(e){var n=e.newAnnouncementTitle,t=e.newAnnouncementText,c=e.addAnnouncement,a=e.updateNewAnnouncementTitle,u=e.updateNewAnnouncementText;return Object(s.jsxs)("div",{className:m.a.wrapper,children:[Object(s.jsx)("input",{onChange:function(e){a(e.target.value)},value:n,className:m.a.input,placeholder:"Title..."}),Object(s.jsx)("textarea",{onChange:function(e){u(e.target.value)},value:t,className:m.a.textarea,placeholder:"Your announcement..."}),Object(s.jsx)("button",{onClick:function(){n.length>0&&t.length>0&&c()},className:m.a.btn,children:"Add new announcement"})]})}var w=t(10),j=t.n(w);var A=t(5),x=t(12),T=t(2),b="UPDATE-NEW-ANNOUNCEMENT-TITLE",N="UPDATE-NEW-ANNOUNCEMENT-TEXT",h="ADD-ANNOUNCEMENT",O=t(26),f={announcementData:[{id:1,title:"Lost Cat!",description:"Small grey cat missing in the Less Hall area. She is frightended of dogs and teenage boys. If you see her please phone 09651 324472",dateAdded:"04.11.2021"}],newAnnouncementTitle:"",newAnnouncementText:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b:return Object(T.a)(Object(T.a)({},e),{},{newAnnouncementTitle:n.newTitle});case N:return Object(T.a)(Object(T.a)({},e),{},{newAnnouncementText:n.newText});case h:return Object(T.a)(Object(T.a)({},e),{},{announcementData:[].concat(Object(x.a)(e.announcementData),[{id:e.announcementData[e.announcementData.length-1].id+1,title:e.newAnnouncementTitle,description:e.newAnnouncementText,dateAdded:O().format("DD.MM.YYYY")}]),newAnnouncementTitle:"",newAnnouncementText:""});default:return e}},g=Object(A.b)((function(e){return{announcementData:e.announcements.announcementData,newAnnouncementTitle:e.announcements.newAnnouncementTitle,newAnnouncementText:e.announcements.newAnnouncementText}}),(function(e){return{addAnnouncement:function(){e({type:h})},updateNewAnnouncementTitle:function(n){e({type:b,newTitle:n})},updateNewAnnouncementText:function(n){e({type:N,newText:n})}}}))((function(e){return Object(s.jsxs)("div",{className:j.a.wrapper,children:[Object(s.jsx)(p,{newAnnouncementTitle:e.newAnnouncementTitle,newAnnouncementText:e.newAnnouncementText,addAnnouncement:e.addAnnouncement,updateNewAnnouncementTitle:e.updateNewAnnouncementTitle,updateNewAnnouncementText:e.updateNewAnnouncementText}),Object(s.jsx)("div",{children:e.announcementData.map((function(e){return Object(s.jsx)(d,{title:e.title,description:e.description,dateAdded:e.dateAdded},e.id)}))})]})}));var v=function(){return Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("h1",{className:"title",children:"Notice Board"}),Object(s.jsx)(g,{})]})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,u=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),u(e),o(e)}))},E=t(9),C=Object(E.a)({announcements:_}),y=Object(E.b)(C);o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(A.a,{store:y,children:Object(s.jsx)(v,{})})}),document.getElementById("root")),D()},3:function(e,n,t){e.exports={wrapper:"NewAnnouncement_wrapper__2VY-L",input:"NewAnnouncement_input__3dtu0",textarea:"NewAnnouncement_textarea__3dnCu",btn:"NewAnnouncement_btn__27Pjn"}},6:function(e,n,t){e.exports={wrapper:"Item_wrapper__j_slw",title:"Item_title__28sDW",text:"Item_text__1k7Uu"}}},[[27,1,2]]]);
//# sourceMappingURL=main.13ad14d0.chunk.js.map