import React from 'react';
import axios from 'axios';

import firebase from "firebase/app";
import 'firebase/firestore';
const Context = React.createContext();

firebase.initializeApp({
  apiKey: "AIzaSyCkd30hCcOea1gThqWVfTmtukjI1asTh44",
  authDomain: "react-contacts-dashboard.firebaseapp.com",
  databaseURL: "https://react-contacts-dashboard.firebaseio.com",
  projectId: "react-contacts-dashboard",
  storageBucket: "react-contacts-dashboard.appspot.com",
  messagingSenderId: "368165191906",
  appId: "1:368165191906:web:5275eafa44808d8b07debb"
})

export const db = firebase.firestore();

export class Provider extends React.Component {
  state = {
    contacts: [],
    contactsQuery: [],
    news: [],
    contactToEdit: [],
    query: "",
    handleDelete: this.handleDelete.bind(this),
    handleSearchQuery: this.handleSearchQuery.bind(this),
    handleQueryClick: this.handleQueryClick.bind(this),
    handleEdit: this.handleEdit.bind(this),
    handleEditChange: this.handleEditChange.bind(this),
    handleUpdate: this.handleUpdate.bind(this),
    handleSubmit: this.handleSubmit.bind(this),
    handleDelete: this.handleDelete.bind(this),
  }

  handleEditChange(inputName, e) {
    let selected = this.state.contactToEdit;
    selected[inputName] = event.target.value
    this.setState({
      contactToEdit: selected
    })
  }

  fetchNews() {
    axios
      .get(`https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=7a0c9e4adf4e438e80c8c331e6e1c657`)
      .then(res => {
        const data = res.data.articles;
        this.setState({ news: data });
      })
  }

  filterContacts(query, id = false) {
    var regex = new RegExp(query, "gi");
    return this.state.contacts.filter(item => {
      if (id) {
        return !item.id.match(regex);
      }
      return item.email.match(regex) || item.phone.match(regex) || item.name.match(regex);
    })
  }

  handleSearchQuery(e) {
    document.querySelector("#navigation ul").style.visibility = "visible";
    let query = e.target.value.toLowerCase();
    let updatedContacts = this.filterContacts(query);
    updatedContacts = query != "" ? updatedContacts : this.state.contactsQuery;
    this.setState({ query, contacts: updatedContacts });
  }

  handleEdit(contact) {
    this.setState({ contactToEdit: contact })
  }


  handleDelete(id) {
    db.collection('users').doc(id).delete();
    let updatedContacts = this.filterContacts(id, true);
    this.setState({ contacts: updatedContacts });
  }

  handleQueryClick(e) {
    document.querySelector("#navigation ul").style.visibility = "hidden";
  }

  handleSubmit(e) {
    e.preventDefault();
    var contact = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };
    if (contact.name && contact.phone && contact.email) {
      this.setState({ contacts: [...this.state.contacts, contact], contactsQuery: [...this.state.contacts, contact] });
      e.target.reset()
      document.querySelector("#alert1").classList.add("appear")
      setTimeout(() => {
        document.querySelector("#alert1").classList.remove("appear")
      }, 2000)
      db.collection("users").add(contact);
    }
  }

  handleUpdate(e) {
    e.preventDefault();
    var contact = {
      id: e.target.id.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };
    let contacts = this.state.contacts.filter(item => item.id != contact.id);
    this.setState({ contacts: [...contacts, contact], contactsQuery: [...contacts, contact] });
    e.target.reset()
    document.querySelector("#alert1").classList.add("appear")
    setTimeout(() => {
      document.querySelector("#alert1").classList.remove("appear")
    }, 2000)
    db.collection('users').doc(contact.id).update(contact);
  }

  componentDidMount() {
    this.fetchNews();
    db.collection('users').get().then(res => {
      let contacts = [];
      res.forEach(doc => {
        contacts = contacts.concat({ ...doc.data(), id: doc.id })
      })
      this.setState({ contacts: contacts, contactsQuery: contacts });
    })
  }

  render() {
    return (
      <Context.Provider value={this.state} >
        {this.props.children}
      </Context.Provider >
    )
  }
}
export const Consumer = Context.Consumer;