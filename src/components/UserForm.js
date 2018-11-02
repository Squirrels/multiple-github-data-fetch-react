import React, { Component } from 'react';
import UserView from "./UserView";

class UserForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        value: '',
        oauth_token: '',
        user_data: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = this.state.value;
    if(this.props.disablePromises === "true"){
      this.setState({user_data: this.props.requestMethod(username)});
    }
    else{
      this.props.requestMethod(username).then(result => this.setState({user_data: result}));
    } 
  }

  render() {
    var userView;
    const userData = this.state.user_data;
    if(userData !== null){
        userView = <UserView 
            data={userData}
        />
    }
    
    return (
      <div className="UserForm">
        <p>Using {this.props.requestType}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {userView}
      </div>
    );
  }
}

export default UserForm;
