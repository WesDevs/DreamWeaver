import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import DreamForm from './DreamForm';

// Firebase 
const config = {
  apiKey: "AIzaSyAst_SXWOkjojCfwdKyN6C6OvyDig6eH48",
  authDomain: "dream-weaver-f3af7.firebaseapp.com",
  databaseURL: "https://dream-weaver-f3af7.firebaseio.com",
  projectId: "dream-weaver-f3af7",
  storageBucket: "dream-weaver-f3af7.appspot.com",
  messagingSenderId: "279403497493"
};
firebase.initializeApp(config);


class App extends React.Component {
  
  constructor() {

    super();

    this.state = {
      date: '',
      dream: '',
      color: '',
      colorArray:[{}],
      dreamRecords: []
    };

  // The binds for this we need 
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.removeDream = this.removeDream.bind(this);
  this.colorTranslator = this.colorTranslator.bind(this);
  }
  
  componentDidMount() {
    
    const dbRef = firebase.database().ref('Dreams');
    dbRef.on('value', (snapshot) => {
      const dreamData = snapshot.val();
      const dataArray = [];  
      
      for(let objkey in dreamData) {
        dreamData[objkey].key = objkey;
        dataArray.push(dreamData[objkey])
      }

      this.setState({
        dreamRecords: dataArray
      })
    });

    const dbColorRef = firebase.database().ref('colorArray');
    dbColorRef.on('value', (snapshot) => {
      const colorData = snapshot.val();
      const dbColorArray = [];

      for(let colorkey in colorData) {
        dbColorArray.push(colorData[colorkey])
      }

      this.setState({
        colorArray: dbColorArray
      });
    })
  }

  // Need a function that records the input and then stores it into fb
  // It tracks the following properties: 
    // The date submitted
    // the dream written in the input text

