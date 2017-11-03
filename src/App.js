import React, { Component } from 'react';
import './App.css';
import Auth from './services/Auth'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hilight: [],
      display: ''
    }
  }

  onMouseEnter = () => {
    fetch(`https://hilight-db.herokuapp.com/hilight`)
    .then(resp => resp.json())
    .then(hilight_data => this.setState({
      hilight: hilight_data,
      display: 'HiLight / No. '
     }))
  }


  render() {
    // this.login({username: "paulyarabe", password: "coco"})
    // this.currentUser()
    let highlight_div = null;
    this.state.display !== '' ? highlight_div =
      <div>
      <h2><span>{this.state.display + this.state.hilight.id}</span></h2>
      <p>{this.state.hilight.highlighted_text}</p>
      <h6>- <u><a id="booklink" href={this.state.hilight.url} target="_blank">{this.state.hilight.book_title}</a></u></h6></div> : null

    return (
      <div className="App">
        <header className="row">
          <div className="col-xs-5 slogan">HiLights (say Hi through a highlight)</div>
          <div className="col-xs-7 links">
            <a href="https://paulyarabe.com" target="_blank">Blog</a>&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/awaisathar/lda.js" target="_blank">Topic Modeling</a>
            <clear></clear>
          </div>
        </header>
        <div id="instructions">
          <h4>Hover cursor into and out of the box to display some of my more than 2000 highlights from my past 3 years of casual reading</h4>
        </div>
        <div id="hilight" onMouseEnter={this.onMouseEnter} >
          {highlight_div}
        </div>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 footer-blurb">
                  By <a href="https://github.com/paulyarabe" target="_blank" rel="noopener noreferrer">Paul Yarabe</a>, All Rights Reserved.<br />
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
