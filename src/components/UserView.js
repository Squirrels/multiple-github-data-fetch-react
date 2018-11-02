import React from 'react';

function UserView(props){
    // Get data
    var userData = {id: "", name: ""};
    if(props !== null && props.data !== null && props !== undefined && props.data !== undefined){
      userData.id = props.data.id;
      userData.login = props.data.login;
      userData.name = props.data.name;
      userData.location = props.data.location;
    }
    return(
        <table key={userData.id} className="UserView">
          <thead>
            <tr>
              <th>ID</th>
              <th>Login</th>
              <th>Name</th> 
              <th>Location</th> 
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userData.id}</td>
              <td>{ userData.login }</td>
              <td>{ userData.name }</td>
              <td>{ userData.location }</td>
            </tr>
          </tbody>
        </table>
    );
}

export default UserView;