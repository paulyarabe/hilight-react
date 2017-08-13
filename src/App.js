import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      hilight: [],
      display: ''
     }
  }

  handleChange = () => {
    fetch(`http://192.168.0.12:3000/hilight`)
    .then(resp => resp.json())
    .then(hilight_data => this.setState({
      hilight: hilight_data,
      display: 'HiLight / No. '
     }))
  }

  render() {

    let hilight_div = null;
    this.state.display !== '' ? hilight_div = <div id="hilight">
      <h2><span>{this.state.display + this.state.hilight.id}</span></h2>
      <p>{this.state.hilight.highlighted_text}</p>
      <h6>- <u><a href={this.state.hilight.url} target="_blank">{this.state.hilight.book_title}</a></u></h6>
      <br className="clear" /><br /><br /><br /><br /><br />
    </div> : null

    return (
      <div className="App">
        <header className="row">
          <div className="col-xs-4 slogan">Say hi through my HiLights</div>
          <div className="col-xs-6 links">
            <a href="https://paulyarabe.com" target="_blank">Learn More</a>&nbsp;&nbsp;&nbsp;
            <a href="javascript:void(0)" target="_blank">Topic Modeling</a>
          </div>
          <div className="col-xs-2" id="buttontop">
            <button onClick={this.handleChange}>New Hilight</button>
          </div>
        </header>

        <div>
          { hilight_div }
        </div>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 footer-blurb">
                  Proudly hacked in NYC by <a href="https://github.com/paulyarabe" target="_blank">me</a><br />
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
