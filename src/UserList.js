import React, {Component} from 'react';

class UserList extends Component{
	render(){
      const {userList} = this.props;
      
      const users = Object.values(userList).map((user) => 
      	<li>{user.name}</li>
      );
      return users;      
    }
}
export default UserList;