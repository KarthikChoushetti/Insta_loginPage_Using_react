 import { useState } from 'react'
import './Components.css'
 export default function Input(){
      let [Logedin,setLogedin]=useState(true)
      const loginswitch=()=>{
        setLogedin(!Logedin)
      }
    return(
        <div id='abox'>
        <div id="container1">
            <div id="container">
              <h1 className='h'>Instagram</h1>
            <div>

            <input className="User" hidden={Logedin} type="text" name="" placeholder='Mobile Number or Email' id="1" />
            </div>
            <div>
            <input className="pass" hidden={Logedin} type="text" name="" placeholder='Full Name' id="" />

            </div>
            <input className="User" type="text"  autoFocus placeholder="Username,mobile no,or Email" />
          <div>
        <input className="pass" type="password" placeholder="Password" />
        </div>
        <button>{Logedin?"Sign in":"Sign up"}</button>
        <div>

        {Logedin?"Don't have account?":"have an account?"} <span onClick={loginswitch}>{Logedin?"Sign up":"Log in"}</span>
        </div>
        </div>
        </div>
        </div>
    )
}