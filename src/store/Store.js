import Dispatcher from "../dispatcher/Dispatcher";
import { EventEmitter } from "events";
import * as Api from "../apis/Api";

let _contacts = [];
let _contactToEdit = "";

const Store = Object.assign(EventEmitter.prototype, {
  getContactToEdit: function(){
    return _contactToEdit;
  },
  getContacts: function(){
    return _contacts;
  },
  setContacts: function(data){
    _contacts = data
  },
  addContact: function(data){
    _contacts.push(data)
  },
  setContactToEdit: function(data){
    _contactToEdit = data
    // console.log(_contactToEdit)
  },
  updateContact: function(data){
    let elementId = _contacts.findIndex((item)=>{
        return item.id == data.id
      })
    _contacts[elementId] = data
    // _contactToEdit = data
    // console.log(_contacts)
  },
  deleteContact: function(data){
    let newContacts = _contacts.filter((item) => {
      return item.id !== data
    })
    _contacts = newContacts;
  },
  addEventListener: function(callback){
    this.on("change", callback)
  },
  emitChange(){
    this.emit("change")
  }
})

Dispatcher.register(function(actions){
  const payload = actions.data
  // console.log(payload)
  switch(payload.actionType){
    case "READ_CONTACTS":
      Store.setContacts(payload.data);
      Store.emitChange();
      break;
    case "ADD_CONTACT":
    // console.log(payload.data)
      Store.addContact(payload.data);
      Api.writeApi(payload.data) 
      Store.emitChange();
      break;
    case "SET_CONTACT_TO_EDIT":
    // console.log(payload.data)
      Store.setContactToEdit(payload.data);
      // Api.deleteApi(payload.data) 
      Store.emitChange();
      break;
    case "DELETE_CONTACT":
    // console.log(payload.data)
      Store.deleteContact(payload.data);
      Api.deleteApi(payload.data) 
      Store.emitChange();
      break;
    case "UPDATE_CONTACT":
    // console.log(payload.data)
      Store.updateContact(payload.data);
      Api.updateApi(payload.data) 
      Store.emitChange();
      break;
    case "FETCH_WEATHER":
    console.log(payload.data.data)
      
      break;
  }
})

export default Store;