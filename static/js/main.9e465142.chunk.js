(this["webpackJsonpluke-test"]=this["webpackJsonpluke-test"]||[]).push([[0],{13:function(e,t,i){"use strict";i.r(t);i(1);var s=i(4),c=i.n(s),l=(i(9),i(10),i.p+"static/media/iphonex_dark.dc23f2fc.png"),n=i.p+"static/media/iphonex_light.2223e53c.png",a=i.p+"static/media/samsung_dark.1d66029b.png",r=i(0),o=function(e){var t=e.phone,i=e.theme,s=e.image,c=e.height,o=e.styles,d=e.shadow;o.height=c;var j={iphone:{dark:l,light:n},samsung:{dark:a}};return Object(r.jsx)("div",{className:"phone-wrapper".concat(d?" shadow":""),style:o,children:Object(r.jsxs)("div",{className:"phone",children:[Object(r.jsx)("img",{className:"phone__body",src:j[t][i],alt:"phone"}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:s,alt:"screen",className:"phone__img".concat("samsung"===t?" samsung":"").concat("light"===i?" light":"")})})]})})},d=function(e){var t=e.label,i=e.link,s=e.type,c=e.icon,l=e.styles,n=void 0===l?{}:l;return Object(r.jsxs)("a",{href:i,style:n,className:"button".concat(s?" "+s:""),children:[c&&Object(r.jsx)("img",{src:c,alt:t,className:"button_icon"}),t,c&&Object(r.jsx)("div",{})]})},j=i.p+"static/media/logo.e075721d.svg",A=i.p+"static/media/logo_fff.74e0b154.svg",h=function(e){var t=e.color;return Object(r.jsxs)("a",{href:"/#",className:"logo".concat(t?" "+t:""),children:[Object(r.jsx)("img",{src:"fff"===t?A:j,alt:"logo"}),Object(r.jsx)("span",{children:"Oxios"})]})},g=function(e){var t=e.children,i=e.className;return Object(r.jsx)("div",{className:"container".concat(i?" "+i:""),children:t})},x=function(e){var t=e.item,i=e.extended;return document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".dropdown-trigger");window.M.Dropdown.init(e,{coverTrigger:!1})})),t.extends&&!i?Object(r.jsxs)("li",{className:"navlist__item",children:[Object(r.jsxs)("a",{style:{display:"flex",alignItems:"center"},className:"dropdown-trigger navlist__item_link",href:"/#","data-target":"dropdown1",children:[t.label," ",Object(r.jsx)("i",{className:"material-icons",children:"arrow_drop_down"})]}),Object(r.jsx)("ul",{id:"dropdown1",className:"dropdown-content",children:t.extends.map((function(e,t){return Object(r.jsx)("li",{className:"navlist__item",children:Object(r.jsx)("a",{className:"navlist__item_link",href:e.link,children:e.label})},t)}))})]}):Object(r.jsx)("li",{className:"navlist__item",children:Object(r.jsx)("a",{className:"navlist__item_link",href:t.link,children:t.label})})},b=[[{label:"Our Works",link:"/#"},{label:"Technologies",link:"/#"},{label:"About Us",link:"/#",extends:[{label:"Ext 1",link:"/#"},{label:"Ext 2",link:"/#"}]},{label:"Blog",link:"/#"}],[{label:"Contact Us",link:"/#"},{label:"Get Checklist",link:"/#"}]],O=function(e){var t=e.extended;return Object(r.jsxs)("ul",{className:"navlist".concat(t?" extended":""),children:[b[0].map((function(e,i){return Object(r.jsx)(x,{item:e,extended:t},i)})),t?b[1].map((function(e,i){return Object(r.jsx)(x,{item:e,extended:t},i)})):null]})},p=function(){return Object(r.jsx)("div",{className:"navbar-wrapper",children:Object(r.jsx)(g,{children:Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)(h,{}),Object(r.jsx)(O,{}),Object(r.jsx)(d,{link:"/#",label:"Hire Us"})]})})})},R=i.p+"static/media/intro0.68f987c6.png",m=i.p+"static/media/intro1.50dabdb7.png",F=i.p+"static/media/screen1.b900ab3d.png",u={item0:{position:"absolute",top:"70px",left:"309px",zIndex:5},item1:{position:"absolute",top:"120px",left:"440px",zIndex:1},item2:{position:"absolute",bottom:"50px",left:"50px",zIndex:10}},E=function(){return Object(r.jsxs)("div",{className:"intro_left",children:[Object(r.jsx)("img",{src:R,alt:"intro"}),Object(r.jsx)(o,{phone:"iphone",theme:"light",image:"data:image/png;base64,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",height:"350px",styles:u.item0,shadow:!0}),Object(r.jsx)(o,{phone:"iphone",theme:"light",image:F,height:"320px",styles:u.item1,shadow:!0}),Object(r.jsx)("img",{src:m,alt:"intro",style:u.item2})]})},N=i.p+"static/media/appstore.1f5549cd.svg",B=function(e){var t=e.item,i={reactnative:"data:image/png;base64,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",nodejs:"data:image/png;base64,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",mongodb:"data:image/png;base64,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"};return Object(r.jsx)("div",{className:"intro__tech_card",children:Object(r.jsx)("img",{src:i[t],alt:t})})},Y={backend:["nodejs","mongodb"],frontend:["reactnative"]},I=function(e){var t=e.label;return Object(r.jsxs)("div",{className:"intro__stack",children:[Object(r.jsxs)("div",{className:"intro__stack_title",children:[Object(r.jsx)("div",{className:"intro__line"}),Object(r.jsx)("span",{children:t})]}),Y[t].map((function(e,t){return Object(r.jsx)(B,{item:e},t)}))]})},U=function(){return Object(r.jsxs)("div",{className:"intro_right",children:[Object(r.jsx)("h2",{children:"\u0422\u0435\u0445\u043d\u043e\u043b\u0433\u0438\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 :"}),Object(r.jsx)(I,{label:"backend"}),Object(r.jsx)(I,{label:"frontend"}),Object(r.jsxs)("div",{className:"intro__buttons",children:[Object(r.jsx)(d,{label:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442",link:"/#",type:"light"}),Object(r.jsx)(d,{label:"App Store",link:"/#",type:"dark",icon:N}),Object(r.jsx)(d,{label:"Google Play",link:"/#",type:"dark",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAbCAYAAABm409WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQzSURBVHgBrVZdaBxVFP7Onbuzu2lCAloaUTAqPhQhTURQX5S+FFR86INIKJLmRRB8sKBCXuKmD1JFcBcqLYgkMW21D9HQVppixY0gqRjMD9Haiu4GQuMP1GST/ZmdnTnen52kom2TNGe5e9mZe893vu98c3eo48ho7qE9QXZni+g//uT+PLY5qP3wGXYTIR55zEdTMuyXiVI63dmzhG0KIR1GWBV8dcqF79Fbjp+c6ps83Y1tCnr8yNlQz+rDiXhIex6toLkx5ARhXgB7ezu78riDEDEHJB1wTEEEvsBP0wlUykQAt7kizB2dOzlw7PInbdhiKACC6xDpWTqCg5rkuekGlCtkKYIPuuznhi8PpbCFEFLpYIYDWBBQTTGZmdmhQNQNtjCOEH0jVwdz53JDm+qPYRAN3fCYsEAa5IfZRlQ8x0CwQaI2CnngYm5gaiJ3rG1DALpyKfUwIORIYj2kFOwrkO9mG6lkmWgjgJmVatwRCDc3ufDRwNRtgIRJKLQEgKOareTSTSc7E3zfwaW5ZhQrTl0uxYNIoZAixQelK6d+ufJB6uYAOpGqXiVXgwybiIVlQqgqkG9/bOGi51gaMNlJ9yZW9Ftav1nsK6d7c+Wjvf/pD3UNnmdVmFldL9CIDX3VuLU+q9iRCHlf+9+4O+lTXDA3eR49eOkaYmXfLGK9VlAWQdiTfOWdvAE4MDwWQutKhjKpBbafGjPCWAMmNMZr9Gz7db4HJdo9u8BupVYvw2y3pdh6BsMY90vlHPOT1+7aetkqgIhdxKpSc/D9hEOvy18RTyhNE7YYsocB2xaZmrrVd4t0lFvqoiiNLFhUAlvvRB41S5pXCnjx7CiK1SLiLzwMuTMBm5DV9vpGYBkhp92wmpHapnpjWL/L2iHrC6PZZGgurKDrizNIFn2U4WJxZAGtB+7j+K6EKd7sD2nQD7z+5DPpvN4ntYu0JoKjo4GiJqw7QWu/sor95y4gvuKjgri97oHnT/1J93fvQrI19rXa1k9PvTt+417D4F+y2NZinQWjoVDk50YvwlXJqxS/wV+qNo/zV47/ler86uQQ/iek9j6MLExrrcCaM9GwXMLTn4+TXFWVkwuKKiEsOUGQcWthpjP78U3/oOoMjE1tU9k6QkdSJX/iswnIlZqRhay5SD30o+zVDu3NfpjHbULqp9VUzPbpjJInCmXuGJkkUQjgKVm0GsTBuAiR2vfl++PYYJgmGw6wBtY/YksV7D49TVQI2NMNFVh2wiD1/IX3MthkSOEgOl+M3V2V/IFP54BCiKpwlykM06tlyvRk397Si4DUhxnXjyF3sUT3nvgZ7DGqiGVrYbWnZ+xwHncQioE1TWyxhLtO/MY1j2ZcyNdeGntzwzrfEkD3QPxeQdPw/FLoUerl829sWudbAsg/KkvuqWtp/7qfeTV7aNteuKL4B00334GmirgnAAAAAElFTkSuQmCC"})]})]})},v=function(){return Object(r.jsxs)(g,{className:"intro",children:[Object(r.jsxs)("h1",{children:[Object(r.jsx)("span",{children:"Vilka APP -"})," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0435\u0434\u044b \u0441\u043e \u0432\u0441\u0435\u0445 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0432 \u0432\u0430\u0448 \u0434\u043e\u043c"]}),Object(r.jsxs)("div",{className:"intro_content",children:[Object(r.jsx)(E,{}),Object(r.jsx)(U,{})]})]})},k=i.p+"static/media/screen2.8f339d7f.png",G=i.p+"static/media/screen3.4ee85d84.png",f=i.p+"static/media/screen4.ea6fbf37.png",W=i.p+"static/media/screen5.d5b5a7e3.png",S=i(3),Q=function(e){var t=e.item;return Object(r.jsxs)("div",{className:"features__item",children:[Object(r.jsxs)("div",{className:"features__item_text",children:[Object(r.jsx)("div",{className:"features__item_line"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"features__item_title",children:t.title}),Object(r.jsx)("p",{className:"features__item_description",children:t.description})]})]}),Object(r.jsx)(o,Object(S.a)(Object(S.a)({},t.phone),{},{height:"460px",styles:{}}))]})},w=i.p+"static/media/intro2.42da0de8.png",K=i.p+"static/media/intro3.0c6dc60b.png",V=i.p+"static/media/intro4.556bfa7f.png",y=function(){return Object(r.jsxs)("div",{className:"features__bg",children:[Object(r.jsx)("img",{src:w,alt:"bg",className:"features__bg_0"}),Object(r.jsx)("img",{src:K,alt:"bg",className:"features__bg_1"}),Object(r.jsx)("img",{src:V,alt:"bg",className:"features__bg_2"}),Object(r.jsx)("img",{src:V,alt:"bg",className:"features__bg_3"})]})},Z=[{title:"\u0423\u0434\u043e\u0431\u0441\u0442\u0432\u043e",description:"\u0412\u0441\u0435 \u043b\u0435\u0433\u043a\u043e, \u0431\u044b\u0441\u0442\u0440\u043e \u0438 \u043f\u043e\u043d\u044f\u0442\u043d\u043e",phone:{phone:"samsung",theme:"dark",image:k}},{title:"\u041d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u044c",description:"\u0412\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438!",phone:{phone:"iphone",theme:"dark",image:G}},{title:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e",description:"\u041c\u044b \u0434\u0430\u0451\u043c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u0439\u0442\u0438 \u0432\u0430\u0448 \u043b\u044e\u0431\u0438\u043c\u044b\u0439 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d \u0438\u043b\u0438 \u0431\u043b\u044e\u0434\u043e.",phone:{phone:"iphone",theme:"dark",image:f}},{title:"\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0439 \u043e\u0442\u0437\u044b\u0432\u044b ",description:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432 \u043e \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0435 \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437",phone:{phone:"iphone",theme:"dark",image:W}}],C=function(){return Object(r.jsxs)(g,{className:"features",children:[Object(r.jsx)(y,{}),Object(r.jsx)("p",{className:"features__title",children:"\u0414\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),Object(r.jsx)("div",{className:"features__list",children:Z.map((function(e,t){return Object(r.jsx)(Q,{item:e},t)}))})]})},L=i.p+"static/media/intro5.aec9a99f.png",X=function(){return Object(r.jsxs)(g,{className:"panel",children:[Object(r.jsx)("h2",{className:"panel__title",style:{textAlign:"center"},children:"\u0414\u043b\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435\u0432 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432"}),Object(r.jsxs)("div",{className:"panel__flex",children:[Object(r.jsxs)("div",{className:"panel__left",children:[Object(r.jsxs)("div",{className:"panel__text",children:[Object(r.jsx)("h2",{className:"panel__title",children:"\u0423\u0434\u043e\u0431\u043d\u0430\u044f \u0430\u0434\u043c\u0438\u043d \u043f\u0430\u043d\u0435\u043b\u044c \u0434\u043b\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435\u0432 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432"}),Object(r.jsx)("p",{className:"panel__label",children:"\u0414\u043b\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435\u0432 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 WEB-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0432\u0441\u0435\u043c\u0438 \u0441\u0432\u043e\u0438\u043c\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043c\u0438."})]}),Object(r.jsx)(d,{styles:{width:420},label:"\u0412\u043b\u0430\u0434\u0435\u0435\u0442\u0435 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u043c? \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 Vilka",link:"/#",type:"light"})]}),Object(r.jsx)("div",{className:"panel__img",children:Object(r.jsx)("img",{src:L,alt:"hero"})})]})]})},T=function(){return Object(r.jsxs)("div",{className:"contactus",children:[Object(r.jsx)("p",{children:"Do you want to discuss your project?"}),Object(r.jsx)(d,{styles:{boxShadow:"0px 5px 20px 0px #34315026",padding:"15px, 60px, 15px, 60px"},label:"Contact Us",link:"/#"})]})},P=[{label:"twitter",link:"/#",icon:i.p+"static/media/twitter.cdf506f0.svg"},{label:"instagram",link:"/#",icon:i.p+"static/media/instagram.85a85436.svg"},{label:"facebook",link:"/#",icon:i.p+"static/media/facebook.7eeb5e9d.svg"},{label:"linkedin",link:"/#",icon:i.p+"static/media/linkedin.2d96bc47.svg"}],z=function(){return Object(r.jsx)("ul",{className:"footer__social_list",children:P.map((function(e,t){return Object(r.jsx)("li",{className:"footer__social_link",children:Object(r.jsxs)("a",{href:e.link,children:[Object(r.jsx)("img",{src:e.icon,alt:e.label}),e.label]})},t)}))})},J=function(){return Object(r.jsx)("div",{className:"footer-wrapper",children:Object(r.jsxs)(g,{className:"footer",children:[Object(r.jsxs)("div",{className:"footer__logo",children:[Object(r.jsx)(h,{color:"fff"}),Object(r.jsx)("p",{children:"OXIOS \xa9 2020  All Rights Reserved"})]}),Object(r.jsxs)("div",{className:"footer__nav",children:[Object(r.jsx)("p",{className:"footer_title",children:"Links"}),Object(r.jsx)(O,{extended:!0})]}),Object(r.jsxs)("div",{className:"footer__social",children:[Object(r.jsx)("p",{className:"footer_title",children:"Follow Us"}),Object(r.jsx)(z,{})]})]})})},D=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(p,{}),Object(r.jsx)(v,{}),Object(r.jsx)(C,{}),Object(r.jsx)(X,{}),Object(r.jsx)(T,{}),Object(r.jsx)(J,{})]})};c.a.render(Object(r.jsx)(D,{}),document.getElementById("root"))},9:function(e,t,i){}},[[13,1,2]]]);
//# sourceMappingURL=main.9e465142.chunk.js.map