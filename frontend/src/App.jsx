import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {name,email}
    console.log(user);
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("response data: ",data);
    })
  }
  return (
    <>
      <h1>Hi There</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" /><br />
        <input type="email" name="email" id="" /><br />
        <button style={{background:"red",marginTop:"10px"}} className="btn">submit</button>
      </form>
      {
        users.map(user=><>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
        </>)
      }
    </>
  )
}

export default App
