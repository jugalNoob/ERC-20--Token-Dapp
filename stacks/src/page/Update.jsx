import React,{useState , useEffect} from 'react'

import { Link,useNavigate } from 'react-router-dom'

// import "./style/form.css"
function Update() {

  const [gen, setGen] = useState();

  const Hashing = () => {
    let hex = `xyz${Math.random().toString(15).slice(2).padEnd(24, '@gmail.com')}`;
    // console.log(hex);
    setGen(hex);
  };

  const navigate=useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
 
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };


  
  const handleValidation = () => {
    let errors = {};



    if (user.name.length < 5 || user.name.length > 15) {
      errors.name = "Name length must be between 5 and 15 characters";
    } else if (!/[A-Z]/.test(user.name)) {
      errors.name = "Name should contain at least one uppercase letter";
    } else if (!/[*\-#&]/.test(user.name)) {
      errors.name = "Name should contain at least one special character";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;

  };

  const [id , setId]=useState()

  const addUserdata = async (e) => {
    e.preventDefault();
  
    try {
      const { name, email } = user;
  
      if (!name || !email) {
        alert("Missing required fields");
      } else {
        const isValid = handleValidation();
  
        if (isValid) {
          const data = await fetch(`/Signup/${id}`, { // Use backticks to include the id dynamically.
            method: "PATCH", // Change "UPDATE" to "PATCH"
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email })
          });
  
          const res = await data.json();
          if (res.status === 201) {
            alert("Check your form");
          } else {
            navigate("/");
            console.log(user);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>


<div className="allform">

<div className="hashing">
        <center>
        <h1 >{gen ? gen : 'connect'}</h1>
    
        <br />
        <button onClick={Hashing}>Generate email!</button>
        </center>
      </div>

<div className='forms'>

  <form>

    <center>
    <h1>Sign up to our platform</h1>

<p>create a new account</p>
<input type="text" name="" id="" onChange={(e)=>setId(e.target.value)} placeholder='enter id'/>
<br />
<br />
    <input type="text" name="name" value={user.name} onChange={handleChange} 
          style={{ borderColor: errors.name && "red" }} placeholder='name'/>
        {/* {errors.name && <p>{errors.name}</p>} */}
<br/>
{errors.name && <span>{errors.name}</span>}
<br />
<input type="email" name="email" value={user.email} onChange={handleChange} placeholder=" email" />
<br/>
<br/>

<br/>

<button onClick={addUserdata}>sigin</button>

    </center>
</form>
</div>

 

  
</div>
    </div>
  )
}

export default Update