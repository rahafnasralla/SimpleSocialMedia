import './App.css';
import "bootstrap";
import "bootstrap/scss/bootstrap.scss"
import React from 'react'
import AddPost from './Components/AddPost';
import Post from './Components/Post';
class App extends React.Component {
   

  render() {
  return (
    <div>
    <AddPost/>
    <Post display='good morning'/>
    </div>
  )
  }
}

export default App;
