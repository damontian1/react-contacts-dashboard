import React from "react";
import Navigation from "./Navigation";
import ContactForm from "./ContactForm";
import ContactBook from "./ContactBook";
import Sidebar from "./Sidebar";
import Actions from "../actions/Actions";
import Store from "../store/Store";
import * as Api from "../apis/Api";

class App extends React.Component {

  constructor(){
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleQueryClick = this.handleQueryClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = { 
      contacts: [],
      contactToEdit: "",
      news: [],
      query: ""
    };
  }

  componentDidMount(){
    Api.fetchNews()
    Api.readApi();
    Api.fetchWeather("New York")
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
    // window.scrollTo(0,0)
    // console.log(contact)
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

  handleKeyDown(e){
    if(e.keyCode === 27){
      document.querySelector("#navigation ul").style.visibility = "hidden";
    }
  }

  handleSearchQuery(e){
    document.querySelector("#navigation ul").style.visibility = "visible";
    this.setState({query: e.target.value.toLowerCase()});
  }

  handleQueryClick(e){
    document.querySelector("#navigation ul").style.visibility = "hidden";
  }

  render(){
    // console.log(this.state.contacts)
    return(
      <div>
        <Navigation contacts={this.state.contacts} handleSearchQuery={this.handleSearchQuery} query={this.state.query} handleQueryClick={this.handleQueryClick} handleKeyDown={this.handleKeyDown} />
        <div className="wrapper" style={{width: "85%", margin: "2em auto"}}>
          <div className="row">
            <ContactBook {...this.state} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
            <Sidebar {...this.state} handleUpdate={this.handleUpdate} handleEditChange={this.handleEditChange} handleSubmit={this.handleSubmit} /> 
          </div>
        </div>
      </div>
    )
  }
}

export default App;