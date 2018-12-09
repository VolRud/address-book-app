(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,a){t.exports={contactsWrap:"ContactsList_contactsWrap__3LmPC",contactsBlock:"ContactsList_contactsBlock__1LqbO",contact:"ContactsList_contact__3OP9D",addNew:"ContactsList_addNew__29pxf"}},17:function(t,e,a){t.exports={oneContact:"Contact_oneContact__3oLre",name:"Contact_name__1VE6U",email:"Contact_email__1uT3C",close:"Contact_close__3wTBB"}},30:function(t,e,a){t.exports=a(55)},55:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(24),r=a.n(o),i=a(10),s=a(11),l=a(14),u=a(12),d=a(15),m=a(4),C=a(13),p=function(t){return{type:"CHANGE_CONTACT_FORM_STATE",payload:t}},f=a(16),h=a.n(f),_=a(17),E=a.n(_),b=function(t){var e=t.contactData,a=e.name,n=e.email,o=null;return-1!==n.search("gmail")&&(o="(gmail account)"),c.a.createElement("div",{className:E.a.oneContact,onClick:function(){!function(t){var e=t.contactData,a=e.name,n=e.email,c=e.id;t.changeContactFormState({type:"edit",name:a,email:n,id:c}),t.history.push("/edit-contact")}(t)}},c.a.createElement("span",{className:E.a.name},a," ",o),c.a.createElement("span",{className:E.a.email},n),c.a.createElement("div",{className:E.a.close}))},y=a(56),O=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).showContacts=function(){var t=a.props.filteredContacts;if(t)return 0===t.length?c.a.createElement("p",null," No contacts ..."):t.map(function(t){return c.a.createElement("div",{key:t.id,className:h.a.contact},c.a.createElement(b,Object.assign({contactData:t},a.props)))})},a.addNewContact=function(){a.props.changeContactFormState({type:"addNew",name:"",email:""})},a.state={},a.handleFind=a.handleFind.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.getContacts;t.contactsLoaded||e()}},{key:"handleFind",value:function(t){this.props.findContact(t.target.value)}},{key:"render",value:function(){return c.a.createElement("div",{className:h.a.contactsWrap},c.a.createElement("h1",null,"My address Book"),c.a.createElement("input",{type:"text",onChange:this.handleFind,placeholder:"Search..."}),c.a.createElement("div",{className:h.a.contactsBlock},this.showContacts()),c.a.createElement(y.a,{to:"/create-contact"},c.a.createElement("div",{className:h.a.addNew,onClick:this.addNewContact},"+")))}}]),e}(n.Component),T=Object(C.b)(function(t){var e=t.contactsList,a=e.contacts,n=e.contactsLoaded,c=e.findContact;return{filteredContacts:""===c?a:a.filter(function(t){var e=c,a=t.name,n=t.email;return-1!==a.toLowerCase().search(e)||-1!==n.toLowerCase().search(e)}),contactsLoaded:n,findContact:c}},function(t){return{getContacts:function(){return t({type:"GET_CONTACTS"})},changeContactFormState:function(e){return t(p(e))},findContact:function(e){return t(function(t){return{type:"FIND_CONTACT",payload:t}}(e))}}})(O),N=a(8),v=a.n(N),A=function(t){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(t)},S=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).delete=function(){var t=a.props;(0,t.deleteContact)(t.formData.id)},a.confirm=function(){var t=a.props,e=t.formData,n=e.type,c=e.id,o=t.createNewContact,r=t.updateContact,i=t.history,s=a.state,l=s.name,u=s.email;A(u)?("addNew"===n&&o({name:l,email:u}),"edit"===n&&r({id:c,name:l,email:u}),i.push("/")):alert("Wrong Email!")},a.state={name:"",email:""},a.handleChangeName=a.handleChangeName.bind(Object(m.a)(Object(m.a)(a))),a.handleChangeEmail=a.handleChangeEmail.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"handleChangeName",value:function(t){this.setState({name:t.target.value})}},{key:"handleChangeEmail",value:function(t){this.setState({email:t.target.value})}},{key:"componentDidMount",value:function(){var t=this.props,e=t.formData,a=t.history;e&&null===e.type?a.push("/"):this.setState({name:e.name,email:e.email})}},{key:"render",value:function(){var t=this.props,e=t.formData,a=t.history;if(e&&null===e.type)return null;var n=e.type;return c.a.createElement("div",{className:v.a.contactFormWrapper},c.a.createElement("h1",null,"My Address Book / ","addNew"===n?"New contact":"Edit contact"),c.a.createElement("input",{type:"text",defaultValue:this.state.name,onChange:this.handleChangeName,placeholder:"Name"}),c.a.createElement("input",{type:"text",defaultValue:this.state.email,onChange:this.handleChangeEmail,placeholder:"Email"}),c.a.createElement("div",{className:v.a.buttons},"edit"===n?c.a.createElement("div",{className:v.a.delete,onClick:this.delete},"Delete"):null,c.a.createElement("div",{className:v.a.buttonsCreateUser},c.a.createElement("div",{className:v.a.cancel,onClick:function(){a.push("/")}},"Cancel"),c.a.createElement("div",{className:v.a.confirm,onClick:this.confirm},"Ok"))))}}]),e}(n.Component),g=Object(C.b)(function(t){return{formData:t.contactsList.formData}},function(t){return{createNewContact:function(e){return t(function(t){return{type:"CREATE_NEW_CONTACT",payload:t}}(e))},deleteContact:function(e){return t(function(t){return{type:"DELETE_CONTACT",payload:t}}(e))},changeContactFormState:function(e){return t(p(e))},updateContact:function(e){return t(function(t){return{type:"UPDATE_CONTACT",payload:t}}(e))}}})(S),j=a(57),k=a(58),L=a(7),w=a(28),F=a(6),D={contacts:[],contactsLoaded:!1,findContact:"",formData:{type:null,id:"",name:"",email:""}},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0,a=e.payload;switch(e.type){case"GET_CONTACTS_SUCCESS":return Object(F.a)({},t,{contacts:a,contactsLoaded:!0});case"CREATE_NEW_CONTACT_SUCCESS":return Object(F.a)({},t,{contacts:Object(w.a)(t.contacts).concat([a])});case"DELETE_CONTACT_SUCCESS":var n=t.contacts.filter(function(t){return t.id!==a});return Object(F.a)({},t,{contacts:n});case"UPDATE_CONTACT_SUCCESS":var c=t.contacts.map(function(t){return t.id!==a.id?t:a});return Object(F.a)({},t,{contacts:c});case"FIND_CONTACT":return Object(F.a)({},t,{findContact:a.toLowerCase()});case"CHANGE_CONTACT_FORM_STATE":return Object(F.a)({},t,{formData:a});case"DELETE_CONTACT_FAIL":case"GET_CONTACTS_FAIL":case"CREATE_NEW_CONTACT_FAIL":case"UPDATE_CONTACT_FAIL":console.log("ERROR",a);break;default:return Object(F.a)({},t)}return t},I=Object(L.c)({contactsList:U}),R=a(19),W=a.n(R);a(49);W.a.initializeApp({apiKey:"AIzaSyBLORoh4FkiuolrscEBbPN1y2dxfAG5pbk",authDomain:"address-book-b79c8.firebaseapp.com",databaseURL:"https://address-book-b79c8.firebaseio.com",projectId:"address-book-b79c8",storageBucket:"address-book-b79c8.appspot.com",messagingSenderId:"958910145696"}),W.a.firestore().settings({timestampsInSnapshots:!0});var B=W.a,x=Object(L.a)(function(t){return function(t){return function(e){var a=B.firestore().collection("contacts"),n=e.type,c=e.payload;if("GET_CONTACTS"===n)a.get().then(function(e){var a=[];return e.forEach(function(t){a.push(Object.assign({id:t.id},t.data()))}),t({type:n+"_SUCCESS",payload:a})}).catch(function(e){return t({type:n+"_FAIL",payload:e})});else if("CREATE_NEW_CONTACT"===e.type)a.add({name:c.name,email:c.email}).then(function(e){return t({type:n+"_SUCCESS",payload:Object.assign({},c,{id:e.id})})}).catch(function(e){return t({type:n+"_FAIL",payload:e})});else if("DELETE_CONTACT"===e.type)(o=a.doc(e.payload)).delete().then(function(){return console.log("docRef",o),t({type:n+"_SUCCESS",payload:c})}).catch(function(e){return t({type:n+"_FAIL",payload:e})});else if("UPDATE_CONTACT"===e.type){var o,r=e.payload,i=r.name,s=r.id,l=r.email;(o=a.doc(s)).update({name:i,email:l}).then(function(){return t({type:n+"_SUCCESS",payload:c})}).catch(function(){return t({type:n+"_FAIL",payload:c})})}else t(e)}}}),G=Object(L.d)(I,{},x),P=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement(C.a,{store:G},c.a.createElement(j.a,{basename:"/address-book-app"},c.a.createElement("div",null,c.a.createElement(k.a,{exact:!0,path:"/",component:T}),c.a.createElement(k.a,{path:"/create-contact",component:g}),c.a.createElement(k.a,{path:"/edit-contact",component:g}))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,a){t.exports={contactFormWrapper:"ContactForm_contactFormWrapper__30buL",buttons:"ContactForm_buttons__1ZR0V",delete:"ContactForm_delete__3-miT",cancel:"ContactForm_cancel__2nsYI",confirm:"ContactForm_confirm__3GPZ7",buttonsCreateUser:"ContactForm_buttonsCreateUser__dYhXm"}}},[[30,2,1]]]);
//# sourceMappingURL=main.c446e939.chunk.js.map