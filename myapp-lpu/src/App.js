// import './App.css';
// import React from 'react';

// class App extends React.Component{
//   state={
//     curDT : new Date().toLocaleString(),
//   }
//   render(){
//     return (
//       <div className="App">
//         <p>Current Date And Time : {this.state.curDT}</p>
//       </div>
//   );
// }
// }
// function App(){
//   return (
//     <div classNmae = "App">
//       <div className = "nav">
//         <h1 className='items'>Keeper</h1>
//         </div>
//         <div class="card w-75" >
//   <div class="card-body" >
//     <h5 class="card-title">This is the note title</h5>
//     <p class="card-text">This is the note content.</p>
//   </div>
// </div>
//     </div>
//   )
// }

// export default App;

// express 
// middleware   
// e.g. chat server system 
//  use socketsio
//mongo db

import React from "react";
import EmployeeList from "./EmployeeList";

function App() {
  return (
    <div>
      <h1>Employee Information</h1>
      <EmployeeList />
    </div>
  );
}

export default App;
