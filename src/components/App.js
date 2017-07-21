import React from "react";
import Navigation from "./Navigation";
import ContactForm from "./ContactForm";
import ContactBook from "./ContactBook";
import Sidebar from "./Sidebar";
import Actions from "../actions/Actions";
import Store from "../store/Store";
import * as Api from "../apis/Api";

// console.log(Api)
class App extends React.Component {

  constructor(){
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.state = { 
      contacts: [],
      contactToEdit: "",
      news: []
    };
  }

  componentDidMount(){
    Api.fetchNews()
    Api.readApi();
    Api.fetchWeather("seattle")
    // everytime the page re-renders, the api will fetch the updated database, update the store state, and update the component state 
    Store.addEventListener(() =>{
      this.setState({
        contacts: Store.getContacts(),
        contactToEdit: Store.getContactToEdit(),
        news: Store.getNews(),
        currentWeather: Store.getCurrentWeather(),
        forecastWeather: Store.getForecastWeather()
      });
    });
  }

  handleDelete(id, event){
    // console.log(id, event);
    Actions.deleteContact(id);
  }

  handleEdit(contact){
    // this.setState({contactToEdit: 1})
    // console.log(this.state);
    Actions.setContactToEdit(contact);
  }

  handleSubmit(e){
    e.preventDefault();
    // console.log(e.target.name.value, e.target.phone.value, e.target.email.value);
    var contact = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };
    Actions.addContact(contact);
    e.target.reset()
    document.querySelector("#alert1").classList.add("appear")
    setTimeout(() => {
      document.querySelector("#alert1").classList.remove("appear")
    },2000)
  }

  handleUpdate(e){
    e.preventDefault();
    var contact = {
      id: e.target.id.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    }
    Actions.updateContact(contact);
    this.setState({contactToEdit: ""})
  }

  handleEditChange(inputName,event){
    let selected = this.state.contactToEdit;
    selected[inputName] = event.target.value
    // console.log(selected)
    // debugger
    this.setState({
      contactToEdit: selected 
    })
  }

  render(){
    // console.log(this.state)
    return(
      <div>
        <Navigation/>
        <div className="wrapper" style={{width: "80%", margin: "2em auto"}}>
          <div className="row">
            <ContactBook {...this.state} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>
            <Sidebar {...this.state} handleSubmit={this.handleSubmit}/> 
          </div>
        </div>
      </div>
    )
  }
}

export default App;