import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Home";



function App() {

  return (
    <Home Route path="/" />
  );
}

export default App;


















































































// import React, { Component } from 'react';

// import './App.css';

// class App extends Component {
// state = {
//     data: null
//   };

//   componentDidMount() {
//     this.callBackendAPI()
//       .then(res => this.setState({ data: res.express }))
//       .catch(err => console.log(err));
//   }
//     // fetching the GET route from the Express server which matches the GET route from server.js
//   callBackendAPI = async () => {
//     const response = await fetch('/express_backend');
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message) 
//     }
//     return body;
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
          
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">{this.state.data}</p>
//       </div>
//     );
//   }
// }

// export default App;