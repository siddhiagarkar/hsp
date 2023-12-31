import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import hospital from './PICS/pharmacy.jpg';
import NClogo from './PICS/NClogo.png';
import { Link } from 'react-router-dom';

export function Fields({activeTab}){
  if (activeTab==='login'){
    return(
      
      <div class="card-body">
      <form>
          <div class="form-row">
          <div class="col">
            <input type="email" class="form-control" placeholder='E-mail ID'/>
          </div>
          <div class="col">
            <input type="password" class="form-control" placeholder='Password'/>
          </div>
          <div class="col">
            <button type="submit" className="btn btn-success btn-block" style={{backgroundColor : '#5aa9e6', borderColor: '#5aa9e6'}}>
            {activeTab === 'login' ? 'Login' : 'Register'}
            </button>
          </div>
          
          </div>
    </form>
      </div>
    )
  }
  else{
    return(
      <div class="card-body">
      <form id='ip-form'>
          <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Full Name"/>
          </div>
          <div class="col">
            <input type="email" class="form-control" placeholder="E-mail ID"/>
          </div>
          <div class="col">
            <input type="password" class="form-control" placeholder="Create Password"/>
          </div>
          <div class="col">
            <input type="password" class="form-control" placeholder="Confirm Password"/>
          </div>
          <div class="col">
            <button type="submit" className="btn btn-success btn-block" style={{backgroundColor : '#5aa9e6', borderColor: '#5aa9e6'}}>
            {activeTab === 'login' ? 'Login' : 'Register'}
            </button>
          </div>

          <br></br>
          <Link to='../doctor' preventScrollReset={true}>Are you a doctor?</Link>
          </div>
      </form>
      </div>
    )
  }
  }

export function DoctorEntry(){
  return(
    <h1>Doc Entry Page!!</h1>
  )
}

export function Front(){
    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return(
        <div>
        <div style={{display:'flex', justifyContent:'center'}}>
      <img src={NClogo} alt="Logo" style={{width:'150px'}}/>
      </div>

    <div className='bbb'>
      <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <button
           className={`tab ${activeTab === 'login' ? 'active' : ''} nav-link`}
           onClick={() => handleTabChange('login')}
         >
           Login
         </button>
      </li>
      <li class="nav-item">
        <button
           className={`tab ${activeTab === 'register' ? 'active' : ''} nav-link`}
           onClick={() => handleTabChange('register')}
         >
           Register
         </button>
      </li>
    </ul>
  </div>

  <div style={{display:'flex', flexDirection:'row'}}>

  <img src={hospital} alt='hospital' style={{width:'400px', height:'320px'}}></img>
  <Fields activeTab={activeTab}></Fields>
  </div>

</div>
    </div>
    </div>
    )
}

