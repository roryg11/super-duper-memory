import React, { Component } from 'react';
import './App.css';
import ImageHero from "./components/imageHero";
import posts from "./posts"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: posts
    }; 
  }
  render() {
    const imagePosts = this.state.posts.map((post)=>{
      return <ImageHero key={post.date} backgroundImg={post.backgroundImg} answer={post.answer} date={post.formattedDate} description={post.description}/>;
    });
    return (
      <div>
        {imagePosts}
      </div>
    );
  }
}

export default App;
