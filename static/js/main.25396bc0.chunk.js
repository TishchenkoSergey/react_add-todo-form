(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{11:function(e,t,a){e.exports=a(23)},16:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),s=a.n(i),o=a(10),c=a(3),l=a(4),u=a(6),m=a(5),d=a(7),h=(a(16),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),p=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=a(2),g=a(1),y=a.n(g),f={name:y.a.string.isRequired},E=(a(19),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={title:"",userName:"",titleError:!1,userNameError:!1},e.handleChange=function(t){var a,n=t.target,r=n.name,i=n.value,s=n.type;e.setState((a={},Object(b.a)(a,r,"text"===s?i.replace(/[^\w ]+/,""):i),Object(b.a)(a,"".concat(r,"Error"),!1),a))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,r=a.userName,i=e.props,s=i.addToDo,o=i.users,c=!n.trim(),l=!r;l||c?e.setState({titleError:c,userNameError:l}):(s(n,o.find((function(e){return e.name===r}))),e.setState({title:"",userName:"",titleError:!1,userNameError:!1}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.users,t=this.state,a=t.title,n=t.userName,i=t.titleError,s=t.userNameError;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:"ui form inverted green segment"},r.a.createElement("p",{className:"title"},"Enter title:"),r.a.createElement("label",{className:"form__input"},r.a.createElement("input",{type:"text",placeholder:"Only letters, number and spaces",className:"ui input",name:"title",value:a,onChange:this.handleChange}),i&&r.a.createElement("p",{className:"ui red pointing basic label"},"Enter the title")),r.a.createElement("label",{className:"form__input"},r.a.createElement("select",{name:"userName",value:n,onChange:this.handleChange},r.a.createElement("option",{value:""},"Choose name"),e.map((function(e){return r.a.createElement("option",{value:e.name,key:e.id},e.name)}))),s&&r.a.createElement("p",{className:"ui red pointing basic label"},"Please choose a user")),r.a.createElement("button",{type:"submit",className:"ui button blue"},"Add todo!"))}}]),a}(r.a.PureComponent)),v=(y.a.number.isRequired,y.a.number.isRequired,y.a.string.isRequired,y.a.bool.isRequired,y.a.shape(f).isRequired,function(e){var t=e.name;return r.a.createElement("div",null,t)}),k=(a(20),function(e){var t=e.title,a=e.completed,n=e.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"todo__user"},r.a.createElement("input",{type:"checkbox",checked:a,className:"ui checkbox"}),r.a.createElement(v,n)),r.a.createElement("p",{className:"todo__task"},t))}),w=(a(21),function(e){var t=e.todos;return r.a.createElement("ul",{className:"ui container"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"todo"},r.a.createElement(k,e))})))}),S=(a(22),p.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{user:h.find((function(t){return t.id===e.userId}))})}))),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={todos:S},e.addToDo=function(t,a){e.setState((function(e){var n={title:t,user:a,userId:a.id,id:e.todos.length+1,completed:!1};return{todos:[].concat(Object(o.a)(e.todos),[n])}}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("main",{className:"app"},r.a.createElement(E,{users:h,addToDo:this.addToDo}),r.a.createElement(w,{todos:this.state.todos}))}}]),a}(r.a.PureComponent);s.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.25396bc0.chunk.js.map