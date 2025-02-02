import appname from './component/appname'
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return( <center class='todo-container'>
    <appname/>
    <h1>TODO APP</h1>
    <div class="container text-center">
  
  <div class="row">
    <div class="col-6">
      <input type="text" placeholder='enter the list' />
    </div>
    <div class="col-4">
      <input type="date"  />
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success">Add</button>
    </div>
  </div>

  <div class="row">
    <div class="col-6">
    buy milk
    </div>
    <div class="col-4">
     4/10/2024
    </div>
    <div class="col-2">
   <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>

  <div class="row">
    <div class="col-6">
    Go to college
    </div>
    <div class="col-4">
     4/10/2024
    </div>
    <div class="col-2">
   <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>

</div>


  

  </center>
  );
}

export default App;
