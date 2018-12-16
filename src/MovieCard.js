import React, {Component} from 'react';
import UserList from './UserList.js';

class MovieCard extends Component{
  	render(){
    	const {movie, userList} = this.props;
      	const text = (userList.length == 0 ? 
        	<p>None of the current users liked this movie </p> :
          	<p>Liked By:</p>
        )
      	return (
        	<div>
          		<h2>{movie.name}</h2>
          		<p>{text}</p>
          		<ul>		
          			<UserList userList={userList}/>
				</ul>
          	</div>
        )
    };
}

export default MovieCard;