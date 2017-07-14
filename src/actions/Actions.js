import Dispatcher from "../dispatcher/Dispatcher";

const Actions = {
  readContacts: function(data){
    // console.log(data)
    Dispatcher.handleViewAction({
      actionType: "READ_CONTACTS",
      data
    })
  },
  addContact: function(data){
    // console.log(data)
    Dispatcher.handleViewAction({
      actionType: "ADD_CONTACT",
      data
    })
  },
  setContactToEdit: function(data){
    // console.log(data)
    Dispatcher.handleViewAction({
      actionType: "SET_CONTACT_TO_EDIT",
      data
    })
  },
  updateContact: function(data){
    // console.log(data)
    Dispatcher.handleViewAction({
      actionType: "UPDATE_CONTACT",
      data
    })
  },
  deleteContact: function(data){
    // console.log(data)
    Dispatcher.handleViewAction({
      actionType: "DELETE_CONTACT",
      data
    })
  }
}

export default Actions;