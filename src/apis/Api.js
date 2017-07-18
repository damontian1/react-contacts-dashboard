import Actions from "../actions/Actions";
import * as firebase from "firebase";
import axios from "axios";

const app = firebase.initializeApp({
  databaseURL: "https://react-address-book-test.firebaseio.com/"
});
const firebaseApi = app.database();


// FIREBASE.COM APIs
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
      };
      contacts.push(contact);
    });
    // console.log(contacts)
    Actions.readContacts(contacts);
  });
};

export const writeApi = function(contact){
  // console.log(contact)
  return firebaseApi.ref("contacts/").push({contact});
};

export const updateApi = function(contact){
  // console.log(contact.id)
  return firebaseApi.ref("contacts/" + contact.id).update({contact: contact});
};

export const deleteApi = function(id){
  // console.log(id);
  return firebaseApi.ref("contacts/" + id).remove();
};


// OPENWEATHERMAP.ORG APIs
export const fetchWeatherForecast = function(city){
  return axios
    .get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&units=imperial&cnt=3&appid=898102236102b5d3edaa9d75b71f44b5`)
}
export const fetchWeatherCurrent = function(city){
  return axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=898102236102b5d3edaa9d75b71f44b5`)
}
export const fetchWeather = function(){
  // return axios
  //   .all([fetchWeatherCurrent(), fetchWeatherForecast()])
  //   .then(axios.spread((current, forecast) =>
  //     console.log(current, forecast)
  //   ))  
}


// NEWSAPI.ORG APIs
export const fetchNews = function(){
  return axios
    // .get(`https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=7a0c9e4adf4e438e80c8c331e6e1c657`).then(response => console.log(response))
}