  handleSubmit(e) {
    e.preventDefault();

    const dreamRecord = {
        date: this.state.date,
        dream: this.state.dream,
        color: this.state.color,
    }

    const dbRef = firebase.database().ref('Dreams');
    
    if (this.state.dreamRecords.length < 12 ) {
      dbRef.push(dreamRecord);
    }
    
    const scratchpad = this.state.dreamRecords;
    let newColorArray = [];
    scratchpad.map(incomingColor => {
      newColorArray.push(incomingColor.color);
    })

    firebase.database().ref('colorArray').remove();

    const colorTrade = newColorArray.map(gradientColor => {
      // if gradientColor  === 1 then return blue
      if (gradientColor === '0') {
        return 'indigo';
      } else if (gradientColor === '1') {
        return 'purple';
      } else if (gradientColor === '2') {
        return 'navy';
      } else if (gradientColor === '3') {
        return 'forestgreen ';
      } else if (gradientColor === '4') {
        return 'gold';
      } else if (gradientColor === '5') {
        return 'yellow';
      } else if (gradientColor === '6') {
        return 'orange';
      } else if (gradientColor === '7') {
        return 'red';
      } else if (gradientColor === '8') {
        return 'pink';
      } else if (gradientColor === '9') {
        return 'plum';
      } else if (gradientColor === '10') {
        return 'aqua';
      } else if (gradientColor === '11') {
        return 'greenyellow';
      } else {
        return 'white';
      }
    })
    const dbColorRef = firebase.database().ref('colorArray');
    dbColorRef.push(colorTrade);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  removeDream(remove) {
    firebase.database().ref(`Dreams/${remove}`).remove();
   
    const scratchpad = this.state.dreamRecords;
    let newColorArray = [];
    scratchpad.map(incomingColor => {
      newColorArray.push(incomingColor.color);
    })

    firebase.database().ref('colorArray').remove();

    const colorTrade = newColorArray.map(gradientColor => {
      // if gradientColor  === 1 then return blue
      if (gradientColor === '0') {
        return 'indigo';
      } else if (gradientColor === '1') {
        return 'purple';
      } else if (gradientColor === '2') {
        return 'navy';
      } else if (gradientColor === '3') {
        return 'forestgreen ';
      } else if (gradientColor === '4') {
        return 'gold';
      } else if (gradientColor === '5') {
        return 'yellow';
      } else if (gradientColor === '6') {
        return 'orange';
      } else if (gradientColor === '7') {
        return 'red';
      } else if (gradientColor === '8') {
        return 'pink';
      } else if (gradientColor === '9') {
        return 'plum';
      } else if (gradientColor === '10') {
        return 'aqua';
      } else if (gradientColor === '11') {
        return 'greenyellow';
      } else {
        return 'white';
      }
    })
    const dbColorRef = firebase.database().ref('colorArray');
    dbColorRef.push(colorTrade);
  } 

  colorRendering() {
    
    const color = this.state.colorArray;
    color.map(color => {
      color
    })
  
  }

  colorTranslator(color) {
    
    const scratchpad = this.state.dreamRecords;
    let newColorArray = [];
    scratchpad.map(incomingColor => {
      newColorArray.push(incomingColor.color);
    })

    firebase.database().ref('colorArray/').remove();

    const colorTrade = newColorArray.map(gradientColor => {
      // if gradientColor  === 1 then return blue
      if (gradientColor === '0') {
        return 'indigo';
      } else if (gradientColor === '1') {
        return 'purple';
      } else if (gradientColor === '2') {
        return 'navy';
      } else if (gradientColor === '3') {
        return 'forestgreen ';
      } else if (gradientColor === '4') {
        return 'gold';
      } else if (gradientColor === '5') {
        return 'yellow';
      } else if (gradientColor === '6') {
        return 'orange';
      } else if (gradientColor === '7') {
        return 'red';
      } else if (gradientColor === '8') {
        return 'pink';
      } else if (gradientColor === '9') {
        return 'plum';
      } else if (gradientColor === '10') {
        return 'aqua';
      } else if (gradientColor === '11') {
        return 'greenyellow';
      } else {
        return 'white';
      }
    })
    const dbColorRef = firebase.database().ref('colorArray');
    dbColorRef.push(colorTrade);


    if (this.state.colorArray.length > 0) {
      if (this.state.colorArray[0].length === 12) {
        this.dream.classList.toggle("show");
      } else {
        this.dream.classList.remove("show");
      }
    } 
  }

  render() {

    const linearGradient =
      this.state.colorArray.length > 0 ?
      `radial-gradient(circle at 10%, ${this.state.colorArray[0][0]}, ${this.state.colorArray[0][1]}, ${this.state.colorArray[0][2]}, ${this.state.colorArray[0][3]}, ${this.state.colorArray[0][4]}, ${this.state.colorArray[0][5]}, ${this.state.colorArray[0][6]}, ${this.state.colorArray[0][7]}, ${this.state.colorArray[0][8]}, ${this.state.colorArray[0][9]}, ${this.state.colorArray[0][10]}, ${this.state.colorArray[0][11]})`:
      `white`

    const backgroundGradient = {
      background: linearGradient,
      height: '100vh',
    }

    return (
      <main>

        <header className="wrapper">
          <h1>Dream Weaver</h1>
          <a href="#description">About</a>
        </header>

        <div className="description-wrapper" id="description">
          <h3>Hi there brave dreamer!</h3> 
          <p> Dream weaver allows you to record your 12 most haunting / harrowing / enjoyable / exciting / (even NSFW) dreams.  Once you've completed 12 entries click on "See Dream Progression" and you'll be able to see a piece of art populated with colours that corresponds to your dream ratings. (We recommend 1 record a month and seeing your results in a year!)</p>
          <a href="#form">Next</a>
        </div>
  
        <section id="form" className="dream-form">
          <img src="public/assets/angel.png" alt="An angel" className="left-angel"/>
          <img src="public/assets/angel.png" alt="An angel" className="right-angel"/>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="date" >Date</label>
              <input className="date" name="date" type="date" onChange={this.handleChange}/>
              <label htmlFor="dream">My Dream</label>
              <textarea name="dream" placeholder="Your dream...." onChange={this.handleChange}></textarea>
              <div className="dream-rating">
                <p>Negative</p>
                <input type="range" min="0" max="12" name="color" onChange={this.handleChange}/>
                <p>Positive</p>
              </div>
              <input type="submit" value="Record Dream" />
              <p className="notice">*  Scroll Down to See Recorded Dreams  *</p>
            </form>
          </div>
        </section>

        <ul className="dream-record">
            {this.state.dreamRecords.map((dream) => {
            return <DreamForm 
            key={dream.key}
            date={dream.date}
            firebaseKey = {dream.key}
            dream={dream.dream}
            color={dream.color}
            removeDream={this.removeDream} />
          })}
          
        </ul>

        <div className="progression">
        
          <a href="#dreams" onClick = {this.colorTranslator}> See Dream Progression! </a>
        
        </div>



        <div id="dreams" style={backgroundGradient} className="art" ref={ref => this.dream = ref}>
          <h1>MORPHEUS</h1>
        </div>

      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
