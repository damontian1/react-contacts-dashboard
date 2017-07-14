import Actions from "../actions/Actions";
import * as firebase from "firebase";

const app = firebase.initializeApp({
  databaseURL: "https://react-address-book-test.firebaseio.com/"
});
const firebaseApi = app.database()

export const readApi = function(){
 return firebaseApi.ref("contacts/").once("value", function(snapshot){
    let contacts = [];
    snapshot.forEach((item)=>{
      // console.log()
      var contact = {
        id: item.key,
        name: item.val().contact.name,
        phone: item.val().contact.phone,
        email: item.val().contact.email
      }
      contacts.push(contact)
    })
    // console.log(contacts)
    Actions.readContacts(contacts)
  })
}

export const writeApi = function(contact){
  // console.log(contact)
  return firebaseApi.ref("contacts/").push({contact})
}

export const updateApi = function(contact){
  // console.log(contact.id)
  return firebaseApi.ref("contacts/" + contact.id).update({contact:contact})
}

export const deleteApi = function(id){
  console.log(id)
  return firebaseApi.ref("contacts/" + id).remove()
}