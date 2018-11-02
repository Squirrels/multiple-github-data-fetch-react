import React, { Component } from 'react';
import UserForm from './components/UserForm'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
      super(props);    
      this.useFetch = this.useFetch.bind(this);
      this.useAxios = this.useAxios.bind(this);
      this.useXMLHTTP = this.useXMLHTTP.bind(this);
  }

  useFetch(username){
    const apiUrl = process.env.REACT_APP_GITHUB_API_USER_URL + "/" + username + "?client_id=" + process.env.REACT_APP_GITHUB_API_CLIENT_ID + "&client_secret=" + process.env.REACT_APP_GITHUB_API_CLIENT_SECRET;
    return fetch(apiUrl)
        .then(response => response.json());

  }

  useAxios(username){
    const apiUrl = process.env.REACT_APP_GITHUB_API_USER_URL + "/" + username + "?client_id=" + process.env.REACT_APP_GITHUB_API_CLIENT_ID + "&client_secret=" + process.env.REACT_APP_GITHUB_API_CLIENT_SECRET;
    return axios.get(apiUrl)
      .then(response => response.data)
  }

  useXMLHTTP(username){
    var xmlhttp = new XMLHttpRequest();
    const apiUrl = process.env.REACT_APP_GITHUB_API_USER_URL + "/" + username + "?client_id=" + process.env.REACT_APP_GITHUB_API_CLIENT_ID + "&client_secret=" + process.env.REACT_APP_GITHUB_API_CLIENT_SECRET;
    xmlhttp.open('GET', apiUrl, false);
    xmlhttp.send();
    return JSON.parse(xmlhttp.response);
  }

  render() {
    return (
      <div className="App">
        <UserForm requestType="Fetch" requestMethod={this.useFetch}/>
        <UserForm requestType="Axios" requestMethod={this.useAxios}/>
        <UserForm requestType="Synchronous XMLHttpRequest" requestMethod={this.useXMLHTTP} disablePromises="true"/>
      </div>
    );
  }
}

export default App;
