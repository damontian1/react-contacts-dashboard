import Dispatcher from "../dispatcher/Dispatcher";
import { EventEmitter } from "events";
import * as Api from "../apis/Api";

let _contacts = [];
let _contactToEdit = "";
let _news = [];
let _currentWeather = "";
let _forecastWeather = [];

const Store = Object.assign(EventEmitter.prototype, {
  getContactToEdit: function(){
    return _contactToEdit;
  },
  getContacts: function(){
    return _contacts;
  },
  getNews: function(){
    return _news;
  },
  getCurrentWeather: function(){
    return _currentWeather;
  },
  getForecastWeather: function(){
    return _forecastWeather;
  },
  setContacts: function(data){
    // console.log(data)
    _contacts = data
  },
  setNews: function(data){
    // console.log(data)
    _news = data
  },
  setWeather: function(payload1, payload2){
    // console.log(payload2.data)
    _currentWeather = payload1.data;
    _forecastWeather = payload2.data.list;
  },
  addContact: function(data){
    _contacts.push(data)
  },
  setContactToEdit: function(data){
    // console.log(data)
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
  const { payload } = actions.data
  const { actionType } = actions.data
  // console.log(actions.data.actionType)
  switch(actionType){
    case "READ_CONTACTS":
      Store.setContacts(payload);
      Store.emitChange();
      break;
    case "ADD_CONTACT":
    // console.log(payload.data)
      Store.addContact(payload);
      Api.writeApi(payload) 
      Store.emitChange();
      break;
    case "SET_CONTACT_TO_EDIT":
    // console.log(payload)
      Store.setContactToEdit(payload);
      // Api.deleteApi(payload.data) 
      Store.emitChange();
      break;
    case "DELETE_CONTACT":
    // console.log(payload.data)
      Store.deleteContact(payload);
      Api.deleteApi(payload) 
      Store.emitChange();
      break;
    case "UPDATE_CONTACT":
    // console.log(payload.data)
      Store.updateContact(payload);
      Api.updateApi(payload) 
      Store.emitChange();
      break;
    case "FETCH_WEATHER":
    // console.log(actions.data.payload1)
      Store.setWeather(actions.data.payload1, actions.data.payload2)
      Store.emitChange();
      break;
    case "FETCH_NEWS":
    // console.log("hey")
      // console.log(payload)
      Store.setNews(payload);
      Store.emitChange();
      break;
  }
})

export default Store;