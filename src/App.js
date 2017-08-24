import React, { Component } from 'react';
import './App.css';
import Auth from './services/Auth'
import IP from './components/IP'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hilight: [],
      display: '',
      comments: [],
      jwt: '',
      isLoggedIn: false,
      user: {}
    }
  }

  // login(loginParams){
  //   Auth.login(loginParams)
  //   .then((json)=>{
  //     localStorage.setItem('jwt', json.jwt)
  //     this.setState({
  //       jwt: json.jwt,
  //       isLoggedIn: true
  //     })
  //   })
  // }

  // currentUser(){
  //   Auth.currentUser()
  //   .then((user) => {
  //     console.log(user)
  //     this.setState({ user } )
  //   })
  // }
  //
  // //where you do all API calls.
  // componentDidMount(){
  //   this.currentUser()
  // }

  onMouseEnter = () => {
    fetch(`https://hilight-db.herokuapp.com/hilight`)
    .then(resp => resp.json())
    .then(hilight_data => this.setState({
      hilight: hilight_data,
      display: 'HiLight / No. ',
      comments: hilight_data.comments
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

    // let comment = this.state.hilight.comments.map((comment) => <h4>{comment.comment}</h4>)

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
        <div id="instructions">
          <h4>Hover into the box to display one of almost 2100 highlights from my past 3 years of reading</h4>
        </div>
        <div id="hilight" onMouseEnter={this.onMouseEnter} >
          {highlight_div}
        </div>
        <div id="sayHi">
          Say Hi here!
        </div>
        <div>
              {this.state.comments.map((comment, id) => <div className="dialogbox"><div className="body"><span className="tip tip-left"></span><div className="message"><span>{comment.comment}<br /> <span style={{float:'right', marginTop: '-10px'}}>- {comment.commentator}</span></span></div></div></div>)}
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
