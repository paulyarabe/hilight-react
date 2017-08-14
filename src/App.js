import React, { Component } from 'react';
import './App.css';
import ReactRevealText from 'react-reveal-text'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hilight: [],
      display: '',
      show: false
     }
  }

  onMouseEnter = () => {
    fetch(`http://192.168.0.12:3000/hilight`)
    .then(resp => resp.json())
    .then(hilight_data => this.setState({
      hilight: hilight_data,
      display: 'HiLight / No. ',
      show: true
     }))
  }

  onMouseLeave = () => {
    this.setState({ show: false });
  }

  render() {
    let highlight_div = null;
    this.state.display !== '' ? highlight_div =
      <div>
      <h2><span>{this.state.display + this.state.hilight.id}</span></h2>
      <p>{this.state.hilight.highlighted_text}</p>
      <h6>- <u><a id="booklink" href={this.state.hilight.url} target="_blank">{this.state.hilight.book_title}</a></u></h6></div> : null

    return (
      <div className="App">
        <header className="row">
          <div className="col-xs-5 slogan">HiLights</div>
          <div className="col-xs-7 links">
            <a href="https://paulyarabe.com" target="_blank">Learn More</a>&nbsp;&nbsp;&nbsp;
            <a href="javascript:void(0)" target="_blank">Topic Modeling</a>
            <clear></clear>
          </div>
        </header>
        <div id="hilight" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
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
