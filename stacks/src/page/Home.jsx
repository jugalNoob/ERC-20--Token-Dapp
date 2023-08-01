import React,{useContext , useReducer} from 'react'
import { Link } from "react-router-dom";
// import "./styles/home.css"
// import five from "./styles/img/five.png"
// import homes from "./styles/img/home.png"
import { UserContext } from '../App';
import "./style/home.css"
function Home() {

  
  const {state , dispatch}= useContext(UserContext);

  const Render=()=>{

    if(state){

      return(

<>

 <Link to="/">home</Link>
<br />

<Link to="/page">image</Link>
<br />
{/* <Link to="/video">video</Link> */}
<br/>
<Link to="/dash">Dash</Link>
<br />
<Link to="/update">update</Link>
<br />
<Link to="/logout">logout</Link>

{/* //Logout line last row class */}

</>

      )
    }else{

      return(
<>
<Link to="/">home</Link>
<br />

<Link to="/page">upload</Link>
<br />

<Link to="/form">form</Link>
<br />

<Link to="/login">login</Link>
<br />


</>

      )
    }

  }




  return (
    <div>

    

    {/* <div className='nav'>
  
      <Render/>
 
</div> */}



<div className="homeback">



<div className="flexhome">

<div className="icons">
<span class="material-symbols-outlined">
radio_button_checked
</span>
</div>

<div className="head-one">
  <h1>ERC-20 Token</h1>
</div>
<br />

<Render/>
{/* 
<Link to="/">home</Link>
<br />
<Link to="/">form</Link>
<br />
<Link to="/">login</Link>
<br />
<Link to="/">erc-20</Link>
<br />
<Link to="/">logout</Link> */}
<br />

</div>
<div className="second">
  <h1>ethereum buy erc-20 token</h1>
  <p>ERC-20 is a technical standard used for the creation and
     implementation of fungible tokens on the Ethereum blockchain. 
     Fungible tokens are digital assets that are interchangeable
      with each other, meaning one token is equal 
    in value to another token of the same type.</p>
<Link to="/">Login</Link>

</div>
</div>


      </div>
      

  )
}

export default Home