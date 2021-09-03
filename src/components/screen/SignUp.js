import React,{useState} from 'react'
import { Link,useHistory } from "react-router-dom";
import M from 'materialize-css'


const SignUp= ()=>{
  const history = useHistory()
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const PostData = ()=>{
    if(!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))){
      M.toast({html: "invalid email",classes:"red black-text" })
      return
    }
    fetch("/signup",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name:name,
      password:password,
      email:email
    })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
          M.toast({html: data.error,classes:"red black-text"})
      }
      else{
        M.toast({html: data.message,classes:"green black-text"})
        history.push('/login')
      }
    })
    .catch(err=>{
      console.log(err)
  })
  } 
return (
  <div className="mycard input-field">
      <div className="card auth-card ">
        <h2>iak-gram</h2>
        <input type="text" placeholder="Name" 
        value = {name}
        onChange={(e)=>setName(e.target.value)} />
        <input type="email" placeholder="Email" 
        value = {email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input type="password" placeholder="Password"
        value = {password} 
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button className="btn waves-effect yellow" 
        onClick={()=>PostData()}   >
          Sign Up
        </button>
        <br />
        <Link to="/Login">Already a User, Login Now</Link>
      </div>
  </div>
)
}


export default SignUp