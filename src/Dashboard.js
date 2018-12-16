import React, { Component } from 'react';
import MovieCard from './MovieCard.js';

class Dashboard extends Component {		
  render(){
    const {users, movies, profiles} = this.props;
    const movieCard =
    	Object.values(movies).map((movie) =>{
          const userList = profiles.filter((profile) =>{
          	return profile.favoriteMovieID == movie.id 
          }).map((filteredProfile) => users[filteredProfile.userID]);
          return (
            <MovieCard movie={movie} userList={userList}/>
		  )
        });
    return movieCard
  }
}
export default Dashboard;