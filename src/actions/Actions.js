import Dispatcher from "../dispatcher/Dispatcher";

const Actions = {
  readContacts: function(payload){
    // console.log(data)
    Dispatcher.handleViewAction({
      actionType: "READ_CONTACTS",
      payload
    });
  },
  addContact: function(payload){
    // console.log(data)
    Dispatcher.handleViewAction({
      actionType: "ADD_CONTACT",
      payload
    });
  },
  setContactToEdit: function(payload){
    // console.log(data)
    Dispatcher.handleViewAction({
      actionType: "SET_CONTACT_TO_EDIT",
      payload
    });
  },
  updateContact: function(payload){
    // console.log(data)
    Dispatcher.handleViewAction({
      actionType: "UPDATE_CONTACT",
      payload
    });
  },
  deleteContact: function(payload){
    Dispatcher.handleViewAction({
      actionType: "DELETE_CONTACT",
      payload
    });
  },
  fetchWeather: function(payload1, payload2){
    // console.log(payload1, payload2)
    Dispatcher.handleViewAction({
      actionType: "FETCH_WEATHER",
      payload1,
      payload2
    });
  },
  fetchNews: function(payload){
    // console.log(payload.data.articles)
    Dispatcher.handleViewAction({
      actionType: "FETCH_NEWS",
      payload: payload.data.articles
    });
  }
};

export default Actions;
