import React,{useState,useEffect} from 'react'
import { Link,useAsyncError,useNavigate } from 'react-router-dom'
import { ethers } from "ethers";
import abi from "./ABI.json"
import "./style/page.css"

function Page() {
  
//   const [userData , setUserData]=useState()
//   const navigate=useNavigate()
//   const callAbout=async()=>{

//     try {
//       const res=await fetch("/Cont",{
// method:"GET",
// headers:{
//   Accept:"application/json",
//   "Content-Type": "application/json",
// },
// credentials:"include"

//       })

//       const data=await res.json()
//       console.log(data)
//       setUserData(data)
//       if(!res.status===200){
//         const error=new Error(res.error)
//         throw error;
//       }
      

//     } catch (error) {

//       console.log(error)
//       navigate("/login")
     
      
//     }

//   }
//   useEffect(()=>{
//     callAbout()
//   },[])


const [state , setState]=useState({
  provider:null,
  signer:null,
  address:null
})

//address
const [Addresss, setAddresss]=useState();

const contractAddress="0x423FDed43E4AF6C8780c9F678f0F606c5162259c";

useEffect(()=>{
  const Checker=async()=>{
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const account=await provider.send("eth_requestAccounts", []);
  const signer=provider.getSigner()
  const address = await signer.getAddress()
  // console.log("this is account " + account)
  // console.log("this is signer " + signer.toString())
  // console.log(address)
  setAddresss(address)
  setState({provider , signer , address})   
  }
  
  Checker()
  },[])
  
const [total , setTotal]=useState()




const totalBalnce = async () => {
  const { provider, signer } = state;

  // Check if provider and signer are not null or undefined


  const contractss = new ethers.Contract(contractAddress, abi, provider);

  try {
    const toatals = await contractss.totalSupply();
    console.log(toatals.toString());
    setTotal(toatals.toString());
  } catch (error) {
    console.error('Error fetching totalSupply:', error);
  }
};

useEffect(() => {
  totalBalnce();
}, []);

//Name start 

const [name , setName]=useState()

const tcheckName = async () => {
  const { provider, signer } = state;
  const contractss = new ethers.Contract(contractAddress, abi, provider);
  try {
    const toatals = await contractss.name();
    console.log(toatals.toString());
    setName(toatals.toString());
  } catch (error) {
    console.error('Error fetching totalSupply:', error);
  }
};

useEffect(() => {
  tcheckName();
}, []);


//Check Balnce start row class //////////!SECTION

const [bal , setBal]=useState()

const Balances=async()=>{

  const { provider, signer } = state;
  const contractss = new ethers.Contract(contractAddress, abi, provider);
  try {
    const balance = await contractss.balanceOf(bal);
    console.log(balance.toString());
    alert(balance.toString())
    setBal(balance.toString());
  } catch (error) {
    console.error('Error fetching totalSupply:', error);
}

}
//LINK -  Tranfer //STUB - 

const [to , setTo]=useState()
const [num ,setNum]=useState()


const Tranferss=async()=>{
  const { provider, signer } = state;
  const contractss = new ethers.Contract(contractAddress, abi,signer);
  try {
    const balance = await contractss.transfer(to , num);
    console.log(balance.toString());
    alert(balance.toString())
    // setBal(balance.toString());
  } catch (error) {
    console.error('Error fetching totalSupply:', error);
}

}
//Mint your erc-20


const [mint , setMint]=useState()
const Mintes=async()=>{
  const { provider, signer } = state;
  const contractss = new ethers.Contract(contractAddress, abi,signer);
  try {
    const balance = await contractss.mint(mint);
    console.log(balance.toString());
    alert(balance.toString())
    // setBal(balance.toString());
  } catch (error) {
    console.error('Error fetching totalSupply:', error);
}
}


//Burn erc-20 Token

const [burns , setBurn]=useState()
const Burnsing=async()=>{
  const { provider, signer } = state;
  const contractss = new ethers.Contract(contractAddress, abi,signer);
  try {
    const balance = await contractss.burn(burns);
    console.log(balance.toString());
    alert(balance.toString())
    // setBal(balance.toString());
  } catch (error) {
    console.error('Error fetching totalSupply:', error);
}
}

  return (
    <div>
      <div className="Erc">



      <div className="checktotal">
    
        <h1>this is total balance: {total}</h1>
        
        <br />
      </div>


<div className="checkname">
<h1>name: {name}</h1>
</div>

{/* //Check balance */}

<div className="balancess">

<center>
  <input type="text" name="" id="" onChange={(e)=>setBal(e.target.value)} placeholder='checkBalnce' />
  <br />
  <button onClick={Balances}>balance</button>
  </center>
</div>

{/* 
//tranfer balnce erc-20 */}


<div className="tranferer">
<br />
<br />
<br />
<center>
<input type="text" name="" id="" onChange={(e)=>setTo(e.target.value)} placeholder='add address' />
<br />
<br />
<input type="text" name="" id=""  placeholder='add amount' onChange={(e)=>setNum(e.target.value)}/>
<br />
<br />
<button onClick={Tranferss}>tranfer</button>
</center>

</div>

{/* //Minten{String} failedPath path to the file that failed to load */}

<div className="Mintess">
  <center>


<input type="text" name="" id="" placeholder='mint token' onChange={(e)=>setMint(e.target.value)} />
<br />
<button onClick={ Mintes}>mintes</button>
</center>

</div>

{/* //Burns strat */}

<div className="burness">
  <center>
 
  <input type="text" name="" id="" placeholder='burn token'  onChange={(e)=>setBurn(e.target.value)}/>
  <br />
  <button onClick={Burnsing}>burn</button>
     
  </center>
</div>


</div>


    </div>
  )
}

export default Page