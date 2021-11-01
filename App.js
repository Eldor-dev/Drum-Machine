const pads = [
    {key: "Q",
     keyCode: 81,
     id: 'Heater-1',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
    {key: "W",
     id: 'Heater-2',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
    {key: "E",
     id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
    {key: "A",
     id: 'Heater-4',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
    {key: "S",
     id: 'Clap',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    {key: "D",
     id: 'Open-HH',
     url:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
    {key: "Z",
     id: "Kick-n'-Hat",
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    {key: "X",
     id: 'Kick',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
    {key: "C",
     id: 'Closed-HH',
     url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
  ]




class App extends React.Component {
constructor(props) {
  super(props);
   this.state = {
      pads: pads,
     display: 'Display'
   }
}

handleDisplay = display => {
  this.setState({display});
}

 render() {
  const {pads, display} = this.state;
  return (
    <div 
      id="drum-machine" 
      className="row border border-warning border-3 bg-secondary"
    >
     <div className="col-4 m-5">
        <div id="pads" className='row row-cols-3'>
           {pads.map(pad => 
               <Button 
                 pad={pad} 
                 handleDisplay={this.handleDisplay}
               />)
            }
        </div>            
     </div>
     <div 
       id="display" 
       className="col text-center text-primary fw-bold border border-primary rounded"
     >
       {display}
     </div>
   </div>
  )
}
}


class Button extends React.Component {
constructor(props) {
  super(props);
}

componentDidMount() {
  document.addEventListener("keydown", this.handleKeyPress);
}

componentWillUnmount() {
  document.removeEventListener("keydown", this.handleKeyPress)
}

handleKeyPress = (e) => {
  if (e.keyCode === this.props.pad.key.charCodeAt(0))
    this.handlePlay();
}

handlePlay = () => {
  const audio = document.getElementById(this.props.pad.key);
  audio.currentTime = 0;
  audio.play();
  this.props.handleDisplay(this.props.pad.id)
}

render() {
  const {pad} = this.props; 
  
  return (
    <button 
       key={pad.id}
       onClick={() => this.handlePlay()}
       id={pad.id} 
       className="col drum-pad rounded"
    >
       {pad.key}
       <audio 
          src={pad.url}
          className="clip" 
          id={pad.key}
       />           
    </button>
)
} 

}
ReactDOM.render(<App/>, document.getElementById('root'))

     